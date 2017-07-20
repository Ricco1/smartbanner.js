import SmartBanner from './smartbanner.js';

let smartbanner;
let autoLoadMeta;
let autoLoadState;

window.addEventListener('load', function() {
  autoLoadMeta = document.querySelector('[name="smartbanner:auto-load"]');
  autoLoadState = autoLoadMeta && autoLoadMeta.content ? autoLoadMeta.content : 'true';

  if (autoLoadState === 'true') {
    smartbanner = new SmartBanner();
    smartbanner.publish();
  } else {
    smartbanner = new SmartBanner();
    window.smartbanner = smartbanner;
  }
});
