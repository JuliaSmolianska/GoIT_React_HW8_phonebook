"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[860],{5860:function(e,n,t){t.r(n),t.d(n,{default:function(){return I}});var r=t(2791),s="ContactsBook_listTitle__ssRZ6",a="ContactsBook_label__tIJzd",o="ContactsBook_button_add__iMWx2",c="ContactsBook_button_delete__xEXmz",i="ContactsBook_error__f248Q",l="ContactsBook_list__tYjAY",u=t(2506),m=t(6727),d=t(9434),h=t(6916),x=function(e){return e.contacts.items},f=function(e){return e.contacts.loading},j=function(e){return e.filter},b=(0,h.P1)([x,j],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),_=t(3634),p=t(184),v=m.Ry().shape({name:m.Z_().min(2,"To short!").max(30,"So long!").required("Required"),number:m.Z_().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Invalid phone number format, should be 1111-11-11").required("Required")}),C=function(){var e=(0,d.v9)(x),n=(0,d.I0)();return(0,p.jsx)(u.J9,{initialValues:{name:"",number:""},validationSchema:v,onSubmit:function(t,r){var s=r.resetForm,a=t;e.find((function(e){return e.name.toLowerCase()===a.name.toLowerCase()}))?alert("".concat(a.name," is already in contacts.")):(n((0,_.uK)(a)),s({name:"",number:""}))},children:(0,p.jsxs)(u.l0,{children:[(0,p.jsx)("label",{htmlFor:"name",className:a,children:"Name"}),(0,p.jsx)("br",{}),(0,p.jsx)(u.gN,{name:"name",placeholder:"Enter name"}),(0,p.jsx)(u.Bc,{name:"name",component:"div",className:i}),(0,p.jsx)("br",{}),(0,p.jsx)("label",{htmlFor:"number",className:a,children:"Telephone number"}),(0,p.jsx)("br",{}),(0,p.jsx)(u.gN,{type:"tel",name:"number",placeholder:"Enter number"}),(0,p.jsx)(u.Bc,{name:"number",component:"div",className:i}),(0,p.jsx)("br",{}),(0,p.jsx)("button",{type:"submit",className:o,children:"Add contact"})]})})},k=t(2134),N=function(){var e=(0,d.v9)(b),n=(0,d.I0)();return(0,p.jsxs)("ul",{className:l,children:[(0,p.jsx)("h1",{className:s,children:"Contacts list"}),e.map((function(e){return(0,p.jsxs)("li",{children:[e.name," - ",e.number,(0,p.jsxs)("button",{className:c,onClick:function(){return t=e.id,void n((0,_.GK)(t));var t},children:[" ",(0,p.jsx)(k.YK6,{})]})]},e.id)}))]})},g=t(4808),w=function(){var e=(0,d.v9)(j),n=(0,d.I0)();return(0,p.jsx)("input",{type:"text",name:"filter",value:e,onChange:function(e){return n((0,g.T)(e.target.value))},placeholder:"Search contacts by name"})},B=t(9743),y=t(2677),Z=t(7022);t(7632);function I(){var e=(0,d.I0)(),n=(0,d.v9)(f);return(0,r.useEffect)((function(){e((0,_.yF)())}),[e]),(0,p.jsx)(Z.Z,{children:(0,p.jsxs)(B.Z,{children:[(0,p.jsxs)(y.Z,{xs:11,lg:4,children:[(0,p.jsx)(C,{}),(0,p.jsx)("div",{children:n&&"Request in progress..."}),(0,p.jsx)(w,{})]}),(0,p.jsx)(y.Z,{xs:11,lg:4,children:(0,p.jsx)(N,{})})]})})}}}]);
//# sourceMappingURL=860.ae1cbe80.chunk.js.map