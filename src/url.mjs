import { deflateRaw, inflateRaw } from 'pako';

export function getCodeFromUrl(hash) {
	let songData;
	if(hash.startsWith('#v3b64')) {
		try {
			songData = inflateRaw(dataBuffer, { to: 'string' });
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
		window.location.hash = `#v3b64${ btoa(String.fromCharCode.apply(undefined,
			deflateRaw(JSON.stringify(songData)))).replaceAll('=', '') }`;
}
