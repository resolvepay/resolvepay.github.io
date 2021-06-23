/*! For license information please see 7f5f5e82f121a3c459e6218e8d9841b3a6c462f6-ada57af8044b6a640c7e.js.LICENSE.txt */
(self.webpackChunkresolve_web_gatsby=self.webpackChunkresolve_web_gatsby||[]).push([[7809],{3549:function(e){e.exports=function(){for(var e=arguments.length,t=[],n=0;n<e;n++)t[n]=arguments[n];if(0!==(t=t.filter((function(e){return null!=e}))).length)return 1===t.length?t[0]:t.reduce((function(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}))}},5488:function(e){"use strict";var t=Object.prototype.hasOwnProperty;function n(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}e.exports=function(e,r){if(n(e,r))return!0;if("object"!=typeof e||null===e||"object"!=typeof r||null===r)return!1;var a=Object.keys(e),i=Object.keys(r);if(a.length!==i.length)return!1;for(var o=0;o<a.length;o++)if(!t.call(r,a[o])||!n(e[a[o]],r[a[o]]))return!1;return!0}},5126:function(e,t,n){"use strict";t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=c(n(3549)),i=c(n(7294)),o=c(n(5697)),s=(c(n(9716)),n(3708));function c(e){return e&&e.__esModule?e:{default:e}}o.default.any,o.default.func,o.default.node;var l=function(e){function t(n,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n,a));return i.performAppear=function(e,t){i.currentlyTransitioningKeys[e]=!0,t.componentWillAppear?t.componentWillAppear(i._handleDoneAppearing.bind(i,e,t)):i._handleDoneAppearing(e,t)},i._handleDoneAppearing=function(e,t){t.componentDidAppear&&t.componentDidAppear(),delete i.currentlyTransitioningKeys[e];var n=(0,s.getChildMapping)(i.props.children);n&&n.hasOwnProperty(e)||i.performLeave(e,t)},i.performEnter=function(e,t){i.currentlyTransitioningKeys[e]=!0,t.componentWillEnter?t.componentWillEnter(i._handleDoneEntering.bind(i,e,t)):i._handleDoneEntering(e,t)},i._handleDoneEntering=function(e,t){t.componentDidEnter&&t.componentDidEnter(),delete i.currentlyTransitioningKeys[e];var n=(0,s.getChildMapping)(i.props.children);n&&n.hasOwnProperty(e)||i.performLeave(e,t)},i.performLeave=function(e,t){i.currentlyTransitioningKeys[e]=!0,t.componentWillLeave?t.componentWillLeave(i._handleDoneLeaving.bind(i,e,t)):i._handleDoneLeaving(e,t)},i._handleDoneLeaving=function(e,t){t.componentDidLeave&&t.componentDidLeave(),delete i.currentlyTransitioningKeys[e];var n=(0,s.getChildMapping)(i.props.children);n&&n.hasOwnProperty(e)?i.keysToEnter.push(e):i.setState((function(t){var n=r({},t.children);return delete n[e],{children:n}}))},i.childRefs=Object.create(null),i.state={children:(0,s.getChildMapping)(n.children)},i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentWillMount=function(){this.currentlyTransitioningKeys={},this.keysToEnter=[],this.keysToLeave=[]},t.prototype.componentDidMount=function(){var e=this.state.children;for(var t in e)e[t]&&this.performAppear(t,this.childRefs[t])},t.prototype.componentWillReceiveProps=function(e){var t=(0,s.getChildMapping)(e.children),n=this.state.children;for(var r in this.setState({children:(0,s.mergeChildMappings)(n,t)}),t){var a=n&&n.hasOwnProperty(r);!t[r]||a||this.currentlyTransitioningKeys[r]||this.keysToEnter.push(r)}for(var i in n){var o=t&&t.hasOwnProperty(i);!n[i]||o||this.currentlyTransitioningKeys[i]||this.keysToLeave.push(i)}},t.prototype.componentDidUpdate=function(){var e=this,t=this.keysToEnter;this.keysToEnter=[],t.forEach((function(t){return e.performEnter(t,e.childRefs[t])}));var n=this.keysToLeave;this.keysToLeave=[],n.forEach((function(t){return e.performLeave(t,e.childRefs[t])}))},t.prototype.render=function(){var e=this,t=[],n=function(n){var r=e.state.children[n];if(r){var o="string"!=typeof r.ref,s=e.props.childFactory(r),c=function(t){e.childRefs[n]=t};s===r&&o&&(c=(0,a.default)(r.ref,c)),t.push(i.default.cloneElement(s,{key:n,ref:c}))}};for(var o in this.state.children)n(o);var s=r({},this.props);return delete s.transitionLeave,delete s.transitionName,delete s.transitionAppear,delete s.transitionEnter,delete s.childFactory,delete s.transitionLeaveTimeout,delete s.transitionEnterTimeout,delete s.transitionAppearTimeout,delete s.component,i.default.createElement(this.props.component,s,t)},t}(i.default.Component);l.displayName="TransitionGroup",l.propTypes={},l.defaultProps={component:"span",childFactory:function(e){return e}},t.default=l,e.exports=t.default},3708:function(e,t,n){"use strict";t.__esModule=!0,t.getChildMapping=function(e){if(!e)return e;var t={};return r.Children.map(e,(function(e){return e})).forEach((function(e){t[e.key]=e})),t},t.mergeChildMappings=function(e,t){function n(n){return t.hasOwnProperty(n)?t[n]:e[n]}e=e||{},t=t||{};var r={},a=[];for(var i in e)t.hasOwnProperty(i)?a.length&&(r[i]=a,a=[]):a.push(i);var o=void 0,s={};for(var c in t){if(r.hasOwnProperty(c))for(o=0;o<r[c].length;o++){var l=r[c][o];s[r[c][o]]=n(l)}s[c]=n(c)}for(o=0;o<a.length;o++)s[a[o]]=n(a[o]);return s};var r=n(7294)},1543:function(e,t,n){"use strict";n.d(t,{Z:function(){return ct}});n(3316);var r=n(9756),a=n(7294);function i(){return a.createElement("svg",{width:"18px",height:"18px",viewBox:"0 0 18 18",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},a.createElement("g",{id:"Symbols",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},a.createElement("g",{id:"content/faq/unselected",transform:"translate(-1389.000000, -37.000000)",fill:"#0F2454"},a.createElement("g",{id:"icons/expand",transform:"translate(1386.000000, 34.000000)"},a.createElement("g",{id:"Group-11",transform:"translate(3.000000, 3.000000)"},a.createElement("polygon",{id:"Path",points:"10.5 10.5 10.5 18 7.5 18 7.5 10.5 0 10.5 0 7.5 7.5 7.5 7.5 0 10.5 0 10.5 7.5 18 7.5 18 10.5"}))))))}function o(){return a.createElement("svg",{width:"18px",height:"6px",viewBox:"0 0 36 6",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},a.createElement("g",{id:"Symbols",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},a.createElement("g",{id:"icons/collapse",transform:"translate(-6.000000, -21.000000)",fill:"#0F2454"},a.createElement("g",{id:"Group-11",transform:"translate(6.000000, 21.000000)"},a.createElement("polygon",{id:"Path",points:"0 6 0 0 36 0 36 6"})))))}function s(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=[];return e.forEach((function(e){Array.isArray(e)?n.push.apply(n,e):n.push(e)})),n}var c=s;var l=function(e){for(var t,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return"function"==typeof e?(t=e).call.apply(t,[null].concat(n)):e},p=function(e){return{kind:"propsCallback",callback:e}};function u(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=c.apply(void 0,e);return{staticCallbacks:n.filter((function(e){return e.staticCallback})).map((function(e){return e.staticCallback})),instanceCallbacks:function(){var e=[];return n.forEach((function(t){if(t.instanceCallbacks){var n=l(t.instanceCallbacks);n&&e.push.apply(e,n)}})),e}}}var f=function(e){return"string"==typeof e?e:e?e.displayName||e.name||"Component":void 0};var d=function(e,t){for(var n=e,r=1;n in t;)n=e+"_"+r,r++;return n},v=function(e){return Boolean(e&&e.prototype&&"object"==typeof e.prototype.isReactComponent)},m=function(e){return Boolean(!("function"!=typeof e||v(e)||e.defaultProps||e.contextTypes))},y=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);function r(){this.constructor=e}e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},h=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},g=function(e){return"componentWillReceivePropsCallback"===e.kind},b=function(e){function t(t,n,r,a,i){var o=e.call(this,a,i)||this;return o.pendingDataUpdate=!1,o.newestState={},o.unmounted=!1,o.newestProps=a,o.newestContext=i,o.isReferentiallyTransparent=r,o.target=n,o.callbackList=t.instanceCallbacks(),o.hasWillReceivePropsCallback=o.callbackList.some(g),o.computed=o.runInstanceCallbacks({props:a,context:i,component:o.target}),o.state=o.newestState,o}return y(t,e),t.prototype.getChildContext=function(){return this.computed.childContext},t.prototype.componentWillMount=function(){return this.runLifeCycleCallbacks("componentWillMountCallback")},t.prototype.componentDidMount=function(){return this.runLifeCycleCallbacks("componentDidMountCallback")},t.prototype.componentWillUnmount=function(){return this.unmounted=!0,this.runLifeCycleCallbacks("componentWillUnmountCallback")},t.prototype.componentWillUpdate=function(){return this.runLifeCycleCallbacks("componentWillUpdateCallback")},t.prototype.componentDidUpdate=function(){return this.runLifeCycleCallbacks("componentDidUpdateCallback")},t.prototype.componentWillReceiveProps=function(e,t){this.newestProps=e,this.newestContext=t,this.handleDataUpdate({props:e,context:t,component:this.target})},t.prototype.shouldComponentUpdate=function(e,t,n){this.state===t||this.hasWillReceivePropsCallback||this.handleDataUpdate({props:e,context:n,component:this.target});var r=this.computed.lifeCycleCallbacks.shouldComponentUpdateCallback;if(r)for(var a=0;a<r.length;a++)if(!r[a]())return!1;return!0},t.prototype.render=function(){var e=this.computed,t=e.component,n=e.props;return t?t===this.target&&this.isReferentiallyTransparent||m(t)?t(n):a.createElement(t,h({},n)):null},t.prototype.runLifeCycleCallbacks=function(e){var t=this.computed.lifeCycleCallbacks[e];t&&t.forEach((function(e){return e()}))},t.prototype.applyStateDiff=function(e){this.newestState=h({},this.newestState,e)},t.prototype.setStateWithLifeCycle=function(e,t,n,r){void 0===n&&(n=this.defaultInit),void 0===r&&(r=0),this.pendingDataUpdate?((!this.pendingDataUpdate.dirty||r<this.pendingDataUpdate.startAt)&&(this.pendingDataUpdate.dirty=!0,this.pendingDataUpdate.init=n,this.pendingDataUpdate.startAt=r),t&&this.pendingDataUpdate.callbacks.push(t),this.applyStateDiff(e)):this.hasWillReceivePropsCallback?this.handleDataUpdate(n,r,e,t):(this.applyStateDiff(e),this.setState(this.newestState,t))},Object.defineProperty(t.prototype,"defaultInit",{get:function(){return{props:this.newestProps,context:this.newestContext,component:this.target}},enumerable:!0,configurable:!0}),t.prototype.handleDataUpdate=function(e,t,n,r){void 0===e&&(e=this.defaultInit),void 0===t&&(t=0),void 0===n&&(n={}),void 0===r&&(r=null);var a=this.newestState;n&&this.applyStateDiff(n),this.pendingDataUpdate={callbacks:r?[r]:[]},this.computed=this.runInstanceCallbacks(e,t);var i=this.pendingDataUpdate.callbacks;this.pendingDataUpdate=null,this.newestState!==a&&(this.unmounted||this.setState(this.newestState,(function(){return i.forEach((function(e){return e()}))})))},t.prototype.runInstanceCallbacks=function(e,t){var n=this;void 0===t&&(t=0);var r=h({},e);r.lifeCycleCallbacks||(r.lifeCycleCallbacks={});for(var a,i=function(e){var t,i=o.callbackList[e];switch(i.kind){case"propsCallback":r.props=i.callback(r.props,o.newestState,r.context);break;case"stateCallback":var s=i;if(o.hasWillReceivePropsCallback&&(s.init=h({},r),s.startAt=e),!s.called){s.called=!0;i.callback((function(e,t){var r=d(e,n.newestState);n.applyStateDiff(((a={})[r]=t,a));var a;return{name:r,updater:function(e,t){var a;n.setStateWithLifeCycle(((a={})[r]=e,a),t,s.init,s.startAt)}}}),r.props,o.newestState,r.context)}break;case"childContextCallback":r.childContext=i.callback(r.childContext,r.props,o.newestState,r.context);break;case"skipCallback":e+=i.callback(r.props,o.newestState,r.context);break;case"renderCallback":r.component=i.callback(r.component,r.props,o.newestState,r.context);break;case"lazyLoadCallback":var c=i.callback(r.props,o.newestState,r.context);c&&c.length>0&&(o.callbackList=o.callbackList.slice(0,e+1).concat(c,o.callbackList.slice(e+1)),o.hasWillReceivePropsCallback||(o.hasWillReceivePropsCallback=c.some(g)));break;case"componentWillReceivePropsCallback":var l=i,p=i.callback(r.props,o.newestState,r.context);if(l.called&&o.pendingDataUpdate){if(p(),o.pendingDataUpdate.dirty)return o.pendingDataUpdate.dirty=!1,{value:o.runInstanceCallbacks(o.pendingDataUpdate.init,o.pendingDataUpdate.startAt)}}else l.called=!0;break;case"componentWillMountCallback":case"componentDidMountCallback":case"componentWillUnmountCallback":case"shouldComponentUpdateCallback":case"componentWillUpdateCallback":case"componentDidUpdateCallback":var u=void 0!==r.lifeCycleCallbacks[i.kind];p=i.callback(r.props,o.newestState,r.context);r.lifeCycleCallbacks=h({},r.lifeCycleCallbacks,((t={})[i.kind]=u?r.lifeCycleCallbacks[i.kind].concat([p]):[p],t));break;default:throw new Error("Unknown callback entry '"+i.kind+"'")}a=e},o=this,s=t;s<this.callbackList.length;s++){var c=i(s);if(s=a,"object"==typeof c)return c.value}return r},t}(a.Component);function k(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=u.apply(void 0,e);return function(e){var t,r=m(e),a=f(e),i=((t=function(t){function a(a,i){return t.call(this,n,e,r,a,i)||this}return y(a,t),a}(b)).displayName=r?a:"Assembled("+a+")",t);return n.staticCallbacks.forEach((function(t){return t(i,e)})),i}}var w=function(e){return{instanceCallbacks:[p((function(t){return e(t)}))]}},C=Object.keys,T=Object.getOwnPropertySymbols,S=function(e){var t=C(e);return void 0!==T&&(t=t.concat(T(e))),t},x=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e};function O(e){return w((function(t){return x({},S(e).reduce((function(t,n){return void 0===t[n]&&(t[n]=e[n]),t}),x({},t)))}))}Object.assign;var E=function(e,t){return{staticCallback:function(n){n[e]=t}}},_=function(e){return E("displayName",e)},P=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e};var D=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=P({},e),a=0;a<t.length;a++){var i=t[a];e.hasOwnProperty(i)&&delete r[i]}return r};function A(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return w((function(t){return D.apply(void 0,[t].concat(e))}))}Object.assign;var j=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e};function N(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n={instanceCallbacks:[p((function(e){return j({},e,{__isolation:e.__isolation?e.__isolation.concat([e]):[e]})}))]},r={instanceCallbacks:[p((function(e){return e.__isolation[e.__isolation.length-1]}))]};return c.apply(void 0,[n].concat(e,[r]))}var L=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r={},a=0;a<t.length;a++){var i=t[a];e.hasOwnProperty(i)&&(r[i]=e[i])}return r},I=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e};function q(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return{instanceCallbacks:[p((function(t){return I({},t,{__isolation:t.__isolation.slice(0,t.__isolation.length-2).concat([I({},t.__isolation[t.__isolation.length-1],L.apply(void 0,[t].concat(e)))])})}))]}}Object.assign;Object.assign;Object.assign;var M=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e};function U(e){return{instanceCallbacks:function(){var t,n;return[p((function(r){if(!t){t={};var a=l(e,r);S(a).forEach((function(e){return t[e]=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return a[e](n).apply(void 0,t)}}))}return n=r,M({},r,t)}))]}}}var W=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e};function R(e){return w((function(t){return W({},t,l(e,t))}))}var z=n(5488);Object.assign;var K=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e};function Q(e,t,n){return{instanceCallbacks:function(){var r,a,i;return[(i=function(t,i){var o=t(String(e),l(n,i));r=o.updater,a=o.name},{kind:"stateCallback",callback:i}),p((function(n,i){return K({},n,((o={})[e]=i[a],o[t]=r,o));var o}))]}}}Object.assign;var B=function(e,t){return{instanceCallbacks:[{kind:e,callback:function(e){return function(){return t(e)}}}]}},F=function(e,t){return{instanceCallbacks:function(){var n;return[p((function(e){return void 0===n&&(n=e),e})),{kind:e,callback:function(e){return function(){var r=n;return n=e,t(r,e)}}}]}}};function J(e){return B("componentDidMountCallback",e)}function X(e){return B("componentWillUnmountCallback",e)}function Z(e){return F("componentWillReceivePropsCallback",e)}function G(e){return F("componentDidUpdateCallback",e)}H=function(e,t){return!z(e,t)},F("shouldComponentUpdateCallback",H);var H;function $(e){return{instanceCallbacks:[(t=function(){return e},{kind:"renderCallback",callback:t})]};var t}$(null);var V=function(e){return e.replace(/^Moz/,"-moz-").replace(/^ms/,"-ms-").replace(/^O/,"-o-").replace(/^Webkit/,"-webkit-").toLowerCase()},Y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e};function ee(e,t,n,r){var a=[e];return a.transitParams={duration:t,timing:n||"ease",delay:void 0!==r?r:0},a}var te=/^-(moz|ms|o)-/;function ne(e,t){void 0===t&&(t=0);var n=[],r=[],a=Y({},e);for(var i in e){var o=e[i];if(Array.isArray(o)&&o.transitParams){var s=o.transitParams,c=s.duration,l=s.timing,p=s.delay,u=V(i),f=u+" "+c+"ms "+l+" "+(p+t)+"ms";n.push(f),r.push(u),a[i]=o[0]}}return n.length>0&&(a.transition=n.join(", "),a.WebkitTransition=n.filter((function(e,t){return!r[t].match(te)&&r.indexOf("-webkit-"+r[t])<0})).join(", ")),a}var re,ae=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e};!function(e){e[e.EntryPoint=0]="EntryPoint",e[e.DefaultNew=1]="DefaultNew",e[e.ActiveNew=2]="ActiveNew",e[e.AppearNew=3]="AppearNew",e[e.Default=4]="Default",e[e.Active=5]="Active",e[e.AppearInit=6]="AppearInit",e[e.AppearPrepare=7]="AppearPrepare",e[e.AppearTriggered=8]="AppearTriggered",e[e.AppearStarted=9]="AppearStarted",e[e.EnterInit=10]="EnterInit",e[e.EnterPrepare=11]="EnterPrepare",e[e.EnterTriggered=12]="EnterTriggered",e[e.EnterStarted=13]="EnterStarted",e[e.LeaveInit=14]="LeaveInit",e[e.LeavePrepare=15]="LeavePrepare",e[e.LeaveTriggered=16]="LeaveTriggered",e[e.LeaveStarted=17]="LeaveStarted"}(re||(re={}));var ie;re.ActiveNew,re.DefaultNew,re.AppearNew,re.Active,re.Default,re.AppearInit,re.AppearTriggered,re.AppearStarted,re.EnterInit,re.EnterTriggered,re.EnterStarted,re.LeaveInit,re.LeaveTriggered,re.LeaveStarted,re.AppearPrepare,re.EnterPrepare,re.LeavePrepare;!function(e){e[e.New=0]="New",e[e.Mount=1]="Mount",e[e.TransitionInit=2]="TransitionInit",e[e.TransitionPrepare=3]="TransitionPrepare",e[e.TransitionTrigger=4]="TransitionTrigger",e[e.TransitionStart=5]="TransitionStart",e[e.TransitionComplete=6]="TransitionComplete",e[e.Timeout=7]="Timeout"}(ie||(ie={}));var oe=["active","transitionAppear","transitionDelay","defaultStyle","activeStyle","appearStyle","enterStyle","leaveStyle","appearInitStyle","enterInitStyle","leaveInitStyle","defaultClassName","activeClassName","appearClassName","enterClassName","leaveClassName","appearInitClassName","enterInitClassName","leaveInitClassName"];function se(e,t){var n=void 0!==t[e+"Style"]||void 0!==t[e+"ClassName"];return n||"appear"!==e?n:se("enter",t)}function ce(e,t){return t?"number"==typeof t?t:t[e]?t[e]:0:0}function le(e,t,n,r){if(void 0===r&&(r={}),"appear"===t&&!n.appearStyle&&!n.appearClassName)return le(e,"enter",n,r);var a,i,o=!1;if("init"===r.mode||"prepare"===r.mode){if(a=n[t+"InitStyle"],i=n[t+"InitClassName"],void 0===a&&void 0===i&&("enter"===t||"appear"===t?(a=n.defaultStyle,i=n.defaultClassName):"leave"===t&&(a=n.activeStyle,i=n.activeClassName)),"prepare"===r.mode&&void 0!==a){var s=ne(n[t+"Style"],ce(t,n.transitionDelay));s.transition&&(a=ae({},a,{transition:s.transition}))}}else a=n[t+"Style"],i=n[t+"ClassName"],["enter","appear","leave"].indexOf(t)>=0&&(o=!0,a=ne(a,ce(t,n.transitionDelay)));return{id:e,style:a=a||{},className:i=i||"",inTransition:o}}function pe(e,t,n){return void 0===n&&(n={}),function(r){return le(e,t,r,n)}}var ue=pe(re.ActiveNew,"active"),fe=pe(re.DefaultNew,"default"),de=pe(re.AppearNew,"appear",{mode:"init"}),ve=pe(re.Active,"active"),me=pe(re.Default,"default"),ye=pe(re.AppearInit,"appear",{mode:"init"}),he=pe(re.EnterInit,"enter",{mode:"init"}),ge=pe(re.LeaveInit,"leave",{mode:"init"}),be=pe(re.AppearPrepare,"appear",{mode:"prepare"}),ke=pe(re.EnterPrepare,"enter",{mode:"prepare"}),we=pe(re.LeavePrepare,"leave",{mode:"prepare"}),Ce=pe(re.AppearTriggered,"appear"),Te=pe(re.EnterTriggered,"enter"),Se=pe(re.LeaveTriggered,"leave"),xe=pe(re.AppearStarted,"appear"),Oe=pe(re.EnterStarted,"enter"),Ee=pe(re.LeaveStarted,"leave"),_e=function(e,t){return new Error("invalid state transition from "+re[e]+" with "+ie[t])},Pe="undefined"==typeof requestAnimationFrame?function(e){return setTimeout(e,17)}:requestAnimationFrame,De=function(e,t){var n=0,r=!1;return function a(){if(!r)return n<=e?(n++,void Pe(a)):void t()}(),function(){r=!0}},Ae=L,je=function(e){return Ae(e,"style","className","inTransition","id")},Ne=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},Le=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.filter((function(e){return e})).join(" ")},Ie=s(R((function(e){var t=e.transitionState,n=e.style,r=e.className;return{style:Ne({},n,t.style),className:Le(r,t.className)}})));var qe=function(e){var t=parseFloat(e);return e.match(/ms$/)?t:1e3*t};function Me(e){var t=null,n=null,r=-1,a=99999999;return e.split(/\s*,\s*(?![^\(]*\))/g).forEach((function(e){var i=e.split(/\s+(?![^\(]*\))/g),o=i.filter((function(e){return e.match(/^[a-z\-A-Z]+$/)}))[0],s=i.filter((function(e){return e.match(/^[0-9]+m?s$/)})).map((function(e){return qe(e)})),c=s[0],l=void 0===c?0:c,p=s[1],u=void 0===p?0:p,f=l+u;f>r&&(r=f,t={property:o,duration:l,delay:u}),u<a&&(a=u,n={property:o,duration:l,delay:u})})),[n,t]}function Ue(e){var t=null,n=null,r=-1,a=99999999,i=e.transitionProperty.split(/\s*,\s*/),o=e.transitionDelay.split(/\s*,\s*/),s=e.transitionDuration.split(/\s*,\s*/);return i.forEach((function(e,i){var c=qe(s[i]),l=qe(o[i]),p=c+l;p>r&&(r=p,t={property:e,duration:c,delay:l}),l<a&&(a=l,n={property:e,duration:c,delay:l})})),[n,t]}function We(e,t){var n={};return function(){for(var r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];var i=t.apply(void 0,r);if(i in n)return n[i];var o=e.apply(void 0,r);return n[i]=o,o}}var Re=N(U((function(){var e=We((function(e){return Ue(getComputedStyle(e))}),(function(e){return e.className}));return{parseComputedTransitionMemoized:function(){return e}}})),R((function(e){var t=e.style,n=e.className,r=e.transitionState,a=e.getDOMNode,i=e.parseComputedTransitionMemoized;if(r.inTransition){var o=void 0;if(t&&t.transition)o=Me(t.transition);else{var s=a();s.className=n,o=i(s)}var c=o[0],l=o[1];return{transitionInfo:{firstPropertyDelay:c.delay,firstProperty:c.property,lastProperty:l.property,totalDuration:l.duration+l.delay}}}return{transitionInfo:{}}})),q("transitionInfo")),ze=N(U((function(){var e;return{timeoutIn:function(t){var n=t.timeout;return function(t){return e=setTimeout(n,t)}},cancel:function(){return function(){return clearTimeout(e)}}}})),Z((function(e,t){var n=e.transitionState.inTransition,r=e.active,a=t.transitionState.inTransition,i=t.cancel,o=t.active;(n!==a||a&&r!==o)&&i()})),G((function(e,t){var n=e.transitionState.inTransition,r=e.active,a=t.transitionState.inTransition,i=t.transitionInfo.totalDuration,o=t.timeoutIn,s=t.active;(!n&&a||a&&r!==s)&&a&&o(3*i)})),X((function(e){return(0,e.cancel)()})));var Ke=function(e){return e.replace(/^-(webkit|moz|ms|o)-/,"")};var Qe,Be=function(e,t){if("all"===t)return!0;var n=Ke(e),r=Ke(t);return!(n.length<r.length)&&(n.length===r.length?n===r:n.substr(0,r.length)===r)},Fe=U({onTransitionStart:function(e){var t=e.transitionInfo.firstProperty,n=e.transitionState.inTransition,r=e.onTransitionStart,a=e.onTransitionBegin;return function(e){r&&r(e),n&&e.target===e.currentTarget&&Be(e.propertyName,t)&&a()}},onTransitionEnd:function(e){var t=e.transitionInfo.lastProperty,n=e.transitionState.inTransition,r=e.onTransitionEnd,a=e.onTransitionComplete;return function(e){r&&r(e),n&&e.target===e.currentTarget&&Be(e.propertyName,t)&&a()}}}),Je=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},Xe=s(U({workaroundHandler:function(e){var t=e.transitionInfo.firstProperty,n=e.onTransitionStart;return function(){n({propertyName:t})}}}),R((function(e){var t=e.transitionInfo.firstPropertyDelay,n=e.transitionState.inTransition,r=e.workaroundHandler,i=e.children,o={key:"workaround",style:{opacity:.9}},s="opacity 1ms linear "+t+"ms";return n&&(o.onTransitionEnd=r,o.style={opacity:1,transition:s,WebkitTransition:s}),{children:[a.createElement("span",Je({},o))].concat(a.Children.toArray(i))}})),A("workaroundHandler","onTransitionStart")),Ze=U((function(){var e;return{onDOMNodeRef:function(){return function(t){e=t}},getDOMNode:function(){return function(){return e}}}})),Ge=N(U((function(){var e,t,n=!1;return{requestTimeUpdate:function(){return function(){n=!0}},handleTimeUpdateRequest:function(){return function(){n&&(e=Date.now(),"undefined"!=typeof performance&&void 0!==performance.now&&(t=performance.now()),n=!1)}},onTransitionEnd:function(n){var r=n.onTransitionEnd;return function(n){if(r)if(n.target===n.currentTarget){var a=e;n.timeStamp<1e12&&t&&(a=t),n.timeStamp-a<=10||r(n)}else r(n)}}}})),Z((function(e,t){var n=e.active,r=t.active,a=t.requestTimeUpdate;n!==r&&a()})),G((function(e){return(0,e.handleTimeUpdateRequest)()})),q("onTransitionEnd")),He=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},$e=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n},Ve=O({component:"div"}),Ye=A("active","transitionAppear","defaultStyle","activeStyle","appearStyle","enterStyle","leaveStyle","appearInitStyle","enterInitStyle","leaveInitStyle","defaultClassName","activeClassName","appearClassName","enterClassName","leaveClassName","appearInitClassName","enterInitClassName","leaveInitClassName","transitionDelay","onTransitionComplete","onTransitionBegin","transitionInfo","transitionState","timeout","getDOMNode"),et=k(_("CSSTransition"),Ve,Ze,(Qe=function e(t,n){var r,a=n.props;switch(n.kind){case ie.New:if(t!==re.EntryPoint)throw new Error("invalid entrypoint");return a.active?a.transitionAppear?{state:de(a)}:{state:ue(a)}:!a.transitionAppear&&a.active?{state:ue(a)}:{state:fe(a)};case ie.Mount:switch(t){case re.AppearNew:return e(t,{kind:ie.TransitionTrigger,props:a});default:return null}case ie.TransitionInit:switch(t){case re.DefaultNew:case re.Default:if(!se("enter",a))return{state:ve(a),completed:!0};r=he(a);break;case re.ActiveNew:case re.Active:if(!se("leave",a))return{state:me(a),completed:!0};r=ge(a);break;case re.AppearNew:if(!se("appear",a))return{state:ve(a),completed:!0};r=ye(a);break;default:throw _e(t,n.kind)}return{state:r,pending:ie.TransitionPrepare};case ie.TransitionPrepare:switch(t){case re.EnterInit:if(!a.active)return{state:me(a),completed:!0};r=ke(a);break;case re.LeaveInit:if(a.active)return{state:ve(a),completed:!0};r=we(a);break;case re.AppearInit:if(!a.active)return{state:me(a),completed:!0};r=be(a);break;default:throw _e(t,n.kind)}return{state:r,pending:ie.TransitionTrigger};case ie.TransitionStart:switch(t){case re.EnterTriggered:return{state:Oe(a)};case re.LeaveTriggered:return{state:Ee(a)};case re.AppearTriggered:return{state:xe(a)};default:return null}case ie.TransitionComplete:switch(t){case re.AppearTriggered:case re.AppearStarted:case re.EnterTriggered:case re.EnterStarted:return{state:ve(a),completed:!0};case re.LeaveTriggered:case re.LeaveStarted:return{state:me(a),completed:!0};default:throw _e(t,n.kind)}case ie.TransitionTrigger:switch(t){case re.ActiveNew:case re.Active:case re.DefaultNew:case re.Default:case re.AppearNew:return e(t,{kind:ie.TransitionInit,props:a});case re.EnterInit:return{state:me(a),completed:!0};case re.LeaveInit:return{state:ve(a),completed:!0};case re.AppearInit:return{state:me(a),completed:!0};case re.EnterPrepare:return a.active?{state:Te(a)}:{state:me(a),completed:!0};case re.LeavePrepare:return a.active?{state:ve(a),completed:!0}:{state:Se(a)};case re.AppearPrepare:return a.active?{state:Ce(a)}:{state:me(a),completed:!0};case re.EnterTriggered:return{state:me(a),completed:!0};case re.LeaveTriggered:return{state:ve(a),completed:!0};case re.AppearTriggered:return{state:me(a),completed:!0};case re.AppearStarted:case re.EnterStarted:return{state:Ee(a)};case re.LeaveStarted:return{state:Oe(a)};default:throw _e(t,n.kind)}case ie.Timeout:switch(t){case re.AppearTriggered:case re.AppearStarted:case re.EnterTriggered:case re.EnterStarted:return{state:ve(a),completed:!0};case re.LeaveTriggered:case re.LeaveStarted:return{state:me(a),completed:!0};default:throw _e(t,n.kind)}}throw new Error("unexpected error")},s(N(R((function(e){return{actionProps:Ae.apply(void 0,[e].concat(oe))}})),Q("transitionState","setTransitionState",(function(e){var t=e.actionProps;return je(Qe(re.EntryPoint,{kind:ie.New,props:t}).state)})),U((function(e){var t,n=Qe(re.EntryPoint,{kind:ie.New,props:e}).state.id,r=null,a=function(){r&&(r(),r=null)};return{cancelPendingIfExistent:function(){return a},runPending:function(){return function(){var e=t;t=null,e&&e()}},dispatch:function(e){var i=e.actionProps,o=e.onTransitionComplete,s=e.setTransitionState;return function e(c){var l=Qe(n,{kind:c,props:i});if(l){l.completed&&o&&o();var p=l.state,u=l.pending;n=p.id,a(),u&&(t=function(){r=De(1,(function(){return e(u)}))}),s(je(p))}}}}})),U({onTransitionBegin:function(e){var t=e.dispatch;return function(){return t(ie.TransitionStart)}},onTransitionComplete:function(e){var t=e.dispatch;return function(){return t(ie.TransitionComplete)}},timeout:function(e){var t=e.dispatch;return function(){return t(ie.Timeout)}}}),J((function(e){(0,e.dispatch)(ie.Mount)})),Z((function(e,t){var n=e.active,r=t.active,a=t.dispatch;n!==r&&a(ie.TransitionTrigger)})),G((function(e){(0,e.runPending)()})),X((function(e){(0,e.cancelPendingIfExistent)()})),q("timeout","transitionState","onTransitionBegin","onTransitionComplete")))),Ie,Re,ze,Fe,Xe,Ge,Ye)((function(e){var t=e.component,n=e.onDOMNodeRef,r=e.children,i=$e(e,["component","onDOMNodeRef","children"]);return a.createElement(t,He({ref:n},i,{children:r}))})),tt=n(5126),nt=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);function r(){this.constructor=e}e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},rt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},at=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.componentDidMount=function(){return t.mounted=!0},t}return nt(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.transitionAppear,r=t.children,i=at(t,["transitionAppear","children"]);return a.createElement(tt,rt({},i),a.Children.map(r,(function(t,r){return a.createElement(it,{transitionAppear:n,mounted:e.mounted,key:t.key},t)})))},t}(a.Component)).defaultProps={component:"div"};var it=function(e){function t(t){var n=e.call(this,t)||this;return n.onTransitionComplete=function(){var e=a.Children.only(n.props.children);e.props.onTransitionComplete&&e.props.onTransitionComplete(),n.leaveDone&&n.leaveDone()},n.state={active:!0,transitionAppear:t.mounted||t.transitionAppear},n}return nt(t,e),t.prototype.componentWillAppear=function(e){e()},t.prototype.componentWillEnter=function(e){this.state.active||(this.setState({active:!0}),this.leaveDone=null),e()},t.prototype.componentWillLeave=function(e){this.setState({active:!1}),this.leaveDone=e},t.prototype.render=function(){var e=this,t=e.props.children,n=e.state,r=n.active,i=n.transitionAppear,o=e.onTransitionComplete;return(0,a.cloneElement)(a.Children.only(t),{active:r,transitionAppear:i,onTransitionComplete:o})},t}(a.Component);it.defaultProps={transitionAppear:!1};function ot(e){var t=e.distance,n=void 0===t?"20px":t,i=e.duration,o=void 0===i?250:i,s=e.children,c=(0,r.Z)(e,["distance","duration","children"]),l={defaultStyle:{opacity:0,transform:"translate(0, -"+n+")",display:"none"},enterInitStyle:{opacity:0,display:"block",transform:"translate(0, -"+n+")"},enterStyle:{opacity:ee(1,o,"linear"),transform:ee("translate(0, 0)",o,"cubic-bezier(0.165, 0.84, 0.44, 1)")},leaveStyle:{opacity:ee(0,o,"linear"),transform:ee("translate(0, -"+n+")",o,"cubic-bezier(0.55, 0.085, 0.68, 0.53)")},activeStyle:{},active:!0,transitionAppear:!0};return a.createElement(et,Object.assign({},l,c),s)}et.childContextTypes={};var st=n(8801);function ct(e){var t=e.question,n=e.answer,s=e.number,c=e.showExpandIcon,l=void 0===c||c,p=e.questionClassName,u=e.expandedQuestionClassName,f=e.onClick,d=e.children,v=e.defaultExpanded,m=(0,r.Z)(e,["question","answer","number","showExpandIcon","questionClassName","expandedQuestionClassName","onClick","children","defaultExpanded"]),y=(0,a.useState)(m.expanded||v),h=y[0],g=y[1],b=f?m.expanded:h;function k(e){f?f(e):g((function(e){return!e}))}return a.createElement("div",{role:"button",tabIndex:0,onClick:k,onKeyDown:k,className:_JSXStyle.dynamic([["568219815",[st.O9.activeQuestion,st.Rq.halyardDisplay,st.sp.mobileMax]]])},a.createElement("div",{className:_JSXStyle.dynamic([["568219815",[st.O9.activeQuestion,st.Rq.halyardDisplay,st.sp.mobileMax]]])+" faq-item__question"},a.createElement("div",{className:_JSXStyle.dynamic([["568219815",[st.O9.activeQuestion,st.Rq.halyardDisplay,st.sp.mobileMax]]])+" faq-item__question_text "+(b?u:p)},s&&a.createElement("span",{className:_JSXStyle.dynamic([["568219815",[st.O9.activeQuestion,st.Rq.halyardDisplay,st.sp.mobileMax]]])+" faq-item__question_number"},s),t),l&&a.createElement("div",{className:_JSXStyle.dynamic([["568219815",[st.O9.activeQuestion,st.Rq.halyardDisplay,st.sp.mobileMax]]])+" faq-item__question_icon"},b?a.createElement(o,null):a.createElement(i,null))),a.createElement(ot,{component:"div",transitionAppear:!0,active:b},a.createElement("div",{className:_JSXStyle.dynamic([["568219815",[st.O9.activeQuestion,st.Rq.halyardDisplay,st.sp.mobileMax]]])+" faq-item__answer "+(s?"faq-item__answer_number":"")},d||n)),a.createElement(_JSXStyle,{id:"568219815",dynamic:[st.O9.activeQuestion,st.Rq.halyardDisplay,st.sp.mobileMax]},[".faq-item__question.__jsx-style-dynamic-selector{cursor:pointer;font-size:30px;font-weight:400;line-height:1.4;-webkit-letter-spacing:0.7px;-moz-letter-spacing:0.7px;-ms-letter-spacing:0.7px;letter-spacing:0.7px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-bottom:20px;padding-top:20px;}",".faq-item__answer.__jsx-style-dynamic-selector{max-width:840px;font-size:22px;font-weight:400px;line-height:1.4;-webkit-letter-spacing:0.7px;-moz-letter-spacing:0.7px;-ms-letter-spacing:0.7px;letter-spacing:0.7px;padding-bottom:20px;text-align:left;}",".faq-item__answer_number.__jsx-style-dynamic-selector{padding-left:64px;color:"+st.O9.activeQuestion+";}",".faq-item__question_text.__jsx-style-dynamic-selector{padding-right:30px;}",".faq-item__question_number.__jsx-style-dynamic-selector{width:64px;display:inline-block;font-family:"+st.Rq.halyardDisplay+";font-size:18px;font-weight:600;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;text-align:center;}",".faq-item__question_icon.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}","@media (max-width:"+st.sp.mobileMax+"px){.faq-item__question.__jsx-style-dynamic-selector{font-size:24px;-webkit-letter-spacing:0.6px;-moz-letter-spacing:0.6px;-ms-letter-spacing:0.6px;letter-spacing:0.6px;padding:15px 0;}.faq-item__answer.__jsx-style-dynamic-selector{font-size:20px;}}"]))}},9716:function(e){"use strict";e.exports=function(){}}}]);
//# sourceMappingURL=7f5f5e82f121a3c459e6218e8d9841b3a6c462f6-ada57af8044b6a640c7e.js.map