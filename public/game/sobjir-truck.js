(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e,t,n,r,i,a,o,s,c,l=1e3,u=1001,d=1002,f=1003,p=1004,m=1005,h=1006,g=1007,_=1008,v=1009,y=1010,b=1011,x=1012,S=1013,C=1014,w=1015,T=1016,E=1017,D=1018,ee=1020,O=35902,k=35899,A=1021,te=1022,j=1023,ne=1026,M=1027,re=1028,ie=1029,ae=1030,oe=1031,se=1033,ce=33776,le=33777,ue=33778,N=33779,de=35840,fe=35841,pe=35842,me=35843,he=36196,ge=37492,_e=37496,ve=37488,ye=37489,be=37490,xe=37491,Se=37808,Ce=37809,we=37810,Te=37811,Ee=37812,De=37813,Oe=37814,ke=37815,Ae=37816,je=37817,Me=37818,Ne=37819,Pe=37820,P=37821,Fe=36492,Ie=36494,Le=36495,F=36283,Re=36284,I=36285,ze=36286,Be=2300,Ve=2301,He=2302,Ue=2303,We=2400,Ge=2401,Ke=2402,qe=3200,Je=`srgb`,Ye=`srgb-linear`,Xe=`linear`,Ze=`srgb`,Qe=7680,$e=35044,et=35048,tt=2e3;function nt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function rt(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function it(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function at(){let e=it(`canvas`);return e.style.display=`block`,e}var ot={};function st(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function ct(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function L(...e){e=ct(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function R(...e){e=ct(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function lt(...e){let t=e.join(` `);t in ot||(ot[t]=!0,L(...e))}function ut(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var dt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},ft=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},pt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),mt=1234567,ht=Math.PI/180,gt=180/Math.PI;function _t(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(pt[e&255]+pt[e>>8&255]+pt[e>>16&255]+pt[e>>24&255]+`-`+pt[t&255]+pt[t>>8&255]+`-`+pt[t>>16&15|64]+pt[t>>24&255]+`-`+pt[n&63|128]+pt[n>>8&255]+`-`+pt[n>>16&255]+pt[n>>24&255]+pt[r&255]+pt[r>>8&255]+pt[r>>16&255]+pt[r>>24&255]).toLowerCase()}function vt(e,t,n){return Math.max(t,Math.min(n,e))}function yt(e,t){return(e%t+t)%t}function bt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function xt(e,t,n){return e===t?0:(n-e)/(t-e)}function St(e,t,n){return(1-n)*e+n*t}function Ct(e,t,n,r){return St(e,t,1-Math.exp(-n*r))}function wt(e,t=1){return t-Math.abs(yt(e,t*2)-t)}function Tt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Et(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Dt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Ot(e,t){return e+Math.random()*(t-e)}function kt(e){return e*(.5-Math.random())}function At(e){e!==void 0&&(mt=e);let t=mt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function jt(e){return e*ht}function Mt(e){return e*gt}function Nt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Pt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Ft(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function It(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:L(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Lt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Rt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var zt={DEG2RAD:ht,RAD2DEG:gt,generateUUID:_t,clamp:vt,euclideanModulo:yt,mapLinear:bt,inverseLerp:xt,lerp:St,damp:Ct,pingpong:wt,smoothstep:Tt,smootherstep:Et,randInt:Dt,randFloat:Ot,randFloatSpread:kt,seededRandom:At,degToRad:jt,radToDeg:Mt,isPowerOfTwo:Nt,ceilPowerOfTwo:Pt,floorPowerOfTwo:Ft,setQuaternionFromProperEuler:It,normalize:Rt,denormalize:Lt};o=Symbol.iterator;var z=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[o](){yield this.x,yield this.y}};e=z,e.prototype.isVector2=!0;var Bt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:L(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};s=Symbol.iterator;var B=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ht.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ht.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vt.copy(this).projectOnVector(e),this.sub(Vt)}reflect(e){return this.sub(Vt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[s](){yield this.x,yield this.y,yield this.z}};t=B,t.prototype.isVector3=!0;var Vt=new B,Ht=new Bt,V=class{constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return lt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Ut.makeScale(e,t)),this}rotate(e){return lt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Ut.makeRotation(-e)),this}translate(e,t){return lt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Ut.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};n=V,n.prototype.isMatrix3=!0;var Ut=new V,Wt=new V().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gt=new V().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kt(){let e={enabled:!0,workingColorSpace:Ye,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Jt(e.r),e.g=Jt(e.g),e.b=Jt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Yt(e.r),e.g=Yt(e.g),e.b=Yt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Xe:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return lt(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return lt(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ye]:{primaries:t,whitePoint:r,transfer:Xe,toXYZ:Wt,fromXYZ:Gt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:t,whitePoint:r,transfer:Ze,toXYZ:Wt,fromXYZ:Gt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}}),e}var qt=Kt();function Jt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Yt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Xt,Zt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xt===void 0&&(Xt=it(`canvas`)),Xt.width=e.width,Xt.height=e.height;let t=Xt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Xt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=it(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Jt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Jt(t[e]/255)*255):t[e]=Jt(t[e]);return{data:t,width:e.width,height:e.height}}return L(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Qt=0,$t=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Qt++}),this.uuid=_t(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(en(r[t].image)):e.push(en(r[t]))}else e=en(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function en(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Zt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(L(`Texture: Unable to serialize Texture.`),{})}var tn=0,nn=new B,rn=class e extends ft{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=u,i=u,a=h,o=_,s=j,c=v,l=e.DEFAULT_ANISOTROPY,d=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tn++}),this.uuid=_t(),this.name=``,this.source=new $t(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new z(0,0),this.repeat=new z(1,1),this.center=new z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new V,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(nn).x}get height(){return this.source.getSize(nn).y}get depth(){return this.source.getSize(nn).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){L(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?L(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case l:e.x-=Math.floor(e.x);break;case u:e.x=e.x<0?0:1;break;case d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case l:e.y-=Math.floor(e.y);break;case u:e.y=e.y<0?0:1;break;case d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null,rn.DEFAULT_MAPPING=300,rn.DEFAULT_ANISOTROPY=1,c=Symbol.iterator;var an=class{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[c](){yield this.x,yield this.y,yield this.z,yield this.w}};r=an,r.prototype.isVector4=!0;var on=class extends ft{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:h,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new an(0,0,e,t),this.scissorTest=!1,this.viewport=new an(0,0,e,t),this.textures=[];let r=new rn({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:h,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new $t(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},sn=class extends on{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},cn=class extends rn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=f,this.minFilter=f,this.wrapR=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},ln=class extends rn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=f,this.minFilter=f,this.wrapR=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},un=class e{constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/dn.setFromMatrixColumn(e,0).length(),i=1/dn.setFromMatrixColumn(e,1).length(),a=1/dn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pn,e,mn)}lookAt(e,t,n){let r=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),hn.crossVectors(n,_n),hn.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),hn.crossVectors(n,_n)),hn.normalize(),gn.crossVectors(_n,hn),r[0]=hn.x,r[4]=gn.x,r[8]=_n.x,r[1]=hn.y,r[5]=gn.y,r[9]=_n.y,r[2]=hn.z,r[6]=gn.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],ee=r[13],O=r[2],k=r[6],A=r[10],te=r[14],j=r[3],ne=r[7],M=r[11],re=r[15];return i[0]=a*x+o*T+s*O+c*j,i[4]=a*S+o*E+s*k+c*ne,i[8]=a*C+o*D+s*A+c*M,i[12]=a*w+o*ee+s*te+c*re,i[1]=l*x+u*T+d*O+f*j,i[5]=l*S+u*E+d*k+f*ne,i[9]=l*C+u*D+d*A+f*M,i[13]=l*w+u*ee+d*te+f*re,i[2]=p*x+m*T+h*O+g*j,i[6]=p*S+m*E+h*k+g*ne,i[10]=p*C+m*D+h*A+g*M,i[14]=p*w+m*ee+h*te+g*re,i[3]=_*x+v*T+y*O+b*j,i[7]=_*S+v*E+y*k+b*ne,i[11]=_*C+v*D+y*A+b*M,i[15]=_*w+v*ee+y*te+b*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,ee=d*g-f*h,O=_*ee-v*D+y*E+b*T-x*w+S*C;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/O;return e[0]=(o*ee-s*D+c*E)*k,e[1]=(r*D-n*ee-i*E)*k,e[2]=(m*S-h*x+g*b)*k,e[3]=(d*x-u*S-f*b)*k,e[4]=(s*T-a*ee-c*w)*k,e[5]=(t*ee-r*T+i*w)*k,e[6]=(h*y-p*S-g*v)*k,e[7]=(l*S-d*y+f*v)*k,e[8]=(a*D-o*T+c*C)*k,e[9]=(n*T-t*D-i*C)*k,e[10]=(p*x-m*y+g*_)*k,e[11]=(u*y-l*x-f*_)*k,e[12]=(o*w-a*E-s*C)*k,e[13]=(t*E-n*w+r*C)*k,e[14]=(m*v-p*b-h*_)*k,e[15]=(l*b-u*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=dn.set(r[0],r[1],r[2]).length(),o=dn.set(r[4],r[5],r[6]).length(),s=dn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),fn.copy(this);let c=1/a,l=1/o,u=1/s;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=l,fn.elements[5]*=l,fn.elements[6]*=l,fn.elements[8]*=u,fn.elements[9]*=u,fn.elements[10]*=u,t.setFromRotationMatrix(fn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=tt,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=tt,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};i=un,i.prototype.isMatrix4=!0;var dn=new B,fn=new un,pn=new B(0,0,0),mn=new B(1,1,1),hn=new B,gn=new B,_n=new B,vn=new un,yn=new Bt,bn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-vt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(vt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:L(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yn.setFromEuler(this),this.setFromQuaternion(yn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bn.DEFAULT_ORDER=`XYZ`;var xn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Sn=0,Cn=new B,wn=new Bt,Tn=new un,En=new B,Dn=new B,On=new B,kn=new Bt,An=new B(1,0,0),jn=new B(0,1,0),Mn=new B(0,0,1),Nn={type:`added`},Pn={type:`removed`},Fn={type:`childadded`,child:null},In={type:`childremoved`,child:null},Ln=class e extends ft{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sn++}),this.uuid=_t(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new B,n=new bn,r=new Bt,i=new B(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new un},normalMatrix:{value:new V}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wn.setFromAxisAngle(e,t),this.quaternion.multiply(wn),this}rotateOnWorldAxis(e,t){return wn.setFromAxisAngle(e,t),this.quaternion.premultiply(wn),this}rotateX(e){return this.rotateOnAxis(An,e)}rotateY(e){return this.rotateOnAxis(jn,e)}rotateZ(e){return this.rotateOnAxis(Mn,e)}translateOnAxis(e,t){return Cn.copy(e).applyQuaternion(this.quaternion),this.position.add(Cn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(An,e)}translateY(e){return this.translateOnAxis(jn,e)}translateZ(e){return this.translateOnAxis(Mn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?En.copy(e):En.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Dn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(Dn,En,this.up):Tn.lookAt(En,Dn,this.up),this.quaternion.setFromRotationMatrix(Tn),r&&(Tn.extractRotation(r.matrixWorld),wn.setFromRotationMatrix(Tn),this.quaternion.premultiply(wn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(R(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nn),Fn.child=e,this.dispatchEvent(Fn),Fn.child=null):R(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pn),In.child=e,this.dispatchEvent(In),In.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nn),Fn.child=e,this.dispatchEvent(Fn),Fn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dn,e,On),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dn,kn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Ln.DEFAULT_UP=new B(0,1,0),Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Rn=class extends Ln{constructor(){super(),this.isGroup=!0,this.type=`Group`}},zn={type:`move`},Bn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Rn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Vn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Un={h:0,s:0,l:0};function Wn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var H=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Je){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=qt.workingColorSpace){return this.r=e,this.g=t,this.b=n,qt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=qt.workingColorSpace){if(e=yt(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Wn(i,r,e+1/3),this.g=Wn(i,r,e),this.b=Wn(i,r,e-1/3)}return qt.colorSpaceToWorking(this,r),this}setStyle(e,t=Je){function n(t){t!==void 0&&parseFloat(t)<1&&L(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:L(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);L(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Je){let n=Vn[e.toLowerCase()];return n===void 0?L(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jt(e.r),this.g=Jt(e.g),this.b=Jt(e.b),this}copyLinearToSRGB(e){return this.r=Yt(e.r),this.g=Yt(e.g),this.b=Yt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Je){return qt.workingToColorSpace(Gn.copy(this),e),Math.round(vt(Gn.r*255,0,255))*65536+Math.round(vt(Gn.g*255,0,255))*256+Math.round(vt(Gn.b*255,0,255))}getHexString(e=Je){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qt.workingColorSpace){qt.workingToColorSpace(Gn.copy(this),t);let n=Gn.r,r=Gn.g,i=Gn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=qt.workingColorSpace){return qt.workingToColorSpace(Gn.copy(this),t),e.r=Gn.r,e.g=Gn.g,e.b=Gn.b,e}getStyle(e=Je){qt.workingToColorSpace(Gn.copy(this),e);let t=Gn.r,n=Gn.g,r=Gn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(Un);let n=St(Hn.h,Un.h,t),r=St(Hn.s,Un.s,t),i=St(Hn.l,Un.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Gn=new H;H.NAMES=Vn;var Kn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new H(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},qn=class extends Ln{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Jn=new B,Yn=new B,Xn=new B,Zn=new B,Qn=new B,$n=new B,er=new B,tr=new B,nr=new B,rr=new B,ir=new an,ar=new an,or=new an,sr=class e{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Jn.subVectors(e,t),r.cross(Jn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Jn.subVectors(r,t),Yn.subVectors(n,t),Xn.subVectors(e,t);let a=Jn.dot(Jn),o=Jn.dot(Yn),s=Jn.dot(Xn),c=Yn.dot(Yn),l=Yn.dot(Xn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Zn)!==null&&Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Zn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Zn.x),s.addScaledVector(a,Zn.y),s.addScaledVector(o,Zn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return ir.setScalar(0),ar.setScalar(0),or.setScalar(0),ir.fromBufferAttribute(e,t),ar.fromBufferAttribute(e,n),or.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ir,i.x),a.addScaledVector(ar,i.y),a.addScaledVector(or,i.z),a}static isFrontFacing(e,t,n,r){return Jn.subVectors(n,t),Yn.subVectors(e,t),Jn.cross(Yn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),Jn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Qn.subVectors(r,n),$n.subVectors(i,n),tr.subVectors(e,n);let s=Qn.dot(tr),c=$n.dot(tr);if(s<=0&&c<=0)return t.copy(n);nr.subVectors(e,r);let l=Qn.dot(nr),u=$n.dot(nr);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Qn,a);rr.subVectors(e,i);let f=Qn.dot(rr),p=$n.dot(rr);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector($n,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return er.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(er,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Qn,a).addScaledVector($n,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},cr=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ur.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ur.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ur.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,ur):ur.fromBufferAttribute(r,t),ur.applyMatrix4(e.matrixWorld),this.expandByPoint(ur);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),dr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),dr.copy(e.boundingBox)),dr.applyMatrix4(e.matrixWorld),this.union(dr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ur),ur.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vr),yr.subVectors(this.max,vr),fr.subVectors(e.a,vr),pr.subVectors(e.b,vr),mr.subVectors(e.c,vr),hr.subVectors(pr,fr),gr.subVectors(mr,pr),_r.subVectors(fr,mr);let t=[0,-hr.z,hr.y,0,-gr.z,gr.y,0,-_r.z,_r.y,hr.z,0,-hr.x,gr.z,0,-gr.x,_r.z,0,-_r.x,-hr.y,hr.x,0,-gr.y,gr.x,0,-_r.y,_r.x,0];return!Sr(t,fr,pr,mr,yr)||(t=[1,0,0,0,1,0,0,0,1],!Sr(t,fr,pr,mr,yr))?!1:(br.crossVectors(hr,gr),t=[br.x,br.y,br.z],Sr(t,fr,pr,mr,yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ur).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ur).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(lr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),lr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),lr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),lr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),lr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),lr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),lr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),lr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(lr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},lr=[new B,new B,new B,new B,new B,new B,new B,new B],ur=new B,dr=new cr,fr=new B,pr=new B,mr=new B,hr=new B,gr=new B,_r=new B,vr=new B,yr=new B,br=new B,xr=new B;function Sr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){xr.fromArray(e,a);let o=i.x*Math.abs(xr.x)+i.y*Math.abs(xr.y)+i.z*Math.abs(xr.z),s=t.dot(xr),c=n.dot(xr),l=r.dot(xr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Cr=new B,wr=new z,Tr=0,Er=class extends ft{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=$e,this.updateRanges=[],this.gpuType=w,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wr.fromBufferAttribute(this,t),wr.applyMatrix3(e),this.setXY(t,wr.x,wr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Cr.fromBufferAttribute(this,t),Cr.applyMatrix3(e),this.setXYZ(t,Cr.x,Cr.y,Cr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Cr.fromBufferAttribute(this,t),Cr.applyMatrix4(e),this.setXYZ(t,Cr.x,Cr.y,Cr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Cr.fromBufferAttribute(this,t),Cr.applyNormalMatrix(e),this.setXYZ(t,Cr.x,Cr.y,Cr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Cr.fromBufferAttribute(this,t),Cr.transformDirection(e),this.setXYZ(t,Cr.x,Cr.y,Cr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Lt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Lt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Lt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Lt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Lt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),r=Rt(r,this.array),i=Rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Dr=class extends Er{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Or=class extends Er{constructor(e,t,n){super(new Uint32Array(e),t,n)}},kr=class extends Er{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ar=new cr,jr=new B,Mr=new B,Nr=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Ar.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jr.subVectors(e,this.center);let t=jr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(jr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jr.copy(e.center).add(Mr)),this.expandByPoint(jr.copy(e.center).sub(Mr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Pr=0,Fr=new un,Ir=new Ln,Lr=new B,Rr=new cr,zr=new cr,Br=new B,Vr=class e extends ft{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pr++}),this.uuid=_t(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(nt(e)?Or:Dr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new V().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Fr.makeRotationFromQuaternion(e),this.applyMatrix4(Fr),this}rotateX(e){return Fr.makeRotationX(e),this.applyMatrix4(Fr),this}rotateY(e){return Fr.makeRotationY(e),this.applyMatrix4(Fr),this}rotateZ(e){return Fr.makeRotationZ(e),this.applyMatrix4(Fr),this}translate(e,t,n){return Fr.makeTranslation(e,t,n),this.applyMatrix4(Fr),this}scale(e,t,n){return Fr.makeScale(e,t,n),this.applyMatrix4(Fr),this}lookAt(e){return Ir.lookAt(e),Ir.updateMatrix(),this.applyMatrix4(Ir.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new kr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&L(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)R(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Rr.setFromBufferAttribute(n),this.morphTargetsRelative?(Br.addVectors(this.boundingBox.min,Rr.min),this.boundingBox.expandByPoint(Br),Br.addVectors(this.boundingBox.max,Rr.max),this.boundingBox.expandByPoint(Br)):(this.boundingBox.expandByPoint(Rr.min),this.boundingBox.expandByPoint(Rr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&R(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)R(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new B,1/0);else if(e){let n=this.boundingSphere.center;if(Rr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];zr.setFromBufferAttribute(n),this.morphTargetsRelative?(Br.addVectors(Rr.min,zr.min),Rr.expandByPoint(Br),Br.addVectors(Rr.max,zr.max),Rr.expandByPoint(Br)):(Rr.expandByPoint(zr.min),Rr.expandByPoint(zr.max))}Rr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Br.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Br));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Br.fromBufferAttribute(a,t),o&&(Lr.fromBufferAttribute(e,t),Br.add(Lr)),r=Math.max(r,n.distanceToSquared(Br))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&R(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){R(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Er(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new B,s[e]=new B;let c=new B,l=new B,u=new B,d=new z,f=new z,p=new z,m=new B,h=new B;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new B,y=new B,b=new B,x=new B;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Er(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new B,i=new B,a=new B,o=new B,s=new B,c=new B,l=new B,u=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Br.fromBufferAttribute(e,t),Br.normalize(),e.setXYZ(t,Br.x,Br.y,Br.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Er(a,r,i)}if(this.index===null)return L(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Hr=new B,Ur=new B,Wr=new V,Gr=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Hr.subVectors(n,t).cross(Ur.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Hr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Wr.getNormalMatrix(e),r=this.coplanarPoint(Hr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Kr=0,qr=class extends ft{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kr++}),this.uuid=_t(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new H(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qe,this.stencilZFail=Qe,this.stencilZPass=Qe,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){L(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?L(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new H().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Gr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new z().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new z().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Jr=new B,Yr=new B,Xr=new B,Zr=new B,Qr=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Jr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jr.copy(this.origin).addScaledVector(this.direction,t),Jr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Yr.copy(e).add(t).multiplyScalar(.5),Xr.copy(t).sub(e).normalize(),Zr.copy(this.origin).sub(Yr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Xr),o=Zr.dot(this.direction),s=-Zr.dot(Xr),c=Zr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Yr).addScaledVector(Xr,d),f}intersectSphere(e,t){if(e.radius<0)return null;Jr.subVectors(e.center,this.origin);let n=Jr.dot(this.direction),r=Jr.dot(Jr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Jr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,ee,O,k,A,te,j;if(y>=b&&y>=x?(w=s,D=u,k=p,j=g,s>=0?(S=c,C=l,T=d,E=f,ee=m,O=h,A=_,te=v):(S=l,C=c,T=f,E=d,ee=h,O=m,A=v,te=_)):b>=x?(w=c,D=d,k=m,j=_,c>=0?(S=l,C=s,T=f,E=u,ee=h,O=p,A=v,te=g):(S=s,C=l,T=u,E=f,ee=p,O=h,A=g,te=v)):(w=l,D=f,k=h,j=v,l>=0?(S=s,C=c,T=u,E=d,ee=p,O=m,A=g,te=_):(S=c,C=s,T=d,E=u,ee=m,O=p,A=_,te=g)),w===0)return null;let ne=S/w,M=C/w,re=1/w,ie=T-ne*D,ae=E-M*D,oe=ee-ne*k,se=O-M*k,ce=A-ne*j,le=te-M*j,ue=ce*se-le*oe,N=ie*le-ae*ce,de=oe*ae-se*ie;if(r){if(ue<0||N<0||de<0)return null}else if((ue<0||N<0||de<0)&&(ue>0||N>0||de>0))return null;let fe=ue+N+de;if(fe===0)return null;let pe=re*(ue*D+N*k+de*j);return(fe>0?pe<0:pe>0)?null:this.at(pe/fe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$r=class extends qr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new H(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ei=new un,ti=new Qr,ni=new Nr,ri=new B,ii=new B,ai=new B,oi=new B,si=new B,ci=new B,li=new B,ui=new B,U=class extends Ln{constructor(e=new Vr,t=new $r){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){ci.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(si.fromBufferAttribute(s,e),a?ci.addScaledVector(si,r):ci.addScaledVector(si.sub(t),r))}t.add(ci)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ni.copy(n.boundingSphere),ni.applyMatrix4(i),ti.copy(e.ray).recast(e.near),!(ni.containsPoint(ti.origin)===!1&&(ti.intersectSphere(ni,ri)===null||ti.origin.distanceToSquared(ri)>(e.far-e.near)**2))&&(ei.copy(i).invert(),ti.copy(e.ray).applyMatrix4(ei),(n.boundingBox===null||ti.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,ti)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=fi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=fi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=fi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=fi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function di(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;ui.copy(s),ui.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(ui);return l<n.near||l>n.far?null:{distance:l,point:ui.clone(),object:e}}function fi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,ii),e.getVertexPosition(c,ai),e.getVertexPosition(l,oi);let u=di(e,t,n,r,ii,ai,oi,li);if(u){let e=new B;sr.getBarycoord(li,ii,ai,oi,e),i&&(u.uv=sr.getInterpolatedAttribute(i,s,c,l,e,new z)),a&&(u.uv1=sr.getInterpolatedAttribute(a,s,c,l,e,new z)),o&&(u.normal=sr.getInterpolatedAttribute(o,s,c,l,e,new B),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new B,materialIndex:0};sr.getNormal(ii,ai,oi,t.normal),u.face=t,u.barycoord=e}return u}var pi=class extends rn{constructor(e=null,t=1,n=1,r,i,a,o,s,c=f,l=f,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},mi=class extends Er{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},hi=new un,gi=new un,_i=[],vi=new cr,yi=new un,bi=new U,xi=new Nr,Si=class extends U{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new mi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,yi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new cr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hi),vi.copy(e.boundingBox).applyMatrix4(hi),this.boundingBox.union(vi)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hi),xi.copy(e.boundingSphere).applyMatrix4(hi),this.boundingSphere.union(xi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(bi.geometry=this.geometry,bi.material=this.material,bi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xi.copy(this.boundingSphere),xi.applyMatrix4(n),e.ray.intersectsSphere(xi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,hi),gi.multiplyMatrices(n,hi),bi.matrixWorld=gi,bi.raycast(e,_i);for(let e=0,n=_i.length;e<n;e++){let n=_i[e];n.instanceId=i,n.object=this,t.push(n)}_i.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new mi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new pi(new Float32Array(r*this.count),r,this.count,re,w));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ci=new Nr,wi=new z(.5,.5),Ti=new B,Ei=class{constructor(e=new Gr,t=new Gr,n=new Gr,r=new Gr,i=new Gr,a=new Gr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=tt,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(e){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476+wi.distanceTo(e.center),Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ti.x=r.normal.x>0?e.max.x:e.min.x,Ti.y=r.normal.y>0?e.max.y:e.min.y,Ti.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ti)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Di=class extends qr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new H(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Oi=new B,ki=new B,Ai=new un,ji=new Qr,Mi=new Nr,Ni=new B,Pi=new B,Fi=class extends Ln{constructor(e=new Vr,t=new Di){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Oi.fromBufferAttribute(t,e-1),ki.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Oi.distanceTo(ki);e.setAttribute(`lineDistance`,new kr(n,1))}else L(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mi.copy(n.boundingSphere),Mi.applyMatrix4(r),Mi.radius+=i,e.ray.intersectsSphere(Mi)===!1)return;Ai.copy(r).invert(),ji.copy(e.ray).applyMatrix4(Ai);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Ii(this,e,ji,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Ii(this,e,ji,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Ii(this,e,ji,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Ii(this,e,ji,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ii(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Oi.fromBufferAttribute(s,i),ki.fromBufferAttribute(s,a),n.distanceSqToSegment(Oi,ki,Ni,Pi)>r)return;Ni.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Ni);if(!(c<t.near||c>t.far))return{distance:c,point:Pi.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Li=new B,Ri=new B,zi=class extends Fi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Li.fromBufferAttribute(t,e),Ri.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Li.distanceTo(Ri);e.setAttribute(`lineDistance`,new kr(n,1))}else L(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Bi=class extends qr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new H(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vi=new un,Hi=new Qr,Ui=new Nr,Wi=new B,Gi=class extends Ln{constructor(e=new Vr,t=new Bi){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ui.copy(n.boundingSphere),Ui.applyMatrix4(r),Ui.radius+=i,e.ray.intersectsSphere(Ui)===!1)return;Vi.copy(r).invert(),Hi.copy(e.ray).applyMatrix4(Vi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Wi.fromBufferAttribute(l,n),Ki(Wi,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Wi.fromBufferAttribute(l,a),Ki(Wi,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ki(e,t,n,r,i,a,o){let s=Hi.distanceSqToPoint(e);if(s<n){let n=new B;Hi.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var qi=class extends rn{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ji=class extends rn{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Yi=class extends rn{constructor(e,t,n=C,r,i,a,o=f,s=f,c,l=ne,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $t(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Xi=class extends Yi{constructor(e,t=C,n=301,r,i,a=f,o=f,s,c=ne){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Zi=class extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Qi=class e extends Vr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new kr(c,3)),this.setAttribute(`normal`,new kr(l,3)),this.setAttribute(`uv`,new kr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new B;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},$i=class e extends Vr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new B,l=new z;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new kr(a,3)),this.setAttribute(`normal`,new kr(o,3)),this.setAttribute(`uv`,new kr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ea=class e extends Vr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new kr(u,3)),this.setAttribute(`normal`,new kr(d,3)),this.setAttribute(`uv`,new kr(f,2));function _(){let a=new B,_=new B,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new z,m=new B,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ta=class e extends ea{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},na=class e extends Vr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new kr(i,3)),this.setAttribute(`normal`,new kr(i.slice(),3)),this.setAttribute(`uv`,new kr(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new B,r=new B,i=new B;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new B;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new B;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new B,t=new B,n=new B,r=new B,o=new z,s=new z,c=new z;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},ra=new B,ia=new B,aa=new B,oa=new sr,sa=class extends Vr{constructor(e=null,t=1){if(super(),this.type=`EdgesGeometry`,this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=1e4,r=Math.cos(ht*t),i=e.getIndex(),a=e.getAttribute(`position`),o=i?i.count:a.count,s=[0,0,0],c=[`a`,`b`,`c`],l=[,,,],u={},d=[];for(let e=0;e<o;e+=3){i?(s[0]=i.getX(e),s[1]=i.getX(e+1),s[2]=i.getX(e+2)):(s[0]=e,s[1]=e+1,s[2]=e+2);let{a:t,b:o,c:f}=oa;if(t.fromBufferAttribute(a,s[0]),o.fromBufferAttribute(a,s[1]),f.fromBufferAttribute(a,s[2]),oa.getNormal(aa),l[0]=`${Math.round(t.x*n)},${Math.round(t.y*n)},${Math.round(t.z*n)}`,l[1]=`${Math.round(o.x*n)},${Math.round(o.y*n)},${Math.round(o.z*n)}`,l[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,l[0]!==l[1]&&l[1]!==l[2]&&l[2]!==l[0])for(let e=0;e<3;e++){let t=(e+1)%3,n=l[e],i=l[t],a=oa[c[e]],o=oa[c[t]],f=`${n}_${i}`,p=`${i}_${n}`;p in u&&u[p]?(aa.dot(u[p].normal)<=r&&(d.push(a.x,a.y,a.z),d.push(o.x,o.y,o.z)),u[p]=null):f in u||(u[f]={index0:s[e],index1:s[t],normal:aa.clone()})}}for(let e in u)if(u[e]){let{index0:t,index1:n}=u[e];ra.fromBufferAttribute(a,t),ia.fromBufferAttribute(a,n),d.push(ra.x,ra.y,ra.z),d.push(ia.x,ia.y,ia.z)}this.setAttribute(`position`,new kr(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ca=class e extends na{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},la=class e extends Vr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new kr(p,3)),this.setAttribute(`normal`,new kr(m,3)),this.setAttribute(`uv`,new kr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},ua=class e extends Vr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new B,d=new B,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new kr(p,3)),this.setAttribute(`normal`,new kr(m,3)),this.setAttribute(`uv`,new kr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function da(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(pa(i))i.isRenderTargetTexture?(L(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(pa(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function fa(e){let t={};for(let n=0;n<e.length;n++){let r=da(e[n]);for(let e in r)t[e]=r[e]}return t}function pa(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function ma(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function ha(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}var ga={clone:da,merge:fa},_a=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,va=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ya=class extends qr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_a,this.fragmentShader=va,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=da(e.uniforms),this.uniformsGroups=ma(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new H().setHex(r.value);break;case`v2`:this.uniforms[n].value=new z().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new B().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new an().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new V().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new un().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ba=class extends ya{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},xa=class extends qr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new H(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new H(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Sa=class extends qr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=qe,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ca=class extends qr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function wa(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Ta(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Ea=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Da=class extends Ea{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:We,endingEnd:We}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ge:i=e,o=2*t-n;break;case Ke:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Ge:a=e,s=2*n-t;break;case Ke:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Oa=class extends Ea{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},ka=class extends Ea{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Aa=class extends Ea{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Na(n,t,g,y,r);i[p]=ja(x,o,_,b,m)}return i}};function ja(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Ma(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Na(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=ja(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Ma(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Pa=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=wa(t,this.TimeBufferType),this.values=wa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:wa(e.times,Array),values:wa(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Ta(e.settings)&&(n.settings={inTangents:wa(e.settings.inTangents,Array),outTangents:wa(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Oa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Da(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Aa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Be:t=this.InterpolantFactoryMethodDiscrete;break;case Ve:t=this.InterpolantFactoryMethodLinear;break;case He:t=this.InterpolantFactoryMethodSmooth;break;case Ue:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return L(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Be;case this.InterpolantFactoryMethodLinear:return Ve;case this.InterpolantFactoryMethodSmooth:return He;case this.InterpolantFactoryMethodBezier:return Ue}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Ta(this.settings)&&(Fa(this.settings.inTangents,e),Fa(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(R(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(R(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){R(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){R(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&rt(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){R(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===He,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Ta(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Fa(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Pa.prototype.ValueTypeName=``,Pa.prototype.TimeBufferType=Float32Array,Pa.prototype.ValueBufferType=Float32Array,Pa.prototype.DefaultInterpolation=Ve;var Ia=class extends Pa{constructor(e,t,n){super(e,t,n)}};Ia.prototype.ValueTypeName=`bool`,Ia.prototype.ValueBufferType=Array,Ia.prototype.DefaultInterpolation=Be,Ia.prototype.InterpolantFactoryMethodLinear=void 0,Ia.prototype.InterpolantFactoryMethodSmooth=void 0;var La=class extends Pa{constructor(e,t,n,r){super(e,t,n,r)}};La.prototype.ValueTypeName=`color`;var Ra=class extends Pa{constructor(e,t,n,r){super(e,t,n,r)}};Ra.prototype.ValueTypeName=`number`;var za=class extends Ea{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Bt.slerpFlat(i,0,a,c-o,a,c,s);return i}},Ba=class extends Pa{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new za(this.times,this.values,this.getValueSize(),e)}};Ba.prototype.ValueTypeName=`quaternion`,Ba.prototype.InterpolantFactoryMethodSmooth=void 0;var Va=class extends Pa{constructor(e,t,n){super(e,t,n)}};Va.prototype.ValueTypeName=`string`,Va.prototype.ValueBufferType=Array,Va.prototype.DefaultInterpolation=Be,Va.prototype.InterpolantFactoryMethodLinear=void 0,Va.prototype.InterpolantFactoryMethodSmooth=void 0;var Ha=class extends Pa{constructor(e,t,n,r){super(e,t,n,r)}};Ha.prototype.ValueTypeName=`vector`;var Ua=class extends Ln{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new H(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Wa=class extends Ua{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new H(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ga=new un,Ka=new B,qa=new B,Ja=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new z(512,512),this.mapType=v,this.map=null,this.mapPass=null,this.matrix=new un,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ei,this._frameExtents=new z(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ka.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ka),qa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qa),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Ga.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ga,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ga)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ya=new B,Xa=new Bt,Za=new B,Qa=class extends Ln{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=tt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ya,Xa,Za),Za.x===1&&Za.y===1&&Za.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ya,Xa,Za.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ya,Xa,Za),Za.x===1&&Za.y===1&&Za.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ya,Xa,Za.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},$a=new B,eo=new z,to=new z,no=class extends Qa{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=gt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ht*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gt*2*Math.atan(Math.tan(ht*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$a.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($a.x,$a.y).multiplyScalar(-e/$a.z),$a.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($a.x,$a.y).multiplyScalar(-e/$a.z)}getViewSize(e,t){return this.getViewBounds(e,eo,to),t.subVectors(to,eo)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ht*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ro=class extends Ja{constructor(){super(new no(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=gt*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},io=class extends Ua{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new ro}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},ao=class extends Qa{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},oo=class extends Ja{constructor(){super(new ao(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},so=class extends Ua{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new oo}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},co=-90,lo=1,uo=class extends Ln{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new no(co,lo,e,t);r.layers=this.layers,this.add(r);let i=new no(co,lo,e,t);i.layers=this.layers,this.add(i);let a=new no(co,lo,e,t);a.layers=this.layers,this.add(a);let o=new no(co,lo,e,t);o.layers=this.layers,this.add(o);let s=new no(co,lo,e,t);s.layers=this.layers,this.add(s);let c=new no(co,lo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},fo=class extends no{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},po=`\\[\\]\\.:\\/`,mo=RegExp(`[\\[\\]\\.:\\/]`,`g`),ho=`[^\\[\\]\\.:\\/]`,go=`[^`+po.replace(`\\.`,``)+`]`,_o=`((?:WC+[\\/:])*)`.replace(`WC`,ho),vo=`(WCOD+)?`.replace(`WCOD`,go),yo=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,ho),bo=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,ho),xo=RegExp(`^`+_o+vo+yo+bo+`$`),So=[`material`,`materials`,`bones`,`map`],Co=class{constructor(e,t,n){let r=n||wo.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},wo=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(mo,``)}static parseTrackName(e){let t=xo.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);So.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){L(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){R(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){R(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){R(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){R(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){R(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;R(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};wo.Composite=Co,wo.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},wo.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},wo.prototype.GetterByBindingType=[wo.prototype._getValue_direct,wo.prototype._getValue_array,wo.prototype._getValue_arrayElement,wo.prototype._getValue_toArray],wo.prototype.SetterByBindingTypeAndVersioning=[[wo.prototype._setValue_direct,wo.prototype._setValue_direct_setNeedsUpdate,wo.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wo.prototype._setValue_array,wo.prototype._setValue_array_setNeedsUpdate,wo.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wo.prototype._setValue_arrayElement,wo.prototype._setValue_arrayElement_setNeedsUpdate,wo.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wo.prototype._setValue_fromArray,wo.prototype._setValue_fromArray_setNeedsUpdate,wo.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],a=class{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}},a.prototype.isMatrix2=!0;function To(e,t,n,r){let i=Eo(r);switch(n){case A:return e*t;case re:return e*t/i.components*i.byteLength;case ie:return e*t/i.components*i.byteLength;case ae:return e*t*2/i.components*i.byteLength;case oe:return e*t*2/i.components*i.byteLength;case te:return e*t*3/i.components*i.byteLength;case j:return e*t*4/i.components*i.byteLength;case se:return e*t*4/i.components*i.byteLength;case ce:case le:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ue:case N:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fe:case me:return Math.max(e,16)*Math.max(t,8)/4;case de:case pe:return Math.max(e,8)*Math.max(t,8)/2;case he:case ge:case ve:case ye:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case _e:case be:case xe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Se:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ce:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case we:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Te:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Ee:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case De:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Oe:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ke:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ae:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case je:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Me:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ne:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Pe:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case P:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Fe:case Ie:case Le:return Math.ceil(e/4)*Math.ceil(t/4)*16;case F:case Re:return Math.ceil(e/4)*Math.ceil(t/4)*8;case I:case ze:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Eo(e){switch(e){case v:case y:return{byteLength:1,components:1};case x:case b:case T:return{byteLength:2,components:1};case E:case D:return{byteLength:2,components:4};case C:case S:case w:return{byteLength:4,components:1};case O:case k:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?L(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Do(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Oo(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var W={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},G={common:{diffuse:{value:new H(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new V}},envmap:{envMap:{value:null},envMapRotation:{value:new V},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new V}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new V}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new V},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new V},normalScale:{value:new z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new V},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new V}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new V}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new V}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new H(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new H(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0},uvTransform:{value:new V}},sprite:{diffuse:{value:new H(16777215)},opacity:{value:1},center:{value:new z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}}},ko={basic:{uniforms:fa([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.fog]),vertexShader:W.meshbasic_vert,fragmentShader:W.meshbasic_frag},lambert:{uniforms:fa([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new H(0)},envMapIntensity:{value:1}}]),vertexShader:W.meshlambert_vert,fragmentShader:W.meshlambert_frag},phong:{uniforms:fa([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new H(0)},specular:{value:new H(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:W.meshphong_vert,fragmentShader:W.meshphong_frag},standard:{uniforms:fa([G.common,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.roughnessmap,G.metalnessmap,G.fog,G.lights,{emissive:{value:new H(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:W.meshphysical_vert,fragmentShader:W.meshphysical_frag},toon:{uniforms:fa([G.common,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.gradientmap,G.fog,G.lights,{emissive:{value:new H(0)}}]),vertexShader:W.meshtoon_vert,fragmentShader:W.meshtoon_frag},matcap:{uniforms:fa([G.common,G.bumpmap,G.normalmap,G.displacementmap,G.fog,{matcap:{value:null}}]),vertexShader:W.meshmatcap_vert,fragmentShader:W.meshmatcap_frag},points:{uniforms:fa([G.points,G.fog]),vertexShader:W.points_vert,fragmentShader:W.points_frag},dashed:{uniforms:fa([G.common,G.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:W.linedashed_vert,fragmentShader:W.linedashed_frag},depth:{uniforms:fa([G.common,G.displacementmap]),vertexShader:W.depth_vert,fragmentShader:W.depth_frag},normal:{uniforms:fa([G.common,G.bumpmap,G.normalmap,G.displacementmap,{opacity:{value:1}}]),vertexShader:W.meshnormal_vert,fragmentShader:W.meshnormal_frag},sprite:{uniforms:fa([G.sprite,G.fog]),vertexShader:W.sprite_vert,fragmentShader:W.sprite_frag},background:{uniforms:{uvTransform:{value:new V},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:W.background_vert,fragmentShader:W.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new V}},vertexShader:W.backgroundCube_vert,fragmentShader:W.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:W.cube_vert,fragmentShader:W.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:W.equirect_vert,fragmentShader:W.equirect_frag},distance:{uniforms:fa([G.common,G.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:W.distance_vert,fragmentShader:W.distance_frag},shadow:{uniforms:fa([G.lights,G.fog,{color:{value:new H(0)},opacity:{value:1}}]),vertexShader:W.shadow_vert,fragmentShader:W.shadow_frag}};ko.physical={uniforms:fa([ko.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new V},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new V},clearcoatNormalScale:{value:new z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new V},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new V},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new V},sheen:{value:0},sheenColor:{value:new H(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new V},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new V},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new V},transmissionSamplerSize:{value:new z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new V},attenuationDistance:{value:0},attenuationColor:{value:new H(0)},specularColor:{value:new H(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new V},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new V},anisotropyVector:{value:new z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new V}}]),vertexShader:W.meshphysical_vert,fragmentShader:W.meshphysical_frag};var Ao={r:0,b:0,g:0},jo=new un,Mo=new V;Mo.set(-1,0,0,0,1,0,0,0,1);function No(e,t,n,r,i,a){let o=new H(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new U(new Qi(1,1,1),new ya({name:`BackgroundCubeMaterial`,uniforms:da(ko.backgroundCube.uniforms),vertexShader:ko.backgroundCube.vertexShader,fragmentShader:ko.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(jo.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Mo),l.material.toneMapped=qt.getTransfer(i.colorSpace)!==Ze,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new U(new la(2,2),new ya({name:`BackgroundMaterial`,uniforms:da(ko.background.uniforms),vertexShader:ko.background.vertexShader,fragmentShader:ko.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=qt.getTransfer(i.colorSpace)!==Ze,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Ao,ha(e)),n.buffers.color.setClear(Ao.r,Ao.g,Ao.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Po(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Fo(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Io(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(L(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&L(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Lo(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Gr,s=new V,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Ro=4,zo=6,Bo=20,Vo=256,Ho=new ao,Uo=new H,Wo=null,Go=0,Ko=0,qo=!1,Jo=new B,Yo=new B,Xo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Jo}=i;Wo=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),Ko=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ns(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Wo,Go,Ko),this._renderer.xr.enabled=qo,e.scissorTest=!1,$o(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wo=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),Ko=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:h,minFilter:h,generateMipmaps:!1,type:T,format:j,colorSpace:Ye,depthBuffer:!1},r=Qo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qo(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Zo(r)),this._blurMaterial=ts(r,e,t),this._ggxMaterial=es(r,e,t)}return r}_compileMaterial(e){let t=new U(new Vr,e);this._renderer.compile(t,Ho)}_sceneToCubeUV(e,t,n,r,i){let a=new no(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Uo),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new U(new Qi,new $r({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Uo),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;$o(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rs()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ns());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;$o(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Ho)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Ro?n-d+Ro:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,$o(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Ho),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,$o(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Ho)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];$o(t,3*l*(r>this._lodMax-Ro?r-this._lodMax+Ro:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Ho)}};function Zo(e){let t=[],n=[],r=e,i=e-Ro+1+zo;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Yo.set(1,r,n):e===1?Yo.set(-n,1,-r):e===2?Yo.set(-n,r,1):e===3?Yo.set(-1,r,-n):e===4?Yo.set(-n,-1,r):Yo.set(n,r,-1),Yo.toArray(l,(e*6+t)*3)}}let u=new Vr;u.setAttribute(`position`,new Er(c,3)),u.setAttribute(`outputDirection`,new Er(l,3)),n.push(new U(u,null)),r>Ro&&r--}return{lodMeshes:n,sizeLods:t}}function Qo(e,t,n){let r=new sn(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function $o(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function es(e,t,n){return new ya({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Vo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:is(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ts(e,t,n){return new ya({name:`SphericalGaussianBlur`,defines:{SAMPLES:Bo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:is(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ns(){return new ya({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:is(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function rs(){return new ya({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:is(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function is(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var as=class extends sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new qi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Qi(5,5,5),i=new ya({name:`CubemapFromEquirect`,uniforms:da(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new U(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=h),new uo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function os(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new as(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Xo(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Xo(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function ss(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&lt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function cs(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Or:Dr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function ls(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function us(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:R(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function ds(e,t,n){let r=new WeakMap,i=new an;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new cn(h,p,m,u);g.type=w,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new z(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function fs(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var ps={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function ms(e,t,n,r,i,a){let o=new sn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Vr;l.setAttribute(`position`,new kr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new kr([0,2,0,0,2,0],2));let u=new ba({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new U(l,u),f=new ao(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new sn(t,n,{type:T,depthBuffer:!1,stencilBuffer:!1}),c=new sn(t,n,{type:T,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},qt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=ps[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var hs=new rn,gs=new Yi(1,1),_s=new cn,vs=new ln,ys=new qi,bs=[],xs=[],Ss=new Float32Array(16),Cs=new Float32Array(9),ws=new Float32Array(4);function Ts(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=bs[i];if(a===void 0&&(a=new Float32Array(i),bs[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Es(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Ds(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Os(e,t){let n=xs[t];n===void 0&&(n=new Int32Array(t),xs[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function ks(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function As(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Es(n,t))return;e.uniform2fv(this.addr,t),Ds(n,t)}}function js(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Es(n,t))return;e.uniform3fv(this.addr,t),Ds(n,t)}}function Ms(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Es(n,t))return;e.uniform4fv(this.addr,t),Ds(n,t)}}function Ns(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Es(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ds(n,t)}else{if(Es(n,r))return;ws.set(r),e.uniformMatrix2fv(this.addr,!1,ws),Ds(n,r)}}function Ps(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Es(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ds(n,t)}else{if(Es(n,r))return;Cs.set(r),e.uniformMatrix3fv(this.addr,!1,Cs),Ds(n,r)}}function Fs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Es(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ds(n,t)}else{if(Es(n,r))return;Ss.set(r),e.uniformMatrix4fv(this.addr,!1,Ss),Ds(n,r)}}function Is(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Ls(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Es(n,t))return;e.uniform2iv(this.addr,t),Ds(n,t)}}function Rs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Es(n,t))return;e.uniform3iv(this.addr,t),Ds(n,t)}}function zs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Es(n,t))return;e.uniform4iv(this.addr,t),Ds(n,t)}}function Bs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Vs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Es(n,t))return;e.uniform2uiv(this.addr,t),Ds(n,t)}}function Hs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Es(n,t))return;e.uniform3uiv(this.addr,t),Ds(n,t)}}function Us(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Es(n,t))return;e.uniform4uiv(this.addr,t),Ds(n,t)}}function Ws(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(gs.compareFunction=n.isReversedDepthBuffer()?518:515,a=gs):a=hs,n.setTexture2D(t||a,i)}function Gs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||vs,i)}function Ks(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||ys,i)}function qs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||_s,i)}function Js(e){switch(e){case 5126:return ks;case 35664:return As;case 35665:return js;case 35666:return Ms;case 35674:return Ns;case 35675:return Ps;case 35676:return Fs;case 5124:case 35670:return Is;case 35667:case 35671:return Ls;case 35668:case 35672:return Rs;case 35669:case 35673:return zs;case 5125:return Bs;case 36294:return Vs;case 36295:return Hs;case 36296:return Us;case 35678:case 36198:case 36298:case 36306:case 35682:return Ws;case 35679:case 36299:case 36307:return Gs;case 35680:case 36300:case 36308:case 36293:return Ks;case 36289:case 36303:case 36311:case 36292:return qs}}function Ys(e,t){e.uniform1fv(this.addr,t)}function Xs(e,t){let n=Ts(t,this.size,2);e.uniform2fv(this.addr,n)}function Zs(e,t){let n=Ts(t,this.size,3);e.uniform3fv(this.addr,n)}function Qs(e,t){let n=Ts(t,this.size,4);e.uniform4fv(this.addr,n)}function $s(e,t){let n=Ts(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function ec(e,t){let n=Ts(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function tc(e,t){let n=Ts(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function nc(e,t){e.uniform1iv(this.addr,t)}function rc(e,t){e.uniform2iv(this.addr,t)}function ic(e,t){e.uniform3iv(this.addr,t)}function ac(e,t){e.uniform4iv(this.addr,t)}function oc(e,t){e.uniform1uiv(this.addr,t)}function sc(e,t){e.uniform2uiv(this.addr,t)}function cc(e,t){e.uniform3uiv(this.addr,t)}function lc(e,t){e.uniform4uiv(this.addr,t)}function uc(e,t,n){let r=this.cache,i=t.length,a=Os(n,i);Es(r,a)||(e.uniform1iv(this.addr,a),Ds(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?gs:hs;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function dc(e,t,n){let r=this.cache,i=t.length,a=Os(n,i);Es(r,a)||(e.uniform1iv(this.addr,a),Ds(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||vs,a[e])}function fc(e,t,n){let r=this.cache,i=t.length,a=Os(n,i);Es(r,a)||(e.uniform1iv(this.addr,a),Ds(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||ys,a[e])}function pc(e,t,n){let r=this.cache,i=t.length,a=Os(n,i);Es(r,a)||(e.uniform1iv(this.addr,a),Ds(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||_s,a[e])}function mc(e){switch(e){case 5126:return Ys;case 35664:return Xs;case 35665:return Zs;case 35666:return Qs;case 35674:return $s;case 35675:return ec;case 35676:return tc;case 5124:case 35670:return nc;case 35667:case 35671:return rc;case 35668:case 35672:return ic;case 35669:case 35673:return ac;case 5125:return oc;case 36294:return sc;case 36295:return cc;case 36296:return lc;case 35678:case 36198:case 36298:case 36306:case 35682:return uc;case 35679:case 36299:case 36307:return dc;case 35680:case 36300:case 36308:case 36293:return fc;case 36289:case 36303:case 36311:case 36292:return pc}}var hc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Js(t.type)}},gc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mc(t.type)}},_c=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},vc=/(\w+)(\])?(\[|\.)?/g;function yc(e,t){e.seq.push(t),e.map[t.id]=t}function bc(e,t,n){let r=e.name,i=r.length;for(vc.lastIndex=0;;){let a=vc.exec(r),o=vc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){yc(n,l===void 0?new hc(s,e,t):new gc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new _c(s),yc(n,e)),n=e}}}var xc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);bc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Sc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Cc=37297,wc=0;function Tc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Ec=new V;function Dc(e){qt._getMatrix(Ec,qt.workingColorSpace,e);let t=`mat3( ${Ec.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(e)){case Xe:return[t,`LinearTransferOETF`];case Ze:return[t,`sRGBTransferOETF`];default:return L(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Oc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Tc(e.getShaderSource(t),r)}return i}function kc(e,t){let n=Dc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Ac={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function jc(e,t){let n=Ac[t];return n===void 0?(L(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Mc=new B;function Nc(){return qt.getLuminanceCoefficients(Mc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Mc.x.toFixed(4)}, ${Mc.y.toFixed(4)}, ${Mc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Pc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Lc).join(`
`)}function Fc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Ic(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Lc(e){return e!==``}function Rc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Bc=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vc(e){return e.replace(Bc,Uc)}var Hc=new Map;function Uc(e,t){let n=W[t];if(n===void 0){let e=Hc.get(t);if(e!==void 0)n=W[e],L(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Vc(n)}var Wc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gc(e){return e.replace(Wc,Kc)}function Kc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function qc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Jc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Yc(e){return Jc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Xc={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Zc(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Xc[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Qc={302:`ENVMAP_MODE_REFRACTION`};function $c(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Qc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var el={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function tl(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:el[e.combine]||`ENVMAP_BLENDING_NONE`}function nl(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function rl(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Yc(n),l=Zc(n),u=$c(n),d=tl(n),f=nl(n),p=Pc(n),m=Fc(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Lc).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Lc).join(`
`),_.length>0&&(_+=`
`)):(g=[qc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Lc).join(`
`),_=[qc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:W.tonemapping_pars_fragment,n.toneMapping===0?``:jc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,W.colorspace_pars_fragment,kc(`linearToOutputTexel`,n.outputColorSpace),Nc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Lc).join(`
`)),o=Vc(o),o=Rc(o,n),o=zc(o,n),s=Vc(s),s=Rc(s,n),s=zc(s,n),o=Gc(o),s=Gc(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Sc(i,i.VERTEX_SHADER,y),S=Sc(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Oc(i,x,`vertex`),n=Oc(i,S,`fragment`);R(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):L(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new xc(i,h),T=Ic(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Cc)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=wc++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var il=0,al=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ol(e),t.set(e,n)),n}},ol=class{constructor(e){this.id=il++,this.code=e,this.usedTimes=0}};function sl(e){return e===1030||e===37490||e===36285}function cl(e,t,n,r,i,a){let o=new xn,s=new al,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&L(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,ee,O,k;if(C){let e=ko[C];D=e.vertexShader,ee=e.fragmentShader}else{D=i.vertexShader,ee=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),te=e.state.buffers.depth.getReversed(),j=h.isInstancedMesh===!0,ne=h.isBatchedMesh===!0,M=!!i.map,re=!!i.matcap,ie=!!x,ae=!!i.aoMap,oe=!!i.lightMap,se=!!i.bumpMap&&i.wireframe===!1,ce=!!i.normalMap,le=!!i.displacementMap,ue=!!i.emissiveMap,N=!!i.metalnessMap,de=!!i.roughnessMap,fe=i.anisotropy>0,pe=i.clearcoat>0,me=i.dispersion>0,he=i.retroreflectivity>0,ge=i.iridescence>0,_e=i.sheen>0,ve=i.transmission>0,ye=fe&&!!i.anisotropyMap,be=pe&&!!i.clearcoatMap,xe=pe&&!!i.clearcoatNormalMap,Se=pe&&!!i.clearcoatRoughnessMap,Ce=ge&&!!i.iridescenceMap,we=ge&&!!i.iridescenceThicknessMap,Te=_e&&!!i.sheenColorMap,Ee=_e&&!!i.sheenRoughnessMap,De=!!i.specularMap,Oe=!!i.specularColorMap,ke=!!i.specularIntensityMap,Ae=ve&&!!i.transmissionMap,je=ve&&!!i.thicknessMap,Me=!!i.gradientMap,Ne=!!i.alphaMap,Pe=i.alphaTest>0,P=!!i.alphaHash,Fe=!!i.extensions,Ie=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ie=e.toneMapping);let Le={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:ee,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:ne,batchingColor:ne&&h._colorsTexture!==null,instancing:j,instancingColor:j&&h.instanceColor!==null,instancingMorph:j&&h.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:qt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:M,matcap:re,envMap:ie,envMapMode:ie&&x.mapping,envMapCubeUVHeight:S,aoMap:ae,lightMap:oe,bumpMap:se,normalMap:ce,displacementMap:le,emissiveMap:ue,normalMapObjectSpace:ce&&i.normalMapType===1,normalMapTangentSpace:ce&&i.normalMapType===0,packedNormalMap:ce&&i.normalMapType===0&&sl(i.normalMap.format),metalnessMap:N,roughnessMap:de,anisotropy:fe,anisotropyMap:ye,clearcoat:pe,clearcoatMap:be,clearcoatNormalMap:xe,clearcoatRoughnessMap:Se,dispersion:me,retroreflection:he,iridescence:ge,iridescenceMap:Ce,iridescenceThicknessMap:we,sheen:_e,sheenColorMap:Te,sheenRoughnessMap:Ee,specularMap:De,specularColorMap:Oe,specularIntensityMap:ke,transmission:ve,transmissionMap:Ae,thicknessMap:je,gradientMap:Me,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ne,alphaTest:Pe,alphaHash:P,combine:i.combine,mapUv:M&&m(i.map.channel),aoMapUv:ae&&m(i.aoMap.channel),lightMapUv:oe&&m(i.lightMap.channel),bumpMapUv:se&&m(i.bumpMap.channel),normalMapUv:ce&&m(i.normalMap.channel),displacementMapUv:le&&m(i.displacementMap.channel),emissiveMapUv:ue&&m(i.emissiveMap.channel),metalnessMapUv:N&&m(i.metalnessMap.channel),roughnessMapUv:de&&m(i.roughnessMap.channel),anisotropyMapUv:ye&&m(i.anisotropyMap.channel),clearcoatMapUv:be&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:xe&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:we&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&m(i.sheenRoughnessMap.channel),specularMapUv:De&&m(i.specularMap.channel),specularColorMapUv:Oe&&m(i.specularColorMap.channel),specularIntensityMapUv:ke&&m(i.specularIntensityMap.channel),transmissionMapUv:Ae&&m(i.transmissionMap.channel),thicknessMapUv:je&&m(i.thicknessMap.channel),alphaMapUv:Ne&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ce||fe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(M||Ne),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ce===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:te,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ie,decodeVideoTexture:M&&i.map.isVideoTexture===!0&&qt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ue&&i.emissiveMap.isVideoTexture===!0&&qt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Fe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Fe&&i.extensions.multiDraw===!0||ne)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=ko[t];n=ga.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new rl(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function ll(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function ul(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function dl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function fl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||ul),r.length>1&&r.sort(t||dl),i.length>1&&i.sort(t||dl)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function pl(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new fl,e.set(t,[i])):n>=r.length?(i=new fl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function ml(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new B,color:new H};break;case`SpotLight`:n={position:new B,direction:new B,color:new H,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new B,color:new H,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new B,skyColor:new H,groundColor:new H};break;case`RectAreaLight`:n={color:new H,position:new B,halfWidth:new B,halfHeight:new B}}return e[t.id]=n,n}}}function hl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var gl=0;function _l(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function vl(e){let t=new ml,n=hl(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new B);let i=new B,a=new un,o=new un;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(_l);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=G.LTC_FLOAT_1,r.rectAreaLTC2=G.LTC_FLOAT_2):(r.rectAreaLTC1=G.LTC_HALF_1,r.rectAreaLTC2=G.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=gl++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function yl(e){let t=new vl(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function bl(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new yl(e),t.set(n,[a])):r>=i.length?(a=new yl(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var xl=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sl=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Cl=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],wl=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Tl=new un,El=new B,Dl=new B;function Ol(e,t,n){let r=new Ei,i=new z,a=new z,o=new an,s=new Sa,c=new Ca,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},p=new ya({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new z},radius:{value:4}},vertexShader:xl,fragmentShader:Sl}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let g=new Vr;g.setAttribute(`position`,new Er(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new U(g,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;this.render=function(t,n,s){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||t.length===0)return;this.type===2&&(L(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.depth.getReversed()===!0?p.buffers.color.setClear(0,0,0,0):p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=y!==this.type;m&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){L(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let g=d.getFrameExtents();i.multiply(g),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/g.x),i.x=a.x*g.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/g.y),i.y=a.y*g.y,d.mapSize.y=a.y));let _=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=_,d.map===null||m===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){L(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new sn(i.x,i.y,{format:ae,type:T,minFilter:h,magFilter:h,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Yi(i.x,i.y,w),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=ne,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=f,d.map.depthTexture.magFilter=f}else l.isPointLight?(d.map=new as(i.x),d.map.depthTexture=new Xi(i.x,C)):(d.map=new sn(i.x,i.y),d.map.depthTexture=new Yi(i.x,i.y,C)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=ne,this.type===1?(d.map.depthTexture.compareFunction=_?518:515,d.map.depthTexture.minFilter=h,d.map.depthTexture.magFilter=h):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=f,d.map.depthTexture.magFilter=f);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let v=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<v;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),El.setFromMatrixPosition(l.matrixWorld),e.position.copy(El),Dl.copy(e.position),Dl.add(Cl[t]),e.up.copy(wl[t]),e.lookAt(Dl),e.updateMatrixWorld(),n.makeTranslation(-El.x,-El.y,-El.z),Tl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Tl,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),p.viewport(o)}r=d.getFrustum(t),S(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&b(d,s),d.needsUpdate=!1}y=this.type,v.needsUpdate=!1,e.setRenderTarget(c,l,d)};function b(n,r){let a=t.update(_);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null?n.mapPass=new sn(i.x,i.y,{format:ae,type:T}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),p.uniforms.shadow_pass.value=n.map.depthTexture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,p,_,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,m,_,null)}function x(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function S(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=x(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=x(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)S(c[e],i,a,o,s)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function kl(e,t){function n(){let t=!1,n=new an,r=null,i=new an(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?N(e.DEPTH_TEST):de(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=dt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?N(e.STENCIL_TEST):de(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new H(0,0,0),T=0,E=!1,D=null,ee=null,O=null,k=null,A=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,ne=0,M=e.getParameter(e.VERSION);M.indexOf(`WebGL`)===-1?M.indexOf(`OpenGL ES`)!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(M)[1]),j=ne>=2):(ne=parseFloat(/^WebGL (\d)/.exec(M)[1]),j=ne>=1);let re=null,ie={},ae=e.getParameter(e.SCISSOR_BOX),oe=e.getParameter(e.VIEWPORT),se=new an().fromArray(ae),ce=new an().fromArray(oe);function le(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ue={};ue[e.TEXTURE_2D]=le(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=le(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[e.TEXTURE_2D_ARRAY]=le(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=le(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),N(e.DEPTH_TEST),o.setFunc(3),ye(!1),be(1),N(e.CULL_FACE),_e(0);function N(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function de(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function fe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function pe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function me(t){return h!==t&&(e.useProgram(t),h=t,!0)}let he={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};he[103]=e.MIN,he[104]=e.MAX;let ge={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function _e(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(de(e.BLEND),g=!1);else if(g===!1&&(N(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:R(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:R(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:R(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:R(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a=a||n,o=o||r,s=s||i,(n!==v||a!==x)&&(e.blendEquationSeparate(he[n],he[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ge[r],ge[i],ge[o],ge[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ve(t,n){t.side===2?de(e.CULL_FACE):N(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ye(r),t.blending===1&&t.transparent===!1?_e(0):_e(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Se(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?N(e.SAMPLE_ALPHA_TO_COVERAGE):de(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function be(t){t===0?de(e.CULL_FACE):(N(e.CULL_FACE),t!==ee&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),ee=t}function xe(t){t!==O&&(j&&e.lineWidth(t),O=t)}function Se(t,n,r){t?(N(e.POLYGON_OFFSET_FILL),(k!==n||A!==r)&&(k=n,A=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):de(e.POLYGON_OFFSET_FILL)}function Ce(t){t?N(e.SCISSOR_TEST):de(e.SCISSOR_TEST)}function we(t){t===void 0&&(t=e.TEXTURE0+te-1),re!==t&&(e.activeTexture(t),re=t)}function Te(t,n,r){r===void 0&&(r=re===null?e.TEXTURE0+te-1:re);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(re!==r&&(e.activeTexture(r),re=r),e.bindTexture(t,n||ue[t]),i.type=t,i.texture=n)}function Ee(){let t=ie[re];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function De(){try{e.compressedTexImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Oe(){try{e.compressedTexImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function ke(){try{e.texSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ae(){try{e.texSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ne(){try{e.texStorage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Pe(){try{e.texStorage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function P(){try{e.texImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Fe(){try{e.texImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ie(t){return d[t]===void 0?e.getParameter(t):d[t]}function Le(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function F(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function Re(t){ce.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ce.copy(t))}function I(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function ze(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Be(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},re=null,ie={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new H(0,0,0),T=0,E=!1,D=null,ee=null,O=null,k=null,A=null,se.set(0,0,e.canvas.width,e.canvas.height),ce.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:N,disable:de,bindFramebuffer:fe,drawBuffers:pe,useProgram:me,setBlending:_e,setMaterial:ve,setFlipSided:ye,setCullFace:be,setLineWidth:xe,setPolygonOffset:Se,setScissorTest:Ce,activeTexture:we,bindTexture:Te,unbindTexture:Ee,compressedTexImage2D:De,compressedTexImage3D:Oe,texImage2D:P,texImage3D:Fe,pixelStorei:Le,getParameter:Ie,updateUBOMapping:I,uniformBlockBinding:ze,texStorage2D:Ne,texStorage3D:Pe,texSubImage2D:ke,texSubImage3D:Ae,compressedTexSubImage2D:je,compressedTexSubImage3D:Me,scissor:F,viewport:Re,reset:Be}}function Al(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new z,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):it(`canvas`)}function T(e,t,n){let r=1,i=Ie(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),L(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&L(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function ee(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function O(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];L(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||L(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Xe:qt.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function k(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,L(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function A(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function te(e){let t=e.target;t.removeEventListener(`dispose`,te),ne(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function j(e){let t=e.target;t.removeEventListener(`dispose`,j),ie(t)}function ne(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=S.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&re(e),Object.keys(i).length===0&&S.delete(n)}r.remove(e)}function re(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=S.get(i);delete a[n.__cacheKey],o.memory.textures--}function ie(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let ae=0;function oe(){ae=0}function se(){return ae}function ce(e){ae=e}function le(){let e=ae;return e>=i.maxTextures&&L(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),ae+=1,e}function ue(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function N(t,i){let a=r.get(t);if(t.isVideoTexture&&P(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)L(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)L(`WebGLRenderer: Texture marked for update but image is incomplete`);else{xe(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function de(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?xe(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function fe(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?xe(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function pe(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?Se(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let me={[l]:e.REPEAT,[u]:e.CLAMP_TO_EDGE,[d]:e.MIRRORED_REPEAT},he={[f]:e.NEAREST,[p]:e.NEAREST_MIPMAP_NEAREST,[m]:e.NEAREST_MIPMAP_LINEAR,[h]:e.LINEAR,[g]:e.LINEAR_MIPMAP_NEAREST,[_]:e.LINEAR_MIPMAP_LINEAR},ge={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function _e(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&L(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,me[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,me[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,me[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,he[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,he[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ge[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ve(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,te));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let s=ue(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&re(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function ye(e,t,n){return Math.floor(Math.floor(e/n)/t)}function be(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=ye(n.start,r.width,4),c=ye(t.start,r.width,4);n.start<=i+1&&a===c&&ye(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function xe(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ve(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=qt.getPrimaries(qt.workingColorSpace),r=o.colorSpace===``?null:qt.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=T(o.image,!1,i.maxTextureSize);t=Fe(o,t);let r=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=O(o.internalFormat,r,f,o.normalized,o.colorSpace,o.isVideoTexture);_e(c,o);let m,h=o.mipmaps,g=o.isVideoTexture!==!0,_=d.__version===void 0||l===!0,v=u.dataReady,y=A(o,t);if(o.isDepthTexture)p=k(o.format===M,o.type),_&&(g?n.texStorage2D(e.TEXTURE_2D,1,p,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,null));else if(o.isDataTexture){if(h.length>0){g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data);o.generateMipmaps=!1}else g?(_&&n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height),v&&be(o,t,r,f)):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){g&&_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,h[0].width,h[0].height,t.depth);for(let i=0,a=h.length;i<a;i++)if(m=h[i],o.format!==1023){if(r!==null){if(g){if(v){if(o.layerUpdates.size>0){let t=To(m.width,m.height,o.format,o.type);for(let a of o.layerUpdates){let o=m.data.subarray(a*t/m.data.BYTES_PER_ELEMENT,(a+1)*t/m.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,m.width,m.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,m.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,m.data,0,0)}else L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,f,m.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,r,f,m.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],o.format===1023?g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data):r===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,m.data):n.compressedTexImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,m.data)}}else if(o.isDataArrayTexture){if(g){if(_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,t.width,t.height,t.depth),v){if(o.layerUpdates.size>0){let i=To(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,f,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,p,t.width,t.height,t.depth,0,r,f,t.data)}else if(o.isData3DTexture)g?(_&&n.texStorage3D(e.TEXTURE_3D,y,p,t.width,t.height,t.depth),v&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)):n.texImage3D(e.TEXTURE_3D,0,p,t.width,t.height,t.depth,0,r,f,t.data);else if(o.isFramebufferTexture){if(_){if(g)n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<y;t++)n.texImage2D(e.TEXTURE_2D,t,p,i,a,0,r,f,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),b.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Ie(h[0]);n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height)}for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,f,m):n.texImage2D(e.TEXTURE_2D,t,p,r,f,m);o.generateMipmaps=!1}else if(g){if(_){let r=Ie(t);n.texStorage2D(e.TEXTURE_2D,y,p,r.width,r.height)}v&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,f,t)}else n.texImage2D(e.TEXTURE_2D,0,p,r,f,t);E(o)&&D(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Se(t,o,s){if(o.image.length!==6)return;let c=ve(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=qt.getPrimaries(qt.workingColorSpace),r=o.colorSpace===``?null:qt.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=T(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Fe(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),v=O(o.internalFormat,g,_,o.normalized,o.colorSpace),y=o.isVideoTexture!==!0,b=u.__version===void 0||c===!0,x=l.dataReady,S=A(o,h);_e(e.TEXTURE_CUBE_MAP,o);let C;if(f){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=m[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];o.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=o.mipmaps,y&&b){C.length>0&&S++;let t=Ie(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}E(o)&&D(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Ce(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=O(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Pe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Ne(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function we(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=k(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Pe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ne(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ne(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=O(o.internalFormat,c,l,o.normalized,o.colorSpace);Pe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ne(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ne(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Te(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,l.__webglTexture&&i.depthTexture.image.width===i.width&&i.depthTexture.image.height===i.height||(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,te)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),_e(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else N(i.depthTexture,0);let u=l.__webglTexture,d=Ne(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Pe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Pe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Ee(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Te(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?Te(i.__webglFramebuffer[0],t,0):Te(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),we(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),we(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function De(t,n,i){let a=r.get(t);n!==void 0&&Ce(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Ee(t)}function Oe(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,j);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Pe(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=O(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Ne(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),we(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),_e(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Ce(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Ce(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);E(i)&&D(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),_e(c,a),Ce(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),E(a)&&D(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),_e(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Ce(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Ce(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);E(i)&&D(r),n.unbindTexture()}t.depthBuffer&&Ee(t)}function ke(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(E(a)){let t=ee(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),D(t),n.unbindTexture()}}}let Ae=[],je=[];function Me(t){if(t.samples>0){if(Pe(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Ae.length=0,je.length=0,Ae.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(Ae.push(l),je.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,je)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ae))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ne(e){return Math.min(i.maxSamples,e.samples)}function Pe(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function P(e){let t=o.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Fe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(qt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&L(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):R(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ie(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=le,this.resetTextureUnits=oe,this.getTextureUnits=se,this.setTextureUnits=ce,this.setTexture2D=N,this.setTexture2DArray=de,this.setTexture3D=fe,this.setTextureCube=pe,this.rebindTextures=De,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Pe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function jl(e,t){function n(n,r=``){let i,a=qt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Ml=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Nl=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Pl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Zi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ya({vertexShader:Ml,fragmentShader:Nl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new U(new la(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Fl=class extends ft{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Pl,g={},_=t.getContextAttributes(),y=null,b=null,x=[],S=[],w=new z,T=null,E=null,D=new no;D.viewport=new an;let O=new no;O.viewport=new an;let k=[D,O],A=new fo,te=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new Bn,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new Bn,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new Bn,x[e]=t),t.getHandSpace()};function ie(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ae(){r.removeEventListener(`select`,ie),r.removeEventListener(`selectstart`,ie),r.removeEventListener(`selectend`,ie),r.removeEventListener(`squeeze`,ie),r.removeEventListener(`squeezestart`,ie),r.removeEventListener(`squeezeend`,ie),r.removeEventListener(`end`,ae),r.removeEventListener(`inputsourceschange`,oe);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}te=null,re=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(y),f=null,d=null,u=null,r=null,b=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),E!==null){let e=E.camera;e.fov=E.fov,e.zoom=E.zoom,e.updateProjectionMatrix(),E=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(y=e.getRenderTarget(),r.addEventListener(`select`,ie),r.addEventListener(`selectstart`,ie),r.addEventListener(`selectend`,ie),r.addEventListener(`squeeze`,ie),r.addEventListener(`squeezestart`,ie),r.addEventListener(`squeezeend`,ie),r.addEventListener(`end`,ae),r.addEventListener(`inputsourceschange`,oe),_.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?M:ne,a=_.stencil?ee:C);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new sn(d.textureWidth,d.textureHeight,{format:j,type:v,depthTexture:new Yi(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new sn(f.framebufferWidth,f.framebufferHeight,{format:j,type:v,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),pe.setContext(r),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function oe(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}let se=new B,ce=new B;function le(e,t,n){se.setFromMatrixPosition(t.matrixWorld),ce.setFromMatrixPosition(n.matrixWorld);let r=se.distanceTo(ce),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ue(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),A.near=O.near=D.near=t,A.far=O.far=D.far=n,(te!==A.near||re!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),te=A.near,re=A.far),A.layers.mask=e.layers.mask|6,D.layers.mask=A.layers.mask&-5,O.layers.mask=A.layers.mask&-3;let i=e.parent,a=A.cameras;ue(A,i);for(let e=0;e<a.length;e++)ue(a[e],i);a.length===2?le(A,D,O):A.projectionMatrix.copy(D.projectionMatrix),E===null&&e.isPerspectiveCamera&&(E={camera:e,fov:e.fov,zoom:e.zoom}),N(e,A,i)};function N(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=gt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(A)},this.getCameraTexture=function(e){return g[e]};let de=null;function fe(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let i=!1;t.length!==A.cameras.length&&(A.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(b,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(b))}let o=k[n];o===void 0&&(o=new no,o.layers.enable(n),o.viewport=new an,k[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),i===!0&&A.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Zi,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}de&&de(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let pe=new Do;pe.setAnimationLoop(fe),this.setAnimationLoop=function(e){de=e},this.dispose=function(){}}},Il=new un,Ll=new V;Ll.set(-1,0,0,0,1,0,0,0,1);function Rl(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,ha(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Il.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Ll),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function zl(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return R(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?L(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):L(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Bl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Vl=null;function Hl(){return Vl===null&&(Vl=new pi(Bl,16,16,ae,T),Vl.name=`DFG_LUT`,Vl.minFilter=h,Vl.magFilter=h,Vl.wrapS=u,Vl.wrapT=u,Vl.generateMipmaps=!1,Vl.needsUpdate=!0),Vl}var Ul=class{constructor(e={}){let{canvas:t=at(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=v}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([se,oe,ie]),g=new Set([v,C,x,ee,E,D]),y=new Uint32Array(4),b=new Int32Array(4),S=new B,w=null,O=null,k=[],A=[],te=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,ne=!1,M=null,re=null,ae=null,ce=null;this._outputColorSpace=Je;let le=0,ue=0,N=null,de=-1,fe=null,pe=new an,me=new an,he=null,ge=new H(0),_e=0,ve=t.width,ye=t.height,be=1,xe=null,Se=null,Ce=new an(0,0,ve,ye),we=new an(0,0,ve,ye),Te=!1,Ee=new Ei,De=!1,Oe=!1,ke=new un,Ae=new B,je=new an,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ne=!1;function Pe(){return N===null?be:1}let P=n;function Fe(e,n){return t.getContext(e,n)}let Ie,Le,F,Re,I,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Ye,Xe,Ze,Qe,$e,et,nt,rt,it;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,lt,!1),t.addEventListener(`webglcontextrestored`,dt,!1),t.addEventListener(`webglcontextcreationerror`,ft,!1),P===null){let t=`webgl2`;if(P=Fe(t,e),P===null)throw Fe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}ot()}catch(e){throw t.removeEventListener(`webglcontextlost`,lt,!1),t.removeEventListener(`webglcontextrestored`,dt,!1),t.removeEventListener(`webglcontextcreationerror`,ft,!1),R(`WebGLRenderer: `+e.message),e}function ot(){Ie=new ss(P),Ie.init(),nt=new jl(P,Ie),Le=new Io(P,Ie,e,nt),F=new kl(P,Ie),Le.reversedDepthBuffer&&d&&F.buffers.depth.setReversed(!0),re=P.createFramebuffer(),ae=P.createFramebuffer(),ce=P.createFramebuffer(),Re=new us(P),I=new ll,ze=new Al(P,Ie,F,I,Le,nt,Re),Be=new os(j),Ve=new Oo(P),rt=new Po(P,Ve),He=new cs(P,Ve,Re,rt),Ue=new fs(P,He,Ve,rt,Re),Qe=new ds(P,Le,ze),Ye=new Lo(I),We=new cl(j,Be,Ie,Le,rt,Ye),Ge=new Rl(j,I),Ke=new pl,qe=new bl(Ie),Ze=new No(j,Be,F,Ue,p,s),Xe=new Ol(j,Ue,Le),it=new zl(P,Re,Le,F),$e=new Fo(P,Ie,Re),et=new ls(P,Ie,Re),Re.programs=We.programs,j.capabilities=Le,j.extensions=Ie,j.properties=I,j.renderLists=Ke,j.shadowMap=Xe,j.state=F,j.info=Re}m!==1009&&(te=new ms(m,t.width,t.height,o,r,i));let ct=new Fl(j,P);this.xr=ct,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(e){e!==void 0&&(be=e,this.setSize(ve,ye,!1))},this.getSize=function(e){return e.set(ve,ye)},this.setSize=function(e,n,r=!0){ct.isPresenting?L(`WebGLRenderer: Can't change size while VR device is presenting.`):(ve=e,ye=n,t.width=Math.floor(e*be),t.height=Math.floor(n*be),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),te!==null&&te.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ve*be,ye*be).floor()},this.setDrawingBufferSize=function(e,n,r){ve=e,ye=n,be=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)R(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){L(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}te.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(pe)},this.getViewport=function(e){return e.copy(Ce)},this.setViewport=function(e,t,n,r){e.isVector4?Ce.set(e.x,e.y,e.z,e.w):Ce.set(e,t,n,r),F.viewport(pe.copy(Ce).multiplyScalar(be).round())},this.getScissor=function(e){return e.copy(we)},this.setScissor=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),F.scissor(me.copy(we).multiplyScalar(be).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(e){F.setScissorTest(Te=e)},this.setOpaqueSort=function(e){xe=e},this.setTransparentSort=function(e){Se=e},this.getClearColor=function(e){return e.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=h.has(t)}if(e){let e=N.texture.type,t=g.has(e),n=Ze.getClearColor(),r=Ze.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(y[0]=i,y[1]=a,y[2]=o,y[3]=r,P.clearBufferuiv(P.COLOR,0,y)):(b[0]=i,b[1]=a,b[2]=o,b[3]=r,P.clearBufferiv(P.COLOR,0,b))}else r|=P.COLOR_BUFFER_BIT}t&&(r|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&P.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),M=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,lt,!1),t.removeEventListener(`webglcontextrestored`,dt,!1),t.removeEventListener(`webglcontextcreationerror`,ft,!1),Ze.dispose(),Ke.dispose(),qe.dispose(),I.dispose(),Be.dispose(),Ue.dispose(),rt.dispose(),it.dispose(),We.dispose(),ct.dispose(),ct.removeEventListener(`sessionstart`,yt),ct.removeEventListener(`sessionend`,bt),xt.stop()};function lt(e){e.preventDefault(),st(`WebGLRenderer: Context Lost.`),ne=!0}function dt(){st(`WebGLRenderer: Context Restored.`),ne=!1;let e=Re.autoReset,t=Xe.enabled,n=Xe.autoUpdate,r=Xe.needsUpdate,i=Xe.type;ot(),Re.autoReset=e,Xe.enabled=t,Xe.autoUpdate=n,Xe.needsUpdate=r,Xe.type=i}function ft(e){R(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function pt(e){let t=e.target;t.removeEventListener(`dispose`,pt),mt(t)}function mt(e){ht(e),I.remove(e)}function ht(e){let t=I.get(e).programs;t!==void 0&&(t.forEach(function(e){We.releaseProgram(e)}),e.isShaderMaterial&&We.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Me);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=jt(e,t,n,r,i);F.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=He.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;rt.setup(i,r,s,n,c);let h,g=$e;if(c!==null&&(h=Ve.get(c),g=et,g.setIndex(h)),i.isMesh)r.wireframe===!0?(F.setLineWidth(r.wireframeLinewidth*Pe()),g.setMode(P.LINES)):g.setMode(P.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),F.setLineWidth(e*Pe()),i.isLineSegments?g.setMode(P.LINES):i.isLineLoop?g.setMode(P.LINE_LOOP):g.setMode(P.LINE_STRIP)}else i.isPoints?g.setMode(P.POINTS):i.isSprite&&g.setMode(P.TRIANGLES);if(i.isBatchedMesh){if(Ie.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ve.get(c).bytesPerElement:1,o=I.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(P,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function gt(e,t,n,r){M!==null&&e.isNodeMaterial&&M.setObject(r,e),De===!0&&Ye.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Dt(e,t,r),e.side=0,e.needsUpdate=!0,Dt(e,t,r),e.side=2):Dt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),M!==null&&M.renderStart(e,t,n),O=qe.get(n),O.init(t),A.push(O),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(O.pushLight(e),e.castShadow&&O.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(O.pushLight(e),e.castShadow&&O.pushShadow(e))}),O.setupLights(),M!==null&&M.updateLights(O.state.lightsArray),Oe=this.localClippingEnabled,De=Ye.init(this.clippingPlanes,Oe),De===!0&&Ye.setGlobalState(this.clippingPlanes,t),M!==null&&Xe.render(O.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];gt(o,n,t,e),r.add(o)}else gt(i,n,t,e),r.add(i)}}),O=A.pop(),M!==null&&M.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=I.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Ie.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let _t=null;function vt(e){_t&&_t(e)}function yt(){xt.stop()}function bt(){xt.start()}let xt=new Do;xt.setAnimationLoop(vt),typeof self<`u`&&xt.setContext(self),this.setAnimationLoop=function(e){_t=e,ct.setAnimationLoop(e),e===null?xt.stop():xt.start()},ct.addEventListener(`sessionstart`,yt),ct.addEventListener(`sessionend`,bt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){R(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ne===!0)return;M!==null&&M.renderStart(e,t);let n=ct.enabled===!0&&ct.isPresenting===!0,r=te!==null&&(N===null||n)&&te.begin(j,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(te===null||te.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(t),t=ct.getCamera()),e.isScene===!0&&e.onBeforeRender(j,e,t,N),O=qe.get(e,A.length),O.init(t),O.state.textureUnits=ze.getTextureUnits(),A.push(O),ke.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Ee.setFromProjectionMatrix(ke,tt,t.reversedDepth),Oe=this.localClippingEnabled,De=Ye.init(this.clippingPlanes,Oe),w=Ke.get(e,k.length),w.init(),k.push(w),ct.enabled===!0&&ct.isPresenting===!0){let e=j.xr.getDepthSensingMesh();e!==null&&St(e,t,-1/0,j.sortObjects)}St(e,t,0,j.sortObjects),w.finish(),M!==null&&M.updateLights(O.state.lightsArray),j.sortObjects===!0&&w.sort(xe,Se),Ne=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,Ne&&Ze.addToRenderList(w,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),De===!0&&Ye.beginShadows();let i=O.state.shadowsArray;if(Xe.render(i,e,t),De===!0&&Ye.endShadows(),(r&&te.hasRenderPass())===!1){let n=w.opaque,r=w.transmissive;if(O.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];wt(n,r,e,a)}Ne&&Ze.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Ct(w,e,n,n.viewport)}}else r.length>0&&wt(n,r,e,t),Ne&&Ze.render(e),Ct(w,e,t)}N!==null&&ue===0&&(ze.updateMultisampleRenderTarget(N),ze.updateRenderTargetMipmap(N)),r&&te.end(j),e.isScene===!0&&e.onAfterRender(j,e,t),rt.resetDefaultState(),de=-1,fe=null,A.pop(),A.length>0?(O=A[A.length-1],ze.setTextureUnits(O.state.textureUnits),De===!0&&Ye.setGlobalState(j.clippingPlanes,O.state.camera)):O=null,k.pop(),w=k.length>0?k[k.length-1]:null,M!==null&&M.renderEnd()};function St(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)O.pushLightProbeGrid(e);else if(e.isLight)O.pushLight(e),e.castShadow&&O.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(Ee)){r&&je.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ke);let i=Ue.update(e),a=e.material;a.visible&&w.push(e,i,a,n,je.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(Ee))){let i=Ue.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),je.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),je.copy(e.boundingSphere.center)),je.applyMatrix4(e.matrixWorld).applyMatrix4(ke)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&w.push(e,i,c,n,je.z,s,t)}}else a.visible&&w.push(e,i,a,n,je.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)St(i[e],t,n,r)}function Ct(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;O.setupLightsView(n),De===!0&&Ye.setGlobalState(j.clippingPlanes,n),r&&F.viewport(pe.copy(r)),i.length>0&&Tt(i,t,n),a.length>0&&Tt(a,t,n),o.length>0&&Tt(o,t,n),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function wt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[r.id]===void 0){let e=Ie.has(`EXT_color_buffer_half_float`)||Ie.has(`EXT_color_buffer_float`);O.state.transmissionRenderTarget[r.id]=new sn(1,1,{generateMipmaps:!0,type:e?T:v,minFilter:_,samples:Math.max(4,Le.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qt.workingColorSpace})}let a=O.state.transmissionRenderTarget[r.id],o=r.viewport||pe;a.setSize(o.z*j.transmissionResolutionScale,o.w*j.transmissionResolutionScale);let s=j.getRenderTarget(),c=j.getActiveCubeFace(),l=j.getActiveMipmapLevel();j.setRenderTarget(a),j.getClearColor(ge),_e=j.getClearAlpha(),_e<1&&j.setClearColor(16777215,.5),j.clear(),Ne&&Ze.render(n);let u=j.toneMapping;j.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),O.setupLightsView(r),De===!0&&Ye.setGlobalState(j.clippingPlanes,r),Tt(e,n,r),ze.updateMultisampleRenderTarget(a),ze.updateRenderTargetMipmap(a),Ie.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Et(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(ze.updateMultisampleRenderTarget(a),ze.updateRenderTargetMipmap(a))}j.setRenderTarget(s,c,l),j.setClearColor(ge,_e),d!==void 0&&(r.viewport=d),j.toneMapping=u}function Tt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Et(o,t,n,s,l,c)}}function Et(e,t,n,r,i,a){M!==null&&i.isNodeMaterial&&M.setObject(e,i),e.onBeforeRender(j,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(j,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=2):j.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(j,t,n,r,i,a)}function Dt(e,t,n){t.isScene!==!0&&(t=Me);let r=I.get(e),i=O.state.lights,a=O.state.shadowsArray,o=i.state.version,s=We.getParameters(e,i.state,a,t,n,O.state.lightProbeGridArray),c=We.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Be.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,pt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return kt(e,s),d}else s.uniforms=We.getUniforms(e),M!==null&&e.isNodeMaterial&&M.build(e,n,s),e.onBeforeCompile(s,j),d=We.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ye.uniform),kt(e,s),r.needsLights=Nt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=O.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Ot(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=xc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function kt(e,t){let n=I.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function At(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];S.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(S))return n}return null}function jt(e,t,n,r,i){t.isScene!==!0&&(t=Me),ze.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?j.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:qt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Be.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=j.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=I.get(r),y=O.state.lights;if(De===!0&&(Oe===!0||e!==fe)){let t=e===fe&&r.id===de;Ye.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ye.numPlanes||v.numIntersection!==Ye.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=O.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Dt(r,t,i),M&&r.isNodeMaterial&&M.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(F.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==de&&(de=r.id,C=!0),v.needsLights){let e=At(O.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||fe!==e){F.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(P,`projectionMatrix`,e.projectionMatrix),T.setValue(P,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(P,Ae.setFromMatrixPosition(e.matrixWorld)),Le.logarithmicDepthBuffer&&T.setValue(P,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(P,`isOrthographic`,e.isOrthographicCamera===!0),fe!==e&&(fe=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(P,`sunShadowMap`,y.state.sunShadowMap,ze),y.state.directionalShadowMap.length>0&&T.setValue(P,`directionalShadowMap`,y.state.directionalShadowMap,ze),y.state.spotShadowMap.length>0&&T.setValue(P,`spotShadowMap`,y.state.spotShadowMap,ze),y.state.pointShadowMap.length>0&&T.setValue(P,`pointShadowMap`,y.state.pointShadowMap,ze)),i.isSkinnedMesh){T.setOptional(P,i,`bindMatrix`),T.setOptional(P,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(P,`boneTexture`,e.boneTexture,ze))}i.isBatchedMesh&&(T.setOptional(P,i,`batchingTexture`),T.setValue(P,`batchingTexture`,i._matricesTexture,ze),T.setOptional(P,i,`batchingIdTexture`),T.setValue(P,`batchingIdTexture`,i._indirectTexture,ze),T.setOptional(P,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(P,`batchingColorTexture`,i._colorsTexture,ze));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&Qe.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(P,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=Hl()),C){if(T.setValue(P,`toneMappingExposure`,j.toneMappingExposure),v.needsLights&&Mt(E,w),a&&r.fog===!0&&Ge.refreshFogUniforms(E,a),Ge.refreshMaterialUniforms(E,r,be,ye,O.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}xc.upload(P,Ot(v),E,ze)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(xc.upload(P,Ot(v),E,ze),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(P,`center`,i.center),T.setValue(P,`modelViewMatrix`,i.modelViewMatrix),T.setValue(P,`normalMatrix`,i.normalMatrix),T.setValue(P,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];it.update(n,x),it.bind(n,x)}}return x}function Mt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Nt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return ue},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=I.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),I.get(e.texture).__webglTexture=t,I.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=I.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,le=t,ue=n;let r=null,i=!1,a=!1;if(e){let o=I.get(e);if(o.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(P.FRAMEBUFFER,o.__webglFramebuffer),pe.copy(e.viewport),me.copy(e.scissor),he=e.scissorTest,F.viewport(pe),F.scissor(me),F.setScissorTest(he),de=-1;return}if(o.__webglFramebuffer===void 0)ze.setupRenderTarget(e);else if(o.__hasExternalTextures)ze.rebindTextures(e,I.get(e.texture).__webglTexture,I.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&I.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);ze.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=I.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&ze.useMultisampledRTT(e)===!1?I.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,pe.copy(e.viewport),me.copy(e.scissor),he=e.scissorTest}else pe.copy(Ce).multiplyScalar(be).floor(),me.copy(we).multiplyScalar(be).floor(),he=Te;if(n!==0&&(r=re),F.bindFramebuffer(P.FRAMEBUFFER,r)&&F.drawBuffers(e,r),F.viewport(pe),F.scissor(me),F.setScissorTest(he),i){let r=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=I.get(e.textures[t]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,t.__webglTexture,n)}de=-1};function Pt(e){let t=I.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Le.textureFormatReadable(e.format),t.__typeReadable=Le.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){F.bindFramebuffer(P.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let u=Pt(o);if(u.__formatReadable===!1){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&P.readPixels(t,n,r,i,nt.convert(c),nt.convert(l),a)}finally{let e=N===null?null:I.get(N).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){F.bindFramebuffer(P.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let d=Pt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.bufferData(P.PIXEL_PACK_BUFFER,a.byteLength,P.STREAM_READ),P.readPixels(t,n,r,i,nt.convert(l),nt.convert(u),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let p=N===null?null:I.get(N).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,p);let m=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await ut(P,m,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,a),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(f),P.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;ze.setTexture2D(e,0),P.copyTexSubImage2D(P.TEXTURE_2D,n,0,0,o,s,i,a),F.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=nt.convert(t.format),_=nt.convert(t.type),v;t.isData3DTexture?(ze.setTexture3D(t,0),v=P.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(ze.setTexture2DArray(t,0),v=P.TEXTURE_2D_ARRAY):(ze.setTexture2D(t,0),v=P.TEXTURE_2D),F.activeTexture(P.TEXTURE0),F.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,t.flipY),F.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),F.pixelStorei(P.UNPACK_ALIGNMENT,t.unpackAlignment);let y=F.getParameter(P.UNPACK_ROW_LENGTH),b=F.getParameter(P.UNPACK_IMAGE_HEIGHT),x=F.getParameter(P.UNPACK_SKIP_PIXELS),S=F.getParameter(P.UNPACK_SKIP_ROWS),C=F.getParameter(P.UNPACK_SKIP_IMAGES);F.pixelStorei(P.UNPACK_ROW_LENGTH,h.width),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,h.height),F.pixelStorei(P.UNPACK_SKIP_PIXELS,l),F.pixelStorei(P.UNPACK_SKIP_ROWS,u),F.pixelStorei(P.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=I.get(e),r=I.get(t),h=I.get(n.__renderTarget),g=I.get(r.__renderTarget);F.bindFramebuffer(P.READ_FRAMEBUFFER,h.__webglFramebuffer),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(e).__webglTexture,i,d+n),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(t).__webglTexture,a,m+n)),P.blitFramebuffer(l,u,o,s,f,p,o,s,P.DEPTH_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||I.has(e)){let n=I.get(e),r=I.get(t);F.bindFramebuffer(P.READ_FRAMEBUFFER,ae),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,ce);for(let e=0;e<c;e++)w?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,n.__webglTexture,i),T?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,r.__webglTexture,a),i===0?T?P.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):P.copyTexSubImage2D(v,a,f,p,l,u,o,s):P.blitFramebuffer(l,u,o,s,f,p,o,s,P.COLOR_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?P.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h);F.pixelStorei(P.UNPACK_ROW_LENGTH,y),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,b),F.pixelStorei(P.UNPACK_SKIP_PIXELS,x),F.pixelStorei(P.UNPACK_SKIP_ROWS,S),F.pixelStorei(P.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&P.generateMipmap(v),F.unbindTexture()},this.initRenderTarget=function(e){I.get(e).__webglFramebuffer===void 0&&ze.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?ze.setTextureCube(e,0):e.isData3DTexture?ze.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?ze.setTexture2DArray(e,0):ze.setTexture2D(e,0),F.unbindTexture()},this.resetState=function(){le=0,ue=0,N=null,F.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return tt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(e),t.unpackColorSpace=qt._getUnpackColorSpace()}},Wl={speedScale:1.6},Gl={maxPixelRatio:2,maxPixelRatioMobile:1.25,fov:60,near:.5,far:620,fogNear:140,fogFar:560,skyTop:9418968,skyColor:15849908},Kl={maxDt:1/20},ql={length:8,width:2.5,maxSpeedKmh:120,reverseMaxKmh:15,engineAccel:3.4,engineCurveExp:2.5,loadAccelPenalty:.28,brakeDecel:9,reverseAccel:3,handbrakeDecel:7,coastDecel:.3,airDrag:4e-4,offroadDecel:3.5,maxYawLow:.75,maxYawHigh:.24,yawResponse:6,maxHeadingOffset:.85,steerRise:2.2,steerReturn:3.8},K={chunkLength:40,sampleStep:4,chunksAhead:15,chunksBehind:3,villageHalfWidth:3.6,highwayHalfWidth:7,shoulder:2,top:.25,hardLimit:14,bridgeStyles:{jamuna:{deck:7,ramp:180},lalon:{deck:7,ramp:180},padma:{deck:22,ramp:440}},straightBefore:260,straightAfter:160,bendLength:800,bendAmpRatio:.045,bendMaxAmp:60,bendMinRadius:330},Jl={barrierWarnDistance:400,tollWarnDistance:500,stopSpeed:.45,farmStopKmh:5,visibleRange:750,chaseCutoffBeforeEvent:250},Yl={bikesMin:2,bikesMax:4,pickupChance:.5,chaserMaxKmh:96,boostKmh:108,boostGap:220,spawnGap:110,accel:4.5,caughtGap:4},Xl={density:{village:[0,0],rural:[5,6],town:[8,7],river:[4,5],city:[16,12]},spawnAheadMin:300,spawnAheadMax:480,despawnBehind:70,headOnGameOverKmh:90,overtakerChance:.18,heavyHonks:3,heavyHonkWindow:6,longHornSeconds:1.2},Zl={distance:13,height:5.6,lookAhead:9,lookHeight:1.2,followLambda:4,fovMin:58,fovMax:74,portrait:{distance:15,height:7.2,lookAhead:7,lookHeight:.6,fovMin:82,fovMax:94}},Ql={bazarKmh:40,schoolKmh:30,marketKmh:30,schoolsMin:2,schoolsMax:3,tolerance:5},$l={perRouteMin:1,perRouteMax:2,trainChance:.8,triggerDistance:450,trainSpeed:16,trainStartGap:330,coaches:9,gateHitKmh:20},eu={holdMin:60,holdMax:120,blendSeconds:25},tu={maxKmh:70,slowDecel:7,ruralMin:3,ruralMax:5,lenMin:180,lenMax:340,cityLenMin:120,cityLenMax:200},nu={vehiclesMin:5,vehiclesMax:6,spawnDistance:480,serveFrom:170,serviceSeconds:2.2},ru={perRouteMin:2,perRouteMax:3,length:70,vehiclesMin:5,vehiclesMax:6,spawnDistance:480,cycleFrom:220,greenSeconds:9,redSeconds:8,clearSeconds:4},iu={lanesPerSide:4,laneWidth:3.5,openLanes:1,junctions:[300,850],wideEndBeforeMarket:200},au={greenSeconds:7,yellowSeconds:1.5,redSeconds:5,crossHalfWidth:7},ou={maxKmh:15,intervalMin:2.5,intervalMax:5,maxAtOnce:3,kgMin:8,kgMax:22,grabSeconds:1.1,hornRange:14};function su(e){"@babel/helpers - typeof";return su=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},su(e)}function cu(e,t){if(su(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(su(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function lu(e){var t=cu(e,`string`);return su(t)==`symbol`?t:t+``}function q(e,t,n){return(t=lu(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var uu=`sobjir-truck-muted`,du=class{constructor(){q(this,`ctx`,null),q(this,`master`,void 0),q(this,`noise`,void 0),q(this,`engineOsc`,[]),q(this,`engineGain`,void 0),q(this,`engineFilter`,void 0),q(this,`hornNodes`,null),q(this,`windGain`,void 0),q(this,`rainGain`,void 0),q(this,`windFilter`,void 0),q(this,`muteListeners`,[]),q(this,`muted`,!1);try{this.muted=localStorage.getItem(uu)===`1`}catch{}let e=()=>{this.init(),this.ctx?.state===`suspended`&&this.ctx.resume()};window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,e),window.addEventListener(`touchend`,e)}init(){if(this.ctx)return;let e=window.AudioContext??window.webkitAudioContext;if(!e)return;let t=new e;this.ctx=t,this.master=t.createGain(),this.master.gain.value=this.muted?0:.8;let n=t.createDynamicsCompressor();this.master.connect(n).connect(t.destination),this.noise=t.createBuffer(1,t.sampleRate*2,t.sampleRate);let r=this.noise.getChannelData(0);for(let e=0;e<r.length;e++)r[e]=Math.random()*2-1;this.engineFilter=t.createBiquadFilter(),this.engineFilter.type=`lowpass`,this.engineFilter.frequency.value=500,this.engineGain=t.createGain(),this.engineGain.gain.value=0,this.engineFilter.connect(this.engineGain).connect(this.master);let i=[`sawtooth`,`square`,`sawtooth`],a=[1,.5,1.01];i.forEach((e,n)=>{let r=t.createOscillator();r.type=e,r.frequency.value=45*a[n];let i=t.createGain();i.gain.value=n===1?.5:.3,r.connect(i).connect(this.engineFilter),r.start(),this.engineOsc.push(r)});let o=t.createBufferSource();o.buffer=this.noise,o.loop=!0,this.windFilter=t.createBiquadFilter(),this.windFilter.type=`bandpass`,this.windFilter.frequency.value=500,this.windFilter.Q.value=.6,this.windGain=t.createGain(),this.windGain.gain.value=0,o.connect(this.windFilter).connect(this.windGain).connect(this.master),o.start();let s=t.createBufferSource();s.buffer=this.noise,s.loop=!0;let c=t.createBiquadFilter();c.type=`highpass`,c.frequency.value=1400,this.rainGain=t.createGain(),this.rainGain.gain.value=0,s.connect(c).connect(this.rainGain).connect(this.master),s.start(0,.7)}setRain(e){this.ctx&&this.rainGain.gain.setTargetAtTime(e*.09,this.ctx.currentTime,.5)}thunder(e){let t=this.ctx;if(!t)return;let n=t.currentTime+e;this.noiseBurst(n,.25,2500,.8,.25),this.noiseBurst(n+.05,2.8,160,.7,.9),this.noiseBurst(n+.5,2.2,90,.5,.6)}onMuteChange(e){this.muteListeners.push(e)}toggleMute(){this.muted=!this.muted;try{localStorage.setItem(uu,this.muted?`1`:`0`)}catch{}this.ctx&&this.master.gain.setTargetAtTime(this.muted?0:.8,this.ctx.currentTime,.05);for(let e of this.muteListeners)e(this.muted)}setEngine(e,t,n){let r=this.ctx;if(!r)return;let i=r.currentTime,a=(42+e*85+t*12)*(.85+e*4%1*.3);this.engineOsc.forEach((e,t)=>e.frequency.setTargetAtTime(a*[1,.5,1.01][t],i,.08)),this.engineFilter.frequency.setTargetAtTime(350+t*700+e*600,i,.1),this.engineGain.gain.setTargetAtTime(n?.06+t*.05+e*.04:0,i,.15)}setWind(e){if(!this.ctx)return;let t=this.ctx.currentTime;this.windGain.gain.setTargetAtTime(e*.12,t,.4),this.windFilter.frequency.setTargetAtTime(400+Math.sin(t*.7)*150,t,.5)}horn(e){let t=this.ctx;if(t){if(e&&!this.hornNodes){let e=t.createGain();e.gain.value=0,e.gain.setTargetAtTime(.12,t.currentTime,.01);let n=t.createBiquadFilter();n.type=`lowpass`,n.frequency.value=2200,e.connect(n).connect(this.master);let r=[392,494].map(n=>{let r=t.createOscillator();return r.type=`square`,r.frequency.value=n,r.connect(e),r.start(),r});this.hornNodes={oscs:r,gain:e}}else if(!e&&this.hornNodes){let{oscs:e,gain:n}=this.hornNodes;n.gain.setTargetAtTime(0,t.currentTime,.02),e.forEach(e=>e.stop(t.currentTime+.15)),this.hornNodes=null}}}otherHorn(){let e=this.ctx;if(e)for(let t of[0,.35]){let n=e.currentTime+t,r=e.createGain();r.gain.setValueAtTime(0,n),r.gain.linearRampToValueAtTime(.08,n+.02),r.gain.setValueAtTime(.08,n+.22),r.gain.linearRampToValueAtTime(0,n+.28),r.connect(this.master);for(let t of[311,370]){let i=e.createOscillator();i.type=`sawtooth`,i.frequency.value=t,i.connect(r),i.start(n),i.stop(n+.3)}}}noiseBurst(e,t,n,r,i,a=`lowpass`){let o=this.ctx,s=o.createBufferSource();s.buffer=this.noise;let c=o.createBiquadFilter();c.type=a,c.frequency.value=n,c.Q.value=r;let l=o.createGain();l.gain.setValueAtTime(i,e),l.gain.exponentialRampToValueAtTime(.001,e+t),s.connect(c).connect(l).connect(this.master),s.start(e,Math.random()),s.stop(e+t+.05)}crash(e=1){let t=this.ctx;if(!t)return;let n=t.currentTime;this.noiseBurst(n,.5+e*.6,1200,.7,.5*e),this.noiseBurst(n+.05,.3,3500,2,.15*e,`bandpass`);let r=t.createOscillator();r.type=`sine`,r.frequency.setValueAtTime(110,n),r.frequency.exponentialRampToValueAtTime(35,n+.4);let i=t.createGain();i.gain.setValueAtTime(.6*e,n),i.gain.exponentialRampToValueAtTime(.001,n+.5),r.connect(i).connect(this.master),r.start(n),r.stop(n+.55)}whistle(){let e=this.ctx;if(e)for(let[t,n]of[[0,.35],[.5,.8]]){let r=e.currentTime+t,i=e.createOscillator();i.type=`sine`,i.frequency.value=2900;let a=e.createOscillator();a.frequency.value=28;let o=e.createGain();o.gain.value=140,a.connect(o).connect(i.frequency);let s=e.createGain();s.gain.setValueAtTime(0,r),s.gain.linearRampToValueAtTime(.13,r+.02),s.gain.setValueAtTime(.13,r+n-.05),s.gain.linearRampToValueAtTime(0,r+n),i.connect(s).connect(this.master),i.start(r),a.start(r),i.stop(r+n+.02),a.stop(r+n+.02)}}crowd(e=1.5){let t=this.ctx;if(!t)return;let n=t.currentTime;for(let r=0;r<4;r++){let i=t.createBufferSource();i.buffer=this.noise,i.loop=!0;let a=t.createBiquadFilter();a.type=`bandpass`,a.Q.value=6,a.frequency.setValueAtTime(500+r*350,n);for(let t=0;t<6;t++)a.frequency.linearRampToValueAtTime(400+Math.random()*1400,n+(t+1)*(e/6));let o=t.createGain();o.gain.setValueAtTime(0,n);for(let t=0;t<=8;t++)o.gain.linearRampToValueAtTime(Math.random()*.22,n+t*e/8);o.gain.linearRampToValueAtTime(0,n+e+.1),i.connect(a).connect(o).connect(this.master),i.start(n,Math.random()),i.stop(n+e+.2)}for(let r=0;r<3;r++){let r=t.createOscillator();r.type=`sawtooth`;let i=n+Math.random()*e*.5,a=160+Math.random()*120;r.frequency.setValueAtTime(a,i),r.frequency.linearRampToValueAtTime(a*1.5,i+.25),r.frequency.linearRampToValueAtTime(a*.9,i+.6);let o=t.createBiquadFilter();o.type=`bandpass`,o.frequency.value=900,o.Q.value=2;let s=t.createGain();s.gain.setValueAtTime(0,i),s.gain.linearRampToValueAtTime(.05,i+.05),s.gain.linearRampToValueAtTime(0,i+.6),r.connect(o).connect(s).connect(this.master),r.start(i),r.stop(i+.65)}}coin(){let e=this.ctx;e&&[0,.08,.16].forEach((t,n)=>{let r=e.currentTime+t,i=e.createOscillator();i.type=`triangle`,i.frequency.setValueAtTime([1320,1760,2093][n],r);let a=e.createGain();a.gain.setValueAtTime(.12,r),a.gain.exponentialRampToValueAtTime(.001,r+.25),i.connect(a).connect(this.master),i.start(r),i.stop(r+.3)})}bell(){let e=this.ctx;if(e)for(let t of[0,.16]){let n=e.currentTime+t;for(let[t,r]of[[1480,.07],[2960,.025]]){let i=e.createOscillator();i.type=`sine`,i.frequency.value=t;let a=e.createGain();a.gain.setValueAtTime(r,n),a.gain.exponentialRampToValueAtTime(.001,n+.35),i.connect(a).connect(this.master),i.start(n),i.stop(n+.4)}}}trainHorn(){let e=this.ctx;if(e)for(let[t,n]of[[0,.9],[1.1,1.8]]){let r=e.currentTime+t,i=e.createGain();i.gain.setValueAtTime(0,r),i.gain.linearRampToValueAtTime(.1,r+.08),i.gain.setValueAtTime(.1,r+n-.15),i.gain.linearRampToValueAtTime(0,r+n);let a=e.createBiquadFilter();a.type=`lowpass`,a.frequency.value=1400,i.connect(a).connect(this.master);for(let t of[233,277,349]){let a=e.createOscillator();a.type=`sawtooth`,a.frequency.value=t,a.connect(i),a.start(r),a.stop(r+n+.05)}}}clack(){let e=this.ctx;if(!e)return;let t=e.currentTime;this.noiseBurst(t,.09,700,1.5,.35,`bandpass`),this.noiseBurst(t+.11,.09,600,1.5,.3,`bandpass`)}beep(){let e=this.ctx;if(!e)return;let t=e.currentTime,n=e.createOscillator();n.type=`sine`,n.frequency.value=880;let r=e.createGain();r.gain.setValueAtTime(.1,t),r.gain.exponentialRampToValueAtTime(.001,t+.3),n.connect(r).connect(this.master),n.start(t),n.stop(t+.32)}},J={startingCash:15e4,truckCapacityKg:5e3,buyStepKg:50,randomChanda:{min:1e3,max:4500,step:500},penaltyMultiplierSlowHit:1.5,caughtMultiplier:2,fees:{roadTax:500,lalonToll:600,natoreToll:300,jamunaToll:1600,padmaToll:2800,expresswayToll:900},cargoDamagePct:{ramMin:1,ramMax:2,slowHit:1.5,caught:2,rearEndPerKmh:.05,rearEndMax:4,sideSwipe:.5,headOnLight:3},ramSpeedKmh:90,tollMaxSpeedKmh:20,chaseRequiredSeconds:20,chaseMeterMode:`reset`},fu=[`০`,`১`,`২`,`৩`,`৪`,`৫`,`৬`,`৭`,`৮`,`৯`];function pu(e){return String(e).replace(/[0-9]/g,e=>fu[e.charCodeAt(0)-48])}function mu(e){if(e.length<=3)return e;let t=e.slice(-3),n=e.slice(0,-3),r=[];for(;n.length>2;)r.unshift(n.slice(-2)),n=n.slice(0,-2);return n&&r.unshift(n),`${r.join(`,`)},${t}`}function hu(e,t=0){if(!Number.isFinite(e))return`—`;let n=e<0,r=Math.abs(e).toFixed(t),[i,a]=r.split(`.`),o=/^[0.]+$/.test(r),s=mu(i)+(a?`.${a}`:``);return pu((n&&!o?`-`:``)+s)}function gu(e,t=0){let n=hu(e,t);return n.startsWith(`-`)?`-৳${n.slice(1)}`:`৳${n}`}function _u(e){return`${gu(e,Math.abs(e-Math.round(e))<.005?0:2)}/কেজি`}function vu(e){return`${hu(Math.round(e))} কেজি`}function yu(e){return e<1e3?`${hu(Math.max(0,Math.round(e)))} মিটার`:`${hu(e/1e3,1)} কিমি`}function bu(e){let t=Math.max(0,Math.floor(e));return pu(`${Math.floor(t/60)}:${String(t%60).padStart(2,`0`)}`)}function xu(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Su(e,t){let n=Math.imul(e|0,668265261)^Math.imul((t|0)+2654435769,374761393);return n^=n>>>15,n=Math.imul(n,739982445),n^=n>>>12,n>>>0}var Cu=(e,t,n)=>t+(n-t)*e(),wu=(e,t)=>t[Math.floor(e()*t.length)%t.length],Tu={id:`lalon`,type:`bridgeToll`,feeKey:`lalonToll`,nameBn:`লালন শাহ সেতু টোল`,icon:`{bridge}`,bridge:{nameBn:`লালন শাহ সেতু`,style:`lalon`,offset:300,length:550}},Eu={id:`natore`,type:`roadToll`,feeKey:`natoreToll`,nameBn:`নাটোর সড়ক টোল`,icon:`{receipt}`,small:!0},Du={id:`jamuna`,type:`bridgeToll`,feeKey:`jamunaToll`,nameBn:`যমুনা সেতু টোল`,icon:`{bridge}`,bridge:{nameBn:`যমুনা সেতু`,style:`jamuna`,offset:300,length:650}},Ou=[{id:`jessore`,nameBn:`যশোর`,pathBn:`লালন শাহ সেতু → নাটোর সড়ক টোল → যমুনা সেতু`,legal:[Tu,Eu,Du],randomBarriers:10,farmsBn:`যশোরের সবজি ক্ষেত`},{id:`rajshahi`,nameBn:`রাজশাহী`,pathBn:`নাটোর সড়ক টোল → যমুনা সেতু`,legal:[Eu,Du],randomBarriers:6,farmsBn:`রাজশাহীর সবজি ক্ষেত`},{id:`faridpur`,nameBn:`ফরিদপুর`,pathBn:`পদ্মা সেতু → এক্সপ্রেসওয়ে টোল`,legal:[{id:`padma`,type:`bridgeToll`,feeKey:`padmaToll`,nameBn:`পদ্মা সেতু টোল`,icon:`{bridge}`,bridge:{nameBn:`পদ্মা সেতু`,style:`padma`,offset:520,length:760}},{id:`expressway`,type:`roadToll`,feeKey:`expresswayToll`,nameBn:`এক্সপ্রেসওয়ে টোল`,icon:`{road}`}],randomBarriers:6,farmsBn:`ফরিদপুরের সবজি ক্ষেত`}],ku=`jessore`,Au=[{id:`farm1`,type:`farm`,s:130,side:-1,nameBn:`রহিম চাচার ক্ষেত`,icon:`{farm}`,vegetables:[`tomato`,`chili`],farmerLineBn:`বাবা, টমেটো এবার ভালো হইছে, কিন্তু পাইকার আসে নাই।`},{id:`farm2`,type:`farm`,s:270,side:1,nameBn:`জমিলা খালার ক্ষেত`,icon:`{farm}`,vegetables:[`potato`,`onion`],farmerLineBn:`হিমাগারের ভাড়া দিয়ে আর কিছু থাকে না, নিয়া যাও।`},{id:`farm3`,type:`farm`,s:410,side:-1,nameBn:`হারুন মিয়ার ক্ষেত`,icon:`{farm}`,vegetables:[`brinjal`,`gourd`,`cauliflower`],farmerLineBn:`ঢাকায় শুনি বেগুন ষাট টাকা! আমি তো পাই বাইশ।`},{id:`farm4`,type:`farm`,s:550,side:1,nameBn:`নুরুল ভাইয়ের ক্ষেত`,icon:`{farm}`,vegetables:[`cabbage`,`cauliflower`,`tomato`],farmerLineBn:`সার-বীজের দাম বাড়ে, আমার দাম বাড়ে না।`}],ju=[`তিন রাস্তার মোড়`,`বাসস্ট্যান্ড`,`ট্রাক স্ট্যান্ড`,`হাটখোলা`,`কলেজ গেট`,`পেট্রল পাম্প মোড়`,`বাজারের মুখ`,`ব্রিজের ঢাল`,`ফেরিঘাট মোড়`,`চৌরাস্তা`,`রেলক্রসিং`,`সিএনজি স্ট্যান্ড`,`মসজিদ মোড়`],Mu={highwayStart:700,firstEvent:1500,afterBarrier:[1e3,1300],afterToll:[800,1050],afterBridge:[650,850],afterBroken:[450,600],afterWorks:[650,850],cityStretch:1500};function Nu(e,t,n){let{min:r,max:i,step:a}=J.randomChanda,o=n>1?t/(n-1):.5,s=r+(i-r)*(.5*o+.5*e());return Math.round(s/a)*a}function Pu(e,t=Math.floor(Math.random()*1e9)){let n=Ou.find(t=>t.id===e)??Ou[0],r=xu(t),i=[...n.legal];for(let e=0;e<n.randomBarriers;e++)i.splice(Math.floor(r()*(i.length+1)),0,`B`);n.randomBarriers>0&&i[i.length-1]!==`B`&&(i.splice(i.lastIndexOf(`B`),1),i.push(`B`));let a=(e,t)=>e+Math.floor(r()*(t-e+1));for(let e=a($l.perRouteMin,$l.perRouteMax);e>0;e--)i.splice(Math.floor(r()*i.length),0,`R`);for(let e=a(ru.perRouteMin,ru.perRouteMax);e>0;e--)i.splice(Math.floor(r()*i.length),0,`W`);for(let e=a(tu.ruralMin,tu.ruralMax);e>0;e--){let e=0;for(let t=0;t<20&&(e=Math.floor(r()*i.length),i[e-1]===`B`);t++);i[e-1]!==`B`&&i.splice(e,0,`P`)}let o=[...ju].sort(()=>r()-.5),s=[...Au],c=[],l=[],u=Mu.firstEvent,d=0,f=0,p=0;i.forEach((e,t)=>{if(e===`R`)s.push({id:`rail${++f}`,type:`rail`,s:u,nameBn:`রেলক্রসিং`,icon:`{train}`}),u+=Cu(r,...Mu.afterToll);else if(e===`W`)s.push({id:`works${++p}`,type:`roadworks`,s:u,length:ru.length,nameBn:`রাস্তার কাজ — এক লেন`,icon:`{cement}`}),u+=Cu(r,...Mu.afterWorks);else if(e===`P`){let e=Cu(r,tu.lenMin,tu.lenMax);l.push([u-200,u-200+e]),u+=e-200+Cu(r,...Mu.afterBroken)}else if(e===`B`){let e=t===i.length-1,a=e?`শহরের প্রবেশমুখ`:o[d%o.length];s.push({id:`b${d+1}`,type:`barrier`,s:u,chanda:Nu(r,d,n.randomBarriers),workers:4+Math.floor(r()*5),nameBn:`চাঁদা পয়েন্ট ${pu(d+1)} — ${a}`,icon:`{hand}`}),(r()<.6||e)&&c.push([u-380,u+120]),d++,u+=Cu(r,...Mu.afterBarrier)}else s.push({...e,s:u}),e.bridge?u+=e.bridge.offset+e.bridge.length+Cu(r,...Mu.afterBridge):u+=Cu(r,...Mu.afterToll)}),u=Math.round(u);let m=u-300,h=u+Mu.cityStretch;s.push({id:`market`,type:`market`,s:h,nameBn:`কাওরান বাজার`,icon:`{cart}`});let g=[u,h-iu.wideEndBeforeMarket];iu.junctions.forEach((e,t)=>{s.push({id:`junction${t+1}`,type:`junction`,s:u+e,nameBn:`চার রাস্তার মোড়`,icon:`{trafficlight}`})});let[_,v]=iu.junctions,y=Cu(r,tu.cityLenMin,tu.cityLenMax),b=u+_+40+r()*Math.max(0,v-_-80-y);l.push([b,b+y]),s.sort((e,t)=>e.s-t.s);let x=c.map(([e,t])=>({from:e,to:t,kind:`bazar`,limitKmh:Ql.bazarKmh,side:r()<.5?-1:1})),S=[[0,Mu.highwayStart+300],[m-400,h+400],...c.map(([e,t])=>[e-200,t+200]),...l.map(([e,t])=>[e-150,t+150])];for(let e of s){if(e.type===`farm`||e.type===`market`||e.type===`junction`)continue;let t=(e.type===`roadTax`||e.type===`roadToll`||e.type===`bridgeToll`)&&e.bridge?e.s+e.bridge.offset+e.bridge.length+250:e.s+300;S.push([e.s-450,t])}let C=Ql.schoolsMin+Math.floor(r()*(Ql.schoolsMax-Ql.schoolsMin+1));for(let e=0;e<60&&x.filter(e=>e.kind===`school`).length<C;e++){let e=Mu.highwayStart+r()*(m-Mu.highwayStart),t=e-140,n=e+140;S.some(([e,r])=>n>e&&t<r)||(x.push({from:t,to:n,kind:`school`,limitKmh:Ql.schoolKmh,side:r()<.5?-1:1}),S.push([t-300,n+300]))}return x.push({from:h-650,to:h+20,kind:`market`,limitKmh:Ql.marketKmh,side:-1}),x.sort((e,t)=>e.from-t.from),{id:`${n.id}-${t}`,nameBn:`${n.nameBn} → ঢাকা`,descriptionBn:n.pathBn,highwayStartS:Mu.highwayStart,cityStartS:m,townZones:c,slowZones:x,broken:l,wide:g,events:s,length:h+300}}var Fu={tomato:{id:`tomato`,nameBn:`টমেটো`,icon:`{tomato}`,farmPricePerKg:20,karwanBazarPricePerKg:58,crateKg:25,color:14695210},potato:{id:`potato`,nameBn:`আলু`,icon:`{potato}`,farmPricePerKg:18,karwanBazarPricePerKg:32,crateKg:50,color:13214826},onion:{id:`onion`,nameBn:`পেঁয়াজ`,icon:`{onion}`,farmPricePerKg:35,karwanBazarPricePerKg:72,crateKg:40,color:11882603},brinjal:{id:`brinjal`,nameBn:`বেগুন`,icon:`{brinjal}`,farmPricePerKg:22,karwanBazarPricePerKg:60,crateKg:30,color:5974638},cauliflower:{id:`cauliflower`,nameBn:`ফুলকপি`,icon:`{cauliflower}`,farmPricePerKg:18,karwanBazarPricePerKg:50,crateKg:30,color:15854288},cabbage:{id:`cabbage`,nameBn:`বাঁধাকপি`,icon:`{cabbage}`,farmPricePerKg:12,karwanBazarPricePerKg:38,crateKg:40,color:10275941},chili:{id:`chili`,nameBn:`কাঁচা মরিচ`,icon:`{chili}`,farmPricePerKg:40,karwanBazarPricePerKg:110,crateKg:20,color:3055162},gourd:{id:`gourd`,nameBn:`লাউ`,icon:`{gourd}`,farmPricePerKg:15,karwanBazarPricePerKg:42,crateKg:40,color:8172354}},Iu=Object.values(Fu),Y=e=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">${e}</svg>`,Lu=`M16 44a12 12 0 0 1 1-24 16 16 0 0 1 30 2 11 11 0 0 1 1 22z`,Ru={farm:Y(`<path d="M32 62V12" stroke="#b5832a" stroke-width="4" stroke-linecap="round"/><g fill="#e9b949"><ellipse cx="32" cy="10" rx="5" ry="9"/><ellipse cx="24" cy="22" rx="5" ry="9" transform="rotate(-35 24 22)"/><ellipse cx="40" cy="22" rx="5" ry="9" transform="rotate(35 40 22)"/><ellipse cx="24" cy="36" rx="5" ry="9" transform="rotate(-35 24 36)"/><ellipse cx="40" cy="36" rx="5" ry="9" transform="rotate(35 40 36)"/></g>`),truck:Y(`<rect x="3" y="14" width="38" height="28" rx="3" fill="#f2a03d"/><path d="M8 20h28M8 27h28M8 34h28" stroke="#e63946" stroke-width="2"/><path d="M41 22h12l8 11v9H41z" fill="#2a9d8f"/><rect x="45" y="26" width="8" height="7" rx="1" fill="#bfe6f7"/><circle cx="15" cy="46" r="6.5" fill="#222"/><circle cx="51" cy="46" r="6.5" fill="#222"/><circle cx="15" cy="46" r="2.5" fill="#bbb"/><circle cx="51" cy="46" r="2.5" fill="#bbb"/>`),hand:Y(`<path d="M19 36V18a4 4 0 0 1 8 0v12V11a4 4 0 0 1 8 0v19V13a4 4 0 0 1 8 0v18V20a4 4 0 0 1 8 0v22c0 11-8 19-19 19h-1c-7 0-11-3-15-9l-7-11a4 4 0 0 1 7-5z" fill="#f4b183" stroke="#9a5d3a" stroke-width="2.5" stroke-linejoin="round"/>`),train:Y(`<rect x="13" y="5" width="38" height="46" rx="9" fill="#1d4e89"/><rect x="18" y="11" width="28" height="15" rx="3" fill="#bfe6f7"/><rect x="13" y="31" width="38" height="5" fill="#ffd166"/><circle cx="22" cy="43" r="3.5" fill="#fff3b0"/><circle cx="42" cy="43" r="3.5" fill="#fff3b0"/><path d="M19 51l-7 11M45 51l7 11" stroke="#666" stroke-width="4" stroke-linecap="round"/>`),crash:Y(`<path fill="#f77f00" d="M32 2l6 15 15-7-5 16 14 6-14 6 6 16-16-7-6 16-6-16-16 7 6-16L2 32l14-6-5-16 15 7z"/><path fill="#ffd166" d="M32 16l3 9 9-3-4 9 8 3-8 3 4 9-9-3-3 9-3-9-9 3 4-9-8-3 8-3-4-9 9 3z"/>`),bridge:Y(`<rect y="47" width="64" height="17" fill="#4f9fd6"/><path d="M0 52c6-3 10 3 16 0s10 3 16 0 10 3 16 0 10 3 16 0" stroke="#bfe6f7" stroke-width="2" fill="none"/><rect x="2" y="27" width="60" height="7" fill="#8d969c"/><path d="M4 27l8-13 8 13 8-13 8 13 8-13 8 13 8-13" fill="none" stroke="#5f686e" stroke-width="3" stroke-linejoin="round"/><rect x="13" y="34" width="6" height="14" fill="#c2bcae"/><rect x="45" y="34" width="6" height="14" fill="#c2bcae"/>`),cart:Y(`<path d="M3 9h9l7 30h31l7-21H16" fill="none" stroke="#2b2d42" stroke-width="4.5" stroke-linejoin="round" stroke-linecap="round"/><path d="M18 22h35l-5 13H21z" fill="#8bd17c"/><circle cx="24" cy="49" r="5" fill="#2b2d42"/><circle cx="46" cy="49" r="5" fill="#2b2d42"/>`),receipt:Y(`<path d="M13 3h38v56l-6-4-6 4-6-4-6 4-6-4-8 4z" fill="#fff" stroke="#8a8a8a" stroke-width="2.5" stroke-linejoin="round"/><path d="M20 15h24M20 25h24M20 35h16" stroke="#555" stroke-width="3.5" stroke-linecap="round"/>`),sound:Y(`<path d="M7 24h11l14-12v40L18 40H7z" fill="currentColor"/><path d="M40 23a13 13 0 0 1 0 18M46 16a23 23 0 0 1 0 32" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round"/>`),mute:Y(`<path d="M7 24h11l14-12v40L18 40H7z" fill="currentColor"/><path d="M41 24l15 16M56 24L41 40" stroke="#ff6b5a" stroke-width="5" stroke-linecap="round"/>`),warning:Y(`<path d="M32 4l30 54H2z" fill="#ffd23f" stroke="#1d1d1d" stroke-width="3.5" stroke-linejoin="round"/><rect x="29" y="22" width="6" height="20" rx="2.5" fill="#1d1d1d"/><circle cx="32" cy="49" r="3.6" fill="#1d1d1d"/>`),clipboard:Y(`<rect x="9" y="8" width="46" height="54" rx="5" fill="#c69c6d"/><rect x="15" y="14" width="34" height="43" rx="2" fill="#fff"/><rect x="22" y="3" width="20" height="11" rx="3" fill="#6b4a2a"/><path d="M21 26h22M21 36h22M21 46h14" stroke="#555" stroke-width="3.5" stroke-linecap="round"/>`),bike:Y(`<circle cx="14" cy="46" r="10" fill="none" stroke="#222" stroke-width="5"/><circle cx="50" cy="46" r="10" fill="none" stroke="#222" stroke-width="5"/><path d="M14 46l12-13h14l10 13" fill="none" stroke="#c1121f" stroke-width="5" stroke-linejoin="round"/><path d="M40 33l4-11h8" stroke="#555" stroke-width="4" fill="none" stroke-linecap="round"/><rect x="23" y="27" width="17" height="6" rx="3" fill="#333"/><circle cx="31" cy="10" r="6" fill="#b3ada2"/><path d="M30 17l-4 10" stroke="#9ec3e6" stroke-width="7" stroke-linecap="round"/>`),bus:Y(`<rect x="8" y="5" width="48" height="47" rx="7" fill="#d63a2f"/><rect x="13" y="11" width="38" height="19" rx="2" fill="#bfe6f7"/><rect x="8" y="34" width="48" height="4" fill="#ffd23f"/><circle cx="16" cy="44" r="3.5" fill="#fff3b0"/><circle cx="48" cy="44" r="3.5" fill="#fff3b0"/><rect x="12" y="52" width="9" height="8" rx="2" fill="#222"/><rect x="43" y="52" width="9" height="8" rx="2" fill="#222"/>`),horn:Y(`<path d="M5 25v14l10-2 32 13V14L15 27z" fill="#e9b949" stroke="#8a6a1a" stroke-width="2.5" stroke-linejoin="round"/><path d="M53 22a12 12 0 0 1 0 20M58 16a20 20 0 0 1 0 32" fill="none" stroke="#e9b949" stroke-width="4" stroke-linecap="round"/>`),road:Y(`<path d="M23 3h18l21 58H2z" fill="#4b4a4f"/><path d="M8 61L25 3M56 61L39 3" stroke="#eee" stroke-width="2.5"/><path d="M32 8v9M32 25v11M32 44v15" stroke="#ffd23f" stroke-width="3.5"/>`),siren:Y(`<path d="M15 47a17 17 0 0 1 34 0z" fill="#e63946"/><rect x="9" y="47" width="46" height="9" rx="2" fill="#555"/><path d="M32 6v9M10 15l7 7M54 15l-7 7" stroke="#e63946" stroke-width="4.5" stroke-linecap="round"/><rect x="28" y="31" width="8" height="12" rx="3" fill="#ffd0d0"/>`),box:Y(`<path d="M32 5l27 12v30L32 59 5 47V17z" fill="#c69c6d"/><path d="M5 17l27 12 27-12M32 29v30" fill="none" stroke="#8a6238" stroke-width="3"/><path d="M18 11l27 12" stroke="#e8d3b0" stroke-width="4"/>`),replay:Y(`<path d="M50 34a18 18 0 1 1-5-14" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round"/><path d="M48 7v14H34" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>`),home:Y(`<path d="M7 31L32 9l25 22" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 29v27h13V41h8v15h13V29L32 14z" fill="currentColor"/>`),pause:Y(`<rect x="15" y="11" width="11" height="42" rx="3" fill="currentColor"/><rect x="38" y="11" width="11" height="42" rx="3" fill="currentColor"/>`),check:Y(`<path d="M9 34l15 15 31-32" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>`),ok:Y(`<circle cx="32" cy="32" r="28" fill="#2d9d4f"/><path d="M18 33l10 10 18-20" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>`),pin:Y(`<path d="M32 61s19-21 19-35a19 19 0 0 0-38 0c0 14 19 35 19 35z" fill="#e63946"/><circle cx="32" cy="26" r="7.5" fill="#fff"/>`),phone:Y(`<rect x="17" y="3" width="30" height="58" rx="6" fill="#2b2d42"/><rect x="21" y="10" width="22" height="40" rx="1" fill="#9fd3f5"/><circle cx="32" cy="55" r="2.6" fill="#999"/>`),school:Y(`<rect x="8" y="27" width="48" height="32" fill="#f2d16b"/><path d="M3 29L32 13l29 16z" fill="#b5482d"/><rect x="27" y="41" width="10" height="18" fill="#6b4a2a"/><rect x="13" y="35" width="9" height="8" fill="#3a5a7a"/><rect x="42" y="35" width="9" height="8" fill="#3a5a7a"/><path d="M32 13V2" stroke="#666" stroke-width="2"/><rect x="32" y="2" width="12" height="7" fill="#006a4e"/><circle cx="37" cy="5.5" r="2.3" fill="#f42a41"/>`),share:Y(`<path d="M32 6v32M20 18L32 6l12 12" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 30v26h40V30" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>`),money:Y(`<path d="M24 6h16l-4 9h-8z" fill="#c69c3d"/><path d="M27 15h10c13 6 19 17 19 28 0 10-9 15-24 15S8 53 8 43c0-11 6-22 19-28z" fill="#e9b949"/><circle cx="32" cy="40" r="9" fill="none" stroke="#8a6a1a" stroke-width="3.5"/><path d="M26 15h12" stroke="#8a6a1a" stroke-width="3"/>`),scale:Y(`<path d="M32 8v46M18 58h28M8 18h48" stroke="#c9a65a" stroke-width="4" stroke-linecap="round"/><path d="M8 18L2 36h12zM56 18l-6 18h12z" fill="none" stroke="#c9a65a" stroke-width="3" stroke-linejoin="round"/><path d="M2 36a6 4 0 0 0 12 0zM50 36a6 4 0 0 0 12 0z" fill="#e9c46a"/><circle cx="32" cy="8" r="4" fill="#c9a65a"/>`),camera:Y(`<rect x="5" y="18" width="38" height="28" rx="5" fill="currentColor"/><path d="M43 28l16-9v26l-16-9z" fill="currentColor"/>`),govt:Y(`<path d="M32 5L4 20h56z" fill="#d9c7a3"/><rect x="7" y="21" width="50" height="5" fill="#c9b8a2"/><g fill="#efe9dc"><rect x="11" y="27" width="7" height="22"/><rect x="23" y="27" width="7" height="22"/><rect x="35" y="27" width="7" height="22"/><rect x="47" y="27" width="7" height="22"/></g><rect x="5" y="50" width="54" height="8" fill="#c9b8a2"/>`),keyboard:Y(`<rect x="3" y="16" width="58" height="34" rx="5" fill="none" stroke="currentColor" stroke-width="4"/><g fill="currentColor"><rect x="10" y="23" width="6" height="6"/><rect x="20" y="23" width="6" height="6"/><rect x="30" y="23" width="6" height="6"/><rect x="40" y="23" width="6" height="6"/><rect x="50" y="23" width="5" height="6"/><rect x="18" y="38" width="28" height="5"/></g>`),sad:Y(`<circle cx="32" cy="32" r="28" fill="#ffd23f"/><circle cx="22" cy="26" r="4" fill="#3a2a1a"/><circle cx="42" cy="26" r="4" fill="#3a2a1a"/><path d="M20 47c6-8 18-8 24 0" fill="none" stroke="#3a2a1a" stroke-width="4" stroke-linecap="round"/><path d="M44 32c3 5 3 9 0 10-3-1-3-5 0-10z" fill="#4f9fd6"/>`),party:Y(`<path d="M6 60l12-36 22 22z" fill="#f2a03d"/><path d="M10 48l18 6M14 36l12 14" stroke="#e63946" stroke-width="3"/><g fill="#2a9d8f"><circle cx="44" cy="10" r="3"/><circle cx="56" cy="24" r="3"/></g><g fill="#e63946"><rect x="30" y="6" width="5" height="5" transform="rotate(30 32 8)"/><rect x="52" y="40" width="5" height="5"/></g><path d="M36 22c6-6 4-12 10-14M44 32c6-2 10 2 16-2" stroke="#7b2cbf" stroke-width="3" fill="none" stroke-linecap="round"/>`),stop:Y(`<path d="M22 4h20l18 18v20L42 60H22L4 42V22z" fill="#c1121f" stroke="#fff" stroke-width="3"/><rect x="14" y="28" width="36" height="8" rx="2" fill="#fff"/>`),plane:Y(`<path d="M60 30c0-3-4-4-8-4H40L26 6h-7l7 20H14l-5-7H4l3 13-3 13h5l5-7h12l-7 20h7l14-20h12c4 0 8-1 8-4z" fill="currentColor"/>`),sun:Y(`<circle cx="32" cy="32" r="13" fill="#ffc83d"/><g stroke="#ffc83d" stroke-width="4.5" stroke-linecap="round"><path d="M32 4v8M32 52v8M4 32h8M52 32h8M12 12l6 6M46 46l6 6M52 12l-6 6M12 52l6-6"/></g>`),sunset:Y(`<path d="M14 44a18 18 0 0 1 36 0z" fill="#ff9a40"/><g stroke="#ff9a40" stroke-width="4" stroke-linecap="round"><path d="M32 12v8M10 22l6 6M54 22l-6 6M4 40h6M54 40h6"/></g><path d="M4 50h56M12 57h40" stroke="#c8553d" stroke-width="4" stroke-linecap="round"/>`),moon:Y(`<path d="M40 6a26 26 0 1 0 18 40A22 22 0 0 1 40 6z" fill="#f4e7a1"/><circle cx="26" cy="30" r="3" fill="#e2d38a"/><circle cx="34" cy="44" r="2" fill="#e2d38a"/>`),cloud:Y(`<path d="${Lu}" fill="#dfe5ea" stroke="#9aa5ae" stroke-width="2.5"/>`),rain:Y(`<path d="${Lu}" fill="#b9c3cc" stroke="#7d8992" stroke-width="2.5" transform="translate(0 -6)"/><path d="M20 46l-4 11M32 46l-4 11M44 46l-4 11" stroke="#4f9fd6" stroke-width="4" stroke-linecap="round"/>`),storm:Y(`<path d="${Lu}" fill="#6d757d" stroke="#3e454c" stroke-width="2.5" transform="translate(0 -8)"/><path d="M35 34L22 50h9l-6 13 17-19h-9l7-10z" fill="#ffd23f"/>`),turtle:Y(`<ellipse cx="30" cy="38" rx="20" ry="13" fill="#4f8f3a"/><path d="M14 38h32M22 28l-4 20M38 28l4 20" stroke="#356b26" stroke-width="2.5"/><circle cx="54" cy="36" r="6" fill="#9ccc65"/><g fill="#9ccc65"><ellipse cx="16" cy="51" rx="5" ry="3.5"/><ellipse cx="42" cy="51" rx="5" ry="3.5"/></g><circle cx="56" cy="34" r="1.5" fill="#222"/>`),hourglass:Y(`<path d="M14 4h36M14 60h36" stroke="#6b4a2a" stroke-width="5" stroke-linecap="round"/><path d="M18 6c0 16 12 18 12 26S18 42 18 58h28c0-16-12-18-12-26s12-10 12-26z" fill="#e8f4fb" stroke="#6b4a2a" stroke-width="3"/><path d="M24 14h16l-8 14zM20 56c4-8 8-12 12-12s8 4 12 12z" fill="#e9b949"/>`),left:Y(`<path d="M44 8L16 32l28 24z" fill="currentColor"/>`),right:Y(`<path d="M20 8l28 24-28 24z" fill="currentColor"/>`),play:Y(`<path d="M18 8l36 24-36 24z" fill="currentColor"/>`),tomato:Y(`<circle cx="32" cy="37" r="24" fill="#e03b2a"/><path d="M32 15l-7-7M32 15l7-7M32 15l-11 2M32 15l11 2" stroke="#2e9e3a" stroke-width="4" stroke-linecap="round"/><ellipse cx="23" cy="29" rx="6" ry="3.5" fill="#ff8a7a" opacity=".75"/>`),potato:Y(`<ellipse cx="32" cy="34" rx="27" ry="19" fill="#c9a46a" transform="rotate(-15 32 34)"/><g fill="#a07d48"><circle cx="20" cy="34" r="2"/><circle cx="34" cy="26" r="2"/><circle cx="42" cy="40" r="2"/><circle cx="28" cy="44" r="1.6"/></g>`),onion:Y(`<path d="M32 5c4 9 22 16 22 33a22 22 0 0 1-44 0C10 21 28 14 32 5z" fill="#b5506b"/><path d="M32 10v50M24 20c-6 12-6 30 4 38M40 20c6 12 6 30-4 38" stroke="#e8a0b4" stroke-width="2.5" fill="none"/>`),brinjal:Y(`<path d="M45 15c11 9 8 31-6 41S7 59 9 46s21-14 23-27 7-12 13-4z" fill="#5b2a6e"/><path d="M38 12l9 5 7-7-3 11-8 2z" fill="#2e9e3a"/><path d="M47 10l5-6" stroke="#2e9e3a" stroke-width="3" stroke-linecap="round"/>`),cauliflower:Y(`<path d="M6 40c8-5 15 6 26 6s18-11 26-6c-4 15-15 21-26 21S10 55 6 40z" fill="#4f8f3a"/><g fill="#f1ead0" stroke="#d8cfa8" stroke-width="1.5"><circle cx="21" cy="31" r="10"/><circle cx="34" cy="24" r="11"/><circle cx="45" cy="33" r="10"/><circle cx="32" cy="37" r="10"/></g>`),cabbage:Y(`<circle cx="32" cy="34" r="25" fill="#7cb342"/><path d="M32 11c-8 10-8 35 0 47M18 21c8 6 12 19 14 37M46 21c-8 6-12 19-14 37" fill="none" stroke="#d4e9b8" stroke-width="3"/>`),chili:Y(`<path d="M13 15c4 4 11 2 15 8 8 12 6 30 25 36-21 4-37-8-37-28 0-6-3-10-3-16z" fill="#d62828"/><path d="M13 15c-2-4 0-9 5-11" stroke="#2e9e3a" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M20 26c4 10 8 18 18 24" stroke="#ff7a6a" stroke-width="2.5" fill="none" stroke-linecap="round"/>`),gourd:Y(`<path d="M28 7h8v8c0 6 15 12 15 30a19 19 0 0 1-38 0c0-18 15-24 15-30z" fill="#9ccc65"/><rect x="29" y="2" width="6" height="8" rx="1" fill="#6b8e23"/><path d="M24 34c-2 8 0 16 6 20" stroke="#c5e1a5" stroke-width="3" fill="none" stroke-linecap="round"/>`),mango:Y(`<path d="M36 9c14 4 22 18 18 32S36 62 24 58 6 40 12 26 26 7 36 9z" fill="#f4a300"/><ellipse cx="45" cy="9" rx="9" ry="4" fill="#2e9e3a" transform="rotate(-15 45 9)"/><path d="M34 10c1-4 4-6 7-6" stroke="#6b4a2a" stroke-width="3" fill="none"/>`),tea:Y(`<path d="M10 24h36v14a18 18 0 0 1-36 0z" fill="#fff" stroke="#8a5a3a" stroke-width="3"/><path d="M46 28h4a7 7 0 0 1 0 14h-5" fill="none" stroke="#8a5a3a" stroke-width="3.5"/><ellipse cx="28" cy="25" rx="16" ry="3" fill="#a0612a"/><path d="M4 56h48" stroke="#8a5a3a" stroke-width="4" stroke-linecap="round"/><path d="M20 18c-3-4 3-6 0-12M30 18c-3-4 3-6 0-12M40 18c-3-4 3-6 0-12" stroke="#bbb" stroke-width="2.5" fill="none" stroke-linecap="round"/>`),fuchka:Y(`<path d="M6 40h52a26 22 0 0 1-52 0z" fill="#c8c8c8" stroke="#8a8a8a" stroke-width="2"/><g fill="#e9b949" stroke="#b5832a" stroke-width="2"><circle cx="20" cy="34" r="10"/><circle cx="44" cy="34" r="10"/><circle cx="32" cy="28" r="11"/></g><circle cx="32" cy="24" r="4" fill="#6b4a2a"/>`),fish:Y(`<path d="M4 32c10-14 30-18 44-8l12-10v36L48 40C34 50 14 46 4 32z" fill="#c7d3dc" stroke="#7d8a96" stroke-width="2.5" stroke-linejoin="round"/><circle cx="16" cy="29" r="3" fill="#222"/><path d="M24 24c4 4 4 12 0 16" stroke="#9aa8b4" stroke-width="2.5" fill="none"/>`),building:Y(`<rect x="12" y="6" width="28" height="54" fill="#d9c7a8"/><rect x="40" y="22" width="14" height="38" fill="#bfb5a6"/><g fill="#4d6170"><rect x="17" y="12" width="7" height="6"/><rect x="28" y="12" width="7" height="6"/><rect x="17" y="24" width="7" height="6"/><rect x="28" y="24" width="7" height="6"/><rect x="17" y="36" width="7" height="6"/><rect x="28" y="36" width="7" height="6"/><rect x="44" y="28" width="6" height="5"/><rect x="44" y="40" width="6" height="5"/></g><rect x="22" y="48" width="8" height="12" fill="#6b4a2a"/>`),bald:Y(`<ellipse cx="32" cy="34" rx="20" ry="23" fill="#c68e5f"/><ellipse cx="25" cy="18" rx="7" ry="4" fill="#e8b88a"/><path d="M12 36c-4 0-4 8 0 8M52 36c4 0 4 8 0 8" stroke="#c68e5f" stroke-width="4"/><circle cx="25" cy="34" r="2.5" fill="#222"/><circle cx="39" cy="34" r="2.5" fill="#222"/><path d="M22 44c6-4 14-4 20 0" stroke="#3a2a1a" stroke-width="4" fill="none" stroke-linecap="round"/>`),umbrella:Y(`<path d="M4 32a28 26 0 0 1 56 0c-4-4-10-4-14 0-4-4-10-4-14 0-4-4-10-4-14 0-4-4-10-4-14 0z" fill="#7b2cbf"/><path d="M32 6v2M32 32v20a6 6 0 0 1-12 0" stroke="#3a2a1a" stroke-width="4" fill="none" stroke-linecap="round"/>`),sweets:Y(`<path d="M4 34h56l-6 20H10z" fill="#c69c6d" stroke="#8a6238" stroke-width="2.5"/><g fill="#fff8ea" stroke="#e5d6b8" stroke-width="2"><circle cx="20" cy="28" r="10"/><circle cx="40" cy="28" r="10"/><circle cx="30" cy="20" r="10"/></g>`),books:Y(`<rect x="8" y="44" width="48" height="12" rx="2" fill="#e63946"/><rect x="12" y="32" width="42" height="12" rx="2" fill="#2a9d8f"/><rect x="6" y="20" width="44" height="12" rx="2" fill="#f2a03d"/><path d="M14 50h34M18 38h30M12 26h32" stroke="#fff" stroke-width="2" opacity=".7"/><path d="M40 6l14 4-4 12-14-4z" fill="#ffd23f"/>`),detective:Y(`<path d="M10 26c0-10 10-18 22-18s22 8 22 18z" fill="#6b4a2a"/><rect x="4" y="24" width="56" height="6" rx="3" fill="#4a3220"/><circle cx="26" cy="44" r="12" fill="#e8f4fb" stroke="#333" stroke-width="4"/><path d="M35 53l12 10" stroke="#333" stroke-width="6" stroke-linecap="round"/>`),cement:Y(`<path d="M10 14h44l4 40H6z" fill="#adb5bd" stroke="#6c757d" stroke-width="3" stroke-linejoin="round"/><rect x="16" y="24" width="32" height="18" rx="3" fill="#f77f00"/><path d="M22 33h20" stroke="#fff" stroke-width="4" stroke-linecap="round"/>`),cow:Y(`<path d="M8 14c4 2 8 6 10 10M56 14c-4 2-8 6-10 10" stroke="#c9b8a2" stroke-width="5" stroke-linecap="round" fill="none"/><path d="M16 22h32l4 20c0 12-9 18-20 18S12 54 12 42z" fill="#fff" stroke="#555" stroke-width="2.5"/><path d="M18 24c6 2 8 10 4 14-4-2-6-8-4-14zM44 30c4 0 6 6 2 10-3-3-4-7-2-10z" fill="#333"/><ellipse cx="32" cy="48" rx="12" ry="8" fill="#f4b6c2"/><circle cx="27" cy="48" r="2" fill="#333"/><circle cx="37" cy="48" r="2" fill="#333"/>`),trafficlight:Y(`<rect x="20" y="4" width="24" height="48" rx="6" fill="#2b2d42"/><circle cx="32" cy="15" r="6" fill="#e63946"/><circle cx="32" cy="28" r="6" fill="#ffd23f"/><circle cx="32" cy="41" r="6" fill="#2d9d4f"/><rect x="29" y="52" width="6" height="10" fill="#555"/>`)},zu=/\{([a-z]+)\}/g;function Bu(e,t=`ic`){let n=Ru[e];return n?n.replace(`<svg `,`<svg class="${t}" aria-hidden="true" `):``}function Vu(e){return e.replace(zu,(e,t)=>Ru[t]?Bu(t):e)}var Hu=new Map;function Uu(e){return Hu.get(e)}async function Wu(){await Promise.all(Object.entries(Ru).map(([e,t])=>new Promise(n=>{let r=new Image(128,128),i=t.replace(`<svg `,`<svg width="128" height="128" style="color:#ffffff" `);r.onload=()=>{Hu.set(e,r),n()},r.onerror=()=>n(),r.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(i)}`})))}var Gu=zu;function X(e,t=``,n=``,r){let i=document.createElement(e);return t&&(i.className=t),n&&(i.innerHTML=Vu(n)),r?.appendChild(i),i}function Ku(e,t){let n=e;n._raw!==t&&(n._raw=t,t.includes(`{`)?e.innerHTML=Vu(qu(t)):e.textContent=t)}function qu(e){return e.replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e])}function Ju(e,t,n,r){let i=X(`button`,t,e,r);return i.type=`button`,i.addEventListener(`click`,e=>{e.stopPropagation(),i.disabled||n()}),i}var Yu=class{constructor(e,t){q(this,`game`,void 0),q(this,`overlay`,void 0),q(this,`card`,void 0),q(this,`rows`,[]),q(this,`farm`,null),q(this,`els`,void 0),this.game=t,this.overlay=X(`div`,`modal-overlay hidden`,``,e),this.card=X(`div`,`modal buy-panel`,``,this.overlay)}get isOpen(){return!this.overlay.classList.contains(`hidden`)}open(e){this.farm=e,this.rows=[];let t=this.card;t.innerHTML=``,X(`div`,`bp-head`,`<div class="bp-title">{farm} ${qu(e.nameBn)}</div><div class="bp-quote">“${qu(e.farmerLineBn)}”</div>`,t);let n=X(`div`,`bp-rows`,``,t);for(let t of e.vegetables){let e=Fu[t],r=X(`div`,`bp-row`,``,n);X(`div`,`bp-veg`,`<span class="emo">${e.icon}</span><div><b>${e.nameBn}</b><small>${_u(e.farmPricePerKg)}</small></div>`,r);let i=X(`div`,`bp-ctrl`,``,r),a={veg:t,kg:0};a.minus=Ju(`−`,`step`,()=>this.setKg(a,a.kg-J.buyStepKg),i),a.kgEl=X(`div`,`bp-kg`,``,i),a.plus=Ju(`+`,`step`,()=>this.setKg(a,a.kg+J.buyStepKg),i),a.range=X(`input`,`bp-range`,``,r),a.range.type=`range`,a.range.min=`0`,a.range.step=String(J.buyStepKg),a.range.addEventListener(`input`,()=>this.setKg(a,Number(a.range.value))),a.sub=X(`div`,`bp-sub`,``,r),this.rows.push(a)}let r=X(`div`,`bp-summary`,``,t),i=(e,t=``)=>X(`b`,``,``,X(`div`,`bp-line ${t}`,`<span>${e}</span>`,r)),a=i(`এই ক্ষেত থেকে`),o=i(`মোট সবজি কেনা`),s=i(`নগদ বাকি থাকবে`,`big`),c=X(`div`,`bp-load`,``,r),l=X(`div`,`bp-load-label`,``,c),u=X(`div`,`fill`,``,X(`div`,`bar`,``,c)),d=X(`div`,`bp-road`,``,r),f=X(`div`,`bp-buttons`,``,t);Ju(`বন্ধ করুন`,`btn btn-ghost`,()=>this.close(),f);let p=Ju(`কিনে নিন {check}`,`btn btn-buy`,()=>this.commit(),f),m=Ju(`কিনে রওনা দিন {truck}`,`btn btn-go`,()=>{this.commit(),this.close(),this.game.depart()},f);this.els={farmTotal:a,spent:o,cashLeft:s,load:l,loadFill:u,road:d,buy:p,go:m},this.refresh(),this.overlay.classList.remove(`hidden`)}pendingTotal(e){let t=0,n=0;for(let r of this.rows)r!==e&&(t+=r.kg,n+=r.kg*Fu[r.veg].farmPricePerKg);return{kg:t,cost:n}}maxFor(e){let t=this.game,n=this.pendingTotal(e),r=J.truckCapacityKg-t.cargo.totalKg-n.kg,i=(t.cash-n.cost)/Fu[e.veg].farmPricePerKg,a=J.buyStepKg;return Math.max(0,Math.floor(Math.min(r,i)/a)*a)}setKg(e,t){e.kg=Math.max(0,Math.min(this.maxFor(e),Math.round(t/J.buyStepKg)*J.buyStepKg)),this.refresh()}refresh(){let e=this.game;for(let e of this.rows){let t=this.maxFor(e);e.range.max=String(Math.max(t,J.buyStepKg)),e.range.value=String(e.kg),e.range.disabled=t<=0,Ku(e.kgEl,vu(e.kg)),Ku(e.sub,gu(e.kg*Fu[e.veg].farmPricePerKg)),e.minus.disabled=e.kg<=0,e.plus.disabled=e.kg+J.buyStepKg>t}let t=this.pendingTotal(),n=e.ledger.sum({categories:[`PURCHASE`]}),r=e.cash-t.cost,i=e.cargo.totalKg+t.kg,a=this.els;Ku(a.farmTotal,gu(t.cost)),Ku(a.spent,gu(n+t.cost)),Ku(a.cashLeft,gu(r)),Ku(a.load,`ট্রাকের লোড: ${vu(i)} / ${hu(J.truckCapacityKg)}`),a.loadFill.style.width=`${i/J.truckCapacityKg*100}%`;let o=e.estimatedRoadCost();a.road.innerHTML=Vu(`{road} রাস্তার আনুমানিক খরচ: টোল ${gu(o.legal)} + চাঁদা ${gu(o.chanda)}`)+(r<o.legal+o.chanda?` <span class="warn-text">— নগদ কম পড়লে মাল দিয়ে দিতে হবে!</span>`:``),a.buy.disabled=t.kg<=0,a.go.disabled=i<=0}commit(){if(this.farm){for(let e of this.rows)e.kg>0&&this.game.buy(e.veg,e.kg,this.farm.nameBn),e.kg=0;this.refresh()}}hide(){this.overlay.classList.add(`hidden`),this.farm=null}close(){this.overlay.classList.add(`hidden`),this.farm=null,this.game.onBuyPanelClosed()}},Xu=class{constructor(e,t){q(this,`theme`,void 0),q(this,`overlay`,void 0),q(this,`card`,void 0),q(this,`onPay`,null),this.theme=t,this.overlay=X(`div`,`modal-overlay hidden`,``,e),this.card=X(`div`,`modal pay-dialog ${t.className}`,``,this.overlay)}get isOpen(){return!this.overlay.classList.contains(`hidden`)}show(e,t,n){this.onPay=n;let r=this.theme,i=e.lines.map(e=>`<tr><td>${qu(e.labelBn)}</td><td class="num">${gu(e.amount)}</td></tr>`).join(``),a=t.cashPart<t.total;this.card.innerHTML=Vu(`
      <div class="pd-head"><span class="pd-icon">${r.icon}</span><div>
        <div class="pd-title">${qu(e.titleBn)}</div>
        <div class="pd-loc">{pin} ${qu(e.locationBn)}</div></div></div>
      <div class="pd-msg">“${qu(e.messageBn)}”</div>
      <table class="pd-lines">${i}
        <tr class="total"><td>মোট</td><td class="num">${gu(t.total)}</td></tr></table>
      <div class="pd-cash">আপনার নগদ: <b>${gu(t.cashBefore)}</b></div>
      ${a?`<div class="pd-inkind">{warning} ${r.inKindNote(gu(t.cashPart),vu(t.kgTaken))}</div>`:``}
      <div class="pd-receipt">${qu(r.receiptBn)}</div>`);let o=Ju(r.payLabel(gu(t.total)),`btn btn-pay`,()=>this.pay(),this.card);this.overlay.classList.remove(`hidden`),setTimeout(()=>o.focus(),50)}hide(){this.onPay=null,this.overlay.classList.add(`hidden`)}pay(){if(!this.isOpen||!this.onPay)return;let e=this.onPay;this.onPay=null,this.overlay.classList.add(`hidden`),e()}},Zu=class extends Xu{constructor(e){super(e,{className:`chanda`,icon:`{hand}`,receiptBn:`রশিদ নং: ???  ·  "উপরে জানিয়ে দেওয়া হবে"`,payLabel:e=>`${e} দিন {sad}`,inKindNote:(e,t)=>`নগদ ${e} নেওয়া হবে, বাকিটার বদলে ট্রাক থেকে ${t} মাল নামিয়ে নেবে।`})}},Qu=42,$u=2*Math.PI*Qu,ed=class{constructor(e){q(this,`root`,void 0),q(this,`ring`,void 0),q(this,`secs`,void 0),q(this,`dist`,void 0),q(this,`hint`,void 0),this.root=X(`div`,`chase hidden`,``,e),this.root.innerHTML=Vu(`
      <div class="chase-title">{bike} ধাওয়া!</div>
      <div class="chase-ring">
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="${Qu}" class="bg"/>
          <circle cx="50" cy="50" r="${Qu}" class="fg" stroke-dasharray="${$u}" stroke-dashoffset="${$u}" transform="rotate(-90 50 50)"/>
        </svg>
        <div class="chase-secs"></div>
      </div>
      <div class="chase-dist"></div>
      <div class="chase-hint"></div>`),this.ring=this.root.querySelector(`.fg`),this.secs=this.root.querySelector(`.chase-secs`),this.dist=this.root.querySelector(`.chase-dist`),this.hint=this.root.querySelector(`.chase-hint`)}update(e,t,n){if(this.root.classList.toggle(`hidden`,!e),!e)return;let r=J.chaseRequiredSeconds,i=Math.min(1,t/r);this.ring.setAttribute(`stroke-dashoffset`,String($u*(1-i))),Ku(this.secs,`${hu(Math.ceil(r-t))}`),Ku(this.dist,Number.isFinite(n)?`পিছনে: ${yu(Math.max(0,n))}`:``);let a=t>0;Ku(this.hint,a?`গতি ধরে রাখুন!`:`${hu(J.ramSpeedKmh)}+ গতিতে উঠুন!`),this.root.classList.toggle(`filling`,a),this.root.classList.toggle(`close`,n<40)}},td=120;function nd(e){return 225-Math.min(e,td)/td*270}function rd(e,t,n,r){let i=r*Math.PI/180;return[e+n*Math.cos(i),t-n*Math.sin(i)]}function id(e,t,n,r,i){let[a,o]=rd(e,t,n,r),[s,c]=rd(e,t,n,i);return`M ${a} ${o} A ${n} ${n} 0 ${+(Math.abs(r-i)>180)} 1 ${s} ${c}`}function ad(){let e=``;for(let t=0;t<=td;t+=10){let n=nd(t),r=t%20==0,[i,a]=rd(100,100,84,n),[o,s]=rd(100,100,r?70:76,n);if(e+=`<line x1="${i}" y1="${a}" x2="${o}" y2="${s}" class="tick${t>=J.ramSpeedKmh?` hot`:``}"/>`,r){let[r,i]=rd(100,100,57,n);e+=`<text x="${r}" y="${i}" class="lbl">${pu(t)}</text>`}}let[t,n]=rd(100,100,92,nd(J.tollMaxSpeedKmh));return`
  <svg viewBox="0 0 200 175" class="speedo-svg" aria-hidden="true">
    <circle cx="100" cy="100" r="94" class="face"/>
    <path d="${id(100,100,86,nd(J.ramSpeedKmh),nd(td))}" class="red-arc"/>
    ${e}
    <circle cx="${t}" cy="${n}" r="6" class="toll-mark"/>
    <g class="needle"><line x1="100" y1="100" x2="100" y2="26"/><circle cx="100" cy="100" r="7"/></g>
    <text x="100" y="140" class="digital">০</text>
    <text x="100" y="158" class="unit">কিমি/ঘণ্টা</text>
  </svg>`}var od={farm:`{farm}`,barrier:`{hand}`,roadTax:`{receipt}`,roadToll:`{receipt}`,bridgeToll:`{bridge}`,rail:`{train}`,market:`{cart}`,roadworks:`{cement}`,junction:`{trafficlight}`},sd=class{constructor(e,t){q(this,`game`,void 0),q(this,`root`,void 0),q(this,`tollMode`,!1),q(this,`cash`,void 0),q(this,`kg`,void 0),q(this,`perKg`,void 0),q(this,`chanda`,void 0),q(this,`needle`,void 0),q(this,`digital`,void 0),q(this,`speedo`,void 0),q(this,`progressBar`,void 0),q(this,`progressFill`,void 0),q(this,`progressTruck`,void 0),q(this,`progressIcons`,[]),q(this,`next`,void 0),q(this,`warnEl`,void 0),q(this,`toastEl`,void 0),q(this,`floats`,void 0),q(this,`departBtn`,void 0),q(this,`farmHint`,void 0),q(this,`muteBtn`,void 0),q(this,`weatherEl`,void 0),q(this,`limitBadge`,void 0),q(this,`chaseMeter`,void 0),q(this,`warnTimer`,0),q(this,`toastTimer`,0),q(this,`lastPerKg`,0),q(this,`route`,null),this.game=t,this.root=X(`div`,`hud hidden`,``,e);let n=X(`div`,`hud-stats`,``,this.root),r=(e,t)=>X(`span`,`val`,``,X(`div`,`stat`,`<span class="ic">${e}</span><span class="lb">${t}</span>`,n));this.cash=r(`{money}`,`নগদ`),this.kg=r(`{box}`,`মাল`),this.perKg=r(`{scale}`,`কেজিপ্রতি খরচ`),this.chanda=r(`{hand}`,`চাঁদা মোট`);let i=X(`div`,`hud-top`,``,this.root);this.progressBar=X(`div`,`progress`,``,i),this.progressFill=X(`div`,`progress-fill`,``,this.progressBar),this.progressTruck=X(`div`,`progress-truck`,`{truck}`,this.progressBar),this.next=X(`div`,`next-event`,``,i),this.departBtn=Ju(`শহরের দিকে রওনা {truck}`,`btn btn-go depart`,()=>t.depart(),i),this.farmHint=X(`div`,`farm-hint`,`ক্ষেতের পাশের সবুজ জায়গায় থামুন — সবজি কিনুন`,i);let a=X(`div`,`hud-buttons`,``,this.root);this.weatherEl=X(`div`,`weather-chip`,``,a),this.muteBtn=Ju(t.sound.muted?`{mute}`:`{sound}`,`icon-btn`,()=>t.sound.toggleMute(),a),this.muteBtn.title=`শব্দ (M)`,t.sound.onMuteChange(e=>Ku(this.muteBtn,e?`{mute}`:`{sound}`)),Ju(`{camera}`,`icon-btn`,()=>t.toggleCamera(),a).title=`ক্যামেরা (C)`,Ju(`{pause}`,`icon-btn`,()=>t.togglePause(),a).title=`বিরতি (P)`,this.speedo=X(`div`,`speedo`,ad(),this.root),this.limitBadge=X(`div`,`limit-badge hidden`,``,this.speedo),this.needle=this.speedo.querySelector(`.needle`),this.digital=this.speedo.querySelector(`.digital`),this.chaseMeter=new ed(this.root),this.warnEl=X(`div`,`warn`,``,this.root),this.toastEl=X(`div`,`toast`,``,this.root),this.floats=X(`div`,`floats`,``,this.root)}show(e){this.root.classList.toggle(`hidden`,!e)}setRoute(e){this.route=e;for(let e of this.progressIcons)e.e.remove();this.progressIcons=[];let t=!1;for(let n of e.events){if(n.type===`farm`){if(t)continue;t=!0}let r=X(`div`,`p-icon p-${n.type}`,od[n.type]??n.icon,this.progressBar);r.style.left=`${n.s/e.length*100}%`,r.title=n.nameBn,this.progressIcons.push({e:r,s:n.s,id:n.id})}}warn(e,t,n=3){Ku(this.warnEl,e),this.warnEl.className=`warn show ${t}`,this.warnTimer=n}toast(e,t=2.5){Ku(this.toastEl,e),this.toastEl.classList.add(`show`),this.toastTimer=t}floatText(e,t=`bad`){let n=X(`div`,`float ${t}`,``,this.floats);Ku(n,e),setTimeout(()=>n.remove(),2600)}update(e){let t=this.game,n=t.truck,r=t.state.phase;Ku(this.cash,gu(t.cash)),Ku(this.kg,`${vu(t.cargo.totalKg)} / ${hu(J.truckCapacityKg)}`);let i=t.cargo.totalKg,a=i>0?t.ledger.cashSpent()/i:0;Ku(this.perKg,i>0?_u(a):`—`),a>this.lastPerKg+.004&&this.lastPerKg>0&&(this.perKg.parentElement.classList.remove(`bump`),this.perKg.offsetWidth,this.perKg.parentElement.classList.add(`bump`)),this.lastPerKg=a,Ku(this.chanda,gu(t.ledger.extortionTotal()));let o=Math.abs(n.kmh);if(this.needle.setAttribute(`transform`,`rotate(${90-nd(o)} 100 100)`),Ku(this.digital,hu(Math.round(o))),this.speedo.classList.toggle(`hot`,o>=J.ramSpeedKmh),this.speedo.classList.toggle(`toll`,this.tollMode),this.speedo.classList.toggle(`over`,this.tollMode&&o>J.tollMaxSpeedKmh),this.route){let e=Math.min(1,Math.max(0,n.s/this.route.length));this.progressFill.style.width=`${e*100}%`,this.progressTruck.style.left=`${e*100}%`;for(let e of this.progressIcons)e.e.classList.toggle(`done`,e.s<n.s);let i=t.nextPieceAhead(n.frontS);if(i&&r===`HIGHWAY`){let e=i.event;Ku(this.next,`${od[e.type]??``} ${e.nameBn} · ${yu(i.s-n.frontS)}`)}else Ku(this.next,r===`FARM`?`{farm} গ্রামের ক্ষেত — সবজি কিনুন`:``)}let s=r===`FARM`;this.departBtn.classList.toggle(`hidden`,!s||t.cargo.totalKg<=0||t.modal),this.farmHint.classList.toggle(`hidden`,!s||t.cargo.totalKg>0||t.modal),this.chaseMeter.update(t.chase.active,t.chase.meter,t.chase.gap),Ku(this.weatherEl,t.weather.label);let c=t.slowZones.current?.limitKmh??(t.brokenRoads.current?tu.maxKmh:null);this.limitBadge.classList.toggle(`hidden`,c===null),c!==null&&(Ku(this.limitBadge,pu(c)),this.limitBadge.classList.toggle(`over`,o>c+5)),this.warnTimer>0&&(this.warnTimer-=e,this.warnTimer<=0&&this.warnEl.classList.remove(`show`)),this.toastTimer>0&&(this.toastTimer-=e,this.toastTimer<=0&&this.toastEl.classList.remove(`show`))}},cd=typeof window<`u`&&(`ontouchstart`in window||navigator.maxTouchPoints>0),ld=cd&&window.matchMedia(`(pointer: coarse)`).matches,ud=class{constructor(e,t,n){q(this,`root`,void 0),q(this,`startId`,ku),this.root=X(`div`,`menu`,``,e);let r=X(`div`,`menu-card`,``,this.root);X(`div`,`menu-title`,`{truck} সবজির ট্রাক`,r),X(`div`,`menu-tag`,`ক্ষেতে সস্তা, বাজারে আগুন — মাঝের রাস্তাটা একবার নিজে চালিয়ে দেখুন।`,r),X(`h3`,``,`কীভাবে খেলবেন`,r),X(`ul`,`howto`,`
      <li>{farm} গ্রামের ক্ষেতের পাশের সবুজ জায়গায় থেমে সবজি কিনুন। নগদ ${gu(J.startingCash)}, ট্রাকে জায়গা ${vu(J.truckCapacityKg)}।</li>
      <li>{truck} রওনা দিন ঢাকার কাওরান বাজারের দিকে।</li>
      <li>{hand} চাঁদার ব্যারিকেড: থেমে চাঁদা দিন — অথবা ${hu(J.ramSpeedKmh)}+ কিমি/ঘণ্টায় ভেঙে বেরিয়ে যান। আস্তে ধাক্কা দিলে জরিমানা!</li>
      <li>{bike} ভাঙলে ধাওয়া শুরু: টানা ${hu(J.chaseRequiredSeconds)} সেকেন্ড ${hu(J.ramSpeedKmh)}+ গতিতে থাকলে পালাতে পারবেন। গতি কমালে মিটার শূন্য!</li>
      <li>{bridge} বৈধ টোল ও সড়ক কর ফাঁকি দেওয়া যাবে না — ${hu(J.tollMaxSpeedKmh)} কিমি/ঘণ্টার বেশি গতিতে স্টপ লাইন পার হলে ট্রাক জব্দ।</li>
      <li>{bus} বাস-ট্রাকের সাথে মুখোমুখি ধাক্কা = খেলা শেষ। ছোট ধাক্কায় মাল নষ্ট।</li>
      <li>{train} রেলক্রসিংয়ে গেট বন্ধ থাকলে থামুন — ট্রেন চলে গেলে গেট খুলবে। আঁকাবাঁকা রাস্তায় নিজেই স্টিয়ারিং ধরুন!</li>
      <li>{horn} হর্ন দিলে সামনের গাড়ি সাইড দেয়। {rain} আবহাওয়া আর দিন-রাত ধীরে ধীরে বদলায় — বৃষ্টিতে ব্রেক কম ধরে।</li>
      <li>{clipboard} শেষে হিসাব দেখুন: ক্ষেতের দাম কীভাবে কাওরান বাজারের দাম হলো।</li>`,r),X(`h3`,``,`কোথা থেকে রওনা দেবেন?`,r);let i=X(`div`,`routes`,``,r),a=[];for(let e of Ou){let t=Ju(`<b>{pin} ${qu(e.nameBn)} → ঢাকা</b><small>${qu(e.pathBn)}</small><small>{hand} পথে ${hu(e.randomBarriers)}টি চাঁদার ব্যারিকেড (জায়গা প্রতিবার বদলায়)</small>`,`route-chip`,()=>{this.startId=e.id,a.forEach(e=>e.classList.toggle(`on`,e===t))},i);t.classList.toggle(`on`,e.id===this.startId),a.push(t)}let o=X(`div`,`menu-actions`,``,r);Ju(`খেলা শুরু {right}`,`btn btn-go big`,()=>n(this.startId),o);let s=Ju(t.muted?`{mute} শব্দ বন্ধ`:`{sound} শব্দ চালু`,`btn btn-ghost`,()=>t.toggleMute(),o);t.onMuteChange(e=>Ku(s,e?`{mute} শব্দ বন্ধ`:`{sound} শব্দ চালু`)),X(`div`,`controls-legend`,cd?`বাঁ দিকে {left} {right} স্টিয়ারিং, ডান দিকে গ্যাস/ব্রেক। ফোন খাড়া (পোর্ট্রেট) করে ধরুন।`:`{keyboard} W/↑ গ্যাস · S/↓ ব্রেক/রিভার্স · A/D বা ←/→ স্টিয়ারিং · Space হ্যান্ডব্রেক · H হর্ন · C ক্যামেরা · M শব্দ · P/Esc বিরতি · Enter টাকা দিন · F3 ডিবাগ`,r),X(`div`,`disclaimer`,`এটি একটি ব্যঙ্গাত্মক খেলা। সব চরিত্র ও প্রতিষ্ঠান কাল্পনিক; কোনো দল বা ব্যক্তিকে নির্দেশ করে না। দাম ও অঙ্কগুলো উদাহরণমাত্র।`,r)}show(e){this.root.classList.toggle(`hidden`,!e)}},dd=class{constructor(e,t){q(this,`root`,void 0),this.root=X(`div`,`modal-overlay pause hidden`,``,e);let n=X(`div`,`bp-buttons`,``,X(`div`,`modal pause-card`,`<div class="pd-title">{pause} বিরতি</div><p>চা খেয়ে আসুন। চাঁদাবাজরা অপেক্ষা করবে।</p>`,this.root));Ju(`চালিয়ে যান {right}`,`btn btn-go`,t.onResume,n),Ju(`আবার শুরু {replay}`,`btn btn-buy`,t.onRestart,n),Ju(`হোম {home}`,`btn btn-ghost`,t.onHome,n)}show(e){this.root.classList.toggle(`hidden`,!e)}};function fd(e){let t=X(`div`,`rotate-hint`,`<div class="rot-icon">{phone}</div><div>ফোনটি খাড়া (পোর্ট্রেট) করে ধরুন — খেলাটি সেভাবেই বানানো</div>`,e);Ju(`তবুও খেলুন`,`btn btn-ghost`,()=>t.classList.add(`dismissed`),t)}var pd=`"Hind Siliguri", "Noto Sans Bengali", sans-serif`;function md(e){let t=/(\d+(?:\.\d+)?)px/.exec(e.font);return t?+t[1]:16}function hd(e){let t=[],n=0;for(let r of e.matchAll(Gu))r.index>n&&t.push({text:e.slice(n,r.index)}),t.push({icon:r[1]}),n=r.index+r[0].length;return n<e.length&&t.push({text:e.slice(n)}),t}function gd(e,t){if(!t.includes(`{`))return e.measureText(t).width;let n=md(e);return hd(t).reduce((t,r)=>t+(r.icon?n*1.2:e.measureText(r.text).width),0)}function _d(e,t,n,r,i=!1){if(!t.includes(`{`)){i&&e.strokeText(t,n,r),e.fillText(t,n,r);return}let a=md(e),o=gd(e,t),s=e.textAlign,c=s===`center`?n-o/2:s===`right`||s===`end`?n-o:n;e.textAlign=`left`;let l=a*1.05,u=e.textBaseline===`middle`?r-l/2:e.textBaseline===`top`?r:r-l*.85;for(let n of hd(t))if(n.icon){let t=Uu(n.icon);t&&e.drawImage(t,c+a*.05,u,l,l),c+=a*1.2}else i&&e.strokeText(n.text,c,r),e.fillText(n.text,c,r),c+=e.measureText(n.text).width;e.textAlign=s}function vd(e,t,n){let r=document.createElement(`canvas`);r.width=e,r.height=t,n(r.getContext(`2d`),e,t);let i=new Ji(r);return i.colorSpace=Je,i.anisotropy=4,i}function yd(e,t={}){let n=t.w??512,r=t.h??256;return vd(n,r,i=>{i.fillStyle=t.bg??`#1d5e2f`,i.fillRect(0,0,n,r),t.border&&(i.strokeStyle=t.border,i.lineWidth=Math.max(6,n*.02),i.strokeRect(i.lineWidth/2+4,i.lineWidth/2+4,n-i.lineWidth-8,r-i.lineWidth-8)),i.fillStyle=t.fg??`#ffffff`,i.textAlign=`center`,i.textBaseline=`middle`;let a=t.sizes??e.map(()=>Math.floor(r/(e.length+.8))),o=a.reduce((e,t)=>e+t*1.15,0),s=(r-o)/2;e.forEach((e,t)=>{let r=a[t];for(i.font=`700 ${r}px ${pd}`;gd(i,e)>n*.9&&r>10;)r-=2,i.font=`700 ${r}px ${pd}`;s+=a[t]*1.15,_d(i,e,n/2,s-a[t]*.55)})})}function bd(e,t,n,r,i,a){e.fillStyle=i;for(let i=0;i<6;i++){let a=i/6*Math.PI*2;e.beginPath(),e.ellipse(t+Math.cos(a)*r*.6,n+Math.sin(a)*r*.6,r*.5,r*.28,a,0,Math.PI*2),e.fill()}e.fillStyle=a,e.beginPath(),e.arc(t,n,r*.3,0,Math.PI*2),e.fill()}function xd(e,t,n,r,i,a){e.fillStyle=i,e.fillRect(0,t,n,r),e.fillStyle=a;let o=r*1.4;for(let i=0;i<n;i+=o)e.beginPath(),e.moveTo(i,t+r),e.lineTo(i+o/2,t),e.lineTo(i+o,t+r),e.fill()}function Sd(e){return e===`side`?vd(1024,256,(e,t,n)=>{let r=[`#0f8b8d`,`#e63946`,`#f4a261`,`#2a9d8f`,`#ffd166`];r.forEach((i,a)=>{e.fillStyle=i,e.fillRect(0,a*n/r.length,t,n/r.length+1)}),xd(e,0,t,22,`#ffd166`,`#e63946`),xd(e,n-22,t,22,`#1d3557`,`#ffd166`);let i=xu(7);for(let t=0;t<16;t++)bd(e,40+t*64,60+t%2*130,18+i()*6,t%2?`#ff6b9a`:`#ffffff`,`#ffd166`);e.fillStyle=`#fff8e7`,e.strokeStyle=`#1d3557`,e.lineWidth=8,e.beginPath(),e.roundRect(260,70,504,116,40),e.fill(),e.stroke(),e.fillStyle=`#c1121f`,e.font=`700 64px ${pd}`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(`মায়ের দোয়া ট্রান্সপোর্ট`,512,132)}):e===`back`?vd(512,512,(e,t,n)=>{e.fillStyle=`#ffd166`,e.fillRect(0,0,t,n),xd(e,0,t,30,`#e63946`,`#2a9d8f`),xd(e,n-30,t,30,`#2a9d8f`,`#e63946`);for(let t=0;t<6;t++)bd(e,45+t*84,70,22,`#e63946`,`#1d3557`);for(let t=0;t<6;t++)bd(e,45+t*84,440,22,`#1d3557`,`#ffffff`);e.textAlign=`center`,e.textBaseline=`middle`,e.fillStyle=`#c1121f`,e.font=`700 92px ${pd}`,e.fillText(`হর্ন দিন`,256,200),e.fillStyle=`#1d3557`,e.font=`700 48px ${pd}`,e.fillText(`সাবধানে চালান`,256,290),e.fillStyle=`#fff`,e.fillRect(96,336,320,54),e.fillStyle=`#111`,e.font=`600 30px ${pd}`,e.fillText(`সবজি মেট্রো-ট ০০-০০০০`,256,364)}):vd(512,128,(e,t,n)=>{let r=e.createLinearGradient(0,0,t,0);r.addColorStop(0,`#e63946`),r.addColorStop(.5,`#ffd166`),r.addColorStop(1,`#e63946`),e.fillStyle=r,e.fillRect(0,0,t,n),xd(e,n-16,t,16,`#1d3557`,`#ffffff`),bd(e,40,54,22,`#ffffff`,`#1d3557`),bd(e,t-40,54,22,`#ffffff`,`#1d3557`),e.fillStyle=`#1d3557`,e.font=`700 64px ${pd}`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(`মায়ের দোয়া`,t/2,56)})}function Cd(){let e=vd(256,256,(e,t,n)=>{e.fillStyle=`#7b9a3c`,e.fillRect(0,0,t,n);let r=xu(42),i=[`#86a544`,`#6f8f35`,`#8faa4a`,`#7a9440`,`#93a656`];for(let a=0;a<260;a++)e.fillStyle=i[a%i.length],e.globalAlpha=.55,e.beginPath(),e.ellipse(r()*t,r()*n,6+r()*22,4+r()*14,r()*Math.PI,0,Math.PI*2),e.fill();e.globalAlpha=1});return e.wrapS=e.wrapT=l,e}function wd(){let e=vd(128,256,(e,t,n)=>{e.fillStyle=`#ffffff`,e.fillRect(0,0,t,n);let r=xu(3);for(let n=0;n<8;n++){for(let t=0;t<4;t++){let i=r();e.fillStyle=i>.8?`#8fb3c9`:i>.3?`#4d6170`:`#6c5a49`,e.fillRect(10+t*30,12+n*31,18,20)}e.fillStyle=`#b9b2a6`,e.fillRect(0,36+n*31,t,3)}});return e.wrapS=e.wrapT=l,e}function Td(e,t,n=8){return vd(256,16,(r,i,a)=>{for(let o=0;o<n;o++)r.fillStyle=o%2?e:t,r.fillRect(o*i/n,0,i/n+1,a)})}function Ed(e){return vd(512,256,(t,n,r)=>{let i=t.createLinearGradient(0,0,n,r);if(i.addColorStop(0,e.bg[0]),i.addColorStop(1,e.bg[1]),t.fillStyle=i,t.fillRect(0,0,n,r),t.save(),t.globalAlpha=.18,t.fillStyle=e.accent,e.pattern===`rays`)for(let e=0;e<16;e++){let n=e/16*Math.PI*2;t.beginPath(),t.moveTo(100,r/2),t.arc(100,r/2,600,n,n+Math.PI/16),t.fill()}else if(e.pattern===`stripes`)for(let e=-r;e<n;e+=36)t.beginPath(),t.moveTo(e,r),t.lineTo(e+r,0),t.lineTo(e+r+16,0),t.lineTo(e+16,r),t.fill();else if(e.pattern===`dots`)for(let e=12;e<r;e+=24)for(let r=12+e/24%2*12;r<n;r+=24)t.beginPath(),t.arc(r,e,5,0,Math.PI*2),t.fill();t.restore(),t.fillStyle=`#ffffff`,t.beginPath(),t.arc(100,r/2-8,78,0,Math.PI*2),t.fill(),t.lineWidth=8,t.strokeStyle=e.accent,t.stroke();let a=Uu(e.icon.replace(/[{}]/g,``));a&&t.drawImage(a,44,r/2-8-56,112,112),t.textAlign=`center`,t.textBaseline=`middle`;let o=n-200;t.fillStyle=e.fg;let s=46;for(t.font=`700 ${s}px ${pd}`;gd(t,e.title)>o&&s>18;)t.font=`700 ${s-=2}px ${pd}`;for(t.shadowColor=`rgba(0,0,0,0.35)`,t.shadowBlur=6,_d(t,e.title,340,80),t.shadowBlur=0,s=30,t.font=`700 ${s}px ${pd}`;gd(t,e.sub)>o-20&&s>14;)t.font=`700 ${s-=2}px ${pd}`;let c=Math.min(o,gd(t,e.sub)+30);t.fillStyle=e.accent,t.beginPath(),t.roundRect(340-c/2,116,c,48,10),t.fill(),t.fillStyle=`#ffffff`,_d(t,e.sub,340,141),e.fine&&(t.fillStyle=e.fg,t.globalAlpha=.85,t.font=`600 18px ${pd}`,_d(t,e.fine,340,196),t.globalAlpha=1),t.strokeStyle=`rgba(0,0,0,0.35)`,t.lineWidth=10,t.strokeRect(0,0,n,r)})}function Dd(e){return vd(256,256,t=>{t.fillStyle=`#ffffff`,t.beginPath(),t.arc(128,128,120,0,Math.PI*2),t.fill(),t.strokeStyle=`#d62828`,t.lineWidth=26,t.beginPath(),t.arc(128,128,104,0,Math.PI*2),t.stroke(),t.fillStyle=`#111`,t.font=`700 110px ${pd}`,t.textAlign=`center`,t.textBaseline=`middle`,t.fillText(pu(e),128,136)})}var Od=1080,kd=1350,Ad=`#1f1610`,jd=`#2a1d13`,Md=`#fbeedd`,Nd=`#c9b8a2`;async function Pd(e){await document.fonts?.ready;let t=document.createElement(`canvas`);t.width=Od,t.height=kd;let n=t.getContext(`2d`);if(!n)return null;let r=(e,t)=>`${e} ${t}px ${pd}`,i=e.outcome===`arrived`,a=e=>Number.isFinite(e)?gu(e,2):`—`;n.fillStyle=Ad,n.fillRect(0,0,Od,kd),n.fillStyle=jd,n.beginPath(),n.roundRect(40,40,1e3,1270,28),n.fill(),n.textBaseline=`alphabetic`,n.textAlign=`left`,n.fillStyle=`#f2a03d`,n.font=r(700,64),_d(n,`{clipboard} যাত্রার হিসাব`,60,140),n.fillStyle=Nd,n.font=r(500,28),_d(n,`সবজির ট্রাক`,60,186);let o=Ld(e);n.fillStyle=i?`#8bd17c`:`#ff6b5a`,n.font=r(700,34),_d(n,`${o.icon} ${o.text}`,60,250),[[`ক্ষেতের গড় দাম`,`${a(e.avgFarmPerKg)}/কেজি`,Md],[`আপনার কেজিপ্রতি খরচ`,i?`${a(e.landedPerKg)}/কেজি`:`—`,Md],[`কেজিপ্রতি চাঁদার ভাগ`,i?`${a(e.extortionPerKg)}/কেজি`:`—`,`#ff6b5a`],[`চাঁদা না থাকলে খরচ হতো`,i?`${a(e.noExtortionPerKg)}/কেজি`:`—`,`#8bd17c`]].forEach(([e,t,i],a)=>{let o=60+a%2*492,s=290+Math.floor(a/2)*150;n.fillStyle=`rgba(255,255,255,0.06)`,n.beginPath(),n.roundRect(o,s,468,130,18),n.fill(),n.fillStyle=Nd,n.font=r(500,26),_d(n,e,o+24,s+44),n.fillStyle=i,n.font=r(700,46),_d(n,t,o+24,s+104)});let s=650;n.fillStyle=Md,n.font=r(700,34),_d(n,`খরচের ভাগ — মোট ${gu(e.totalCash)}`,60,s),s+=24;let c=Object.keys(Fd),l=e.totalCash||1,u=60;for(let t of c){let r=e.breakdown[t]/l*960;r<=0||(n.fillStyle=Fd[t],n.fillRect(u,s,Math.max(0,r-3),44),u+=r)}s+=90,n.font=r(500,28);for(let t of c)n.fillStyle=Fd[t],n.fillRect(60,s-22,24,24),n.fillStyle=Md,n.textAlign=`left`,_d(n,Id[t],100,s),n.textAlign=`right`,_d(n,`${gu(e.breakdown[t])}  (${hu(e.breakdown[t]/l*100,0)}%)`,1020,s),s+=44;if(n.textAlign=`left`,s+=30,e.rows.length){let t=[60,390,660,1020];n.fillStyle=Nd,n.font=r(700,26),[`সবজি`,`ক্ষেতে`,`আপনার খরচ`,`কাওরান বাজার`].forEach((e,r)=>{n.textAlign=r===3?`right`:`left`,_d(n,e,t[r],s)}),s+=46,n.font=r(500,28),n.fillStyle=Md;for(let r of e.rows){if(s>1260)break;let e=Fu[r.veg];[`${e.icon} ${e.nameBn}`,a(r.farmPrice),a(r.landedPerKg),a(r.marketPrice)].forEach((e,r)=>{n.textAlign=r===3?`right`:`left`,_d(n,e,t[r],s)}),s+=42}}return new Promise(e=>t.toBlob(t=>e(t),`image/png`))}var Fd={purchaseDelivered:`#3f8f2a`,legal:`#2f6fb2`,chanda:`#c1121f`,penalty:`#f77f00`,cargoLoss:`#8d6e63`},Id={purchaseDelivered:`সবজি কেনা (পৌঁছানো মাল)`,legal:`বৈধ টোল ও সড়ক কর`,chanda:`চাঁদা`,penalty:`জরিমানা চাঁদা`,cargoLoss:`নষ্ট / হারানো মাল`};function Ld(e){return e.outcome===`crash`?{icon:`{crash}`,text:`সংঘর্ষে যাত্রা শেষ — মাল পৌঁছায়নি`}:e.outcome===`toll`?{icon:`{siren}`,text:`টোল প্লাজায় ট্রাক জব্দ — মাল পৌঁছায়নি`}:e.deliveredKg<=0?{icon:`{box}`,text:`কাওরান বাজারে পৌঁছেছেন — কিন্তু ট্রাক খালি`}:{icon:`{ok}`,text:`কাওরান বাজারে পৌঁছেছেন — ${vu(e.deliveredKg)} মাল ডেলিভারি`}}var Rd=e=>Number.isFinite(e)?gu(e,2):`—`;function zd(e){let t=Object.keys(Fd),n=e.totalCash||1,r=0,i=``;for(let a of t){let t=e.breakdown[a];if(t<=0)continue;let o=t/n*1e3;i+=`<rect x="${r}" y="0" width="${Math.max(o-2,0)}" height="36" fill="${Fd[a]}"><title>${Id[a]}: ${gu(t)}</title></rect>`,r+=o}let a=t.map(t=>{let r=e.breakdown[t];return`<li><span class="sw" style="background:${Fd[t]}"></span><span>${Id[t]}</span>
        <b>${gu(r)}</b><span class="pct">${hu(r/n*100,1)}%</span></li>`}).join(``);return`<svg viewBox="0 0 1000 36" preserveAspectRatio="none" class="rp-bar" role="img" aria-label="খরচের ভাগ">${i}</svg>
    <ul class="rp-legend">${a}<li class="sum"><span></span><span>মোট নগদ খরচ</span><b>${gu(e.totalCash)}</b><span class="pct">১০০%</span></li></ul>`}var Bd=class{constructor(e,t){q(this,`handlers`,void 0),q(this,`overlay`,void 0),q(this,`card`,void 0),q(this,`last`,null),this.handlers=t,this.overlay=X(`div`,`rp-overlay hidden`,``,e),this.card=X(`div`,`report`,``,this.overlay)}hide(){this.overlay.classList.add(`hidden`)}show(e){this.last=e;let t=e.outcome===`arrived`,n=Ld(e),r=e.rows.map(e=>{let t=Fu[e.veg];return`<tr><td>${t.icon} ${t.nameBn}</td><td class="num">${hu(Math.round(e.kgBought))}</td>
          <td class="num">${hu(Math.round(e.kgDelivered))}</td><td class="num">${Rd(e.farmPrice)}</td>
          <td class="num">${Rd(e.landedPerKg)}</td><td class="num">${Rd(e.marketPrice)}</td>
          <td class="num ${e.diff>=0?`pos`:`neg`}">${Rd(e.diff)}</td></tr>`}).join(``),i=e.stats,a=(e,t,n=``)=>`<div class="${n}"><small>${e}</small><b>${t}</b></div>`;this.card.innerHTML=Vu(`
      <h2 class="rp-title">{clipboard} যাত্রার হিসাব</h2>
      <div class="rp-outcome ${t?`ok`:`bad`}">${n.icon} ${qu(n.text)}</div>

      <div class="rp-keys">
        ${a(`ক্ষেতের গড় দাম`,`${Rd(e.avgFarmPerKg)}/কেজি`)}
        ${a(`আপনার কেজিপ্রতি খরচ`,t?`${Rd(e.landedPerKg)}/কেজি`:`—`)}
        ${a(`কেজিপ্রতি চাঁদার ভাগ`,t?`${Rd(e.extortionPerKg)}/কেজি`:`—`,`red`)}
        ${a(`চাঁদা না থাকলে খরচ হতো`,t?`${Rd(e.noExtortionPerKg)}/কেজি`:`—`,`green`)}
      </div>

      <section class="rp-section">
        <h3>খরচের ভাগ</h3>
        ${zd(e)}
      </section>

      <section class="rp-section">
        <h3>সবজিভিত্তিক হিসাব</h3>
        <div class="rp-table-wrap"><table class="rp-table">
          <thead><tr><th>সবজি</th><th>কেনা (কেজি)</th><th>পৌঁছেছে (কেজি)</th><th>ক্ষেতে /কেজি</th><th>আপনার খরচ /কেজি</th><th>কাওরান বাজার /কেজি</th><th>ব্যবধান /কেজি</th></tr></thead>
          <tbody>${r||`<tr><td colspan="7">কিছুই কেনা হয়নি</td></tr>`}</tbody>
        </table></div>
      </section>

      <section class="rp-section">
        <h3>যাত্রার পরিসংখ্যান</h3>
        <div class="rp-stats">
          ${a(`মোট চাঁদা (জরিমানাসহ)`,gu(e.extortionTotal))}
          ${a(`চাঁদা দেওয়া হয়েছে`,`${hu(i.barriersPaid)} বার`)}
          ${a(`ব্যারিকেড ভাঙা`,`${hu(i.barriersBroken)}টি`)}
          ${a(`ধাওয়া: পালানো / ধরা`,`${hu(i.chasesEscaped)} / ${hu(i.chasesCaught)}`)}
          ${a(`সংঘর্ষ`,`${hu(i.collisions)}টি`)}
          ${a(`মহাসড়কে সময়`,bu(i.highwayTime))}
          ${t?a(`বিক্রি (কাওরান বাজার দরে)`,gu(e.revenue)):``}
          ${a(t?`লাভ / ক্ষতি`:`মোট ক্ষতি`,gu(t?e.profit:-e.totalCash),(t?e.profit:-1)>=0?`pos`:`neg`)}
        </div>
      </section>

      <div class="rp-buttons"></div>`);let o=this.card.querySelector(`.rp-buttons`);Ju(`{replay} আবার চালান`,`btn btn-go`,()=>this.handlers.onReplay(),o),Ju(`{home} হোম`,`btn btn-ghost`,()=>this.handlers.onHome(),o),Ju(`{share} শেয়ার করুন`,`btn btn-buy`,()=>void this.share(),o),this.overlay.classList.remove(`hidden`),this.overlay.scrollTop=0}async share(){if(!this.last)return;let e=await Pd(this.last);if(!e)return;let t=new File([e],`sobjir-truck-report.png`,{type:`image/png`}),n=navigator;try{if(n.share&&n.canShare?.({files:[t]})){await n.share({files:[t],title:`সবজির ট্রাক — যাত্রার হিসাব`,text:Ld(this.last).text});return}}catch(e){if(e.name===`AbortError`)return}let r=URL.createObjectURL(e),i=X(`a`);i.href=r,i.download=`sobjir-truck-report.png`,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(r),2e3)}},Vd=class extends Xu{constructor(e){super(e,{className:`toll`,icon:`{govt}`,receiptBn:`সরকারি রশিদ প্রদান করা হলো {check}`,payLabel:e=>`টোল দিন ${e}`,inKindNote:(e,t)=>`নগদ ${e} — বাকিটা মেটাতে ${t} মাল রেখে যেতে হবে।`})}},Hd=class{constructor(e,t){q(this,`input`,void 0),q(this,`root`,void 0),q(this,`enabled`,cd),this.input=t,this.root=X(`div`,`touch hidden`,``,e);let n=X(`div`,`touch-left`,``,this.root),r=X(`div`,`touch-right`,``,this.root);this.pad(X(`div`,`tbtn horn`,`{horn}`,n),`horn`);let i=X(`div`,`steer`,``,n);this.pad(X(`div`,`tbtn steer-btn`,`{left}`,i),`left`),this.pad(X(`div`,`tbtn steer-btn`,`{right}`,i),`right`),this.pad(X(`div`,`tbtn pedal brake`,`<span>ব্রেক</span>`,r),`brake`),this.pad(X(`div`,`tbtn pedal gas`,`<span>গ্যাস</span>`,r),`gas`),cd||window.addEventListener(`touchstart`,()=>this.enable(),{once:!0})}enable(){this.enabled=!0}show(e){if(this.root.classList.toggle(`hidden`,!(e&&this.enabled)),!e)for(let e of Object.keys(this.input.touch))this.input.touch[e]=!1}pad(e,t){let n=new Set,r=()=>{this.input.touch[t]=n.size>0,e.classList.toggle(`down`,n.size>0)};e.addEventListener(`pointerdown`,t=>{t.preventDefault(),n.add(t.pointerId),e.setPointerCapture?.(t.pointerId),r()});let i=e=>{n.delete(e.pointerId),r()};e.addEventListener(`pointerup`,i),e.addEventListener(`pointercancel`,i),e.addEventListener(`lostpointercapture`,i),e.addEventListener(`contextmenu`,e=>e.preventDefault())}},Ud=(e,t,n)=>e<t?t:e>n?n:e,Wd=(e,t,n)=>e+(t-e)*n;function Gd(e,t,n){let r=Ud((n-e)/(t-e),0,1);return r*r*(3-2*r)}function Kd(e,t,n,r){return Wd(e,t,1-Math.exp(-n*r))}var qd=class{constructor(e){q(this,`camera`,void 0),q(this,`mode`,`chase`),q(this,`shakeAmp`,0),q(this,`pos`,new B),q(this,`look`,new B),q(this,`tmp`,new B),q(this,`fwd`,new B),q(this,`smoothHeading`,0),q(this,`smoothLook`,new B),this.camera=e}shake(e){this.shakeAmp=Math.max(this.shakeAmp,e)}toggle(){this.mode=this.mode===`chase`?`cockpit`:`chase`}snap(e){this.smoothHeading=e.heading,this.compute(e),this.camera.position.copy(this.pos),this.smoothLook.copy(this.look),this.camera.lookAt(this.look),this.camera.fov=this.cfg.fovMin,this.camera.updateProjectionMatrix()}get cfg(){return this.camera.aspect<1?{...Zl,...Zl.portrait}:Zl}compute(e){let t=this.smoothHeading,n=this.cfg;if(this.fwd.set(Math.sin(t),0,-Math.cos(t)),this.mode===`chase`)this.pos.set(e.x,e.y,e.z).addScaledVector(this.fwd,-n.distance),this.pos.y+=n.height,this.look.set(e.x,e.y+n.lookHeight,e.z).addScaledVector(this.fwd,n.lookAhead);else{let t=new B(Math.sin(e.heading),0,-Math.cos(e.heading));this.pos.set(e.x,e.y+2.75,e.z).addScaledVector(t,-2.9),this.look.copy(this.pos).addScaledVector(t,30),this.look.y+=-1.2+Math.tan(e.pitch)*30}}update(e,t,n){if(this.smoothHeading=Kd(this.smoothHeading,t.heading,this.mode===`chase`?2.6:30,e),this.compute(t),this.mode===`chase`){let t=Zl.followLambda*Wl.speedScale;this.camera.position.x=Kd(this.camera.position.x,this.pos.x,t,e),this.camera.position.y=Kd(this.camera.position.y,this.pos.y,t*.8,e),this.camera.position.z=Kd(this.camera.position.z,this.pos.z,t*1.6,e),this.smoothLook.x=Kd(this.smoothLook.x,this.look.x,8,e),this.smoothLook.y=Kd(this.smoothLook.y,this.look.y,5,e),this.smoothLook.z=Kd(this.smoothLook.z,this.look.z,12,e)}else this.camera.position.copy(this.pos),this.camera.position.y+=n,this.smoothLook.copy(this.look);if(this.camera.lookAt(this.smoothLook),this.shakeAmp>.001){let t=this.shakeAmp;this.tmp.set((Math.random()-.5)*t,(Math.random()-.5)*t,(Math.random()-.5)*t),this.camera.position.add(this.tmp),this.camera.rotation.z+=(Math.random()-.5)*t*.05,this.shakeAmp*=Math.exp(-5*e)}let r=Math.abs(t.kmh),i=this.cfg,a=i.fovMin+(i.fovMax-i.fovMin)*Ud((r-40)/80,0,1);Math.abs(this.camera.fov-a)>.05&&(this.camera.fov=Kd(this.camera.fov,a,2,e),this.camera.updateProjectionMatrix())}};function Jd(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Vr,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Yd(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Yd(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Yd(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new Er(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var Xd=new un,Zd=new Bt,Qd=new bn,$d=new H,ef=new B,tf=new B;function Z(e){let t=e.map(e=>{let t=e.geo.index?e.geo.toNonIndexed():e.geo.clone();for(let e of Object.keys(t.attributes))e!==`position`&&e!==`normal`&&e!==`color`&&t.deleteAttribute(e);if(Qd.set(...e.r??[0,0,0]),Zd.setFromEuler(Qd),Xd.compose(ef.set(...e.p??[0,0,0]),Zd,tf.set(...e.s??[1,1,1])),t.applyMatrix4(Xd),e.color!==void 0||!t.getAttribute(`color`)){$d.set(e.color??16777215);let n=t.attributes.position.count,r=new Float32Array(n*3);for(let e=0;e<n;e++)r[e*3]=$d.r,r[e*3+1]=$d.g,r[e*3+2]=$d.b;t.setAttribute(`color`,new Er(r,3))}return t.getAttribute(`normal`)||t.computeVertexNormals(),t}),n=Jd(t,!1);if(!n)throw Error(`mergeGeometries failed`);for(let e of t)e.dispose();return n.computeBoundingSphere(),n.computeBoundingBox(),n}var Q=(e,t,n)=>new Qi(e,t,n),$=(e,t,n,r=8)=>new ea(e,t,n,r),nf=(e,t=7,n=5)=>new ua(e,t,n),rf=(e,t,n=6)=>new ta(e,t,n),af=(e,t=0)=>new ca(e,t),of=new Map;function sf(e,t){let n=of.get(e);return n||(n=t(),of.set(e,n)),n}var cf=null;function lf(){return cf??(cf=new xa({vertexColors:!0,flatShading:!0}))}var uf=null;function df(e,t){uf??(uf=new $r({map:ff(),transparent:!0,depthWrite:!1,opacity:.55}));let n=new U(sf(`blob`,()=>new la(1,1).rotateX(-Math.PI/2)),uf);return n.scale.set(e,1,t),n.position.y=.03,n.renderOrder=-1,n}function ff(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,4,32,32,32);return n.addColorStop(0,`rgba(0,0,0,0.9)`),n.addColorStop(1,`rgba(0,0,0,0)`),t.fillStyle=n,t.fillRect(0,0,64,64),new Ji(e)}var pf=[9263675,10249796,8079918,11039056],mf=[15921386,10404838,13224393,14272419,15259824,9083824],hf=[3890575,7032714,3108702,8010555],gf=11775394;function _f(e,t=[0,0,0]){let[n,r,i]=t,a=[],o=e.seated?-.35:0;e.seated?(a.push({geo:Q(.42,.18,.55),color:e.lower,p:[n,r+.55,i-.15]}),a.push({geo:Q(.16,.5,.16),color:e.lower,p:[n-.12,r+.3,i-.4]}),a.push({geo:Q(.16,.5,.16),color:e.lower,p:[n+.12,r+.3,i-.4]})):e.lungi?a.push({geo:$(.22,.27,.85,7),color:e.lower,p:[n,r+.43,i]}):(a.push({geo:Q(.17,.85,.2),color:e.lower,p:[n-.12,r+.43,i]}),a.push({geo:Q(.17,.85,.2),color:e.lower,p:[n+.12,r+.43,i]}));let s=r+o;return a.push({geo:Q(.5,.62,.28),color:e.shirt,p:[n,s+1.16,i]}),a.push({geo:Q(.13,.58,.14),color:e.shirt,p:[n-.33,s+1.15,i]}),a.push({geo:Q(.12,.12,.12),color:e.skin,p:[n-.33,s+.82,i]}),e.noRightArm||(a.push({geo:Q(.13,.58,.14),color:e.shirt,p:[n+.33,s+1.15,i]}),a.push({geo:Q(.12,.12,.12),color:e.skin,p:[n+.33,s+.82,i]})),a.push({geo:Q(.14,.1,.14),color:e.skin,p:[n,s+1.51,i]}),a.push({geo:nf(.14,7,5),color:e.skin,p:[n,s+1.66,i]}),e.cap===void 0?a.push({geo:nf(.145,7,4),color:1907223,p:[n,s+1.7,i+.01],s:[1,.7,1]}):(a.push({geo:$(.15,.15,.08,8),color:e.cap,p:[n,s+1.79,i]}),a.push({geo:Q(.2,.02,.14),color:e.cap,p:[n,s+1.76,i-.17]})),e.armband&&a.push({geo:Q(.15,.09,.16),color:gf,p:[n-.33,s+1.3,i]}),e.gamchha&&a.push({geo:Q(.54,.08,.3),color:12597547,p:[n,s+1.45,i]}),a}function vf(e,t){switch(e){case`worker`:return{skin:wu(t,pf),shirt:wu(t,mf),lower:wu(t,[3816e3,5917242,2964309]),lungi:t()<.3,cap:gf,armband:!0};case`rider`:return{skin:wu(t,pf),shirt:wu(t,mf),lower:3816e3,lungi:!1,cap:gf,armband:!0,seated:!0};case`farmer`:return{skin:wu(t,pf),shirt:wu(t,[15921386,14272419,10404838]),lower:wu(t,hf),lungi:!0,gamchha:!0};case`official`:return{skin:wu(t,pf),shirt:12034682,lower:7233348,lungi:!1,cap:3029546};case`trader`:return{skin:wu(t,pf),shirt:wu(t,mf),lower:wu(t,hf),lungi:t()<.6,cap:t()<.3?15921386:void 0}}}function yf(e,t,n=!1){return sf(`person:${e}:${t}:${n}`,()=>{let r=t*9301+49297;return Z(_f({...vf(e,()=>(r=(r*9301+49297)%233280,r/233280)),noRightArm:n}))})}function bf(e,t){return new U(yf(e,t),lf())}function xf(e,t,n){let r=new U(yf(e,t,!0),lf()),i=new U(sf(`arm:${n}`,()=>{let e=[{geo:Q(.13,.58,.14),color:14272419,p:[0,-.29,0]},{geo:Q(.12,.12,.12),color:pf[0],p:[0,-.62,0]}];return n===`stick`?e.push({geo:$(.025,.03,1.1,5),color:7031338,p:[0,-.62,-.3],r:[Math.PI/2.4,0,0]}):e.push({geo:Q(.2,.26,.04),color:16448250,p:[0,-.7,-.06]}),Z(e)}),lf());return i.position.set(.33,1.43,0),r.add(i),r.userData.arm=i,r}var Sf={bus:{len:11,wid:2.5},truck:{len:8.5,wid:2.5},car:{len:4.4,wid:1.8},cng:{len:2.7,wid:1.4},rickshaw:{len:2.3,wid:1.1},bike:{len:2,wid:.8},pickup:{len:5,wid:2}},Cf=2041648,wf=1776411;function Tf(e,t,n,r){let i=[];for(let a of e)for(let e of t)i.push({geo:$(n,n,r,10),color:wf,p:[a,n,e],r:[0,0,Math.PI/2]});return i}var Ef=[[14039599,16765503,16777215],[3108822,15921906,16747546],[3122010,16777215,15087942],[15921906,8072383,2792847]];function Df(e,t){return sf(`veh:${e}:${t}`,()=>{switch(e){case`bus`:{let[e,n,r]=Ef[t%Ef.length];return Z([{geo:Q(2.5,2.5,11),color:e,p:[0,1.85,0]},{geo:Q(2.54,.75,9.6),color:Cf,p:[0,2.35,.3]},{geo:Q(2.54,.25,10.8),color:n,p:[0,1.65,0]},{geo:Q(2.54,.12,10.8),color:r,p:[0,1.4,0]},{geo:Q(2.3,1,.06),color:Cf,p:[0,2.4,-5.5]},{geo:Q(2.4,.35,.1),color:n,p:[0,3.05,-5.5]},{geo:Q(2.3,.2,9.5),color:9079434,p:[0,3.2,.4]},{geo:Q(.4,.2,.1),color:16774848,p:[-.85,1,-5.52]},{geo:Q(.4,.2,.1),color:16774848,p:[.85,1,-5.52]},...Tf([-1.1,1.1],[-3.6,3.4],.55,.4)])}case`truck`:{let e=[14721838,3108822,14039599][t%3],n=[2314362,4025135,7028015][t%3];return Z([{geo:Q(2.4,1.9,2),color:e,p:[0,2.05,-3.2]},{geo:Q(2.2,.8,.06),color:Cf,p:[0,2.4,-4.21]},{geo:Q(2.5,.35,.2),color:12653087,p:[0,.8,-4.25]},{geo:Q(2.2,.4,8),color:2829099,p:[0,.9,0]},{geo:Q(2.5,2.4,5.8),color:n,p:[0,2.4,1.2]},{geo:Q(2.52,.3,5.8),color:16765286,p:[0,1.25,1.2]},...Tf([-1.05,1.05],[-3,2.4,3.2],.5,.4)])}case`car`:{let e=[15921906,12106946,2829616,10166822,3494e3][t%5];return Z([{geo:Q(1.8,.65,4.4),color:e,p:[0,.75,0]},{geo:Q(1.6,.6,2.2),color:e,p:[0,1.35,.2]},{geo:Q(1.62,.45,2),color:Cf,p:[0,1.38,.2]},{geo:Q(.35,.15,.06),color:16774848,p:[-.6,.85,-2.21]},{geo:Q(.35,.15,.06),color:16774848,p:[.6,.85,-2.21]},...Tf([-.85,.85],[-1.35,1.35],.33,.25)])}case`cng`:return Z([{geo:Q(1.4,.55,2.6),color:3120708,p:[0,.6,0]},{geo:Q(1.38,.95,1.9),color:3120708,p:[0,1.35,.25]},{geo:Q(1.42,.55,1.5),color:2371882,p:[0,1.4,.3]},{geo:Q(1.2,.6,.05),color:Cf,p:[0,1.4,-.72]},{geo:Q(1.5,.08,2.1),color:1997363,p:[0,1.86,.2]},{geo:$(.28,.28,.2,8),color:wf,p:[0,.28,-1.05],r:[0,0,Math.PI/2]},...Tf([-.65,.65],[.85],.28,.2)]);case`rickshaw`:{let e=[15087942,2792847,16758531,8072383][t%4];return Z([{geo:Q(.08,.08,1.9),color:5592405,p:[0,.55,0]},{geo:Q(1,.35,.6),color:2845872,p:[0,.85,.5]},{geo:Q(1,.6,.12),color:16765286,p:[0,1.25,.8]},{geo:$(.6,.6,.8,8).rotateZ(Math.PI/2),color:e,p:[0,1.55,.6],s:[1,.9,.9]},{geo:Q(.25,.08,.3),color:3355443,p:[0,1.05,-.55]},{geo:$(.33,.33,.05,10),color:wf,p:[0,.33,-.85],r:[0,0,Math.PI/2]},...Tf([-.5,.5],[.5],.33,.05),..._f({skin:8079918,shirt:15921386,lower:3890575,lungi:!0,seated:!0},[0,.55,-.35])])}}})}function Of(e){return sf(`bike:${e}`,()=>{let t=[1914199,2829099,6947855][e%3],n={skin:9263675,shirt:[15921386,10404838,14272419][e%3],lower:3816e3,lungi:!1,cap:11775394,armband:!0,seated:!0};return Z([{geo:Q(.3,.45,1.5),color:t,p:[0,.75,0]},{geo:Q(.35,.12,.9),color:1118481,p:[0,1,.2]},{geo:Q(.7,.06,.06),color:8947848,p:[0,1.2,-.65]},{geo:$(.32,.32,.12,10),color:wf,p:[0,.32,-.72],r:[0,0,Math.PI/2]},{geo:$(.32,.32,.12,10),color:wf,p:[0,.32,.72],r:[0,0,Math.PI/2]},..._f(n,[0,.55,.1]),..._f({...n,shirt:13224393},[0,.6,.6]),{geo:$(.025,.03,1.1,5),color:7031338,p:[.45,2.5,.6],r:[.4,0,-.5]}])})}function kf(){return sf(`pickup`,()=>{let e=[{geo:Q(2,1,1.8),color:15658734,p:[0,1.4,-1.4]},{geo:Q(1.9,.5,.06),color:Cf,p:[0,1.6,-2.31]},{geo:Q(2,.7,5),color:14540253,p:[0,.75,0]},{geo:Q(2,.5,3),color:13619151,p:[0,1.3,1]},...Tf([-.95,.95],[-1.6,1.6],.4,.3)];return[15921386,10404838,14272419,13224393].forEach((t,n)=>{e.push(..._f({skin:9263675,shirt:t,lower:3816e3,lungi:!1,cap:11775394,armband:!0},[n%2?.5:-.5,1.05,.2+Math.floor(n/2)*1.1]))}),Z(e)})}function Af(){return sf(`boat`,()=>Z([{geo:Q(1.6,.6,5),color:5978654,p:[0,.3,0]},{geo:$(0,.8,1.8,4).rotateX(-Math.PI/2),color:5978654,p:[0,.35,-3.3],s:[1,.45,1]},{geo:$(0,.8,1.8,4).rotateX(Math.PI/2),color:5978654,p:[0,.35,3.3],s:[1,.45,1]},{geo:$(.9,.9,2.4,8).rotateX(Math.PI/2),color:3811866,p:[0,.75,.6],s:[1,.6,1]},{geo:$(.05,.05,4,5),color:4864554,p:[0,2.4,-1]},{geo:Q(.04,3,2.4),color:14205850,p:[0,2.6,-.4]},{geo:Q(.05,1,1.2),color:10166822,p:[0,3.2,-.2]}]))}var jf=[`পালাবেন? এই রাস্তা আমাদের!`,`বাঁশ ভাঙলেন, এখন দাম দেন — দ্বিগুণ!`,`আমাদের বাইক আপনার ট্রাকের চেয়ে দ্রুত, চাচা।`],Mf=class{constructor(e){q(this,`game`,void 0),q(this,`group`,new Rn),q(this,`state`,`idle`),q(this,`meter`,0),q(this,`units`,[]),q(this,`base`,0),q(this,`locationBn`,``),q(this,`t`,0),q(this,`shoutTimer`,0),this.game=e;let t=lf();for(let e=0;e<Yl.bikesMax;e++){let n=new Rn;n.add(new U(Of(e),t),df(1,2.2)),n.visible=!1,this.group.add(n),this.units.push({mesh:n,pickup:!1,active:!1,s:0,d:0,speed:0,phase:e*1.3,offset:0,len:Sf.bike.len,facing:1})}let n=new Rn;n.add(new U(kf(),t),df(2.4,5.4)),n.visible=!1,this.group.add(n),this.units.push({mesh:n,pickup:!0,active:!1,s:0,d:0,speed:0,phase:0,offset:0,len:Sf.pickup.len,facing:1})}get active(){return this.state===`chasing`}reset(){this.state=`idle`,this.meter=0;for(let e of this.units)e.active=!1,e.mesh.visible=!1}get gap(){let e=1/0;for(let t of this.units)t.active&&t.facing===1&&(e=Math.min(e,this.game.truck.rearS-(t.s+t.len/2)));return e}start(e,t){let n=this.game.truck;this.base=e,this.locationBn=t,this.state=`chasing`,this.meter=0,this.shoutTimer=1.5;let r=Yl.bikesMin+Math.floor(Math.random()*(Yl.bikesMax-Yl.bikesMin+1)),i=Math.random()<Yl.pickupChance,a=0;for(let e of this.units){let t=e.pickup?i:a<r;if(e.pickup||a++,e.active=t,e.mesh.visible=t,!t)continue;let o=this.units.indexOf(e);e.s=n.s-Yl.spawnGap-o*10,e.offset=e.pickup?-1.75:[-3,1,-5,3][o%4],e.d=e.offset,e.speed=Math.max(0,n.speed-3),e.facing=1}this.game.hud.warn(`{bike} পিছনে ধাওয়া! ${pu(J.ramSpeedKmh)}+ গতিতে ${pu(J.chaseRequiredSeconds)} সেকেন্ড টিকে থাকুন`,`danger`,4)}update(e){if(this.t+=e,this.state===`idle`)return;let t=this.game,n=t.truck;if(this.state===`chasing`&&!t.modal){if(n.kmh>=J.ramSpeedKmh?this.meter+=e:J.chaseMeterMode===`reset`&&(this.meter=0),this.meter>=J.chaseRequiredSeconds)this.escape();else{let e=this.gap,r=t.nextBlockingPiece(n.frontS);e<Yl.caughtGap?this.caught(`bike`):r&&r.s-n.frontS<Jl.chaseCutoffBeforeEvent&&this.caught(`event`)}this.shoutTimer-=e,this.shoutTimer<=0&&(this.shoutTimer=4+Math.random()*4,this.gap<120&&t.sound.crowd(.9))}for(let r of this.units){if(!r.active)continue;if(this.state===`chasing`){let t=(n.rearS-(r.s+r.len/2)>Yl.boostGap?Yl.boostKmh:Yl.chaserMaxKmh)/3.6;r.speed=Math.min(t,r.speed+Yl.accel*e),r.d=Kd(r.d,n.d+r.offset+Math.sin(this.t*1.5+r.phase)*1.2,1.5,e),r.s+=r.speed*Wl.speedScale*e;let i=n.rearS-r.len/2-.5;r.s>i&&(r.s=i,r.speed=Math.min(r.speed,Math.max(0,n.speed)))}else this.state===`caught`?r.speed=0:this.state===`leaving`&&(r.facing===1?(r.speed=Kd(r.speed,0,1.5,e),r.s+=r.speed*Wl.speedScale*e,r.speed<2&&(r.facing=-1)):(r.speed=Math.min(20,r.speed+6*e),r.s-=r.speed*Wl.speedScale*e),n.s-r.s>400&&(r.active=!1,r.mesh.visible=!1));let i=t.track;r.mesh.position.set(i.centerX(r.s)+r.d,i.surfaceY(r.s),-r.s),r.mesh.rotation.set(Math.sin(this.t*3+r.phase)*.01,(r.facing===1?0:Math.PI)-i.headingAt(r.s),r.pickup?0:Math.sin(this.t*1.5+r.phase)*.12)}this.state===`leaving`&&!this.units.some(e=>e.active)&&(this.state=`idle`)}escape(){let e=this.game;this.state=`leaving`,e.stats.chasesEscaped++,e.sound.crowd(2),e.hud.warn(`{party} পালিয়ে গেলেন!`,`good`,3.5),e.hud.toast(`ওরা হাল ছেড়ে দিল… পরের মোড়ে আবার দেখা হবে।`)}caught(e){let t=this.game,n=t.truck;this.state=`caught`,t.stats.chasesCaught++,n.stop(),t.cam.shake(.6),t.sound.crowd(2.2),this.units.forEach((e,t)=>{if(!e.active)return;let r=t%2?1:-1;e.s=n.s+ql.length/2-1-Math.floor(t/2)*3.5,e.d=n.d+r*(e.pickup?4.2:3.2),e.speed=0}),t.damageCargo(J.cargoDamagePct.caught,`ধরা পড়ার পর মাল "জব্দ"`,this.locationBn),t.requestPayment({kind:`chanda`,titleBn:`ধরা পড়েছেন! জরিমানা চাঁদা`,messageBn:e===`event`?`সামনে লাইনে আটকে গেলেন — ধরা খেলেন!`:jf[Math.floor(Math.random()*jf.length)],lines:[{category:`CHANDA`,amount:this.base,labelBn:`বকেয়া চাঁদা`},{category:`PENALTY`,amount:Math.round(this.base*(J.caughtMultiplier-1)),labelBn:`ধাওয়া করার "খরচ"`}],locationBn:this.locationBn,onPaid:()=>{this.state=`leaving`;for(let e of this.units)e.facing=-1,e.speed=4}})}},Nf=3,Pf=class{constructor(){q(this,`root`,new Rn),q(this,`body`,new Rn),q(this,`cab`,void 0),q(this,`wheels`,[]),q(this,`frontWheels`,[]),q(this,`crates`,void 0),q(this,`produce`,void 0),q(this,`tassels`,void 0),q(this,`wheelSpin`,0),q(this,`spot`,void 0),q(this,`lampMat`,void 0),q(this,`tailMat`,void 0),q(this,`poolMat`,void 0),q(this,`cabExtras`,void 0),this.root.add(this.body);let e=lf(),t=[{geo:Q(2.2,.4,7.7),color:2763306,p:[0,.95,.1]},{geo:Q(2.5,.2,5.5),color:7031338,p:[0,1.3,1.25]},{geo:Q(.1,1.4,5.5),color:8017200,p:[-1.22,2.1,1.25]},{geo:Q(.1,1.4,5.5),color:8017200,p:[1.22,2.1,1.25]},{geo:Q(2.5,1.4,.1),color:8017200,p:[0,2.1,-1.47]},{geo:Q(2.5,1.4,.1),color:8017200,p:[0,2.1,3.98]},{geo:Q(2.5,.25,.2),color:12653087,p:[0,.85,4.05]},{geo:Q(.5,.6,.05),color:1118481,p:[-.95,.55,3.35]},{geo:Q(.5,.6,.05),color:1118481,p:[.95,.55,3.35]},{geo:Q(.3,.15,.06),color:16726832,p:[-1,1.05,4.16]},{geo:Q(.3,.15,.06),color:16726832,p:[1,1.05,4.16]},{geo:Q(2.55,.32,.25),color:12653087,p:[0,.82,-4]}];this.body.add(new U(Z(t),e));let n=[{geo:Q(2.4,1.85,2),color:16032512,p:[0,2.1,-2.6]},{geo:Q(2.3,.9,.7),color:16032512,p:[0,1.5,-3.8]},{geo:Q(2,.55,.06),color:2829099,p:[0,1.55,-4.16]},{geo:Q(2.15,.8,.06),color:2240831,p:[0,2.45,-3.61]},{geo:Q(.06,.65,1),color:2240831,p:[-1.21,2.45,-2.75]},{geo:Q(.06,.65,1),color:2240831,p:[1.21,2.45,-2.75]},{geo:Q(2.42,.12,2.02),color:2792847,p:[0,3.06,-2.6]},{geo:Q(2.42,.18,2.02),color:15087942,p:[0,1.25,-2.6]},{geo:Q(.35,.2,.06),color:16774848,p:[-.85,1.55,-4.17]},{geo:Q(.35,.2,.06),color:16774848,p:[.85,1.55,-4.17]},{geo:Q(.08,.45,.25),color:1118481,p:[-1.45,2.4,-3.3]},{geo:Q(.08,.45,.25),color:1118481,p:[1.45,2.4,-3.3]},{geo:Q(.3,.05,.05),color:7829367,p:[-1.3,2.6,-3.3]},{geo:Q(.3,.05,.05),color:7829367,p:[1.3,2.6,-3.3]}];this.cab=new U(Z(n),e),this.body.add(this.cab);let r=new xa({map:Sd(`side`)}),i=new la(5.5,1.4),a=new U(i,r);a.position.set(-1.28,2.1,1.25),a.rotation.y=-Math.PI/2;let o=new U(i,r);o.position.set(1.28,2.1,1.25),o.rotation.y=Math.PI/2;let s=new U(new la(2.5,1.4),new xa({map:Sd(`back`)}));s.position.set(0,2.1,4.04);let c=new U(new la(2.4,.6),new xa({map:Sd(`front`)}));c.position.set(0,3.45,-3.62),c.rotation.y=Math.PI;let l=new U(Z([{geo:Q(2.42,.65,.1),color:15087942}]),e);l.position.set(0,3.45,-3.55),this.body.add(a,o,s,l,c),this.cabExtras=[l,c];let u=[],d=[15087942,16765286,2792847,16196997,4415982,16747546];for(let e=0;e<12;e++)u.push({geo:rf(.07,.35,5),color:d[e%d.length],p:[-1.15+e*.21,.5,-4.12],r:[Math.PI,0,0]});u.push({geo:Q(2.5,.03,.03),color:14540253,p:[0,.67,-4.12]}),this.tassels=new U(Z(u),e),this.body.add(this.tassels);let f=Z([{geo:$(.52,.52,.42,12),color:1776411,r:[0,0,Math.PI/2]},{geo:$(.28,.28,.44,8),color:12434877,r:[0,0,Math.PI/2]},{geo:Q(.46,.08,.7),color:2829099}]);for(let[t,n,r]of[[-1.08,-2.75,!0],[1.08,-2.75,!0],[-1.08,2.2,!1],[1.08,2.2,!1],[-1.08,3.1,!1],[1.08,3.1,!1]]){let i=new Rn;i.position.set(t,.52,n);let a=new U(f,e);i.add(a),this.root.add(i),this.wheels.push(a),r&&this.frontWheels.push(a)}let p=Z([{geo:Q(.74,.5,.86),color:10186816}]),m=Z([{geo:Q(.66,.14,.78),color:16777215}]);this.crates=new Si(p,e,54),this.produce=new Si(m,e,54),this.crates.count=this.produce.count=0,this.crates.frustumCulled=this.produce.frustumCulled=!1,this.body.add(this.crates,this.produce),this.root.add(df(3.4,9.5)),this.spot=new io(16773836,0,90,.55,.6,1.1),this.spot.position.set(0,1.6,-4.2),this.spot.target.position.set(0,0,-30),this.root.add(this.spot,this.spot.target),this.lampMat=new $r({color:16774864,transparent:!0,opacity:0}),this.tailMat=new $r({color:16722458,transparent:!0,opacity:0});let h=new Qi(.38,.24,.05);for(let e of[-.85,.85]){let t=new U(h,this.lampMat);t.position.set(e,1.55,-4.2);let n=new U(h,this.tailMat);n.position.set(e*1.18,1.05,4.19),this.body.add(t,n)}let g=(()=>{let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(64,64,4,64,64,64);return n.addColorStop(0,`rgba(255,240,200,0.9)`),n.addColorStop(1,`rgba(255,240,200,0)`),t.fillStyle=n,t.fillRect(0,0,128,128),new Ji(e)})();this.poolMat=new $r({map:g,transparent:!0,opacity:0,depthWrite:!1,blending:2});let _=new U(new la(9,26).rotateX(-Math.PI/2),this.poolMat);_.position.set(0,.32,-17),_.renderOrder=1,this.root.add(_)}setHeadlights(e){this.spot.intensity=e*60,this.lampMat.opacity=Math.min(1,e*1.5),this.tailMat.opacity=Math.min(1,e*1.5),this.poolMat.opacity=e*.35}setCrates(e){let t=new un,n=new H,r=Math.min(e.length,54);for(let i=0;i<r;i++){let r=Math.floor(i/18),a=i%18,o=Math.floor(a/Nf),s=a%Nf,c=i*7919%10/100,l=-.78+s*.78,u=1.65+r*.52,d=3.5-o*.88;t.makeRotationY(c-.05).setPosition(l,u,d),this.crates.setMatrixAt(i,t),t.makeRotationY(c-.05).setPosition(l,u+.3,d),this.produce.setMatrixAt(i,t),this.produce.setColorAt(i,n.set(e[i]))}this.crates.count=this.produce.count=r,this.crates.instanceMatrix.needsUpdate=!0,this.produce.instanceMatrix.needsUpdate=!0,this.produce.instanceColor&&(this.produce.instanceColor.needsUpdate=!0)}setCockpit(e){this.cab.visible=!e;for(let t of this.cabExtras)t.visible=!e;this.tassels.visible=!e}update(e,t,n,r,i,a,o,s,c,l){this.root.position.set(t,n,r),this.root.rotation.set(a,-i,0,`YXZ`),this.wheelSpin-=o*Wl.speedScale/.52*e;for(let e of this.wheels)e.rotation.x=this.wheelSpin;for(let e of this.frontWheels)e.parent.rotation.y=-s*.45;let u=zt.clamp(c*o*.012,-.08,.08);this.body.rotation.z+=(u-this.body.rotation.z)*Math.min(1,e*5),this.body.position.y=l,this.tassels.rotation.x=Math.sin(performance.now()*.012)*.04*Math.min(1,Math.abs(o)/10)}},Ff=ql.length/2,If=class{constructor(e){q(this,`track`,void 0),q(this,`x`,0),q(this,`y`,0),q(this,`z`,0),q(this,`heading`,0),q(this,`pitch`,0),q(this,`speed`,0),q(this,`steer`,0),q(this,`yawRate`,0),q(this,`s`,0),q(this,`d`,0),q(this,`offRoad`,!1),q(this,`scraping`,!1),q(this,`loadFrac`,0),q(this,`minS`,6),q(this,`maxFrontS`,1/0),q(this,`bump`,0),q(this,`rumble`,!1),q(this,`rough`,!1),q(this,`speedCapKmh`,1/0),q(this,`wet`,0),q(this,`bumpPhase`,0),this.track=e}setTrack(e){this.track=e}get kmh(){return this.speed*3.6}get frontS(){return this.s+Ff*Math.cos(this.heading-this.track.headingAt(this.s))}get rearS(){return this.s-Ff}reset(e,t){this.speed=0,this.steer=0,this.yawRate=0,this.heading=this.track.headingAt(e),this.setS(e,t)}setS(e,t){this.s=e,this.d=t,this.z=-e,this.x=this.track.centerX(e)+t,this.y=this.track.surfaceY(e)}stop(){this.speed=0}clampFront(e){let t=this.frontS-e;t>0&&this.setS(this.s-t,this.d)}shiftLateral(e){this.setS(this.s,this.d+e)}update(e,t){let n=ql,r=n.maxSpeedKmh/3.6,i=n.reverseMaxKmh/3.6,{throttle:a,brake:o,handbrake:s}=t;this.steer=t.steer;let c=0;if(a>0){if(this.speed>=-.3){let e=Math.max(0,this.speed)/r;c+=n.engineAccel*a*Math.max(0,1-e**+n.engineCurveExp)*(1-n.loadAccelPenalty*this.loadFrac)}else c+=n.brakeDecel*a}o>0&&(this.speed>.3?c-=n.brakeDecel*(1-.2*this.wet)*o:a===0&&this.speed>-i&&(c-=n.reverseAccel*o)),this.speed+=c*e;let l=n.coastDecel+n.airDrag*this.speed*this.speed;if(this.offRoad&&Math.abs(this.speed)>6&&(l+=n.offroadDecel),s&&(l+=n.handbrakeDecel),!(o>0&&this.speed<=.3&&a===0)||this.speed>0){let t=Math.min(Math.abs(this.speed),l*e);this.speed-=Math.sign(this.speed)*t}this.speed<-i&&(this.speed=-i),this.speed>r&&(this.speed=r);let u=this.speedCapKmh/3.6;this.speed>u&&(this.speed=Math.max(u,this.speed-tu.slowDecel*e));let d=Math.abs(this.speed),f=Wd(n.maxYawLow,n.maxYawHigh,Ud(d*3.6/100,0,1))*Math.min(1,d/4);s&&(f*=1.4),f*=1-.1*this.wet,this.yawRate=Kd(this.yawRate,this.steer*f*Wl.speedScale*(this.speed<0?-1:1),n.yawResponse,e),this.heading+=this.yawRate*e;let p=this.track.headingAt(this.s);this.heading=Ud(this.heading,p-n.maxHeadingOffset,p+n.maxHeadingOffset);let m=this.speed*Wl.speedScale*e;this.x+=Math.sin(this.heading)*m,this.z-=Math.cos(this.heading)*m;let h=-this.z,g=this.x-this.track.centerX(h);h<this.minS&&(h=this.minS,this.speed<0&&(this.speed=0)),h+Ff>this.maxFrontS&&(h=this.maxFrontS-Ff,this.speed>0&&(this.speed=0));let[_,v]=this.track.lateralRange(h);this.scraping=!1,(g<_||g>v)&&(g=g<_?_:v,this.scraping=!0,this.speed*=1-Math.min(1,1.2*e),this.heading=Kd(this.heading,p,4,e)),this.setS(h,g),this.offRoad=Math.abs(g)>this.track.halfWidth(h)+2.2&&!this.track.bridgeAt(h),this.pitch=Math.atan(this.track.slopeAt(h));let y=+!!this.offRoad+(this.rumble?1.2:0)+(this.rough?1.6:0);this.bumpPhase+=e*(8+d*.8),this.bump=y>0?Math.sin(this.bumpPhase)*.04*y*Math.min(1,d/8):0}},Lf=class{constructor(e,t){q(this,`event`,void 0),q(this,`game`,void 0),q(this,`group`,new Rn),q(this,`resolved`,!1),this.event=e,this.game=t}get s(){return this.event.s}get blocking(){return!this.resolved}visibleRange(){return[this.s-750,this.s+200]}get queueGap(){return 60}get allowsQueue(){return!1}get controlsTraffic(){return!1}stopLine(e){return null}get serviceTime(){return 0}served(){}laneAt(e,t){return null}dispose(){this.group.removeFromParent(),this.group.traverse(e=>{let t=e;if(t.isMesh&&t.userData.ownsMaterial){let e=t.material;e.map?.dispose(),e.dispose()}})}at(e,t,n=0){return this.game.track.point(e,t,new B,n)}own(e){return e.userData.ownsMaterial=!0,e}};function Rf(e,t,n){let r=new $r({color:n,transparent:!0,opacity:.35,depthWrite:!1,blending:2,side:2}),i=new la(t,e).rotateX(-Math.PI/2),a=new zi(new sa(i),new Di({color:n,transparent:!0,opacity:.9})),o=new U(i,r);return o.add(a),o.userData.ownsMaterial=!0,o.renderOrder=2,o}function zf(e,t,n=.25,r=.2){e.material.opacity=n+r*(.5+.5*Math.sin(t*4))}function Bf(e,t,n,r){let i=new Rn,a=new U(new ea(.06,.06,r,6),new xa({color:9079434}));a.position.y=r/2;let o=new U(new la(t,n),new xa({map:e,side:2}));return o.position.set(0,r+n/2-.1,.07),o.userData.ownsMaterial=!0,i.add(a,o),i}var Vf=[`আস্তে ধাক্কা দিলে বাঁশ ভাঙে না, পকেট ভাঙে!`,`ব্রেক কি বাড়িতে রেখে এসেছেন? বাঁশের ক্ষতিপূরণসহ দেন।`,`সাহস আছে, গতি নাই। জরিমানা লাগবে।`],Hf=[`রশিদ নাই, তবে হিসাব আছে।`,`এটা চাঁদা না ভাই, "সড়ক উন্নয়ন ফি"।`,`সবাই দেয়, আপনিও দেন। শান্তিতে যান।`,`উপরের লেভেলে ভাগ যায়, বোঝেনই তো।`],Uf=class extends Lf{constructor(e,t){super(e,t),q(this,`state`,`closed`),q(this,`pieces`,[]),q(this,`workers`,[]),q(this,`warned`,!1),q(this,`dodging`,!1),q(this,`t`,0),q(this,`openT`,0),q(this,`base`,void 0);let n=t.track,r=e.s,i=n.halfWidth(r),a=i+3.5;this.base=e.chanda,n.limits.push({from:r-45,to:r+8,range:()=>[-i-1.5,i+1.5]}),n.propBlocks.push({from:r-25,to:r+25,dMin:-a-8,dMax:a+8});let o=lf(),s=sf(`bar:pole`,()=>Z([{geo:$(.07,.07,3.6,6),color:13218410,r:[0,0,Math.PI/2]}])),c=sf(`bar:post`,()=>Z([{geo:$(.08,.09,1.7,6),color:11902810}])),l=e=>sf(`bar:barrel:${e}`,()=>Z([{geo:$(.33,.33,.95,10),color:e},{geo:$(.34,.34,.08,10),color:2236962,p:[0,.2,0]},{geo:$(.34,.34,.08,10),color:2236962,p:[0,-.2,0]}])),u=K.top,d=(e,t,n,i=0)=>{let a=new U(e,o);a.position.copy(this.at(r+i,t,u+n)),this.group.add(a),this.pieces.push({mesh:a,home:a.position.clone(),vel:new B,ang:new B,flying:!1,openDir:t<0?-1:1})},f=Math.ceil(a*2/3.5),p=a*2/f;for(let e=0;e<=f;e++)d(c,-a+e*p,.85);for(let e=0;e<f;e++){let t=-a+(e+.5)*p;d(s,t,.7),d(s,t,1.3)}let m=[2060210,15167260,2060210,3815994];[-i+1.2,-i/2,.6,i/2+.5,i-1].forEach((e,t)=>d(l(m[t%4]),e,.48,-.6));let h=yd([`স্বেচ্ছাসেবী সড়ক উন্নয়ন ফি`,`আদায় কেন্দ্র — বাধ্যতামূলক`],{bg:`#f4f1e8`,fg:`#2b2b2b`,border:`#8a8a8a`,w:1024,h:200,sizes:[70,54]}),g=this.own(new U(new la(9,1.7),new xa({map:h,side:2})));g.position.copy(this.at(r+3,-1,4.3)),this.group.add(g);for(let e of[-5.6,3.6]){let t=new U(sf(`bar:tall`,()=>Z([{geo:$(.07,.09,5.4,6),color:13218410}])),o);t.position.copy(this.at(r+3,e,2.7)),this.group.add(t)}let _=new U(sf(`bar:table`,()=>Z([{geo:Q(1.4,.06,.8),color:9067051,p:[0,.75,0]},{geo:Q(.06,.75,.06),color:7031338,p:[-.6,.37,-.3]},{geo:Q(.06,.75,.06),color:7031338,p:[.6,.37,-.3]},{geo:Q(.06,.75,.06),color:7031338,p:[-.6,.37,.3]},{geo:Q(.06,.75,.06),color:7031338,p:[.6,.37,.3]},{geo:$(.08,.08,.3,6),color:12632256,p:[.3,.93,0]},{geo:Q(.25,.04,.32),color:16448250,p:[-.3,.8,0]},{geo:Q(.5,.06,.5),color:3108786,p:[0,.45,.8]},{geo:Q(.5,.5,.06),color:3108786,p:[0,.7,1.05]}])),o);_.position.copy(this.at(r-4,-(i+4),0)),_.rotation.y=Math.PI/2,this.group.add(_);let v=e.workers;for(let e=0;e<v;e++){let t,n,a=!1;if(e===0)t=r+1.6,n=-i/2,a=!0;else if(e===1)t=r+1.8,n=i/4,a=!0;else{let a=e%2?-1:1;t=r-2-e%3*3,n=a*(i+3.3+e%2*.8)}let o=a?xf(`worker`,e,e===0?`receipt`:`stick`):bf(`worker`,e);this.group.add(o),this.workers.push({mesh:o,s:t,d:n,homeS:t,homeD:n,targetS:t,targetD:n,speed:0,waver:a,phase:e*1.7})}this.placeWorkers()}placeWorkers(){for(let e of this.workers)e.mesh.position.copy(this.at(e.s,e.d,K.top-.02))}get blocking(){return this.state===`closed`||this.state===`paying`}update(e){this.t+=e;let t=this.game,n=t.truck,r=this.s,i=n.frontS,a=t.track.halfWidth(r),o=r-.6;if(this.state===`closed`&&t.state.phase===`HIGHWAY`){if(!this.warned&&i>r-Jl.barrierWarnDistance&&i<r&&(this.warned=!0,t.hud.warn(`{warning} সামনে চাঁদাবাজি!`,`danger`,3.5),t.sound.whistle()),!this.dodging&&n.kmh>30&&i>r-110&&i<r){this.dodging=!0;for(let e of this.workers)Math.abs(e.d)<a+1.5&&(e.targetD=(e.d<n.d?-1:1)*(a+3+Math.random()*2),Math.abs(e.targetD-n.d)<4&&(e.targetD=-e.targetD),e.speed=7)}i>=o&&i<o+15&&!t.modal?n.kmh>=J.ramSpeedKmh?this.breakThrough():this.slowHit():!t.modal&&Math.abs(n.speed)<Jl.stopSpeed&&i>r-40&&i<o+.1&&this.requestPay(!1)}this.animateWorkers(e),this.animatePieces(e)}requestPay(e){let t=this.game;this.state=`paying`,t.truck.stop(),e||this.surround();let n=[{category:`CHANDA`,amount:this.base,labelBn:`চাঁদা`}];e&&n.push({category:`PENALTY`,amount:Math.round(this.base*(J.penaltyMultiplierSlowHit-1)),labelBn:`বাঁশ ভাঙার "জরিমানা"`}),t.requestPayment({kind:`chanda`,titleBn:e?`জরিমানাসহ চাঁদা দিন!`:`চাঁদা দিন: ${gu(this.base)}`,messageBn:e?Vf[Math.floor(Math.random()*Vf.length)]:Hf[Math.floor(Math.random()*Hf.length)],lines:n,locationBn:this.event.nameBn,onPaid:()=>this.open()})}slowHit(){let e=this.game;e.truck.clampFront(this.s-.6),e.truck.stop(),e.cam.shake(.5),e.sound.crash(.35),e.sound.crowd(1.6),e.stats.slowHits++,e.damageCargo(J.cargoDamagePct.slowHit,`বাঁশে ধাক্কা — মাল নষ্ট`,this.event.nameBn);for(let e of this.pieces)e.mesh.rotation.z+=(Math.random()-.5)*.15;this.surround(),this.requestPay(!0)}breakThrough(){let e=this.game,t=e.truck;this.state=`broken`,this.resolved=!0,e.stats.barriersBroken++,e.cam.shake(1.4),e.sound.crash(1),e.sound.crowd(2.5),t.speed*=.97;let n=new B(Math.sin(t.heading),0,-Math.cos(t.heading));for(let e of this.pieces){let r=e.mesh.position.x-t.x,i=Math.abs(r)<3.5;e.flying=!0,e.vel.copy(n).multiplyScalar(t.speed*Wl.speedScale*(i?.75:.25)*(.7+Math.random()*.5)),e.vel.x+=Math.sign(r||1)*(3+Math.random()*7),e.vel.y=(i?5:2)+Math.random()*5,e.ang.set((Math.random()-.5)*12,(Math.random()-.5)*12,(Math.random()-.5)*12)}for(let n of this.workers)Math.abs(n.d-t.d)<3.5&&(n.d=n.targetD=(n.d<t.d?-1:1)*(e.track.halfWidth(this.s)+4));let r=J.cargoDamagePct.ramMin+Math.random()*(J.cargoDamagePct.ramMax-J.cargoDamagePct.ramMin);e.damageCargo(r,`ব্যারিকেড ভাঙতে গিয়ে মাল পড়ে গেছে`,this.event.nameBn),e.hud.warn(`{crash} ব্যারিকেড ভেঙে গেল! এখন পালান!`,`danger`,2.5),e.startChase(this.base,this.event.nameBn)}surround(){let e=this.game.truck;this.workers.forEach((t,n)=>{let r=n%2?-1:1;t.targetS=e.s-3.5+(n>>1)*1.6,t.targetD=e.d+r*(2.2+n%3*.4),t.speed=3.5})}open(){this.state=`open`,this.resolved=!0,this.openT=0,this.game.stats.barriersPaid++,this.workers.forEach(e=>{e.targetS=e.homeS,e.targetD=Math.sign(e.homeD||1)*(this.game.track.halfWidth(this.s)+3.5+Math.random()*2),e.speed=3})}animateWorkers(e){for(let t of this.workers){let n=t.targetS-t.s,r=t.targetD-t.d,i=Math.hypot(n,r),a=i>.05&&t.speed>0;if(a){let a=Math.min(i,t.speed*e);t.s+=n/i*a,t.d+=r/i*a,t.mesh.rotation.y=Math.atan2(-r,n)}else{let e=this.game.truck;t.mesh.rotation.y=Math.atan2(-(e.d-t.d),e.s-t.s)}if(t.mesh.position.copy(this.at(t.s,t.d,K.top-.02)),t.mesh.position.y+=a?Math.abs(Math.sin(this.t*14+t.phase))*.12:0,t.waver){let e=t.mesh.userData.arm,n=this.state!==`broken`;e.rotation.x=n?2.3+Math.sin(this.t*7+t.phase)*.6:2.8+Math.sin(this.t*12)*.3}}}animatePieces(e){if(this.state===`open`){this.openT=Math.min(1,this.openT+e*.8);let t=this.openT*this.openT*(3-2*this.openT),n=this.game.track.halfWidth(this.s);for(let e of this.pieces)Math.abs(e.home.x)<n+.5&&(e.mesh.position.x=e.home.x+e.openDir*t*(n+2.5-Math.abs(e.home.x)*.3));return}if(this.state!==`broken`)return;let t=this.game.track.elevation(this.s)+K.top+.08;for(let n of this.pieces)n.flying&&(n.vel.y-=20*e,n.mesh.position.addScaledVector(n.vel,e),n.mesh.rotation.x+=n.ang.x*e,n.mesh.rotation.y+=n.ang.y*e,n.mesh.rotation.z+=n.ang.z*e,n.mesh.position.y<t&&(n.mesh.position.y=t,n.vel.y*=-.3,n.vel.x*=.6,n.vel.z*=.6,n.ang.multiplyScalar(.5),Math.abs(n.vel.y)<.6&&n.vel.lengthSq()<.5&&(n.flying=!1)))}};function Wf(){let e=vd(256,256,(e,t,n)=>{e.fillStyle=`#ffffff`,e.fillRect(0,0,t,n),e.strokeStyle=`rgba(0,0,0,0.10)`,e.lineWidth=3;for(let r=0;r<40;r++){let i=r*97%t,a=r*61%n;e.beginPath(),e.moveTo(i,a),e.quadraticCurveTo(i+14,a-5,i+28,a),e.stroke()}});return e.wrapS=e.wrapT=l,e.repeat.set(30,30),e}var Gf=class extends Lf{constructor(e,t){super(e,t),q(this,`span`,void 0),q(this,`water`,void 0),q(this,`waterTex`,void 0),q(this,`boats`,[]),q(this,`boatMesh`,void 0),q(this,`t`,0);let n=t.track;this.span=n.bridges.find(t=>t.start===e.s+e.bridge.offset);let{start:r,end:i,style:a,nameBn:o}=this.span,s=i-r,c=n.halfWidth(r),l=this.span.deck+K.top,u=c+1,d=lf(),f=a===`padma`;this.waterTex=Wf();let p=s+260;this.water=this.own(new U(new la(1800,p).rotateX(-Math.PI/2),new xa({color:{padma:9075290,jamuna:7309958,lalon:8225894}[a],map:this.waterTex}))),this.water.position.set(0,.35,-(r+s/2)),this.group.add(this.water);let m=[];for(let e=0;e<7;e++){let t=(e%2?1:-1)*(120+e*137%500),n=-(r+40+e*89%Math.max(60,s-80));m.push({geo:$(1,1,.3,12),color:14206608,p:[t,.4,n],s:[30+e%3*20,1,12+e%2*10]})}this.group.add(new U(Z(m),d));let h=[],g=l-1.9;if(!f)for(let e=r+25;e<i-10;e+=50){for(let t of[-c*.55,c*.55])h.push({geo:$(1,1.2,g+2,10),color:12170150,p:[t,(g-2)/2,-e]});h.push({geo:Q(u*2-1,1.2,2.2),color:11183255,p:[0,g-.5,-e]})}for(let e of[-1,1]){h.push({geo:Q(.4,.5,s),color:14209732,p:[e*(u-.2),l+.25,-(r+s/2)]}),h.push({geo:Q(.1,.1,s),color:8227478,p:[e*(u-.2),l+1.15,-(r+s/2)]}),h.push({geo:Q(.1,.1,s),color:8227478,p:[e*(u-.2),l+.8,-(r+s/2)]});for(let t=r;t<=i;t+=3)h.push({geo:Q(.1,.7,.1),color:8227478,p:[e*(u-.2),l+.85,-t]})}for(let e=r+10,t=0;e<i;e+=f?50:40,t++)for(let n of f?[-1,1]:[t%2?1:-1])h.push({geo:$(.09,.12,8,6),color:10134443,p:[n*(u-.2),l+4,-e]}),h.push({geo:Q(1.6,.1,.12),color:10134443,p:[n*(u-.9),l+8,-e]}),h.push({geo:Q(.5,.15,.3),color:16774080,p:[n*(u-1.6),l+7.9,-e]});if(f){let e=g,t=e-10,n=c-.4,a=12.5,o=9279132,l=7568514,u=Math.hypot(a,10),d=Math.atan2(a,10);for(let c of[-1,1]){let f=c*n;h.push({geo:Q(.9,.9,s),color:o,p:[f,e-.45,-(r+s/2)]}),h.push({geo:Q(.9,1.1,s),color:o,p:[f,t+.55,-(r+s/2)]});let p=0;for(let n=r;n+a<=i+.01;n+=a,p++)h.push({geo:Q(.55,u,.55),color:o,p:[f,(e+t)/2,-(n+a/2)],r:[p%2?d:-d,0,0]}),h.push({geo:Q(.45,10,.45),color:l,p:[f,(e+t)/2,-n]})}for(let o=r;o<=i;o+=a)h.push({geo:Q(n*2,.5,.5),color:l,p:[0,e-.6,-o]}),h.push({geo:Q(n*2,.6,.6),color:l,p:[0,t+.3,-o]});h.push({geo:Q(n*2-.6,.5,s),color:11117722,p:[0,t+.75,-(r+s/2)]});for(let e of[-2.3,-.8,.8,2.3])h.push({geo:Q(.12,.15,s),color:6118749,p:[e,t+1.08,-(r+s/2)]});for(let e=r+75;e<i-30;e+=150){let r=t+2;h.push({geo:Q(n*2+4,2,6),color:11841184,p:[0,t-1,-e]});for(let i of[-n*.45,n*.45])h.push({geo:Q(3.4,r,3.4),color:12762286,p:[i,(t-2)/2-1,-e]})}}let _=new U(Z(h),d);_.frustumCulled=!1,this.group.add(_);let v=yd([`${o}-এ স্বাগতম`],{bg:`#1f7a3d`,fg:`#fff`,w:1024,h:180,sizes:[90]});if(f){let e=new U(Z([{geo:Q(10,4,1.2),color:15262938,p:[0,2.6,0]},{geo:Q(10.6,.6,1.6),color:9279132,p:[0,.3,0]}]),d);e.position.copy(this.at(r-this.span.ramp-30,-(c+9),0)),e.rotation.y=.35;let t=this.own(new U(new la(9.2,1.6),new xa({map:v})));t.position.set(0,3.1,.62),e.add(t),this.group.add(e)}else{let e=new U(Z([{geo:Q(.6,10,.6),color:15262938,p:[-u-.5,5,0]},{geo:Q(.6,10,.6),color:15262938,p:[u+.5,5,0]},{geo:Q(u*2+1.6,.5,.6),color:15262938,p:[0,10.2,0]}]),d);e.position.copy(this.at(r-4,0,K.top)),this.group.add(e);let t=this.own(new U(new la(9,1.6),new xa({map:v})));t.position.copy(this.at(r-4.35,0,K.top+9.2)),this.group.add(t)}this.boatMesh=new Si(Af(),d,10),this.boatMesh.frustumCulled=!1;for(let e=0;e<10;e++){let t=e%2?1:-1;this.boats.push({x:(e-5)*80+20,z:-(r-70+e*113%(s+140)),speed:(2+e%3)*t,heading:t>0?-Math.PI/2:Math.PI/2})}this.group.add(this.boatMesh),this.updateBoats(0)}get blocking(){return!1}visibleRange(){return[this.span.start-900,this.span.end+300]}updateBoats(e){let t=new un,n=new Bt,r=new bn,i=new B,a=new B(1,1,1);this.boats.forEach((o,s)=>{o.x+=o.speed*e,o.x>700&&(o.x=-700),o.x<-700&&(o.x=700),Math.abs(o.x)<14&&(o.x+=Math.sign(o.speed)*28),r.set(Math.sin(this.t*1.3+s)*.04,o.heading,Math.sin(this.t+s)*.05),n.setFromEuler(r),t.compose(i.set(o.x,.35+Math.sin(this.t*1.7+s)*.08,o.z),n,a),this.boatMesh.setMatrixAt(s,t)}),this.boatMesh.instanceMatrix.needsUpdate=!0}update(e){this.t+=e,this.waterTex.offset.x=this.t*.01,this.waterTex.offset.y=Math.sin(this.t*.3)*.01,this.updateBoats(e);let t=this.game.truck.s,{start:n,end:r}=this.span,i=t<n?n-t:t>r?t-r:0;this.game.wind=Math.max(this.game.wind,1-i/250)}},Kf=class{constructor(e){q(this,`game`,void 0),q(this,`group`,new Rn),q(this,`stretches`,[]),q(this,`inside`,null),this.game=e}build(e){for(let e of this.stretches)e.group.traverse(e=>{let t=e;t.isMesh&&t.userData.ownsMaterial&&(t.material.map?.dispose(),t.material.dispose())}),this.group.remove(e.group);this.stretches=[],this.inside=null;let t=this.game.track;for(let[n,r]of e){let e=new Rn,i=t.halfWidth(n),a=Bf(yd([`{warning} সামনে রাস্তা ভাঙা`,`গর্ত সাবধান`],{bg:`#ffd23f`,fg:`#1d1d1d`,border:`#c1121f`,sizes:[56,44]}),2.8,1.4,2.2);a.position.copy(t.point(n-70,-(i+3.2),new B,K.top)),a.rotation.y=.3;let o=Bf(Dd(tu.maxKmh),1.2,1.2,2.2);o.position.copy(t.point(n-45,-(i+3),new B,K.top)),o.rotation.y=.3,e.add(a,o),this.group.add(e),this.stretches.push({from:n,to:r,group:e})}}get current(){return this.inside!==null}update(){let e=this.game,t=e.truck,n=null;for(let e of this.stretches)e.group.visible=t.s>e.from-650&&t.s<e.from,t.frontS>=e.from&&t.frontS<=e.to&&(n=e);t.speedCapKmh=n?tu.maxKmh:1/0,t.rough=!!n,n&&n!==this.inside&&e.state.phase===`HIGHWAY`&&e.hud.warn(`{warning} ভাঙা রাস্তা — ${pu(tu.maxKmh)} কিমি/ঘণ্টার বেশি উঠবে না`,`info`,2.5),this.inside=n}};function qf(e){return sf(`prop:${e}`,()=>{switch(e){case`banana`:{let e=[{geo:$(.14,.2,2.8,6),color:8359738,p:[0,1.4,0]}];for(let t=0;t<6;t++){let n=t/6*Math.PI*2;e.push({geo:Q(.55,.04,2),color:t%2?6268466:5017386,p:[Math.sin(n)*.8,3,Math.cos(n)*.8],r:[.5,n,0]})}return Z(e)}case`roundTree`:return Z([{geo:$(.25,.38,3.2,6),color:5980199,p:[0,1.6,0]},{geo:af(2.6),color:4157226,p:[0,4.8,0]},{geo:af(1.8),color:5210418,p:[1.3,4.1,.6]},{geo:af(1.6),color:3563562,p:[-1.2,4.3,-.5]}]);case`palm`:{let e=[{geo:$(.15,.24,8,6),color:8020552,p:[0,4,0],r:[.06,0,.04]}];for(let t=0;t<8;t++){let n=t/8*Math.PI*2;e.push({geo:Q(.45,.05,3.2),color:t%2?5017386:6134837,p:[Math.sin(n)*1.4+.3,7.6,Math.cos(n)*1.4],r:[.55,n,0]})}return e.push({geo:af(.25),color:7035434,p:[.3,7.8,.2]}),Z(e)}case`bamboo`:{let e=[];for(let t=0;t<9;t++){let n=t*2.4,r=7+t%4*1.5;e.push({geo:$(.07,.09,r,5),color:t%2?10203210:8822844,p:[Math.cos(n)*.6,r/2,Math.sin(n)*.6],r:[Math.sin(n)*.15,0,Math.cos(n)*.15]})}return e.push({geo:rf(2.4,4.5,7),color:7248437,p:[0,8.5,0]}),Z(e)}case`hut`:return Z([{geo:Q(4,2.3,3),color:11108954,p:[0,1.15,0]},{geo:Q(.9,1.7,.06),color:3877402,p:[.6,.85,-1.52]},{geo:Q(4.6,.08,2),color:9214371,p:[0,2.85,-.75],r:[.55,0,0]},{geo:Q(4.6,.08,2),color:8358546,p:[0,2.85,.75],r:[-.55,0,0]}]);case`teaStall`:return Z([{geo:Q(3,2.2,2.4),color:9071173,p:[0,1.1,0]},{geo:Q(2.6,1,.05),color:2825748,p:[0,1.5,-1.21]},{geo:Q(3.4,.06,1.6),color:2792847,p:[0,2.35,-1.7],r:[-.25,0,0]},{geo:Q(2.2,.12,.5),color:7031338,p:[0,.5,-2.4]},{geo:Q(.08,.5,.08),color:7031338,p:[-1,.25,-2.4]},{geo:Q(.08,.5,.08),color:7031338,p:[1,.25,-2.4]},{geo:$(.18,.22,.3,7),color:10132122,p:[.6,1.25,-1]},{geo:Q(1.6,.4,.06),color:16765286,p:[0,2,-1.23]}]);case`shop`:return Z([{geo:Q(4,3,4),color:16777215,p:[0,1.5,0]},{geo:Q(3.2,1.9,.05),color:3811870,p:[0,1.05,-2.01]},{geo:Q(4.4,.06,1.6),color:14275269,p:[0,2.6,-2.6],r:[-.3,0,0]},{geo:Q(3.6,.5,.06),color:15087942,p:[0,2.85,-2.03]},{geo:Q(4.2,.12,4.2),color:10132122,p:[0,3.05,0]}]);case`pole`:return Z([{geo:$(.1,.15,8.5,5),color:11117980,p:[0,4.25,0]},{geo:Q(1.8,.12,.12),color:8025452,p:[0,7.8,0]},{geo:Q(.12,.2,.12),color:15263976,p:[-.8,7.95,0]},{geo:Q(.12,.2,.12),color:15263976,p:[.8,7.95,0]}]);case`haystack`:return Z([{geo:$(1.3,1.5,1.6,8),color:14070612,p:[0,.8,0]},{geo:rf(1.45,2,8),color:13214787,p:[0,2.6,0]},{geo:$(.06,.06,1.2,4),color:5980199,p:[0,3.9,0]}]);case`paddy`:return Z([{geo:Q(1,.35,1),color:16777215,p:[0,.12,0]}]);case`pond`:return Z([{geo:$(1,1,.1,14),color:5209999,p:[0,.06,0]}]);case`building`:return new Qi(1,1,1).translate(0,.5,0);case`pavement`:return Z([{geo:Q(1,.3,1),color:16777215,p:[0,.1,0]}]);case`shrub`:return Z([{geo:af(.8),color:5210418,p:[0,.5,0],s:[1.3,.8,1.1]}]);case`billboardFrame`:return Z([{geo:Q(.2,6,.2),color:5592405,p:[-2.6,3,.1]},{geo:Q(.2,6,.2),color:5592405,p:[2.6,3,.1]},{geo:Q(6.4,3.4,.15),color:3355443,p:[0,4.6,.12]}]);case`crate`:return Z([{geo:Q(.7,.45,.5),color:9069112,p:[0,.225,0]},{geo:Q(.64,.08,.44),color:16777215,p:[0,.47,0]}])}})}var Jf=class extends Lf{constructor(e,t){super(e,t),q(this,`zone`,void 0),q(this,`traders`,[]),q(this,`t`,0),q(this,`arrived`,!1);let n=t.track,r=e.s,i=n.halfWidth(r),a=lf();n.propBlocks.push({from:r+15,to:r+120,dMin:-200,dMax:200}),n.propBlocks.push({from:r-70,to:r+15,dMin:-(i+12),dMax:i+12});let o=new U(Z([{geo:Q(1,11,1),color:15087942,p:[-i-2.5,5.5,0]},{geo:Q(1,11,1),color:15087942,p:[i+2.5,5.5,0]},{geo:Q(i*2+6,.6,1),color:16765286,p:[0,11.2,0]}]),a);o.position.copy(this.at(r-45,0,K.top)),this.group.add(o);let s=this.own(new U(new la(12,2.4),new xa({map:yd([`কাওরান বাজার`,`পাইকারি কাঁচাবাজার · ঢাকা`],{bg:`#e63946`,fg:`#fff8e7`,border:`#ffd166`,w:1024,h:220,sizes:[96,50]})})));s.position.copy(this.at(r-45.55,0,K.top+9.8)),this.group.add(s);let c=new U(Z([{geo:Q(60,9,30),color:14208959,p:[0,4.5,-15]},{geo:Q(62,.6,32),color:9214371,p:[0,9.3,-15]},{geo:Q(20,6,.2),color:3811870,p:[0,3,.05]}]),a);c.position.copy(this.at(r+34,0,K.top)),this.group.add(c);let l=new Si(qf(`crate`),a,160),u=new un,d=new H,f=0;for(let e=0;e<10;e++){let t=e%2?1:-1,n=r-40+e*7,a=t*(i+4+e%3*1.5),o=Iu[e%Iu.length];for(let e=0;e<16&&f<160;e++){let t=Math.floor(e/6),r=this.at(n+e%3*.75,a+Math.floor(e/3)%2*.55,K.top+t*.47);u.makeRotationY(e*.37%.3).setPosition(r),l.setMatrixAt(f,u),l.setColorAt(f++,d.set(o.color).lerp(new H(16777215),.3))}}l.count=f,this.group.add(l);for(let e=0;e<3;e++){let t=new U(Df(`truck`,e),a);t.position.copy(this.at(r-30+e*14,i+7.5,K.top)),t.rotation.y=.15,this.group.add(t)}for(let e=0;e<4;e++){let t=new U(Df(`rickshaw`,e),a);t.position.copy(this.at(r-60+e*3,-i-3.2,K.top)),t.rotation.y=1.2,this.group.add(t)}for(let e=0;e<22;e++){let t=e%2?1:-1,n=bf(`trader`,e);n.position.copy(this.at(r-50+e*4.2,t*(i+2+e%4*1.4),K.top)),n.rotation.y=t>0?Math.PI/2:-Math.PI/2,n.userData.phase=e*.7,this.traders.push(n),this.group.add(n)}this.zone=Rf(24,i,4769791),this.zone.position.copy(this.at(r,-i/2,K.top+.04)),this.group.add(this.zone);let p=this.own(new U(new la(5,1.4).rotateX(-Math.PI/2),new $r({map:yd([`আনলোড এখানে`],{bg:`#00000000`,fg:`#ffffff`,w:512,h:140,sizes:[96]}),transparent:!0,depthWrite:!1})));p.position.copy(this.at(r-8,-i/2,K.top+.05)),this.group.add(p)}get blocking(){return!this.arrived}visibleRange(){return[this.s-800,this.s+200]}update(e){this.t+=e,zf(this.zone,this.t);for(let e of this.traders)e.position.y=this.game.track.elevation(this.s)+K.top+Math.max(0,Math.sin(this.t*3+e.userData.phase))*.06;let t=this.game;!this.arrived&&t.state.phase===`HIGHWAY`&&Math.abs(t.truck.s-this.s)<12&&(this.arrived=!0,this.resolved=!0,t.arrive())}},Yf={rickshawA:260,rickshawB:260,van:220,hawkerA:160,hawkerB:160,person:260},Xf=[14039599,4165418,10251066,8207512,15317321,9159498,16052710];function Zf(){return sf(`clutter:van`,()=>{let e=[{geo:Q(1.3,.1,1.9),color:9069112,p:[0,.72,.35]},{geo:Q(.06,.6,.06),color:4473924,p:[0,.6,-.75]},{geo:Q(.6,.05,.05),color:4473924,p:[0,1.05,-.95]},{geo:$(.32,.32,.08,10),color:1776411,p:[0,.32,-1],r:[0,0,Math.PI/2]},{geo:$(.32,.32,.08,10),color:1776411,p:[-.62,.32,.7],r:[0,0,Math.PI/2]},{geo:$(.32,.32,.08,10),color:1776411,p:[.62,.32,.7],r:[0,0,Math.PI/2]}];for(let t=0;t<6;t++){let n=-.38+t%3*.38,r=-.15+Math.floor(t/3)*.8;e.push({geo:$(.2,.16,.22,7),color:11570519,p:[n,.88,r]}),e.push({geo:nf(.19,6,4),color:Xf[t%Xf.length],p:[n,1,r],s:[1,.6,1]})}return e.push(..._f({skin:9263675,shirt:14272419,lower:3890575,lungi:!1,seated:!0,gamchha:!0},[0,.45,-.55])),Z(e)})}function Qf(e){return sf(`clutter:hawker:${e}`,()=>{let t=e?3108784:11880493,n=e?1776411:2781002,r=[{geo:Q(2.4,.04,1.8),color:t,p:[0,.02,0]},{geo:$(.03,.03,2.3,5),color:5592405,p:[.9,1.15,.6]},{geo:rf(1.5,.6,9),color:n,p:[.9,2.5,.6]}];for(let t=0;t<5;t++)r.push({geo:rf(.32,.36,7),color:Xf[(t+e*2)%Xf.length],p:[-.85+t*.42,.2,-.45]});return r.push({geo:$(.3,.25,.25,8),color:11570519,p:[-.6,.14,.35]}),r.push(..._f({skin:10249796,shirt:e?15921386:10404838,lower:7032714,lungi:!1,seated:!0},[.2,-.2,.55])),Z(r)})}function $f(e){switch(e){case`rickshawA`:return Df(`rickshaw`,0);case`rickshawB`:return Df(`rickshaw`,1);case`van`:return Zf();case`hawkerA`:return Qf(0);case`hawkerB`:return Qf(1);case`person`:return yf(`trader`,41)}}var ep=class{constructor(e){q(this,`track`,void 0),q(this,`group`,new Rn),q(this,`meshes`,new Map),q(this,`m`,new un),q(this,`q`,new Bt),q(this,`e`,new bn),q(this,`p`,new B),q(this,`one`,new B(1,1,1)),this.track=e;let t=lf();for(let e of Object.keys(Yf)){let n=new Si($f(e),t,Yf[e]);n.count=0,n.visible=!1,n.frustumCulled=!1,this.meshes.set(e,n),this.group.add(n)}}setTrack(e){this.track=e;for(let e of this.meshes.values())e.count=0,e.visible=!1}rebuild(e,t){let n=this.track,r=new Map,i=(e,t,i,a)=>{let o=r.get(e)??0;o>=Yf[e]||!n.isWide(t)||n.isBlocked(t,i)||(this.e.set(0,a,0),this.q.setFromEuler(this.e),this.m.compose(this.p.set(n.centerX(t)+i,n.elevation(t)+K.top,-t),this.q,this.one),this.meshes.get(e).setMatrixAt(o,this.m),r.set(e,o+1))},a=K.chunkLength,o=iu.laneWidth,s=iu.openLanes*o;for(let r=e;r<=t;r++){let e=r*a;if(!n.isWide(e)&&!n.isWide(e+a))continue;let t=xu(Su(r,4242));for(let n of[-1,1]){let r=n<0?0:Math.PI;for(let o=e+t()*3;o<e+a;o+=Cu(t,2.6,4.2)){let e=t();i(e<.38?`rickshawA`:e<.72?`rickshawB`:`van`,o,n*(s+2.1+t()*.6),r+Cu(t,-.25,.25))}for(let c=e+t()*4;c<e+a;c+=Cu(t,3,5.5)){let e=t(),a=n*(s+o+1.75+Cu(t,-.6,.6));e<.45?i(`van`,c,a,r+Cu(t,-.5,.5)):e<.75?i(wu(t,[`rickshawA`,`rickshawB`]),c,a,r+Cu(t,-1.2,1.2)):i(`person`,c,a,t()*6.28)}for(let r=e+t()*3;r<e+a;r+=Cu(t,2.6,3.6)){let e=n*(s+2*o+1.4+t()*3.6);i(t()<.5?`hawkerA`:`hawkerB`,r,e,(n<0?-Math.PI/2:Math.PI/2)+Cu(t,-.3,.3)),t()<.45&&i(`person`,r+Cu(t,-1,1),e-n*1.5,t()*6.28)}}}for(let[e,t]of this.meshes)t.count=r.get(e)??0,t.visible=t.count>0,t.instanceMatrix.needsUpdate=!0}},tp=[`car`,`cng`,`rickshaw`,`bus`,`car`,`cng`,`rickshaw`,`truck`,`car`,`cng`],np={rickshaw:3.5,cng:8,car:10,bus:9,truck:8},rp=160;function ip(e){return sf(`junction:pole:${e}`,()=>{let t=[{geo:$(.12,.14,6.4,6),color:5922659,p:[0,3.2,0]}];return e&&t.push({geo:Q(Math.abs(e),.16,.16),color:5922659,p:[e/2,6.2,0]}),Z(t)})}function ap(){return sf(`junction:head`,()=>Z([{geo:Q(.46,1.3,.34),color:1908513,p:[0,0,0]},{geo:Q(.56,1.42,.04),color:2829615,p:[0,0,-.18]}]))}var op=class extends Lf{constructor(e,t){super(e,t),q(this,`light`,void 0),q(this,`timer`,void 0),q(this,`lamps`,void 0),q(this,`cars`,[]),q(this,`spawnTimer`,0),q(this,`prevFront`,0),q(this,`ranRed`,!1),q(this,`warnedRed`,!1),q(this,`t`,0),q(this,`police`,void 0),q(this,`hornCooldown`,0);let n=t.track,r=e.s,i=n.halfWidth(r),a=au.crossHalfWidth,o=lf(),s=au.greenSeconds+au.yellowSeconds+au.redSeconds,c=Math.random()*s;[this.light,this.timer]=c<au.greenSeconds?[`green`,au.greenSeconds-c]:c<au.greenSeconds+au.yellowSeconds?[`yellow`,au.greenSeconds+au.yellowSeconds-c]:[`red`,s-c],n.propBlocks.push({from:r-a-6,to:r+a+6,dMin:-500,dMax:500});let l=(e,t,n)=>[t,n,-(e-r)],u=[];for(let e of[-1,1]){let t=rp-i;u.push({geo:Q(t,.3,a*2),color:4934223,p:l(r,e*(i+t/2),-.155)});for(let t=i+4;t<rp;t+=6)u.push({geo:Q(3,.02,.16),color:15253550,p:l(r,e*t,0)});for(let t of[-1,1])u.push({geo:Q(6,.3,4),color:11051414,p:l(r+t*(a+2.2),e*(i+4.5),0)})}for(let e of[-1,1])for(let t=-i+.6;t<i;t+=1.2)u.push({geo:Q(.6,.02,3),color:15921906,p:l(r+e*(a+2),t+.3,.016)});u.push({geo:Q(i,.02,.5),color:16777215,p:l(r-a-4.5,-i/2,.016)}),u.push({geo:Q(i,.02,.5),color:16777215,p:l(r+a+4.5,i/2,.016)});let d=new U(Z(u),o);d.position.copy(this.at(r,0,K.top)),this.group.add(d);let f=e=>new $r({color:e});this.lamps={r:f(16722458),y:f(16761600),g:f(2872922),cr:f(16722458),cg:f(2872922)};let p=new $i(.16,12),m=e=>{let t=new U(ap(),o);return e.forEach((e,n)=>{let r=new U(p,e);r.position.set(0,.4-n*.4,.18),t.add(r)}),t},h=[this.lamps.r,this.lamps.y,this.lamps.g],g=[this.lamps.cr,this.lamps.y,this.lamps.cg];for(let e of[-1,1]){let t=r+e*(a+3),n=e*(i+.8),s=e<0?0:Math.PI,c=new U(ip(i-1.5),o);c.position.copy(this.at(t,n,K.top)),c.rotation.y=s;let l=m(h);l.position.set(i-1.5,5.4,0),c.add(l);let u=m(h);u.position.set(0,3.2,.2),c.add(u);let d=m(g);d.position.set(0,3.2,0),d.rotation.y=-Math.PI/2,c.add(d),this.group.add(c)}for(let e of Object.values(this.lamps))e.userData.base=e.color.getHex();this.police=xf(`official`,3,`stick`),this.police.position.copy(this.at(r-a-1.5,-i-2.5,K.top+.3)),this.police.rotation.y=Math.PI+.6,this.group.add(this.police),tp.forEach((e,t)=>{let n=new U(Df(e,t%5),o);n.visible=!1,this.group.add(n);let r=Sf[e],i=np[e]??8;this.cars.push({active:!1,mesh:n,len:r.len,wid:r.wid,dir:1,x:0,speed:0,cruise:i})}),this.resolved=!0}visibleRange(){return[this.s-750,this.s+200]}get controlsTraffic(){return!0}stopLine(e){if(this.light===`green`)return null;let t=au.crossHalfWidth;return e===1?this.s-t-4.5:this.s+t+4.5}get crossGo(){return this.light===`red`&&this.timer>.8&&this.timer<au.redSeconds-.8}update(e){this.t+=e;let t=this.game,n=t.truck,r=this.s,i=au.crossHalfWidth;(this.timer-=e)<=0&&(this.light===`green`?[this.light,this.timer]=[`yellow`,au.yellowSeconds]:this.light===`yellow`?[this.light,this.timer]=[`red`,au.redSeconds]:([this.light,this.timer]=[`green`,au.greenSeconds],this.warnedRed=!1));let a=this.lamps,o=(e,t)=>e.color.setHex(t?e.userData.base:2763306);o(a.r,this.light===`red`),o(a.y,this.light===`yellow`),o(a.g,this.light===`green`),o(a.cr,!this.crossGo),o(a.cg,this.crossGo);let s=this.police.userData.arm;if(s.rotation.x=this.crossGo?2.3+Math.sin(this.t*5)*.5:Math.PI/2,n.s<r-750||n.s>r+200)return;let c=n.frontS,l=r-i-4.5;t.state.phase===`HIGHWAY`&&(this.light!==`green`&&!this.warnedRed&&c>l-110&&c<l-15&&(this.warnedRed=!0,t.hud.warn(`{trafficlight} সামনে লাল বাতি — থামুন`,`info`,2)),this.light===`red`&&this.prevFront<l&&c>=l&&!this.ranRed&&(this.ranRed=!0,t.hud.warn(`{siren} লাল বাতি অমান্য! ট্রাফিক পুলিশের বাঁশি`,`danger`,2.5),t.sound.whistle()),c<l-5&&(this.ranRed=!1)),this.prevFront=c,this.updateCross(e)}updateCross(e){let t=this.game,n=t.truck,r=this.s,i=t.track.halfWidth(r),a=this.crossGo,o=n.frontS>r-au.crossHalfWidth-1&&n.rearS<r+au.crossHalfWidth+1;if(this.hornCooldown-=e,this.spawnTimer-=e,this.spawnTimer<=0){this.spawnTimer=1.2+Math.random()*2;let e=this.cars.filter(e=>!e.active)[Math.floor(Math.random()*4)];e&&(e.dir=Math.random()<.5?1:-1,e.x=-e.dir*rp,this.cars.every(t=>!t.active||t.dir!==e.dir||Math.abs(t.x-e.x)>(t.len+e.len)/2+3)&&(e.active=!0,e.speed=e.cruise,e.mesh.visible=!0,e.mesh.rotation.y=e.dir===1?-Math.PI/2:Math.PI/2))}for(let s of this.cars){if(!s.active)continue;let c=s.x+s.dir*s.len/2,l=s.cruise,u=(-s.dir*(i+3)-c)*s.dir;(!a||o)&&u>-.5&&(l=Math.min(l,Math.max(0,u-.3)*.6));for(let e of this.cars){if(e===s||!e.active||e.dir!==s.dir)continue;let t=(e.x-s.x)*s.dir-(e.len+s.len)/2;t>-1&&t<25&&(l=Math.min(l,Math.max(0,e.speed+(t-2.5)*.5)))}let d=r+s.dir*3.5;if(Math.abs(d-n.s)<s.wid/2+4.5){let e=(n.d-s.x)*s.dir-s.len/2-1.6;e>-2&&e<10&&(l=0,this.hornCooldown<=0&&e<4&&(this.hornCooldown=3,t.sound.otherHorn()))}s.speed=l<s.speed?Math.max(l,s.speed-9*e):Math.min(l,s.speed+3*e),s.x+=s.dir*s.speed*Wl.speedScale*e,s.x*s.dir>rp?(s.active=!1,s.mesh.visible=!1):t.track.point(d,s.x,s.mesh.position,K.top-.005)}}},sp=12;function cp(){return sf(`works:excavator`,()=>Z([{geo:Q(2.6,.7,3.6),color:2829099,p:[0,.35,0]},{geo:Q(2.4,1.1,2.6),color:15906565,p:[0,1.25,.3]},{geo:Q(1.1,1.2,1.2),color:15906565,p:[-.6,2.35,.6]},{geo:Q(1,.8,.06),color:2771807,p:[-.6,2.45,-.02]},{geo:Q(.35,.35,3.2),color:14723072,p:[.5,2.3,-1.4],r:[-.45,0,0]},{geo:Q(.3,.3,2.4),color:14723072,p:[.5,2,-3.6],r:[.7,0,0]},{geo:Q(.9,.6,.7),color:3815994,p:[.5,.9,-4.3]}]))}var lp=class extends Lf{constructor(e,t){super(e,t),q(this,`phase`,`hold`),q(this,`timer`,0),q(this,`jamSpawned`,!1),q(this,`warned`,!1),q(this,`ranFlag`,!1),q(this,`prevFront`,0),q(this,`t`,0),q(this,`flagMats`,[]),q(this,`flagmen`,[]),q(this,`workers`,[]);let n=t.track,r=e.s,i=e.length,a=n.halfWidth(r),o=n.laneD(r,!1),s=lf(),c=e=>e<r-150?-a:e<r-100?-a+.3+(e-(r-150))/50*(a-.3-3.5):e<r+2?-3.5:e<r+6?-3.5+(e-(r+2))/4*3.2:e<r+i?-.3:e<r+i+35?-.3-(e-(r+i))/35*(a-.6):-a;n.limits.push({from:r-155,to:r+i+40,range:e=>[c(e)+1.35,100]}),n.propBlocks.push({from:r-10,to:r+i+10,dMin:-a-22,dMax:-a});let l=[],u=(e,t,n)=>[t,n,-(e-r)];l.push({geo:Q(a-.6,.08,i),color:9136709,p:u(r+i/2,-(a+.3)/2-.15,.04)}),l.push({geo:Q(1.6,.06,i-8),color:3878692,p:u(r+i/2,-a/2-1.2,.1)});for(let e=0;e<4;e++)l.push({geo:af(1.3+e%2*.4),color:e%2?13215850:10254927,p:u(r+12+e*14,-a+1.6+e%2*.8,.2),s:[1.4,.55,1.2]});for(let e=0;e<3;e++)l.push({geo:Q(1.2,.7,.8),color:10894378,p:u(r+20+e*1.3,-2.2,.4)});l.push({geo:Q(.4,.4,6),color:7107965,p:u(r+50,-1.8,.25),r:[0,.2,0]});for(let e=r-150;e<=r+i+35;e+=4){let t=c(e);l.push({geo:rf(.22,.7,6),color:16739584,p:u(e,t,.35)}),l.push({geo:$(.13,.15,.1,6),color:16777215,p:u(e,t,.42)})}let d=new U(Z(l),s);d.position.copy(this.at(r,0,K.top)),this.group.add(d);let f=new U(cp(),s);f.position.copy(this.at(r+i*.6,-a/2-.4,K.top+.05)),f.rotation.y=.5,this.group.add(f);let p=this.own(new U(new Qi(3.4,.35,.08),new xa({map:Td(`#ff6d00`,`#ffffff`,8)})));p.position.copy(this.at(r+2,-1.9,K.top+.9)),this.group.add(p);let m=new U(sf(`works:legs`,()=>Z([{geo:Q(.08,1,.5),color:5592405,p:[-1.6,.5,0]},{geo:Q(.08,1,.5),color:5592405,p:[1.6,.5,0]}])),s);m.position.copy(this.at(r+2,-1.9,K.top)),this.group.add(m);let h=Bf(yd([`{cement} সামনে রাস্তার কাজ চলছে`,`এক লেনে চলাচল · পতাকা দেখে চলুন`],{bg:`#f77f00`,fg:`#1d1d1d`,border:`#1d1d1d`,sizes:[52,40]}),4,2,2.4);h.position.copy(this.at(r-420,-a-3,K.top)),this.group.add(h);for(let e of[160,80]){let t=Bf(Dd(20),1.2,1.2,2.2);t.position.copy(this.at(r-e,-a-2.6,K.top)),this.group.add(t)}let g=Bf(yd([`উন্নয়ন কাজ চলছে`,`সাময়িক অসুবিধার জন্য দুঃখিত`,`কাজ শুরু: ২০১৯ · শেষ: শীঘ্রই`],{bg:`#ffd23f`,fg:`#1d1d1d`,border:`#c1121f`,sizes:[50,34,30]}),3.6,1.8,2.2);g.position.copy(this.at(r-6,-a-2.4,K.top)),g.rotation.y=.3,this.group.add(g);let _=sf(`works:helmet`,()=>Z([{geo:$(.17,.19,.12,8),color:16765503,p:[0,1.8,0]}]));for(let e=0;e<4;e++){let t=bf(e%2?`farmer`:`trader`,70+e);t.add(new U(_,s)),t.position.copy(this.at(r+10+e*13,-a/2-1.2+e%2*2.4,K.top+.08)),t.rotation.order=`YXZ`,t.rotation.y=e*1.3,t.userData.phase=e*1.1,this.workers.push(t),this.group.add(t)}for(let[e,t,n]of[[r-sp,-o-2.4,Math.PI+.4],[r+i+8,a+1.6,.4]]){let r=xf(`farmer`,75,`stick`);r.add(new U(_,s));let i=new $r({color:14034984,side:2});this.flagMats.push(i);let a=new U(new la(.6,.42),i);a.position.set(0,-.95,-.9),a.userData.ownsMaterial=!0,r.userData.arm.add(a),r.position.copy(this.at(e,t,K.top)),r.rotation.y=n,this.flagmen.push(r),this.group.add(r)}t.thieves.addZone(r-220,r-4,`রাস্তার কাজের জ্যাম`),this.resolved=!0}visibleRange(){return[this.s-750,this.s+this.event.length+150]}get controlsTraffic(){return!0}stopLine(e){return e===1?this.phase===`ours`?null:this.s-sp:this.phase===`theirs`||this.phase===`hold`?null:this.s+this.event.length+10}laneAt(e,t){let n=this.s,r=this.event.length,i=this.game.track.laneD(n,!1);return t===1?e>n-170&&e<=n-sp+2?-i:e>n-sp+2&&e<n+r+12?i:null:e>n-15&&e<n+r+110?i:null}update(e){this.t+=e;let t=this.game,n=t.truck,r=this.s,i=n.frontS,a=t.state.phase===`HIGHWAY`;if(a&&!this.jamSpawned&&i>r-ru.spawnDistance&&i<r-200){this.jamSpawned=!0;let e=ru.vehiclesMin+Math.floor(Math.random()*(ru.vehiclesMax-ru.vehiclesMin+1)),n=t.track.laneD(r,!1);t.traffic.spawnQueue(r-sp,-n,-n,e)}if(a&&!this.warned&&i>r-400&&i<r&&(this.warned=!0,t.hud.warn(`{cement} সামনে রাস্তার কাজ — এক লেনে চলাচল, পতাকা দেখে চলুন`,`info`,3.5)),this.phase===`hold`)i>r-ru.cycleFrom&&(this.phase=`theirs`,this.timer=6);else if((this.timer-=e)<=0){let e={ours:[`clearA`,ru.clearSeconds],clearA:[`theirs`,ru.redSeconds],theirs:[`clearB`,ru.clearSeconds],clearB:[`ours`,ru.greenSeconds]};[this.phase,this.timer]=e[this.phase]}let o=this.phase===`ours`,s=r-sp;a&&!o&&this.prevFront<s&&i>=s&&!this.ranFlag&&(this.ranFlag=!0,t.hud.warn(`{warning} লাল পতাকা! উল্টো দিক থেকে গাড়ি আসছে`,`danger`,2.5),t.sound.whistle()),i<s-5&&(this.ranFlag=!1),this.prevFront=i;let c=this.phase===`theirs`||this.phase===`hold`;this.flagmen.forEach((e,t)=>{let n=t===0?o:c;this.flagMats[t].color.setHex(n?2989391:14034984),e.userData.arm.rotation.x=n?2.3+Math.sin(this.t*6)*.6:Math.PI/2});for(let e of this.workers)e.rotation.x=Math.max(0,Math.sin(this.t*3+e.userData.phase))*.4}},up=4.6,dp=class{constructor(e){q(this,`game`,void 0),q(this,`group`,new Rn),q(this,`zones`,[]),q(this,`pool`,[]),q(this,`timer`,1.5),q(this,`t`,0),this.game=e;let t=sf(`thief:sack`,()=>Z([{geo:Q(.55,.5,.45),color:11044698,p:[0,0,0]},{geo:Q(.2,.12,.2),color:4165418,p:[.05,.3,0]}]));for(let e=0;e<5;e++){let n=bf(e%2?`farmer`:`trader`,60+e),r=new U(t,lf());r.position.set(.1,1.75,.15),n.add(r),n.rotation.order=`YXZ`,n.visible=!1,this.group.add(n),this.pool.push({active:!1,mesh:n,sack:r,state:`run`,s:0,d:0,side:1,grabOff:0,t:0,zone:null,phase:e*1.7})}}addZone(e,t,n){this.zones.push({from:e,to:t,labelBn:n,warned:!1})}reset(){this.zones=[],this.timer=1.5;for(let e of this.pool)e.active=!1,e.mesh.visible=!1}scare(){let e=this.game.truck,t=0;for(let n of this.pool)n.active&&n.state!==`flee`&&(Math.hypot(n.s-e.s,n.d-e.d)>ou.hornRange||(this.flee(n,!1),t++));return t}flee(e,t){e.state=`flee`,e.sack.visible=t}update(e){this.t+=e;let t=this.game,n=t.truck,r=Math.abs(n.kmh)<ou.maxKmh,i=t.state.phase===`HIGHWAY`?this.zones.find(e=>n.frontS>=e.from&&n.frontS<=e.to)??null:null;if(i&&!i.warned&&r&&t.cargo.totalKg>0&&(i.warned=!0,t.hud.toast(`{warning} জ্যামে চোরের উপদ্রব! কেউ সবজি টানলে হর্ন দিন`,3.5)),this.timer-=e,i&&r&&!t.modal&&t.cargo.totalKg>0&&this.timer<=0){this.timer=ou.intervalMin+Math.random()*(ou.intervalMax-ou.intervalMin);let e=this.pool.filter(e=>e.active&&e.state!==`flee`).length,t=this.pool.find(e=>!e.active);t&&e<ou.maxAtOnce&&this.spawn(t,i)}let a=t.track.halfWidth(n.s);for(let i of this.pool){if(!i.active)continue;let o=up,s,c;if(i.state===`flee`)s=i.s-4,c=i.side*(a+16),o=up*1.2;else if(s=n.s+i.grabOff,c=n.d+i.side*(ql.width/2+.45),!r||t.state.phase!==`HIGHWAY`){this.flee(i,!1);continue}let l=s-i.s,u=c-i.d,d=Math.hypot(l,u);if(i.state===`grab`){if(i.s=s,i.d=c,i.t+=e,i.t>=ou.grabSeconds){let e=ou.kgMin+Math.random()*(ou.kgMax-ou.kgMin);t.stealCargo(e,i.zone?.labelBn??`জ্যাম`)>0&&t.hud.toast(`{warning} চোর সবজির বস্তা নিয়ে পালালো!`,2.5),this.flee(i,!0)}}else if(d>.05){let t=Math.min(d,o*e);i.s+=l/d*t,i.d+=u/d*t,i.state===`run`&&d<.6&&(i.state=`grab`,i.t=0)}if(i.state===`flee`&&(Math.abs(i.d)>a+14||i.s<n.s-60)){i.active=!1,i.mesh.visible=!1;continue}let f=i.state===`grab`,p=f?0:Math.abs(Math.sin(this.t*11+i.phase))*.12;t.track.point(i.s,i.d,i.mesh.position,K.top+p),i.mesh.rotation.set(f?-.25:-.12,f?i.side*Math.PI/2:Math.atan2(-u,l),0),i.mesh.position.y+=f?.25:0}}spawn(e,t){let n=this.game,r=n.truck;e.active=!0,e.zone=t,e.side=Math.random()<.5?-1:1,e.state=`run`,e.t=0,e.grabOff=-1.2-Math.random()*2.4,e.s=r.s+e.grabOff+(Math.random()-.3)*8,e.d=e.side*(n.track.halfWidth(e.s)+2.5+Math.random()*3),e.sack.visible=!1,e.mesh.visible=!0,e.mesh.position.set(0,-100,0)}},fp=1600,pp=40,mp=1400,hp={x:34,y:26,z:40},gp=class{constructor(e){q(this,`sky`,void 0),q(this,`ground`,void 0),q(this,`groundTex`,void 0),q(this,`skyUniforms`,void 0),q(this,`fog`,void 0),q(this,`background`,void 0),q(this,`hemi`,void 0),q(this,`sunLight`,void 0),q(this,`sunDisc`,void 0),q(this,`clouds`,void 0),q(this,`stars`,void 0),q(this,`rain`,void 0),q(this,`rainPos`,void 0),q(this,`rainReady`,!1),q(this,`groundMat`,void 0),this.background=new H(Gl.skyColor),e.background=this.background,this.fog=new Kn(Gl.skyColor,Gl.fogNear,Gl.fogFar),e.fog=this.fog,this.skyUniforms={top:{value:new H(Gl.skyTop)},horizon:{value:new H(Gl.skyColor)}};let t=new ya({uniforms:this.skyUniforms,vertexShader:`
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,fragmentShader:`
        uniform vec3 top;
        uniform vec3 horizon;
        varying vec3 vDir;
        void main() {
          float h = clamp(vDir.y * 2.2, 0.0, 1.0);
          gl_FragColor = vec4(mix(horizon, top, pow(h, 0.8)), 1.0);
          #include <colorspace_fragment>
        }`,side:1,depthWrite:!1,fog:!1}),n=Gl.far*.9;this.sky=new U(new ua(n,24,12),t),this.sky.renderOrder=-10,this.sky.frustumCulled=!1,e.add(this.sky),this.sunDisc=new U(new $i(22,20),new $r({color:16774096,fog:!1,depthWrite:!1,transparent:!0})),this.sunDisc.position.set(-180,260,-420).multiplyScalar(.95),this.sunDisc.lookAt(0,0,0),this.sunDisc.renderOrder=-9,this.sky.add(this.sunDisc);let r=xu(99),i=new Float32Array(1500);for(let e=0;e<500;e++){let t=r()*Math.PI*2,a=.12+r()*1.3,o=n*.97;i.set([Math.cos(t)*Math.cos(a)*o,Math.sin(a)*o,Math.sin(t)*Math.cos(a)*o],e*3)}let a=new Vr;a.setAttribute(`position`,new Er(i,3)),this.stars=new Gi(a,new Bi({color:16777215,size:2,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:0,depthWrite:!1})),this.stars.renderOrder=-9,this.sky.add(this.stars);let o=[];for(let e=0;e<22;e++){let t=e/22*Math.PI*2+r()*.2,i=.12+r()*.3,a=n*.8,s=Math.cos(t)*Math.cos(i)*a,c=Math.sin(i)*a,l=Math.sin(t)*Math.cos(i)*a;for(let e=0;e<4;e++){let e=new ca(1,1),n=26+r()*30;e.scale(n*1.8,n*.45,n),e.rotateY(-t),e.translate(s+(r()-.5)*60,c+(r()-.5)*10,l+(r()-.5)*60),o.push(e.toNonIndexed())}}let s=new Vr,c=o.reduce((e,t)=>e+t.attributes.position.count,0),l=new Float32Array(c*3),u=0;for(let e of o)l.set(e.attributes.position.array,u),u+=e.attributes.position.count*3;s.setAttribute(`position`,new Er(l,3)),this.clouds=new U(s,new $r({color:16777215,transparent:!0,opacity:.5,fog:!1,depthWrite:!1})),this.clouds.renderOrder=-8,this.clouds.frustumCulled=!1,this.sky.add(this.clouds),this.hemi=new Wa(16773336,7035442,1.5),e.add(this.hemi),this.sunLight=new so(16769973,1.7),this.sunLight.position.set(-40,80,30),e.add(this.sunLight),this.groundTex=Cd(),this.groundTex.repeat.set(fp/pp,fp/pp),this.groundMat=new xa({map:this.groundTex}),this.ground=new U(new la(fp,fp),this.groundMat),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-5,e.add(this.ground),this.rainPos=new Float32Array(mp*6);let d=new Vr;d.setAttribute(`position`,new Er(this.rainPos,3).setUsage(et)),this.rain=new zi(d,new Di({color:13161696,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),this.rain.frustumCulled=!1,this.rain.visible=!1,e.add(this.rain)}apply(e,t){this.skyUniforms.top.value.copy(e.skyTop).lerp(_p,t*.5),this.skyUniforms.horizon.value.copy(e.horizon).lerp(_p,t*.6),this.background.copy(e.horizon),this.fog.color.copy(e.horizon).lerp(_p,t*.3),this.fog.near=e.fogNear,this.fog.far=e.fogFar,this.hemi.color.copy(e.hemiSky),this.hemi.groundColor.copy(e.hemiGround),this.hemi.intensity=e.hemiInt+t*3,this.sunLight.color.copy(e.sunColor),this.sunLight.intensity=e.sunInt,this.sunDisc.material.color.copy(e.discColor),this.sunDisc.material.opacity=e.discOpacity,this.sunDisc.visible=e.discOpacity>.02,this.sunDisc.scale.setScalar(e.discScale),this.clouds.material.color.copy(e.cloudColor).lerp(_p,t*.6),this.clouds.material.opacity=e.cloudOpacity,this.stars.material.opacity=e.stars,this.stars.visible=e.stars>.02,this.rain.material.opacity=e.rain*.55,this.rain.visible=e.rain>.02,this.groundMat.color.setScalar(1-e.wet*.25)}update(e,t,n,r){this.sky.position.copy(t.position),this.clouds.rotation.y+=e*.004;let i=Math.round(n.x/pp)*pp,a=Math.round(n.z/pp)*pp;this.ground.position.set(i,0,a),this.rain.visible&&this.updateRain(e,t.position,r)}updateRain(e,t,n){let r=this.rainPos,i=hp;if(!this.rainReady){for(let e=0;e<mp;e++){let n=t.x+(Math.random()-.5)*2*i.x,a=t.y+(Math.random()-.3)*i.y,o=t.z+(Math.random()-.5)*2*i.z;r.set([n,a,o,n+.15,a+.9,o],e*6)}this.rainReady=!0}let a=26*e,o=Math.floor(mp*Math.min(1,n));for(let e=0;e<mp;e++){let n=e*6;if(e>=o){r[n+1]=r[n+4]=-1e3;continue}let s=r[n],c=r[n+1]-a,l=r[n+2];(c<t.y-i.y*.4||c<-1)&&(c=Math.max(t.y,2)+i.y*.5+Math.random()*6),s<t.x-i.x?s+=2*i.x:s>t.x+i.x&&(s-=2*i.x),l<t.z-i.z?l+=2*i.z:l>t.z+i.z&&(l-=2*i.z),r[n]=s,r[n+1]=c,r[n+2]=l,r[n+3]=s+.12,r[n+4]=c+.9,r[n+5]=l}this.rain.geometry.attributes.position.needsUpdate=!0}},_p=new H(16777215),vp=6,yp=26,bp={city:140,town:50},xp=[1776411,1776411,1776411,2308443,9117247,2781002,13715803,3815994];function Sp(){return Z([{geo:$(.02,.02,1.35,5),color:1118481,p:[.26,1.5,-.05],r:[0,0,.12]},{geo:rf(.62,.32,10),color:16777215,p:[.18,2.28,-.05]},{geo:$(.62,.62,.04,10),color:16777215,p:[.18,2.12,-.05]}])}function Cp(){return Z([{geo:Q(.07,.07,.22),color:2829099,p:[.33,.88,-.14]},{geo:Q(.08,.08,.02),color:16774848,p:[.33,.88,-.26]}])}function wp(){let e=new ta(.75,4.2,12,1,!0);return e.rotateX(Math.PI/2),e.translate(0,0,-2.1),e.rotateX(-.32),e.translate(.33,.88,-.26),e}var Tp=class{constructor(e){q(this,`game`,void 0),q(this,`group`,new Rn),q(this,`meshes`,[]),q(this,`peds`,[]),q(this,`t`,0),q(this,`m`,new un),q(this,`q`,new Bt),q(this,`e`,new bn),q(this,`p`,new B),q(this,`one`,new B(1,1,1)),q(this,`umbrellas`,void 0),q(this,`torches`,void 0),q(this,`beams`,void 0),q(this,`zero`,new un().makeScale(0,0,0)),this.game=e;let t=(e,t)=>{let n=new Si(e,t,156);return n.frustumCulled=!1,n.instanceMatrix.setUsage(et),n.visible=!1,this.group.add(n),n};this.umbrellas=t(Sp(),lf()),this.torches=t(Cp(),lf()),this.beams=t(wp(),new $r({color:16771496,transparent:!0,opacity:.11,depthWrite:!1,blending:2,side:2}));let n=new H;for(let e=0;e<156;e++)this.umbrellas.setColorAt(e,n.set(xp[e%xp.length]));for(let e=0;e<vp;e++){let t=new Si(yf(e%3==2?`farmer`:`trader`,e+10),lf(),yp);t.count=yp,t.frustumCulled=!1,t.instanceMatrix.setUsage(et),this.meshes.push(t),this.group.add(t);for(let t=0;t<yp;t++)this.peds.push({active:!1,idx:this.peds.length,variant:e,slot:t,s:0,d:0,dir:1,speed:0,phase:Math.random()*10}),this.hide(e,t)}}hide(e,t){this.meshes[e].setMatrixAt(t,this.zero);let n=e*yp+t;this.umbrellas?.setMatrixAt(n,this.zero),this.torches?.setMatrixAt(n,this.zero),this.beams?.setMatrixAt(n,this.zero)}reset(){for(let e of this.peds)e.active=!1,this.hide(e.variant,e.slot);for(let e of this.meshes)e.instanceMatrix.needsUpdate=!0}want(e){let t=this.game.track.zone(e);return t===`city`?bp.city:t===`town`?bp.town:0}spawn(e,t,n){let r=this.game.track,i=n?t-30+Math.random()*300:t+220+Math.random()*110,a=r.zone(i);if(a!==`city`&&a!==`town`)return!1;let o=(Math.random()<.5?-1:1)*(r.halfWidth(i)+K.shoulder+1.5+.6+Math.random()*(a===`city`?4:3));return!r.isBlocked(i,o)&&(e.active=!0,e.s=i,e.d=o,e.dir=Math.random()<.5?1:-1,e.speed=Math.random()<.33?0:1+Math.random()*.7,!0)}update(e){this.t+=e;let t=this.game,n=t.truck.s,r=Math.max(this.want(n),this.want(n+300)),i=0;for(let e of this.peds)e.active&&i++;let a=t.weather.look,o=a.rain>.25,s=a.headlights>.75;this.umbrellas.visible=o,this.torches.visible=this.beams.visible=s;let c=r>i?3:0;for(let a of this.peds){if(!a.active){if(c>0&&i<r&&this.spawn(a,n,i<r*.5))c--,i++;else continue}a.s+=a.speed*a.dir*e;let l=a.s-n,u=t.track.zone(a.s);if(l<-60||l>360||u!==`city`&&u!==`town`){a.active=!1,this.hide(a.variant,a.slot);continue}let d=a.speed>0,f=d?Math.abs(Math.sin(this.t*7+a.phase))*.06:0,p=d?a.dir===1?0:Math.PI:a.phase;this.e.set(0,p,d?Math.sin(this.t*7+a.phase)*.05:0),this.q.setFromEuler(this.e),this.p.set(t.track.centerX(a.s)+a.d,K.top+f,-a.s),this.m.compose(this.p,this.q,this.one),this.meshes[a.variant].setMatrixAt(a.slot,this.m),o&&this.umbrellas.setMatrixAt(a.idx,this.m),s&&(this.torches.setMatrixAt(a.idx,this.m),this.beams.setMatrixAt(a.idx,this.m))}for(let e of this.meshes)e.instanceMatrix.needsUpdate=!0;o&&(this.umbrellas.instanceMatrix.needsUpdate=!0),s&&(this.torches.instanceMatrix.needsUpdate=!0,this.beams.instanceMatrix.needsUpdate=!0)}},Ep=17,Dp=21;function Op(){return sf(`train`,()=>{let e=[];e.push({geo:Q(Ep,3.2,3),color:1920649,p:[-17/2,2.4,0]}),e.push({geo:Q(17.02,.5,3.02),color:15087942,p:[-17/2,1.5,0]}),e.push({geo:Q(17.04,.25,3.04),color:16765286,p:[-17/2,3.3,0]}),e.push({geo:Q(.06,1,2.2),color:2240831,p:[.01,3,0]}),e.push({geo:Q(.1,.4,.5),color:16774064,p:[.03,2,0]}),e.push({geo:Q(15,.6,2.6),color:1456742,p:[-17/2,4.2,0]});for(let t=0;t<6;t++)e.push({geo:$(.5,.5,2.9,10),color:2236962,p:[-2-t*2.6,.55,0],r:[Math.PI/2,0,0]});for(let t=0;t<$l.coaches;t++){let n=-18.2-t*22.2-Dp/2,r=t%4==3?9121326:3107642;e.push({geo:Q(Dp,3.1,3),color:r,p:[n,2.35,0]}),e.push({geo:Q(21.02,.18,3.02),color:16765286,p:[n,1.6,0]}),e.push({geo:Q(20,.7,3.04),color:2042416,p:[n,2.7,0]}),e.push({geo:Q(Dp,.3,2.6),color:5921370,p:[n,4.05,0]});for(let t of[-7.5,Dp/2-3])e.push({geo:$(.45,.45,2.9,8),color:2236962,p:[n+t,.5,0],r:[Math.PI/2,0,0]})}return Z(e)})}function kp(){return Ep+$l.coaches*22.2}function Ap(){return vd(256,256,e=>{e.clearRect(0,0,256,256),e.save(),e.translate(128,128);for(let t of[Math.PI/4,-Math.PI/4])e.save(),e.rotate(t),e.fillStyle=`#ffffff`,e.fillRect(-120,-22,240,44),e.strokeStyle=`#c1121f`,e.lineWidth=8,e.strokeRect(-120,-22,240,44),e.restore();e.restore(),e.fillStyle=`#c1121f`,e.font=`700 34px ${pd}`,e.textAlign=`center`,e.fillText(`রেল`,128,70)})}var jp=[`ট্রেন আসছে… ধৈর্য ধরুন, চা খান।`,`রেলগেটে জীবনের অনেকটা সময় কাটে।`,`গেটম্যান বলছেন: "এই তো, আর একটু!"`,`ট্রেন লেট, কিন্তু গেট সময়মতো বন্ধ।`],Mp=class extends Lf{constructor(e,t){super(e,t),q(this,`state`,`idle`),q(this,`gatePivots`,[]),q(this,`gateT`,0),q(this,`lights`,[]),q(this,`lightOn`,void 0),q(this,`lightOff`,void 0),q(this,`train`,void 0),q(this,`trainX`,0),q(this,`trainDir`,1),q(this,`t`,0),q(this,`bellTimer`,0),q(this,`clackTimer`,0),q(this,`hornPlayed`,!1),q(this,`gateman`,void 0),q(this,`waitedTold`,!1);let n=t.track,r=e.s,i=n.halfWidth(r),a=lf(),o=K.top;n.limits.push({from:r-40,to:r+14,range:()=>[-i-.6,i+.6]}),n.propBlocks.push({from:r-20,to:r+20,dMin:-400,dMax:400});let s=[{geo:Q(900,.35,4.2),color:8221800,p:[0,.1,0]}];for(let e=-450;e<450;e+=1.6)s.push({geo:Q(.3,.14,2.8),color:4864556,p:[e,.3,0]});for(let e of[-.75,.75])s.push({geo:Q(900,.16,.12),color:11119017,p:[0,.42,e]});let c=new U(Z(s),a);c.position.copy(this.at(r,0,0)),c.position.x=n.centerX(r),c.frustumCulled=!1,this.group.add(c);let l=e=>{let t=this.own(new U(new Qi(e,.16,.16),new xa({map:Td(`#d62828`,`#ffffff`,12)})));return t.position.x=e/2,t},u=sf(`rail:post`,()=>Z([{geo:Q(.35,1.2,.35),color:16765503,p:[0,.6,0]},{geo:Q(.5,.5,.5),color:3355443,p:[-.3,1,0]}]));for(let[e,t]of[[-7,-1],[7,1]]){let n=i*2+1.5,s=new Rn;s.add(l(n)),s.position.copy(this.at(r+e,t<0?-i-1:i+1,o+1.1)),t>0&&(s.rotation.y=Math.PI);let c=new U(u,a);c.position.copy(this.at(r+e,t<0?-i-1:i+1,o)),this.group.add(s,c),this.gatePivots.push(s),s.rotation.z=Math.PI/2-.12}this.lightOn=new $r({color:16722458}),this.lightOff=new $r({color:3805200});let d=Ap();for(let[e,t]of[[-10,-i-2.4],[10,i+2.4]]){let n=new U(sf(`rail:signal`,()=>Z([{geo:$(.08,.08,4,6),color:14540253,p:[0,2,0]},{geo:Q(1.4,.5,.2),color:1118481,p:[0,2.7,0]}])),a);n.position.copy(this.at(r+e,t,o)),e>0&&(n.rotation.y=Math.PI),this.group.add(n);for(let e of[-.45,.45]){let t=new U(new $i(.2,12),this.lightOff);t.position.set(e,2.7,.11),n.add(t),this.lights.push(t)}let i=new U(new la(1.6,1.6),new $r({map:d,transparent:!0,side:2}));i.position.set(0,3.7,.05),n.add(i)}let f=Bf(yd([`{train} সামনে রেলক্রসিং`,`গেট বন্ধ থাকলে থামুন`],{bg:`#ffd23f`,fg:`#1d1d1d`,border:`#c1121f`,sizes:[52,40]}),3,1.5,2.2);f.position.copy(this.at(r-220,-i-3,o)),f.rotation.y=.3,this.group.add(f);let p=new U(sf(`rail:hut`,()=>Z([{geo:Q(2.4,2.4,2.4),color:13220239,p:[0,1.2,0]},{geo:Q(2.8,.15,2.8),color:9214371,p:[0,2.5,0]},{geo:Q(.9,1.6,.06),color:3811870,p:[0,.8,1.22]}])),a);p.position.copy(this.at(r-14,-i-7,0)),p.rotation.y=Math.PI/2,this.group.add(p),this.gateman=xf(`official`,7,`receipt`),this.gateman.position.copy(this.at(r-10,-i-4.2,o)),this.gateman.rotation.y=-Math.PI/2,this.group.add(this.gateman);let m=bf(`trader`,12);m.position.copy(this.at(r-26,i+3.2,o)),m.rotation.y=Math.PI/2;let h=new U(sf(`rail:cart`,()=>Z([{geo:Q(1.6,.8,.9),color:15320170,p:[0,.9,0]},{geo:Q(1.7,.08,1),color:15087942,p:[0,1.9,0]},{geo:Q(.05,.6,.05),color:5592405,p:[-.75,1.6,0]},{geo:Q(.05,.6,.05),color:5592405,p:[.75,1.6,0]}])),a);h.position.copy(this.at(r-27.5,i+3.4,o)),this.group.add(m,h),this.train=new U(Op(),a),this.train.visible=!1,this.train.frustumCulled=!1,this.group.add(this.train)}get blocking(){return this.state===`closing`||this.state===`closed`}get queueGap(){return 9}get allowsQueue(){return!0}visibleRange(){return[this.s-750,this.s+150]}close(){this.state=`closing`,this.gateT=0,this.trainDir=Math.random()<.5?1:-1,this.trainX=-this.trainDir*$l.trainStartGap,this.train.visible=!0,this.train.rotation.y=this.trainDir>0?0:Math.PI,this.hornPlayed=!1,this.waitedTold=!1}update(e){this.t+=e;let t=this.game,n=t.truck,r=this.s,i=n.frontS,a=r-7.6;this.state===`idle`&&t.state.phase===`HIGHWAY`&&!t.chase.active&&i>r-$l.triggerDistance&&i<r&&(Math.random()<$l.trainChance?(this.close(),t.hud.warn(`{train} রেলগেট বন্ধ হচ্ছে — ট্রেন আসছে!`,`info`,3.5)):this.state=`open`),(this.state===`closing`||this.state===`opening`)&&(this.gateT=Math.min(1,this.gateT+e*.5),this.gateT>=1&&(this.state===`closing`?this.state=`closed`:(this.state=`open`,this.resolved=!0)));let o=this.state===`closing`?this.gateT:this.state===`closed`?1:this.state===`opening`?1-this.gateT:0,s=o*o*(3-2*o);for(let e of this.gatePivots)e.rotation.z=(1-s)*(Math.PI/2-.12);let c=this.state===`closing`||this.state===`closed`,l=Math.floor(this.t*3)%2==0;this.lights.forEach((e,t)=>e.material=c&&t%2==0===l?this.lightOn:this.lightOff);let u=this.gateman.userData.arm;u.rotation.x=c?2.6+Math.sin(this.t*5)*.3:0;let d=Math.abs(i-r)<450;if(c&&d&&(this.bellTimer-=e,this.bellTimer<=0&&(this.bellTimer=.55,t.sound.bell())),this.train.visible){(this.state===`closed`||this.state===`closing`)&&(this.trainX+=this.trainDir*$l.trainSpeed*e);let n=t.track.centerX(r);this.train.position.set(n+this.trainX,t.track.elevation(r)+.45,-r),!this.hornPlayed&&Math.abs(this.trainX)<220&&d&&(this.hornPlayed=!0,t.sound.trainHorn());let i=this.trainX-this.trainDir*kp();(Math.sign(this.trainX)!==Math.sign(i)||Math.abs(this.trainX)<20||Math.abs(i)<20)&&d&&(this.clackTimer-=e,this.clackTimer<=0&&(this.clackTimer=22.2/$l.trainSpeed/2,t.sound.clack())),this.state===`closed`&&this.trainDir*i>25&&(this.state=`opening`,this.gateT=0,d&&t.hud.toast(`{train} ট্রেন চলে গেছে — গেট খুলছে`)),this.trainDir*i>500&&(this.train.visible=!1)}if(c&&t.state.phase===`HIGHWAY`&&!t.modal){if(i>=a&&i<a+12){let e=n.kmh;n.clampFront(a-.05),n.stop(),e>$l.gateHitKmh&&(t.cam.shake(.6),t.sound.crash(.4),t.damageCargo(1,`রেলগেটে ধাক্কা`,this.event.nameBn),t.hud.warn(`{crash} রেলগেটে ধাক্কা! গেটম্যান খুব রাগ করেছেন`,`danger`,2.5))}!this.waitedTold&&Math.abs(n.speed)<Jl.stopSpeed&&i>r-60&&i<a+1&&(this.waitedTold=!0,t.hud.toast(`{hourglass} ${jp[Math.floor(Math.random()*jp.length)]}`,4))}}},Np={school:{icon:`{school}`,enterBn:`স্কুল এলাকা — ধীরে চলুন`,signLines:[`{school} সামনে স্কুল`,`ধীরে চলুন`],bg:`#ffd23f`,lines:[`আস্তে! স্কুলের বাচ্চারা রাস্তা পার হয়।`,`স্কুল এলাকা — এখানে রেস নয়, ক্লাস হয়।`,`হেডস্যার দেখলে কান ধরে ওঠবস করাবে!`]},bazar:{icon:`{cart}`,enterBn:`বাজার এলাকা — ধীরে চলুন`,signLines:[`{cart} বাজার এলাকা`,`ধীরে চলুন`],bg:`#ffffff`,lines:[`বাজারে ধীরে! মুরগিও আপনার চেয়ে ধীরে দৌড়ায়।`,`রিকশা, ভ্যান, মানুষ, ছাগল — সবাই আছে। আস্তে!`,`দাম দৌড়াক, আপনি না।`]},market:{icon:`{cabbage}`,enterBn:`কাঁচাবাজার এলাকা — ধীরে চলুন`,signLines:[`{cabbage} কাওরান বাজার এলাকা`,`ধীরে চলুন`],bg:`#ffffff`,lines:[`কাঁচাবাজার — এখানে দাম দৌড়ায়, গাড়ি না।`,`আস্তে! টমেটোর ঝুড়ি মাথায় লোক যাচ্ছে।`]}};function Pp(){return sf(`school`,()=>Z([{geo:Q(18,4,7),color:15913323,p:[0,2,0]},{geo:Q(18.6,.3,7.6),color:11880493,p:[0,4.15,0]},{geo:Q(18,.6,.1),color:2781002,p:[0,3.5,-3.56]},...[-6,-2,2,6].map(e=>({geo:Q(1.6,1.4,.08),color:3824250,p:[e,2.1,-3.55]})),{geo:Q(1.4,2.4,.08),color:7031338,p:[0,1.2,-3.55]},{geo:Q(24,1.2,.3),color:14209732,p:[0,.6,-10]},{geo:$(.06,.06,6,5),color:13421772,p:[-10,3,-6]},{geo:Q(.05,1,1.6),color:27214,p:[-10,5.4,-6.85]},{geo:$(.3,.3,.07,12),color:16001601,p:[-9.97,5.4,-6.9],r:[0,0,Math.PI/2]}]))}var Fp=class{constructor(e){q(this,`game`,void 0),q(this,`group`,new Rn),q(this,`zones`,[]),q(this,`inside`,null),q(this,`warnCooldown`,0),q(this,`t`,0),this.game=e}build(e){for(let e of this.zones)this.group.remove(e.group);this.zones=[],this.inside=null;let t=this.game.track;for(let n of e){let e=new Rn,r=Np[n.kind],i=t.halfWidth(n.from),a=[],o=(e,n,r=0)=>t.point(e,n,new B,r);for(let t of[-1,1]){let a=Bf(yd(r.signLines,{bg:r.bg,fg:`#1d1d1d`,border:`#c1121f`,sizes:[56,44]}),2.8,1.4,2.2);a.position.copy(o(n.from-60,t*(i+3.2),K.top)),a.rotation.y=-t*.3;let s=Bf(Dd(n.limitKmh),1.2,1.2,2.2);s.position.copy(o(n.from-40,t*(i+3),K.top)),s.rotation.y=-t*.3,e.add(a,s)}let s=Bf(yd([`ধন্যবাদ`,`আবার আসবেন`],{bg:`#2d6a4f`,fg:`#ffffff`,sizes:[48,36]}),2.2,1.1,2.2);if(s.position.copy(o(n.to+5,-(i+3.2),K.top)),e.add(s),n.kind===`school`){let r=(n.from+n.to)/2,s=n.side,c=s*(i+24);t.propBlocks.push({from:r-25,to:r+25,dMin:Math.min(c-16,c+16),dMax:Math.max(c-16,c+16)});let l=new U(Pp(),lf());l.position.copy(o(r,c)),l.rotation.y=s>0?Math.PI/2:-Math.PI/2,e.add(l);let u=Bf(yd([`সরকারি প্রাথমিক বিদ্যালয়`,`মন দিয়ে পড়ো, ধীরে গাড়ি চালাও`],{bg:`#2a6f4a`,fg:`#fff`,border:`#ffd23f`,sizes:[48,30]}),4,1.3,2.4);u.position.copy(o(r-14,s*(i+6),K.top)),u.rotation.y=-s*.5,e.add(u);for(let t=0;t<9;t++){let n=bf(t%3==0?`farmer`:`trader`,30+t);n.scale.setScalar(.62),n.position.copy(o(r-9+t*2.2,s*(i+15.5+t%3*1.4))),n.userData.phase=t*1.3,a.push(n),e.add(n)}let d=new U(Z(Array.from({length:9},(e,t)=>({geo:Q(.6,.03,3.2),color:15921906,p:[-i+.9+t*((2*i-1.8)/8),0,0]}))),lf());d.position.copy(o(r,0,K.top+.02)),e.add(d)}this.group.add(e),this.zones.push({zone:n,group:e,kids:a})}}get current(){return this.inside}update(e){this.t+=e;let t=this.game,n=t.truck,r=null;for(let e of this.zones)if(e.group.visible=n.s>e.zone.from-650&&n.s<e.zone.to+150,n.frontS>=e.zone.from&&n.frontS<=e.zone.to&&(r=e.zone),e.group.visible)for(let t of e.kids)t.position.y=Math.max(0,Math.sin(this.t*6+t.userData.phase))*.35;if(t.state.phase!==`HIGHWAY`){this.inside=null;return}let i=r?Np[r.kind]:null;r&&r!==this.inside&&i&&t.hud.warn(`${i.icon} ${i.enterBn} — সর্বোচ্চ ${pu(r.limitKmh)} কিমি/ঘণ্টা`,`info`,3),this.inside=r,this.warnCooldown-=e,r&&i&&Math.abs(n.kmh)>r.limitKmh+Ql.tolerance&&this.warnCooldown<=0&&!t.chase.active&&!t.modal&&(this.warnCooldown=5,t.hud.warn(`{turtle} ধীরে! ${i.lines[Math.floor(Math.random()*i.lines.length)]}`,`danger`,2.8),t.sound.beep())}},Ip={day:{skyTop:9418968,horizon:15849908,fogNear:140,fogFar:560,hemiSky:16773336,hemiGround:7035442,hemiInt:1.5,sunColor:16769973,sunInt:1.7,discColor:16774096,discOpacity:1,discScale:1,cloudColor:16777215,cloudOpacity:.55,stars:0,rain:0,lightning:0,headlights:0,wet:0},evening:{skyTop:4873615,horizon:15769696,fogNear:120,fogFar:520,hemiSky:16763034,hemiGround:4864554,hemiInt:1.05,sunColor:16751184,sunInt:1.3,discColor:16751168,discOpacity:1,discScale:1.5,cloudColor:16755328,cloudOpacity:.65,stars:.1,rain:0,lightning:0,headlights:.6,wet:0},night:{skyTop:461848,horizon:1712690,fogNear:50,fogFar:380,hemiSky:6320288,hemiGround:1381660,hemiInt:.5,sunColor:8425664,sunInt:.35,discColor:15002879,discOpacity:.95,discScale:.6,cloudColor:2764864,cloudOpacity:.45,stars:1,rain:0,lightning:0,headlights:1,wet:0},cloudy:{skyTop:10134443,horizon:13223613,fogNear:110,fogFar:470,hemiSky:15263976,hemiGround:5921354,hemiInt:1.3,sunColor:14540253,sunInt:.7,discColor:16777215,discOpacity:0,discScale:1,cloudColor:12896460,cloudOpacity:.95,stars:0,rain:0,lightning:0,headlights:.15,wet:0},rainy:{skyTop:7173501,horizon:10133667,fogNear:60,fogFar:340,hemiSky:13160664,hemiGround:4212808,hemiInt:1,sunColor:11581632,sunInt:.45,discColor:16777215,discOpacity:0,discScale:1,cloudColor:8028296,cloudOpacity:1,stars:0,rain:.7,lightning:0,headlights:.6,wet:1},storm:{skyTop:3422531,horizon:6054505,fogNear:45,fogFar:290,hemiSky:10528952,hemiGround:2764336,hemiInt:.75,sunColor:8949920,sunInt:.3,discColor:16777215,discOpacity:0,discScale:1,cloudColor:4672597,cloudOpacity:1,stars:0,rain:1,lightning:1,headlights:.9,wet:1}},Lp={day:`{sun} দিন`,evening:`{sunset} সন্ধ্যা`,night:`{moon} রাত`,cloudy:`{cloud} মেঘলা`,rainy:`{rain} বৃষ্টি`,storm:`{storm} ঝড়-বজ্রপাত`},Rp={day:[`evening`,`cloudy`,`cloudy`],evening:[`night`,`night`,`cloudy`],night:[`day`,`rainy`,`cloudy`],cloudy:[`day`,`rainy`,`rainy`,`evening`],rainy:[`cloudy`,`storm`,`night`],storm:[`rainy`,`cloudy`]};function zp(e){let t={};for(let[n,r]of Object.entries(e))t[n]=Bp.has(n)?new H(r):r;return t}var Bp=new Set([`skyTop`,`horizon`,`hemiSky`,`hemiGround`,`sunColor`,`discColor`,`cloudColor`]),Vp=Object.fromEntries(Object.entries(Ip).map(([e,t])=>[e,zp(t)])),Hp=class{constructor(){q(this,`current`,void 0),q(this,`target`,void 0),q(this,`blend`,1),q(this,`holdTimer`,void 0),q(this,`look`,zp(Ip.day)),q(this,`flash`,0),q(this,`flashTimer`,0),q(this,`boltTimer`,3),q(this,`changeListeners`,[]),q(this,`thunderListeners`,[]);let e=[`day`,`day`,`cloudy`,`evening`,`rainy`];this.current=this.target=e[Math.floor(Math.random()*e.length)],this.holdTimer=this.randomHold(),this.mix(1)}onChange(e){this.changeListeners.push(e)}onThunder(e){this.thunderListeners.push(e)}get label(){return Lp[this.blend<.5?this.current:this.target]}randomHold(){return eu.holdMin+Math.random()*(eu.holdMax-eu.holdMin)}randomize(){let e=Object.keys(Ip);this.current=this.target=e[Math.floor(Math.random()*e.length)],this.blend=1,this.holdTimer=this.randomHold(),this.mix(1);for(let e of this.changeListeners)e(this.current)}mix(e){let t=Vp[this.current],n=Vp[this.target],r=Gd(0,1,e),i=this.look;for(let e of Object.keys(Ip.day)){let a=t[e],o=n[e];a instanceof H?i[e].copy(a).lerp(o,r):i[e]=a+(o-a)*r}}update(e){if(this.blend<1)this.blend=Math.min(1,this.blend+e/eu.blendSeconds),this.mix(this.blend),this.blend>=1&&(this.current=this.target);else if(this.holdTimer-=e,this.holdTimer<=0){let e=Rp[this.current];this.target=e[Math.floor(Math.random()*e.length)],this.blend=0,this.holdTimer=this.randomHold();for(let e of this.changeListeners)e(this.target)}if(this.look.lightning>.5&&(this.boltTimer-=e,this.boltTimer<=0)){this.boltTimer=3+Math.random()*7,this.flashTimer=.35;for(let e of this.thunderListeners)e(.3+Math.random()*1.4)}if(this.flashTimer>0){this.flashTimer-=e;let t=this.flashTimer;this.flash=t>.25?1:t>.18?.2:t>.08?.8:Math.max(0,t/.08)*.5}else this.flash=0}},Up=4165418;function Wp(e){return sf(`crop:${e}`,()=>{let t=[];switch(e){case`tomato`:t.push({geo:$(.02,.02,1,4),color:9071162,p:[0,.5,0]}),t.push({geo:af(.38),color:Up,p:[0,.6,0],s:[1,1.2,1]});for(let e=0;e<4;e++)t.push({geo:nf(.09,6,4),color:14695210,p:[Math.cos(e*1.6)*.32,.45+e%2*.25,Math.sin(e*1.6)*.32]});break;case`potato`:t.push({geo:nf(.45,7,4),color:8018486,p:[0,0,0],s:[1,.45,1]}),t.push({geo:af(.28),color:Up,p:[0,.32,0],s:[1.2,.7,1.2]});break;case`onion`:for(let e=0;e<6;e++)t.push({geo:rf(.04,.6,4),color:6270522,p:[Math.cos(e)*.12,.3,Math.sin(e)*.12],r:[Math.cos(e)*.25,0,Math.sin(e)*.25]});t.push({geo:nf(.1,6,4),color:11882603,p:[0,.05,0]});break;case`brinjal`:t.push({geo:af(.42),color:Up,p:[0,.55,0]});for(let e=0;e<3;e++)t.push({geo:nf(.08,6,4),color:5974638,p:[Math.cos(e*2.1)*.35,.35,Math.sin(e*2.1)*.35],s:[1,2,1]});break;case`cauliflower`:t.push({geo:af(.42),color:5214010,p:[0,.2,0],s:[1.2,.6,1.2]}),t.push({geo:nf(.24,7,5),color:15854288,p:[0,.38,0],s:[1,.7,1]});break;case`cabbage`:t.push({geo:af(.42),color:7316282,p:[0,.2,0],s:[1.3,.5,1.3]}),t.push({geo:nf(.3,7,5),color:10275941,p:[0,.33,0]});break;case`chili`:t.push({geo:af(.35),color:4165418,p:[0,.45,0],s:[1,1.1,1]});for(let e=0;e<5;e++)t.push({geo:rf(.04,.16,4),color:e%2?14034984:3055162,p:[Math.cos(e*1.3)*.3,.4,Math.sin(e*1.3)*.3],r:[Math.PI,0,0]});break;case`gourd`:for(let e of[-.9,.9])for(let n of[-.9,.9])t.push({geo:$(.04,.04,1.8,4),color:10193498,p:[e,.9,n]});t.push({geo:Q(2,.12,2),color:5216821,p:[0,1.8,0]});for(let e=0;e<3;e++)t.push({geo:$(.1,.13,.6,6),color:9159498,p:[-.5+e*.5,1.4,e%2*.4-.2]})}return Z(t)})}var Gp=class extends Lf{constructor(e,t){super(e,t),q(this,`zone`,void 0),q(this,`farmer`,void 0),q(this,`armed`,!0),q(this,`t`,0);let n=t.track,r=e.s,i=e.side,a=n.halfWidth(r),o=i*(a+4+15);n.propBlocks.push({from:r-17-6,to:r+17+6,dMin:i>0?a+1:-(a+8+30),dMax:i>0?a+8+30:-(a+1)});let s=new U(Z([{geo:Q(30,.3,34),color:7031342}]),lf());s.position.copy(this.at(r,o,-.1)),this.group.add(s);let c=e.vegetables,l=Math.max(2,Math.floor(8/c.length)),u=new un;c.forEach((e,t)=>{let n=e===`gourd`?2.6:1.4,a=Math.floor(32/n),s=new Si(Wp(e),lf(),l*a),d=0;for(let e=0;e<l;e++){let f=t*l+e,p=o-i*(13.5-f*27/(c.length*l));for(let t=0;t<a;t++){let i=r-17+1+t*n+e%2*.4,a=this.at(i,p,.05);u.makeRotationY((t*37+e*11)%10*.6).setPosition(a),s.setMatrixAt(d++,u)}}s.count=d,this.group.add(s)}),this.farmer=xf(`farmer`,Math.floor(r)%5,`receipt`),this.farmer.position.copy(this.at(r+3,i*(a+2.5))),this.farmer.rotation.y=i>0?Math.PI/2:-Math.PI/2,this.group.add(this.farmer);let d=new Si(qf(`crate`),lf(),9),f=new H;for(let e=0;e<9;e++){let t=this.at(r-4-e%3*.8,i*(a+2.4+Math.floor(e/3)*.6),Math.floor(e/3)*.47+K.top);u.makeRotationY(e*.3).setPosition(t),d.setMatrixAt(e,u),d.setColorAt(e,f.set(Fu[c[e%c.length]].color).lerp(new H(16777215),.35))}this.group.add(d);let p=Bf(yd([e.nameBn,c.map(e=>Fu[e].icon+` `+Fu[e].nameBn).join(`  `)],{bg:`#f6efe0`,fg:`#3b2a1a`,border:`#3f8f2a`,sizes:[64,40]}),3.2,1.6,1.6);p.position.copy(this.at(r-14,i*(a+2.2))),p.rotation.y=-i*.4,this.group.add(p),this.zone=Rf(18,a*2,4783994),this.zone.position.copy(this.at(r,0,K.top+.04)),this.group.add(this.zone)}get blocking(){return!1}update(e){this.t+=e;let t=this.game,n=t.state.phase===`FARM`;this.zone.visible=n,n&&zf(this.zone,this.t);let r=this.farmer.userData.arm;r.rotation.x=n?2.4+Math.sin(this.t*6)*.5:0;let i=t.truck,a=Math.abs(i.s-this.s)<9;a||(this.armed=!0),n&&a&&this.armed&&!t.modal&&Math.abs(i.kmh)<Jl.farmStopKmh&&(this.armed=!1,t.openBuyPanel(this.event))}},Kp={asphalt:new H(4934223),asphaltPatch:new H(5920594),dirt:new H(10779468),dirtDark:new H(9398848),shoulder:new H(10193512),embank:new H(8219202),bridgeSide:new H(12433064),bridgeUnder:new H(9078139),white:new H(15526884),yellow:new H(15253550),crumble:new H(5985613),gravel:new H(8023646),pothole:new H(2827810),puddle:new H(5194804)},qp=class{constructor(e){q(this,`track`,void 0),q(this,`pos`,[]),q(this,`col`,[]),q(this,`a`,new B),q(this,`b`,new B),q(this,`c`,new B),q(this,`d`,new B),this.track=e}quad(e,t,n,r,i,a,o,s,c,l,u,d=!1){let f=this.track,p=d?0:f.elevation(e),m=d?0:f.elevation(t),h=f.centerX(e),g=f.centerX(t);this.a.set(h+n,p+o,-e),this.b.set(h+r,p+s,-e),this.c.set(g+a,m+l,-t),this.d.set(g+i,m+c,-t);for(let e of[this.a,this.b,this.c,this.a,this.c,this.d])this.pos.push(e.x,e.y,e.z),this.col.push(u.r,u.g,u.b)}strip(e,t,n,r,i,a){this.quad(e,t,n,r,n,r,i,i,i,i,a)}build(){let e=new Vr;return e.setAttribute(`position`,new kr(this.pos,3)),e.setAttribute(`color`,new kr(this.col,3)),e.computeVertexNormals(),e.computeBoundingSphere(),e}},Jp=class{constructor(e){q(this,`track`,void 0),q(this,`group`,new Rn),q(this,`chunks`,new Map),q(this,`material`,new xa({vertexColors:!0,side:2})),q(this,`first`,0),q(this,`last`,-1),this.track=e}setTrack(e){for(let e of this.chunks.values())e.geometry.dispose(),this.group.remove(e);this.chunks.clear(),this.track=e,this.first=0,this.last=-1}update(e){let t=K.chunkLength,n=Math.floor(e/t)-K.chunksBehind,r=Math.min(Math.floor(e/t)+K.chunksAhead,Math.ceil((this.track.length+400)/t));if(n===this.first&&r===this.last)return!1;this.first=n,this.last=r;for(let[e,t]of this.chunks)(e<n||e>r)&&(t.geometry.dispose(),this.group.remove(t),this.chunks.delete(e));for(let e=n;e<=r;e++){if(this.chunks.has(e))continue;let t=new U(this.buildChunk(e),this.material);t.matrixAutoUpdate=!1,this.chunks.set(e,t),this.group.add(t)}return!0}get window(){return[this.first,this.last]}buildChunk(e){let t=this.track,n=K.chunkLength,r=K.sampleStep,i=new qp(t),a=xu(Su(e,991)),o=K.top,s=new H;for(let c=e*n;c<(e+1)*n-.01;c+=r){let e=c+r,n=(c+e)/2,l=t.halfWidth(c),u=t.halfWidth(e),d=t.isVillage(n),f=t.bridgeAt(n),p=f?1:K.shoulder,m=!d&&!f&&t.isBroken(n),h=d?a()<.3?Kp.dirtDark:Kp.dirt:m?a()<.4?Kp.crumble:a()<.5?Kp.gravel:Kp.asphaltPatch:a()<.12?Kp.asphaltPatch:Kp.asphalt;if(s.copy(h).multiplyScalar(.94+a()*.1),i.quad(c,e,-l,l,-u,u,o,o,o,o,s),m){let t=2+Math.floor(a()*3);for(let n=0;n<t;n++){let t=(a()*2-1)*(l-.8),n=.6+a()*1.4,s=c+a()*(r-1),u=Math.min(e-s,.6+a()*1.6),d=(a()-.5)*.5;i.quad(s,s+u,t-n/2,t+n/2,t-n/2+d,t+n/2-d,o+.012,o+.012,o+.012,o+.012,a()<.35?Kp.puddle:Kp.pothole)}}let g=d?Kp.dirtDark:f?Kp.bridgeSide:Kp.shoulder;if(i.quad(c,e,-l-p,-l,-u-p,-u,o-.02,o-.02,o-.02,o-.02,g),i.quad(c,e,l,l+p,u,u+p,o-.02,o-.02,o-.02,o-.02,g),f){let t=1.9;for(let n of[-1,1]){let r=n*(l+p),a=n*(u+p);i.quad(c,e,r,r,a,a,o,o-t,o,o-t,Kp.bridgeSide)}i.quad(c,e,-l-p,l+p,-u-p,u+p,o-t,o-t,o-t,o-t,Kp.bridgeUnder)}else{let n=t.elevation(c),r=t.elevation(e);for(let t of[-1,1]){let a=t*(l+p),s=t*(u+p),d=t*(l+p+1.2+n*1.3),f=t*(u+p+1.2+r*1.3),m=o-.02;i.quad(c,e,t<0?d:a,t<0?a:d,t<0?f:s,t<0?s:f,t<0?-n+.02:m,t<0?m:-n+.02,t<0?-r+.02:m,t<0?m:-r+.02,Kp.embank)}}if(!d&&(!m||a()<.35)&&!t.isJunction(n)){let t=o+.015;if(i.strip(c,e,-l+.25,-l+.45,t,Kp.white),i.strip(c,e,l-.45,l-.25,t,Kp.white),i.strip(c,e,-.3,-.16,t,Kp.yellow),i.strip(c,e,.16,.3,t,Kp.yellow),Math.floor(c/r)%3==0){let n=Math.max(2,Math.round(l/3.5));for(let r=1;r<n;r++){let a=l*r/n;i.strip(c,e,-a-.08,-a+.08,t,Kp.white),i.strip(c,e,a-.08,a+.08,t,Kp.white)}}}}return i.build()}},Yp={banana:500,roundTree:500,palm:300,bamboo:250,hut:120,teaStall:80,shop:260,pole:120,haystack:120,paddy:500,pond:60,building:400,pavement:200,shrub:400,billboardFrame:24,crate:1},Xp=[8368698,9223999,7316275,11059274,9746493,12761178],Zp=[15918793,15255968,11916263,16037542,14018741,16179839],Qp=[15327952,14272424,13094355,15258553,12563878,14067578,11122848],$p=[{icon:`{tea}`,title:`এক কাপ চা ৳১৫`,sub:`গত সপ্তাহে ছিল ৳১০`,fine:`দাম বাড়ার আগে খেয়ে নিন`,bg:[`#fff3d6`,`#f4c48a`],fg:`#4a2a12`,accent:`#c1121f`,pattern:`rays`},{icon:`{onion}`,title:`পেঁয়াজ কাটলে কাঁদবেন`,sub:`দাম শুনলেও কাঁদবেন`,bg:[`#6a4c93`,`#9d4edd`],fg:`#ffffff`,accent:`#ffca3a`,pattern:`dots`},{icon:`{truck}`,title:`মায়ের দোয়া ট্রান্সপোর্ট`,sub:`সারাদেশে সবজি পরিবহন`,fine:`*চাঁদা আলাদা`,bg:[`#ffd166`,`#f4a261`],fg:`#1d3557`,accent:`#e63946`,pattern:`stripes`},{icon:`{phone}`,title:`ভাই ভাই টেলিকম`,sub:`নেটওয়ার্ক নাই, ভালোবাসা আছে`,bg:[`#118ab2`,`#073b4c`],fg:`#ffffff`,accent:`#ef476f`,pattern:`rays`},{icon:`{fuchka}`,title:`ফুচকা কিং`,sub:`টক বেশি, ঝাল আরও বেশি`,bg:[`#ffe8d6`,`#ffb4a2`],fg:`#6d2e46`,accent:`#e5383b`,pattern:`dots`},{icon:`{fish}`,title:`ইলিশ ভাই রেস্টুরেন্ট`,sub:`কাঁটা বেছে খাওয়ানো হয়`,bg:[`#caf0f8`,`#48cae4`],fg:`#023e8a`,accent:`#0077b6`,pattern:`stripes`},{icon:`{building}`,title:`স্বপ্ননীড় হাউজিং`,sub:`রাস্তা নাই, পার্কিং আছে`,fine:`*বন্যামুক্ত (শুকনো মৌসুমে)`,bg:[`#e9edc9`,`#ccd5ae`],fg:`#283618`,accent:`#bc6c25`,pattern:`plain`},{icon:`{bald}`,title:`টাক-বাবা হেয়ার অয়েল`,sub:`৭ দিনে চুল, না হলে আরও ৭ দিন`,bg:[`#2b2d42`,`#8d99ae`],fg:`#ffffff`,accent:`#ef233c`,pattern:`rays`},{icon:`{umbrella}`,title:`ছাতা ভাড়া`,sub:`বৃষ্টি এলে ৳২০, না এলে ৳১০`,bg:[`#a2d2ff`,`#cdb4db`],fg:`#22223b`,accent:`#7b2cbf`,pattern:`dots`},{icon:`{sweets}`,title:`মিষ্টিমুখ মিষ্টান্ন ভাণ্ডার`,sub:`রসগোল্লায় রসের গ্যারান্টি`,bg:[`#fff1e6`,`#fde2e4`],fg:`#7f5539`,accent:`#d62828`,pattern:`stripes`},{icon:`{books}`,title:`স্মার্ট কোচিং সেন্টার`,sub:`জিপিএ-৫ গ্যারান্টি*`,fine:`*শর্ত প্রযোজ্য, শর্ত গোপন`,bg:[`#80ffdb`,`#5390d9`],fg:`#1b263b`,accent:`#e63946`,pattern:`rays`},{icon:`{receipt}`,title:`সাবধানে চালান`,sub:`চাঁদার রশিদ সংগ্রহ করুন*`,fine:`*রশিদ দেওয়া হয় না`,bg:[`#1d3557`,`#457b9d`],fg:`#ffffff`,accent:`#e63946`,pattern:`stripes`},{icon:`{road}`,title:`রাস্তা আপনার`,sub:`টোল আমাদের`,bg:[`#2a9d8f`,`#264653`],fg:`#ffffff`,accent:`#e9c46a`,pattern:`plain`},{icon:`{detective}`,title:`কমিটি গঠন করা হয়`,sub:`তদন্ত? পরে দেখা যাবে`,bg:[`#f8f9fa`,`#dee2e6`],fg:`#c1121f`,accent:`#1d3557`,pattern:`dots`},{icon:`{chili}`,title:`দাদা ভাইয়ের ঝালমুড়ি`,sub:`ঝাল বেশি, দাম আরও বেশি`,bg:[`#ffba08`,`#f48c06`],fg:`#370617`,accent:`#9d0208`,pattern:`rays`},{icon:`{cement}`,title:`পালোয়ান সিমেন্ট`,sub:`রাস্তা ভাঙবে, দেয়াল না`,bg:[`#adb5bd`,`#495057`],fg:`#ffffff`,accent:`#f77f00`,pattern:`stripes`},{icon:`{cow}`,title:`খাঁটি গরুর দুধ`,sub:`পানি মেশানো হয় না*`,fine:`*বর্ষাকাল ছাড়া`,bg:[`#ffffff`,`#d8f3dc`],fg:`#1b4332`,accent:`#2d6a4f`,pattern:`dots`},{icon:`{trafficlight}`,title:`জ্যাম কোচিং`,sub:`৩ ঘণ্টায় ধৈর্যের ডিগ্রি`,bg:[`#ff595e`,`#ffca3a`],fg:`#1d1d1d`,accent:`#1982c4`,pattern:`rays`},{icon:`{mango}`,title:`রাজশাহীর আম`,sub:`ঢাকায় পৌঁছে দাম তিন গুণ`,bg:[`#fff3b0`,`#e09f3e`],fg:`#540b0e`,accent:`#335c67`,pattern:`stripes`}],em=class{constructor(e){q(this,`track`,void 0),q(this,`group`,new Rn),q(this,`meshes`,new Map),q(this,`billboards`,[]),q(this,`tmpQ`,new Bt),q(this,`tmpE`,new bn),q(this,`tmpP`,new B),q(this,`tmpS`,new B),q(this,`tmpC`,new H),this.track=e;let t=new xa({map:wd()});for(let e of Object.keys(Yp)){if(e===`crate`||e===`billboardFrame`)continue;let n=e===`building`?t:lf(),r=new Si(qf(e),n,Yp[e]);r.count=0,r.frustumCulled=!1,r.instanceMatrix.setUsage(et),this.meshes.set(e,r),this.group.add(r)}let n=new la(6,3);for(let e=0;e<$p.length;e++){let t=new U(n,new xa({map:Ed($p[e])}));t.position.set(0,4.6,.22);let r=new Rn;r.add(new U(qf(`billboardFrame`),lf())),r.add(t),r.visible=!1,this.billboards.push(r),this.group.add(r)}}setTrack(e){this.track=e}place(e,t,n,r,i,a=1,o=1,s=1,c){let l=this.track;if(l.isBlocked(n,r))return;let u=l.isRiver(n,0)?-100:0;this.tmpE.set(0,i,0),this.tmpQ.setFromEuler(this.tmpE);let d=new un().compose(this.tmpP.set(l.centerX(n)+r,u,-n),this.tmpQ,this.tmpS.set(a,o,s));e.push({kind:t,m:d,color:c})}rebuild(e,t){let n=[],r=[],i=K.chunkLength;for(let a=e;a<=t;a++){let e=a*i;if(e<-200||e>this.track.length+300)continue;let t=xu(Su(a,1337));this.genChunk(n,t,e,i,r,a)}let a=new Map;for(let e of n){let t=this.meshes.get(e.kind);if(!t)continue;let n=a.get(e.kind)??0;n>=Yp[e.kind]||(t.setMatrixAt(n,e.m),e.color!==void 0&&t.setColorAt(n,this.tmpC.set(e.color)),a.set(e.kind,n+1))}for(let[e,t]of this.meshes)t.count=a.get(e)??0,t.visible=t.count>0,t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0);this.billboards.forEach(e=>e.visible=!1);for(let e of r){if(this.track.isBlocked(e.s,e.d))continue;let t=this.billboards.length,n=this.billboards[(e.idx%t+t)%t];n.visible||(n.visible=!0,n.position.set(this.track.centerX(e.s)+e.d,0,-e.s),n.rotation.y=-e.side*.35)}}genChunk(e,t,n,r,i,a){let o=this.track,s=n+r/2,c=o.zone(s),l=o.halfWidth(s);if(c===`river`)return;let u=l+K.shoulder+1.5,d=(i,a,o,s)=>{for(let c=0;c<i;c++){let i=t()<.5?-1:1,c=wu(t,s),l=Cu(t,.8,1.3);this.place(e,c,n+t()*r,i*Cu(t,a,o),t()*6.28,l,l,l)}},f=e=>{let o=t()<.5?-1:1;i.push({s:n+r/2,d:o*e,side:o,idx:a*7})},p=(i,a)=>{for(let o=0;o<i;o++){let i=t()<.5?-1:1,o=Cu(t,14,26),s=Cu(t,16,30);this.place(e,`paddy`,n+t()*r,i*(a+o/2+t()*40),0,o,1,s,wu(t,Xp))}};switch(c){case`village`:if(d(4,l+6,34,[`banana`,`banana`,`roundTree`,`bamboo`,`palm`]),t()<.45){let i=t()<.5?-1:1;this.place(e,`hut`,n+t()*r,i*Cu(t,16,28),(i>0?-Math.PI/2:Math.PI/2)+Cu(t,-.3,.3))}t()<.35&&this.place(e,`haystack`,n+t()*r,(t()<.5?-1:1)*Cu(t,12,30),0),t()<.15&&this.place(e,`pond`,n+t()*r,(t()<.5?-1:1)*Cu(t,30,50),0,9,1,7),p(2,36),d(3,40,90,[`roundTree`,`palm`,`bamboo`]),t()<.08&&f(l+9);break;case`rural`:if(p(3,u+4),d(2,u+2,22,[`banana`,`roundTree`,`palm`,`shrub`]),d(4,30,110,[`roundTree`,`roundTree`,`palm`,`bamboo`,`banana`]),a%2==0&&this.place(e,`pole`,n+5,-(u+1.5),0),t()<.2){let i=t()<.5?-1:1;this.place(e,`hut`,n+t()*r,i*Cu(t,24,45),i>0?-Math.PI/2:Math.PI/2)}if(t()<.12){let i=t()<.5?-1:1;this.place(e,`teaStall`,n+t()*r,i*(u+3),i>0?-Math.PI/2:Math.PI/2)}t()<.18&&this.place(e,`haystack`,n+t()*r,(t()<.5?-1:1)*Cu(t,20,50),0),t()<.24&&f(u+6);break;case`town`:for(let i of[-1,1]){this.place(e,`pavement`,s,i*(u+2),0,4,1,r,11774616);for(let r=0;r<3;r++){let a=n+6+r*13+t()*3;t()<.25?this.place(e,`teaStall`,a,i*(u+4.5),i>0?-Math.PI/2:Math.PI/2):this.place(e,`shop`,a,i*(u+5.5),i>0?-Math.PI/2:Math.PI/2,Cu(t,.8,1.1),Cu(t,.9,1.4),1,wu(t,Zp))}}a%2==0&&this.place(e,`pole`,n+5,-(u+.8),0),d(2,20,60,[`roundTree`,`palm`,`banana`]),t()<.35&&f(u+9);break;case`city`:for(let i of[-1,1]){this.place(e,`pavement`,s,i*(u+2.5),0,5,1,r,11051414);let a=n+t()*4;for(;a<n+r;){let n=Cu(t,10,16),r=Cu(t,12,34),o=Cu(t,10,16);this.place(e,`building`,a+n/2,i*(u+6+o/2),0,o,r,n,wu(t,Qp)),a+=n+Cu(t,1,4)}for(let a=0;a<2;a++){let a=Cu(t,14,24);this.place(e,`building`,n+t()*r,i*Cu(t,45,90),0,a,Cu(t,25,70),a,wu(t,Qp))}}a%2==0&&this.place(e,`pole`,n+5,-(u+.8),0),t()<.35&&f(u+3.5)}}};function tm(){return vd(256,256,e=>{e.fillStyle=`#c1121f`,e.beginPath();for(let t=0;t<8;t++){let n=Math.PI/8+t*Math.PI/4;e.lineTo(128+Math.cos(n)*124,128+Math.sin(n)*124)}e.closePath(),e.fill(),e.strokeStyle=`#fff`,e.lineWidth=8,e.stroke(),e.fillStyle=`#fff`,e.font=`700 76px ${pd}`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(`থামুন`,128,134)})}function nm(e,t){return vd(512,160,n=>{n.clearRect(0,0,512,160),n.fillStyle=t,n.font=`700 120px ${pd}`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(e,256,88)})}var rm=class extends Lf{constructor(e,t){super(e,t),q(this,`paid`,!1),q(this,`dialogOpen`,!1),q(this,`warned`,!1),q(this,`boomPivot`,void 0),q(this,`boomT`,0),q(this,`zone`,void 0),q(this,`t`,0),q(this,`fee`,void 0),q(this,`officials`,[]),q(this,`jamSpawned`,!1),q(this,`boomOpen`,0);let n=t.track,r=e.s,i=n.halfWidth(r),a=e.type===`roadTax`||!!e.small;this.fee=J.fees[e.feeKey];let o=lf();n.limits.push({from:r-100,to:r+14,range:e=>{let t=Math.min(1,Math.max(0,(e-(r-100))/60));return[-i+1.3,i-1.3+(-1.9-(i-1.3))*t]}}),n.propBlocks.push({from:r-40,to:r+30,dMin:-i-25,dMax:i+25});let s=a?i+3:i*2+6,c=a?-i/2-.5:0,l=[],u=a?[-i-1.2,0]:[-i-1.2,0,i+1.2];for(let e of u)for(let t of[0,8])l.push({geo:Q(.6,8.2,.6),color:15262938,p:[e-c,4.1,-t]});let d=new U(Z([{geo:Q(s,.7,11),color:15921386,p:[0,8.5,-4]},{geo:Q(s+.1,.35,11.1),color:a?1924766:2062909,p:[0,8.2,-4]},...l]),o);d.position.copy(this.at(r,c,K.top)),this.group.add(d);let f=yd([e.nameBn,`ট্রাক: ${gu(this.fee)}`],{bg:a?`#1d5e9e`:`#1f7a3d`,fg:`#ffffff`,w:1024,h:160,sizes:[70,44]}),p=this.own(new U(new la(Math.min(s-1,13),2),new xa({map:f})));p.position.copy(this.at(r-1.56,c,K.top+8.6)),this.group.add(p);let m=sf(`toll:booth`,()=>Z([{geo:Q(1.2,.3,9),color:14275781,p:[0,.15,-3]},{geo:Q(1.2,.32,.4),color:16765503,p:[0,.16,1.5]},{geo:Q(1.6,2.5,2.2),color:15262938,p:[0,1.55,-1]},{geo:Q(1.62,.9,1.6),color:2771807,p:[0,1.9,-1]},{geo:Q(1.8,.15,2.4),color:2062909,p:[0,2.88,-1]}])),h=a?[-i-.6]:[-i-.6,0,i+.6];for(let e of h){let t=new U(m,o);t.position.copy(this.at(r,e,K.top-.02)),this.group.add(t)}let g=i-.4,_=this.own(new U(new Qi(g,.14,.14),new xa({map:Td(`#d62828`,`#ffffff`,10)})));_.position.x=g/2,this.boomPivot=new Rn,this.boomPivot.add(_),this.boomPivot.position.copy(this.at(r+.3,-i+.1,K.top+1.05));let v=new U(sf(`toll:boompost`,()=>Z([{geo:Q(.35,1.1,.35),color:16765503,p:[0,.55,0]}])),o);v.position.copy(this.at(r+.3,-i+.1,K.top)),this.group.add(this.boomPivot,v);let y=[{geo:Q(i,.03,.5),color:16777215,p:[-i/2,.02,0]}];for(let e=0;e<8;e++)for(let t=0;t<3;t++)y.push({geo:Q(i*2-1,.06,.3),color:t%2?16777215:16765503,p:[0,.03,60+e*11+t*.7]});let b=new U(Z(y),o);b.position.copy(this.at(r,0,K.top)),this.group.add(b);let x=this.own(new U(new la(4.5,1.4).rotateX(-Math.PI/2),new $r({map:nm(`থামুন`,`#ffffff`),transparent:!0,depthWrite:!1})));x.position.copy(this.at(r-7,-i/2,K.top+.03)),this.group.add(x);for(let e of[120,60]){let t=Bf(Dd(J.tollMaxSpeedKmh),1.3,1.3,2.2);t.position.copy(this.at(r-e,-i-2.6,K.top)),this.group.add(t)}let S=Bf(tm(),1.4,1.4,2.2);S.position.copy(this.at(r-25,-i-2.6,K.top)),this.group.add(S);let C=Bf(yd([`${e.nameBn} — সামনে`,`গতি কমান · থামতে হবে`],{bg:`#1f7a3d`,border:`#ffffff`,sizes:[56,42]}),4,2,2.4);C.position.copy(this.at(r-420,-i-3,K.top)),this.group.add(C),(a?[[r-1,-i-1.8],[r+2,-i-2.4]]:[[r-1,-i-1.8],[r+2,-.9],[r+4,-i-2.4]]).forEach(([e,t],n)=>{let r=bf(`official`,n);r.position.copy(this.at(e,t,K.top+.28)),r.rotation.y=-Math.PI/2+(n%2?.6:0),this.officials.push(r),this.group.add(r)}),this.zone=Rf(24,i-.4,16756768),this.zone.position.copy(this.at(r-12.5,-i/2,K.top+.04)),this.group.add(this.zone),t.thieves.addZone(r-220,r+2,e.nameBn)}get blocking(){return!this.paid}get controlsTraffic(){return!0}stopLine(e){return e===1&&!this.paid?this.s-.3:null}get serviceTime(){return this.game.truck.frontS>this.s-nu.serveFrom?nu.serviceSeconds:1/0}served(){this.boomOpen=2.2}laneAt(e,t){return t===1&&e>this.s-150&&e<this.s+15?-this.game.track.halfWidth(this.s)/2:null}visibleRange(){return[this.s-750,this.s+120]}update(e){this.t+=e;let t=this.game,n=t.truck,r=this.s,i=n.frontS;if(this.zone.visible=!this.paid,this.paid||zf(this.zone,this.t,.2,.25),n.rumble=n.rumble||i>r-150&&i<r-55&&!this.paid,!this.jamSpawned&&t.state.phase===`HIGHWAY`&&i>r-nu.spawnDistance&&i<r-150){this.jamSpawned=!0;let e=nu.vehiclesMin+Math.floor(Math.random()*(nu.vehiclesMax-nu.vehiclesMin+1));t.traffic.spawnQueue(r,-t.track.halfWidth(r)/2,-t.track.laneD(r,Math.random()<.5),e)}if(!this.paid&&i>r-600&&i<r+5&&(t.hud.tollMode=!0),!this.paid&&!this.dialogOpen&&t.state.phase===`HIGHWAY`){if(!this.warned&&i>r-Jl.tollWarnDistance&&i<r&&(this.warned=!0,t.hud.warn(`{stop} সামনে টোল — গতি ২০-এর নিচে এনে থামুন`,`info`,4),t.sound.beep()),i>=r&&i<r+15){if(n.kmh>J.tollMaxSpeedKmh){t.gameOver(`toll`);return}n.clampFront(r-.05),n.stop(),this.openDialog()}else!t.modal&&Math.abs(n.speed)<Jl.stopSpeed&&i>r-25&&i<r&&!t.traffic.vehicleBetween(i,r+2,n.d)&&this.openDialog()}this.boomOpen=Math.max(0,this.boomOpen-e);let a=this.paid||this.boomOpen>0;(a?this.boomT<1:this.boomT>0)&&(this.boomT=Math.min(1,Math.max(0,this.boomT+(a?e*(this.paid?.9:2.2):-e*1.2))),this.boomPivot.rotation.z=this.boomT*this.boomT*(3-2*this.boomT)*(Math.PI/2-.1)),this.officials[0].rotation.z=this.paid?Math.sin(this.t*5)*.08:0}openDialog(){let e=this.game;this.dialogOpen=!0,e.truck.stop();let t=this.event.type===`roadTax`;e.requestPayment({kind:`toll`,titleBn:t?`সরকারি সড়ক কর`:this.event.nameBn,messageBn:t?`বৈধ কর — রশিদ দেওয়া হবে।`:`বৈধ টোল — সরকারি রশিদসহ।`,lines:[{category:t?`ROAD_TAX`:`TOLL`,amount:this.fee,labelBn:t?`সড়ক কর (ট্রাক)`:this.event.type===`bridgeToll`?`সেতু টোল (মাঝারি ট্রাক)`:`সড়ক টোল (ট্রাক)`}],locationBn:this.event.nameBn,onPaid:()=>{this.paid=!0,this.resolved=!0,this.dialogOpen=!1,e.sound.beep()}})}},im=-300,am=2,om=40,sm=iu.lanesPerSide*iu.laneWidth,cm=iu.openLanes*iu.laneWidth+.3-1.25,lm=class{constructor(e){q(this,`route`,void 0),q(this,`length`,void 0),q(this,`bridges`,[]),q(this,`limits`,[]),q(this,`propBlocks`,[]),q(this,`cx`,void 0),q(this,`el`,void 0),this.route=e,this.length=e.length;let t=[[-1e3,e.highwayStartS+150]];for(let n of e.events){if(n.type===`farm`)continue;let e=n.s+K.straightAfter;if((n.type===`bridgeToll`||n.type===`roadToll`||n.type===`roadTax`)&&n.bridge){let t=n.s+n.bridge.offset,r=K.bridgeStyles[n.bridge.style];this.bridges.push({start:t,end:t+n.bridge.length,style:n.bridge.style,nameBn:n.bridge.nameBn,deck:r.deck,ramp:r.ramp}),e=t+n.bridge.length+r.ramp+60}n.type===`market`&&(e=this.length+2e3),t.push([n.s-K.straightBefore,e])}t.push([e.cityStartS-200,this.length+2e3]),t.sort((e,t)=>e[0]-t[0]);let n=[];for(let e of t){let t=n[n.length-1];t&&e[0]<=t[1]?t[1]=Math.max(t[1],e[1]):n.push([e[0],e[1]])}let r=[];for(let e=0;e+1<n.length;e++){let t=n[e][1],i=n[e+1][0],a=i-t;if(a<150)continue;let o=Math.max(1,Math.round(a/K.bendLength)),s=a/o,c=Math.min(K.bendMaxAmp,s*K.bendAmpRatio,s*s/(59*K.bendMinRadius))*(e%2?-1:1);r.push({a:t,b:i,amp:c,n:o,phase:Math.sin(t*12.9898)*43758.5453%Math.PI})}let i=Math.ceil((this.length+1500-im)/am)+1;this.cx=new Float32Array(i),this.el=new Float32Array(i);for(let e=0;e<i;e++){let t=im+e*am,n=0;for(let e of r){if(t<=e.a||t>=e.b)continue;let r=(t-e.a)/(e.b-e.a),i=Math.sin(Math.PI*r);n=e.amp*i*i*Math.sin(2*Math.PI*e.n*r+e.phase);break}this.cx[e]=n;let i=0;for(let e of this.bridges){let n=e.ramp;if(t>=e.start-n&&t<=e.end+n){let r;r=t<e.start?Gd(e.start-n,e.start,t):t>e.end?1-Gd(e.end,e.end+n,t):1,i=Math.max(i,r*e.deck)}}this.el[e]=i}}sample(e,t){let n=Ud((t-im)/am,0,e.length-1.001),r=Math.floor(n),i=n-r;return e[r]*(1-i)+e[r+1]*i}centerX(e){return this.sample(this.cx,e)}elevation(e){return this.sample(this.el,e)}surfaceY(e){return this.elevation(e)+K.top}headingAt(e){return Math.atan2(this.centerX(e+2)-this.centerX(e-2),4)}slopeAt(e){return(this.elevation(e+2)-this.elevation(e-2))/4}halfWidth(e){let t=this.route.highwayStartS;return e<t-60?K.villageHalfWidth:e<t?K.villageHalfWidth+(K.highwayHalfWidth-K.villageHalfWidth)*Gd(t-60,t,e):K.highwayHalfWidth+(sm-K.highwayHalfWidth)*this.wideness(e)}wideness(e){let t=this.route.wide;return!t||e<t[0]-om||e>t[1]+om?0:Gd(t[0]-om,t[0],e)*(1-Gd(t[1],t[1]+om,e))}isWide(e){let t=this.route.wide;return!!t&&e>=t[0]&&e<=t[1]}laneD(e,t){return this.wideness(e)>.5?iu.laneWidth/2:(t?.75:.25)*K.highwayHalfWidth}isJunction(e){return this.route.events.some(t=>t.type===`junction`&&Math.abs(e-t.s)<au.crossHalfWidth+1)}isBroken(e){return this.route.broken.some(([t,n])=>e>=t&&e<=n)}isVillage(e){return e<this.route.highwayStartS-30}bridgeAt(e){return this.bridges.find(t=>e>=t.start&&e<=t.end)}isRiver(e,t=80){return this.bridges.some(n=>e>=n.start-t&&e<=n.end+t)}zone(e){return e<this.route.highwayStartS?`village`:this.isRiver(e)?`river`:e>=this.route.cityStartS?`city`:this.route.townZones.some(([t,n])=>e>=t&&e<=n)?`town`:`rural`}lateralRange(e){let t;t=this.bridgeAt(e)?this.halfWidth(e)+1-1.35:this.elevation(e)>1.5?this.halfWidth(e)+K.shoulder-.8:this.isVillage(e)?this.halfWidth(e)+5:K.hardLimit;let n=this.route.wide;if(n&&e>n[0]-60&&e<n[1]+60){let r=Gd(n[0]-60,n[0]+10,e)*(1-Gd(n[1]-10,n[1]+60,e));t+=(cm-t)*r}let r=-t,i=t;for(let t of this.limits)if(e>=t.from&&e<=t.to){let[n,a]=t.range(e);r=Math.max(r,n),i=Math.min(i,a)}return[r,i]}isBlocked(e,t){for(let n of this.propBlocks)if(e>=n.from&&e<=n.to&&t>=n.dMin&&t<=n.dMax)return!0;return!1}point(e,t,n,r=0){return n.set(this.centerX(e)+t,this.elevation(e)+r,-e)}},um=[[`মায়ের দোয়া`],[`দেখলে হবে`,`খরচ আছে`],[`১০০ হাত`,`দূরে থাকুন`],[`ব্রেক নাই`,`দোয়া আছে`],[`হর্ন দিন`,`সাইড পাবেন (হয়তো)`],[`রাস্তা আমার`,`বাপের`],[`টাকা নাই`,`ভাব আছে`],[`ধীরে চলুন`,`বউ অপেক্ষায়`],[`জাতে মাতাল`,`তালে ঠিক`],[`ওভারটেক করলে`,`খবর আছে`],[`আমি তোমার`,`পিছে পিছে`],[`জ্যামের রাজা`],[`লাইসেন্স?`,`বাড়িতে রাখা`],[`চাঁদা দিয়ে`,`আসছি`],[`দুষ্টু ছেলে`,`ধাক্কা দিও না`],[`চলিলাম`,`দুবাই {plane}`],[`সুপার ফাস্ট`,`(মাঝে মাঝে)`],[`নো টেনশন`,`পরিবহন`]],dm=[`পঙ্খীরাজ এক্সপ্রেস`,`তুফান মেইল`,`ঝড়ের পাখি পরিবহন`,`রকেট সার্ভিস (ডিরেক্ট)`,`দুর্বার গতি ট্রাভেলস`,`বেপরোয়া এক্সপ্রেস`,`ভাই ভাই পরিবহন`,`বাবার দোয়া ট্রান্সপোর্ট`,`সোনার তরী কোচ`,`চিতা বাঘ লাইন্স`],fm=[`নতুন ড্রাইভার — দোয়া রাখবেন`,`বেবি অন বোর্ড (বড় বেবি)`,`জ্যামে বসে লেখা`,`হর্ন নয়, হৃদয় দিয়ে চালান`,`পিছনে তাকাবেন না`,`ডেঞ্জার: শ্বশুরের গাড়ি`],pm=[[`#e63946`,`#ffd166`,`#1d3557`,`#ffffff`],[`#2a9d8f`,`#f4a261`,`#ffffff`,`#264653`],[`#ffd166`,`#e63946`,`#1d3557`,`#06d6a0`],[`#1d3557`,`#ffd166`,`#ffffff`,`#e63946`],[`#7b2cbf`,`#ffca3a`,`#ffffff`,`#ff595e`],[`#06d6a0`,`#118ab2`,`#073b4c`,`#ffd166`]];function mm(e,t,n,r,i,a){e.fillStyle=i;for(let i=0;i<6;i++){let a=i/6*Math.PI*2;e.beginPath(),e.ellipse(t+Math.cos(a)*r*.6,n+Math.sin(a)*r*.6,r*.5,r*.28,a,0,Math.PI*2),e.fill()}e.fillStyle=a,e.beginPath(),e.arc(t,n,r*.3,0,Math.PI*2),e.fill()}function hm(e,t,n,r){for(e.font=`700 ${r}px ${pd}`;gd(e,t)>n&&r>10;)r-=2,e.font=`700 ${r}px ${pd}`;return r}function gm(e,t){let[n,r,i,a]=pm[t%pm.length],o=xu(t*31+7);return vd(384,192,(t,s,c)=>{t.fillStyle=n,t.fillRect(0,0,s,c);for(let[e,n]of[[0,1],[c,-1]]){t.fillStyle=r,t.fillRect(0,n>0?0:c-16,s,16),t.fillStyle=a;for(let r=0;r<s;r+=20)t.beginPath(),t.moveTo(r,e),t.lineTo(r+10,e+n*16),t.lineTo(r+20,e),t.fill()}for(let[e,n]of[[26,46],[s-26,46],[26,c-46],[s-26,c-46]])mm(t,e,n,16+o()*4,a,r);t.fillStyle=`rgba(255,255,255,0.88)`,t.beginPath(),t.roundRect(52,28,s-104,c-56,22),t.fill(),t.strokeStyle=i,t.lineWidth=4,t.stroke(),t.fillStyle=i===`#ffffff`?n:i,t.textAlign=`center`,t.textBaseline=`middle`,e.length===1?(hm(t,e[0],s-130,56),_d(t,e[0],s/2,c/2+4)):(hm(t,e[0],s-130,44),_d(t,e[0],s/2,c/2-24),t.fillStyle=`#c1121f`,hm(t,e[1],s-130,38),_d(t,e[1],s/2,c/2+26))})}function _m(e,t,n){let[r,i,a,o]=pm[(t+2)%pm.length];return vd(768,96,(t,s,c)=>{if(n)t.fillStyle=`#fffbea`,t.fillRect(0,0,s,c),t.strokeStyle=`#c1121f`,t.lineWidth=8,t.strokeRect(4,4,s-8,c-8),t.fillStyle=`#1d3557`;else{let e=t.createLinearGradient(0,0,s,0);e.addColorStop(0,r),e.addColorStop(.5,i),e.addColorStop(1,r),t.fillStyle=e,t.fillRect(0,0,s,c),mm(t,40,c/2,26,o,a),mm(t,s-40,c/2,26,o,a),t.fillStyle=a===`#ffffff`?`#1d3557`:a}t.textAlign=`center`,t.textBaseline=`middle`,hm(t,e,s-130,64),n?_d(t,e,s/2,c/2+4):(t.strokeStyle=`rgba(255,255,255,0.9)`,t.lineWidth=6,_d(t,e,s/2,c/2+4,!0))})}var vm=null,ym=null,bm=null,xm=e=>new xa({map:e,polygonOffset:!0,polygonOffsetFactor:-1});function Sm(){return vm??(vm=um.map((e,t)=>xm(gm(e,t))))}function Cm(){return ym??(ym=dm.map((e,t)=>xm(_m(e,t,!1))))}function wm(){return bm??(bm=fm.map((e,t)=>xm(_m(e,t,!0))))}var Tm={village:[],rural:[[`bus`,.35],[`truck`,.33],[`car`,.2],[`cng`,.12]],town:[[`bus`,.25],[`truck`,.2],[`car`,.15],[`cng`,.25],[`rickshaw`,.15]],river:[[`bus`,.45],[`truck`,.4],[`car`,.15]],city:[[`bus`,.18],[`car`,.22],[`cng`,.28],[`rickshaw`,.32]]},Em={bus:[55,72],truck:[45,60],car:[60,80],cng:[32,42],rickshaw:[10,15]},Dm=new Qi(.34,.2,.06),Om={bus:10,truck:8,car:12,cng:14,rickshaw:16},km=class{constructor(e){q(this,`game`,void 0),q(this,`group`,new Rn),q(this,`pool`,[]),q(this,`spawnTimer`,0),q(this,`headMat`,new $r({color:16774864})),q(this,`tailMat`,new $r({color:16722458})),q(this,`lightsOn`,!1),this.game=e;let t=lf(),n=0;for(let e of Object.keys(Om))for(let r=0;r<Om[e];r++){let r=Sf[e],i=new Rn;i.add(new U(Df(e,n++%5),t)),i.add(df(r.wid*1.3,r.len*1.1));let a=e===`rickshaw`?.9:e===`cng`?.7:1,o=new Rn;for(let t of e===`rickshaw`||e===`cng`?[0]:[-r.wid*.34,r.wid*.34]){let e=new U(Dm,this.headMat);e.position.set(t,a,-r.len/2-.04);let n=new U(Dm,this.tailMat);n.position.set(t,a,r.len/2+.04),o.add(e,n)}o.visible=!1,o.name=`lamps`,i.add(o);let s=this.buildArt(e);i.add(s.group),i.visible=!1,this.group.add(i),this.pool.push({active:!1,kind:e,mesh:i,s:0,d:0,targetD:0,speed:0,cruise:0,dir:1,len:r.len,wid:r.wid,heavy:e===`bus`||e===`truck`,overtaker:!1,overtakeState:0,stalled:0,hitCooldown:0,hop:0,yieldTimer:0,homeD:0,honks:0,honkTimer:0,servedS:-1/0,serve:0,pinUntil:-1/0,art:s.group,rear:s.rear,sides:s.sides})}}buildArt(e){let t=new Rn,n=(e,t)=>new U(new la(e,t),Sm()[0]),r={bus:{rear:[2.2,.9,0,2,5.52],side:[8.5,.5,1.28,1.02,0]},truck:{rear:[2.2,1.2,0,2.6,4.12],side:[5.2,.75,1.27,2.7,1.2]},cng:{rear:[1.2,.42,0,.62,1.31]},rickshaw:{rear:[.9,.5,0,1.25,.87]},car:{rear:[1.2,.2,0,.98,2.21]}}[e],[i,a,o,s,c]=r.rear,l=n(i,a);l.position.set(o,s,c),t.add(l);let u=[];if(r.side){let[e,i,a,o,s]=r.side;for(let r of[-1,1]){let c=n(e,i);c.position.set(r*a,o,s),c.rotation.y=Math.PI/2*r,u.push(c),t.add(c)}}return{group:t,rear:l,sides:u}}paint(e){let t=e=>e[Math.floor(Math.random()*e.length)];e.rear&&(e.rear.material=e.kind===`car`?t(wm()):t(Sm()));let n=t(Cm());for(let t of e.sides)t.material=n}honk(e){let t=this.game,n=t.truck,r={small:0,heavy:0,stubborn:null};for(let i of this.pool){if(!i.active||i.stalled>0)continue;if(i.dir===-1){i.overtaker&&i.overtakeState===1&&i.s-n.s<320&&(i.overtakeState=2,i.targetD=t.track.laneD(i.s,!1));continue}let a=i.s-n.s;if(a<=0||a>140||Math.abs(i.d-n.d)>2.6||i.yieldTimer>0)continue;let o=t.track.isWide(i.s);if(i.speed<1||o&&i.heavy)continue;if(i.heavy&&e===`tap`&&(i.honks++,i.honkTimer=Xl.heavyHonkWindow,i.honks<Xl.heavyHonks)){r.stubborn={kind:i.kind,count:i.honks};continue}let s=t.track.laneD(i.s,!1),c=t.track.laneD(i.s,!0),l=o?-(iu.openLanes*iu.laneWidth+.45):i.d>-(s+c)/2?-c:-s;this.pool.some(e=>e!==i&&e.active&&e.dir===1&&Math.abs(e.d-l)<1.6&&Math.abs(e.s-i.s)<(e.len+i.len)/2+6)||(i.homeD=i.d,i.targetD=l,i.yieldTimer=8,i.honks=0,i.heavy?r.heavy++:r.small++)}return r}setLights(e){let t=e>.35;if(t!==this.lightsOn){this.lightsOn=t;for(let e of this.pool)e.mesh.getObjectByName(`lamps`).visible=t}}reset(){for(let e of this.pool)e.active=!1,e.mesh.visible=!1}activeCount(e,t){let n=0;for(let r of this.pool)r.active&&r.dir===e&&r.s>t&&n++;return n}excluded(e){for(let t of this.game.pieces)if(!(!t.blocking||t.allowsQueue||t.controlsTraffic)&&e>t.s-230&&e<t.s+40)return!0;return!1}nextBlockingS(e){let t=1/0;for(let n of this.game.pieces)n.blocking&&!n.controlsTraffic&&n.s>e&&n.s<t&&(t=n.s);return t}stopLineAhead(e){let t=1/0;for(let n of this.game.pieces){if(!n.blocking||n.controlsTraffic||n.s<=e)continue;let r=n.s-n.queueGap;r<t&&(t=r)}return t}stopLineBehind(e){let t=-1/0;for(let n of this.game.pieces){if(!n.blocking||!n.allowsQueue||n.controlsTraffic||n.s>=e)continue;let r=n.s+n.queueGap;r>t&&(t=r)}return t}trySpawn(e){let t=this.game,n=t.truck.s,r=t.track.zone(n+150)===`city`?140:Xl.spawnAheadMin,i=n+r+Math.random()*(Xl.spawnAheadMax-r);if(i>t.track.length-300||this.excluded(i))return;for(let e of t.pieces)if(e.controlsTraffic&&i>e.s-150&&i<e.s+100)return;if(e===-1&&this.nextBlockingS(n)<i+60)return;let a=Tm[t.track.zone(i)];if(!a.length)return;let o=Math.random(),s=a[0][0];for(let[e,t]of a)if((o-=t)<=0){s=e;break}s===`rickshaw`&&t.track.wideness(i)>0&&(s=`cng`);let c=this.pool.find(e=>!e.active&&e.kind===s);if(!c)return;let l=s===`rickshaw`||s===`cng`||Math.random()<.5,u=t.track.laneD(i,l),d=e===1?-u:u;for(let t of this.pool)if(t.active&&t.dir===e&&Math.abs(t.d-d)<3&&Math.abs(t.s-i)<30)return;this.activate(c,i,d,e),c.overtaker=e===-1&&c.heavy&&!l&&Math.random()<Xl.overtakerChance}activate(e,t,n,r){let[i,a]=Em[e.kind];e.active=!0,e.s=t,e.d=e.targetD=n,e.dir=r,e.cruise=e.speed=(i+Math.random()*(a-i))/3.6,e.overtaker=!1,e.overtakeState=0,e.stalled=0,e.hitCooldown=0,e.hop=0,e.yieldTimer=0,e.homeD=n,e.honks=0,e.honkTimer=0,e.servedS=-1/0,e.serve=0,e.pinUntil=-1/0,e.mesh.visible=!0,this.paint(e),e.mesh.rotation.set(0,r===1?0:Math.PI,0)}spawnQueue(e,t,n,r){let i=[`truck`,`car`,`bus`,`cng`,`car`,`truck`,`cng`,`car`],a=Math.floor(Math.random()*i.length),o=e-.3,s=0;for(let c=0;c<r;c++){let r=i[(a+c)%i.length],l=this.pool.find(e=>!e.active&&e.kind===r)??this.pool.find(e=>!e.active&&e.kind!==`rickshaw`);if(!l)break;let u=o-l.len/2,d=this.pool.find(e=>e.active&&e.dir===1&&Math.abs(e.d-t)<2.5&&Math.abs(e.s-u)<(e.len+l.len)/2+1);if(d){if(o=d.s-d.len/2-2.4,c--,o<e-120)break}else this.activate(l,u,t,1),l.speed=0,l.homeD=n,l.pinUntil=e+40,o-=l.len+2.2+Math.random()*.8,s++}return s}vehicleBetween(e,t,n){return this.pool.some(r=>r.active&&r.dir===1&&Math.abs(r.d-n)<2.4&&r.s-r.len/2<t&&r.s+r.len/2>e)}update(e){let t=this.game;if(t.state.phase!==`HIGHWAY`)return;let n=t.truck,r=t.track.zone(n.s+200),[i,a]=Xl.density[r]??[0,0];this.spawnTimer-=e,this.spawnTimer<=0&&(this.spawnTimer=r===`city`||r===`town`?.15:.3,this.activeCount(1,n.s+20)<i&&this.trySpawn(1),this.activeCount(-1,n.s+20)<a&&this.trySpawn(-1));let o=null,s=null;for(let r of this.pool){if(!r.active)continue;if(o=null,s=null,r.stalled>0)r.stalled-=e,r.speed=Kd(r.speed,0,3,e);else{let n=r.cruise;t.track.isBroken(r.s)&&(n=Math.min(n,tu.maxKmh/3.6)),o=null;let i=1/0;for(let e of this.pool){if(e===r||!e.active||e.dir!==r.dir||Math.abs(e.d-r.d)>1.6)continue;let t=(e.s-r.s)*r.dir-(e.len+r.len)/2;t>-2&&t<i&&(i=t,o=e)}o&&i<40&&(n=Math.min(n,Math.max(0,o.speed+(i-2.5)*.35)));let a=r.s+r.dir*r.len/2;if(r.dir===1){let e=this.stopLineAhead(r.s)-a;e<30&&(n=Math.min(n,Math.max(0,e-1.5)*.6))}else{let e=a-this.stopLineBehind(r.s);e<30&&(n=Math.min(n,Math.max(0,e-1.5)*.6))}s=null;for(let i of t.pieces){if(!i.controlsTraffic)continue;let t=i.stopLine(r.dir);if(t===null||r.servedS===i.s)continue;let o=(t-a)*r.dir;if(o<-.5||o>45)continue;let c=i.serviceTime;!c&&r.speed>3&&o<r.speed*r.speed/5*Wl.speedScale||(n=Math.min(n,Math.max(0,o-.3)*.35),(s===null||o<(s-a)*r.dir)&&(s=t),c&&o<1.2&&r.speed<.5&&(r.serve+=e)>=c&&(r.servedS=i.s,r.serve=0,i.served()))}r.speed=Kd(r.speed,n,n<r.speed?3.5:1.2,e)}if(r.overtaker){let e=r.s-n.s;r.overtakeState===0&&e<430&&e>260?(r.overtakeState=1,r.targetD=-t.track.laneD(r.s,!1),t.sound.otherHorn(),t.hud.toast(`{warning} উল্টো দিক থেকে বাস আপনার লেনে ওভারটেক করছে!`)):r.overtakeState===1&&e<200&&(r.overtakeState=2,r.targetD=t.track.laneD(r.s,!1))}if(r.honkTimer>0&&(r.honkTimer-=e)<=0&&(r.honks=0),r.yieldTimer>0&&(r.yieldTimer-=e,r.speed=Math.min(r.speed,r.cruise*.7),(r.yieldTimer<=0||r.s<n.s-12)&&(r.yieldTimer=0,r.s<n.s-12?r.targetD=r.homeD:r.yieldTimer=1)),r.yieldTimer<=0&&r.overtakeState!==1&&r.stalled<=0){t.track.wideness(r.s+30*r.dir)>.5&&(r.homeD=-r.dir*t.track.laneD(r.s+30*r.dir,!1));let e=null;for(let n of t.pieces)if(n.controlsTraffic&&(e=n.laneAt(r.s,r.dir))!==null)break;r.targetD=e??r.homeD}r.d=Kd(r.d,r.targetD,r.overtaker?2.6:r.yieldTimer>0?2.2:1.6,e),r.s+=r.speed*Wl.speedScale*r.dir*e,r.stalled<=0&&(s!==null&&(s-(r.s+r.dir*r.len/2))*r.dir<0&&(r.s=s-r.dir*r.len/2,r.speed=0),o&&(o.s-r.s)*r.dir-(o.len+r.len)/2<.8&&Math.abs(o.d-r.d)<1.6&&(r.s=o.s-r.dir*((o.len+r.len)/2+.8),r.speed=Math.min(r.speed,o.speed))),r.pinUntil>-1/0&&r.s>r.pinUntil&&(r.pinUntil=-1/0),r.hitCooldown=Math.max(0,r.hitCooldown-e),r.hop>0&&(r.hop=Math.max(0,r.hop-e));let i=r.s-n.s;r.art.visible=i>-40&&i<170;let a=r.pinUntil>r.s;if(i<-Xl.despawnBehind||!a&&(i>Xl.spawnAheadMax+80||this.excluded(r.s)&&Math.abs(i)>120)){r.active=!1,r.mesh.visible=!1;continue}let c=t.track.surfaceY(r.s)+Math.sin(Math.min(1,r.hop)*Math.PI)*.6;r.mesh.position.set(t.track.centerX(r.s)+r.d,c,-r.s),r.mesh.rotation.y=(r.dir===1?0:Math.PI)-t.track.headingAt(r.s)-(r.targetD-r.d)*.05*r.dir,this.collide(r)}}collide(e){let t=this.game,n=t.truck,r=n.heading-t.track.headingAt(n.s),i=ql.length/2,a=ql.width/2+Math.abs(Math.sin(r))*i*.8,o=e.s-n.s,s=e.d-n.d,c=i+e.len/2-Math.abs(o),l=a+e.wid/2-Math.abs(s);if(c<=0||l<=0)return;if(e.dir===1&&o>0&&c<l&&n.kmh-e.speed*3.6<12){n.clampFront(e.s-e.len/2-.2),n.speed=Math.min(n.speed,e.speed);return}if(e.hitCooldown>0)return;e.hitCooldown=1.2,t.stats.collisions++;let u=n.kmh,d=e.speed*3.6*e.dir,f=J.cargoDamagePct;if(c<l){let r=e.dir===-1?Math.max(0,u)+e.speed*3.6:u-d;if(e.dir===-1&&e.heavy&&r>=Xl.headOnGameOverKmh){t.cam.shake(2.5),t.sound.crash(1.2),t.gameOver(`crash`);return}o>0?(t.cam.shake(Ud(r/60,.3,1.6)),t.sound.crash(Ud(r/80,.3,1)),n.speed=e.dir===1?Math.max(0,e.speed*.6):-1.5,n.clampFront(e.s-e.len/2-.2),t.damageCargo(e.dir===-1?f.headOnLight:Ud(r*f.rearEndPerKmh,.3,f.rearEndMax),`সংঘর্ষে মাল নষ্ট`,`মহাসড়ক`),e.heavy?e.speed+=2:this.knockAside(e,n.d),t.hud.toast(`{crash} ধাক্কা! মাল পড়ে গেল`)):(t.cam.shake(.4),t.sound.crash(.3),e.speed=Math.max(0,n.speed-2),n.speed+=1.5)}else{let r=Math.sign(n.d-e.d||-1);n.shiftLateral(r*Math.min(l,.8)),n.speed*=.85,t.cam.shake(.5),t.sound.crash(.25),t.damageCargo(f.sideSwipe,`ঘষা লেগে মাল নষ্ট`,`মহাসড়ক`),e.heavy?e.targetD=e.d-r*.8:this.knockAside(e,n.d)}}knockAside(e,t){let n=this.game.track.halfWidth(e.s);e.targetD=(e.d<t?-1:1)*(n+K.shoulder-.4),e.stalled=4,e.hop=1}},Am=class{constructor(){q(this,`items`,new Map)}get totalKg(){let e=0;for(let t of this.items.values())e+=t.kgBought-t.kgLost;return e}get boughtKg(){let e=0;for(let t of this.items.values())e+=t.kgBought;return e}kgOf(e){let t=this.items.get(e);return t?t.kgBought-t.kgLost:0}add(e,t,n){let r=this.items.get(e);r||(r={veg:e,kgBought:0,kgLost:0,purchaseValue:0},this.items.set(e,r)),r.kgBought+=t,r.purchaseValue+=t*n}avgPricePerKg(){let e=0,t=0;for(let n of this.items.values()){let r=n.kgBought-n.kgLost;e+=r*(n.purchaseValue/n.kgBought),t+=r}return t>0?e/t:0}removeProportional(e){let t=this.totalKg;if(t<=0||e<=0)return{kg:0,value:0};let n=Math.min(e,t),r=0;for(let e of this.items.values()){let i=(e.kgBought-e.kgLost)/t*n;e.kgLost+=i,r+=i*(e.purchaseValue/e.kgBought)}return{kg:n,value:r}}crateColors(e){let t=this.totalKg,n=[];if(t<=0)return n;for(let r of this.items.values()){let i=Math.round((r.kgBought-r.kgLost)/t*e);for(let t=0;t<i&&n.length<e;t++)n.push(Fu[r.veg].color)}for(;n.length<e&&this.items.size;)n.push(Fu[[...this.items.keys()][0]].color);return n}},jm={MENU:[`FARM`],FARM:[`HIGHWAY`,`MENU`],HIGHWAY:[`ARRIVAL`,`GAME_OVER`,`MENU`],ARRIVAL:[`RESULT`],RESULT:[`MENU`,`FARM`],GAME_OVER:[`MENU`,`FARM`]},Mm=class{constructor(){q(this,`current`,`MENU`),q(this,`listeners`,[]),q(this,`paused`,!1)}get phase(){return this.current}set(e){if(e===this.current)return;if(!jm[this.current].includes(e))throw Error(`Invalid phase transition ${this.current} -> ${e}`);let t=this.current;this.current=e;for(let n of this.listeners)n(e,t)}force(e){let t=this.current;if(this.current=e,t!==e)for(let n of this.listeners)n(e,t)}onChange(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(t=>t!==e)}}},Nm={throttle:0,brake:0,steer:0,handbrake:!1},Pm=class{constructor(){q(this,`throttle`,0),q(this,`brake`,0),q(this,`steer`,0),q(this,`handbrake`,!1),q(this,`horn`,!1),q(this,`touch`,{left:!1,right:!1,gas:!1,brake:!1,horn:!1}),q(this,`keys`,new Set),q(this,`listeners`,{}),window.addEventListener(`keydown`,e=>{let t=e.target;(!t||t.tagName!==`INPUT`&&t.tagName!==`TEXTAREA`&&t.tagName!==`SELECT`||e.code.startsWith(`Key`))&&([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`Space`].includes(e.code)&&e.preventDefault(),e.repeat||(e.code===`KeyH`&&this.emit(`horn`),e.code===`KeyC`&&this.emit(`camera`),e.code===`KeyM`&&this.emit(`mute`),(e.code===`KeyP`||e.code===`Escape`)&&this.emit(`pause`),(e.code===`Enter`||e.code===`NumpadEnter`)&&this.emit(`confirm`)),this.keys.add(e.code))}),window.addEventListener(`keyup`,e=>this.keys.delete(e.code)),window.addEventListener(`blur`,()=>this.keys.clear())}on(e,t){var n;((n=this.listeners)[e]??(n[e]=[])).push(t)}emit(e){for(let t of this.listeners[e]??[])t()}k(...e){return e.some(e=>this.keys.has(e))}update(e){let t=this.k(`KeyW`,`ArrowUp`)||this.touch.gas,n=this.k(`KeyS`,`ArrowDown`)||this.touch.brake,r=this.k(`KeyA`,`ArrowLeft`)||this.touch.left,i=this.k(`KeyD`,`ArrowRight`)||this.touch.right;this.throttle=+!!t,this.brake=+!!n,this.handbrake=this.k(`Space`),this.horn=this.k(`KeyH`)||this.touch.horn;let a=!!i-+!!r,o=a===0||Math.sign(a)!==Math.sign(this.steer)?ql.steerReturn:ql.steerRise,s=a-this.steer,c=o*e;this.steer=Math.abs(s)<=c?a:this.steer+Math.sign(s)*c}},Fm=class{constructor(){q(this,`entries`,[]),q(this,`nextId`,1)}add(e){let t={...e,id:this.nextId++};return this.entries.push(t),t}sum(e={}){let t=0;for(let n of this.entries)e.categories&&!e.categories.includes(n.category)||e.cash!==void 0&&n.cash!==e.cash||(t+=n.amount);return t}kg(e={}){let t=0;for(let n of this.entries)e.categories&&!e.categories.includes(n.category)||e.cash!==void 0&&n.cash!==e.cash||(t+=n.kg);return t}cashSpent(){return this.sum({cash:!0})}extortionTotal(){return this.sum({categories:[`CHANDA`,`PENALTY`]})}};function Im(e,t,n,r){let i=e.sum({categories:[`PURCHASE`]}),a=e.cashSpent(),o=e.sum({cash:!1}),s=e.sum({categories:[`TOLL`,`ROAD_TAX`]}),c=e.sum({categories:[`CHANDA`]}),l=e.sum({categories:[`PENALTY`]}),u=e.sum({categories:[`CARGO_LOSS`]}),d=r===`arrived`?t.totalKg:0,f=t.boughtKg,p=a-i,m=[],h=0,g=null,_=-1;for(let e of t.items.values()){let t=Fu[e.veg],n=r===`arrived`?e.kgBought-e.kgLost:0,a=e.purchaseValue+(i>0?p*e.purchaseValue/i:0),o=n>0?a/n:NaN;m.push({veg:e.veg,kgBought:e.kgBought,kgDelivered:n,farmPrice:e.purchaseValue/e.kgBought,landedPerKg:o,marketPrice:t.karwanBazarPricePerKg,diff:t.karwanBazarPricePerKg-o}),h+=n*t.karwanBazarPricePerKg,e.kgBought>_&&(_=e.kgBought,g=e.veg)}let v=c+l,y=e.sum({categories:[`CHANDA`,`PENALTY`],cash:!0}),b=e.kg({categories:[`CHANDA`,`PENALTY`],cash:!1});return{outcome:r,rows:m,breakdown:r===`arrived`?{purchaseDelivered:i-o,legal:s,chanda:c,penalty:l,cargoLoss:u}:{purchaseDelivered:0,legal:s,chanda:c,penalty:l,cargoLoss:u+i-o},purchase:i,totalCash:a,boughtKg:f,deliveredKg:d,avgFarmPerKg:f>0?i/f:0,landedPerKg:d>0?a/d:NaN,extortionPerKg:d>0?v/d:NaN,noExtortionPerKg:d+b>0?(a-y)/(d+b):NaN,avgMarketPerKg:d>0?h/d:0,revenue:h,profit:h-a,extortionTotal:v,topVeg:g,stats:n}}var Lm={throttle:0,brake:0,steer:0,handbrake:!0};function Rm(){return{barriersBroken:0,barriersPaid:0,slowHits:0,chasesEscaped:0,chasesCaught:0,collisions:0,highwayTime:0}}var zm=class{constructor(e,t,n,r){q(this,`debug`,void 0),q(this,`state`,new Mm),q(this,`input`,new Pm),q(this,`sound`,new du),q(this,`ledger`,new Fm),q(this,`cargo`,new Am),q(this,`cash`,0),q(this,`stats`,Rm()),q(this,`track`,void 0),q(this,`streamer`,void 0),q(this,`scenery`,void 0),q(this,`env`,void 0),q(this,`truckModel`,new Pf),q(this,`truck`,void 0),q(this,`cam`,void 0),q(this,`traffic`,void 0),q(this,`chase`,void 0),q(this,`pedestrians`,void 0),q(this,`slowZones`,void 0),q(this,`brokenRoads`,void 0),q(this,`thieves`,void 0),q(this,`clutter`,void 0),q(this,`weather`,new Hp),q(this,`pieces`,[]),q(this,`routePieces`,[]),q(this,`piecesGroup`,new Rn),q(this,`hud`,void 0),q(this,`buyPanel`,void 0),q(this,`chandaDialog`,void 0),q(this,`tollDialog`,void 0),q(this,`result`,void 0),q(this,`menu`,void 0),q(this,`pauseMenu`,void 0),q(this,`touch`,void 0),q(this,`modal`,!1),q(this,`wind`,0),q(this,`startId`,ku),q(this,`route`,Pu(ku)),q(this,`runTime`,0),q(this,`endTimer`,-1),q(this,`pendingOutcome`,null),q(this,`farmWallCooldown`,0),q(this,`wasHonking`,!1),q(this,`hornHeld`,0),q(this,`longHornSent`,!1),this.debug=r,this.track=new lm(this.route),this.env=new gp(e),this.streamer=new Jp(this.track),this.scenery=new em(this.track),this.truck=new If(this.track),this.cam=new qd(t),this.traffic=new km(this),this.chase=new Mf(this),this.pedestrians=new Tp(this),this.slowZones=new Fp(this),this.brokenRoads=new Kf(this),this.thieves=new dp(this),this.clutter=new ep(this.track),e.add(this.pedestrians.group,this.slowZones.group,this.brokenRoads.group,this.thieves.group,this.clutter.group),e.add(this.streamer.group,this.scenery.group,this.truckModel.root,this.traffic.group,this.chase.group,this.piecesGroup),this.hud=new sd(n,this),this.touch=new Hd(n,this.input),this.buyPanel=new Yu(n,this),this.chandaDialog=new Zu(n),this.tollDialog=new Vd(n),this.pauseMenu=new dd(n,{onResume:()=>this.togglePause(),onRestart:()=>this.start(this.startId),onHome:()=>this.goHome()}),this.result=new Bd(n,{onReplay:()=>this.start(this.startId),onHome:()=>this.goHome()}),this.menu=new ud(n,this.sound,e=>this.start(e)),fd(n),this.input.on(`camera`,()=>this.toggleCamera()),this.input.on(`mute`,()=>this.sound.toggleMute()),this.input.on(`pause`,()=>this.togglePause()),this.input.on(`confirm`,()=>{this.chandaDialog.isOpen?this.chandaDialog.pay():this.tollDialog.isOpen&&this.tollDialog.pay()}),this.weather.onThunder(e=>this.sound.thunder(e)),document.addEventListener(`visibilitychange`,()=>{document.hidden&&!this.state.paused&&this.togglePause()}),this.buildRun(),this.truck.reset(30,-1.6),this.cam.snap(this.truck)}buildRun(){for(let e of this.pieces)e.dispose();this.pieces=[],this.routePieces=[];let e=this.route;this.track=new lm(e),this.streamer.setTrack(this.track),this.scenery.setTrack(this.track),this.truck.setTrack(this.track),this.clutter.setTrack(this.track),this.slowZones.build(e.slowZones),this.brokenRoads.build(e.broken),this.thieves.reset();for(let t of e.events){let e;switch(t.type){case`farm`:e=new Gp(t,this);break;case`barrier`:e=new Uf(t,this),this.routePieces.push(e);break;case`roadTax`:case`roadToll`:case`bridgeToll`:if(e=new rm(t,this),this.routePieces.push(e),t.bridge){let e=new Gf(t,this);this.pieces.push(e),this.piecesGroup.add(e.group)}break;case`rail`:e=new Mp(t,this),this.routePieces.push(e);break;case`market`:e=new Jf(t,this),this.routePieces.push(e);break;case`roadworks`:e=new lp(t,this),this.routePieces.push(e);break;case`junction`:e=new op(t,this),this.routePieces.push(e)}this.pieces.push(e),this.piecesGroup.add(e.group)}}closeOverlays(){this.chandaDialog.hide(),this.tollDialog.hide(),this.buyPanel.hide(),this.pauseMenu.show(!1),this.result.hide()}start(e){this.startId=Ou.some(t=>t.id===e)?e:ku,this.route=Pu(this.startId),this.closeOverlays(),this.result.hide(),this.menu.show(!1),this.pauseMenu.show(!1),this.state.paused=!1,this.modal=!1,this.endTimer=-1,this.pendingOutcome=null,this.ledger=new Fm,this.cargo=new Am,this.cash=J.startingCash,this.stats=Rm(),this.runTime=0,this.chase.reset(),this.traffic.reset(),this.pedestrians.reset(),this.buildRun(),this.truck.reset(30,-1.6),this.truck.maxFrontS=this.route.highwayStartS-25,this.truck.loadFrac=0,this.truckModel.setCrates([]),this.cam.snap(this.truck),this.state.force(`FARM`),this.hud.setRoute(this.route),this.hud.show(!0),this.touch.show(!0),this.hud.warn(`{farm} ক্ষেতের পাশের সবুজ জায়গায় থেমে সবজি কিনুন`,`info`,4)}depart(){if(this.state.phase!==`FARM`||this.cargo.totalKg<=0)return;this.buyPanel.isOpen&&this.buyPanel.close(),this.state.set(`HIGHWAY`);let e=this.route.events.find(e=>e.type===`market`);this.truck.maxFrontS=(e?.s??this.track.length)+30,this.hud.warn(`{truck} ঢাকার পথে রওনা! সাবধানে চালান`,`good`,3)}goHome(){this.state.paused=!1,this.modal=!1,this.closeOverlays(),this.endTimer=-1,this.hud.show(!1),this.touch.show(!1),this.chase.reset(),this.traffic.reset(),this.thieves.reset(),this.state.force(`MENU`),this.menu.show(!0)}togglePause(){let e=this.state.phase;e!==`FARM`&&e!==`HIGHWAY`||this.modal&&!this.state.paused||(this.state.paused=!this.state.paused,this.pauseMenu.show(this.state.paused),this.state.paused&&this.sound.horn(!1))}toggleCamera(){this.cam.toggle(),this.truckModel.setCockpit(this.cam.mode===`cockpit`)}buy(e,t,n){let r=Fu[e],i=Math.floor(this.cash/r.farmPricePerKg);if(t=Math.min(t,i,J.truckCapacityKg-this.cargo.totalKg),t<=0)return;let a=t*r.farmPricePerKg;this.cash-=a,this.cargo.add(e,t,r.farmPricePerKg),this.ledger.add({category:`PURCHASE`,amount:a,cash:!0,kg:t,labelBn:`${r.nameBn} ${vu(t)}`,locationBn:n,t:this.runTime}),this.sound.coin(),this.hud.floatText(`${r.icon} +${vu(t)}`,`good`),this.refreshCrates()}estimatedRoadCost(){let e=0,t=0;for(let n of this.route.events)(n.type===`roadTax`||n.type===`roadToll`||n.type===`bridgeToll`)&&(e+=J.fees[n.feeKey]),n.type===`barrier`&&(t+=n.chanda);return{legal:e,chanda:t}}refreshCrates(){let e=this.cargo.totalKg,t=e>0?Math.max(1,Math.round(e/J.truckCapacityKg*54)):0;this.truckModel.setCrates(this.cargo.crateColors(t)),this.truck.loadFrac=e/J.truckCapacityKg}previewCharge(e){let t=Math.min(this.cash,e),n=this.cargo.avgPricePerKg();return{total:e,cashPart:t,kgTaken:n>0?Math.min(this.cargo.totalKg,(e-t)/n):0,cashBefore:this.cash}}requestPayment(e){this.modal=!0,this.truck.stop(),this.sound.horn(!1);let t=e.lines.reduce((e,t)=>e+t.amount,0);(e.kind===`chanda`?this.chandaDialog:this.tollDialog).show(e,this.previewCharge(t),()=>{this.settle(e),this.modal=!1,e.onPaid?.()})}settle(e){let t=this.cargo.totalKg,n=t>0?this.ledger.cashSpent()/t:0,r=0;for(let t of e.lines){let n=Math.min(this.cash,t.amount);n>0&&(this.cash-=n,this.ledger.add({category:t.category,amount:n,cash:!0,kg:0,labelBn:t.labelBn,locationBn:e.locationBn,t:this.runTime}));let i=t.amount-n,a=this.cargo.avgPricePerKg();if(i>.5&&a>0){let n=this.cargo.removeProportional(i/a);n.kg>0&&(r+=n.kg,this.ledger.add({category:t.category,amount:n.value,cash:!1,kg:n.kg,labelBn:`${t.labelBn} (মাল দিয়ে)`,locationBn:e.locationBn,t:this.runTime}))}}this.sound.coin(),this.refreshCrates();let i=this.cargo.totalKg,a=(i>0?this.ledger.cashSpent()/i:0)-n;a>.005&&this.hud.floatText(e.kind===`chanda`?`+${gu(a,2)} প্রতি কেজি দাম বাড়লো`:`+${gu(a,2)}/কেজি (বৈধ টোল)`,e.kind===`chanda`?`bad`:`legal`),r>0&&this.hud.toast(`{cabbage} নগদ শেষ — ${vu(r)} মাল নামিয়ে নিল`,3.5)}damageCargo(e,t,n){let r=this.cargo.removeProportional(this.cargo.totalKg*e/100);r.kg<=0||(this.ledger.add({category:`CARGO_LOSS`,amount:r.value,cash:!1,kg:r.kg,labelBn:t,locationBn:n,t:this.runTime}),this.hud.floatText(`-${vu(r.kg)} মাল নষ্ট`,`bad`),this.refreshCrates())}stealCargo(e,t){let n=this.cargo.removeProportional(e);return n.kg<=0?0:(this.ledger.add({category:`CARGO_LOSS`,amount:n.value,cash:!1,kg:n.kg,labelBn:`জ্যামে সবজি চুরি`,locationBn:t,t:this.runTime}),this.hud.floatText(`-${vu(n.kg)} সবজি চুরি!`,`bad`),this.sound.beep(),this.refreshCrates(),n.kg)}reactToHorn(e){if(e.heavy>0)this.hud.toast(`{bus} বড় গাড়িও অবশেষে সাইড দিল!`);else if(e.small>0)this.hud.toast(`{horn} সামনের গাড়ি সাইড দিল`);else if(e.stubborn){let t=e.stubborn.kind===`bus`?`বাস`:`ট্রাক`;this.hud.toast(`${t===`বাস`?`{bus}`:`{truck}`} ${t} সাইড দিচ্ছে না — আরও হর্ন দিন (${pu(e.stubborn.count)}/${pu(Xl.heavyHonks)}) বা লম্বা হর্ন`,2.5)}}startChase(e,t){this.chase.start(e,t)}openBuyPanel(e){this.modal=!0,this.truck.stop(),this.buyPanel.open(e)}onBuyPanelClosed(){this.modal=!1}gameOver(e){this.state.phase===`HIGHWAY`&&(this.state.set(`GAME_OVER`),this.truck.stop(),this.sound.horn(!1),this.chase.reset(),this.hud.warn(e===`crash`?`{crash} ভয়াবহ সংঘর্ষ!`:`{siren} টোল প্লাজা ভাঙার চেষ্টা — ট্রাক জব্দ!`,`danger`,3),e===`toll`&&this.sound.whistle(),this.pendingOutcome=e,this.endTimer=1.8)}arrive(){this.state.phase===`HIGHWAY`&&(this.state.set(`ARRIVAL`),this.sound.crowd(2),this.hud.warn(`{cart} কাওরান বাজারে পৌঁছেছেন!`,`good`,3),this.pendingOutcome=`arrived`,this.endTimer=2.6)}showResult(){let e=this.pendingOutcome??`arrived`;this.state.phase===`ARRIVAL`&&this.state.set(`RESULT`),this.hud.show(!1),this.touch.show(!1),this.result.show(Im(this.ledger,this.cargo,this.stats,e))}nextBlockingPiece(e){let t=null;for(let n of this.routePieces)n.blocking&&n.s>e-1&&(!t||n.s<t.s)&&(t=n);return t}nextPieceAhead(e){let t=null;for(let n of this.routePieces)n.s>e&&(!t||n.s<t.s)&&(t=n);return t}update(e){this.input.update(e);let t=this.state.phase,n=this.truck;if(!this.state.paused){if(t===`FARM`||t===`HIGHWAY`||t===`ARRIVAL`){this.runTime+=e,t===`HIGHWAY`&&(this.stats.highwayTime+=e),this.modal&&n.stop();let r=this.modal?Nm:t===`ARRIVAL`?Lm:this.input;n.rumble=!1,this.hud.tollMode=!1,this.wind=0,this.brokenRoads.update(),n.update(e,r);for(let t of this.pieces)t.update(e);this.traffic.update(e),this.chase.update(e),this.pedestrians.update(e),this.slowZones.update(e),this.thieves.update(e);let i=this.input.horn&&!this.modal&&t!==`ARRIVAL`;this.sound.horn(i),i&&t===`HIGHWAY`?(this.wasHonking||(this.thieves.scare()>0&&this.hud.toast(`{horn} হর্ন শুনে চোর পালালো!`),this.reactToHorn(this.traffic.honk(`tap`))),this.hornHeld+=e,this.hornHeld>=Xl.longHornSeconds&&!this.longHornSent&&(this.longHornSent=!0,this.reactToHorn(this.traffic.honk(`long`)))):(this.hornHeld=0,this.longHornSent=!1),this.wasHonking=i,this.farmWallCooldown-=e,t===`FARM`&&n.frontS>=n.maxFrontS-.5&&this.farmWallCooldown<=0&&(this.farmWallCooldown=4,this.hud.warn(this.cargo.totalKg>0?`{truck} "শহরের দিকে রওনা" চাপুন`:`{farm} আগে ক্ষেত থেকে সবজি কিনুন`,`info`,2.5))}else if(t===`MENU`){this.wind=0;for(let t of this.pieces)t.update(e)}this.endTimer>0&&(this.endTimer-=e,this.endTimer<=0&&this.showResult())}if(this.streamer.update(n.s)){let[e,t]=this.streamer.window;this.scenery.rebuild(e,t),this.clutter.rebuild(e,t)}for(let e of this.pieces){let[t,r]=e.visibleRange();e.group.visible=n.s>t&&n.s<r}this.truckModel.update(e,n.x,n.y,n.z,n.heading,n.pitch,n.speed,n.steer,n.yawRate,n.bump),this.cam.update(e,n,n.bump),this.state.paused||this.weather.update(e);let r=this.weather.look;this.env.apply(r,this.weather.flash),this.env.update(e,this.cam.camera,this.truckModel.root.position,r.rain),this.truckModel.setHeadlights(r.headlights),this.truck.wet=r.wet,this.traffic.setLights(r.headlights),this.sound.setRain(this.state.paused?0:r.rain),this.hud.update(e);let i=!this.state.paused&&(t===`FARM`||t===`HIGHWAY`||t===`ARRIVAL`);this.sound.setEngine(Math.min(1,Math.abs(n.speed)/32),i?this.input.throttle:0,i),this.sound.setWind(this.state.paused?0:this.wind),this.debug.set(`phase`,t+(this.state.paused?` (paused)`:``)+(this.modal?` [modal]`:``)),this.debug.set(`s/d`,`${n.s.toFixed(0)} / ${n.d.toFixed(1)}`),this.debug.set(`kmh`,n.kmh.toFixed(1)),this.debug.set(`chase`,this.chase.active?`${this.chase.meter.toFixed(1)}s gap ${this.chase.gap.toFixed(0)}m`:`-`)}},Bm=class{constructor(e,t){q(this,`renderer`,void 0),q(this,`el`,void 0),q(this,`visible`,!1),q(this,`frames`,0),q(this,`accum`,0),q(this,`worstDt`,0),q(this,`extra`,{}),this.renderer=t,this.el=document.createElement(`div`),this.el.className=`debug-overlay`,this.el.style.display=`none`,e.appendChild(this.el),window.addEventListener(`keydown`,e=>{e.code===`F3`&&(e.preventDefault(),this.toggle())}),new URLSearchParams(location.search).has(`debug`)&&this.toggle()}toggle(){this.visible=!this.visible,this.el.style.display=this.visible?`block`:`none`}set(e,t){this.extra[e]=t}update(e){if(this.frames++,this.accum+=e,this.worstDt=Math.max(this.worstDt,e),this.accum<.5)return;let t=this.frames/this.accum;if(this.visible){let e=this.renderer.info,n=[`fps   ${t.toFixed(1)}`,`worst ${(this.worstDt*1e3).toFixed(1)} ms`,`calls ${e.render.calls}  tris ${e.render.triangles}`,`geo ${e.memory.geometries}  tex ${e.memory.textures}`,`dpr ${this.renderer.getPixelRatio().toFixed(2)}`,...Object.entries(this.extra).map(([e,t])=>`${e} ${t}`)];this.el.textContent=n.join(`
`)}this.frames=0,this.accum=0,this.worstDt=0}},Vm=document.getElementById(`game-canvas`),Hm=document.getElementById(`ui-root`),Um=new Ul({canvas:Vm,antialias:!ld,powerPreference:`high-performance`});Um.outputColorSpace=Je;var Wm=new qn,Gm=new no(Gl.fov,1,Gl.near,Gl.far);function Km(){let e=window.innerWidth,t=window.innerHeight,n=ld?Gl.maxPixelRatioMobile:Gl.maxPixelRatio;Um.setPixelRatio(Math.min(window.devicePixelRatio||1,n)),Um.setSize(e,t,!1),Gm.aspect=e/t,Gm.updateProjectionMatrix()}window.addEventListener(`resize`,Km),window.addEventListener(`orientationchange`,()=>setTimeout(Km,250)),Km();async function qm(){try{await Promise.race([Promise.all([document.fonts.load(`700 40px "Hind Siliguri"`,`বাংলা`),document.fonts.load(`600 40px "Hind Siliguri"`,`বাংলা`),document.fonts.load(`400 40px "Hind Siliguri"`,`বাংলা`)]),new Promise(e=>setTimeout(e,4e3))])}catch{}await Wu(),document.getElementById(`boot`)?.remove();let e=new Bm(Hm,Um),t=new zm(Wm,Gm,Hm,e),n=performance.now();Um.setAnimationLoop(r=>{let i=Math.max(0,(r-n)/1e3);n=r,t.update(Math.min(i,Kl.maxDt)),Um.render(Wm,Gm),e.update(i)})}qm();