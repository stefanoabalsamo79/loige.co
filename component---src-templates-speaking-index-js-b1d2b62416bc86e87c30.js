(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{162:function(e,t,n){"use strict";n.r(t);n(192),n(194),n(57);var a=n(7),r=n.n(a),i=(n(87),n(88),n(261),n(0)),o=n.n(i),l=n(164),c=n(43),s=n(180),p=n(165),m=n(170),u=n(166),d=n(264),g=n.n(d),h=(n(42),function(e){return o.a.createElement("svg",Object.assign({"aria-hidden":"true","data-prefix":"fas","data-icon":"images",className:"svg-inline--fa fa-images fa-w-18",viewBox:"0 0 576 512",width:"1em",height:"1em"},e),o.a.createElement("path",{fill:"currentColor",d:"M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v208c0 44.112 35.888 80 80 80h336zm96-80V80c0-26.51-21.49-48-48-48H144c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h384c26.51 0 48-21.49 48-48zM256 128c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-96 144l55.515-55.515c4.686-4.686 12.284-4.686 16.971 0L272 256l135.515-135.515c4.686-4.686 12.284-4.686 16.971 0L512 208v112H160v-48z"}))}),f=function(e){return o.a.createElement("svg",Object.assign({"aria-hidden":"true","data-prefix":"fas","data-icon":"video",className:"svg-inline--fa fa-video fa-w-18",viewBox:"0 0 576 512",width:"1em",height:"1em"},e),o.a.createElement("path",{fill:"currentColor",d:"M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"}))},v=(n(91),n(265),n(44)),b=n.n(v),k=Object(l.b)("div",{target:"e1gps5zz0"})("width:100%;height:30vh;min-height:300px;max-height:900px;background:#46c9e5;&.collapsed{height:0;min-height:0;max-height:0;}"),E=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={events:t.events},n.createMap=n.createMap.bind(b()(b()(n))),n}r()(t,e);var n=t.prototype;return n.createMap=function(){var e=L.tileLayer("https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}",{attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',subdomains:"abcd",minZoom:1,maxZoom:16,ext:"png"}),t=L.map("speaking_map").setView([51.505,-.09],3);e.addTo(t);var n=L.markerClusterGroup({maxClusterRadius:20});this.state.events.forEach(function(e){var t=e.frontmatter.event_location_gps.split(",").map(parseFloat);L.marker(t).bindPopup("<b>"+e.frontmatter.event_name+"</b><br/><em>"+e.frontmatter.title+"</em><br/>"+e.frontmatter.date).addTo(n)}),n.addTo(t)},n.shouldComponentUpdate=function(){return!this.state.loaded},n.componentDidMount=function(){this.setState({loaded:!0});var e=document.createElement("script");e.type="text/javascript",e.src="/resources/leaflet/leaflet.js";var t=document.createElement("link");t.type="text/css",t.rel="stylesheet",t.href="/resources/leaflet/leaflet.css",document.head.appendChild(e),document.head.appendChild(t),e.onload=this.createMap.bind(this)},n.render=function(){return o.a.createElement(k,{className:this.state.loaded?null:"collapsed",id:"speaking_map"})},t}(i.Component),x=n(168);n.d(t,"pageQuery",function(){return C});var w=Object(l.b)("div",{target:"e1iccc0a0"})("margin:2em auto;padding-left:20px;padding-right:20px;max-width:820px;flex-direction:column;font-size:16px;@media (min-width:780px){width:90%;font-size:17px;}h2{margin:2em 0 1em 0;color:#46c9e5;}p,ul{line-height:1.7;margin:1em 0 0 0;max-width:42em;}p.slides-video{margin:1em 0 0 0;a{display:inline-block;margin:0 0 0 1em;&:first-of-type{margin:0;}svg{vertical-align:text-bottom;}}}ul.topics{padding:0 0 0 2em;a{font-weight:bold;}}ul.events{list-style:none;li{border-top:1px solid #ececec;margin-top:2em;padding-top:2em;line-height:1.2;&:first-of-type{border-top:none;margin-top:0;padding-top:0;}}}"),y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.event.frontmatter,t=function(e){var t={comaSeparated:null,and:null,length:e.length};if(1===e.length)t.comaSeparated=e;else{var n=e[e.length-1];t.comaSeparated=e.slice(0,e.length-1),t.and=n}return t}(e.with);return o.a.createElement("div",{className:"event-wrapper",itemScope:!0,itemType:"http://schema.org/Event"},o.a.createElement("h3",{className:"event-title",itemProp:"name"},e.title,e.is_workshop?" (workshop)":""),o.a.createElement("p",{style:{marginTop:"1em"}},o.a.createElement("span",null,o.a.createElement("a",{href:e.event_link,rel:"nofollow noopener noreferrer",target:"_blank"},e.event_name)),"  - ",o.a.createElement("span",null,e.date),t.length>0&&o.a.createElement("span",null,"  - with"," ",t.comaSeparated.map(function(e,n){return o.a.createElement(i.Fragment,{key:e.name},o.a.createElement("a",{href:e.link,rel:"nofollow noopener noreferrer",target:"_blank"},e.name),n<t.comaSeparated.length-1&&", ")}),t.and&&o.a.createElement(i.Fragment,null," and"," ",o.a.createElement("a",{href:t.and.link,rel:"nofollow noopener noreferrer",target:"_blank"},t.and.name)))),(e.slides_link||e.video_link)&&o.a.createElement("p",{className:"slides-video"},e.slides_link&&o.a.createElement("a",{href:e.slides_link,rel:"nofollow noopener noreferrer",target:"_blank"},o.a.createElement(h,null)," Slides")," ",e.video_link&&o.a.createElement("a",{href:e.video_link,rel:"nofollow noopener noreferrer",target:"_blank"},o.a.createElement(f,null)," Video")))},t}(i.Component),S=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=Object(s.get)(this,"props.data.site.siteMetadata.title"),t=this.props.pageContext.events,n=function(e){var t=(new Date).toISOString(),n=[],a=[];return e.forEach(function(e){e.frontmatter.originalDate>=t?n.unshift(e):a.push(e)}),{future:n,past:a}}(t),a=n.future,r=n.past;return o.a.createElement(m.a,{location:this.props.location,section:"speaking"},o.a.createElement(p.a,{path:"speaking/",pageData:{frontmatter:{title:"Speaking events: conference talks and workshops - "+e}}}),o.a.createElement(u.a,{className:"small gradientOverlay",backgroundImage:g.a},o.a.createElement("h1",null,"Speaking")),o.a.createElement(w,null,o.a.createElement(x.a,null,o.a.createElement("p",null,"I am quite involved with conferences and I love delivering technical talks and workshops."),o.a.createElement("p",null,"Lately I have been focusing on the following topics:"),o.a.createElement("ul",{className:"topics"},o.a.createElement("li",null,o.a.createElement(c.Link,{to:"/tag/node-js"},"Node.js"),","," ",o.a.createElement(c.Link,{to:"/tag/javascript"},"JavaScript")," and"," ",o.a.createElement(c.Link,{to:"/tag/design-patterns"},"Design Patterns")),o.a.createElement("li",null,o.a.createElement(c.Link,{to:"/tag/serverless"},"Serverless")," and"," ",o.a.createElement(c.Link,{to:"/tag/aws"},"AWS")),o.a.createElement("li",null,o.a.createElement("strong",null,"Systems architecture")," and"," ",o.a.createElement(c.Link,{to:"/tag/scalability"},"Scalability"))),o.a.createElement("p",null,"If you think I can be a good suit to talk or host a workshop, you can"," ",o.a.createElement("strong",null,o.a.createElement("a",{href:"http://loige.link/invite-me-to-a-conference",target:"_blank",rel:"nofollow noopener noreferrer"},"📩 invite me to your next cool conference")),"."),o.a.createElement("p",null,"Here you can find a list of my future and past engagements."))),o.a.createElement(E,{events:t}),o.a.createElement(w,null,o.a.createElement(x.a,null,o.a.createElement("h2",null,"Upcoming events"),a.length>0&&o.a.createElement("ul",{className:"events"},a.map(function(e){return o.a.createElement("li",{key:e.frontmatter.slug},o.a.createElement(y,{event:e}))})),0===a.length&&o.a.createElement("p",null,"No future events planned at this time :("),o.a.createElement("h2",null,"Past events (",r.length,")"),o.a.createElement("ul",{className:"events"},r.map(function(e){return o.a.createElement("li",{key:e.frontmatter.slug},o.a.createElement(y,{event:e}))})))))},t}(i.Component),C=(t.default=S,"1652182481")},166:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(0),o=n.n(i),l=n(164),c=n(167),s=n.n(c),p=Object(l.b)("div",{target:"ea1ziiz0"})("background-color:#46c9e5;background-repeat:no-repeat;background-position:center;background-size:cover;width:100%;min-height:300px;height:50vh;display:table;&.small{max-height:300px;}&.tiledBg{background-size:auto;background-repeat:repeat;}&.bottomRightBg{background-position:bottom right;}&.gradientOverlay{position:relative;z-index:-2;&:before{content:'';position:absolute;top:0;right:0;bottom:0;left:0;background-image:linear-gradient(to bottom right,#46c9e5,#d26ac2);opacity:0.6;z-index:-1;}}@media (min-width:780px){height:70vh;}"),m=Object(l.b)("div",{target:"ea1ziiz1"})("display:table-cell;vertical-align:middle;text-align:center;font-weight:700;color:#fff;padding:0 2em;color:white;text-shadow:1px 3px 0 #000,-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000;@media (min-width:780px){font-size:1.2em;}h1{font-size:2em;line-height:1.6em;}h2{font-size:1.5em;margin:0.5em 0 0 0;line-height:1.6em;}&.textOverlay > * > span{background:#000000c4;display:inline;padding:0.2em;box-decoration-break:clone;-webkit-box-decoration-break:clone;}"),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=(e.isSmall,e.children),n=e.className,a=this.props.backgroundImage||s.a;return o.a.createElement(p,{className:n,style:{backgroundImage:"url("+a+")"}},o.a.createElement(m,{className:n},t))},t}(i.Component);t.a=u},167:function(e,t,n){e.exports=n.p+"static/default-bg-e7d1dfbd3202e36e2d9d70dfd5a77122.jpg"},192:function(e,t,n){"use strict";n(193)("link",function(e){return function(t){return e(this,"a","href",t)}})},193:function(e,t,n){var a=n(6),r=n(20),i=n(33),o=/"/g,l=function(e,t,n,a){var r=String(i(e)),l="<"+t;return""!==n&&(l+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),l+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(l),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},194:function(e,t,n){var a=n(32).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(19)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},261:function(e,t,n){var a=n(6),r=n(262);a(a.P+a.F*(Date.prototype.toISOString!==r),"Date",{toISOString:r})},262:function(e,t,n){"use strict";var a=n(20),r=Date.prototype.getTime,i=Date.prototype.toISOString,o=function(e){return e>9?e:"0"+e};e.exports=a(function(){return"0385-07-25T07:06:39.999Z"!=i.call(new Date(-5e13-1))})||!a(function(){i.call(new Date(NaN))})?function(){if(!isFinite(r.call(this)))throw RangeError("Invalid time value");var e=this,t=e.getUTCFullYear(),n=e.getUTCMilliseconds(),a=t<0?"-":t>9999?"+":"";return a+("00000"+Math.abs(t)).slice(a?-6:-4)+"-"+o(e.getUTCMonth()+1)+"-"+o(e.getUTCDate())+"T"+o(e.getUTCHours())+":"+o(e.getUTCMinutes())+":"+o(e.getUTCSeconds())+"."+(n>99?n:"0"+o(n))+"Z"}:i},264:function(e,t,n){e.exports=n.p+"static/speaking-bg-b3fa54c7a0352de7f7ab61fed7f8b40c.jpg"},265:function(e,t,n){var a=n(6);a(a.P,"Function",{bind:n(266)})},266:function(e,t,n){"use strict";var a=n(22),r=n(12),i=n(89),o=[].slice,l={};e.exports=Function.bind||function(e){var t=a(this),n=o.call(arguments,1),c=function(){var a=n.concat(o.call(arguments));return this instanceof c?function(e,t,n){if(!(t in l)){for(var a=[],r=0;r<t;r++)a[r]="a["+r+"]";l[t]=Function("F,a","return new F("+a.join(",")+")")}return l[t](e,n)}(t,a.length,a):i(t,a,e)};return r(t.prototype)&&(c.prototype=t.prototype),c}}}]);
//# sourceMappingURL=component---src-templates-speaking-index-js-b1d2b62416bc86e87c30.js.map