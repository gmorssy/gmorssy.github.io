import{S as fe,i as oe,s as ne,e as y,t as A,c as w,a as x,h as H,d as h,b as c,f as V,g as D,F as b,R as L,P as C,k as M,m as P,Q as se,T as R,N as ie,j as ce,q,U,V as re,W as ae}from"../../chunks/vendor-92f04196.js";function W(f,l,e){const i=f.slice();return i[11]=l[e],i}function J(f,l,e){const i=f.slice();return i[14]=l[e],i}function K(f){let l,e,i,s,t;return{c(){l=y("div"),e=y("p"),i=A("Game Over"),this.h()},l(n){l=w(n,"DIV",{class:!0,style:!0});var r=x(l);e=w(r,"P",{id:!0,class:!0,style:!0});var _=x(e);i=H(_,"Game Over"),_.forEach(h),r.forEach(h),this.h()},h(){c(e,"id","attempts"),c(e,"class","h-2.5 svelte-1oze3fn"),V(e,"width","200px"),V(e,"margin-bottom","30px"),c(l,"class","fixed bg-[#ff9090f0] z-50"),V(l,"top","40%"),V(l,"padding","10px 44%")},m(n,r){D(n,l,r),b(l,e),b(e,i)},i(n){s||L(()=>{s=U(e,re,{duration:500,x:1e3}),s.start()}),t||L(()=>{t=U(l,ae,{duration:100}),t.start()})},o:C,d(n){n&&h(l)}}}function Z(f){let l,e,i,s,t;return{c(){l=y("div"),e=y("p"),i=A("Amazing"),this.h()},l(n){l=w(n,"DIV",{class:!0,style:!0});var r=x(l);e=w(r,"P",{id:!0,class:!0,style:!0});var _=x(e);i=H(_,"Amazing"),_.forEach(h),r.forEach(h),this.h()},h(){c(e,"id","attempts"),c(e,"class","h-2.5 svelte-1oze3fn"),V(e,"width","200px"),V(e,"margin-bottom","30px"),c(l,"class","fixed bg-[#09ff90f0] z-50"),V(l,"top","40%"),V(l,"padding","10px 44%")},m(n,r){D(n,l,r),b(l,e),b(e,i)},i(n){s||L(()=>{s=U(e,re,{duration:500,x:1e3}),s.start()}),t||L(()=>{t=U(l,ae,{duration:100}),t.start()})},o:C,d(n){n&&h(l)}}}function X(f){let l,e,i;return{c(){l=y("div"),e=y("img"),this.h()},l(s){l=w(s,"DIV",{id:!0,class:!0});var t=x(l);e=w(t,"IMG",{src:!0,alt:!0,loading:!0,class:!0,style:!0}),t.forEach(h),this.h()},h(){R(e.src,i=f[6][f[14][0]-1])||c(e,"src",i),c(e,"alt","memoryImage"),c(e,"loading","lazy"),c(e,"class","w-full h-full"),V(e,"image-rendering","pixelated"),c(l,"id","card-turn"),c(l,"class","swap-on bg-base-30 shadow-xl bg-blue-300 svelte-1oze3fn")},m(s,t){D(s,l,t),b(l,e)},p(s,t){t&1&&!R(e.src,i=s[6][s[14][0]-1])&&c(e,"src",i)},d(s){s&&h(l)}}}function Y(f){let l,e,i;return{c(){l=y("div"),e=y("img"),this.h()},l(s){l=w(s,"DIV",{id:!0,class:!0});var t=x(l);e=w(t,"IMG",{src:!0,alt:!0,loading:!0,class:!0,style:!0}),t.forEach(h),this.h()},h(){R(e.src,i=f[6][f[14][0]-1])||c(e,"src",i),c(e,"alt","memoryImage"),c(e,"loading","lazy"),c(e,"class","w-full h-full"),V(e,"image-rendering","pixelated"),c(l,"id","card-turn"),c(l,"class","swap-on bg-base-30 shadow-xl bg-green-500 svelte-1oze3fn")},m(s,t){D(s,l,t),b(l,e)},p(s,t){t&1&&!R(e.src,i=s[6][s[14][0]-1])&&c(e,"src",i)},d(s){s&&h(l)}}}function $(f){let l,e,i,s,t,n,r,_,E,z,T,g=f[14][3]&&X(f),m=!f[14][3]&&Y(f);function I(){return f[8](f[11],f[14])}return{c(){l=y("label"),e=y("input"),t=M(),g&&g.c(),n=M(),m&&m.c(),r=M(),_=y("div"),this.h()},l(p){l=w(p,"LABEL",{class:!0});var d=x(l);e=w(d,"INPUT",{id:!0,type:!0}),t=P(d),g&&g.l(d),n=P(d),m&&m.l(d),r=P(d),_=w(d,"DIV",{id:!0,class:!0}),x(_).forEach(h),d.forEach(h),this.h()},h(){c(e,"id","flip-input"),c(e,"type","checkbox"),e.checked=i=f[14][2],e.disabled=s=f[14][1],c(_,"id","card-turn"),c(_,"class","swap-off bg-base-30 shadow-xl bg-blue-300 svelte-1oze3fn"),c(l,"class",E="swap swap-flip m-2.5 card "+f[14][0]+" svelte-1oze3fn")},m(p,d){D(p,l,d),b(l,e),b(l,t),g&&g.m(l,null),b(l,n),m&&m.m(l,null),b(l,r),b(l,_),z||(T=se(l,"click",I),z=!0)},p(p,d){f=p,d&1&&i!==(i=f[14][2])&&(e.checked=i),d&1&&s!==(s=f[14][1])&&(e.disabled=s),f[14][3]?g?g.p(f,d):(g=X(f),g.c(),g.m(l,n)):g&&(g.d(1),g=null),f[14][3]?m&&(m.d(1),m=null):m?m.p(f,d):(m=Y(f),m.c(),m.m(l,r)),d&1&&E!==(E="swap swap-flip m-2.5 card "+f[14][0]+" svelte-1oze3fn")&&c(l,"class",E)},d(p){p&&h(l),g&&g.d(),m&&m.d(),z=!1,T()}}}function ee(f){let l,e,i=f[11],s=[];for(let t=0;t<i.length;t+=1)s[t]=$(J(f,i,t));return{c(){l=y("div");for(let t=0;t<s.length;t+=1)s[t].c();e=M(),this.h()},l(t){l=w(t,"DIV",{class:!0});var n=x(l);for(let r=0;r<s.length;r+=1)s[r].l(n);e=P(n),n.forEach(h),this.h()},h(){c(l,"class","justify-center self-center flex flex-row m-2.5 h-1/5")},m(t,n){D(t,l,n);for(let r=0;r<s.length;r+=1)s[r].m(l,null);b(l,e)},p(t,n){if(n&127){i=t[11];let r;for(r=0;r<i.length;r+=1){const _=J(t,i,r);s[r]?s[r].p(_,n):(s[r]=$(_),s[r].c(),s[r].m(l,e))}for(;r<s.length;r+=1)s[r].d(1);s.length=i.length}},d(t){t&&h(l),ie(s,t)}}}function ue(f){let l,e,i,s,t,n,r,_,E,z,T,g,m,I,p,d,N,o=f[4]==0&&K(),u=f[5]==16&&Z(),O=f[0],j=[];for(let a=0;a<O.length;a+=1)j[a]=ee(W(f,O,a));return{c(){l=y("html"),e=M(),i=y("div"),s=y("div"),t=y("p"),n=A("Health: "),r=A(f[4]),_=M(),E=y("div"),z=y("button"),T=A("Restart"),g=M(),o&&o.c(),m=M(),u&&u.c(),I=M(),p=y("div");for(let a=0;a<j.length;a+=1)j[a].c();this.h()},l(a){l=w(a,"HTML",{lang:!0,"data-theme":!0}),x(l).forEach(h),e=P(a),i=w(a,"DIV",{class:!0});var v=x(i);s=w(v,"DIV",{class:!0,style:!0});var k=x(s);t=w(k,"P",{id:!0,class:!0,style:!0});var G=x(t);n=H(G,"Health: "),r=H(G,f[4]),G.forEach(h),k.forEach(h),_=P(v),E=w(v,"DIV",{class:!0,style:!0});var S=x(E);z=w(S,"BUTTON",{id:!0,class:!0,style:!0});var F=x(z);T=H(F,"Restart"),F.forEach(h),S.forEach(h),v.forEach(h),g=P(a),o&&o.l(a),m=P(a),u&&u.l(a),I=P(a),p=w(a,"DIV",{id:!0,class:!0});var Q=x(p);for(let B=0;B<j.length;B+=1)j[B].l(Q);Q.forEach(h),this.h()},h(){c(l,"lang","en"),c(l,"data-theme","retro"),c(t,"id","attempts"),c(t,"class","relative svelte-1oze3fn"),V(t,"bottom","15px"),c(s,"class","w-100 h-10 justify-center self-center content-center bg-red-300 shadow-xl rounded"),V(s,"margin","15px"),c(z,"id","attempts"),c(z,"class","relative svelte-1oze3fn"),V(z,"bottom","15px"),c(E,"class","w-100 h-10 justify-center self-center content-center bg-purple-300 shadow-xl rounded"),V(E,"margin","15px"),c(i,"class","justify-center self-center flex flex-row"),c(p,"id","backdrop"),c(p,"class","h-4/5 shadow-xl justify-center self-center bg-green-200 rounded-3xl flex flex-col svelte-1oze3fn")},m(a,v){D(a,l,v),D(a,e,v),D(a,i,v),b(i,s),b(s,t),b(t,n),b(t,r),b(i,_),b(i,E),b(E,z),b(z,T),D(a,g,v),o&&o.m(a,v),D(a,m,v),u&&u.m(a,v),D(a,I,v),D(a,p,v);for(let k=0;k<j.length;k+=1)j[k].m(p,null);d||(N=se(E,"click",f[7]),d=!0)},p(a,[v]){if(v&16&&ce(r,a[4]),a[4]==0?o?v&16&&q(o,1):(o=K(),o.c(),q(o,1),o.m(m.parentNode,m)):o&&(o.d(1),o=null),a[5]==16?u?v&32&&q(u,1):(u=Z(),u.c(),q(u,1),u.m(I.parentNode,I)):u&&(u.d(1),u=null),v&127){O=a[0];let k;for(k=0;k<O.length;k+=1){const G=W(a,O,k);j[k]?j[k].p(G,v):(j[k]=ee(G),j[k].c(),j[k].m(p,null))}for(;k<j.length;k+=1)j[k].d(1);j.length=O.length}},i(a){q(o),q(u)},o:C,d(a){a&&h(l),a&&h(e),a&&h(i),a&&h(g),o&&o.d(a),a&&h(m),u&&u.d(a),a&&h(I),a&&h(p),ie(j,a),d=!1,N()}}}let le=4,te=4;function de(f,l,e){let i=["/memo/apple.png","/memo/diamond.png","/memo/cooked_porkchop.png","/memo/ender_pearl.png","/memo/flint_and_steel.png","/memo/golden_pickaxe.png","/memo/green_dye.png","/memo/ink_sac.png"],s=[],t=[],n=[],r=[],_=[],E=10,z=0;function T(){let I=["1","2","3","4","5","6","7","8"];I.push(...I);for(let p=0;p<le*te;p++){let d=Math.floor(Math.random()*(16-p));s.push(I[d]),I.splice(d,1)}for(let p=0;p<te;p++){t.push([]);for(let d=0;d<le;d++)t[t.length-1].push([s[0],!1,!1,!0]),s.splice(0,1)}}return T(),[t,n,r,_,E,z,i,()=>{location.reload()},(I,p)=>{setTimeout(()=>{let d=t.indexOf(I),N=I.indexOf(p);if(t[d][N][3]&&(t[d][N][1]||(n.push(p[0]),e(0,t[d][N][2]=!0,t),r.push(d),_.push(N)),e(0,t[d][N][1]=!0,t),n.length>=2)){for(let o=0;o<4;o++)for(let u=0;u<4;u++)e(0,t[o][u][1]=!0,t);setTimeout(()=>{if(n[0]==n[1])for(let o=0;o<r.length;o++)e(0,t[r[o]][_[o]][3]=!1,t);else e(4,E--,E);e(5,z=0);for(let o=0;o<4;o++)for(let u=0;u<4;u++)t[o][u][3]?(e(0,t[o][u][1]=!1,t),e(0,t[o][u][2]=!1,t)):e(5,z++,z);if(e(1,n=[]),e(2,r=[]),e(3,_=[]),E<=0)for(let o=0;o<4;o++)for(let u=0;u<4;u++)t[o][u][3]&&(e(0,t[o][u][1]=!0,t),e(0,t[o][u][2]=!0,t))},1e3)}},1)}]}class pe extends fe{constructor(l){super();oe(this,l,de,ue,ne,{})}}export{pe as default};