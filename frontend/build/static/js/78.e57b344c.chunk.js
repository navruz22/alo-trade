"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[78],{5520:function(e,t,n){n(2791);t.Z=n.p+"static/media/no-image.5c7731b2eacc156460f251b9ebd63d5d.svg"},7746:function(e,t,n){var i=n(9439),r=n(2791),l=n(6053),s=n(1046),o=n(184);t.Z=function(e){var t=e.width,n=e.height,d=e.images,c=(0,r.useState)(0),a=(0,i.Z)(c,2),x=a[0],u=a[1],m=(0,r.useState)(!1),p=(0,i.Z)(m,2),f=p[0],h=p[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"relative",onClick:function(e){return e.stopPropagation()},children:[(0,o.jsx)("div",{style:{backgroundImage:"url(".concat(d[x],")"),width:t,height:n},onClick:function(){h(!0)},className:"mx-auto bg-center bg-contain bg-no-repeat cursor-pointer"}),(0,o.jsx)(l.ULj,{onClick:function(){d.length-1===x?u(0):u((function(e){return e+1}))},className:"absolute top-[50%] translate-y-[-50%] right-0 fill-white text-[36px] md:text-[42px] cursor-pointer"}),(0,o.jsx)(l.Ugn,{onClick:function(){u(0===x?d.length-1:function(e){return e-1})},className:"absolute top-[50%] translate-y-[-50%] left-0 fill-white text-[36px] md:text-[42px] cursor-pointer"})]}),(0,o.jsx)(s.Z,{body:"zoomImg",isOpen:f,img:d[x],closeModal:function(){return h(!1)}})]})}},866:function(e,t,n){n.d(t,{Z:function(){return f}});n(2791);var i=n(184),r=function(e){e.user,e.createdAt,e.position;var t=e.organization,n=(e.logged,null===t||void 0===t?void 0:t.name);return(0,i.jsx)("div",{className:"border-t w-full px-3 py-1 font-semibold text-[#01c2cc] mt-2",children:(0,i.jsx)("div",{className:"flex justify-end w-full text-[10px] md:text-[14px]",children:(0,i.jsx)("h3",{className:"font-amazonbold",children:n})})})},l=n(2111),s=n.n(l),o=(n(4397),function(e){var t=e.name,n=e.minPrice,r=e.maxPrice,l=e.currency,o=(e.region,n?n.toLocaleString("ru-RU"):0),d=r?r.toLocaleString("ru-RU"):0;return(0,i.jsxs)("div",{className:"px-3 py-2 rounded-b-xl",children:[(0,i.jsx)("div",{className:"",children:(0,i.jsx)("div",{className:"font-amazonbold text-[12px] md:text-base font-bold",children:(0,i.jsx)(s(),{line:2,element:"h3",truncateText:"\u2026",text:t})})}),(0,i.jsx)("div",{className:"",children:(0,i.jsx)("h3",{className:"font-amazonbold text-base text-amber-500 flex justify-between",children:(0,i.jsxs)("span",{className:"text-[12px] md:text-[16px] text-[#11ed1c] font-bold",children:[d&&"".concat(o," - ").concat(d)||""," ",l]})})})]})}),d=n(71),c=n(9126),a=function(e){var t=e.editHandler,n=e.productId,r=e.deleteHandler;return(0,i.jsxs)("div",{className:"w-full border-t product-t flex m-0",children:[(0,i.jsx)("button",{onClick:function(){return t(n)},className:"w-full flex justify-center items-center rounded-bl-xl border-r product-r py-1 bg-orange-500",children:(0,i.jsx)(c.HlX,{size:18,className:"text-white"})}),(0,i.jsx)("button",{className:" w-full flex justify-center items-center py-1 rounded-br-xl bg-[#ff0000]",onClick:function(){return r(n)},children:(0,i.jsx)(d.BFV,{size:22,className:"text-white"})})]})},x=n(9434),u=n(5520),m=n(7689),p=n(1087),f=function(e){var t,n,l=e.product,s=e.editHandler,c=e.deleteHandler,f=e.logged,h=(0,x.v9)((function(e){return e.login})).userData,g=(0,m.TH)(),v=l._id,b=(l.tradetypes,l.region),j=(l.district,l.categories,l.subcategories,l.name),N=l.description,w=(l.status,l.currency),y=l.minPrice,k=l.maxPrice,P=l.images,Z=l.position,z=l.user,C=l.createdAt,S=l.organization,U=(null===h||void 0===h||null===(t=h.user)||void 0===t||t._id,null===z||void 0===z||z._id,null===S||void 0===S||S.phone,!(null===h||void 0===h||null===(n=h.organization)||void 0===n||!n._id)),T="/profile/products"===g.pathname;return U&&f&&T?(0,i.jsx)("div",{className:"w-full shadow-2xl mt-5 rounded-xl bg-white-900 bg-white border-[1px] border-[#01c2cc]",children:(0,i.jsxs)("div",{className:"text-sm w-full h-full flex flex-col justify-between rounded-xl",children:[(0,i.jsxs)(p.rU,{to:"/products/".concat(v),className:"text-sm w-full h-full flex flex-col justify-between rounded-xl",children:[(0,i.jsxs)("p",{className:"pl-2 border-b my-1 flex items-center text-neutral-500 text-sm",children:[(0,i.jsx)(d.kXE,{className:""}),(0,i.jsx)("span",{className:"text-[10px] md:text-[14px] ml-2",children:b?null===b||void 0===b?void 0:b.name:"Respublika bo'ylab"})]}),(0,i.jsx)("div",{className:"flex overflow-hidden items-center justify-center bg-white rounded-t-xl",children:(0,i.jsx)("img",{src:P[0]?P[0]:u.Z,className:"rounded object-contain h-[150px] md:h-[200px]",alt:"Product"})}),(0,i.jsx)(r,{logged:f,user:z,position:Z,createdAt:C,organization:S}),(0,i.jsx)(o,{region:b,name:j,maxPrice:k,minPrice:y,description:N,currency:w})]}),(0,i.jsx)(a,{editHandler:s,productId:v,deleteHandler:c,position:Z})]})}):(0,i.jsx)(p.rU,{to:"/products/".concat(v),className:"w-full shadow-2xl rounded-xl block h-full bg-white border-[1px] border-[#01c2cc]",children:(0,i.jsxs)("div",{className:"text-sm w-full h-full flex flex-col justify-between rounded-xl",children:[(0,i.jsxs)("p",{className:"pl-2 border-b my-1 flex items-center text-neutral-500 text-sm",children:[(0,i.jsx)(d.kXE,{className:""}),(0,i.jsx)("span",{className:"text-[10px] md:text-[14px] ml-2",children:b?null===b||void 0===b?void 0:b.name:"Respublika bo'ylab"})]}),(0,i.jsx)("div",{className:"flex h-[200px] items-center justify-center bg-white rounded-t-xl",children:(0,i.jsx)("img",{src:P[0]?P[0]:u.Z,className:"rounded object-contain h-[150px] md:h-[200px]",alt:"Product"})}),(0,i.jsx)(r,{logged:f,user:z,position:Z,createdAt:C,organization:S}),(0,i.jsx)(o,{region:b,name:j,maxPrice:k,minPrice:y,description:N,currency:w})]})})}},3275:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var i=n(3433),r=n(9439),l=n(763),s=n(2791),o=n(6766),d=(n(5141),n(9434)),c=n(7689),a=(n(5605),n(7746)),x=n(866),u=n(4397),m=n(8285),p=n(71),f=n(1087),h=n(1046),g=n(184),v=function(e){var t=e.id,n=e.user,i=(0,u.Z)().width,l=(0,s.useState)(!1),o=(0,r.Z)(l,2),c=o[0],a=o[1],x=(0,d.v9)((function(e){return e.login})).logged;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:"\r bg-alotrade\r rounded\r overflow-hidden\r text-center\r p-4\r lg:px-8\r wow\r fadeInUp\r ",children:[(0,g.jsxs)("div",{className:"flex items-center flex-col",children:[(0,g.jsx)("div",{className:"flex justify-center p-4 pb-2",children:null!==n&&void 0!==n&&n.image?(0,g.jsx)("img",{src:null===n||void 0===n?void 0:n.image,alt:"logo",className:"w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full bg-neutral-200"}):(0,g.jsx)("h3",{className:"rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500 text-lg",children:"alo"})}),(0,g.jsx)("div",{className:"font-semibold text-white mb-2 text-2xl",children:null===n||void 0===n?void 0:n.name})]}),(0,g.jsxs)("p",{className:"text-right text-base text-white mb-8",children:[null===n||void 0===n?void 0:n.region,", ",null===n||void 0===n?void 0:n.district]}),(0,g.jsxs)("div",{className:"",children:[(0,g.jsx)(f.rU,{to:"/organization",state:{_id:null===n||void 0===n?void 0:n._id},class:"\r w-full\r text-center\r text-sm\r font-medium\r text-white\r rounded\r block\r mb-6\r cursor-pointer\r transition\r duration-300\r ease-in-out\r ",children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"}),(0,g.jsx)("button",{onClick:function(){a(!c)},className:" w-full\r flex\r justify-center\r items-center\r h-[50px]\r text-sm\r font-medium\r bg-green-500\r placeholder-white\r text-white\r rounded\r mb-4\r outline-none\r border border-transparent\r focus-visible:shadow-none\r focus:border-white",children:i>720?c&&"+"+(null===n||void 0===n?void 0:n.phone)||(0,g.jsx)(p.Ty1,{className:"text-[14px] md:text-[22px]"}):(0,g.jsx)(p.Ty1,{onClick:function(){return a(!0)},className:"text-[14px] md:text-[22px]"})}),(0,g.jsx)(f.rU,{to:x?"/offers":"/sign-in",state:{type:"product",id:t},class:"\r w-full\r flex\r justify-center\r items-center\r text-center\r h-[50px]\r text-sm\r font-medium\r text-white\r rounded\r mb-6\r bg-orange-500\r cursor-pointer\r hover:shadow-lg\r transition\r duration-300\r ease-in-out\r ",children:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c"})]})]}),(0,g.jsx)(h.Z,{isOpen:i<720&&c,body:"phone",phone:null!==n&&void 0!==n&&n.phone.includes("+")?null===n||void 0===n?void 0:n.phone:"+"+(null===n||void 0===n?void 0:n.phone),closeModal:function(){return a(!1)}})]})},b=function(){var e,t,n=(0,c.UO)().id,p=(0,d.I0)(),f=(0,d.v9)((function(e){return e.products})).product,h=(0,d.v9)((function(e){return e.products})).products,b=(0,d.v9)((function(e){return e.login})).logged,j=(0,u.Z)().width,N=(0,s.useState)([]),w=(0,r.Z)(N,2),y=w[0],k=w[1];(0,s.useEffect)((function(){window.scrollTo(0,0)}),[n]),(0,s.useEffect)((function(){null!==f&&void 0!==f&&f._id&&k((0,i.Z)(f.images))}),[f,n]),(0,s.useEffect)((function(){return function(){k([])}}),[]),(0,s.useEffect)((function(){p((0,m.gk)({id:n}))}),[p,n]),(0,s.useEffect)((function(){var e,t={page:0,count:20,organization:null===f||void 0===f||null===(e=f.organization)||void 0===e?void 0:e._id};p((0,m.Xp)(t))}),[p,f]);return(0,g.jsxs)("div",{className:"w-full bg-white",children:[(0,g.jsxs)("div",{className:"container",children:[(0,g.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-4 pt-6",children:[(0,g.jsx)("div",{className:"flex justify-center md:block md:col-span-2",children:y.length>0&&(0,g.jsx)(a.Z,{width:j<720?"350px":"600px",height:j<720?"180px":"400px",images:y})}),(0,g.jsxs)("div",{className:"flex flex-col gap-5 py-8",children:[(0,g.jsx)("div",{className:"flex gap-[4px]",children:(0,g.jsx)("h2",{className:"text-[32px] font-bold",children:null===f||void 0===f?void 0:f.name})}),(0,g.jsxs)("div",{className:"flex flex-col text-[18px] font-medium",children:[(0,g.jsx)("span",{children:"\u0426\u0435\u043d\u0430:"}),(0,g.jsxs)("h2",{className:"text-[30px] text-orange-500 font-bold",children:[null===f||void 0===f?void 0:f.minPrice," - ",null===f||void 0===f?void 0:f.maxPrice," ",null===f||void 0===f?void 0:f.currency]})]}),(0,g.jsxs)("div",{className:"flex items-center gap-[4px] text-[14px] font-medium",children:["\u041f\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0432 \u0433\u043e\u0440\u043e\u0434:"," ",(0,g.jsxs)("h2",{className:"text-[16px] font-bold",children:[null===f||void 0===f||null===(e=f.region)||void 0===e?void 0:e.label,", ",null===f||void 0===f||null===(t=f.region)||void 0===t?void 0:t.districts[0].label]})]})]})]}),(0,g.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-2 py-[30px]",children:[(0,g.jsxs)("div",{className:"col-span-2 bg-white px-6 py-2 min-h-[100px] mb-4 md:mb-0",children:[(0,g.jsx)("h2",{className:"text-[32px] font-bold",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),(0,g.jsx)("p",{className:"text-[14px]",children:null===f||void 0===f?void 0:f.description})]}),(0,g.jsx)("div",{className:"col-span-1",children:(0,g.jsx)(v,{id:n,user:null===f||void 0===f?void 0:f.organization})})]})]}),(0,g.jsx)("div",{className:"pt-6 pb-[60px] bg-white px-2",children:(0,g.jsx)(o.default,{responsive:{desktop:{breakpoint:{max:3e3,min:1024},items:4,slidesToSlide:4},tablet:{breakpoint:{max:1024,min:464},items:2,slidesToSlide:2},mobile:{breakpoint:{max:540,min:0},items:2,slidesToSlide:2}},sliderClass:"flex items-stretch gap-2 md:gap-4 ",autoPlay:!0,autoPlaySpeed:3e3,removeArrowOnDeviceType:["tablet","mobile"],infinite:!0,itemClass:"",children:(0,l.map)(h,(function(e){return(0,g.jsx)(x.Z,{logged:b,product:e,isProductPage:!0},(0,l.uniqueId)())}))})})]})}}}]);
//# sourceMappingURL=78.e57b344c.chunk.js.map