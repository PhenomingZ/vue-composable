(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{463:function(e,r,t){"use strict";t.r(r);t(72),t(50);var n=t(40),o=t(102),c=t(314),s=Object(o.defineComponent)({name:"worker-example",setup:function(){Object(o.ref)(1500);var e=Object(c.n)({refreshMs:10}).now,r=Object(n.a)(Array(5e4)).map((function(){return Math.floor(1e6*Math.random())})),t=Object(o.ref)([]),s=Object(o.computed)((function(){return t.value.slice(0,10)})),a=Object(o.computed)((function(){return t.value.slice(-10)})),u=Object(c.S)("/vue-composable/worker.example.js"),l=u.postMessage,i=u.data,v=u.errored,_=u.errorEvent;Object(o.watch)(i,(function(e){t.value=e}),{lazy:!0}),Object(o.watch)(_,(function(e){t.value=["error",e.returnValue]}),{lazy:!0});return{now:e,firstSegment:s,lastSegment:a,sortWorker:function(){l(r)},errored:v,errorEvent:_}}}),a=t(27),u=Object(a.a)(s,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("h3",[e._v("Sort")]),e._v(" "),t("p",[e._v("time: "+e._s(e.now))]),e._v(" "),t("h6",[e._v("\n    The worker can take more than 10 seconds to finish, the timer shouldn't\n    stop while the worker is processing\n  ")]),e._v(" "),t("p",[e._v("\n    Numbers:\n    "),t("b",[e._v(e._s(e.firstSegment))]),e._v("...\n    "),t("b",[e._v(e._s(e.lastSegment))])]),e._v(" "),t("ul",[t("li",[t("button",{on:{click:e.sortWorker}},[e._v("Worker")]),e._v(" "),e.errored?t("p",{style:{color:"red"}},[e._v(e._s(e.errorEvent))]):e._e()])])])}),[],!1,null,null,null);r.default=u.exports}}]);