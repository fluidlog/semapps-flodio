import e,{useState as r,useEffect as t}from"react";import{ImageField as n,ReferenceArrayField as a,ReferenceField as o,ArrayField as i,useDataProvider as c,DateTimeInput as u,useResourceContext as s,ReferenceArrayInput as f,ReferenceInput as l,ArrayInput as p,SimpleFormIterator as d,TextInput as y,fetchUtils as m}from"react-admin";import{makeStyles as h}from"@material-ui/core/styles";import b from"jsonld";function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,r,t,n,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void t(e)}c.done?r(u):Promise.resolve(u).then(n,a)}function w(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var o=e.apply(r,t);function i(e){v(o,n,a,i,c,"next",e)}function c(e){v(o,n,a,i,c,"throw",e)}i(void 0)}))}}function x(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function O(){return(O=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function j(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function E(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?j(Object(t),!0).forEach((function(r){x(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function k(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function A(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return t}(e,r)||R(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,r){if(e){if("string"==typeof e)return P(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?P(e,r):void 0}}function P(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function S(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=R(e))){var r=0,t=function(){};return{s:t,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,a,o=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){i=!0,a=e},f:function(){try{o||null==n.return||n.return()}finally{if(i)throw a}}}}var T=function(r){var t=r.record,a=r.source,o=k(r,["record","source"]);return"string"==typeof t&&(t=x({},a,t)),e.createElement(n,O({record:t,source:a},o))},I=function(r){var t=r.record,n=r.source,o=k(r,["record","source"]);return t[n]&&(Array.isArray(t[n])||(t[n]=[t[n]]),t[n]=t[n].map((function(e){return e["@id"]||e}))),e.createElement(a,O({record:t,source:n},o))};I.defaultProps={addLabel:!0};var C=function(r){var t=r.record,n=r.source,a=k(r,["record","source"]);return t[n]&&"object"===g(t[n])&&(t[n]=t[n]["@id"]||t[n].id),e.createElement(o,O({record:t,source:n},a))};C.defaultProps={addLabel:!0};var L=function(n){var a=n.children,o=n.record,c=n.filter,u=n.source,s=k(n,["children","record","filter","source"]),f=A(r(),2),l=f[0],p=f[1];return t((function(){if(!l){var e=o[u].filter((function(e){var r=!0;for(var t in c){var n=e[t];Array.isArray(n)?n.includes(c[t])||(r=!1):n!==c[t]&&(r=!1)}return r})),r=E({},o);r[u]=e,p(r)}}),[o,u,c]),e.createElement(i,O({record:l,source:u},s),e.Children.only(a,(function(r,t){return e.cloneElement(r,{})})))},F=function(n){var a=n.children,o=n.groupReference,i=n.groupContainer,u=n.groupLabel,s=n.filterProperty,f=k(n,["children","groupReference","groupContainer","groupLabel","filterProperty"]),l=c(),p=A(r(),2),d=p[0],y=p[1];return t((function(){d||l.getList(o,{"@id":process.env.REACT_APP_MIDDLEWARE_URL+i}).then((function(e){y(e.data)})).catch((function(e){y([])}))}),[d]),e.createElement(e.Fragment,null,null==d?void 0:d.map((function(r,t){var n={};return n[s]=r.id,e.createElement("div",{key:t},e.createElement("h2",null,r[u]),e.createElement(L,O({},f,{filter:n}),e.Children.only(a,(function(r,t){return e.cloneElement(r,{})}))))})))},U=function(r){return e.createElement(u,O({},r,{format:function(e){return e&&e.replace(" ","T").replace("Z","")}}))},D=function(r){var t=s({});return e.createElement(f,O({},r,{resource:t,format:function(e){return e?(Array.isArray(e)||(e=[e]),r.format&&(e=r.format(e)),e.map((function(e){return"object"===g(e)?e.id||e["@id"]:e}))):e}}))},M=function(r){var t=s({});return e.createElement(l,O({},r,{resource:t,format:function(e){return e?(r.format&&(e=r.format(e)),"object"===g(e)?e.id||e["@id"]:e):e}}))},N=h({form:{display:"flex"},input:{paddingRight:"20px"}}),q=h({root:{display:"none"}}),H=function(r){var t=r.reificationClass,n=(r.children,k(r,["reificationClass","children"])),a=N(),o=q();return e.createElement(p,n,e.createElement(d,{classes:{form:a.form}},e.Children.map(r.children,(function(r,t){return e.cloneElement(r,{className:a.input})})),e.createElement(y,{className:o.root,source:"type",initialValue:t})))},W=function(e){return e.split(":").map((function(e){return e[0].toUpperCase()+e.slice(1)})).join("")},J=function(e){var r=e.types,t=e.params,n=t.pagination,a=(t.sort,t.filter),o=e.dereference,i=e.ontologies,c="";a&&(a.q&&a.q.length>0&&(c+='\n      {\n        SELECT ?s1\n        WHERE {\n          ?s1 ?p1 ?o1 .\n          FILTER regex(lcase(str(?o1)), "'.concat(a.q.toLowerCase(),'")\n          FILTER NOT EXISTS {?s1 a ?o1}\n        }\n      }\n      '),delete a.q),Object.keys(a).forEach((function(e){var r=a[e].startsWith("http")?"<".concat(a[e],">"):a[e];c+="?s1 ".concat(e," ").concat(r," .")})));var u=function(e){var r=[];if(e)for(var t=e.reduce((function(e,r){return function e(r,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"root";if(t.includes("/")){var a=t.split(/\/(.+)/);r[a[0]]=n,e(r,a[1],a[0])}else r[t]=n;return r}(e,r)}),{}),n=0,a=Object.entries(t);n<a.length;n++){var o=A(a[n],2),i=o[0],c=o[1],u=W(i),s="root"===c?"1":W(c),f="root"===c?i:c;r[f]||(r[f]=[]),r[f].push("\n        ?s".concat(s," ").concat(i," ?s").concat(u," .\n        ?s").concat(u," ?p").concat(u," ?o").concat(u," .\n      "))}return{construct:Object.values(r).map((function(e){return Object.values(e).join("\n")})).join("\n"),where:Object.values(r).map((function(e){return"OPTIONAL { ".concat(Object.values(e).join("\n")," }")})).join("\n")}}(o);return"\n    ".concat(function(e){return e.map((function(e){return"PREFIX ".concat(e.prefix,": <").concat(e.url,">")})).join("\n")}(i),"\n    CONSTRUCT {\n      ?s1 ?p2 ?o2 .\n      ").concat(u.construct,"\n    }\n    WHERE {\n      ?s1 a ?type .\n      FILTER( ?type IN (").concat(r.join(", "),") ) .\n      FILTER( (isIRI(?s1)) ) .\n      ").concat(c,"\n      ").concat(u.where,"\n      ?s1 ?p2 ?o2 .\n    }\n    # TODO try to make pagination work in SPARQL as this doesn't work.\n    # LIMIT ").concat(n.perPage,"\n    # OFFSET ").concat((n.page-1)*n.perPage,"\n  ")},_=require("speakingurl"),X=function(e){var r={};return e.forEach((function(e){return r[e.prefix]=e.url})),r},z=function(e){return e&&e.rawFile&&e.rawFile instanceof File},B=function(e){var r,t,n,a,o,i,c=e.sparqlEndpoint,u=e.httpClient,s=e.resources,f=e.ontologies,l=e.jsonContext,p=e.uploadsContainerUri,d=function(){var e=w(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p){e.next=2;break}throw new Error("No uploadsContainerUri defined for the data provider");case 2:return e.next=4,u(p,{method:"POST",body:r,headers:new Headers({Slug:(n=r.name,a=void 0,o=void 0,a="",o=n.split("."),o.length>1&&(a=o.pop(),n=o.join(".")),_(n,{lang:"fr"})+"."+a),"Content-Type":r.type})});case 4:if(201!==(t=e.sent).status){e.next=7;break}return e.abrupt("return",t.headers.get("Location"));case 7:case"end":return e.stop()}var n,a,o}),e)})));return function(r){return e.apply(this,arguments)}}(),y=function(){var e=w(regeneratorRuntime.mark((function e(r){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=regeneratorRuntime.keys(r);case 1:if((e.t1=e.t0()).done){e.next=22;break}if(t=e.t1.value,!r.hasOwnProperty(t)){e.next=20;break}if(!Array.isArray(r[t])){e.next=16;break}n=0;case 6:if(!(n<r[t].length)){e.next=14;break}if(!z(r[t][n])){e.next=11;break}return e.next=10,d(r[t][n].rawFile);case 10:r[t][n]=e.sent;case 11:n++,e.next=6;break;case 14:e.next=20;break;case 16:if(!z(r[t])){e.next=20;break}return e.next=19,d(r[t].rawFile);case 19:r[t]=e.sent;case 20:e.next=1;break;case 22:return e.abrupt("return",r);case 23:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return{getList:(i=w(regeneratorRuntime.mark((function e(r,t){var n,a,o,i,p,d,y,m,h,g;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s[r],!t.id&&!t["@id"]&&s[r].types){e.next=17;break}return n=t.id||t["@id"]||s[r].containerUri,e.next=5,u(n);case 5:if(a=e.sent,o=a.json,i=["ldp:contains","as:orderedItems","orderedItems","as:items","items"].find((function(e){return o[e]}))){e.next=11;break}throw new Error("Unknown list type");case 11:return p=o[i].map((function(e){return e.id=e.id||e["@id"],e})),t.filter&&(t.filter.q&&delete t.filter.q,Object.keys(t.filter).length>0&&(p=p.filter((function(e){return Object.entries(t.filter).some((function(r){var t=A(r,2),n=t[0],a=t[1];return Array.isArray(e[n])?e[n].includes(a):e[n]===a}))})))),t.pagination&&(p=p.slice((t.pagination.page-1)*t.pagination.perPage,t.pagination.page*t.pagination.perPage)),e.abrupt("return",{data:p,total:o[i].length});case 17:return d=J({types:s[r].types,params:E(E({},t),{},{filter:E(E({},s[r].filter),t.filter)}),dereference:s[r].dereference,ontologies:f}),e.next=20,u(c,{method:"POST",body:d});case 20:return y=e.sent,m=y.json,e.next=24,b.frame(m,{"@context":l||X(f),"@type":s[r].types});case 24:if(h=e.sent,1!==Object.keys(h).length){e.next=29;break}return e.abrupt("return",{data:[],total:0});case 29:if(h["@graph"]){e.next=34;break}return h.id=h.id||h["@id"],e.abrupt("return",{data:[h],total:1});case 34:return g=h["@graph"].map((function(e){return e.id=e.id||e["@id"],e})).sort((function(e,r){return!(t.sort&&e[t.sort.field]&&r[t.sort.field])||("DESC"===t.sort.order?e[t.sort.field].localeCompare(r[t.sort.field]):r[t.sort.field].localeCompare(e[t.sort.field]))})).slice((t.pagination.page-1)*t.pagination.perPage,t.pagination.page*t.pagination.perPage),e.abrupt("return",{data:g,total:h["@graph"].length});case 36:case"end":return e.stop()}}),e)}))),function(e,r){return i.apply(this,arguments)}),getOne:(o=w(regeneratorRuntime.mark((function e(r,t){var n,a,o,i,c,p,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s[r],n=s[r],e.next=4,u(t.id);case 4:return a=e.sent,(o=a.json).id=o.id||o["@id"],e.next=9,b.compact(o,l||X(f));case 9:if(i=e.sent,n.forceArray){c=S(n.forceArray);try{for(c.s();!(p=c.n()).done;)d=p.value,i[d]&&!Array.isArray(i[d])&&(i[d]=[i[d]])}catch(e){c.e(e)}finally{c.f()}}return e.abrupt("return",{data:i});case 12:case"end":return e.stop()}}),e)}))),function(e,r){return o.apply(this,arguments)}),getMany:(a=w(regeneratorRuntime.mark((function e(r,t){var n,a,o,i,c,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],a=S(t.ids),e.prev=2,a.s();case 4:if((o=a.n()).done){e.next=20;break}return i="object"===g(i=o.value)?i["@id"]:i,e.prev=7,e.next=10,u(i);case 10:c=e.sent,(s=c.json).id=s.id||s["@id"],n.push(s),e.next=18;break;case 16:e.prev=16,e.t0=e.catch(7);case 18:e.next=4;break;case 20:e.next=25;break;case 22:e.prev=22,e.t1=e.catch(2),a.e(e.t1);case 25:return e.prev=25,a.f(),e.finish(25);case 28:return e.abrupt("return",{data:n});case 29:case"end":return e.stop()}}),e,null,[[2,22,25,28],[7,16]])}))),function(e,r){return a.apply(this,arguments)}),getManyReference:function(e,r){throw new Error("getManyReference is not implemented yet")},create:(n=w(regeneratorRuntime.mark((function e(r,t){var n,a,o,i,c,p,d,m,h,b;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s[r],n=s[r],a=n.slugField,o=n.containerUri,i=n.types,c=new Headers,a&&c.set("Slug",Array.isArray(a)?a.map((function(e){return t.data[e]})).join(" "):t.data[a]),e.next=6,y(t.data);case 6:return t.data=e.sent,e.next=9,u(o,{method:"POST",headers:c,body:JSON.stringify(E({"@context":l||X(f),"@type":i},t.data))});case 9:return p=e.sent,d=p.headers,m=d.get("Location"),e.next=14,u(m);case 14:return h=e.sent,(b=h.json).id=b.id||b["@id"],e.abrupt("return",{data:b});case 18:case"end":return e.stop()}}),e)}))),function(e,r){return n.apply(this,arguments)}),update:(t=w(regeneratorRuntime.mark((function e(r,t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t.data);case 2:return t.data=e.sent,e.next=5,u(t.id,{method:"PUT",body:JSON.stringify(E({"@context":l||X(f)},t.data))});case 5:return e.abrupt("return",{data:t.data});case 6:case"end":return e.stop()}}),e)}))),function(e,r){return t.apply(this,arguments)}),updateMany:function(e,r){throw new Error("updateMany is not implemented yet")},delete:(r=w(regeneratorRuntime.mark((function e(r,t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(t.id,{method:"DELETE"});case 2:return e.abrupt("return",{data:{id:t.id}});case 3:case"end":return e.stop()}}),e)}))),function(e,t){return r.apply(this,arguments)}),deleteMany:function(e,r){throw new Error("deleteMany is not implemented yet")}}},G=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(r.headers||(r.headers=new Headers),r.method){case"POST":case"PATCH":r.headers.has("Accept")||r.headers.set("Accept","application/ld+json"),r.headers.has("Content-Type")||r.headers.set("Content-Type","application/ld+json");break;case"DELETE":break;case"GET":default:r.headers.has("Accept")||r.headers.set("Accept","application/ld+json")}var t=localStorage.getItem("token");return t&&r.headers.set("Authorization","Bearer ".concat(t)),m.fetchJson(e,r)};export{U as DateTimeInput,L as FilteredArrayField,T as ImageField,I as ReferenceArrayField,D as ReferenceArrayInput,C as ReferenceField,M as ReferenceInput,H as ReificationArrayInput,F as ReifiedArrayField,I as UriArrayField,D as UriArrayInput,B as dataProvider,G as httpClient};
