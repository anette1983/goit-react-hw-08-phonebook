"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[585],{559:function(n,e,t){var i,r=t(168),a=t(7691).ZP.button(i||(i=(0,r.Z)(["\n  color: white;\n  font-weight: 200;\n  padding: 6px 12px;\n  /* font-family: inherit;\n  font-style: normal; */\n\n  /* border: 1px solid #8080808a; */\n  border: 1px solid #ffffff;\n\n  border-radius: 4px;\n\n  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  }\n"])));e.Z=a},3309:function(n,e,t){var i,r=t(168),a=t(7691).ZP.form(i||(i=(0,r.Z)(["\n  /* width: 300px; */\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  /* border: 1px solid black; */\n  /* border: 1px solid rgba(33, 33, 33, 0.2); */\n  border: 1px solid #fff;\n\n  border-radius: 4px;\n  padding: 32px 16px;\n  /* margin: 15px 0; */\n  background-color: #226c8cbf;\n\n  & input {\n    padding: 8px;\n    font-family: inherit;\n    border: 1px solid rgba(33, 33, 33, 0.2);\n    border-radius: 4px;\n  }\n\n  & label {\n    color: white;\n    font-weight: 200;\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 12px;\n  }\n"])));e.Z=a},2036:function(n,e,t){t.d(e,{a:function(){return c}});var i,r,a=t(168),o=t(7691),c=(o.ZP.form(i||(i=(0,a.Z)(["\n  width: 320px;\n"]))),o.ZP.label(r||(r=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n"]))))},9983:function(n,e,t){t.d(e,{Pp:function(){return g},bj:function(){return b},PQ:function(){return x},eb:function(){return h},aN:function(){return m}});var i,r,a,o,c,d,s=t(168),l=t(7691),f=t.p+"static/media/Background-2.55f7dfdeb76ee5adb1ba.jpg",u=t(1087),p=t(6151),x=l.ZP.div(i||(i=(0,s.Z)(["\n  /* min-height: 'calc(100vh - 50px)'; */\n  min-height: 100vh;\n\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n\n  /* \u043d\u0430 \u043c\u043e\u0431\u0438\u043b\u043a\u0443:    align-items: center;\n    /* justify-content: space-around;\n    flex-direction: column;\n    justify-content: center;\n     */\n\n  @media screen and (max-width: 768px) {\n    max-width: 100%;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n"])),f),m=l.ZP.div(r||(r=(0,s.Z)(["\n  color: #ffffff;\n  p {\n    font-size: 18px;\n    text-align: center;\n    @media screen and (max-width: 768px) {\n      text-align: center;\n      font-size: 22px;\n      margin-bottom: 32px;\n    }\n  }\n"]))),h=l.ZP.h1(a||(a=(0,s.Z)(["\n  font-family: Genty;\n  font-size: 115px;\n  color: #ffffff;\n  @media screen and (max-width: 768px) {\n    font-size: 65px;\n    text-align: center;\n  }\n"]))),b=l.ZP.div(o||(o=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  gap: 16px;\n  @media screen and (max-width: 768px) {\n    width: 120px;\n    font-size: 25px;\n  }\n"]))),g=((0,l.ZP)(u.OL)(c||(c=(0,s.Z)(["\n  display: inline-block;\n  text-decoration: none;\n  padding: 16px;\n  font-weight: 700;\n  color: #2a363b;\n"]))),(0,l.ZP)(p.Z)(d||(d=(0,s.Z)(["\n  color: black;\n  background-color: white;\n  font: inherit;\n"]))))},8236:function(n,e,t){t.r(e),t.d(e,{default:function(){return x}});var i=t(9439),r=t(559),a=t(3309),o=t(2036),c=t(2791),d=t(9434),s=t(9273),l=t(3329),f=function(){var n=(0,d.I0)(),e=(0,c.useState)(""),t=(0,i.Z)(e,2),f=t[0],u=t[1],p=(0,c.useState)(""),x=(0,i.Z)(p,2),m=x[0],h=x[1],b=(0,c.useState)(""),g=(0,i.Z)(b,2),w=g[0],Z=g[1],j=function(n){var e=n.target,t=e.name,i=e.value;switch(t){case"name":return u(i);case"email":return h(i);case"password":return Z(i);default:return}};return(0,l.jsxs)(a.Z,{onSubmit:function(e){e.preventDefault(),n((0,s.z2)({name:f,email:m,password:w})),u(""),h(""),Z("")},autoComplete:"off",children:[(0,l.jsxs)(o.a,{children:["Name",(0,l.jsx)("input",{type:"text",name:"name",value:f,onChange:j})]}),(0,l.jsxs)(o.a,{children:["Email",(0,l.jsx)("input",{type:"email",name:"email",value:m,onChange:j})]}),(0,l.jsxs)(o.a,{children:["Password",(0,l.jsx)("input",{type:"password",name:"password",value:w,onChange:j})]}),(0,l.jsx)(r.Z,{type:"submit",children:"Register"})]})},u=t(6907),p=t(9983),x=function(){return(0,l.jsx)(u.B6,{children:(0,l.jsxs)("div",{children:[(0,l.jsx)(u.ql,{children:(0,l.jsx)("title",{children:"Registration"})}),(0,l.jsx)(p.PQ,{children:(0,l.jsx)(f,{})})]})})}}}]);
//# sourceMappingURL=585.06ed6922.chunk.js.map