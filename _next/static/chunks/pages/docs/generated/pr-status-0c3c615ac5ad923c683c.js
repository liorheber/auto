_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[63],{"0oBi":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.isDarkMode=function(){if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)return!0;return!1},t.useDarkMode=function(){var e=d.default.useState(!1),t=(0,r.default)(e,2),a=t[0],n=t[1];return(0,l.default)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)"),t=function(){n(window.matchMedia("(prefers-color-scheme: dark)").matches)};return t(),e.addListener(t),function(){e.removeListener(t)}}),[]),a};var r=n(a("nxTg")),d=n(a("mXGw")),l=n(a("YO29"))},"63Ad":function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"6f/q":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("RiSW")),d=n(a("mXGw")),l=n(a("pWCa")),c=a("I08b"),o=a("GDok"),i=a("nZpd"),u=a("AFBu"),s=a("0oBi"),m=function(e){var t=e.children,a=(0,r.default)(e,["children"]),n=d.default.useState(!1);d.default.useEffect((function(){if("undefined"!==typeof document)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){"/"===e.key&&(document.getElementById("search").focus(),e.preventDefault())}}),[]);var m=(0,s.useDarkMode)();return d.default.createElement(i.MobileMenuContext.Provider,{value:a.menuState||n},d.default.createElement(l.default,null,d.default.createElement("link",{rel:"shortcut icon",media:"(prefers-color-scheme:dark)",href:(0,u.formatPath)(m?"favicon-dark.png":"favicon.png")})),d.default.createElement(c.SkipNavLink,null),d.default.createElement("div",{id:"ignite",className:"min-h-screen flex flex-col bg-white dark:bg-gray-1000"},d.default.createElement(o.NavBar,{sections:JSON.parse('["docs","blog"]'),hasHomePage:"true"}),t))};t.default=m},"6saU":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/generated/pr-status",function(){return a("obWW")}])},AFBu:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.formatPath=function(e){return r.default.join("/auto","/".concat(e.replace(/\.mdx$/,"")))},t.postFixHTML=function(e){return e;if(r.default.basename(e).includes("#"))return e.replace("#",".html#");return"".concat(e,".html")};var r=n(a("O2/E"))},C3pV:function(e,t,a){"use strict";(function(e){var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.Sidebar=t.SidebarActiveItem=void 0;var r=n(a("OvAC")),d=n(a("RiSW")),l=n(a("nxTg")),c=n(a("mXGw")),o=n(a("5dyF")),i=n(a("pWCa")),u=n(a("O2/E")),s=n(a("PDtE")),m=a("/FXl"),f=a("dAGg"),p=a("nZpd"),b=a("AFBu");function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(Object(a),!0).forEach((function(t){(0,r.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var h=c.default.createContext({pathname:"",sidebarFileLocation:""});t.SidebarActiveItem=h;var O=function(e){var t=e.href,a=e.children,n=c.default.useContext(h),r=(0,m.useMDXComponents)().SidebarLink,d=u.default.join(n.sidebarFileLocation,t),l=t;return n.sidebarFileLocation&&((l=d).endsWith("/index")&&(l=l.replace("/index","")),l.endsWith("/")&&(l=l.slice(0,-1))),c.default.createElement(o.default,{passHref:!0,href:(0,b.postFixHTML)(l)},c.default.createElement(r,{isActive:n.pathname.replace("/index","")===(0,b.formatPath)(l)},a))};t.Sidebar=function(t){var n=t.links,r=t.folder,o=c.default.useContext(p.MobileMenuContext),x=(0,l.default)(o,1)[0],j="/".concat(r),v=function(e){try{return a("f+ue")("./pages"+e+"/_sidebar.mdx").default}catch(t){try{return a("NDOZ")("./pages"+e+"/_sidebar.js").default}catch(t){}}}(j),N=function(t){var a=(0,f.useRouter)(),n="phase-production-build"!==e.env.NEXT_PHASE&&a.pathname.includes("/auto")?u.default.relative("/auto",a.pathname):u.default.relative("/",a.pathname),r=t.find((function(e){return e.__resourcePath.replace(".mdx","")===n}));return r||(r=t.find((function(e){var t=e.__resourcePath.replace(".mdx","");return t.endsWith("index")&&a.pathname.includes(t.replace("/index",""))}))),{title:r.title||"auto",pathname:(0,b.formatPath)(r.__resourcePath)}}(n),E=(0,m.useMDXComponents)(),y=E.SidebarItemWrapper,w=(E.SidebarLink,E.SidebarTitle),k=E.SidebarDivider,_=E.SidebarList,M=E.Sidebar,P=(0,d.default)(E,["SidebarItemWrapper","SidebarLink","SidebarTitle","SidebarDivider","SidebarList","Sidebar"]);return c.default.createElement(h.Provider,{value:g(g({},N),{},{sidebarFileLocation:v?j:""})},c.default.createElement(m.MDXProvider,{components:g(g({},P),{},{li:y,ul:_,a:O,p:w,hr:k})},c.default.createElement(i.default,null,c.default.createElement("title",null,N.title.replace(/\\`/g,"`"))),c.default.createElement(M,{className:(0,s.default)(!x&&"hidden","lg:block")},v?c.default.createElement(v,null):c.default.createElement(_,null,n.map((function(e){return c.default.createElement(y,{key:e.__resourcePath},c.default.createElement(O,{href:e.__resourcePath},e.title))}))))))}}).call(this,a("5IsQ"))},GDok:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.NavBar=void 0;var r=n(a("nxTg")),d=n(a("8VmE")),l=n(a("RiSW")),c=n(a("mXGw")),o=n(a("5dyF")),i=a("V5Fo"),u=a("/FXl"),s=n(a("PDtE")),m=a("nZpd"),f=a("AFBu"),p=function(e){var t=e.className,a=(0,l.default)(e,["className"]);return c.default.createElement("svg",(0,d.default)({className:(0,s.default)("fill-current w-5 h-5",t),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},a),c.default.createElement("path",{d:"M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"}))},b=function(){var e=(0,u.useMDXComponents)().SearchInput;return c.default.createElement("div",{className:"h-full flex items-center w-full lg:w-auto lg:flex-1 lg:mr-4 lg:pr-4"},c.default.createElement(e,null))};t.NavBar=function(e){var t=e.sections,a=e.hasHomePage,n=c.default.useContext(m.MobileMenuContext),d=(0,r.default)(n,2),l=d[0],s=d[1],x=(0,u.useMDXComponents)(),g=x.Logo,h=x.NavBarWrapper,O=x.NavBar,j=x.NavBarItem,v=x.MobileMenuButton;return c.default.createElement(c.default.Fragment,null,c.default.createElement(h,null,c.default.createElement(O,null,a?c.default.createElement(o.default,{passHref:!0,href:(0,f.postFixHTML)("/index")},c.default.createElement(g,null)):c.default.createElement(g,null),c.default.createElement("div",{className:"w-full h-full flex items-center lg:flex flex-1 lg:pl-12 lg:pr-6 lg:mx-auto"},c.default.createElement(b,null),c.default.createElement(v,{open:l,setOpen:s,className:"lg:hidden"}),c.default.createElement("div",{className:"hidden lg:flex h-full"},t.map((function(e){return c.default.createElement(o.default,{passHref:!0,key:e,href:(0,f.postFixHTML)("/".concat(e))},c.default.createElement(j,null,(0,i.titleCase)(e)))})),c.default.createElement(j,{href:"https://github.com/intuit/auto",target:"_blank","aria-label":"Open on GitHub"},c.default.createElement(p,null)))))),l&&c.default.createElement("div",{className:"lg:hidden"},t.map((function(e){return c.default.createElement(o.default,{passHref:!0,key:e,href:(0,f.postFixHTML)("/".concat(e))},c.default.createElement(j,null,(0,i.titleCase)(e)))})),c.default.createElement(j,{href:"https://github.com/intuit/auto",target:"_blank"},c.default.createElement(p,{className:"mr-2"}),"Open on GitHub")))}},nZpd:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.MobileMenuContext=void 0;var r=n(a("mXGw")).default.createContext([!1,function(){}]);t.MobileMenuContext=r},obWW:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return u})),a.d(t,"default",(function(){return f}));var n=a("Fcif"),r=a("dV/x"),d=a("mXGw"),l=a.n(d),c=a("/FXl"),o=a("pu0P"),i=a.n(o),u=(l.a.createElement,{title:"`pr-status`",layout:"docs",description:void 0,date:null,author:"",email:"",__resourcePath:"docs/generated/pr-status.mdx",__scans:{}}),s={frontMatter:u},m=i.a;function f(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.mdx)(m,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"Set the status on a PR commit"),Object(c.mdx)("h2",{id:"options"},Object(c.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#options"}),"Options")),Object(c.mdx)("table",null,Object(c.mdx)("thead",{parentName:"table"},Object(c.mdx)("tr",{parentName:"thead"},Object(c.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Flag"),Object(c.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.mdx)("tbody",{parentName:"table"},Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.mdx)("inlineCode",{parentName:"td"},"--sha")),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specify a custom git sha. Defaults to the HEAD for a git repo in the current repository")),Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.mdx)("inlineCode",{parentName:"td"},"--pr")),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"PR to set the status on. Detects PR number in CI")),Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.mdx)("inlineCode",{parentName:"td"},"--url")),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"URL to associate with this status")),Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.mdx)("inlineCode",{parentName:"td"},"--state")),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"State of the PR. ","['pending', 'success', 'error', 'failure']")),Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.mdx)("inlineCode",{parentName:"td"},"--description")),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"A description of the status")),Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.mdx)("inlineCode",{parentName:"td"},"--context")),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"A string label to differentiate this status from others")),Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.mdx)("inlineCode",{parentName:"td"},"--dry-run"),", ",Object(c.mdx)("inlineCode",{parentName:"td"},"-d")),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Report what command will do but do not actually do anything")))),Object(c.mdx)("h2",{id:"examples"},Object(c.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#examples"}),"Examples")),Object(c.mdx)("pre",{className:"language-bash"},Object(c.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"auto pr-status ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"\\"),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"\\")," \n   --state pending ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"\\"),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"\\")," \n   --description ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"Build still running..."')," ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"\\"),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"\\")," \n   --context build-check\n")))}f.isMDXComponent=!0},pu0P:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("nxTg")),d=n(a("mXGw")),l=n(a("O2/E")),c=a("/FXl"),o=n(a("PDtE")),i=a("I08b"),u=a("C3pV"),s=n(a("6f/q")),m=n(a("x3GE")),f=/([^`]*)`([^`]*)`(.*)/m;var p=function(e){var t=e.children,a=e.frontMatter,n=d.default.useState(!1),p=(0,r.default)(n,2),b=p[0],x=p[1],g=(0,c.useMDXComponents)(),h=a.__resourcePath.split("/")[0],O=(0,m.default)(),j=JSON.parse('["index.mdx","blog/both-worlds.mdx","blog/npm-canary-scope.mdx","blog/pr-in-progress.mdx","blog/using-shipit.mdx","blog/v8.mdx","blog/why.mdx","docs/_sidebar.mdx","docs/index.mdx","docs/build-platforms/circleci.mdx","docs/build-platforms/github-actions.mdx","docs/build-platforms/jenkins.mdx","docs/build-platforms/travis.mdx","docs/configuration/autorc.mdx","docs/configuration/non-npm.mdx","docs/configuration/plugins.mdx","docs/configuration/troubleshooting.mdx","docs/generated/all-contributors.mdx","docs/generated/brew.mdx","docs/generated/canary.mdx","docs/generated/changelog.mdx","docs/generated/chrome.mdx","docs/generated/cocoapods.mdx","docs/generated/comment.mdx","docs/generated/conventional-commits.mdx","docs/generated/crates.mdx","docs/generated/create-labels.mdx","docs/generated/docker.mdx","docs/generated/exec.mdx","docs/generated/first-time-contributor.mdx","docs/generated/gem.mdx","docs/generated/gh-pages.mdx","docs/generated/git-tag.mdx","docs/generated/gradle.mdx","docs/generated/info.mdx","docs/generated/init.mdx","docs/generated/jira.mdx","docs/generated/label.mdx","docs/generated/latest.mdx","docs/generated/magic-zero.mdx","docs/generated/maven.mdx","docs/generated/microsoft-teams.mdx","docs/generated/next.mdx","docs/generated/npm.mdx","docs/generated/omit-commits.mdx","docs/generated/omit-release-notes.mdx","docs/generated/pr-body-labels.mdx","docs/generated/pr-body.mdx","docs/generated/pr-check.mdx","docs/generated/pr-status.mdx","docs/generated/release.mdx","docs/generated/released.mdx","docs/generated/s3.mdx","docs/generated/shipit.mdx","docs/generated/slack.mdx","docs/generated/twitter.mdx","docs/generated/upload-assets.mdx","docs/generated/version.mdx","docs/generated/vscode.mdx","docs/plugins/changelog-hooks.mdx","docs/plugins/configuration-hooks.mdx","docs/plugins/hook-api-docs.mdx","docs/plugins/init-hooks.mdx","docs/plugins/log-parse-hooks.mdx","docs/plugins/release-lifecycle-hooks.mdx","docs/plugins/writing-plugins.mdx","docs/plugins/writing-publishing-plugins.mdx","docs/welcome/getting-started.mdx","docs/welcome/quick-merge.mdx"]').map((function(e){return l.default.relative("./",e)})).filter((function(e){return e.startsWith(h)})).map((function(e){return O.find((function(t){return t.__resourcePath===e}))}));return d.default.createElement(s.default,{menuState:[b,x]},d.default.createElement("div",{className:"flex-1 w-full lg:max-w-6xl mx-auto flex"},d.default.createElement(u.Sidebar,{links:j,folder:h}),d.default.createElement(i.SkipNavContent,null),d.default.createElement("main",{className:(0,o.default)("DocSearch-content","pt-8 pb-16 px-4 sm:px-6 xl:px-12 lg:mx-auto w-full","flex-1 overflow-hidden","lg:block",b&&"hidden")},a.title&&d.default.createElement(g.h1,null,function(e,t){if(t){for(var a=[],n=t.replace(/\\`/g,"`");f.test(n);){var l=n.match(f),c=(0,r.default)(l,4),o=c[1],i=c[2],u=c[3];a.push(o),a.push(d.default.createElement(e.inlineCode,null,i)),n=u}return a.push(n),d.default.createElement("div",null,a)}}(g,a.title)),t)))};t.default=p},x3GE:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=[];try{var r=a("jmz1");n=r.keys().map(r)}catch(l){}var d=function(){try{return n}catch(l){return[]}};t.default=d}},[["6saU",0,1,2,3,4]]]);