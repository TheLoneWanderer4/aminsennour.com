(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(13)},13:function(e,t,n){"use strict";n.r(t);var a=n(6),s=n(7),r=n(10),i=n(8),c=n(4),l=n(11),u=n(0),h=n.n(u),o=n(9),f=n.n(o);n(19),n(20);function m(e){return h.a.createElement("div",{className:"win-message card"},e.winner," won with ",e.remaining," armies left.")}function d(e){return h.a.createElement("div",{className:"card"},"Attack rolled : ",e.attack," | ","Defense rolled : ",e.defense,"\n",e.winner," won this round.")}function k(e){return h.a.createElement("div",{className:"reset card",onClick:e.onClick}," ","Reset"," ")}var v=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(i.a)(t).call(this,e))).state={Attack:0,AttackRoll:0,Defense:0,DefenseRoll:0,roundWinner:"",canChange:!0,win:!1},n.handleChangeAttack=n.handleChangeAttack.bind(Object(c.a)(n)),n.handleChangeDefense=n.handleChangeDefense.bind(Object(c.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(c.a)(n)),n}return Object(l.a)(t,e),Object(s.a)(t,[{key:"handleChangeAttack",value:function(e){this.state.canChange&&e.target.value>=0&&this.setState({Attack:parseInt(e.target.value)})}},{key:"handleChangeDefense",value:function(e){this.state.canChange&&e.target.value>=0&&this.setState({Defense:parseInt(e.target.value)})}},{key:"logic",value:function(){this.state.win||(this.state.Attack<=1||0===parseInt(this.state.Defense)?this.setState({win:!0}):this.setState(function(e,t){var n,a=(r=parseInt(e),g(function(e){return e>3?3:3==e?2:2==e?1:0}(r))),s=function(e){var t=function(e){return Math.round(6*Math.random()),e>=2?2:e>0?1:0}(e);return console.log(t),g(t)}(parseInt(t));var r;s>=a?(e-=1,n="Defense"):(t-=1,n="Attack");return{Attack:e,Defense:t,AttackRoll:a,DefenseRoll:s,roundWinner:n}}(this.state.Attack,this.state.Defense)))}},{key:"handleSubmit",value:function(e){this.logic(),this.setState({canChange:!1}),e.preventDefault()}},{key:"renderWin",value:function(){var e="",t=0;if(0==this.state.Defense?(e="Attack",t=this.state.Attack):(e="Defense",t=this.state.Defense),this.state.win)return h.a.createElement(m,{winner:e,remaining:t})}},{key:"handleReset",value:function(){this.setState({Attack:0,Defense:0,canChange:!0,win:!1})}},{key:"renderInfo",value:function(){if(!this.state.canChange)return h.a.createElement(d,{attack:this.state.AttackRoll,defense:this.state.DefenseRoll,winner:this.state.roundWinner})}},{key:"render",value:function(){var e=this;return h.a.createElement("form",{onSubmit:this.handleSubmit,className:"form"},h.a.createElement("h1",{className:"card title"}," Risk Calc "),h.a.createElement("label",{className:"form-element card"},"Attack:",h.a.createElement("input",{className:"form-input",type:"number",value:this.state.Attack,onChange:this.handleChangeAttack})),h.a.createElement("label",{className:"form-element card"},"Defense:",h.a.createElement("input",{className:"form-input",type:"number",value:this.state.Defense,onChange:this.handleChangeDefense})),h.a.createElement("input",{className:"submit card",type:"submit",value:"Submit"}),this.renderInfo(),this.renderWin(),h.a.createElement(k,{onClick:function(){return e.handleReset()}}))}}]),t}(h.a.Component);function g(e){for(var t=0,n=0,a=0;a<e;a++)(n=Math.round(6*Math.random()))>t&&(t=n);return t}f.a.render(h.a.createElement(v,null),document.getElementById("root"))},19:function(e,t,n){},28:function(e,t){}},[[12,1,2]]]);
//# sourceMappingURL=main.8d8773e3.chunk.js.map