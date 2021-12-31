(this.webpackJsonpspeechly=this.webpackJsonpspeechly||[]).push([[0],{351:function(e,t,a){},352:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(11),r=a.n(o),i=a(21),s=a(24),u=a(19),l=function(e,t){var a;switch(t.type){case"DELETE_TRANSACTION":return a=e.filter((function(e){return e.id!==t.payload})),localStorage.setItem("transactions",JSON.stringify(a)),a;case"ADD_TRANSACTION":return a=[t.payload].concat(Object(u.a)(e)),localStorage.setItem("transactions",JSON.stringify(a)),a;default:return e}},d=a(4),j=JSON.parse(localStorage.getItem("transactions"))||[{amount:500,category:"Salary",type:"Income",date:"2020-11-16",id:"44c68123-5b86-4cc8-b915-bb9e16cebe6a"},{amount:225,category:"Investments",type:"Income",date:"2020-11-16",id:"33b295b8-a8cb-49f0-8f0d-bb268686de1a"},{amount:50,category:"Salary",type:"Income",date:"2020-11-13",id:"270304a8-b11d-4e16-9341-33df641ede64"},{amount:123,category:"Car",type:"Expense",date:"2020-11-16",id:"0f72e66e-e144-4a72-bbc1-c3c92018635e"},{amount:50,category:"Pets",type:"Expense",date:"2020-11-13",id:"c5647dde-d857-463d-8b4e-1c866cc5f83e"},{amount:500,category:"Travel",type:"Expense",date:"2020-11-13",id:"365a4ebd-9892-4471-ad55-36077e4121a9"},{amount:50,category:"Investments",type:"Income",date:"2020-11-23",id:"80cf7e33-fc3e-4f9f-a2aa-ecf140711460"},{amount:500,category:"Savings",type:"Income",date:"2020-11-23",id:"ef090181-21d1-4568-85c4-5646232085b2"},{amount:5,category:"Savings",type:"Income",date:"2020-11-23",id:"037a35a3-40ec-4212-abe0-cc485a98aeee"}],b=Object(n.createContext)(j),m=function(e){var t=e.children,a=Object(n.useReducer)(l,j),c=Object(s.a)(a,2),o=c[0],r=c[1],i=o.reduce((function(e,t){return"Expense"===t.type?e-t.amount:e+t.amount}),0);return Object(d.jsx)(b.Provider,{value:{transactions:o,balance:i,deleteTransaction:function(e){r({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){r({type:"ADD_TRANSACTION",payload:e})}},children:t})},p=a(399),O=a(107),x=a(393),f=a(395),y=a(396),h=a(41),g=a(160),v=a(390),C=Object(v.a)((function(){return{income:{borderBottom:"10px solid rgba(0, 255, 0, 0.5)"},expense:{borderBottom:"10px solid rgba(255, 0, 0, 0.5)"}}})),I=["#123123","#154731","#165f40","#16784f","#14915f","#10ac6e","#0bc77e","#04e38d","#00ff9d"],T=["#b50d12","#bf2f1f","#c9452c","#d3583a","#dc6a48","#e57c58","#ee8d68","#f79d79","#ffae8a","#cc474b","#f55b5f"],E=[{type:"Business",amount:0,color:I[0]},{type:"Investments",amount:0,color:I[1]},{type:"Extra income",amount:0,color:I[2]},{type:"Deposits",amount:0,color:I[3]},{type:"Lottery",amount:0,color:I[4]},{type:"Gifts",amount:0,color:I[5]},{type:"Salary",amount:0,color:I[6]},{type:"Savings",amount:0,color:I[7]},{type:"Rental income",amount:0,color:I[8]}],N=[{type:"Bills",amount:0,color:T[0]},{type:"Car",amount:0,color:T[1]},{type:"Clothes",amount:0,color:T[2]},{type:"Travel",amount:0,color:T[3]},{type:"Food",amount:0,color:T[4]},{type:"Shopping",amount:0,color:T[5]},{type:"House",amount:0,color:T[6]},{type:"Entertainment",amount:0,color:T[7]},{type:"Phone",amount:0,color:T[8]},{type:"Pets",amount:0,color:T[9]},{type:"Other",amount:0,color:T[10]}],S=function(e){E.forEach((function(e){return e.amount=0})),N.forEach((function(e){return e.amount=0}));var t=Object(n.useContext)(b).transactions.filter((function(t){return t.type===e})),a=t.reduce((function(e,t){return e+t.amount}),0),c="Income"===e?E:N;t.forEach((function(e){var t=c.find((function(t){return t.type===e.category}));t&&(t.amount+=e.amount)}));var o=c.filter((function(e){return e.amount>0})),r={datasets:[{data:o.map((function(e){return e.amount})),backgroundColor:o.map((function(e){return e.color}))}],labels:o.map((function(e){return e.type}))};return{filteredCategories:o,total:a,chartData:r}},k=function(e){var t=e.title,a=e.subheader,n=S(t),c=n.total,o=n.chartData,r=C();return Object(d.jsxs)(x.a,{className:"Income"===t?r.income:r.expense,children:[Object(d.jsx)(f.a,{title:t,subheader:a}),Object(d.jsxs)(y.a,{children:[Object(d.jsxs)(h.a,{variant:"h5",children:["$",c]}),Object(d.jsx)(g.Doughnut,{data:o})]})]})},w=a(412),D=Object(v.a)((function(e){return{media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},cartContent:{paddingTop:0},divider:{margin:"20px 0"}}})),A=a(12),B=a(400),P=a(416),R=a(413),_=a(404),F=a(418),J=a(405),L=a(129),W=a(415),$=a(414),H=Object(v.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),M=function(e){var t=e.open,a=e.setOpen,n=H(),c=function(e,t){"clickaway"!==t&&a(!1)};return Object(d.jsx)("div",{className:n.root,children:Object(d.jsx)(W.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:t,autoHideDuration:6e3,onClose:c,children:Object(d.jsx)($.a,{onClose:c,severity:"success",elevation:6,variant:"filled",children:"Transaction successfully created."})})})},G=function(e){var t=new Date(e),a="".concat(t.getMonth()+1),n="".concat(t.getDate()),c=t.getFullYear();return a.length<2&&(a="0".concat(a)),n.length<2&&(n="0".concat(n)),[c,a,n].join("-")},z=Object(v.a)((function(){return{radioGroup:{display:"flex",justifyContent:"center",marginBottom:"-10px"},button:{marginTop:"20px"}}})),U={amount:"",category:"",type:"Income",date:G(new Date)},V=function(){var e=z(),t=Object(n.useContext)(b).addTransaction,a=Object(n.useState)(U),o=Object(s.a)(a,2),r=o[0],u=o[1],l=Object(i.useSpeechContext)().segment,j=c.a.useState(!1),m=Object(s.a)(j,2),O=m[0],x=m[1],f=function(){!Number.isNaN(Number(r.amount))&&r.date.includes("-")&&(E.map((function(e){return e.type})).includes(r.category)?u(Object(A.a)(Object(A.a)({},r),{},{type:"Income"})):N.map((function(e){return e.type})).includes(r.category)&&u(Object(A.a)(Object(A.a)({},r),{},{type:"Expense"})),x(!0),t(Object(A.a)(Object(A.a)({},r),{},{amount:Number(r.amount),id:Object(L.a)()})),u(U))};Object(n.useEffect)((function(){if(l){if("add_expense"===l.intent.intent)u(Object(A.a)(Object(A.a)({},r),{},{type:"Expense"}));else if("add_income"===l.intent.intent)u(Object(A.a)(Object(A.a)({},r),{},{type:"Income"}));else{if(l.isFinal&&"create_transaction"===l.intent.intent)return f();if(l.isFinal&&"cancel_transaction"===l.intent.intent)return u(U)}l.entities.forEach((function(e){var t="".concat(e.value.charAt(0)).concat(e.value.slice(1).toLowerCase());switch(e.type){case"amount":u(Object(A.a)(Object(A.a)({},r),{},{amount:e.value}));break;case"category":E.map((function(e){return e.type})).includes(t)?u(Object(A.a)(Object(A.a)({},r),{},{type:"Income",category:t})):N.map((function(e){return e.type})).includes(t)&&u(Object(A.a)(Object(A.a)({},r),{},{type:"Expense",category:t}));break;case"date":u(Object(A.a)(Object(A.a)({},r),{},{date:e.value}))}})),l.isFinal&&r.amount&&r.category&&r.type&&r.date&&f()}}),[l]);var y="Income"===r.type?E:N;return Object(d.jsxs)(p.a,{container:!0,spacing:2,children:[Object(d.jsx)(M,{open:O,setOpen:x}),Object(d.jsx)(p.a,{item:!0,xs:12,children:Object(d.jsx)(h.a,{align:"center",variant:"subtitle2",gutterBottom:!0,children:l?Object(d.jsx)("div",{className:"segment",children:l.words.map((function(e){return e.value})).join(" ")}):null})}),Object(d.jsx)(p.a,{item:!0,xs:6,children:Object(d.jsxs)(B.a,{fullWidth:!0,children:[Object(d.jsx)(P.a,{children:"Type"}),Object(d.jsxs)(R.a,{value:r.type,onChange:function(e){return u(Object(A.a)(Object(A.a)({},r),{},{type:e.target.value}))},children:[Object(d.jsx)(_.a,{value:"Income",children:"Income"}),Object(d.jsx)(_.a,{value:"Expense",children:"Expense"})]})]})}),Object(d.jsx)(p.a,{item:!0,xs:6,children:Object(d.jsxs)(B.a,{fullWidth:!0,children:[Object(d.jsx)(P.a,{children:"Category"}),Object(d.jsx)(R.a,{value:r.category,onChange:function(e){return u(Object(A.a)(Object(A.a)({},r),{},{category:e.target.value}))},children:y.map((function(e){return Object(d.jsx)(_.a,{value:e.type,children:e.type},e.type)}))})]})}),Object(d.jsx)(p.a,{item:!0,xs:6,children:Object(d.jsx)(F.a,{type:"number",label:"Amount",value:r.amount,onChange:function(e){return u(Object(A.a)(Object(A.a)({},r),{},{amount:e.target.value}))},fullWidth:!0})}),Object(d.jsx)(p.a,{item:!0,xs:6,children:Object(d.jsx)(F.a,{fullWidth:!0,label:"Date",type:"date",value:r.date,onChange:function(e){return u(Object(A.a)(Object(A.a)({},r),{},{date:G(e.target.value)}))}})}),Object(d.jsx)(J.a,{className:e.button,variant:"outlined",color:"primary",fullWidth:!0,onClick:f,children:"Create"})]})},Y=a(403),q=a(406),K=a(355),Q=a(407),X=a(419),Z=a(409),ee=a(410),te=a(398),ae=a(408),ne=a(411),ce=a(81),oe=a(80),re=Object(v.a)((function(e){return{avatarIncome:{color:"#fff",backgroundColor:ce.a[500]},avatarExpense:{color:e.palette.getContrastText(oe.a[500]),backgroundColor:oe.a[500]},list:{maxHeight:"150px",overflow:"auto"}}})),ie=function(){var e=re(),t=Object(n.useContext)(b),a=t.transactions,c=t.deleteTransaction;return Object(d.jsx)(Y.a,{dense:!1,className:e.list,children:a.map((function(t){return Object(d.jsx)(q.a,{direction:"down",in:!0,mountOnEnter:!0,unmountOnExit:!0,children:Object(d.jsxs)(K.a,{children:[Object(d.jsx)(Q.a,{children:Object(d.jsx)(X.a,{className:"Income"===t.type?e.avatarIncome:e.avatarExpense,children:Object(d.jsx)(ae.a,{})})}),Object(d.jsx)(Z.a,{primary:t.category,secondary:"$".concat(t.amount," - ").concat(t.date)}),Object(d.jsx)(ee.a,{children:Object(d.jsx)(te.a,{edge:"end","aria-label":"delete",onClick:function(){return c(t.id)},children:Object(d.jsx)(ne.a,{})})})]})},t.id)}))})},se=Math.round(Math.random()),ue=function(){return Object(d.jsxs)("div",{elevation:3,style:{textAlign:"center",padding:"0 10%"},children:["Try saying: ",Object(d.jsx)("br",{}),"Add ",se?"Income ":"Expense ","for ",se?"$100 ":"$50 ","in Category ",se?"Salary ":"Travel ","for ",se?"Monday ":"Thursday "]})},le=function(){var e=D(),t=Object(n.useContext)(b).balance;return Object(d.jsxs)(x.a,{className:e.root,children:[Object(d.jsx)(f.a,{title:"Expense Tracker",subheader:"Powered by Speechly"}),Object(d.jsxs)(y.a,{children:[Object(d.jsxs)(h.a,{align:"center",variant:"h5",children:["Total Balance $",t]}),Object(d.jsx)(h.a,{variant:"subtitle1",style:{lineHeight:"1.5em",marginTop:"20px"},children:Object(d.jsx)(ue,{})}),Object(d.jsx)(w.a,{className:e.divider}),Object(d.jsx)(V,{})]}),Object(d.jsx)(y.a,{className:e.cartContent,children:Object(d.jsx)(p.a,{container:!0,spacing:2,children:Object(d.jsx)(p.a,{item:!0,xs:12,children:Object(d.jsx)(ie,{})})})})]})},de=a(10),je=Object(v.a)((function(e){return{desktop:Object(de.a)({},e.breakpoints.up("sm"),{display:"none"}),mobile:Object(de.a)({},e.breakpoints.down("sm"),{display:"none"}),main:Object(de.a)({},e.breakpoints.up("sm"),{paddingBottom:"5%"}),last:Object(de.a)({},e.breakpoints.down("sm"),{marginBottom:e.spacing(3),paddingBottom:"200px"}),grid:{"& > *":{margin:e.spacing(2)}}}})),be=function(){var e=je(),t=Object(i.useSpeechContext)().speechState,a=Object(n.useRef)(null);return Object(n.useEffect)((function(){t===i.SpeechState.Recording&&a.current.scrollIntoView()}),[t]),Object(d.jsx)("div",{children:Object(d.jsxs)(p.a,{className:e.grid,container:!0,spacing:0,alignItems:"center",justify:"center",style:{height:"100vh"},children:[Object(d.jsx)(p.a,{item:!0,xs:12,sm:4,className:e.mobile,children:Object(d.jsx)(k,{title:"Income"})}),Object(d.jsx)(p.a,{ref:a,item:!0,xs:12,sm:3,className:e.main,children:Object(d.jsx)(le,{})}),Object(d.jsx)(p.a,{item:!0,xs:12,sm:4,className:e.desktop,children:Object(d.jsx)(k,{title:"Income"})}),Object(d.jsx)(p.a,{item:!0,xs:12,sm:4,className:e.last,children:Object(d.jsx)(k,{title:"Expense"})}),Object(d.jsx)(O.PushToTalkButtonContainer,{children:Object(d.jsx)(O.PushToTalkButton,{})})]})})};a(351);r.a.render(Object(d.jsx)(i.SpeechProvider,{appId:"7c4aee08-1073-4a32-b862-ebe1850e0732",language:"en-US",children:Object(d.jsx)(m,{children:Object(d.jsx)(be,{})})}),document.getElementById("root"))}},[[352,1,2]]]);
//# sourceMappingURL=main.f30a0337.chunk.js.map