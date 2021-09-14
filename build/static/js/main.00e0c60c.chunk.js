(window["webpackJsonpapp-react"]=window["webpackJsonpapp-react"]||[]).push([[0],{194:function(e,t,a){e.exports=a(372)},199:function(e,t,a){},200:function(e,t,a){},372:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(8),c=a.n(l),o=(a(199),a(77)),i=a(78),s=a(83),u=a(79),d=a(84),m=a(43),p=a(52),E=(a(200),a(201),a(374)),f=a(375),y=a(376),g=a(10),h=a(381),v=a(113),b=a(177),k=a(141),w=a(378),O=a(379),x=a(373),S=a(35),j=a(377);function I(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?I(a,!0).forEach((function(t){Object(b.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):I(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var P=r.a.createContext(),T=w.a.create()((function(e){var t=e.form,a=(e.index,Object(k.a)(e,["form","index"]));return r.a.createElement(P.Provider,{value:t},r.a.createElement("tr",a))})),A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={editing:!1},a.toggleEdit=function(){var e=!a.state.editing;a.setState({editing:e},(function(){e&&a.input.focus()}))},a.save=function(e){var t=a.props,n=t.record,r=t.handleSave;a.form.validateFields((function(t,l){t&&t[e.currentTarget.id]||(a.toggleEdit(),r(C({},n,{},l)))}))},a.renderCell=function(e){a.form=e;var t=a.props,n=t.children,l=t.dataIndex,c=t.record,o=t.title;return a.state.editing?r.a.createElement(w.a.Item,{style:{margin:0}},e.getFieldDecorator(l,{rules:[{required:!0,message:"".concat(o," is required.")}],initialValue:c[l]})(r.a.createElement(O.a,{ref:function(e){return a.input=e},onPressEnter:a.save,onBlur:a.save}))):r.a.createElement("div",{className:"editable-cell-value-wrap",style:{paddingRight:24},onClick:a.toggleEdit},n)},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.editable,a=(e.dataIndex,e.title,e.record,e.index,e.handleSave,e.children),n=Object(k.a)(e,["editable","dataIndex","title","record","index","handleSave","children"]);return r.a.createElement("td",n,t?r.a.createElement(P.Consumer,null,this.renderCell):a)}}]),t}(r.a.Component),D=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleDelete=function(e){var t=Object(v.a)(a.state.dataSource);a.setState({dataSource:t.filter((function(t){return t.key!==e}))})},a.handleAdd=function(){var e=a.state,t=e.count,n=e.dataSource,r={key:t,name:"Edward King ".concat(t),age:32,address:"London, Park Lane no. ".concat(t)};a.setState({dataSource:[].concat(Object(v.a)(n),[r]),count:t+1})},a.handleSave=function(e){var t=Object(v.a)(a.state.dataSource),n=t.findIndex((function(t){return e.key===t.key})),r=t[n];t.splice(n,1,C({},r,{},e)),a.setState({dataSource:t})},a.columns=[{title:"name",dataIndex:"name",width:"30%",editable:!0},{title:"age",dataIndex:"age"},{title:"address",dataIndex:"address"},{title:"operation",dataIndex:"operation",render:function(e,t){return a.state.dataSource.length>=1?r.a.createElement(x.a,{title:"Sure to delete?",onConfirm:function(){return a.handleDelete(t.key)}},r.a.createElement("a",null,"Delete")):null}}],a.state={dataSource:[{key:"0",name:"Edward King 0",age:"32",address:"London, Park Lane no. 0"},{key:"1",name:"Edward King 1",age:"32",address:"London, Park Lane no. 1"}],count:2},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.dataSource,a={body:{row:T,cell:A}},n=this.columns.map((function(t){return t.editable?C({},t,{onCell:function(a){return{record:a,editable:t.editable,dataIndex:t.dataIndex,title:t.title,handleSave:e.handleSave}}}):t}));return r.a.createElement("div",null,r.a.createElement(S.a,{onClick:this.handleAdd,type:"primary",style:{marginBottom:16}},"Add a row"),r.a.createElement(j.a,{components:a,rowClassName:function(){return"editable-row"},bordered:!0,dataSource:t,columns:n}))}}]),t}(r.a.Component),L=a(382),B=a(380);function N(e){var t=function(e){var t;switch(e.date()){case 8:t=[{type:"warning",content:"This is warning event."},{type:"success",content:"This is usual event."}];break;case 10:t=[{type:"warning",content:"This is warning event."},{type:"success",content:"This is usual event."},{type:"error",content:"This is error event."}];break;case 15:t=[{type:"warning",content:"This is warning event"},{type:"success",content:"This is very long usual event\u3002\u3002...."},{type:"error",content:"This is error event 1."},{type:"error",content:"This is error event 2."},{type:"error",content:"This is error event 3."},{type:"error",content:"This is error event 4."}]}return t||[]}(e);return r.a.createElement("ul",{className:"events"},t.map((function(e){return r.a.createElement("li",{key:e.content},r.a.createElement(L.a,{status:e.type,text:e.content}))})))}function R(e){var t=function(e){if(8===e.month())return 1394}(e);return t?r.a.createElement("div",{className:"notes-month"},r.a.createElement("section",null,t),r.a.createElement("span",null,"Backlog number")):null}function F(e){console.log(e)}var K=function(){return r.a.createElement(B.a,{dateCellRender:N,monthCellRender:R,onSelect:F})},z=a(71),G=E.a.Sider,H=z.a.SubMenu,M=function(e){console.log(e);var t="";return e.collapsed||(t="Maintenace"),r.a.createElement(G,{trigger:null,collapsible:!0,collapsed:e.collapsed},r.a.createElement("div",{className:"logo"}),r.a.createElement(z.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"]},r.a.createElement(z.a.Item,{key:"1"},r.a.createElement(g.a,{type:"calendar"}),r.a.createElement("span",null,"Calendar"),r.a.createElement(m.b,{to:"/calendar"})),r.a.createElement(H,{key:"sub1",title:r.a.createElement("span",null,r.a.createElement(g.a,{type:"tool"}),t)},r.a.createElement(z.a.Item,{key:"3"}," ",r.a.createElement(g.a,{type:"mail"}),r.a.createElement("span",null,"Email Recipient"),r.a.createElement(m.b,{to:"/user"})),r.a.createElement(z.a.Item,{key:"4"}," ",r.a.createElement(g.a,{type:"phone"}),r.a.createElement("span",null,"Alloted for Callback"),r.a.createElement(m.b,{to:"/user"})),r.a.createElement(z.a.Item,{key:"2"}," ",r.a.createElement(g.a,{type:"user"}),r.a.createElement("span",null,"User Account"),r.a.createElement(m.b,{to:"/user"})),r.a.createElement(z.a.Item,{key:"5"}," ",r.a.createElement(g.a,{type:"usergroup-add"}),r.a.createElement("span",null,"Group Lead"),r.a.createElement(m.b,{to:"/user"})),r.a.createElement(z.a.Item,{key:"6"}," ",r.a.createElement(g.a,{type:"issues-close"}),r.a.createElement("span",null,"CRM Case"),r.a.createElement(m.b,{to:"/user"}))),r.a.createElement(z.a.Item,{key:"7"}," ",r.a.createElement(g.a,{type:"export"}),r.a.createElement("span",null,"Report Generation"),r.a.createElement(m.b,{to:"/user"}))))},q=E.a.Header,J=(E.a.Sider,E.a.Content),V=E.a.Footer,W=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={collapsed:!1},a.toggle=function(){a.setState({collapsed:!a.state.collapsed})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=(new Date).getFullYear();return r.a.createElement(m.a,null,r.a.createElement(E.a,{style:{minHeight:"100vh"}},r.a.createElement(M,{collapsed:this.state.collapsed}),r.a.createElement(E.a,null,r.a.createElement(q,{style:{background:"#fff",padding:0}},r.a.createElement(f.a,{type:"flex",justify:"end"},r.a.createElement(y.a,{span:6},r.a.createElement(g.a,{className:"trigger",type:this.state.collapsed?"menu-unfold":"menu-fold",onClick:this.toggle})),r.a.createElement(y.a,{span:6}),r.a.createElement(y.a,{span:3}),r.a.createElement(y.a,{span:2}),r.a.createElement(y.a,{span:6},r.a.createElement("span",{style:{fontSize:"14px",color:"#001529"}},"Abel Eric A. Go | 702 - APPLICATION_DEV")),r.a.createElement(y.a,{span:1},r.a.createElement(g.a,{type:"logout",style:{fontSize:"20px",color:"#001529"},theme:"outlined"})))),r.a.createElement(h.a,{style:{margin:"16px 0px 0px 16px"}},r.a.createElement(h.a.Item,null,"Home"),r.a.createElement(h.a.Item,null,"Belkin Tracker")),r.a.createElement(J,{style:{margin:"24px 16px",padding:24,background:"#fff"}},r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:K}),r.a.createElement(p.a,{path:"/calendar",component:K}),r.a.createElement(p.a,{path:"/user",component:D}))),r.a.createElement(V,{style:{textAlign:"center",padding:"12px 25px"}},r.a.createElement("span",{style:{fontSize:"14px",color:"#001529"}},"Call Back Tracker \xa9",e)))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[194,1,2]]]);
//# sourceMappingURL=main.00e0c60c.chunk.js.map