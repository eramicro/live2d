//const live2d_path = "https://fastly.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/";
const live2d_path = "https://live2d.icucloud.vip/widget/";
function loadExternalResource(url, type) {
	return new Promise((resolve, reject) => {
		let tag;
		if (type === "css") {
			tag = document.createElement("link");
			tag.rel = "stylesheet";
			tag.href = url;
		}
		else if (type === "js") {
			tag = document.createElement("script");
			tag.src = url;
		}
		if (tag) {
			tag.onload = () => resolve(url);
			tag.onerror = () => reject(url);
			document.head.appendChild(tag);
		}
	});
}
if (screen.width >= 768) {
	Promise.all([
		loadExternalResource(live2d_path + "waifu.css", "css"),
		loadExternalResource(live2d_path + "live2d.min.js", "js"),
		loadExternalResource(live2d_path + "waifu-tips.js", "js")
	]).then(() => {
		initWidget({
			waifuPath: live2d_path + "waifu-tips.json",
			apiPath: "https://live2d.icucloud.vip/model/",
		  //apiPath: "https://live2dapi.teriri.cc/",
		  //apiPath: "https://api.zsq.im/live2d/",
			tools: ["hitokoto", "asteroids", "switch-model", "switch-texture", "photo", "quit"]
		});
	});
}
console.log(`Alist美化来自咸鱼：羊城忙碌的毛肚`);
