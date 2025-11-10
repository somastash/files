
/**
 * ピクセル配列を文字列 (Base64) に変換する。
 */
function encodePixels(pix) {
	let bin = '';
	for (let i = 0; i < pix.length; i += 4) {
		let r = pix[i];
		let g = pix[i+1];
		let b = pix[i+2];
		bin += String.fromCharCode(r);
		bin += String.fromCharCode(g);
		bin += String.fromCharCode(b);
	}
	return btoa(bin);
}

/**
 * 文字列をピクセル配列に戻す。
 */
function decodePixels(data, pix) {
	let bin = atob(data);
	let j = 0;
	for (let i = 0; i < pix.length; i += 4) {
		let r = bin.charCodeAt(j++);
		let g = bin.charCodeAt(j++);
		let b = bin.charCodeAt(j++);
		pix[i]   = r;
		pix[i+1] = g;
		pix[i+2] = b;
		pix[i+3] = 255;
	}
}

