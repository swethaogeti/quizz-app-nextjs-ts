(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[586],{4570:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/questions/[question]",function(){return t(4589)}])},4589:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return _}});var r=t(7297),i=t(5893),o=t(1664),u=t.n(o),l=t(1163),d=t(7294),s=t(9521);function c(){let n=(0,r.Z)(["\n  margin: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n"]);return c=function(){return n},n}function a(){let n=(0,r.Z)(["\n  h3 {\n    color: gray;\n    font-size: 1.3rem;\n    font-weight: bold;\n    padding: 1rem 0;\n    text-align: center;\n  }\n\n  button {\n    background-color: #df006c;\n    padding: 0.5rem;\n    margin: 0.5rem 0;\n    outline: none;\n    border: 1px solid white;\n    border-radius: 3px;\n    color: white;\n    font-size: 1rem;\n    font-weight: bold;\n  }\n"]);return a=function(){return n},n}function f(){let n=(0,r.Z)(["\n  outline: none;\n  padding: 0.5rem;\n  width: 100%;\n  border-radius: 2px;\n  border: 2px solid grey;\n  font-size: 1rem;\n"]);return f=function(){return n},n}function x(){let n=(0,r.Z)(["\n  margin: 0.5rem 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return x=function(){return n},n}function g(){let n=(0,r.Z)(["\n  color: #e7006c;\n  font-size: 1.2rem;\n  font-weight: bold;\n  text-decoration: none;\n"]);return g=function(){return n},n}let m=s.ZP.div(c()),h=s.ZP.div(a()),p=s.ZP.input(f()),b=s.ZP.div(x());(0,s.ZP)(u())(g());let w=n=>{let{dehydratedData:e}=n,t=(0,l.useRouter)(),{question:r}=t.query;console.log("dehydrated data ",e,r);let[o,s]=(0,d.useState)(),[c,a]=(0,d.useState)([]),[f,x]=(0,d.useState)(""),{queries:[g]}=null!=e?e:{queries:[]},{state:w}=null!=g?g:{state:null},{data:_}=null!=w?w:{data:[]},v=()=>s(_.find(n=>""+n.id===r));(0,d.useEffect)(()=>{v()});let y=(n,e)=>{a(n=>[...n,e]),localStorage.setItem("answers",JSON.stringify(c)),x("")};return(0,i.jsx)(m,{children:(0,i.jsxs)(h,{children:[(0,i.jsxs)("h3",{children:[null==o?void 0:o.id,". ",null==o?void 0:o.question]}),(0,i.jsx)("form",{onSubmit:n=>n.preventDefault(),children:(0,i.jsx)(p,{type:"text",placeholder:"Enter your answer",value:f,onChange:n=>x(n.target.value)},null==o?void 0:o.id)}),(0,i.jsxs)(b,{children:[(0,i.jsx)("div",{}),Number(r)>5?(0,i.jsx)(u(),{href:"/result",style:{textDecoration:"none",color:"#E4006C",border:" 2px solid #E4006C",textAlign:"center",padding:"0.5rem",borderRadius:"3px",fontWeight:"bold",margin:"1rem"},children:"End"}):(0,i.jsx)(u(),{onClick:()=>y(null==o?void 0:o.id,f),style:{textDecoration:"none",color:"#E4006C",border:" 2px solid #E4006C",textAlign:"center",padding:"0.5rem",borderRadius:"3px",fontWeight:"bold",margin:"1rem"},href:"/questions/[question]",as:"/questions/".concat(Number(null==o?void 0:o.id)+1),children:"Next"})]})]})})};var _=!0;e.default=w},1163:function(n,e,t){n.exports=t(6885)}},function(n){n.O(0,[774,888,179],function(){return n(n.s=4570)}),_N_E=n.O()}]);