import { WebPlugin } from '@capacitor/core';
export class VhPrinterAndroidPosUsbWeb extends WebPlugin {
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
//# sourceMappingURL=web.js.map