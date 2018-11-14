(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){e.exports=t(36)},22:function(e,a,t){},26:function(e,a,t){},30:function(e,a,t){},32:function(e,a,t){},34:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),i=t(4),c=t.n(i),s=(t(22),t(24),t(11)),o=t(12),l=t(15),m=t(13),d=t(16),h=(t(26),function(e){return r.a.createElement("div",{className:"card",value:e.id,onClick:function(){return e.handlePicked(e.id)}},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{alt:e.name,src:e.image})))}),g=t(3),p=(t(30),function(e){return r.a.createElement("div",{className:"wrapper"},e.children)}),u=(t(32),function(e){return r.a.createElement("ul",{className:"nav background text-light d-flex bd-highlight"},r.a.createElement("li",{className:"mr-auto p-2 bd-highlight nav-item title"},"Breaking Bad Memory Game"),r.a.createElement("li",{className:"nav-item score p-2 bd-highlight"},"Your Score: ",e.score),r.a.createElement("li",{className:"nav-item high-score p-2 bd-highlight"},"High Score: ",e.highScore))}),b=function(e){return r.a.createElement("div",{className:"row".concat(e.fluid?"-fluid":"")},e.children)},k=function(e){return r.a.createElement("div",{className:"col"},e.children)},w={textAlign:"center",margin:20},y={padding:20,marginBottom:5},f=function(e){return r.a.createElement("div",null,r.a.createElement(g.b,{style:y},r.a.createElement("h2",{style:w,className:"display-6"},"While this is a simple memory game, you don't want to pick the same character twice. Tread lightly..."),r.a.createElement("p",{className:"lead text-center"},"The characters will shuffle after every choice. Get 10 points and Heisenberg will spare you.")))},E=t(8),j=(t(34),function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}return e}),v=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={choices:E,score:0,highScore:0,picked:[],modal:!1},t.toggle=function(){t.setState({modal:!t.state.modal})},t.handlePicked=function(e){-1===t.state.picked.indexOf(e)?(t.handleIncrement(),t.setState({picked:t.state.picked.concat(e)}),console.log(t.state)):(console.log(t.state),t.handleReset())},t.handleReset=function(){t.setState({score:0,highScore:t.state.highScore,picked:[]}),t.toggle(),t.handleRandomize()},t.handleRandomize=function(){var e=j(E);t.setState({choices:e})},t.handleIncrement=function(){var e=t.state.score+1;t.setState({score:e}),e>=t.state.highScore&&t.setState({highScore:e}),10===e&&t.toggle(),t.handleRandomize()},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(p,null,r.a.createElement(u,{score:this.state.score,highScore:this.state.highScore}),r.a.createElement(f,null),r.a.createElement("div",{className:"content"},r.a.createElement(b,null,this.state.choices.map(function(a){return r.a.createElement(k,{key:a.id},r.a.createElement(h,{key:a.id,id:a.id,image:a.image,handlePicked:e.handlePicked,handleIncrement:e.handleIncrement,handleReset:e.handleReset,handleRandomize:e.handleRandomize}))}))),r.a.createElement("div",null,r.a.createElement(g.c,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},r.a.createElement(g.f,{className:"modalHeader",toggle:this.toggle},10===this.state.score?"CONGRATULATIONS!":"NOT THIS TIME."),r.a.createElement(g.d,{className:"modalBody"},10===this.state.score?r.a.createElement("p",null,"You won. You are the danger"):r.a.createElement("p",null,"Better Call Saul and try again.")),r.a.createElement(g.e,null,r.a.createElement(g.a,{color:"secondary",onClick:this.toggle},"Close"),r.a.createElement(g.a,{color:"success",onClick:this.handleReset},"Play Again")))))}}]),a}(n.Component);c.a.render(r.a.createElement(v,null),document.getElementById("root"))},8:function(e){e.exports=[{id:1,name:"Jesse Pinkman",image:"http://www.haydnsymons.com/images/projects/breaking-bad-portraits/breaking-bad-portraits-1.jpg"},{id:2,name:"Mike Ehrmantraut",image:"http://www.haydnsymons.com/images/projects/breaking-bad-portraits/breaking-bad-portraits-1463491268.jpg"},{id:3,name:"Hector Salamanca",image:"http://www.haydnsymons.com/images/projects/breaking-bad-portraits/breaking-bad-portraits-1463663890.jpg"},{id:4,name:"Walter White",image:"http://www.haydnsymons.com/images/projects/breaking-bad-portraits/breaking-bad-portraits-2.jpg"},{id:5,name:"Saul Goodman",image:"http://www.haydnsymons.com/images/projects/breaking-bad-portraits/breaking-bad-portraits-3.jpg"},{id:6,name:"Marie Schrader",image:"http://www.haydnsymons.com/images/projects/breaking-bad-portraits/breaking-bad-portraits-4.jpg"},{id:7,name:"Skylar White",image:"http://www.haydnsymons.com/images/projects/breaking-bad-portraits/breaking-bad-portraits-5.jpg"},{id:8,name:"Gustavo Fring",image:"http://www.haydnsymons.com/images/projects/breaking-bad-portraits/breaking-bad-portraits-6.jpg"},{id:9,name:"Hank Schrader",image:"http://www.haydnsymons.com/images/projects/breaking-bad-portraits/breaking-bad-portraits.jpg"},{id:10,name:"Walter White Jr.",image:"http://www.haydnsymons.com/images/projects/breaking-bad-portraits/breaking_bad_portraits_7.jpg"}]}},[[17,2,1]]]);
//# sourceMappingURL=main.9442140d.chunk.js.map