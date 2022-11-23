import CryptoJS from "crypto-js";
/**
 * @word 要加密的内容
 * @keyWord String  服务器随机返回的关键字
 *  */
export function aesEncrypt(word: any, keyWord = "XwKsGlMcdPMEhR1B") {
	let key = CryptoJS.enc.Utf8.parse(keyWord);
	let src = CryptoJS.enc.Utf8.parse(word);
	let encrypted = CryptoJS.AES.encrypt(src, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
	return encrypted.toString();
}
