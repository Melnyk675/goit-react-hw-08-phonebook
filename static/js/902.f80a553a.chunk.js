"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[902],{902:function(e,n,r){r.r(n),r.d(n,{default:function(){return A}});var a,t,i,s,o,l,c,d,u,p,h,m,f=r(9439),x=r(168),Z=r(3517),g=r(1891),w=r(7309),v=r(6908),j=r(9214),P=r(9529),b=r(8999),y=r(1087),z=(0,Z.ZP)(g.Z.Item)(a||(a=(0,x.Z)(["\n  label {\n    width: 150px;\n    padding-top: 8px;\n  }\n"]))),k=Z.ZP.div(t||(t=(0,x.Z)(["\n  padding-top: 10%;\n  display: flex;\n  padding-left: 20%;\n"]))),V=(0,Z.ZP)(g.Z)(i||(i=(0,x.Z)(["\n  width: 500px;\n"]))),E=(0,Z.ZP)(w.ZP)(s||(s=(0,x.Z)(["\n  width: 100px;\n  height: 40px;\n  margin-left: 30%;\n  display: block;\n  font-size: 18px;\n"]))),F=(0,Z.ZP)(v.Z)(o||(o=(0,x.Z)(["\n  height: 40px;\n  font-size: 18px;\n"]))),M=(0,Z.ZP)(v.Z.Password)(l||(l=(0,x.Z)(["\n  height: 40px;\n  font-size: 18px;\n"]))),H=(0,Z.ZP)(j.Z)(c||(c=(0,x.Z)(["\n  color: #c7c6c6;\n"]))),q=(0,Z.ZP)(P.Z)(d||(d=(0,x.Z)(["\n  color: #c7c6c6;\n"]))),R=(0,Z.ZP)(b.Z)(u||(u=(0,x.Z)(["\n  color: #c7c6c6;\n"]))),T=(0,Z.ZP)(y.rU)(p||(p=(0,x.Z)(["\n  font-size: 18px;\n  margin: 0 4px;\n"]))),_=Z.ZP.div(h||(h=(0,x.Z)(["\n  font-size: 18px;\n  line-height: 1.11;\n  position: absolute;\n  top: -1%;\n  left: 50%;\n  margin-left: 60px;\n"]))),C=Z.ZP.h2(m||(m=(0,x.Z)(["\n  margin-left: 30%;\n  margin-bottom: 15px;\n  color: #2e2d2dbc;\n"]))),L=r(7889),B=r(9434),I=r(184);function A(){var e=V.useForm(),n=(0,f.Z)(e,1)[0],r=(0,B.I0)(),a=(0,B.v9)((function(e){return e.auth})),t=a.isLoading,i=a.error;return(0,I.jsx)("section",{children:(0,I.jsx)(k,{children:(0,I.jsxs)(V,{form:n,name:"register",onFinish:function(e){var a=e.name,s=e.email,o=e.password;o===e.confirm&&(r((0,L.z2)({name:a,email:s,password:o})),!t&&!i&&n.resetFields())},initialValues:{residence:["jafgubbp","wolhfde","ebxaom"],prefix:"86"},scrollToFirstError:!0,children:[(0,I.jsx)(C,{children:"Register new user"}),(0,I.jsx)(z,{name:"name",label:"Name",tooltip:"What do you want others to call you?",rules:[{required:!0,message:"Please input your name!",whitespace:!0}],children:(0,I.jsx)(F,{prefix:(0,I.jsx)(q,{})})}),(0,I.jsx)(z,{name:"email",label:"E-mail",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],children:(0,I.jsx)(F,{prefix:(0,I.jsx)(H,{})})}),(0,I.jsx)(z,{name:"password",label:"Password",rules:[{required:!0,message:"Please input your password!"}],hasFeedback:!0,children:(0,I.jsx)(M,{prefix:(0,I.jsx)(R,{}),pattern:"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{7,}",title:"Must contain at least one number and one uppercase and lowercase letter, and at least 7 or more characters"})}),(0,I.jsx)(z,{name:"confirm",label:"Confirm Password",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var n=e.getFieldValue;return{validator:function(e,r){return r&&n("password")!==r?Promise.reject(new Error("The two passwords that you entered do not match!")):Promise.resolve()}}}],children:(0,I.jsx)(M,{prefix:(0,I.jsx)(R,{})})}),(0,I.jsxs)(z,{children:[" ",(0,I.jsx)(E,{type:"primary",htmlType:"submit",children:"Register"})," ",(0,I.jsxs)(_,{children:["or ",(0,I.jsx)(T,{to:"/login",children:" log in"}),"if you already have an account"," "]})]})]})})})}},8999:function(e,n,r){r.d(n,{Z:function(){return l}});var a=r(7462),t=r(2791),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},s=r(4291),o=function(e,n){return t.createElement(s.Z,(0,a.Z)({},e,{ref:n,icon:i}))};var l=t.forwardRef(o)},9214:function(e,n,r){r.d(n,{Z:function(){return l}});var a=r(7462),t=r(2791),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"}}]},name:"mail",theme:"outlined"},s=r(4291),o=function(e,n){return t.createElement(s.Z,(0,a.Z)({},e,{ref:n,icon:i}))};var l=t.forwardRef(o)}}]);
//# sourceMappingURL=902.f80a553a.chunk.js.map