import { WebPlugin } from '@capacitor/core';

import type { VhPrinterAndroidPosUsbPlugin } from './definitions';

export class VhPrinterAndroidPosUsbWeb extends WebPlugin implements VhPrinterAndroidPosUsbPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async searchUsb(): Promise<{ devices: string[] }> {
    console.log('searchUsb is not supported on web.');
    throw this.unimplemented('searchUsb is not supported on web.');
  }

  async connectUSB(options: { pathName: string }): Promise<void> {
    console.log('connectUSB is not supported on web.', JSON.stringify(options));
    throw this.unimplemented('connectUSB is not supported on web.');
  }

  async connectNet(options: { ipAddress: string }): Promise<void> {
    console.log('connectNet is not supported on web.', JSON.stringify(options));
    throw this.unimplemented('connectNet is not supported on web.');
  }

  async connectBt(options: { macAddress: string }): Promise<void> {
    console.log('connectBt is not supported on web.', JSON.stringify(options));
    throw this.unimplemented('connectBt is not supported on web.');
  }

  async connectMAC(options: { macAddress: string }): Promise<void> {
    console.log('connectMAC is not supported on web.', JSON.stringify(options));
    throw this.unimplemented('connectMAC is not supported on web.');
  }

  async connectSerial(options: { port: string, boudrate: string }): Promise<void> {
    console.log('connectSerial is not supported on web.', JSON.stringify(options));
    throw this.unimplemented('connectSerial is not supported on web.');
  }

  async printText(options: { text: string }): Promise<void> {
    console.log('printText is not supported on web.', JSON.stringify(options));
    throw this.unimplemented('printText is not supported on web.');
  }

  async printBarcode(options: { data: string, symbology: number, width?: number, height?: number, alignment?: number }): Promise<void> {
    console.log('printBarcode is not supported on web.', JSON.stringify(options));
    throw this.unimplemented('printBarcode is not supported on web.');
  }

  async printQRCode(options: { content: string, moduleSize?: number, ecLevel?: number, alignment?: number, pageWidth?: number }): Promise<void> {
    console.log('printQRCode is not supported on web.', JSON.stringify(options));
    throw this.unimplemented('printQRCode is not supported on web.');
  }

  async printPicCode(options: { image: string, width?: number }): Promise<void> {
    console.log('printPicCode is not supported on web.', JSON.stringify(options));
    throw this.unimplemented('printPicCode is not supported on web.');
  }

  async getPrinterStatus(): Promise<{ status: number }> {
    console.log('getPrinterStatus is not supported on web.');
    throw this.unimplemented('getPrinterStatus is not supported on web.');
  }

  async openCashBox(options: { pin: number }): Promise<void> {
    console.log('openCashBox is not supported on web.', JSON.stringify(options));
    throw this.unimplemented('openCashBox is not supported on web.');
  }

  async printTable(options: { table: any }): Promise<void> {
    console.log('printTable is not supported on web.', JSON.stringify(options));
    throw this.unimplemented('printTable is not supported on web.');
  }

  async cpclGetPrinterStatus(): Promise<{ status: string }> {
    console.log('cpclGetPrinterStatus is not supported on web.');
    throw this.unimplemented('cpclGetPrinterStatus is not supported on web.');
  }

  async exit(): Promise<void> {
    console.log('exit is not supported on web.');
    throw this.unimplemented('exit is not supported on web.');
  }

  async getAppCtx(): Promise<{ context: string }> {
    console.log('getAppCtx is not supported on web.');
    throw this.unimplemented('getAppCtx is not supported on web.');
  }

  async getUsbDevice(): Promise<{ devices: string[] }> {
    console.log('getUsbDevice is not supported on web.');
    throw this.unimplemented('getUsbDevice is not supported on web.');
  }

  async getSerialPort(): Promise<{ ports: string[] }> {
    console.log('getSerialPort is not supported on web.');
    throw this.unimplemented('getSerialPort is not supported on web.');
  }

  async getCopyRight(): Promise<{ copyRight: string }> {
    console.log('getCopyRight is not supported on web.');
    throw this.unimplemented('getCopyRight is not supported on web.');
  }

  async searchNetDevice(): Promise<{ devices: any[] }> {
    console.log('searchNetDevice is not supported on web.');
    throw this.unimplemented('searchNetDevice is not supported on web.');
  }

  async udpNetConfig(options: { macAddress: string, ipAddress: string, mask: string, gateway: string, dhcp: boolean }): Promise<void> {
    console.log('udpNetConfig is not supported on web.', JSON.stringify(options));
    throw this.unimplemented('udpNetConfig is not supported on web.');
  }

  async feedDot(options: { dotCount: number }): Promise<void> {
    console.log('feedDot is not supported on web.', JSON.stringify(options));
    throw this.unimplemented('feedDot is not supported on web.');
  }

  async cutPaper(options: { model: number }): Promise<void> {
    console.log('cutPaper is not supported on web.', JSON.stringify(options));
    throw this.unimplemented('cutPaper is not supported on web.');
  }

  async cutHalfAndFeed(options: { distance: number }): Promise<void> {
    console.log('cutHalfAndFeed is not supported on web.', JSON.stringify(options));
    throw this.unimplemented('cutHalfAndFeed is not supported on web.');
  }

  async setPrintArea(options: { x: number, y: number, width: number, height: number }): Promise<void> {
    console.log('setPrintArea is not supported on web.', JSON.stringify(options));
    throw this.unimplemented('setPrintArea is not supported on web.');
  }

  async setPageModel(options: { isOpen: boolean }): Promise<void> {
    console.log('setPageModel is not supported on web.', JSON.stringify(options));
    throw this.unimplemented('setPageModel is not supported on web.');
  }

  async setPrintDirection(options: { direction: number }): Promise<void> {
    console.log('setPrintDirection is not supported on web.', JSON.stringify(options));
    throw this.unimplemented('setPrintDirection is not supported on web.');
  }

  async setAbsoluteHorizontal(options: { position: number }): Promise<void> {
    console.log('setAbsoluteHorizontal is not supported on web.', JSON.stringify(options));
    throw this.unimplemented('setAbsoluteHorizontal is not supported on web.');
  }

  async setRelativeHorizontal(options: { position: number }): Promise<void> {
    console.log('setRelativeHorizontal is not supported on web.', JSON.stringify(options));
    throw this.unimplemented('setRelativeHorizontal is not supported on web.');
  }

  async setAbsoluteVertical(options: { position: number }): Promise<void> {
    console.log('setAbsoluteVertical is not supported on web.', JSON.stringify(options));
    throw this.unimplemented('setAbsoluteVertical is not supported on web.');
  }

  async setRelativeVertical(options: { position: number }): Promise<void> {
    console.log('setRelativeVertical is not supported on web.', JSON.stringify(options));
    throw this.unimplemented('setRelativeVertical is not supported on web.');
  }

  async setTextStyle(options: { attribute: number, textSize: number }): Promise<void> {
    console.log('setTextStyle is not supported on web.', JSON.stringify(options));
    throw this.unimplemented('setTextStyle is not supported on web.');
  }

  async setAlignment(options: { alignment: number }): Promise<void> {
    console.log('setAlignment is not supported on web.', JSON.stringify(options));
    throw this.unimplemented('setAlignment is not supported on web.');
  }

  async downloadNVImage(options: { imagePaths: string, imageWidth: number }): Promise<void> {
    console.log('downloadNVImage is not supported on web.', JSON.stringify(options));
    throw this.unimplemented('downloadNVImage is not supported on web.');
  }

  async clearNVImage(): Promise<void> {
    console.log('clearNVImage is not supported on web.');
    throw this.unimplemented('clearNVImage is not supported on web.');
  }

  async printNVImage(options: { index: number, model: number }): Promise<void> {
    console.log('printNVImage is not supported on web.', JSON.stringify(options));
    throw this.unimplemented('printNVImage is not supported on web.');
  }

  async initializePrinter(): Promise<void> {
    console.log('initializePrinter is not supported on web.');
    throw this.unimplemented('initializePrinter is not supported on web.');
  }

  async setLineSpacing(options: { space: number }): Promise<void> {
    console.log('setLineSpacing is not supported on web.', JSON.stringify(options));
    throw this.unimplemented('setLineSpacing is not supported on web.');
  }

  async setTurnUpsideDownMode(options: { on: boolean }): Promise<void> {
    console.log('setTurnUpsideDownMode is not supported on web.', JSON.stringify(options));
    throw this.unimplemented('setTurnUpsideDownMode is not supported on web.');
  }

  async selectCodePage(options: { page: number }): Promise<void> {
    console.log('selectCodePage is not supported on web.', JSON.stringify(options));
    throw this.unimplemented('selectCodePage is not supported on web.');
  }

  async selectCharacterFont(options: { font: number }): Promise<void> {
    console.log('selectCharacterFont is not supported on web.', JSON.stringify(options));
    throw this.unimplemented('selectCharacterFont is not supported on web.');
  }

  async setCharRightSpace(options: { space: number }): Promise<void> {
    console.log('setCharRightSpace is not supported on web.', JSON.stringify(options));
    throw this.unimplemented('setCharRightSpace is not supported on web.');
  }

  async openOrCloseAutoReturnPrintState(options: { info: number }): Promise<void> {
    console.log('openOrCloseAutoReturnPrintState is not supported on web.', JSON.stringify(options));
    throw this.unimplemented('openOrCloseAutoReturnPrintState is not supported on web.');
  }

  async wifiConfig(options: { ip: string, mask: string, gateway: string, ssid: string, password: string, encrypt: number }): Promise<void> {
    console.log('wifiConfig is not supported on web.', JSON.stringify(options));
    throw this.unimplemented('wifiConfig is not supported on web.');
  }

  async setIp(options: { ip: string }): Promise<void> {
    console.log('setIp is not supported on web.', JSON.stringify(options));
    throw this.unimplemented('setIp is not supported on web.');
  }

  async setMask(options: { mask: string }): Promise<void> {
    console.log('setMask is not supported on web.', JSON.stringify(options));
    throw this.unimplemented('setMask is not supported on web.');
  }

  async setGateway(options: { gateway: string }): Promise<void> {
    console.log('setGateway is not supported on web.', JSON.stringify(options));
    throw this.unimplemented('setGateway is not supported on web.');
  }

  async setNetAll(options: { ip: string, mask: string, gateway: string, dhcpIsOpen: boolean }): Promise<void> {
    console.log('setNetAll is not supported on web.', JSON.stringify(options));
    throw this.unimplemented('setNetAll is not supported on web.');
  }

  async setBluetooth(options: { name: string, pin: string }): Promise<void> {
    console.log('setBluetooth is not supported on web.', JSON.stringify(options));
    throw this.unimplemented('setBluetooth is not supported on web.');
  }

  async getSerialNumber(): Promise<{ serialNumber: string }> {
    console.log('getSerialNumber is not supported on web.');
    throw this.unimplemented('getSerialNumber is not supported on web.');
  }
}
