"use strict";angular.module("profilePageTwoApp",["ngAnimate","ngCookies","ngResource","ngSanitize","ngTouch","akreitals.panel-snap"]),angular.module("profilePageTwoApp").controller("MainCtrl",[function(){var a=this;a.pageNumber="/01",a.onEnterSectionOne=function(){console.log("onEnterSectionOne"),a.pageNumber="/01"},a.onEnterSectionTwo=function(){console.log("onEnterSectionTwo"),a.pageNumber="/02"},a.onEnterSectionThree=function(){console.log("onEnterSectionThree"),a.pageNumber="/03"},a.onEnterSectionFour=function(){console.log("onEnterSectionFour"),a.pageNumber="/04"},a.onEnterSectionFive=function(){console.log("onEnterSectionFive"),a.pageNumber="/05"},a.onEnterSectionSix=function(){console.log("onEnterSectionSix"),a.pageNumber="/06"},a.onLoad=function(){console.log("inside onLoad() from MainCtrl")},a.onLoad()}]),angular.module("profilePageTwoApp").controller("BlockTwoCtrl",[function(){var a=this;a.enterFn=function(){console.log("inside enterFn()")},a.onLoad=function(){console.log("inside onLoad() from BlockTwoCtrl")},a.onLoad()}]),angular.module("profilePageTwoApp").directive("pageBlock",["$window",function(a){return{restrict:"E",link:function(b,c,d){var e=c[0],f=function(){e.style.display="block",e.style.border="1px solid red",e.style.height=g().height+"px",e.style.width=g().width+"px"},g=function(){var b=a.innerHeight,c=a.innerWidth;return{height:b,width:c}};angular.element(a).bind("resize",function(){f()});var h=function(){f()};h()}}}]),angular.module("profilePageTwoApp").directive("heightWidthSetter",["$window",function(a){return{restrict:"A",link:function(b,c,d){var e=c[0],f=0,g=0,h=function(){e.style.display="block",e.style.height=i().height+"px",e.style.width=i().width+"px"},i=function(){return f=a.innerHeight,g=a.innerWidth,{height:f,width:g}};angular.element(a).bind("resize",function(){h()});var j=function(){h()};j()}}}]),angular.module("profilePageTwoApp").directive("navigationSpacer",["$window",function(a){return{restrict:"E",link:function(b,c,d){var e=c[0],f=0,g=0,h=220,i=function(){e.style.display="block",g=parseInt((j().height-h)/2),e.style.height=g+"px",e.style.width="100%"},j=function(){return f=a.innerHeight,{height:f}};angular.element(a).bind("resize",function(){i()});var k=function(){i()};k()}}}]),angular.module("profilePageTwoApp").directive("heightSetter",["$window",function(a){return{restrict:"A",link:function(b,c,d){var e=c[0],f=0,g=0,h=d.offset,i=d.minHeight,j=function(){e.style.display="block",g=k().height-h,g>=i?e.style.height=g+"px":e.style.height=i+"px"},k=function(){return f=a.innerHeight,{height:f}};angular.element(a).bind("resize",function(){j()});var l=function(){j()};l()}}}]),angular.module("profilePageTwoApp").run(["$templateCache",function(a){a.put("views/landing.html",'<div class="landing-outer-div" height-width-setter> <div class="left-block"></div> <div class="right-block"> <div class="sub-block" height-setter offset="30" min-height="370"> <h1>ILJA</h1> <h1>GOUSHCHA</h1> <div class="my-title">Full Stack Developer</div> </div> <div class="spacer-block"></div> </div> <img src="../images/ilja-headshot.bf444ed8.png" alt="headshot"> </div>'),a.put("views/main.html",'<div class="navigation-div" height-width-setter> <ak-panel-group-menu for="myPanelGroup"></ak-panel-group-menu> <navigation-spacer></navigation-spacer> <ak-panel-group-menu-b for="myPanelGroup"></ak-panel-group-menu-b> <div class="page-number"><div><ak-panel-group-menu-c for="myPanelGroup"></ak-panel-group-menu-c></div></div> </div> <ak-panel-group name="myPanelGroup" full-window="true" keyboard="true" height-width-setter> <ak-panel name="ILJA GOUSHCHA" on-enter="mainCtrl.onEnterSectionOne()"> <div ng-include="\'views/landing.html\'"></div> </ak-panel> <ak-panel name="SKILLS" on-enter="mainCtrl.onEnterSectionTwo()"> <div>Skills</div> </ak-panel> <ak-panel name="EXPERIECE" on-enter="mainCtrl.onEnterSectionThree()">Block 3</ak-panel> <ak-panel name="PROJECTS" on-enter="mainCtrl.onEnterSectionFour()">Block 4</ak-panel> <ak-panel name="ABOUT" on-enter="mainCtrl.onEnterSectionFive()">Block 5</ak-panel> <ak-panel name="CONTACT" on-enter="mainCtrl.onEnterSectionSix()">Block 6</ak-panel> </ak-panel-group>')}]);