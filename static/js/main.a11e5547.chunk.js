(this.webpackJsonpfaceboook=this.webpackJsonpfaceboook||[]).push([[0],{122:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"f",(function(){return d})),a.d(t,"e",(function(){return m})),a.d(t,"c",(function(){return p})),a.d(t,"d",(function(){return g})),a.d(t,"g",(function(){return b}));var n=a(19),r=a.n(n),i=a(28),s=a(59),c=a(6),o=a(26),u={posts:[{id:1,text:"First post",likes:2,dislikes:0,like:!1,dislike:!1},{id:2,text:"Hi",likes:23,dislikes:1,like:!1,dislike:!1}],profile:null,isFetching:!0},l=function(e){return{type:"ADD_POST",newPostText:e}},A=function(e){return{type:"TOGGLE_FETCHING",isFetching:e}},f=function(e){return{type:"SET_STATUS",status:e}},d=function(e){return{type:"TOGGLE_LIKE",id:e}},m=function(e){return{type:"TOGGLE_DISLIKE",id:e}},p=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(A(!0)),t.next=3,o.b.getUserProfile(e);case 3:n=t.sent,a({type:"SET_USERS_PROFILE",profile:n}),a(A(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:n=t.sent,a(f(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&a(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":var a={id:5,text:t.newPostText,likes:0,dislikes:0,like:!1,dislike:!1};return Object(c.a)(Object(c.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[a])});case"SET_STATUS":return Object(c.a)(Object(c.a)({},e),{},{status:t.status});case"SET_USERS_PROFILE":return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});case"TOGGLE_FETCHING":return Object(c.a)(Object(c.a)({},e),{},{isFetching:t.isFetching});case"DELETE_POST":return Object(c.a)(Object(c.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.id}))});case"TOGGLE_LIKE":return Object(c.a)(Object(c.a)({},e),{},{posts:e.posts.map((function(e){return e.id===t.id?e.like?Object(c.a)(Object(c.a)({},e),{},{like:!1,likes:e.likes-1}):Object(c.a)(Object(c.a)({},e),{},{like:!0,dislike:!1,likes:e.likes+1,dislikes:e.dislike?e.dislikes-1:e.dislikes}):e}))});case"TOGGLE_DISLIKE":return Object(c.a)(Object(c.a)({},e),{},{posts:e.posts.map((function(e){return e.id===t.id?e.dislike?Object(c.a)(Object(c.a)({},e),{},{dislike:!1,dislikes:e.dislikes-1}):Object(c.a)(Object(c.a)({},e),{},{like:!1,dislike:!0,dislikes:e.dislikes+1,likes:e.like?e.likes-1:e.likes}):e}))});default:return e}}},137:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(41),r=a(42),i=a(44),s=a(43),c=a(0),o=a.n(c),u=a(17),l=a(23),A=function(e){return{isAuth:e.auth.isAuth}},f=function(e){var t=function(t){Object(i.a)(c,t);var a=Object(s.a)(c);function c(){return Object(n.a)(this,c),a.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return this.props.isAuth?o.a.createElement(e,this.props):o.a.createElement(u.a,{to:"/login"})}}]),c}(o.a.Component);return Object(l.b)(A)(t)}},15:function(e,t,a){e.exports={nav:"Navbar_nav__mPHz4",nav__ul:"Navbar_nav__ul___Wdvm",nav__li:"Navbar_nav__li__3zbpa",nav__li_users:"Navbar_nav__li_users__1LYrp",active:"Navbar_active__Pdizy",friends:"Navbar_friends__PhlxP",friends_list:"Navbar_friends_list__2Xi3S",friends_avatar:"Navbar_friends_avatar__3aujU",friends_item:"Navbar_friends_item__6QViX",friends_title:"Navbar_friends_title__3vmLE",friends_name:"Navbar_friends_name__3_R0Z",friends_count:"Navbar_friends_count__1rlDZ"}},158:function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));var n=a(59),r=a(6),i=a(174),s=a.n(i),c=a(175),o=a.n(c),u=a(176),l=a.n(u),A=a(177),f=a.n(A),d=a(178),m=a.n(d),p=a(179),g=a.n(p),b={dialogs:[{id:1,name:"Alexander",avatar:s.a},{id:2,name:"Victor",avatar:o.a},{id:3,name:"John",avatar:l.a},{id:4,name:"Helena",avatar:f.a},{id:5,name:"Tony",avatar:m.a},{id:6,name:"Michael",avatar:g.a}],messages:[{id:1,message:"Hi",type:"incoming"},{id:2,message:"Hello",type:"outcoming"},{id:3,message:"Ok!",type:"incoming"},{id:4,message:"Good bye",type:"outcoming"},{id:5,message:"100%",type:"incoming"},{id:6,message:"Yo",type:"outcoming"}]},E=function(e){return{type:"ADD_MESSAGE",newMessageText:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MESSAGE":var a={id:7,message:t.newMessageText,type:"incoming"};return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(n.a)(e.messages),[a])});default:return e}}},165:function(e,t,a){e.exports=a.p+"static/media/preloader.f43d9ff2.gif"},166:function(e,t,a){e.exports={preloader_wrap:"Preloader_preloader_wrap__2K_Eb"}},168:function(e,t){e.exports="data:image/png;base64,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"},169:function(e,t,a){e.exports={news:"News_news__2Obhi"}},170:function(e,t,a){e.exports={music:"Music_music__2qfFp"}},171:function(e,t,a){e.exports={settings:"Settings_settings__2Ma6h"}},174:function(e,t,a){e.exports=a.p+"static/media/my.586e6b99.png"},175:function(e,t,a){e.exports=a.p+"static/media/Screenshot_2.e2849d3c.png"},176:function(e,t,a){e.exports=a.p+"static/media/Screenshot_3.86f596a9.png"},177:function(e,t,a){e.exports=a.p+"static/media/helena.1b106820.jpg"},178:function(e,t,a){e.exports=a.p+"static/media/Screenshot_5.42e1719b.png"},179:function(e,t,a){e.exports=a.p+"static/media/Screenshot_6.f5ed4860.png"},216:function(e,t,a){e.exports=a(342)},22:function(e,t,a){e.exports={users:"Users_users__3-FFG",avatar:"Users_avatar__35Qak",info:"Users_info__2BRvL",name:"Users_name__1KhPj",card:"Users_card__1CGl8",card__left:"Users_card__left__1fwRm",status:"Users_status__25-ll",location:"Users_location__1HiKE",showmore:"Users_showmore__2dLWk",button:"Users_button__dNBIf",pagination:"Users_pagination__2rYmF",pagi_active:"Users_pagi_active__QeygC",pagi:"Users_pagi__dPTaQ",pagi_button:"Users_pagi_button__3Uoqo"}},221:function(e,t,a){},222:function(e,t,a){},26:function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return c}));var n=a(164),r=n.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"2f779481-db2c-495a-9bc1-00ac4d4dad77"}}),i={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return r.post("follow/".concat(e))},unfollow:function(e){return r.delete("follow/".concat(e))},getFriends:function(){return r.get("users").then((function(e){return e.data}))}},s={getUserProfile:function(e){return r.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return r.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return r.put("profile/status",{status:e})}},c={me:function(){return r.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,remember:a})},logout:function(){return r.delete("auth/login")}}},342:function(e,t,a){"use strict";a.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=a(0),r=a.n(n),i=a(14),s=a.n(i),c=(a(221),a(41)),o=a(42),u=a(44),l=a(43),A=a(17),f=a(25),d=(a(222),a(183)),m=a(378),p=a(181),g=a.n(p),b=a(182),E=a.n(b),_=a(23),v=a(19),h=a.n(v),O=a(28),w=a(59),j=a(6),k=a(26),N={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followInProgress:[]},y=function(e){return{type:"FOLLOW",userId:e}},S=function(e){return{type:"UNFOLLOW",userId:e}},P=function(e){return{type:"SET_TOTAL_USERS",users:e}},I=function(e){return{type:"SET_ACTIVE_PAGE",page:e}},C=function(e){return{type:"TOGGLE_FETCHING",isFetching:e}},D=function(e,t){return{type:"FOLLOW_IN_PROGRESS",isFetching:e,userId:t}},x=function(){var e=Object(O.a)(h.a.mark((function e(t,a,n,r){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(D(!0,a)),e.next=3,n(a);case 3:0===e.sent.data.resultCode&&t(r(a)),t(D(!1,a));case 6:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(j.a)(Object(j.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(j.a)(Object(j.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(j.a)(Object(j.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(j.a)(Object(j.a)({},e),{},{followed:!1}):e}))});case"SET_USERS":return Object(j.a)(Object(j.a)({},e),{},{users:t.users});case"SET_TOTAL_USERS":return Object(j.a)(Object(j.a)({},e),{},{totalUsersCount:t.users});case"SET_ACTIVE_PAGE":return Object(j.a)(Object(j.a)({},e),{},{currentPage:t.page});case"TOGGLE_FETCHING":return Object(j.a)(Object(j.a)({},e),{},{isFetching:t.isFetching});case"FOLLOW_IN_PROGRESS":return Object(j.a)(Object(j.a)({},e),{},{followInProgress:t.isFetching?[].concat(Object(w.a)(e.followInProgress),[t.userId]):e.followInProgress.filter((function(e){return e!==t.userId}))});default:return e}},U=a(22),G=a.n(U),F=a(374),L=a(161),B=function(e){for(var t=e.totalUsersCount,a=e.pageSize,i=e.currentPage,s=e.onPageChanged,c=e.pagiSize,o=void 0===c?10:c,u=Math.ceil(t/a),l=[],A=1;A<=u;A++)l.push(A);var f=Math.ceil(u/o),d=Object(n.useState)(1),m=Object(L.a)(d,2),p=m[0],g=m[1],b=(p-1)*o+1,E=p*o;return r.a.createElement("div",{className:G.a.pagination},p>1&&r.a.createElement(F.a,{className:G.a.pagi_button,variant:"contained",color:"primary",onClick:function(){return g(p-1)}},"Prev ",o),l.filter((function(e){return e>=b&&e<=E})).map((function(e){return r.a.createElement("span",{key:e,className:"".concat(i===e?G.a.pagi_active:""," ").concat(G.a.pagi),onClick:function(){return s(e)}},e)})),f>p&&r.a.createElement(F.a,{className:G.a.pagi_button,variant:"contained",color:"primary",onClick:function(){return g(p+1)}},"Next ",o))},Q=a(79),Y=a.n(Q),X=function(e){var t=e.user,a=e.followInProgress,n=e.unfollow,i=e.follow;return r.a.createElement("div",{className:G.a.card},r.a.createElement("div",{className:G.a.card__left},r.a.createElement("div",{className:G.a.avatar},r.a.createElement(f.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:null!=t.photos.small?t.photos.small:Y.a,alt:""}))),r.a.createElement(F.a,{variant:"contained",color:t.followed?"secondary":"primary",className:G.a.button,disabled:a.some((function(e){return e===t.id})),onClick:t.followed?function(){n(t.id)}:function(){i(t.id)}},t.followed?"unfollow":"follow")),r.a.createElement("div",{className:G.a.info},r.a.createElement("div",null,r.a.createElement("div",{className:G.a.name},t.name),r.a.createElement("div",{className:G.a.status},t.status))))},z=function(e){return r.a.createElement("div",{className:G.a.users},r.a.createElement(B,{currentPage:e.currentPage,onPageChanged:e.onPageChanged,totalUsersCount:e.totalUsersCount,pageSize:e.pageSize}),e.users.map((function(t){return r.a.createElement(X,{user:t,followInProgress:e.followInProgress,unfollow:e.unfollow,follow:e.follow,key:t.id})})),r.a.createElement("div",{className:G.a.showmore},r.a.createElement(F.a,{variant:"contained",color:"primary",className:G.a.button_more,size:"large",onClick:function(){e.onPageChanged(e.currentPage+1)}},"Show next")))},H=a(60),R=a(137),M=a(12),W=a(167),K=function(e){return e.usersPage.isFetching},Z=Object(W.a)((function(e){return e.usersPage.users}),(function(e){return e})),V=function(e){return e.usersPage.pageSize},q=function(e){return e.usersPage.totalUsersCount},J=function(e){return e.usersPage.currentPage},$=function(e){return e.usersPage.followInProgress},ee=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.requestUsers(t,e.props.pageSize)},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(H.a,null):r.a.createElement(z,{totalUsersCount:this.props.totalUsersCount,currentPage:this.props.currentPage,pageSize:this.props.pageSize,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followInProgress:this.props.followInProgress}))}}]),a}(r.a.Component),te=Object(M.d)(Object(_.b)((function(e){return{users:Z(e),pageSize:V(e),totalUsersCount:q(e),currentPage:J(e),isFetching:K(e),followInProgress:$(e)}}),{follow:function(e){return function(t){x(t,e,k.c.follow.bind(e),y)}},unfollow:function(e){return function(t){x(t,e,k.c.unfollow.bind(e),S)}},setActivePage:I,toggleFollow:D,requestUsers:function(e,t){return function(){var a=Object(O.a)(h.a.mark((function a(n){var r;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(C(!0)),n(I(e)),a.next=4,k.c.getUsers(e,t);case 4:r=a.sent,n({type:"SET_USERS",users:r.items}),n(C(!1)),n(P(r.totalCount));case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}}),R.a)(ee),ae=a(50),ne=a.n(ae),re=a(168),ie=a.n(re),se=function(e){return r.a.createElement("header",{className:ne.a.header},r.a.createElement("img",{src:ie.a,alt:"",className:ne.a.logo}),r.a.createElement("div",{className:ne.a.brand},"Faceboooook"),r.a.createElement("div",{className:ne.a.login_block},e.isAuth?r.a.createElement("div",{className:ne.a.button_wrap},e.login,r.a.createElement(F.a,{variant:"contained",color:"primary",className:ne.a.button_logout,onClick:e.logout},"Logout")):r.a.createElement(f.b,{to:"/login"},r.a.createElement(F.a,{variant:"contained",color:"primary",className:ne.a.button},"Login"))))},ce=a(78),oe={userId:null,email:null,login:null,isAuth:!1,isFetching:!0},ue=function(e,t,a,n){return{type:"auth/SET_USER_DATA",payload:{userId:e,email:t,login:a,isAuth:n}}},le=function(e){return{type:"TOGGLE_FETCHING",isFetching:e}},Ae=function(){return function(){var e=Object(O.a)(h.a.mark((function e(t){var a,n,r,i,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(le(!0)),e.next=3,k.a.me();case 3:a=e.sent,t(le(!1)),0===a.resultCode&&(n=a.data,r=n.id,i=n.email,s=n.login,t(ue(r,i,s,!0)));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":return Object(j.a)(Object(j.a)({},e),t.payload);case"TOGGLE_FETCHING":return Object(j.a)(Object(j.a)({},e),{},{isFetching:t.isFetching});default:return e}},de=Object(M.d)(Object(_.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(O.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(le(!0)),e.next=3,k.a.logout();case 3:a=e.sent,t(le(!1)),0===a.data.resultCode&&t(ue(null,null,null,!1));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))((function(e){return r.a.createElement(se,e)})),me=a(15),pe=a.n(me),ge=function(e){var t=e.sidebar.friends.map((function(e){return r.a.createElement("li",{className:pe.a.friends_item,key:e.id},r.a.createElement("div",{className:pe.a.friends_avatar},r.a.createElement("img",{src:e&&null!==e.photos.small?e.photos.small:Y.a,alt:""})),r.a.createElement("div",{className:pe.a.friends_name},e.name))}));return r.a.createElement("nav",{className:pe.a.nav},r.a.createElement("ul",{className:pe.a.nav__ul},r.a.createElement("li",{className:"".concat(pe.a.nav__li," ").concat(pe.a.active)},r.a.createElement(f.b,{to:"/profile",activeClassName:pe.a.active},"Profile")),r.a.createElement("li",{className:pe.a.nav__li},r.a.createElement(f.b,{to:"/dialogs",activeClassName:pe.a.active},"Messages")),r.a.createElement("li",{className:pe.a.nav__li},r.a.createElement(f.b,{to:"/news",activeClassName:pe.a.active},"News")),r.a.createElement("li",{className:pe.a.nav__li},r.a.createElement(f.b,{to:"/music",activeClassName:pe.a.active},"Music")),r.a.createElement("li",{className:pe.a.nav__li},r.a.createElement(f.b,{to:"/settings",activeClassName:pe.a.active},"Settings")),r.a.createElement("li",{className:"".concat(pe.a.nav__li," ").concat(pe.a.nav__li_users)},r.a.createElement(f.b,{to:"/users",activeClassName:pe.a.active},"Users"))),r.a.createElement("div",{className:pe.a.friends},r.a.createElement("h4",{className:pe.a.friends_title},"Friends ",r.a.createElement("span",{className:pe.a.friends_count},e.sidebar.totalFriendsCount)),r.a.createElement("ul",{className:pe.a.friends_list},t)))},be={friends:[],totalFriendsCount:0},Ee=function(e){return{type:"SET_FRIENDS",friends:e}},_e=function(e){return{type:"SET_TOTAL_FRIENDS",friends:e}},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FRIENDS":return Object(j.a)(Object(j.a)({},e),{},{friends:t.friends});case"SET_TOTAL_FRIENDS":return Object(j.a)(Object(j.a)({},e),{},{totalFriendsCount:t.friends});default:return e}},he=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.getFriends()}},{key:"render",value:function(){return r.a.createElement(ge,{sidebar:this.props.sidebar})}}]),a}(r.a.Component),Oe=Object(M.d)(Object(_.b)((function(e){return{sidebar:e.sidebar}}),{getFriends:function(){return function(){var e=Object(O.a)(h.a.mark((function e(t){var a,n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.c.getFriends();case 2:a=e.sent,n=a.items,r=function(){for(var e,t,a=n.slice(0),r=n.length;r--;)e=a[t=Math.floor((r+1)*Math.random())],a[t]=a[r],a[r]=e;return a.slice(0,3)}(),t(Ee(r)),t(_e(a.totalCount));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(he),we=a(169),je=a.n(we),ke=function(e){return r.a.createElement("div",{className:je.a.news},"News")},Ne=a(170),ye=a.n(Ne),Se=function(e){return r.a.createElement("div",{className:ye.a.music},"Music")},Pe=a(171),Ie=a.n(Pe),Ce=function(e){return r.a.createElement("div",{className:Ie.a.settings},"Settings")},De=a(123),xe=a(51),Te=a.n(xe),Ue=a(159),Ge=a(160),Fe=a(379),Le=a(381),Be=a(380),Qe=a(173),Ye=a.n(Qe),Xe=function(e){var t=e.label,a=e.input,n=e.meta,i=n.touched,s=n.invalid,c=n.error,o=Object(De.a)(e,["label","input","meta"]);return r.a.createElement(Fe.a,Object.assign({label:t,placeholder:t,error:i&&s,helperText:i&&c,variant:"outlined"},a,o))},ze=function(e){var t=e.input,a=e.label;return r.a.createElement("div",null,r.a.createElement(Le.a,{control:r.a.createElement(Be.a,{checked:!!t.value,onChange:t.onChange,color:"primary"}),label:a}))},He=Object(Ge.a)({form:"login",validate:function(e){var t={};return["email","password"].forEach((function(a){e[a]||(t[a]="Required")})),t}})((function(e){var t=e.handleSubmit,a=e.error,n=e.submitFailed;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",{className:Te.a.input_field},r.a.createElement(Ue.a,{name:"email",label:"Login",component:Xe})),r.a.createElement("div",{className:Te.a.input_field},r.a.createElement(Ue.a,{name:"password",label:"Password",component:Xe,type:"password"})),r.a.createElement("div",{className:Te.a.input_field},r.a.createElement(Ue.a,{name:"remember",label:"Remember me",component:ze,type:"checkbox"})),n&&r.a.createElement("div",{className:"".concat(Te.a.summary_error," ").concat(Te.a.input_field)},a),r.a.createElement("div",{className:Te.a.input_field},r.a.createElement(F.a,{variant:"contained",color:"primary",className:Te.a.button,type:"submit",startIcon:r.a.createElement(Ye.a,null)},"Login")))})),Re=Object(_.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,a){return function(){var n=Object(O.a)(h.a.mark((function n(r){var i,s;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(le(!0)),n.next=3,k.a.login(e,t,a);case 3:i=n.sent,r(le(!1)),0===i.data.resultCode?r(Ae()):(s=i.data.messages.length>0?i.data.messages[0]:"Unknown error",r(Object(ce.a)("login",{_error:s})));case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})((function(e){return e.isAuth?r.a.createElement(A.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(He,{onSubmit:function(t){e.login(t.email,t.password,t.remember)}}))})),Me={initialized:!1,isFetching:!0},We=function(e){return{type:"TOGGLE_FETCHING",isFetching:e}},Ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITIALIZED":return Object(j.a)(Object(j.a)({},e),{},{initialized:!0});case"TOGGLE_FETCHING":return Object(j.a)(Object(j.a)({},e),{},{isFetching:t.isFetching});default:return e}},Ze=a(122),Ve=a(158),qe=a(180),Je=a(162),$e=Object(M.c)({app:Ke,profilePage:Ze.b,messagesPage:Ve.b,sidebar:ve,usersPage:T,auth:fe,form:Je.a}),et=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||M.d,tt=Object(M.e)($e,et(Object(M.a)(qe.a)));window.__store__=tt;var at=tt,nt=r.a.lazy((function(){return a.e(4).then(a.bind(null,395))})),rt=r.a.lazy((function(){return a.e(3).then(a.bind(null,394))})),it=Object(d.a)({palette:{primary:g.a,secondary:E.a}}),st=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement(m.a,{theme:it},r.a.createElement("div",{className:"wrapper"},r.a.createElement(de,null),r.a.createElement(Oe,null),r.a.createElement("main",{className:"content"},r.a.createElement(A.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(n.Suspense,{fallback:r.a.createElement(H.a,null)},r.a.createElement(rt,null))}}),r.a.createElement(A.b,{exact:!0,path:"/dialogs",render:function(){return r.a.createElement(n.Suspense,{fallback:r.a.createElement(H.a,null)},r.a.createElement(nt,null))}}),r.a.createElement(A.b,{path:"/news",component:ke}),r.a.createElement(A.b,{path:"/music",component:Se}),r.a.createElement(A.b,{path:"/settings",component:Ce}),r.a.createElement(A.b,{path:"/users",component:te}),r.a.createElement(A.b,{path:"/login",component:Re})))):r.a.createElement(H.a,null)}}]),a}(r.a.Component),ct=Object(M.d)(A.f,Object(_.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(We(!0));var t=e(Ae());Promise.all([t]).then((function(){e({type:"SET_INITIALIZED"}),e(We(!1))}))}}}))(st),ot=function(){return r.a.createElement(r.a.StrictMode,null,r.a.createElement(f.a,{basename:"/social-network"},r.a.createElement(_.a,{store:at},r.a.createElement(ct,null))))};s.a.render(r.a.createElement(ot,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},50:function(e,t,a){e.exports={logo:"Header_logo__1FkZe",header:"Header_header__2A7jb",brand:"Header_brand__YhHTP",login_block:"Header_login_block__2le33",button_logout:"Header_button_logout__2G62i",button_wrap:"Header_button_wrap__MwFAR"}},51:function(e,t,a){e.exports={input_field:"Login_input_field__bDvCA",summary_error:"Login_summary_error__195GD"}},60:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(165),s=a.n(i),c=a(166),o=a.n(c);t.a=function(){return r.a.createElement("div",{className:o.a.preloader_wrap},r.a.createElement("img",{src:s.a,alt:""}))}},79:function(e,t,a){e.exports=a.p+"static/media/avatar.c91f937b.png"}},[[216,1,2]]]);
//# sourceMappingURL=main.a11e5547.chunk.js.map