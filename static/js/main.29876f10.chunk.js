(this.webpackJsonppersonalportfolio=this.webpackJsonppersonalportfolio||[]).push([[0],{10:function(e,a,t){e.exports=t(20)},15:function(e,a,t){},18:function(e,a,t){},19:function(e,a,t){e.exports=t.p+"static/media/Profile.46975037.jpg"},20:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(8),c=t.n(r),s=(t(15),t(1)),m=t(2),o=t(4),i=t(3),u=t(6),p=t(9),E=t.n(p),d=(t(18),function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.occupation,t=this.props.data.description,l=this.props.data.address.city,r=this.props.data.social.map((function(e){return n.a.createElement("li",{key:e.name},n.a.createElement("a",{href:e.url},n.a.createElement("i",{className:e.className})))}));return n.a.createElement("header",{id:"home"},n.a.createElement("nav",{id:"nav-wrap"},n.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),n.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),n.a.createElement("ul",{id:"nav",className:"nav"},n.a.createElement("li",{className:"current"},n.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")))),n.a.createElement("div",{className:"row banner"},n.a.createElement("div",{className:"banner-text"},n.a.createElement("h1",{className:"responsive-headline"},"I'm ",e,"."),n.a.createElement("h3",null,"I'm a ",l," based ",n.a.createElement("span",null,a),". ",t,"."),n.a.createElement("hr",null),n.a.createElement("ul",{className:"social"},r))),n.a.createElement("p",{className:"scrolldown"},n.a.createElement("a",{className:"smoothscroll",href:"#about"},n.a.createElement("i",{className:"icon-down-circle"}))))}}]),t}(l.Component)),h=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return n.a.createElement("li",{key:e.name},n.a.createElement("a",{href:e.url},n.a.createElement("i",{className:e.className})))}));return n.a.createElement("footer",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"twelve columns"},n.a.createElement("ul",{className:"social-links"},e),n.a.createElement("ul",{className:"copyright"},n.a.createElement("li",null,"\xa9 Copyright 2017 Tim Baker"),n.a.createElement("li",null,"Design by ",n.a.createElement("a",{title:"Styleshout",href:"http://www.styleshout.com/"},"Styleshout")))),n.a.createElement("div",{id:"go-top"},n.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},n.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(l.Component),b=function(e){Object(o.a)(l,e);var a=Object(i.a)(l);function l(){return Object(s.a)(this,l),a.apply(this,arguments)}return Object(m.a)(l,[{key:"render",value:function(){if(this.props.data){var e=this.props.data.name,a=this.props.data.bio,l=this.props.data.address.city,r=this.props.data.address.state,c=this.props.data.address.zip,s=this.props.data.email;this.props.data.resumedownload}return n.a.createElement("section",{id:"about"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"three columns"},n.a.createElement("img",{className:"profile-pic",src:t(19),alt:"Nicklas Dupont Profile Pic"})),n.a.createElement("div",{className:"nine columns main-col"},n.a.createElement("h2",null,"About Me"),n.a.createElement("p",null,a),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"columns contact-details"},n.a.createElement("h2",null,"Contact Details"),n.a.createElement("p",{className:"address"},n.a.createElement("span",null,e),n.a.createElement("br",null),n.a.createElement("span",null,l," ",r,", ",c),n.a.createElement("br",null),n.a.createElement("span",null,s)))))))}}]),l}(l.Component),v=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.topicmessage,a=this.props.data.education.map((function(e){return n.a.createElement("div",{key:e.school},n.a.createElement("h3",null,e.school),n.a.createElement("p",{className:"info"},e.degree," ",n.a.createElement("span",null,"\u2022"),n.a.createElement("em",{className:"date"},e.graduated)," ",n.a.createElement("span",null,"\u2022"),e.ECTSPoint),n.a.createElement("p",null,e.description))})),t=this.props.data.work.map((function(e){return n.a.createElement("div",{key:e.company},n.a.createElement("h4",null,e.company),n.a.createElement("p",{className:"info"},e.title,n.a.createElement("span",null,"\u2022")," ",n.a.createElement("em",{className:"date"},e.years)),n.a.createElement("p",null,e.description))})),l=this.props.data.Semesters.map((function(e){e.name.toLowerCase()})),r=this.props.data.Topics.map((function(e){var a="bar-expand "+e.name.toLowerCase();return n.a.createElement("div",{key:e.name},n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h3",null,e.name),n.a.createElement("p",{className:"info"},"Skill level",n.a.createElement("em",{className:"date"},n.a.createElement("b",null," "))),n.a.createElement("li",{key:e.name},n.a.createElement("span",{style:{width:e.progress1,opacity:1},className:a,label:"".concat(e.ECTS," ECTS")}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("span",null,e.sub1," ",n.a.createElement("br",null),e.sub2," ",n.a.createElement("br",null),e.sub3," ",n.a.createElement("br",null),e.sub4," ",n.a.createElement("br",null),e.sub5," ",n.a.createElement("br",null),e.sub6," ",n.a.createElement("br",null),e.sub7," ",n.a.createElement("br",null),e.sub8," ",n.a.createElement("br",null),n.a.createElement("br",null)))," ",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null))}));return n.a.createElement("section",{id:"resume"},n.a.createElement("div",{className:"row education"},n.a.createElement("div",{className:"three columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"Education"))),n.a.createElement("div",{className:"nine columns main-col"},n.a.createElement("div",{className:"row item"},n.a.createElement("div",{className:"twelve columns"},a)))),n.a.createElement("div",{className:"row work"},n.a.createElement("div",{className:"three columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"Work"))),n.a.createElement("div",{className:"nine columns main-col"},t)),n.a.createElement("div",{className:"row topics"},n.a.createElement("div",{className:"three columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"Topics"))),n.a.createElement("div",{className:"nine columns main-col"},n.a.createElement("div",{className:"bars"},n.a.createElement("p",null,e),n.a.createElement("ul",{className:"topics"},r),n.a.createElement("ul",{className:"skills"},l)))))}}]),t}(l.Component),f=(l.Component,function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var a="images/portfolio/"+e.image;return n.a.createElement("div",{key:e.title,className:"columns portfolio-item"},n.a.createElement("div",{className:"item-wrap"},n.a.createElement("a",{href:e.url,title:e.title},n.a.createElement("img",{alt:e.title,src:a}),n.a.createElement("div",{className:"overlay"},n.a.createElement("div",{className:"portfolio-item-meta"},n.a.createElement("h5",null,e.title),n.a.createElement("p",null,e.category))),n.a.createElement("div",{className:"link-icon"},n.a.createElement("i",{className:"fa fa-link"})))))}));return n.a.createElement("section",{id:"portfolio"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"twelve columns collapsed"},n.a.createElement("h1",null,"Check Out Some of My Works."),n.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e))))}}]),t}(l.Component)),N=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var l;return Object(s.a)(this,t),(l=a.call(this,e)).state={foo:"bar",resumeData:{}},u.a.initialize("UA-110570651-1"),u.a.pageview(window.location.pathname),l}return Object(m.a)(t,[{key:"getResumeData",value:function(){E.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(d,{data:this.state.resumeData.main}),n.a.createElement(b,{data:this.state.resumeData.main}),n.a.createElement(v,{data:this.state.resumeData.resume}),n.a.createElement(f,{data:this.state.resumeData.portfolio}),n.a.createElement(h,{data:this.state.resumeData.main}))}}]),t}(l.Component);c.a.render(n.a.createElement(N,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.29876f10.chunk.js.map