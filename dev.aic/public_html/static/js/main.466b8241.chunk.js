(this.webpackJsonpaic_frontend=this.webpackJsonpaic_frontend||[]).push([[0],{509:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(230),r=a.n(s),i=(a(238),a(290),a(20)),o=a(23),l=a(25),d=a(24),j=a(74),b=a(22),p=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),a}(n.a.Component),u=Object(b.f)(p),h=a(2),m=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"header__section-wrapper",children:Object(h.jsx)("div",{className:"wrapper",children:Object(h.jsxs)("div",{className:"header__section",children:[Object(h.jsxs)(j.b,{exact:!0,to:"/",className:"header__logo",title:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",children:[Object(h.jsx)("img",{src:"/_images/logo.svg",className:"header__logo-img",alt:"\u0413\u0440\u043e\u0441\u0441 \u043c\u0430\u0440\u043a\u0435\u0442"}),Object(h.jsx)("span",{className:"header__logo-text h2",children:"\u0433\u0440\u043e\u0441\u0441 \u043c\u0430\u0440\u043a\u0435\u0442"})]}),Object(h.jsx)("a",{href:"tel:+79264331416",className:"header__phone",title:"",children:"+7 (926) 433-14-16"}),Object(h.jsx)(j.b,{to:"/questionnaire",className:"header__form-link",children:"\u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0430\u043d\u043a\u0435\u0442\u0443"})]})})})}}]),a}(n.a.Component),_=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"footer__section-wrapper",children:Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsxs)("div",{className:"footer__section-top",children:[Object(h.jsxs)("div",{className:"footer__section-top__logo",children:[Object(h.jsx)("img",{src:"/_images/logo.svg",className:"footer__section-top__logo-img",alt:"\u0413\u0440\u043e\u0441\u0441 \u043c\u0430\u0440\u043a\u0435\u0442"}),Object(h.jsx)("span",{className:"footer__section-top__logo-text h2",children:"\u0433\u0440\u043e\u0441\u0441 \u043c\u0430\u0440\u043a\u0435\u0442"})]}),Object(h.jsxs)("div",{className:"footer__section-top__share",children:[Object(h.jsx)("div",{className:"footer__section-top__share-title h2",children:"\u043f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f"}),Object(h.jsx)("div",{className:"footer__section-top__share-items"})]})]}),Object(h.jsxs)("div",{className:"footer__section-bottom",children:[Object(h.jsx)("div",{className:"footer__section-bottom__copyright caption",children:"\xa9 \u0413\u0440\u043e\u0441\u0441 \u043c\u0430\u0440\u043a\u0435\u0442 2020"}),Object(h.jsx)("div",{className:"footer__section-bottom__policy",children:Object(h.jsx)("button",{className:"footer__section-bottom__policy-btn caption",children:"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"})})]})]})})}}]),a}(n.a.Component),v=a(111),O=a(48),x=a(66),f=a(26),g=a.n(f),y=a(43),N=a(75),k=a.n(N),w=a(112),S=a.n(w),L=function e(){Object(i.a)(this,e)};L.apiUrl="/ajax.php",L.getMapPoints=Object(y.a)(g.a.mark((function e(){var t,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,S.a.post(L.apiUrl,{method:"map_points"});case 3:return 200===(a=e.sent).status&&a.data.points.length>0&&(t=a.data.points),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)}))),L.getVacancies=Object(y.a)(g.a.mark((function e(){var t,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,S.a.post(L.apiUrl,{method:"vacancies"});case 3:return 200===(a=e.sent).status&&a.data.vacancies.length>0&&(t=a.data.vacancies),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)}))),L.getBanners=Object(y.a)(g.a.mark((function e(){var t,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,S.a.post(L.apiUrl,{method:"banners"});case 3:return 200===(a=e.sent).status&&a.data.banners.length>0&&(t=a.data.banners),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));var C=L,P=(a(228),a(229),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).settingsSlider={dots:!1,infinite:!1,speed:500,arrows:!0,slidesToShow:1,slidesToScroll:1},e.state={pageLoading:!0,banners:[],sliderInit:!1},e.loadData=Object(y.a)(g.a.mark((function t(){var a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.getBanners();case 2:a=t.sent,e.setState({pageLoading:!1,banners:a});case 4:case"end":return t.stop()}}),t)}))),e.renderBanner=function(e){return Object(h.jsxs)("div",{className:"banner__item",children:[Object(h.jsx)("div",{className:"banner__item-bg",children:Object(h.jsx)("img",{src:e.file,alt:e.name})}),Object(h.jsx)("div",{className:"banner__item-content",children:Object(h.jsx)("div",{className:"wrapper",children:Object(h.jsx)("div",{className:"banner__item-name h1",children:e.name})})})]})},e.renderBanners=function(){var t,a=[],c=Object(x.a)(e.state.banners);try{for(c.s();!(t=c.n()).done;){var n=t.value;a.push(e.renderBanner(n))}}catch(s){c.e(s)}finally{c.f()}return Object(h.jsx)(k.a,Object(O.a)(Object(O.a)({},e.settingsSlider),{},{children:a}))},e.renderLoaders=function(){return Object(h.jsxs)(k.a,Object(O.a)(Object(O.a)({},e.settingsSlider),{},{children:[Object(h.jsx)("div",{className:"banner__item-stub"}),Object(h.jsx)("div",{className:"banner__item-stub"}),Object(h.jsx)("div",{className:"banner__item-stub"})]}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"banner__wrapper",children:[this.state.pageLoading&&this.renderLoaders(),!this.state.pageLoading&&this.state.banners.length>0&&this.renderBanners()]})}}]),a}(n.a.Component)),T=a(92),I=function(e){return Object(h.jsx)("div",{className:"vacancy__list-item",children:Object(h.jsxs)("div",{className:"vacancy__list-item__content",children:[Object(h.jsx)("img",{src:e.vacancy.picture,className:"vacancy__list-item__bg"}),Object(h.jsx)("div",{className:"vacancy__list-item__text-wrapper",children:Object(h.jsx)("div",{className:"vacancy__list-item__content-text",children:e.vacancy.text})}),Object(h.jsx)("div",{className:"vacancy__list-item__name h3",children:e.vacancy.name})]})})},M=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var c;return Object(i.a)(this,a),(c=t.call(this,e)).settingsSlider={dots:!0,infinite:!1,speed:500,arrows:!0,slidesToShow:3,slidesToScroll:1,onInit:function(){c.setState({sliderInit:!0})},beforeChange:function(e,t){c.changeSliderIndex(e,t)}},c.state={pageLoading:!0,items:[],sliderInit:!1},c.loadData=Object(y.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.getVacancies();case 2:t=e.sent,c.setState({pageLoading:!1,items:t});case 4:case"end":return e.stop()}}),e)}))),c.changeSliderIndex=function(e,t){0===e&&0!==t?document.querySelector(".vacancy-prev-arrow").classList.remove("disabled"):0!==e&&0===t&&document.querySelector(".vacancy-prev-arrow").classList.add("disabled"),t+c.slider.props.slidesToShow===c.state.items.length?document.querySelector(".vacancy-next-arrow").classList.add("disabled"):document.querySelector(".vacancy-next-arrow").classList.remove("disabled")},c.renderVacancyItems=function(){var e,t=[],a=Object(x.a)(c.state.items);try{for(a.s();!(e=a.n()).done;){var n=e.value;t.push(Object(h.jsx)(I,{vacancy:n}))}}catch(s){a.e(s)}finally{a.f()}return Object(h.jsx)(k.a,Object(O.a)(Object(O.a)({ref:function(e){return c.slider=e}},c.settingsSlider),{},{children:t}))},c.renderLoaders=function(){return Object(h.jsxs)(k.a,Object(O.a)(Object(O.a)({},c.settingsSlider),{},{children:[Object(h.jsx)("div",{className:"vacancy__list-item vacancy__list-item__loader",children:Object(h.jsx)("div",{})}),Object(h.jsx)("div",{className:"vacancy__list-item vacancy__list-item__loader",children:Object(h.jsx)("div",{})}),Object(h.jsx)("div",{className:"vacancy__list-item vacancy__list-item__loader",children:Object(h.jsx)("div",{})}),Object(h.jsx)("div",{className:"vacancy__list-item vacancy__list-item__loader",children:Object(h.jsx)("div",{})}),Object(h.jsx)("div",{className:"vacancy__list-item vacancy__list-item__loader",children:Object(h.jsx)("div",{})}),Object(h.jsx)("div",{className:"vacancy__list-item vacancy__list-item__loader",children:Object(h.jsx)("div",{})})]}))},c.next=c.next.bind(Object(T.a)(c)),c.previous=c.previous.bind(Object(T.a)(c)),c}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"next",value:function(){void 0!==this.slider&&this.slider.slickNext()}},{key:"previous",value:function(){void 0!==this.slider&&this.slider.slickPrev()}},{key:"render",value:function(){return Object(h.jsx)("div",{className:"vacancy__wrapper",children:Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsxs)("div",{className:"vacancy__title-wrapper",children:[Object(h.jsx)("h2",{className:"vacancy__title h2",children:"\u0432\u0430\u043a\u0430\u043d\u0441\u0438\u0438 \u0432 \u0433\u0440\u043e\u0441\u0441 \u043c\u0430\u0440\u043a\u0435\u0442\u0435"}),this.state.sliderInit&&Object(h.jsxs)("div",{className:"vacancy__slider-arrows",children:[Object(h.jsx)("button",{className:"vacancy__slider-arrow vacancy-prev-arrow disabled",onClick:this.previous}),Object(h.jsx)("button",{className:"vacancy__slider-arrow vacancy-next-arrow",onClick:this.next})]})]}),Object(h.jsxs)("div",{className:"vacancy__list",children:[this.state.pageLoading&&this.renderLoaders(),!this.state.pageLoading&&this.state.items.length>0&&this.renderVacancyItems()]})]})})}}]),a}(n.a.Component),D=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).vw=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0),e.firstPageSize=e.vw>=1440?6:5,e.pageSize=e.vw>=1440?8:6,e.state={page:0,pageLoading:!0,totalCnt:0,photos:[]},e.loadData=Object(y.a)(g.a.mark((function t(){var a,c=arguments;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.length>0&&void 0!==c[0]?c[0]:0,e.setState({pageLoading:!0}),t.next=4,new Promise((function(e){return setTimeout(e,5e3)}));case 4:(a=e.state.photos).push(""),a.push(""),a.push(""),a.push(""),a.push(""),e.setState({photos:a});case 11:case"end":return t.stop()}}),t)}))),e.renderLoader=function(){for(var t=[],a=0;a<(0===e.state.page?e.firstPageSize:e.pageSize);a++)t.push(Object(h.jsx)("div",{className:"instagram-feed__items__loader"}));return Object(h.jsx)("div",{className:"instagram-feed__items__loader-list",children:t})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.loadData(this.firstPageSize)}},{key:"render",value:function(){return Object(h.jsx)("div",{className:"instagram-feed__wrapper",children:Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsx)("h2",{className:"instagram-feed__title h2",children:"\u043c\u044b \u0432 \u0438\u043d\u0441\u0442\u0430\u0433\u0440\u0430\u043c\u0435"}),Object(h.jsx)("div",{className:"instagram-feed__items"}),this.renderLoader()]})})}}]),a}(n.a.Component),z=a(76),B=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={placemarks:[],placemarksFiltered:[],placemarkSelectedType:0},e.loadPlaceMark=Object(y.a)(g.a.mark((function t(){var a,c,n,s,r,i,o,l,d,j,b,p,u,m,_=arguments;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=_.length>0&&void 0!==_[0]?_[0]:0,0!==e.state.placemarks.length){t.next=12;break}return c={iconLayout:"default#image",iconImageHref:"/_images/map_placemark.svg",iconImageSize:[44,44],iconImageOffset:[-22,-22]},n=[],s=[],t.next=6,C.getMapPoints();case 6:r=t.sent,i=Object(x.a)(r);try{for(i.s();!(o=i.n()).done;)l=o.value,d=l.PROPERTY_COORD_VALUE.replace(/\s/g,"").split(","),j=Object(h.jsx)(z.b,{geometry:[d[0],d[1]],options:c}),s.push(j),n.push({placemark:j,type:l.PROPERTY_TYPE_ENUM_ID})}catch(v){i.e(v)}finally{i.f()}e.setState({placemarks:n,placemarksFiltered:s}),t.next=16;break;case 12:b=[],p=Object(x.a)(e.state.placemarks);try{for(p.s();!(u=p.n()).done;)m=u.value,0!==a&&m.type!=="".concat(a)||b.push(m.placemark)}catch(v){p.e(v)}finally{p.f()}e.setState({placemarksFiltered:b,placemarkSelectedType:a});case 16:case"end":return t.stop()}}),t)}))),e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.loadPlaceMark()}},{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{className:"geography__wrapper",children:Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsx)("h2",{className:"geography__title h2",children:"\u0433\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u044f"}),Object(h.jsxs)("div",{className:"geography__map",children:[Object(h.jsx)(z.c,{children:Object(h.jsxs)(z.a,{defaultState:{center:[55.755819,37.617644],zoom:12},width:"100%",height:"100%",children:[this.state.placemarksFiltered,Object(h.jsx)(z.d,{options:{size:"small",position:{bottom:24,right:24}}})]})}),Object(h.jsxs)("div",{className:"geography__map-filter",children:[Object(h.jsx)("button",{className:"geography__map-filter__button".concat(6===this.state.placemarkSelectedType?" active":""),onClick:function(){return e.loadPlaceMark(6)},children:"\u044e\u0440\u043b\u0438\u0446\u0430"}),Object(h.jsx)("button",{className:"geography__map-filter__button".concat(5===this.state.placemarkSelectedType?" active":""),onClick:function(){return e.loadPlaceMark(5)},children:"\u0444\u0438\u0437\u043b\u0438\u0446\u0430"}),Object(h.jsx)("button",{className:"geography__map-filter__button".concat(0===this.state.placemarkSelectedType?" active":""),onClick:function(){return e.loadPlaceMark(0)},children:"\u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0451"})]})]})]})})}}]),a}(n.a.Component),E=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("section",{className:"home__page",children:[Object(h.jsx)(v.a,{children:Object(h.jsx)("title",{children:"\u0413\u0440\u043e\u0441\u0441 \u043c\u0430\u0440\u043a\u0435\u0442"})}),Object(h.jsx)(P,{}),Object(h.jsx)(M,{}),Object(h.jsx)(D,{}),Object(h.jsx)(B,{})]})}}]),a}(n.a.Component),U=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"header__section-wrapper",children:Object(h.jsx)(v.a,{children:Object(h.jsx)("title",{children:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0442\u0432\u043e\u0435\u0439 \u043c\u0435\u0447\u0442\u044b"})})})}}]),a}(n.a.Component),q=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsx)(j.a,{children:Object(h.jsxs)(u,{children:[Object(h.jsx)(m,{}),Object(h.jsxs)(b.c,{children:[Object(h.jsx)(b.a,{exact:!0,path:"/",component:E}),Object(h.jsx)(b.a,{path:"/questionnaire",component:U})]}),Object(h.jsx)(_,{})]})})}}]),a}(n.a.Component);r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(q,{})}),document.getElementById("app"))}},[[509,1,2]]]);
//# sourceMappingURL=main.466b8241.chunk.js.map