"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var r=require("react"),t=e(r),n=require("react-admin"),a=require("@material-ui/core"),o=require("@material-ui/core/styles"),i=e(require("jsonld"));function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,r,t,n,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void t(e)}c.done?r(u):Promise.resolve(u).then(n,a)}function s(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var o=e.apply(r,t);function i(e){u(o,n,a,i,c,"next",e)}function c(e){u(o,n,a,i,c,"throw",e)}i(void 0)}))}}function f(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(){return(p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){f(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function y(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function m(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return t}(e,r)||h(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,r){if(e){if("string"==typeof e)return b(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?b(e,r):void 0}}function b(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function g(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=h(e))){var r=0,t=function(){};return{s:t,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,a,o=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){i=!0,a=e},f:function(){try{o||null==n.return||n.return()}finally{if(i)throw a}}}}var v=function(e){var r=e.record,a=e.source,o=y(e,["record","source"]);return(null==r?void 0:r[a])&&(Array.isArray(r[a])||(r[a]=[r[a]]),r[a]=r[a].map((function(e){return e["@id"]||e.id||e}))),t.createElement(n.ReferenceArrayField,p({record:r,source:a},o))};v.defaultProps={addLabel:!0};var x=function(e){var r=e.record,a=e.source,o=y(e,["record","source"]);return r[a]&&"object"===c(r[a])&&(r[a]=r[a]["@id"]||r[a].id),t.createElement(n.ReferenceField,p({record:r,source:a},o))};x.defaultProps={addLabel:!0};var w=function(e){var a=e.children,o=e.record,i=e.filter,c=e.source,u=y(e,["children","record","filter","source"]),s=m(r.useState(),2),f=s[0],l=s[1];return r.useEffect((function(){if(o&&c&&Array.isArray(o[c])){var e=o[c].filter((function(e){var r=!0;for(var t in i){var n=e[t];Array.isArray(n)?n.includes(i[t])||(r=!1):n!==i[t]&&(r=!1)}return r})),r=d({},o);r[c]=e,l(r)}}),[o,c,i]),t.createElement(n.ArrayField,p({record:f,source:c},u),a)};w.defaultProps={addLabel:!0};var j=function(e){var o=e.children,i=e.groupReference,c=e.groupLabel,u=e.filterProperty,s=e.groupComponent,f=e.groupVariant,l=y(e,["children","groupReference","groupLabel","filterProperty","groupComponent","groupVariant"]),d=n.useDataProvider(),h=m(r.useState(),2),b=h[0],g=h[1];return r.useEffect((function(){b||d.getResources().then((function(e){var r=e.data[i];d.getList(i,{"@id":r.containerUri}).then((function(e){g(e.data)})).catch((function(e){g([])}))}))}),[b]),t.createElement(t.Fragment,null,null==b?void 0:b.map((function(e,n){var i={};return i[u]=e.id,t.createElement(a.Box,{key:n},s&&r.createElement(s,{record:e}),!s&&t.createElement(a.Typography,{variant:f,align:"left",noWrap:!0},e[c]),t.createElement(w,p({},l,{filter:i}),o))})))};j.defaultProps={addLabel:!0};var O=function(e){var r=n.useResourceContext({});return t.createElement(n.ReferenceArrayInput,p({},e,{resource:r,format:function(r){return r?(Array.isArray(r)||(r=[r]),e.format&&(r=e.format(r)),r.map((function(e){return"object"===c(e)?e.id||e["@id"]:e}))):r}}))},E=o.makeStyles({form:{display:"flex"},input:{paddingRight:"20px"}}),k=o.makeStyles({root:{display:"none"}}),A=function(e){return e.split(":").map((function(e){return e[0].toUpperCase()+e.slice(1)})).join("")},R=function(e){var r=e.types,t=e.params,n=t.pagination,a=(t.sort,t.filter),o=e.dereference,i=e.ontologies,c="";a&&(a.q&&a.q.length>0&&(c+='\n      {\n        SELECT ?s1\n        WHERE {\n          ?s1 ?p1 ?o1 .\n          FILTER regex(lcase(str(?o1)), "'.concat(a.q.toLowerCase(),'")\n          FILTER NOT EXISTS {?s1 a ?o1}\n        }\n      }\n      '),delete a.q),Object.keys(a).forEach((function(e){var r=a[e].startsWith("http")?"<".concat(a[e],">"):a[e];c+="?s1 ".concat(e," ").concat(r," .")})));var u=function(e){var r=[];if(e)for(var t=e.reduce((function(e,r){return function e(r,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"root";if(t.includes("/")){var a=t.split(/\/(.+)/);r[a[0]]=n,e(r,a[1],a[0])}else r[t]=n;return r}(e,r)}),{}),n=0,a=Object.entries(t);n<a.length;n++){var o=m(a[n],2),i=o[0],c=o[1],u=A(i),s="root"===c?"1":A(c),f="root"===c?i:c;r[f]||(r[f]=[]),r[f].push("\n        ?s".concat(s," ").concat(i," ?s").concat(u," .\n        ?s").concat(u," ?p").concat(u," ?o").concat(u," .\n      "))}return{construct:Object.values(r).map((function(e){return Object.values(e).join("\n")})).join("\n"),where:Object.values(r).map((function(e){return"OPTIONAL { ".concat(Object.values(e).join("\n")," }")})).join("\n")}}(o);return"\n    ".concat(function(e){return e.map((function(e){return"PREFIX ".concat(e.prefix,": <").concat(e.url,">")})).join("\n")}(i),"\n    CONSTRUCT {\n      ?s1 ?p2 ?o2 .\n      ").concat(u.construct,"\n    }\n    WHERE {\n      ?s1 a ?type .\n      FILTER( ?type IN (").concat(r.join(", "),") ) .\n      FILTER( (isIRI(?s1)) ) .\n      ").concat(c,"\n      ").concat(u.where,"\n      ?s1 ?p2 ?o2 .\n    }\n    # TODO try to make pagination work in SPARQL as this doesn't work.\n    # LIMIT ").concat(n.perPage,"\n    # OFFSET ").concat((n.page-1)*n.perPage,"\n  ")},S=require("speakingurl"),P=function(e){var r={};return e.forEach((function(e){return r[e.prefix]=e.url})),r},I=function(e){return e&&e.rawFile&&e.rawFile instanceof File};exports.DateTimeInput=function(e){return t.createElement(n.DateTimeInput,p({},e,{format:function(e){return e&&e.replace(" ","T").replace("Z","")}}))},exports.FilteredArrayField=w,exports.GroupedArrayField=j,exports.ImageField=function(e){var r=e.record,a=e.source,o=y(e,["record","source"]);return"string"==typeof r&&(r=f({},a,r)),t.createElement(n.ImageField,p({record:r,source:a},o))},exports.ReferenceArrayField=v,exports.ReferenceArrayInput=O,exports.ReferenceField=x,exports.ReferenceInput=function(e){var r=n.useResourceContext({});return t.createElement(n.ReferenceInput,p({},e,{resource:r,format:function(r){return r?(e.format&&(r=e.format(r)),"object"===c(r)?r.id||r["@id"]:r):r}}))},exports.ReificationArrayInput=function(e){var r=e.reificationClass,a=(e.children,y(e,["reificationClass","children"])),o=E(),i=k();return t.createElement(n.ArrayInput,a,t.createElement(n.SimpleFormIterator,{classes:{form:o.form}},t.Children.map(e.children,(function(e,r){return t.cloneElement(e,{className:o.input})})),t.createElement(n.TextInput,{className:i.root,source:"type",initialValue:r})))},exports.UriArrayField=v,exports.UriArrayInput=O,exports.dataProvider=function(e){var r,t,n,a,o,u,f,p=e.sparqlEndpoint,l=e.httpClient,y=e.resources,h=e.ontologies,b=e.jsonContext,v=e.uploadsContainerUri,x=function(){var e=s(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v){e.next=2;break}throw new Error("No uploadsContainerUri defined for the data provider");case 2:return e.next=4,l(v,{method:"POST",body:r,headers:new Headers({Slug:(n=r.name,a=void 0,o=void 0,a="",o=n.split("."),o.length>1&&(a=o.pop(),n=o.join(".")),S(n,{lang:"fr"})+"."+a),"Content-Type":r.type})});case 4:if(201!==(t=e.sent).status){e.next=7;break}return e.abrupt("return",t.headers.get("Location"));case 7:case"end":return e.stop()}var n,a,o}),e)})));return function(r){return e.apply(this,arguments)}}(),w=function(){var e=s(regeneratorRuntime.mark((function e(r){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=regeneratorRuntime.keys(r);case 1:if((e.t1=e.t0()).done){e.next=22;break}if(t=e.t1.value,!r.hasOwnProperty(t)){e.next=20;break}if(!Array.isArray(r[t])){e.next=16;break}n=0;case 6:if(!(n<r[t].length)){e.next=14;break}if(!I(r[t][n])){e.next=11;break}return e.next=10,x(r[t][n].rawFile);case 10:r[t][n]=e.sent;case 11:n++,e.next=6;break;case 14:e.next=20;break;case 16:if(!I(r[t])){e.next=20;break}return e.next=19,x(r[t].rawFile);case 19:r[t]=e.sent;case 20:e.next=1;break;case 22:return e.abrupt("return",r);case 23:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return{getResources:(f=s(regeneratorRuntime.mark((function e(r,t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{data:y});case 1:case"end":return e.stop()}}),e)}))),function(e,r){return f.apply(this,arguments)}),getList:(u=s(regeneratorRuntime.mark((function e(r,t){var n,a,o,c,u,s,f,g,v,x,w,j;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y[r],!t.id&&!t["@id"]&&y[r].types){e.next=26;break}return n=t.id||t["@id"]||y[r].containerUri,e.next=5,l(n);case 5:if(a=e.sent,o=a.json,O="ldp:Container",k=void 0,k=(E=o).type||E["@type"],!(Array.isArray(k)?k.includes(O):k===O)){e.next=14;break}return c=o["ldp:contains"].map((function(e){return e.id=e.id||e["@id"],e})),t.filter&&(t.filter.q&&delete t.filter.q,Object.keys(t.filter).length>0&&(c=c.filter((function(e){return Object.entries(t.filter).some((function(r){var t=m(r,2),n=t[0],a=t[1];return Array.isArray(e[n])?e[n].includes(a):e[n]===a}))})))),t.pagination&&(c=c.slice((t.pagination.page-1)*t.pagination.perPage,t.pagination.page*t.pagination.perPage)),e.abrupt("return",{data:c,total:o["ldp:contains"].length});case 14:if(!o.first){e.next=19;break}return e.next=17,l(o.first);case 17:u=e.sent,o=u.json;case 19:if(s=["as:orderedItems","orderedItems","as:items","items"].find((function(e){return o[e]}))){e.next=22;break}throw new Error("Unknown list type");case 22:return f=o[s].map((function(e){return e.id=e.id||e["@id"],e})),e.abrupt("return",{data:f,total:o.totalItems});case 24:e.next=45;break;case 26:return g=R({types:y[r].types,params:d(d({},t),{},{filter:d(d({},y[r].filter),t.filter)}),dereference:y[r].dereference,ontologies:h}),e.next=29,l(p,{method:"POST",body:g});case 29:return v=e.sent,x=v.json,e.next=33,i.frame(x,{"@context":b||P(h),"@type":y[r].types});case 33:if(w=e.sent,1!==Object.keys(w).length){e.next=38;break}return e.abrupt("return",{data:[],total:0});case 38:if(w["@graph"]){e.next=43;break}return w.id=w.id||w["@id"],e.abrupt("return",{data:[w],total:1});case 43:return j=w["@graph"].map((function(e){return e.id=e.id||e["@id"],e})).sort((function(e,r){return!(t.sort&&e[t.sort.field]&&r[t.sort.field])||("DESC"===t.sort.order?e[t.sort.field].localeCompare(r[t.sort.field]):r[t.sort.field].localeCompare(e[t.sort.field]))})).slice((t.pagination.page-1)*t.pagination.perPage,t.pagination.page*t.pagination.perPage),e.abrupt("return",{data:j,total:w["@graph"].length});case 45:case"end":return e.stop()}var O,E,k}),e)}))),function(e,r){return u.apply(this,arguments)}),getOne:(o=s(regeneratorRuntime.mark((function e(r,t){var n,a,o,c,u,s,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y[r],n=y[r],e.next=4,l(t.id);case 4:return a=e.sent,(o=a.json).id=o.id||o["@id"],e.next=9,i.compact(o,b||P(h));case 9:if(c=e.sent,n.forceArray){u=g(n.forceArray);try{for(u.s();!(s=u.n()).done;)f=s.value,c[f]&&!Array.isArray(c[f])&&(c[f]=[c[f]])}catch(e){u.e(e)}finally{u.f()}}return e.abrupt("return",{data:c});case 12:case"end":return e.stop()}}),e)}))),function(e,r){return o.apply(this,arguments)}),getMany:(a=s(regeneratorRuntime.mark((function e(r,t){var n,a,o,i,u,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],a=g(t.ids),e.prev=2,a.s();case 4:if((o=a.n()).done){e.next=20;break}return i="object"===c(i=o.value)?i["@id"]:i,e.prev=7,e.next=10,l(i);case 10:u=e.sent,(s=u.json).id=s.id||s["@id"],n.push(s),e.next=18;break;case 16:e.prev=16,e.t0=e.catch(7);case 18:e.next=4;break;case 20:e.next=25;break;case 22:e.prev=22,e.t1=e.catch(2),a.e(e.t1);case 25:return e.prev=25,a.f(),e.finish(25);case 28:return e.abrupt("return",{data:n});case 29:case"end":return e.stop()}}),e,null,[[2,22,25,28],[7,16]])}))),function(e,r){return a.apply(this,arguments)}),getManyReference:function(e,r){throw new Error("getManyReference is not implemented yet")},create:(n=s(regeneratorRuntime.mark((function e(r,t){var n,a,o,i,c,u,s,f,p,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y[r],n=y[r],a=n.slugField,o=n.containerUri,i=n.types,c=new Headers,a&&c.set("Slug",Array.isArray(a)?a.map((function(e){return t.data[e]})).join(" "):t.data[a]),e.next=6,w(t.data);case 6:return t.data=e.sent,e.next=9,l(o,{method:"POST",headers:c,body:JSON.stringify(d({"@context":b||P(h),"@type":i},t.data))});case 9:return u=e.sent,s=u.headers,f=s.get("Location"),e.next=14,l(f);case 14:return p=e.sent,(m=p.json).id=m.id||m["@id"],e.abrupt("return",{data:m});case 18:case"end":return e.stop()}}),e)}))),function(e,r){return n.apply(this,arguments)}),update:(t=s(regeneratorRuntime.mark((function e(r,t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t.data);case 2:return t.data=e.sent,e.next=5,l(t.id,{method:"PUT",body:JSON.stringify(d({"@context":b||P(h)},t.data))});case 5:return e.abrupt("return",{data:t.data});case 6:case"end":return e.stop()}}),e)}))),function(e,r){return t.apply(this,arguments)}),updateMany:function(e,r){throw new Error("updateMany is not implemented yet")},delete:(r=s(regeneratorRuntime.mark((function e(r,t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(t.id,{method:"DELETE"});case 2:return e.abrupt("return",{data:{id:t.id}});case 3:case"end":return e.stop()}}),e)}))),function(e,t){return r.apply(this,arguments)}),deleteMany:function(e,r){throw new Error("deleteMany is not implemented yet")}}},exports.httpClient=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(r.headers||(r.headers=new Headers),r.method){case"POST":case"PATCH":r.headers.has("Accept")||r.headers.set("Accept","application/ld+json"),r.headers.has("Content-Type")||r.headers.set("Content-Type","application/ld+json");break;case"DELETE":break;case"GET":default:r.headers.has("Accept")||r.headers.set("Accept","application/ld+json")}var t=localStorage.getItem("token");return t&&r.headers.set("Authorization","Bearer ".concat(t)),n.fetchUtils.fetchJson(e,r)};
