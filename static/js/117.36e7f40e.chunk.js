"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[117],{6418:(e,a,n)=>{n.d(a,{W:()=>s});var l=n(7822);const s=e=>async a=>{try{a({type:"get_transaction_admin",payload:await l.A.getTransactionAdmin(e)})}catch(n){console.log(n)}}},5485:(e,a,n)=>{n.d(a,{A:()=>s});n(5043);var l=n(579);const s=e=>{var a,n;let{card:s}=e;const i=null===s||void 0===s||null===(a=s.card)||void 0===a?void 0:a.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/,"$1 $2 $3 $4");return(0,l.jsxs)("div",{className:"order-card",children:[(0,l.jsx)("div",{className:"d-flex align-items-center justify-content-between",children:(0,l.jsxs)("div",{className:"d-flex align-items-center gap-2",children:["Karta raqam:"," ",(0,l.jsx)("div",{className:"bg-success text-white px-2 py-1 rounded",children:i})]})}),(0,l.jsx)("div",{className:"d-flex align-items-center justify-content-between",children:(0,l.jsxs)("div",{className:"d-flex align-items-center gap-2",children:["Summa: ",(0,l.jsxs)("div",{className:"text-success",children:[null===s||void 0===s||null===(n=s.amount)||void 0===n?void 0:n.toLocaleString("ru-RU")," UZS"]})]})}),(0,l.jsx)("div",{className:"d-flex align-items-center justify-content-between",children:(0,l.jsxs)("div",{className:"d-flex align-items-center gap-2",children:["Holati:"," ",(0,l.jsx)("div",{className:"border border-primary rounded-pill text-primary py-1 px-2",children:null===s||void 0===s?void 0:s.status})]})})]})}},3546:(e,a,n)=>{n.d(a,{A:()=>m});var l=n(3946),s=n(5043),i=n(9456),t=n(2145),r=n(1342),o=n(7822);var d=n(6418),c=n(579);const m=e=>{let{show:a,handleClose:n}=e;const m=(0,i.wA)(),[u,h]=(0,s.useState)({card:"",amount:null});return(0,c.jsx)("div",{children:(0,c.jsxs)(l.zS,{visible:a,onClose:n,children:[(0,c.jsx)(l.E4,{onClose:n,children:(0,c.jsx)(l.lb,{children:"Ariza yaratish"})}),(0,c.jsxs)(l.Tc,{children:[(0,c.jsx)("div",{children:"Karta raqam"}),(0,c.jsx)("input",{onChange:e=>h((a=>({...a,card:e.target.value}))),value:u.card,type:"text",className:"form-control mb-2",placeholder:"Karta raqam"}),(0,c.jsx)("div",{children:"Summa"}),(0,c.jsx)("input",{onChange:e=>h((a=>({...a,amount:+e.target.value}))),value:u.amount,type:"number",className:"form-control mb-2",placeholder:"Summa"})]}),(0,c.jsxs)(l.If,{children:[(0,c.jsx)(l.Q_,{color:"secondary",onClick:n,children:"Yopish"}),(0,c.jsx)(l.Q_,{color:"primary",onClick:async()=>{await(async e=>{try{return await r.A.post("/user/create-application-admin/",(0,o.Z)(e))}catch(a){console.log(a)}})(u).then((e=>{let{data:a}=e;t.oR.success("Ariza yuborildi"),m((0,d.W)()),n(),h((e=>({...e,card:"",amount:null})))})).catch((e=>{let{response:a}=e;if(null!==a&&void 0!==a&&a.data)for(const[n,l]of Object.entries(null===a||void 0===a?void 0:a.data))t.oR.error("".concat(n,": ").concat(l))}))},children:"Jo`natish"})]})]})})}},5117:(e,a,n)=>{n.r(a),n.d(a,{default:()=>_});var l=n(3946),s=n(5043),i=n(9456),t=n(3216),r=n(5475),o=n(5485),d=n(3546),c=n(2145),m=n(4564),u=n(579);const h=e=>{let{show:a,handleClose:n}=e;const t=(0,i.wA)(),r=(0,i.d4)((e=>{var a;return null===(a=e.auth.profile)||void 0===a?void 0:a.data})),[o,d]=(0,s.useState)({first_name:null===r||void 0===r?void 0:r.first_name,last_name:null===r||void 0===r?void 0:r.last_name,phone_number:null===r||void 0===r?void 0:r.phone_number,password:"",image:"",telegram_id:""});(0,s.useEffect)((()=>{d({first_name:null===r||void 0===r?void 0:r.first_name,last_name:null===r||void 0===r?void 0:r.last_name,phone_number:null===r||void 0===r?void 0:r.phone_number,password:"",image:"",telegram_id:null===r||void 0===r?void 0:r.telegram_id})}),[r]);const h=e=>{const{name:a,value:n}=e.target;d((e=>({...e,[a]:n})))};return(0,u.jsx)("div",{children:(0,u.jsxs)(l.zS,{visible:a,onClose:n,children:[(0,u.jsx)(l.E4,{onClose:n,children:(0,u.jsx)(l.lb,{children:"Profilni o`zgartirish"})}),(0,u.jsxs)(l.Tc,{children:[(0,u.jsx)("div",{className:"mb-1",children:"Ism"}),(0,u.jsx)("input",{type:"text",name:"first_name",onChange:h,value:o.first_name,className:"form-control mb-2",placeholder:"Ism"}),(0,u.jsx)("div",{className:"mb-1",children:"Familiya"}),(0,u.jsx)("input",{type:"text",name:"last_name",onChange:h,value:o.last_name,className:"form-control mb-2",placeholder:"Familiya"}),(0,u.jsx)("div",{className:"mb-1",children:"Telefon raqam"}),(0,u.jsx)("input",{type:"tel",name:"phone_number",onChange:h,value:o.phone_number,className:"form-control mb-2",placeholder:"Telefon raqam"}),(0,u.jsx)("div",{className:"mb-1",children:"Telegram id"}),(0,u.jsx)("input",{type:"text",name:"telegram_id",onChange:h,value:o.telegram_id,className:"form-control mb-2",placeholder:"Telegram id"}),(0,u.jsx)("div",{className:"mb-1",children:"Parol"}),(0,u.jsx)("input",{type:"text",name:"password",onChange:h,value:o.password,className:"form-control mb-2",placeholder:"Parol"}),(0,u.jsx)("div",{className:"mb-1",children:"Rasm"}),(0,u.jsx)("input",{type:"file",onChange:e=>{const a=e.target.files[0];d((e=>({...e,image:a})))},className:"form-control mb-2"})]}),(0,u.jsxs)(l.If,{children:[(0,u.jsx)(l.Q_,{color:"secondary",onClick:n,children:"Yopish"}),(0,u.jsx)(l.Q_,{color:"primary",onClick:async()=>{o.image&&!o.password?await(0,m.L$)({first_name:o.first_name,last_name:o.last_name,phone_number:o.phone_number,image:o.image,telegram_id:o.telegram_id}).then((()=>{d({first_name:"",last_name:"",phone_number:"",telegram_id:"",image:""}),n(),t((0,m.E$)())})).catch((e=>{let{response:a}=e;if(null!==a&&void 0!==a&&a.data)for(const[n,l]of Object.entries(null===a||void 0===a?void 0:a.data))c.oR.error("".concat(n,": ").concat(l))})):!o.image&&o.password?await(0,m.L$)({first_name:o.first_name,last_name:o.last_name,phone_number:o.phone_number,password:o.password,telegram_id:o.telegram_id}).then((()=>{d({first_name:"",last_name:"",phone_number:"",telegram_id:"",password:""}),n(),t((0,m.E$)())})).catch((e=>{let{response:a}=e;if(null!==a&&void 0!==a&&a.data)for(const[n,l]of Object.entries(null===a||void 0===a?void 0:a.data))c.oR.error("".concat(n,": ").concat(l))})):o.image&&o.password?await(0,m.r7)(o).then((()=>{d({first_name:"",last_name:"",phone_number:"",password:"",telegram_id:"",image:""}),n(),t((0,m.E$)())})).catch((e=>{let{response:a}=e;if(null!==a&&void 0!==a&&a.data)for(const[n,l]of Object.entries(null===a||void 0===a?void 0:a.data))c.oR.error("".concat(n,": ").concat(l))})):o.image||o.password||await(0,m.L$)({first_name:o.first_name,last_name:o.last_name,phone_number:o.phone_number,telegram_id:o.telegram_id}).then((()=>{d({first_name:"",last_name:"",phone_number:"",password:"",telegram_id:"",image:""}),n(),t((0,m.E$)())})).catch((e=>{let{response:a}=e;if(null!==a&&void 0!==a&&a.data)for(const[n,l]of Object.entries(null===a||void 0===a?void 0:a.data))c.oR.error("".concat(n,": ").concat(l))}))},children:"Jo`natish"})]})]})})};var v=n(5445),p=n(6418);const _=()=>{var e,a;const n=(0,i.wA)(),c=(0,i.d4)((e=>{var a;return null===(a=e.auth.profile)||void 0===a?void 0:a.data})),m=(0,t.zy)(),_=new URLSearchParams(m.search),g=_.get("offset")||0,x=_.get("limit")||25,f=(0,i.d4)((e=>{var a;return null===(a=e.transaction.transactionAdmin)||void 0===a?void 0:a.data}));let j=Math.ceil(+(null===f||void 0===f?void 0:f.count)/+x);const[b,N]=(0,s.useState)(!1),[w,y]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{n((0,p.W)({offset:g,limit:x}))}),[g]),(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{className:"card",children:(0,u.jsxs)("div",{className:"card-body",children:[(0,u.jsxs)("div",{className:"d-flex align-items-center gap-2",children:[(0,u.jsx)("img",{src:(null===c||void 0===c?void 0:c.image)||v,alt:"",style:{width:"50px",height:"50px",minWidth:"50px",borderRadius:"50%",objectFit:"contain"}}),null===c||void 0===c?void 0:c.first_name," ",null===c||void 0===c?void 0:c.last_name]}),(0,u.jsxs)("ul",{className:"list-group mt-4",children:[(0,u.jsxs)("li",{className:"list-group-item",children:["Telefon raqamingiz: ",null===c||void 0===c?void 0:c.phone_number]}),(0,u.jsxs)("li",{className:"list-group-item",children:["Hisobingizdagi mablag`: ",null===c||void 0===c||null===(e=c.wallet)||void 0===e?void 0:e.toLocaleString("ru-RU")," UZS"]}),(0,u.jsxs)("li",{className:"list-group-item",children:["Telegram id: ",null===c||void 0===c?void 0:c.telegram_id]})]}),(0,u.jsx)(l.Q_,{color:"primary",className:"mt-3",onClick:()=>{N(!0)},children:"Mablag`ni yechish"}),(0,u.jsx)(l.Q_,{color:"warning",className:"text-white mt-3 ms-md-3",onClick:()=>{y(!0)},children:"Profilni O`zgartirish"}),(0,u.jsx)("div",{className:"fs-5 mt-4 mb-2",children:"Arizalaringiz"}),(0,u.jsx)("div",{className:"stream-cards",children:null===f||void 0===f||null===(a=f.results)||void 0===a?void 0:a.map(((e,a)=>(0,u.jsx)(o.A,{card:e},a)))}),0!==(null===f||void 0===f?void 0:f.count)&&(0,u.jsx)("nav",{"aria-label":"Page navigation example",children:(0,u.jsx)("ul",{className:"pagination justify-content-center mt-4",children:j&&[...Array(j)].map(((e,a)=>(0,u.jsx)("li",{className:"page-item",children:(0,u.jsx)(r.N_,{className:"page-link",to:"?offset=".concat(25*a,"&limit=25"),children:a+1})},a)))})})]})}),(0,u.jsx)(d.A,{show:b,handleClose:()=>{N(!1)}}),(0,u.jsx)(h,{show:w,handleClose:()=>{y(!1)}})]})}}}]);
//# sourceMappingURL=117.36e7f40e.chunk.js.map