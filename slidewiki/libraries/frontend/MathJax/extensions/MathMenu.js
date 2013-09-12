/*
 *  /MathJax/extensions/MathMenu.js
 *  
 *  Copyright (c) 2010 Design Science, Inc.
 *
 *  Part of the MathJax library.
 *  See http://www.mathjax.org for details.
 * 
 *  Licensed under the Apache License, Version 2.0;
 *  you may not use this file except in compliance with the License.
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 */

(function(b,c,f){var k="1.1.4";MathJax.Extension.MathMenu={version:k};var i=b.Browser.isPC,g=b.Browser.isMSIE;var e=(i?null:"5px");var j=b.CombineConfig("MathMenu",{delay:150,helpURL:"http://www.mathjax.org/help/user/",showRenderer:true,showFontMenu:false,showContext:false,windowSettings:{status:"no",toolbar:"no",locationbar:"no",menubar:"no",directories:"no",personalbar:"no",resizable:"yes",scrollbars:"yes",width:100,height:50},styles:{"#MathJax_About":{position:"fixed",left:"50%",width:"auto","text-align":"center",border:"3px outset",padding:"1em 2em","background-color":"#DDDDDD",color:"black",cursor:"default","font-family":"message-box","font-size":"120%","font-style":"normal","text-indent":0,"text-transform":"none","line-height":"normal","letter-spacing":"normal","word-spacing":"normal","word-wrap":"normal","white-space":"nowrap","float":"none","z-index":201,"border-radius":"15px","-webkit-border-radius":"15px","-moz-border-radius":"15px","-khtml-border-radius":"15px","box-shadow":"0px 10px 20px #808080","-webkit-box-shadow":"0px 10px 20px #808080","-moz-box-shadow":"0px 10px 20px #808080","-khtml-box-shadow":"0px 10px 20px #808080",filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')"},".MathJax_Menu":{position:"absolute","background-color":"white",color:"black",width:"auto",padding:(i?"2px":"5px 0px"),border:"1px solid #CCCCCC",margin:0,cursor:"default",font:"menu","text-align":"left","text-indent":0,"text-transform":"none","line-height":"normal","letter-spacing":"normal","word-spacing":"normal","word-wrap":"normal","white-space":"nowrap","float":"none","z-index":201,"border-radius":e,"-webkit-border-radius":e,"-moz-border-radius":e,"-khtml-border-radius":e,"box-shadow":"0px 10px 20px #808080","-webkit-box-shadow":"0px 10px 20px #808080","-moz-box-shadow":"0px 10px 20px #808080","-khtml-box-shadow":"0px 10px 20px #808080",filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')"},".MathJax_MenuItem":{padding:(i?"2px 2em":"1px 2em"),background:"transparent"},".MathJax_MenuTitle":{"background-color":"#CCCCCC",margin:(i?"-1px -1px 1px -1px":"-5px 0 0 0"),"text-align":"center","font-style":"italic","font-size":"80%",color:"#444444",padding:"2px 0",overflow:"hidden"},".MathJax_MenuArrow":{position:"absolute",right:".5em",color:"#666666","font-family":(g?"'Arial unicode MS'":null)},".MathJax_MenuActive .MathJax_MenuArrow":{color:"white"},".MathJax_MenuCheck":{position:"absolute",left:".7em","font-family":(g?"'Arial unicode MS'":null)},".MathJax_MenuRadioCheck":{position:"absolute",left:(i?"1em":".7em")},".MathJax_MenuLabel":{padding:(i?"2px 2em 4px 1.33em":"1px 2em 3px 1.33em"),"font-style":"italic"},".MathJax_MenuRule":{"border-top":(i?"1px solid #CCCCCC":"1px solid #DDDDDD"),margin:(i?"4px 1px 0px":"4px 3px")},".MathJax_MenuDisabled":{color:"GrayText"},".MathJax_MenuActive":{"background-color":(i?"Highlight":"#606872"),color:(i?"HighlightText":"white")}}});var d=function(l){if(!l){l=window.event}if(l){if(l.preventDefault){l.preventDefault()}if(l.stopPropagation){l.stopPropagation()}l.cancelBubble=true;l.returnValue=false}return false};var a=MathJax.Menu=MathJax.Object.Subclass({version:k,items:[],posted:false,title:null,margin:5,Init:function(l){this.items=[].slice.call(arguments,0)},With:function(l){if(l){b.Insert(this,l)}return this},Post:function(n,v){if(!n){n=window.event}var t=(!this.title?null:[["div",{className:"MathJax_MenuTitle"},[this.title]]]);var l=document.getElementById("MathJax_MenuFrame");if(!l){l=a.Background(this)}var o=c.addElement(l,"div",{onmouseup:a.Mouseup,ondblclick:this.False,ondragstart:this.False,onselectstart:this.False,oncontextmenu:this.False,menuItem:this,className:"MathJax_Menu"},t);for(var q=0,p=this.items.length;q<p;q++){this.items[q].Create(o)}this.posted=true;o.style.width=(o.offsetWidth+2)+"px";var u=n.pageX,s=n.pageY;if(!u&&!s){u=n.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;s=n.clientY+document.body.scrollTop+document.documentElement.scrollTop}if(!v){if(u+o.offsetWidth>document.body.offsetWidth-this.margin){u=document.body.offsetWidth-o.offsetWidth-this.margin}a.skipUp=true}else{var r="left",w=v.offsetWidth;u=v.offsetWidth-2;s=0;while(v&&v!==l){u+=v.offsetLeft;s+=v.offsetTop;v=v.parentNode}if(u+o.offsetWidth>document.body.offsetWidth-this.margin){r="right";u=Math.max(this.margin,u-w-o.offsetWidth+6)}if(!i){o.style["borderRadiusTop"+r]=0;o.style["WebkitBorderRadiusTop"+r]=0;o.style["MozBorderRadiusTop"+r]=0;o.style["KhtmlBorderRadiusTop"+r]=0}}o.style.left=u+"px";o.style.top=s+"px";if(document.selection&&document.selection.empty){document.selection.empty()}return this.False(n)},Remove:function(l,m){var n=document.getElementById("MathJax_MenuFrame");if(n){n.parentNode.removeChild(n);if(this.msieBackgroundBug){detachEvent("onresize",a.Resize)}}},Mouseup:function(l,m){if(a.skipUp){delete a.skipUp}else{this.Remove(l,m)}},False:d},{config:j,div:null,Remove:function(l){a.Event(l,this,"Remove")},Mouseover:function(l){a.Event(l,this,"Mouseover")},Mouseout:function(l){a.Event(l,this,"Mouseout")},Mousedown:function(l){a.Event(l,this,"Mousedown")},Mouseup:function(l){a.Event(l,this,"Mouseup")},Mousemove:function(l){a.Event(l,this,"Mousemove")},Event:function(n,o,l){if(!n){n=window.event}var m=o.menuItem;if(m&&m[l]){return m[l](n,o)}return null},BGSTYLE:{position:"absolute",left:0,top:0,"z-index":200,width:"100%",height:"100%",border:0,padding:0,margin:0},Background:function(m){var n=c.addElement(document.body,"div",{style:this.BGSTYLE,id:"MathJax_MenuFrame"},[["div",{style:this.BGSTYLE,menuItem:m,onmousedown:this.Remove}]]);var l=n.firstChild;if(m.msieBackgroundBug){l.style.backgroundColor="white";l.style.filter="alpha(opacity=0)";n.width=n.height=0;this.Resize();attachEvent("onresize",this.Resize)}else{l.style.position="fixed"}return n},Resize:function(){setTimeout(a.SetWH,0)},SetWH:function(){var l=document.getElementById("MathJax_MenuFrame");if(l){l=l.firstChild;l.style.width=l.style.height="1px";l.style.width=document.body.scrollWidth+"px";l.style.height=document.body.scrollHeight+"px"}},saveCookie:function(){c.Cookie.Set("menu",this.cookie)},getCookie:function(){this.cookie=c.Cookie.Get("menu")}});var h=a.ITEM=MathJax.Object.Subclass({name:"",Create:function(m){if(!this.hidden){var l={onmouseover:a.Mouseover,onmouseout:a.Mouseout,onmouseup:a.Mouseup,onmousedown:this.False,ondragstart:this.False,onselectstart:this.False,onselectend:this.False,className:"MathJax_MenuItem",menuItem:this};if(this.disabled){l.className+=" MathJax_MenuDisabled"}c.addElement(m,"div",l,this.Label(l,m))}},Mouseover:function(q,s){if(!this.disabled){this.Activate(s)}if(!this.menu||!this.menu.posted){var r=document.getElementById("MathJax_MenuFrame").childNodes,n=s.parentNode.childNodes;for(var o=0,l=n.length;o<l;o++){var p=n[o].menuItem;if(p&&p.menu&&p.menu.posted){p.Deactivate(n[o])}}l=r.length-1;while(l>=0&&s.parentNode.menuItem!==r[l].menuItem){r[l].menuItem.posted=false;r[l].parentNode.removeChild(r[l]);l--}if(this.Timer){this.Timer(q,s)}}},Mouseout:function(l,m){if(!this.menu||!this.menu.posted){this.Deactivate(m)}if(this.timer){clearTimeout(this.timer);delete this.timer}},Mouseup:function(l,m){return this.Remove(l,m)},Remove:function(l,m){m=m.parentNode.menuItem;return m.Remove(l,m)},Activate:function(l){this.Deactivate(l);l.className+=" MathJax_MenuActive"},Deactivate:function(l){l.className=l.className.replace(/ MathJax_MenuActive/,"")},With:function(l){if(l){b.Insert(this,l)}return this},False:d});a.ITEM.COMMAND=a.ITEM.Subclass({action:function(){},Init:function(l,n,m){this.name=l;this.action=n;this.With(m)},Label:function(l,m){return[this.name]},Mouseup:function(l,m){if(!this.disabled){this.Remove(l,m);this.action.call(this,l)}return this.False(l)}});a.ITEM.SUBMENU=a.ITEM.Subclass({menu:null,marker:(i&&!b.Browser.isSafari?"\u25B6":"\u25B8"),Init:function(l,n){this.name=l;var m=1;if(!(n instanceof a.ITEM)){this.With(n),m++}this.menu=a.apply(a,[].slice.call(arguments,m))},Label:function(l,m){l.onmousemove=a.Mousemove;this.menu.posted=false;return[this.name+" ",["span",{className:"MathJax_MenuArrow"},[this.marker]]]},Timer:function(l,m){if(this.timer){clearTimeout(this.timer)}l={clientX:l.clientX,clientY:l.clientY};this.timer=setTimeout(MathJax.Callback(["Mouseup",this,l,m]),j.delay)},Mouseup:function(n,p){if(!this.disabled){if(!this.menu.posted){if(this.timer){clearTimeout(this.timer);delete this.timer}this.menu.Post(n,p)}else{var o=document.getElementById("MathJax_MenuFrame").childNodes,l=o.length-1;while(l>=0){var q=o[l];q.menuItem.posted=false;q.parentNode.removeChild(q);if(q.menuItem===this.menu){break}l--}}}return this.False(n)}});a.ITEM.RADIO=a.ITEM.Subclass({variable:null,marker:(i?"\u25CF":"\u2713"),Init:function(m,l,n){this.name=m;this.variable=l;this.With(n);if(this.value==null){this.value=this.name}},Label:function(m,n){var l={className:"MathJax_MenuRadioCheck"};if(j.settings[this.variable]!==this.value){l={style:{display:"none"}}}return[["span",l,[this.marker]]," "+this.name]},Mouseup:function(p,q){if(!this.disabled){var r=q.parentNode.childNodes;for(var n=0,l=r.length;n<l;n++){var o=r[n].menuItem;if(o&&o.variable===this.variable){r[n].firstChild.style.display="none"}}q.firstChild.display="";j.settings[this.variable]=this.value;a.cookie[this.variable]=j.settings[this.variable];a.saveCookie();if(this.action){this.action.call(a)}}this.Remove(p,q);return this.False(p)}});a.ITEM.CHECKBOX=a.ITEM.Subclass({variable:null,marker:"\u2713",Init:function(m,l,n){this.name=m;this.variable=l;this.With(n)},Label:function(m,n){var l={className:"MathJax_MenuCheck"};if(!j.settings[this.variable]){l={style:{display:"none"}}}return[["span",l,[this.marker]]," "+this.name]},Mouseup:function(l,m){if(!this.disabled){m.firstChild.display=(j.settings[this.variable]?"none":"");j.settings[this.variable]=!j.settings[this.variable];a.cookie[this.variable]=j.settings[this.variable];a.saveCookie();if(this.action){this.action.call(a)}}this.Remove(l,m);return this.False(l)}});a.ITEM.LABEL=a.ITEM.Subclass({Init:function(l,m){this.name=l;this.With(m)},Label:function(l,m){delete l.onmouseover,delete l.onmouseout;delete l.onmousedown;l.className+=" MathJax_MenuLabel";return[this.name]}});a.ITEM.RULE=a.ITEM.Subclass({Label:function(l,m){delete l.onmouseover,delete l.onmouseout;delete l.onmousedown;l.className+=" MathJax_MenuRule";return null}});a.About=function(){var o=MathJax.OutputJax["HTML-CSS"]||{fontInUse:""};var q=(o.webFonts?"":"local "),m=(o.webFonts?" web":"");var n=(o.imgFonts?"Image":q+o.fontInUse+m)+" fonts";var l=["MathJax.js v"+MathJax.fileversion,["br"]];l.push(["div",{style:{"border-top":"groove 2px",margin:".25em 0"}}]);a.About.GetJax(l,MathJax.InputJax,"Input Jax");a.About.GetJax(l,MathJax.OutputJax,"Output Jax");a.About.GetJax(l,MathJax.ElementJax,"Element Jax");l.push(["div",{style:{"border-top":"groove 2px",margin:".25em 0"}}]);a.About.GetJax(l,MathJax.Extension,"Extension",true);l.push(["div",{style:{"border-top":"groove 2px",margin:".25em 0"}}],["center",{},[b.Browser+" v"+b.Browser.version+(o.webFonts?" \u2014 "+o.allowWebFonts+" fonts":"")]]);a.About.div=a.Background(a.About);var r=MathJax.HTML.addElement(a.About.div,"div",{id:"MathJax_About",onclick:a.About.Remove},[["b",{style:{fontSize:"120%"}},["MathJax"]]," v"+MathJax.version,["br"],"using "+n,["br"],["br"],["span",{style:{display:"inline-block","text-align":"left","font-size":"80%","background-color":"#E4E4E4",padding:".4em .6em",border:"1px inset"}},l],["br"],["br"],["a",{href:"http://www.mathjax.org/"},["www.mathjax.org"]]]);var s=(document.documentElement||{});var p=window.innerHeight||s.clientHeight||s.scrollHeight||0;if(a.prototype.msieAboutBug){r.style.width="20em";r.style.position="absolute";r.style.left=Math.floor((document.documentElement.scrollWidth-r.offsetWidth)/2)+"px";r.style.top=(Math.floor((p-r.offsetHeight)/3)+document.body.scrollTop)+"px"}else{r.style.marginLeft=Math.floor(-r.offsetWidth/2)+"px";r.style.top=Math.floor((p-r.offsetHeight)/3)+"px"}};a.About.Remove=function(l){if(a.About.div){document.body.removeChild(a.About.div);delete a.About.div}};a.About.GetJax=function(l,o,n,m){for(var p in o){if(o.hasOwnProperty(p)&&o[p]){if((m&&o[p].version)||(o[p].isa&&o[p].isa(o))){l.push((o[p].id||p)+" "+n+" v"+o[p].version,["br"])}}}return l};a.Help=function(){window.open(j.helpURL,"MathJaxHelp")};a.ShowSource=function(o){if(!o){o=window.event}var n={screenX:o.screenX,screenY:o.screenY};if(!a.jax){return}if(j.settings.format==="MathML"){var l=MathJax.ElementJax.mml;if(l&&typeof(l.mbase.prototype.toMathML)!=="undefined"){try{a.ShowSource.Text(a.jax.root.toMathML(),o)}catch(m){if(!m.restart){throw m}MathJax.Callback.After([this,arguments.callee,n])}}else{if(!f.loadingToMathML){f.loadingToMathML=true;a.ShowSource.Window(o);MathJax.Callback.Queue(f.Require("[MathJax]/extensions/toMathML.js"),function(){delete f.loadingToMathML},[this,arguments.callee,n]);return}}}else{if(a.jax.originalText==null){alert("No TeX form available");return}a.ShowSource.Text(a.jax.originalText,o)}};a.ShowSource.Window=function(m){if(!a.ShowSource.w){var n=[],l=j.windowSettings;for(var o in l){if(l.hasOwnProperty(o)){n.push(o+"="+l[o])}}a.ShowSource.w=window.open("","_blank",n.join(","))}return a.ShowSource.w};a.ShowSource.Text=function(r,q){var n=a.ShowSource.Window(q);r=r.replace(/^\s*/,"").replace(/\s*$/,"");r=r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");n.document.open();n.document.write("<html><head><title>MathJax Equation Source</title></head><body style='font-size:85%'>");n.document.write("<table><tr><td><pre>"+r+"</pre></td></tr></table>");n.document.write("</body></html>");n.document.close();var p=n.document.body.firstChild;var o=(n.outerHeight-n.innerHeight)||30,m=(n.outerWidth-n.innerWidth)||30;m=Math.min(Math.floor(0.5*screen.width),p.offsetWidth+m+25);o=Math.min(Math.floor(0.5*screen.height),p.offsetHeight+o+25);n.resizeTo(m,o);if(q&&q.screenX!=null){var l=Math.max(0,Math.min(q.screenX-Math.floor(m/2),screen.width-m-20)),s=Math.max(0,Math.min(q.screenY-Math.floor(o/2),screen.height-o-20));n.moveTo(l,s)}delete a.ShowSource.w};a.Scale=function(){var m=MathJax.OutputJax["HTML-CSS"],l=MathJax.OutputJax.NativeMML;var o=(m?m.config.scale:l.config.scale);var n=prompt("Scale all mathematics (compared to surrounding text) by",o+"%");if(n){if(n.match(/^\s*\d+\s*%?\s*$/)){n=parseInt(n);if(n){if(n!==o){if(m){m.config.scale=n}if(l){l.config.scale=n}a.cookie.scale=n;a.saveCookie();b.Reprocess()}}else{alert("The scale should not be zero")}}else{alert("The scale should be a perentage (e.g., 120%)")}}};a.Zoom=function(){if(!MathJax.Extension.MathZoom){f.Require("[MathJax]/extensions/MathZoom.js")}};a.Renderer=function(){var l=b.config.outputJax["jax/mml"];if(l[0]!==j.settings.renderer){MathJax.Callback.Queue(["Require",f,"[MathJax]/jax/output/"+j.settings.renderer+"/config.js"],["Post",b.Startup.signal,j.settings.renderer+" output selected"],[function(){var p=MathJax.OutputJax[j.settings.renderer];for(var o=0,n=l.length;o<n;o++){if(l[o]===p){l.splice(o,1);break}}l.unshift(p)}],["Reprocess",b])}};a.Font=function(){var l=MathJax.OutputJax["HTML-CSS"];if(!l){return}document.location.reload()};b.Browser.Select({MSIE:function(l){var m=(document.compatMode==="BackCompat");var n=l.versionAtLeast("8.0")&&document.documentMode>7;a.Augment({margin:20,msieBackgroundBug:(m||!n),msieAboutBug:m});if(document.documentMode>=9){delete j.styles["#MathJax_About"].filter;delete j.styles[".MathJax_Menu"].filter}}});b.Register.StartupHook("End Config",function(){j.settings=b.config.menuSettings;if(!j.settings.format){j.settings.format=(MathJax.InputJax.TeX?"Original":"MathML")}if(typeof(j.settings.showRenderer)!=="undefined"){j.showRenderer=j.settings.showRenderer}if(typeof(j.settings.showFontMenu)!=="undefined"){j.showFontMenu=j.settings.showFontMenu}if(typeof(j.settings.showContext)!=="undefined"){j.showContext=j.settings.showContext}a.getCookie();a.menu=a(h.COMMAND("Show Source",a.ShowSource),h.SUBMENU("Format",h.RADIO("MathML","format"),h.RADIO("Original","format",{value:"Original"})),h.RULE(),h.SUBMENU("Settings",h.SUBMENU("Zoom Trigger",h.RADIO("Hover","zoom",{action:a.Zoom}),h.RADIO("Click","zoom",{action:a.Zoom}),h.RADIO("Double-Click","zoom",{action:a.Zoom}),h.RADIO("No Zoom","zoom",{value:"None"}),h.RULE(),h.LABEL("Trigger Requires:"),h.CHECKBOX((b.Browser.isMac?"Option":"Alt"),"ALT"),h.CHECKBOX("Command","CMD",{hidden:!b.Browser.isMac}),h.CHECKBOX("Control","CTRL",{hidden:b.Browser.isMac}),h.CHECKBOX("Shift","Shift")),h.SUBMENU("Zoom Factor",h.RADIO("125%","zscale"),h.RADIO("133%","zscale"),h.RADIO("150%","zscale"),h.RADIO("175%","zscale"),h.RADIO("200%","zscale"),h.RADIO("250%","zscale"),h.RADIO("300%","zscale"),h.RADIO("400%","zscale")),h.RULE(),h.SUBMENU("Math Renderer",{hidden:!j.showRenderer},h.RADIO("HTML-CSS","renderer",{action:a.Renderer}),h.RADIO("MathML","renderer",{action:a.Renderer,value:"NativeMML"})),h.SUBMENU("Font Preference",{hidden:!j.showFontMenu},h.LABEL("For HTML-CSS:"),h.RADIO("Auto","font",{action:a.Font}),h.RULE(),h.RADIO("TeX (local)","font",{action:a.Font}),h.RADIO("TeX (web)","font",{action:a.Font}),h.RADIO("TeX (image)","font",{action:a.Font}),h.RULE(),h.RADIO("STIX (local)","font",{action:a.Font})),h.SUBMENU("Contextual Menu",{hidden:!j.showContext},h.RADIO("MathJax","context"),h.RADIO("Browser","context")),h.COMMAND("Scale All Math ...",a.Scale)),h.RULE(),h.COMMAND("About MathJax",a.About),h.COMMAND("MathJax Help",a.Help))});a.showRenderer=function(l){a.cookie.showRenderer=j.showRenderer=l;a.saveCookie();a.menu.items[3].menu.item[3].hidden=!l};a.showFontMenu=function(l){a.cookie.showFontMenu=j.showFontMenu=l;a.saveCookie();a.menu.items[3].menu.items[4].hidden=!l};a.showContext=function(l){a.cookie.showContext=j.showContext=l;a.saveCookie();a.menu.items[3].menu.items[5].hidden=!l};MathJax.Callback.Queue(["Styles",f,j.styles],["Post",b.Startup.signal,"MathMenu Ready"],["loadComplete",f,"[MathJax]/extensions/MathMenu.js"])})(MathJax.Hub,MathJax.HTML,MathJax.Ajax);

