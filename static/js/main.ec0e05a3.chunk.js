(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,n){e.exports=n(185)},111:function(e,t,n){},112:function(e,t,n){},185:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),i=n(4),r=n.n(i),o=(n(111),n(112),n(17)),c=n(18),u=n(20),l=n(19),h=n(55),p=n(21),d=n(189),m=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.appStore;return a.a.createElement("div",{className:"connectionBar "+e.connection},e.connection)}}]),t}(a.a.Component),g=n(187),v=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.appStore,t=Object.keys(e.typingUsers);return a.a.createElement("div",{className:"typingUsers"},a.a.createElement("span",null,t.length>0&&t.join(",")+" typing..."))}}]),t}(a.a.Component),y=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).state={inputValue:""},e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"keyDetect",value:function(e){var t=this.props.api;this.setState({inputValue:e.target.value}),t.updateTyping()}},{key:"submitMessage",value:function(){this.props.api.sendMessage(this.state.inputValue),this.setState({inputValue:""})}},{key:"render",value:function(){return a.a.createElement("div",{className:"inputBox"},a.a.createElement(v,{appStore:this.props.appStore}),a.a.createElement(g.a,{placeholder:"Type here...",style:{color:"black"},value:this.state.inputValue,onChange:this.keyDetect.bind(this),onPressEnter:this.submitMessage.bind(this)}))}}]),t}(a.a.Component),f=n(188),k=n(186),b=n(190),S=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).mounted=!1,e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.mounted=!0}},{key:"parseSkeleton",value:function(){return 0===this.props.appStore.messages.length?a.a.createElement(f.a,{size:"small",active:!0}):this.renderMessageList()}},{key:"componentDidUpdate",value:function(e,t){e.appStore.scrollHeight!==this.props.appStore.scrollHeight&&window.scrollTo(0,this.props.appStore.scrollHeight)}},{key:"renderMessageList",value:function(){var e=this.props.appStore;return a.a.createElement(k.a,{size:"small",split:!1,dataSource:e.messages,className:"messageContainer",renderItem:function(e){return a.a.createElement(k.a.Item,{style:"@self"===e.sender.trim()?{justifyContent:"flex-end"}:{}},"@self"===e.sender.trim()?a.a.createElement(b.a,{color:"geekblue"},a.a.createElement("div",{style:{wordBreak:"break-word"}},e.raw)):a.a.createElement(b.a,{color:"blue"},e.raw))}})}},{key:"render",value:function(){return this.parseSkeleton()}}]),t}(a.a.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=d.a.Content,t=this.props,n=t.appStore,s=t.api;return a.a.createElement("div",{className:"padding10"},a.a.createElement(e,null,a.a.createElement(m,{appStore:n}),a.a.createElement(S,{appStore:n}),a.a.createElement(y,{api:s,appStore:n})))}}]),t}(a.a.Component),C=n(74),E=n.n(C),w={CONNECTED:"connected",DISCONNECTED:"disconnected",CONNECTING:"connecting"},j=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).username="",e.audio=new Audio("https://notificationsounds.com/soundfiles/8eefcfdf5990e441f0fb6f3fad709e21/file-sounds-1100-open-ended.ogg"),e.queryParams={},window.onfocus=e.onFocus.bind(Object(h.a)(e)),e.state={messages:[],connection:w.CONNECTING,onlineUsers:"",typingUsers:{},scrollHeight:0,messageCountWhenAway:0},e.readUrlQueryParams(),e.serverSocket=null,e.initializeWebSocket(),e.startAsyncServices(),e.recovering=!1,e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"readUrlQueryParams",value:function(){var e={},t=window.location.href,n=/\?(.*)/.exec(t);if(null!=n)for(var s=n[1].split("&"),a=0;a<s.length;a++){var i=s[a].split("=");e[i[0]]=i[1]}this.username=void 0===e.n?"":e.n,this.queryParams=e}},{key:"onFocus",value:function(){document.title="FrizBee",this.setState({messageCountWhenAway:0})}},{key:"updateMessageCountOnBlur",value:function(){if(!document.hasFocus()){var e=this.state.messageCountWhenAway;this.audio.play(),this.setState({messageCountWhenAway:e+1})}}},{key:"initializeWebSocket",value:function(){null!==this.serverSocket&&this.serverSocket.readyState===WebSocket.CONNECTING||(this.state.connection===w.DISCONNECTED&&(this.recovering=!0),this.serverSocket=new WebSocket(this.formWsUrl()),this.serverSocket.onopen=this.onWebsocketOpen.bind(this),this.serverSocket.onclose=this.onWebsocketClose.bind(this),this.serverSocket.onmessage=this.onWebsocketMessage.bind(this),this.serverSocket.onerror=this.handleError.bind(this))}},{key:"onWebsocketOpen",value:function(){this.setState({connection:w.CONNECTED})}},{key:"onWebsocketMessage",value:function(e){this.resolveMessage(e.data)}},{key:"handleError",value:function(){this.onWebsocketClose()}},{key:"onWebsocketClose",value:function(){this.setState({connection:w.DISCONNECTED})}},{key:"resolveMessage",value:function(e){0!==e.indexOf("@online")?0!==e.indexOf("@typing")?this.updateNewMessage(e):this.updateTypingUsers(e):this.updateOnlineUsers(e)}},{key:"updateOnlineUsers",value:function(e){var t=e.split("@online : ")[1];this.setState({onlineUsers:t})}},{key:"updateTypingUsers",value:function(e){var t=this.state,n=t.typingUsers,s=t.userName,a=e.split("@typing:")[1];a!==s&&(n[a]=this.getTime()),this.setState({typingUsers:n})}},{key:"parseIncommingMessage",value:function(e){return{sender:e.split(":")[0],raw:e,time:E()().format("LLL")}}},{key:"parseOutgoingMessage",value:function(e){return{sender:"@self",raw:e,time:E()().format("LLL")}}},{key:"updateNewMessage",value:function(e){var t=this.state,n=t.messages,s=t.typingUsers;n.push(this.parseIncommingMessage(e)),delete s[e.split(":")[0].trim()],this.updateMessageCountOnBlur(),this.setState({messages:n,typingUsers:s,scrollHeight:130*n.length})}},{key:"sendMessage",value:function(e){if(""!==e.trim()){var t=this.state.messages;""===this.username?(this.setUsername(e),t.push(this.parseOutgoingMessage(e)),this.serverSocket.send(e)):(t.push(this.parseOutgoingMessage(e)),this.serverSocket.send(e)),this.setState({messages:t,scrollHeight:130*t.length})}}},{key:"setUsername",value:function(e){this.queryParams.n=e,this.username=e}},{key:"updateTyping",value:function(){""!==this.username&&this.serverSocket.send("@typing:"+this.username)}},{key:"formWsUrl",value:function(){var e=this.getQueryString();return"localhost"===window.location.hostname?"ws://localhost:8080"+e:"wss://events.newgen.co/im"+e}},{key:"getQueryString",value:function(){var e="?",t=Object.keys(this.queryParams);for(var n in t){var s=t[n];e+=s+"="+this.queryParams[s]+"&"}return e.substring(0,e.length-1)}},{key:"getTime",value:function(){return Math.round((new Date).getTime())}},{key:"getApiHooks",value:function(){return{sendMessage:this.sendMessage.bind(this),updateTyping:this.updateTyping.bind(this)}}},{key:"startAsyncServices",value:function(){this.typingUserService=setInterval(this.refreshTypingUsers.bind(this),300),this.connectionMonitorService=setInterval(this.monitorConnection.bind(this),5e3)}},{key:"refreshTypingUsers",value:function(){var e=this.state.typingUsers,t=!1;for(var n in e)this.getTime()-e[n]>500&&(delete e[n],t=!0);t&&this.setState({typingUsers:e})}},{key:"monitorConnection",value:function(){var e=this.state.connection;e===w.DISCONNECTED&&this.initializeWebSocket(),e===w.CONNECTED&&this.serverSocket.send("@pong")}},{key:"renderTitle",value:function(){var e=this.state,t=e.messageCountWhenAway,n=e.messages,s=t>0?n[n.length-1].sender+" says..":"Frizbee";document.title=s}},{key:"render",value:function(){return this.renderTitle(),a.a.createElement("div",null,a.a.createElement(O,{appStore:this.state,api:this.getApiHooks()}))}}]),t}(a.a.Component);n(184);String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)};var N=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[106,1,2]]]);
//# sourceMappingURL=main.ec0e05a3.chunk.js.map