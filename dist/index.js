var t,e=require("deta"),n=require("zod");!function(t){t.Set="set",t.Trim="trim",t.Increment="increment",t.Append="append",t.Prepend="prepend"}(t||(t={}));var i=function(t,e){this.operation=void 0,this.value=void 0,this.operation=t,this.value=e};function r(t,e,n){if(!t.s){if(n instanceof u){if(!n.s)return void(n.o=r.bind(null,t,e));1&e&&(e=n.s),n=n.v}if(n&&n.then)return void n.then(r.bind(null,t,e),r.bind(null,t,2));t.s=e,t.v=n;const i=t.o;i&&i(t)}}var u=/*#__PURE__*/function(){function t(){}return t.prototype.then=function(e,n){var i=new t,u=this.s;if(u){var a=1&u?e:n;if(a){try{r(i,1,a(this.v))}catch(t){r(i,2,t)}return i}return this}return this.o=function(t){try{var u=t.v;1&t.s?r(i,1,e?e(u):u):n?r(i,1,n(u)):r(i,2,u)}catch(t){r(i,2,t)}},i},t}();function a(t){return t instanceof u&&1&t.s}var o=/*#__PURE__*/function(){function e(e,r,u){void 0===u&&(u=!0),this.base=void 0,this.schema=void 0,this.validation=void 0,this.manySchema=void 0,this.util={trim:function(){return new i(t.Trim,void 0)},increment:function(e){return new i(t.Increment,e)},append:function(e){return new i(t.Append,e)},prepend:function(e){return new i(t.Prepend,e)}},this.base=e,this.schema=r,this.validation=u,this.manySchema=n.z.array(r)}var o=e.prototype;return o.put=function(t,e,n){return this.parse(t),this.base.put(t,e,n)},o.get=function(t){return this.base.get(t)},o.insert=function(t,e,n){return this.parse(t),this.base.insert(t,e,n)},o.putMany=function(t,e){try{var n=this;return n.parse.apply(n,t),Promise.resolve(n.base.putMany(t,e))}catch(t){return Promise.reject(t)}},o.update=function(e,n,r){var u=this;return e=Object.fromEntries(Object.entries(e).map(function(e){var n=e[0],r=e[1];if(r instanceof i)switch(r.operation){case t.Append:return[n,u.base.util.append(r.value)];case t.Increment:return[n,u.base.util.increment(r.value)];case t.Prepend:return[n,u.base.util.prepend(r.value)];case t.Trim:return[n,u.base.util.trim()]}return[n,r]})),this.base.update(e,n,r)},o.fetch=function(t,e){try{var n,i=this,o=null!=(n=null==e?void 0:e.limit)?n:Infinity;return Promise.resolve(i.base.fetch(t,e)).then(function(n){var s=function(t,e,n){for(var i;;){var o=t();if(a(o)&&(o=o.v),!o)return s;if(o.then){i=0;break}var s=n();if(s&&s.then){if(!a(s)){i=1;break}s=s.s}if(e){var c=e();if(c&&c.then&&!a(c)){i=2;break}}}var h=new u,f=r.bind(null,h,2);return(0===i?o.then(d):1===i?s.then(v):c.then(p)).then(void 0,f),h;function v(i){s=i;do{if(e&&(c=e())&&c.then&&!a(c))return void c.then(p).then(void 0,f);if(!(o=t())||a(o)&&!o.v)return void r(h,1,s);if(o.then)return void o.then(d).then(void 0,f);a(s=n())&&(s=s.v)}while(!s||!s.then);s.then(v).then(void 0,f)}function d(t){t?(s=n())&&s.then?s.then(v).then(void 0,f):v(s):r(h,1,s)}function p(){(o=t())?o.then?o.then(d).then(void 0,f):d(o):r(h,1,s)}}(function(){return!(null==e||!e.autoPaginate)&&n.count<o},void 0,function(){return Promise.resolve(i.base.fetch(t,{limit:o-n.count,last:n.last,desc:null==e?void 0:e.desc})).then(function(t){var e;n.last=t.last,(e=n.items).push.apply(e,t.items),n.count+=t.count})});return s&&s.then?s.then(function(){return n}):n})}catch(t){return Promise.reject(t)}},o.delete=function(t){return this.base.delete(t)},o.parse=function(){this.validation&&this.manySchema.parse([].slice.call(arguments))},e}(),s=/*#__PURE__*/function(){function t(t){this.deta=void 0,this.deta=t}var e=t.prototype;return e.Base=function(t,e){return this.deta.Base(t,e)},e.Drive=function(t,e){return this.deta.Drive(t,e)},e.SchemaBase=function(t,e,n,i){return void 0===n&&(n=!0),new o(this.deta.Base(t,i),e,n)},t}();Object.defineProperty(exports,"z",{enumerable:!0,get:function(){return n.z}}),exports.Deta=function(t,n){return new s(e.Deta(t,n))};
//# sourceMappingURL=index.js.map
