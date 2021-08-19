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
	"Recipe": {
		"Title": {
			"Title": "Poppyseeds"
		}
	},
	"gre": {
		"Title": [
			{
				"ye": "https://st.hzcdn.com/simgs/ba81e50f0c42118e_14-8536/home-design.jpg",
				"title": "A Feminine Fortress with a Manly Touch"
			},
			{
				"image": "https://st.hzcdn.com/simgs/0891ea010d52f398_14-9407/home-design.jpg",
				"title": "Dreams Do Come True"
			},
			{
				"image": "https://st.hzcdn.com/simgs/24313e200c786a7b_9-6295/home-design.jpg",
				"title": "A Spa Fit for Two"
			},
			{
				"image": "https://st.hzcdn.com/simgs/428116c80ab92781_9-2989/home-design.jpg",
				"title": "A Victorian Made for Living"
			},
			{
				"image": "https://st.hzcdn.com/simgs/66d179fb0ae08c8b_9-8034/home-design.jpg",
				"title": "Making it a Home"
			}
		]
	},
	"grerg": {
		"list": [
			"reviews",
			{
				"score": 5,
				"name": "Mumbai",
				"text": "Good work"
			},
			{
				"score": 4,
				"name": "Mumbai",
				"text": "Fabulous space, thanks so much Jane!"
			},
			{
				"score": 4,
				"name": "Mikey Anbary",
				"text": "Keep the good work going!"
			},
			{
				"score": 4,
				"name": "Or Dinary",
				"text": "Wow !!!!!"
			},
			{
				"score": 4,
				"name": "Yaniv  Vararu",
				"text": "Great colors !"
			}
		],
		"Title": "Oranges",
		"website": "https://www.konceptdb.",
		"name": "Mumbai",
		"phone": "(703) 962-1316",
		"awards": "INFLUENCER,RECOMMENDED_ON_HOUZZ,1000_IDEABOOK_SAVES,STAR_HOUZERR,5_STAR_HOUZZER,BEST_OF_HOUZZ_2019_DESIGN,BEST_OF_HOUZZ_2019_CLIENT_SATISFACTION",
		"numReviews": 43,
		"avatar": "https://st.hzcdn.com/fimgs/79a31d0004c7fec0_1350-w181-h181-b0-p0--.jpg",
		"reviewRating": 4.3,
		"email": "some@email.com",
		"aboutMe": "Koncept Design + Build was formed by a family rooted in architecture, engineering..."
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
  storyboardId: null,
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
