"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var t=require("react"),r=e(t),n=require("react-router"),a=require("react-admin"),o=require("@material-ui/core"),i=require("react-final-form"),l=require("react-router-dom"),c=require("react-redux"),s=e(require("@material-ui/icons/ViewList")),u=e(require("@material-ui/icons/ExpandMore")),m=require("@material-ui/core/styles"),p=e(require("react-markdown")),d=e(require("@material-ui/icons/Add")),f=e(require("@material-ui/icons/Cancel"));function h(e,t,r,n,a,o,i){try{var l=e[o](i),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,a)}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function E(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,t)||w(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e){return function(e){if(Array.isArray(e))return k(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||w(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){if(e){if("string"==typeof e)return k(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?k(e,t):void 0}}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var P=function(e){var t=e.input,n=E(e,["input"]);return r.createElement(o.TextField,y({},t,n))},S=function(e){var t=e.input,n=E(e,["input"]),i=c.useSelector(a.getResources,c.shallowEqual);return r.createElement(o.Select,y({},t,n),i.filter((function(e){return e.hasList||e.name===t.value})).map((function(e){return r.createElement(o.MenuItem,{value:e.name,key:e.name},e.options.label)})))},L=function(){var e=l.useHistory(),t=l.useLocation().pathname.match(/^\/([^/]+)/),n=t?t[1]:"Organization";return r.createElement(i.Form,{onSubmit:function(t){var r=t.filter,n=t.type;r?e.push("/".concat(n,"?filter=").concat(encodeURIComponent('{"q": "'.concat(r,'"}')))):e.push("/".concat(n))},initialValues:{type:n},render:function(e){var t=e.handleSubmit;return r.createElement("form",{onSubmit:t},r.createElement(o.Grid,{container:!0,spacing:2},r.createElement(o.Grid,{item:!0,xs:5},r.createElement(i.Field,{name:"filter",component:P,placeholder:"Rechercher...",fullWidth:!0})),r.createElement(o.Grid,{item:!0,xs:5},r.createElement(i.Field,{name:"type",component:S,fullWidth:!0})),r.createElement(o.Grid,{item:!0,xs:2},r.createElement(o.Button,{variant:"outlined",type:"submit",fullWidth:!0},"Hop"))))}})},T=o.makeStyles({toolbar:{height:56},spacer:{flex:1},searchForm:{flex:2}}),O=function(e){var t=T();return r.createElement(a.AppBar,y({},e,{classes:v({toolbar:t.toolbar},e.classes),color:"primary"}),r.createElement("span",{className:t.spacer}),r.createElement(o.Hidden,{only:"xs"},r.createElement("span",{className:t.searchForm},r.createElement(L,null))),r.createElement("span",{className:t.spacer}))},N=o.makeStyles((function(e){return{icon:{minWidth:e.spacing(5)},sidebarIsOpen:{"& a":{paddingLeft:e.spacing(4),transition:"padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms"}},sidebarIsClosed:{"& a":{paddingLeft:e.spacing(2),transition:"padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms"}}}})),B=function(e){var t=e.handleToggle,n=e.sidebarIsOpen,a=e.isOpen,i=e.name,l=e.icon,c=e.children,s=e.dense,m=N(),p=r.createElement(o.MenuItem,{dense:s,button:!0,onClick:t},r.createElement(o.ListItemIcon,{className:m.icon},a?r.createElement(u,null):l),r.createElement(o.Typography,{variant:"inherit",color:"textSecondary"},i));return r.createElement(r.Fragment,null,n||a?p:r.createElement(o.Tooltip,{title:i,placement:"right"},p),r.createElement(o.Collapse,{in:a,timeout:"auto",unmountOnExit:!0},r.createElement(o.List,{dense:s,component:"div",disablePadding:!0,className:n?m.sidebarIsOpen:m.sidebarIsClosed},c)))},I=function(e){var t=e.resource,n=e.onClick,o=e.open;return r.createElement(a.MenuItemLink,{to:"/".concat(t.name),primaryText:t.options&&t.options.label||t.name,leftIcon:t.icon?r.createElement(t.icon,null):r.createElement(DefaultIcon,null),onClick:n,sidebarIsOpen:o})},A=o.makeStyles({appFrame:{marginTop:56},title:{position:"absolute",top:80,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}),R=function(e){var t=e.appBar,n=e.menu,i=(e.userMenu,e.children),l=E(e,["appBar","menu","userMenu","children"]),c=A();return r.createElement(a.Layout,y({},l,{classes:{appFrame:c.appFrame},appBar:t,menu:n}),r.createElement(o.Typography,{variant:"h4",color:"primary",className:c.title,id:"react-admin-title",component:"h1"}),i)};R.defaultProps={appBar:O,menu:function(e){var i=e.onMenuClick,l=e.logout,u=e.dense,m=void 0!==u&&u,p=e.openAll,d=void 0!==p&&p,f=o.useMediaQuery((function(e){return e.breakpoints.down("xs")})),h=c.useSelector((function(e){return e.admin.ui.sidebarOpen})),y=c.useSelector(a.getResources),g=n.useLocation().pathname.match(/^\/([^/]+)/),E=g?g[1]:null,x=C(t.useState({}),2),w=x[0],k=x[1],P=t.useMemo((function(){var e=y.reduce((function(e,t){return t.options&&t.options.parent&&e.push(t.options.parent),e}),[]);return y.filter((function(t){return e.includes(t.name)}))}),[y]);return t.useEffect((function(){var e=y.find((function(e){return e.name===E})),t=P.find((function(t){return t.name===e.options.parent})),r=P.reduce((function(e,r){return e[r.name]=d||t&&r.name===t.name,e}),{});k((function(e){return v(v({},r),e)}))}),[P,y,E,d]),r.createElement(o.Box,{mt:2},P.map((function(e){return r.createElement(B,{key:e.name,handleToggle:function(){return t=e.name,void k((function(e){return v(v({},e),{},b({},t,!e[t]))}));var t},isOpen:w[e.name],sidebarIsOpen:h,name:e.options&&e.options.label||e.name,icon:e.icon?r.createElement(e.icon,null):r.createElement(s,null),dense:m},y.filter((function(t){return t.hasList&&t.options.parent===e.name})).map((function(e){return r.createElement(I,{key:e.name,resource:e,onClick:i,open:h})})))})),y.filter((function(e){return e.hasList&&(!e.options||!e.options.parent)})).map((function(e){return r.createElement(I,{key:e.name,resource:e,onClick:i,open:h})})),f&&l)}};var j=o.makeStyles((function(e){return{header:{position:"relative",height:65},logo:b({position:"absolute",top:-15,height:110,width:110},e.breakpoints.down("xs"),{position:"relative",top:0,width:65,height:65})}})),F=function(e){var t=e.userMenu,n=e.logout,i=j(),c=a.useGetIdentity().identity;return r.createElement(o.Box,{bgcolor:"primary.main"},r.createElement(o.Container,{maxWidth:"lg",className:i.header},r.createElement(o.Grid,{container:!0},r.createElement(o.Grid,{item:!0,xs:12,sm:t?3:6},r.createElement(l.Link,{to:"/"},r.createElement("img",{src:process.env.PUBLIC_URL+"/logo192.png",alt:"SemApps",className:i.logo}))),r.createElement(o.Hidden,{xsDown:!0},r.createElement(o.Grid,{item:!0,sm:6},r.createElement(o.Box,{pt:2},r.createElement(L,null)))),t&&r.createElement(o.Grid,{item:!0,sm:3,align:"right"},r.createElement(o.Box,{pt:c&&""!==c.id?2:1},r.cloneElement(t,{logout:n}))))))},M=function(){var e=l.useLocation().pathname;return t.useEffect((function(){window.scrollTo(0,0)}),[e]),null},D=function(e){var t=e.appBar,n=e.title,i=e.open,l=e.logout,c=e.theme,s=e.children,u=o.useMediaQuery(c.breakpoints.down("xs"));return r.createElement(o.ThemeProvider,{theme:c},r.createElement(M,null),r.createElement(t,{title:n,open:i,logout:l}),r.createElement(o.Container,{maxWidth:"lg",disableGutters:u},r.createElement(o.Box,{mb:{xs:0,sm:5}},s)),r.createElement(a.Notification,null))};D.defaultProps={appBar:F};var q=o.createMuiTheme(),G=o.createMuiTheme({palette:{primary:{main:"#28ccfb",contrastText:"#fff"},secondary:{main:"#bcef5b"},grey:{main:"#e0e0e0"}},typography:{details:{fontSize:8}},overrides:{RaChipField:{chip:{marginLeft:0,marginTop:0,marginRight:8,marginBottom:8}},RaShow:{card:b({padding:25},q.breakpoints.down("xs"),{padding:15})},RaList:{content:b({padding:25},q.breakpoints.down("xs"),{padding:15})},RaListToolbar:{toolbar:b({},q.breakpoints.down("xs"),{height:0,minHeight:0})},RaSingleFieldList:{root:{marginTop:0,marginBottom:0}},MuiTab:{labelIcon:{paddingTop:0}}}}),_=function(e){var t=e.basePath,n=e.className,o=e.data,i=e.hasList,l=E(e,["basePath","className","data","hasList"]);return r.createElement(a.TopToolbar,y({className:n},l),i&&r.createElement(a.ListButton,{basePath:t,record:o}))},W=function(e){var t=e.basePath,n=e.className,o=e.data,i=e.hasList,l=e.hasShow,c=E(e,["basePath","className","data","hasList","hasShow"]);return r.createElement(a.TopToolbar,y({className:n},c),i&&r.createElement(a.ListButton,{basePath:t,record:o}),l&&r.createElement(a.ShowButton,{basePath:t,record:o}))},U=o.makeStyles((function(e){return{root:{width:"100%"},accordion:{backgroundColor:e.palette.grey[200]},accordionSummary:{minHeight:"0 !important","& div":{margin:"0 !important"}},accordionDetails:{backgroundColor:e.palette.common.white,display:"block","& p":{margin:0}},date:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary,flexBasis:"15%",flexShrink:0},title:{fontSize:e.typography.pxToRem(15)}}})),V=function(e){var t=e.bulkActions,i=e.basePath,l=e.currentSort,c=e.displayedFilters,s=e.exporter,u=e.filters,m=e.filterValues,p=e.onUnselectItems,d=e.resource,f=e.selectedIds,h=e.showFilter,b=e.total,y=e.views,g=e.currentView,v=e.setView,E=o.useMediaQuery((function(e){return e.breakpoints.down("xs")})),x=a.useResourceDefinition({}),w=new URLSearchParams(n.useLocation().search);return r.createElement(a.TopToolbar,null,y&&Object.entries(y).filter((function(e){return C(e,1)[0]!==g})).map((function(e){var t=C(e,2),n=t[0],o=t[1];return w.set("view",n),w.set("page",1),w.set("perPage",o.perPage),o.sort&&(w.set("sort",o.sort.field),w.set("order",o.sort.order)),r.createElement(a.Link,{key:n,to:"?"+w.toString()},r.createElement(a.Button,{onClick:function(){return v(n)},label:o.label},r.createElement(o.icon)))})),u&&r.cloneElement(u,{resource:d,showFilter:h,displayedFilters:c,filterValues:m,context:"button"}),x.hasCreate&&r.createElement(a.CreateButton,{basePath:i}),!E&&r.createElement(a.ExportButton,{disabled:0===b,resource:d,sort:l,filter:m,exporter:s}),t&&r.cloneElement(t,{basePath:i,filterValues:m,resource:d,selectedIds:f,onUnselectItems:p}))},z=function(e){return r.createElement(a.Pagination,y({rowsPerPageOptions:[25,50,100]},e))},H=function(e){var t=e.actions,n=E(e,["actions"]);return r.createElement(a.List,y({actions:r.cloneElement(t,n),sort:{field:"pair:label",order:"DESC"},pagination:r.createElement(z,null),perPage:50},n))};H.defaultProps={actions:r.createElement(V,null)};var Q=function(e){e.children;var o=e.actions,i=e.views,l=E(e,["children","actions","views"]),c=new URLSearchParams(n.useLocation().search),s=c.has("view")?c.get("view"):Object.keys(i)[0],u=C(t.useState(s),2),m=u[0],p=u[1];return r.createElement(a.List,y({actions:r.cloneElement(o,v({views:i,currentView:m,setView:p},l)),pagination:i[m].pagination,perPage:i[s].perPage,sort:i[s].sort},l),i[m].list)};Q.defaultProps={actions:r.createElement(V,null)};var $=o.makeStyles((function(e){return{tab:{minWidth:55}}})),J=m.createMuiTheme({overrides:{MuiListItem:{root:{padding:15,paddingBottom:15,paddingTop:15,marginBottom:10,borderStyle:"solid",borderColor:"#e0e0e0",borderWidth:1}}}});function K(e,t){return e(t={exports:{}},t.exports),t.exports}var X,Y=K((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=(n=r)&&n.__esModule?n:{default:n};var c={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0},s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.reCalculateColumnCount=r.reCalculateColumnCount.bind(r),r.reCalculateColumnCountDebounce=r.reCalculateColumnCountDebounce.bind(r);var n=void 0;return n=r.props.breakpointCols&&r.props.breakpointCols.default?r.props.breakpointCols.default:parseInt(r.props.breakpointCols)||2,r.state={columnCount:n},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"componentDidUpdate",value:function(){this.reCalculateColumnCount()}},{key:"componentWillUnmount",value:function(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"reCalculateColumnCountDebounce",value:function(){var e=this;window&&window.requestAnimationFrame?(window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame((function(){e.reCalculateColumnCount()}))):this.reCalculateColumnCount()}},{key:"reCalculateColumnCount",value:function(){var e=window&&window.innerWidth||1/0,t=this.props.breakpointCols;"object"!==(void 0===t?"undefined":o(t))&&(t={default:parseInt(t)||2});var r=1/0,n=t.default||2;for(var a in t){var i=parseInt(a);i>0&&e<=i&&i<r&&(r=i,n=t[a])}n=Math.max(1,parseInt(n)||1),this.state.columnCount!==n&&this.setState({columnCount:n})}},{key:"itemsInColumns",value:function(){for(var e=this.state.columnCount,t=new Array(e),r=[].concat(this.props.children||[]),n=0;n<r.length;n++){var a=n%e;t[a]||(t[a]=[]),t[a].push(r[n])}return t}},{key:"renderColumns",value:function(){var e=this.props,t=e.column,r=e.columnAttrs,n=void 0===r?{}:r,o=e.columnClassName,i=this.itemsInColumns(),c=100/i.length+"%",s=o;"string"!=typeof s&&(this.logDeprecated('The property "columnClassName" requires a string'),void 0===s&&(s="my-masonry-grid_column"));var u=a({},t,n,{style:a({},n.style,{width:c}),className:s});return i.map((function(e,t){return l.default.createElement("div",a({},u,{key:t}),e)}))}},{key:"logDeprecated",value:function(e){console.error("[Masonry]",e)}},{key:"render",value:function(){var e=this.props,t=(e.children,e.breakpointCols,e.columnClassName,e.columnAttrs,e.column,e.className),r=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["children","breakpointCols","columnClassName","columnAttrs","column","className"]),n=t;return"string"!=typeof t&&(this.logDeprecated('The property "className" requires a string'),void 0===t&&(n="my-masonry-grid")),l.default.createElement("div",a({},r,{className:n}),this.renderColumns())}}]),t}(l.default.Component);s.defaultProps=c,t.default=s})),Z=(X=Y)&&X.__esModule&&Object.prototype.hasOwnProperty.call(X,"default")?X.default:X,ee=o.makeStyles((function(){return{grid:{display:"flex",marginLeft:-20,width:"auto"},column:{paddingLeft:20,backgroundClip:"padding-box"},card:{marginBottom:20},media:{height:0,paddingTop:"56.25%"}}})),te=function(e){var t=e.image,n=e.content,i=e.actions,l=e.breakpointCols,c=e.linkType,s=ee(),u=a.useListContext(),m=u.ids,p=u.data,d=u.basePath;return r.createElement(Z,{breakpointCols:l,className:s.grid,columnClassName:s.column},m.map((function(e){var l="function"==typeof t?t(p[e]):t;return r.createElement(o.Card,{key:e,className:s.card},r.createElement(a.Link,{to:a.linkToRecord(d,e)+"/"+c},r.createElement(o.CardActionArea,null,l&&r.createElement(o.CardMedia,{className:s.media,image:l}),n&&r.createElement(o.CardContent,null,n(p[e])))),i&&r.createElement(o.CardActions,null,i.map((function(t){return r.createElement(t,{record:p[e],basePath:d})}))))})))};te.defaultProps={breakpointCols:{default:3,1050:2,700:1},linkType:"edit"};var re=function(e){var t=e.reference,n=e.source,o=e.inverseSource,i=e.limit,l=e.sort,s=e.filter,u=e.label,m=e.icon,p=a.useGetList(t,{page:1,perPage:i},l,s),d=p.data,f=p.ids,h=c.useSelector(a.getResources,c.shallowEqual).filter((function(e){return(null==e?void 0:e.name)===t}))[0];return r.createElement(a.FilterList,{label:u||h.options.label,icon:m||r.createElement(h.icon)},f.filter((function(e){return!o||d[e][o]})).map((function(e){return r.createElement(a.FilterListItem,{key:e,label:d[e]["pair:label"],value:b({},n,e)})})))};re.defaultProps={limit:25};var ne=o.makeStyles((function(){return{rightLabel:{color:"grey",textAlign:"right",borderBottom:"1px dashed #c0c0c0",paddingBottom:10,marginBottom:10}}})),ae=function(e){var t=e.label,n=e.children,i=e.record,l=e.resource,c=e.source,s=e.basePath,u=ne(),m=a.useTranslate();return(null==i?void 0:i[c])?r.createElement(o.Box,{mb:4},r.createElement(o.Box,{className:u.rightLabel},m.apply(void 0,x(a.getFieldLabelTranslationArgs({label:t,resource:l,source:c})))),n&&r.createElement(o.Box,{m:0},r.cloneElement(n,{record:i,resource:l,basePath:s}))):null},oe=o.makeStyles((function(){return{line:{borderBottom:"1px solid #e0e0e0",marginTop:-6,marginBottom:7}}})),ie=function(e){var t=e.basePath,n=e.children,i=e.record,l=e.resource,c=oe(),s=a.useTranslate();return r.createElement(o.Box,null,r.Children.map(n,(function(e){return e&&i[e.props.source]&&r.isValidElement(e)?r.createElement("div",{key:e.props.source},e.props.addLabel?r.createElement(o.Grid,{container:!0,spacing:3,className:c.line},r.createElement(o.Grid,{item:!0,xs:3},r.createElement(o.Typography,{color:"textSecondary",align:"right",variant:"body2"},s.apply(void 0,x(a.getFieldLabelTranslationArgs({label:e.props.label,resource:l,source:e.props.source}))))),r.createElement(o.Grid,{item:!0,xs:9},r.createElement(o.Typography,{variant:"body2"},r.cloneElement(e,{record:i,resource:l,basePath:t})))):"string"==typeof e.type?e:r.cloneElement(e,{record:i,resource:l,basePath:t})):null})))},le=o.makeStyles((function(e){return{loader:{width:"100%",backgroundColor:"#e0e0e0",paddingTop:100,paddingBottom:100},image:b({width:"100%",maxHeight:"none"},e.breakpoints.down("sm"),{margin:0})}})),ce=function(e){var t=e.record,n=e.source,i=e.defaultImage,l=E(e,["record","source","defaultImage"]),c=le();if(t[n]){if(t[n].rawFile instanceof File)return r.createElement(o.Box,{align:"center",className:c.loader},r.createElement(o.CircularProgress,null))}else t[n]=i;return r.createElement(a.ImageField,y({record:t,source:n,classes:{image:c.image}},l))},se=o.makeStyles((function(){return{root:{flexGrow:1}}})),ue=function(e){return e.stopPropagation()},me=function(){},pe=function(e){var r=e.children,n=e.xs,i=e.linkType,c=a.useListContext(),s=c.ids,u=c.data,m=c.basePath;return t.createElement(o.Grid,{container:!0,spacing:3},s.map((function(e){return t.createElement(o.Grid,{item:!0,xs:n,key:e},t.createElement(l.Link,{to:a.linkToRecord(m,e,i),onClick:ue},t.cloneElement(t.Children.only(r),{record:u[e],basePath:m,onClick:me})))})))};pe.defaultProps={xs:6,linkType:"edit"};var de=o.makeStyles((function(e){return{root:{flexGrow:1,margin:e.spacing(-1)}}})),fe=function(e){var t=e.children,n=e.image,i=e.defaultImage,l=de(),c=a.useShowContext(),s=c.basePath,u=c.loaded,m=c.record,p=c.resource;return u?r.createElement("div",{className:l.root},r.createElement(o.Typography,{variant:"h3",color:"primary",component:"h1",id:"react-admin-title"}),r.createElement(o.Grid,{container:!0,spacing:5},r.createElement(o.Grid,{item:!0,xs:12,sm:4},r.createElement(ce,{record:m,source:n,defaultImage:i})),r.createElement(o.Grid,{item:!0,xs:12,sm:8},r.createElement(ie,{record:m,resource:p,basePath:s},t)))):null};fe.defaultProps={defaultImage:process.env.PUBLIC_URL+"/logo512.png"};var he=o.makeStyles((function(e){return{subTitle:{marginTop:e.spacing(4),marginBottom:e.spacing(2)},subTitleSpan:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,paddingTop:e.spacing(.75),paddingBottom:e.spacing(.75),paddingLeft:e.spacing(2),paddingRight:e.spacing(4)}}})),be=function(e){var t=e.children,n=he();return r.createElement(o.Typography,{variant:"h5",className:n.subTitle},r.createElement("span",{className:n.subTitleSpan},t))},ye=function(e){var t=e.basePath,n=e.className,o=e.data,i=e.hasList,l=e.hasEdit,c=E(e,["basePath","className","data","hasList","hasEdit"]);return r.createElement(a.TopToolbar,y({className:n},c),i&&r.createElement(a.ListButton,{basePath:t,record:o}),l&&r.createElement(a.EditButton,{basePath:t,record:o}))},ge=o.makeStyles((function(e){return{parent:function(e){return v({position:"relative"},e.parent)},image:function(e){return v({width:"100%",borderRadius:"50%"},e.image)},child:{position:"absolute",bottom:0,left:0,right:0,paddingTop:2,paddingBottom:2,paddingLeft:6,paddingRight:6},caption:{color:"black",fontSize:13}}})),ve=function(e){var t=e.source,n=e.record;return n&&n[t]?r.createElement(p,{source:n[t]}):null};ve.defaultProps={addLabel:!0};var Ee=K((function(e){
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var l in a)t.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r}()})),Ce=m.makeStyles((function(e){return{root:{display:"flex",flexWrap:"wrap"},link:{}}})),xe=function(e){return e.stopPropagation()},we=function(){},ke=o.makeStyles((function(e){return{parent:function(e){return v({position:"relative"},e.parent)},square:{width:"100%",paddingBottom:"100%",position:"relative"},avatar:{position:"absolute",top:0,bottom:0,width:"100%",height:"100%",borderRadius:"50%","& svg":{width:"55%",height:"55%"}},child:{position:"absolute",bottom:-10,left:0,right:0,paddingTop:2,paddingBottom:2,paddingLeft:6,paddingRight:6,marginBottom:10},caption:{color:"black",fontSize:13}}})),Pe=function(e){var t=e.record,n=e.label,a=e.image,i=e.fallback,l=e.variant,c=e.labelColor,s=e.classes,u=e.children;if(s=ke(s),!t)return null;var m="function"==typeof n?n(t):t[n],p="function"==typeof a?a(t):t[a],d="function"==typeof i?i(t):i;return r.createElement(o.Box,{className:s.parent},r.createElement("div",{className:s.square},r.createElement(o.Avatar,{src:p||d,alt:m,fallback:d,className:s.avatar,variant:l},u)),r.createElement(o.Box,{bgcolor:c,className:s.child,borderRadius:5},r.createElement(o.Typography,{align:"center",className:s.caption,noWrap:!0},m)))};Pe.defaultProps={labelColor:"secondary.main"};var Se=o.makeStyles({root:{display:"flex",alignItems:"center"}});exports.AccordionList=function(e){var t=e.date,n=e.title,i=e.content,l=U(),c=a.useListContext(),s=c.ids,m=c.data,p=c.resource,d=c.basePath;return r.createElement("div",{className:l.root},s.map((function(e,a){var c=t&&new Date(t(m[e])),s=n&&n(m[e]);return r.createElement(o.Accordion,{className:l.accordion,key:a},r.createElement(o.AccordionSummary,{expandIcon:r.createElement(u,null),"aria-controls":"panel".concat(a,"-content"),id:"panel".concat(a,"-header"),className:l.accordionSummary},c&&r.createElement(o.Typography,{className:l.date},c.toLocaleDateString()),r.createElement(o.Typography,{className:l.title},s)),r.createElement(o.AccordionDetails,{className:l.accordionDetails},r.createElement(i,{record:m[e],resource:p,basePath:d})))})))},exports.AppBar=O,exports.AvatarField=Pe,exports.Column=function(e){var t=e.basePath,n=e.children,a=e.record,i=e.resource,l=e.showLabel,c=E(e,["basePath","children","record","resource","showLabel"]);return r.createElement(o.Grid,y({item:!0},c),r.Children.map(n,(function(e){return e&&r.isValidElement(e)?r.createElement("div",{key:e.props.source},e.props.addLabel&&l?r.createElement(ae,{record:a,resource:i,basePath:t,label:e.props.label,source:e.props.source,disabled:!1},e):"string"==typeof e.type?e:r.cloneElement(e,{record:a,resource:i,basePath:t})):null})))},exports.ColumnShowLayout=function(e){var t=e.basePath,n=e.children,a=e.record,i=e.resource,l=se();return r.createElement("div",{className:l.root},r.createElement(o.Grid,{container:!0,spacing:5},r.Children.map(n,(function(e){return e&&r.isValidElement(e)?r.cloneElement(e,{resource:i,record:a,basePath:t}):null}))))},exports.Create=function(e){return r.createElement(a.Create,y({actions:r.createElement(_,null),redirect:"show"},e))},exports.CreateActions=_,exports.DetailsList=ie,exports.Edit=function(e){return r.createElement(a.Edit,y({actions:r.createElement(W,null)},e))},exports.EditActions=W,exports.GridList=pe,exports.Hero=fe,exports.LargeLabel=be,exports.Layout=R,exports.List=H,exports.ListActions=V,exports.MainImage=ce,exports.MainList=function(e){var t=e.children,n=a.useTranslate(),i=a.useShowContext(),l=i.basePath,c=i.loaded,s=i.record,u=i.resource;return c?r.createElement(o.Box,null,r.Children.map(t,(function(e){return e&&s[e.props.source]&&r.isValidElement(e)?r.createElement("div",{key:e.props.source},e.props.addLabel?r.createElement(r.Fragment,null,r.createElement(be,null,n.apply(void 0,x(a.getFieldLabelTranslationArgs({label:e.props.label,resource:u,source:e.props.source})))),r.cloneElement(e,{record:s,resource:u,basePath:l})):"string"==typeof e.type?e:r.cloneElement(e,{record:s,resource:u,basePath:l})):null}))):null},exports.MarkdownField=ve,exports.MasonryList=te,exports.MultiViewsList=Q,exports.RedirectByType=function(e){var t=e.record,a=e.typesMap;if(t){Array.isArray(t.type)||(t.type=[t.type]);var o=Object.keys(a).find((function(e){return t.type.includes(a[e])}));if(o)return r.createElement(n.Redirect,{to:"/".concat(o,"/").concat(encodeURIComponent(t.id),"/show")})}return null},exports.ReferenceFilter=re,exports.ReferenceQuickCreateInput=function(e){var n=e.label,l=e.reference,c=e.source,s=e.children,u=Se(),m=C(t.useState(!1),2),p=m[0],b=m[1],y=C(a.useCreate(l),2),g=y[0],v=y[1].loading,E=a.useTranslate(),x=a.useNotify(),w=i.useForm(),k=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g({payload:{data:t}},{onSuccess:function(e){var t=e.data;b(!1),w.change(c,t["@id"])},onFailure:function(e){var t=e.error;x(t.message,"error")}});case 1:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){h(o,n,a,i,l,"next",e)}function l(e){h(o,n,a,i,l,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}();return r.createElement("div",{className:u.root},r.createElement(a.ReferenceInput,{label:n,reference:l,source:c},s),r.createElement(a.Button,{onClick:function(){return b(!0)},label:"ra.action.create"},r.createElement(d,null)),r.createElement(o.Dialog,{fullWidth:!0,open:p,onClose:function(){return b(!1)}},r.createElement(o.DialogTitle,null,E("ra.action.create")),r.createElement(a.FormWithRedirect,{resource:l,save:k,render:function(e){var t=e.handleSubmitWithRedirect,n=e.pristine,i=e.saving;return r.createElement(r.Fragment,null,r.createElement(o.DialogContent,null,r.createElement(a.TextInput,{label:"Titre",source:"pair:label",validate:a.required(),fullWidth:!0})),r.createElement(o.DialogActions,null,r.createElement(a.Button,{label:"ra.action.cancel",onClick:function(){return b(!1)},disabled:v},r.createElement(f,null)),r.createElement(a.SaveButton,{handleSubmitWithRedirect:t,pristine:n,saving:i,disabled:v})))}})))},exports.RightLabel=ae,exports.SeparatedListField=function(e){e.classes;var r=e.className,n=e.children,i=e.linkType,l=void 0===i?"edit":i,c=e.separator,s=void 0===c?",":c,u=E(e,["classes","className","children","linkType","separator"]),m=a.useListContext(e),p=m.ids,d=m.data,f=m.loaded,h=m.resource,b=m.basePath,g=Ce(e);return!1===f?t.createElement(o.LinearProgress,null):t.createElement("span",y({className:Ee(g.root,r)},a.sanitizeListRestProps(u)),p.map((function(e,r){var o=!!l&&a.linkToRecord(b,e,l);return o?t.createElement("span",{key:e},t.createElement(a.Link,{classes:g.link,to:o,onClick:xe},t.cloneElement(t.Children.only(n),{record:d[e],resource:h,basePath:b,onClick:we})),r<p.length-1&&s+" "):t.createElement("span",{key:e},t.cloneElement(t.Children.only(n),{record:d[e],resource:h,basePath:b}),r<p.length-1&&s+" ")})))},exports.Show=function(e){return r.createElement(a.Show,y({actions:r.createElement(ye,null)},e))},exports.ShowActions=ye,exports.SideList=function(e){var t=e.children,n=a.useShowContext(),o=n.basePath,i=n.loaded,l=n.record,c=n.resource;return i?r.Children.map(t,(function(e){return e&&r.isValidElement(e)?r.createElement("div",{key:e.props.source},e.props.addLabel?r.createElement(ae,{record:l,resource:c,basePath:o,label:e.props.label,source:e.props.source,disabled:!1},e):"string"==typeof e.type?e:r.cloneElement(e,{record:l,resource:c,basePath:o})):null})):null},exports.SimpleAppBar=F,exports.SimpleLayout=D,exports.SimpleList=function(e){return r.createElement(m.ThemeProvider,{theme:J},r.createElement(a.SimpleList,e))},exports.TabsMenu=function(){var e=n.useHistory(),t=$(),i=n.useLocation().pathname.match(/^\/([^/]+)/),l=i?i[1]:null,s=c.useSelector(a.getResources,c.shallowEqual),u=o.useMediaQuery((function(e){return e.breakpoints.down("xs")}));return r.createElement(o.Tabs,{value:l,onChange:function(t,r){return e.push("/"+r)},indicatorColor:"primary",textColor:"primary",scrollButtons:"auto"},s.filter((function(e){return e.hasList})).map((function(e){return r.createElement(o.Tab,{key:e.name,icon:r.createElement(e.icon),label:u?void 0:e.options.label,value:e.name,className:t.tab})})))},exports.UserIcon=function(e){var t=e.record,n=e.styles;E(e,["record","styles"]);console.log();var a=ge(n),i=t?t["pair:firstName"]+" "+t["pair:lastName"]:"";return r.createElement(o.Box,{className:a.parent},r.createElement("img",{src:t&&t.image||process.env.PUBLIC_URL+"/unknown-user.png",className:a.image,alt:i}),r.createElement(o.Box,{bgcolor:"secondary.main",className:a.child,borderRadius:7},r.createElement(o.Typography,{align:"center",className:a.caption,noWrap:!0},i)))},exports.theme=G;
