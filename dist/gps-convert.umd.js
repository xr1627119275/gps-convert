!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).gpsConvert={})}(this,(function(t){"use strict";const n=52.35987755982988,s=3.141592653589793,a=6378245,e=.006693421622965943,o=function([t,n]){let a=2*(t=+t)-100+3*(n=+n)+.2*n*n+.1*t*n+.2*Math.sqrt(Math.abs(t));return a+=2*(20*Math.sin(6*t*s)+20*Math.sin(2*t*s))/3,a+=2*(20*Math.sin(n*s)+40*Math.sin(n/3*s))/3,a+=2*(160*Math.sin(n/12*s)+320*Math.sin(n*s/30))/3,a},i=function([t,n]){let a=300+(t=+t)+2*(n=+n)+.1*t*t+.1*t*n+.1*Math.sqrt(Math.abs(t));return a+=2*(20*Math.sin(6*t*s)+20*Math.sin(2*t*s))/3,a+=2*(20*Math.sin(t*s)+40*Math.sin(t/3*s))/3,a+=2*(150*Math.sin(t/12*s)+300*Math.sin(t/30*s))/3,a},h=function([t,n]){return n=+n,!((t=+t)>73.66&&t<135.05&&n>3.86&&n<53.55)};t.bd09togcj02=function([t,s]){const a=(t=+t)-.0065,e=(s=+s)-.006,o=Math.sqrt(a*a+e*e)-2e-5*Math.sin(e*n),i=Math.atan2(e,a)-3e-6*Math.cos(a*n);return[o*Math.cos(i),o*Math.sin(i)]},t.gcj02tobd09=function([t,s]){s=+s,t=+t;const a=Math.sqrt(t*t+s*s)+2e-5*Math.sin(s*n),e=Math.atan2(s,t)+3e-6*Math.cos(t*n);return[a*Math.cos(e)+.0065,a*Math.sin(e)+.006]},t.gcj02towgs84=function([t,n]){if(h([t=+t,n=+n]))return[t,n];{let h=o([t-105,n-35]),r=i([t-105,n-35]);const M=n/180*s;let c=Math.sin(M);c=1-e*c*c;const u=Math.sqrt(c);h=180*h/(a*(1-e)/(c*u)*s),r=180*r/(a/u*Math.cos(M)*s);return[2*t-(t+r),2*n-(n+h)]}},t.out_of_china=h,t.transformlat=o,t.transformlng=i,t.wgs84togcj02=function([t,n]){if(h([t=+t,n=+n]))return[t,n];{let h=o([t-105,n-35]),r=i([t-105,n-35]);const M=n/180*s;let c=Math.sin(M);c=1-e*c*c;const u=Math.sqrt(c);return h=180*h/(a*(1-e)/(c*u)*s),r=180*r/(a/u*Math.cos(M)*s),[t+r,n+h]}},Object.defineProperty(t,"__esModule",{value:!0}),t[Symbol.toStringTag]="Module"}));
