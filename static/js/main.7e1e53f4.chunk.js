(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),o=c(6),l=c.n(o),i=c(1),r=c(2),s=c(4),m=c(3),u=function(e){var t=e.text,c=e.onClick;return a.a.createElement("button",{type:"button",onClick:c},t)},k=function(e){Object(s.a)(c,e);var t=Object(m.a)(c);function c(){var e;Object(i.a)(this,c);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={clockName:e.props.clockName,time:(new Date).toLocaleTimeString,isClockVisible:e.props.isClockVisible},e.showClock=function(){return e.setState({isClockVisible:!0})},e.hideClock=function(){return e.setState({isClockVisible:!1})},e.changeName=function(){return e.setState({clockName:Math.floor(100*Math.random())})},e}return Object(r.a)(c,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval((function(){e.state.isClockVisible&&(e.setState({time:(new Date).toLocaleTimeString()}),console.log(e.state.time))}),1e3)}},{key:"componentDidUpdate",value:function(e,t){t.clockName!==this.state.clockName&&console.log("The Clock was renamed from\n        ".concat(t.clockName," to ").concat(this.state.clockName))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"React clock"," ",this.state.clockName),a.a.createElement("p",null,"Current time:"," ",a.a.createElement("span",null,this.state.isClockVisible&&this.state.time)),a.a.createElement(u,{text:"Show clock",onClick:this.showClock}),a.a.createElement(u,{text:"Hide clock",onClick:this.hideClock}),a.a.createElement(u,{text:"Set random name",onClick:this.changeName}))}}]),c}(a.a.Component),h=(c(12),function(e){Object(s.a)(c,e);var t=Object(m.a)(c);function c(){var e;Object(i.a)(this,c);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={isClockVisible:!0,clockName:100},e}return Object(r.a)(c,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},this.state.isClockVisible&&a.a.createElement(k,{isClockVisible:this.state.isClockVisible,clockName:this.state.clockName}))}}]),c}(a.a.Component));l.a.render(a.a.createElement(h,null),document.getElementById("root"))},7:function(e,t,c){e.exports=c(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.7e1e53f4.chunk.js.map