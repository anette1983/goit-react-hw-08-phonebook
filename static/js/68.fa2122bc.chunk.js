"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[68],{559:function(n,e,t){var r,i=t(168),a=t(7691).ZP.button(r||(r=(0,i.Z)(["\n  color: white;\n  font-weight: 200;\n  padding: 6px 12px;\n  border: 1px solid #ffffff;\n\n  border-radius: 4px;\n\n  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  }\n"])));e.Z=a},3309:function(n,e,t){var r,i=t(168),a=t(7691).ZP.form(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #fff;\n\n  border-radius: 4px;\n  padding: 32px 16px;\n  background-color: #226c8cbf;\n\n  & input {\n    padding: 8px;\n    font-family: inherit;\n    border: 1px solid rgba(33, 33, 33, 0.2);\n    border-radius: 4px;\n  }\n\n  & label {\n    color: white;\n    font-weight: 200;\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 12px;\n  }\n"])));e.Z=a},7605:function(n,e,t){t.r(e),t.d(e,{default:function(){return nn}});var r=t(2791),i=t(493),a=t(9434),o=t(3433),c=t(6916),s=function(n){return n.contacts},d=function(n){return n.filter},l=function(n){return n.contacts.isLoading},u=function(n){return n.contacts.error},x=(0,c.P1)([s,d],(function(n,e){var t=n.items;if(""!==e){var r=e.toLowerCase();t=t.filter((function(n){return n.name.toLowerCase().includes(r)}))}return(0,o.Z)(t).sort((function(n,e){return n.name.localeCompare(e.name)}))})),m=t(9439),h=t(4852),p=t(6259),f=t(653),b=t(3044),g=t(3400),v=t(7247),j=t(7924),Z=t(3634),w=t(5206),y=t(3329);var k=function(n){var e=n.contact,t=(0,r.useState)(),i=(0,m.Z)(t,2),o=i[0],c=i[1],s=(0,a.I0)();return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(h.ZP,{secondaryAction:(0,y.jsx)(g.Z,{edge:"end","aria-label":"delete",onClick:function(){return n=e.id,c(n),s((0,Z.GK)(n)),w.Am.success("Contact deleted successfully");var n},disabled:o===e.id,children:(0,y.jsx)(v.Z,{})}),children:[(0,y.jsx)(f.Z,{children:(0,y.jsx)(b.Z,{alt:e.name,src:e.name?"https://ui-avatars.com/api/?name=".concat(e.name[0],"&length=1&background=random&size=262"):"https://ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"})}),(0,y.jsx)(p.Z,{primary:e.name,secondary:e.number})]}),(0,y.jsx)(j.Z,{variant:"inset"})]})};function C(){var n=(0,a.v9)(x);return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(i.Z,{sx:{width:"100%",maxWidth:720},children:n.map((function(n){return(0,y.jsx)(k,{contact:n},n.id)}))})})}var P,z,A,S,F=(0,r.memo)(C),L=t(4808),_=t(168),q=t(7691),I=q.ZP.label(P||(P=(0,_.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 8px;\n  margin-top: 20px;\n  width: 325px;\n"]))),K=t(8089),N=function(){var n=(0,a.v9)(d),e=(0,a.I0)();return(0,y.jsx)(I,{children:(0,y.jsx)(K.Z,{sx:{color:"white"},label:"Find contacts by name...",variant:"outlined",onChange:function(n){var t=n.target.value.trim();e((0,L.T)(t))},type:"search",name:"filter",value:n})})},Y=t(6907),$=t.p+"static/media/girl-bg-1.7f6c329160cedb1b4f64.png",B=q.ZP.div(z||(z=(0,_.Z)(["\n  max-height: 100%;\n  background-color: #ebc183;\n  display: flex;\n  justify-content: space-between;\n  height: 100vh;\n  @media (max-width: 768px) {\n    max-width: 100%;\n    min-height: 100vh;\n    background-image: url(",");\n    background-repeat: no-repeat;\n    /* background-size: contain; */\n    background-size: cover;\n    background-attachment: fixed;\n    /* background-position: center; */\n    background-position: center 0;\n  }\n"])),$),D=q.ZP.div(A||(A=(0,_.Z)(["\n  max-height: 100vh;\n  max-width: 100vw;\n  border-left: 10px solid white;\n  border-right: 10px solid white;\n\n  @media (max-width: 768px) {\n    display: none;\n  }\n"]))),E=q.ZP.div(S||(S=(0,_.Z)(["\n  margin: 0 auto;\n  padding: 12px;\n  width: 640px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: hidden;\n  @media screen and (max-width: 768px) {\n    max-width: 100%;\n    background-color: #ebc1837d;\n  }\n"]))),G=t.p+"static/media/girl-bg3.35fd4dcda2ef75964c67.png",R=t(1123),T=t(6151),W=t(9877),H=t(9818),J=t(2419),M=t(3309),O=t(559),Q=function(n){var e=n.handleClose,t=(0,r.useState)(""),i=(0,m.Z)(t,2),o=i[0],c=i[1],d=(0,r.useState)(""),l=(0,m.Z)(d,2),u=l[0],x=l[1],h=(0,a.I0)(),p=(0,a.v9)(s).items,f=function(n){var e=n.target,t=e.name,r=e.value;"name"===t?c(r):x(r)},b=function(){c(""),x("")};return(0,y.jsxs)(M.Z,{onSubmit:function(n){n.preventDefault();var t={name:o,number:u},r=t.name.toLowerCase();if(p.find((function(n){return n.name.toLowerCase()===r||n.number===t.number})))return w.Am.error("".concat(t.name," is already in contacts"));h((0,Z.uK)(t)),e(),b()},children:[(0,y.jsxs)("label",{children:["Name",(0,y.jsx)("input",{onChange:f,type:"text",name:"name",value:o,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces.",required:!0})]}),(0,y.jsxs)("label",{children:["Number",(0,y.jsx)("input",{onChange:f,type:"tel",name:"number",value:u,pattern:"^\\+?\\d{1,4}?\\(?\\d{1,3}?\\)?\\d{1,4}?\\d{1,4}?\\d{1,9}$",title:"Phone number must be digits and can start with +",required:!0})]}),(0,y.jsx)(O.Z,{type:"submit",children:"Add contact"})]})},U=t(9823);function V(){var n=(0,r.useState)(!1),e=(0,m.Z)(n,2),t=e[0],i=e[1],a=function(){i(!0)},o=function(){i(!1)};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(T.Z,{variant:"outlined",onClick:a,children:"Add new contact"}),(0,y.jsx)(W.Z,{onClick:a,color:"secondary",sx:{position:"fixed",right:"30px",bottom:"30px"},children:(0,y.jsx)(J.Z,{})}),(0,y.jsxs)(H.Z,{open:t,onClose:o,PaperProps:{style:{backgroundColor:"transparent"}},children:[(0,y.jsx)(g.Z,{"aria-label":"close",onClick:o,sx:{position:"absolute",right:8,top:8,color:"#ffffff"},children:(0,y.jsx)(U.Z,{})}),(0,y.jsx)(Q,{handleClose:o})]})]})}var X=t(4217),nn=function(){var n=(0,a.v9)(l),e=(0,a.v9)(u),t=(0,a.I0)(),i=(0,a.v9)(X.rK);return(0,r.useEffect)((function(){i&&t((0,Z.yF)())}),[t,i]),(0,y.jsxs)(Y.B6,{children:[(0,y.jsx)(Y.ql,{children:(0,y.jsx)("title",{children:"Your contacts"})}),(0,y.jsxs)(B,{children:[(0,y.jsxs)(E,{children:[(0,y.jsx)(R.Z,{variant:"h4",component:"h1",mt:2,mb:2,children:"Your contacts"}),(0,y.jsx)(V,{}),(0,y.jsx)(N,{}),n&&!e&&(0,y.jsx)("h3",{children:"Request in progress..."}),e&&(0,y.jsx)("p",{children:e}),(0,y.jsx)(F,{})]}),(0,y.jsx)(D,{children:(0,y.jsx)("img",{src:G,alt:"Smiling girl with mobile phone",height:"1620"})})]})]})}}}]);
//# sourceMappingURL=68.fa2122bc.chunk.js.map