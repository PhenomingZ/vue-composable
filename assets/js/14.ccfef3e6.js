(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{427:function(e,s,t){"use strict";t.r(s);var a=t(314),n=t(102),o={name:"broadcast-channel-example",setup:function(){var e=Object(a.j)("composable-example"),s=e.supported,t=e.data,o=e.send,r=Object(n.ref)("");return{supported:s,data:t,message:r,submitMessage:function(){o(r.value),r.value=""}}}},r=t(27),u=Object(r.a)(o,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("p",[e._v("\n    Supported: "),t("b",[e._v(e._s(e.supported))])]),e._v(" "),t("p",[e._v("\n    To test please open 2 or more tabs, press send and all the other tabs\n    should show the message\n  ")]),e._v(" "),e.data?t("p",[e._v("received: "+e._s(e.data))]):e._e(),e._v(" "),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{placeholder:"Write a message"},domProps:{value:e.message},on:{keydown:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.submitMessage(s)},input:function(s){s.target.composing||(e.message=s.target.value)}}}),e._v(" "),t("button",{on:{click:e.submitMessage}},[e._v("send")])])])}),[],!1,null,null,null);s.default=u.exports}}]);