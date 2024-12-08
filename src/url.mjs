import { deflateRaw, inflateRaw } from 'pako';
const mode2 = ['Bytebeat', 'Signed Bytebeat', 'Floatbeat', 'Funcbeat', 'Bitbeat', '2048', 'Logmode', 'LogHack', 'LogHack2', 'Cbrtmode', 'Log10mode'];

export function getCodeFromUrl(hash) {
	let songData;
	if(hash.startsWith('#4')) {
		const dataArr = Uint8Array.from(atob(hash.substring(2)), el => el.charCodeAt());
		try {
			songData = {
				mode: mode2[dataArr[0]],
				sampleRate: new DataView(dataArr.buffer).getFloat32(1, 1),
				code: inflateRaw(new Uint8Array(dataArr.buffer, 5), { to: 'string' })
			};
		} catch(err) {
			console.error(`Couldn't load data from url: ${ err }`);
		}
	} else if(hash.startsWith('#v3b64')) {
		try {
			songData = inflateRaw(
				Uint8Array.from(atob(hash.substring(6)), el => el.charCodeAt()), { to: 'string' });
			if(songData.startsWith('{')) {
				songData = JSON.parse(songData);
				if(songData.formula) { // XXX: old format
					songData.code = songData.formula;
				}
			} else { // XXX: old format
				songData = { code: songData };
			}
		} catch(err) {
			console.error(`Couldn't load data from url: ${ err }`);
		}
	} else {
		console.error('Couldn\'t load data from url: unrecognized url data');
	}
	return songData;
}

export function getUrlFromCode(code, mode, sampleRate) {
	const codeArr = deflateRaw(code);
	// First byte is mode, next 11 bytes is sampleRate, then the code
	const outputArr = new Uint8Array(5 + codeArr.length);
	outputArr[0] = mode2.indexOf(mode);
	outputArr.set(new Uint8Array(new Float32Array([sampleRate]).buffer), 1);
	outputArr.set(codeArr, 5);
	window.location.hash = '11' + btoa(String.fromCharCode.apply(null, outputArr)).replaceAll('=', '');
}
