import e,{useState as t,useMemo as r,useEffect as n,createElement as a,cloneElement as o,Children as i}from"react";import{Redirect as l,useLocation as c,useHistory as s}from"react-router";import{getResources as u,AppBar as m,MenuItemLink as p,Layout as d,useGetIdentity as f,Notification as h,TopToolbar as b,ListButton as g,Create as y,ShowButton as v,Edit as E,useListContext as w,useResourceDefinition as C,Link as P,Button as k,CreateButton as x,ExportButton as O,RefreshButton as N,List as S,Pagination as L,SimpleList as j,linkToRecord as T,useGetList as I,FilterList as A,FilterListItem as B,useTranslate as R,getFieldLabelTranslationArgs as F,ImageField as D,useShowContext as _,EditButton as M,Show as W,sanitizeListRestProps as U,useCreate as V,useNotify as z,ReferenceInput as q,FormWithRedirect as H,TextInput as G,required as $,SaveButton as J}from"react-admin";import{Grid as K,Button as Q,TextField as X,Select as Y,MenuItem as Z,makeStyles as ee,Hidden as te,ListItemIcon as re,Typography as ne,Tooltip as ae,Collapse as oe,List as ie,useMediaQuery as le,Box as ce,Container as se,ThemeProvider as ue,createMuiTheme as me,Accordion as pe,AccordionSummary as de,AccordionDetails as fe,Tabs as he,Tab as be,Card as ge,CardActionArea as ye,CardMedia as ve,CardContent as Ee,CircularProgress as we,LinearProgress as Ce,Avatar as Pe,Dialog as ke,DialogTitle as xe,DialogContent as Oe,DialogActions as Ne}from"@material-ui/core";import{Form as Se,Field as Le,useForm as je}from"react-final-form";import{useHistory as Te,useLocation as Ie,Link as Ae}from"react-router-dom";import{useSelector as Be,shallowEqual as Re}from"react-redux";import Fe from"@material-ui/icons/ViewList";import De from"@material-ui/icons/ExpandMore";import{createMuiTheme as _e,ThemeProvider as Me,makeStyles as We}from"@material-ui/core/styles";import Ue from"react-markdown";import Ve from"@material-ui/icons/Add";import ze from"@material-ui/icons/Cancel";var qe=function(t){var r=t.record,n=t.typesMap;if(r){Array.isArray(r.type)||(r.type=[r.type]);var a=Object.keys(n).find((function(e){return r.type.includes(n[e])}));if(a)return e.createElement(l,{to:"/".concat(a,"/").concat(encodeURIComponent(r.id),"/show")})}return null};function He(e){return(He="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ge(e,t,r,n,a,o,i){try{var l=e[o](i),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,a)}function $e(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Je(){return(Je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Ke(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Qe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ke(Object(r),!0).forEach((function(t){$e(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ke(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Xe(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function Ye(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,t)||et(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ze(e){return function(e){if(Array.isArray(e))return tt(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||et(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function et(e,t){if(e){if("string"==typeof e)return tt(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?tt(e,t):void 0}}function tt(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var rt=function(t){var r=t.input,n=Xe(t,["input"]);return e.createElement(X,Je({},r,n))},nt=function(t){var r=t.input,n=Xe(t,["input"]),a=Be(u,Re);return e.createElement(Y,Je({},r,n),a.filter((function(e){return e.hasList})).map((function(t){return e.createElement(Z,{value:t.name,key:t.name},t.options.label)})))},at=function(){var t=Te(),r=Ie().pathname.match(/^\/([^/]+)/),n=r?r[1]:"Organization";return e.createElement(Se,{onSubmit:function(e){var r=e.filter,n=e.type;r?t.push("/".concat(n,"?filter=").concat(encodeURIComponent('{"q": "'.concat(r,'"}')))):t.push("/".concat(n))},initialValues:{type:n},render:function(t){var r=t.handleSubmit;return e.createElement("form",{onSubmit:r},e.createElement(K,{container:!0,spacing:2},e.createElement(K,{item:!0,xs:5},e.createElement(Le,{name:"filter",component:rt,placeholder:"Rechercher...",fullWidth:!0})),e.createElement(K,{item:!0,xs:5},e.createElement(Le,{name:"type",component:nt,fullWidth:!0})),e.createElement(K,{item:!0,xs:2},e.createElement(Q,{variant:"outlined",type:"submit",fullWidth:!0},"Hop"))))}})},ot=ee({toolbar:{height:56},spacer:{flex:1},searchForm:{flex:2}}),it=function(t){var r=ot();return e.createElement(m,Je({},t,{classes:Qe({toolbar:r.toolbar},t.classes),color:"primary"}),e.createElement("span",{className:r.spacer}),e.createElement(te,{only:"xs"},e.createElement("span",{className:r.searchForm},e.createElement(at,null))),e.createElement("span",{className:r.spacer}))},lt=ee((function(e){return{icon:{minWidth:e.spacing(5)},sidebarIsOpen:{"& a":{paddingLeft:e.spacing(4),transition:"padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms"}},sidebarIsClosed:{"& a":{paddingLeft:e.spacing(2),transition:"padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms"}}}})),ct=function(t){var r=t.handleToggle,n=t.sidebarIsOpen,a=t.isOpen,o=t.name,i=t.icon,l=t.children,c=t.dense,s=lt(),u=e.createElement(Z,{dense:c,button:!0,onClick:r},e.createElement(re,{className:s.icon},a?e.createElement(De,null):i),e.createElement(ne,{variant:"inherit",color:"textSecondary"},o));return e.createElement(e.Fragment,null,n||a?u:e.createElement(ae,{title:o,placement:"right"},u),e.createElement(oe,{in:a,timeout:"auto",unmountOnExit:!0},e.createElement(ie,{dense:c,component:"div",disablePadding:!0,className:n?s.sidebarIsOpen:s.sidebarIsClosed},l)))},st=function(t){var r=t.resource,n=t.onClick,a=t.open;return e.createElement(p,{to:"/".concat(r.name),primaryText:r.options&&r.options.label||r.name,leftIcon:r.icon?e.createElement(r.icon,null):e.createElement(DefaultIcon,null),onClick:n,sidebarIsOpen:a})},ut=ee({appFrame:{marginTop:56},title:{position:"absolute",top:80,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}),mt=function(t){var r=t.appBar,n=t.menu,a=(t.userMenu,t.children),o=Xe(t,["appBar","menu","userMenu","children"]),i=ut();return e.createElement(d,Je({},o,{classes:{appFrame:i.appFrame},appBar:r,menu:n}),e.createElement(ne,{variant:"h4",color:"primary",className:i.title,id:"react-admin-title",component:"h1"}),a)};mt.defaultProps={appBar:it,menu:function(a){var o=a.onMenuClick,i=a.logout,l=a.dense,s=void 0!==l&&l,m=a.openAll,p=void 0!==m&&m,d=le((function(e){return e.breakpoints.down("xs")})),f=Be((function(e){return e.admin.ui.sidebarOpen})),h=Be(u),b=c().pathname.match(/^\/([^/]+)/),g=b?b[1]:null,y=Ye(t({}),2),v=y[0],E=y[1],w=r((function(){var e=h.reduce((function(e,t){return t.options&&t.options.parent&&e.push(t.options.parent),e}),[]);return h.filter((function(t){return e.includes(t.name)}))}),[h]);return n((function(){var e=h.find((function(e){return e.name===g})),t=w.find((function(t){return t.name===e.options.parent})),r=w.reduce((function(e,r){return e[r.name]=p||t&&r.name===t.name,e}),{});E((function(e){return Qe(Qe({},r),e)}))}),[w,h,g,p]),e.createElement(ce,{mt:2},w.map((function(t){return e.createElement(ct,{key:t.name,handleToggle:function(){return e=t.name,void E((function(t){return Qe(Qe({},t),{},$e({},e,!t[e]))}));var e},isOpen:v[t.name],sidebarIsOpen:f,name:t.options&&t.options.label||t.name,icon:t.icon?e.createElement(t.icon,null):e.createElement(Fe,null),dense:s},h.filter((function(e){return e.hasList&&e.options.parent===t.name})).map((function(t){return e.createElement(st,{key:t.name,resource:t,onClick:o,open:f})})))})),h.filter((function(e){return e.hasList&&(!e.options||!e.options.parent)})).map((function(t){return e.createElement(st,{key:t.name,resource:t,onClick:o,open:f})})),d&&i)}};var pt=ee((function(e){return{header:{position:"relative",height:65},logo:$e({position:"absolute",top:-15,height:110,width:110},e.breakpoints.down("xs"),{position:"relative",top:0,width:65,height:65})}})),dt=function(t){var r=t.userMenu,n=t.logout,a=pt(),o=f().identity;return e.createElement(ce,{bgcolor:"primary.main"},e.createElement(se,{maxWidth:"lg",className:a.header},e.createElement(K,{container:!0},e.createElement(K,{item:!0,xs:12,sm:r?3:6},e.createElement(Ae,{to:"/"},e.createElement("img",{src:process.env.PUBLIC_URL+"/logo192.png",alt:"SemApps",className:a.logo}))),e.createElement(te,{xsDown:!0},e.createElement(K,{item:!0,sm:6},e.createElement(ce,{pt:2},e.createElement(at,null)))),r&&e.createElement(K,{item:!0,sm:3,align:"right"},e.createElement(ce,{pt:o&&""!==o.id?2:1},e.cloneElement(r,{logout:n}))))))},ft=function(){var e=Ie().pathname;return n((function(){window.scrollTo(0,0)}),[e]),null},ht=function(t){var r=t.appBar,n=t.title,a=t.open,o=t.logout,i=t.theme,l=t.children,c=le(i.breakpoints.down("xs"));return e.createElement(ue,{theme:i},e.createElement(ft,null),e.createElement(r,{title:n,open:a,logout:o}),e.createElement(se,{maxWidth:"lg",disableGutters:c},e.createElement(ce,{mb:{xs:0,sm:5}},l)),e.createElement(h,null))};ht.defaultProps={appBar:dt};var bt=me(),gt=me({palette:{primary:{main:"#28ccfb",contrastText:"#fff"},secondary:{main:"#bcef5b"},grey:{main:"#e0e0e0"}},typography:{details:{fontSize:8}},overrides:{RaChipField:{chip:{marginLeft:0,marginTop:0,marginRight:8,marginBottom:8}},RaShow:{card:$e({padding:25},bt.breakpoints.down("xs"),{padding:15})},RaList:{content:$e({padding:25},bt.breakpoints.down("xs"),{padding:15})},RaListToolbar:{toolbar:$e({},bt.breakpoints.down("xs"),{height:0,minHeight:0})},RaSingleFieldList:{root:{marginTop:0,marginBottom:0}},MuiTab:{labelIcon:{paddingTop:0}}}}),yt=function(t){var r=t.basePath,n=t.className,a=t.data,o=t.hasList,i=Xe(t,["basePath","className","data","hasList"]);return e.createElement(b,Je({className:n},i),o&&e.createElement(g,{basePath:r,record:a}))},vt=function(t){return e.createElement(y,Je({actions:e.createElement(yt,null),redirect:"show"},t))},Et=function(t){var r=t.basePath,n=t.className,a=t.data,o=t.hasList,i=t.hasShow,l=Xe(t,["basePath","className","data","hasList","hasShow"]);return e.createElement(b,Je({className:n},l),o&&e.createElement(g,{basePath:r,record:a}),i&&e.createElement(v,{basePath:r,record:a}))},wt=function(t){return e.createElement(E,Je({actions:e.createElement(Et,null)},t))},Ct=ee((function(e){return{root:{width:"100%"},accordion:{backgroundColor:e.palette.grey[200]},accordionSummary:{minHeight:"0 !important","& div":{margin:"0 !important"}},accordionDetails:{display:"block","& p":{margin:0}},date:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary,flexBasis:"15%",flexShrink:0},title:{fontSize:e.typography.pxToRem(15)}}})),Pt=function(t){var r=t.date,n=t.title,a=t.content,o=Ct(),i=w(),l=i.ids,c=i.data;return e.createElement("div",{className:o.root},l.map((function(t,i){var l=r&&new Date(r(c[t])),s=n&&n(c[t]),u=a&&a(c[t]);return e.createElement(pe,{className:o.accordion},e.createElement(de,{expandIcon:e.createElement(De,null),"aria-controls":"panel".concat(i,"-content"),id:"panel".concat(i,"-header"),className:o.accordionSummary},l&&e.createElement(ne,{className:o.date},l.toLocaleDateString()),e.createElement(ne,{className:o.title},s)),e.createElement(fe,{className:o.accordionDetails},"object"===He(u)?u:e.createElement(ne,null,u)))})))},kt=function(t){var r=t.bulkActions,n=t.basePath,a=t.currentSort,o=t.displayedFilters,i=t.exporter,l=t.filters,s=t.filterValues,u=t.onUnselectItems,m=t.resource,p=t.selectedIds,d=t.showFilter,f=t.total,h=t.views,g=t.currentView,y=t.setView,v=le((function(e){return e.breakpoints.down("xs")})),E=C({}),w=new URLSearchParams(c().search);return e.createElement(b,null,h&&Object.entries(h).filter((function(e){return Ye(e,1)[0]!==g})).map((function(t){var r=Ye(t,2),n=r[0],a=r[1];return w.set("view",n),w.set("page",1),w.set("perPage",a.perPage),a.sort&&(w.set("sort",a.sort.field),w.set("order",a.sort.order)),e.createElement(P,{key:n,to:"?"+w.toString()},e.createElement(k,{onClick:function(){return y(n)},label:a.label},e.createElement(a.icon)))})),r&&e.cloneElement(r,{basePath:n,filterValues:s,resource:m,selectedIds:p,onUnselectItems:u}),l&&e.cloneElement(l,{resource:m,showFilter:d,displayedFilters:o,filterValues:s,context:"button"}),E.hasCreate&&e.createElement(x,{basePath:n}),!v&&e.createElement(O,{disabled:0===f,resource:m,sort:a,filter:s,exporter:i}),!v&&e.createElement(N,null))},xt=function(t){return e.createElement(L,Je({rowsPerPageOptions:[25,50,100]},t))},Ot=function(t){var r=t.children,n=Xe(t,["children"]);return e.createElement(S,Je({actions:e.createElement(kt,null),sort:{field:"pair:label",order:"DESC"},pagination:e.createElement(xt,null),perPage:50},n),r)},Nt=function(r){r.children;var n=r.views,a=Xe(r,["children","views"]),o=new URLSearchParams(c().search),i=o.has("view")?o.get("view"):Object.keys(n)[0],l=Ye(t(i),2),s=l[0],u=l[1];return e.createElement(S,Je({actions:e.createElement(kt,{views:n,currentView:s,setView:u}),pagination:n[s].pagination,perPage:n[i].perPage,sort:n[i].sort},a),n[s].list)},St=ee((function(e){return{tab:{minWidth:55}}})),Lt=function(){var t=s(),r=St(),n=c().pathname.match(/^\/([^/]+)/),a=n?n[1]:null,o=Be(u,Re),i=le((function(e){return e.breakpoints.down("xs")}));return e.createElement(he,{value:a,onChange:function(e,r){return t.push("/"+r)},indicatorColor:"primary",textColor:"primary",scrollButtons:"auto"},o.filter((function(e){return e.hasList})).map((function(t){return e.createElement(be,{key:t.name,icon:e.createElement(t.icon),label:i?void 0:t.options.label,value:t.name,className:r.tab})})))},jt=_e({overrides:{MuiListItem:{root:{padding:15,paddingBottom:15,paddingTop:15,marginBottom:10,borderStyle:"solid",borderColor:"#e0e0e0",borderWidth:1}}}}),Tt=function(t){return e.createElement(Me,{theme:jt},e.createElement(j,t))};function It(e,t){return e(t={exports:{}},t.exports),t.exports}var At,Bt=It((function(t,r){Object.defineProperty(r,"__esModule",{value:!0});var n,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=(n=e)&&n.__esModule?n:{default:n};var c={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0},s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.reCalculateColumnCount=r.reCalculateColumnCount.bind(r),r.reCalculateColumnCountDebounce=r.reCalculateColumnCountDebounce.bind(r);var n=void 0;return n=r.props.breakpointCols&&r.props.breakpointCols.default?r.props.breakpointCols.default:parseInt(r.props.breakpointCols)||2,r.state={columnCount:n},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"componentDidUpdate",value:function(){this.reCalculateColumnCount()}},{key:"componentWillUnmount",value:function(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"reCalculateColumnCountDebounce",value:function(){var e=this;window&&window.requestAnimationFrame?(window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame((function(){e.reCalculateColumnCount()}))):this.reCalculateColumnCount()}},{key:"reCalculateColumnCount",value:function(){var e=window&&window.innerWidth||1/0,t=this.props.breakpointCols;"object"!==(void 0===t?"undefined":o(t))&&(t={default:parseInt(t)||2});var r=1/0,n=t.default||2;for(var a in t){var i=parseInt(a);i>0&&e<=i&&i<r&&(r=i,n=t[a])}n=Math.max(1,parseInt(n)||1),this.state.columnCount!==n&&this.setState({columnCount:n})}},{key:"itemsInColumns",value:function(){for(var e=this.state.columnCount,t=new Array(e),r=[].concat(this.props.children||[]),n=0;n<r.length;n++){var a=n%e;t[a]||(t[a]=[]),t[a].push(r[n])}return t}},{key:"renderColumns",value:function(){var e=this.props,t=e.column,r=e.columnAttrs,n=void 0===r?{}:r,o=e.columnClassName,i=this.itemsInColumns(),c=100/i.length+"%",s=o;"string"!=typeof s&&(this.logDeprecated('The property "columnClassName" requires a string'),void 0===s&&(s="my-masonry-grid_column"));var u=a({},t,n,{style:a({},n.style,{width:c}),className:s});return i.map((function(e,t){return l.default.createElement("div",a({},u,{key:t}),e)}))}},{key:"logDeprecated",value:function(e){console.error("[Masonry]",e)}},{key:"render",value:function(){var e=this.props,t=(e.children,e.breakpointCols,e.columnClassName,e.columnAttrs,e.column,e.className),r=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["children","breakpointCols","columnClassName","columnAttrs","column","className"]),n=t;return"string"!=typeof t&&(this.logDeprecated('The property "className" requires a string'),void 0===t&&(n="my-masonry-grid")),l.default.createElement("div",a({},r,{className:n}),this.renderColumns())}}]),t}(l.default.Component);s.defaultProps=c,r.default=s})),Rt=(At=Bt)&&At.__esModule&&Object.prototype.hasOwnProperty.call(At,"default")?At.default:At,Ft=ee((function(){return{grid:{display:"flex",marginLeft:-20,width:"auto"},column:{paddingLeft:20,backgroundClip:"padding-box"},card:{marginBottom:20},media:{height:0,paddingTop:"56.25%"}}})),Dt=function(t){var r=t.image,n=t.content,a=t.breakpointCols,o=t.linkType,i=Ft(),l=w(),c=l.ids,s=l.data,u=l.basePath;return e.createElement(Rt,{breakpointCols:a,className:i.grid,columnClassName:i.column},c.map((function(t){var a="function"==typeof r?r(s[t]):r;return e.createElement(ge,{key:t,className:i.card},e.createElement(P,{to:T(u,t)+"/"+o},e.createElement(ye,null,a&&e.createElement(ve,{className:i.media,image:a}),n&&e.createElement(Ee,null,n(s[t])))))})))};Dt.defaultProps={breakpointCols:{default:3,900:2,450:1},linkType:"edit"};var _t=function(t){var r=t.reference,n=t.source,a=t.limit,o=t.sort,i=t.filter,l=t.label,c=t.icon,s=I(r,{page:1,perPage:a},o,i),m=s.data,p=s.ids,d=Be(u,Re).filter((function(e){return(null==e?void 0:e.name)===r}))[0];return e.createElement(A,{label:l||d.options.label,icon:c||e.createElement(d.icon)},p.map((function(t){return e.createElement(B,{key:t,label:m[t]["pair:label"],value:$e({},n,t)})})))};_t.defaultProps={limit:20};var Mt=ee((function(){return{rightLabel:{color:"grey",textAlign:"right",borderBottom:"1px dashed #c0c0c0",paddingBottom:10,marginBottom:10}}})),Wt=function(t){var r=t.label,n=t.children,a=t.record,o=t.resource,i=t.source,l=t.basePath,c=Mt(),s=R();return a[i]?e.createElement(ce,{mb:4},e.createElement(ce,{className:c.rightLabel},s.apply(void 0,Ze(F({label:r,resource:o,source:i})))),e.createElement(ce,{m:0},e.cloneElement(n,{record:a,resource:o,basePath:l}))):null},Ut=function(t){var r=t.basePath,n=t.children,a=t.record,o=t.resource,i=t.showLabel,l=Xe(t,["basePath","children","record","resource","showLabel"]);return e.createElement(K,Je({item:!0},l),e.Children.map(n,(function(t){return t&&e.isValidElement(t)?e.createElement("div",{key:t.props.source},t.props.addLabel&&i?e.createElement(Wt,{record:a,resource:o,basePath:r,label:t.props.label,source:t.props.source,disabled:!1},t):"string"==typeof t.type?t:e.cloneElement(t,{record:a,resource:o,basePath:r})):null})))},Vt=ee((function(){return{root:{flexGrow:1}}})),zt=function(t){var r=t.basePath,n=t.children,a=t.record,o=t.resource,i=Vt();return e.createElement("div",{className:i.root},e.createElement(K,{container:!0,spacing:5},e.Children.map(n,(function(t){return t&&e.isValidElement(t)?e.cloneElement(t,{resource:o,record:a,basePath:r}):null}))))},qt=function(e){return e.stopPropagation()},Ht=function(){},Gt=function(e){var t=e.children,r=e.xs,n=e.linkType,l=w(),c=l.ids,s=l.data,u=l.basePath;return a(K,{container:!0,spacing:3},c.map((function(e){return a(K,{item:!0,xs:r,key:e},a(Ae,{to:T(u,e,n),onClick:qt},o(i.only(t),{record:s[e],basePath:u,onClick:Ht})))})))};Gt.defaultProps={xs:6,linkType:"edit"};var $t=ee((function(){return{line:{borderBottom:"1px solid #e0e0e0",marginTop:-6,marginBottom:7}}})),Jt=function(t){var r=t.basePath,n=t.children,a=t.record,o=t.resource,i=$t(),l=R();return e.createElement(ce,null,e.Children.map(n,(function(t){return t&&a[t.props.source]&&e.isValidElement(t)?e.createElement("div",{key:t.props.source},t.props.addLabel?e.createElement(K,{container:!0,spacing:3,className:i.line},e.createElement(K,{item:!0,xs:3},e.createElement(ne,{color:"textSecondary",align:"right",variant:"body2"},l.apply(void 0,Ze(F({label:t.props.label,resource:o,source:t.props.source}))))),e.createElement(K,{item:!0,xs:9},e.createElement(ne,{variant:"body2"},e.cloneElement(t,{record:a,resource:o,basePath:r})))):"string"==typeof t.type?t:e.cloneElement(t,{record:a,resource:o,basePath:r})):null})))},Kt=ee((function(){return{loader:{width:"100%",backgroundColor:"#e0e0e0",paddingTop:100,paddingBottom:100},image:{width:"100%",maxHeight:"none"}}})),Qt=function(t){var r=t.record,n=t.source,a=t.defaultImage,o=Xe(t,["record","source","defaultImage"]),i=Kt();if(r[n]){if(r[n].rawFile instanceof File)return e.createElement(ce,{align:"center",className:i.loader},e.createElement(we,null))}else r[n]=a;return e.createElement(D,Je({record:r,source:n,classes:{image:i.image}},o))},Xt=ee((function(e){return{root:{flexGrow:1,margin:e.spacing(-1)}}})),Yt=function(t){var r=t.children,n=t.image,a=t.defaultImage,o=Xt(),i=_(),l=i.basePath,c=i.loaded,s=i.record,u=i.resource;return c?e.createElement("div",{className:o.root},e.createElement(ne,{variant:"h3",color:"primary",component:"h1",id:"react-admin-title"}),e.createElement(K,{container:!0,spacing:5},e.createElement(K,{item:!0,xs:12,sm:4},e.createElement(Qt,{record:s,source:n,defaultImage:a})),e.createElement(K,{item:!0,xs:12,sm:8},e.createElement(Jt,{record:s,resource:u,basePath:l},r)))):null};Yt.defaultProps={defaultImage:process.env.PUBLIC_URL+"/logo512.png"};var Zt=ee((function(e){return{subTitle:{marginTop:e.spacing(4),marginBottom:e.spacing(2)},subTitleSpan:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,paddingTop:e.spacing(.75),paddingBottom:e.spacing(.75),paddingLeft:e.spacing(2),paddingRight:e.spacing(4)}}})),er=function(t){var r=t.children,n=Zt();return e.createElement(ne,{variant:"h5",className:n.subTitle},e.createElement("span",{className:n.subTitleSpan},r))},tr=function(t){var r=t.children,n=R(),a=_(),o=a.basePath,i=a.loaded,l=a.record,c=a.resource;return i?e.createElement(ce,null,e.Children.map(r,(function(t){return t&&l[t.props.source]&&e.isValidElement(t)?e.createElement("div",{key:t.props.source},t.props.addLabel?e.createElement(e.Fragment,null,e.createElement(er,null,n.apply(void 0,Ze(F({label:t.props.label,resource:c,source:t.props.source})))),e.cloneElement(t,{record:l,resource:c,basePath:o})):"string"==typeof t.type?t:e.cloneElement(t,{record:l,resource:c,basePath:o})):null}))):null},rr=function(t){var r=t.children,n=_(),a=n.basePath,o=n.loaded,i=n.record,l=n.resource;return o?e.Children.map(r,(function(t){return t&&e.isValidElement(t)?e.createElement("div",{key:t.props.source},t.props.addLabel?e.createElement(Wt,{record:i,resource:l,basePath:a,label:t.props.label,source:t.props.source,disabled:!1},t):"string"==typeof t.type?t:e.cloneElement(t,{record:i,resource:l,basePath:a})):null})):null},nr=function(t){var r=t.basePath,n=t.className,a=t.data,o=t.hasList,i=t.hasEdit,l=Xe(t,["basePath","className","data","hasList","hasEdit"]);return e.createElement(b,Je({className:n},l),o&&e.createElement(g,{basePath:r,record:a}),i&&e.createElement(M,{basePath:r,record:a}))},ar=function(t){return e.createElement(W,Je({actions:e.createElement(nr,null)},t))},or=ee((function(e){return{parent:function(e){return Qe({position:"relative"},e.parent)},image:function(e){return Qe({width:"100%",borderRadius:"50%"},e.image)},child:{position:"absolute",bottom:0,left:0,right:0,paddingTop:2,paddingBottom:2,paddingLeft:6,paddingRight:6},caption:{color:"black",fontSize:13}}})),ir=function(t){var r=t.record,n=t.styles;Xe(t,["record","styles"]);console.log();var a=or(n),o=r?r["pair:firstName"]+" "+r["pair:lastName"]:"";return e.createElement(ce,{className:a.parent},e.createElement("img",{src:r&&r.image||process.env.PUBLIC_URL+"/unknown-user.png",className:a.image,alt:o}),e.createElement(ce,{bgcolor:"secondary.main",className:a.child,borderRadius:7},e.createElement(ne,{align:"center",className:a.caption,noWrap:!0},o)))},lr=function(t){var r=t.source,n=t.record;return n&&n[r]?e.createElement(Ue,{source:n[r]}):null};lr.defaultProps={addLabel:!0};var cr=It((function(e){
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var l in a)t.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r}()})),sr=We((function(e){return{root:{display:"flex",flexWrap:"wrap"},link:{}}})),ur=function(e){return e.stopPropagation()},mr=function(){},pr=function(e){e.classes;var t=e.className,r=e.children,n=e.linkType,l=void 0===n?"edit":n,c=e.separator,s=void 0===c?",":c,u=Xe(e,["classes","className","children","linkType","separator"]),m=w(e),p=m.ids,d=m.data,f=m.loaded,h=m.resource,b=m.basePath,g=sr(e);return!1===f?a(Ce,null):a("div",Je({className:cr(g.root,t)},U(u)),p.map((function(e,t){var n=!!l&&T(b,e,l);return n?a("span",{key:e},a(P,{classes:g.link,to:n,onClick:ur},o(i.only(r),{record:d[e],resource:h,basePath:b,onClick:mr})),t<p.length-1&&s+" "):o(i.only(r),{key:e,record:d[e],resource:h,basePath:b})})))},dr=ee((function(e){return{parent:{position:"relative"},square:{width:"100%",paddingBottom:"100%",position:"relative"},avatar:{position:"absolute",top:0,bottom:0,width:"100%",height:"100%",borderRadius:"50%","& svg":{width:"55%",height:"55%"}},child:{position:"absolute",bottom:-10,left:0,right:0,paddingTop:2,paddingBottom:2,paddingLeft:6,paddingRight:6,marginBottom:10},caption:{color:"black",fontSize:13}}})),fr=function(t){var r=t.record,n=t.label,a=t.image,o=t.fallback,i=t.variant,l=t.labelColor,c=t.children,s=dr();if(!r)return null;var u="function"==typeof n?n(r):r[n],m="function"==typeof a?a(r):r[a],p="function"==typeof o?o(r):o;return e.createElement(ce,{className:s.parent},e.createElement("div",{className:s.square},e.createElement(Pe,{src:m||p,alt:u,fallback:p,className:s.avatar,variant:i},c)),e.createElement(ce,{bgcolor:l,className:s.child,borderRadius:5},e.createElement(ne,{align:"center",className:s.caption,noWrap:!0},u)))};fr.defaultProps={labelColor:"secondary.main"};var hr=ee({root:{display:"flex",alignItems:"center"}}),br=function(r){var n=r.label,a=r.reference,o=r.source,i=r.children,l=hr(),c=Ye(t(!1),2),s=c[0],u=c[1],m=Ye(V(a),2),p=m[0],d=m[1].loading,f=R(),h=z(),b=je(),g=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p({payload:{data:t}},{onSuccess:function(e){var t=e.data;u(!1),b.change(o,t["@id"])},onFailure:function(e){var t=e.error;h(t.message,"error")}});case 1:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){Ge(o,n,a,i,l,"next",e)}function l(e){Ge(o,n,a,i,l,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}();return e.createElement("div",{className:l.root},e.createElement(q,{label:n,reference:a,source:o},i),e.createElement(k,{onClick:function(){return u(!0)},label:"ra.action.create"},e.createElement(Ve,null)),e.createElement(ke,{fullWidth:!0,open:s,onClose:function(){return u(!1)}},e.createElement(xe,null,f("ra.action.create")),e.createElement(H,{resource:a,save:g,render:function(t){var r=t.handleSubmitWithRedirect,n=t.pristine,a=t.saving;return e.createElement(e.Fragment,null,e.createElement(Oe,null,e.createElement(G,{label:"Titre",source:"pair:label",validate:$(),fullWidth:!0})),e.createElement(Ne,null,e.createElement(k,{label:"ra.action.cancel",onClick:function(){return u(!1)},disabled:d},e.createElement(ze,null)),e.createElement(J,{handleSubmitWithRedirect:r,pristine:n,saving:a,disabled:d})))}})))};export{Pt as AccordionList,it as AppBar,fr as AvatarField,Ut as Column,zt as ColumnShowLayout,vt as Create,yt as CreateActions,wt as Edit,Et as EditActions,Gt as GridList,Yt as Hero,er as LargeLabel,mt as Layout,Ot as List,kt as ListActions,tr as MainList,lr as MarkdownField,Dt as MasonryList,Nt as MultiViewsList,qe as RedirectByType,_t as ReferenceFilter,br as ReferenceQuickCreateInput,Wt as RightLabel,pr as SeparatedListField,ar as Show,nr as ShowActions,rr as SideList,dt as SimpleAppBar,ht as SimpleLayout,Tt as SimpleList,Lt as TabsMenu,ir as UserIcon,gt as theme};
