(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{53:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=d(a(1)),i=d(a(12));function d(e){return e&&e.__esModule?e:{default:e}}var n=function(e){var t=e.data,a=e.dark;return l.default.createElement("div",{className:"timeline--container"},l.default.createElement("ul",{className:"timeline--line "+(a?"dark":"")},t.map(function(e){var t=e.title,a=e.subTitle,i=e.date,d=e.desc;return l.default.createElement("li",{key:a+t},l.default.createElement("div",{className:"timeline_item--content"},l.default.createElement("div",{className:"timeline_item--title"},t),l.default.createElement("div",{className:"timeline_item--sub_title"},a,l.default.createElement("div",{className:"timeline_item--time"},i||"")),l.default.createElement("div",{className:"timeline_item--desc",dangerouslySetInnerHTML:{__html:d}})))})))};n.defaultProps={dark:!1},n.propTypes={dark:i.default.bool,data:i.default.arrayOf(i.default.shape({title:i.default.string.isRequired,subTitle:i.default.string.isRequired,date:i.default.string,desc:i.default.string})).isRequired},t.default=n}}]);
//# sourceMappingURL=Timeline.js.map