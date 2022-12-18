"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[133],{4649:function(e,a,t){t(2791);var n=t(763),i=t(3168),r=t(184);a.Z=function(e){var a=e.data,t=e.onChange,l=e.checked,s=(0,i.$)(["common"]).t,o=(0,n.uniqueId)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("label",{htmlFor:o,className:"flex items-center text-neutral-600 text-sm cursor-pointer ml-2 w-full ",children:[(0,r.jsx)("input",{checked:l,onChange:t,value:a.value,id:o,type:"checkbox",className:"w-[1rem] h-[1rem] mr-2"}),(0,r.jsx)("span",{className:"w-full",children:s(a.label)})]})})}},5059:function(e,a,t){t(2791);var n=t(763),i=t(4649),r=t(8128),l=t(184);a.Z=function(e){var a=e.list,t=e.headerText,s=e.cols,o=void 0===s?1:s,c=e.onChange,u=e.checkedList,d=e.headerStyle,h=e.listStyle;return(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)(r.Z,{label:t,className:d}),(0,l.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-".concat(o," ").concat(h),children:(0,n.map)(a,(function(e){return(0,l.jsx)(i.Z,{onChange:c,data:e,checked:null===u||void 0===u?void 0:u.some((function(a){return a===e.value}))},(0,n.uniqueId)("checkbox"))}))})]})}},8128:function(e,a,t){t(2791);var n=t(184);a.Z=function(e){var a=e.label,t=e.className;return(0,n.jsx)("h3",{className:"tracking-normal text-neutral-700 ".concat(t),children:a})}},5474:function(e,a,t){var n=t(9439),i=t(2791),r=t(71),l=t(184);a.Z=function(e){var a=e.placeholder,t=e.type,s=void 0===t?"text":t,o=e.label,c=e.value,u=e.margin,d=e.onChange,h=e.onKeyUp,m=e.name,x=e.required,g=void 0!==x&&x,f=e.isDisabled,p=e.labelStyle,v=(0,i.useState)("password"===s),y=(0,n.Z)(v,2),b=y[0],j=y[1],w=(0,i.useState)(s),k=(0,n.Z)(w,2),Z=k[0],_=k[1];return(0,l.jsxs)("div",{className:"py-2 w-full flex flex-col text-neutral-700 ".concat(u),children:[o&&(0,l.jsx)("label",{className:"text-neutral-500 font-semibold text-sm ".concat(p),children:o}),(0,l.jsxs)("div",{className:"w-full relative text-neutral-700",children:[(0,l.jsx)("input",{disabled:f,required:g,name:m,onKeyUp:h,onChange:d,value:c,type:Z,placeholder:a,className:"w-full text-neutral-600 text-sm  bg-white-900 outline-0 py-[.425rem] px-3 rounded border my-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"}),"password"===s&&(0,l.jsx)("span",{onClick:function(e){e.preventDefault(),_(b?"text":"password"),j(!b)},className:"absolute right-3 top-2",children:b?(0,l.jsx)(r.ilU,{}):(0,l.jsx)(r.gxi,{})})]})]})}},7837:function(e,a,t){t.d(a,{Z:function(){return u}});t(2791);var n=t(9529),i=t(1413),r=t(9877),l=t(71),s=t(184),o=function(e){return(0,s.jsx)(r.c.DropdownIndicator,(0,i.Z)((0,i.Z)({},e),{},{children:(0,s.jsx)(l.lmx,{size:"0.625rem",color:"#aaa"})}))},c={container:function(e){return(0,i.Z)((0,i.Z)({},e),{},{height:"100%"})},control:function(e,a){var t=a.isDisabled;return(0,i.Z)((0,i.Z)({},e),{},{width:"100%",height:"100%",padding:".0rem .58rem",borderRadius:".25rem",fontSize:".875rem",fontWeight:"400",color:"#86A7E9",outline:"none",boxShadow:"0px 10px 10px rgba(0, 0, 0, 0.05)",cursor:"pointer","&:hover":{backgroundColor:"#EAEAEA"},"&:focus-within":{outline:"4px solid #A9C0EF",backgroundColor:"#ffffff"},backgroundColor:t?"rgba(28, 28, 28, 0.2)":"#fff",border:t?"none":"1px solid #dedede"})},option:function(e,a){a.isFocused,a.isSelected;return(0,i.Z)((0,i.Z)({},e),{},{fontSize:".875rem",fontWeight:"400",transition:"all 0.2s ease",overflow:"hidden",cursor:"pointer"})},menu:function(e){return(0,i.Z)((0,i.Z)({},e),{},{zIndex:30})},singleValue:function(e){return(0,i.Z)((0,i.Z)({},e),{},{color:"#1c1c1c",fontSize:".875rem",lineHeight:"1.25rem",fontWeight:"400",margin:0})},valueContainer:function(e){return(0,i.Z)((0,i.Z)({},e),{},{padding:0})},dropdownIndicator:function(e,a){var t=a.isFocused;return(0,i.Z)((0,i.Z)({},e),{},{padding:0,paddingRight:".625rem",color:t?"#193F8A":"#071F45"})},placeholder:function(e,a){a.isDisabled;return(0,i.Z)((0,i.Z)({},e),{},{margin:0,color:"#aaa"})},input:function(e){return(0,i.Z)((0,i.Z)({},e),{},{padding:0,display:"flex",lineHeight:"1.25rem",margin:0})}},u=function(e){var a=e.onSelect,t=e.options,i=e.isDisabled,r=e.label,l=e.placeholder,u=e.value,d=e.name,h=e.isMulti,m=void 0!==h&&h,x=e.closeMenuOnSelect,g=void 0===x||x;return(0,s.jsxs)("div",{className:"grow",children:[r&&(0,s.jsx)("label",{className:"text-blue-700 block leading-[1.125rem] mb-[.625rem]",children:r}),(0,s.jsx)(n.ZP,{name:d,onChange:a,styles:c,value:u,options:t,isDisabled:i,placeholder:l,components:{IndicatorSeparator:function(){return null},DropdownIndicator:o},isMulti:m,closeMenuOnSelect:g})]})}},5393:function(e,a,t){t.d(a,{Z:function(){return b}});var n=t(3433),i=t(9439),r=t(2791),l=t(5059),s=t(8128),o=t(763),c=t(4649),u=t(71),d=t(184),h=function(e){var a=e.data,t=e.onClick,n=e.currentId,i=e.changeHeader,r=e.headerCheckeds,l=null===r||void 0===r?void 0:r.some((function(e){return e===a.value}));return(0,d.jsxs)("div",{className:"flex justify-between w-full hover:bg-gray-200 ",children:[(0,d.jsx)(c.Z,{data:a,onChange:i,checked:l}),(0,d.jsx)("button",{className:"w-1/2 flex pl-2 items-center text-neutral-600 justify-between text-end ",onClick:t,name:a.value,children:(0,d.jsx)("span",{className:"mt-1 px-5 pointer-events-none w-full text-end  ",children:n===a.value?(0,d.jsx)(u.pzk,{}):(0,d.jsx)(u._i7,{})})})]})},m=function(e){var a=e.datas,t=e.property,n=e.headerText,l=e.changeHeader,u=e.headerCheckeds,m=e.changeBody,x=e.bodyCheckeds,g=(0,r.useState)(null),f=(0,i.Z)(g,2),p=f[0],v=f[1],y=function(e){var a=e.target.name;v(a===p?null:a)};return(0,d.jsxs)("div",{className:"border-t mt-3 pl-3",children:[(0,d.jsx)(s.Z,{label:n}),(0,d.jsx)("div",{className:"max-h-[500px]",children:(0,o.map)(a,(function(e,a){return(0,d.jsxs)("div",{children:[(0,d.jsx)(h,{headerCheckeds:u,data:e,onClick:y,currentId:p,changeHeader:l}),(0,d.jsx)("div",{className:"pl-3 transition-all ease-in-out duration-300 ".concat(e.value!==p&&"hidden"),children:(0,o.map)(e[t],(function(e){return(0,d.jsx)(c.Z,{onChange:m,checked:null===x||void 0===x?void 0:x.some((function(a){return a===e.value})),data:e},(0,o.uniqueId)("selectCheckbox"))}))})]},(0,o.uniqueId)("selectButton"))}))})]})},x=t(9434),g=t(4373),f=t(3168),p=t(9169),v=t(4397);var y=t.p+"static/media/close.745063d25d8995a5d5c582e48c97dc84.svg",b=function(e){var a=e.filterVisible,t=e.setFilterVisible,s=e.filterBody,c=(0,f.$)(["common"]).t,h=(0,p.F)(c),b=h.Filter,j=h.savdo_turi,w=h.davlatlar,k=h.kategoriyalar,Z=h.nomi_bilan_qidirish,_=(0,v.Z)().width,N=(0,x.I0)(),C=r.useState(""),S=(0,i.Z)(C,2),z=S[0],q=S[1],D=(0,x.v9)((function(e){return e.filter})),T=D.tradetypes,U=D.categories,F=D.subcategories,H=D.districts,K=D.regions,I=(0,x.v9)((function(e){return e.categories})).categoriesWithSubcategories,B=(0,x.v9)((function(e){return e.trade})).tradetypes,E=(0,x.v9)((function(e){return e.regions})).regions,P=function(e){var a=e.target.value,t=e.target.checked,i=(0,o.filter)(T,(function(e){return e!==a}));N(t?(0,g.bg)([].concat((0,n.Z)(i),[a])):(0,g.bg)((0,n.Z)(i)))},A=function(e){var a=e.target.value,t=e.target.checked,i=(0,o.filter)(U,(function(e){return e!==a})),r=t?[].concat((0,n.Z)(i),[a]):(0,n.Z)(i);console.log(r),N((0,g.sS)(r))},M=function(e){var a=e.target.value,t=e.target.checked,i=(0,o.filter)(F,(function(e){return e!==a})),r=t?[].concat((0,n.Z)(i),[a]):(0,n.Z)(i);N((0,g.yw)(r))},W=function(e){var a=e.target.value,t=e.target.checked,i=(0,o.filter)(K,(function(e){return e!==a})),r=t?[].concat((0,n.Z)(i),[a]):(0,n.Z)(i);N((0,g.s0)(r))},R=function(e){var a=e.target.value,t=e.target.checked,i=(0,o.filter)(H,(function(e){return e!==a})),r=t?[].concat((0,n.Z)(i),[a]):(0,n.Z)(i);N((0,g.wO)(r))};return(0,d.jsx)("div",{className:_<720?"w-full h-full ease-in-out duration-200 fixed top-0 ".concat(a?"left-0":"left-[-100%]"," z-50 bg-white"):"min-w-[300px] max-w-[400px] shadow bg-white",children:(0,d.jsxs)("div",{className:"p-4",children:[(0,d.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,d.jsx)("h1",{className:"font-amazonbold text-xl tracking-widest text-secondary-medium",children:b}),_<720&&(0,d.jsx)("button",{onClick:function(){return t(!1)},children:(0,d.jsx)("img",{src:y,alt:"close",width:30})})]}),(0,d.jsxs)("div",{className:"flex w-full pl-3 mt-2",children:[(0,d.jsx)("input",{onKeyUp:function(e){"Enter"===e.key&&N((0,g.DF)(z))},onChange:function(e){var a=e.target.value;q(a)},type:"text",className:"w-full border  rounded-l px-3 text-sm py-1 outline-0",placeholder:Z}),(0,d.jsx)("button",{onClick:function(){N((0,g.DF)(z))},className:"w-1/5 rounded-r bg-primary-800 text-white-900 border border-l-0 flex justify-center items-center",children:(0,d.jsx)(u.uFR,{})})]}),_<720?(0,d.jsx)(d.Fragment,{children:"category"===s&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.Z,{checkedList:T,list:B,headerText:j,headerStyle:"ml-3 mt-3",listStyle:"pl-3",onChange:P}),(0,d.jsx)(m,{headerCheckeds:U,changeHeader:A,changeBody:M,bodyCheckeds:F,headerText:k,datas:I,property:"subcategories"})]})}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.Z,{checkedList:T,list:B,headerText:j,headerStyle:"ml-3 mt-3",listStyle:"pl-3",onChange:P}),(0,d.jsx)(m,{headerCheckeds:U,changeHeader:A,changeBody:M,bodyCheckeds:F,headerText:k,datas:I,property:"subcategories"})]}),_<720?(0,d.jsx)(d.Fragment,{children:"country"===s&&(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(m,{headerCheckeds:K,bodyCheckeds:H,changeHeader:W,changeBody:R,headerText:w,datas:E,property:"districts"})})}):(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(m,{headerCheckeds:K,bodyCheckeds:H,changeHeader:W,changeBody:R,headerText:w,datas:E,property:"districts"})})]})})}},4572:function(e,a,t){t.r(a),t.d(a,{default:function(){return G}});var n=t(9439),i=t(2791),r=t(9434),l=t(7689),s=t(763),o=t(1413),c=t(3433),u=t(1087),d=t(5474),h=t(184),m=function(e){var a=e.title,t=e.onClick,n=e.isDisabled;return(0,h.jsx)("div",{className:"w-full my-2",children:(0,h.jsx)("button",{disabled:n,onClick:t,className:"bg-alotrade block  w-full text-white py-1 font-semibold rounded",children:a})})},x=function(e){var a=e.link,t=e.title,n=e.label;return(0,h.jsxs)("div",{className:"w-full my-2 text-sm text-center text-neutral-500 lowercase",children:[n,(0,h.jsx)(u.rU,{to:a,className:"font-bold text-blue-500 underline",children:t})]})},g=t(7837),f=function(e){var a=e.firstname,t=e.lastname,n=e.password,i=e.phone,r=e.region,l=e.district,s=e.regions,o=e.districts,c=e.changeHandler,u=e.selectRegion,f=e.selectDistrict,p=e.enterHandler,v=e.submitHandler,y=e.loading,b=e.translations;return(0,h.jsx)("div",{className:"bg-white-900 rounded ",children:(0,h.jsxs)("div",{className:"md:px-16 md:py-5",children:[(0,h.jsx)("h1",{className:"font-bold text-center py-4 text-xl text-neutral-700",children:b.foydalanuvchi_sifatida_royxatdan_otish}),(0,h.jsxs)("div",{className:"flex flex-col md:flex-row",children:[(0,h.jsx)(d.Z,{isDisabled:y,placeholder:b.ism+"*",margin:"mr-3",value:a,onChange:c,name:"firstname",required:!0,onKeyUp:p}),(0,h.jsx)(d.Z,{isDisabled:y,placeholder:b.familiya+"*",value:t,onChange:c,name:"lastname",required:!0,onKeyUp:p})]}),(0,h.jsx)(d.Z,{isDisabled:y,placeholder:b.telefon_raqam+"*",type:"number",value:i,onChange:c,name:"phone",required:!0,onKeyUp:p}),(0,h.jsxs)("div",{className:"flex flex-col gap-4 md:gap-0 md:flex-row w-full",children:[(0,h.jsx)("div",{className:"w-full mr-3",children:(0,h.jsx)(g.Z,{placeholder:b.davlat+"*",options:s,onSelect:u,value:r,name:"region",isDisabled:y})}),(0,h.jsx)("div",{className:"w-full",children:(0,h.jsx)(g.Z,{placeholder:b.viloyat+"*",value:l,options:o,onSelect:f,name:"district",isDisabled:0===o.length||y})})]}),(0,h.jsx)(d.Z,{isDisabled:y,placeholder:b.parol+"*",type:"password",value:n,onChange:c,name:"password",required:!0,onKeyUp:p}),(0,h.jsx)(m,{title:b.royxatdan_otish,onClick:v,isDisabled:y}),(0,h.jsx)("br",{}),(0,h.jsx)(x,{link:"../sign-in",label:b.avval_royxatdan_otgan_bolsangiz+" ",title:b.kirish_qismiga_qayting})]})})},p=t(4649),v=function(e){var a=e.categoriesWithSubcategories,t=e.firstname,n=e.lastname,i=e.password,r=e.phone,l=e.region,o=e.district,c=e.regions,u=e.districts,f=e.changeHandler,v=e.selectRegion,y=e.selectDistrict,b=e.enterHandler,j=e.submitHandler,w=e.loading,k=e.categories,Z=e.selectCategory,_=e.subcategories,N=e.allSubcategories,C=e.selectSubcategory,S=e.name,z=e.tradetypes,q=e.changeTradeTypes,D=e.tradeTypes,T=e.translations;return(0,h.jsx)("div",{className:"bg-white rounded ",children:(0,h.jsxs)("div",{className:"md:px-16 md:py-5",children:[(0,h.jsx)("h1",{className:"font-bold text-center py-4 text-xl text-neutral-700",children:T.tashkilot_sifatida_royxatdan_otish}),(0,h.jsx)("p",{className:"text-neutral-500 text-sm",children:T.shaxsiy_malumotlaringiz}),(0,h.jsxs)("div",{className:"flex flex-col md:flex-row ",children:[(0,h.jsx)(d.Z,{isDisabled:w,placeholder:T.ism+"*",margin:"mr-3",value:t,onChange:f,name:"firstname",required:!0,onKeyUp:b}),(0,h.jsx)(d.Z,{isDisabled:w,placeholder:T.familiya+"*",value:n,onChange:f,name:"lastname",required:!0,onKeyUp:b})]}),(0,h.jsx)("div",{className:"flex flex-col md:flex-row",children:(0,h.jsx)(d.Z,{margin:"mr-3",isDisabled:w,placeholder:T.telefon_raqam+"*",type:"number",value:r,onChange:f,name:"phone",required:!0,onKeyUp:b})}),(0,h.jsx)("div",{className:"flex flex-grow",children:(0,h.jsx)(d.Z,{margin:"mr-3",isDisabled:w,placeholder:T.parol+"*",type:"password",value:i,onChange:f,name:"password",required:!0,onKeyUp:b})}),(0,h.jsx)("br",{}),(0,h.jsx)("p",{className:"text-neutral-500 text-sm",children:T.tashkilot_malumotlari}),(0,h.jsx)(d.Z,{placeholder:T.tashkilot_nomi+"*",isDisabled:w,value:S,onChange:f,name:"name",required:!0,onKeyUp:b}),(0,h.jsxs)("div",{className:"flex flex-col gap-4 md:gap-0 md:flex-row w-full mb-2",children:[(0,h.jsx)("div",{className:"w-full mr-3",children:(0,h.jsx)(g.Z,{placeholder:T.davlat+"*",options:c,onSelect:v,value:l,name:"region",isDisabled:w})}),(0,h.jsx)("div",{className:"w-full",children:(0,h.jsx)(g.Z,{placeholder:T.viloyat+"*",value:o,options:u,onSelect:y,name:"district",isDisabled:0===u.length||w})})]}),(0,h.jsxs)("div",{className:"mb-2",children:[(0,h.jsx)("h1",{className:"text-sm text-neutral-500 mt-4",children:T.savdo_turingizni_tanlang}),(0,h.jsx)("div",{className:"grid grid-cols-2",children:(0,s.map)(z,(function(e){return(0,h.jsx)(p.Z,{data:e,onChange:q,checked:D.some((function(a){return a===e.value}))},(0,s.uniqueId)("tradeType"))}))})]}),(0,h.jsxs)("div",{className:"flex flex-col gap-4 md:gap-0 md:flex-row w-full",children:[(0,h.jsx)("div",{className:"w-full mr-3",children:(0,h.jsx)(g.Z,{placeholder:T.kategoriya+"*",options:a,isMulti:!0,value:k,isDisabled:w,onSelect:Z,closeMenuOnSelect:!1})}),(0,h.jsx)("div",{className:"w-full",children:(0,h.jsx)(g.Z,{placeholder:T.kategoriya_turi+"*",options:N,isMulti:!0,value:_,isDisabled:0===k.length||w,onSelect:C,closeMenuOnSelect:!1})})]}),(0,h.jsx)(m,{title:T.royxatdan_otish,onClick:j,isDisabled:w}),(0,h.jsx)("br",{}),(0,h.jsx)(x,{link:"../../sign-in",label:T.avval_royxatdan_otgan_bolsangiz+" ",title:T.kirish_qismiga_qayting})]})})},y=t(8336),b=t(5134),j=t(2106),w=t(8862),k=t(5800),Z=t(3168),_=t(9169),N=function(){var e=(0,r.I0)(),a=(0,l.s0)(),t=(0,Z.$)(["common"]).t,d=(0,_.F)(t),m=(0,r.v9)((function(e){return e.regions})),x=m.regions,g=m.error,p=(0,r.v9)((function(e){return e.categories})),N=p.categoriesWithSubcategories,C=p.error,S=(0,r.v9)((function(e){return e.login})).loading,z=(0,r.v9)((function(e){return e.trade})).tradetypes,q=window.location.href.split("/"),D=(0,i.useState)(q[q.length-1]),T=(0,n.Z)(D,2),U=T[0],F=T[1],H=(0,i.useState)(""),K=(0,n.Z)(H,2),I=K[0],B=K[1],E=(0,i.useState)(""),P=(0,n.Z)(E,2),A=P[0],M=P[1],W=(0,i.useState)(""),R=(0,n.Z)(W,2),O=R[0],V=R[1],X=(0,i.useState)(""),$=(0,n.Z)(X,2),J=$[0],L=$[1],Y=(0,i.useState)(""),G=(0,n.Z)(Y,2),Q=G[0],ee=G[1],ae=(0,i.useState)(""),te=(0,n.Z)(ae,2),ne=te[0],ie=te[1],re=(0,i.useState)(""),le=(0,n.Z)(re,2),se=le[0],oe=le[1],ce=(0,i.useState)(""),ue=(0,n.Z)(ce,2),de=ue[0],he=ue[1],me=(0,i.useState)([]),xe=(0,n.Z)(me,2),ge=xe[0],fe=xe[1],pe=(0,i.useState)([]),ve=(0,n.Z)(pe,2),ye=ve[0],be=ve[1],je=(0,i.useState)([]),we=(0,n.Z)(je,2),ke=we[0],Ze=we[1],_e=(0,i.useState)([]),Ne=(0,n.Z)(_e,2),Ce=Ne[0],Se=Ne[1],ze=(0,i.useState)(""),qe=(0,n.Z)(ze,2),De=qe[0],Te=qe[1],Ue=(0,i.useState)([]),Fe=(0,n.Z)(Ue,2),He=Fe[0],Ke=Fe[1],Ie=function(e){var a=e.target.name,t=e.target.value;"firstname"===a&&B((0,s.capitalize)(t)),"lastname"===a&&M((0,s.capitalize)(t)),"email"===a&&V(t),"password"===a&&L(t),"confirmPassword"===a&&ee(t),"district"===a&&he(t),"phone"===a&&ie(t),"name"===a&&Te(t.toUpperCase())},Be=function(e){oe(e),fe(e.districts)},Ee=function(e){he(e)},Pe=function(e){e.preventDefault(),"Enter"===e.key&&Ae()},Ae=function(){var e={firstname:I,lastname:A,password:J,phone:ne,region:se.value,district:de.value},a=function(e){var a=e.firstname,t=e.lastname,n=e.password,i=e.phone,r=e.region,l=e.district,s=e.url,o=e.categories,c=e.subcategories,u=e.name,d=e.tradeTypes,h=e.t;if(a.length<1)return(0,j.Ug)(h("Ismingizni kiriting"),"warning"),!1;if(t.length<1)return(0,j.Ug)(h("Familiyangizni kiriting"),"warning"),!1;if(i.length<9)return(0,j.Ug)(h("Telefon raqamni to'liq kiriting"),"warning"),!1;if(!r)return(0,j.Ug)(h("Viloyat tanlanmagan"),"warning"),!1;if(!l)return(0,j.Ug)(h("Tuman tanlanmagan"),"warning"),!1;if(n.length<6)return(0,j.Ug)(h("Parol kamida 6 ta belgidan iborat bo'lishi kerak","warning")),!1;if("business"===s){if(""===u)return(0,j.Ug)(h("Tashkilotingiz nomini kiriting"),"warning"),!1;if(0===o.length)return(0,j.Ug)(h("Xizmat ko'rsatish kategoriyalaringizni kiriting","warning")),!1;if(0===c.length)return(0,j.Ug)(h("Kategoriya turlari tanlanmagan"),"warning"),!1;if(0===d.length)return(0,j.Ug)(h("Savdo turlari tanlanmagan"),"warning"),!1}return!0}((0,o.Z)((0,o.Z)({},e),{},{url:U,categories:ye,subcategories:ke,name:De,email:O,confirmPassword:Q,tradeTypes:He,t:t}));""!==O&&(e.email=O),a&&Me(e)},Me=function(t){var n=(0,s.map)(ye,(function(e){return e.value})),i=(0,s.map)(ke,(function(e){return e.value}));e("sign-up"===U?(0,b.SA)((0,o.Z)({},t)):(0,b.tV)((0,o.Z)((0,o.Z)({},t),{},{categories:n,subcategories:i,name:De,tradetypes:He}))).then((function(e){e.error||(B(""),M(""),V(""),L(""),ee(""),ie(""),oe(""),he(""),be([]),Ze([]),Te(""),a("../"))}))};return(0,i.useEffect)((function(){e((0,y.pq)()),e((0,k.qT)())}),[e]),(0,i.useEffect)((function(){g&&e((0,y.fw)())}),[g,e]),(0,i.useEffect)((function(){e((0,w.tG)())}),[e]),(0,i.useEffect)((function(){C&&e((0,w.mo)())}),[e,C]),(0,h.jsxs)("div",{className:"w-full h-screen bg-white flex flex-col overflow-scroll",children:[(0,h.jsx)("div",{className:"container m-auto",children:(0,h.jsxs)("div",{className:"container m-auto flex lg:flex-row",children:[(0,h.jsx)("div",{className:"lg:w-1/2  hidden lg:block",children:(0,h.jsx)("div",{className:"flex flex-col items-center justify-center h-full text-neutral-700",children:(0,h.jsx)(u.rU,{onClick:function(e){F(e.target.name)},name:"sign-up",to:"/sign-up",className:"font-semibold text-xl cursor-pointer text-center py-2 px-4 my-3 w-full  ".concat("sign-up"===U&&"bg-white-900 shadow"," "),children:d.buyurtmachi})})}),(0,h.jsxs)("div",{className:"lg:w-1/2 w-full",children:[(0,h.jsx)(l.j3,{}),(0,h.jsxs)(l.Z5,{children:[(0,h.jsx)(l.AW,{path:"/",element:(0,h.jsx)(f,{translations:d,firstname:I,lastname:A,email:O,password:J,confirmPassword:Q,phone:ne,region:se,district:de,changeHandler:Ie,selectRegion:Be,selectDistrict:Ee,regions:x,districts:ge,enterHandler:Pe,submitHandler:Ae,loading:S})}),(0,h.jsx)(l.AW,{path:"business",element:(0,h.jsx)(v,{translations:d,firstname:I,lastname:A,email:O,password:J,confirmPassword:Q,phone:ne,region:se,district:de,changeHandler:Ie,selectRegion:Be,selectDistrict:Ee,regions:x,districts:ge,enterHandler:Pe,submitHandler:Ae,loading:S,categoriesWithSubcategories:N,categories:ye,selectCategory:function(e){be(e);var a=[];(0,s.forEach)(e,(function(e){return a.push.apply(a,(0,c.Z)(e.subcategories))})),Se(a),function(e){var a=(0,s.filter)(ke,(function(a){return(0,s.some)(e,["value",a.category])}));Ze(a)}(e)},subcategories:ke,allSubcategories:Ce,selectSubcategory:function(e){Ze(e)},name:De,tradetypes:z,changeTradeTypes:function(e){var a=e.target.value,t=e.target.checked,n=(0,s.filter)(He,(function(e){return e!==a}));Ke(t?[].concat((0,c.Z)(n),[a]):(0,c.Z)(n))},tradeTypes:He})}),(0,h.jsx)(l.AW,{path:"*",element:(0,h.jsx)(l.Fg,{to:"/",replace:!0})})]})]})]})}),(0,h.jsx)("div",{className:"bottom-0 bg-white-900 w-full",children:(0,h.jsxs)("div",{className:"container m-auto text-center",children:["By"," ",(0,h.jsx)(u.rU,{to:"/",className:"py-4 inline-block text-blue-500 cursor-pointer underline",children:"Alo24"})]})})]})},C=t.p+"static/media/login.ffa8c7860035d53c8ca4.png",S=function(){var e=(0,r.I0)(),a=(0,l.s0)(),t=(0,Z.$)(["common"]).t,s=(0,_.F)(t),c=s.telefon_raqam,g=s.parol,f=s.kirish,p=s.tizimda_yangimisiz_unda_avval,v=s.royxatdan_oting,y=(0,r.v9)((function(e){return e.login})).loading,j=(0,i.useState)(""),w=(0,n.Z)(j,2),k=w[0],N=w[1],S=(0,i.useState)(""),z=(0,n.Z)(S,2),q=z[0],D=z[1],T=function(e){var a=e.target.name,t=e.target.value;"password"===a&&N(t),"phone"===a&&D(t)},U=function(e){e.preventDefault(),"Enter"===e.key&&F()},F=function(){var t={password:k,phone:q};e((0,b.zB)((0,o.Z)({},t))).then((function(e){e.error||a("/")}))};return(0,h.jsxs)("div",{className:"w-full h-screen bg-white flex flex-col ",children:[(0,h.jsxs)("div",{className:"container flex",children:[(0,h.jsx)("div",{className:"lg:w-1/2  hidden lg:block",children:(0,h.jsx)("div",{className:"flex justify-center",children:(0,h.jsx)("img",{src:C,alt:"login",width:"70%"})})}),(0,h.jsx)("div",{className:"lg:w-1/2 w-full py-6",children:(0,h.jsxs)("div",{className:"flex flex-col items-center justify-center h-full bg-white-900 md:px-10 md:py-5 rounded md:mx-20 md:shadow md:shadow-xl",children:[(0,h.jsx)(d.Z,{isDisabled:y,placeholder:"+998 97 366 62 21",type:"text",label:c,value:q,onChange:T,name:"phone",onKeyUp:U}),(0,h.jsx)(d.Z,{isDisabled:y,placeholder:"* * * * * *",type:"password",label:g,onKeyUp:U,name:"password",value:k,onChange:T}),(0,h.jsx)(m,{title:f,onClick:F,isDisabled:y}),(0,h.jsx)(x,{label:p,title:v,link:"/sign-up"})]})})]}),(0,h.jsx)("div",{className:"bottom-0 bg-white-900 w-full",children:(0,h.jsxs)("div",{className:"container m-auto text-center",children:["By"," ",(0,h.jsx)(u.rU,{to:"/",className:"py-4 inline-block text-blue-500 cursor-pointer underline",children:"Alo24"})]})})]})},z={path:"*",element:(0,h.jsx)(l.Fg,{to:"/",replace:!0})},q=(0,i.lazy)((function(){return Promise.all([t.e(948),t.e(465),t.e(442)]).then(t.bind(t,2299))})),D=(0,i.lazy)((function(){return Promise.all([t.e(948),t.e(48),t.e(465),t.e(767)]).then(t.bind(t,7767))})),T=(0,i.lazy)((function(){return Promise.all([t.e(948),t.e(48),t.e(952),t.e(465),t.e(577)]).then(t.bind(t,9577))})),U=(0,i.lazy)((function(){return Promise.all([t.e(317),t.e(777)]).then(t.bind(t,4777))})),F=(0,i.lazy)((function(){return Promise.all([t.e(48),t.e(667)]).then(t.bind(t,9667))})),H=(0,i.lazy)((function(){return Promise.all([t.e(948),t.e(48),t.e(952),t.e(856),t.e(465),t.e(878)]).then(t.bind(t,2525))})),K=(0,i.lazy)((function(){return Promise.all([t.e(948),t.e(48),t.e(952),t.e(856),t.e(465),t.e(528)]).then(t.bind(t,6528))})),I=(0,i.lazy)((function(){return t.e(912).then(t.bind(t,3912))})),B=(0,i.lazy)((function(){return Promise.all([t.e(605),t.e(950)]).then(t.bind(t,8950))})),E=(0,i.lazy)((function(){return Promise.all([t.e(605),t.e(275)]).then(t.bind(t,3275))})),P=[{path:"/",element:(0,h.jsx)(q,{})},{path:"/orders",element:(0,h.jsx)(D,{})},{path:"/orders/:id",element:(0,h.jsx)(B,{})},{path:"/products",element:(0,h.jsx)(T,{})},{path:"/products/:id",element:(0,h.jsx)(E,{})},{path:"/offers",element:(0,h.jsx)(U,{})},{path:"/organizations",element:(0,h.jsx)(F,{})},{path:"/sign-in",element:(0,h.jsx)(S,{})},{path:"/sign-up/*",element:(0,h.jsx)(N,{})},{path:"/profile/*",element:(0,h.jsx)(K,{})},{path:"/companyregister",element:(0,h.jsx)(I,{})},{path:"/organization",element:(0,h.jsx)(H,{})},z],A=function(){return(0,s.map)(P,(function(e){return(0,h.jsx)(l.AW,{exact:!0,path:e.path,element:e.element},(0,s.uniqueId)("route"))}))},M=t(1338),W=function(e){var a=e.title;return(0,h.jsx)(u.rU,{to:"/sign-in",class:"\r text-base\r font-medium\r text-white\r bg-white bg-opacity-20\r rounded-lg\r py-3\r px-6\r hover:bg-opacity-100 hover:text-dark\r signUpBtn\r duration-300\r ease-in-out\r ",children:a})},R=function(e){var a=e.navs;e.translations;return(0,h.jsx)("ul",{class:"blcok lg:flex",children:(0,s.map)(a,(function(e){return(0,h.jsx)("li",{class:"relative group",children:(0,h.jsx)(u.rU,{to:e.path,onClick:e.onClick,className:"\r ud-menu-scroll\r text-base text-dark\r lg:text-white\r lg:group-hover:opacity-70\r lg:group-hover:text-white\r group-hover:text-primary\r py-2\r lg:py-6 lg:inline-flex lg:px-0\r flex\r mx-8\r lg:mr-0\r ",children:e.name},(0,s.uniqueId)("navbar"))})}))})},O=t(71),V=[{name:"\u0417\u0430\u044f\u0432\u043a\u0438",path:"/orders",icon:(0,h.jsx)(O.Fkl,{size:20,color:"white"}),style:"mr-2",navStyle:"border-r"},{name:"\u0427\u0430\u0442",path:"/offers",icon:(0,h.jsx)(O.Fkl,{size:20,color:"white"}),style:"rotate-180 mr-2 mt-1"},{name:"\u0422\u043e\u0432\u0430\u0440\u044b",path:"/products",icon:(0,h.jsx)(O.Umv,{size:20,color:"white"}),style:"mr-2"},{name:"\u041f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u0438",path:"/organizations",icon:(0,h.jsx)(O.$oj,{size:20,color:"white"}),style:"mr-2",navStyle:"border-l"}],X=["offers"],$=function(e){var a=e.link,t=e.title,n=e.icon,i=e.onClick;return(0,h.jsxs)(u.rU,{onClick:i,to:a,className:"flex items-center text-neutral-700 text-sm",children:[(0,h.jsx)("span",{className:"pointer-events-none mr-3",children:n}),t]})},J=function(e){var a=e.toggleMenu;return(0,h.jsx)("ul",{className:"absolute bg-neutral-200 w-[200px] -left-20 rounded top-16",children:(0,s.map)(a,(function(e,a){return(0,h.jsx)("li",{className:"px-4 pb-2 pt-2 hover:bg-neutral-100  ".concat(0!==a&&"border-t border-white-900 "),children:(0,h.jsx)($,{icon:e.icon,link:e.link,title:e.title,onClick:e.onClick})},(0,s.uniqueId)("toggleMenu"))}))})},L=function(e){var a=e.changeHandler,t=e.navbarExpended,n=e.toggleMenu,i=e.user;return(0,h.jsxs)("div",{className:"relative ",children:[(0,h.jsx)("button",{onClick:a,className:"w-[50px] h-[50px] bg-neutral-500 rounded-full flex items-center justify-center border border-white-900",children:null!==i&&void 0!==i&&i.image?(0,h.jsx)("img",{src:i.image,alt:"avatar",className:"w-full h-full rounded-full"}):(null===i||void 0===i?void 0:i.firstname[0].toUpperCase())+(null===i||void 0===i?void 0:i.lastname[0].toUpperCase())}),t&&(0,h.jsx)(J,{toggleMenu:n})]})},Y=function(){var e,a,t=(0,r.I0)(),l=function(e){return{Buyurtmalar:e("Buyurtmalar"),Xabar:e("Xabar"),AloTrade:e("AloTrade"),Kompaniyalar:e("Kompaniyalar"),Profile:e("Profile"),kirish:e("kirish")}}((0,Z.$)(["common"]).t),s=(0,i.useState)(!1),o=(0,n.Z)(s,2),d=o[0],m=o[1],x=(0,i.useState)(V),g=(0,n.Z)(x,2),f=g[0],p=g[1],v=function(){m(!d)},y=(0,r.v9)((function(e){return e.login})),j=y.userData.user,w=y.logged,k=(e=function(){t((0,b.ni)()),m(!1)},a=v,[{link:"/profile/user",icon:(0,h.jsx)(O.FJ3,{}),title:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c",onClick:a},{link:"/",icon:(0,h.jsx)(O.qgu,{}),title:"\u0412\u044b\u0445\u043e\u0434",onClick:e}]);return(0,i.useEffect)((function(){p(w?V:(0,c.Z)(V.filter((function(e){return!X.includes(e.path.slice(1))}))))}),[w]),(0,h.jsx)("div",{class:"\r ud-header\r bg-[#03c1f6cc]\r z-40\r w-full\r flex\r items-center\r ",children:(0,h.jsx)("div",{class:"container",children:(0,h.jsxs)("div",{class:"flex -mx-4 items-center justify-between relative",children:[(0,h.jsx)("div",{class:"px-4 w-60 max-w-full",children:(0,h.jsx)(u.rU,{to:"/",class:"navbar-logo w-full block text-white text-center font-bold text-[32px] border-b-2 border-white",children:"alotrade"})}),(0,h.jsxs)("div",{class:"flex px-4 justify-between items-center w-full",children:[(0,h.jsxs)("div",{children:[(0,h.jsxs)("button",{id:"navbarToggler",class:"\r block\r absolute\r right-4\r top-1/2\r -translate-y-1/2\r lg:hidden\r focus:ring-2\r ring-primary\r px-3\r py-[6px]\r rounded-lg\r ",children:[(0,h.jsx)("span",{class:"relative w-[30px] h-[2px] my-[6px] block bg-white"}),(0,h.jsx)("span",{class:"relative w-[30px] h-[2px] my-[6px] block bg-white"}),(0,h.jsx)("span",{class:"relative w-[30px] h-[2px] my-[6px] block bg-white"})]}),(0,h.jsx)("nav",{id:"navbarCollapse",class:"\r absolute\r py-5\r lg:py-0 lg:px-4\r xl:px-6\r bg-white\r lg:bg-transparent\r shadow-lg\r rounded-lg\r max-w-[250px]\r w-full\r lg:max-w-full lg:w-full\r right-4\r top-full\r hidden\r lg:block lg:static lg:shadow-none\r ",children:(0,h.jsx)(R,{navs:f,translations:l})})]}),(0,h.jsx)("div",{class:"sm:flex justify-end hidden pr-16 lg:pr-0",children:j?(0,h.jsx)(L,{user:j,toggleMenu:k,navbarExpended:d,changeHandler:v}):(0,h.jsx)(W,{title:l.kirish})})]})]})})})},G=(t(5393),function(){var e=(0,r.I0)(),a=(0,l.TH)(),t=((0,r.v9)((function(e){return e.categories})).categoriesWithSubcategories,(0,r.v9)((function(e){return e.trade})).tradetypes,(0,r.v9)((function(e){return e.regions})).regions,(0,i.useState)(a.pathname.split("/")[1])),s=(0,n.Z)(t,2),o=(s[0],s[1]);return(0,i.useEffect)((function(){e((0,k.qT)()),e((0,w.tG)()),e((0,y.pq)())}),[e]),(0,i.useEffect)((function(){o(a.pathname.split("/")[1])}),[a.pathname]),(0,h.jsxs)("section",{className:"flex flex-col w-full h-screen max-h-screen",children:[(0,h.jsx)(Y,{}),(0,h.jsx)(i.Suspense,{fallback:(0,h.jsx)(M.Z,{}),children:(0,h.jsx)(l.Z5,{children:A()})})]})})},4397:function(e,a,t){t.d(a,{Z:function(){return r}});var n=t(9439),i=t(2791);function r(){var e=(0,i.useState)({width:null,height:null}),a=(0,n.Z)(e,2),t=a[0],r=a[1];return(0,i.useEffect)((function(){function e(){r({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),t}},9169:function(e,a,t){t.d(a,{F:function(){return n}});var n=function(e){return{Filter:e("Filter"),savdo_turi:e("Savdo turi"),kategoriyalar:e("Kategoriyalar"),davlatlar:e("Davlatlar"),nomi_bilan_qidirish:e("Nomi bilan qidirish"),kirish:e("kirish"),AloTrade:e("AloTrade"),Buyurtmalar:e("Buyurtmalar"),Xabar:e("Xabar"),Kompaniyalar:e("Kompaniyalar"),Profile:e("Profile"),telefon_raqam:e("Telefon raqam"),parol:e("Parol"),royxatdan_otish:e("Ro'yxatdan o'tish"),tizimda_yangimisiz_unda_avval:e("Tizimda yangimisiz? Unda avval"),royxatdan_oting:e("Ro'yxatdan o'ting"),foydalanuvchi_sifatida_royxatdan_otish:e("Foydalanuvchi sifatida ro'yxatdan o'tish"),kompaniya_sifatida_royxatdan_otish:e("Kompaniya sifatida ro'yxatdan o'tish"),tashkilot_sifatida_royxatdan_otish:e("Tashkilot sifatida ro'yxatdan o'tish"),shaxsiy_malumotlaringiz:e("Shaxsiy ma'lumotlaringiz"),tashkilot_malumotlari:e("Tashkilot ma'lumotlari"),savdo_turingizni_tanlang:e("Savdo turingizni tanlang"),ism:e("Ism"),familiya:e("Familiya"),telefon:e("Telefon"),email:e("Email"),parolni_takrorlang:e("Parolni takrorlang"),avval_royxatdan_otgan_bolsangiz:e("Avval ro'yxatdan o'tgan bo'lsangiz"),kirish_qismiga_qayting:e("kirish qismiga qayting"),davlat:e("Davlat"),viloyat:e("Viloyat"),kategoriya:e("Kategoriya"),kategoriya_turi:e("Kategoriya turi"),buyurtmachi:e("Buyurtmachi"),tashkilot_nomi:e("Tashkilot nomi"),buyurtma_berish:e("Buyurtma berish"),mahsulot_yaratish:e("Mahsulot yaratish"),tashkilot_yaratish:e("Tashkilot yaratish"),barcha_buyurtmalar:e("Barcha buyurtmalar"),jami_buyurtmalar:e("Jami buyurtmalar"),mening_buyurtmalarim:e("Mening buyurtmalarim"),sana:e("Sana"),buyurtma_holati:e("Buyurtma holati"),nomi:e("Nomi"),narxi:e("Narxi"),koproq_malumot:e("ko'proq ma'lumot"),yopish:e("yopish"),manzil:e("Manzil"),ta:e(" "),yakunlash:e("Yakunlash"),faollashtirish:e("Faollashtirish"),jami:e("Jami"),buyurtma_yaratish:e("Buyurtma yaratish"),buyurtmani_ochirish:e("Buyurtmani o'chirish"),siz_buyurtmani_ochirishni_xohlaysizmi:e("Siz rostdan ham buyurtmani o'chirmoqchimisiz?"),bekor_qilish:e("Bekor qilish"),ochirish:e("O'chirish"),kiruvchi_xabar:e("Kiruvchi xabar"),chiquvchi_xabar:e("Chiquvchi xabar"),tashkilot:e("Tashkilot"),foydalanuvchi:e("Foydalanuvchi"),xabarni_kiriting:e("Xabarni kiriting"),mahsulot_yoki_buyurtma_tanlanmagan:e("Mahsulot yoki buyurtma tanlanmagan"),jami_tashkilotlar:e("Jami tashkilotlar"),mahsulotlar:e("Mahsulotlar"),tashkilotlar:e("Tashkilotlar"),joriy_parol:e("Joriy parol"),yangi_parol:e("Yangi parol"),tasdiqlash:e("Tasdiqlash"),saqlash:e("Saqlash"),yangi_buyurtma:e("Yangi buyurtma"),mahsulot_yoki_xizmat_nomi:e("Mahsulot yoki xizmat nomi"),qoshimcha_malumot:e("Qo'shimcha ma'lumot"),izoh:e("Izoh"),tolov_turi:e("To'lov turi"),active:e("active"),unactive:e("unactive"),aloqa_malumotlari:e("Aloqa ma'lumotlari"),tashkilot_haqida:e("Tashkilot haqida")}}}}]);
//# sourceMappingURL=133.c182c389.chunk.js.map