(this["webpackJsonpreact-web-hotel"]=this["webpackJsonpreact-web-hotel"]||[]).push([[0],{48:function(e,a,t){e.exports=t(88)},53:function(e,a,t){},54:function(e,a,t){},88:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(40),l=t.n(r),i=(t(53),t(11)),c=t(2),m=(t(54),t(19)),s=t(20),h=t(23),g=t(22),u=t(16),d=t(26),p=t(41),f=t.n(p),E=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"get",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o="i2A9LrARnW0vSgOGpO9E3X7kDM1tZDQwRLDK1qOlXxXtzVKG6ByZN2JXLxqC",r="get"===a?"params":"data",l={"X-Requested-With":"XMLHttpRequest","Content-Type":"application/json",Authorization:"Bearer ".concat(o)};return n.headers&&(l=Object(d.a)(Object(d.a)({},l),n.headers)),new Promise((function(n,o){var i;f()((i={url:"https://challenge.thef2e.com/api/thef2e2019/stage6/".concat(e),method:a},Object(u.a)(i,r,t),Object(u.a)(i,"headers",l),i)).then(n).catch((function(e){console.dir(e),o(e)}))}))},_={room:{getRooms:function(){return E("rooms","get")},getSingleRoom:function(e){return E("room/".concat(e.id),"get")},addRoom:function(e){return E("room/".concat(e.id),"post",e)}}},v=function(e){return function(a){Object(h.a)(n,a);var t=Object(g.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={rooms:[]},a}return Object(s.a)(n,[{key:"componentWillMount",value:function(){var e=this;_.room.getRooms().then((function(a){var t=a.data,n=t.success,o=t.items,r=o.map((function(e){return{name:e.name.split(" ").join("_"),id:e.id}}));sessionStorage.setItem("allRooms",JSON.stringify(r)),n&&o&&o.length>0&&e.setState({rooms:o})}))}},{key:"render",value:function(){return o.a.createElement(e,Object.assign({},this.state,this.props))}}]),n}(o.a.Component)}((function(e){var a=e.rooms;return o.a.createElement("div",{className:"homepage"},o.a.createElement("div",{className:"homepage_wrapper"},o.a.createElement("h1",null,"WHITE INN"),o.a.createElement("div",{className:"homepage_footer"},o.a.createElement("div",{className:"homepage_roomcarousel"},a.map((function(e){var a=e.name.split(" ").join("_");return o.a.createElement(i.b,{to:{pathname:"/roomInfo/".concat(a),query:{id:e.id}},key:e.id,className:"homepage_roomcarousel_roomcard"},o.a.createElement("div",{className:"homepage_roomcarousel_imgwrapper",style:{backgroundImage:"url(".concat(e.imageUrl,")")}}),o.a.createElement("div",{className:"homepage_roomcarousel_roominfo"},o.a.createElement("h3",null,e.name),o.a.createElement("p",null,"$ ",e.normalDayPrice),o.a.createElement("p",null,"$ ",e.holidayPrice)))}))),o.a.createElement("div",{className:"homepage_webinfo"},o.a.createElement("div",{className:"homepage_webinfo_wrapper"},o.a.createElement("p",null,"\u53f0\u5317\u5e02\uff2f\uff2f\u5340\uff2f\uff2f\u8857123\u865f"),o.a.createElement("p",null,"12345-6789"),o.a.createElement("p",null,"abcd@efghijk.com"))))))})),k=function(e){return function(a){Object(h.a)(n,a);var t=Object(g.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).onChangeRoomType=function(e){sessionStorage.setItem("roomId",e.id),a.onFetchRoomInfo()},a.onFetchRoomInfo=function(){a.setState({isShowLoading:!0}),_.room.getSingleRoom({id:sessionStorage.roomId}).then((function(e){var t=e.data,n=t.success,o=t.room,r=t.booking;n&&a.setState({room:o,booking:r,imageArr:o[0].imageUrl,isShowLoading:!1})}))},a.onChangeArrangement=function(e){e.stopPropagation();for(var t=a.state.imageArr,n=[],o=0;o<t.length;o++)o<t.length-1?n[o]=t[o+1]:n[o]=t[0];a.setState({imageArr:n})},a.onShowReserveDialog=function(){var e=a.state,t=e.name,n=e.phone,o=e.checkinDay,r=e.checkoutDay;if(!t||!n||!o||!r)return alert("\u8cc7\u6599\u672a\u586b\u5beb\u5b8c\u6574\uff0c\u8acb\u8f38\u5165\u5b8c\u6574");a.setState({isShowReserveDialog:!0})},a.onCloseReserveDialog=function(){a.setState({isShowReserveDialog:!1})},a.onShowImageDialog=function(e){a.setState({isShowImageDialog:!0,imageUrl:e})},a.onCloseImageDialog=function(){a.setState({isShowImageDialog:!1})},a.onShowCheckinDatePicker=function(){a.setState({isShowCheckinDatePicker:!0})},a.onCloseCheckinDatePicker=function(){a.setState({isShowCheckinDatePicker:!1})},a.onShowCheckoutDatePicker=function(){a.setState({isShowCheckoutDatePicker:!0})},a.onhandleCheckinDayClick=function(e){a.setState({checkinDay:e})},a.onhandleCheckoutDayClick=function(e){a.setState({checkoutDay:e})},a.onChangeName=function(e){a.setState({name:e.target.value})},a.onChangePhone=function(e){a.setState({phone:e.target.value})},a.formatDate=function(e){var a=new Date(e),t=a.getMonth()+1<10?"0".concat(a.getMonth()+1):a.getMonth()+1,n=a.getDate()<10?"0".concat(a.getDate()):a.getDate();return"".concat(a.getFullYear(),"-").concat(t,"-").concat(n)},a.onReservationSubmit=function(e){var t=a.state,n=t.name,o=t.phone,r=t.checkinDay,l=t.checkoutDay;e.stopPropagation();try{_.room.addRoom({id:sessionStorage.roomId,name:n,tel:o,date:[a.formatDate(r),a.formatDate(l)]}).then((function(e){}))}catch(i){console.log(i),alert(i.message)}},a.state={room:[],booking:[],imageArr:[],isShowReserveDialog:!1,isShowLoading:!1,isShowImageDialog:!1,isShowCheckinDatePicker:!1,isShowCheckoutDatePicker:!1,imageUrl:"",checkinDay:null,name:"",phone:""},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,a=e.location,t=e.history,n=a.pathname.split("/roomInfo/").join("");if(!sessionStorage.allRooms)return t.push("/");var o=JSON.parse(sessionStorage.allRooms);o.filter((function(e){return e.name===n&&(sessionStorage.setItem("roomId",e.id),!0)})).length<1&&t.push("/"),this.setState({allRooms:o}),this.onFetchRoomInfo()}},{key:"render",value:function(){return o.a.createElement(e,Object.assign({onChangeRoomType:this.onChangeRoomType,onChangeArrangement:this.onChangeArrangement,onShowReserveDialog:this.onShowReserveDialog,onCloseReserveDialog:this.onCloseReserveDialog,onShowImageDialog:this.onShowImageDialog,onCloseImageDialog:this.onCloseImageDialog,onShowCheckinDatePicker:this.onShowCheckinDatePicker,onShowCheckoutDatePicker:this.onShowCheckoutDatePicker,onCloseCheckinDatePicker:this.onCloseCheckinDatePicker,onhandleCheckinDayClick:this.onhandleCheckinDayClick,onhandleCheckoutDayClick:this.onhandleCheckoutDayClick,onChangeName:this.onChangeName,onChangePhone:this.onChangePhone,onReservationSubmit:this.onReservationSubmit},this.state,this.props))}}]),n}(o.a.Component)},D=t(45),C=t.n(D),S=t(46),w=t.n(S),N=t(42),y=t.n(N),b=function(e){var a=e.isShow,t=e.onClose;return o.a.createElement("div",{className:a?"dialog":"dialog_none",onClick:t},o.a.createElement("div",{className:"dialog_boxwrapper",onClick:function(e){return e.stopPropagation()}},e.children,o.a.createElement("span",{className:"dialog_boxwrapper_closebtn",onClick:t},o.a.createElement(y.a,null))))},I=t(43),R=t.n(I),P=function(e){var a=e.isShow;return o.a.createElement("div",{className:a?"loading":"loading_none"},o.a.createElement("div",{className:"loading_boxwrapper"},o.a.createElement(R.a,null),"Loading"))},O=t(29),j=t.n(O);t(86);var A=function(e){e.isShowCheckoutDatePicker,e.isShowCheckinDatePicker;var a=e.onShowReserveDialog,t=(e.onShowCheckinDatePicker,e.onShowCheckoutDatePicker,e.onhandleCheckinDayClick),n=e.onhandleCheckoutDayClick,r=e.onChangeName,l=e.name,i=e.onChangePhone,c=e.phone;return o.a.createElement("div",{className:"roompage_info_right_middle_down_half"},o.a.createElement("input",{type:"text",placeholder:"Name",value:l,onChange:r}),o.a.createElement("input",{type:"text",placeholder:"Phone",value:c,onChange:i}),o.a.createElement("div",{className:"roompage_info_right_middle_formDate"},o.a.createElement("div",{className:"roompage_info_right_middle_formDate_formDateLeftBox}",style:{marginRight:"10px"}},o.a.createElement(j.a,{onDayChange:t})),o.a.createElement("div",{className:"roompage_info_right_middle_formDate_formDateRightBox'}"},o.a.createElement(j.a,{onDayChange:n}))),o.a.createElement("div",{className:"roompage_info_right_middle_formButton"},o.a.createElement("div",null),o.a.createElement("div",null,o.a.createElement("button",{onClick:a},"\u9810\u7d04"))))},x=t(44),M=t.n(x);var L=function(e){var a=e.imageArr,t=e.onChangeArrangement,n=e.onShowImageDialog;return a&&a.length>0?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"roompage_info_left_largeimage",style:{backgroundImage:"url(".concat(a[0],")")},onClick:function(){return n(a[0])}},o.a.createElement("span",{className:"roompage_info_left_caroucelBtn",onClick:t},o.a.createElement(M.a,null))),o.a.createElement("div",{className:"roompage_info_left_smallimages"},o.a.createElement("div",{className:"roompage_info_left_smallimages_image",style:{backgroundImage:"url(".concat(a[1],")")},onClick:function(){return n(a[1])}}),o.a.createElement("div",{className:"roompage_info_left_smallimages_image",style:{backgroundImage:"url(".concat(a[2],")")},onClick:function(){return n(a[2])}}))):null},B=function(e){var a=e.room;return o.a.createElement("div",{className:"roompage_info_right_middle_top"},o.a.createElement("h3",null,a.length>0&&a[0].name),o.a.createElement("div",{className:"roompage_info_right_middle_price"},o.a.createElement("div",null,"\u5e73\u65e5(\u4e00~\u56db)\u50f9\u683c\uff1a",o.a.createElement("span",null,a.length>0&&a[0].normalDayPrice)),o.a.createElement("div",null,"\u5047\u65e5(\u4e94~\u65e5)\u50f9\u683c\uff1a",o.a.createElement("span",null,a.length>0&&a[0].holidayPrice))))},F={Single:"\u55ae\u4eba\u5e8a",Double:"\u96d9\u4eba\u5e8a","Small Double":"\u8c6a\u83ef\u55ae\u4eba\u5e8a",Queen:"\u8c6a\u83ef\u96d9\u4eba\u5e8a"},T=function(e){var a=e.room;return o.a.createElement("div",{className:"roompage_info_right_middle_down_half"},o.a.createElement("div",{className:"roompage_info_right_middle_descri"},a.length>0&&a[0].description),o.a.createElement("div",{className:"roompage_info_right_middle_detail"},o.a.createElement("p",null,"\u623f\u5ba2\u4eba\u6578\u9650\u5236\uff1a",a.length>0&&a[0].descriptionShort.GuestMin," - ",a.length>0&&a[0].descriptionShort.GuestMax," \u4eba"),o.a.createElement("p",null,"\u5e8a\u578b\uff1a",F[a.length>0&&a[0].descriptionShort.Bed[0]]),o.a.createElement("p",null,"\u885b\u6d74\u6578\u91cf\uff1a",a.length>0&&a[0].descriptionShort["Private-Bath"]," \u9593"),o.a.createElement("p",null,"\u623f\u9593\u5927\u5c0f\uff1a",a.length>0&&a[0].descriptionShort.Footage," \u5e73\u65b9\u516c\u5c3a"),o.a.createElement("p",null,"checkIn \u6642\u9593\uff1a",a.length>0&&a[0].checkInAndOut.checkInEarly," ~ ",a.length>0&&a[0].checkInAndOut.checkInLate),o.a.createElement("p",null,"checkOut \u6642\u9593\uff1a",a.length>0&&a[0].checkInAndOut.checkOut)))},W=function(e){var a=e.allRooms,t=e.onChangeRoomType,n=e.room;return o.a.createElement("div",{className:"roompage_info_right_top"},!!(a&&a.length>0)&&a.map((function(e){return n.length>0&&e.id!==n[0].id&&o.a.createElement(i.b,{to:"/roomInfo/".concat(e.name),key:e.id,onClick:function(){return t(e)}},o.a.createElement("h4",null,e.name.split("_").join(" ")))})))},X={0:"\u65e5",1:"\u4e00",2:"\u4e8c",3:"\u4e09",4:"\u56db",5:"\u4e94",6:"\u516d"},q=k((function(e){e.allRooms;var a=e.room,t=e.imageUrl,n=e.isShowReserveDialog,r=e.isShowLoading,l=e.isShowImageDialog,c=(e.onChangeRoomType,e.onCloseReserveDialog),m=e.onCloseImageDialog,s=e.checkinDay,h=e.checkoutDay,g=e.onReservationSubmit,u=function(e){var a=new Date(e),t=a.getMonth()+1<10?"0".concat(a.getMonth()+1):a.getMonth()+1,n=a.getDate()<10?"0".concat(a.getDate()):a.getDate();return"".concat(a.getFullYear(),"/").concat(t,"/").concat(n," \u661f\u671f").concat(X[a.getDay()])};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"roompage"},o.a.createElement("div",{className:"roompage_wrapper"},o.a.createElement("div",{className:"roompage_info"},o.a.createElement("div",{className:"roompage_info_left"},o.a.createElement(i.b,{to:"/"},o.a.createElement("h2",null,"WHITE INN")),o.a.createElement(L,e)),o.a.createElement("div",{className:"roompage_info_right"},o.a.createElement(W,e),o.a.createElement("div",{className:"roompage_info_right_middle"},o.a.createElement(B,e),o.a.createElement("div",{className:"roompage_info_right_middle_down"},o.a.createElement(T,e),o.a.createElement(A,e))),o.a.createElement("div",{className:"roompage_info_right_down"},Object.keys(a.length>0&&a[0].amenities).map((function(e){return o.a.createElement("div",{key:e,className:"roompage_info_right_down_item"},a[0].amenities[e]?o.a.createElement(C.a,null):o.a.createElement(w.a,null),o.a.createElement("span",null,e))})))))),o.a.createElement(b,{isShow:n,onClose:c},o.a.createElement("div",{className:"roompagedialog"},o.a.createElement("div",{className:"roompagedialog_wrapper"},o.a.createElement("h3",null,a.length>0&&a[0].name),o.a.createElement("div",{className:"roompagedialog_content"},o.a.createElement("div",{className:"roompagedialog_content_descri"},o.a.createElement("span",null,"\u5165\u4f4f"),o.a.createElement("span",null,u(s),"\uff0815:00 \u8d77\uff09")),o.a.createElement("div",{className:"roompagedialog_content_descri"},o.a.createElement("span",null,"\u9000\u623f"),o.a.createElement("span",null,u(h),"\uff0810:00 \u524d\uff09"))),o.a.createElement("div",{className:"roompagedialog_total"},"3 \u665a / 4260 \u5143")),o.a.createElement("button",{onClick:g},"\u78ba\u5b9a"))),o.a.createElement(b,{isShow:l,onClose:m},o.a.createElement("div",{className:"roompageimagedialog"},o.a.createElement("img",{src:t})))," ",o.a.createElement(P,{isShow:r})))})),J=function(e){return o.a.createElement(i.a,null,o.a.createElement(c.d,null,o.a.createElement(c.b,{exact:!0,path:"/",component:v}),o.a.createElement(c.b,{path:"/roomInfo/:type",component:q}),o.a.createElement(c.a,{from:"/roomInfo/",to:"/roomInfo/Single_Room"}),o.a.createElement(c.a,{from:"*",to:"/"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.ac7ee578.chunk.js.map