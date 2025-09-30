package com.haidang.mobile_printer;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.hardware.usb.UsbDevice;
import android.util.Base64;
import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import java.util.List;
import net.posprinter.CPCLConst;
import net.posprinter.CPCLPrinter;
import net.posprinter.IConnectListener;
import net.posprinter.IDeviceConnection;
import net.posprinter.POSConnect;
import net.posprinter.POSConst;
import net.posprinter.POSPrinter;
import net.posprinter.model.PTable;
import net.posprinter.model.UdpDevice;
import net.posprinter.posprinterface.IDataCallback;
import net.posprinter.posprinterface.IStatusCallback;
import net.posprinter.posprinterface.UdpCallback;
import org.json.JSONArray;
import org.json.JSONException;

@CapacitorPlugin(name = "VhPrinterAndroidPosUsb")
public class VhPrinterAndroidPosUsbPlugin extends Plugin {

    private IDeviceConnection curConnect;
    private POSPrinter printer;
    private CPCLPrinter cpclPrinter;

    private IConnectListener connectListener = (code, connInfo, msg) -> {
        JSObject ret = new JSObject();
        ret.put("code", code);
        ret.put("connInfo", connInfo);
        ret.put("msg", msg);

        switch (code) {
            case POSConnect.CONNECT_SUCCESS:
                ret.put("status", "CONNECT_SUCCESS");
                break;
            case POSConnect.CONNECT_FAIL:
                ret.put("status", "CONNECT_FAIL");
                break;
            case POSConnect.CONNECT_INTERRUPT:
                ret.put("status", "CONNECT_INTERRUPT");
                break;
            case POSConnect.SEND_FAIL:
                ret.put("status", "SEND_FAIL");
                break;
            case POSConnect.USB_DETACHED:
                ret.put("status", "USB_DETACHED");
                break;
            case POSConnect.USB_ATTACHED:
                ret.put("status", "USB_ATTACHED");
                break;
            default:
                ret.put("status", "UNKNOWN");
                break;
        }

        notifyListeners("connectionStatus", ret);
    };

    @Override
    public void load() {
        super.load();
        // Khởi tạo thư viện POSConnect khi plugin được tải
        POSConnect.init(getContext());
    }

    @PluginMethod
    public void searchUsb(PluginCall call) {
        try {
            List<String> usbNames = POSConnect.getUsbDevices(getContext());
            JSObject ret = new JSObject();
            ret.put("devices", new JSONArray(usbNames));
            call.resolve(ret);
        } catch (Exception e) {
            call.reject("Failed to search USB devices", e);
        }
    }

    @PluginMethod
    public void connectUSB(PluginCall call) {
        String pathName = call.getString("pathName");
        if (pathName == null) {
            call.reject("Must provide a path name");
            return;
        }

        try {
            if (curConnect != null)
                curConnect.close();
            curConnect = POSConnect.createDevice(POSConnect.DEVICE_TYPE_USB);
            curConnect.connect(pathName, connectListener);
            printer = new POSPrinter(curConnect);
            cpclPrinter = new CPCLPrinter(curConnect);
            call.resolve();
        } catch (Exception e) {
            call.reject("Connection failed", e);
        }
    }

    @PluginMethod
    public void connectNet(PluginCall call) {
        String ipAddress = call.getString("ipAddress");
        if (ipAddress == null) {
            call.reject("Must provide an IP address");
            return;
        }

        try {
            if (curConnect != null)
                curConnect.close();
            curConnect = POSConnect.createDevice(POSConnect.DEVICE_TYPE_ETHERNET);
            curConnect.connect(ipAddress, connectListener);
            printer = new POSPrinter(curConnect);
            cpclPrinter = new CPCLPrinter(curConnect);
            call.resolve();
        } catch (Exception e) {
            call.reject("Connection failed", e);
        }
    }

    @PluginMethod
    public void connectBt(PluginCall call) {
        String macAddress = call.getString("macAddress");
        if (macAddress == null) {
            call.reject("Must provide a MAC address");
            return;
        }

        try {
            if (curConnect != null)
                curConnect.close();
            curConnect = POSConnect.createDevice(POSConnect.DEVICE_TYPE_BLUETOOTH);
            curConnect.connect(macAddress, connectListener);
            printer = new POSPrinter(curConnect);
            cpclPrinter = new CPCLPrinter(curConnect);
            call.resolve();
        } catch (Exception e) {
            call.reject("Connection failed", e);
        }
    }

    @PluginMethod
    public void connectMAC(PluginCall call) {
        String macAddress = call.getString("macAddress");
        if (macAddress == null) {
            call.reject("Must provide a MAC address");
            return;
        }

        try {
            if (curConnect != null)
                curConnect.close();
            curConnect = POSConnect.connectMac(macAddress, connectListener);
            printer = new POSPrinter(curConnect);
            cpclPrinter = new CPCLPrinter(curConnect);
            call.resolve();
        } catch (Exception e) {
            call.reject("Connection failed", e);
        }
    }

    @PluginMethod
    public void connectSerial(PluginCall call) {
        String port = call.getString("port");
        String boudrate = call.getString("boudrate");
        if (port == null || boudrate == null) {
            call.reject("Must provide port and boudrate");
            return;
        }

        try {
            if (curConnect != null)
                curConnect.close();
            curConnect = POSConnect.createDevice(POSConnect.DEVICE_TYPE_SERIAL);
            curConnect.connect(port + "," + boudrate, connectListener);
            printer = new POSPrinter(curConnect);
            cpclPrinter = new CPCLPrinter(curConnect);
            call.resolve();
        } catch (Exception e) {
            call.reject("Connection failed", e);
        }
    }

    @PluginMethod
    public void printText(PluginCall call) {
        String text = call.getString("text");
        if (text == null) {
            call.reject("Must provide text to print");
            return;
        }

        try {
            printer.initializePrinter().printString(text).feedLine(5).cutHalfAndFeed(1);
            call.resolve();
        } catch (Exception e) {
            call.reject("Print failed", e);
        }
    }

    @PluginMethod
    public void printBarcode(PluginCall call) {
        String data = call.getString("data");
        int symbology = call.getInt("symbology", POSConst.BCS_ITF);
        int width = call.getInt("width", 2);
        int height = call.getInt("height", 70);
        int alignment = call.getInt("alignment", POSConst.ALIGNMENT_CENTER);

        if (data == null) {
            call.reject("Must provide barcode data");
            return;
        }

        try {
            printer.initializePrinter().printBarCode(data, symbology, width, height, alignment).feedLine(5)
                    .cutHalfAndFeed(1);
            call.resolve();
        } catch (Exception e) {
            call.reject("Print failed", e);
        }
    }

    @PluginMethod
    public void printQRCode(PluginCall call) {
        String content = call.getString("content");
        int moduleSize = call.getInt("moduleSize", 8); // Kích thước của module QR
        int ecLevel = call.getInt("ecLevel", 48); // Mức độ sửa lỗi
        int alignment = call.getInt("alignment", POSConst.ALIGNMENT_CENTER);

        if (content == null) {
            call.reject("Must provide QR code content");
            return;
        }

        try {
            printer.initializePrinter().printQRCode(content, moduleSize, ecLevel, alignment).feedLine(5)
                    .cutHalfAndFeed(1);
            call.resolve();
        } catch (Exception e) {
            call.reject("Print failed", e);
        }
    }

    @PluginMethod
    public void printPicCode(PluginCall call) {
        String base64Image = call.getString("image");
        int width = call.getInt("width", 512);
        if (base64Image == null) {
            call.reject("Must provide an image to print");
            return;
        }

        try {
            byte[] decodedString = Base64.decode(base64Image, Base64.DEFAULT);
            Bitmap decodedByte = BitmapFactory.decodeByteArray(decodedString, 0, decodedString.length);
            printer.initializePrinter().printBitmap(decodedByte, POSConst.ALIGNMENT_CENTER, width).feedLine(5)
                    .cutHalfAndFeed(1);
            call.resolve();
        } catch (Exception e) {
            call.reject("Print failed", e);
        }
    }

    @PluginMethod
    public void getPrinterStatus(PluginCall call) {
        try {
            printer.printerStatus(
                    status -> {
                        JSObject ret = new JSObject();
                        ret.put("status", status);
                        call.resolve(ret);
                    });
        } catch (Exception e) {
            call.reject("Failed to get printer status", e);
        }
    }

    @PluginMethod
    public void openCashBox(PluginCall call) {
        int pin = call.getInt("pin", POSConst.PIN_TWO);
        try {
            printer.openCashBox(pin);
            call.resolve();
        } catch (Exception e) {
            call.reject("Failed to open cash box", e);
        }
    }

    @PluginMethod
    public void printTable(PluginCall call) {
        try {
            PTable table = convertJSONToPTable(call.getObject("table"));
            printer.initializePrinter().printTable(table).feedLine(5).cutHalfAndFeed(1);
            call.resolve();
        } catch (Exception e) {
            call.reject("Failed to print table", e);
        }
    }

    @PluginMethod
    public void cpclGetPrinterStatus(PluginCall call) {
        try {
            cpclPrinter.printerStatus(
                    1000,
                    status -> {
                        String str;
                        switch (status) {
                            case 0:
                                str = "normal";
                                break;
                            case 1:
                                str = "Head opened";
                                break;
                            case 2:
                                str = "Paper Jam";
                                break;
                            case 3:
                                str = "Paper Jam and head opened";
                                break;
                            case 4:
                                str = "Out of paper";
                                break;
                            case 5:
                                str = "Out of paper and head opened";
                                break;
                            case 8:
                                str = "Out of ribbon";
                                break;
                            case 9:
                                str = "Out of ribbon and head opened";
                                break;
                            case 10:
                                str = "Out of ribbon and paper jam";
                                break;
                            case 11:
                                str = "Out of ribbon, paper jam and head opened";
                                break;
                            case 12:
                                str = "Out of ribbon and out of paper";
                                break;
                            case 13:
                                str = "Out of ribbon, out of paper and head opened";
                                break;
                            case 16:
                                str = "Pause";
                                break;
                            case 32:
                                str = "Printing";
                                break;
                            default:
                                str = "Other error";
                                break;
                        }
                        JSObject ret = new JSObject();
                        ret.put("status", str);
                        call.resolve(ret);
                    });
        } catch (Exception e) {
            call.reject("Failed to get CPCL printer status", e);
        }
    }

    @PluginMethod
    public void exit(PluginCall call) {
        try {
            POSConnect.exit();
            call.resolve();
        } catch (Exception e) {
            call.reject("Failed to exit", e);
        }
    }

    @PluginMethod
    public void getAppCtx(PluginCall call) {
        try {
            Context context = POSConnect.getAppCtx();
            JSObject ret = new JSObject();
            ret.put("context", context != null ? context.toString() : "null");
            call.resolve(ret);
        } catch (Exception e) {
            call.reject("Failed to get app context", e);
        }
    }

    @PluginMethod
    public void getUsbDevice(PluginCall call) {
        try {
            List<UsbDevice> usbDevices = POSConnect.getUsbDevice(getContext());
            JSONArray deviceArray = new JSONArray();
            for (UsbDevice device : usbDevices) {
                deviceArray.put(device.getDeviceName());
            }
            JSObject ret = new JSObject();
            ret.put("devices", deviceArray);
            call.resolve(ret);
        } catch (Exception e) {
            call.reject("Failed to get USB devices", e);
        }
    }

    @PluginMethod
    public void getSerialPort(PluginCall call) {
        try {
            List<String> serialPorts = POSConnect.getSerialPort();
            JSObject ret = new JSObject();
            ret.put("ports", new JSONArray(serialPorts));
            call.resolve(ret);
        } catch (Exception e) {
            call.reject("Failed to get serial ports", e);
        }
    }

    @PluginMethod
    public void getCopyRight(PluginCall call) {
        try {
            String copyRight = POSConnect.GetCopyRight();
            JSObject ret = new JSObject();
            ret.put("copyRight", copyRight);
            call.resolve(ret);
        } catch (Exception e) {
            call.reject("Failed to get copyright info", e);
        }
    }

    @PluginMethod
    public void searchNetDevice(PluginCall call) {
        try {
            POSPrinter.searchNetDevice(
                    new UdpCallback() {
                        @Override
                        public void receive(UdpDevice device) {
                            JSObject ret = new JSObject();
                            JSONArray deviceArray = new JSONArray();
                            JSObject deviceObj = new JSObject();
                            deviceObj.put("ip", device.getIpStr());
                            deviceObj.put("mac", device.getMacStr());
                            deviceArray.put(deviceObj);
                            ret.put("devices", deviceArray);
                            call.resolve(ret);
                        }
                    });
        } catch (Exception e) {
            call.reject("Failed to search network devices", e);
        }
    }

    @PluginMethod
    public void udpNetConfig(PluginCall call) {
        try {
            JSArray macAddressArray = call.getArray("macAddress");
            JSArray ipAddressArray = call.getArray("ipAddress");
            JSArray maskArray = call.getArray("mask");
            JSArray gatewayArray = call.getArray("gateway");
            boolean dhcp = call.getBoolean("dhcp", false);

            byte[] macAddress = new byte[macAddressArray.length()];
            byte[] ipAddress = new byte[ipAddressArray.length()];
            byte[] mask = new byte[maskArray.length()];
            byte[] gateway = new byte[gatewayArray.length()];

            for (int i = 0; i < macAddressArray.length(); i++) {
                macAddress[i] = (byte) macAddressArray.getInt(i);
            }
            for (int i = 0; i < ipAddressArray.length(); i++) {
                ipAddress[i] = (byte) ipAddressArray.getInt(i);
            }
            for (int i = 0; i < maskArray.length(); i++) {
                mask[i] = (byte) maskArray.getInt(i);
            }
            for (int i = 0; i < gatewayArray.length(); i++) {
                gateway[i] = (byte) gatewayArray.getInt(i);
            }

            POSPrinter.udpNetConfig(macAddress, ipAddress, mask, gateway, dhcp);
            call.resolve();
        } catch (Exception e) {
            call.reject("Failed to configure UDP network", e);
        }
    }

    @PluginMethod
    public void feedDot(PluginCall call) {
        try {
            int dotCount = call.getInt("dotCount", 0);
            printer.feedDot(dotCount);
            call.resolve();
        } catch (Exception e) {
            call.reject("Failed to feed dot", e);
        }
    }

    @PluginMethod
    public void cutPaper(PluginCall call) {
        try {
            int model = call.getInt("model", 0);
            printer.cutPaper(model);
            call.resolve();
        } catch (Exception e) {
            call.reject("Failed to cut paper", e);
        }
    }

    @PluginMethod
    public void cutHalfAndFeed(PluginCall call) {
        try {
            int distance = call.getInt("distance", 0);
            printer.cutHalfAndFeed(distance);
            call.resolve();
        } catch (Exception e) {
            call.reject("Failed to cut half and feed", e);
        }
    }

    @PluginMethod
    public void setPrintArea(PluginCall call) {
        try {
            int x = call.getInt("x", 0);
            int y = call.getInt("y", 0);
            int width = call.getInt("width", 0);
            int height = call.getInt("height", 0);
            printer.setPrintArea(x, y, width, height);
            call.resolve();
        } catch (Exception e) {
            call.reject("Failed to set print area", e);
        }
    }

    @PluginMethod
    public void setPageModel(PluginCall call) {
        try {
            boolean isOpen = call.getBoolean("isOpen", false);
            printer.setPageModel(isOpen);
            call.resolve();
        } catch (Exception e) {
            call.reject("Failed to set page model", e);
        }
    }

    @PluginMethod
    public void setPrintDirection(PluginCall call) {
        try {
            int direction = call.getInt("direction", 0);
            printer.setPrintDirection(direction);
            call.resolve();
        } catch (Exception e) {
            call.reject("Failed to set print direction", e);
        }
    }

    @PluginMethod
    public void setAbsoluteHorizontal(PluginCall call) {
        try {
            int position = call.getInt("position", 0);
            printer.setAbsoluteHorizontal(position);
            call.resolve();
        } catch (Exception e) {
            call.reject("Failed to set absolute horizontal", e);
        }
    }

    @PluginMethod
    public void setRelativeHorizontal(PluginCall call) {
        try {
            int position = call.getInt("position", 0);
            printer.setRelativeHorizontal(position);
            call.resolve();
        } catch (Exception e) {
            call.reject("Failed to set relative horizontal", e);
        }
    }

    @PluginMethod
    public void setAbsoluteVertical(PluginCall call) {
        try {
            int position = call.getInt("position", 0);
            printer.setAbsoluteVertical(position);
            call.resolve();
        } catch (Exception e) {
            call.reject("Failed to set absolute vertical", e);
        }
    }

    @PluginMethod
    public void setRelativeVertical(PluginCall call) {
        try {
            int position = call.getInt("position", 0);
            printer.setRelativeVertical(position);
            call.resolve();
        } catch (Exception e) {
            call.reject("Failed to set relative vertical", e);
        }
    }

    @PluginMethod
    public void setTextStyle(PluginCall call) {
        try {
            int attribute = call.getInt("attribute", 0);
            int textSize = call.getInt("textSize", 0);
            printer.setTextStyle(attribute, textSize);
            call.resolve();
        } catch (Exception e) {
            call.reject("Failed to set text style", e);
        }
    }

    @PluginMethod
    public void setAlignment(PluginCall call) {
        try {
            int alignment = call.getInt("alignment", 0);
            printer.setAlignment(alignment);
            call.resolve();
        } catch (Exception e) {
            call.reject("Failed to set alignment", e);
        }
    }

    @PluginMethod
    public void downloadNVImage(PluginCall call) {
        try {
            String imagePaths = call.getString("imagePaths");
            int imageWidth = call.getInt("imageWidth", 0);
            printer.downloadNVImage(imagePaths, imageWidth);
            call.resolve();
        } catch (Exception e) {
            call.reject("Failed to download NV image", e);
        }
    }

    @PluginMethod
    public void clearNVImage(PluginCall call) {
        try {
            printer.clearNVImage();
            call.resolve();
        } catch (Exception e) {
            call.reject("Failed to clear NV image", e);
        }
    }

    @PluginMethod
    public void printNVImage(PluginCall call) {
        try {
            int index = call.getInt("index", 0);
            int model = call.getInt("model", 0);
            printer.printNVImage(index, model);
            call.resolve();
        } catch (Exception e) {
            call.reject("Failed to print NV image", e);
        }
    }

    @PluginMethod
    public void initializePrinter(PluginCall call) {
        try {
            printer.initializePrinter();
            call.resolve();
        } catch (Exception e) {
            call.reject("Failed to initialize printer", e);
        }
    }

    @PluginMethod
    public void setLineSpacing(PluginCall call) {
        try {
            int space = call.getInt("space", 0);
            printer.setLineSpacing(space);
            call.resolve();
        } catch (Exception e) {
            call.reject("Failed to set line spacing", e);
        }
    }

    @PluginMethod
    public void setTurnUpsideDownMode(PluginCall call) {
        try {
            boolean on = call.getBoolean("on", false);
            printer.setTurnUpsideDownMode(on);
            call.resolve();
        } catch (Exception e) {
            call.reject("Failed to set turn upside down mode", e);
        }
    }

    @PluginMethod
    public void selectCodePage(PluginCall call) {
        try {
            int page = call.getInt("page", 0);
            printer.selectCodePage(page);
            call.resolve();
        } catch (Exception e) {
            call.reject("Failed to select code page", e);
        }
    }

    @PluginMethod
    public void selectCharacterFont(PluginCall call) {
        try {
            int font = call.getInt("font", 0);
            printer.selectCharacterFont(font);
            call.resolve();
        } catch (Exception e) {
            call.reject("Failed to select character font", e);
        }
    }

    @PluginMethod
    public void setCharRightSpace(PluginCall call) {
        try {
            int spaceInt = call.getInt("space", 0); // Lấy giá trị int từ PluginCall
            byte space = (byte) spaceInt; // Ép kiểu từ int sang byte
            printer.setCharRightSpace(space);
            call.resolve();
        } catch (Exception e) {
            call.reject("Failed to set char right space", e);
        }
    }

    @PluginMethod
    public void openOrCloseAutoReturnPrintState(PluginCall call) {
        try {
            int info = call.getInt("info", 0);
            printer.openOrCloseAutoReturnPrintState(info);
            call.resolve();
        } catch (Exception e) {
            call.reject("Failed to open or close auto return print state", e);
        }
    }

    @PluginMethod
    public void wifiConfig(PluginCall call) {
        try {
            JSArray ipArray = call.getArray("ip");
            JSArray maskArray = call.getArray("mask");
            JSArray gatewayArray = call.getArray("gateway");
            String ssid = call.getString("ssid");
            String password = call.getString("password");
            int encryptInt = call.getInt("encrypt", 0); // Lấy giá trị int từ PluginCall
            byte encrypt = (byte) encryptInt; // Ép kiểu từ int sang byte

            byte[] ip = new byte[ipArray.length()];
            byte[] mask = new byte[maskArray.length()];
            byte[] gateway = new byte[gatewayArray.length()];

            for (int i = 0; i < ipArray.length(); i++) {
                ip[i] = (byte) ipArray.getInt(i);
            }
            for (int i = 0; i < maskArray.length(); i++) {
                mask[i] = (byte) maskArray.getInt(i);
            }
            for (int i = 0; i < gatewayArray.length(); i++) {
                gateway[i] = (byte) gatewayArray.getInt(i);
            }

            printer.wifiConfig(ip, mask, gateway, ssid, password, encrypt);
            call.resolve();
        } catch (Exception e) {
            call.reject("Failed to configure wifi", e);
        }
    }

    @PluginMethod
    public void setIp(PluginCall call) {
        try {
            JSArray ipArray = call.getArray("ip");
            byte[] ip = new byte[ipArray.length()];

            for (int i = 0; i < ipArray.length(); i++) {
                ip[i] = (byte) ipArray.getInt(i);
            }

            printer.setIp(ip);
            call.resolve();
        } catch (Exception e) {
            call.reject("Failed to set IP", e);
        }
    }

    @PluginMethod
    public void setMask(PluginCall call) {
        try {
            JSArray maskArray = call.getArray("mask");
            byte[] mask = new byte[maskArray.length()];

            for (int i = 0; i < maskArray.length(); i++) {
                mask[i] = (byte) maskArray.getInt(i);
            }

            printer.setMask(mask);
            call.resolve();
        } catch (Exception e) {
            call.reject("Failed to set mask", e);
        }
    }

    @PluginMethod
    public void setGateway(PluginCall call) {
        try {
            JSArray gatewayArray = call.getArray("gateway");
            byte[] gateway = new byte[gatewayArray.length()];

            for (int i = 0; i < gatewayArray.length(); i++) {
                gateway[i] = (byte) gatewayArray.getInt(i);
            }

            printer.setGateway(gateway);
            call.resolve();
        } catch (Exception e) {
            call.reject("Failed to set gateway", e);
        }
    }

    @PluginMethod
    public void setNetAll(PluginCall call) {
        try {
            JSArray ipArray = call.getArray("ip");
            JSArray maskArray = call.getArray("mask");
            JSArray gatewayArray = call.getArray("gateway");
            boolean dhcpIsOpen = call.getBoolean("dhcpIsOpen", false);

            byte[] ip = new byte[ipArray.length()];
            byte[] mask = new byte[maskArray.length()];
            byte[] gateway = new byte[gatewayArray.length()];

            for (int i = 0; i < ipArray.length(); i++) {
                ip[i] = (byte) ipArray.getInt(i);
            }
            for (int i = 0; i < maskArray.length(); i++) {
                mask[i] = (byte) maskArray.getInt(i);
            }
            for (int i = 0; i < gatewayArray.length(); i++) {
                gateway[i] = (byte) gatewayArray.getInt(i);
            }

            printer.setNetAll(ip, mask, gateway, dhcpIsOpen);
            call.resolve();
        } catch (Exception e) {
            call.reject("Failed to set net all", e);
        }
    }

    @PluginMethod
    public void setBluetooth(PluginCall call) {
        try {
            String name = call.getString("name");
            String pin = call.getString("pin");
            printer.setBluetooth(name, pin);
            call.resolve();
        } catch (Exception e) {
            call.reject("Failed to set Bluetooth", e);
        }
    }

    @PluginMethod
    public void getSerialNumber(PluginCall call) {
        try {
            printer.getSerialNumber(
                    new IDataCallback() {
                        @Override
                        public void receive(byte[] data) {
                            String serialNumber = new String(data);
                            JSObject ret = new JSObject();
                            ret.put("serialNumber", serialNumber);
                            call.resolve(ret);
                        }
                    });
        } catch (Exception e) {
            call.reject("Failed to get serial number", e);
        }
    }

    private PTable convertJSONToPTable(JSObject tableJSON) {
        try {
            // Bắt ngoại lệ JSONException
            JSONArray headersArray = tableJSON.getJSONArray("headers");
            JSONArray widthsArray = tableJSON.getJSONArray("widths");
            JSONArray alignmentsArray = tableJSON.getJSONArray("alignments");

            // Chuyển đổi từ JSONArray sang mảng
            String[] headers = new String[headersArray.length()];
            Integer[] widths = new Integer[widthsArray.length()];
            Integer[] alignments = new Integer[alignmentsArray.length()];

            for (int i = 0; i < headersArray.length(); i++) {
                headers[i] = headersArray.getString(i);
                widths[i] = widthsArray.getInt(i);
                alignments[i] = alignmentsArray.getInt(i);
            }

            // Tạo đối tượng PTable bằng constructor phù hợp
            return new PTable(headers, widths, alignments);
        } catch (JSONException e) {
            // Xử lý ngoại lệ JSONException
            e.printStackTrace();
            return null; // Hoặc có thể ném lại ngoại lệ hoặc xử lý tùy theo yêu cầu của bạn
        }
    }
}
