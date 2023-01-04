"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[877],{4649:function(e,a,t){t(2791);var n=t(763),i=t(3168),r=t(184);a.Z=function(e){var a=e.data,t=e.onChange,l=e.checked,s=e.className,o=(0,i.$)(["common"]).t,c=(0,n.uniqueId)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("label",{htmlFor:c,className:"".concat(s," flex items-center text-neutral-600 text-sm cursor-pointer ml-2 w-full "),children:[(0,r.jsx)("input",{checked:l,onChange:t,value:a.value,id:c,type:"checkbox",className:"w-[1rem] h-[1rem] mr-2"}),(0,r.jsx)("span",{className:"w-full",children:o(a.label)})]})})}},5059:function(e,a,t){t(2791);var n=t(763),i=t(4649),r=t(8128),l=t(184);a.Z=function(e){var a=e.list,t=e.headerText,s=e.cols,o=void 0===s?1:s,c=e.onChange,u=e.checkedList,d=e.headerStyle,h=e.listStyle;return(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)(r.Z,{label:t,className:d}),(0,l.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-".concat(o," ").concat(h),children:(0,n.map)(a,(function(e){return(0,l.jsx)(i.Z,{onChange:c,data:e,checked:null===u||void 0===u?void 0:u.some((function(a){return a===e.value}))},(0,n.uniqueId)("checkbox"))}))})]})}},8128:function(e,a,t){t(2791);var n=t(184);a.Z=function(e){var a=e.label,t=e.className;return(0,n.jsx)("h3",{className:"tracking-normal text-neutral-700 ".concat(t),children:a})}},5474:function(e,a,t){var n=t(9439),i=t(2791),r=t(71),l=t(184);a.Z=function(e){var a=e.placeholder,t=e.type,s=void 0===t?"text":t,o=e.label,c=e.value,u=e.margin,d=e.onChange,h=e.onKeyUp,m=e.name,x=e.required,g=void 0!==x&&x,f=e.isDisabled,p=e.labelStyle,v=(0,i.useState)("password"===s),y=(0,n.Z)(v,2),b=y[0],j=y[1],w=(0,i.useState)(s),k=(0,n.Z)(w,2),Z=k[0],_=k[1];return(0,l.jsxs)("div",{className:"py-2 w-full flex flex-col text-neutral-700 ".concat(u),children:[o&&(0,l.jsx)("label",{className:"text-neutral-500 font-semibold text-sm ".concat(p),children:o}),(0,l.jsxs)("div",{className:"w-full relative text-neutral-700",children:[(0,l.jsx)("input",{disabled:f,required:g,name:m,onKeyUp:h,onChange:d,value:c,type:Z,placeholder:a,className:"w-full text-neutral-600 text-sm  bg-white-900 outline-0 py-[.425rem] px-3 rounded border my-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"}),"password"===s&&(0,l.jsx)("span",{onClick:function(e){e.preventDefault(),_(b?"text":"password"),j(!b)},className:"absolute right-3 top-2",children:b?(0,l.jsx)(r.ilU,{}):(0,l.jsx)(r.gxi,{})})]})]})}},7837:function(e,a,t){t.d(a,{Z:function(){return u}});t(2791);var n=t(9529),i=t(1413),r=t(9877),l=t(71),s=t(184),o=function(e){return(0,s.jsx)(r.c.DropdownIndicator,(0,i.Z)((0,i.Z)({},e),{},{children:(0,s.jsx)(l.lmx,{size:"0.625rem",color:"#aaa"})}))},c={container:function(e){return(0,i.Z)((0,i.Z)({},e),{},{height:"100%"})},control:function(e,a){var t=a.isDisabled;return(0,i.Z)((0,i.Z)({},e),{},{width:"100%",height:"100%",padding:".0rem .58rem",borderRadius:".25rem",fontSize:".875rem",fontWeight:"400",color:"#86A7E9",outline:"none",boxShadow:"0px 10px 10px rgba(0, 0, 0, 0.05)",cursor:"pointer","&:hover":{backgroundColor:"#EAEAEA"},"&:focus-within":{outline:"4px solid #A9C0EF",backgroundColor:"#ffffff"},backgroundColor:t?"rgba(28, 28, 28, 0.2)":"#fff",border:t?"none":"1px solid #dedede"})},option:function(e,a){a.isFocused,a.isSelected;return(0,i.Z)((0,i.Z)({},e),{},{fontSize:".875rem",fontWeight:"400",transition:"all 0.2s ease",overflow:"hidden",cursor:"pointer"})},menu:function(e){return(0,i.Z)((0,i.Z)({},e),{},{zIndex:30})},singleValue:function(e){return(0,i.Z)((0,i.Z)({},e),{},{color:"#1c1c1c",fontSize:".875rem",lineHeight:"1.25rem",fontWeight:"400",margin:0})},valueContainer:function(e){return(0,i.Z)((0,i.Z)({},e),{},{padding:0})},dropdownIndicator:function(e,a){var t=a.isFocused;return(0,i.Z)((0,i.Z)({},e),{},{padding:0,paddingRight:".625rem",color:t?"#193F8A":"#071F45"})},placeholder:function(e,a){a.isDisabled;return(0,i.Z)((0,i.Z)({},e),{},{margin:0,color:"#aaa"})},input:function(e){return(0,i.Z)((0,i.Z)({},e),{},{padding:0,display:"flex",lineHeight:"1.25rem",margin:0})}},u=function(e){var a=e.onSelect,t=e.options,i=e.isDisabled,r=e.label,l=e.placeholder,u=e.value,d=e.name,h=e.isMulti,m=void 0!==h&&h,x=e.closeMenuOnSelect,g=void 0===x||x;return(0,s.jsxs)("div",{className:"grow",children:[r&&(0,s.jsx)("label",{className:"text-blue-700 block leading-[1.125rem] mb-[.625rem]",children:r}),(0,s.jsx)(n.ZP,{name:d,onChange:a,styles:c,value:u,options:t,isDisabled:i,placeholder:l,components:{IndicatorSeparator:function(){return null},DropdownIndicator:o},isMulti:m,closeMenuOnSelect:g})]})}},5393:function(e,a,t){t.d(a,{Z:function(){return Z}});var n=t(3433),i=t(2791),r=(t(5059),t(9439)),l=t(8128),s=t(763),o=t(4649),c=t(71),u=t(184),d=function(e){var a=e.data,t=e.onClick,n=e.currentId,i=e.changeHeader,r=e.headerCheckeds,l=e.checkBoxClass,s=null===r||void 0===r?void 0:r.some((function(e){return e===a.value}));return(0,u.jsxs)("div",{className:"flex justify-between w-full hover:bg-gray-200 ",children:[(0,u.jsx)(o.Z,{data:a,onChange:i,checked:s,className:l}),(0,u.jsx)("button",{className:" flex pl-2 items-center text-neutral-600 justify-between text-end ",onClick:t,name:a.value,children:(0,u.jsx)("span",{className:"mt-1 px-5 pointer-events-none w-full text-end  ",children:n===a.value?(0,u.jsx)(c.pzk,{}):(0,u.jsx)(c._i7,{})})})]})},h=t(7837),m=t(7689),x=function(e){var a=e.datas,t=e.property,n=e.headerText,c=e.changeHeader,x=e.headerCheckeds,g=e.changeBody,f=e.bodyCheckeds,p=e.isCategory,v=e.categories,y=e.changeCategory,b=(0,m.TH)(),j=(0,i.useState)(null),w=(0,r.Z)(j,2),k=w[0],Z=w[1],_=function(e){var a=e.target.name;Z(a===k?null:a)},N=!b.pathname.includes("/create_product")&&!b.pathname.includes("/create_order")&&!b.pathname.includes("/sign-up/business");b.pathname.includes("/create_product")||b.pathname.includes("/create_order");return(0,u.jsxs)("div",{className:"mt-3",children:[(0,u.jsxs)("div",{className:"pb-4 px-4",children:[!p&&(0,u.jsx)(l.Z,{className:"mb-4",label:n}),p&&N&&(0,u.jsx)(h.Z,{options:v,placeholder:"Kategoriya tanlang...",onSelect:y})]}),(0,u.jsx)("div",{className:"h-full w-full md:max-h-[500px]",children:(0,s.map)(a,(function(e,a){return(0,u.jsxs)("div",{children:[(0,u.jsx)(d,{headerCheckeds:x,data:e,onClick:_,currentId:k,changeHeader:c,checkBoxClass:"font-bold"}),(0,u.jsx)("div",{className:"pl-3 transition-all ease-in-out duration-300 ".concat(e.value!==k&&"hidden"),children:(0,s.map)(e[t],(function(e){return(0,u.jsx)(o.Z,{onChange:g,checked:null===f||void 0===f?void 0:f.some((function(a){return a===e.value})),data:e},(0,s.uniqueId)("selectCheckbox"))}))})]},(0,s.uniqueId)("selectButton"))}))})]})},g=t(9434),f=t(4373),p=t(3168),v=t(9169),y=t(4397);var b=t.p+"static/media/close.745063d25d8995a5d5c582e48c97dc84.svg",j=t(5800),w=t(8862),k=t(8336),Z=function(e){var a=e.filterVisible,t=e.setFilterVisible,r=e.filterBody,l=e.onClick,o=(0,p.$)(["common"]).t,c=(0,v.F)(o),d=c.davlatlar,h=c.kategoriyalar,Z=(0,y.Z)().width,_=(0,g.I0)(),N=(0,m.TH)(),C=(0,g.v9)((function(e){return e.filter})),S=(C.tradetypes,C.categories),z=C.subcategories,q=C.subcategories2,T=C.districts,U=C.regions,D=(0,g.v9)((function(e){return e.categories})),F=D.categoriesWithSubcategories,K=D.subcategories,H=(0,g.v9)((function(e){return e.regions})).regions,P=function(e){var a=e.value;_((0,f.yw)([])),_((0,f.ad)([])),_((0,f.sS)([a])),_((0,w.KT)({category:a}))},B=function(e){var a=e.target.value,t=e.target.checked,i=(0,s.filter)(z,(function(e){return e!==a})),r=t?[].concat((0,n.Z)(i),[a]):(0,n.Z)(i);_((0,f.yw)(r))},I=function(e){var a=e.target.value,t=e.target.checked,i=(0,s.filter)(q,(function(e){return e!==a})),r=t?[].concat((0,n.Z)(i),[a]):(0,n.Z)(i);_((0,f.ad)(r))},E=function(e){var a=e.target.value,t=e.target.checked,i=(0,s.filter)(U,(function(e){return e!==a})),r=t?[].concat((0,n.Z)(i),[a]):(0,n.Z)(i);_((0,f.s0)(r))},A=function(e){var a=e.target.value,t=e.target.checked,i=(0,s.filter)(T,(function(e){return e!==a})),r=t?[].concat((0,n.Z)(i),[a]):(0,n.Z)(i);_((0,f.wO)(r))};(0,i.useEffect)((function(){var e,a;if(null!==N&&void 0!==N&&null!==(e=N.state)&&void 0!==e&&null!==(a=e.category)&&void 0!==a&&a.value){var t,i,r=null===N||void 0===N||null===(t=N.state)||void 0===t||null===(i=t.category)||void 0===i?void 0:i.value,l=(0,s.filter)(S,(function(e){return e!==r})),o=[].concat((0,n.Z)(l),[r]);_((0,f.sS)(o))}}),[_,N,S]),(0,i.useEffect)((function(){_((0,j.qT)()),_((0,w.tG)()),_((0,k.pq)())}),[_]);var M=!N.pathname.includes("/create_product")&&!N.pathname.includes("/create_order")&&!N.pathname.includes("/sign-up/business"),W=N.pathname.includes("/create_product")||N.pathname.includes("/create_order")||N.pathname.includes("/sign-up/business");return(0,u.jsx)("div",{onClick:function(e){return e.stopPropagation()},className:Z<720&&M?"w-full h-full ease-in-out duration-200 fixed overflow-y-scroll  top-0 ".concat(a?"left-0":"left-[-100%]"," z-50 bg-white"):"min-w-[300px] max-w-[400px] shadow bg-white h-full",children:(0,u.jsxs)("div",{className:"py-4",children:[(0,u.jsx)("div",{className:"flex justify-end items-center mb-4 pr-4",children:Z<720&&(0,u.jsx)("button",{onClick:function(){return t(!1)},children:(0,u.jsx)("img",{src:b,alt:"close",width:30})})}),Z<720?(0,u.jsx)(u.Fragment,{children:("category"===r||W)&&(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(x,{headerCheckeds:z,changeHeader:B,changeCategory:P,changeBody:I,bodyCheckeds:q,headerText:h,datas:K,categories:F,property:"subcategories",isCategory:!0})})}):(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(x,{headerCheckeds:z,changeHeader:B,changeCategory:P,changeBody:I,bodyCheckeds:q,headerText:h,datas:K,categories:F,property:"subcategories",isCategory:!0})}),Z<720?(0,u.jsx)(u.Fragment,{children:"country"===r&&(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(x,{headerCheckeds:U,bodyCheckeds:T,changeHeader:E,changeBody:A,headerText:d,datas:H,property:"districts"})})}):M&&(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(x,{headerCheckeds:U,bodyCheckeds:T,changeHeader:E,changeBody:A,headerText:d,datas:H,property:"districts"})}),Z<720&&M&&(0,u.jsx)("button",{onClick:function(){return t(!1)},className:"bg-alotrade py-2 px-4 block w-full mt-4 text-white rounded",children:"\u041f\u043e\u0438\u0441\u043a"}),W&&(0,u.jsx)("button",{onClick:l,className:"bg-alotrade py-2 px-4 block w-full mt-4 text-white rounded max-w-[250px] mx-auto",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})})}},7751:function(e,a,t){t.r(a),t.d(a,{default:function(){return de}});var n=t(9439),i=t(2791),r=t(9434),l=t(7689),s=t(763),o=t(1413),c=t(3433),u=t(1087),d=t(5474),h=t(184),m=function(e){var a=e.title,t=e.onClick,n=e.isDisabled;return(0,h.jsx)("div",{className:"w-full my-2",children:(0,h.jsx)("button",{disabled:n,onClick:t,className:"bg-alotrade block  w-full text-white py-1 font-semibold rounded",children:a})})},x=function(e){var a=e.link,t=e.title,n=e.label;return(0,h.jsxs)("div",{className:"w-full my-2 text-sm text-center text-neutral-500 lowercase",children:[n,(0,h.jsx)(u.rU,{to:a,className:"font-bold text-blue-500 underline",children:t})]})},g=t(7837),f=function(e){var a=e.firstname,t=e.lastname,n=e.password,i=e.phone,r=e.region,l=e.district,s=e.regions,o=e.districts,c=e.changeHandler,u=e.selectRegion,f=e.selectDistrict,p=e.enterHandler,v=e.submitHandler,y=e.loading,b=e.translations;return(0,h.jsx)("div",{className:"bg-white-900 rounded ",children:(0,h.jsxs)("div",{className:"md:px-16 md:py-5",children:[(0,h.jsx)("h1",{className:"font-bold text-center py-4 text-xl text-neutral-700",children:b.foydalanuvchi_sifatida_royxatdan_otish}),(0,h.jsxs)("div",{className:"flex flex-col md:flex-row",children:[(0,h.jsx)(d.Z,{isDisabled:y,placeholder:b.ism+"*",margin:"mr-3",value:a,onChange:c,name:"firstname",required:!0,onKeyUp:p}),(0,h.jsx)(d.Z,{isDisabled:y,placeholder:b.familiya+"*",value:t,onChange:c,name:"lastname",required:!0,onKeyUp:p})]}),(0,h.jsx)(d.Z,{isDisabled:y,placeholder:b.telefon_raqam+"*",type:"text",value:i,onChange:c,name:"phone",required:!0,onKeyUp:p}),(0,h.jsxs)("div",{className:"flex flex-col gap-4 md:gap-0 md:flex-row w-full",children:[(0,h.jsx)("div",{className:"w-full mr-3",children:(0,h.jsx)(g.Z,{placeholder:b.davlat+"*",options:s,onSelect:u,value:r,name:"region",isDisabled:y})}),(0,h.jsx)("div",{className:"w-full",children:(0,h.jsx)(g.Z,{placeholder:b.viloyat+"*",value:l,options:o,onSelect:f,name:"district",isDisabled:0===o.length||y})})]}),(0,h.jsx)(d.Z,{isDisabled:y,placeholder:b.parol+"*",type:"password",value:n,onChange:c,name:"password",required:!0,onKeyUp:p}),(0,h.jsx)(m,{title:b.royxatdan_otish,onClick:v,isDisabled:y}),(0,h.jsx)("br",{}),(0,h.jsx)(x,{link:"../sign-in",label:b.avval_royxatdan_otgan_bolsangiz+" ",title:b.kirish_qismiga_qayting})]})})},p=t(4649),v=t(5393),y=function(e){var a=e.categoriesWithSubcategories,t=e.firstname,r=e.lastname,l=e.password,o=e.phone,c=e.region,u=e.district,f=e.regions,y=e.districts,b=e.changeHandler,j=e.selectRegion,w=e.selectDistrict,k=e.enterHandler,Z=e.submitHandler,_=e.loading,N=e.categories,C=e.selectCategory,S=(e.subcategories,e.allSubcategories,e.selectSubcategory,e.name),z=e.tradetypes,q=e.changeTradeTypes,T=e.tradeTypes,U=e.translations,D=e.address,F=(0,i.useState)(!1),K=(0,n.Z)(F,2),H=K[0],P=K[1];return(0,h.jsxs)(h.Fragment,{children:[H&&(0,h.jsx)("div",{className:"fixed top-0 left-0 w-full h-full z-[100] bg-black bg-opacity-50 ",onClick:function(){return P(!1)},children:(0,h.jsx)(v.Z,{onClick:function(){return P(!1)},setFilterVisible:function(){return P(!1)}})}),(0,h.jsx)("div",{className:"bg-white rounded ",children:(0,h.jsxs)("div",{className:"md:px-16 md:py-5",children:[(0,h.jsx)("h1",{className:"font-bold text-center py-4 text-xl text-neutral-700",children:U.tashkilot_sifatida_royxatdan_otish}),(0,h.jsx)("p",{className:"text-neutral-500 text-sm",children:U.shaxsiy_malumotlaringiz}),(0,h.jsxs)("div",{className:"flex flex-col md:flex-row ",children:[(0,h.jsx)(d.Z,{isDisabled:_,placeholder:U.ism+"*",margin:"mr-3",value:t,onChange:b,name:"firstname",required:!0,onKeyUp:k}),(0,h.jsx)(d.Z,{isDisabled:_,placeholder:U.familiya+"*",value:r,onChange:b,name:"lastname",required:!0,onKeyUp:k})]}),(0,h.jsx)("div",{className:"flex flex-col md:flex-row",children:(0,h.jsx)(d.Z,{margin:"mr-3",isDisabled:_,placeholder:U.telefon_raqam+"*",type:"text",value:o,onChange:b,name:"phone",required:!0,onKeyUp:k})}),(0,h.jsx)("div",{className:"flex flex-grow",children:(0,h.jsx)(d.Z,{margin:"mr-3",isDisabled:_,placeholder:U.parol+"*",type:"password",value:l,onChange:b,name:"password",required:!0,onKeyUp:k})}),(0,h.jsx)("br",{}),(0,h.jsx)("p",{className:"text-neutral-500 text-sm",children:U.tashkilot_malumotlari}),(0,h.jsx)(d.Z,{placeholder:U.tashkilot_nomi+"*",isDisabled:_,value:S,onChange:b,name:"name",required:!0,onKeyUp:k}),(0,h.jsxs)("div",{className:"flex flex-col gap-4 md:gap-0 md:flex-row w-full mb-2",children:[(0,h.jsx)("div",{className:"w-full mr-3",children:(0,h.jsx)(g.Z,{placeholder:U.davlat+"*",options:f,onSelect:j,value:c,name:"region",isDisabled:_})}),(0,h.jsx)("div",{className:"w-full",children:(0,h.jsx)(g.Z,{placeholder:U.viloyat+"*",value:u,options:y,onSelect:w,name:"district",isDisabled:0===y.length||_})})]}),(0,h.jsx)(d.Z,{placeholder:"\u0410\u0434\u0440\u0435\u0441*",isDisabled:_,value:D,onChange:b,name:"address",required:!0,onKeyUp:k}),(0,h.jsxs)("div",{className:"mb-2",children:[(0,h.jsx)("h1",{className:"text-sm text-neutral-500 mt-4",children:U.savdo_turingizni_tanlang}),(0,h.jsx)("div",{className:"grid grid-cols-2",children:(0,s.map)(z,(function(e){return(0,h.jsx)(p.Z,{data:e,onChange:q,checked:T.some((function(a){return a===e.value}))},(0,s.uniqueId)("tradeType"))}))})]}),(0,h.jsxs)("div",{className:"flex flex-col gap-4 md:gap-0 md:flex-row w-full",children:[(0,h.jsx)("div",{className:"w-full mr-3",children:(0,h.jsx)(g.Z,{placeholder:U.kategoriya+"*",options:a,isMulti:!1,value:N,isDisabled:_,onSelect:C,closeMenuOnSelect:!1})}),(0,h.jsx)("div",{className:"w-full",children:(0,h.jsx)("button",{onClick:function(){return P(!0)},className:"block w-full py-2 px-4 text-white bg-alotrade rounded",children:"\u041f\u043e\u0434\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"})})]}),(0,h.jsx)(m,{title:U.royxatdan_otish,onClick:Z,isDisabled:_}),(0,h.jsx)("br",{}),(0,h.jsx)(x,{link:"../../sign-in",label:U.avval_royxatdan_otgan_bolsangiz+" ",title:U.kirish_qismiga_qayting})]})})]})},b=t(8336),j=t(5134),w=t(2106),k=t(8862),Z=t(5800),_=t(3168),N=t(9169),C=t(4373),S=function(){var e=(0,r.I0)(),a=(0,l.s0)(),t=(0,_.$)(["common"]).t,d=(0,N.F)(t),m=(0,r.v9)((function(e){return e.regions})),x=m.regions,g=m.error,p=(0,r.v9)((function(e){return e.categories})),v=p.categoriesWithSubcategories,S=p.error,z=(0,r.v9)((function(e){return e.filter})),q=z.subcategories,T=z.subcategories2,U=(0,r.v9)((function(e){return e.login})).loading,D=(0,r.v9)((function(e){return e.trade})).tradetypes,F=window.location.href.split("/"),K=(0,i.useState)(F[F.length-1]),H=(0,n.Z)(K,2),P=H[0],B=H[1],I=(0,i.useState)(""),E=(0,n.Z)(I,2),A=E[0],M=E[1],W=(0,i.useState)(""),R=(0,n.Z)(W,2),V=R[0],$=R[1],O=(0,i.useState)(""),X=(0,n.Z)(O,2),J=X[0],L=X[1],Y=(0,i.useState)(""),G=(0,n.Z)(Y,2),Q=G[0],ee=G[1],ae=(0,i.useState)(""),te=(0,n.Z)(ae,2),ne=te[0],ie=te[1],re=(0,i.useState)(""),le=(0,n.Z)(re,2),se=le[0],oe=le[1],ce=(0,i.useState)(""),ue=(0,n.Z)(ce,2),de=ue[0],he=ue[1],me=(0,i.useState)(""),xe=(0,n.Z)(me,2),ge=xe[0],fe=xe[1],pe=(0,i.useState)([]),ve=(0,n.Z)(pe,2),ye=ve[0],be=ve[1],je=(0,i.useState)([]),we=(0,n.Z)(je,2),ke=we[0],Ze=we[1],_e=(0,i.useState)([]),Ne=(0,n.Z)(_e,2),Ce=Ne[0],Se=Ne[1],ze=(0,i.useState)([]),qe=(0,n.Z)(ze,2),Te=qe[0],Ue=(qe[1],(0,i.useState)("")),De=(0,n.Z)(Ue,2),Fe=De[0],Ke=De[1],He=(0,i.useState)([]),Pe=(0,n.Z)(He,2),Be=Pe[0],Ie=Pe[1],Ee=(0,i.useState)(""),Ae=(0,n.Z)(Ee,2),Me=Ae[0],We=Ae[1],Re=function(e){var a=e.target.name,t=e.target.value;"firstname"===a&&M((0,s.capitalize)(t)),"lastname"===a&&$((0,s.capitalize)(t)),"email"===a&&L(t),"password"===a&&ee(t),"confirmPassword"===a&&ie(t),"district"===a&&fe(t),"phone"===a&&oe(t),"name"===a&&Ke(t.toUpperCase()),"address"===a&&We(t)},Ve=function(e){he(e),be(e.districts)},$e=function(e){fe(e)},Oe=function(e){e.preventDefault(),"Enter"===e.key&&Xe()},Xe=function(){var e={firstname:A,lastname:V,password:Q,phone:se,region:de.value,district:ge.value},a=function(e){var a=e.firstname,t=e.lastname,n=e.password,i=e.phone,r=e.region,l=e.district,s=e.url,o=e.categories,c=e.subcategories,u=e.name,d=e.tradeTypes,h=e.t;if(a.length<1)return(0,w.Ug)(h("Ismingizni kiriting"),"warning"),!1;if(t.length<1)return(0,w.Ug)(h("Familiyangizni kiriting"),"warning"),!1;if(i.length<9)return(0,w.Ug)(h("Telefon raqamni to'liq kiriting"),"warning"),!1;if(!r)return(0,w.Ug)(h("Viloyat tanlanmagan"),"warning"),!1;if(!l)return(0,w.Ug)(h("Tuman tanlanmagan"),"warning"),!1;if(n.length<6)return(0,w.Ug)(h("Parol kamida 6 ta belgidan iborat bo'lishi kerak","warning")),!1;if("business"===s){if(""===u)return(0,w.Ug)(h("Tashkilotingiz nomini kiriting"),"warning"),!1;if(0===o.length)return(0,w.Ug)(h("Xizmat ko'rsatish kategoriyalaringizni kiriting","warning")),!1;if(0===c.length)return(0,w.Ug)(h("Kategoriya turlari tanlanmagan"),"warning"),!1;if(0===d.length)return(0,w.Ug)(h("Savdo turlari tanlanmagan"),"warning"),!1}return!0}((0,o.Z)((0,o.Z)({},e),{},{url:P,categories:ke,subcategories:q,name:Fe,email:J,confirmPassword:ne,tradeTypes:Be,t:t}));""!==J&&(e.email=J),""!==Me&&(e.address=Me),a&&Je(e)},Je=function(t){var n=(0,s.map)(ke,(function(e){return e.value}));e("sign-up"===P?(0,j.SA)((0,o.Z)({},t)):(0,j.tV)((0,o.Z)((0,o.Z)({},t),{},{categories:n,subcategories:q,subcategories2:T,name:Fe,tradetypes:Be}))).then((function(t){t.error||(M(""),$(""),L(""),ee(""),ie(""),oe(""),he(""),fe(""),Ze([]),Se([]),Ke(""),a("../"),e((0,C.K5)()))}))};return(0,i.useEffect)((function(){e((0,b.pq)()),e((0,Z.qT)())}),[e]),(0,i.useEffect)((function(){g&&e((0,b.fw)())}),[g,e]),(0,i.useEffect)((function(){e((0,k.tG)())}),[e]),(0,i.useEffect)((function(){S&&e((0,k.mo)())}),[e,S]),(0,h.jsxs)("div",{className:"w-full h-screen bg-white flex flex-col overflow-scroll",children:[(0,h.jsx)("div",{className:"container m-auto",children:(0,h.jsxs)("div",{className:"container m-auto flex lg:flex-row",children:[(0,h.jsx)("div",{className:"lg:w-1/2  hidden lg:block",children:(0,h.jsx)("div",{className:"flex flex-col items-center justify-center h-full text-neutral-700",children:(0,h.jsx)(u.rU,{onClick:function(e){B(e.target.name)},name:"sign-up",to:"/sign-up",className:"font-semibold text-xl cursor-pointer text-center py-2 px-4 my-3 w-full  ".concat("sign-up"===P&&"bg-white-900 shadow"," "),children:d.buyurtmachi})})}),(0,h.jsxs)("div",{className:"lg:w-1/2 w-full",children:[(0,h.jsx)(l.j3,{}),(0,h.jsxs)(l.Z5,{children:[(0,h.jsx)(l.AW,{path:"/",element:(0,h.jsx)(f,{translations:d,firstname:A,lastname:V,email:J,password:Q,confirmPassword:ne,phone:se,region:de,district:ge,changeHandler:Re,selectRegion:Ve,selectDistrict:$e,regions:x,districts:ye,enterHandler:Oe,submitHandler:Xe,loading:U})}),(0,h.jsx)(l.AW,{path:"business",element:(0,h.jsx)(y,{translations:d,firstname:A,lastname:V,email:J,password:Q,confirmPassword:ne,phone:se,region:de,district:ge,changeHandler:Re,selectRegion:Ve,selectDistrict:$e,regions:x,districts:ye,enterHandler:Oe,submitHandler:Xe,loading:U,categoriesWithSubcategories:v,categories:ke,selectCategory:function(a){Ze(a),e((0,C.yw)([])),e((0,C.ad)([])),e((0,C.sS)([a.value])),e((0,k.KT)({category:a.value}))},subcategories:Ce,allSubcategories:Te,selectSubcategory:function(e){Se(e)},name:Fe,tradetypes:D,changeTradeTypes:function(e){var a=e.target.value,t=e.target.checked,n=(0,s.filter)(Be,(function(e){return e!==a}));Ie(t?[].concat((0,c.Z)(n),[a]):(0,c.Z)(n))},tradeTypes:Be,address:Me})}),(0,h.jsx)(l.AW,{path:"*",element:(0,h.jsx)(l.Fg,{to:"/",replace:!0})})]})]})]})}),(0,h.jsx)("div",{className:"bottom-0 bg-white-900 w-full",children:(0,h.jsxs)("div",{className:"container m-auto text-center",children:["By"," ",(0,h.jsx)(u.rU,{to:"/",className:"py-4 inline-block text-blue-500 cursor-pointer underline",children:"Alo24"})]})})]})},z=t.p+"static/media/login.ffa8c7860035d53c8ca4.png",q=function(){var e=(0,r.I0)(),a=(0,l.s0)(),t=(0,_.$)(["common"]).t,s=(0,N.F)(t),c=s.telefon_raqam,g=s.parol,f=s.kirish,p=s.tizimda_yangimisiz_unda_avval,v=s.royxatdan_oting,y=(0,r.v9)((function(e){return e.login})).loading,b=(0,i.useState)(""),w=(0,n.Z)(b,2),k=w[0],Z=w[1],C=(0,i.useState)("+998"),S=(0,n.Z)(C,2),q=S[0],T=S[1],U=function(e){var a=e.target.name,t=e.target.value;"password"===a&&Z(t),"phone"===a&&T(t)},D=function(e){e.preventDefault(),"Enter"===e.key&&F()},F=function(){var t={password:k,phone:q};e((0,j.zB)((0,o.Z)({},t))).then((function(e){e.error||a("/")}))};return(0,h.jsxs)("div",{className:"w-full h-screen bg-white flex flex-col ",children:[(0,h.jsxs)("div",{className:"container flex",children:[(0,h.jsx)("div",{className:"lg:w-1/2  hidden lg:block",children:(0,h.jsx)("div",{className:"flex justify-center",children:(0,h.jsx)("img",{src:z,alt:"login",width:"70%"})})}),(0,h.jsx)("div",{className:"lg:w-1/2 w-full py-6",children:(0,h.jsxs)("div",{className:"flex flex-col items-center justify-center h-full bg-white-900 md:px-10 md:py-5 rounded md:mx-20 md:shadow md:shadow-xl",children:[(0,h.jsx)(d.Z,{isDisabled:y,placeholder:"+998 97 366 62 21",type:"text",label:c,value:q,onChange:U,name:"phone",onKeyUp:D}),(0,h.jsx)(d.Z,{isDisabled:y,placeholder:"* * * * * *",type:"password",label:g,onKeyUp:D,name:"password",value:k,onChange:U}),(0,h.jsx)(m,{title:f,onClick:F,isDisabled:y}),(0,h.jsx)(x,{label:p,title:v,link:"/sign-up"})]})})]}),(0,h.jsx)("div",{className:"bottom-0 bg-white-900 w-full",children:(0,h.jsxs)("div",{className:"container m-auto text-center",children:["By"," ",(0,h.jsx)(u.rU,{to:"/",className:"py-4 inline-block text-blue-500 cursor-pointer underline",children:"Alo24"})]})})]})},T={path:"*",element:(0,h.jsx)(l.Fg,{to:"/",replace:!0})},U=(0,i.lazy)((function(){return Promise.all([t.e(948),t.e(116),t.e(6),t.e(488)]).then(t.bind(t,7729))})),D=(0,i.lazy)((function(){return Promise.all([t.e(948),t.e(48),t.e(6),t.e(767)]).then(t.bind(t,7767))})),F=(0,i.lazy)((function(){return Promise.all([t.e(948),t.e(48),t.e(6),t.e(848)]).then(t.bind(t,4848))})),K=(0,i.lazy)((function(){return Promise.all([t.e(42),t.e(743)]).then(t.bind(t,1743))})),H=(0,i.lazy)((function(){return Promise.all([t.e(48),t.e(543)]).then(t.bind(t,3543))})),P=(0,i.lazy)((function(){return Promise.all([t.e(948),t.e(48),t.e(6),t.e(878)]).then(t.bind(t,2525))})),B=(0,i.lazy)((function(){return Promise.all([t.e(948),t.e(48),t.e(697),t.e(6),t.e(167)]).then(t.bind(t,2827))})),I=(0,i.lazy)((function(){return t.e(912).then(t.bind(t,3912))})),E=(0,i.lazy)((function(){return Promise.all([t.e(948),t.e(124),t.e(6),t.e(950)]).then(t.bind(t,8950))})),A=(0,i.lazy)((function(){return Promise.all([t.e(948),t.e(124),t.e(116),t.e(6),t.e(78)]).then(t.bind(t,3275))})),M=(0,i.lazy)((function(){return Promise.all([t.e(948),t.e(6),t.e(572)]).then(t.bind(t,3572))})),W=(0,i.lazy)((function(){return Promise.all([t.e(948),t.e(6),t.e(856)]).then(t.bind(t,2948))})),R=[{path:"/",element:(0,h.jsx)(U,{})},{path:"/orders",element:(0,h.jsx)(D,{})},{path:"/orders/:id",element:(0,h.jsx)(E,{})},{path:"/products",element:(0,h.jsx)(F,{})},{path:"/create_product",element:(0,h.jsx)(M,{})},{path:"/create_order",element:(0,h.jsx)(W,{})},{path:"/products/:id",element:(0,h.jsx)(A,{})},{path:"/offers",element:(0,h.jsx)(K,{})},{path:"/organizations",element:(0,h.jsx)(H,{})},{path:"/sign-in",element:(0,h.jsx)(q,{})},{path:"/sign-up/*",element:(0,h.jsx)(S,{})},{path:"/profile/*",element:(0,h.jsx)(B,{})},{path:"/companyregister",element:(0,h.jsx)(I,{})},{path:"/organization",element:(0,h.jsx)(P,{})},T],V=function(){return(0,s.map)(R,(function(e){return(0,h.jsx)(l.AW,{exact:!0,path:e.path,element:e.element},(0,s.uniqueId)("route"))}))},$=t(1338),O=function(e){var a=e.title;return(0,h.jsx)(u.rU,{to:"/sign-in",class:"\r text-base\r font-medium\r text-white\r bg-white bg-opacity-20\r rounded-lg\r py-3\r px-6\r hover:bg-opacity-100 hover:text-dark\r signUpBtn\r duration-300\r ease-in-out\r ",children:a})},X=function(e){var a=e.navs;e.translations;return(0,h.jsx)("ul",{class:"blcok lg:flex",children:(0,s.map)(a,(function(e){return(0,h.jsx)("li",{class:"relative group",children:(0,h.jsx)(u.rU,{to:e.path,onClick:e.onClick,className:"\r ud-menu-scroll\r text-base text-dark\r lg:text-white\r lg:group-hover:opacity-70\r lg:group-hover:text-white\r group-hover:text-primary\r py-2\r lg:py-6 lg:inline-flex lg:px-0\r flex\r mx-8\r lg:mr-0\r ",children:e.name},(0,s.uniqueId)("navbar"))})}))})},J=t(71),L=t(8820),Y=t(7425),G=t(9126),Q=t(6856),ee=t(6355),ae=[{name:"\u0417\u0430\u044f\u0432\u043a\u0438",path:"/orders",icon:(0,h.jsx)(J.Fkl,{size:20,color:"white"}),style:"mr-2",navStyle:"border-r"},{name:"\u0427\u0430\u0442",path:"/offers",icon:(0,h.jsx)(J.Fkl,{size:20,color:"white"}),style:"rotate-180 mr-2 mt-1"},{name:"\u0422\u043e\u0432\u0430\u0440\u044b",path:"/products",icon:(0,h.jsx)(J.Umv,{size:20,color:"white"}),style:"mr-2"},{name:"\u041f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u0438",path:"/organizations",icon:(0,h.jsx)(J.$oj,{size:20,color:"white"}),style:"mr-2",navStyle:"border-l"}],te=[{name:"\u0413\u043b\u0430\u0432\u0433\u0430\u044f",path:"/",icon:(0,h.jsx)(L.V9Z,{color:"white"})},{name:"\u0417\u0430\u044f\u0432\u043a\u0438",path:"/orders",icon:(0,h.jsx)(Y.EOL,{color:"white"}),style:"mr-2",navStyle:"border-r"},{name:"\u0427\u0430\u0442",path:"/offers",icon:(0,h.jsx)(G.Thz,{color:"white"}),style:"rotate-180 mr-2 mt-1"},{name:"\u0422\u043e\u0432\u0430\u0440\u044b",path:"/products",icon:(0,h.jsx)(Q.Pet,{color:"white"}),style:"mr-2"},{name:"\u041f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u0438",path:"/organizations",icon:(0,h.jsx)(ee.$m5,{color:"white"}),style:"mr-2",navStyle:"border-l"}],ne=["offers"],ie=function(e){var a=e.link,t=e.title,n=e.icon,i=e.onClick;return(0,h.jsxs)(u.rU,{onClick:i,to:a,className:"flex items-center text-neutral-700 text-sm",children:[(0,h.jsx)("span",{className:"pointer-events-none mr-3",children:n}),t]})},re=function(e){var a=e.toggleMenu;return(0,h.jsx)("ul",{className:"absolute bg-neutral-200 w-[200px] -left-20 rounded top-16",children:(0,s.map)(a,(function(e,a){return(0,h.jsx)("li",{className:"px-4 pb-2 pt-2 hover:bg-neutral-100  ".concat(0!==a&&"border-t border-white-900 "),children:(0,h.jsx)(ie,{icon:e.icon,link:e.link,title:e.title,onClick:e.onClick})},(0,s.uniqueId)("toggleMenu"))}))})},le=function(e){var a=e.changeHandler,t=e.navbarExpended,n=e.toggleMenu,i=e.user;return(0,h.jsxs)("div",{className:"relative ",children:[(0,h.jsx)("button",{onClick:a,className:"w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-slate-100 rounded-full flex items-center justify-center border border-white-900",children:null!==i&&void 0!==i&&i.image?(0,h.jsx)("img",{src:i.image,alt:"avatar",className:"w-full h-full rounded-full"}):(null===i||void 0===i?void 0:i.firstname[0].toUpperCase())+(null===i||void 0===i?void 0:i.lastname[0].toUpperCase())}),t&&(0,h.jsx)(re,{toggleMenu:n})]})},se=function(){var e,a,t=(0,r.I0)(),l=function(e){return{Buyurtmalar:e("Buyurtmalar"),Xabar:e("Xabar"),AloTrade:e("AloTrade"),Kompaniyalar:e("Kompaniyalar"),Profile:e("Profile"),kirish:e("kirish")}}((0,_.$)(["common"]).t),s=(0,i.useState)(!1),o=(0,n.Z)(s,2),d=o[0],m=o[1],x=(0,i.useState)(ae),g=(0,n.Z)(x,2),f=g[0],p=g[1],v=function(){m(!d)},y=(0,r.v9)((function(e){return e.login})),b=y.userData.user,w=y.logged,k=(e=function(){t((0,j.ni)()),m(!1)},a=v,[{link:"/profile/user",icon:(0,h.jsx)(J.FJ3,{}),title:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c",onClick:a},{link:"/",icon:(0,h.jsx)(J.qgu,{}),title:"\u0412\u044b\u0445\u043e\u0434",onClick:e}]),Z=(0,i.useState)(!1),N=(0,n.Z)(Z,2);N[0],N[1];return(0,i.useEffect)((function(){p(w?ae:(0,c.Z)(ae.filter((function(e){return!ne.includes(e.path.slice(1))}))))}),[w]),(0,h.jsx)("div",{class:"\r ud-header\r bg-alotrade\r z-40\r w-full\r flex\r items-center\r ",children:(0,h.jsx)("div",{class:"container",children:(0,h.jsxs)("div",{class:"flex -mx-4 items-center justify-between relative",children:[(0,h.jsx)("div",{class:"px-4 w-60 max-w-full",children:(0,h.jsx)(u.rU,{to:"/",class:"navbar-logo w-full block text-white text-center font-bold text-[32px] border-b-2 border-white",children:"alotrade"})}),(0,h.jsxs)("div",{class:"flex px-4 justify-between items-center w-full",children:[(0,h.jsx)("div",{children:(0,h.jsx)("nav",{id:"navbarCollapse",class:"\r absolute\r py-5\r lg:py-0 lg:px-4\r xl:px-6\r bg-white\r lg:bg-transparent\r shadow-lg\r rounded-lg\r max-w-[250px]\r w-full\r lg:max-w-full lg:w-full\r right-4\r top-full\r hidden\r md:block lg:static lg:shadow-none\r ",children:(0,h.jsx)(X,{navs:f,translations:l})})}),(0,h.jsx)("div",{class:"sm:flex justify-end lg:pr-0",children:b?(0,h.jsx)(le,{user:b,toggleMenu:k,navbarExpended:d,changeHandler:v}):(0,h.jsx)(O,{title:l.kirish})})]})]})})})},oe=t(4397),ce=function(){return(0,h.jsx)("ul",{class:"fixed bottom-0 left-0 w-full bg-alotrade z-10 flex items-center justify-between py-2 px-3",children:(0,s.map)(te,(function(e){return(0,h.jsxs)("li",{class:"flex flex-col items-center",children:[e.icon,(0,h.jsx)(u.rU,{to:e.path,onClick:e.onClick,className:"text-[12px] text-white",children:e.name},(0,s.uniqueId)("navbar"))]})}))})},ue=t(5725),de=function(){(0,r.I0)();var e=(0,l.TH)(),a=((0,r.v9)((function(e){return e.categories})).categoriesWithSubcategories,(0,r.v9)((function(e){return e.trade})).tradetypes,(0,r.v9)((function(e){return e.regions})).regions,(0,i.useState)(e.pathname.split("/")[1])),t=(0,n.Z)(a,2),s=(t[0],t[1]),o=(0,oe.Z)().width;return(0,i.useEffect)((function(){s(e.pathname.split("/")[1])}),[e.pathname]),(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("section",{className:"flex flex-col w-full",children:[(0,h.jsx)(se,{}),o<720&&(0,h.jsx)(ce,{}),(0,h.jsx)(i.Suspense,{fallback:(0,h.jsx)($.Z,{}),children:(0,h.jsx)(l.Z5,{children:V()})}),"/offers"!==e.pathname&&!e.pathname.includes("profile")&&(0,h.jsx)(ue.Z,{})]})})}},4397:function(e,a,t){t.d(a,{Z:function(){return r}});var n=t(9439),i=t(2791);function r(){var e=(0,i.useState)({width:null,height:null}),a=(0,n.Z)(e,2),t=a[0],r=a[1];return(0,i.useEffect)((function(){function e(){r({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),t}},9169:function(e,a,t){t.d(a,{F:function(){return n}});var n=function(e){return{Filter:e("Filter"),savdo_turi:e("Savdo turi"),kategoriyalar:e("Kategoriyalar"),davlatlar:e("Davlatlar"),nomi_bilan_qidirish:e("Nomi bilan qidirish"),kirish:e("kirish"),AloTrade:e("AloTrade"),Buyurtmalar:e("Buyurtmalar"),Xabar:e("Xabar"),Kompaniyalar:e("Kompaniyalar"),Profile:e("Profile"),telefon_raqam:e("Telefon raqam"),parol:e("Parol"),royxatdan_otish:e("Ro'yxatdan o'tish"),tizimda_yangimisiz_unda_avval:e("Tizimda yangimisiz? Unda avval"),royxatdan_oting:e("Ro'yxatdan o'ting"),foydalanuvchi_sifatida_royxatdan_otish:e("Foydalanuvchi sifatida ro'yxatdan o'tish"),kompaniya_sifatida_royxatdan_otish:e("Kompaniya sifatida ro'yxatdan o'tish"),tashkilot_sifatida_royxatdan_otish:e("Tashkilot sifatida ro'yxatdan o'tish"),shaxsiy_malumotlaringiz:e("Shaxsiy ma'lumotlaringiz"),tashkilot_malumotlari:e("Tashkilot ma'lumotlari"),savdo_turingizni_tanlang:e("Savdo turingizni tanlang"),ism:e("Ism"),familiya:e("Familiya"),telefon:e("Telefon"),email:e("Email"),parolni_takrorlang:e("Parolni takrorlang"),avval_royxatdan_otgan_bolsangiz:e("Avval ro'yxatdan o'tgan bo'lsangiz"),kirish_qismiga_qayting:e("kirish qismiga qayting"),davlat:e("Davlat"),viloyat:e("Viloyat"),kategoriya:e("Kategoriya"),kategoriya_turi:e("Kategoriya turi"),buyurtmachi:e("Buyurtmachi"),tashkilot_nomi:e("Tashkilot nomi"),buyurtma_berish:e("Buyurtma berish"),mahsulot_yaratish:e("Mahsulot yaratish"),tashkilot_yaratish:e("Tashkilot yaratish"),barcha_buyurtmalar:e("Barcha buyurtmalar"),jami_buyurtmalar:e("Jami buyurtmalar"),mening_buyurtmalarim:e("Mening buyurtmalarim"),sana:e("Sana"),buyurtma_holati:e("Buyurtma holati"),nomi:e("Nomi"),narxi:e("Narxi"),koproq_malumot:e("ko'proq ma'lumot"),yopish:e("yopish"),manzil:e("Manzil"),ta:e(" "),yakunlash:e("Yakunlash"),faollashtirish:e("Faollashtirish"),jami:e("Jami"),buyurtma_yaratish:e("Buyurtma yaratish"),buyurtmani_ochirish:e("Buyurtmani o'chirish"),siz_buyurtmani_ochirishni_xohlaysizmi:e("Siz rostdan ham buyurtmani o'chirmoqchimisiz?"),bekor_qilish:e("Bekor qilish"),ochirish:e("O'chirish"),kiruvchi_xabar:e("Kiruvchi xabar"),chiquvchi_xabar:e("Chiquvchi xabar"),tashkilot:e("Tashkilot"),foydalanuvchi:e("Foydalanuvchi"),xabarni_kiriting:e("Xabarni kiriting"),mahsulot_yoki_buyurtma_tanlanmagan:e("Mahsulot yoki buyurtma tanlanmagan"),jami_tashkilotlar:e("Jami tashkilotlar"),mahsulotlar:e("Mahsulotlar"),tashkilotlar:e("Tashkilotlar"),joriy_parol:e("Joriy parol"),yangi_parol:e("Yangi parol"),tasdiqlash:e("Tasdiqlash"),saqlash:e("Saqlash"),yangi_buyurtma:e("Yangi buyurtma"),mahsulot_yoki_xizmat_nomi:e("Mahsulot yoki xizmat nomi"),qoshimcha_malumot:e("Qo'shimcha ma'lumot"),izoh:e("Izoh"),tolov_turi:e("To'lov turi"),active:e("active"),unactive:e("unactive"),aloqa_malumotlari:e("Aloqa ma'lumotlari"),tashkilot_haqida:e("Tashkilot haqida")}}}}]);
//# sourceMappingURL=877.f529f158.chunk.js.map