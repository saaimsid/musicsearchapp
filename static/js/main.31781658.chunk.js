(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(2),r=a.n(o),l=a(3),s=a(4),u=a(6),i=a(5),m=function(e){return c.a.createElement("div",{className:"inputText"},c.a.createElement("input",{type:"text",placeholder:"Search a song",className:"form-control",onChange:e.takeInput}),c.a.createElement("button",{className:"btn btn-primary",onClick:e.searchNow},"Search"),c.a.createElement("br",null))},h=(a(12),function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Track Name : ",e.Name),c.a.createElement("p",null,c.a.createElement("audio",{controls:!0},c.a.createElement("source",{src:e.Url}))))}),g=function(e){console.log("Props Song data :: ",e.songdata);var t=e.songdata.length,a=c.a.createElement("p",null,"No Record Found"),n=c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Total Results = ",t),e.songdata.map((function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(h,{Name:e.trackName,Url:e.previewUrl}))})));return c.a.createElement("div",null,0==e.songdata.length?a:n)},p=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).searchSong="",n.state={songData:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"getData",value:function(e){var t=this;console.log("searchValue",e),console.log("searchSong",this.searchSong);var a="https://itunes.apple.com/search?term=".concat(e,"&limit=15");fetch(a).then((function(e){e.json().then((function(e){console.log("Data :::",e.results),t.setState({songData:e.results})})).catch((function(e){console.log("Error is JSON ",e)})),console.log("Response is coming",e)})).catch((function(e){console.log("ERROR ::: ",e)}))}},{key:"takeInput",value:function(e){var t=e.target.value;this.searchSong=t,console.log("data : ",this.searchSong)}},{key:"searchNow",value:function(){console.log("button clicked",this.searchSong),this.getData(this.searchSong)}},{key:"render",value:function(){return c.a.createElement("div",{className:"AppBackground"},c.a.createElement("h1",null,c.a.createElement("div",{className:"MainText"},this.props.title)),c.a.createElement(m,{takeInput:this.takeInput.bind(this),searchNow:this.searchNow.bind(this)}),c.a.createElement(g,{songdata:this.state.songData}))}}]),a}(c.a.Component);var E=function(){return c.a.createElement("div",null,c.a.createElement(p,{title:"Music Search App"}))};r.a.render(c.a.createElement(E,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.31781658.chunk.js.map