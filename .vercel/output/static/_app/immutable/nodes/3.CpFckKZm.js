import{s as ct,a as O}from"../chunks/scheduler.XJfXTXc2.js";import{S as it,i as lt,d as z,e as Q,v as ut,a as D,s as P,c as E,b as L,f as q,g as ft,h as B,j as _,k as I,l as k,m as v,n as F,o as R,t as w,p as mt,q as S,r as $t,u as j,w as dt,x as pt,y as V,z as W,A as Y}from"../chunks/index.GVqG1VGT.js";import{S as Z,P as b,a as U}from"../chunks/index.CYnBNtWA.js";import{C as _t,S as x,I as tt,a as gt,b as et,c as ht,d as vt}from"../chunks/image.GU3ou8IR.js";const M="src/routes/stack/+page.svelte";function X(o,t,n){const i=o.slice();return i[1]=t[n],i}function nt(o){let t=o[1].name+"",n;const i={c:function(){n=V(t)},l:function(e){n=W(e,t)},m:function(e,s){v(e,n,s)},p:function(e,s){s&1&&t!==(t=e[1].name+"")&&Y(n,t)},d:function(e){e&&_(n)}};return z("SvelteRegisterBlock",{block:i,id:nt.name,type:"slot",source:"(29:10) <Card.Title>",ctx:o}),i}function at(o){let t=o[1].name+"",n;const i={c:function(){n=V(t)},l:function(e){n=W(e,t)},m:function(e,s){v(e,n,s)},p:function(e,s){s&1&&t!==(t=e[1].name+"")&&Y(n,t)},d:function(e){e&&_(n)}};return z("SvelteRegisterBlock",{block:i,id:at.name,type:"slot",source:"(39:12) <Card.Title>",ctx:o}),i}function ot(o){let t=o[1].description+"",n;const i={c:function(){n=V(t)},l:function(e){n=W(e,t)},m:function(e,s){v(e,n,s)},p:function(e,s){s&1&&t!==(t=e[1].description+"")&&Y(n,t)},d:function(e){e&&_(n)}};return z("SvelteRegisterBlock",{block:i,id:ot.name,type:"slot",source:'(40:12) <Card.Description class=\\"mt-2 line-clamp-3\\"               >',ctx:o}),i}function st(o){let t,n,i,c;t=new et({props:{$$slots:{default:[at]},$$scope:{ctx:o}},$$inline:!0}),i=new vt({props:{class:"mt-2 line-clamp-3",$$slots:{default:[ot]},$$scope:{ctx:o}},$$inline:!0});const e={c:function(){E(t.$$.fragment),n=P(),E(i.$$.fragment)},l:function(a){I(t.$$.fragment,a),n=B(a),I(i.$$.fragment,a)},m:function(a,p){R(t,a,p),v(a,n,p),R(i,a,p),c=!0},p:function(a,p){const g={};p&17&&(g.$$scope={dirty:p,ctx:a}),t.$set(g);const l={};p&17&&(l.$$scope={dirty:p,ctx:a}),i.$set(l)},i:function(a){c||(w(t.$$.fragment,a),w(i.$$.fragment,a),c=!0)},o:function(a){S(t.$$.fragment,a),S(i.$$.fragment,a),c=!1},d:function(a){a&&_(n),j(t,a),j(i,a)}};return z("SvelteRegisterBlock",{block:e,id:st.name,type:"slot",source:'(38:10) <Card.Content class=\\"mt-8\\">',ctx:o}),e}function rt(o){let t,n,i,c,e,s,a,p,g,l,C,A,m,u,$,f,h;n=new tt({props:{src:o[1].logo??"https://via.placeholder.com/800x600",layout:"constrained",width:512,height:360,alt:o[1].name,class:"rounded-lg"},$$inline:!0}),s=new et({props:{$$slots:{default:[nt]},$$scope:{ctx:o}},$$inline:!0}),C=new x({props:{class:"w-[calc(100%-2rem)] mx-auto"},$$inline:!0}),u=new ht({props:{class:"mt-8",$$slots:{default:[st]},$$scope:{ctx:o}},$$inline:!0});const J={c:function(){t=D("a"),E(n.$$.fragment),c=P(),e=D("a"),E(s.$$.fragment),a=P(),p=D("iconify-icon"),l=P(),E(C.$$.fragment),A=P(),m=D("a"),E(u.$$.fragment),f=P(),this.h()},l:function(r){t=L(r,"A",{href:!0});var d=q(t);I(n.$$.fragment,d),d.forEach(_),c=B(r),e=L(r,"A",{href:!0,class:!0,target:!0});var y=q(e);I(s.$$.fragment,y),a=B(y),p=L(y,"ICONIFY-ICON",{icon:!0}),q(p).forEach(_),y.forEach(_),l=B(r),I(C.$$.fragment,r),A=B(r),m=L(r,"A",{href:!0});var T=q(m);I(u.$$.fragment,T),T.forEach(_),f=B(r),this.h()},h:function(){k(t,"href",i=`/stack/${o[1].id}`),O(t,M,16,8,489),pt(p,"icon","streamline:interface-arrows-bend-up-right-2-arrow-bend-curve-change-direction-up-to-right"),O(p,M,32,10,979),k(e,"href",g=o[1].url),k(e,"class","flex gap-2 p-2 m-2 mx-4 bg-blue-900 rounded-lg w-min"),k(e,"target","_blank"),O(e,M,26,8,784),k(m,"href",$=`/stack/${o[1].id}`),O(m,M,39,8,1210)},m:function(r,d){v(r,t,d),R(n,t,null),v(r,c,d),v(r,e,d),R(s,e,null),F(e,a),F(e,p),v(r,l,d),R(C,r,d),v(r,A,d),v(r,m,d),R(u,m,null),v(r,f,d),h=!0},p:function(r,d){const y={};d&1&&(y.src=r[1].logo??"https://via.placeholder.com/800x600"),d&1&&(y.alt=r[1].name),n.$set(y),(!h||d&1&&i!==(i=`/stack/${r[1].id}`))&&k(t,"href",i);const T={};d&17&&(T.$$scope={dirty:d,ctx:r}),s.$set(T),(!h||d&1&&g!==(g=r[1].url))&&k(e,"href",g);const K={};d&17&&(K.$$scope={dirty:d,ctx:r}),u.$set(K),(!h||d&1&&$!==($=`/stack/${r[1].id}`))&&k(m,"href",$)},i:function(r){h||(w(n.$$.fragment,r),w(s.$$.fragment,r),w(C.$$.fragment,r),w(u.$$.fragment,r),h=!0)},o:function(r){S(n.$$.fragment,r),S(s.$$.fragment,r),S(C.$$.fragment,r),S(u.$$.fragment,r),h=!1},d:function(r){r&&(_(t),_(c),_(e),_(l),_(A),_(m),_(f)),j(n),j(s),j(C,r),j(u)}};return z("SvelteRegisterBlock",{block:J,id:rt.name,type:"slot",source:"(13:6) <Card.Root>",ctx:o}),J}function G(o){let t,n;t=new gt({props:{$$slots:{default:[rt]},$$scope:{ctx:o}},$$inline:!0});const i={c:function(){E(t.$$.fragment)},l:function(e){I(t.$$.fragment,e)},m:function(e,s){R(t,e,s),n=!0},p:function(e,s){const a={};s&17&&(a.$$scope={dirty:s,ctx:e}),t.$set(a)},i:function(e){n||(w(t.$$.fragment,e),n=!0)},o:function(e){S(t.$$.fragment,e),n=!1},d:function(e){j(t,e)}};return z("SvelteRegisterBlock",{block:i,id:G.name,type:"each",source:"(12:4) {#each data.stacks as stack}",ctx:o}),i}function H(o){let t,n,i="Stack",c,e,s,a,p,g=Q(o[0].stacks),l=[];for(let m=0;m<g.length;m+=1)l[m]=G(X(o,g,m));const C=m=>S(l[m],1,1,()=>{l[m]=null});a=new Z({props:{title:`Stack | ${b}`,description:`Stacks of ${b} used for categorizing posts and pages on this blog`,keywords:`stacks, ${b}`,canonical:`${U}/stack`,openGraph:{title:`Stack | ${b}`,description:`Stacks of ${b} used for categorizing posts and pages on this blog`,url:`${U}/stack`,type:"website",site_name:`Stack | ${b}`,images:[{url:`${U}/favicon.png`,width:128,height:128,alt:`Stack | ${b}`}]},twitter:{card:"summary",site:"@zenta_blog",creator:"@zenta_blog"},jsonLd:{"@context":"https://schema.org","@type":"WebSite",url:`${U}/stack`,name:`Stack | ${b}`,description:`Stacks of ${b} used for categorizing posts and pages on this blog`}},$$inline:!0});const A={c:function(){t=D("main"),n=D("h1"),n.textContent=i,c=P(),e=D("div");for(let u=0;u<l.length;u+=1)l[u].c();s=P(),E(a.$$.fragment),this.h()},l:function(u){t=L(u,"MAIN",{class:!0});var $=q(t);n=L($,"H1",{class:!0,"data-svelte-h":!0}),ft(n)!=="svelte-17z87tt"&&(n.textContent=i),c=B($),e=L($,"DIV",{class:!0});var f=q(e);for(let h=0;h<l.length;h+=1)l[h].l(f);f.forEach(_),$.forEach(_),s=B(u),I(a.$$.fragment,u),this.h()},h:function(){k(n,"class","my-8 text-2xl font-semibold"),O(n,M,12,2,340),k(e,"class","grid grid-cols-4 gap-4"),O(e,M,13,2,393),k(t,"class","container"),O(t,M,11,0,313)},m:function(u,$){v(u,t,$),F(t,n),F(t,c),F(t,e);for(let f=0;f<l.length;f+=1)l[f]&&l[f].m(e,null);v(u,s,$),R(a,u,$),p=!0},p:function(u,[$]){if($&1){g=Q(u[0].stacks);let f;for(f=0;f<g.length;f+=1){const h=X(u,g,f);l[f]?(l[f].p(h,$),w(l[f],1)):(l[f]=G(h),l[f].c(),w(l[f],1),l[f].m(e,null))}for(dt(),f=g.length;f<l.length;f+=1)C(f);mt()}},i:function(u){if(!p){for(let $=0;$<g.length;$+=1)w(l[$]);w(a.$$.fragment,u),p=!0}},o:function(u){l=l.filter(Boolean);for(let $=0;$<l.length;$+=1)S(l[$]);S(a.$$.fragment,u),p=!1},d:function(u){u&&(_(t),_(s)),$t(l,u),j(a,u)}};return z("SvelteRegisterBlock",{block:A,id:H.name,type:"component",source:"",ctx:o}),A}function kt(o,t,n){let{$$slots:i={},$$scope:c}=t;ut("Page",i,[]);let{data:e}=t;o.$$.on_mount.push(function(){e===void 0&&!("data"in t||o.$$.bound[o.$$.props.data])&&console.warn("<Page> was created without expected prop 'data'")});const s=["data"];return Object.keys(t).forEach(a=>{!~s.indexOf(a)&&a.slice(0,2)!=="$$"&&a!=="slot"&&console.warn(`<Page> was created with unknown prop '${a}'`)}),o.$$set=a=>{"data"in a&&n(0,e=a.data)},o.$capture_state=()=>({PUBLIC_DOMAIN:U,PUBLIC_NAME:b,Card:_t,Separator:x,SvelteSeo:Z,Image:tt,data:e}),o.$inject_state=a=>{"data"in a&&n(0,e=a.data)},t&&"$$inject"in t&&o.$inject_state(t.$$inject),[e]}class yt extends it{constructor(t){super(t),lt(this,t,kt,H,ct,{data:0}),z("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:H.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(t){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{yt as component};
