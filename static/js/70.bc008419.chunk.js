"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[70],{9070:function(e,r,s){s.r(r),s.d(r,{default:function(){return m}});s(2791);var a=s(8683),t=s(5705),i=s(2811),l={buttonBlock:"LoginForm_buttonBlock__LpA2j",forgot:"LoginForm_forgot__HwwcF"},o=s(5079),c=s(184),n=function(e){var r=e.loginTC,s=e.captchaUrl;console.log("RERENDER");var n=(0,t.TA)({initialValues:{email:"",password:"",rememberMe:!1,captcha:""},validate:function(e){var r={};return e.email?/^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,4}$/i.test(e.email)||(r.email="invalid email address"):r.email="required",e.password?e.password.trim().length<5&&(r.password="min 5 symbols"):r.password="required",r},onSubmit:function(e,s){r(e.email,e.password,e.rememberMe,e.captcha,s.setStatus,s.setSubmitting),s.setSubmitting(!0)}});return(0,c.jsxs)("form",{className:l.loginForm,onSubmit:n.handleSubmit,children:[(0,c.jsx)(i.FA,{placeholder:"email",getFieldProps:n.getFieldProps("email"),errors:n.errors.email,type:"text"}),(0,c.jsx)(i.FA,{placeholder:"password",getFieldProps:n.getFieldProps("password"),errors:n.errors.password,type:"password"}),(0,c.jsx)(i.vB,{label:"Remember Me",getFieldProps:n.getFieldProps("rememberMe")}),(0,c.jsxs)("div",{className:l.fields,children:[n.status,s&&(0,c.jsxs)("div",{className:l.fields,children:[(0,c.jsx)("img",{src:s,alt:"captchaUrl"}),(0,c.jsx)("label",{htmlFor:"captcha",children:"Captcha"}),(0,c.jsx)("input",(0,a.Z)({id:"captcha",type:"text"},n.getFieldProps("captcha"))),n.errors.captcha?(0,c.jsx)("div",{children:n.errors.captcha}):null]})]}),(0,c.jsxs)("div",{className:l.buttonBlock,children:[(0,c.jsx)(o.$,{type:"submit",children:"Login"}),(0,c.jsxs)("div",{className:l.forgot,children:[(0,c.jsx)("div",{children:"Register"}),(0,c.jsx)("div",{children:"Forgot Password"})]})]})]})},d=s(2177),p=s(9318),m=(0,d.$j)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captcha}}),{loginTC:p.YJ})((function(e){var r=e.loginTC,s=e.captchaUrl;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(n,{loginTC:r,captchaUrl:s})})}))}}]);
//# sourceMappingURL=70.bc008419.chunk.js.map