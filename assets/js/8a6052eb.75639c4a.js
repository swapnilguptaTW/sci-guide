"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[63],{4137:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4904:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(4137));const o={sidebar_position:1},i="Getting Started",s={unversionedId:"GettingStarted",id:"GettingStarted",title:"Getting Started",description:"This open data project details various approaches on how to get the data sources from data providers and public sources that are required for SCI calculation. The Open Data project also provides the methodology and calculation guidelines for embodied emissions.",source:"@site/docs/GettingStarted.md",sourceDirName:".",slug:"/GettingStarted",permalink:"/GettingStarted",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/sci-data/tree/web/docs/GettingStarted.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tool based",permalink:"/E/Toolbased"},next:{title:"Functional Unit (R)",permalink:"/R/"}},l={},p=[],c={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"This open data project details various approaches on how to get the data sources from data providers and public sources that are required for SCI calculation. The Open Data project also provides the methodology and calculation guidelines for embodied emissions."),(0,n.kt)("p",null,"Please note that the data provided by the data providers are approximations intended to help calculate the SCI score. Once the SCI score is calculated, you can apply reduction principles across releases to reduce your carbon emissions and improve energy efficiency for your software application."),(0,n.kt)("h1",{id:"quick-guide"},"Quick Guide"),(0,n.kt)("p",null,"The quick guide shows you how to use SCI open data to get energy (E), embodied (M) emissions and carbon intensity (I) for a software application."),(0,n.kt)("p",null,"Imagine you want to calculate the SCI score for a software application running on a Google Cloud VM. The VM configuration is e2-standard-4 (4 CPU, 16GB RAM) and running in the US-East region.The software application scales by API and the average monthly requests are 20k. "),(0,n.kt)("p",null,"WE would calculate the SCI as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Energy - For energy, we check the ",(0,n.kt)("a",{parentName:"p",href:"https://sci-data.greensoftware.foundation/E"},"list of options")," and select ",(0,n.kt)("a",{parentName:"p",href:"https://sci-data.greensoftware.foundation/E/APIBased"},"API based techniques"),". Next, we choose the API vendor",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://www.climatiq.io/docs#cpu"},"Climatiq")," which calculates C02e emissions directly based on CPU utilisation data, VPCU and location details. We can get the CPU utilisation data from cloud metrics. The API uses publicly available average data for carbon intensity for a given electricity grid, based on the location and a mix of local energy sources. When we call the API, the C02e of the VCPU comes back as 1,329 gC02e")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Embodied emissions - For embodied emissions, we check the ",(0,n.kt)("a",{parentName:"p",href:"https://sci-data.greensoftware.foundation/M"},"list of options")," and select ",(0,n.kt)("a",{parentName:"p",href:"https://sci-data.greensoftware.foundation/M/EmbodiedDatabase"},"Lookup Embodied Database"),". When we look up the embodied emission of the server type e2-standard-4, we get 1230.3 kgCO\u2082eq")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"To calculate expected lifespan (EL), time reserved (TR), resource reserved (RR) and total resources (TR), check the ",(0,n.kt)("a",{parentName:"p",href:"https://sci-data.greensoftware.foundation/M/MSubCalculations"},"embodied calculations")," page for general guidelines. We find the following values:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The EL is 4 years (average lifespan for bare metal server)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The TR is 1 month (time when the VM server was running for our application)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The RR is 4 (number of CPUs for our VM server, which is e2-standard-4 (4 CPU, 16GB RAM))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The TR is 32 (total resources available in a bare metal server running e2-standard-4 instances)")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For TR we do a lookup for an e2-standard-4 machine in the ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/general-purpose-machines#e2-standard"},"Google documentation")," and see the maximum vCPU that is supported is 32 vCPU through the e2-standard-32 machine.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For R, we already have 20k API requests/per month")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"SCI Calculation"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"SCI Equation =  ((E*I) + M) per R")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"M = TE (TR/EL) (RR/TR)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"TE = Total Embodied Emissions (the sum of LCA emissions for hardware components which we calculated in step 2. We have only included the server/hardware component running our application, but there might be other supporting infrastructures like racks, cooling water resources that we have excluded).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"SCI Score = 0.226 gC02e per API Call."))))))}d.isMDXComponent=!0}}]);