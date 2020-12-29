(this["webpackJsonphighlighter-ui"]=this["webpackJsonphighlighter-ui"]||[]).push([[0],{41:function(e,t,c){},65:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var i=c(1),n=c(0),a=c.n(n),l=c(10),r=c.n(l),s=(c(41),c(12)),o=c.n(s),j=c(21),h=c(16),d=c(31),u=c.n(d),b=c(11);c(64);var p=function(){var e=Object(n.useState)(!1),t=Object(h.a)(e,2),c=t[0],a=t[1],l=function(){var e=Object(j.a)(o.a.mark((function e(t,c,i){var n,l,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("https://highlighter-api.herokuapp.com/",{text:t,lang:c,quality:i},{responseType:"blob"});case 2:n=e.sent,l=window.URL.createObjectURL(new Blob([n.data])),(r=document.createElement("a")).href=l,r.setAttribute("download","generated.png"),document.body.appendChild(r),a(!1),r.click();case 10:case"end":return e.stop()}}),e)})));return function(t,c,i){return e.apply(this,arguments)}}();return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(b.c,{initialValues:{code:"const foo = (): string => 'hello';",lang:"typescript",qualityArg:"medium"},onSubmit:function(){var e=Object(j.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(!0),l(t.code,t.lang,t.qualityArg);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),validate:function(e){return function(e){return e.code?{}:{code:"Code cannot be blank."}}(e)},children:Object(i.jsxs)(b.b,{children:[Object(i.jsxs)("div",{className:"form-group row",children:[Object(i.jsx)("label",{className:"col-sm-2 col-form-label",htmlFor:"code",children:"Code:"}),Object(i.jsx)("div",{className:"col-sm-10",children:Object(i.jsx)(b.a,{className:"form-control",as:"textarea",name:"code",type:"text",rows:20,spellcheck:"false"})})]}),Object(i.jsxs)("div",{className:"form-group row",children:[Object(i.jsx)("label",{className:"col-sm-2 col-form-label",htmlFor:"lang",children:"Language:"}),Object(i.jsx)("div",{className:"col-sm-10",children:Object(i.jsxs)(b.a,{className:"form-control",as:"select",name:"lang",children:[Object(i.jsx)("option",{value:"typescript",children:"Typescript"}),Object(i.jsx)("option",{value:"javascript",children:"Javascript"}),Object(i.jsx)("option",{value:"c",children:"C"}),Object(i.jsx)("option",{value:"cpp",children:"C++"}),Object(i.jsx)("option",{value:"csharp",children:"C#"}),Object(i.jsx)("option",{value:"python",children:"Python"}),Object(i.jsx)("option",{value:"java",children:"Java"}),Object(i.jsx)("option",{value:"go",children:"Go"}),Object(i.jsx)("option",{value:"julia",children:"Julia"}),Object(i.jsx)("option",{value:"kotlin",children:"Kotlin"}),Object(i.jsx)("option",{value:"haskell",children:"Haskell"}),Object(i.jsx)("option",{value:"lisp",children:"Lisp"}),Object(i.jsx)("option",{value:"lua",children:"Lua"}),Object(i.jsx)("option",{value:"makefile",children:"Makefile"}),Object(i.jsx)("option",{value:"markdown",children:"Markdown"}),Object(i.jsx)("option",{value:"matlab",children:"MATLAB"}),Object(i.jsx)("option",{value:"mongodb",children:"MongoDB"}),Object(i.jsx)("option",{value:"objectivec",children:"Objective-C"}),Object(i.jsx)("option",{value:"pascal",children:"Pascal"}),Object(i.jsx)("option",{value:"perl",children:"Perl"}),Object(i.jsx)("option",{value:"php",children:"PHP"}),Object(i.jsx)("option",{value:"r",children:"R"}),Object(i.jsx)("option",{value:"racket",children:"Racket"}),Object(i.jsx)("option",{value:"ruby",children:"Ruby"}),Object(i.jsx)("option",{value:"rust",children:"Rust"}),Object(i.jsx)("option",{value:"scala",children:"Scala"}),Object(i.jsx)("option",{value:"scheme",children:"Scheme"}),Object(i.jsx)("option",{value:"swift",children:"Swift"}),Object(i.jsx)("option",{value:"visual-basic",children:"Visual Basic"}),Object(i.jsx)("option",{value:"markup",children:"Markup"}),Object(i.jsx)("option",{value:"json",children:"JSON"}),Object(i.jsx)("option",{value:"css",children:"CSS"}),Object(i.jsx)("option",{value:"latex",children:"LaTeX"}),Object(i.jsx)("option",{value:"graphql",children:"GraphQL"}),Object(i.jsx)("option",{value:"docker",children:"Docker"})]})})]}),Object(i.jsxs)("div",{className:"form-group row",children:[Object(i.jsx)("label",{className:"col-sm-2 col-form-label",htmlFor:"quality",children:"Quality:"}),Object(i.jsx)("div",{className:"col-sm-10",children:Object(i.jsxs)(b.a,{className:"form-control",as:"select",name:"quality",children:[Object(i.jsx)("option",{value:"medium",children:"Medium"}),Object(i.jsx)("option",{value:"high",children:"High"}),Object(i.jsx)("option",{value:"extreme",children:"Extreme"})]})})]}),Object(i.jsx)("div",{className:"form-group",children:Object(i.jsx)("button",{type:"submit",className:"btn btn-primary",disabled:c,children:c?"Please wait...":"Submit"})})]})})})},x=(c(65),c(72)),O=c(71),m="https://highlighter-api.herokuapp.com/",v="https://github.com/tonylizj/highlighter",g="https://github.com/tonylizj/highlighter-ui",f=function(){var e=Object(n.useState)(!0),t=Object(h.a)(e,2),c=t[0],a=t[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(x.a,{show:c,variant:"primary",children:[Object(i.jsx)(x.a.Heading,{children:"About highlighter"}),Object(i.jsx)("p",{children:"highlighter is an API that provides syntax highlighting of code for numerous languages. It also includes a Discord bot which can highlight your code in chat, and (in my opinion) provides much better highlighting than the built in options in Discord."}),Object(i.jsxs)("p",{children:["This page presents a simple UI to send POST requests to the highlighter API at"," ",Object(i.jsx)(x.a.Link,{href:m,children:m}),"."]}),Object(i.jsxs)("p",{children:["Source code can be found at"," ",Object(i.jsx)(x.a.Link,{href:v,children:v})," ","and"," ",Object(i.jsx)(x.a.Link,{href:g,children:g}),"."]}),Object(i.jsx)("hr",{}),Object(i.jsx)("div",{className:"d-flex justify-content-end",children:Object(i.jsx)(O.a,{onClick:function(){return a(!1)},variant:"outline-primary",children:"Close"})})]}),c?null:Object(i.jsx)(O.a,{variant:"primary",onClick:function(){return a(!0)},children:"About highlighter"})]})};var y=function(){return Object(i.jsx)("div",{id:"app",className:"container-fluid",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsxs)("div",{className:"card text-center bg-light",children:[Object(i.jsx)("div",{className:"card-header",children:Object(i.jsx)("h4",{children:"Make a request to the highlighter API"})}),Object(i.jsx)("div",{className:"card-body",children:Object(i.jsx)(p,{})})]}),Object(i.jsx)("div",{className:"card-footer bg-dark",children:Object(i.jsx)(f,{})})]})})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,73)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,a=t.getLCP,l=t.getTTFB;c(e),i(e),n(e),a(e),l(e)}))};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(y,{})}),document.getElementById("root")),k()}},[[68,1,2]]]);