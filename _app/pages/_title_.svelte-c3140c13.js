import{S as ue,i as _e,s as de,k as U,f as V,e as b,j as P,t as T,c as g,a as E,l as I,g as F,d as u,b as _,N as ve,E as h,G as A,O as q,h as M,L as O,H as me,M as z}from"../chunks/vendor-3fdfa55b.js";import{s as pe}from"../chunks/store-899e4790.js";function R(r,e,l){const t=r.slice();return t[8]=e[l],t}function J(r,e,l){const t=r.slice();return t[11]=e[l],t}function K(r,e,l){const t=r.slice();return t[14]=e[l],t}function Q(r,e,l){const t=r.slice();return t[17]=e[l],t}function W(r,e,l){const t=r.slice();return t[20]=e[l],t}function X(r){let e,l,t,s,a,i,n,c,o,p,v=r[8].attributes.content,d=[];for(let f=0;f<v.length;f+=1)d[f]=fe(J(r,v,f));return{c(){e=b("div");for(let f=0;f<d.length;f+=1)d[f].c();l=P(),t=b("div"),s=b("p"),a=T("Copyright "),i=T(r[0]),n=P(),c=b("a"),o=T("Fusioneers"),p=P(),this.h()},l(f){e=g(f,"DIV",{class:!0});var m=E(e);for(let w=0;w<d.length;w+=1)d[w].l(m);l=I(m),t=g(m,"DIV",{class:!0});var k=E(t);s=g(k,"P",{class:!0});var C=E(s);a=F(C,"Copyright "),i=F(C,r[0]),n=I(C),c=g(C,"A",{href:!0,style:!0,class:!0});var y=E(c);o=F(y,"Fusioneers"),y.forEach(u),C.forEach(u),k.forEach(u),p=I(m),m.forEach(u),this.h()},h(){_(c,"href","https://www.fusioneers.space/home/"),ve(c,"color","#FF79C6"),_(c,"class","svelte-1c42n5s"),_(s,"class","svelte-1c42n5s"),_(t,"class","footer svelte-1c42n5s"),_(e,"class","page svelte-1c42n5s")},m(f,m){V(f,e,m);for(let k=0;k<d.length;k+=1)d[k].m(e,null);h(e,l),h(e,t),h(t,s),h(s,a),h(s,i),h(s,n),h(s,c),h(c,o),h(e,p)},p(f,m){if(m&4){v=f[8].attributes.content;let k;for(k=0;k<v.length;k+=1){const C=J(f,v,k);d[k]?d[k].p(C,m):(d[k]=fe(C),d[k].c(),d[k].m(e,l))}for(;k<d.length;k+=1)d[k].d(1);d.length=v.length}m&1&&M(i,f[0])},d(f){f&&u(e),O(d,f)}}}function Z(r){let e,l,t,s,a,i;return{c(){e=b("div"),l=b("iframe"),s=P(),a=b("style"),i=T(`iframe {
                      height: 92vh;
                      width: 100%;
                      border: none;
                  }`),this.h()},l(n){e=g(n,"DIV",{class:!0});var c=E(e);l=g(c,"IFRAME",{scrolling:!0,seamless:!0,src:!0}),E(l).forEach(u),s=I(c),a=g(c,"STYLE",{});var o=E(a);i=F(o,`iframe {
                      height: 92vh;
                      width: 100%;
                      border: none;
                  }`),o.forEach(u),c.forEach(u),this.h()},h(){_(l,"scrolling","no"),_(l,"seamless","seamless"),A(l.src,t="/assets/landing/landing.html")||_(l,"src",t),_(e,"class","landing svelte-1c42n5s")},m(n,c){V(n,e,c),h(e,l),h(e,s),h(e,a),h(a,i)},d(n){n&&u(e)}}}function $(r){let e,l,t,s=r[11].body.toString().replace(/\*\*/g,'<div style="color: #FF79C6; display: inline">').replace(/\/\*/g,"</div>")+"",a=r[11].title&&x(r);return{c(){e=b("div"),a&&a.c(),l=P(),t=b("p"),this.h()},l(i){e=g(i,"DIV",{class:!0});var n=E(e);a&&a.l(n),l=I(n),t=g(n,"P",{class:!0});var c=E(t);c.forEach(u),n.forEach(u),this.h()},h(){_(t,"class","svelte-1c42n5s"),_(e,"class","paragraph svelte-1c42n5s")},m(i,n){V(i,e,n),a&&a.m(e,null),h(e,l),h(e,t),t.innerHTML=s},p(i,n){i[11].title?a?a.p(i,n):(a=x(i),a.c(),a.m(e,l)):a&&(a.d(1),a=null),n&4&&s!==(s=i[11].body.toString().replace(/\*\*/g,'<div style="color: #FF79C6; display: inline">').replace(/\/\*/g,"</div>")+"")&&(t.innerHTML=s)},d(i){i&&u(e),a&&a.d()}}}function x(r){let e,l=r[11].title+"",t,s;return{c(){e=b("h1"),t=T(l),this.h()},l(a){e=g(a,"H1",{class:!0});var i=E(e);t=F(i,l),i.forEach(u),this.h()},h(){_(e,"class",s=""+(q(r[11].important?"title important":"title")+" svelte-1c42n5s"))},m(a,i){V(a,e,i),h(e,t)},p(a,i){i&4&&l!==(l=a[11].title+"")&&M(t,l),i&4&&s!==(s=""+(q(a[11].important?"title important":"title")+" svelte-1c42n5s"))&&_(e,"class",s)},d(a){a&&u(e)}}}function ee(r){let e,l,t,s,a=r[11].code+"",i,n=r[11].title&&te(r);return{c(){e=b("div"),n&&n.c(),l=P(),t=b("div"),s=b("code"),i=T(a),this.h()},l(c){e=g(c,"DIV",{class:!0});var o=E(e);n&&n.l(o),l=I(o),t=g(o,"DIV",{class:!0});var p=E(t);s=g(p,"CODE",{});var v=E(s);i=F(v,a),v.forEach(u),p.forEach(u),o.forEach(u),this.h()},h(){_(t,"class","code-box svelte-1c42n5s"),_(e,"class","code svelte-1c42n5s")},m(c,o){V(c,e,o),n&&n.m(e,null),h(e,l),h(e,t),h(t,s),h(s,i)},p(c,o){c[11].title?n?n.p(c,o):(n=te(c),n.c(),n.m(e,l)):n&&(n.d(1),n=null),o&4&&a!==(a=c[11].code+"")&&M(i,a)},d(c){c&&u(e),n&&n.d()}}}function te(r){let e,l=r[11].title+"",t;return{c(){e=b("h1"),t=T(l),this.h()},l(s){e=g(s,"H1",{class:!0});var a=E(e);t=F(a,l),a.forEach(u),this.h()},h(){_(e,"class","title svelte-1c42n5s")},m(s,a){V(s,e,a),h(e,t)},p(s,a){a&4&&l!==(l=s[11].title+"")&&M(t,l)},d(s){s&&u(e)}}}function le(r){let e,l,t=r[11].title&&se(r),s=r[11].blog_entries.data,a=[];for(let i=0;i<s.length;i+=1)a[i]=ae(Q(r,s,i));return{c(){e=b("div"),t&&t.c(),l=P();for(let i=0;i<a.length;i+=1)a[i].c();this.h()},l(i){e=g(i,"DIV",{class:!0});var n=E(e);t&&t.l(n),l=I(n);for(let c=0;c<a.length;c+=1)a[c].l(n);n.forEach(u),this.h()},h(){_(e,"class","blog svelte-1c42n5s")},m(i,n){V(i,e,n),t&&t.m(e,null),h(e,l);for(let c=0;c<a.length;c+=1)a[c].m(e,null)},p(i,n){if(i[11].title?t?t.p(i,n):(t=se(i),t.c(),t.m(e,l)):t&&(t.d(1),t=null),n&4){s=i[11].blog_entries.data;let c;for(c=0;c<s.length;c+=1){const o=Q(i,s,c);a[c]?a[c].p(o,n):(a[c]=ae(o),a[c].c(),a[c].m(e,null))}for(;c<a.length;c+=1)a[c].d(1);a.length=s.length}},d(i){i&&u(e),t&&t.d(),O(a,i)}}}function se(r){let e,l=r[11].title+"",t;return{c(){e=b("h1"),t=T(l),this.h()},l(s){e=g(s,"H1",{class:!0});var a=E(e);t=F(a,l),a.forEach(u),this.h()},h(){_(e,"class","title svelte-1c42n5s")},m(s,a){V(s,e,a),h(e,t)},p(s,a){a&4&&l!==(l=s[11].title+"")&&M(t,l)},d(s){s&&u(e)}}}function be(r){let e,l,t;return{c(){e=b("img"),this.h()},l(s){e=g(s,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){A(e.src,l="/assets"+r[20].attributes.url)||_(e,"src",l),_(e,"alt",t=r[20].attributes.alternativeText),_(e,"class","svelte-1c42n5s")},m(s,a){V(s,e,a)},p(s,a){a&4&&!A(e.src,l="/assets"+s[20].attributes.url)&&_(e,"src",l),a&4&&t!==(t=s[20].attributes.alternativeText)&&_(e,"alt",t)},d(s){s&&u(e)}}}function ge(r){let e,l,t,s,a;return{c(){e=b("video"),l=b("source"),a=T(`
                              Your browser does not support the video tag.`),this.h()},l(i){e=g(i,"VIDEO",{width:!0,height:!0,class:!0});var n=E(e);l=g(n,"SOURCE",{src:!0,type:!0}),a=F(n,`
                              Your browser does not support the video tag.`),n.forEach(u),this.h()},h(){A(l.src,t="/assets"+r[20].attributes.url)||_(l,"src",t),_(l,"type",s=r[20].attributes.mime),e.autoplay=!0,e.muted=!0,_(e,"width","100%"),_(e,"height","100%"),_(e,"class","svelte-1c42n5s")},m(i,n){V(i,e,n),h(e,l),h(e,a)},p(i,n){n&4&&!A(l.src,t="/assets"+i[20].attributes.url)&&_(l,"src",t),n&4&&s!==(s=i[20].attributes.mime)&&_(l,"type",s)},d(i){i&&u(e)}}}function ie(r){let e,l;function t(i,n){return n&4&&(e=null),e==null&&(e=!!["video/webm","video/mp4"].includes(i[20].attributes.mime)),e?ge:be}let s=t(r,-1),a=s(r);return{c(){a.c(),l=U()},l(i){a.l(i),l=U()},m(i,n){a.m(i,n),V(i,l,n)},p(i,n){s===(s=t(i,n))&&a?a.p(i,n):(a.d(1),a=s(i),a&&(a.c(),a.m(l.parentNode,l)))},d(i){a.d(i),i&&u(l)}}}function ae(r){let e,l,t=r[17].attributes.title+"",s,a,i,n,c=new Date(r[17].attributes.publishedAt).toUTCString()+"",o,p,v,d=r[17].attributes.body.toString().replace(/\*\*/g,'<div style="color: #FF79C6; display: inline">').replace(/\/\*/g,"</div>")+"",f,m,k=r[17].attributes.media.data,C=[];for(let y=0;y<k.length;y+=1)C[y]=ie(W(r,k,y));return{c(){e=b("div"),l=b("h1"),s=T(t),a=P(),i=b("p"),n=T("Published on "),o=T(c),p=P(),v=b("p"),f=P();for(let y=0;y<C.length;y+=1)C[y].c();m=P(),this.h()},l(y){e=g(y,"DIV",{class:!0});var w=E(e);l=g(w,"H1",{class:!0});var D=E(l);s=F(D,t),D.forEach(u),a=I(w),i=g(w,"P",{class:!0});var S=E(i);n=F(S,"Published on "),o=F(S,c),S.forEach(u),p=I(w),v=g(w,"P",{class:!0});var Y=E(v);Y.forEach(u),f=I(w);for(let L=0;L<C.length;L+=1)C[L].l(w);m=I(w),w.forEach(u),this.h()},h(){_(l,"class","title svelte-1c42n5s"),_(i,"class","published_at svelte-1c42n5s"),_(v,"class","svelte-1c42n5s"),_(e,"class","blog_entry svelte-1c42n5s")},m(y,w){V(y,e,w),h(e,l),h(l,s),h(e,a),h(e,i),h(i,n),h(i,o),h(e,p),h(e,v),v.innerHTML=d,h(e,f);for(let D=0;D<C.length;D+=1)C[D].m(e,null);h(e,m)},p(y,w){if(w&4&&t!==(t=y[17].attributes.title+"")&&M(s,t),w&4&&c!==(c=new Date(y[17].attributes.publishedAt).toUTCString()+"")&&M(o,c),w&4&&d!==(d=y[17].attributes.body.toString().replace(/\*\*/g,'<div style="color: #FF79C6; display: inline">').replace(/\/\*/g,"</div>")+"")&&(v.innerHTML=d),w&4){k=y[17].attributes.media.data;let D;for(D=0;D<k.length;D+=1){const S=W(y,k,D);C[D]?C[D].p(S,w):(C[D]=ie(S),C[D].c(),C[D].m(e,m))}for(;D<C.length;D+=1)C[D].d(1);C.length=k.length}},d(y){y&&u(e),O(C,y)}}}function ne(r){let e,l,t,s=r[11].title&&re(r),a=r[11].team_members.data,i=[];for(let n=0;n<a.length;n+=1)i[n]=ce(K(r,a,n));return{c(){e=b("div"),s&&s.c(),l=P(),t=b("div");for(let n=0;n<i.length;n+=1)i[n].c();this.h()},l(n){e=g(n,"DIV",{class:!0});var c=E(e);s&&s.l(c),l=I(c),t=g(c,"DIV",{class:!0});var o=E(t);for(let p=0;p<i.length;p+=1)i[p].l(o);o.forEach(u),c.forEach(u),this.h()},h(){_(t,"class","team_members svelte-1c42n5s"),_(e,"class","team svelte-1c42n5s")},m(n,c){V(n,e,c),s&&s.m(e,null),h(e,l),h(e,t);for(let o=0;o<i.length;o+=1)i[o].m(t,null)},p(n,c){if(n[11].title?s?s.p(n,c):(s=re(n),s.c(),s.m(e,l)):s&&(s.d(1),s=null),c&4){a=n[11].team_members.data;let o;for(o=0;o<a.length;o+=1){const p=K(n,a,o);i[o]?i[o].p(p,c):(i[o]=ce(p),i[o].c(),i[o].m(t,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=a.length}},d(n){n&&u(e),s&&s.d(),O(i,n)}}}function re(r){let e,l=r[11].title+"",t;return{c(){e=b("h1"),t=T(l),this.h()},l(s){e=g(s,"H1",{class:!0});var a=E(e);t=F(a,l),a.forEach(u),this.h()},h(){_(e,"class","title svelte-1c42n5s")},m(s,a){V(s,e,a),h(e,t)},p(s,a){a&4&&l!==(l=s[11].title+"")&&M(t,l)},d(s){s&&u(e)}}}function ce(r){let e,l,t,s,a,i,n,c=r[14].attributes.name+"",o,p,v,d=r[14].attributes.email+"",f,m,k,C=r[14].attributes.characterization+"",y,w,D,S;function Y(){return r[3](r[14])}return{c(){e=b("div"),l=b("img"),a=P(),i=b("div"),n=b("h1"),o=T(c),p=P(),v=b("h2"),f=T(d),m=P(),k=b("p"),y=T(C),w=P(),this.h()},l(L){e=g(L,"DIV",{class:!0});var H=E(e);l=g(H,"IMG",{src:!0,alt:!0,class:!0}),a=I(H),i=g(H,"DIV",{class:!0});var N=E(i);n=g(N,"H1",{class:!0});var j=E(n);o=F(j,c),j.forEach(u),p=I(N),v=g(N,"H2",{class:!0});var B=E(v);f=F(B,d),B.forEach(u),m=I(N),k=g(N,"P",{class:!0});var G=E(k);y=F(G,C),G.forEach(u),N.forEach(u),w=I(H),H.forEach(u),this.h()},h(){A(l.src,t="/assets"+r[14].attributes.profile.data.attributes.url)||_(l,"src",t),_(l,"alt",s=r[14].attributes.profile.data.attributes.alternativeText),_(l,"class","svelte-1c42n5s"),_(n,"class","title svelte-1c42n5s"),_(v,"class","email svelte-1c42n5s"),_(k,"class","svelte-1c42n5s"),_(i,"class","text svelte-1c42n5s"),_(e,"class","team_member svelte-1c42n5s")},m(L,H){V(L,e,H),h(e,l),h(e,a),h(e,i),h(i,n),h(n,o),h(i,p),h(i,v),h(v,f),h(i,m),h(i,k),h(k,y),h(e,w),D||(S=me(e,"click",Y),D=!0)},p(L,H){r=L,H&4&&!A(l.src,t="/assets"+r[14].attributes.profile.data.attributes.url)&&_(l,"src",t),H&4&&s!==(s=r[14].attributes.profile.data.attributes.alternativeText)&&_(l,"alt",s),H&4&&c!==(c=r[14].attributes.name+"")&&M(o,c),H&4&&d!==(d=r[14].attributes.email+"")&&M(f,d),H&4&&C!==(C=r[14].attributes.characterization+"")&&M(y,C)},d(L){L&&u(e),D=!1,S()}}}function oe(r){let e,l=r[11].html+"";return{c(){e=b("div"),this.h()},l(t){e=g(t,"DIV",{class:!0});var s=E(e);s.forEach(u),this.h()},h(){_(e,"class","custom")},m(t,s){V(t,e,s),e.innerHTML=l},p(t,s){s&4&&l!==(l=t[11].html+"")&&(e.innerHTML=l)},d(t){t&&u(e)}}}function fe(r){let e,l,t,s,a,i,n=r[11].__typename==="ComponentPageLanding"&&Z(),c=r[11].__typename==="ComponentPageParagraph"&&$(r),o=r[11].__typename==="ComponentPageCode"&&ee(r),p=r[11].__typename==="ComponentPageBlog"&&le(r),v=r[11].__typename==="ComponentPageTeam"&&ne(r),d=r[11].__typename==="ComponentPageCustom"&&oe(r);return{c(){n&&n.c(),e=P(),l=b("div"),c&&c.c(),t=P(),o&&o.c(),s=P(),p&&p.c(),a=P(),v&&v.c(),i=P(),d&&d.c(),this.h()},l(f){n&&n.l(f),e=I(f),l=g(f,"DIV",{class:!0});var m=E(l);c&&c.l(m),t=I(m),o&&o.l(m),s=I(m),p&&p.l(m),a=I(m),v&&v.l(m),i=I(m),d&&d.l(m),m.forEach(u),this.h()},h(){_(l,"class","content svelte-1c42n5s")},m(f,m){n&&n.m(f,m),V(f,e,m),V(f,l,m),c&&c.m(l,null),h(l,t),o&&o.m(l,null),h(l,s),p&&p.m(l,null),h(l,a),v&&v.m(l,null),h(l,i),d&&d.m(l,null)},p(f,m){f[11].__typename==="ComponentPageLanding"?n||(n=Z(),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null),f[11].__typename==="ComponentPageParagraph"?c?c.p(f,m):(c=$(f),c.c(),c.m(l,t)):c&&(c.d(1),c=null),f[11].__typename==="ComponentPageCode"?o?o.p(f,m):(o=ee(f),o.c(),o.m(l,s)):o&&(o.d(1),o=null),f[11].__typename==="ComponentPageBlog"?p?p.p(f,m):(p=le(f),p.c(),p.m(l,a)):p&&(p.d(1),p=null),f[11].__typename==="ComponentPageTeam"?v?v.p(f,m):(v=ne(f),v.c(),v.m(l,i)):v&&(v.d(1),v=null),f[11].__typename==="ComponentPageCustom"?d?d.p(f,m):(d=oe(f),d.c(),d.m(l,null)):d&&(d.d(1),d=null)},d(f){n&&n.d(f),f&&u(e),f&&u(l),c&&c.d(),o&&o.d(),p&&p.d(),v&&v.d(),d&&d.d()}}}function he(r){let e=r[8].attributes.title.toLowerCase()===r[1],l,t=e&&X(r);return{c(){t&&t.c(),l=U()},l(s){t&&t.l(s),l=U()},m(s,a){t&&t.m(s,a),V(s,l,a)},p(s,a){a&6&&(e=s[8].attributes.title.toLowerCase()===s[1]),e?t?t.p(s,a):(t=X(s),t.c(),t.m(l.parentNode,l)):t&&(t.d(1),t=null)},d(s){t&&t.d(s),s&&u(l)}}}function ke(r){let e,l=r[2],t=[];for(let s=0;s<l.length;s+=1)t[s]=he(R(r,l,s));return{c(){e=b("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=g(s,"DIV",{class:!0});var a=E(e);for(let i=0;i<t.length;i+=1)t[i].l(a);a.forEach(u),this.h()},h(){_(e,"class","site svelte-1c42n5s")},m(s,a){V(s,e,a);for(let i=0;i<t.length;i+=1)t[i].m(e,null)},p(s,[a]){if(a&7){l=s[2];let i;for(i=0;i<l.length;i+=1){const n=R(s,l,i);t[i]?t[i].p(n,a):(t[i]=he(n),t[i].c(),t[i].m(e,null))}for(;i<t.length;i+=1)t[i].d(1);t.length=l.length}},i:z,o:z,d(s){s&&u(e),O(t,s)}}}async function De({params:r}){let e=r.title,l=[];return pe.subscribe(t=>{l=t}),{props:{title:e,pages:l}}}function Ee(r){r&&window.open(r,"_blank")}function Ce(r,e,l){let t=new Date,{cp_year:s=t.getFullYear()}=e,{title:a=""}=e,{pages:i=[]}=e;const n=c=>Ee(c.attributes.link);return r.$$set=c=>{"cp_year"in c&&l(0,s=c.cp_year),"title"in c&&l(1,a=c.title),"pages"in c&&l(2,i=c.pages)},[s,a,i,n]}class Pe extends ue{constructor(e){super();_e(this,e,Ce,ke,de,{cp_year:0,title:1,pages:2})}}export{Pe as default,De as load};