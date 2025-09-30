// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "VhPrinterAndroidPosUsb",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "VhPrinterAndroidPosUsb",
            targets: ["VhPrinterAndroidPosUsbPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "VhPrinterAndroidPosUsbPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/VhPrinterAndroidPosUsbPlugin"),
        .testTarget(
            name: "VhPrinterAndroidPosUsbPluginTests",
            dependencies: ["VhPrinterAndroidPosUsbPlugin"],
            path: "ios/Tests/VhPrinterAndroidPosUsbPluginTests")
    ]
)