(this["webpackJsonpmegan-rantz-project-5"]=this["webpackJsonpmegan-rantz-project-5"]||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/tsunDoka.c051595d.png"},25:function(e,t,a){e.exports=a.p+"static/media/tsunDoka2.27115788.png"},26:function(e,t,a){e.exports=a(52)},31:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(23),s=a.n(r),i=(a(31),a(1)),c=a(2),l=a(4),u=a(3),d=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("nav",null,o.a.createElement("h1",null,"Tsundoku."),o.a.createElement("button",{id:"scrollHere",className:"is".concat(this.props.activeStatus),onClick:this.props.activeChange},o.a.createElement("span",null,this.props.stackSize),o.a.createElement("p",null,"in your stack"),o.a.createElement("h5",null,"Your Stack.")))}}]),a}(n.Component),m=a(24),p=a.n(m),h=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("section",null,o.a.createElement("div",{className:"headerContent"},o.a.createElement("h2",null,"Manage your reading stack all in one place"),o.a.createElement("button",{onClick:this.props.howTo},"Learn How.")),o.a.createElement("div",{className:"headerImg"},o.a.createElement("img",{src:p.a,alt:"Line Drawing of a Japanese painting of a woman holding a book"})))}}]),a}(n.Component),k=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"howTo"},o.a.createElement("h4",null,"How To Get Started with Tsundoku"),o.a.createElement("p",null,"Tsundoku means 'reading pile', and refers to the stack of books in your home that you have yet to read. With Tsundoku you can keep track of your reading stack easily."),o.a.createElement("ul",null,o.a.createElement("li",null,"Press Stack on a book you want to read below to add it to your reading stack"),o.a.createElement("li",null,"Bring up other books lists in The Lists Section"),o.a.createElement("li",null,"View books in your reading stack by pressing the number of books in your stack button"),o.a.createElement("li",null,"Mark off books as read and view a full list of books you've read")),o.a.createElement("button",{onClick:this.props.howTo},"Back."))}}]),a}(n.Component),b=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("li",{tabIndex:"0",id:this.props.isbn,className:"bestSellerBook"},o.a.createElement("div",null,o.a.createElement("img",{src:this.props.bookImg,alt:"".concat(this.props.title," cover art")}),o.a.createElement("button",{className:"stackButton",onClick:this.props.addToRead},"Stack.")),o.a.createElement("section",null,o.a.createElement("p",null,this.props.descriptions),o.a.createElement("a",{href:this.props.productURL})),o.a.createElement("h6",null,this.props.title),o.a.createElement("span",null,"by ".concat(this.props.author)),o.a.createElement("button",{className:"getDetails",onClick:this.props.getDetails},"Details"))}}]),a}(n.Component),f=a(25),E=a.n(f),v=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"bookDetailParent"},o.a.createElement("div",{className:"bookDetailContents bestSellerBook"},o.a.createElement("div",null,o.a.createElement("img",{src:this.props.url,alt:"".concat(this.props.title," cover art")}),o.a.createElement("button",{className:"stackButton",onClick:this.props.addToRead},"Stack.")),o.a.createElement("div",null,o.a.createElement("h4",null,this.props.title),o.a.createElement("span",null,this.props.author),o.a.createElement("p",null,this.props.description),o.a.createElement("button",{onClick:this.props.backToBestSeller},"Back."))),o.a.createElement("img",{className:"tSun",src:E.a,alt:"Line Drawing of a Japanese painting of a woman holding a book"}))}}]),a}(n.Component),g=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{id:this.props.dbKey,className:"yourStackBook"},o.a.createElement("div",{className:"cover"},o.a.createElement("img",{src:this.props.bookImg,alt:"".concat(this.props.title," cover art")})),o.a.createElement("div",{className:"details"},o.a.createElement("h6",null,this.props.title),o.a.createElement("span",null,"by ".concat(this.props.author)),o.a.createElement("button",{onClick:this.props.readIt},"Read"),o.a.createElement("button",{onClick:this.props.unstack},"Remove")))}}]),a}(n.Component),y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{id:this.props.dbKey,className:"yourStackBook"},o.a.createElement("div",{className:"cover"},o.a.createElement("img",{src:this.props.bookImg,alt:"".concat(this.props.title," cover art")})),o.a.createElement("div",{className:"details"},o.a.createElement("h6",null,this.props.title),o.a.createElement("span",null,"by ".concat(this.props.author)),o.a.createElement("span",null,"Finished")))}}]),a}(n.Component),S=a(8),j=a.n(S),B=a(9),C=a.n(B);a(49);C.a.initializeApp({apiKey:"AIzaSyARE04_FaCOjqkdOxfLefMbbgIAG2Jg-dI",authDomain:"tsundoku-stack.firebaseapp.com",databaseURL:"https://tsundoku-stack.firebaseio.com",projectId:"tsundoku-stack",storageBucket:"tsundoku-stack.appspot.com",messagingSenderId:"308210051228",appId:"1:308210051228:web:738aa55ef2dd85b5f56559"});var T=C.a,O=(a(51),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).secondCall=function(t){j()({url:"https://api.nytimes.com/svc/books/v3/lists/".concat(t,".json?api-key=h1My3UlUBaurlTOmJjJ7RJPQJSDlH0lI"),method:"GET",responseType:"json"}).then((function(t){e.setState({subBooksList:t.data.results.books})}))},e.addToRead=function(t,a,n,o){var r={isbn:t,title:a,author:n,url:o},s=T.database().ref("toRead");e.state.toRead.find((function(e){return e.data.isbn===t}))||s.push(r)},e.unstack=function(e){T.database().ref("toRead").child(e).remove()},e.getDetails=function(t,a,n,o,r){var s=r;e.setState({getDetail:s}),e.setState({detailedBook:{title:t,author:a,url:n,description:o}})},e.backToBestSeller=function(){e.setState({getDetail:""})},e.readIt=function(t){var a=e.state.toRead,n=e.state.finishedBooks,o=T.database().ref("toRead"),r=T.database().ref("finishedBooks"),s=a.find((function(e){return e.data.isbn===t}));r.push(s.data),o.child(s.key).remove(),e.setState({finishedBooks:n})},e.activeChange=function(){var t=e.state.active;e.setState({active:!t})},e.howTo=function(){var t=e.state.how;e.setState({how:!t})},e.state={bestSellers:[],detailedBook:{},getDetail:"",subBooksList:[],toRead:[],finishedBooks:[],active:!1,how:!1},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;j()({url:"https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=h1My3UlUBaurlTOmJjJ7RJPQJSDlH0lI",method:"GET",responseType:"json"}).then((function(t){e.setState({bestSellers:t.data.results.books})})),T.database().ref("finishedBooks").on("value",(function(t){var a=t.val();console.log(a);var n=[];for(var o in a)n.push({key:o,data:a[o]});e.setState({finishedBooks:n})})),T.database().ref("toRead").on("value",(function(t){var a=t.val(),n=[];for(var o in a)n.push({key:o,data:a[o]});e.setState({toRead:n})})),this.secondCall("hardcover-nonfiction")}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"app"},o.a.createElement(d,{activeStatus:this.state.active,stackSize:"".concat(this.state.toRead.length,"."),activeChange:function(){return e.activeChange()}}),o.a.createElement("header",null,this.state.how?o.a.createElement(k,{howTo:function(){return e.howTo()}}):o.a.createElement(h,{howTo:function(){return e.howTo()}})),o.a.createElement("aside",{className:"is".concat(this.state.active)},o.a.createElement("ul",{className:"yourStackParent"},this.state.toRead.map((function(t){return o.a.createElement(g,{key:t.key,bookImg:t.data.url,title:t.data.title,author:t.data.author,unstack:function(){return e.unstack(t.key)},readIt:function(){return e.readIt(t.data.isbn)}})}))),o.a.createElement("ul",{className:"yourStackParent"},this.state.finishedBooks.map((function(e){return o.a.createElement(y,{key:e.key,bookImg:e.data.url,title:e.data.title,author:e.data.author})})))),o.a.createElement("main",{className:"is".concat(this.state.active)},o.a.createElement("h3",null,"Trending."),o.a.createElement("ul",{className:"bestSellers"},"bestseller"===this.state.getDetail?o.a.createElement(v,{url:this.state.detailedBook.url,title:this.state.detailedBook.title,author:this.state.detailedBook.author,description:this.state.detailedBook.description,backToBestSeller:function(){return e.backToBestSeller()}}):this.state.bestSellers.map((function(t){return o.a.createElement(b,{key:t.primary_isbn13,bookImg:t.book_image,title:t.title,author:t.author,description:t.description,productURL:t.amazon_product_url,addToRead:function(){return e.addToRead(t.primary_isbn13,t.title,t.author,t.book_image)},getDetails:function(){return e.getDetails(t.title,t.author,t.book_image,t.description,"bestseller")}})}))),o.a.createElement("h3",null,"The Lists."),o.a.createElement("div",{className:"subBookListNames"},o.a.createElement("button",{onClick:function(){return e.secondCall("hardcover-nonfiction")}},"Non-Fiction"),o.a.createElement("button",{onClick:function(){return e.secondCall("young-adult")}},"Young Adult"),o.a.createElement("button",{onClick:function(){return e.secondCall("hardcover-graphic-books")}},"Graphic Novels"),o.a.createElement("button",{onClick:function(){return e.secondCall("food-and-fitness")}},"Food and Fitness"),o.a.createElement("button",{onClick:function(){return e.secondCall("travel")}},"Travel"),o.a.createElement("button",{onClick:function(){return e.secondCall("education")}},"Education"),o.a.createElement("button",{onClick:function(){return e.secondCall("science")}},"Science")),o.a.createElement("ul",{className:"bestSellers"},"theLists"===this.state.getDetail?o.a.createElement(v,{url:this.state.detailedBook.url,title:this.state.detailedBook.title,author:this.state.detailedBook.author,description:this.state.detailedBook.description,backToBestSeller:function(){return e.backToBestSeller()}}):this.state.subBooksList.map((function(t){return o.a.createElement(b,{key:t.primary_isbn13,bookImg:t.book_image,title:t.title,author:t.author,description:t.description,productURL:t.amazon_product_url,addToRead:function(){return e.addToRead(t.primary_isbn13,t.title,t.author,t.book_image)},getDetails:function(){return e.getDetails(t.title,t.author,t.book_image,t.description,"theLists")}})}))),o.a.createElement("p",{className:"final"},"Copyright 2020 Megan Rantz")),o.a.createElement("button",{className:"pageUp"},o.a.createElement("a",{href:"scrollHere"},"Top.")))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.ff952b84.chunk.js.map