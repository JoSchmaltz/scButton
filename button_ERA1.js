function ALL() {
(function (window, document, tag, url, name, a, m) {
    window[name] = window[name] || function () {
     (window[name].q = window[name].q || []).push(arguments)
    }, window[name].l = 1 * new Date();
    a = document.createElement(tag),
    m = document.getElementsByTagName(tag)[0];
    a.async = 1;
    a.src = url;
    m.parentNode.insertBefore(a, m)
 })(window, document, 'script', 'https://shortcut.wochit.com/inside-sdk.js', 'wt');


wt('init', {
  channelId: '1',
  idpServiceName: null,
  skipLogin: 'true',
  env: 'prod',
  isShownInModal: true,
});
	
var linkedFields = {
	"Items": {
		"Item1": {
			"image": arguments[0]
			"description" : arguments[1]
			"customA": arguments[2]
			"tag":arguments[3]
		}
	}
}

var galleryAssets = [
	{
		"title": "one",
		"assets": [
			{
				"url": "https://cnet4.cbsistatic.com/img/KnuL1WDed3sanatLbE4YDddJGVg=/2017/10/31/312b3b6e-59b7-499a-ae",
				"type": "image"
			},
			{
				"url": "https://cdn.babamail.co.il/Images/2019/1/22/d9b35fbb-43f4-4a42-9031-d2993a2b08c6.jpg",
				"type": "image"
			},
			{
				"url": "https://www.pitria.com/wp-content/uploads/2015/12/%D7%AA%D7%9E%D7%95%D7%A0%D7%95%D7%AA-%D7%9E%D7%93%D7%94%D7%99%D7%9E%D7%95%D7%AA-2015-%D7%A4%D7%9C%D7%99%D7%A7%D7%A8-8.jpg",
				"type": "image"
			}
		]
	},
	{
		"title": "two",
		"assets": [
			{
				"url": "http://www.yo-yoo.co.il/coolpics/images/uploads/fdb2fd.jpg",
				"type": "image"
			},
			{
				"url": "https://assetsprod-a.akamaihd.net/urn_publicid_ap_org_c38ec15e8d0c4dca815dcb8599d89a59_ap_images/originalFile_LOWRES.mp4",
				"type": "video"
			}
		]
	}
]


var modalBg = document.createElement('div');
modalBg.style = 'background:rgba(0,0,0,0.5);width:100%;height:100%;position:fixed;z-index:999999999999;top:0;left:0;';

var modalContainer = document.createElement('div');
modalContainer.style = 'min-height:800px; background:white; position: absolute; top:50%;left:50%; width: 100%; height: 100%; transform:translate(-50%,-50%);';
modalContainer.classList.add('iframeContainer');

modalBg.appendChild(modalContainer);
document.body.appendChild(modalBg);


wt('initShortcut', {
  containerEl: document.querySelector('.iframeContainer'),
  categoryNames: null,
  linkedFields,
  galleryAssets,
  userToken: null,
  destLanguage: 'en',
  videoContext: null,
  storyboardId: '611a56e442a692353ebb9dc4',
  videoId: null,
  showCreativeGallery: false,
  showUploadGallery: false,
  showSaveForLater: false,
}, function onInitShortcut(status) {
    if (status.error) {
      console.log('initShortcut error', status.error);
    } else {
      document.getElementById('wtInsideIframe').style.minHeight = '800px';
      var fnOffProduce = window.wt.on('PRODUCE', function(event, payload) {
        console.log(event,payload);
        alert('Shortcut closed, event: '+event+', video id: '+payload.videoId);
        document.body.removeChild(modalBg);
      });
      var fnOffAbort = window.wt.on('ABORT', function(event) {
        console.log(event);
        document.body.removeChild(modalBg);
        fnOffProduce();
        fnOffAbort();
      });
    }
 });
}
