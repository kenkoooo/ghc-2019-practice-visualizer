(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{156:function(t,e,a){t.exports=a(244)},161:function(t,e,a){},162:function(t,e,a){},244:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),r=a(48),s=a.n(r),u=(a(161),a(11)),o=a(12),c=a(14),l=a(13),p=a(15),h=a(2),m=(a(162),a(4));function f(t){var e=t.split(/[\n\s\r\t]+/),a=Number(e[0]);return{R:a,C:Number(e[1]),L:Number(e[2]),H:Number(e[3]),board:e.slice(4,4+a)}}function d(t){var e=t.split(/[\n\r]+/),a=Number(e[0]);return{slices:e.slice(1,1+a).map(function(t){var e=t.split(/[\s\t]+/);return[Number(e[0]),Number(e[1]),Number(e[2]),Number(e[3])]})}}var v=a(51),b=function(t){function e(t,a){var n;return Object(u.a)(this,e),(n=Object(c.a)(this,Object(l.a)(e).call(this,t,a))).state={},n.updateCanvas=n.updateCanvas.bind(Object(h.a)(Object(h.a)(n))),n}return Object(p.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){this.updateCanvas()}},{key:"componentDidUpdate",value:function(){this.updateCanvas()}},{key:"updateCanvas",value:function(){var t=this.refs.canvas.getContext("2d");t.fillStyle="gray",t.fillRect(0,0,this.props.width,this.props.height),this.props.output&&this.props.output.slices.slice(0,this.props.steps).forEach(function(e){var a=Object(v.a)(e,4),n=a[0],i=a[1],r=a[2],s=a[3];t.fillStyle="green",t.fillRect(i,n,s-i+1,r-n+1)})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("canvas",{ref:"canvas",width:this.props.width,height:this.props.height}))}}]),e}(i.a.Component),g=a(29),O=a.n(g),j=a(49);function C(t){return E.apply(this,arguments)}function E(){return(E=Object(j.a)(O.a.mark(function t(e){var a;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=new FileReader,t.abrupt("return",new Promise(function(t,n){a.onerror=function(){a.abort(),n()},a.onload=function(){"string"===typeof a.result?t(a.result):n()},a.readAsText(e)}));case 2:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var y=function(t){function e(t,a){var n;return Object(u.a)(this,e),(n=Object(c.a)(this,Object(l.a)(e).call(this,t,a))).state={value:0},n.handleChange=n.handleChange.bind(Object(h.a)(Object(h.a)(n))),n}return Object(p.a)(e,t),Object(o.a)(e,[{key:"handleChange",value:function(t){var e=t.target.value;this.props.onChange&&this.props.onChange(t,e),this.setState({value:e})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("input",{type:"range",min:this.props.min,max:this.props.max,value:this.state.value,step:1,onChange:this.handleChange}),i.a.createElement("input",{type:"number",min:this.props.min,max:this.props.max,value:this.state.value,step:1,onChange:this.handleChange}))}}]),e}(i.a.Component),w=a(24),x=function(t){function e(t,a){var n;return Object(u.a)(this,e),(n=Object(c.a)(this,Object(l.a)(e).call(this,t,a))).state={input:null,output:null,message:"",steps:0},n.loadInputFile=n.loadInputFile.bind(Object(h.a)(Object(h.a)(n))),n.loadOutputFile=n.loadOutputFile.bind(Object(h.a)(Object(h.a)(n))),n}return Object(p.a)(e,t),Object(o.a)(e,[{key:"loadInputFile",value:function(t){var e=this;null!==t.target.files&&C(t.target.files[0]).then(function(t){return e.setState({input:f(t)})}).catch(function(t){console.error(t),e.setState({message:t})})}},{key:"loadOutputFile",value:function(t){var e=this;null!==t.target.files&&C(t.target.files[0]).then(function(t){return e.setState({output:d(t)})}).catch(function(t){console.error(t),e.setState({message:t})})}},{key:"render",value:function(){var t=this,e=Object(w.isNull)(this.state.input)?0:this.state.input.R,a=Object(w.isNull)(this.state.input)?0:this.state.input.C,n=Object(w.isNull)(this.state.output)?0:this.state.output.slices.length;return i.a.createElement("div",null,i.a.createElement(m.b,{variant:"h2",gutterBottom:!0},'2019 Practice "Pizza"'),i.a.createElement(m.a,{container:!0,spacing:24},i.a.createElement(m.a,{item:!0,xs:3},i.a.createElement(m.b,{variant:"h6"},"Input:"),i.a.createElement("input",{accept:"application/text",type:"file",id:"input-file",onChange:this.loadInputFile})),i.a.createElement(m.a,{item:!0,xs:3},i.a.createElement(m.b,{variant:"h6"},"Output:"),i.a.createElement("input",{accept:"application/text",type:"file",id:"output-file",onChange:this.loadOutputFile})),i.a.createElement(m.a,{item:!0,xs:3},i.a.createElement(y,{min:0,max:n,onChange:function(e,a){return t.setState({steps:a})}})),i.a.createElement(m.a,{item:!0,xs:12},i.a.createElement(m.b,{variant:"h6"},this.state.message)),i.a.createElement(m.a,{item:!0,xs:12},i.a.createElement(b,{width:a,height:e,input:this.state.input,output:this.state.output,steps:this.state.steps}))))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[156,1,2]]]);
//# sourceMappingURL=main.e5ccf280.chunk.js.map