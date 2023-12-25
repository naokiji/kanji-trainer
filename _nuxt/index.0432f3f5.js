import{_ as T}from"./nuxt-link.7dc10c1a.js";import{o as a,c as _,n as N,q as M,_ as w,r as l,a as i,t as b,u as t,b as x,w as g,d as h,F as B,s as C,v,T as O}from"./entry.45f88479.js";import{d as W}from"./data.9485f4b6.js";const j={__name:"ChoiceButton",props:{isRight:Boolean,isWrong:Boolean},setup(u){const n=u;return(s,m)=>(a(),_("button",{class:M(["text-xl bg-duo-grey-dark ring ring-inset border-b-2 rounded-xl min-h-[95px] px-2 active:bg-duo-grey-light active:border-b-0 active:border-t-2 active:border-duo-grey-dark active:ring-duo-blue-dark active:text-duo-blue-dark",{"ring-duo-grey-lighter border-duo-grey-lighter":!n.isRight&&!n.isWrong,"text-duo-green ring-duo-green border-b-duo-green":n.isRight,"text-duo-red ring-duo-red border-b-duo-red":n.isWrong}])},[N(s.$slots,"default")],2))}},J={},P={class:"rounded-2xl px-6 py-3 bg-duo-blue font-bold text-duo-grey-dark border-b-4 border-b-duo-blue-dark active:bg-duo-blue-light active:border-b-0 active:border-t-4 active:border-t-duo-grey-dark"};function V(u,n){return a(),_("button",P,[N(u.$slots,"default")])}const q=w(J,[["render",V]]),A={class:"flex flex-col justify-between min-h-screen font-line bg-duo-grey-dark text-white text-center"},E={class:""},F=i("h1",{class:"font-bold text-3xl pt-3"},"Kanji Trainer",-1),L=i("p",{class:"text-xl mt-1"},"What's this Kanji ?",-1),z={class:"text-5xl font-bold mt-8"},D={class:"grid grid-cols-2 gap-y-5 gap-x-4 px-6"},G={class:"mb-4"},I={__name:"BaseKanji",setup(u){const n=JSON.parse(localStorage.getItem("parameters.units")||"[]"),s=W.filter(e=>{if(n.length===0)return!0;const p=`${e.lesson.section} ${e.lesson.unit}`;return n.includes(p)});function m(){return s[Math.floor(Math.random()*s.length)]}const r=l(m()),k=l(f().map(e=>e.meaning)),y=l(f().map(e=>e.reading)),d=l(void 0),c=l(void 0);function f(){let e=s.filter(function(p){return p.kanji!==r.value.kanji});return e=$(e).slice(0,3),e.push(r.value),$(e)}function $(e){return JSON.parse(JSON.stringify(e)).sort(function(){return .5-Math.random()})}function R(){r.value=m(),k.value=f().map(e=>e.meaning),y.value=f().map(e=>e.reading),d.value=void 0,c.value=void 0}return(e,p)=>{const S=T;return a(),_("section",A,[i("div",E,[F,L,i("p",z,b(t(r).kanji),1)]),i("div",null,[x(S,{to:"/parameters"},{default:g(()=>[h(" O ")]),_:1})]),x(O,{name:"list",tag:"button",class:"grid grid-cols-2 gap-y-5 gap-x-4 px-6"},{default:g(()=>[(a(!0),_(B,null,C(t(y),o=>(a(),v(t(j),{class:"font-bold","is-right":t(d)===o&&t(d)===t(r).reading,"is-wrong":t(d)===o&&t(d)!==t(r).reading,onClick:K=>d.value=o},{default:g(()=>[h(b(o),1)]),_:2},1032,["is-right","is-wrong","onClick"]))),256))]),_:1}),i("div",D,[(a(!0),_(B,null,C(t(k),o=>(a(),v(t(j),{"is-right":t(c)===o&&t(c)===t(r).meaning,"is-wrong":t(c)===o&&t(c)!==t(r).meaning,onClick:K=>c.value=o},{default:g(()=>[h(b(o),1)]),_:2},1032,["is-right","is-wrong","onClick"]))),256))]),i("div",G,[x(t(q),{onClick:R},{default:g(()=>[h(" NEXT ")]),_:1})])])}}},U={};function X(u,n){const s=I;return a(),v(s)}const Z=w(U,[["render",X]]);export{Z as default};