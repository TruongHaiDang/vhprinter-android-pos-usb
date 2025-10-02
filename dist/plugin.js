var capacitorMobilePrinter = (function (exports, core) {
    'use strict';

    const ALIGNMENT = {
        LEFT: 0,
        CENTER: 1,
        RIGHT: 2,
    };
    const FONT = {
        DEFAULT: 0,
        FONTB: 1,
        BOLD: 8,
        REVERSE: 16,
        UNDERLINE: 128,
        UNDERLINE2: 256,
    };
    const TEXT_WIDTH = {
        WIDTH_1: 0,
        WIDTH_2: 16,
        WIDTH_3: 32,
        WIDTH_4: 48,
        WIDTH_5: 64,
        WIDTH_6: 80,
        WIDTH_7: 96,
        WIDTH_8: 112,
    };
    const TEXT_HEIGHT = {
        HEIGHT_1: 0,
        HEIGHT_2: 1,
        HEIGHT_3: 2,
        HEIGHT_4: 3,
        HEIGHT_5: 4,
        HEIGHT_6: 5,
        HEIGHT_7: 6,
        HEIGHT_8: 7,
    };
    const BITMAP = {
        NORMAL: 0,
        WIDTH_DOUBLE: 1,
        HEIGHT_DOUBLE: 2,
        WIDTH_HEIGHT_DOUBLE: 3,
    };
    const SYMBOLOGY = {
        UPCA: 65,
        UPCE: 66,
        EAN8: 68,
        EAN13: 67,
        JAN8: 68,
        JAN13: 67,
        ITF: 70,
        CODABAR: 71,
        CODE39: 69,
        CODE93: 72,
        CODE128: 73,
    };
    const HRI_TEXT = {
        NONE: 0,
        ABOVE: 1,
        BELOW: 2,
        BOTH: 3,
    };
    const QRCODE_EC_LEVEL = {
        L: 48,
        M: 49,
        Q: 50,
        H: 51,
    };
    const CUT = {
        ALL: 0,
        HALF: 1,
    };
    const DEVICE = {
        SIZE_58: 1,
        SIZE_80: 2,
        SIZE_76: 3,
    };
    const PIN = {
        TWO: 0,
        FIVE: 1,
    };
    const STATUS = {
        UNKNOWN: -1,
        NORMAL: 0,
        COVEROPEN: 16,
        PRESS_FEED: 8,
        PAPEREMPTY: 32,
        PRINTER_ERR: 64,
        CASH_OPEN: 0,
        CASH_CLOSE: 1,
        TYPE_PRINT: 1,
        TYPE_OFFLINE: 2,
        TYPE_ERR: 3,
        TYPE_PAPER: 4,
        CONNECT_SUCCESS: 1,
        CONNECT_FAIL: 2,
        SEND_FAIL: 3,
        CONNECT_INTERRUPT: 4,
        USB_ATTACHED: 5,
        USB_DETACHED: 6,
        BLUETOOTH_INTERRUPT: 7,
        CONNECT: 1,
        DISCONNECT: 0,
    };
    const DIRECTION = {
        LEFT_TOP: 0,
        LEFT_BOTTOM: 1,
        RIGHT_BOTTOM: 2,
        RIGHT_TOP: 3,
    };
    const DENSITY = {
        SINGLE_8: 0,
        DOUBLE_8: 1,
        SINGLE_24: 32,
        DOUBLE_24: 33,
    };
    const SPACE = {
        DEFAULT: -1,
    };
    const CODE_PAGE = {
        PC437: 0,
        KATAKANA: 1,
        PC850: 2,
        PC860: 3,
        PC863: 4,
        PC865: 5,
        WEST_EUROPE: 6,
        GREEK: 7,
        HEBREW: 8,
        EAST_EUROPE: 9,
        IRAN: 10,
        WPC1252: 16,
        PC866: 17,
        PC852: 18,
        PC858: 19,
    };
    const FONT_TYPE = {
        STANDARD: 0,
        COMPRESS: 1,
    };
    const ENCRYPTION = {
        NULL: 0,
        WEP64: 1,
        WEP128: 2,
        WPA_AES_PSK: 3,
        WPA_TKIP_PSK: 4,
        WPA_TKIP_AES_PSK: 5,
        WPA2_AES_PSK: 6,
        WPA2_TKIP: 7,
        WPA2_TKIP_AES_PSK: 8,
        WPA_WPA2_MIXED_MODE: 9,
    };

    const VhPrinterAndroidPosUsb = core.registerPlugin('VhPrinterAndroidPosUsb', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.VhPrinterAndroidPosUsbWeb()),
    });

    class VhPrinterAndroidPosUsbWeb extends core.WebPlugin {
        async echo(options) {
            console.log('ECHO', options);
            return options;
        }
        async searchUsb() {
            console.log('searchUsb is not supported on web.');
            throw this.unimplemented('searchUsb is not supported on web.');
        }
        async connectUSB(options) {
            console.log('connectUSB is not supported on web.', JSON.stringify(options));
            throw this.unimplemented('connectUSB is not supported on web.');
        }
        async connectNet(options) {
            console.log('connectNet is not supported on web.', JSON.stringify(options));
            throw this.unimplemented('connectNet is not supported on web.');
        }
        async connectBt(options) {
            console.log('connectBt is not supported on web.', JSON.stringify(options));
            throw this.unimplemented('connectBt is not supported on web.');
        }
        async connectMAC(options) {
            console.log('connectMAC is not supported on web.', JSON.stringify(options));
            throw this.unimplemented('connectMAC is not supported on web.');
        }
        async connectSerial(options) {
            console.log('connectSerial is not supported on web.', JSON.stringify(options));
            throw this.unimplemented('connectSerial is not supported on web.');
        }
        async printText(options) {
            console.log('printText is not supported on web.', JSON.stringify(options));
            throw this.unimplemented('printText is not supported on web.');
        }
        async printBarcode(options) {
            console.log('printBarcode is not supported on web.', JSON.stringify(options));
            throw this.unimplemented('printBarcode is not supported on web.');
        }
        async printQRCode(options) {
            console.log('printQRCode is not supported on web.', JSON.stringify(options));
            throw this.unimplemented('printQRCode is not supported on web.');
        }
        async printPicCode(options) {
            console.log('printPicCode is not supported on web.', JSON.stringify(options));
            throw this.unimplemented('printPicCode is not supported on web.');
        }
        async getPrinterStatus() {
            console.log('getPrinterStatus is not supported on web.');
            throw this.unimplemented('getPrinterStatus is not supported on web.');
        }
        async openCashBox(options) {
            console.log('openCashBox is not supported on web.', JSON.stringify(options));
            throw this.unimplemented('openCashBox is not supported on web.');
        }
        async printTable(options) {
            console.log('printTable is not supported on web.', JSON.stringify(options));
            throw this.unimplemented('printTable is not supported on web.');
        }
        async cpclGetPrinterStatus() {
            console.log('cpclGetPrinterStatus is not supported on web.');
            throw this.unimplemented('cpclGetPrinterStatus is not supported on web.');
        }
        async exit() {
            console.log('exit is not supported on web.');
            throw this.unimplemented('exit is not supported on web.');
        }
        async getAppCtx() {
            console.log('getAppCtx is not supported on web.');
            throw this.unimplemented('getAppCtx is not supported on web.');
        }
        async getUsbDevice() {
            console.log('getUsbDevice is not supported on web.');
            throw this.unimplemented('getUsbDevice is not supported on web.');
        }
        async getSerialPort() {
            console.log('getSerialPort is not supported on web.');
            throw this.unimplemented('getSerialPort is not supported on web.');
        }
        async getCopyRight() {
            console.log('getCopyRight is not supported on web.');
            throw this.unimplemented('getCopyRight is not supported on web.');
        }
        async searchNetDevice() {
            console.log('searchNetDevice is not supported on web.');
            throw this.unimplemented('searchNetDevice is not supported on web.');
        }
        async udpNetConfig(options) {
            console.log('udpNetConfig is not supported on web.', JSON.stringify(options));
            throw this.unimplemented('udpNetConfig is not supported on web.');
        }
        async feedDot(options) {
            console.log('feedDot is not supported on web.', JSON.stringify(options));
            throw this.unimplemented('feedDot is not supported on web.');
        }
        async cutPaper(options) {
            console.log('cutPaper is not supported on web.', JSON.stringify(options));
            throw this.unimplemented('cutPaper is not supported on web.');
        }
        async cutHalfAndFeed(options) {
            console.log('cutHalfAndFeed is not supported on web.', JSON.stringify(options));
            throw this.unimplemented('cutHalfAndFeed is not supported on web.');
        }
        async setPrintArea(options) {
            console.log('setPrintArea is not supported on web.', JSON.stringify(options));
            throw this.unimplemented('setPrintArea is not supported on web.');
        }
        async setPageModel(options) {
            console.log('setPageModel is not supported on web.', JSON.stringify(options));
            throw this.unimplemented('setPageModel is not supported on web.');
        }
        async setPrintDirection(options) {
            console.log('setPrintDirection is not supported on web.', JSON.stringify(options));
            throw this.unimplemented('setPrintDirection is not supported on web.');
        }
        async setAbsoluteHorizontal(options) {
            console.log('setAbsoluteHorizontal is not supported on web.', JSON.stringify(options));
            throw this.unimplemented('setAbsoluteHorizontal is not supported on web.');
        }
        async setRelativeHorizontal(options) {
            console.log('setRelativeHorizontal is not supported on web.', JSON.stringify(options));
            throw this.unimplemented('setRelativeHorizontal is not supported on web.');
        }
        async setAbsoluteVertical(options) {
            console.log('setAbsoluteVertical is not supported on web.', JSON.stringify(options));
            throw this.unimplemented('setAbsoluteVertical is not supported on web.');
        }
        async setRelativeVertical(options) {
            console.log('setRelativeVertical is not supported on web.', JSON.stringify(options));
            throw this.unimplemented('setRelativeVertical is not supported on web.');
        }
        async setTextStyle(options) {
            console.log('setTextStyle is not supported on web.', JSON.stringify(options));
            throw this.unimplemented('setTextStyle is not supported on web.');
        }
        async setAlignment(options) {
            console.log('setAlignment is not supported on web.', JSON.stringify(options));
            throw this.unimplemented('setAlignment is not supported on web.');
        }
        async downloadNVImage(options) {
            console.log('downloadNVImage is not supported on web.', JSON.stringify(options));
            throw this.unimplemented('downloadNVImage is not supported on web.');
        }
        async clearNVImage() {
            console.log('clearNVImage is not supported on web.');
            throw this.unimplemented('clearNVImage is not supported on web.');
        }
        async printNVImage(options) {
            console.log('printNVImage is not supported on web.', JSON.stringify(options));
            throw this.unimplemented('printNVImage is not supported on web.');
        }
        async initializePrinter() {
            console.log('initializePrinter is not supported on web.');
            throw this.unimplemented('initializePrinter is not supported on web.');
        }
        async setLineSpacing(options) {
            console.log('setLineSpacing is not supported on web.', JSON.stringify(options));
            throw this.unimplemented('setLineSpacing is not supported on web.');
        }
        async setTurnUpsideDownMode(options) {
            console.log('setTurnUpsideDownMode is not supported on web.', JSON.stringify(options));
            throw this.unimplemented('setTurnUpsideDownMode is not supported on web.');
        }
        async selectCodePage(options) {
            console.log('selectCodePage is not supported on web.', JSON.stringify(options));
            throw this.unimplemented('selectCodePage is not supported on web.');
        }
        async selectCharacterFont(options) {
            console.log('selectCharacterFont is not supported on web.', JSON.stringify(options));
            throw this.unimplemented('selectCharacterFont is not supported on web.');
        }
        async setCharRightSpace(options) {
            console.log('setCharRightSpace is not supported on web.', JSON.stringify(options));
            throw this.unimplemented('setCharRightSpace is not supported on web.');
        }
        async openOrCloseAutoReturnPrintState(options) {
            console.log('openOrCloseAutoReturnPrintState is not supported on web.', JSON.stringify(options));
            throw this.unimplemented('openOrCloseAutoReturnPrintState is not supported on web.');
        }
        async wifiConfig(options) {
            console.log('wifiConfig is not supported on web.', JSON.stringify(options));
            throw this.unimplemented('wifiConfig is not supported on web.');
        }
        async setIp(options) {
            console.log('setIp is not supported on web.', JSON.stringify(options));
            throw this.unimplemented('setIp is not supported on web.');
        }
        async setMask(options) {
            console.log('setMask is not supported on web.', JSON.stringify(options));
            throw this.unimplemented('setMask is not supported on web.');
        }
        async setGateway(options) {
            console.log('setGateway is not supported on web.', JSON.stringify(options));
            throw this.unimplemented('setGateway is not supported on web.');
        }
        async setNetAll(options) {
            console.log('setNetAll is not supported on web.', JSON.stringify(options));
            throw this.unimplemented('setNetAll is not supported on web.');
        }
        async setBluetooth(options) {
            console.log('setBluetooth is not supported on web.', JSON.stringify(options));
            throw this.unimplemented('setBluetooth is not supported on web.');
        }
        async getSerialNumber() {
            console.log('getSerialNumber is not supported on web.');
            throw this.unimplemented('getSerialNumber is not supported on web.');
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        VhPrinterAndroidPosUsbWeb: VhPrinterAndroidPosUsbWeb
    });

    exports.ALIGNMENT = ALIGNMENT;
    exports.BITMAP = BITMAP;
    exports.CODE_PAGE = CODE_PAGE;
    exports.CUT = CUT;
    exports.DENSITY = DENSITY;
    exports.DEVICE = DEVICE;
    exports.DIRECTION = DIRECTION;
    exports.ENCRYPTION = ENCRYPTION;
    exports.FONT = FONT;
    exports.FONT_TYPE = FONT_TYPE;
    exports.HRI_TEXT = HRI_TEXT;
    exports.PIN = PIN;
    exports.QRCODE_EC_LEVEL = QRCODE_EC_LEVEL;
    exports.SPACE = SPACE;
    exports.STATUS = STATUS;
    exports.SYMBOLOGY = SYMBOLOGY;
    exports.TEXT_HEIGHT = TEXT_HEIGHT;
    exports.TEXT_WIDTH = TEXT_WIDTH;
    exports.VhPrinterAndroidPosUsb = VhPrinterAndroidPosUsb;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
