(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(47)},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),l=n(11),c=n.n(l),r=n(4),o=n(3),i=n.n(o),u=n(12),h=n(13),d=n(14),p=n(18),m=n(15),f=n(19),w=n(16),b=n.n(w),g=function(e){var t=e.checked,n=e.handleSwitchChange;return s.a.createElement("input",{className:"switch-input",type:"checkbox",checked:t,onChange:function(){return n()}})},v=n(17),E=n.n(v),O=function(e){var t=e.body,n=e.isOpened,a=E()({panel__article:!0,opened:n});return s.a.createElement("article",{className:a},s.a.createElement("p",{className:"panel__body"},t))},y=function(e){var t=e.post,n=e.handleSwitchChange,a=t.title,l=t.body,c=t.id,r=t.isOpened;return s.a.createElement("section",null,s.a.createElement("header",{className:"panel__header"},s.a.createElement(g,{checked:r,handleSwitchChange:function(){return n(c)}}),s.a.createElement("h3",{className:"panel__heading"},a)),s.a.createElement(O,{body:l,isOpened:r}))},k=function(e){var t=e.posts,n=e.handleSwitchChange,a=t.map(function(e){return s.a.createElement(y,{key:e.id,post:e,handleSwitchChange:n})});return s.a.createElement("div",{className:"panels-list"},a)},S=function(e){var t=e.text,n=e.handleAllPanelsButton;return s.a.createElement("button",{className:"panels__button",onClick:n},t)},A=(n(46),function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,s=new Array(a),l=0;l<a;l++)s[l]=arguments[l];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={posts:[],showAll:!1},n.getPosts=Object(u.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://jsonplaceholder.typicode.com/posts");case 3:t=e.sent,a=t.data.slice(0,8).map(function(e){return{id:e.id,title:e.title,body:e.body,isOpened:!1}}),n.setState({posts:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])})),n.handleSwitchChange=function(e){var t=n.state.posts.map(function(t){return t.id===e?Object(r.a)({},t,{isOpened:!t.isOpened}):t}),a=t.find(function(e){return!1===e.isOpened});n.setState({posts:t,showAll:!a})},n.handleAllPanelsButton=function(){var e=n.state.posts.map(function(e){return Object(r.a)({},e,{isOpened:!n.state.showAll})});n.setState(function(t){return{posts:e,showAll:!t.showAll}})},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getPosts()}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(S,{text:this.state.showAll?"Hide all":"Show all",handleAllPanelsButton:this.handleAllPanelsButton}),this.state.posts.length?s.a.createElement(k,{posts:this.state.posts,handleSwitchChange:this.handleSwitchChange}):s.a.createElement("div",null,"Loading..."))}}]),t}(a.Component));c.a.render(s.a.createElement(A,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.b12efd50.chunk.js.map