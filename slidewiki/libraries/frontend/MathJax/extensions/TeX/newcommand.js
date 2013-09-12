/*
 *  /MathJax/extensions/TeX/newcommand.js
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

MathJax.Hub.Register.StartupHook("TeX Jax Ready",function(){var b="1.1";var c=MathJax.InputJax.TeX;var a=c.Definitions;MathJax.Hub.Insert(a,{macros:{newcommand:"NewCommand",renewcommand:"NewCommand",newenvironment:"NewEnvironment",def:"MacroDef"}});c.Parse.Augment({NewCommand:function(d){var e=this.trimSpaces(this.GetArgument(d)),g=this.trimSpaces(this.GetBrackets(d)),f=this.GetArgument(d);if(g===""){g=null}if(e.charAt(0)==="\\"){e=e.substr(1)}if(!e.match(/^(.|[a-z]+)$/i)){c.Error("Illegal control sequence name for "+d)}if(g!=null&&!g.match(/^[0-9]+$/)){c.Error("Illegal number of parameters specified in "+d)}a.macros[e]=["Macro",f,g]},NewEnvironment:function(e){var f=this.trimSpaces(this.GetArgument(e)),h=this.trimSpaces(this.GetBrackets(e)),g=this.GetArgument(e),d=this.GetArgument(e);if(h===""){h=null}if(h!=null&&!h.match(/^[0-9]+$/)){c.Error("Illegal number of parameters specified in "+e)}a.environment[f]=["BeginEnv","EndEnv",g,d,h]},MacroDef:function(d){var e=this.GetCSname(d),g=this.GetTemplate(d,"\\"+e),f=this.GetArgument(d);if(!(g instanceof Array)){a.macros[e]=["Macro",f,g]}else{a.macros[e]=["MacroWithTemplate",f,g[0],g[1]]}},GetCSname:function(e){var f=this.GetNext();if(f!=="\\"){c.Error("\\ must be followed by a control sequence")}var d=this.trimSpaces(this.GetArgument(e));return d.substr(1)},GetTemplate:function(f,e){var j,g=[],h=0;j=this.GetNext();var d=this.i;while(this.i<this.string.length){j=this.GetNext();if(j==="#"){if(d!==this.i){g[h]=this.string.substr(d,this.i-d)}j=this.string.charAt(++this.i);if(!j.match(/^[1-9]$/)){c.Error("Illegal use of # in template for "+e)}if(parseInt(j)!=++h){c.Error("Parameters for "+e+" must be numbered sequentially")}d=this.i+1}else{if(j==="{"){if(d!==this.i){g[h]=this.string.substr(d,this.i-d)}if(g.length>0){return[h,g]}else{return h}}}this.i++}c.Error("Missing replacement string for definition of "+f)},MacroWithTemplate:function(e,h,j,g){if(j){var d=[];this.GetNext();if(g[0]&&!this.MatchParam(g[0])){c.Error("Use of "+e+" doesn't match its definition")}for(var f=0;f<j;f++){d.push(this.GetParameter(e,g[f+1]))}h=this.SubstituteArgs(d,h)}this.string=this.AddArgs(h,this.string.slice(this.i));this.i=0;if(++this.macroCount>c.config.MAXMACROS){c.Error("MathJax maximum macro substitution count exceeded; is there a recursive macro call?")}},BeginEnv:function(g,j,d,h){if(h){var e=[];for(var f=0;f<h;f++){e.push(this.GetArgument("\\begin{"+name+"}"))}j=this.SubstituteArgs(e,j);d=this.SubstituteArgs(e,d)}g.edef=d;this.string=this.AddArgs(j,this.string.slice(this.i));this.i=0;return g},EndEnv:function(d,e){this.string=this.AddArgs(d.edef,this.string.slice(this.i));this.i=0;return e},GetParameter:function(e,h){if(h==null){return this.GetArgument(e)}var g=this.i,d=0,f=0;while(this.i<this.string.length){if(this.string.charAt(this.i)==="{"){if(this.i===g){f=1}this.GetArgument(e);d=this.i-g}else{if(this.MatchParam(h)){if(f){g++;d-=2}return this.string.substr(g,d)}else{this.i++;d++;f=0}}}c.Error("Runaway argument for "+e+"?")},MatchParam:function(d){if(this.string.substr(this.i,d.length)!==d){return 0}this.i+=d.length;return 1}});c.Environment=function(d){a.environment[d]=["BeginEnv","EndEnv"].concat([].slice.call(arguments,1))};MathJax.Hub.Startup.signal.Post("TeX newcommand Ready")});MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/newcommand.js");

