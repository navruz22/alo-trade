"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[848],{5520:function(e,t,r){r(2791);t.Z=r.p+"static/media/no-image.5c7731b2eacc156460f251b9ebd63d5d.svg"},7288:function(e,t,r){r(2791);var n=r(184);t.Z=function(e){var t=e.title,r=e.onClick,l=e.className;return(0,n.jsx)("button",{className:"block uppercase shadow md:ml-0  bg-alotrade focus:shadow-outline focus:outline-none text-white md:text-xs text-[10px] px-3 py-2 md:px-10  rounded-lg ".concat(l),onClick:r,children:t})}},1399:function(e,t,r){r(2791);var n=r(7288),l=(r(6549),r(5077),r(184));t.Z=function(e){var t=e.onClick,r=e.buttonTitle,o=(e.countTitle,e.count,e.handleFilter,e.filterData,e.filter,e.translations,e.setFilterVisible),a=e.setFilterBody,i=e.mainTitle,s=e.isOrganization;return(0,l.jsxs)("div",{className:"bg-alotrade md:bg-white w-full pt-6",children:[(0,l.jsx)("div",{className:"w-full block md:hidden",children:(0,l.jsx)("h2",{className:"text-center text-white text-[20px] mb-2 md:mb-0 md:text-[21px]",children:i})}),(0,l.jsxs)("div",{className:"flex w-full md:justify-end",children:[(0,l.jsxs)("div",{className:"flex w-full px-4 md:gap-4 md:justify-center mb-[20px] md:hidden",children:[(0,l.jsx)("button",{className:"block w-full  md:w-auto uppercase shadow bg-white md:ml-0 rounded-tr-none rounded-br-none\n             rounded-l-xl border-r-0 border-1 border-[#03c1f6cc]\n             font-bold focus:shadow-outline focus:outline-none text-alotrade md:text-xs text-[10px]\n              py-3 md:px-10 px-2 rounded",onClick:function(){a("category"),o(!0)},children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"}),(0,l.jsx)("button",{className:"block w-full bg-white md:w-auto uppercase shadow md:ml-0 rounded-tl-none rounded-bl-none\n             ".concat(r&&!s?"rounded-r-none":"rounded-r-xl"," border-l-0 border-1 border-[#03c1f6cc]\n             font-bold focus:shadow-outline focus:outline-none text-alotrade md:text-xs text-[10px]\n              py-3 md:px-10 px-2 rounded"),onClick:function(){a("country"),o(!0)},children:"\u0421\u0442\u0440\u0430\u043d\u044b"}),r&&!s&&(0,l.jsx)("button",{className:"block w-full bg-white md:w-auto uppercase shadow md:ml-0 rounded-tl-none rounded-bl-none\n             rounded-r-xl border-l-0 border-1 border-[#03c1f6cc]\n             font-bold focus:shadow-outline focus:outline-none text-alotrade md:text-xs text-[10px]\n              py-3 md:px-10 px-2 rounded",onClick:t,children:r})]}),r&&(0,l.jsx)("div",{className:"hidden md:block",children:(0,l.jsx)(n.Z,{onClick:t,title:r})})]})]})}},5077:function(e,t,r){r(2791);var n=r(71),l=r(6048),o=r.n(l),a=r(184);t.Z=function(e){for(var t=e.countPage,r=e.totalDatas,l=e.setCurrentPage,i=e.currentPage,s=[],d=1;d<=Math.ceil(r/t);d++)s.push(d);return(0,a.jsx)("nav",{className:"float-right",children:(0,a.jsx)(o(),{previousLabel:(0,a.jsx)(n.dUf,{width:"7px",height:"12px"}),forcePage:i,nextLabel:(0,a.jsx)(n.mzm,{width:"7px",height:"12px"}),breakLabel:"...",pageCount:s.length,marginPagesDisplayed:1,pageRangeDisplayed:3,onPageChange:function(e){l(e.selected)},containerClassName:"flex justify-between items-center",pageClassName:"mr-[15px] text-primary-800",pageLinkClassName:"w-[35px] h-[35px] border border-black rounded-lg text-sm flex justify-center items-center hover:bg-primary-700 hover:border-primary-700 hover:text-white-900 transition ease-in-out duration-100",previousClassName:"mr-[15px]",previousLinkClassName:"w-[35px] h-[35px] border border-black rounded-lg text-sm text-primary-800 flex justify-center items-center hover:bg-primary-700 hover:border-primary-700 hover:text-white-900 transition ease-in-out duration-100",nextClassName:"mr-[15px]",nextLinkClassName:"w-[35px] h-[35px] border border-black rounded-lg text-sm text-primary-800 flex justify-center items-center hover:bg-primary-700 hover:border-primary-700 hover:text-white-900 transition ease-in-out duration-100",breakClassName:"mr-[15px]",breakLinkClassName:"w-[35px] h-[35px] border border-black rounded-lg text-sm text-primary-800 flex justify-center items-center hover:bg-primary-700 hover:border-primary-700 hover:text-white-900 transition ease-in-out duration-100",activeClassName:"mr-[15px]",activeLinkClassName:"border border-black bg-primary-800 text-white-900",disabledLinkClassName:"bg-transparent border-black-100 text-black-100 hover:bg-transparent hover:border-black-100 hover:text-black-100"})})}},4601:function(e,t,r){r.d(t,{Z:function(){return f}});r(2791);var n=r(184),l=function(e){e.user,e.createdAt,e.position;var t=e.organization,r=(e.logged,null===t||void 0===t?void 0:t.name);return(0,n.jsx)("div",{className:"border-t w-full px-3 py-1 font-semibold text-[#01c2cc] mt-2",children:(0,n.jsx)("div",{className:"flex justify-end w-full text-[10px] md:text-[14px]",children:(0,n.jsx)("h3",{className:"font-amazonbold",children:r})})})},o=r(2111),a=r.n(o),i=(r(4397),function(e){var t=e.name,r=e.minPrice,l=e.maxPrice,o=e.currency,i=(e.region,r?r.toLocaleString("ru-RU"):0),s=l?l.toLocaleString("ru-RU"):0;return(0,n.jsxs)("div",{className:"px-3 py-2 rounded-b-xl",children:[(0,n.jsx)("div",{className:"",children:(0,n.jsx)("div",{className:"font-amazonbold text-[12px] md:text-base font-bold",children:(0,n.jsx)(a(),{line:2,element:"h3",truncateText:"\u2026",text:t})})}),(0,n.jsx)("div",{className:"",children:(0,n.jsx)("h3",{className:"font-amazonbold text-base text-amber-500 flex justify-between",children:(0,n.jsxs)("span",{className:"text-[12px] md:text-[16px] text-[#11ed1c] font-bold",children:[s&&"".concat(i," - ").concat(s)||""," ",o]})})})]})}),s=(r(763),r(71)),d=r(9126),c=function(e){var t=e.editHandler,r=e.productId,l=e.deleteHandler;return(0,n.jsxs)("div",{className:"w-full border-t product-t flex m-0",children:[(0,n.jsx)("button",{onClick:function(){return t(r)},className:"w-full flex justify-center items-center rounded-bl-xl border-r product-r py-1 bg-orange-500",children:(0,n.jsx)(d.HlX,{size:18,className:"text-white"})}),(0,n.jsx)("button",{className:" w-full flex justify-center items-center py-1 rounded-br-xl bg-[#ff0000]",onClick:function(){return l(r)},children:(0,n.jsx)(s.BFV,{size:22,className:"text-white"})})]})},u=r(9434),x=r(5520),m=r(7689),p=r(1087),f=function(e){var t,r,o=e.product,a=e.editHandler,d=e.deleteHandler,f=e.logged,b=(0,u.v9)((function(e){return e.login})).userData,h=(0,m.TH)(),g=o._id,v=(o.tradetypes,o.region),j=(o.district,o.categories,o.subcategories,o.name),w=o.description,y=(o.status,o.currency),N=o.minPrice,k=o.maxPrice,C=o.images,P=o.position,Z=o.user,z=o.createdAt,H=o.organization,L=(null===b||void 0===b||null===(t=b.user)||void 0===t||t._id,null===Z||void 0===Z||Z._id,null===H||void 0===H||H.phone,!(null===b||void 0===b||null===(r=b.organization)||void 0===r||!r._id)),F="/profile/products"===h.pathname;return L&&f&&F?(0,n.jsx)("div",{className:"w-full shadow-2xl mt-5 rounded-xl bg-white-900 bg-white border-[1px] border-[#01c2cc]",children:(0,n.jsxs)("div",{className:"text-sm w-full h-full flex flex-col justify-between rounded-xl",children:[(0,n.jsxs)(p.rU,{to:"/products/".concat(g),className:"text-sm w-full h-full flex flex-col justify-between rounded-xl",children:[(0,n.jsxs)("p",{className:"pl-2 border-b my-1 flex items-center text-neutral-500 text-sm",children:[(0,n.jsx)(s.kXE,{className:""}),(0,n.jsx)("span",{className:"text-[10px] md:text-[14px] ml-2",children:v?null===v||void 0===v?void 0:v.name:"Respublika bo'ylab"})]}),(0,n.jsx)("div",{className:"flex overflow-hidden items-center justify-center bg-white rounded-t-xl",children:(0,n.jsx)("img",{src:C[0]?C[0]:x.Z,className:"rounded object-contain h-[150px] md:h-[200px]",alt:"Product"})}),(0,n.jsx)(l,{logged:f,user:Z,position:P,createdAt:z,organization:H}),(0,n.jsx)(i,{region:v,name:j,maxPrice:k,minPrice:N,description:w,currency:y})]}),(0,n.jsx)(c,{editHandler:a,productId:g,deleteHandler:d,position:P})]})}):(0,n.jsx)(p.rU,{to:"/products/".concat(g),className:"w-full shadow-2xl rounded-xl block h-full bg-white border-[1px] border-[#01c2cc]",children:(0,n.jsxs)("div",{className:"text-sm w-full h-full flex flex-col justify-between rounded-xl",children:[(0,n.jsxs)("p",{className:"pl-2 border-b my-1 flex items-center text-neutral-500 text-sm",children:[(0,n.jsx)(s.kXE,{className:""}),(0,n.jsx)("span",{className:"text-[10px] md:text-[14px] ml-2",children:v?null===v||void 0===v?void 0:v.name:"Respublika bo'ylab"})]}),(0,n.jsx)("div",{className:"flex h-[200px] items-center justify-center bg-white rounded-t-xl",children:(0,n.jsx)("img",{src:C[0]?C[0]:x.Z,className:"rounded object-contain h-[150px] md:h-[200px]",alt:"Product"})}),(0,n.jsx)(l,{logged:f,user:Z,position:P,createdAt:z,organization:H}),(0,n.jsx)(i,{region:v,name:j,maxPrice:k,minPrice:N,description:w,currency:y})]})})}},4848:function(e,t,r){r.r(t),r.d(t,{default:function(){return j}});var n=r(3433),l=r(9439),o=r(2791),a=r(1399),i=r(5077),s=r(184),d=r(9434),c=r(3356),u=r(4373),x=r(8285),m=r(4855),p=r(763),f=r(4601),b=r(9169),h=r(3168),g=r(5393),v=r(7689),j=function(){var e=(0,h.$)(["common"]).t,t=((0,b.F)(e),(0,d.I0)()),r=(0,v.TH)(),j=(0,d.v9)((function(e){return e.login})),w=j.logged,y=j.userData,N=y.user,k=y.organization,C=(0,d.v9)((function(e){return e.products})).products,P=(0,d.v9)((function(e){return e.filter})),Z=P.product,z=P.categories,H=P.subcategories,L=P.tradetypes,F=P.regions,S=P.districts,D=P.name,T=(0,o.useState)(null),B=(0,l.Z)(T,2),I=B[0],R=B[1],U=(0,o.useState)(0),V=(0,l.Z)(U,2),_=V[0],A=V[1],E=(0,o.useState)(0),M=(0,l.Z)(E,2),X=M[0],O=M[1],q=(0,o.useState)(!1),Y=(0,l.Z)(q,2),J=Y[0],$=Y[1],G=(0,o.useState)(null),K=(0,l.Z)(G,2),Q=K[0],W=K[1],ee=(0,o.useState)(!1),te=(0,l.Z)(ee,2),re=te[0],ne=te[1],le=(0,o.useState)(null),oe=(0,l.Z)(le,2),ae=oe[0],ie=oe[1],se=function(e){R(e),W("approve"),$(!0)},de=function(e){R(e),W("createProduct"),$(!0)};return(0,o.useEffect)((function(){var e,l,o=null===r||void 0===r||null===(e=r.state)||void 0===e||null===(l=e.category)||void 0===l?void 0:l.value,a={page:X,count:10,product:Z,categories:z,subcategories:H,tradetypes:L,regions:F,districts:S,user:null===N||void 0===N?void 0:N._id,name:D};o&&(a.categories=[].concat((0,n.Z)(z),[o])),t((0,x.Xp)(a)),t((0,x.Y2)(a)).then((function(e){var t=e.payload.totalCount;e.error||A(t)}))}),[t,Z,X,10,z,H,L,F,S,N,D]),(0,o.useEffect)((function(){t((0,x.sR)())}),[t]),(0,s.jsxs)("div",{className:"w-full bg-white pb-[100px]",children:[(0,s.jsx)("div",{className:"md:container",children:(0,s.jsxs)("div",{className:"w-full block md:flex",children:[(0,s.jsx)(g.Z,{filterBody:ae,filterVisible:re,setFilterVisible:ne}),(0,s.jsxs)("div",{className:"w-full md:px-4 flex flex-col gap-[20px]",children:[(0,s.jsx)(a.Z,{isOrganization:!!k,totalDatas:_,countPage:10,currentPage:X,setCurrentPage:O,filter:c.h,count:_,onClick:function(){return W("createProduct"),$(!0),void R(null)},handleFilter:function(e){var r=e.target.value;t((0,u.BY)(r))},filterData:Z,setFilterBody:ie,setFilterVisible:ne,mainTitle:"\u0422\u043e\u0432\u0430\u0440\u044b",countTitle:"Jami:"}),(0,s.jsx)("div",{className:"grid grid-cols-2 px-2 gap-2 md:grid-cols-3 md:gap-3",children:(0,p.map)(C,(function(e){return(0,s.jsx)(f.Z,{logged:w,product:e,editHandler:de,deleteHandler:se},(0,p.uniqueId)())}))}),_>0&&(0,s.jsx)("div",{className:"flex justify-center py-2",children:(0,s.jsx)(i.Z,{totalDatas:_,countPage:10,setCurrentPage:O,currentPage:X})})]})]})}),(0,s.jsx)(m.Z,{isOpen:J,body:Q,closeModal:function(){$(!1)},toggleModal:function(){$(!J)},productId:I,modalBody:Q,headerText:"Mahsulotni o'chirish",title:"Siz rostdan ham mahsulotni o'chirmoqchimisiz?",approveFunction:function(){I&&t((0,x.Ir)({id:I})).then((function(e){e.error||($(!1),R(null))}))}})]})}}}]);
//# sourceMappingURL=848.89dcd3ff.chunk.js.map