(this.webpackJsonpaic_frontend=this.webpackJsonpaic_frontend||[]).push([[0],{485:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(220),r=a.n(s),o=(a(229),a(281),a(25)),i=a(31),l=a(33),j=a(32),p=a(70),h=a(21),d=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),a}(n.a.Component),b=Object(h.f)(d),O=a(3),u=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"header__section-wrapper",children:Object(O.jsx)("div",{className:"wrapper",children:Object(O.jsxs)("div",{className:"header__section",children:[Object(O.jsxs)(p.b,{exact:!0,to:"/",className:"header__logo",title:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",children:[Object(O.jsx)("img",{src:"/_images/logo.svg",className:"header__logo-img",alt:"\u0413\u0440\u043e\u0441\u0441 \u043c\u0430\u0440\u043a\u0435\u0442"}),Object(O.jsx)("span",{className:"header__logo-text h2",children:"\u0433\u0440\u043e\u0441\u0441 \u043c\u0430\u0440\u043a\u0435\u0442"})]}),Object(O.jsx)("a",{href:"tel:+79264331416",className:"header__phone",title:"",children:"+7 (926) 433-14-16"}),Object(O.jsx)(p.b,{to:"/questionnaire",className:"header__form-link",children:"\u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0430\u043d\u043a\u0435\u0442\u0443"})]})})})}}]),a}(n.a.Component),m=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"footer__section-wrapper",children:Object(O.jsxs)("div",{className:"wrapper",children:[Object(O.jsxs)("div",{className:"footer__section-top",children:[Object(O.jsxs)("div",{className:"footer__section-top__logo",children:[Object(O.jsx)("img",{src:"/_images/logo.svg",className:"footer__section-top__logo-img",alt:"\u0413\u0440\u043e\u0441\u0441 \u043c\u0430\u0440\u043a\u0435\u0442"}),Object(O.jsx)("span",{className:"footer__section-top__logo-text h2",children:"\u0433\u0440\u043e\u0441\u0441 \u043c\u0430\u0440\u043a\u0435\u0442"})]}),Object(O.jsxs)("div",{className:"footer__section-top__share",children:[Object(O.jsx)("div",{className:"footer__section-top__share-title h2",children:"\u043f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f"}),Object(O.jsx)("div",{className:"footer__section-top__share-items"})]})]}),Object(O.jsxs)("div",{className:"footer__section-bottom",children:[Object(O.jsx)("div",{className:"footer__section-bottom__copyright caption",children:"\xa9 \u0413\u0440\u043e\u0441\u0441 \u043c\u0430\u0440\u043a\u0435\u0442 2020"}),Object(O.jsx)("div",{className:"footer__section-bottom__policy",children:Object(O.jsx)("button",{className:"footer__section-bottom__policy-btn caption",children:"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"})})]})]})})}}]),a}(n.a.Component),_=a(104),f=a(71),x=a.n(f),v=a(105),g=a(86),k=a(224),y=a.n(k),N=function e(){Object(o.a)(this,e)};N.apiUrl="/ajax.php",N.getMapPoints=Object(v.a)(x.a.mark((function e(){var t,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,y.a.post(N.apiUrl,{method:"map_points"});case 3:return 200===(a=e.sent).status&&a.data.points.length>0&&(t=a.data.points),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));var w=N,P=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={placemarks:[],placemarksFiltered:[],placemarkSelectedType:0},e.loadPlaceMark=Object(v.a)(x.a.mark((function t(){var a,c,n,s,r,o,i,l=arguments;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=l.length>0&&void 0!==l[0]?l[0]:"",0!==e.state.placemarks.length){t.next=11;break}return c={iconLayout:"default#image",iconImageHref:"/_images/map_placemark.svg",iconImageSize:[44,44],iconImageOffset:[-22,-22]},n=[],t.next=6,w.getMapPoints();case 6:for(s in t.sent)console.log(s),r=s.PROPERTY_COORD_VALUE.replace(/\s/g,"").split(","),n.push({placemark:Object(O.jsx)(g.b,{geometry:[r[0],r[1]],options:c}),type:s.PROPERTY_TYPE_ENUM_ID});e.setState({placemarks:n,placemarksFiltered:n}),t.next=14;break;case 11:for(i in o=[],e.state.placemarks)""!==a&&i.type!==a||o.push(i);e.setState({placemarksFiltered:o,placemarkSelectedType:a});case 14:case"end":return t.stop()}}),t)}))),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.loadPlaceMark()}},{key:"render",value:function(){return Object(O.jsx)("div",{className:"geography__wrapper",children:Object(O.jsxs)("div",{className:"wrapper",children:[Object(O.jsx)("h2",{className:"geography__title h2",children:"\u0433\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u044f"}),Object(O.jsx)("div",{className:"geography__map",children:Object(O.jsx)(g.c,{children:Object(O.jsxs)(g.a,{defaultState:{center:[55.755819,37.617644],zoom:12},width:"100%",height:"100%",children:[this.state.placemarksFiltered,Object(O.jsx)(g.d,{options:{size:"small",position:{bottom:24,right:24}}})]})})})]})})}}]),a}(n.a.Component),C=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(O.jsxs)("section",{className:"home__page",children:[Object(O.jsx)(_.a,{children:Object(O.jsx)("title",{children:"\u0413\u0440\u043e\u0441\u0441 \u043c\u0430\u0440\u043a\u0435\u0442"})}),Object(O.jsx)(P,{})]})}}]),a}(n.a.Component),M=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"header__section-wrapper",children:Object(O.jsx)(_.a,{children:Object(O.jsx)("title",{children:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0442\u0432\u043e\u0435\u0439 \u043c\u0435\u0447\u0442\u044b"})})})}}]),a}(n.a.Component),S=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(O.jsx)(p.a,{children:Object(O.jsxs)(b,{children:[Object(O.jsx)(u,{}),Object(O.jsxs)(h.c,{children:[Object(O.jsx)(h.a,{exact:!0,path:"/",component:C}),Object(O.jsx)(h.a,{path:"/questionnaire",component:M})]}),Object(O.jsx)(m,{})]})})}}]),a}(n.a.Component);r.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(S,{})}),document.getElementById("app"))}},[[485,1,2]]]);
//# sourceMappingURL=main.e6c22fe5.chunk.js.map