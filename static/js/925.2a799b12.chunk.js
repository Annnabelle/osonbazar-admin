"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[925],{4166:(e,a,s)=>{s.d(a,{Bq:()=>d,WF:()=>i,hb:()=>c,v1:()=>l});var t=s(7822);const i=e=>async a=>{try{a({type:"get_orders",payload:await t.A.getOrders(e)})}catch(s){console.log(s)}},l=()=>async e=>{try{e({type:"get_order_statistic",payload:await t.A.getOrderStatistic()})}catch(a){console.log(a)}},c=e=>async a=>{try{a({type:"get_stream_order_statistic",payload:await t.A.getStreamStatistic(e)})}catch(s){console.log(s)}},d=()=>async e=>{try{e({type:"get_stream_order_total",payload:await t.A.getOrderTotal()})}catch(a){console.log(a)}}},5925:(e,a,s)=>{s.r(a),s.d(a,{default:()=>m});var t=s(5043),i=s(9456),l=s(3216),c=s(5475),d=s(4166),r=s(579);const n=e=>{var a;let{card:s}=e;return(0,r.jsxs)("div",{className:"order-card",children:[(0,r.jsxs)("div",{className:"d-flex flex-md-nowrap flex-wrap gap-2 align-items-center justify-content-between",children:[(0,r.jsxs)("div",{className:"d-flex align-items-center gap-2",children:["ID: ",(0,r.jsxs)("div",{className:"bg-success text-white px-2 py-1 rounded",children:["#",null===s||void 0===s?void 0:s.id]})]}),(0,r.jsxs)("div",{className:"d-flex align-items-center text-end gap-2",children:["Vaqti: ",(0,r.jsx)("div",{className:"text-black",children:null===s||void 0===s?void 0:s.created_at})]})]}),(0,r.jsx)("div",{className:"d-flex align-items-center justify-content-between",children:(0,r.jsxs)("div",{className:"d-flex align-items-center gap-2",children:["Mijoz: ",(0,r.jsx)("div",{className:"text-black",children:null===s||void 0===s||null===(a=s.user)||void 0===a?void 0:a.first_name})]})}),(0,r.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[(0,r.jsxs)("div",{className:"d-flex align-items-center gap-2",children:["Operator: ",(0,r.jsx)("div",{className:"text-danger",children:"Operator olmagan"})]}),(0,r.jsxs)("div",{className:"d-flex align-items-center gap-2",children:["Holati:"," ",(0,r.jsx)("div",{className:"border border-primary rounded-pill text-primary py-1 px-2",children:null===s||void 0===s?void 0:s.status})]})]}),(0,r.jsx)("div",{className:"d-flex align-items-center justify-content-between",children:(0,r.jsxs)("div",{className:"d-flex align-items-center gap-2",children:["Manzil: ",(0,r.jsx)("div",{className:"text-success",children:null===s||void 0===s?void 0:s.province})]})})]})},o=[{id:1,name:"Yangi",value:"Yangi"},{id:2,name:"Qayta qo`ng`iroq",value:"qayta_qongiroq"},{id:3,name:"Dostavkaga tayyor",value:"dostavkaga_tayyor"},{id:4,name:"Yo`lda",value:"yolda"},{id:5,name:"Yetkazildi",value:"yetkazildi"},{id:6,name:"Qaytib keldi",value:"qaytib_keldi"},{id:7,name:"Arxiv",value:"arxiv"}],m=()=>{var e;const a=(0,i.wA)(),s=(0,l.zy)(),m=new URLSearchParams(s.search),v=m.get("status")||"Yangi",u=m.get("offset")||0,x=m.get("limit")||25,g=(0,i.d4)((e=>{var a;return null===(a=e.order.orders)||void 0===a?void 0:a.data}));let p=Math.ceil(+(null===g||void 0===g?void 0:g.count)/+x);const[h,y]=(0,t.useState)({limit:x,offset:u,status:v});return(0,t.useEffect)((()=>{y((()=>({status:v,offset:0,limit:x})))}),[v]),(0,t.useEffect)((()=>{a((0,d.WF)(h))}),[h]),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"card mb-4",children:(0,r.jsx)("div",{className:"card-body",children:(0,r.jsx)("ul",{className:"nav nav-pills nav-fill overflow-x-auto flex-nowrap",children:o.map((e=>(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(c.N_,{className:"nav-link ".concat(v===e.value&&"active"),style:{whiteSpace:"nowrap"},"aria-current":"page",to:"?status=".concat(e.value,"&page=1&limit=12"),children:e.name})},e.id)))})})}),(0,r.jsx)("div",{className:"card",children:(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsx)("div",{className:"fw-bold fs-4 mb-3",children:"Buyurtmalar"}),(0,r.jsx)("div",{className:"stream-cards",children:null===g||void 0===g||null===(e=g.results)||void 0===e?void 0:e.map(((e,a)=>(0,r.jsx)(n,{card:e},a)))}),0!==(null===g||void 0===g?void 0:g.count)&&(0,r.jsx)("nav",{"aria-label":"Page navigation example",children:(0,r.jsx)("ul",{className:"pagination justify-content-center mt-4",children:p>0&&[...Array(p)].map(((e,a)=>(0,r.jsx)("li",{className:"page-item",children:(0,r.jsx)(c.N_,{className:"page-link",to:"?status=".concat(v,"&offset=").concat(25*a,"&limit=25"),children:a+1})},a)))})})]})})]})}}}]);
//# sourceMappingURL=925.2a799b12.chunk.js.map