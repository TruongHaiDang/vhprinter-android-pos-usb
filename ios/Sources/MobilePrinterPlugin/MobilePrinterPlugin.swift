import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(VhPrinterAndroidPosUsbPlugin)
public class VhPrinterAndroidPosUsbPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "VhPrinterAndroidPosUsbPlugin"
    public let jsName = "VhPrinterAndroidPosUsb"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "echo", returnType: CAPPluginReturnPromise)
    ]
    private let implementation = VhPrinterAndroidPosUsb()

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }
}
