(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),o=n(2),i=n(3),l=n(5),r=n(4),s=n(1),u=n(0),m=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={today:new Date},e.timer=0,e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timer=window.setInterval((function(){e.setState({today:new Date}),console.info(e.state.today.toUTCString().slice(-12,-4))}),1e3)}},{key:"componentDidUpdate",value:function(e){e.clockName!==this.props.clockName&&console.debug("Renamed from ".concat(e.clockName," to ").concat(this.props.clockName))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this.state.today,t=this.props.clockName;return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:e.toUTCString().slice(-12,-4)})]})}}]),n}(s.Component);n(13);function h(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var d=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={clockName:"Clock-0",hasClock:!0},e.timer=0,e.setName=function(){e.setState({clockName:h()})},e.handleLeftClick=function(){e.setState({hasClock:!0})},e.handleRightClick=function(t){t.preventDefault(),e.setState({hasClock:!1})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.timer=window.setInterval(this.setName,3300),document.addEventListener("click",this.handleLeftClick),document.addEventListener("contextmenu",this.handleRightClick)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timer),document.removeEventListener("click",this.handleLeftClick),document.removeEventListener("contextmenu",this.handleRightClick)}},{key:"render",value:function(){var e=this.state,t=e.clockName,n=e.hasClock;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),n&&Object(u.jsx)(m,{clockName:t})]})}}]),n}(s.Component);a.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.1d1a5b2c.chunk.js.map