"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43012],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),a=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=a(e.components);return n.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,p=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=a(t),d=o,f=m["".concat(c,".").concat(d)]||m[d]||l[d]||p;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var p=t.length,i=new Array(p);i[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var a=2;a<p;a++)i[a]=t[a];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},63785:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return a},toc:function(){return u},default:function(){return m}});var n=t(87462),o=t(63366),p=(t(67294),t(3905)),i=["components"],s={},c=void 0,a={unversionedId:"puppeteer.browsercontext.clearpermissionoverrides",id:"puppeteer.browsercontext.clearpermissionoverrides",isDocsHomePage:!1,title:"puppeteer.browsercontext.clearpermissionoverrides",description:"Home &gt; puppeteer &gt; BrowserContext &gt; clearPermissionOverrides",source:"@site/docs/puppeteer.browsercontext.clearpermissionoverrides.md",sourceDirName:".",slug:"/puppeteer.browsercontext.clearpermissionoverrides",permalink:"/puppeteer/docs/next/puppeteer.browsercontext.clearpermissionoverrides",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/docs/puppeteer.browsercontext.clearpermissionoverrides.md",version:"current",frontMatter:{}},u=[{value:"BrowserContext.clearPermissionOverrides() method",id:"browsercontextclearpermissionoverrides-method",children:[]},{value:"Example",id:"example",children:[]}],l={toc:u};function m(e){var r=e.components,t=(0,o.Z)(e,i);return(0,p.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.browsercontext"},"BrowserContext")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.browsercontext.clearpermissionoverrides"},"clearPermissionOverrides")),(0,p.kt)("h2",{id:"browsercontextclearpermissionoverrides-method"},"BrowserContext.clearPermissionOverrides() method"),(0,p.kt)("p",null,"Clears all permission overrides for the browser context."),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"clearPermissionOverrides(): Promise<void>;\n")),(0,p.kt)("b",null,"Returns:"),(0,p.kt)("p",null,"Promise","<","void",">"),(0,p.kt)("h2",{id:"example"},"Example"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"const context = browser.defaultBrowserContext();\ncontext.overridePermissions('https://example.com', ['clipboard-read']);\n// do stuff ..\ncontext.clearPermissionOverrides();\n\n")))}m.isMDXComponent=!0}}]);