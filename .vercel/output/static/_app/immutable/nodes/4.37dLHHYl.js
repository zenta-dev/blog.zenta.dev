import{s as be,a as G}from"../chunks/scheduler.XJfXTXc2.js";import{S as Ce,i as Se,d as E,v as ye,a as H,c as C,s as A,b as W,f as K,k as S,j as d,h as N,l as L,m as k,o as y,t as P,q as B,u as R,x as Pe,n as le,y as M,z as T,A as J,g as Be}from"../chunks/index.GVqG1VGT.js";import{S as $e,P as z,a as D}from"../chunks/index.CYnBNtWA.js";import{a as Re,C as je,S as me,I as V,e as Ie,b as X,c as ue,d as Ee}from"../chunks/image.GU3ou8IR.js";const Y="src/routes/stack/[slug]/+page.svelte";function de(a){var c,s;let e,o;e=new V({props:{src:((c=a[0].stack)==null?void 0:c.logo)??"https://via.placeholder.com/800x600",layout:"constrained",width:1280,height:480,alt:(s=a[0].stack)==null?void 0:s.name,class:"mx-auto rounded-lg"},$$inline:!0});const i={c:function(){C(e.$$.fragment)},l:function(t){S(e.$$.fragment,t)},m:function(t,f){y(e,t,f),o=!0},p:function(t,f){var p,u;const g={};f&1&&(g.src=((p=t[0].stack)==null?void 0:p.logo)??"https://via.placeholder.com/800x600"),f&1&&(g.alt=(u=t[0].stack)==null?void 0:u.name),e.$set(g)},i:function(t){o||(P(e.$$.fragment,t),o=!0)},o:function(t){B(e.$$.fragment,t),o=!1},d:function(t){R(e,t)}};return E("SvelteRegisterBlock",{block:i,id:de.name,type:"slot",source:'(11:4) <Card.Header class=\\"container\\">',ctx:a}),i}function pe(a){var c;let e=((c=a[0].stack)==null?void 0:c.name)+"",o;const i={c:function(){o=M(e)},l:function(n){o=T(n,e)},m:function(n,t){k(n,o,t)},p:function(n,t){var f;t&1&&e!==(e=((f=n[0].stack)==null?void 0:f.name)+"")&&J(o,e)},d:function(n){n&&d(o)}};return E("SvelteRegisterBlock",{block:i,id:pe.name,type:"slot",source:"(27:6) <Card.Title>",ctx:a}),i}function _e(a){var f,g;let e=((f=a[0].stack)==null?void 0:f.founder.name)+"",o,i,c=((g=a[0].stack)==null?void 0:g.founder.type.toLocaleLowerCase().replace(/\b\w/g,fe))+"",s,n;const t={c:function(){o=M(e),i=M(" ( "),s=M(c),n=M(`
          )`)},l:function(u){o=T(u,e),i=T(u," ( "),s=T(u,c),n=T(u,`
          )`)},m:function(u,l){k(u,o,l),k(u,i,l),k(u,s,l),k(u,n,l)},p:function(u,l){var _,v;l&1&&e!==(e=((_=u[0].stack)==null?void 0:_.founder.name)+"")&&J(o,e),l&1&&c!==(c=((v=u[0].stack)==null?void 0:v.founder.type.toLocaleLowerCase().replace(/\b\w/g,fe))+"")&&J(s,c)},d:function(u){u&&(d(o),d(i),d(s),d(n))}};return E("SvelteRegisterBlock",{block:t,id:_e.name,type:"slot",source:"(45:8) <Card.Title>",ctx:a}),t}function ge(a){var g,p;let e,o="Founder",i,c,s,n,t;c=new V({props:{src:((g=a[0].stack)==null?void 0:g.founder.photo)??"https://via.placeholder.com/800x600",layout:"constrained",width:255,height:255,alt:(p=a[0].stack)==null?void 0:p.name,class:"my-2 rounded-lg"},$$inline:!0}),n=new X({props:{$$slots:{default:[_e]},$$scope:{ctx:a}},$$inline:!0});const f={c:function(){e=H("h1"),e.textContent=o,i=A(),C(c.$$.fragment),s=A(),C(n.$$.fragment),this.h()},l:function(l){e=W(l,"H1",{class:!0,"data-svelte-h":!0}),Be(e)!=="svelte-15jhb5r"&&(e.textContent=o),i=N(l),S(c.$$.fragment,l),s=N(l),S(n.$$.fragment,l),this.h()},h:function(){L(e,"class","text-2xl font-semibold"),G(e,Y,37,8,1128)},m:function(l,_){k(l,e,_),k(l,i,_),y(c,l,_),k(l,s,_),y(n,l,_),t=!0},p:function(l,_){var b,O;const v={};_&1&&(v.src=((b=l[0].stack)==null?void 0:b.founder.photo)??"https://via.placeholder.com/800x600"),_&1&&(v.alt=(O=l[0].stack)==null?void 0:O.name),c.$set(v);const w={};_&3&&(w.$$scope={dirty:_,ctx:l}),n.$set(w)},i:function(l){t||(P(c.$$.fragment,l),P(n.$$.fragment,l),t=!0)},o:function(l){B(c.$$.fragment,l),B(n.$$.fragment,l),t=!1},d:function(l){l&&(d(e),d(i),d(s)),R(c,l),R(n,l)}};return E("SvelteRegisterBlock",{block:f,id:ge.name,type:"slot",source:'(34:6) <Card.Content class=\\"mt-8\\">',ctx:a}),f}function ke(a){var c;let e=((c=a[0].stack)==null?void 0:c.name)+"",o;const i={c:function(){o=M(e)},l:function(n){o=T(n,e)},m:function(n,t){k(n,o,t)},p:function(n,t){var f;t&1&&e!==(e=((f=n[0].stack)==null?void 0:f.name)+"")&&J(o,e)},d:function(n){n&&d(o)}};return E("SvelteRegisterBlock",{block:i,id:ke.name,type:"slot",source:"(54:6) <Card.Title>",ctx:a}),i}function he(a){var c;let e=((c=a[0].stack)==null?void 0:c.description)+"",o;const i={c:function(){o=M(e)},l:function(n){o=T(n,e)},m:function(n,t){k(n,o,t)},p:function(n,t){var f;t&1&&e!==(e=((f=n[0].stack)==null?void 0:f.description)+"")&&J(o,e)},d:function(n){n&&d(o)}};return E("SvelteRegisterBlock",{block:i,id:he.name,type:"slot",source:'(55:6) <Card.Description class=\\"mt-2 line-clamp-3\\">',ctx:a}),i}function ve(a){let e,o,i,c;e=new X({props:{$$slots:{default:[ke]},$$scope:{ctx:a}},$$inline:!0}),i=new Ee({props:{class:"mt-2 line-clamp-3",$$slots:{default:[he]},$$scope:{ctx:a}},$$inline:!0});const s={c:function(){C(e.$$.fragment),o=A(),C(i.$$.fragment)},l:function(t){S(e.$$.fragment,t),o=N(t),S(i.$$.fragment,t)},m:function(t,f){y(e,t,f),k(t,o,f),y(i,t,f),c=!0},p:function(t,f){const g={};f&3&&(g.$$scope={dirty:f,ctx:t}),e.$set(g);const p={};f&3&&(p.$$scope={dirty:f,ctx:t}),i.$set(p)},i:function(t){c||(P(e.$$.fragment,t),P(i.$$.fragment,t),c=!0)},o:function(t){B(e.$$.fragment,t),B(i.$$.fragment,t),c=!1},d:function(t){t&&d(o),R(e,t),R(i,t)}};return E("SvelteRegisterBlock",{block:s,id:ve.name,type:"slot",source:'(53:4) <Card.Content class=\\"mt-8\\">',ctx:a}),s}function we(a){let e,o,i,c,s,n,t,f,g,p,u,l,_,v,w,b;e=new Ie({props:{class:"container",$$slots:{default:[de]},$$scope:{ctx:a}},$$inline:!0}),i=new me({props:{class:"w-[calc(100%-2rem)] mx-auto"},$$inline:!0}),n=new X({props:{$$slots:{default:[pe]},$$scope:{ctx:a}},$$inline:!0}),l=new ue({props:{class:"mt-8",$$slots:{default:[ge]},$$scope:{ctx:a}},$$inline:!0}),w=new ue({props:{class:"mt-8",$$slots:{default:[ve]},$$scope:{ctx:a}},$$inline:!0});const O={c:function(){C(e.$$.fragment),o=A(),C(i.$$.fragment),c=A(),s=H("a"),C(n.$$.fragment),t=A(),f=H("iconify-icon"),p=A(),u=H("a"),C(l.$$.fragment),v=A(),C(w.$$.fragment),this.h()},l:function(r){S(e.$$.fragment,r),o=N(r),S(i.$$.fragment,r),c=N(r),s=W(r,"A",{href:!0,class:!0,target:!0});var m=K(s);S(n.$$.fragment,m),t=N(m),f=W(m,"ICONIFY-ICON",{icon:!0}),K(f).forEach(d),m.forEach(d),p=N(r),u=W(r,"A",{href:!0,target:!0});var $=K(u);S(l.$$.fragment,$),$.forEach(d),v=N(r),S(w.$$.fragment,r),this.h()},h:function(){var r,m;Pe(f,"icon","streamline:interface-arrows-bend-up-right-2-arrow-bend-curve-change-direction-up-to-right"),G(f,Y,30,6,879),L(s,"href",g=(r=a[0].stack)==null?void 0:r.url),L(s,"class","flex gap-2 p-2 m-2 mx-4 bg-blue-900 rounded-lg w-min"),L(s,"target","_blank"),G(s,Y,24,4,696),L(u,"href",_=(m=a[0].stack)==null?void 0:m.founder.url),L(u,"target","_blank"),G(u,Y,35,4,1035)},m:function(r,m){y(e,r,m),k(r,o,m),y(i,r,m),k(r,c,m),k(r,s,m),y(n,s,null),le(s,t),le(s,f),k(r,p,m),k(r,u,m),y(l,u,null),k(r,v,m),y(w,r,m),b=!0},p:function(r,m){var q,F;const $={};m&3&&($.$$scope={dirty:m,ctx:r}),e.$set($);const h={};m&3&&(h.$$scope={dirty:m,ctx:r}),n.$set(h),(!b||m&1&&g!==(g=(q=r[0].stack)==null?void 0:q.url))&&L(s,"href",g);const U={};m&3&&(U.$$scope={dirty:m,ctx:r}),l.$set(U),(!b||m&1&&_!==(_=(F=r[0].stack)==null?void 0:F.founder.url))&&L(u,"href",_);const I={};m&3&&(I.$$scope={dirty:m,ctx:r}),w.$set(I)},i:function(r){b||(P(e.$$.fragment,r),P(i.$$.fragment,r),P(n.$$.fragment,r),P(l.$$.fragment,r),P(w.$$.fragment,r),b=!0)},o:function(r){B(e.$$.fragment,r),B(i.$$.fragment,r),B(n.$$.fragment,r),B(l.$$.fragment,r),B(w.$$.fragment,r),b=!1},d:function(r){r&&(d(o),d(c),d(s),d(p),d(u),d(v)),R(e,r),R(i,r),R(n),R(l),R(w,r)}};return E("SvelteRegisterBlock",{block:O,id:we.name,type:"slot",source:"(10:2) <Card.Root>",ctx:a}),O}function Q(a){var t,f,g,p,u,l,_,v,w,b,O,j,r;let e,o,i,c,s;o=new Re({props:{$$slots:{default:[we]},$$scope:{ctx:a}},$$inline:!0}),c=new $e({props:{title:`${(t=a[0].stack)==null?void 0:t.name} - Stack | ${z}`,description:`${((f=a[0].stack)==null?void 0:f.description)??""}`,keywords:`${(g=a[0].stack)==null?void 0:g.name}, ${z}`,canonical:`${D}/stack/${(p=a[0].stack)==null?void 0:p.id}`,openGraph:{title:(u=a[0].stack)==null?void 0:u.name,description:((l=a[0].stack)==null?void 0:l.description)??"",url:`${D}/stack/${(_=a[0].stack)==null?void 0:_.id}`,type:"website",site_name:(v=a[0].stack)==null?void 0:v.name,images:[{url:((w=a[0].stack)==null?void 0:w.logo)??"https://via.placeholder.com/800x600",width:1280,height:480,alt:(b=a[0].stack)==null?void 0:b.name}]},twitter:{card:"summary",site:"@zenta_blog",creator:"@zenta_blog"},jsonLd:{"@context":"https://schema.org","@type":"WebPage",url:`${D}/stack/${(O=a[0].stack)==null?void 0:O.id}`,name:`${(j=a[0].stack)==null?void 0:j.name} - Stack | ${z}`,description:`${((r=a[0].stack)==null?void 0:r.description)??""}`}},$$inline:!0});const n={c:function(){e=H("main"),C(o.$$.fragment),i=A(),C(c.$$.fragment),this.h()},l:function($){e=W($,"MAIN",{class:!0});var h=K(e);S(o.$$.fragment,h),h.forEach(d),i=N($),S(c.$$.fragment,$),this.h()},h:function(){L(e,"class","container"),G(e,Y,11,0,313)},m:function($,h){k($,e,h),y(o,e,null),k($,i,h),y(c,$,h),s=!0},p:function($,[h]){var q,F,Z,x,ee,te,ne,ae,se,oe,re,ce,ie;const U={};h&3&&(U.$$scope={dirty:h,ctx:$}),o.$set(U);const I={};h&1&&(I.title=`${(q=$[0].stack)==null?void 0:q.name} - Stack | ${z}`),h&1&&(I.description=`${((F=$[0].stack)==null?void 0:F.description)??""}`),h&1&&(I.keywords=`${(Z=$[0].stack)==null?void 0:Z.name}, ${z}`),h&1&&(I.canonical=`${D}/stack/${(x=$[0].stack)==null?void 0:x.id}`),h&1&&(I.openGraph={title:(ee=$[0].stack)==null?void 0:ee.name,description:((te=$[0].stack)==null?void 0:te.description)??"",url:`${D}/stack/${(ne=$[0].stack)==null?void 0:ne.id}`,type:"website",site_name:(ae=$[0].stack)==null?void 0:ae.name,images:[{url:((se=$[0].stack)==null?void 0:se.logo)??"https://via.placeholder.com/800x600",width:1280,height:480,alt:(oe=$[0].stack)==null?void 0:oe.name}]}),h&1&&(I.jsonLd={"@context":"https://schema.org","@type":"WebPage",url:`${D}/stack/${(re=$[0].stack)==null?void 0:re.id}`,name:`${(ce=$[0].stack)==null?void 0:ce.name} - Stack | ${z}`,description:`${((ie=$[0].stack)==null?void 0:ie.description)??""}`}),c.$set(I)},i:function($){s||(P(o.$$.fragment,$),P(c.$$.fragment,$),s=!0)},o:function($){B(o.$$.fragment,$),B(c.$$.fragment,$),s=!1},d:function($){$&&(d(e),d(i)),R(o),R(c,$)}};return E("SvelteRegisterBlock",{block:n,id:Q.name,type:"component",source:"",ctx:a}),n}const fe=a=>a.toUpperCase();function Le(a,e,o){let{$$slots:i={},$$scope:c}=e;ye("Page",i,[]);let{data:s}=e;a.$$.on_mount.push(function(){s===void 0&&!("data"in e||a.$$.bound[a.$$.props.data])&&console.warn("<Page> was created without expected prop 'data'")});const n=["data"];return Object.keys(e).forEach(t=>{!~n.indexOf(t)&&t.slice(0,2)!=="$$"&&t!=="slot"&&console.warn(`<Page> was created with unknown prop '${t}'`)}),a.$$set=t=>{"data"in t&&o(0,s=t.data)},a.$capture_state=()=>({PUBLIC_DOMAIN:D,PUBLIC_NAME:z,Card:je,Separator:me,SvelteSeo:$e,Image:V,data:s}),a.$inject_state=t=>{"data"in t&&o(0,s=t.data)},e&&"$$inject"in e&&a.$inject_state(e.$$inject),[s]}class De extends Ce{constructor(e){super(e),Se(this,e,Le,Q,be,{data:0}),E("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:Q.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{De as component};
