(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{450:function(t,e,n){"use strict";n.r(e);var a=n(102),u=n(314),r=Object(a.defineComponent)({name:"path-example",setup:function(){var t=Object(a.ref)("user.name"),e=Object(a.ref)(JSON.stringify({user:{name:"test"}})),n=Object(u.G)(Object(a.computed)((function(){return JSON.parse(e.value)})),t,".",(function(){return"Not Found"}));return{inputPath:t,json:e,inputValue:n}}}),i=n(27),o=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"format"}},[n("div",[n("h4",[t._v("Path example")]),t._v(" "),n("div",[t._v("\n      Path:\n      "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputPath,expression:"inputPath"}],domProps:{value:t.inputPath},on:{input:function(e){e.target.composing||(t.inputPath=e.target.value)}}})]),t._v(" "),n("div",[n("p",[t._v("Object")]),t._v(" "),n("textarea",{domProps:{textContent:t._s(t.json)}})]),t._v(" "),n("div",[n("p",[t._v("Value:")]),t._v(" "),n("textarea",{attrs:{disabled:""},domProps:{textContent:t._s(t.inputValue)}})])])])}),[],!1,null,null,null);e.default=o.exports}}]);