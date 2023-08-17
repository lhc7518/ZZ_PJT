(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[955],{3955:(t,e,i)=>{"use strict";i.r(e),i.d(e,{Switch:()=>d});var s=i(2981),n=i(1656),l=i(2085),r=i(9304),h=i(1960),o=i(3082),a=i(6615),d=function(t,e,i){a.s.call(this,t,e,i)};s.x.extend(d.prototype,a.s.prototype),d.prototype.defaultOptions={pluginType:"uiplugin.Switch",pluginName:"Switch",userEvents:["onSelectedIndexChange"],alwaysDraw:!0,accessibility:!1,caseStyle:"",caseClass:"",slide:!1,animationDuration:.5,motionDisplay:!0,detectionRange:10,rotation:!0,useSelect:!1,touchMove:!0,hidePosition:"center",tabIndex:""},d.prototype.initialize=function(t){try{this.selectedIndex=0,this.caseArr=[],this.slide={},this.centerInitLeft,this.isSliding=!1,this.startEventLayer={},this.lastEventLayer={},this.leftPosition,this.topPosition,this.isTouchStart=!1,1==this.options.slide&&(this.options.alwaysDraw=!0);var e=WebSquare.Elem.api.getElementsByTagName(t,"case",n.v._XML_NAMESPACE.XFORMS);if(e)for(var i=0;i<e.length;i++){var s=e[i],r=s.getAttribute("selected"),h=this.options._scope_obj_uuid,o=null==h?null:WebSquare.idCache[h],a=WebSquare.controlFactory.createByJSON(null,{pluginName:"group"},s._element,o,h);a.options.style=a.options.style+";"+this.options.caseStyle,a.options.className="w2switch_case "+a.options.className+" "+this.options.caseClass,"true"==r&&(this.selectedIndex=i),this.caseArr.push({orgID:null==a.org_id?a.id:a.org_id,caseID:a.id,caseComp:a}),this.addControl(a)}!0===this.options.accessibility&&(this.options.useKeyboardNavagation=!1,this.options.tabIndex=""),!0===this.options.useKeyboardNavagation&&(this.options.tabIndex="0")}catch(t){l.w.printStackTrace(t,null,this)}},d.prototype.toHTML=function(){try{var t=[],e=""==this.options.style?"":"style='"+this.options.style+"'",i=""==this.options.tabIndex?"":"tabIndex='"+this.options.tabIndex+"'";if(t.push("<div id='"+this.id+"' "+e+" class='w2Switch "+this.options.className+"' "+i+">"),!0===this.options.accessibility&&t.push("<div id='"+this.id+"_caseMain' class='w2switch_caseMain'>"),1==this.options.alwaysDraw)for(var s=this.getChildren(),n=0;n<s.length;n++)t.push(s[n].toHTML());!0===this.options.accessibility&&t.push("</div>");var h="",o="";if(!0===this.options.accessibility){var a=r.d.getMessage("Switch_btnPrev")||"이전",d=r.d.getMessage("Switch_btnNext")||"다음";h+="<button id='"+this.id+"_btnPrev' class='w2switch_btnPrev' aria-label='"+a+"' aria-controls='"+this.id+"_switchControlMain'></button>",h+="<button id='"+this.id+"_btnNext' class='w2switch_btnNext' aria-label='"+d+"' aria-controls='"+this.id+"_switchControlMain'></button>",t.push(h),o+="<div id='"+this.id+"_paginationMain' class='w2switch_paginationMain'>";for(n=1;n<s.length+1;n++){var c=r.d.getMessage("Switch_pagination_ariaLabel",s.length,n)||s.length+"개중에 "+n+"번째 슬라이드로 이동";o+="<button id='"+this.id+"_pagination"+n+"' class='w2switch_pagination' aria-label='"+c+"' aria-controls='"+this.id+"_switchPagination'></button>"}o+="</div>",t.push(o)}return t.push("</div>"),t.join("")}catch(t){l.w.printStackTrace(t,null,this)}},d.prototype.setAction=function(){try{this.isMobile=o.D.isMobile(),this.isWebKit=/webkit/.test(navigator.userAgent.toLowerCase()),1==this.options.slide&&1==this.options.touchMove&&(this.isMobile?(this.event.addListener(this.render,"ontouchstart",this.event.bindAsEventListener(this,this.handleTouchStart)),this.event.addListener(this.render,"ontouchmove",this.event.bindAsEventListener(this,this.handleTouchMove)),this.event.addListener(this.render,"ontouchend",this.event.bindAsEventListener(this,this.handleTouchEnd))):(this.event.addListener(this.render,"onmousedown",this.event.bindAsEventListener(this,this.handleTouchStart)),this.event.addListener(document.documentElement,"onmousemove",this.event.bindAsEventListener(this,this.handleTouchMove)),this.event.addListener(document.documentElement,"onmouseup",this.event.bindAsEventListener(this,this.handleTouchEnd)),
this.event.addListener(this.render,"ondrag",this.event.bindAsEventListener(this,(function(t){this.isSliding=!1}))),this.event.addListener(this.render,"ondragend",this.event.bindAsEventListener(this,this.handleDragEnd)),1!=this.options.useSelect&&this.event.addListener(this.render,"onselectstart",this.event.bindAsEventListener(this,(function(t){h.B.preventDefault(t)}))))),this.setSelectedIndex(this.selectedIndex);for(var t=0;t<this.caseArr.length;t++){var e=this.caseArr[t];if(e.caseElement=document.getElementById(e.caseID),!0===this.options.accessibility){var i=r.d.getMessage("Switch_case_ariaRoledesc")||"슬라이드",s=r.d.getMessage("Switch_case_ariaLabel",this.caseArr.length,t+1)||this.caseArr.length+"개중 "+(t+1)+"번째";e.caseElement.setAttribute("role","group"),e.caseElement.setAttribute("aria-roledescription",i),e.caseElement.setAttribute("aria-label",s)}}if(this.leftPosition=WebSquare.style.getAbsoluteLeft(this.render),this.topPosition=WebSquare.style.getAbsoluteTop(this.render),this.centerInitLeft=this.caseArr[this.selectedIndex].caseElement.offsetLeft,this.options.useKeyboardNavagation&&this.event.addListener(this.render,"onkeydown",this.event.bindAsEventListener(this,this.handlekeyDownEvent)),!0===this.options.accessibility){var n=document.getElementById(this.id+"_btnPrev"),a=document.getElementById(this.id+"_btnNext"),d=document.getElementById(this.id+"_paginationMain");this.event.addListener(n,"onclick",this.event.bindAsEventListener(this,this.moveToLeft)),this.event.addListener(a,"onclick",this.event.bindAsEventListener(this,this.moveToRight)),this.event.addListener(d,"onclick",this.event.bindAsEventListener(this,(function(t){this.moveToIndex(t.target.id.substr(-1)-1)})))}}catch(t){l.w.printStackTrace(t,null,this)}},d.prototype.setSelectedIndex=function(t,e){try{if(o.D.isNull(t)||t<0||t>=this.caseArr.length)return;void 0===e&&(e=!0);for(var i=this.getSelectedIndex(),s=0;s<this.caseArr.length;s++){var n=this.getChild(this.caseArr[s].caseID);s==t?(n.render||(n.writeTo(this),n.activate(),n.onComplete()),e&&(n.setStyle("left",this.centerInitLeft||"0px"),n.setStyle("zIndex",110),n.setStyle("visibility","visible"),!0===this.options.accessibility&&n.render.setAttribute("aria-hidden",!1)),this.selectedIndex=s):(e&&("hidden"!=n.getStyle("visibility")&&n.setStyle("visibility","hidden"),!0===this.options.accessibility&&n.render.setAttribute("aria-hidden",!0),"left"==this.options.hidePosition?n.setStyle("left",n.render.offsetLeft-this.getElementWidth(n.render)+"px"):"right"==this.options.hidePosition&&n.setStyle("left",n.render.offsetLeft+this.getElementWidth(n.render)+"px")),n.setStyle("zIndex",100))}if(!0===this.options.accessibility)for(var a=r.d.getMessage("Switch_selected_pagination")||"선택됨",d=document.getElementById(this.id+"_paginationMain").childNodes,c=0;c<d.length;c++){var p=d[c];c==t?(this.addClass(p,"w2switch_selected_pagination"),p.setAttribute("title",a)):(this.removeClass(p,"w2switch_selected_pagination"),p.removeAttribute("title"))}i!=this.getSelectedIndex()&&h.B.fireEvent(this,"onSelectedIndexChange")}catch(t){l.w.printStackTrace(t,null,this)}},d.prototype.getSelectedIndex=function(){try{return this.selectedIndex}catch(t){l.w.printStackTrace(t,null,this)}},d.prototype.setSelectedID=function(t){try{for(var e=this.getSelectedIndex(),i=0;i<this.caseArr.length;i++){var s=this.getChild(this.caseArr[i].caseID);this.caseArr[i].orgID==t?(s.render||(s.writeTo(this),s.activate(),s.onComplete()),s.setStyle("left",this.centerInitLeft+"px"),s.setStyle("zIndex",110),s.setStyle("visibility","visible"),!0===this.options.accessibility&&s.setStyle("display",""),this.selectedIndex=i):"hidden"!=s.getStyle("visibility")&&(s.setStyle("zIndex",100),s.setStyle("visibility","hidden"),!0===this.options.accessibility&&s.setStyle("display","none"))}e!=this.getSelectedIndex()&&h.B.fireEvent(this,"onSelectedIndexChange")}catch(t){l.w.printStackTrace(t,null,this)}},d.prototype.getSelectedID=function(){try{for(var t=0;t<this.caseArr.length;t++){
if(t==this.selectedIndex)return this.caseArr[t].orgID}return null}catch(t){l.w.printStackTrace(t,null,this)}},d.prototype.moveToLeft=function(){try{if(1==this.options.slide){this.combineSlideElement();var t="right";0==this.options.rotation&&this.selectedIndex<=0?(this.setSelectedIndex(this.selectedIndex,!1),t="center"):this.setSelectedIndex(this.slide.leftIndex,!1);var e=(new Date).getTime()+1e3*this.options.animationDuration;this.slideAnimation(t,e)}else this.setSelectedIndex(this.selectedIndex-1)}catch(t){l.w.printStackTrace(t,null,this)}},d.prototype.moveToRight=function(){try{if(1==this.options.slide){var t="left";this.combineSlideElement(),0==this.options.rotation&&this.selectedIndex>=this.caseArr.length-1?(this.setSelectedIndex(this.slide.centerIndex,!1),t="center"):this.setSelectedIndex(this.slide.rightIndex,!1);var e=(new Date).getTime()+1e3*this.options.animationDuration;this.slideAnimation(t,e)}else this.setSelectedIndex(this.selectedIndex+1)}catch(t){l.w.printStackTrace(t,null,this)}},d.prototype.moveToIndex=function(t){try{if(o.D.isNull(t)||t<0||t>=this.caseArr.length)return;if(1==this.options.slide){var e=this.getSelectedIndex(),i=e-t,s=Math.abs(e-t),n=i<0?"left":"right",r=this,h=function(){0!=s?("left"==n?r.moveToRight():"right"==n&&r.moveToLeft(),s--):o.D.clearInterval(r.id+"_slider_moveToIndex")};s>0&&(h(),o.D.setInterval(h,{key:r.id+"_slider_moveToIndex",caller:r,delay:1e3*r.options.animationDuration}))}else this.setSelectedIndex(t)}catch(t){l.w.printStackTrace(t,null,this)}},d.prototype.handlekeyDownEvent=function(t){try{if(t.target.id==this.id){var e=t.charCode?t.charCode:t.keyCode;if(13!==e&&32!==e&&37!==e&&39!==e)return;switch(h.B.preventDefault(t),e){case 13:case 32:break;case 39:this.moveToRight();break;case 37:this.moveToLeft()}}}catch(t){l.w.printStackTrace(t,null,this)}},d.prototype.setInitValue=function(t){try{this.init(t)}catch(t){l.w.printStackTrace(t,null,this)}},d.prototype.init=function(t){try{t=s.x.extend({excludePlugin:"",excludeId:"",fireEvent:!1},t||{});for(var e=this.getChildren(),i=0;i<e.length;i++)e[i].setInitValue&&-1==(" "+t.excludePlugin+" ").indexOf(" "+e[i].options.pluginName+" ")&&-1==(" "+t.excludeId+" ").indexOf(" "+e[i].id+" ")&&e[i].setInitValue(t)}catch(t){l.w.printStackTrace(t,null,this)}},d.prototype.invoke=function(t,e,i,s){try{return a.s.prototype.invoke.call(this,t,e,i,s)}catch(t){l.w.printStackTrace(t,null,this)}},d.prototype.getElementWidth=function(t){var e;t&&(e=(e=t.offsetWidth)-(parseInt(o.D.getStyleProperty(t,"border-left-width"),10)||0)-(parseInt(o.D.getStyleProperty(t,"border-right-width"),10)||0)-(parseInt(o.D.getStyleProperty(t,"padding-left"),10)||0)-(parseInt(o.D.getStyleProperty(t,"padding-right"),10)||0));return e},d.prototype.combineSlideElement=function(t){try{void 0!==t&&null!=t||(t={}),n.v.clearTimer(this.id+"_slider_slide"),this.slide={},this.slide.leftIndex=this.selectedIndex-1>=0?this.selectedIndex-1:this.caseArr.length-1,this.slide.centerIndex=this.selectedIndex,this.slide.rightIndex=this.selectedIndex+1==this.caseArr.length?0:this.selectedIndex+1,this.slide.leftElement=this.caseArr[this.slide.leftIndex].caseElement,this.slide.rightElement=this.caseArr[this.slide.rightIndex].caseElement,this.slide.centerElement=this.caseArr[this.slide.centerIndex].caseElement,o.D.isNumber(this.centerInitLeft)||(this.centerInitLeft=this.slide.centerElement.offsetLeft),this.slide.leftElement.style.left="-"+(this.getElementWidth(this.slide.leftElement)+this.centerInitLeft)+"px",this.slide.rightElement.style.left=this.getElementWidth(this.slide.rightElement)-this.centerInitLeft+"px",!0!==t.noRefresh&&this._refreshSlideElement()}catch(t){l.w.printStackTrace(t,null,this)}},d.prototype._refreshSlideElement=function(){try{"visibility"!=this.slide.leftElement.style.visibility&&(this.slide.leftElement.style.zIndex=110,this.slide.leftElement.style.visibility="visible"),"visibility"!=this.slide.rightElement.style.visibility&&(this.slide.rightElement.style.zIndex=110,
this.slide.rightElement.style.visibility="visible")}catch(t){l.w.printStackTrace(t,null,this)}},d.prototype.slideAnimation=function(t,e){try{var i=1e3*this.options.animationDuration;function l(t,e,i,s,n,l){var r,h,o=0,a=0,d=0,c=0,p=0,u=0;function f(t){return((o*t+a)*t+d)*t}function y(t){return(3*o*t+2*a)*t+d}return o=1-(d=3*e)-(a=3*(s-e)-d),c=1-(u=3*i)-(p=3*(n-i)-u),r=t,h=function(t){return 1/(200*t)}(l),function(t){return((c*t+p)*t+u)*t}(function(t,e){var i,s,n,l,r,h;function o(t){return t>=0?t:0-t}for(n=t,h=0;h<8;h++){if(o(l=f(n)-t)<e)return n;if(o(r=y(n))<1e-6)break;n-=l/r}if(s=1,(n=t)<(i=0))return i;if(n>s)return s;for(;i<s;){if(o((l=f(n))-t)<e)return n;t>l?i=n:s=n,n=.5*(s-i)+i}return n}(r,h))}var s,r=(new Date).getTime()-(e-i),h=[.25,.1,.25,1],o=l(r/i,(h=[.25,.1,.25,1])[0],h[1],h[2],h[3],i/1e3);if("right"==t?(s=Math.round((this.getElementWidth(this.slide.centerElement)-this.slide.centerElement.offsetLeft)*o),this.slide.leftElement.style.left=this.slide.leftElement.offsetLeft+s+"px",this.slide.centerElement.style.left=this.slide.centerElement.offsetLeft+s+"px",this.slide.leftIndex!=this.slide.rightIndex&&(this.slide.rightElement.style.left=this.slide.rightElement.offsetLeft+s+"px")):"left"==t&&(s=Math.round((this.getElementWidth(this.slide.centerElement)+this.slide.centerElement.offsetLeft)*o),this.slide.leftIndex!=this.slide.rightIndex&&(this.slide.leftElement.style.left=this.slide.leftElement.offsetLeft-s+"px"),this.slide.centerElement.style.left=this.slide.centerElement.offsetLeft-s+"px",this.slide.rightElement.style.left=this.slide.rightElement.offsetLeft-s+"px"),r>=i)return void this.stopSlideAnimation(t);n.v.setTimer(this.slideAnimation,{key:this.id+"_slider_slide",caller:this,delay:5,args:[t,e]})}catch(t){l.w.printStackTrace(t,null,this)}},d.prototype.stopSlideAnimation=function(t){try{this.slide.leftElement.style.left=this.centerInitLeft+"px",this.slide.rightElement.style.left=this.centerInitLeft+"px",this.slide.centerElement.style.left=this.centerInitLeft+"px","right"===t?this.setSelectedIndex(this.slide.leftIndex):"left"===t?this.setSelectedIndex(this.slide.rightIndex):this.setSelectedIndex(this.slide.centerIndex),n.v.clearTimer(this.id+"_slider_slide")}catch(t){l.w.printStackTrace(t,null,this)}},d.prototype.setIsSliding=function(t){var e=this.lastEventLayer.x-this.startEventLayer.x,i=this.lastEventLayer.y-this.startEventLayer.y;e<3&&i<3&&(this.isSliding=t)},d.prototype.handleTouchStart=function(t){try{WebSquare.getBody().getLayerListener().hideAll(),h.B.stopPropagation(t),this.isSliding=!0,this.isYScrolling=!1,this.isTouchStart=!0,this.startEventLayer.x=h.B.getMouseX(t)-(this.leftPosition||0),this.startEventLayer.y=h.B.getMouseY(t)-(this.topPosition||0),this.lastEventLayer.x=h.B.getMouseX(t)-(this.leftPosition||0),this.lastEventLayer.y=h.B.getMouseY(t)-(this.topPosition||0),this.combineSlideElement({noRefresh:!0}),1==this.options.useSelect&&(n.v.clearTimer(this.id+"_setSlidingFlag"),n.v.setTimer(this.setIsSliding,{key:this.id+"_setSlidingFlag",caller:this,delay:1e3,args:[!1]}))}catch(t){this.isSliding=!1,this.isYScrolling=!1,l.w.printStackTrace(t,null,this)}},d.prototype.handleTouchEnd=function(t,e){try{if(this.isYScrolling=!1,!0===this.isTouchStart&&(this.isSliding=!1,this.isTouchStart=!1),!this.isSliding)return void(e&&this.slide.centerElement&&this.stopSlideAnimation("center"));h.B.stopPropagation(t),this.isSliding=!1;var i,s=(new Date).getTime()+1e3*this.options.animationDuration,n=this.lastEventLayer.x-this.startEventLayer.x;if(Math.abs(n)<this.options.detectionRange?i="center":n>0?i="right":n<0&&(i="left"),0==this.options.rotation&&("left"===i?this.selectedIndex>=this.caseArr.length-1&&(i="center"):"right"===i&&this.selectedIndex<=0&&(i="center")),"center"===i)return void this.setSelectedIndex(this.slide.centerIndex);"left"===i?this.setSelectedIndex(this.slide.rightIndex,!1):"right"===i&&this.setSelectedIndex(this.slide.leftIndex,!1),this.slideAnimation(i,s)}catch(t){l.w.printStackTrace(t,null,this)}},
d.prototype.handleTouchMove=function(t){try{if(!0===this.isTouchStart&&(this.isTouchStart=!1,this._refreshSlideElement()),!this.isSliding||1!=this.options.motionDisplay)return this.lastEventLayer.x=h.B.getMouseX(t)-(this.leftPosition||0),void(this.lastEventLayer.y=h.B.getMouseY(t)-(this.topPosition||0));if(!t.touches||1==t.touches.length){var e=h.B.getMouseX(t)-(this.leftPosition||0),i=e-this.startEventLayer.x;if(this.lastEventLayer.x=e,this.lastEventLayer.y=h.B.getMouseY(t)-(this.topPosition||0),Math.abs(this.lastEventLayer.x-this.startEventLayer.x)<5&&Math.abs(this.lastEventLayer.y-this.startEventLayer.y)>10&&(this.isSliding=!1,this.isYScrolling=!0,this.slide.centerElement&&0!=this.slide.centerElement.offsetLeft))return void this.stopSlideAnimation("center");this.isSliding&&h.B.stopEvent(t),this.slide.leftIndex==this.slide.rightIndex?this.slide.centerElement.offsetLeft>=0?(this.slide.leftElement.style.left=i-this.getElementWidth(this.slide.leftElement)+"px",this.slide.centerElement.style.left=i+"px"):this.slide.centerElement.offsetLeft<=0&&(this.slide.centerElement.style.left=i+"px",this.slide.rightElement.style.left=i+this.getElementWidth(this.slide.rightElement)+"px"):(this.slide.leftElement.style.left=i-this.getElementWidth(this.slide.leftElement)+"px",this.slide.centerElement.style.left=i+"px",this.slide.rightElement.style.left=i+this.getElementWidth(this.slide.rightElement)+"px")}}catch(t){l.w.printStackTrace(t,null,this)}},d.prototype.handleMouseOut=function(t){null==h.B.getRelatedTarget(t)&&this.handleTouchEnd(t)},d.prototype.handleDragEnd=function(t){this.handleTouchEnd(t,!0)},d.prototype.setDisabled=function(t){try{t=a.s.prototype.setDisabled.call(this,t);for(var e=0;e<this.childControlList.length;e++){var i=this.childControlList[e];i.setDisabled&&"stop"!=i.activeStatus&&i.setDisabled(t)}}catch(t){l.w.printStackTrace(t)}return t},d.prototype.insert=function(t,e){try{var i;void 0!==e&&null!=e||(e={}),!t.nodeType||1!==t.nodeType&&9!==t.nodeType?"string"==typeof t&&(i=WebSquare.xml.parse(t,!0))&&(i=i.documentElement):i=9==t.nodeType?t.documentElement:t;var s=!0===e.selected||"true"==i.getAttribute("selected"),n=this.options._scope_obj_uuid,r=null==n?null:WebSquare.idCache[n],h=WebSquare.controlFactory.create(null,{pluginName:"group"},i,r,n);h.options.style=h.options.style+";"+this.options.caseStyle,h.options.className="w2switch_case "+h.options.className+" "+this.options.caseClass,this.addControl(h),h.writeTo(this),h.activate(),h.onComplete(),this.caseArr.push({orgID:null==h.org_id?h.id:h.org_id,caseID:h.id,caseComp:h,caseElement:document.getElementById(h.id)}),s&&this.setSelectedIndex(this.caseArr.length-1)}catch(t){l.w.printStackTrace(t)}},d.prototype.finalize=function(){try{for(var t=0;t<this.caseArr.length;t++){var e=this.caseArr[t].caseComp;e&&"function"==typeof e.remove&&e.remove()}}catch(t){l.w.printStackTrace(t)}}}}]);