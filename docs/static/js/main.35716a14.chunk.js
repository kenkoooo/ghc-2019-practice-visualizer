(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{167:function(t,e,a){t.exports=a(268)},172:function(t,e,a){},173:function(t,e,a){},268:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),r=a(19),s=a.n(r),u=(a(172),a(20)),c=a(21),o=a(23),l=a(22),p=a(24),h=a(3),m=(a(173),a(4));function f(t){var e=t.split(/[\n\s\r\t]+/),a=Number(e[0]);return{R:a,C:Number(e[1]),L:Number(e[2]),H:Number(e[3]),board:e.slice(4,4+a)}}function b(t){var e=t.split(/[\n\r]+/),a=Number(e[0]);return{slices:e.slice(1,1+a).map(function(t){var e=t.split(/[\s\t]+/);return[Number(e[0]),Number(e[1]),Number(e[2]),Number(e[3])]})}}var d=a(64),v=function(t){function e(t,a){var n;return Object(u.a)(this,e),(n=Object(o.a)(this,Object(l.a)(e).call(this,t,a))).state={},n.updateCanvas=n.updateCanvas.bind(Object(h.a)(Object(h.a)(n))),n}return Object(p.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.updateCanvas()}},{key:"componentDidUpdate",value:function(){this.updateCanvas()}},{key:"updateCanvas",value:function(){var t=this.refs.canvas.getContext("2d");t.fillStyle="gray",t.fillRect(0,0,this.props.width,this.props.height),this.props.output&&this.props.output.slices.slice(0,this.props.steps).forEach(function(e){var a=Object(d.a)(e,4),n=a[0],i=a[1],r=a[2],s=a[3];t.fillStyle="green",t.fillRect(i,n,s-i+1,r-n+1)})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("canvas",{ref:"canvas",width:this.props.width,height:this.props.height}))}}]),e}(i.a.Component),g=a(41),O=a.n(g),j=a(61),E=a(63),C=a.n(E);function w(t){return y.apply(this,arguments)}function y(){return(y=Object(j.a)(O.a.mark(function t(e){var a;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=new FileReader,t.abrupt("return",new Promise(function(t,n){a.onerror=function(){a.abort(),n()},a.onload=function(){"string"===typeof a.result?t(a.result):n()},a.readAsText(e)}));case 2:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var k=function(t){function e(t,a){var n;return Object(u.a)(this,e),(n=Object(o.a)(this,Object(l.a)(e).call(this,t,a))).state={value:0},n.handleChange=n.handleChange.bind(Object(h.a)(Object(h.a)(n))),n}return Object(p.a)(e,t),Object(c.a)(e,[{key:"handleChange",value:function(t,e){this.props.onChange&&this.props.onChange(t,e),this.setState({value:e})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(m.b,{variant:"h6"},"Steps: ",this.state.value),i.a.createElement(C.a,{min:this.props.min,max:this.props.max,value:this.state.value,step:1,onChange:this.handleChange}))}}]),e}(i.a.Component),x=a(33),N=function(t){function e(t,a){var n;return Object(u.a)(this,e),(n=Object(o.a)(this,Object(l.a)(e).call(this,t,a))).state={input:null,output:null,message:"",steps:0},n.loadInputFile=n.loadInputFile.bind(Object(h.a)(Object(h.a)(n))),n.loadOutputFile=n.loadOutputFile.bind(Object(h.a)(Object(h.a)(n))),n}return Object(p.a)(e,t),Object(c.a)(e,[{key:"loadInputFile",value:function(t){var e=this;null!==t.target.files&&w(t.target.files[0]).then(function(t){return e.setState({input:f(t)})}).catch(function(t){console.error(t),e.setState({message:t})})}},{key:"loadOutputFile",value:function(t){var e=this;null!==t.target.files&&w(t.target.files[0]).then(function(t){return e.setState({output:b(t)})}).catch(function(t){console.error(t),e.setState({message:t})})}},{key:"render",value:function(){var t=this,e=Object(x.isNull)(this.state.input)?0:this.state.input.R,a=Object(x.isNull)(this.state.input)?0:this.state.input.C,n=Object(x.isNull)(this.state.output)?0:this.state.output.slices.length;return i.a.createElement("div",null,i.a.createElement(m.b,{variant:"h2",gutterBottom:!0},'2019 Practice "Pizza"'),i.a.createElement(m.a,{container:!0,spacing:24},i.a.createElement(m.a,{item:!0,xs:3},i.a.createElement(m.b,{variant:"h6"},"Input:"),i.a.createElement("input",{accept:"application/text",type:"file",id:"input-file",onChange:this.loadInputFile})),i.a.createElement(m.a,{item:!0,xs:3},i.a.createElement(m.b,{variant:"h6"},"Output:"),i.a.createElement("input",{accept:"application/text",type:"file",id:"output-file",onChange:this.loadOutputFile})),i.a.createElement(m.a,{item:!0,xs:3},i.a.createElement(k,{min:0,max:n,onChange:function(e,a){return t.setState({steps:a})}})),i.a.createElement(m.a,{item:!0,xs:12},i.a.createElement(m.b,{variant:"h6"},this.state.message)),i.a.createElement(m.a,{item:!0,xs:12},i.a.createElement(v,{width:a,height:e,input:this.state.input,output:this.state.output,steps:this.state.steps}))))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[167,1,2]]]);
//# sourceMappingURL=main.35716a14.chunk.js.map