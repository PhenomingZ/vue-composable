(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{285:function(e,t,o){"use strict";o.r(t);var s=o(154),r=o(69),a={name:"session-storage-example",setup:function(){var e="__vue_sessionStorage_example",t=Object(r.k)(!1),o=Object(s.B)(e,1);return{key:e,supported:o.supported,tabSync:t,storage:o.storage,remove:o.remove}}},n=o(19),p=Object(n.a)(a,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e._v("\n  sessionStorage: "+e._s(e.storage)+"\n  "),o("p",[e._v("\n    supported:\n    "),o("b",{class:{green:e.supported,red:!e.supported}},[e._v(e._s(e.supported))])]),e._v(" "),o("p",[o("b",[e._v("Check the value in the dev tools: `"+e._s(e.key)+"`")])]),e._v(" "),o("label",{attrs:{for:"storage"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.storage,expression:"storage"}],attrs:{name:"storage"},domProps:{value:e.storage},on:{input:function(t){t.target.composing||(e.storage=t.target.value)}}})]),e._v(" "),o("div",[o("button",{on:{click:e.remove}},[e._v("Remove")])])])}),[],!1,null,null,null);t.default=p.exports}}]);