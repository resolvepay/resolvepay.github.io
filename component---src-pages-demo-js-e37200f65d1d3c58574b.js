(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{FnBB:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var r=t("MX0m"),n=t.n(r),l=t("q1tI"),i=t.n(l);function s(e){var a=e.height;return i.a.createElement("div",{className:n.a.dynamic([["1329640638",[a]]])+" space-divider"},i.a.createElement(n.a,{id:"1329640638",dynamic:[a]},[".space-divider.__jsx-style-dynamic-selector{content:' ';height:"+a+"px;}"]))}},fXcs:function(e,a,t){"use strict";t.d(a,"a",(function(){return _}));var r=t("/S4K"),n=t("MX0m"),l=t.n(n),i=t("q1tI"),s=t.n(i),o=t("KYPV"),c=t("UGp+"),m=t("/P0+"),u=t("VHpo"),d=t("t0wy"),y=t("5Wrh"),p=t("WlAH"),h=t("e8Tc"),b=t("lWR1");function _(){var e=Object(i.useState)(null),a=e[0],t=e[1],n=Object(i.useState)(!1),_=n[0],f=n[1],v=Object(i.useCallback)(function(){var e=Object(r.a)((function*(e,a){var r=a.setSubmitting,n=a.resetForm;try{t(null);var l=e.name,i=e.email,s=e.phone,o=e.company,c=e.website,m=e.job_title,u=e.industry,d=e.annual_revenue,y=e.accounting_platform,p=e.customer_purchase_frequency,_=e.offer_net_terms,v=e.ecommerce_platform;e.campaign=Object(b.a)(),Object(h.a)({email:i,phone:s,name:l,company:{name:o},website:c,job_title:m,industry:u,annual_revenue:d,accounting_platform:y,customer_purchase_frequency:p,offer_net_terms:_,ecommerce_platform:v}),Object(h.b)("Contact form submitted",{name:l,email:i,phone:s,company:o,website:c,context:{campaign:Object(b.a)()},job_title:m,industry:u,annual_revenue:d,accounting_platform:y,customer_purchase_frequency:p,offer_net_terms:_,ecommerce_platform:v});var g="localhost"===window.location.hostname?"http://localhost:2222":"https://app.resolvepay.com",x=yield fetch(g+"/api/web/contact",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json()}));x&&x.success&&(r(!1),n(),f(!0))}catch(j){r(!1),t(j)}}));return function(a,t){return e.apply(this,arguments)}}(),[]),g=Object(o.a)({initialValues:{name:"",email:"",phone:"",company:"",website:"",job_title:"",industry:"",annual_revenue:"",accounting_platform:"",customer_purchase_frequency:"",offer_net_terms:"",ecommerce_platform:""},validationSchema:Object(c.a)().shape({name:Object(c.b)().trim().required("Required"),email:Object(c.b)().trim().lowercase().email("Invalid email").required("Required"),phone:Object(c.b)().trim().required("Required"),company:Object(c.b)().trim().required("Required"),website:Object(c.b)().trim().lowercase().required("Required"),job_title:Object(c.b)().trim().required("Required"),industry:Object(c.b)().required("Required"),annual_revenue:Object(c.b)().required("Required"),accounting_platform:Object(c.b)().required("Required"),customer_purchase_frequency:Object(c.b)().required("Required"),offer_net_terms:Object(c.b)().required("Required"),ecommerce_platform:Object(c.b)()}),onSubmit:v});return s.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[p.b.halyardDisplay]]])},_?s.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[p.b.halyardDisplay]]])},s.a.createElement("p",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[p.b.halyardDisplay]]])+" contact_sales__subtitle"},"Thanks! We'll get back to you soon")):s.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[p.b.halyardDisplay]]])},s.a.createElement("p",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[p.b.halyardDisplay]]])+" contact_sales__subtitle"},"Tell us how to reach you and let's discuss how Resolve can grow your b2b business."),s.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[p.b.halyardDisplay]]])+" contact_sales_form__form-container"},s.a.createElement("form",{onSubmit:g.handleSubmit,className:"jsx-2363263274 "+l.a.dynamic([["591290344",[p.b.halyardDisplay]]])},s.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[p.b.halyardDisplay]]])+" resolve-row clearfix"},s.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[p.b.halyardDisplay]]])+" resolve-col"},s.a.createElement(m.a,{id:"name",name:"name",error:g.errors.name,value:g.values.name,onChange:g.handleChange,onBlur:g.handleBlur,label:"Full name"})),s.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[p.b.halyardDisplay]]])+" resolve-col"},s.a.createElement(m.a,{id:"company",name:"company",type:"text",error:g.errors.company,value:g.values.company,onChange:g.handleChange,onBlur:g.handleBlur,label:"Company"}))),s.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[p.b.halyardDisplay]]])+" resolve-row clearfix"},s.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[p.b.halyardDisplay]]])+" resolve-col"},s.a.createElement(m.a,{id:"email",name:"email",error:g.errors.email,value:g.values.email,onChange:g.handleChange,onBlur:g.handleBlur,label:"Work email"})),s.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[p.b.halyardDisplay]]])+" resolve-col"},s.a.createElement(m.a,{id:"phone",name:"phone",type:"tel",error:g.errors.phone,value:g.values.phone,onChange:g.handleChange,onBlur:g.handleBlur,label:"Phone"}))),s.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[p.b.halyardDisplay]]])+" resolve-row clearfix"},s.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[p.b.halyardDisplay]]])+" resolve-col"},s.a.createElement(m.a,{id:"job_title",name:"job_title",error:g.errors.job_title,value:g.values.job_title,onChange:g.handleChange,onBlur:g.handleBlur,label:"Job title"})),s.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[p.b.halyardDisplay]]])+" resolve-col"},s.a.createElement(m.a,{id:"website",name:"website",type:"text",error:g.errors.website,value:g.values.website,onChange:g.handleChange,onBlur:g.handleBlur,label:"Website"}))),s.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[p.b.halyardDisplay]]])+" resolve-row clearfix"},s.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[p.b.halyardDisplay]]])+" resolve-col"},s.a.createElement(u.a,{id:"industry",name:"industry",error:g.errors.industry,value:g.values.industry,onChange:g.handleChange,onBlur:g.handleBlur,label:"Industry",options:["Agriculture, Forestry, and Fishing","Auto","Construction","Education","Electronics","Fashion & Beauty","Financial Services","Fitness & Sporting Goods","Furniture","Healthcare","Industrial Tools & Equipment","Maintenance, Repair, and Operations (MRO)","Retail","Restaurant","Professional Services","Software","Travel","Transportation","Other"]})),s.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[p.b.halyardDisplay]]])+" resolve-col"},s.a.createElement(u.a,{id:"customer_purchase_frequency",name:"customer_purchase_frequency",error:g.errors.customer_purchase_frequency,value:g.values.customer_purchase_frequency,onChange:g.handleChange,onBlur:g.handleBlur,label:"Customer purchase frequency",options:["Monthly","Quarterly","Annually","Once"]}))),s.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[p.b.halyardDisplay]]])+" resolve-row clearfix"},s.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[p.b.halyardDisplay]]])+" resolve-col"},s.a.createElement(u.a,{id:"annual_revenue",name:"annual_revenue",error:g.errors.annual_revenue,value:g.values.annual_revenue,onChange:g.handleChange,onBlur:g.handleBlur,label:"Annual B2B revenue",options:["Pre-launch","<$1M","$1M-$5M","$5M-$10M","$10M-$25M",">$25M"]})),s.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[p.b.halyardDisplay]]])+" resolve-col"},s.a.createElement(u.a,{id:"offer_net_terms",name:"offer_net_terms",error:g.errors.offer_net_terms,value:g.values.offer_net_terms,onChange:g.handleChange,onBlur:g.handleBlur,label:"Do you offer net terms?",options:["Not at all","1-25% of b2b revenue","25-50% of b2b revenue",">50% of b2b revenue"]}))),s.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[p.b.halyardDisplay]]])+" resolve-row clearfix"},s.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[p.b.halyardDisplay]]])+" resolve-col"},s.a.createElement(u.a,{id:"accounting_platform",name:"accounting_platform",placeholder:"Accounting platform",error:g.errors.accounting_platform,value:g.values.accounting_platform,onChange:g.handleChange,onBlur:g.handleBlur,label:"Accounting platform",options:["Freshbooks","Microsoft Dynamics 365","Netsuite","Odoo","Oracle","Quickbooks Desktop","Quickbooks Enterprise","Quickbooks Online","Sage","SAP","Wave","Xero","Zoho","Other"]})),s.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[p.b.halyardDisplay]]])+" resolve-col"},s.a.createElement(u.a,{id:"ecommerce_platform",name:"ecommerce_platform",placeholder:"E-commerce platform",error:g.errors.ecommerce_platform,value:g.values.ecommerce_platform,onChange:g.handleChange,onBlur:g.handleBlur,label:"E-commerce platform",options:["3dCart","BigCommerce","Custom","Hybris","Insite","Magento 1","Magento 2","Netsuite","None","NuOrder","Odoo","Oro Commerce","Shopify","Shopify Plus","SquareSpace","Volusion","WooCommerce","Other"]}))),s.a.createElement(d.a,{error:a&&"There was an error submitting your request. Please try again."}),s.a.createElement(y.a,{type:"submit",primary:!0,disabled:g.isSubmitting,className:"contact_sales_form__submit"},"Submit")))),s.a.createElement(l.a,{id:"591290344",dynamic:[p.b.halyardDisplay]},[".clearfix.__jsx-style-dynamic-selector::after{content:'';clear:both;display:table;}",".contact_sales__subtitle.__jsx-style-dynamic-selector{font-family:"+p.b.halyardDisplay+";font-size:22px;line-height:1.64;-webkit-letter-spacing:0.8px;-moz-letter-spacing:0.8px;-ms-letter-spacing:0.8px;letter-spacing:0.8px;margin:20px 0 40px;text-align:center;}",".resolve-row.__jsx-style-dynamic-selector{margin-left:-15px;margin-right:-15px;}",".resolve-col.__jsx-style-dynamic-selector{float:left;width:50%;padding:0 15px;}","@media (max-width:767px){.resolve-col.__jsx-style-dynamic-selector{float:none;width:100%;}}"]),s.a.createElement(l.a,{id:"2363263274"},[".contact_sales_form__submit{width:100%;}",".contact_sales__container *{box-sizing:border-box;}"]))}},vX0t:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",(function(){return b})),t.d(a,"default",(function(){return _}));var r=t("MX0m"),n=t.n(r),l=t("q1tI"),i=t.n(l),s=t("+7A0"),o=t("7oih"),c=t("VUD3"),m=t("fXcs"),u=t("JwsL"),d=t("ztx+"),y=t("FnBB"),p=t("WlAH"),h=t("UiNE"),b="3756326996";function _(e){var a=e.data,t=Object(h.a)(a.companies,(function(e){return e.image.fluid}));return i.a.createElement(o.a,null,i.a.createElement(s.GatsbySeo,{title:"Contact sales"}),i.a.createElement(c.a,null,i.a.createElement("div",{className:n.a.dynamic([["3597279418",[p.b.halyardDisplay]]])+" contact_sales__container"},i.a.createElement("div",{className:n.a.dynamic([["3597279418",[p.b.halyardDisplay]]])+" contact_sales__title"},"See Resolve in action"),i.a.createElement(m.a,null)),i.a.createElement(y.a,{height:100}),i.a.createElement(d.a,{pretitle:"Trusted by innovative companies",data:[{image:t["Vice Golf"],name:"Vice Golf",offsetTop:0},{image:t.Article,name:"Article"},{image:t["OnDemand Tires"],name:"OnDemand Tires",offsetTop:0},{image:t["Archipelago Lighting"],name:"Archipelago Lighting",offsetTop:0},{image:t["Linus Bike"],name:"Linus Bike",offsetTop:0},{image:t.QuietKat,name:"QuietKat",offsetTop:0}]})),i.a.createElement(u.a,{darkSkin:!0}),i.a.createElement(n.a,{id:"3597279418",dynamic:[p.b.halyardDisplay]},[".contact_sales__container.__jsx-style-dynamic-selector{max-width:600px;width:100%;margin:50px auto;}",".contact_sales__container.__jsx-style-dynamic-selector *.__jsx-style-dynamic-selector{box-sizing:border-box;}",".contact_sales__title.__jsx-style-dynamic-selector{font-family:"+p.b.halyardDisplay+";font-size:28px;font-weight:600;line-height:1.43;-webkit-letter-spacing:0px;-moz-letter-spacing:0px;-ms-letter-spacing:0px;letter-spacing:0px;text-align:center;}"]))}}}]);
//# sourceMappingURL=component---src-pages-demo-js-e37200f65d1d3c58574b.js.map