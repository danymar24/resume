(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{130:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/resume.37441bb2.md"},133:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(48),l=n.n(r),i=(n(57),n(7)),c=n(8),m=n(10),u=n(9),s=(n(58),n(137)),d=n.n(s),h=n(49),f=n.n(h),p=n(51),E=n.n(p),g=n(134),v=n.n(g),b=n(135),w=n.n(b),k=n(136),y="Daniel Rdz",O="Full Stack Developer",j="(469) 774 35 71",N={title:"danymar24@gmail.com",url:"danymar24@gmail.com"},F={title:"linkedin.com/in/danielrdzm/",url:"https://linkedin.com/in/danielrdzm/"},_={title:"danymar24",url:"https://github.com/danymar24"},B="U.S. Citizen (Authorized to work in the US for any employer)",C="Plano TX. 75024";var U=Object(k.withStyles)({media:{height:230}})((function(e){var t=e.classes;return o.a.createElement(f.a,null,o.a.createElement(v.a,{image:"images/danielrdz.jpg",title:"Daniel Rdz",className:t.media}),o.a.createElement(E.a,null,o.a.createElement(w.a,{gutterBottom:!0,variant:"headline",component:"h2"},y),o.a.createElement(w.a,{gutterBottom:!0,variant:"title",component:"h3"},O),o.a.createElement(w.a,{gutterBottom:!0,variant:"body1",component:"h3"},"Phone: ",j),o.a.createElement(w.a,{gutterBottom:!0,variant:"body1",component:"h3"},"Email: ",o.a.createElement("a",{href:"mailto:"+N.url},N.title)),o.a.createElement(w.a,{gutterBottom:!0,variant:"body1",component:"h3"},"LinkedIn: ",o.a.createElement("a",{target:"_blank",href:F.url},F.url)),o.a.createElement(w.a,{gutterBottom:!0,variant:"body1",component:"h3"},"Github: ",o.a.createElement("a",{target:"_blank",href:_.url},_.title)),o.a.createElement(w.a,{gutterBottom:!0,variant:"body1",component:"h3"},"Citizenship: ",B),o.a.createElement(w.a,{gutterBottom:!0,variant:"body1",component:"h3"},"Location: ",C)))})),W=n(52),z=n.n(W),S=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={markdown:""},n}return Object(c.a)(a,[{key:"componentWillMount",value:function(){var e=this,t=n(130);fetch(t).then((function(e){return e.text()})).then((function(t){e.setState({markdown:z()(t)})}))}},{key:"render",value:function(){return o.a.createElement(f.a,null,o.a.createElement(E.a,null,o.a.createElement("article",{className:"resume",dangerouslySetInnerHTML:{__html:this.state.markdown}})))}}]),a}(o.a.Component),T=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.data,t="".concat(e.homeUrl,"/followers"),n="".concat(e.homeUrl,"?tab=repositories"),a="".concat(e.homeUrl,"/following");return"Not Found"===e.notFound?o.a.createElement("div",{className:"notfound"},o.a.createElement("h2",null,"Oops !!!"),o.a.createElement("p",null,"The Component Couldn't Find The You Were Looking For . Try Again ")):o.a.createElement(f.a,{className:"github-profile"},o.a.createElement(E.a,null,o.a.createElement("div",null,o.a.createElement("h2",null,o.a.createElement("a",{href:e.homeUrl,title:e.username,target:"_blank"},"Github"))),o.a.createElement("div",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:t,target:"_blank",title:"Number Of Followers"},o.a.createElement("i",null,e.followers),o.a.createElement("span",null," Followers"))),o.a.createElement("li",null,o.a.createElement("a",{href:n,target:"_blank",title:"Number Of Repository"},o.a.createElement("i",null,e.repos),o.a.createElement("span",null," Repositories"))),o.a.createElement("li",null,o.a.createElement("a",{href:a,target:"_blank",title:"Number Of Following"},o.a.createElement("i",null,e.following),o.a.createElement("span",null,"Following")))))))}}]),n}(o.a.Component),x=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={username:"danymar24",name:"",avatar:"",location:"",repos:"",followers:"",following:"",homeUrl:"",notFound:""},a}return Object(c.a)(n,[{key:"fetchProfile",value:function(e){var t=this,n="".concat("https://api.github.com/users","/").concat(e);fetch(n).then((function(e){return e.json()})).then((function(e){t.setState({username:e.login,name:e.name,avatar:e.avatar_url,location:e.location,repos:e.public_repos,followers:e.followers,following:e.following,homeUrl:e.html_url,notFound:e.message})})).catch((function(e){return console.log("Oops! . There Is A Problem")}))}},{key:"componentDidMount",value:function(){this.fetchProfile(this.state.username)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("section",{id:"card"},o.a.createElement(T,{data:this.state})))}}]),n}(o.a.Component);var L=function(){return o.a.createElement(f.a,{className:"word-document"},o.a.createElement(E.a,null,o.a.createElement("h2",null,"Word"),o.a.createElement("p",null,"You can download the resume on word document."),o.a.createElement("span",null,o.a.createElement("a",{href:"resume.docx",download:!0},"Word Document"))))},A=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("main",{className:"App"},o.a.createElement(d.a,{container:!0,spacing:16},o.a.createElement(d.a,{item:!0,xs:12,md:4},o.a.createElement(U,{classes:{media:"media"}}),o.a.createElement(d.a,{container:!0,spacing:16},o.a.createElement(d.a,{item:!0,xs:6,md:12},o.a.createElement(L,null)),o.a.createElement(d.a,{item:!0,xs:6,md:12},o.a.createElement(x,null)))),o.a.createElement(d.a,{item:!0,xs:12,md:8},o.a.createElement(S,null))))}}]),n}(a.Component),D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(o.a.createElement(A,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");D?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):P(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):P(e)}))}}()},57:function(e,t,n){},58:function(e,t,n){}},[[133,1,2]]]);
//# sourceMappingURL=main.66d5a07f.chunk.js.map