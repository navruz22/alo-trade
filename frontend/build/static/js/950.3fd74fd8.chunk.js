"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[950],{8950:function(e,r,s){s.r(r),s.d(r,{default:function(){return v}});var l=s(3433),i=s(9439),t=s(2791),n=s(9434),d=s(7689),o=s(6691),a=s(5605),c=s.n(a),x=s(71),u=s(1087),m=s(184),h=function(e){var r=e.id,s=e.user,l=(0,t.useState)(!1),n=(0,i.Z)(l,2),d=n[0],o=n[1];return(0,m.jsxs)("div",{className:"\r bg-alotrade\r rounded\r overflow-hidden\r text-center\r p-4\r lg:px-8\r wow\r fadeInUp\r ",children:[(0,m.jsxs)("div",{className:"flex items-center",children:[(0,m.jsx)("div",{className:"flex justify-center p-4 pb-2",children:null!==s&&void 0!==s&&s.image?(0,m.jsx)("img",{src:null===s||void 0===s?void 0:s.image,alt:"logo",className:"w-[100px] h-[100px] rounded-full bg-neutral-200"}):(0,m.jsx)("h3",{className:"w-[100px] h-[100px] rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500 text-lg",children:"alo"})}),(0,m.jsxs)("div",{className:"font-semibold text-white mb-2 text-2xl",children:[null===s||void 0===s?void 0:s.firstname," ",null===s||void 0===s?void 0:s.lastname]})]}),(0,m.jsxs)("p",{className:"text-right text-base text-white mb-8",children:[null===s||void 0===s?void 0:s.region,", ",null===s||void 0===s?void 0:s.district]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("button",{onClick:function(){o(!d)},className:" w-full\r flex\r justify-center\r items-center\r h-[50px]\r text-sm\r font-medium\r bg-green-500\r placeholder-white\r text-white\r rounded\r mb-4\r outline-none\r border border-transparent\r focus-visible:shadow-none\r focus:border-white",children:d?"+"+(null===s||void 0===s?void 0:s.phone):(0,m.jsx)(x.Ty1,{className:"text-[14px] md:text-[22px]"})}),(0,m.jsx)(u.rU,{to:"/offers",state:{type:"order",id:r},class:"\r w-full\r flex\r justify-center\r items-center\r text-center\r h-[50px]\r text-sm\r font-medium\r text-white\r rounded\r mb-6\r bg-orange-500\r cursor-pointer\r hover:shadow-lg hover:bg-opacity-90\r transition\r duration-300\r ease-in-out\r ",children:"\u041e\u0442\u043f\u0440a\u0432\u0438\u0442\u044c \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435"})]})]})},f=s(4397),v=function(){var e,r,s=(0,d.UO)().id,a=(0,n.I0)(),x=(0,f.Z)().width,u=(0,n.v9)((function(e){return e.orders})).order,v=(0,t.useState)([]),p=(0,i.Z)(v,2),g=p[0],j=p[1];return(0,t.useEffect)((function(){a((0,o.HG)({id:s}))}),[a,s]),(0,t.useEffect)((function(){null!==u&&void 0!==u&&u._id&&j((0,l.Z)(u.images.map((function(e){return{url:e}}))))}),[u]),(0,m.jsx)("div",{className:"w-full bg-slate-100",children:(0,m.jsxs)("div",{className:"container",children:[(0,m.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-4 pt-6",children:[(0,m.jsx)("div",{className:"flex justify-center md:block md:col-span-2",children:g.length>0&&(0,m.jsx)(c(),{width:x<720?350:800,height:x<720?180:450,images:g,showBullets:!0,showNavs:!0,style:{backgroundPosition:"center"}})}),(0,m.jsxs)("div",{className:"flex flex-col gap-5 py-8",children:[(0,m.jsx)("div",{className:"flex gap-[4px]",children:(0,m.jsx)("h2",{className:"text-[24px] md:text-[32px] font-bold",children:null===u||void 0===u?void 0:u.name})}),(0,m.jsxs)("div",{className:"flex flex-col text-[18px] font-medium",children:[(0,m.jsx)("span",{children:"\u0426\u0435\u043d\u0430:"}),(0,m.jsxs)("h2",{className:"text-[30px] text-orange-500 font-bold",children:[null===u||void 0===u?void 0:u.minPrice," - ",null===u||void 0===u?void 0:u.maxPrice," ",null===u||void 0===u?void 0:u.currency]})]}),(0,m.jsxs)("div",{className:"flex items-center gap-[4px] text-[14px] font-medium",children:["\u041f\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0432 \u0433\u043e\u0440\u043e\u0434:"," ",(0,m.jsxs)("h2",{className:"text-[16px] font-bold",children:[null===u||void 0===u||null===(e=u.region)||void 0===e?void 0:e.label,","," ",null===u||void 0===u||null===(r=u.region)||void 0===r?void 0:r.districts.map((function(e){return e.label}))]})]})]})]}),(0,m.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-2 py-[30px]",children:[(0,m.jsxs)("div",{className:"col-span-2 bg-white px-6 pt-2 mb-4 md:mb-0",children:[(0,m.jsx)("h2",{className:"text-[32px] font-bold",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),(0,m.jsx)("p",{className:"text-[14px]",children:null===u||void 0===u?void 0:u.description})]}),(0,m.jsx)("div",{className:"col-span-1",children:(0,m.jsx)(h,{id:s,user:null===u||void 0===u?void 0:u.user})})]})]})})}}}]);
//# sourceMappingURL=950.3fd74fd8.chunk.js.map