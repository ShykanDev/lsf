import{l as Wu,m as Hu,a1 as Xu,x as en,a2 as Yu,I as Ju,L as Zu,G as Mt,a3 as tl,y as el,S as nl,M as rl,N as sl,O as Ui,A as il,d as Fo,U as ol,c as Un,o as Qe,a as H,t as kn,r as zr,a4 as al,i as ul,a5 as ll,a6 as cl,g as qi,v as Bi,h as hl,e as fl,s as Kr,b as dl}from"./index-D22GgNmX.js";import{N as ml}from"./notyf.min-BkKPNi7r.js";var ji=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kt,Uo;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,m){function g(){}g.prototype=m.prototype,E.D=m.prototype,E.prototype=new g,E.prototype.constructor=E,E.C=function(y,T,I){for(var p=Array(arguments.length-2),kt=2;kt<arguments.length;kt++)p[kt-2]=arguments[kt];return m.prototype[T].apply(y,p)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,m,g){g||(g=0);var y=Array(16);if(typeof m=="string")for(var T=0;16>T;++T)y[T]=m.charCodeAt(g++)|m.charCodeAt(g++)<<8|m.charCodeAt(g++)<<16|m.charCodeAt(g++)<<24;else for(T=0;16>T;++T)y[T]=m[g++]|m[g++]<<8|m[g++]<<16|m[g++]<<24;m=E.g[0],g=E.g[1],T=E.g[2];var I=E.g[3],p=m+(I^g&(T^I))+y[0]+3614090360&4294967295;m=g+(p<<7&4294967295|p>>>25),p=I+(T^m&(g^T))+y[1]+3905402710&4294967295,I=m+(p<<12&4294967295|p>>>20),p=T+(g^I&(m^g))+y[2]+606105819&4294967295,T=I+(p<<17&4294967295|p>>>15),p=g+(m^T&(I^m))+y[3]+3250441966&4294967295,g=T+(p<<22&4294967295|p>>>10),p=m+(I^g&(T^I))+y[4]+4118548399&4294967295,m=g+(p<<7&4294967295|p>>>25),p=I+(T^m&(g^T))+y[5]+1200080426&4294967295,I=m+(p<<12&4294967295|p>>>20),p=T+(g^I&(m^g))+y[6]+2821735955&4294967295,T=I+(p<<17&4294967295|p>>>15),p=g+(m^T&(I^m))+y[7]+4249261313&4294967295,g=T+(p<<22&4294967295|p>>>10),p=m+(I^g&(T^I))+y[8]+1770035416&4294967295,m=g+(p<<7&4294967295|p>>>25),p=I+(T^m&(g^T))+y[9]+2336552879&4294967295,I=m+(p<<12&4294967295|p>>>20),p=T+(g^I&(m^g))+y[10]+4294925233&4294967295,T=I+(p<<17&4294967295|p>>>15),p=g+(m^T&(I^m))+y[11]+2304563134&4294967295,g=T+(p<<22&4294967295|p>>>10),p=m+(I^g&(T^I))+y[12]+1804603682&4294967295,m=g+(p<<7&4294967295|p>>>25),p=I+(T^m&(g^T))+y[13]+4254626195&4294967295,I=m+(p<<12&4294967295|p>>>20),p=T+(g^I&(m^g))+y[14]+2792965006&4294967295,T=I+(p<<17&4294967295|p>>>15),p=g+(m^T&(I^m))+y[15]+1236535329&4294967295,g=T+(p<<22&4294967295|p>>>10),p=m+(T^I&(g^T))+y[1]+4129170786&4294967295,m=g+(p<<5&4294967295|p>>>27),p=I+(g^T&(m^g))+y[6]+3225465664&4294967295,I=m+(p<<9&4294967295|p>>>23),p=T+(m^g&(I^m))+y[11]+643717713&4294967295,T=I+(p<<14&4294967295|p>>>18),p=g+(I^m&(T^I))+y[0]+3921069994&4294967295,g=T+(p<<20&4294967295|p>>>12),p=m+(T^I&(g^T))+y[5]+3593408605&4294967295,m=g+(p<<5&4294967295|p>>>27),p=I+(g^T&(m^g))+y[10]+38016083&4294967295,I=m+(p<<9&4294967295|p>>>23),p=T+(m^g&(I^m))+y[15]+3634488961&4294967295,T=I+(p<<14&4294967295|p>>>18),p=g+(I^m&(T^I))+y[4]+3889429448&4294967295,g=T+(p<<20&4294967295|p>>>12),p=m+(T^I&(g^T))+y[9]+568446438&4294967295,m=g+(p<<5&4294967295|p>>>27),p=I+(g^T&(m^g))+y[14]+3275163606&4294967295,I=m+(p<<9&4294967295|p>>>23),p=T+(m^g&(I^m))+y[3]+4107603335&4294967295,T=I+(p<<14&4294967295|p>>>18),p=g+(I^m&(T^I))+y[8]+1163531501&4294967295,g=T+(p<<20&4294967295|p>>>12),p=m+(T^I&(g^T))+y[13]+2850285829&4294967295,m=g+(p<<5&4294967295|p>>>27),p=I+(g^T&(m^g))+y[2]+4243563512&4294967295,I=m+(p<<9&4294967295|p>>>23),p=T+(m^g&(I^m))+y[7]+1735328473&4294967295,T=I+(p<<14&4294967295|p>>>18),p=g+(I^m&(T^I))+y[12]+2368359562&4294967295,g=T+(p<<20&4294967295|p>>>12),p=m+(g^T^I)+y[5]+4294588738&4294967295,m=g+(p<<4&4294967295|p>>>28),p=I+(m^g^T)+y[8]+2272392833&4294967295,I=m+(p<<11&4294967295|p>>>21),p=T+(I^m^g)+y[11]+1839030562&4294967295,T=I+(p<<16&4294967295|p>>>16),p=g+(T^I^m)+y[14]+4259657740&4294967295,g=T+(p<<23&4294967295|p>>>9),p=m+(g^T^I)+y[1]+2763975236&4294967295,m=g+(p<<4&4294967295|p>>>28),p=I+(m^g^T)+y[4]+1272893353&4294967295,I=m+(p<<11&4294967295|p>>>21),p=T+(I^m^g)+y[7]+4139469664&4294967295,T=I+(p<<16&4294967295|p>>>16),p=g+(T^I^m)+y[10]+3200236656&4294967295,g=T+(p<<23&4294967295|p>>>9),p=m+(g^T^I)+y[13]+681279174&4294967295,m=g+(p<<4&4294967295|p>>>28),p=I+(m^g^T)+y[0]+3936430074&4294967295,I=m+(p<<11&4294967295|p>>>21),p=T+(I^m^g)+y[3]+3572445317&4294967295,T=I+(p<<16&4294967295|p>>>16),p=g+(T^I^m)+y[6]+76029189&4294967295,g=T+(p<<23&4294967295|p>>>9),p=m+(g^T^I)+y[9]+3654602809&4294967295,m=g+(p<<4&4294967295|p>>>28),p=I+(m^g^T)+y[12]+3873151461&4294967295,I=m+(p<<11&4294967295|p>>>21),p=T+(I^m^g)+y[15]+530742520&4294967295,T=I+(p<<16&4294967295|p>>>16),p=g+(T^I^m)+y[2]+3299628645&4294967295,g=T+(p<<23&4294967295|p>>>9),p=m+(T^(g|~I))+y[0]+4096336452&4294967295,m=g+(p<<6&4294967295|p>>>26),p=I+(g^(m|~T))+y[7]+1126891415&4294967295,I=m+(p<<10&4294967295|p>>>22),p=T+(m^(I|~g))+y[14]+2878612391&4294967295,T=I+(p<<15&4294967295|p>>>17),p=g+(I^(T|~m))+y[5]+4237533241&4294967295,g=T+(p<<21&4294967295|p>>>11),p=m+(T^(g|~I))+y[12]+1700485571&4294967295,m=g+(p<<6&4294967295|p>>>26),p=I+(g^(m|~T))+y[3]+2399980690&4294967295,I=m+(p<<10&4294967295|p>>>22),p=T+(m^(I|~g))+y[10]+4293915773&4294967295,T=I+(p<<15&4294967295|p>>>17),p=g+(I^(T|~m))+y[1]+2240044497&4294967295,g=T+(p<<21&4294967295|p>>>11),p=m+(T^(g|~I))+y[8]+1873313359&4294967295,m=g+(p<<6&4294967295|p>>>26),p=I+(g^(m|~T))+y[15]+4264355552&4294967295,I=m+(p<<10&4294967295|p>>>22),p=T+(m^(I|~g))+y[6]+2734768916&4294967295,T=I+(p<<15&4294967295|p>>>17),p=g+(I^(T|~m))+y[13]+1309151649&4294967295,g=T+(p<<21&4294967295|p>>>11),p=m+(T^(g|~I))+y[4]+4149444226&4294967295,m=g+(p<<6&4294967295|p>>>26),p=I+(g^(m|~T))+y[11]+3174756917&4294967295,I=m+(p<<10&4294967295|p>>>22),p=T+(m^(I|~g))+y[2]+718787259&4294967295,T=I+(p<<15&4294967295|p>>>17),p=g+(I^(T|~m))+y[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(T+(p<<21&4294967295|p>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+I&4294967295}n.prototype.u=function(E,m){m===void 0&&(m=E.length);for(var g=m-this.blockSize,y=this.B,T=this.h,I=0;I<m;){if(T==0)for(;I<=g;)i(this,E,I),I+=this.blockSize;if(typeof E=="string"){for(;I<m;)if(y[T++]=E.charCodeAt(I++),T==this.blockSize){i(this,y),T=0;break}}else for(;I<m;)if(y[T++]=E[I++],T==this.blockSize){i(this,y),T=0;break}}this.h=T,this.o+=m},n.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;var g=8*this.o;for(m=E.length-8;m<E.length;++m)E[m]=g&255,g/=256;for(this.u(E),E=Array(16),m=g=0;4>m;++m)for(var y=0;32>y;y+=8)E[g++]=this.g[m]>>>y&255;return E};function o(E,m){var g=c;return Object.prototype.hasOwnProperty.call(g,E)?g[E]:g[E]=m(E)}function u(E,m){this.h=m;for(var g=[],y=!0,T=E.length-1;0<=T;T--){var I=E[T]|0;y&&I==m||(g[T]=I,y=!1)}this.g=g}var c={};function f(E){return-128<=E&&128>E?o(E,function(m){return new u([m|0],0>m?-1:0)}):new u([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return A;if(0>E)return D(d(-E));for(var m=[],g=1,y=0;E>=g;y++)m[y]=E/g|0,g*=4294967296;return new u(m,0)}function _(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return D(_(E.substring(1),m));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=d(Math.pow(m,8)),y=A,T=0;T<E.length;T+=8){var I=Math.min(8,E.length-T),p=parseInt(E.substring(T,T+I),m);8>I?(I=d(Math.pow(m,I)),y=y.j(I).add(d(p))):(y=y.j(g),y=y.add(d(p)))}return y}var A=f(0),R=f(1),C=f(16777216);r=u.prototype,r.m=function(){if(x(this))return-D(this).m();for(var E=0,m=1,g=0;g<this.g.length;g++){var y=this.i(g);E+=(0<=y?y:4294967296+y)*m,m*=4294967296}return E},r.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(k(this))return"0";if(x(this))return"-"+D(this).toString(E);for(var m=d(Math.pow(E,6)),g=this,y="";;){var T=st(g,m).g;g=$(g,T.j(m));var I=((0<g.g.length?g.g[0]:g.h)>>>0).toString(E);if(g=T,k(g))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},r.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function k(E){if(E.h!=0)return!1;for(var m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function x(E){return E.h==-1}r.l=function(E){return E=$(this,E),x(E)?-1:k(E)?0:1};function D(E){for(var m=E.g.length,g=[],y=0;y<m;y++)g[y]=~E.g[y];return new u(g,~E.h).add(R)}r.abs=function(){return x(this)?D(this):this},r.add=function(E){for(var m=Math.max(this.g.length,E.g.length),g=[],y=0,T=0;T<=m;T++){var I=y+(this.i(T)&65535)+(E.i(T)&65535),p=(I>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);y=p>>>16,I&=65535,p&=65535,g[T]=p<<16|I}return new u(g,g[g.length-1]&-2147483648?-1:0)};function $(E,m){return E.add(D(m))}r.j=function(E){if(k(this)||k(E))return A;if(x(this))return x(E)?D(this).j(D(E)):D(D(this).j(E));if(x(E))return D(this.j(D(E)));if(0>this.l(C)&&0>E.l(C))return d(this.m()*E.m());for(var m=this.g.length+E.g.length,g=[],y=0;y<2*m;y++)g[y]=0;for(y=0;y<this.g.length;y++)for(var T=0;T<E.g.length;T++){var I=this.i(y)>>>16,p=this.i(y)&65535,kt=E.i(T)>>>16,be=E.i(T)&65535;g[2*y+2*T]+=p*be,K(g,2*y+2*T),g[2*y+2*T+1]+=I*be,K(g,2*y+2*T+1),g[2*y+2*T+1]+=p*kt,K(g,2*y+2*T+1),g[2*y+2*T+2]+=I*kt,K(g,2*y+2*T+2)}for(y=0;y<m;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=m;y<2*m;y++)g[y]=0;return new u(g,0)};function K(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function G(E,m){this.g=E,this.h=m}function st(E,m){if(k(m))throw Error("division by zero");if(k(E))return new G(A,A);if(x(E))return m=st(D(E),m),new G(D(m.g),D(m.h));if(x(m))return m=st(E,D(m)),new G(D(m.g),m.h);if(30<E.g.length){if(x(E)||x(m))throw Error("slowDivide_ only works with positive integers.");for(var g=R,y=m;0>=y.l(E);)g=Dt(g),y=Dt(y);var T=ot(g,1),I=ot(y,1);for(y=ot(y,2),g=ot(g,2);!k(y);){var p=I.add(y);0>=p.l(E)&&(T=T.add(g),I=p),y=ot(y,1),g=ot(g,1)}return m=$(E,T.j(m)),new G(T,m)}for(T=A;0<=E.l(m);){for(g=Math.max(1,Math.floor(E.m()/m.m())),y=Math.ceil(Math.log(g)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=d(g),p=I.j(m);x(p)||0<p.l(E);)g-=y,I=d(g),p=I.j(m);k(I)&&(I=R),T=T.add(I),E=$(E,p)}return new G(T,E)}r.A=function(E){return st(this,E).h},r.and=function(E){for(var m=Math.max(this.g.length,E.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)&E.i(y);return new u(g,this.h&E.h)},r.or=function(E){for(var m=Math.max(this.g.length,E.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)|E.i(y);return new u(g,this.h|E.h)},r.xor=function(E){for(var m=Math.max(this.g.length,E.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)^E.i(y);return new u(g,this.h^E.h)};function Dt(E){for(var m=E.g.length+1,g=[],y=0;y<m;y++)g[y]=E.i(y)<<1|E.i(y-1)>>>31;return new u(g,E.h)}function ot(E,m){var g=m>>5;m%=32;for(var y=E.g.length-g,T=[],I=0;I<y;I++)T[I]=0<m?E.i(I+g)>>>m|E.i(I+g+1)<<32-m:E.i(I+g);return new u(T,E.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Uo=n,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=d,u.fromString=_,Kt=u}).apply(typeof ji<"u"?ji:typeof self<"u"?self:typeof window<"u"?window:{});var Nn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qo,We,Bo,qn,Hr,jo,zo,Ko;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,l){return s==Array.prototype||s==Object.prototype||(s[a]=l.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Nn=="object"&&Nn];for(var a=0;a<s.length;++a){var l=s[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var n=e(this);function i(s,a){if(a)t:{var l=n;s=s.split(".");for(var h=0;h<s.length-1;h++){var v=s[h];if(!(v in l))break t;l=l[v]}s=s[s.length-1],h=l[s],a=a(h),a!=h&&a!=null&&t(l,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var l=0,h=!1,v={next:function(){if(!h&&l<s.length){var w=l++;return{value:a(w,s[w]),done:!1}}return h=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function f(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function d(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function _(s,a,l){return s.call.apply(s.bind,arguments)}function A(s,a,l){if(!s)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,h),s.apply(a,v)}}return function(){return s.apply(a,arguments)}}function R(s,a,l){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:A,R.apply(null,arguments)}function C(s,a){var l=Array.prototype.slice.call(arguments,1);return function(){var h=l.slice();return h.push.apply(h,arguments),s.apply(this,h)}}function k(s,a){function l(){}l.prototype=a.prototype,s.aa=a.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(h,v,w){for(var S=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)S[Q-2]=arguments[Q];return a.prototype[v].apply(h,S)}}function x(s){const a=s.length;if(0<a){const l=Array(a);for(let h=0;h<a;h++)l[h]=s[h];return l}return[]}function D(s,a){for(let l=1;l<arguments.length;l++){const h=arguments[l];if(f(h)){const v=s.length||0,w=h.length||0;s.length=v+w;for(let S=0;S<w;S++)s[v+S]=h[S]}else s.push(h)}}class ${constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function K(s){return/^[\s\xa0]*$/.test(s)}function G(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function st(s){return st[" "](s),s}st[" "]=function(){};var Dt=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function ot(s,a,l){for(const h in s)a.call(l,s[h],h,s)}function E(s,a){for(const l in s)a.call(void 0,s[l],l,s)}function m(s){const a={};for(const l in s)a[l]=s[l];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let l,h;for(let v=1;v<arguments.length;v++){h=arguments[v];for(l in h)s[l]=h[l];for(let w=0;w<g.length;w++)l=g[w],Object.prototype.hasOwnProperty.call(h,l)&&(s[l]=h[l])}}function T(s){var a=1;s=s.split(":");const l=[];for(;0<a&&s.length;)l.push(s.shift()),a--;return s.length&&l.push(s.join(":")),l}function I(s){c.setTimeout(()=>{throw s},0)}function p(){var s=Tr;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class kt{constructor(){this.h=this.g=null}add(a,l){const h=be.get();h.set(a,l),this.h?this.h.next=h:this.g=h,this.h=h}}var be=new $(()=>new du,s=>s.reset());class du{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let De,ke=!1,Tr=new kt,Us=()=>{const s=c.Promise.resolve(void 0);De=()=>{s.then(mu)}};var mu=()=>{for(var s;s=p();){try{s.h.call(s.g)}catch(l){I(l)}var a=be;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}ke=!1};function Ut(){this.s=this.s,this.C=this.C}Ut.prototype.s=!1,Ut.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ut.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ht(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var pu=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return s}();function Ne(s,a){if(ht.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,h=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(Dt){t:{try{st(a.nodeName);var v=!0;break t}catch{}v=!1}v||(a=null)}}else l=="mouseover"?a=s.fromElement:l=="mouseout"&&(a=s.toElement);this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:gu[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Ne.aa.h.call(this)}}k(Ne,ht);var gu={2:"touch",3:"pen",4:"mouse"};Ne.prototype.h=function(){Ne.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var dn="closure_listenable_"+(1e6*Math.random()|0),_u=0;function yu(s,a,l,h,v){this.listener=s,this.proxy=null,this.src=a,this.type=l,this.capture=!!h,this.ha=v,this.key=++_u,this.da=this.fa=!1}function mn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function pn(s){this.src=s,this.g={},this.h=0}pn.prototype.add=function(s,a,l,h,v){var w=s.toString();s=this.g[w],s||(s=this.g[w]=[],this.h++);var S=vr(s,a,h,v);return-1<S?(a=s[S],l||(a.fa=!1)):(a=new yu(a,this.src,w,!!h,v),a.fa=l,s.push(a)),a};function Er(s,a){var l=a.type;if(l in s.g){var h=s.g[l],v=Array.prototype.indexOf.call(h,a,void 0),w;(w=0<=v)&&Array.prototype.splice.call(h,v,1),w&&(mn(a),s.g[l].length==0&&(delete s.g[l],s.h--))}}function vr(s,a,l,h){for(var v=0;v<s.length;++v){var w=s[v];if(!w.da&&w.listener==a&&w.capture==!!l&&w.ha==h)return v}return-1}var Ir="closure_lm_"+(1e6*Math.random()|0),Ar={};function qs(s,a,l,h,v){if(Array.isArray(a)){for(var w=0;w<a.length;w++)qs(s,a[w],l,h,v);return null}return l=zs(l),s&&s[dn]?s.K(a,l,d(h)?!!h.capture:!1,v):Tu(s,a,l,!1,h,v)}function Tu(s,a,l,h,v,w){if(!a)throw Error("Invalid event type");var S=d(v)?!!v.capture:!!v,Q=Rr(s);if(Q||(s[Ir]=Q=new pn(s)),l=Q.add(a,l,h,S,w),l.proxy)return l;if(h=Eu(),l.proxy=h,h.src=s,h.listener=l,s.addEventListener)pu||(v=S),v===void 0&&(v=!1),s.addEventListener(a.toString(),h,v);else if(s.attachEvent)s.attachEvent(js(a.toString()),h);else if(s.addListener&&s.removeListener)s.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Eu(){function s(l){return a.call(s.src,s.listener,l)}const a=vu;return s}function Bs(s,a,l,h,v){if(Array.isArray(a))for(var w=0;w<a.length;w++)Bs(s,a[w],l,h,v);else h=d(h)?!!h.capture:!!h,l=zs(l),s&&s[dn]?(s=s.i,a=String(a).toString(),a in s.g&&(w=s.g[a],l=vr(w,l,h,v),-1<l&&(mn(w[l]),Array.prototype.splice.call(w,l,1),w.length==0&&(delete s.g[a],s.h--)))):s&&(s=Rr(s))&&(a=s.g[a.toString()],s=-1,a&&(s=vr(a,l,h,v)),(l=-1<s?a[s]:null)&&wr(l))}function wr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[dn])Er(a.i,s);else{var l=s.type,h=s.proxy;a.removeEventListener?a.removeEventListener(l,h,s.capture):a.detachEvent?a.detachEvent(js(l),h):a.addListener&&a.removeListener&&a.removeListener(h),(l=Rr(a))?(Er(l,s),l.h==0&&(l.src=null,a[Ir]=null)):mn(s)}}}function js(s){return s in Ar?Ar[s]:Ar[s]="on"+s}function vu(s,a){if(s.da)s=!0;else{a=new Ne(a,this);var l=s.listener,h=s.ha||s.src;s.fa&&wr(s),s=l.call(h,a)}return s}function Rr(s){return s=s[Ir],s instanceof pn?s:null}var Pr="__closure_events_fn_"+(1e9*Math.random()>>>0);function zs(s){return typeof s=="function"?s:(s[Pr]||(s[Pr]=function(a){return s.handleEvent(a)}),s[Pr])}function ft(){Ut.call(this),this.i=new pn(this),this.M=this,this.F=null}k(ft,Ut),ft.prototype[dn]=!0,ft.prototype.removeEventListener=function(s,a,l,h){Bs(this,s,a,l,h)};function yt(s,a){var l,h=s.F;if(h)for(l=[];h;h=h.F)l.push(h);if(s=s.M,h=a.type||a,typeof a=="string")a=new ht(a,s);else if(a instanceof ht)a.target=a.target||s;else{var v=a;a=new ht(h,s),y(a,v)}if(v=!0,l)for(var w=l.length-1;0<=w;w--){var S=a.g=l[w];v=gn(S,h,!0,a)&&v}if(S=a.g=s,v=gn(S,h,!0,a)&&v,v=gn(S,h,!1,a)&&v,l)for(w=0;w<l.length;w++)S=a.g=l[w],v=gn(S,h,!1,a)&&v}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var l=s.g[a],h=0;h<l.length;h++)mn(l[h]);delete s.g[a],s.h--}}this.F=null},ft.prototype.K=function(s,a,l,h){return this.i.add(String(s),a,!1,l,h)},ft.prototype.L=function(s,a,l,h){return this.i.add(String(s),a,!0,l,h)};function gn(s,a,l,h){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var v=!0,w=0;w<a.length;++w){var S=a[w];if(S&&!S.da&&S.capture==l){var Q=S.listener,at=S.ha||S.src;S.fa&&Er(s.i,S),v=Q.call(at,h)!==!1&&v}}return v&&!h.defaultPrevented}function Ks(s,a,l){if(typeof s=="function")l&&(s=R(s,l));else if(s&&typeof s.handleEvent=="function")s=R(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(s,a||0)}function $s(s){s.g=Ks(()=>{s.g=null,s.i&&(s.i=!1,$s(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class Iu extends Ut{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:$s(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xe(s){Ut.call(this),this.h=s,this.g={}}k(xe,Ut);var Gs=[];function Qs(s){ot(s.g,function(a,l){this.g.hasOwnProperty(l)&&wr(a)},s),s.g={}}xe.prototype.N=function(){xe.aa.N.call(this),Qs(this)},xe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vr=c.JSON.stringify,Au=c.JSON.parse,wu=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function Cr(){}Cr.prototype.h=null;function Ws(s){return s.h||(s.h=s.i())}function Hs(){}var Me={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Sr(){ht.call(this,"d")}k(Sr,ht);function br(){ht.call(this,"c")}k(br,ht);var Zt={},Xs=null;function _n(){return Xs=Xs||new ft}Zt.La="serverreachability";function Ys(s){ht.call(this,Zt.La,s)}k(Ys,ht);function Le(s){const a=_n();yt(a,new Ys(a))}Zt.STAT_EVENT="statevent";function Js(s,a){ht.call(this,Zt.STAT_EVENT,s),this.stat=a}k(Js,ht);function Tt(s){const a=_n();yt(a,new Js(a,s))}Zt.Ma="timingevent";function Zs(s,a){ht.call(this,Zt.Ma,s),this.size=a}k(Zs,ht);function Oe(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},a)}function Fe(){this.g=!0}Fe.prototype.xa=function(){this.g=!1};function Ru(s,a,l,h,v,w){s.info(function(){if(s.g)if(w)for(var S="",Q=w.split("&"),at=0;at<Q.length;at++){var j=Q[at].split("=");if(1<j.length){var dt=j[0];j=j[1];var mt=dt.split("_");S=2<=mt.length&&mt[1]=="type"?S+(dt+"="+j+"&"):S+(dt+"=redacted&")}}else S=null;else S=w;return"XMLHTTP REQ ("+h+") [attempt "+v+"]: "+a+`
`+l+`
`+S})}function Pu(s,a,l,h,v,w,S){s.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+v+"]: "+a+`
`+l+`
`+w+" "+S})}function ce(s,a,l,h){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+Cu(s,l)+(h?" "+h:"")})}function Vu(s,a){s.info(function(){return"TIMEOUT: "+a})}Fe.prototype.info=function(){};function Cu(s,a){if(!s.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var h=l[s];if(!(2>h.length)){var v=h[1];if(Array.isArray(v)&&!(1>v.length)){var w=v[0];if(w!="noop"&&w!="stop"&&w!="close")for(var S=1;S<v.length;S++)v[S]=""}}}}return Vr(l)}catch{return a}}var yn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ti={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Dr;function Tn(){}k(Tn,Cr),Tn.prototype.g=function(){return new XMLHttpRequest},Tn.prototype.i=function(){return{}},Dr=new Tn;function qt(s,a,l,h){this.j=s,this.i=a,this.l=l,this.R=h||1,this.U=new xe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ei}function ei(){this.i=null,this.g="",this.h=!1}var ni={},kr={};function Nr(s,a,l){s.L=1,s.v=An(Nt(a)),s.m=l,s.P=!0,ri(s,null)}function ri(s,a){s.F=Date.now(),En(s),s.A=Nt(s.v);var l=s.A,h=s.R;Array.isArray(h)||(h=[String(h)]),_i(l.i,"t",h),s.C=0,l=s.j.J,s.h=new ei,s.g=Mi(s.j,l?a:null,!s.m),0<s.O&&(s.M=new Iu(R(s.Y,s,s.g),s.O)),a=s.U,l=s.g,h=s.ca;var v="readystatechange";Array.isArray(v)||(v&&(Gs[0]=v.toString()),v=Gs);for(var w=0;w<v.length;w++){var S=qs(l,v[w],h||a.handleEvent,!1,a.h||a);if(!S)break;a.g[S.key]=S}a=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),Le(),Ru(s.i,s.u,s.A,s.l,s.R,s.m)}qt.prototype.ca=function(s){s=s.target;const a=this.M;a&&xt(s)==3?a.j():this.Y(s)},qt.prototype.Y=function(s){try{if(s==this.g)t:{const mt=xt(this.g);var a=this.g.Ba();const de=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||wi(this.g)))){this.J||mt!=4||a==7||(a==8||0>=de?Le(3):Le(2)),xr(this);var l=this.g.Z();this.X=l;e:if(si(this)){var h=wi(this.g);s="";var v=h.length,w=xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){te(this),Ue(this);var S="";break e}this.h.i=new c.TextDecoder}for(a=0;a<v;a++)this.h.h=!0,s+=this.h.i.decode(h[a],{stream:!(w&&a==v-1)});h.length=0,this.h.g+=s,this.C=0,S=this.h.g}else S=this.g.oa();if(this.o=l==200,Pu(this.i,this.u,this.A,this.l,this.R,mt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var Q,at=this.g;if((Q=at.g?at.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(Q)){var j=Q;break e}}j=null}if(l=j)ce(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Mr(this,l);else{this.o=!1,this.s=3,Tt(12),te(this),Ue(this);break t}}if(this.P){l=!0;let At;for(;!this.J&&this.C<S.length;)if(At=Su(this,S),At==kr){mt==4&&(this.s=4,Tt(14),l=!1),ce(this.i,this.l,null,"[Incomplete Response]");break}else if(At==ni){this.s=4,Tt(15),ce(this.i,this.l,S,"[Invalid Chunk]"),l=!1;break}else ce(this.i,this.l,At,null),Mr(this,At);if(si(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||S.length!=0||this.h.h||(this.s=1,Tt(16),l=!1),this.o=this.o&&l,!l)ce(this.i,this.l,S,"[Invalid Chunked Response]"),te(this),Ue(this);else if(0<S.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+S.length),Br(dt),dt.M=!0,Tt(11))}}else ce(this.i,this.l,S,null),Mr(this,S);mt==4&&te(this),this.o&&!this.J&&(mt==4?Di(this.j,this):(this.o=!1,En(this)))}else Gu(this.g),l==400&&0<S.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),te(this),Ue(this)}}}catch{}finally{}};function si(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Su(s,a){var l=s.C,h=a.indexOf(`
`,l);return h==-1?kr:(l=Number(a.substring(l,h)),isNaN(l)?ni:(h+=1,h+l>a.length?kr:(a=a.slice(h,h+l),s.C=h+l,a)))}qt.prototype.cancel=function(){this.J=!0,te(this)};function En(s){s.S=Date.now()+s.I,ii(s,s.I)}function ii(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Oe(R(s.ba,s),a)}function xr(s){s.B&&(c.clearTimeout(s.B),s.B=null)}qt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Vu(this.i,this.A),this.L!=2&&(Le(),Tt(17)),te(this),this.s=2,Ue(this)):ii(this,this.S-s)};function Ue(s){s.j.G==0||s.J||Di(s.j,s)}function te(s){xr(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,Qs(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function Mr(s,a){try{var l=s.j;if(l.G!=0&&(l.g==s||Lr(l.h,s))){if(!s.K&&Lr(l.h,s)&&l.G==3){try{var h=l.Da.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var v=h;if(v[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)Sn(l),Vn(l);else break t;qr(l),Tt(18)}}else l.za=v[1],0<l.za-l.T&&37500>v[2]&&l.F&&l.v==0&&!l.C&&(l.C=Oe(R(l.Za,l),6e3));if(1>=ui(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else ne(l,11)}else if((s.K||l.g==s)&&Sn(l),!K(a))for(v=l.Da.g.parse(a),a=0;a<v.length;a++){let j=v[a];if(l.T=j[0],j=j[1],l.G==2)if(j[0]=="c"){l.K=j[1],l.ia=j[2];const dt=j[3];dt!=null&&(l.la=dt,l.j.info("VER="+l.la));const mt=j[4];mt!=null&&(l.Aa=mt,l.j.info("SVER="+l.Aa));const de=j[5];de!=null&&typeof de=="number"&&0<de&&(h=1.5*de,l.L=h,l.j.info("backChannelRequestTimeoutMs_="+h)),h=l;const At=s.g;if(At){const Dn=At.g?At.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Dn){var w=h.h;w.g||Dn.indexOf("spdy")==-1&&Dn.indexOf("quic")==-1&&Dn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Or(w,w.h),w.h=null))}if(h.D){const jr=At.g?At.g.getResponseHeader("X-HTTP-Session-Id"):null;jr&&(h.ya=jr,W(h.I,h.D,jr))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),h=l;var S=s;if(h.qa=xi(h,h.J?h.ia:null,h.W),S.K){li(h.h,S);var Q=S,at=h.L;at&&(Q.I=at),Q.B&&(xr(Q),En(Q)),h.g=S}else Si(h);0<l.i.length&&Cn(l)}else j[0]!="stop"&&j[0]!="close"||ne(l,7);else l.G==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?ne(l,7):Ur(l):j[0]!="noop"&&l.l&&l.l.ta(j),l.v=0)}}Le(4)}catch{}}var bu=class{constructor(s,a){this.g=s,this.map=a}};function oi(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ai(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function ui(s){return s.h?1:s.g?s.g.size:0}function Lr(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Or(s,a){s.g?s.g.add(a):s.h=a}function li(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}oi.prototype.cancel=function(){if(this.i=ci(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function ci(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const l of s.g.values())a=a.concat(l.D);return a}return x(s.i)}function Du(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(f(s)){for(var a=[],l=s.length,h=0;h<l;h++)a.push(s[h]);return a}a=[],l=0;for(h in s)a[l++]=s[h];return a}function ku(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(f(s)||typeof s=="string"){var a=[];s=s.length;for(var l=0;l<s;l++)a.push(l);return a}a=[],l=0;for(const h in s)a[l++]=h;return a}}}function hi(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(f(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var l=ku(s),h=Du(s),v=h.length,w=0;w<v;w++)a.call(void 0,h[w],l&&l[w],s)}var fi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Nu(s,a){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var h=s[l].indexOf("="),v=null;if(0<=h){var w=s[l].substring(0,h);v=s[l].substring(h+1)}else w=s[l];a(w,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function ee(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof ee){this.h=s.h,vn(this,s.j),this.o=s.o,this.g=s.g,In(this,s.s),this.l=s.l;var a=s.i,l=new je;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),di(this,l),this.m=s.m}else s&&(a=String(s).match(fi))?(this.h=!1,vn(this,a[1]||"",!0),this.o=qe(a[2]||""),this.g=qe(a[3]||"",!0),In(this,a[4]),this.l=qe(a[5]||"",!0),di(this,a[6]||"",!0),this.m=qe(a[7]||"")):(this.h=!1,this.i=new je(null,this.h))}ee.prototype.toString=function(){var s=[],a=this.j;a&&s.push(Be(a,mi,!0),":");var l=this.g;return(l||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Be(a,mi,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(Be(l,l.charAt(0)=="/"?Lu:Mu,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",Be(l,Fu)),s.join("")};function Nt(s){return new ee(s)}function vn(s,a,l){s.j=l?qe(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function In(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function di(s,a,l){a instanceof je?(s.i=a,Uu(s.i,s.h)):(l||(a=Be(a,Ou)),s.i=new je(a,s.h))}function W(s,a,l){s.i.set(a,l)}function An(s){return W(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function qe(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Be(s,a,l){return typeof s=="string"?(s=encodeURI(s).replace(a,xu),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function xu(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var mi=/[#\/\?@]/g,Mu=/[#\?:]/g,Lu=/[#\?]/g,Ou=/[#\?@]/g,Fu=/#/g;function je(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Bt(s){s.g||(s.g=new Map,s.h=0,s.i&&Nu(s.i,function(a,l){s.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}r=je.prototype,r.add=function(s,a){Bt(this),this.i=null,s=he(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(a),this.h+=1,this};function pi(s,a){Bt(s),a=he(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function gi(s,a){return Bt(s),a=he(s,a),s.g.has(a)}r.forEach=function(s,a){Bt(this),this.g.forEach(function(l,h){l.forEach(function(v){s.call(a,v,h,this)},this)},this)},r.na=function(){Bt(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let h=0;h<a.length;h++){const v=s[h];for(let w=0;w<v.length;w++)l.push(a[h])}return l},r.V=function(s){Bt(this);let a=[];if(typeof s=="string")gi(this,s)&&(a=a.concat(this.g.get(he(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)a=a.concat(s[l])}return a},r.set=function(s,a){return Bt(this),this.i=null,s=he(this,s),gi(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},r.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function _i(s,a,l){pi(s,a),0<l.length&&(s.i=null,s.g.set(he(s,a),x(l)),s.h+=l.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var h=a[l];const w=encodeURIComponent(String(h)),S=this.V(h);for(h=0;h<S.length;h++){var v=w;S[h]!==""&&(v+="="+encodeURIComponent(String(S[h]))),s.push(v)}}return this.i=s.join("&")};function he(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function Uu(s,a){a&&!s.j&&(Bt(s),s.i=null,s.g.forEach(function(l,h){var v=h.toLowerCase();h!=v&&(pi(this,h),_i(this,v,l))},s)),s.j=a}function qu(s,a){const l=new Fe;if(c.Image){const h=new Image;h.onload=C(jt,l,"TestLoadImage: loaded",!0,a,h),h.onerror=C(jt,l,"TestLoadImage: error",!1,a,h),h.onabort=C(jt,l,"TestLoadImage: abort",!1,a,h),h.ontimeout=C(jt,l,"TestLoadImage: timeout",!1,a,h),c.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=s}else a(!1)}function Bu(s,a){const l=new Fe,h=new AbortController,v=setTimeout(()=>{h.abort(),jt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:h.signal}).then(w=>{clearTimeout(v),w.ok?jt(l,"TestPingServer: ok",!0,a):jt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(v),jt(l,"TestPingServer: error",!1,a)})}function jt(s,a,l,h,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),h(l)}catch{}}function ju(){this.g=new wu}function zu(s,a,l){const h=l||"";try{hi(s,function(v,w){let S=v;d(v)&&(S=Vr(v)),a.push(h+w+"="+encodeURIComponent(S))})}catch(v){throw a.push(h+"type="+encodeURIComponent("_badmap")),v}}function wn(s){this.l=s.Ub||null,this.j=s.eb||!1}k(wn,Cr),wn.prototype.g=function(){return new Rn(this.l,this.j)},wn.prototype.i=function(s){return function(){return s}}({});function Rn(s,a){ft.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Rn,ft),r=Rn.prototype,r.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,Ke(this)},r.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ze(this)),this.readyState=0},r.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Ke(this)),this.g&&(this.readyState=3,Ke(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;yi(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function yi(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}r.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?ze(this):Ke(this),this.readyState==3&&yi(this)}},r.Ra=function(s){this.g&&(this.response=this.responseText=s,ze(this))},r.Qa=function(s){this.g&&(this.response=s,ze(this))},r.ga=function(){this.g&&ze(this)};function ze(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Ke(s)}r.setRequestHeader=function(s,a){this.u.append(s,a)},r.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=a.next();return s.join(`\r
`)};function Ke(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Rn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Ti(s){let a="";return ot(s,function(l,h){a+=h,a+=":",a+=l,a+=`\r
`}),a}function Fr(s,a,l){t:{for(h in l){var h=!1;break t}h=!0}h||(l=Ti(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):W(s,a,l))}function J(s){ft.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(J,ft);var Ku=/^https?$/i,$u=["POST","PUT"];r=J.prototype,r.Ha=function(s){this.J=s},r.ea=function(s,a,l,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Dr.g(),this.v=this.o?Ws(this.o):Ws(Dr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(w){Ei(this,w);return}if(s=l||"",l=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var v in h)l.set(v,h[v]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const w of h.keys())l.set(w,h.get(w));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(l.keys()).find(w=>w.toLowerCase()=="content-type"),v=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call($u,a,void 0))||h||v||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,S]of l)this.g.setRequestHeader(w,S);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ai(this),this.u=!0,this.g.send(s),this.u=!1}catch(w){Ei(this,w)}};function Ei(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,vi(s),Pn(s)}function vi(s){s.A||(s.A=!0,yt(s,"complete"),yt(s,"error"))}r.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,yt(this,"complete"),yt(this,"abort"),Pn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Pn(this,!0)),J.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Ii(this):this.bb())},r.bb=function(){Ii(this)};function Ii(s){if(s.h&&typeof u<"u"&&(!s.v[1]||xt(s)!=4||s.Z()!=2)){if(s.u&&xt(s)==4)Ks(s.Ea,0,s);else if(yt(s,"readystatechange"),xt(s)==4){s.h=!1;try{const S=s.Z();t:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var h;if(h=S===0){var v=String(s.D).match(fi)[1]||null;!v&&c.self&&c.self.location&&(v=c.self.location.protocol.slice(0,-1)),h=!Ku.test(v?v.toLowerCase():"")}l=h}if(l)yt(s,"complete"),yt(s,"success");else{s.m=6;try{var w=2<xt(s)?s.g.statusText:""}catch{w=""}s.l=w+" ["+s.Z()+"]",vi(s)}}finally{Pn(s)}}}}function Pn(s,a){if(s.g){Ai(s);const l=s.g,h=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||yt(s,"ready");try{l.onreadystatechange=h}catch{}}}function Ai(s){s.I&&(c.clearTimeout(s.I),s.I=null)}r.isActive=function(){return!!this.g};function xt(s){return s.g?s.g.readyState:0}r.Z=function(){try{return 2<xt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),Au(a)}};function wi(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Gu(s){const a={};s=(s.g&&2<=xt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<s.length;h++){if(K(s[h]))continue;var l=T(s[h]);const v=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const w=a[v]||[];a[v]=w,w.push(l)}E(a,function(h){return h.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function $e(s,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||a}function Ri(s){this.Aa=0,this.i=[],this.j=new Fe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=$e("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=$e("baseRetryDelayMs",5e3,s),this.cb=$e("retryDelaySeedMs",1e4,s),this.Wa=$e("forwardChannelMaxRetries",2,s),this.wa=$e("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new oi(s&&s.concurrentRequestLimit),this.Da=new ju,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Ri.prototype,r.la=8,r.G=1,r.connect=function(s,a,l,h){Tt(0),this.W=s,this.H=a||{},l&&h!==void 0&&(this.H.OSID=l,this.H.OAID=h),this.F=this.X,this.I=xi(this,null,this.W),Cn(this)};function Ur(s){if(Pi(s),s.G==3){var a=s.U++,l=Nt(s.I);if(W(l,"SID",s.K),W(l,"RID",a),W(l,"TYPE","terminate"),Ge(s,l),a=new qt(s,s.j,a),a.L=2,a.v=An(Nt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.v,l=!0),l||(a.g=Mi(a.j,null),a.g.ea(a.v)),a.F=Date.now(),En(a)}Ni(s)}function Vn(s){s.g&&(Br(s),s.g.cancel(),s.g=null)}function Pi(s){Vn(s),s.u&&(c.clearTimeout(s.u),s.u=null),Sn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function Cn(s){if(!ai(s.h)&&!s.s){s.s=!0;var a=s.Ga;De||Us(),ke||(De(),ke=!0),Tr.add(a,s),s.B=0}}function Qu(s,a){return ui(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Oe(R(s.Ga,s,a),ki(s,s.B)),s.B++,!0)}r.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const v=new qt(this,this.j,s);let w=this.o;if(this.S&&(w?(w=m(w),y(w,this.S)):w=this.S),this.m!==null||this.O||(v.H=w,w=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var h=this.i[l];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=Ci(this,v,a),l=Nt(this.I),W(l,"RID",s),W(l,"CVER",22),this.D&&W(l,"X-HTTP-Session-Id",this.D),Ge(this,l),w&&(this.O?a="headers="+encodeURIComponent(String(Ti(w)))+"&"+a:this.m&&Fr(l,this.m,w)),Or(this.h,v),this.Ua&&W(l,"TYPE","init"),this.P?(W(l,"$req",a),W(l,"SID","null"),v.T=!0,Nr(v,l,null)):Nr(v,l,a),this.G=2}}else this.G==3&&(s?Vi(this,s):this.i.length==0||ai(this.h)||Vi(this))};function Vi(s,a){var l;a?l=a.l:l=s.U++;const h=Nt(s.I);W(h,"SID",s.K),W(h,"RID",l),W(h,"AID",s.T),Ge(s,h),s.m&&s.o&&Fr(h,s.m,s.o),l=new qt(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),a&&(s.i=a.D.concat(s.i)),a=Ci(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Or(s.h,l),Nr(l,h,a)}function Ge(s,a){s.H&&ot(s.H,function(l,h){W(a,h,l)}),s.l&&hi({},function(l,h){W(a,h,l)})}function Ci(s,a,l){l=Math.min(s.i.length,l);var h=s.l?R(s.l.Na,s.l,s):null;t:{var v=s.i;let w=-1;for(;;){const S=["count="+l];w==-1?0<l?(w=v[0].g,S.push("ofs="+w)):w=0:S.push("ofs="+w);let Q=!0;for(let at=0;at<l;at++){let j=v[at].g;const dt=v[at].map;if(j-=w,0>j)w=Math.max(0,v[at].g-100),Q=!1;else try{zu(dt,S,"req"+j+"_")}catch{h&&h(dt)}}if(Q){h=S.join("&");break t}}}return s=s.i.splice(0,l),a.D=s,h}function Si(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;De||Us(),ke||(De(),ke=!0),Tr.add(a,s),s.v=0}}function qr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Oe(R(s.Fa,s),ki(s,s.v)),s.v++,!0)}r.Fa=function(){if(this.u=null,bi(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Oe(R(this.ab,this),s)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Tt(10),Vn(this),bi(this))};function Br(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function bi(s){s.g=new qt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=Nt(s.qa);W(a,"RID","rpc"),W(a,"SID",s.K),W(a,"AID",s.T),W(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&W(a,"TO",s.ja),W(a,"TYPE","xmlhttp"),Ge(s,a),s.m&&s.o&&Fr(a,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=An(Nt(a)),l.m=null,l.P=!0,ri(l,s)}r.Za=function(){this.C!=null&&(this.C=null,Vn(this),qr(this),Tt(19))};function Sn(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function Di(s,a){var l=null;if(s.g==a){Sn(s),Br(s),s.g=null;var h=2}else if(Lr(s.h,a))l=a.D,li(s.h,a),h=1;else return;if(s.G!=0){if(a.o)if(h==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var v=s.B;h=_n(),yt(h,new Zs(h,l)),Cn(s)}else Si(s);else if(v=a.s,v==3||v==0&&0<a.X||!(h==1&&Qu(s,a)||h==2&&qr(s)))switch(l&&0<l.length&&(a=s.h,a.i=a.i.concat(l)),v){case 1:ne(s,5);break;case 4:ne(s,10);break;case 3:ne(s,6);break;default:ne(s,2)}}}function ki(s,a){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*a}function ne(s,a){if(s.j.info("Error code "+a),a==2){var l=R(s.fb,s),h=s.Xa;const v=!h;h=new ee(h||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||vn(h,"https"),An(h),v?qu(h.toString(),l):Bu(h.toString(),l)}else Tt(2);s.G=0,s.l&&s.l.sa(a),Ni(s),Pi(s)}r.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function Ni(s){if(s.G=0,s.ka=[],s.l){const a=ci(s.h);(a.length!=0||s.i.length!=0)&&(D(s.ka,a),D(s.ka,s.i),s.h.i.length=0,x(s.i),s.i.length=0),s.l.ra()}}function xi(s,a,l){var h=l instanceof ee?Nt(l):new ee(l);if(h.g!="")a&&(h.g=a+"."+h.g),In(h,h.s);else{var v=c.location;h=v.protocol,a=a?a+"."+v.hostname:v.hostname,v=+v.port;var w=new ee(null);h&&vn(w,h),a&&(w.g=a),v&&In(w,v),l&&(w.l=l),h=w}return l=s.D,a=s.ya,l&&a&&W(h,l,a),W(h,"VER",s.la),Ge(s,h),h}function Mi(s,a,l){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new J(new wn({eb:l})):new J(s.pa),a.Ha(s.J),a}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Li(){}r=Li.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function bn(){}bn.prototype.g=function(s,a){return new vt(s,a)};function vt(s,a){ft.call(this),this.g=new Ri(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!K(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!K(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new fe(this)}k(vt,ft),vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){Ur(this.g)},vt.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=Vr(s),s=l);a.i.push(new bu(a.Ya++,s)),a.G==3&&Cn(a)},vt.prototype.N=function(){this.g.l=null,delete this.j,Ur(this.g),delete this.g,vt.aa.N.call(this)};function Oi(s){Sr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const l in a){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}k(Oi,Sr);function Fi(){br.call(this),this.status=1}k(Fi,br);function fe(s){this.g=s}k(fe,Li),fe.prototype.ua=function(){yt(this.g,"a")},fe.prototype.ta=function(s){yt(this.g,new Oi(s))},fe.prototype.sa=function(s){yt(this.g,new Fi)},fe.prototype.ra=function(){yt(this.g,"b")},bn.prototype.createWebChannel=bn.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,Ko=function(){return new bn},zo=function(){return _n()},jo=Zt,Hr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},yn.NO_ERROR=0,yn.TIMEOUT=8,yn.HTTP_ERROR=6,qn=yn,ti.COMPLETE="complete",Bo=ti,Hs.EventType=Me,Me.OPEN="a",Me.CLOSE="b",Me.ERROR="c",Me.MESSAGE="d",ft.prototype.listen=ft.prototype.K,We=Hs,J.prototype.listenOnce=J.prototype.L,J.prototype.getLastError=J.prototype.Ka,J.prototype.getLastErrorCode=J.prototype.Ba,J.prototype.getStatus=J.prototype.Z,J.prototype.getResponseJson=J.prototype.Oa,J.prototype.getResponseText=J.prototype.oa,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Ha,qo=J}).apply(typeof Nn<"u"?Nn:typeof self<"u"?self:typeof window<"u"?window:{});const zi="@firebase/firestore",Ki="4.7.8";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pe="11.3.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se=new Zu("@firebase/firestore");function me(){return se.logLevel}function b(r,...t){if(se.logLevel<=Mt.DEBUG){const e=t.map(cs);se.debug(`Firestore (${Pe}): ${r}`,...e)}}function Ot(r,...t){if(se.logLevel<=Mt.ERROR){const e=t.map(cs);se.error(`Firestore (${Pe}): ${r}`,...e)}}function Te(r,...t){if(se.logLevel<=Mt.WARN){const e=t.map(cs);se.warn(`Firestore (${Pe}): ${r}`,...e)}}function cs(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(r="Unexpected state"){const t=`FIRESTORE (${Pe}) INTERNAL ASSERTION FAILED: `+r;throw Ot(t),new Error(t)}function z(r,t){r||L()}function F(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends Ju{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class pl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(gt.UNAUTHENTICATED))}shutdown(){}}class gl{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class _l{constructor(t){this.t=t,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){z(this.o===void 0);let n=this.i;const i=f=>this.i!==n?(n=this.i,e(f)):Promise.resolve();let o=new $t;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new $t,t.enqueueRetryable(()=>i(this.currentUser))};const u=()=>{const f=o;t.enqueueRetryable(async()=>{await f.promise,await i(this.currentUser)})},c=f=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(f=>c(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?c(f):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new $t)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(z(typeof n.accessToken=="string"),new $o(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return z(t===null||typeof t=="string"),new gt(t)}}class yl{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Tl{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new yl(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $i{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class El{constructor(t,e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,il(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,e){z(this.o===void 0);const n=o=>{o.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,b("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const i=o=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new $i(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(z(typeof e.token=="string"),this.R=e.token,new $i(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=vl(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<e&&(n+=t.charAt(i[o]%62))}return n}}function q(r,t){return r<t?-1:r>t?1:0}function Ee(r,t,e){return r.length===t.length&&r.every((n,i)=>e(n,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=-62135596800,Qi=1e6;class tt{static now(){return tt.fromMillis(Date.now())}static fromDate(t){return tt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*Qi);return new tt(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Gi)throw new N(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Qi}_compareTo(t){return this.seconds===t.seconds?q(this.nanoseconds,t.nanoseconds):q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Gi;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{static fromTimestamp(t){return new O(t)}static min(){return new O(new tt(0,0))}static max(){return new O(new tt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi="__name__";class Pt{constructor(t,e,n){e===void 0?e=0:e>t.length&&L(),n===void 0?n=t.length-e:n>t.length-e&&L(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Pt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Pt?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const o=Pt.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return Math.sign(t.length-e.length)}static compareSegments(t,e){const n=Pt.isNumericId(t),i=Pt.isNumericId(e);return n&&!i?-1:!n&&i?1:n&&i?Pt.extractNumericId(t).compare(Pt.extractNumericId(e)):t<e?-1:t>e?1:0}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Kt.fromString(t.substring(4,t.length-2))}}class X extends Pt{construct(t,e,n){return new X(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new N(V.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(i=>i.length>0))}return new X(e)}static emptyPath(){return new X([])}}const Il=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends Pt{construct(t,e,n){return new lt(t,e,n)}static isValidIdentifier(t){return Il.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Wi}static keyField(){return new lt([Wi])}static fromServerFormat(t){const e=[];let n="",i=0;const o=()=>{if(n.length===0)throw new N(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let u=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new N(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const f=t[i+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new N(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=f,i+=2}else c==="`"?(u=!u,i++):c!=="."||u?(n+=c,i++):(o(),i++)}if(o(),u)throw new N(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new lt(e)}static emptyPath(){return new lt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(X.fromString(t))}static fromName(t){return new M(X.fromString(t).popFirst(5))}static empty(){return new M(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new X(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=-1;function Al(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=O.fromTimestamp(n===1e9?new tt(e+1,0):new tt(e,n));return new Qt(i,M.empty(),t)}function wl(r){return new Qt(r.readTime,r.key,nn)}class Qt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Qt(O.min(),M.empty(),nn)}static max(){return new Qt(O.max(),M.empty(),nn)}}function Rl(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(r.documentKey,t.documentKey),e!==0?e:q(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Vl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ve(r){if(r.code!==V.FAILED_PRECONDITION||r.message!==Pl)throw r;b("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):P.reject(e)}static resolve(t){return new P((e,n)=>{e(t)})}static reject(t){return new P((e,n)=>{n(t)})}static waitFor(t){return new P((e,n)=>{let i=0,o=0,u=!1;t.forEach(c=>{++i,c.next(()=>{++o,u&&o===i&&e()},f=>n(f))}),u=!0,o===i&&e()})}static or(t){let e=P.resolve(!1);for(const n of t)e=e.next(i=>i?P.resolve(i):n());return e}static forEach(t,e){const n=[];return t.forEach((i,o)=>{n.push(e.call(this,i,o))}),this.waitFor(n)}static mapArray(t,e){return new P((n,i)=>{const o=t.length,u=new Array(o);let c=0;for(let f=0;f<o;f++){const d=f;e(t[d]).next(_=>{u[d]=_,++c,c===o&&n(u)},_=>i(_))}})}static doWhile(t,e){return new P((n,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):n()};o()})}}function Cl(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Ce(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.oe(n),this._e=n=>e.writeSequenceNumber(n))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}ir.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=-1;function or(r){return r==null}function Gn(r){return r===0&&1/r==-1/0}function Sl(r){return typeof r=="number"&&Number.isInteger(r)&&!Gn(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo="";function bl(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=Hi(t)),t=Dl(r.get(e),t);return Hi(t)}function Dl(r,t){let e=t;const n=r.length;for(let i=0;i<n;i++){const o=r.charAt(i);switch(o){case"\0":e+="";break;case Qo:e+="";break;default:e+=o}}return e}function Hi(r){return r+Qo+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function oe(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function Wo(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,e){this.comparator=t,this.root=e||ut.EMPTY}insert(t,e){return new Y(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(t){return new Y(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ut.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new xn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new xn(this.root,t,this.comparator,!1)}getReverseIterator(){return new xn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new xn(this.root,t,this.comparator,!0)}}class xn{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ut{constructor(t,e,n,i,o){this.key=t,this.value=e,this.color=n??ut.RED,this.left=i??ut.EMPTY,this.right=o??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,o){return new ut(t??this.key,e??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const o=n(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,n),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ut.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const t=this.left.check();if(t!==this.right.check())throw L();return t+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(t,e,n,i,o){return this}insert(t,e,n){return new ut(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t){this.comparator=t,this.data=new Y(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Yi(this.data.getIterator())}getIteratorFrom(t){return new Yi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof rt)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new rt(this.comparator);return e.data=t,e}}class Yi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.fields=t,t.sort(lt.comparator)}static empty(){return new wt([])}unionWith(t){let e=new rt(lt.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new wt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ee(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Ho("Invalid base64 string: "+o):o}}(t);return new ct(e)}static fromUint8Array(t){const e=function(i){let o="";for(let u=0;u<i.length;++u)o+=String.fromCharCode(i[u]);return o}(t);return new ct(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const kl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wt(r){if(z(!!r),typeof r=="string"){let t=0;const e=kl.exec(r);if(z(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:Z(r.seconds),nanos:Z(r.nanos)}}function Z(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ht(r){return typeof r=="string"?ct.fromBase64String(r):ct.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo="server_timestamp",Yo="__type__",Jo="__previous_value__",Zo="__local_write_time__";function fs(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[Yo])===null||e===void 0?void 0:e.stringValue)===Xo}function ar(r){const t=r.mapValue.fields[Jo];return fs(t)?ar(t):t}function rn(r){const t=Wt(r.mapValue.fields[Zo].timestampValue);return new tt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(t,e,n,i,o,u,c,f,d){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=f,this.useFetchStreams=d}}const Qn="(default)";class sn{constructor(t,e){this.projectId=t,this.database=e||Qn}static empty(){return new sn("","")}get isDefaultDatabase(){return this.database===Qn}isEqual(t){return t instanceof sn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta="__type__",xl="__max__",Mn={mapValue:{}},ea="__vector__",Wn="value";function Xt(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?fs(r)?4:Ll(r)?9007199254740991:Ml(r)?10:11:L()}function St(r,t){if(r===t)return!0;const e=Xt(r);if(e!==Xt(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return rn(r).isEqual(rn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const u=Wt(i.timestampValue),c=Wt(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(i,o){return Ht(i.bytesValue).isEqual(Ht(o.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(i,o){return Z(i.geoPointValue.latitude)===Z(o.geoPointValue.latitude)&&Z(i.geoPointValue.longitude)===Z(o.geoPointValue.longitude)}(r,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Z(i.integerValue)===Z(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const u=Z(i.doubleValue),c=Z(o.doubleValue);return u===c?Gn(u)===Gn(c):isNaN(u)&&isNaN(c)}return!1}(r,t);case 9:return Ee(r.arrayValue.values||[],t.arrayValue.values||[],St);case 10:case 11:return function(i,o){const u=i.mapValue.fields||{},c=o.mapValue.fields||{};if(Xi(u)!==Xi(c))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(c[f]===void 0||!St(u[f],c[f])))return!1;return!0}(r,t);default:return L()}}function on(r,t){return(r.values||[]).find(e=>St(e,t))!==void 0}function ve(r,t){if(r===t)return 0;const e=Xt(r),n=Xt(t);if(e!==n)return q(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return q(r.booleanValue,t.booleanValue);case 2:return function(o,u){const c=Z(o.integerValue||o.doubleValue),f=Z(u.integerValue||u.doubleValue);return c<f?-1:c>f?1:c===f?0:isNaN(c)?isNaN(f)?0:-1:1}(r,t);case 3:return Ji(r.timestampValue,t.timestampValue);case 4:return Ji(rn(r),rn(t));case 5:return q(r.stringValue,t.stringValue);case 6:return function(o,u){const c=Ht(o),f=Ht(u);return c.compareTo(f)}(r.bytesValue,t.bytesValue);case 7:return function(o,u){const c=o.split("/"),f=u.split("/");for(let d=0;d<c.length&&d<f.length;d++){const _=q(c[d],f[d]);if(_!==0)return _}return q(c.length,f.length)}(r.referenceValue,t.referenceValue);case 8:return function(o,u){const c=q(Z(o.latitude),Z(u.latitude));return c!==0?c:q(Z(o.longitude),Z(u.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Zi(r.arrayValue,t.arrayValue);case 10:return function(o,u){var c,f,d,_;const A=o.fields||{},R=u.fields||{},C=(c=A[Wn])===null||c===void 0?void 0:c.arrayValue,k=(f=R[Wn])===null||f===void 0?void 0:f.arrayValue,x=q(((d=C==null?void 0:C.values)===null||d===void 0?void 0:d.length)||0,((_=k==null?void 0:k.values)===null||_===void 0?void 0:_.length)||0);return x!==0?x:Zi(C,k)}(r.mapValue,t.mapValue);case 11:return function(o,u){if(o===Mn.mapValue&&u===Mn.mapValue)return 0;if(o===Mn.mapValue)return 1;if(u===Mn.mapValue)return-1;const c=o.fields||{},f=Object.keys(c),d=u.fields||{},_=Object.keys(d);f.sort(),_.sort();for(let A=0;A<f.length&&A<_.length;++A){const R=q(f[A],_[A]);if(R!==0)return R;const C=ve(c[f[A]],d[_[A]]);if(C!==0)return C}return q(f.length,_.length)}(r.mapValue,t.mapValue);default:throw L()}}function Ji(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return q(r,t);const e=Wt(r),n=Wt(t),i=q(e.seconds,n.seconds);return i!==0?i:q(e.nanos,n.nanos)}function Zi(r,t){const e=r.values||[],n=t.values||[];for(let i=0;i<e.length&&i<n.length;++i){const o=ve(e[i],n[i]);if(o)return o}return q(e.length,n.length)}function Ie(r){return Xr(r)}function Xr(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=Wt(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return Ht(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return M.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",i=!0;for(const o of e.values||[])i?i=!1:n+=",",n+=Xr(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const u of n)o?o=!1:i+=",",i+=`${u}:${Xr(e.fields[u])}`;return i+"}"}(r.mapValue):L()}function Bn(r){switch(Xt(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=ar(r);return t?16+Bn(t):16;case 5:return 2*r.stringValue.length;case 6:return Ht(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((i,o)=>i+Bn(o),0)}(r.arrayValue);case 10:case 11:return function(n){let i=0;return oe(n.fields,(o,u)=>{i+=o.length+Bn(u)}),i}(r.mapValue);default:throw L()}}function Yr(r){return!!r&&"integerValue"in r}function ds(r){return!!r&&"arrayValue"in r}function to(r){return!!r&&"nullValue"in r}function eo(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function jn(r){return!!r&&"mapValue"in r}function Ml(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[ta])===null||e===void 0?void 0:e.stringValue)===ea}function Ye(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return oe(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Ye(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ye(r.arrayValue.values[e]);return t}return Object.assign({},r)}function Ll(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===xl}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.value=t}static empty(){return new It({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!jn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ye(e)}setAll(t){let e=lt.emptyPath(),n={},i=[];t.forEach((u,c)=>{if(!e.isImmediateParentOf(c)){const f=this.getFieldsMap(e);this.applyChanges(f,n,i),n={},i=[],e=c.popLast()}u?n[c.lastSegment()]=Ye(u):i.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,i)}delete(t){const e=this.field(t.popLast());jn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return St(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];jn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){oe(e,(i,o)=>t[i]=o);for(const i of n)delete t[i]}clone(){return new It(Ye(this.value))}}function na(r){const t=[];return oe(r.fields,(e,n)=>{const i=new lt([e]);if(jn(n)){const o=na(n.mapValue).fields;if(o.length===0)t.push(i);else for(const u of o)t.push(i.child(u))}else t.push(i)}),new wt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t,e,n,i,o,u,c){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new _t(t,0,O.min(),O.min(),O.min(),It.empty(),0)}static newFoundDocument(t,e,n,i){return new _t(t,1,e,O.min(),n,i,0)}static newNoDocument(t,e){return new _t(t,2,e,O.min(),O.min(),It.empty(),0)}static newUnknownDocument(t,e){return new _t(t,3,e,O.min(),O.min(),It.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(O.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=O.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof _t&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(t,e){this.position=t,this.inclusive=e}}function no(r,t,e){let n=0;for(let i=0;i<r.position.length;i++){const o=t[i],u=r.position[i];if(o.field.isKeyField()?n=M.comparator(M.fromName(u.referenceValue),e.key):n=ve(u,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function ro(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!St(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ol(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{}class nt extends ra{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Ul(t,e,n):e==="array-contains"?new jl(t,n):e==="in"?new zl(t,n):e==="not-in"?new Kl(t,n):e==="array-contains-any"?new $l(t,n):new nt(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new ql(t,n):new Bl(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(ve(e,this.value)):e!==null&&Xt(this.value)===Xt(e)&&this.matchesComparison(ve(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class bt extends ra{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new bt(t,e)}matches(t){return sa(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function sa(r){return r.op==="and"}function ia(r){return Fl(r)&&sa(r)}function Fl(r){for(const t of r.filters)if(t instanceof bt)return!1;return!0}function Jr(r){if(r instanceof nt)return r.field.canonicalString()+r.op.toString()+Ie(r.value);if(ia(r))return r.filters.map(t=>Jr(t)).join(",");{const t=r.filters.map(e=>Jr(e)).join(",");return`${r.op}(${t})`}}function oa(r,t){return r instanceof nt?function(n,i){return i instanceof nt&&n.op===i.op&&n.field.isEqual(i.field)&&St(n.value,i.value)}(r,t):r instanceof bt?function(n,i){return i instanceof bt&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((o,u,c)=>o&&oa(u,i.filters[c]),!0):!1}(r,t):void L()}function aa(r){return r instanceof nt?function(e){return`${e.field.canonicalString()} ${e.op} ${Ie(e.value)}`}(r):r instanceof bt?function(e){return e.op.toString()+" {"+e.getFilters().map(aa).join(" ,")+"}"}(r):"Filter"}class Ul extends nt{constructor(t,e,n){super(t,e,n),this.key=M.fromName(n.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class ql extends nt{constructor(t,e){super(t,"in",e),this.keys=ua("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Bl extends nt{constructor(t,e){super(t,"not-in",e),this.keys=ua("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function ua(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>M.fromName(n.referenceValue))}class jl extends nt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ds(e)&&on(e.arrayValue,this.value)}}class zl extends nt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&on(this.value.arrayValue,e)}}class Kl extends nt{constructor(t,e){super(t,"not-in",e)}matches(t){if(on(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!on(this.value.arrayValue,e)}}class $l extends nt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ds(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>on(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(t,e=null,n=[],i=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=u,this.endAt=c,this.le=null}}function so(r,t=null,e=[],n=[],i=null,o=null,u=null){return new Gl(r,t,e,n,i,o,u)}function ms(r){const t=F(r);if(t.le===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>Jr(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),or(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ie(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ie(n)).join(",")),t.le=e}return t.le}function ps(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!Ol(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!oa(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!ro(r.startAt,t.startAt)&&ro(r.endAt,t.endAt)}function Zr(r){return M.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(t,e=null,n=[],i=[],o=null,u="F",c=null,f=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=f,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Ql(r,t,e,n,i,o,u,c){return new ur(r,t,e,n,i,o,u,c)}function la(r){return new ur(r)}function io(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Wl(r){return r.collectionGroup!==null}function Je(r){const t=F(r);if(t.he===null){t.he=[];const e=new Set;for(const o of t.explicitOrderBy)t.he.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new rt(lt.comparator);return u.filters.forEach(f=>{f.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.he.push(new Xn(o,n))}),e.has(lt.keyField().canonicalString())||t.he.push(new Xn(lt.keyField(),n))}return t.he}function Vt(r){const t=F(r);return t.Pe||(t.Pe=Hl(t,Je(r))),t.Pe}function Hl(r,t){if(r.limitType==="F")return so(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Xn(i.field,o)});const e=r.endAt?new Hn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Hn(r.startAt.position,r.startAt.inclusive):null;return so(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function ts(r,t,e){return new ur(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function lr(r,t){return ps(Vt(r),Vt(t))&&r.limitType===t.limitType}function ca(r){return`${ms(Vt(r))}|lt:${r.limitType}`}function pe(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>aa(i)).join(", ")}]`),or(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Ie(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Ie(i)).join(",")),`Target(${n})`}(Vt(r))}; limitType=${r.limitType})`}function cr(r,t){return t.isFoundDocument()&&function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):M.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,t)&&function(n,i){for(const o of Je(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(r,t)&&function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0}(r,t)&&function(n,i){return!(n.startAt&&!function(u,c,f){const d=no(u,c,f);return u.inclusive?d<=0:d<0}(n.startAt,Je(n),i)||n.endAt&&!function(u,c,f){const d=no(u,c,f);return u.inclusive?d>=0:d>0}(n.endAt,Je(n),i))}(r,t)}function Xl(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function ha(r){return(t,e)=>{let n=!1;for(const i of Je(r)){const o=Yl(i,t,e);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function Yl(r,t,e){const n=r.field.isKeyField()?M.comparator(t.key,e.key):function(o,u,c){const f=u.data.field(o),d=c.data.field(o);return f!==null&&d!==null?ve(f,d):L()}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return L()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return n.length===1?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){oe(this.inner,(e,n)=>{for(const[i,o]of n)t(i,o)})}isEmpty(){return Wo(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl=new Y(M.comparator);function Ft(){return Jl}const fa=new Y(M.comparator);function He(...r){let t=fa;for(const e of r)t=t.insert(e.key,e);return t}function da(r){let t=fa;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function re(){return Ze()}function ma(){return Ze()}function Ze(){return new ae(r=>r.toString(),(r,t)=>r.isEqual(t))}const Zl=new Y(M.comparator),tc=new rt(M.comparator);function U(...r){let t=tc;for(const e of r)t=t.add(e);return t}const ec=new rt(q);function nc(){return ec}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gn(t)?"-0":t}}function pa(r){return{integerValue:""+r}}function rc(r,t){return Sl(t)?pa(t):gs(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(){this._=void 0}}function sc(r,t,e){return r instanceof Yn?function(i,o){const u={fields:{[Yo]:{stringValue:Xo},[Zo]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&fs(o)&&(o=ar(o)),o&&(u.fields[Jo]=o),{mapValue:u}}(e,t):r instanceof an?_a(r,t):r instanceof un?ya(r,t):function(i,o){const u=ga(i,o),c=oo(u)+oo(i.Ie);return Yr(u)&&Yr(i.Ie)?pa(c):gs(i.serializer,c)}(r,t)}function ic(r,t,e){return r instanceof an?_a(r,t):r instanceof un?ya(r,t):e}function ga(r,t){return r instanceof Jn?function(n){return Yr(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class Yn extends hr{}class an extends hr{constructor(t){super(),this.elements=t}}function _a(r,t){const e=Ta(t);for(const n of r.elements)e.some(i=>St(i,n))||e.push(n);return{arrayValue:{values:e}}}class un extends hr{constructor(t){super(),this.elements=t}}function ya(r,t){let e=Ta(t);for(const n of r.elements)e=e.filter(i=>!St(i,n));return{arrayValue:{values:e}}}class Jn extends hr{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function oo(r){return Z(r.integerValue||r.doubleValue)}function Ta(r){return ds(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function oc(r,t){return r.field.isEqual(t.field)&&function(n,i){return n instanceof an&&i instanceof an||n instanceof un&&i instanceof un?Ee(n.elements,i.elements,St):n instanceof Jn&&i instanceof Jn?St(n.Ie,i.Ie):n instanceof Yn&&i instanceof Yn}(r.transform,t.transform)}class ac{constructor(t,e){this.version=t,this.transformResults=e}}class Lt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Lt}static exists(t){return new Lt(void 0,t)}static updateTime(t){return new Lt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function zn(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class fr{}function Ea(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Ia(r.key,Lt.none()):new ln(r.key,r.data,Lt.none());{const e=r.data,n=It.empty();let i=new rt(lt.comparator);for(let o of t.fields)if(!i.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?n.delete(o):n.set(o,u),i=i.add(o)}return new ue(r.key,n,new wt(i.toArray()),Lt.none())}}function uc(r,t,e){r instanceof ln?function(i,o,u){const c=i.value.clone(),f=uo(i.fieldTransforms,o,u.transformResults);c.setAll(f),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()}(r,t,e):r instanceof ue?function(i,o,u){if(!zn(i.precondition,o))return void o.convertToUnknownDocument(u.version);const c=uo(i.fieldTransforms,o,u.transformResults),f=o.data;f.setAll(va(i)),f.setAll(c),o.convertToFoundDocument(u.version,f).setHasCommittedMutations()}(r,t,e):function(i,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function tn(r,t,e,n){return r instanceof ln?function(o,u,c,f){if(!zn(o.precondition,u))return c;const d=o.value.clone(),_=lo(o.fieldTransforms,f,u);return d.setAll(_),u.convertToFoundDocument(u.version,d).setHasLocalMutations(),null}(r,t,e,n):r instanceof ue?function(o,u,c,f){if(!zn(o.precondition,u))return c;const d=lo(o.fieldTransforms,f,u),_=u.data;return _.setAll(va(o)),_.setAll(d),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(A=>A.field))}(r,t,e,n):function(o,u,c){return zn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c}(r,t,e)}function lc(r,t){let e=null;for(const n of r.fieldTransforms){const i=t.data.field(n.field),o=ga(n.transform,i||null);o!=null&&(e===null&&(e=It.empty()),e.set(n.field,o))}return e||null}function ao(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Ee(n,i,(o,u)=>oc(o,u))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class ln extends fr{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ue extends fr{constructor(t,e,n,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function va(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function uo(r,t,e){const n=new Map;z(r.length===e.length);for(let i=0;i<e.length;i++){const o=r[i],u=o.transform,c=t.data.field(o.field);n.set(o.field,ic(u,c,e[i]))}return n}function lo(r,t,e){const n=new Map;for(const i of r){const o=i.transform,u=e.data.field(i.field);n.set(i.field,sc(o,u,t))}return n}class Ia extends fr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cc extends fr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&uc(o,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=tn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=tn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=ma();return this.mutations.forEach(i=>{const o=t.get(i.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(i.key)?null:c;const f=Ea(u,c);f!==null&&n.set(i.key,f),u.isValidDocument()||u.convertToNoDocument(O.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),U())}isEqual(t){return this.batchId===t.batchId&&Ee(this.mutations,t.mutations,(e,n)=>ao(e,n))&&Ee(this.baseMutations,t.baseMutations,(e,n)=>ao(e,n))}}class _s{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){z(t.mutations.length===n.length);let i=function(){return Zl}();const o=t.mutations;for(let u=0;u<o.length;u++)i=i.insert(o[u].key,n[u].version);return new _s(t,e,n,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et,B;function mc(r){switch(r){case V.OK:return L();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return L()}}function Aa(r){if(r===void 0)return Ot("GRPC error has no .code"),V.UNKNOWN;switch(r){case et.OK:return V.OK;case et.CANCELLED:return V.CANCELLED;case et.UNKNOWN:return V.UNKNOWN;case et.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case et.INTERNAL:return V.INTERNAL;case et.UNAVAILABLE:return V.UNAVAILABLE;case et.UNAUTHENTICATED:return V.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case et.NOT_FOUND:return V.NOT_FOUND;case et.ALREADY_EXISTS:return V.ALREADY_EXISTS;case et.PERMISSION_DENIED:return V.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case et.ABORTED:return V.ABORTED;case et.OUT_OF_RANGE:return V.OUT_OF_RANGE;case et.UNIMPLEMENTED:return V.UNIMPLEMENTED;case et.DATA_LOSS:return V.DATA_LOSS;default:return L()}}(B=et||(et={}))[B.OK=0]="OK",B[B.CANCELLED=1]="CANCELLED",B[B.UNKNOWN=2]="UNKNOWN",B[B.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",B[B.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",B[B.NOT_FOUND=5]="NOT_FOUND",B[B.ALREADY_EXISTS=6]="ALREADY_EXISTS",B[B.PERMISSION_DENIED=7]="PERMISSION_DENIED",B[B.UNAUTHENTICATED=16]="UNAUTHENTICATED",B[B.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",B[B.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",B[B.ABORTED=10]="ABORTED",B[B.OUT_OF_RANGE=11]="OUT_OF_RANGE",B[B.UNIMPLEMENTED=12]="UNIMPLEMENTED",B[B.INTERNAL=13]="INTERNAL",B[B.UNAVAILABLE=14]="UNAVAILABLE",B[B.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc=new Kt([4294967295,4294967295],0);function co(r){const t=pc().encode(r),e=new Uo;return e.update(t),new Uint8Array(e.digest())}function ho(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Kt([e,n],0),new Kt([i,o],0)]}class ys{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Xe(`Invalid padding: ${e}`);if(n<0)throw new Xe(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new Xe(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new Xe(`Invalid padding when bitmap length is 0: ${e}`);this.Ee=8*t.length-e,this.de=Kt.fromNumber(this.Ee)}Ae(t,e,n){let i=t.add(e.multiply(Kt.fromNumber(n)));return i.compare(gc)===1&&(i=new Kt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const e=co(t),[n,i]=ho(e);for(let o=0;o<this.hashCount;o++){const u=this.Ae(n,i,o);if(!this.Re(u))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new ys(o,i,e);return n.forEach(c=>u.insert(c)),u}insert(t){if(this.Ee===0)return;const e=co(t),[n,i]=ho(e);for(let o=0;o<this.hashCount;o++){const u=this.Ae(n,i,o);this.Ve(u)}}Ve(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Xe extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(t,e,n,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,cn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new dr(O.min(),i,new Y(q),Ft(),U())}}class cn{constructor(t,e,n,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new cn(n,e,U(),U(),U())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(t,e,n,i){this.me=t,this.removedTargetIds=e,this.key=n,this.fe=i}}class wa{constructor(t,e){this.targetId=t,this.ge=e}}class Ra{constructor(t,e,n=ct.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class fo{constructor(){this.pe=0,this.ye=mo(),this.we=ct.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(t){t.approximateByteSize()>0&&(this.be=!0,this.we=t)}Fe(){let t=U(),e=U(),n=U();return this.ye.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:L()}}),new cn(this.we,this.Se,t,e,n)}Me(){this.be=!1,this.ye=mo()}xe(t,e){this.be=!0,this.ye=this.ye.insert(t,e)}Oe(t){this.be=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,z(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class _c{constructor(t){this.ke=t,this.qe=new Map,this.Qe=Ft(),this.$e=Ln(),this.Ke=Ln(),this.Ue=new Y(q)}We(t){for(const e of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(e,t.fe):this.ze(e,t.key,t.fe);for(const e of t.removedTargetIds)this.ze(e,t.key,t.fe)}je(t){this.forEachTarget(t,e=>{const n=this.He(e);switch(t.state){case 0:this.Je(e)&&n.Ce(t.resumeToken);break;case 1:n.Be(),n.De||n.Me(),n.Ce(t.resumeToken);break;case 2:n.Be(),n.De||this.removeTarget(e);break;case 3:this.Je(e)&&(n.Le(),n.Ce(t.resumeToken));break;case 4:this.Je(e)&&(this.Ye(e),n.Ce(t.resumeToken));break;default:L()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.qe.forEach((n,i)=>{this.Je(i)&&e(i)})}Ze(t){const e=t.targetId,n=t.ge.count,i=this.Xe(e);if(i){const o=i.target;if(Zr(o))if(n===0){const u=new M(o.path);this.ze(e,u,_t.newNoDocument(u,O.min()))}else z(n===1);else{const u=this.et(e);if(u!==n){const c=this.tt(t),f=c?this.nt(c,t,u):1;if(f!==0){this.Ye(e);const d=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(e,d)}}}}}tt(t){const e=t.ge.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=e;let u,c;try{u=Ht(n).toUint8Array()}catch(f){if(f instanceof Ho)return Te("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{c=new ys(u,i,o)}catch(f){return Te(f instanceof Xe?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return c.Ee===0?null:c}nt(t,e,n){return e.ge.count===n-this.st(t,e.targetId)?0:2}st(t,e){const n=this.ke.getRemoteKeysForTarget(e);let i=0;return n.forEach(o=>{const u=this.ke.it(),c=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.ze(e,o,null),i++)}),i}ot(t){const e=new Map;this.qe.forEach((o,u)=>{const c=this.Xe(u);if(c){if(o.current&&Zr(c.target)){const f=new M(c.target.path);this._t(f).has(u)||this.ut(u,f)||this.ze(u,f,_t.newNoDocument(f,t))}o.ve&&(e.set(u,o.Fe()),o.Me())}});let n=U();this.Ke.forEach((o,u)=>{let c=!0;u.forEachWhile(f=>{const d=this.Xe(f);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(o))}),this.Qe.forEach((o,u)=>u.setReadTime(t));const i=new dr(t,e,this.Ue,this.Qe,n);return this.Qe=Ft(),this.$e=Ln(),this.Ke=Ln(),this.Ue=new Y(q),i}Ge(t,e){if(!this.Je(t))return;const n=this.ut(t,e.key)?2:0;this.He(t).xe(e.key,n),this.Qe=this.Qe.insert(e.key,e),this.$e=this.$e.insert(e.key,this._t(e.key).add(t)),this.Ke=this.Ke.insert(e.key,this.ct(e.key).add(t))}ze(t,e,n){if(!this.Je(t))return;const i=this.He(t);this.ut(t,e)?i.xe(e,1):i.Oe(e),this.Ke=this.Ke.insert(e,this.ct(e).delete(t)),this.Ke=this.Ke.insert(e,this.ct(e).add(t)),n&&(this.Qe=this.Qe.insert(e,n))}removeTarget(t){this.qe.delete(t)}et(t){const e=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let e=this.qe.get(t);return e||(e=new fo,this.qe.set(t,e)),e}ct(t){let e=this.Ke.get(t);return e||(e=new rt(q),this.Ke=this.Ke.insert(t,e)),e}_t(t){let e=this.$e.get(t);return e||(e=new rt(q),this.$e=this.$e.insert(t,e)),e}Je(t){const e=this.Xe(t)!==null;return e||b("WatchChangeAggregator","Detected inactive target",t),e}Xe(t){const e=this.qe.get(t);return e&&e.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new fo),this.ke.getRemoteKeysForTarget(t).forEach(e=>{this.ze(t,e,null)})}ut(t,e){return this.ke.getRemoteKeysForTarget(t).has(e)}}function Ln(){return new Y(M.comparator)}function mo(){return new Y(M.comparator)}const yc={asc:"ASCENDING",desc:"DESCENDING"},Tc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ec={and:"AND",or:"OR"};class vc{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function es(r,t){return r.useProto3Json||or(t)?t:{value:t}}function Zn(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Pa(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function Ic(r,t){return Zn(r,t.toTimestamp())}function Ct(r){return z(!!r),O.fromTimestamp(function(e){const n=Wt(e);return new tt(n.seconds,n.nanos)}(r))}function Ts(r,t){return ns(r,t).canonicalString()}function ns(r,t){const e=function(i){return new X(["projects",i.projectId,"databases",i.database])}(r).child("documents");return t===void 0?e:e.child(t)}function Va(r){const t=X.fromString(r);return z(ka(t)),t}function rs(r,t){return Ts(r.databaseId,t.path)}function $r(r,t){const e=Va(t);if(e.get(1)!==r.databaseId.projectId)throw new N(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new N(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new M(Sa(e))}function Ca(r,t){return Ts(r.databaseId,t)}function Ac(r){const t=Va(r);return t.length===4?X.emptyPath():Sa(t)}function ss(r){return new X(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Sa(r){return z(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function po(r,t,e){return{name:rs(r,t),fields:e.value.mapValue.fields}}function wc(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:L()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(d,_){return d.useProto3Json?(z(_===void 0||typeof _=="string"),ct.fromBase64String(_||"")):(z(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),ct.fromUint8Array(_||new Uint8Array))}(r,t.targetChange.resumeToken),u=t.targetChange.cause,c=u&&function(d){const _=d.code===void 0?V.UNKNOWN:Aa(d.code);return new N(_,d.message||"")}(u);e=new Ra(n,i,o,c||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const i=$r(r,n.document.name),o=Ct(n.document.updateTime),u=n.document.createTime?Ct(n.document.createTime):O.min(),c=new It({mapValue:{fields:n.document.fields}}),f=_t.newFoundDocument(i,o,u,c),d=n.targetIds||[],_=n.removedTargetIds||[];e=new Kn(d,_,f.key,f)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const i=$r(r,n.document),o=n.readTime?Ct(n.readTime):O.min(),u=_t.newNoDocument(i,o),c=n.removedTargetIds||[];e=new Kn([],c,u.key,u)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const i=$r(r,n.document),o=n.removedTargetIds||[];e=new Kn([],o,i,null)}else{if(!("filter"in t))return L();{t.filter;const n=t.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,u=new dc(i,o),c=n.targetId;e=new wa(c,u)}}return e}function Rc(r,t){let e;if(t instanceof ln)e={update:po(r,t.key,t.value)};else if(t instanceof Ia)e={delete:rs(r,t.key)};else if(t instanceof ue)e={update:po(r,t.key,t.data),updateMask:xc(t.fieldMask)};else{if(!(t instanceof cc))return L();e={verify:rs(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(o,u){const c=u.transform;if(c instanceof Yn)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof an)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof un)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Jn)return{fieldPath:u.field.canonicalString(),increment:c.Ie};throw L()}(0,n))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:Ic(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:L()}(r,t.precondition)),e}function Pc(r,t){return r&&r.length>0?(z(t!==void 0),r.map(e=>function(i,o){let u=i.updateTime?Ct(i.updateTime):Ct(o);return u.isEqual(O.min())&&(u=Ct(o)),new ac(u,i.transformResults||[])}(e,t))):[]}function Vc(r,t){return{documents:[Ca(r,t.path)]}}function Cc(r,t){const e={structuredQuery:{}},n=t.path;let i;t.collectionGroup!==null?(i=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=Ca(r,i);const o=function(d){if(d.length!==0)return Da(bt.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const u=function(d){if(d.length!==0)return d.map(_=>function(R){return{field:ge(R.field),direction:Dc(R.dir)}}(_))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const c=es(r,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{ht:e,parent:i}}function Sc(r){let t=Ac(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let i=null;if(n>0){z(n===1);const _=e.from[0];_.allDescendants?i=_.collectionId:t=t.child(_.collectionId)}let o=[];e.where&&(o=function(A){const R=ba(A);return R instanceof bt&&ia(R)?R.getFilters():[R]}(e.where));let u=[];e.orderBy&&(u=function(A){return A.map(R=>function(k){return new Xn(_e(k.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(R))}(e.orderBy));let c=null;e.limit&&(c=function(A){let R;return R=typeof A=="object"?A.value:A,or(R)?null:R}(e.limit));let f=null;e.startAt&&(f=function(A){const R=!!A.before,C=A.values||[];return new Hn(C,R)}(e.startAt));let d=null;return e.endAt&&(d=function(A){const R=!A.before,C=A.values||[];return new Hn(C,R)}(e.endAt)),Ql(t,i,u,o,c,"F",f,d)}function bc(r,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function ba(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=_e(e.unaryFilter.field);return nt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=_e(e.unaryFilter.field);return nt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=_e(e.unaryFilter.field);return nt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=_e(e.unaryFilter.field);return nt.create(u,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(r):r.fieldFilter!==void 0?function(e){return nt.create(_e(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return bt.create(e.compositeFilter.filters.map(n=>ba(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L()}}(e.compositeFilter.op))}(r):L()}function Dc(r){return yc[r]}function kc(r){return Tc[r]}function Nc(r){return Ec[r]}function ge(r){return{fieldPath:r.canonicalString()}}function _e(r){return lt.fromServerFormat(r.fieldPath)}function Da(r){return r instanceof nt?function(e){if(e.op==="=="){if(eo(e.value))return{unaryFilter:{field:ge(e.field),op:"IS_NAN"}};if(to(e.value))return{unaryFilter:{field:ge(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(eo(e.value))return{unaryFilter:{field:ge(e.field),op:"IS_NOT_NAN"}};if(to(e.value))return{unaryFilter:{field:ge(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ge(e.field),op:kc(e.op),value:e.value}}}(r):r instanceof bt?function(e){const n=e.getFilters().map(i=>Da(i));return n.length===1?n[0]:{compositeFilter:{op:Nc(e.op),filters:n}}}(r):L()}function xc(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function ka(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t,e,n,i,o=O.min(),u=O.min(),c=ct.EMPTY_BYTE_STRING,f=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=c,this.expectedCount=f}withSequenceNumber(t){return new zt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(t){this.Tt=t}}function Lc(r){const t=Sc({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?ts(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(){this.Tn=new Fc}addToCollectionParentIndex(t,e){return this.Tn.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this.Tn.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(Qt.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(Qt.min())}updateCollectionGroup(t,e,n){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class Fc{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new rt(X.comparator),o=!i.has(n);return this.index[e]=i.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new rt(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Na=41943040;class Et{static withCacheSize(t){return new Et(t,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Et.DEFAULT_COLLECTION_PERCENTILE=10,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Et.DEFAULT=new Et(Na,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Et.DISABLED=new Et(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Kn(){return new Ae(0)}static Un(){return new Ae(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o="LruGarbageCollector",Uc=1048576;function yo([r,t],[e,n]){const i=q(r,e);return i===0?q(t,n):i}class qc{constructor(t){this.Hn=t,this.buffer=new rt(yo),this.Jn=0}Yn(){return++this.Jn}Zn(t){const e=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();yo(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Bc{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){b(_o,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Ce(e)?b(_o,"Ignoring IndexedDB error during garbage collection: ",e):await Ve(e)}await this.er(3e5)})}}class jc{constructor(t,e){this.tr=t,this.params=e}calculateTargetCount(t,e){return this.tr.nr(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return P.resolve(ir.ae);const n=new qc(e);return this.tr.forEachTarget(t,i=>n.Zn(i.sequenceNumber)).next(()=>this.tr.rr(t,i=>n.Zn(i))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.tr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.tr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(b("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(go)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(b("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),go):this.ir(t,e))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,e){let n,i,o,u,c,f,d;const _=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(A=>(A>this.params.maximumSequenceNumbersToCollect?(b("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),i=this.params.maximumSequenceNumbersToCollect):i=A,u=Date.now(),this.nthSequenceNumber(t,i))).next(A=>(n=A,c=Date.now(),this.removeTargets(t,n,e))).next(A=>(o=A,f=Date.now(),this.removeOrphanedDocuments(t,n))).next(A=>(d=Date.now(),me()<=Mt.DEBUG&&b("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-_}ms
	Determined least recently used ${i} in `+(c-u)+`ms
	Removed ${o} targets in `+(f-c)+`ms
	Removed ${A} documents in `+(d-f)+`ms
Total Duration: ${d-_}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:A})))}}function zc(r,t){return new jc(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(){this.changes=new ae(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,_t.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?P.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(n=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(n!==null&&tn(n.mutation,i,wt.empty(),tt.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,U()).next(()=>n))}getLocalViewOfDocuments(t,e,n=U()){const i=re();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,n).next(o=>{let u=He();return o.forEach((c,f)=>{u=u.insert(c,f.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const n=re();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,U()))}populateOverlays(t,e,n){const i=[];return n.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((u,c)=>{e.set(u,c)})})}computeViews(t,e,n,i){let o=Ft();const u=Ze(),c=function(){return Ze()}();return e.forEach((f,d)=>{const _=n.get(d.key);i.has(d.key)&&(_===void 0||_.mutation instanceof ue)?o=o.insert(d.key,d):_!==void 0?(u.set(d.key,_.mutation.getFieldMask()),tn(_.mutation,d,_.mutation.getFieldMask(),tt.now())):u.set(d.key,wt.empty())}),this.recalculateAndSaveOverlays(t,o).next(f=>(f.forEach((d,_)=>u.set(d,_)),e.forEach((d,_)=>{var A;return c.set(d,new $c(_,(A=u.get(d))!==null&&A!==void 0?A:null))}),c))}recalculateAndSaveOverlays(t,e){const n=Ze();let i=new Y((u,c)=>u-c),o=U();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const c of u)c.keys().forEach(f=>{const d=e.get(f);if(d===null)return;let _=n.get(f)||wt.empty();_=c.applyToLocalView(d,_),n.set(f,_);const A=(i.get(c.batchId)||U()).add(f);i=i.insert(c.batchId,A)})}).next(()=>{const u=[],c=i.getReverseIterator();for(;c.hasNext();){const f=c.getNext(),d=f.key,_=f.value,A=ma();_.forEach(R=>{if(!o.has(R)){const C=Ea(e.get(R),n.get(R));C!==null&&A.set(R,C),o=o.add(R)}}),u.push(this.documentOverlayCache.saveOverlays(t,d,A))}return P.waitFor(u)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,i){return function(u){return M.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Wl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next(o=>{const u=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-o.size):P.resolve(re());let c=nn,f=o;return u.next(d=>P.forEach(d,(_,A)=>(c<A.largestBatchId&&(c=A.largestBatchId),o.get(_)?P.resolve():this.remoteDocumentCache.getEntry(t,_).next(R=>{f=f.insert(_,R)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,f,d,U())).next(_=>({batchId:c,changes:da(_)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(n=>{let i=He();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const o=e.collectionGroup;let u=He();return this.indexManager.getCollectionParents(t,o).next(c=>P.forEach(c,f=>{const d=function(A,R){return new ur(R,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(e,f.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,n,i).next(_=>{_.forEach((A,R)=>{u=u.insert(A,R)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,i))).next(u=>{o.forEach((f,d)=>{const _=d.getKey();u.get(_)===null&&(u=u.insert(_,_t.newInvalidDocument(_)))});let c=He();return u.forEach((f,d)=>{const _=o.get(f);_!==void 0&&tn(_.mutation,d,wt.empty(),tt.now()),cr(e,d)&&(c=c.insert(f,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,e){return P.resolve(this.dr.get(e))}saveBundleMetadata(t,e){return this.dr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Ct(i.createTime)}}(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.Ar.get(e))}saveNamedQuery(t,e){return this.Ar.set(e.name,function(i){return{name:i.name,query:Lc(i.bundledQuery),readTime:Ct(i.readTime)}}(e)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(){this.overlays=new Y(M.comparator),this.Rr=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const n=re();return P.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&n.set(i,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((i,o)=>{this.Et(t,e,o)}),P.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.Rr.get(n);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(n)),P.resolve()}getOverlaysForCollection(t,e,n){const i=re(),o=e.length+1,u=new M(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const f=c.getNext().value,d=f.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&f.largestBatchId>n&&i.set(f.getKey(),f)}return P.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let o=new Y((d,_)=>d-_);const u=this.overlays.getIterator();for(;u.hasNext();){const d=u.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let _=o.get(d.largestBatchId);_===null&&(_=re(),o=o.insert(d.largestBatchId,_)),_.set(d.getKey(),d)}}const c=re(),f=o.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((d,_)=>c.set(d,_)),!(c.size()>=i)););return P.resolve(c)}Et(t,e,n){const i=this.overlays.get(n.key);if(i!==null){const u=this.Rr.get(i.largestBatchId).delete(n.key);this.Rr.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(n.key,new fc(e,n));let o=this.Rr.get(e);o===void 0&&(o=U(),this.Rr.set(e,o)),this.Rr.set(e,o.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(){this.sessionToken=ct.EMPTY_BYTE_STRING}getSessionToken(t){return P.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(){this.Vr=new rt(it.mr),this.gr=new rt(it.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,e){const n=new it(t,e);this.Vr=this.Vr.add(n),this.gr=this.gr.add(n)}yr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.wr(new it(t,e))}Sr(t,e){t.forEach(n=>this.removeReference(n,e))}br(t){const e=new M(new X([])),n=new it(e,t),i=new it(e,t+1),o=[];return this.gr.forEachInRange([n,i],u=>{this.wr(u),o.push(u.key)}),o}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const e=new M(new X([])),n=new it(e,t),i=new it(e,t+1);let o=U();return this.gr.forEachInRange([n,i],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new it(t,0),n=this.Vr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class it{constructor(t,e){this.key=t,this.Cr=e}static mr(t,e){return M.comparator(t.key,e.key)||q(t.Cr,e.Cr)}static pr(t,e){return q(t.Cr,e.Cr)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Fr=1,this.Mr=new rt(it.mr)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,i){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new hc(o,e,n,i);this.mutationQueue.push(u);for(const c of i)this.Mr=this.Mr.add(new it(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return P.resolve(u)}lookupMutationBatch(t,e){return P.resolve(this.Or(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.Nr(n),o=i<0?0:i;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?hs:this.Fr-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new it(e,0),i=new it(e,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([n,i],u=>{const c=this.Or(u.Cr);o.push(c)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new rt(q);return e.forEach(i=>{const o=new it(i,0),u=new it(i,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,u],c=>{n=n.add(c.Cr)})}),P.resolve(this.Br(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let o=n;M.isDocumentKey(o)||(o=o.child(""));const u=new it(new M(o),0);let c=new rt(q);return this.Mr.forEachWhile(f=>{const d=f.key.path;return!!n.isPrefixOf(d)&&(d.length===i&&(c=c.add(f.Cr)),!0)},u),P.resolve(this.Br(c))}Br(t){const e=[];return t.forEach(n=>{const i=this.Or(n);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){z(this.Lr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.Mr;return P.forEach(e.mutations,i=>{const o=new it(i.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Mr=n})}qn(t){}containsKey(t,e){const n=new it(e,0),i=this.Mr.firstAfterOrEqual(n);return P.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}Lr(t,e){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const e=this.Nr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(t){this.kr=t,this.docs=function(){return new Y(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),o=i?i.size:0,u=this.kr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return P.resolve(n?n.document.mutableCopy():_t.newInvalidDocument(e))}getEntries(t,e){let n=Ft();return e.forEach(i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():_t.newInvalidDocument(i))}),P.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let o=Ft();const u=e.path,c=new M(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(c);for(;f.hasNext();){const{key:d,value:{document:_}}=f.getNext();if(!u.isPrefixOf(d.path))break;d.path.length>u.length+1||Rl(wl(_),n)<=0||(i.has(_.key)||cr(e,_))&&(o=o.insert(_.key,_.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,n,i){L()}qr(t,e){return P.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new Jc(this)}getSize(t){return P.resolve(this.size)}}class Jc extends Kc{constructor(t){super(),this.Ir=t}applyChanges(t){const e=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?e.push(this.Ir.addEntry(t,i)):this.Ir.removeEntry(n)}),P.waitFor(e)}getFromCache(t,e){return this.Ir.getEntry(t,e)}getAllFromCache(t,e){return this.Ir.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(t){this.persistence=t,this.Qr=new ae(e=>ms(e),ps),this.lastRemoteSnapshotVersion=O.min(),this.highestTargetId=0,this.$r=0,this.Kr=new Es,this.targetCount=0,this.Ur=Ae.Kn()}forEachTarget(t,e){return this.Qr.forEach((n,i)=>e(i)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Ur.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.$r&&(this.$r=e),P.resolve()}zn(t){this.Qr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ur=new Ae(e),this.highestTargetId=e),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,e){return this.zn(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.zn(e),P.resolve()}removeTargetData(t,e){return this.Qr.delete(e.target),this.Kr.br(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,n){let i=0;const o=[];return this.Qr.forEach((u,c)=>{c.sequenceNumber<=e&&n.get(c.targetId)===null&&(this.Qr.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)}),P.waitFor(o).next(()=>i)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const n=this.Qr.get(e)||null;return P.resolve(n)}addMatchingKeys(t,e,n){return this.Kr.yr(e,n),P.resolve()}removeMatchingKeys(t,e,n){this.Kr.Sr(e,n);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(u=>{o.push(i.markPotentiallyOrphaned(t,u))}),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Kr.br(e),P.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Kr.vr(e);return P.resolve(n)}containsKey(t,e){return P.resolve(this.Kr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(t,e){this.Wr={},this.overlays={},this.Gr=new ir(0),this.zr=!1,this.zr=!0,this.jr=new Hc,this.referenceDelegate=t(this),this.Hr=new Zc(this),this.indexManager=new Oc,this.remoteDocumentCache=function(i){return new Yc(i)}(n=>this.referenceDelegate.Jr(n)),this.serializer=new Mc(e),this.Yr=new Qc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Wc,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Wr[t.toKey()];return n||(n=new Xc(e,this.referenceDelegate),this.Wr[t.toKey()]=n),n}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,e,n){b("MemoryPersistence","Starting transaction:",t);const i=new th(this.Gr.next());return this.referenceDelegate.Zr(),n(i).next(o=>this.referenceDelegate.Xr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}ei(t,e){return P.or(Object.values(this.Wr).map(n=>()=>n.containsKey(t,e)))}}class th extends Vl{constructor(t){super(),this.currentSequenceNumber=t}}class vs{constructor(t){this.persistence=t,this.ti=new Es,this.ni=null}static ri(t){return new vs(t)}get ii(){if(this.ni)return this.ni;throw L()}addReference(t,e,n){return this.ti.addReference(n,e),this.ii.delete(n.toString()),P.resolve()}removeReference(t,e,n){return this.ti.removeReference(n,e),this.ii.add(n.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.ii.add(e.toString()),P.resolve()}removeTarget(t,e){this.ti.br(e.targetId).forEach(i=>this.ii.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.ii.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}Zr(){this.ni=new Set}Xr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.ii,n=>{const i=M.fromPath(n);return this.si(t,i).next(o=>{o||e.removeEntry(i,O.min())})}).next(()=>(this.ni=null,e.apply(t)))}updateLimboDocument(t,e){return this.si(t,e).next(n=>{n?this.ii.delete(e.toString()):this.ii.add(e.toString())})}Jr(t){return 0}si(t,e){return P.or([()=>P.resolve(this.ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.ei(t,e)])}}class tr{constructor(t,e){this.persistence=t,this.oi=new ae(n=>bl(n.path),(n,i)=>n.isEqual(i)),this.garbageCollector=zc(this,e)}static ri(t,e){return new tr(t,e)}Zr(){}Xr(t){return P.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}nr(t){const e=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(i=>n+i))}sr(t){let e=0;return this.rr(t,n=>{e++}).next(()=>e)}rr(t,e){return P.forEach(this.oi,(n,i)=>this.ar(t,n,i).next(o=>o?P.resolve():e(i)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.qr(t,u=>this.ar(t,u,e).next(c=>{c||(n++,o.removeEntry(u,O.min()))})).next(()=>o.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.oi.set(e,t.currentSequenceNumber),P.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.oi.set(n,t.currentSequenceNumber),P.resolve()}removeReference(t,e,n){return this.oi.set(n,t.currentSequenceNumber),P.resolve()}updateLimboDocument(t,e){return this.oi.set(e,t.currentSequenceNumber),P.resolve()}Jr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Bn(t.data.value)),e}ar(t,e,n){return P.or([()=>this.persistence.ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.oi.get(e);return P.resolve(i!==void 0&&i>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Hi=n,this.Ji=i}static Yi(t,e){let n=U(),i=U();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Is(t,e.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return tl()?8:Cl(el())>0?6:4}()}initialize(t,e){this.ns=t,this.indexManager=e,this.Zi=!0}getDocumentsMatchingQuery(t,e,n,i){const o={result:null};return this.rs(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.ss(t,e,i,n).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new eh;return this._s(t,e,u).next(c=>{if(o.result=c,this.Xi)return this.us(t,e,u,c.size)})}).next(()=>o.result)}us(t,e,n,i){return n.documentReadCount<this.es?(me()<=Mt.DEBUG&&b("QueryEngine","SDK will not create cache indexes for query:",pe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),P.resolve()):(me()<=Mt.DEBUG&&b("QueryEngine","Query:",pe(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.ts*i?(me()<=Mt.DEBUG&&b("QueryEngine","The SDK decides to create cache indexes for query:",pe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Vt(e))):P.resolve())}rs(t,e){if(io(e))return P.resolve(null);let n=Vt(e);return this.indexManager.getIndexType(t,n).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=ts(e,null,"F"),n=Vt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const u=U(...o);return this.ns.getDocuments(t,u).next(c=>this.indexManager.getMinOffset(t,n).next(f=>{const d=this.cs(e,c);return this.ls(e,d,u,f.readTime)?this.rs(t,ts(e,null,"F")):this.hs(t,d,e,f)}))})))}ss(t,e,n,i){return io(e)||i.isEqual(O.min())?P.resolve(null):this.ns.getDocuments(t,n).next(o=>{const u=this.cs(e,o);return this.ls(e,u,n,i)?P.resolve(null):(me()<=Mt.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),pe(e)),this.hs(t,u,e,Al(i,nn)).next(c=>c))})}cs(t,e){let n=new rt(ha(t));return e.forEach((i,o)=>{cr(t,o)&&(n=n.add(o))}),n}ls(t,e,n,i){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}_s(t,e,n){return me()<=Mt.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",pe(e)),this.ns.getDocumentsMatchingQuery(t,e,Qt.min(),n)}hs(t,e,n,i){return this.ns.getDocumentsMatchingQuery(t,n,i).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As="LocalStore",rh=3e8;class sh{constructor(t,e,n,i){this.persistence=t,this.Ps=e,this.serializer=i,this.Ts=new Y(q),this.Is=new ae(o=>ms(o),ps),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(n)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Gc(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ts))}}function ih(r,t,e,n){return new sh(r,t,e,n)}async function Ma(r,t){const e=F(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next(o=>(i=o,e.As(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const u=[],c=[];let f=U();for(const d of i){u.push(d.batchId);for(const _ of d.mutations)f=f.add(_.key)}for(const d of o){c.push(d.batchId);for(const _ of d.mutations)f=f.add(_.key)}return e.localDocuments.getDocuments(n,f).next(d=>({Rs:d,removedBatchIds:u,addedBatchIds:c}))})})}function oh(r,t){const e=F(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=t.batch.keys(),o=e.ds.newChangeBuffer({trackRemovals:!0});return function(c,f,d,_){const A=d.batch,R=A.keys();let C=P.resolve();return R.forEach(k=>{C=C.next(()=>_.getEntry(f,k)).next(x=>{const D=d.docVersions.get(k);z(D!==null),x.version.compareTo(D)<0&&(A.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),_.addEntry(x)))})}),C.next(()=>c.mutationQueue.removeMutationBatch(f,A))}(e,n,t,o).next(()=>o.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let f=U();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(f=f.add(c.batch.mutations[d].key));return f}(t))).next(()=>e.localDocuments.getDocuments(n,i))})}function La(r){const t=F(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Hr.getLastRemoteSnapshotVersion(e))}function ah(r,t){const e=F(r),n=t.snapshotVersion;let i=e.Ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=e.ds.newChangeBuffer({trackRemovals:!0});i=e.Ts;const c=[];t.targetChanges.forEach((_,A)=>{const R=i.get(A);if(!R)return;c.push(e.Hr.removeMatchingKeys(o,_.removedDocuments,A).next(()=>e.Hr.addMatchingKeys(o,_.addedDocuments,A)));let C=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(A)!==null?C=C.withResumeToken(ct.EMPTY_BYTE_STRING,O.min()).withLastLimboFreeSnapshotVersion(O.min()):_.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(_.resumeToken,n)),i=i.insert(A,C),function(x,D,$){return x.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=rh?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(R,C,_)&&c.push(e.Hr.updateTargetData(o,C))});let f=Ft(),d=U();if(t.documentUpdates.forEach(_=>{t.resolvedLimboDocuments.has(_)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,_))}),c.push(uh(o,u,t.documentUpdates).next(_=>{f=_.Vs,d=_.fs})),!n.isEqual(O.min())){const _=e.Hr.getLastRemoteSnapshotVersion(o).next(A=>e.Hr.setTargetsMetadata(o,o.currentSequenceNumber,n));c.push(_)}return P.waitFor(c).next(()=>u.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,f,d)).next(()=>f)}).then(o=>(e.Ts=i,o))}function uh(r,t,e){let n=U(),i=U();return e.forEach(o=>n=n.add(o)),t.getEntries(r,n).next(o=>{let u=Ft();return e.forEach((c,f)=>{const d=o.get(c);f.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),f.isNoDocument()&&f.version.isEqual(O.min())?(t.removeEntry(c,f.readTime),u=u.insert(c,f)):!d.isValidDocument()||f.version.compareTo(d.version)>0||f.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(f),u=u.insert(c,f)):b(As,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",f.version)}),{Vs:u,fs:i}})}function lh(r,t){const e=F(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=hs),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function ch(r,t){const e=F(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return e.Hr.getTargetData(n,t).next(o=>o?(i=o,P.resolve(i)):e.Hr.allocateTargetId(n).next(u=>(i=new zt(t,u,"TargetPurposeListen",n.currentSequenceNumber),e.Hr.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=e.Ts.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Ts=e.Ts.insert(n.targetId,n),e.Is.set(t,n.targetId)),n})}async function is(r,t,e){const n=F(r),i=n.Ts.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,u=>n.persistence.referenceDelegate.removeTarget(u,i))}catch(u){if(!Ce(u))throw u;b(As,`Failed to update sequence numbers for target ${t}: ${u}`)}n.Ts=n.Ts.remove(t),n.Is.delete(i.target)}function To(r,t,e){const n=F(r);let i=O.min(),o=U();return n.persistence.runTransaction("Execute query","readwrite",u=>function(f,d,_){const A=F(f),R=A.Is.get(_);return R!==void 0?P.resolve(A.Ts.get(R)):A.Hr.getTargetData(d,_)}(n,u,Vt(t)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,n.Hr.getMatchingKeysForTargetId(u,c.targetId).next(f=>{o=f})}).next(()=>n.Ps.getDocumentsMatchingQuery(u,t,e?i:O.min(),e?o:U())).next(c=>(hh(n,Xl(t),c),{documents:c,gs:o})))}function hh(r,t,e){let n=r.Es.get(t)||O.min();e.forEach((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.Es.set(t,n)}class Eo{constructor(){this.activeTargetIds=nc()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}bs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class fh{constructor(){this.ho=new Eo,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,e,n){this.Po[t]=e}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new Eo,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{To(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo="ConnectivityMonitor";class Io{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){b(vo,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){b(vo,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let On=null;function os(){return On===null?On=function(){return 268435456+Math.round(2147483648*Math.random())}():On++,"0x"+On.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr="RestConnection",mh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ph{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=e+"://"+t.host,this.yo=`projects/${n}/databases/${i}`,this.wo=this.databaseId.database===Qn?`project_id=${n}`:`project_id=${n}&database_id=${i}`}So(t,e,n,i,o){const u=os(),c=this.bo(t,e.toUriEncodedString());b(Gr,`Sending RPC '${t}' ${u}:`,c,n);const f={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(f,i,o),this.vo(t,c,f,n).then(d=>(b(Gr,`Received RPC '${t}' ${u}: `,d),d),d=>{throw Te(Gr,`RPC '${t}' ${u} failed with error: `,d,"url: ",c,"request:",n),d})}Co(t,e,n,i,o,u){return this.So(t,e,n,i,o)}Do(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Pe}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((i,o)=>t[o]=i),n&&n.headers.forEach((i,o)=>t[o]=i)}bo(t,e){const n=mh[t];return`${this.po}/v1/${e}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Ko(t){this.ko(t)}Uo(t){this.qo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class _h extends ph{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,e,n,i){const o=os();return new Promise((u,c)=>{const f=new qo;f.setWithCredentials(!0),f.listenOnce(Bo.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case qn.NO_ERROR:const _=f.getResponseJson();b(pt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(_)),u(_);break;case qn.TIMEOUT:b(pt,`RPC '${t}' ${o} timed out`),c(new N(V.DEADLINE_EXCEEDED,"Request time out"));break;case qn.HTTP_ERROR:const A=f.getStatus();if(b(pt,`RPC '${t}' ${o} failed with status:`,A,"response text:",f.getResponseText()),A>0){let R=f.getResponseJson();Array.isArray(R)&&(R=R[0]);const C=R==null?void 0:R.error;if(C&&C.status&&C.message){const k=function(D){const $=D.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf($)>=0?$:V.UNKNOWN}(C.status);c(new N(k,C.message))}else c(new N(V.UNKNOWN,"Server responded with status "+f.getStatus()))}else c(new N(V.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{b(pt,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(i);b(pt,`RPC '${t}' ${o} sending request:`,i),f.send(e,"POST",d,n,15)})}Wo(t,e,n){const i=os(),o=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=Ko(),c=zo(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(f.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Do(f.initMessageHeaders,e,n),f.encodeInitMessageHeaders=!0;const _=o.join("");b(pt,`Creating RPC '${t}' stream ${i}: ${_}`,f);const A=u.createWebChannel(_,f);let R=!1,C=!1;const k=new gh({Fo:D=>{C?b(pt,`Not sending because RPC '${t}' stream ${i} is closed:`,D):(R||(b(pt,`Opening RPC '${t}' stream ${i} transport.`),A.open(),R=!0),b(pt,`RPC '${t}' stream ${i} sending:`,D),A.send(D))},Mo:()=>A.close()}),x=(D,$,K)=>{D.listen($,G=>{try{K(G)}catch(st){setTimeout(()=>{throw st},0)}})};return x(A,We.EventType.OPEN,()=>{C||(b(pt,`RPC '${t}' stream ${i} transport opened.`),k.Qo())}),x(A,We.EventType.CLOSE,()=>{C||(C=!0,b(pt,`RPC '${t}' stream ${i} transport closed`),k.Ko())}),x(A,We.EventType.ERROR,D=>{C||(C=!0,Te(pt,`RPC '${t}' stream ${i} transport errored:`,D),k.Ko(new N(V.UNAVAILABLE,"The operation could not be completed")))}),x(A,We.EventType.MESSAGE,D=>{var $;if(!C){const K=D.data[0];z(!!K);const G=K,st=(G==null?void 0:G.error)||(($=G[0])===null||$===void 0?void 0:$.error);if(st){b(pt,`RPC '${t}' stream ${i} received error:`,st);const Dt=st.status;let ot=function(g){const y=et[g];if(y!==void 0)return Aa(y)}(Dt),E=st.message;ot===void 0&&(ot=V.INTERNAL,E="Unknown error status: "+Dt+" with message "+st.message),C=!0,k.Ko(new N(ot,E)),A.close()}else b(pt,`RPC '${t}' stream ${i} received:`,K),k.Uo(K)}}),x(c,jo.STAT_EVENT,D=>{D.stat===Hr.PROXY?b(pt,`RPC '${t}' stream ${i} detected buffering proxy`):D.stat===Hr.NOPROXY&&b(pt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.$o()},0),k}}function Qr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(r){return new vc(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(t,e,n=1e3,i=1.5,o=6e4){this.Ti=t,this.timerId=e,this.Go=n,this.zo=i,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const e=Math.floor(this.Ho+this.e_()),n=Math.max(0,Date.now()-this.Yo),i=Math.max(0,e-n);i>0&&b("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao="PersistentStream";class Fa{constructor(t,e,n,i,o,u,c,f){this.Ti=t,this.n_=n,this.r_=i,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=f,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Oa(t,e)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,e){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(Ot(e.toString()),Ot("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(e)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),e=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.i_===e&&this.V_(n,i)},n=>{t(()=>{const i=new N(V.UNKNOWN,"Fetching auth token failed: "+n.message);return this.m_(i)})})}V_(t,e){const n=this.R_(this.i_);this.stream=this.f_(t,e),this.stream.xo(()=>{n(()=>this.listener.xo())}),this.stream.No(()=>{n(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(i=>{n(()=>this.m_(i))}),this.stream.onMessage(i=>{n(()=>++this.__==1?this.g_(i):this.onNext(i))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return b(Ao,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return e=>{this.Ti.enqueueAndForget(()=>this.i_===t?e():(b(Ao,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class yh extends Fa{constructor(t,e,n,i,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,u),this.serializer=o}f_(t,e){return this.connection.Wo("Listen",t,e)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const e=wc(this.serializer,t),n=function(o){if(!("targetChange"in o))return O.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?O.min():u.readTime?Ct(u.readTime):O.min()}(t);return this.listener.p_(e,n)}y_(t){const e={};e.database=ss(this.serializer),e.addTarget=function(o,u){let c;const f=u.target;if(c=Zr(f)?{documents:Vc(o,f)}:{query:Cc(o,f).ht},c.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){c.resumeToken=Pa(o,u.resumeToken);const d=es(o,u.expectedCount);d!==null&&(c.expectedCount=d)}else if(u.snapshotVersion.compareTo(O.min())>0){c.readTime=Zn(o,u.snapshotVersion.toTimestamp());const d=es(o,u.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,t);const n=bc(this.serializer,t);n&&(e.labels=n),this.I_(e)}w_(t){const e={};e.database=ss(this.serializer),e.removeTarget=t,this.I_(e)}}class Th extends Fa{constructor(t,e,n,i,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,u),this.serializer=o}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(t,e){return this.connection.Wo("Write",t,e)}g_(t){return z(!!t.streamToken),this.lastStreamToken=t.streamToken,z(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){z(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const e=Pc(t.writeResults,t.commitTime),n=Ct(t.commitTime);return this.listener.v_(n,e)}C_(){const t={};t.database=ss(this.serializer),this.I_(t)}b_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>Rc(this.serializer,n))};this.I_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{}class vh extends Eh{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new N(V.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,n,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.So(t,ns(e,n),i,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(V.UNKNOWN,o.toString())})}Co(t,e,n,i,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,c])=>this.connection.Co(t,ns(e,n),i,u,c,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new N(V.UNKNOWN,u.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class Ih{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Ot(e),this.N_=!1):b("OnlineStateTracker",e)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie="RemoteStore";class Ah{constructor(t,e,n,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(u=>{n.enqueueAndForget(async()=>{le(this)&&(b(ie,"Restarting streams for network reachability change."),await async function(f){const d=F(f);d.W_.add(4),await hn(d),d.j_.set("Unknown"),d.W_.delete(4),await pr(d)}(this))})}),this.j_=new Ih(n,i)}}async function pr(r){if(le(r))for(const t of r.G_)await t(!0)}async function hn(r){for(const t of r.G_)await t(!1)}function Ua(r,t){const e=F(r);e.U_.has(t.targetId)||(e.U_.set(t.targetId,t),Vs(e)?Ps(e):Se(e).c_()&&Rs(e,t))}function ws(r,t){const e=F(r),n=Se(e);e.U_.delete(t),n.c_()&&qa(e,t),e.U_.size===0&&(n.c_()?n.P_():le(e)&&e.j_.set("Unknown"))}function Rs(r,t){if(r.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(O.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Se(r).y_(t)}function qa(r,t){r.H_.Ne(t),Se(r).w_(t)}function Ps(r){r.H_=new _c({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>r.U_.get(t)||null,it:()=>r.datastore.serializer.databaseId}),Se(r).start(),r.j_.B_()}function Vs(r){return le(r)&&!Se(r).u_()&&r.U_.size>0}function le(r){return F(r).W_.size===0}function Ba(r){r.H_=void 0}async function wh(r){r.j_.set("Online")}async function Rh(r){r.U_.forEach((t,e)=>{Rs(r,t)})}async function Ph(r,t){Ba(r),Vs(r)?(r.j_.q_(t),Ps(r)):r.j_.set("Unknown")}async function Vh(r,t,e){if(r.j_.set("Online"),t instanceof Ra&&t.state===2&&t.cause)try{await async function(i,o){const u=o.cause;for(const c of o.targetIds)i.U_.has(c)&&(await i.remoteSyncer.rejectListen(c,u),i.U_.delete(c),i.H_.removeTarget(c))}(r,t)}catch(n){b(ie,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await er(r,n)}else if(t instanceof Kn?r.H_.We(t):t instanceof wa?r.H_.Ze(t):r.H_.je(t),!e.isEqual(O.min()))try{const n=await La(r.localStore);e.compareTo(n)>=0&&await function(o,u){const c=o.H_.ot(u);return c.targetChanges.forEach((f,d)=>{if(f.resumeToken.approximateByteSize()>0){const _=o.U_.get(d);_&&o.U_.set(d,_.withResumeToken(f.resumeToken,u))}}),c.targetMismatches.forEach((f,d)=>{const _=o.U_.get(f);if(!_)return;o.U_.set(f,_.withResumeToken(ct.EMPTY_BYTE_STRING,_.snapshotVersion)),qa(o,f);const A=new zt(_.target,f,d,_.sequenceNumber);Rs(o,A)}),o.remoteSyncer.applyRemoteEvent(c)}(r,e)}catch(n){b(ie,"Failed to raise snapshot:",n),await er(r,n)}}async function er(r,t,e){if(!Ce(t))throw t;r.W_.add(1),await hn(r),r.j_.set("Offline"),e||(e=()=>La(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{b(ie,"Retrying IndexedDB access"),await e(),r.W_.delete(1),await pr(r)})}function ja(r,t){return t().catch(e=>er(r,e,t))}async function gr(r){const t=F(r),e=Yt(t);let n=t.K_.length>0?t.K_[t.K_.length-1].batchId:hs;for(;Ch(t);)try{const i=await lh(t.localStore,n);if(i===null){t.K_.length===0&&e.P_();break}n=i.batchId,Sh(t,i)}catch(i){await er(t,i)}za(t)&&Ka(t)}function Ch(r){return le(r)&&r.K_.length<10}function Sh(r,t){r.K_.push(t);const e=Yt(r);e.c_()&&e.S_&&e.b_(t.mutations)}function za(r){return le(r)&&!Yt(r).u_()&&r.K_.length>0}function Ka(r){Yt(r).start()}async function bh(r){Yt(r).C_()}async function Dh(r){const t=Yt(r);for(const e of r.K_)t.b_(e.mutations)}async function kh(r,t,e){const n=r.K_.shift(),i=_s.from(n,t,e);await ja(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await gr(r)}async function Nh(r,t){t&&Yt(r).S_&&await async function(n,i){if(function(u){return mc(u)&&u!==V.ABORTED}(i.code)){const o=n.K_.shift();Yt(n).h_(),await ja(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,i)),await gr(n)}}(r,t),za(r)&&Ka(r)}async function wo(r,t){const e=F(r);e.asyncQueue.verifyOperationInProgress(),b(ie,"RemoteStore received new credentials");const n=le(e);e.W_.add(3),await hn(e),n&&e.j_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.W_.delete(3),await pr(e)}async function xh(r,t){const e=F(r);t?(e.W_.delete(2),await pr(e)):t||(e.W_.add(2),await hn(e),e.j_.set("Unknown"))}function Se(r){return r.J_||(r.J_=function(e,n,i){const o=F(e);return o.M_(),new yh(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{xo:wh.bind(null,r),No:Rh.bind(null,r),Lo:Ph.bind(null,r),p_:Vh.bind(null,r)}),r.G_.push(async t=>{t?(r.J_.h_(),Vs(r)?Ps(r):r.j_.set("Unknown")):(await r.J_.stop(),Ba(r))})),r.J_}function Yt(r){return r.Y_||(r.Y_=function(e,n,i){const o=F(e);return o.M_(),new Th(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{xo:()=>Promise.resolve(),No:bh.bind(null,r),Lo:Nh.bind(null,r),D_:Dh.bind(null,r),v_:kh.bind(null,r)}),r.G_.push(async t=>{t?(r.Y_.h_(),await gr(r)):(await r.Y_.stop(),r.K_.length>0&&(b(ie,`Stopping write stream with ${r.K_.length} pending writes`),r.K_=[]))})),r.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(t,e,n,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new $t,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,o){const u=Date.now()+n,c=new Cs(t,e,u,i,o);return c.start(n),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ss(r,t){if(Ot("AsyncQueue",`${t}: ${r}`),Ce(r))return new N(V.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{static emptySet(t){return new ye(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||M.comparator(e.key,n.key):(e,n)=>M.comparator(e.key,n.key),this.keyedMap=He(),this.sortedSet=new Y(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ye)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new ye;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(){this.Z_=new Y(M.comparator)}track(t){const e=t.doc.key,n=this.Z_.get(e);n?t.type!==0&&n.type===3?this.Z_=this.Z_.insert(e,t):t.type===3&&n.type!==1?this.Z_=this.Z_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.Z_=this.Z_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.Z_=this.Z_.remove(e):t.type===1&&n.type===2?this.Z_=this.Z_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):L():this.Z_=this.Z_.insert(e,t)}X_(){const t=[];return this.Z_.inorderTraversal((e,n)=>{t.push(n)}),t}}class we{constructor(t,e,n,i,o,u,c,f,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=c,this.excludesMetadataChanges=f,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,i,o){const u=[];return e.forEach(c=>{u.push({type:0,doc:c})}),new we(t,e,ye.emptySet(e),u,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&lr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class Lh{constructor(){this.queries=Po(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(e,n){const i=F(e),o=i.queries;i.queries=Po(),o.forEach((u,c)=>{for(const f of c.ta)f.onError(n)})})(this,new N(V.ABORTED,"Firestore shutting down"))}}function Po(){return new ae(r=>ca(r),lr)}async function Oh(r,t){const e=F(r);let n=3;const i=t.query;let o=e.queries.get(i);o?!o.na()&&t.ra()&&(n=2):(o=new Mh,n=t.ra()?0:1);try{switch(n){case 0:o.ea=await e.onListen(i,!0);break;case 1:o.ea=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(u){const c=Ss(u,`Initialization of query '${pe(t.query)}' failed`);return void t.onError(c)}e.queries.set(i,o),o.ta.push(t),t.sa(e.onlineState),o.ea&&t.oa(o.ea)&&bs(e)}async function Fh(r,t){const e=F(r),n=t.query;let i=3;const o=e.queries.get(n);if(o){const u=o.ta.indexOf(t);u>=0&&(o.ta.splice(u,1),o.ta.length===0?i=t.ra()?0:1:!o.na()&&t.ra()&&(i=2))}switch(i){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function Uh(r,t){const e=F(r);let n=!1;for(const i of t){const o=i.query,u=e.queries.get(o);if(u){for(const c of u.ta)c.oa(i)&&(n=!0);u.ea=i}}n&&bs(e)}function qh(r,t,e){const n=F(r),i=n.queries.get(t);if(i)for(const o of i.ta)o.onError(e);n.queries.delete(t)}function bs(r){r.ia.forEach(t=>{t.next()})}var as,Vo;(Vo=as||(as={}))._a="default",Vo.Cache="cache";class Bh{constructor(t,e,n){this.query=t,this.aa=e,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=n||{}}oa(t){if(!this.options.includeMetadataChanges){const n=[];for(const i of t.docChanges)i.type!==3&&n.push(i);t=new we(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ua?this.la(t)&&(this.aa.next(t),e=!0):this.ha(t,this.onlineState)&&(this.Pa(t),e=!0),this.ca=t,e}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let e=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),e=!0),e}ha(t,e){if(!t.fromCache||!this.ra())return!0;const n=e!=="Offline";return(!this.options.Ta||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}la(t){if(t.docChanges.length>0)return!0;const e=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Pa(t){t=we.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==as.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(t){this.key=t}}class Ga{constructor(t){this.key=t}}class jh{constructor(t,e){this.query=t,this.fa=e,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=U(),this.mutatedKeys=U(),this.ya=ha(t),this.wa=new ye(this.ya)}get Sa(){return this.fa}ba(t,e){const n=e?e.Da:new Ro,i=e?e.wa:this.wa;let o=e?e.mutatedKeys:this.mutatedKeys,u=i,c=!1;const f=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((_,A)=>{const R=i.get(_),C=cr(this.query,A)?A:null,k=!!R&&this.mutatedKeys.has(R.key),x=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let D=!1;R&&C?R.data.isEqual(C.data)?k!==x&&(n.track({type:3,doc:C}),D=!0):this.va(R,C)||(n.track({type:2,doc:C}),D=!0,(f&&this.ya(C,f)>0||d&&this.ya(C,d)<0)&&(c=!0)):!R&&C?(n.track({type:0,doc:C}),D=!0):R&&!C&&(n.track({type:1,doc:R}),D=!0,(f||d)&&(c=!0)),D&&(C?(u=u.add(C),o=x?o.add(_):o.delete(_)):(u=u.delete(_),o=o.delete(_)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const _=this.query.limitType==="F"?u.last():u.first();u=u.delete(_.key),o=o.delete(_.key),n.track({type:1,doc:_})}return{wa:u,Da:n,ls:c,mutatedKeys:o}}va(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const o=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const u=t.Da.X_();u.sort((_,A)=>function(C,k){const x=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return x(C)-x(k)}(_.type,A.type)||this.ya(_.doc,A.doc)),this.Ca(n),i=i!=null&&i;const c=e&&!i?this.Fa():[],f=this.pa.size===0&&this.current&&!i?1:0,d=f!==this.ga;return this.ga=f,u.length!==0||d?{snapshot:new we(this.query,t.wa,o,u,t.mutatedKeys,f===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ma:c}:{Ma:c}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Ro,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(e=>this.fa=this.fa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.fa=this.fa.delete(e)),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=U(),this.wa.forEach(n=>{this.xa(n.key)&&(this.pa=this.pa.add(n.key))});const e=[];return t.forEach(n=>{this.pa.has(n)||e.push(new Ga(n))}),this.pa.forEach(n=>{t.has(n)||e.push(new $a(n))}),e}Oa(t){this.fa=t.gs,this.pa=U();const e=this.ba(t.documents);return this.applyChanges(e,!0)}Na(){return we.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Ds="SyncEngine";class zh{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Kh{constructor(t){this.key=t,this.Ba=!1}}class $h{constructor(t,e,n,i,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.La={},this.ka=new ae(c=>ca(c),lr),this.qa=new Map,this.Qa=new Set,this.$a=new Y(M.comparator),this.Ka=new Map,this.Ua=new Es,this.Wa={},this.Ga=new Map,this.za=Ae.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function Gh(r,t,e=!0){const n=Ja(r);let i;const o=n.ka.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Na()):i=await Qa(n,t,e,!0),i}async function Qh(r,t){const e=Ja(r);await Qa(e,t,!0,!1)}async function Qa(r,t,e,n){const i=await ch(r.localStore,Vt(t)),o=i.targetId,u=r.sharedClientState.addLocalQueryTarget(o,e);let c;return n&&(c=await Wh(r,t,o,u==="current",i.resumeToken)),r.isPrimaryClient&&e&&Ua(r.remoteStore,i),c}async function Wh(r,t,e,n,i){r.Ha=(A,R,C)=>async function(x,D,$,K){let G=D.view.ba($);G.ls&&(G=await To(x.localStore,D.query,!1).then(({documents:E})=>D.view.ba(E,G)));const st=K&&K.targetChanges.get(D.targetId),Dt=K&&K.targetMismatches.get(D.targetId)!=null,ot=D.view.applyChanges(G,x.isPrimaryClient,st,Dt);return So(x,D.targetId,ot.Ma),ot.snapshot}(r,A,R,C);const o=await To(r.localStore,t,!0),u=new jh(t,o.gs),c=u.ba(o.documents),f=cn.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",i),d=u.applyChanges(c,r.isPrimaryClient,f);So(r,e,d.Ma);const _=new zh(t,e,u);return r.ka.set(t,_),r.qa.has(e)?r.qa.get(e).push(t):r.qa.set(e,[t]),d.snapshot}async function Hh(r,t,e){const n=F(r),i=n.ka.get(t),o=n.qa.get(i.targetId);if(o.length>1)return n.qa.set(i.targetId,o.filter(u=>!lr(u,t))),void n.ka.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await is(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),e&&ws(n.remoteStore,i.targetId),us(n,i.targetId)}).catch(Ve)):(us(n,i.targetId),await is(n.localStore,i.targetId,!0))}async function Xh(r,t){const e=F(r),n=e.ka.get(t),i=e.qa.get(n.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),ws(e.remoteStore,n.targetId))}async function Yh(r,t,e){const n=sf(r);try{const i=await function(u,c){const f=F(u),d=tt.now(),_=c.reduce((C,k)=>C.add(k.key),U());let A,R;return f.persistence.runTransaction("Locally write mutations","readwrite",C=>{let k=Ft(),x=U();return f.ds.getEntries(C,_).next(D=>{k=D,k.forEach(($,K)=>{K.isValidDocument()||(x=x.add($))})}).next(()=>f.localDocuments.getOverlayedDocuments(C,k)).next(D=>{A=D;const $=[];for(const K of c){const G=lc(K,A.get(K.key).overlayedDocument);G!=null&&$.push(new ue(K.key,G,na(G.value.mapValue),Lt.exists(!0)))}return f.mutationQueue.addMutationBatch(C,d,$,c)}).next(D=>{R=D;const $=D.applyToLocalDocumentSet(A,x);return f.documentOverlayCache.saveOverlays(C,D.batchId,$)})}).then(()=>({batchId:R.batchId,changes:da(A)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(i.batchId),function(u,c,f){let d=u.Wa[u.currentUser.toKey()];d||(d=new Y(q)),d=d.insert(c,f),u.Wa[u.currentUser.toKey()]=d}(n,i.batchId,e),await fn(n,i.changes),await gr(n.remoteStore)}catch(i){const o=Ss(i,"Failed to persist write");e.reject(o)}}async function Wa(r,t){const e=F(r);try{const n=await ah(e.localStore,t);t.targetChanges.forEach((i,o)=>{const u=e.Ka.get(o);u&&(z(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?u.Ba=!0:i.modifiedDocuments.size>0?z(u.Ba):i.removedDocuments.size>0&&(z(u.Ba),u.Ba=!1))}),await fn(e,n,t)}catch(n){await Ve(n)}}function Co(r,t,e){const n=F(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const i=[];n.ka.forEach((o,u)=>{const c=u.view.sa(t);c.snapshot&&i.push(c.snapshot)}),function(u,c){const f=F(u);f.onlineState=c;let d=!1;f.queries.forEach((_,A)=>{for(const R of A.ta)R.sa(c)&&(d=!0)}),d&&bs(f)}(n.eventManager,t),i.length&&n.La.p_(i),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function Jh(r,t,e){const n=F(r);n.sharedClientState.updateQueryState(t,"rejected",e);const i=n.Ka.get(t),o=i&&i.key;if(o){let u=new Y(M.comparator);u=u.insert(o,_t.newNoDocument(o,O.min()));const c=U().add(o),f=new dr(O.min(),new Map,new Y(q),u,c);await Wa(n,f),n.$a=n.$a.remove(o),n.Ka.delete(t),ks(n)}else await is(n.localStore,t,!1).then(()=>us(n,t,e)).catch(Ve)}async function Zh(r,t){const e=F(r),n=t.batch.batchId;try{const i=await oh(e.localStore,t);Xa(e,n,null),Ha(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await fn(e,i)}catch(i){await Ve(i)}}async function tf(r,t,e){const n=F(r);try{const i=await function(u,c){const f=F(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let _;return f.mutationQueue.lookupMutationBatch(d,c).next(A=>(z(A!==null),_=A.keys(),f.mutationQueue.removeMutationBatch(d,A))).next(()=>f.mutationQueue.performConsistencyCheck(d)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(d,_,c)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,_)).next(()=>f.localDocuments.getDocuments(d,_))})}(n.localStore,t);Xa(n,t,e),Ha(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await fn(n,i)}catch(i){await Ve(i)}}function Ha(r,t){(r.Ga.get(t)||[]).forEach(e=>{e.resolve()}),r.Ga.delete(t)}function Xa(r,t,e){const n=F(r);let i=n.Wa[n.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),n.Wa[n.currentUser.toKey()]=i}}function us(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.qa.get(t))r.ka.delete(n),e&&r.La.Ja(n,e);r.qa.delete(t),r.isPrimaryClient&&r.Ua.br(t).forEach(n=>{r.Ua.containsKey(n)||Ya(r,n)})}function Ya(r,t){r.Qa.delete(t.path.canonicalString());const e=r.$a.get(t);e!==null&&(ws(r.remoteStore,e),r.$a=r.$a.remove(t),r.Ka.delete(e),ks(r))}function So(r,t,e){for(const n of e)n instanceof $a?(r.Ua.addReference(n.key,t),ef(r,n)):n instanceof Ga?(b(Ds,"Document no longer in limbo: "+n.key),r.Ua.removeReference(n.key,t),r.Ua.containsKey(n.key)||Ya(r,n.key)):L()}function ef(r,t){const e=t.key,n=e.path.canonicalString();r.$a.get(e)||r.Qa.has(n)||(b(Ds,"New document in limbo: "+e),r.Qa.add(n),ks(r))}function ks(r){for(;r.Qa.size>0&&r.$a.size<r.maxConcurrentLimboResolutions;){const t=r.Qa.values().next().value;r.Qa.delete(t);const e=new M(X.fromString(t)),n=r.za.next();r.Ka.set(n,new Kh(e)),r.$a=r.$a.insert(e,n),Ua(r.remoteStore,new zt(Vt(la(e.path)),n,"TargetPurposeLimboResolution",ir.ae))}}async function fn(r,t,e){const n=F(r),i=[],o=[],u=[];n.ka.isEmpty()||(n.ka.forEach((c,f)=>{u.push(n.Ha(f,t,e).then(d=>{var _;if((d||e)&&n.isPrimaryClient){const A=d?!d.fromCache:(_=e==null?void 0:e.targetChanges.get(f.targetId))===null||_===void 0?void 0:_.current;n.sharedClientState.updateQueryState(f.targetId,A?"current":"not-current")}if(d){i.push(d);const A=Is.Yi(f.targetId,d);o.push(A)}}))}),await Promise.all(u),n.La.p_(i),await async function(f,d){const _=F(f);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>P.forEach(d,R=>P.forEach(R.Hi,C=>_.persistence.referenceDelegate.addReference(A,R.targetId,C)).next(()=>P.forEach(R.Ji,C=>_.persistence.referenceDelegate.removeReference(A,R.targetId,C)))))}catch(A){if(!Ce(A))throw A;b(As,"Failed to update sequence numbers: "+A)}for(const A of d){const R=A.targetId;if(!A.fromCache){const C=_.Ts.get(R),k=C.snapshotVersion,x=C.withLastLimboFreeSnapshotVersion(k);_.Ts=_.Ts.insert(R,x)}}}(n.localStore,o))}async function nf(r,t){const e=F(r);if(!e.currentUser.isEqual(t)){b(Ds,"User change. New user:",t.toKey());const n=await Ma(e.localStore,t);e.currentUser=t,function(o,u){o.Ga.forEach(c=>{c.forEach(f=>{f.reject(new N(V.CANCELLED,u))})}),o.Ga.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await fn(e,n.Rs)}}function rf(r,t){const e=F(r),n=e.Ka.get(t);if(n&&n.Ba)return U().add(n.key);{let i=U();const o=e.qa.get(t);if(!o)return i;for(const u of o){const c=e.ka.get(u);i=i.unionWith(c.view.Sa)}return i}}function Ja(r){const t=F(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=Wa.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=rf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Jh.bind(null,t),t.La.p_=Uh.bind(null,t.eventManager),t.La.Ja=qh.bind(null,t.eventManager),t}function sf(r){const t=F(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Zh.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=tf.bind(null,t),t}class nr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=mr(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,e){return null}nu(t,e){return null}eu(t){return ih(this.persistence,new nh,t.initialUser,this.serializer)}Xa(t){return new xa(vs.ri,this.serializer)}Za(t){return new fh}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}nr.provider={build:()=>new nr};class of extends nr{constructor(t){super(),this.cacheSizeBytes=t}tu(t,e){z(this.persistence.referenceDelegate instanceof tr);const n=this.persistence.referenceDelegate.garbageCollector;return new Bc(n,t.asyncQueue,e)}Xa(t){const e=this.cacheSizeBytes!==void 0?Et.withCacheSize(this.cacheSizeBytes):Et.DEFAULT;return new xa(n=>tr.ri(n,e),this.serializer)}}class ls{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Co(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=nf.bind(null,this.syncEngine),await xh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Lh}()}createDatastore(t){const e=mr(t.databaseInfo.databaseId),n=function(o){return new _h(o)}(t.databaseInfo);return function(o,u,c,f){return new vh(o,u,c,f)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,i,o,u,c){return new Ah(n,i,o,u,c)}(this.localStore,this.datastore,t.asyncQueue,e=>Co(this.syncEngine,e,0),function(){return Io.D()?new Io:new dh}())}createSyncEngine(t,e){return function(i,o,u,c,f,d,_){const A=new $h(i,o,u,c,f,d);return _&&(A.ja=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=F(i);b(ie,"RemoteStore shutting down."),o.W_.add(5),await hn(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}ls.provider={build:()=>new ls};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):Ot("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt="FirestoreClient";class uf{constructor(t,e,n,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=gt.UNAUTHENTICATED,this.clientId=Go.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async u=>{b(Jt,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(n,u=>(b(Jt,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new $t;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Ss(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Wr(r,t){r.asyncQueue.verifyOperationInProgress(),b(Jt,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await Ma(t.localStore,i),n=i)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function bo(r,t){r.asyncQueue.verifyOperationInProgress();const e=await lf(r);b(Jt,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>wo(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>wo(t.remoteStore,i)),r._onlineComponents=t}async function lf(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){b(Jt,"Using user provided OfflineComponentProvider");try{await Wr(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;Te("Error using user provided cache. Falling back to memory cache: "+e),await Wr(r,new nr)}}else b(Jt,"Using default OfflineComponentProvider"),await Wr(r,new of(void 0));return r._offlineComponents}async function Za(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(b(Jt,"Using user provided OnlineComponentProvider"),await bo(r,r._uninitializedComponentsProvider._online)):(b(Jt,"Using default OnlineComponentProvider"),await bo(r,new ls))),r._onlineComponents}function cf(r){return Za(r).then(t=>t.syncEngine)}async function hf(r){const t=await Za(r),e=t.eventManager;return e.onListen=Gh.bind(null,t.syncEngine),e.onUnlisten=Hh.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Qh.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Xh.bind(null,t.syncEngine),e}function ff(r,t,e={}){const n=new $t;return r.asyncQueue.enqueueAndForget(async()=>function(o,u,c,f,d){const _=new af({next:R=>{_.su(),u.enqueueAndForget(()=>Fh(o,A)),R.fromCache&&f.source==="server"?d.reject(new N(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(R)},error:R=>d.reject(R)}),A=new Bh(c,_,{includeMetadataChanges:!0,Ta:!0});return Oh(o,A)}(await hf(r),r.asyncQueue,t,e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(r,t,e){if(!e)throw new N(V.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function df(r,t,e,n){if(t===!0&&n===!0)throw new N(V.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function ko(r){if(!M.isDocumentKey(r))throw new N(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function No(r){if(M.isDocumentKey(r))throw new N(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Ns(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":L()}function rr(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new N(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ns(r);throw new N(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu="firestore.googleapis.com",xo=!0;class Mo{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new N(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=nu,this.ssl=xo}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:xo;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Na;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Uc)throw new N(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}df("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tu((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class _r{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mo({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mo(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new pl;switch(n.type){case"firstParty":return new Tl(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new N(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Do.get(e);n&&(b("ComponentProvider","Removing Datastore"),Do.delete(e),n.terminate())}(this),Promise.resolve()}}function mf(r,t,e,n={}){var i;const o=(r=rr(r,_r))._getSettings(),u=`${t}:${e}`;if(o.host!==nu&&o.host!==u&&Te("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),n.mockUserToken){let c,f;if(typeof n.mockUserToken=="string")c=n.mockUserToken,f=gt.MOCK_USER;else{c=Yu(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const d=n.mockUserToken.sub||n.mockUserToken.user_id;if(!d)throw new N(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new gt(d)}r._authCredentials=new gl(new $o(c,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new yr(this.firestore,t,this._query)}}class Rt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Rt(this.firestore,t,this._key)}}class Gt extends yr{constructor(t,e,n){super(t,e,la(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Rt(this.firestore,null,new M(t))}withConverter(t){return new Gt(this.firestore,t,this._path)}}function pf(r,t,...e){if(r=en(r),eu("collection","path",t),r instanceof _r){const n=X.fromString(t,...e);return No(n),new Gt(r,null,n)}{if(!(r instanceof Rt||r instanceof Gt))throw new N(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(X.fromString(t,...e));return No(n),new Gt(r.firestore,null,n)}}function gf(r,t,...e){if(r=en(r),arguments.length===1&&(t=Go.newId()),eu("doc","path",t),r instanceof _r){const n=X.fromString(t,...e);return ko(n),new Rt(r,null,new M(n))}{if(!(r instanceof Rt||r instanceof Gt))throw new N(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(X.fromString(t,...e));return ko(n),new Rt(r.firestore,r instanceof Gt?r.converter:null,new M(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo="AsyncQueue";class Oo{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Oa(this,"async_queue_retry"),this.Su=()=>{const n=Qr();n&&b(Lo,"Visibility state changed to "+n.visibilityState),this.a_.t_()},this.bu=t;const e=Qr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const e=Qr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Su)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const e=new $t;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!Ce(t))throw t;b(Lo,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const e=this.bu.then(()=>(this.pu=!0,t().catch(n=>{this.gu=n,this.pu=!1;const i=function(u){let c=u.message||"";return u.stack&&(c=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),c}(n);throw Ot("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.pu=!1,n))));return this.bu=e,e}enqueueAfterDelay(t,e,n){this.Du(),this.wu.indexOf(t)>-1&&(e=0);const i=Cs.createAndSchedule(this,t,e,n,o=>this.Fu(o));return this.fu.push(i),i}Du(){this.gu&&L()}verifyOperationInProgress(){}async Mu(){let t;do t=this.bu,await t;while(t!==this.bu)}xu(t){for(const e of this.fu)if(e.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.fu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const e=this.fu.indexOf(t);this.fu.splice(e,1)}}class xs extends _r{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new Oo,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Oo(t),this._firestoreClient=void 0,await t}}}function _f(r,t){const e=Wu(),n=Qn,i=Hu(e,"firestore").getImmediate({identifier:n});if(!i._initialized){const o=Xu("firestore");o&&mf(i,...o)}return i}function ru(r){if(r._terminated)throw new N(V.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||yf(r),r._firestoreClient}function yf(r){var t,e,n;const i=r._freezeSettings(),o=function(c,f,d,_){return new Nl(c,f,d,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,tu(_.experimentalLongPollingOptions),_.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new uf(r._authCredentials,r._appCheckCredentials,r._queue,o,r._componentsProvider&&function(c){const f=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(f),_online:f}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Re(ct.fromBase64String(t))}catch(e){throw new N(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Re(ct.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return q(this._lat,t._lat)||q(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,i){if(n.length!==i.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==i[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf=/^__.*__$/;class Ef{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new ue(t,this.data,this.fieldMask,e,this.fieldTransforms):new ln(t,this.data,e,this.fieldTransforms)}}function iu(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}class Fs{constructor(t,e,n,i,o,u){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,o===void 0&&this.Bu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new Fs(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.ku({path:n,Qu:!1});return i.$u(t),i}Ku(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.ku({path:n,Qu:!1});return i.Bu(),i}Uu(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return sr(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(iu(this.Lu)&&Tf.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class vf{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||mr(t)}ju(t,e,n,i=!1){return new Fs({Lu:t,methodName:e,zu:n,path:lt.emptyPath(),Qu:!1,Gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function If(r){const t=r._freezeSettings(),e=mr(r._databaseId);return new vf(r._databaseId,!!t.ignoreUndefinedProperties,e)}function Af(r,t,e,n,i,o={}){const u=r.ju(o.merge||o.mergeFields?2:0,t,e,i);lu("Data must be an object, but it was:",u,n);const c=au(n,u);let f,d;if(o.merge)f=new wt(u.fieldMask),d=u.fieldTransforms;else if(o.mergeFields){const _=[];for(const A of o.mergeFields){const R=wf(t,A,e);if(!u.contains(R))throw new N(V.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);Pf(_,R)||_.push(R)}f=new wt(_),d=u.fieldTransforms.filter(A=>f.covers(A.field))}else f=null,d=u.fieldTransforms;return new Ef(new It(c),f,d)}function ou(r,t){if(uu(r=en(r)))return lu("Unsupported field value:",t,r),au(r,t);if(r instanceof su)return function(n,i){if(!iu(i.Lu))throw i.Wu(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Wu(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(n,i){const o=[];let u=0;for(const c of n){let f=ou(c,i.Uu(u));f==null&&(f={nullValue:"NULL_VALUE"}),o.push(f),u++}return{arrayValue:{values:o}}}(r,t)}return function(n,i){if((n=en(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return rc(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=tt.fromDate(n);return{timestampValue:Zn(i.serializer,o)}}if(n instanceof tt){const o=new tt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Zn(i.serializer,o)}}if(n instanceof Ls)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Re)return{bytesValue:Pa(i.serializer,n._byteString)};if(n instanceof Rt){const o=i.databaseId,u=n.firestore._databaseId;if(!u.isEqual(o))throw i.Wu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ts(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof Os)return function(u,c){return{mapValue:{fields:{[ta]:{stringValue:ea},[Wn]:{arrayValue:{values:u.toArray().map(d=>{if(typeof d!="number")throw c.Wu("VectorValues must only contain numeric values.");return gs(c.serializer,d)})}}}}}}(n,i);throw i.Wu(`Unsupported field value: ${Ns(n)}`)}(r,t)}function au(r,t){const e={};return Wo(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):oe(r,(n,i)=>{const o=ou(i,t.qu(n));o!=null&&(e[n]=o)}),{mapValue:{fields:e}}}function uu(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof tt||r instanceof Ls||r instanceof Re||r instanceof Rt||r instanceof su||r instanceof Os)}function lu(r,t,e){if(!uu(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const n=Ns(e);throw n==="an object"?t.Wu(r+" a custom object"):t.Wu(r+" "+n)}}function wf(r,t,e){if((t=en(t))instanceof Ms)return t._internalPath;if(typeof t=="string")return cu(r,t);throw sr("Field path arguments must be of type string or ",r,!1,void 0,e)}const Rf=new RegExp("[~\\*/\\[\\]]");function cu(r,t,e){if(t.search(Rf)>=0)throw sr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new Ms(...t.split("."))._internalPath}catch{throw sr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function sr(r,t,e,n,i){const o=n&&!n.isEmpty(),u=i!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let f="";return(o||u)&&(f+=" (found",o&&(f+=` in field ${n}`),u&&(f+=` in document ${i}`),f+=")"),new N(V.INVALID_ARGUMENT,c+r+f)}function Pf(r,t){return r.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(t,e,n,i,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Vf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(fu("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Vf extends hu{data(){return super.data()}}function fu(r,t){return typeof t=="string"?cu(r,t):t instanceof Ms?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new N(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Sf{convertValue(t,e="none"){switch(Xt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ht(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw L()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return oe(t,(i,o)=>{n[i]=this.convertValue(o,e)}),n}convertVectorValue(t){var e,n,i;const o=(i=(n=(e=t.fields)===null||e===void 0?void 0:e[Wn].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(u=>Z(u.doubleValue));return new Os(o)}convertGeoPoint(t){return new Ls(Z(t.latitude),Z(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=ar(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(rn(t));default:return null}}convertTimestamp(t){const e=Wt(t);return new tt(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=X.fromString(t);z(ka(n));const i=new sn(n.get(1),n.get(3)),o=new M(n.popFirst(5));return i.isEqual(e)||Ot(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(r,t,e){let n;return n=r?r.toFirestore(t):t,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Df extends hu{constructor(t,e,n,i,o,u){super(t,e,n,i,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new $n(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(fu("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class $n extends Df{data(t={}){return super.data(t)}}class kf{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Fn(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new $n(this._firestore,this._userDataWriter,n.key,n,new Fn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let u=0;return i._snapshot.docChanges.map(c=>{const f=new $n(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Fn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:f,oldIndex:-1,newIndex:u++}})}{let u=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const f=new $n(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Fn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,_=-1;return c.type!==0&&(d=u.indexOf(c.doc.key),u=u.delete(c.doc.key)),c.type!==1&&(u=u.add(c.doc),_=u.indexOf(c.doc.key)),{type:Nf(c.type),doc:f,oldIndex:d,newIndex:_}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Nf(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L()}}class xf extends Sf{constructor(t){super(),this.firestore=t}convertBytes(t){return new Re(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Rt(this.firestore,null,e)}}function Mf(r){r=rr(r,yr);const t=rr(r.firestore,xs),e=ru(t),n=new xf(t);return Cf(r._query),ff(e,r._query).then(i=>new kf(t,n,r,i))}function Lf(r,t){const e=rr(r.firestore,xs),n=gf(r),i=bf(r.converter,t);return Of(e,[Af(If(r.firestore),"addDoc",n._key,i,r.converter!==null,{}).toMutation(n._key,Lt.exists(!1))]).then(()=>n)}function Of(r,t){return function(n,i){const o=new $t;return n.asyncQueue.enqueueAndForget(async()=>Yh(await cf(n),i,o)),o.promise}(ru(r),t)}(function(t,e=!0){(function(i){Pe=i})(nl),rl(new sl("firestore",(n,{instanceIdentifier:i,options:o})=>{const u=n.getProvider("app").getImmediate(),c=new xs(new _l(n.getProvider("auth-internal")),new El(u,n.getProvider("app-check-internal")),function(d,_){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new N(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sn(d.options.projectId,_)}(u,i),u);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Ui(zi,Ki,t),Ui(zi,Ki,"esm2017")})();const Ff={class:"p-4 mb-4 bg-white rounded-lg shadow-md"},Uf={class:"flex items-center justify-between mb-2"},qf={class:"flex items-center"},Bf={class:"ml-2"},jf={class:"text-lg font-semibold"},zf={class:"text-sm text-gray-500"},Kf={class:"mb-2 text-xl font-bold"},$f={class:"text-base leading-relaxed"},Gf=Fo({__name:"CommentComponent",props:{name:{type:String,required:!0},msg:{type:String,required:!0},date:{type:Object,required:!0},subject:{type:String,required:!0}},setup(r){const t=r,e=ol(()=>t.date instanceof tt?t.date.toDate().toLocaleString():"Invalid Date");return(n,i)=>(Qe(),Un("div",Ff,[H("div",Uf,[H("div",qf,[i[0]||(i[0]=H("i",{class:"text-2xl text-blue-500 fas fa-user-circle","aria-hidden":"true"},null,-1)),H("div",Bf,[H("h4",jf,kn(t.name),1),H("p",zf,kn(e.value),1)])]),i[1]||(i[1]=H("div",{class:"items-center hidden space-x-2"},[H("i",{class:"text-gray-500 cursor-pointer fas fa-thumbs-up hover:text-blue-500"}),H("i",{class:"text-gray-500 cursor-pointer fas fa-thumbs-down hover:text-red-500"}),H("i",{class:"text-gray-500 cursor-pointer fas fa-share-alt hover:text-green-500"})],-1))]),H("h3",Kf,kn(t.subject),1),H("p",$f,kn(t.msg),1)]))}}),Qf={class:"relative px-4 py-8 min-h-dvh"},Wf={key:0,class:"flex flex-wrap my-12 overflow-y-scroll pb-36 max-h-96 mb-44"},Hf={class:"absolute bottom-0 left-0 right-0 w-full p-4 bg-white shadow-lg"},Xf={class:"flex flex-col space-y-4"},Yf={class:"flex items-center"},Jf={class:"flex items-center"},nd=Fo({__name:"CommentsComponent",setup(r){const t=new ml({duration:3e3,position:{x:"right",y:"top"}}),e=zr(""),n=zr(""),i=_f(),o=pf(i,"comments"),u=()=>!(!e.value||!n.value||!Kr().getUserName),c=A=>A.forEach(R=>R.value=""),f=async()=>{if(!Kr().getUserLogged){t.error("Necesita iniciar sesión para comentar");return}if(!u()){console.log("Please verify your data, there is something wrong"),t.error("Por favor, verifique sus datos, hay algo mal");return}try{await Lf(o,{subject:n.value,msg:e.value,name:Kr().getUserName,date:tt.now()}),t.success("Comentario enviado con exito"),console.log("Comment sent successfully!"),c([n,e]),await _()}catch(A){console.log("Error while sending the message:",A),t.error("Error al enviar el comentario"+A)}},d=zr([]),_=async()=>{d.value=[];try{(await Mf(o)).forEach(R=>{d.value.push({...R.data()})}),console.log(d.value)}catch(A){console.log("Error while getting comments:",A)}};return al(()=>{_()}),(A,R)=>(Qe(),Un("section",Qf,[R[6]||(R[6]=H("h2",{class:"mb-4 text-3xl font-bold text-center text-rose-800"},"Comentarios",-1)),R[7]||(R[7]=H("h3",{class:"mb-6 text-2xl text-center"},"Comparte tus experiencias y opiniones",-1)),d.value.length>0?(Qe(),Un("div",Wf,[(Qe(!0),Un(ll,null,cl(d.value.sort((C,k)=>k.date.toDate()-C.date.toDate()),(C,k)=>(Qe(),dl(Gf,{key:k,msg:C.msg,date:C.date,name:C.name,subject:C.subject},null,8,["msg","date","name","subject"]))),128))])):ul("",!0),H("div",Hf,[R[5]||(R[5]=H("h3",{class:"mb-2 text-xl font-bold text-rose-800"},"Deja tu comentario",-1)),H("form",Xf,[H("div",Yf,[R[2]||(R[2]=H("i",{class:"mr-2 text-xl text-blue-500 fas fa-user","aria-hidden":"true"},null,-1)),qi(H("input",{"onUpdate:modelValue":R[0]||(R[0]=C=>e.value=C),type:"text",placeholder:"Estafadores en centro comercial",class:"flex-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",required:""},null,512),[[Bi,e.value]])]),H("div",Jf,[R[3]||(R[3]=H("i",{class:"mr-2 text-xl text-green-500 fas fa-comment","aria-hidden":"true"},null,-1)),qi(H("textarea",{"onUpdate:modelValue":R[1]||(R[1]=C=>n.value=C),placeholder:"Escribe tu comentario aquí...",class:"flex-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",rows:"3",required:""},null,512),[[Bi,n.value]])]),H("button",{onClick:hl(f,["prevent"]),type:"submit",class:"w-full px-4 py-2 text-white rounded-lg bg-rose-800 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500"},R[4]||(R[4]=[H("i",{class:"mr-2 text-xl text-white fas fa-paper-plane","aria-hidden":"true"},null,-1),fl(" Enviar ")]))])])]))}});export{nd as default};
