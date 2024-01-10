!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):(n||self).MarkdownToJSX=t(n.React)}(this,function(n){function t(n){if(n&&n.t)return n;var t=Object.create(null);return n&&Object.keys(n).forEach(function(r){if("default"!==r){var e=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(t,r,e.get?e:{enumerable:!0,get:function(){return n[r]}})}}),t.default=n,t}var r=/*#__PURE__*/t(n);function e(){return e=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}return n},e.apply(this,arguments)}var u=["children","options"],o=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce(function(n,t){return n[t.toLowerCase()]=t,n},{for:"htmlFor"}),a={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},c=["style","script"],i=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,f=/mailto:/i,_=/\n{2,}$/,l=/^( *>[^\n]*(\n[^\n]+)*)(\n{2,2})/,s=/^ *> ?/gm,d=/^ {2,}\n/,p=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,m=/^(?:\n *)*\n/,g=/\r\n?/g,v=/^\[\^([^\]]+)](:.*)\n/,y=/^\[\^([^\]]+)]/,h=/\f/g,k=/^\s*?\[(x|\s)\]/,b=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,x=/^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,S=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,$=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,O=/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,j=/^<!--[\s\S]*?(?:-->)/,z=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,w=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,A=/^\{.*\}$/,E=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,L=/^<([^ >]+@[^ >]+)>/,M=/^<([^ >]+:\/[^ >]+)>/,T=/-([a-z])?/gi,I=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,B=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,R=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,C=/^\[([^\]]*)\] ?\[([^\]]*)\]/,D=/(\[|\])/g,F=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,N=/\t/g,P=/^ *\| */,Z=/(^ *\||\| *$)/g,q=/ *$/,G=/^ *:-+: *$/,H=/^ *:-+ *$/,U=/^ *-+: *$/,V=/^([*])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,W=/^([*])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,Q=/^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,X=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,J=/^\\([^0-9A-Za-z\s_])/,K=/^[\s\S]+?(?=[^0-9A-Z\s_\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,Y=/^\n+/,nn=/^([ \t]*)/,tn=/\\([^\\])/g,rn=/ *\n+$/,en=/(?:^|\n)( *)$/,un="(?:\\d+\\.)",on="(?:[*+-])";function an(n){return"( *)("+(1===n?un:on)+") +"}var cn=an(1),fn=an(2);function _n(n){return new RegExp("^"+(1===n?cn:fn))}var ln=_n(1),sn=_n(2);function dn(n){return new RegExp("^"+(1===n?cn:fn)+"[^\\n]*(?:\\n(?!\\1"+(1===n?un:on)+" )[^\\n]*)*(\\n|$)","gm")}var pn=dn(1),mn=dn(2);function gn(n){var t=1===n?un:on;return new RegExp("^( *)("+t+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+t+" (?!"+t+" ))\\n*|\\s*\\n*$)")}var vn=gn(1),yn=gn(2);function hn(n,t){var r=1===t,e=r?vn:yn,u=r?pn:mn,o=r?ln:sn;return{u:function(n,t,r){var u=en.exec(r);return u&&(t.o||!t.i&&!t._)?e.exec(n=u[1]+n):null},l:Fn.HIGH,p:function(n,t,e){var a=r?+n[2]:void 0,c=n[0].replace(_,"\n").match(u),i=!1;return{m:c.map(function(n,r){var u=o.exec(n)[0].length,a=new RegExp("^ {1,"+u+"}","gm"),f=n.replace(a,"").replace(o,""),_=r===c.length-1,l=-1!==f.indexOf("\n\n")||_&&i;i=l;var s,d=e.i,p=e.o;e.o=!0,l?(e.i=!1,s=f.replace(rn,"\n\n")):(e.i=!0,s=f.replace(rn,""));var m=t(s,e);return e.i=d,e.o=p,m}),g:r,v:a}},h:function(t,r,e){return n(t.g?"ol":"ul",{key:e.k,start:t.v},t.m.map(function(t,u){return n("li",{key:u},r(t,e))}))}}}var kn=/^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,bn=/^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,xn=[l,/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,b,S,x,j,I,pn,vn,mn,yn],Sn=[].concat(xn,[/^[^\n]+(?:  \n|\n{2,})/,$,w]);function $n(n){return n.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function On(n){return U.test(n)?"right":G.test(n)?"center":H.test(n)?"left":null}function jn(n,t,r){var e=r.S;r.S=!0;var u=t(n.trim(),r);r.S=e;var o=[[]];return u.forEach(function(n,t){"tableSeparator"===n.type?0!==t&&t!==u.length-1&&o.push([]):("text"!==n.type||null!=u[t+1]&&"tableSeparator"!==u[t+1].type||(n.$=n.$.replace(q,"")),o[o.length-1].push(n))}),o}function zn(n,t,r){r.i=!0;var e=jn(n[1],t,r),u=n[2].replace(Z,"").split("|").map(On),o=function(n,t,r){return n.trim().split("\n").map(function(n){return jn(n,t,r)})}(n[3],t,r);return r.i=!1,{O:u,j:o,A:e,type:"table"}}function wn(n,t){return null==n.O[t]?{}:{textAlign:n.O[t]}}function An(n){return function(t,r){return r.i?n.exec(t):null}}function En(n){return function(t,r){return r.i||r._?n.exec(t):null}}function Ln(n){return function(t,r){return r.i||r._?null:n.exec(t)}}function Mn(n){return function(t){return n.exec(t)}}function Tn(n,t,r){if(t.i||t._)return null;if(r&&!r.endsWith("\n"))return null;var e="";n.split("\n").every(function(n){return!xn.some(function(t){return t.test(n)})&&(e+=n+"\n",n.trim())});var u=e.trimEnd();return""==u?null:[e,u]}function In(n){try{if(decodeURIComponent(n).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return}catch(n){return null}return n}function Bn(n){return n.replace(tn,"$1")}function Rn(n,t,r){var e=r.i||!1,u=r._||!1;r.i=!0,r._=!0;var o=n(t,r);return r.i=e,r._=u,o}function Cn(n,t,r){var e=r.i||!1,u=r._||!1;r.i=!1,r._=!0;var o=n(t,r);return r.i=e,r._=u,o}function Dn(n,t,r){return r.i=!1,n(t,r)}var Fn,Nn=function(n,t,r){return{$:Rn(t,n[1],r)}};function Pn(){return{}}function Zn(){return null}function qn(){return[].slice.call(arguments).filter(Boolean).join(" ")}function Gn(n,t,r){for(var e=n,u=t.split(".");u.length&&void 0!==(e=e[u[0]]);)u.shift();return e||r}function Hn(n,t){var r=Gn(t,n);return r?"function"==typeof r||"object"==typeof r&&"render"in r?r:Gn(t,n+".component",n):n}function Un(n,t){void 0===t&&(t={}),t.overrides=t.overrides||{},t.slugify=t.slugify||$n,t.namedCodesToUnicode=t.namedCodesToUnicode?e({},a,t.namedCodesToUnicode):a;var u=t.createElement||r.createElement;function _(n,r){var o=Gn(t.overrides,n+".props",{});return u.apply(void 0,[Hn(n,t.overrides),e({},r,o,{className:qn(null==r?void 0:r.className,o.className)||void 0})].concat([].slice.call(arguments,2)))}function Z(n){var e=!1;t.forceInline?e=!0:t.forceBlock||(e=!1===F.test(n));for(var u=en(rn(e?n:n.trimEnd().replace(Y,"")+"\n\n",{i:e}));"string"==typeof u[u.length-1]&&!u[u.length-1].trim();)u.pop();if(null===t.wrapper)return u;var o,a=t.wrapper||(e?"span":"div");if(u.length>1||t.forceWrapper)o=u;else{if(1===u.length)return"string"==typeof(o=u[0])?_("span",{key:"outer"},o):o;o=null}return r.createElement(a,{key:"outer"},o)}function q(n){var t=n.match(i);return t?t.reduce(function(n,t,e){var u=t.indexOf("=");if(-1!==u){var a=function(n){return-1!==n.indexOf("-")&&null===n.match(z)&&(n=n.replace(T,function(n,t){return t.toUpperCase()})),n}(t.slice(0,u)).trim(),c=function(n){var t=n[0];return('"'===t||"'"===t)&&n.length>=2&&n[n.length-1]===t?n.slice(1,-1):n}(t.slice(u+1).trim()),i=o[a]||a,f=n[i]=function(n,t){return"style"===n?t.split(/;\s?/).reduce(function(n,t){var r=t.slice(0,t.indexOf(":"));return n[r.replace(/(-[a-z])/g,function(n){return n[1].toUpperCase()})]=t.slice(r.length+1).trim(),n},{}):"href"===n?In(t):(t.match(A)&&(t=t.slice(1,t.length-1)),"true"===t||"false"!==t&&t)}(a,c);"string"==typeof f&&($.test(f)||w.test(f))&&(n[i]=r.cloneElement(Z(f.trim()),{key:e}))}else"style"!==t&&(n[o[t]||t]=!0);return n},{}):null}var G=[],H={},U={blockQuote:{u:Ln(l),l:Fn.HIGH,p:function(n,t,r){return{$:t(n[0].replace(s,""),r)}},h:function(n,t,r){return _("blockquote",{key:r.k},t(n.$,r))}},breakLine:{u:Mn(d),l:Fn.HIGH,p:Pn,h:function(n,t,r){return _("br",{key:r.k})}},breakThematic:{u:Ln(p),l:Fn.HIGH,p:Pn,h:function(n,t,r){return _("hr",{key:r.k})}},codeBlock:{u:function(n,t){return null},l:Fn.MAX,p:function(n){return{$:n[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),L:void 0}},h:function(n,t,r){return _("pre",{key:r.k},_("code",e({},n.M,{className:n.L?"lang-"+n.L:""}),n.$))}},codeFenced:{u:function(n,t){return null},l:Fn.MAX,p:function(n){return{M:q(n[3]||""),$:n[4],L:n[2]||void 0,type:"codeBlock"}}},codeInline:{u:function(n,t){return null},l:Fn.LOW,p:function(n){return{$:n[2]}},h:function(n,t,r){return _("code",{key:r.k},n.$)}},footnote:{u:Ln(v),l:Fn.MAX,p:function(n){return G.push({T:n[2],I:n[1]}),{}},h:Zn},footnoteReference:{u:An(y),l:Fn.HIGH,p:function(n){return{$:n[1],B:"#"+t.slugify(n[1])}},h:function(n,t,r){return _("a",{key:r.k,href:In(n.B)},_("sup",{key:r.k},n.$))}},gfmTask:{u:An(k),l:Fn.HIGH,p:function(n){return{R:"x"===n[1].toLowerCase()}},h:function(n,t,r){return _("input",{checked:n.R,key:r.k,readOnly:!0,type:"checkbox"})}},heading:{u:Ln(t.enforceAtxHeadings?x:b),l:Fn.HIGH,p:function(n,r,e){return{$:Rn(r,n[2],e),C:t.slugify(n[2]),D:n[1].length}},h:function(n,t,r){return _("h"+n.D,{id:n.C,key:r.k},t(n.$,r))}},headingSetext:{u:Ln(S),l:Fn.MAX,p:function(n,t,r){return{$:Rn(t,n[1],r),D:"="===n[2]?1:2,type:"heading"}}},htmlComment:{u:Mn(j),l:Fn.HIGH,p:function(){return{}},h:Zn},image:{u:En(bn),l:Fn.HIGH,p:function(n){return{F:n[1],B:Bn(n[2]),N:n[3]}},h:function(n,t,r){return _("img",{key:r.k,alt:n.F||void 0,title:n.N||void 0,src:In(n.B)})}},link:{u:An(kn),l:Fn.LOW,p:function(n,t,r){return{$:Cn(t,n[1],r),B:Bn(n[2]),N:n[3]}},h:function(n,t,r){return _("a",{key:r.k,href:In(n.B),title:n.N},t(n.$,r))}},linkAngleBraceStyleDetector:{u:An(M),l:Fn.MAX,p:function(n){return{$:[{$:n[1],type:"text"}],B:n[1],type:"link"}}},linkBareUrlDetector:{u:function(n,t){return t.P?null:An(E)(n,t)},l:Fn.MAX,p:function(n){return{$:[{$:n[1],type:"text"}],B:n[1],N:void 0,type:"link"}}},linkMailtoDetector:{u:An(L),l:Fn.MAX,p:function(n){var t=n[1],r=n[1];return f.test(r)||(r="mailto:"+r),{$:[{$:t.replace("mailto:",""),type:"text"}],B:r,type:"link"}}},orderedList:hn(_,1),unorderedList:hn(_,2),newlineCoalescer:{u:Ln(m),l:Fn.LOW,p:Pn,h:function(){return"\n"}},paragraph:{u:Tn,l:Fn.LOW,p:Nn,h:function(n,t,r){return _("p",{key:r.k},t(n.$,r))}},ref:{u:An(B),l:Fn.MAX,p:function(n){return H[n[1]]={B:n[2],N:n[4]},{}},h:Zn},refImage:{u:En(R),l:Fn.MAX,p:function(n){return{F:n[1]||void 0,Z:n[2]}},h:function(n,t,r){return _("img",{key:r.k,alt:n.F,src:In(H[n.Z].B),title:H[n.Z].N})}},refLink:{u:An(C),l:Fn.MAX,p:function(n,t,r){return{$:t(n[1],r),q:t(n[0].replace(D,"\\$1"),r),Z:n[2]}},h:function(n,t,r){return H[n.Z]?_("a",{key:r.k,href:In(H[n.Z].B),title:H[n.Z].N},t(n.$,r)):_("span",{key:r.k},t(n.q,r))}},table:{u:Ln(I),l:Fn.HIGH,p:zn,h:function(n,t,r){return _("table",{key:r.k},_("thead",null,_("tr",null,n.A.map(function(e,u){return _("th",{key:u,style:wn(n,u)},t(e,r))}))),_("tbody",null,n.j.map(function(e,u){return _("tr",{key:u},e.map(function(e,u){return _("td",{key:u,style:wn(n,u)},t(e,r))}))})))}},tableSeparator:{u:function(n,t){return t.S?(t.i=!0,P.exec(n)):null},l:Fn.HIGH,p:function(){return{type:"tableSeparator"}},h:function(){return" | "}},text:{u:Mn(K),l:Fn.MIN,p:function(n){return{$:n[0].replace(O,function(n,r){return t.namedCodesToUnicode[r]?t.namedCodesToUnicode[r]:n})}},h:function(n){return n.$}},textBolded:{u:En(V),l:Fn.MED,p:function(n,t,r){return{$:t(n[2],r)}},h:function(n,t,r){return _("strong",{key:r.k},t(n.$,r))}},textEmphasized:{u:En(W),l:Fn.LOW,p:function(n,t,r){return{$:t(n[2],r)}},h:function(n,t,r){return _("em",{key:r.k},t(n.$,r))}},textEscaped:{u:En(J),l:Fn.HIGH,p:function(n){return{$:n[1],type:"text"}}},textMarked:{u:En(Q),l:Fn.LOW,p:Nn,h:function(n,t,r){return _("mark",{key:r.k},t(n.$,r))}},textStrikethroughed:{u:En(X),l:Fn.LOW,p:Nn,h:function(n,t,r){return _("del",{key:r.k},t(n.$,r))}}};!0!==t.disableParsingRawHTML&&(U.htmlBlock={u:Mn($),l:Fn.HIGH,p:function(n,t,r){var e,u=n[3].match(nn),o=new RegExp("^"+u[1],"gm"),a=n[3].replace(o,""),i=(e=a,Sn.some(function(n){return n.test(e)})?Dn:Rn),f=n[1].toLowerCase(),_=-1!==c.indexOf(f);r.P=r.P||"a"===f;var l=_?n[3]:i(t,a,r);return r.P=!1,{M:q(n[2]),$:l,G:_,H:_?f:n[1]}},h:function(n,t,r){return _(n.H,e({key:r.k},n.M),n.G?n.$:t(n.$,r))}},U.htmlSelfClosing={u:Mn(w),l:Fn.HIGH,p:function(n){return{M:q(n[2]||""),H:n[1]}},h:function(n,t,r){return _(n.H,e({},n.M,{key:r.k}))}});var tn,rn=function(n){var t=Object.keys(n);function r(e,u){for(var o=[],a="";e;)for(var c=0;c<t.length;){var i=t[c],f=n[i],_=f.u(e,u,a);if(_){var l=_[0];e=e.substring(l.length);var s=f.p(_,r,u);null==s.type&&(s.type=i),o.push(s),a=l;break}c++}return o}return t.sort(function(t,r){var e=n[t].l,u=n[r].l;return e!==u?e-u:t<r?-1:1}),function(n,t){return r(function(n){return n.replace(g,"\n").replace(h,"").replace(N,"    ")}(n),t)}}(U),en=(tn=function(n){return function(t,r,e){return n[t.type].h(t,r,e)}}(U),function n(t,r){if(void 0===r&&(r={}),Array.isArray(t)){for(var e=r.k,u=[],o=!1,a=0;a<t.length;a++){r.k=a;var c=n(t[a],r),i="string"==typeof c;i&&o?u[u.length-1]+=c:null!==c&&u.push(c),o=i}return r.k=e,u}return tn(t,n,r)}),un=Z(n);return G.length?_("div",null,un,_("footer",{key:"footer"},G.map(function(n){return _("div",{id:t.slugify(n.I),key:n.I},n.I,en(rn(n.T,{i:!0})))}))):un}!function(n){n[n.MAX=0]="MAX",n[n.HIGH=1]="HIGH",n[n.MED=2]="MED",n[n.LOW=3]="LOW",n[n.MIN=4]="MIN"}(Fn||(Fn={}));var Vn=function(n){var t=n.children,e=n.options,o=function(n,t){if(null==n)return{};var r,e,u={},o=Object.keys(n);for(e=0;e<o.length;e++)t.indexOf(r=o[e])>=0||(u[r]=n[r]);return u}(n,u);return r.cloneElement(Un(t,e),o)};return Object.assign(Vn,{compiler:Un}),Vn});
//# sourceMappingURL=index.umd.js.map
