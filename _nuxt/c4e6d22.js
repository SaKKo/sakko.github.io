(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{276:function(t,e,n){"use strict";n.r(e);var r=n(26),o=(n(58),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("posts").fetch();case 3:return r=e.sent,e.abrupt("return",{posts:r});case 5:case"end":return e.stop()}}),e)})))()},mounted:function(){console.log("THIS.POSTS",this.posts)}}),c=n(53),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-row",t._l(t.posts,(function(e){return n("b-col",{key:e.slug},[n("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{title:e.title,tag:"article"}},[n("b-card-text",[t._v("\n          "+t._s(e.description)+"\n        ")]),t._v(" "),n("b-button",{attrs:{to:{name:"posts-slug",params:{slug:e.slug}},variant:"primary"}},[t._v("Go somewhere")])],1)],1)})),1)],1)}),[],!1,null,"fb39c5bc",null);e.default=component.exports}}]);