class e extends AudioWorkletProcessor{constructor(...t){super(...t),this.audioSample=0,this.byteSample=0,this.drawMode="Points",this.errorDisplayed=!0,this.func=null,this.getValues=null,this.isFuncbeat=!1,this.isPlaying=!1,this.playbackSpeed=1,this.lastByteValue=[null,null],this.lastFuncValue=[null,null],this.lastTime=-1,this.outValue=[0,0],this.sampleRate=8e3,this.sampleRatio=1,Object.seal(this),e.deleteGlobals(),e.freezeGlobals(),this.port.addEventListener("message",(e=>this.receiveData(e.data))),this.port.start()}static deleteGlobals(){for(let e=0;e<26;++e)delete globalThis[String.fromCharCode(65+e)],delete globalThis[String.fromCharCode(97+e)];for(const e in globalThis)Object.prototype.hasOwnProperty.call(globalThis,e)&&delete globalThis[e]}static freezeGlobals(){Object.getOwnPropertyNames(globalThis).forEach((e=>{const t=globalThis[e],s=typeof t;"object"!==s&&"function"!==s||"globalThis"===e||Object.freeze(t),"function"===s&&Object.prototype.hasOwnProperty.call(t,"prototype")&&Object.freeze(t.prototype),Object.defineProperty(globalThis,e,{writable:!1,configurable:!1})}))}static getErrorMessage(e,t){const s=null===t?"compilation":"t="+t;if(!(e instanceof Error))return`${s} thrown: ${"string"==typeof e?e:JSON.stringify(e)}`;const{message:a,lineNumber:i,columnNumber:l}=e;return`${s} error: ${"string"==typeof a?a:JSON.stringify(a)}${"number"==typeof i&&"number"==typeof l?` (at line ${i-3}, character ${+l})`:""}`}process(t,[s]){const a=s[0].length;if(!a||!this.isPlaying)return!0;let i=this.sampleRatio*this.audioSample,{byteSample:l}=this;const o=[],r="Combined"===this.drawMode||"Diagram"===this.drawMode;for(let t=0;t<a;++t){i+=this.sampleRatio;const a=Math.floor(i);if(this.lastTime!==a){let t;const s=Math.floor(l);try{t=this.isFuncbeat?this.func(s/this.sampleRate,this.sampleRate):this.func(s)}catch(a){this.errorDisplayed&&(this.errorDisplayed=!1,this.sendData({error:{message:e.getErrorMessage(a,s),isRuntime:!0}})),t=NaN}t=Array.isArray(t)?[t[0],t[1]]:[t,t];let i=!1,h=2;for(;h--;){try{t[h]=+t[h]}catch(e){t[h]=NaN}r?(isNaN(t[h])?this.lastByteValue[h]=NaN:this.outValue[h]=this.getValues(t[h],h),i=!0):t[h]!==this.lastFuncValue[h]&&(isNaN(t[h])?isNaN(this.lastFuncValue[h])||(this.lastByteValue[h]=NaN,i=!0):(this.outValue[h]=this.getValues(t[h],h),i=!0))}i&&o.push({t:s,value:[...this.lastByteValue]}),l+=a-this.lastTime,this.lastFuncValue=t,this.lastTime=a}s[0][t]=this.outValue[0],s[1][t]=this.outValue[1]}if(Math.abs(l)>Number.MAX_SAFE_INTEGER)return this.resetTime(),!0;this.audioSample+=a;let h=!1;const n={};return l!==this.byteSample&&(h=!0,n.byteSample=this.byteSample=l),o.length&&(h=!0,n.drawBuffer=o),h&&this.sendData(n),!0}receiveData(e){if(void 0!==e.byteSample&&(this.byteSample=+e.byteSample||0,this.resetValues()),!0===e.errorDisplayed&&(this.errorDisplayed=!0),void 0!==e.isPlaying&&(this.isPlaying=e.isPlaying),void 0!==e.playbackSpeed){const t=this.sampleRatio/this.playbackSpeed;this.playbackSpeed=e.playbackSpeed,this.setSampleRatio(t)}if(void 0!==e.mode)switch(this.isFuncbeat="Funcbeat"===e.mode,e.mode){case"Bytebeat":this.getValues=(e,t)=>(this.lastByteValue[t]=255&e)/127.5-1;break;case"Signed Bytebeat":this.getValues=(e,t)=>(this.lastByteValue[t]=e+128&255)/127.5-1;break;case"Floatbeat":case"Funcbeat":this.getValues=(e,t)=>{const s=Math.max(Math.min(e,1),-1);return this.lastByteValue[t]=Math.round(127.5*(s+1)),s};break;default:this.getValues=(e,t)=>this.lastByteValue[t]=NaN}void 0!==e.drawMode&&(this.drawMode=e.drawMode),void 0!==e.setFunction&&this.setFunction(e.setFunction),!0===e.resetTime&&this.resetTime(),void 0!==e.sampleRate&&(this.sampleRate=e.sampleRate),void 0!==e.sampleRatio&&this.setSampleRatio(e.sampleRatio)}sendData(e){this.port.postMessage(e)}resetTime(){this.byteSample=0,this.resetValues(),this.sendData({byteSample:0})}resetValues(){this.audioSample=0,this.lastByteValue=this.lastFuncValue=[null,null],this.lastTime=-1,this.outValue=[0,0]}setFunction(t){const s=Object.getOwnPropertyNames(Math),a=s.map((e=>Math[e]));s.push("int","window"),a.push(Math.floor,globalThis),e.deleteGlobals();let i=!1;const l=this.func;try{this.isFuncbeat?this.func=new Function(...s,t).bind(globalThis,...a):(t=t.trim().replace(/^eval\(unescape\(escape(?:`|\('|\("|\(`)(.*?)(?:`|'\)|"\)|`\)).replace\(\/u\(\.\.\)\/g,["'`]\$1%["'`]\)\)\)$/,((e,t)=>unescape(escape(t).replace(/u(..)/g,"$1%")))),this.func=new Function(...s,"t",`return 0,\n${t||0};`).bind(globalThis,...a)),i=!0,this.isFuncbeat?(this.func=this.func(),this.func(0,this.sampleRate)):this.func(0)}catch(t){return i||(this.func=l),this.errorDisplayed=!1,void this.sendData({error:{message:e.getErrorMessage(t,i?0:null),isCompiled:i},updateUrl:i})}this.errorDisplayed=!1,this.sendData({error:{message:"",isCompiled:i},updateUrl:!0})}setSampleRatio(e){const t=Math.floor(this.sampleRatio*this.audioSample)-this.lastTime;this.sampleRatio=e*this.playbackSpeed,this.lastTime=Math.floor(this.sampleRatio*this.audioSample)-t}}registerProcessor("audioProcessor",e);
//# sourceMappingURL=audio-processor.mjs.map