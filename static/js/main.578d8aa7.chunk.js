(this.webpackJsonpgradient=this.webpackJsonpgradient||[]).push([[0],{11:function(e,t,n){e.exports={controls:"styles_controls__D3bDD",screen:"styles_screen__2I3eW",color:"styles_color__3V4cu",gradient:"styles_gradient__2DX3d",slider:"styles_slider__u0Gzs"}},197:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(78),s=n.n(a),i=(n(87),n(26)),o=n(49),l=n(12),u=n(29),j=n(11),b=n.n(j),d=n(51),f=n(4),O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#ffffff",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#000000",n=function(e){var t=Number(e).toString(16);return t.length<2&&(t="0"+t),t},c=e.replace("#",""),r=t.replace("#",""),a=[c.slice(0,2),c.slice(2,4),c.slice(4,6)],s=[r.slice(0,2),r.slice(2,4),r.slice(4,6)],i=a.map((function(e,t){return Math.min(255,Math.max(0,Math.round((parseInt(e,16)+parseInt(s[t],16))/2)))}));return"#"+i.map((function(e){return n(e)})).join("")};var h=function(){var e=Object(c.useState)(["#ffffff","#000000"]),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(5),s=Object(u.a)(a,2),j=s[0],h=s[1],g=Object(c.useState)(n),p=Object(u.a)(g,2),v=p[0],m=p[1],x=function(e,t,n){return[].concat(Object(l.a)(e.slice(0,t)),[n],Object(l.a)(e.slice(t)))},_=function(e){return function(t){r((function(n){var c=Object(l.a)(n);return c[e]=t.hex,c}))}};return Object(f.jsxs)("div",{className:b.a.screen,children:[Object(f.jsxs)("div",{className:b.a.controls,children:[Object(f.jsx)("div",{className:b.a.slider,children:Object(f.jsx)(d.a,{color:n[0],onChangeComplete:_(0)})}),Object(f.jsx)("div",{className:b.a.slider,children:Object(f.jsx)(d.a,{color:n[1],onChangeComplete:_(1)})}),Object(f.jsx)("span",{children:"Steps"}),Object(f.jsx)("input",{max:"10",value:"".concat(j),onChange:function(e){return h(parseInt(e.target.value))},type:"number"}),Object(f.jsx)("button",{onClick:function(){for(var e=0,t=Object(l.a)(n),c=[],r={};e<j;){for(var a in r=t.reduce((function(e,n,c,r){return c===r.length-1?e:Object(o.a)(Object(o.a)({},e),{},Object(i.a)({},c+1+Object.keys(e).length,O(n,t[c+1])))}),{}),c=Object(l.a)(t),r)a&&(c=x(c,+a,r[a]));t=Object(l.a)(c),e++}m(t)},children:"Generate"})]}),Object(f.jsx)("div",{className:b.a.gradient,children:v.map((function(e,t){return Object(f.jsx)("div",{className:b.a.color,style:{backgroundColor:e}},e+t)}))})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,199)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(h,{})}),document.getElementById("root")),g()},87:function(e,t,n){}},[[197,1,2]]]);
//# sourceMappingURL=main.578d8aa7.chunk.js.map