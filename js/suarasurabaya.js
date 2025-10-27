(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WP9SX2H');

var sc_jxos = document.createElement('script');sc_jxos.type = 'text/javascript';
sc_jxos.src = ''; //isi script onescript jixie
sc_jxos.async = true;
document.head.appendChild(sc_jxos);

var script_gtm = document.createElement('noscript');
script_gtm.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WP9SX2H"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`;

var cVisitorId = document.cookie.split(';').find(v => {
  return v.match('cProps');
});  

var cookieName = "cProps";
var cookieValue = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
var expirationTime = 2592000;
expirationTime = expirationTime * 1000;
var date = new Date(); 
var dateTimeNow = date.getTime(); 
date.setTime(dateTimeNow + expirationTime);
var date = date.toUTCString();
if(!cVisitorId){
  document.cookie = cookieName+"="+cookieValue+"; SameSite=None; Secure; expires="+date+"; path=/; domain=." + location.hostname.replace(/^www\./i, "");
}

const adConfig = {
    networkCode: '160553881,21986873345',
    sizeMappings: {
        mapping1: [
            { viewportSize: [1024, 0], adSizes: [[970, 250], [970, 90], [728, 250], [728, 90]] },
            { viewportSize: [800, 0], adSizes: [[728, 250], [728, 90]] },
            { viewportSize: [0, 0], adSizes: [[336, 280], [300, 250]] }
        ],
        mapping2: [
            { viewportSize: [1024, 0], adSizes: [[970, 90]] },
            { viewportSize: [800, 0], adSizes: [[728, 90]] },
            { viewportSize: [0, 0], adSizes: [[320, 50]] }
        ],
        mapping3: [
            { viewportSize: [1024, 0], adSizes: [[970, 250]] },
            { viewportSize: [800, 0], adSizes: [[728, 250]] },
            { viewportSize: [0, 0], adSizes: [[300, 250]] }
        ],
        mappingRectangleSticky: [
            { viewportSize: [1024, 0], adSizes: [[336, 280], [300, 250]] },
            { viewportSize: [0, 0], adSizes: [[300, 250]] }
        ]
    },
    adUnits: [
        {
            code: 'div-gpt-ad-flyingcarpet',
            adUnitPath: 'Suarasurabaya/Flying_Carpet',
            type: 'banner',
            sizes: [[300, 600]],
            deviceType: 'all',
            container: {
                type: 'class',
                value: 'single-content',
                index: 0,
                position: 'percentage',
                percentagePosition: 50
            }
        },
        // {
        //     code: 'div-gpt-ad-multibanner2',
        //     adUnitPath: 'Suarasurabaya/Multibanner2',
        //     type: 'banner',
        //     sizes: [[300, 250], [336, 280]],
        //     deviceType: 'all',
        //     container: {
        //         type: 'class',
        //         value: 'single-content',
        //         index: 0,
        //         position: 'percentage',
        //         percentagePosition: 70
        //     }
        // },
        {
            code: 'div-gpt-ad-multibanner1',
            adUnitPath: 'Suarasurabaya/Multibanner1',
            type: 'banner',
            sizes: [[300, 250], [336, 280]],
            deviceType: 'all',
            container: {
                type: 'class',
                value: 'single-content',
                index: 0,
                position: 'percentage',
                percentagePosition: 10
            }
        },
        {
            code: 'div-gpt-ad-oop',
            adUnitPath: 'Suarasurabaya/OOP',
            type: 'out-of-page',
            deviceType: 'all'
        },
        {
            code: 'div-gpt-ad-stickyexpand',
            adUnitPath: 'Suarasurabaya/StickyExpand',
            type: 'banner',
            sizeMapping: 'mapping3',
            deviceType: 'all',
            sticky: {
                enabled: true,
                showMiniSticky: true
            },
            container: {
                type: 'body',
                position: 'append'
            }
        },
        // {
        //     code: 'div-gpt-ad-mr1',
        //     adUnitPath: 'Suarasurabaya/MR1',
        //     type: 'banner',
        //     sizes: [[300, 250], [300, 600]],
        //     deviceType: 'all',
        //     container: {
        //         type: 'id',
        //         value: 'ss-radio-2',
        //         position: 'after'
        //     }
        // },
        {
            code: 'div-gpt-ad-mr2',
            adUnitPath: 'Suarasurabaya/MR2',
            type: 'banner',
            sizes: [[300, 250]],
            deviceType: 'all',
            container: {
                type: 'id',
                value: 'ss-weather-3',
                position: 'after'
            }
        },
        // {
        //     code: 'div-gpt-ad-mr3',
        //     adUnitPath: 'Suarasurabaya/MR3',
        //     type: 'banner',
        //     sizes: [[300, 250]],
        //     deviceType: 'all',
        //     container: {
        //         type: 'class',
        //         value: 'single-content',
        //         index: 0,
        //         position: 'after'
        //     }
        // },
        {
            code: 'div-gpt-ad-leaderboard',
            adUnitPath: 'Suarasurabaya/Leaderboard',
            type: 'banner',
            sizeMapping: 'mapping1',
            deviceType: 'all',
            container: {
                type: 'class',
                value: 'breaking-news',
                index: 0,
                position: 'after'
            }
        },
        {
            adUnitPath: 'Suarasurabaya/interstitial',
            type: 'interstitial',
            deviceType: 'all'
        }
    ]
};

// Define the ad filtering rules
const adFilteringRules = {
    global: {
        excludePaths: [], 
        includePaths: []
    },
    adUnitRules: {
    }
};

function shouldDisplayAd(adUnitPath, pathname) {
    pathname = pathname.toLowerCase();

    function pathMatches(rulePath, currentPath) {
        rulePath = rulePath.startsWith('/') ? rulePath : '/' + rulePath;
        currentPath = currentPath.startsWith('/') ? currentPath : '/' + currentPath;
        
        return currentPath === rulePath || currentPath.startsWith(rulePath + '/');
    }

    if (adFilteringRules.global.excludePaths.some(path => pathMatches(path, pathname))) {
        return false;
    }

    if (adFilteringRules.global.includePaths.length > 0 &&
        !adFilteringRules.global.includePaths.some(path => pathMatches(path, pathname))) {
        return false;
    }

    const adUnitRules = adFilteringRules.adUnitRules[adUnitPath];
    if (adUnitRules) {
        if (adUnitRules.excludePaths.some(path => pathMatches(path, pathname))) {
            return false;
        }

        if (adUnitRules.includePaths.length > 0 &&
            !adUnitRules.includePaths.some(path => pathMatches(path, pathname))) {
            return false;
        }
    }

    return true;
}

var PWT = {}; // Initialize Namespace
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
var gptRan = false;
var definedSlots = [];

PWT.jsLoaded = function() {
    loadGPT();
};

var loadGPT = function() {
    // Check the gptRan flag
    if (!gptRan) {
        gptRan = true;
        var gads = document.createElement('script');
        var useSSL = 'https:' == document.location.protocol;
        gads.src = (useSSL ? 'https:' : 'http:') + '//securepubads.g.doubleclick.net/tag/js/gpt.js';
        var node = document.getElementsByTagName('script')[0];
        node.parentNode.insertBefore(gads, node);
    }
};

// Failsafe to call gpt
setTimeout(loadGPT, 1500);

// Load PubMatic's header bidding script
(function() {
    var purl = window.location.href;
    var url = '//ads.pubmatic.com/AdServer/js/pwt/160902/7517';
    var profileVersionId = '';
    if(purl.indexOf('pwtv=')>0){
        var regexp = /pwtv=(.*?)(&|$)/g;
        var matches = regexp.exec(purl);
        if(matches.length >= 2 && matches[1].length > 0){
            profileVersionId = '/'+matches[1];
        }
    }
    var wtads = document.createElement('script');
    wtads.async = true;
    wtads.type = 'text/javascript';
    wtads.src = url+profileVersionId+'/pwt.js';
    var node = document.getElementsByTagName('script')[0];
    node.parentNode.insertBefore(wtads, node);
})();

function checkBlocklist(callback) {
    try {
        var http = new XMLHttpRequest();
        let lochref = window.location.href.match(/^.+?[^\/:](?=[?\/]|$)/)[0].replace("http://", "").replace("https://", "");
        var url_check_props = `https://propsid.b-cdn.net/json/${lochref}/blocklist.json`;
        http.responseType = 'json';
        http.open('GET', url_check_props, true);

        http.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
        http.timeout = 1500;
        http.onreadystatechange = function() {
            if(http.readyState == 4 && (http.status == 200 || http.status == 201)) {
                try {
                    let parsed = http.response;
                    let x = window.location.href.replace(/https:\/\//, "");
                    let find = parsed.find((e) => {return e == x});

                    if (!find) {
                        callback(true);
                    } else {
                        callback(false);
                    }
                } catch (e) {
                    console.log("props-parsing error");
                    console.log(e);
                    callback(true);
                }
            } else if (http.readyState == 4){
                callback(true); 
            }
        }
        http.send();
    } catch (e) {
        console.log("ERROR");
        console.log(e);
        callback(true); 
    }
}

// Main GPT script
(function(config) {
    googletag.cmd.push(function() {
        var cVisitorId = (visId = document.cookie.split("cProps")[1]) ? visId.split(';')[0].replace(/[^a-zA-Z0-9]/ig, '') : false;
        if (cVisitorId) {
                googletag.pubads().setPublisherProvidedId(cVisitorId + 'props');
        }
        googletag.pubads().disableInitialLoad();
        googletag.pubads().enableSingleRequest();
        // googletag.pubads().enableLazyLoad({
        //     fetchMarginPercent: 500,
        //     renderMarginPercent: 200,
        //     mobileScaling: 2.0
        // });

        const sizeMapCache = {};
        for (const [key, mapping] of Object.entries(config.sizeMappings)) {
            const sizeMap = googletag.sizeMapping();
            mapping.forEach(({ viewportSize, adSizes }) => {
                sizeMap.addSize(viewportSize, adSizes);
            });
            sizeMapCache[key] = sizeMap.build();
        }

        config.adUnits.forEach(function(adUnit) {
            const adUnitPath = `/${config.networkCode}/${adUnit.adUnitPath}`;
            let slot;

            switch (adUnit.type) {
                case 'banner':
                    if (adUnit.sizeMapping && config.sizeMappings[adUnit.sizeMapping]) {
                        slot = googletag.defineSlot(adUnitPath, [], adUnit.code)
                                        .defineSizeMapping(sizeMapCache[adUnit.sizeMapping])
                                        .addService(googletag.pubads());
                    } else if (adUnit.sizes) {
                        slot = googletag.defineSlot(adUnitPath, adUnit.sizes, adUnit.code)
                                        .addService(googletag.pubads());
                    } else {
                        console.warn(`Ad unit ${adUnit.code} has no sizes or size mapping defined.`);
                    }
                    break;
                case 'interstitial':
                    slot = googletag.defineOutOfPageSlot(adUnitPath, googletag.enums.OutOfPageFormat.INTERSTITIAL)
                                    .addService(googletag.pubads());
                    break;
                case 'out-of-page':
                    slot = googletag.defineOutOfPageSlot(adUnitPath, adUnit.code)
                                    .addService(googletag.pubads());
                    break;
            }

            if (slot) {
                definedSlots.push(slot);
            }
        });

        googletag.enableServices();
    });

    function getTargetElementAndInsertionPoint(container) {
        let targetElement = null;
        let insertionPoint = null;

        if (container.type === 'id') {
            targetElement = document.getElementById(container.value);
        } else if (container.type === 'class') {
            const elements = document.getElementsByClassName(container.value);
            const index = container.index || 0;
            targetElement = elements[index] || null;
        }

        if (targetElement) {
            const paragraphs = targetElement.getElementsByTagName('p');
            if (paragraphs.length > 0) {
                if (container.position === 'percentage') {
                    const totalParagraphs = paragraphs.length;
                    const insertAfterIndex = Math.floor(totalParagraphs * (container.percentagePosition / 100));
                    insertionPoint = paragraphs[Math.min(insertAfterIndex, totalParagraphs - 1)];
                } else if (container.position === 'after_p') {
                    const paragraphIndex = Math.min(container.paragraphIndex, paragraphs.length - 1);
                    insertionPoint = paragraphs[paragraphIndex];
                }
            }
        }

        return { targetElement, insertionPoint };
    }

    function createAdContainers() {
        config.adUnits.forEach(function(adUnit) {
            const isMobile = window.innerWidth < 768; // Adjust this breakpoint as needed
            const shouldDisplay = 
                (adUnit.deviceType === 'all' ||
                (adUnit.deviceType === 'desktop' && !isMobile) ||
                (adUnit.deviceType === 'mobile' && isMobile)) &&
                shouldDisplayAd(adUnit.adUnitPath, window.location.pathname);

            if (shouldDisplay) {
                if (adUnit.type === 'banner') {
                    const adContainer = document.createElement('div');
                    adContainer.id = adUnit.code + '-container';
                    adContainer.style.cssText = 'min-height: 50px; background-color: #f0f0f0; margin: 10px 0; text-align: center;';

                    const adWrapper = document.createElement('div');
                    adWrapper.style.cssText = 'position: relative;';

                    const adSlot = document.createElement('div');
                    adSlot.id = adUnit.code;

                    if (!adUnit.sticky || !adUnit.sticky.enabled) {
                      const adLabel = document.createElement('div');
                      adLabel.textContent = 'Advertisement';
                      adLabel.style.cssText = `
                        font-size: 12px;
                        color: #666;
                        text-align: center;
                        padding: 2px 0;
                        border-bottom: 1px solid #ccc;
                        margin-bottom: 5px;
                      `;
                      adWrapper.appendChild(adLabel);
                    }

                    adWrapper.appendChild(adSlot);
                    adContainer.appendChild(adWrapper);

                    if (adUnit.sticky && adUnit.sticky.enabled) {
                        adContainer.style.position = 'fixed';
                        adContainer.style.zIndex = adUnit.sticky.isMini ? '9998' : '9999';
                        adContainer.style.backgroundColor = adUnit.sticky.enabled ? 'rgb(240, 240, 240, 0.7)' : '#f0f0f0';
                        
                        if (adUnit.sticky.isMini) {
                            adContainer.style.display = 'none';
                        }

                        if (adUnit.sticky.isRectangleSticky) {
                            adContainer.style.right = '20px';
                            adContainer.style.bottom = '370px';
                            adContainer.style.transform = 'scale(0.8)';
                            adContainer.style.transformOrigin = 'bottom right';
                        } else {
                            adContainer.style.bottom = '0';
                            adContainer.style.left = '0';
                            adContainer.style.width = '100%';
                        }

                        const closeButton = document.createElement('button');
                        closeButton.textContent = '×';
                        closeButton.style.cssText = `
                            position: absolute;
                            top: ${adUnit.sticky.isRectangleSticky ? '-40px' : '-15px'};
                            left: ${adUnit.sticky.isRectangleSticky ? '0px' : '10px'};
                            background: #fff;
                            border: 2px solid #000;
                            border-radius: 50%;
                            width: ${adUnit.sticky.isRectangleSticky ? '40px' : '30px'};
                            height: ${adUnit.sticky.isRectangleSticky ? '40px' : '30px'};
                            font-size: ${adUnit.sticky.isRectangleSticky ? '30px' : '20px'};
                            line-height: 1;
                            padding: 0;
                            cursor: pointer;
                            z-index: 10000;
                            color: #000;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        `;

                        closeButton.onclick = function() {
                            adContainer.style.display = 'none';
                            if (!adUnit.sticky.isMini && adUnit.sticky.showMiniSticky) {
                                const miniSticky = document.getElementById('div-gpt-ad-sticky-container');
                                if (miniSticky) {
                                    miniSticky.style.display = 'block';
                                    googletag.cmd.push(function() {
                                        googletag.display('div-gpt-ad-sticky');
                                        const miniStickySlot = googletag.pubads().getSlots().find(slot => slot.getSlotElementId() === 'div-gpt-ad-sticky');
                                        if (miniStickySlot) {
                                            googletag.pubads().refresh([miniStickySlot]);
                                        }
                                    });
                                }
                            }
                        };
                        adContainer.appendChild(closeButton);
                    }

                    if (adUnit.container.type === 'body') {
                        document.body.appendChild(adContainer);
                    } else {
                        const { targetElement, insertionPoint } = getTargetElementAndInsertionPoint(adUnit.container);

                        if (targetElement) {
                            switch (adUnit.container.position) {
                                case 'before':
                                    targetElement.parentNode.insertBefore(adContainer, targetElement);
                                    break;
                                case 'after':
                                    if (targetElement.nextSibling) {
                                        targetElement.parentNode.insertBefore(adContainer, targetElement.nextSibling);
                                    } else {
                                        targetElement.parentNode.appendChild(adContainer);
                                    }
                                    break;
                                case 'percentage':
                                case 'after_p':
                                    if (insertionPoint && insertionPoint.nextSibling) {
                                        insertionPoint.parentNode.insertBefore(adContainer, insertionPoint.nextSibling);
                                    } else if (insertionPoint) {
                                        insertionPoint.parentNode.appendChild(adContainer);
                                    } else {
                                        targetElement.appendChild(adContainer);
                                    }
                                    break;
                                case 'append':
                                default:
                                    targetElement.appendChild(adContainer);
                                    break;
                            }
                        } else {
                            console.warn(`Target element for ad unit ${adUnit.code} not found.`);
                        }
                    }
                } else if (adUnit.type === 'out-of-page') {
                    const outOfPageContainer = document.createElement('div');
                    outOfPageContainer.id = adUnit.code;
                    document.body.prepend(outOfPageContainer);
                }
            }
        });
    }

    function displayAds() {
        googletag.cmd.push(function() {
            config.adUnits.forEach(function(adUnit) {
                const isMobile = window.innerWidth < 768;
                const shouldDisplay = 
                    (adUnit.deviceType === 'all' ||
                    (adUnit.deviceType === 'desktop' && !isMobile) ||
                    (adUnit.deviceType === 'mobile' && isMobile)) &&
                    shouldDisplayAd(adUnit.adUnitPath, window.location.pathname) &&
                    adUnit.type !== 'interstitial' &&
                    !(adUnit.sticky && adUnit.sticky.isMini);

                if (shouldDisplay) {
                    googletag.display(adUnit.code);
                }
            });
        });

        if (typeof PWT.requestBids === "function") {
            const displayableSlots = definedSlots.filter(slot => {
                const adUnit = config.adUnits.find(unit => unit.code === slot.getSlotElementId());
                const isMobile = window.innerWidth < 768;
                return adUnit &&
                    (adUnit.deviceType === 'all' ||
                    (adUnit.deviceType === 'desktop' && !isMobile) ||
                    (adUnit.deviceType === 'mobile' && isMobile)) &&
                    shouldDisplayAd(adUnit.adUnitPath, window.location.pathname) &&
                    slot.getSlotElementId() !== 'div-gpt-ad-sticky';
            });

            PWT.requestBids(
                PWT.generateConfForGPT(displayableSlots),
                function(adUnits) {
                    googletag.cmd.push(function() {
                        PWT.addKeyValuePairsToGPTSlots(adUnits);
                        googletag.pubads().refresh(displayableSlots);
                    });
                }
            );
        } else {
            const displayableSlots = definedSlots.filter(slot => {
                const adUnit = config.adUnits.find(unit => unit.code === slot.getSlotElementId());
                const isMobile = window.innerWidth < 768;
                return adUnit &&
                    (adUnit.deviceType === 'all' ||
                    (adUnit.deviceType === 'desktop' && !isMobile) ||
                    (adUnit.deviceType === 'mobile' && isMobile)) &&
                    shouldDisplayAd(adUnit.adUnitPath, window.location.pathname) &&
                    slot.getSlotElementId() !== 'div-gpt-ad-sticky';
            });
            googletag.cmd.push(function() {
                googletag.pubads().refresh(displayableSlots);
            });
        }
    }

    function initAds() {
        console.log(window.adsInitialized,"check");
        if (typeof window.adsInitialized === 'undefined') {
            window.adsInitialized = true;
            createAdContainers();
            displayAds();
        }
    }

    if (document.readyState === 'loading') {
        if (!window.adsEventListenerAdded) {
            window.adsEventListenerAdded = true;
            window.addEventListener('DOMContentLoaded', function() {
                document.body.appendChild(script_gtm);
                checkBlocklist(function(shouldShowAds) {
                    if (shouldShowAds) {
                        const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
                        const timeoutDuration = isFirefox ? 2000 : 500;

                        setTimeout(() => {
                            initAds();
                        }, timeoutDuration);
                    }
                });
            });
        }
    } else {
        document.body.appendChild(script_gtm);
        checkBlocklist(function(shouldShowAds) {
            if (shouldShowAds) {
                const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
                const timeoutDuration = isFirefox ? 2000 : 500;

                setTimeout(() => {
                    initAds();
                }, timeoutDuration);
            }
        });
    }
})(adConfig);

const styleElement = document.createElement('style');
styleElement.textContent = `
    #div-gpt-ad-stickyexpand{
        transform: scale(0.6); margin-top: -50px; margin-bottom: -50px; -ms-transform: scale(0.6); -webkit-transform: scale(0.6);
    }
    @media screen and (max-width: 1023px) {
        #div-gpt-ad-rectanglesticky-container {
            transform: scale(0.6) !important;
            right: 10px !important;
            bottom: 300px !important;
        }
    }

    @media screen and (min-width: 1024px) {
        #div-gpt-ad-rectanglesticky-container {
            transform: scale(0.8) !important;
            right: 20px !important;
            bottom: 370px !important;
        }
    }
`;
document.head.appendChild(styleElement);


var checkCont1 = {innerText: window.location.search}; //post link
var contentCheck = checkCont1.innerText.toLowerCase();
var adsSearch = contentCheck.match(/\b(s=)\b/i);
if(adsSearch){
  console.log(adsSearch);
  console.log("adsSearch");
  var script_afs = document.createElement('script');
  script_afs.src = 'https://www.google.com/adsense/search/ads.js';
  script_afs.async = true;
  document.head.appendChild(script_afs);
  (function(g,o){g[o]=g[o]||function(){(g[o]['q']=g[o]['q']||[]).push(arguments)},g[o]['t']=1*new Date})(window,'_googCsa');

  var dv_afs = document.createElement("div");
  dv_afs.id = 'afscontainer1';
  var sc_afs = document.createElement("script");
  sc_afs.innerHTML = `
    var searchQuery = document.getElementsByClassName('search-result-title')[0].textContent.split('kata kunci: ')[1].split('(')[0].trim();
    var pageOptions = {
      "pubId": "partner-pub-2186101008500724",
      "query": searchQuery,
      "styleId": "5467115114",
      "adsafe": "high"
    };console.log(searchQuery);

    var adblock1 = {
      "container": "afscontainer1"
    };

    _googCsa('ads', pageOptions, adblock1);`;
  var locafs = window.parent.document.getElementsByClassName("search-result-title")[0];
  if (locafs != null) {
    locafs.after(dv_afs);
    locafs.after(sc_afs);
  }
}


const currentUrl = window.location.href;
if (currentUrl.includes('/video') || currentUrl.includes('/radio') || currentUrl.includes('/jazztraffic') || currentUrl.includes('/senggang')) {
    // URL yang sesuai
    googletag = window.googletag || { cmd: [] };
    googletag.cmd.push(() => {
        const rewardedSlot = googletag.defineOutOfPageSlot("/160553881,21986873345/Suarasurabaya/Rewarded", googletag.enums.OutOfPageFormat.REWARDED).addService(googletag.pubads());
        rewardedSlot.setForceSafeFrame(true);
        googletag.pubads().enableAsyncRendering();
        googletag.enableServices();

        googletag.pubads().addEventListener("rewardedSlotReady", (evt) => {
            console.log("Rewarded Slot Ready");
            setTimeout(() => {
                evt.makeRewardedVisible();
            }, 5000);
            setTimeout(() => {
                console.log("Rewarded Slot Completed");
                googletag.pubads().clear([rewardedSlot]);
            }, 10000);
        });

        googletag.pubads().addEventListener("rewardedSlotClosed", (evt) => {
            console.log("Rewarded Slot Closed");
        });

        googletag.display(rewardedSlot);
        googletag.pubads().refresh([rewardedSlot]); //if needed - if disableInitialLoad on
    });
} else {
    // URL yang tidak sesuai
}
