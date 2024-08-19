/**
 * @author NTKhang
 * ! The source code is written by NTKhang, please don't change the author's name everywhere. Thank you for using
 * ! Official source code: https://github.com/ntkhang03/Goat-Bot-V2
 * ! If you do not download the source code from the above address, you are using an unknown version and at risk of having your account hacked
 *
 * English:
 * ! Please do not change the below code, it is very important for the project.
 * It is my motivation to maintain and develop the project for free.
 * ! If you change it, you will be banned forever
 * Thank you for using
 *
 * Vietnamese:
 * ! Vui lòng không thay đổi mã bên dưới, nó rất quan trọng đối với dự án.
 * Nó là động lực để tôi duy trì và phát triển dự án miễn phí.
 * ! Nếu thay đổi nó, bạn sẽ bị cấm vĩnh viễn
 * Cảm ơn bạn đã sử dụng
 */

const { spawn } = require("child_process");
const log = require("./logger/log.js");

function startProject() {
	const child = spawn("node", ["Goat.js"], {
		cwd: __dirname,
		stdio: "inherit",
		shell: true
	});

	child.on("close", (code) => {
		if (code == 2) {
			log.info("Restarting Project...");
			startProject();
		}
	});
}

startProject();

const express = require('express');
const app = express();
const _0x1982b5=_0x4b18;function _0x4b18(_0x469026,_0x4f01c2){const _0x269b99=_0x269b();return _0x4b18=function(_0x4b18f2,_0x28593e){_0x4b18f2=_0x4b18f2-0xcd;let _0x33b902=_0x269b99[_0x4b18f2];return _0x33b902;},_0x4b18(_0x469026,_0x4f01c2);}(function(_0x514f72,_0x5906c9){const _0x502dba=_0x4b18,_0xa2a58e=_0x514f72();while(!![]){try{const _0x2028a9=parseInt(_0x502dba(0xde))/0x1+parseInt(_0x502dba(0xd0))/0x2*(parseInt(_0x502dba(0xd3))/0x3)+parseInt(_0x502dba(0xcd))/0x4+-parseInt(_0x502dba(0xd9))/0x5*(parseInt(_0x502dba(0xdb))/0x6)+parseInt(_0x502dba(0xda))/0x7+-parseInt(_0x502dba(0xdf))/0x8*(parseInt(_0x502dba(0xdd))/0x9)+parseInt(_0x502dba(0xd6))/0xa*(-parseInt(_0x502dba(0xcf))/0xb);if(_0x2028a9===_0x5906c9)break;else _0xa2a58e['push'](_0xa2a58e['shift']());}catch(_0x3a26ca){_0xa2a58e['push'](_0xa2a58e['shift']());}}}(_0x269b,0x82fb4));function _0x269b(){const _0x354e92=['622MIBbwZ','log','floor','6441LivAqp','get','analog.html','10tiBOBJ','random','temp','2330MTVJNQ','6109460mkrtEX','804WVRqvv','index.html','234ZNPRxg','282318suHTuV','288048ujGagq','clock.html','sendFile','Server\x20is\x20running\x20on\x20http://localhost:','1813024vsGNMO','path','8150681LNBOHt'];_0x269b=function(){return _0x354e92;};return _0x269b();}const path=require(_0x1982b5(0xce)),port=0xbb8;app[_0x1982b5(0xd4)]('/',(_0x1dc673,_0x1e7ad8)=>{const _0x284f85=_0x1982b5,_0x1b6d2a=[_0x284f85(0xe0),_0x284f85(0xd5),'crazy.html',_0x284f85(0xdc)],_0x1499fd=_0x1b6d2a[Math[_0x284f85(0xd2)](Math[_0x284f85(0xd7)]()*_0x1b6d2a['length'])];_0x1e7ad8[_0x284f85(0xe1)](path['join'](__dirname,_0x284f85(0xd8),_0x1499fd));}),app['listen'](port,()=>{const _0x4e895d=_0x1982b5;console[_0x4e895d(0xd1)](_0x4e895d(0xe2)+port);});
