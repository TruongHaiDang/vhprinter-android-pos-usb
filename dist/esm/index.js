import { registerPlugin } from '@capacitor/core';
import { ALIGNMENT, FONT, TEXT_WIDTH, TEXT_HEIGHT, BITMAP, SYMBOLOGY, HRI_TEXT, QRCODE_EC_LEVEL, CUT, DEVICE, PIN, STATUS, DIRECTION, DENSITY, SPACE, CODE_PAGE, FONT_TYPE, ENCRYPTION } from './constants';
const VhPrinterAndroidPosUsb = registerPlugin('VhPrinterAndroidPosUsb', {
    web: () => import('./web').then(m => new m.VhPrinterAndroidPosUsbWeb()),
});
export * from './definitions';
export { VhPrinterAndroidPosUsb, ALIGNMENT, FONT, TEXT_WIDTH, TEXT_HEIGHT, BITMAP, SYMBOLOGY, HRI_TEXT, QRCODE_EC_LEVEL, CUT, DEVICE, PIN, STATUS, DIRECTION, DENSITY, SPACE, CODE_PAGE, FONT_TYPE, ENCRYPTION };
//# sourceMappingURL=index.js.map