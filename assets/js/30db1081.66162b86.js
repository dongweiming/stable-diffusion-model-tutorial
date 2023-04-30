"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[188],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var E=n.createContext({}),s=function(e){var t=n.useContext(E),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},u=function(e){var t=s(e.components);return n.createElement(E.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,E=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(i),b=a,m=c["".concat(E,".").concat(b)]||c[b]||p[b]||r;return i?n.createElement(m,l(l({ref:t},u),{},{components:i})):n.createElement(m,l({ref:t},u))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=b;var o={};for(var E in t)hasOwnProperty.call(t,E)&&(o[E]=t[E]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=i[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}b.displayName="MDXCreateElement"},8005:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>E,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=i(7462),a=(i(7294),i(3905));const r={sidebar_position:4},l=void 0,o={unversionedId:"basic/Extension",id:"basic/Extension",title:"Extension",description:"\u524d\u8a00",source:"@site/docs/basic/Extension.md",sourceDirName:"basic",slug:"/basic/Extension",permalink:"/docs/basic/Extension",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/basic/Extension.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"TextualInversion-Embedding",permalink:"/docs/basic/TextualInversion-Embedding"},next:{title:"Advanced",permalink:"/docs/category/advanced"}},E={},s=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:3},{value:"\u6269\u5c55\u5217\u8868",id:"\u6269\u5c55\u5217\u8868",level:3},{value:"\u6269\u5c55\u5b89\u88c5",id:"\u6269\u5c55\u5b89\u88c5",level:3},{value:"\u672c\u5730\u514b\u9686",id:"\u672c\u5730\u514b\u9686",level:4},{value:"\u901a\u8fc7UI\u754c\u9762\u300cInstall from URL\u300d",id:"\u901a\u8fc7ui\u754c\u9762install-from-url",level:4},{value:"\u901a\u8fc7UI\u754c\u9762\u7684\u300cAvailable\u300d",id:"\u901a\u8fc7ui\u754c\u9762\u7684available",level:4},{value:"\u5f00\u53d1\u6269\u5c55",id:"\u5f00\u53d1\u6269\u5c55",level:3}],u={toc:s},c="wrapper";function p(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,a.kt)("p",null,"\u8fd9\u8282\u4e3b\u8981\u4ecb\u7ecdstable-diffusion-webui\u63d0\u4f9b\u7684\u6269\u5c55(extension)\u529f\u80fd\u3002stable-diffusion-webui\u4e3a\u4e86\u53ea\u4fdd\u8bc1\u6838\u5fc3\u529f\u80fd\u5e76\u4fbf\u4e8e\u7ba1\u7406\uff0c\u5c06\u975e\u6838\u5fc3\u529f\u80fd\u89e3\u8026\u5e76\u8f6c\u4e3a\u6269\u5c55\u548c\u811a\u672c\u5f62\u5f0f\u63d0\u4f9b\uff0c\u8fd9\u5728\u5f88\u591a\u77e5\u540d\u9879\u76ee\u90fd\u6709\u76f8\u5173\u5b9e\u8df5\u3002\u8fd9\u8282\u5148\u4ecb\u7ecd\u6269\u5c55\u3002"),(0,a.kt)("h3",{id:"\u6269\u5c55\u5217\u8868"},"\u6269\u5c55\u5217\u8868"),(0,a.kt)("p",null,"\u9879\u76ee\u7684wiki\u6709\u4e13\u95e8\u7684\u9875\u9762: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Extensions"},"https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Extensions")),(0,a.kt)("p",null,"\u8fd9\u91cc\u9762\u5217\u51fa\u6765\u5f53\u524d\u5168\u90e8\u7684\u6269\u5c55\uff0c\u6bd4\u5982\u5e38\u7528\u7684:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/dtlnor/stable-diffusion-webui-localization-zh_CN%E3%80%82%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87%E6%B1%89%E5%8C%96"},"https://github.com/dtlnor/stable-diffusion-webui-localization-zh_CN\u3002\u7b80\u4f53\u4e2d\u6587\u6c49\u5316")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/journey-ad/sd-webui-bilingual-localization%E3%80%82%E5%8F%8C%E8%AF%AD%E6%B1%89%E5%8C%96"},"https://github.com/journey-ad/sd-webui-bilingual-localization\u3002\u53cc\u8bed\u6c49\u5316")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/civitai/sd_civitai_extension%E3%80%82C%E7%AB%99%E7%9A%84%E5%AE%98%E6%96%B9%E6%89%A9%E5%B1%95%EF%BC%8C%E5%8F%AF%E4%BB%A5%E8%87%AA%E5%8A%A8%E4%B8%8B%E8%BD%BD%E6%A8%A1%E5%9E%8B"},"https://github.com/civitai/sd_civitai_extension\u3002C\u7ad9\u7684\u5b98\u65b9\u6269\u5c55\uff0c\u53ef\u4ee5\u81ea\u52a8\u4e0b\u8f7d\u6a21\u578b")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/butaixianran/Stable-Diffusion-Webui-Civitai-Helper%E3%80%82%E5%8F%A6%E5%A4%96%E4%B8%80%E4%B8%AAC%E7%AB%99%E7%9A%84%E6%89%A9%E5%B1%95"},"https://github.com/butaixianran/Stable-Diffusion-Webui-Civitai-Helper\u3002\u53e6\u5916\u4e00\u4e2aC\u7ad9\u7684\u6269\u5c55")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/AUTOMATIC1111/stable-diffusion-webui-aesthetic-gradients%E3%80%82%E6%A0%B9%E6%8D%AE%E7%BE%8E%E5%AD%A6%E6%9D%83%E9%87%8D%E4%BC%98%E5%8C%96%E5%9B%BE%E7%89%87"},"https://github.com/AUTOMATIC1111/stable-diffusion-webui-aesthetic-gradients\u3002\u6839\u636e\u7f8e\u5b66\u6743\u91cd\u4f18\u5316\u56fe\u7247")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/hnmr293/sd-webui-llul%E3%80%82%E7%94%A8%E4%BA%8E%E7%BB%99%E5%B1%80%E9%83%A8%E5%A2%9E%E5%8A%A0%E7%BB%86%E8%8A%82%E3%80%82"},"https://github.com/hnmr293/sd-webui-llul\u3002\u7528\u4e8e\u7ed9\u5c40\u90e8\u589e\u52a0\u7ec6\u8282\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Scholar01/sd-webui-mov2mov%E3%80%82%E5%88%B6%E4%BD%9C%E8%A7%86%E9%A2%91%EF%BC%8C%E4%B9%8B%E5%90%8E%E6%88%91%E4%BB%AC%E8%BF%98%E4%BC%9A%E7%94%A8%E5%BE%97%E5%88%B0%E3%80%82"},"https://github.com/Scholar01/sd-webui-mov2mov\u3002\u5236\u4f5c\u89c6\u9891\uff0c\u4e4b\u540e\u6211\u4eec\u8fd8\u4f1a\u7528\u5f97\u5230\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/CiaraStrawberry/TemporalKit%E3%80%82%E7%94%A8%E4%BA%8E%E8%AE%A9%E8%A7%86%E9%A2%91%E9%A1%BA%E6%BB%91%EF%BC%8C%E4%B9%8B%E5%90%8E%E6%88%91%E4%BB%AC%E8%BF%98%E4%BC%9A%E7%94%A8%E5%BE%97%E5%88%B0%E5%AE%83+Ebsynth%E3%80%82"},"https://github.com/CiaraStrawberry/TemporalKit\u3002\u7528\u4e8e\u8ba9\u89c6\u9891\u987a\u6ed1\uff0c\u4e4b\u540e\u6211\u4eec\u8fd8\u4f1a\u7528\u5f97\u5230\u5b83+Ebsynth\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/canisminor1990/sd-webui-kitchen-theme%E3%80%82%E4%B8%80%E4%B8%AA%E8%87%AA%E5%AE%9A%E4%B9%89%E4%B8%BB%E9%A2%98%EF%BC%8C%E6%88%91%E8%BF%99%E9%87%8C%E5%8F%AA%E6%98%AF%E6%8F%90%E5%87%BA%E8%BF%99%E4%B8%AA%E6%80%9D%E8%B7%AF%EF%BC%8C%E5%85%B6%E5%AE%9E%E8%BF%98%E6%9C%89%E5%85%B6%E4%BB%96%E4%B8%BB%E9%A2%98%E5%B0%B1%E4%B8%8D%E5%88%97%E5%87%BA%E6%9D%A5%E4%BA%86%EF%BC%8C%E6%88%91%E4%B8%AA%E4%BA%BA%E8%BF%98%E6%98%AF%E6%AF%94%E8%BE%83%E4%B9%A0%E6%83%AF%E5%8E%9F%E7%89%88UI%E3%80%82"},"https://github.com/canisminor1990/sd-webui-kitchen-theme\u3002\u4e00\u4e2a\u81ea\u5b9a\u4e49\u4e3b\u9898\uff0c\u6211\u8fd9\u91cc\u53ea\u662f\u63d0\u51fa\u8fd9\u4e2a\u601d\u8def\uff0c\u5176\u5b9e\u8fd8\u6709\u5176\u4ed6\u4e3b\u9898\u5c31\u4e0d\u5217\u51fa\u6765\u4e86\uff0c\u6211\u4e2a\u4eba\u8fd8\u662f\u6bd4\u8f83\u4e60\u60ef\u539f\u7248UI\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/AUTOMATIC1111/stable-diffusion-webui-rembg%E3%80%82%E7%A7%BB%E9%99%A4%E5%9B%BE%E7%89%87%E8%83%8C%E6%99%AF%EF%BC%88%E5%AF%B9%EF%BC%8C%E5%8F%AF%E4%BB%A5%E7%94%A8SD%E6%8A%A0%E5%9B%BE%EF%BC%89%E3%80%82"},"https://github.com/AUTOMATIC1111/stable-diffusion-webui-rembg\u3002\u79fb\u9664\u56fe\u7247\u80cc\u666f\uff08\u5bf9\uff0c\u53ef\u4ee5\u7528SD\u62a0\u56fe\uff09\u3002"))),(0,a.kt)("h3",{id:"\u6269\u5c55\u5b89\u88c5"},"\u6269\u5c55\u5b89\u88c5"),(0,a.kt)("p",null,"\u76ee\u524d\u5b89\u88c5\u6269\u5c55\u6709\u4e09\u79cd\u65b9\u6cd5\uff0c\u6ca1\u6709\u63a8\u8350\u504f\u5411\uff0c\u6309\u4e2a\u4eba\u4e60\u60ef\u5373\u53ef\u3002"),(0,a.kt)("h4",{id:"\u672c\u5730\u514b\u9686"},"\u672c\u5730\u514b\u9686"),(0,a.kt)("p",null,"\u5982\u5b98\u65b9\u6587\u6863\u8bf4\u660e\uff0c\u76f4\u63a5\u514b\u9686\u4ee3\u7801\u5230extensions\u76ee\u5f55\u5373\u53ef"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui-aesthetic-gradients extensions/aesthetic-gradients\n")),(0,a.kt)("h4",{id:"\u901a\u8fc7ui\u754c\u9762install-from-url"},"\u901a\u8fc7UI\u754c\u9762\u300cInstall from URL\u300d"),(0,a.kt)("p",null,"\u70b9\u6700\u540e\u4e00\u4e2aTab\u300cExtensions\u300d\uff0c\u518d\u70b9\u300cInstall from URL\u300d\uff0c\u548c\u4e0a\u9762\u7684\u65b9\u6cd5\u5dee\u4e0d\u591a\uff0cUI\u7a0d\u5fae\u5c01\u88c5\u4e86\u4e00\u4e0b:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/841395/234532304-098d7487-d540-4fe0-8113-11b2850c8dca.png",alt:null})),(0,a.kt)("p",null,"\u7136\u540e\u70b9\u300cInstalled\u300d\u7684\u300cApply and restart UI\u300d\u91cd\u542fUI\u5c31\u53ef\u4ee5\u4e86\u3002"),(0,a.kt)("h4",{id:"\u901a\u8fc7ui\u754c\u9762\u7684available"},"\u901a\u8fc7UI\u754c\u9762\u7684\u300cAvailable\u300d"),(0,a.kt)("p",null,"\u4e5f\u662f\u6700\u540e\u4e00\u4e2aTab\u300cExtensions\u300d\uff0c\u518d\u70b9\u300cAvailable\u300d\uff0c\u9ed8\u8ba4\u662f\u5b98\u65b9wiki\u7684\u5404\u4e2a\u6269\u5c55\u7684json\uff0c\u70b9\u51fb\u300cLoad from\u300d\u5c31\u4f1a\u52a0\u8f7d\u8fd9\u4e9b\u6269\u5c55\uff0c\u628a\u5168\u90e8\u9009\u9879\u90fd\u53bb\u6389\u52fe\u9009\u5c31\u4f1a\u5217\u51fa\u5168\u90e8\u6269\u5c55\uff0c\u70b9\u51fb\u6269\u5c55\u884c\u6700\u540e\u4e00\u9879\u7684\u300cInstall\u300d\u5c31\u53ef\u4ee5\u5b89\u88c5\u4e86\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/841395/234593693-ed8c437a-3f30-4798-82dc-6ea808b76cb8.png",alt:null})),(0,a.kt)("h3",{id:"\u5f00\u53d1\u6269\u5c55"},"\u5f00\u53d1\u6269\u5c55"),(0,a.kt)("p",null,"\u53ef\u4ee5\u9075\u5faa",(0,a.kt)("a",{parentName:"p",href:"https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Developing-extensions"},"\u5b98\u65b9\u6587\u6863"),"\uff0c\u5176\u5b9e\u662f\u5f88\u7b80\u5355\u7684\uff0c\u6211\u8fd9\u91cc\u5c31\u4e0d\u91cd\u590d\u7c98\u8d34\u4e86\u3002"))}p.isMDXComponent=!0}}]);