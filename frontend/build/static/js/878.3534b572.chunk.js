"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[878],{5520:function(e,t,n){n(2791);t.Z=n.p+"static/media/no-image.5c7731b2eacc156460f251b9ebd63d5d.svg"},5077:function(e,t,n){n(2791);var r=n(71),o=n(6048),a=n.n(o),i=n(184);t.Z=function(e){for(var t=e.countPage,n=e.totalDatas,o=e.setCurrentPage,l=e.currentPage,s=[],d=1;d<=Math.ceil(n/t);d++)s.push(d);return(0,i.jsx)("nav",{className:"float-right",children:(0,i.jsx)(a(),{previousLabel:(0,i.jsx)(r.dUf,{width:"7px",height:"12px"}),forcePage:l,nextLabel:(0,i.jsx)(r.mzm,{width:"7px",height:"12px"}),breakLabel:"...",pageCount:s.length,marginPagesDisplayed:1,pageRangeDisplayed:3,onPageChange:function(e){o(e.selected)},containerClassName:"flex justify-between items-center",pageClassName:"mr-[15px] text-primary-800",pageLinkClassName:"w-[35px] h-[35px] border border-black rounded-lg text-sm flex justify-center items-center hover:bg-primary-700 hover:border-primary-700 hover:text-white-900 transition ease-in-out duration-100",previousClassName:"mr-[15px]",previousLinkClassName:"w-[35px] h-[35px] border border-black rounded-lg text-sm text-primary-800 flex justify-center items-center hover:bg-primary-700 hover:border-primary-700 hover:text-white-900 transition ease-in-out duration-100",nextClassName:"mr-[15px]",nextLinkClassName:"w-[35px] h-[35px] border border-black rounded-lg text-sm text-primary-800 flex justify-center items-center hover:bg-primary-700 hover:border-primary-700 hover:text-white-900 transition ease-in-out duration-100",breakClassName:"mr-[15px]",breakLinkClassName:"w-[35px] h-[35px] border border-black rounded-lg text-sm text-primary-800 flex justify-center items-center hover:bg-primary-700 hover:border-primary-700 hover:text-white-900 transition ease-in-out duration-100",activeClassName:"mr-[15px]",activeLinkClassName:"border border-black bg-primary-800 text-white-900",disabledLinkClassName:"bg-transparent border-black-100 text-black-100 hover:bg-transparent hover:border-black-100 hover:text-black-100"})})}},4601:function(e,t,n){n.d(t,{Z:function(){return h}});n(2791);var r=n(184),o=function(e){e.user,e.createdAt,e.position;var t=e.organization,n=(e.logged,null===t||void 0===t?void 0:t.name);return(0,r.jsx)("div",{className:"border-t w-full px-3 py-1 font-semibold text-[#01c2cc] mt-2",children:(0,r.jsxs)("div",{className:"flex justify-between w-full text-[10px] md:text-[14px]",children:[(0,r.jsx)("div",{className:"mr-3",children:"Tashkilot:"}),(0,r.jsx)("h3",{className:"font-amazonbold",children:n})]})})},a=n(2111),i=n.n(a),l=n(4397),s=function(e){var t=e.name,n=e.minPrice,o=e.maxPrice,a=e.currency,s=(e.region,(0,l.Z)().width),d=n?n.toLocaleString("ru-RU"):0,c=o?o.toLocaleString("ru-RU"):0;return(0,r.jsxs)("div",{className:"px-3 py-2 rounded-b-xl",children:[(0,r.jsx)("div",{className:"",children:(0,r.jsx)("div",{className:"font-amazonbold text-[12px] md:text-base font-bold",children:(0,r.jsx)(i(),{line:s<720?3:2,element:"h3",truncateText:"\u2026",text:t})})}),(0,r.jsx)("div",{className:"",children:(0,r.jsx)("h3",{className:"font-amazonbold text-base text-amber-500 flex justify-between",children:(0,r.jsxs)("span",{className:"text-[12px] md:text-[16px] text-[#11ed1c] font-bold",children:[c&&"".concat(d," - ").concat(c)||""," ",a]})})})]})},d=(n(763),n(71)),c=n(9126),u=function(e){var t=e.editHandler,n=e.productId,o=e.deleteHandler;return(0,r.jsxs)("div",{className:"w-full border-t product-t flex m-0",children:[(0,r.jsx)("button",{onClick:function(){return t(n)},className:"w-full flex justify-center items-center rounded-bl-xl border-r product-r py-1 bg-orange-500",children:(0,r.jsx)(c.HlX,{size:18,className:"text-white"})}),(0,r.jsx)("button",{className:" w-full flex justify-center items-center py-1 rounded-br-xl bg-[#ff0000]",onClick:function(){return o(n)},children:(0,r.jsx)(d.BFV,{size:22,className:"text-white"})})]})},f=n(9434),m=n(5520),x=n(7689),p=n(1087),h=function(e){var t,n,a=e.product,i=e.editHandler,l=e.deleteHandler,c=e.logged,h=(0,f.v9)((function(e){return e.login})).userData,b=(0,x.TH)(),g=a._id,v=(a.tradetypes,a.region),y=(a.district,a.categories,a.subcategories,a.name),j=a.description,w=(a.status,a.currency),N=a.minPrice,C=a.maxPrice,T=a.images,k=a.position,z=a.user,P=a.createdAt,O=a.organization,S=(null===h||void 0===h||null===(t=h.user)||void 0===t||t._id,null===z||void 0===z||z._id,null===O||void 0===O||O.phone,!(null===h||void 0===h||null===(n=h.organization)||void 0===n||!n._id)),E="/profile/products"===b.pathname;return S&&c&&E?(0,r.jsx)("div",{className:"w-full shadow-2xl mt-5 rounded-xl bg-white-900 bg-white border-[1px] border-[#01c2cc]",children:(0,r.jsxs)("div",{className:"text-sm w-full h-full flex flex-col justify-between rounded-xl",children:[(0,r.jsxs)(p.rU,{to:"/products/".concat(g),className:"text-sm w-full h-full flex flex-col justify-between rounded-xl",children:[(0,r.jsxs)("p",{className:"pl-2 border-b my-1 flex items-center text-neutral-500 text-sm",children:[(0,r.jsx)(d.kXE,{className:""}),(0,r.jsx)("span",{className:"text-[10px] md:text-[14px] ml-2",children:v?null===v||void 0===v?void 0:v.name:"Respublika bo'ylab"})]}),(0,r.jsx)("div",{className:"flex overflow-hidden items-center justify-center bg-white rounded-t-xl",children:(0,r.jsx)("img",{src:T[0]?T[0]:m.Z,className:"rounded object-contain h-[150px] md:h-[200px]",alt:"Product"})}),(0,r.jsx)(o,{logged:c,user:z,position:k,createdAt:P,organization:O}),(0,r.jsx)(s,{region:v,name:y,maxPrice:C,minPrice:N,description:j,currency:w})]}),(0,r.jsx)(u,{editHandler:i,productId:g,deleteHandler:l,position:k})]})}):(0,r.jsx)(p.rU,{to:"/products/".concat(g),className:"w-full shadow-2xl mt-5 rounded-xl bg-white-900 bg-white border-[1px] border-[#01c2cc]",children:(0,r.jsxs)("div",{className:"text-sm w-full h-full flex flex-col justify-between rounded-xl",children:[(0,r.jsxs)("p",{className:"pl-2 border-b my-1 flex items-center text-neutral-500 text-sm",children:[(0,r.jsx)(d.kXE,{className:""}),(0,r.jsx)("span",{className:"text-[10px] md:text-[14px] ml-2",children:v?null===v||void 0===v?void 0:v.name:"Respublika bo'ylab"})]}),(0,r.jsx)("div",{className:"flex overflow-hidden items-center justify-center bg-white rounded-t-xl",children:(0,r.jsx)("img",{src:T[0]?T[0]:m.Z,className:"rounded object-contain h-[150px] md:h-[200px]",alt:"Product"})}),(0,r.jsx)(o,{logged:c,user:z,position:k,createdAt:P,organization:O}),(0,r.jsx)(s,{region:v,name:y,maxPrice:C,minPrice:N,description:j,currency:w})]})})}},2525:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(9439),o=n(2791),a=n(7689),i=n(9434),l=n(3259),s=n(5520),d=n(71),c=n(6856),u=n(763),f=n(3168),m=n(9169),x=(n(6442),n(3771),n(4017),n.p,n(9465)),p=n(5077),h=n(4601),b=n(8285),g=n(184),v=function(){var e,t,n=(0,i.I0)(),v=(0,f.$)(["common"]).t,y=(0,m.F)(v).savdo_turi,j=(0,i.v9)((function(e){return e.login})),w=j.logged,N=j.userData.user,C=(0,i.v9)((function(e){return e.products})).products,T=(0,i.v9)((function(e){return e.filter})),k=T.product,z=T.categories,P=T.subcategories,O=T.tradetypes,S=T.regions,E=T.districts,Z=T.name,_=(0,o.useState)(null),I=(0,r.Z)(_,2),L=I[0],R=(I[1],(0,o.useState)(0)),M=(0,r.Z)(R,2),H=M[0],A=M[1],D=(0,o.useState)(0),F=(0,r.Z)(D,2),U=F[0],W=F[1],X=(0,o.useState)(!1),q=(0,r.Z)(X,2),B=q[0],Y=q[1],$=(0,o.useState)(null),V=(0,r.Z)($,2),G=V[0],J=(V[1],(0,o.useState)(!1)),K=(0,r.Z)(J,2),Q=(K[0],K[1],(0,o.useState)(null)),ee=(0,r.Z)(Q,2),te=(ee[0],ee[1],(0,o.useState)(null)),ne=(0,r.Z)(te,2),re=ne[0],oe=ne[1],ae=(0,o.useState)("descr"),ie=(0,r.Z)(ae,2),le=ie[0],se=ie[1],de=(Math.floor(4*Math.random()),(0,a.TH)().state._id);return(0,o.useEffect)((function(){n((0,l.$9)({id:de})).then((function(e){var t=e.error,n=e.payload.organization;t||oe(n)}))}),[de,n]),(0,o.useEffect)((function(){var e={page:U,count:10,product:k,categories:z,subcategories:P,tradetypes:O,regions:S,districts:E,user:null===N||void 0===N?void 0:N._id,name:Z,organization:de};n((0,b.Xp)(e)),n((0,b.Y2)(e)).then((function(e){var t=e.payload.totalCount;e.error||A(t)}))}),[n,k,U,10]),(0,g.jsxs)("div",{className:"bg-white w-full h-full",children:[(0,g.jsx)("div",{className:"bg-alotrade",children:(0,g.jsx)("div",{className:"container",children:(0,g.jsxs)("div",{className:"w-full flex items-center gap-4 md:gap-6 flex-col md:flex-row py-6",children:[(0,g.jsx)("div",{className:"rounded-full bg-white-900 p-1",children:(0,g.jsx)("img",{className:"w-[200px] h-[200px] rounded-full",src:(null===re||void 0===re?void 0:re.image)||s.Z,alt:""})}),(0,g.jsx)("div",{className:"flex flex-col text-white font-bold",children:(0,g.jsxs)("div",{children:[(0,g.jsx)("h3",{className:"font-amazonbold text-[2rem]",children:null===re||void 0===re?void 0:re.name}),(0,g.jsxs)("p",{className:"flex items-center",children:[(0,g.jsx)(d.kXE,{})," ",(0,g.jsxs)("span",{className:"ml-2",children:[null===re||void 0===re||null===(e=re.region)||void 0===e?void 0:e.label,","," ",null===re||void 0===re||null===(t=re.district)||void 0===t?void 0:t.label]})]}),(0,g.jsxs)("h3",{className:"flex",children:[y,":",(0,g.jsx)("p",{className:"pl-2",children:(0,u.map)(null===re||void 0===re?void 0:re.tradetypes,(function(e){return(0,g.jsxs)("span",{className:"font-amazonbold",children:[null===e||void 0===e?void 0:e.name,","]},(0,u.uniqueId)())}))})]}),(0,g.jsxs)("h4",{className:"flex items-center my-2",children:[(0,g.jsx)(d.uYX,{size:19}),(0,g.jsxs)("a",{href:"tel:".concat(null===re||void 0===re?void 0:re.phone),className:"ml-2",children:["+",null===re||void 0===re?void 0:re.phone]})]}),(null===re||void 0===re?void 0:re.email)&&(0,g.jsxs)("h4",{className:"flex items-center my-2",children:[(0,g.jsx)(c.yr3,{size:19}),(0,g.jsx)("a",{href:"mailto:".concat(null===re||void 0===re?void 0:re.email),className:"text-black font-amazonbold ml-2",children:null===re||void 0===re?void 0:re.email})]})]})})]})})}),(0,g.jsxs)("div",{className:"container pt-4",children:[(0,g.jsxs)("div",{class:"flex justify-between  md:justify-center mb-[20px]",children:[(0,g.jsx)("button",{className:"block w-full md:w-[200px] uppercase shadow-xl border-2 border-alotrade md:ml-0 rounded-tr-none rounded-br-none rounded-l-xl border-r-0  ".concat("descr"===le?"bg-alotrade text-white":" bg-white text-[#00c2cb]"," font-bold focus:shadow-outline focus:outline-none text-white md:text-xs text-[10px] py-3 md:px-10 px-2 rounded"),onClick:function(){return se("descr")},children:"\u041e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"}),(0,g.jsx)("button",{className:"block w-full md:w-[200px] uppercase shadow-xl border-2 border-alotrade md:ml-0 rounded-tl-none rounded-bl-none rounded-r-xl border-l-0  ".concat("products"===le?"bg-alotrade text-white":" bg-white text-alotrade"," font-bold focus:shadow-outline focus:outline-none text-white md:text-xs text-[10px] py-3 md:px-10 px-2 rounded"),onClick:function(){return se("products")},children:"\u0422\u043e\u0432\u0430\u0440\u044b"})]}),"descr"===le?(0,g.jsxs)("div",{children:[(0,g.jsx)("h2",{className:"font-bold text-[32px]",children:"\u041e \u043a\u043e\u043c\u0430\u043d\u0438\u0438"}),(0,g.jsx)("p",{className:"text-[16px]",children:null===re||void 0===re?void 0:re.description})]}):(0,g.jsxs)("div",{className:"w-full bg-white",children:[(0,g.jsx)("div",{className:"md:container",children:(0,g.jsx)("div",{className:"w-full block md:flex",children:(0,g.jsxs)("div",{className:"w-full md:px-4 flex flex-col gap-[20px]",children:[(0,g.jsx)("div",{className:"grid grid-cols-2 px-2 gap-2 md:grid-cols-3 md:gap-3",children:(0,u.map)(C,(function(e){return(0,g.jsx)(h.Z,{logged:w,product:e},(0,u.uniqueId)())}))}),H>0&&(0,g.jsx)("div",{className:"flex justify-center py-2",children:(0,g.jsx)(p.Z,{totalDatas:H,countPage:10,setCurrentPage:W,currentPage:U})})]})})}),(0,g.jsx)(x.Z,{isOpen:B,body:G,closeModal:function(){Y(!1)},toggleModal:function(){Y(!B)},productId:L,modalBody:G,headerText:"Mahsulotni o'chirish",title:"Siz rostdan ham mahsulotni o'chirmoqchimisiz?"})]})]})]})}},2111:function(e,t,n){var r,o,a;o=[t,n(2791),n(2007)],r=function(t,n,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n),a=i(r);function i(e){return e&&e.__esModule?e:{default:e}}function l(e){return l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){if(null==e)return{};var n,r,o=d(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function m(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?p(e):t}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=1e-4,y=function(e,t){return Math.abs(e-t)<v},j=function(e){function t(){var e,n;c(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return g(p(n=m(this,(e=x(t)).call.apply(e,[this].concat(o)))),"onResize",(function(){n.rafId&&window.cancelAnimationFrame(n.rafId),n.rafId=window.requestAnimationFrame(n.update.bind(p(n)))})),g(p(n),"onToggled",(function(e){"function"===typeof n.props.onToggled&&setTimeout((function(){return n.props.onToggled(e)}),0)})),g(p(n),"onTruncated",(function(){"function"===typeof n.props.onTruncated&&setTimeout((function(){return n.props.onTruncated()}),0)})),g(p(n),"onCalculated",(function(){"function"===typeof n.props.onCalculated&&setTimeout((function(){return n.props.onCalculated()}),0)})),g(p(n),"update",(function(){var e=window.getComputedStyle(n.scope),t=[e["font-weight"],e["font-style"],e["font-size"],e["font-family"],e["letter-spacing"]].join(" ");n.canvas.font=t,n.forceUpdate()})),n}return h(t,e),f(t,[{key:"componentDidMount",value:function(){var e=document.createElement("canvas"),t=document.createDocumentFragment(),n=window.getComputedStyle(this.scope),r=[n["font-weight"],n["font-style"],n["font-size"],n["font-family"]].join(" ");t.appendChild(e),this.canvas=e.getContext("2d"),this.canvas.font=r,this.forceUpdate(),window.addEventListener("resize",this.onResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize),this.rafId&&window.cancelAnimationFrame(this.rafId)}},{key:"measureWidth",value:function(e){return this.canvas.measureText(e).width}},{key:"getRenderText",value:function(){var e=this.props,t=(e.containerClassName,e.element,e.line),r=(e.onCalculated,e.onTruncated,e.onToggled,e.text),a=e.textElement,i=e.textTruncateChild,l=e.truncateText,d=e.maxCalculateTimes,c=s(e,["containerClassName","element","line","onCalculated","onTruncated","onToggled","text","textElement","textTruncateChild","truncateText","maxCalculateTimes"]),u=this.scope.getBoundingClientRect().width;if(0===u)return null;var f=this.measureWidth(r);if(u>f||y(u,f))return this.onToggled(!1),(0,n.createElement)(a,c,r);var m="";if(i&&"string"===typeof i.type){var x=i.type;(x.indexOf("span")>=0||x.indexOf("a")>=0)&&(m=i.props.children)}for(var p=1,h=r.length,b="",g=0,v=0,j=t,w=0,N=!1,C=!1,T=0,k=-1,z="",P=0;j-- >0;){for(z=j?"":l+(m?" "+m:"");p<=h;){if(b=r.substr(v,p),!((w=this.measureWidth(b+z))<u)){do{if(P++>=d)break;b=r.substr(v,p),j||p--," "===b[b.length-1]&&(b=r.substr(v,p-1)),N&&(k=b.lastIndexOf(" "))>-1?(p=k,j&&p++,b=r.substr(v,p)):(p--,b=r.substr(v,p)),w=this.measureWidth(b+z)}while((w>u||y(w,u))&&b.length>0);v+=p;break}-1===(g=r.indexOf(" ",p+1))?(p+=1,N=!1):(N=!0,p=g)}if(p>=h){v=h;break}N&&!C&&-1===r.substr(T,p).indexOf(" ")&&(C=-1===r.substr(T,p).indexOf(" "),j--),T=p+1}return v===h?(this.onToggled(!1),(0,n.createElement)(a,c,r)):(this.onTruncated(),this.onToggled(!0),o.default.createElement("span",c,(0,n.createElement)(a,c,r.substr(0,v)+l+" "),i))}},{key:"render",value:function(){var e=this,t=this.props,r=t.element,o=t.text,a=t.style,i=void 0===a?{}:a,l=t.containerClassName,d=t.line,c=(t.onCalculated,t.onTruncated,t.onToggled,t.textElement),u=(t.textTruncateChild,t.truncateText,t.maxCalculateTimes,s(t,["element","text","style","containerClassName","line","onCalculated","onTruncated","onToggled","textElement","textTruncateChild","truncateText","maxCalculateTimes"])),f=i.fontWeight,m=i.fontStyle,x=i.fontSize,p=i.fontFamily,h=this.scope&&d?this.getRenderText():(0,n.createElement)(c,u,o),b={ref:function(t){e.scope=t},className:l,style:{overflow:"hidden",fontWeight:f,fontStyle:m,fontSize:x,fontFamily:p}};return this.scope&&this.onCalculated(),(0,n.createElement)(r,b,h)}}]),t}(n.Component);g(j,"propTypes",{containerClassName:a.default.string,element:a.default.string,line:a.default.oneOfType([a.default.number,a.default.bool]),onCalculated:a.default.func,onTruncated:a.default.func,onToggled:a.default.func,text:a.default.string,textElement:a.default.elementType,textTruncateChild:a.default.node,truncateText:a.default.string,maxCalculateTimes:a.default.number}),g(j,"defaultProps",{element:"div",line:1,text:"",textElement:"span",truncateText:"\u2026",maxCalculateTimes:10}),t.default=j,e.exports=t.default},void 0===(a="function"===typeof r?r.apply(t,o):r)||(e.exports=a)},6442:function(e,t,n){e.exports=n.p+"static/media/1.481166cefbecd0f6f619.png"},3771:function(e,t,n){e.exports=n.p+"static/media/2.c3a1dde29d8af31be096.png"},4017:function(e,t,n){e.exports=n.p+"static/media/3.5fb1b91fb1538413da2c.png"}}]);
//# sourceMappingURL=878.3534b572.chunk.js.map