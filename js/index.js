function onLoad() {
    if ((/(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent))) {
        document.addEventListener("deviceready", function () {
            //if no license key, 2% ad traffic share for dev support.
            //you can get paid license key: https://cranberrygame.github.io/request_cordova_ad_plugin_paid_license_key
            //window.vungle.setLicenseKey("yourEmailId@yourEmaildDamin.com", "yourLicenseKey");

            window.vungle.setUp(appId);

            window.vungle.onRewardedVideoAdLoaded = function () {
                alert('onRewardedVideoAdLoaded');
            };
            window.vungle.onRewardedVideoAdShown = function () {
                alert('onRewardedVideoAdShown');
            };
            window.vungle.onRewardedVideoAdHidden = function () {
                alert('onRewardedVideoAdHidden');
            };
            window.vungle.onRewardedVideoAdCompleted = function () {
                alert('onRewardedVideoAdCompleted');
            };
        }, false);
        setTimeout(function () {
            alert('We are here');
            initAd();
        }, 15000);

    } else {
        initApp();
    }
}