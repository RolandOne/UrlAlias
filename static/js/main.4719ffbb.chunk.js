(this.webpackJsonpurlproject=this.webpackJsonpurlproject||[]).push([[0],{241:function(e,t,n){n(173).Modal;e.exports={baseurl:"https://mwe89vnq4j.execute-api.us-east-1.amazonaws.com/dev"}},249:function(e,t,n){"use strict";n.r(t);var a=n(15),i=n(0),s=n.n(i),l=n(69),c=n.n(l),r=n(200),o=n(301),h=n(300),d=n(194),u=n(195),g=n(196),b=n(75),j=n(204),O=n(203),x=n(89),U=n(298),A=n(299),m=n(197),p=n.n(m),v=n(241),f=function(e){Object(j.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={success:!1,buttonLoading:!0,warning:!1,U2A:!0},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a.toggleU2A=a.toggleU2A.bind(Object(b.a)(a)),a.toggleA2U=a.toggleA2U.bind(Object(b.a)(a)),a}return Object(g.a)(n,[{key:"handleChange",value:function(e,t){var n=t.name,a=t.value;this.setState(Object(d.a)({},n,a))}},{key:"toggleU2A",value:function(e){console.log("toggleU2A"),this.setState({U2A:!0})}},{key:"toggleA2U",value:function(e){console.log("toggleA2U"),this.setState({U2A:!1})}},{key:"handleSubmit",value:function(e){var t=this;console.log("".concat(this.state.id," ").concat(this.state.originalUrl)),console.log(this.state),console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/UrlAlias",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0})),p.a.post(v.baseurl+"/create",{id:this.state.id,originalUrl:this.state.originalUrl}).then((function(e){t.setState({success:!0})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(x.a.Group,{size:"large",children:[Object(a.jsx)(x.a,{onClick:this.toggleU2A,children:"Create Alias"}),Object(a.jsx)(x.a.Or,{}),Object(a.jsx)(x.a,{onClick:this.toggleA2U,children:"Decode Alias"})]}),Object(a.jsx)(a.Fragment,{children:this.state.U2A?Object(a.jsxs)(U.a,{onSubmit:this.handleSubmit,warning:this.state.warning,success:this.state.success,children:[Object(a.jsx)(U.a.Input,{fluid:!0,label:"Original Url",placeholder:"https://facebookcom",name:"originalUrl",required:!0,onChange:this.handleChange,value:this.state.originalUrl}),Object(a.jsx)(U.a.Input,{fluid:!0,label:"Url Alias",placeholder:"fb",name:"id",required:!0,onChange:this.handleChange,value:this.state.id}),Object(a.jsx)(A.a,{warning:!0,header:"Warning",content:"Error"}),Object(a.jsx)(x.a,{type:"submit",loading:!1,children:"Generate Alias Url"}),Object(a.jsx)(A.a,{success:!0,header:"Success this is your Alias Url",children:Object(a.jsx)("a",{href:"".concat(v.baseurl+"/go/"+this.state.id),target:"_blank",children:"".concat(v.baseurl+"/go/"+this.state.id)})})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(U.a.Input,{fluid:!0,label:"Url Alias",placeholder:"fb",name:"id",required:!0,onChange:this.handleChange,value:this.state.id}),Object(a.jsx)(x.a,{type:"submit",loading:!1,children:"Decode Alias Url"})]})})]})}}]),n}(i.Component);n(248);var C=function(){return Object(a.jsx)(r.a,{textAlign:"center",style:{height:"100vh"},verticalAlign:"middle",children:Object(a.jsxs)(r.a.Column,{style:{maxWidth:450},children:[Object(a.jsx)(o.a,{as:"h2",color:"teal",textAlign:"center",children:"      "}),Object(a.jsx)(h.a,{children:Object(a.jsx)(f,{})})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,303)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,l=t.getTTFB;n(e),a(e),i(e),s(e),l(e)}))};c.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(C,{})}),document.getElementById("root")),S()}},[[249,1,2]]]);
//# sourceMappingURL=main.4719ffbb.chunk.js.map