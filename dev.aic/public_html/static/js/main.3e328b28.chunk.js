(this.webpackJsonpaic_frontend=this.webpackJsonpaic_frontend||[]).push([[0],{486:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(221),s=a.n(r),o=(a(230),a(282),a(25)),i=a(31),l=a(33),j=a(32),p=a(70),h=a(21),d=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),a}(n.a.Component),b=Object(h.f)(d),u=a(2),m=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"header__section-wrapper",children:Object(u.jsx)("div",{className:"wrapper",children:Object(u.jsxs)("div",{className:"header__section",children:[Object(u.jsxs)(p.b,{exact:!0,to:"/",className:"header__logo",title:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",children:[Object(u.jsx)("img",{src:"/_images/logo.svg",className:"header__logo-img",alt:"\u0413\u0440\u043e\u0441\u0441 \u043c\u0430\u0440\u043a\u0435\u0442"}),Object(u.jsx)("span",{className:"header__logo-text h2",children:"\u0433\u0440\u043e\u0441\u0441 \u043c\u0430\u0440\u043a\u0435\u0442"})]}),Object(u.jsx)("a",{href:"tel:+79264331416",className:"header__phone",title:"",children:"+7 (926) 433-14-16"}),Object(u.jsx)(p.b,{to:"/questionnaire",className:"header__form-link",children:"\u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0430\u043d\u043a\u0435\u0442\u0443"})]})})})}}]),a}(n.a.Component),_=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"footer__section-wrapper",children:Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsxs)("div",{className:"footer__section-top",children:[Object(u.jsxs)("div",{className:"footer__section-top__logo",children:[Object(u.jsx)("img",{src:"/_images/logo.svg",className:"footer__section-top__logo-img",alt:"\u0413\u0440\u043e\u0441\u0441 \u043c\u0430\u0440\u043a\u0435\u0442"}),Object(u.jsx)("span",{className:"footer__section-top__logo-text h2",children:"\u0433\u0440\u043e\u0441\u0441 \u043c\u0430\u0440\u043a\u0435\u0442"})]}),Object(u.jsxs)("div",{className:"footer__section-top__share",children:[Object(u.jsx)("div",{className:"footer__section-top__share-title h2",children:"\u043f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f"}),Object(u.jsx)("div",{className:"footer__section-top__share-items"})]})]}),Object(u.jsxs)("div",{className:"footer__section-bottom",children:[Object(u.jsx)("div",{className:"footer__section-bottom__copyright caption",children:"\xa9 \u0413\u0440\u043e\u0441\u0441 \u043c\u0430\u0440\u043a\u0435\u0442 2020"}),Object(u.jsx)("div",{className:"footer__section-bottom__policy",children:Object(u.jsx)("button",{className:"footer__section-bottom__policy-btn caption",children:"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"})})]})]})})}}]),a}(n.a.Component),O=a(104),f=a(71),x=a.n(f),v=a(137),g=a(105),y=a(86),k=a(225),N=a.n(k),w=function e(){Object(o.a)(this,e)};w.apiUrl="/ajax.php",w.getMapPoints=Object(g.a)(x.a.mark((function e(){var t,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,N.a.post(w.apiUrl,{method:"map_points"});case 3:return 200===(a=e.sent).status&&a.data.points.length>0&&(t=a.data.points),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));var P=w,C=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={placemarks:[],placemarksFiltered:[],placemarkSelectedType:0},e.loadPlaceMark=Object(g.a)(x.a.mark((function t(){var a,c,n,r,s,o,i,l,j,p,h,d,b,m,_=arguments;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=_.length>0&&void 0!==_[0]?_[0]:0,0!==e.state.placemarks.length){t.next=12;break}return c={iconLayout:"default#image",iconImageHref:"/_images/map_placemark.svg",iconImageSize:[44,44],iconImageOffset:[-22,-22]},n=[],r=[],t.next=6,P.getMapPoints();case 6:s=t.sent,o=Object(v.a)(s);try{for(o.s();!(i=o.n()).done;)l=i.value,j=l.PROPERTY_COORD_VALUE.replace(/\s/g,"").split(","),p=Object(u.jsx)(y.b,{geometry:[j[0],j[1]],options:c}),r.push(p),n.push({placemark:p,type:l.PROPERTY_TYPE_ENUM_ID})}catch(O){o.e(O)}finally{o.f()}e.setState({placemarks:n,placemarksFiltered:r}),t.next=16;break;case 12:h=[],d=Object(v.a)(e.state.placemarks);try{for(d.s();!(b=d.n()).done;)m=b.value,0!==a&&m.type!=="".concat(a)||h.push(m.placemark)}catch(O){d.e(O)}finally{d.f()}e.setState({placemarksFiltered:h,placemarkSelectedType:a});case 16:case"end":return t.stop()}}),t)}))),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.loadPlaceMark()}},{key:"render",value:function(){var e=this;return Object(u.jsx)("div",{className:"geography__wrapper",children:Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsx)("h2",{className:"geography__title h2",children:"\u0433\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u044f"}),Object(u.jsxs)("div",{className:"geography__map",children:[Object(u.jsx)(y.c,{children:Object(u.jsxs)(y.a,{defaultState:{center:[55.755819,37.617644],zoom:12},width:"100%",height:"100%",children:[this.state.placemarksFiltered,Object(u.jsx)(y.d,{options:{size:"small",position:{bottom:24,right:24}}})]})}),Object(u.jsxs)("div",{className:"geography__map-filter",children:[Object(u.jsx)("button",{className:"geography__map-filter__button".concat(6===this.state.placemarkSelectedType?" active":""),onClick:function(){return e.loadPlaceMark(6)},children:"\u044e\u0440\u043b\u0438\u0446\u0430"}),Object(u.jsx)("button",{className:"geography__map-filter__button".concat(5===this.state.placemarkSelectedType?" active":""),onClick:function(){return e.loadPlaceMark(5)},children:"\u0444\u0438\u0437\u043b\u0438\u0446\u0430"}),Object(u.jsx)("button",{className:"geography__map-filter__button".concat(0===this.state.placemarkSelectedType?" active":""),onClick:function(){return e.loadPlaceMark(0)},children:"\u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0451"})]})]})]})})}}]),a}(n.a.Component),M=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("section",{className:"home__page",children:[Object(u.jsx)(O.a,{children:Object(u.jsx)("title",{children:"\u0413\u0440\u043e\u0441\u0441 \u043c\u0430\u0440\u043a\u0435\u0442"})}),Object(u.jsx)(C,{})]})}}]),a}(n.a.Component),S=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"header__section-wrapper",children:Object(u.jsx)(O.a,{children:Object(u.jsx)("title",{children:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0442\u0432\u043e\u0435\u0439 \u043c\u0435\u0447\u0442\u044b"})})})}}]),a}(n.a.Component),T=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(u.jsx)(p.a,{children:Object(u.jsxs)(b,{children:[Object(u.jsx)(m,{}),Object(u.jsxs)(h.c,{children:[Object(u.jsx)(h.a,{exact:!0,path:"/",component:M}),Object(u.jsx)(h.a,{path:"/questionnaire",component:S})]}),Object(u.jsx)(_,{})]})})}}]),a}(n.a.Component);s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(T,{})}),document.getElementById("app"))}},[[486,1,2]]]);
//# sourceMappingURL=main.3e328b28.chunk.js.map