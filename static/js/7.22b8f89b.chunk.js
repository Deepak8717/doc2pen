(this.webpackJsonpdoc2pen=this.webpackJsonpdoc2pen||[]).push([[7],{152:function(t,e,n){t.exports={canvas:"Canvas_canvas__31aNM",options:"Canvas_options__2cAU1",buttons:"Canvas_buttons__2XOZc",btn_clear:"Canvas_btn_clear__tKPeM",btn_download:"Canvas_btn_download__1_fio",mousePosition:"Canvas_mousePosition__q_QQG"}},153:function(t,e,n){t.exports={Sketch:"Sketch_Sketch__1d42y",title:"Sketch_title__1yAAm"}},164:function(t,e,n){"use strict";n.r(e);var o=n(2),c=n(1),a=n(26),s=n(152),i=n.n(s);var r=function(){var t=Object(c.useRef)(null),e=Object(c.useState)(),n=Object(a.a)(e,2),s=n[0],r=n[1];Object(c.useEffect)((function(){r(t.current.getContext("2d"))}),[]);var u=Object(c.useState)(!1),l=Object(a.a)(u,2),b=l[0],d=l[1],_=Object(c.useState)({x:"",y:""}),j=Object(a.a)(_,2),h=j[0],v=j[1],f=Object(c.useState)({x:"0",y:"0"}),x=Object(a.a)(f,2),O=x[0],p=x[1];function m(e){return{x:e.pageX-t.current.offsetLeft,y:e.pageY-t.current.offsetTop}}return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:i.a.options,children:[Object(o.jsx)("button",{className:"".concat(i.a.buttons," ").concat(i.a.btn_download),onClick:function(){var e=document.createElement("a");e.download="drawing.png",e.href=t.current.toDataURL("image/png"),e.click()},children:"Download"}),Object(o.jsx)("button",{className:"".concat(i.a.buttons," ").concat(i.a.btn_clear),onClick:function(){s.clearRect(0,0,t.current.width,t.current.height)},children:"Clear"})]}),Object(o.jsx)("canvas",{ref:t,width:"700px",height:"500px",className:i.a.canvas,onMouseDown:function(t){if(console.log(t),0===t.button){var e=m(t);d(!0),v(e)}},onMouseMove:function(t){var e=m(t);p(e),b&&(!function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.x,o=t.y,c=t.x1,a=t.y1,i=e.color,r=void 0===i?"tomato":i,u=e.width,l=void 0===u?1:u;s.strokeStyle=r,s.lineJoin="round",s.lineWidth=l,s.beginPath(),s.moveTo(n,o),s.lineTo(c,a),s.closePath(),s.stroke()}({x:h.x,y:h.y,x1:e.x,y1:e.y}),v(e))},onMouseUp:function(){d(!1)},onMouseLeave:function(){d(!1)}}),Object(o.jsxs)("div",{className:i.a.mousePosition,children:["Mouse Position: (x, y) = (",O.x,", ",O.y,") "]})]})},u=n(153),l=n.n(u);e.default=function(){return Object(o.jsxs)("section",{className:l.a.Sketch,children:[Object(o.jsx)("div",{className:l.a.title,children:"Sketch"}),Object(o.jsx)("div",{className:l.a.body,children:Object(o.jsx)(r,{})})]})}}}]);
//# sourceMappingURL=7.22b8f89b.chunk.js.map