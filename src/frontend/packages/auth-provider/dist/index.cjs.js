"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("react-admin"),r=require("@material-ui/styles"),n=require("@material-ui/core/styles"),o=require("@material-ui/core"),a=require("@material-ui/icons/Lock"),i=require("@material-ui/core/MenuItem"),l=require("@material-ui/icons/PowerSettingsNew"),c=require("@material-ui/icons/AccountCircle"),u=require("@material-ui/icons/Edit");function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var f=s(e),d=s(a),m=s(i),p=s(l),g=s(c),h=s(u);function v(e){this.message=e}v.prototype=new Error,v.prototype.name="InvalidCharacterError";var w="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new v("'atob' failed: The string to be decoded is not correctly encoded.");for(var r,n,o=0,a=0,i="";n=t.charAt(a++);~n&&(r=o%4?64*r+n:n,o++%4)?i+=String.fromCharCode(255&r>>(-2*o&6)):0)n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);return i};function y(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(w(e).replace(/(.)/g,(function(e,t){var r=t.charCodeAt(0).toString(16).toUpperCase();return r.length<2&&(r="0"+r),"%"+r})))}(t)}catch(e){return w(t)}}function k(e){this.message=e}k.prototype=new Error,k.prototype.name="InvalidTokenError";var I=n.makeStyles((function(e){return{main:{display:"flex",flexDirection:"column",minHeight:"100vh",alignItems:"center",justifyContent:"flex-start",backgroundColor:e.palette.primary[500]},card:{minWidth:300,marginTop:"6em"},lockIconAvatar:{margin:"1em",display:"flex",justifyContent:"center"},lockIcon:{backgroundColor:e.palette.secondary[500]}}})),E=function(a){var i=a.theme,l=a.history,c=a.location,u=a.buttons,s=I(),f=t.useNotify(),m=t.useLogin(),p=new URLSearchParams(c.search);return p.has("token")&&(localStorage.setItem("token",p.get("token")),f("Vous êtes maintenant connecté","info"),l.push("/")),p.has("logout")&&(localStorage.removeItem("token"),f("Vous êtes maintenant déconnecté","info"),l.push("/")),e.createElement(r.ThemeProvider,{theme:n.createMuiTheme(i)},e.createElement("div",{className:s.main},e.createElement(o.Card,{className:s.card},e.createElement("div",{className:s.lockIconAvatar},e.createElement(o.Avatar,{className:s.lockIcon},e.createElement(d.default,null))),u&&u.map((function(t){return e.createElement(o.CardActions,null,e.cloneElement(t,{fullWidth:!0,variant:"outlined",type:"submit",onClick:function(){return m({},"/login")}}))})))),e.createElement(t.Notification,null))};E.defaultProps={buttons:[e.createElement(o.Button,{startIcon:e.createElement(o.Avatar,{src:"/lescommuns.jpg"})},"Les Communs")]};var b=e.forwardRef((function(e,r){var n=t.useLogout();return f.default.createElement(m.default,{onClick:function(){return n()},ref:r},f.default.createElement(p.default,null),"   Se déconnecter")}));function C(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var P=e.forwardRef((function(e,r){var n=e.onClick,o=e.webId;return f.default.createElement(t.MenuItemLink,{ref:r,to:"/Person/".concat(encodeURIComponent(o),"/show"),primaryText:"Voir mon profil",leftIcon:f.default.createElement(g.default,null),onClick:n})})),x=e.forwardRef((function(e,r){var n=e.onClick,o=e.webId;return f.default.createElement(t.MenuItemLink,{ref:r,to:"/Person/".concat(encodeURIComponent(o),"/edit"),primaryText:"Editer mon profil",leftIcon:f.default.createElement(h.default,null),onClick:n})})),S=e.forwardRef((function(e,r){var n=e.onClick;return f.default.createElement(t.MenuItemLink,{ref:r,to:"/login",primaryText:"Se connecter",onClick:n})}));exports.LoginPage=E,exports.LogoutButton=b,exports.UserMenu=function(e){var r=e.logout,n=C(e,["logout"]),o=t.useGetIdentity().identity;return f.default.createElement(t.UserMenu,n,o&&""!==o.id?[f.default.createElement(P,{webId:o.id,key:"view"}),f.default.createElement(x,{webId:o.id,key:"edit"}),f.default.cloneElement(r,{key:"logout"})]:f.default.createElement(S,null))},exports.authProvider=function(e){return{login:function(t){return window.location.href="".concat(e,"auth?redirectUrl=")+encodeURIComponent(window.location.href),Promise.resolve()},logout:function(){var t=new URL(window.location.href);return window.location.href="".concat(e,"auth/logout?redirectUrl=")+encodeURIComponent(t.origin+"/login?logout"),Promise.resolve("/")},checkAuth:function(){return localStorage.getItem("token"),Promise.resolve()},checkError:function(e){return Promise.resolve()},getPermissions:function(e){return Promise.resolve()},getIdentity:function(){var e=localStorage.getItem("token");if(e){var t=function(e,t){if("string"!=typeof e)throw new k("Invalid token specified");var r=!0===(t=t||{}).header?0:1;try{return JSON.parse(y(e.split(".")[r]))}catch(e){throw new k("Invalid token specified: "+e.message)}}(e);return{id:t.webId,fullName:t.name}}}}};
