function n(n){if(n&&n.t)return n;var r=Object.create(null);return n&&Object.keys(n).forEach(function(t){if("default"!==t){var e=Object.getOwnPropertyDescriptor(n,t);Object.defineProperty(r,t,e.get?e:{enumerable:!0,get:function(){return n[t]}})}}),r.default=n,r}var r=/*#__PURE__*/n(require("react"));function t(){return t=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])}return n},t.apply(this,arguments)}var e=["children","options"],u=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce(function(n,r){return n[r.toLowerCase()]=r,n},{for:"htmlFor"}),o={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},a=["style","script"],c=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,i=/mailto:/i,_=/\n{2,2}$/,f=/^( *>[^\n]*(\n[^\n]+)*)(\n{2,2})/,l=/^ *> ?/gm,s=/^ {2,}\n/,d=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,p=/^(?:\n *)*\n/,m=/\r\n?/g,v=/^\[\^([^\]]+)](:.*)\n/,g=/^\[\^([^\]]+)]/,y=/\f/g,h=/^\s*?\[(x|\s)\]/,k=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,b=/^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,x=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,S=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,$=/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,O=/^<!--[\s\S]*?(?:-->)/,z=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,j=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,w=/^\{.*\}$/,L=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,A=/^<([^ >]+@[^ >]+)>/,E=/^<([^ >]+:\/[^ >]+)>/,M=/-([a-z])?/gi,I=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,B=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,R=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,T=/^\[([^\]]*)\] ?\[([^\]]*)\]/,C=/(\[|\])/g,N=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,D=/\t/g,F=/^ *\| */,P=/(^ *\||\| *$)/g,Z=/ *$/,q=/^ *:-+: *$/,G=/^ *:-+ *$/,H=/^ *-+: *$/,U=/^([*])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,V=/^([*])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,W=/^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,Q=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,X=/^\\([^0-9A-Za-z\s_])/,J=/^[\s\S]+?(?=[^0-9A-Z\s_\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,K=/^([ \t]*)/,Y=/\\([^\\])/g,nn=/ *\n+$/,rn=/(?:^|\n)( *)$/,tn="(?:\\d+\\.)",en="(?:[*+-])";function un(n){return"( *)("+(1===n?tn:en)+") +"}var on=un(1),an=un(2);function cn(n){return new RegExp("^"+(1===n?on:an))}var _n=cn(1),fn=cn(2);function ln(n){return new RegExp("^"+(1===n?on:an)+"[^\\n]*(?:\\n(?!\\1"+(1===n?tn:en)+" )[^\\n]*)*(\\n|$)","gm")}var sn=ln(1),dn=ln(2);function pn(n){var r=1===n?tn:en;return new RegExp("^( *)("+r+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+r+" (?!"+r+" ))\\n*|\\s*\\n*$)")}var mn=pn(1),vn=pn(2);function gn(n,r){var t=1===r,e=t?mn:vn,u=t?sn:dn,o=t?_n:fn;return{u:function(n,r,t){var u=rn.exec(t);return u&&(r.o||!r.i&&!r._)?e.exec(n=u[1]+n):null},l:Nn.HIGH,p:function(n,r,e){var a=t?+n[2]:void 0,c=n[0].replace(_,"\n").match(u),i=!1;return{m:c.map(function(n,t){var u=o.exec(n)[0].length,a=new RegExp("^ {1,"+u+"}","gm"),_=n.replace(a,"").replace(o,""),f=t===c.length-1,l=-1!==_.indexOf("\n\n")||f&&i;i=l;var s,d=e.i,p=e.o;e.o=!0,l?(e.i=!1,s=_.replace(nn,"\n\n")):(e.i=!0,s=_.replace(nn,""));var m=r(s,e);return e.i=d,e.o=p,m}),v:t,g:a}},h:function(r,t,e){return n(r.v?"ol":"ul",{key:e.k,start:r.g},r.m.map(function(r,u){return n("li",{key:u},t(r,e))}))}}}var yn=/^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,hn=/^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,kn=[f,/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,k,x,b,O,I,sn,mn,dn,vn],bn=[].concat(kn,[/^[^\n]+(?:  \n|\n{2,2})/,S,j]);function xn(n){return n.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function Sn(n){return H.test(n)?"right":q.test(n)?"center":G.test(n)?"left":null}function $n(n,r,t){var e=t.S;t.S=!0;var u=r(n.trim(),t);t.S=e;var o=[[]];return u.forEach(function(n,r){"tableSeparator"===n.type?0!==r&&r!==u.length-1&&o.push([]):("text"!==n.type||null!=u[r+1]&&"tableSeparator"!==u[r+1].type||(n.$=n.$.replace(Z,"")),o[o.length-1].push(n))}),o}function On(n,r,t){t.i=!0;var e=$n(n[1],r,t),u=n[2].replace(P,"").split("|").map(Sn),o=function(n,r,t){return n.trim().split("\n").map(function(n){return $n(n,r,t)})}(n[3],r,t);return t.i=!1,{O:u,j:o,L:e,type:"table"}}function zn(n,r){return null==n.O[r]?{}:{textAlign:n.O[r]}}function jn(n){return function(r,t){return t.i?n.exec(r):null}}function wn(n){return function(r,t){return t.i||t._?n.exec(r):null}}function Ln(n){return function(r,t){return t.i||t._?null:n.exec(r)}}function An(n){return function(r){return n.exec(r)}}function En(n,r,t){return r.i||r._?null:/^(())(\n\n)/.exec(n)}function Mn(n,r,t){if(r.i||r._)return null;if(t&&!t.endsWith("\n"))return null;var e="";n.split("\n").every(function(n){return!kn.some(function(r){return r.test(n)})&&(e+=n+"\n",n.trim())});var u=e.trimEnd();return""==u?null:[e,u]}function In(n){try{if(decodeURIComponent(n).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return}catch(n){return null}return n}function Bn(n){return n.replace(Y,"$1")}function Rn(n,r,t){var e=t.i||!1,u=t._||!1;t.i=!0,t._=!0;var o=n(r,t);return t.i=e,t._=u,o}function Tn(n,r,t){var e=t.i||!1,u=t._||!1;t.i=!1,t._=!0;var o=n(r,t);return t.i=e,t._=u,o}function Cn(n,r,t){return t.i=!1,n(r,t)}var Nn,Dn=function(n,r,t){return{$:Rn(r,n[1],t)}};function Fn(){return{}}function Pn(){return null}function Zn(){return[].slice.call(arguments).filter(Boolean).join(" ")}function qn(n,r,t){for(var e=n,u=r.split(".");u.length&&void 0!==(e=e[u[0]]);)u.shift();return e||t}function Gn(n,r){var t=qn(r,n);return t?"function"==typeof t||"object"==typeof t&&"render"in t?t:qn(r,n+".component",n):n}function Hn(n,e){void 0===e&&(e={}),e.overrides=e.overrides||{},e.slugify=e.slugify||xn,e.namedCodesToUnicode=e.namedCodesToUnicode?t({},o,e.namedCodesToUnicode):o;var _=e.createElement||r.createElement;function P(n,r){var u=qn(e.overrides,n+".props",{});return _.apply(void 0,[Gn(n,e.overrides),t({},r,u,{className:Zn(null==r?void 0:r.className,u.className)||void 0})].concat([].slice.call(arguments,2)))}function Z(n){var t=!1;e.forceInline?t=!0:e.forceBlock||(t=!1===N.test(n));for(var u=tn(rn(t?n:n+(n.endsWith("\n\n")?"":n.endsWith("\n")?"\n":"\n\n"),{i:t}));"string"==typeof u[u.length-1]&&!u[u.length-1].trim();)u.pop();if(null===e.wrapper)return u;var o,a=e.wrapper||(t?"span":"div");if(u.length>1||e.forceWrapper)o=u;else{if(1===u.length)return"string"==typeof(o=u[0])?P("span",{key:"outer"},o):o;o=null}return r.createElement(a,{key:"outer"},o)}function q(n){var t=n.match(c);return t?t.reduce(function(n,t,e){var o=t.indexOf("=");if(-1!==o){var a=function(n){return-1!==n.indexOf("-")&&null===n.match(z)&&(n=n.replace(M,function(n,r){return r.toUpperCase()})),n}(t.slice(0,o)).trim(),c=function(n){var r=n[0];return('"'===r||"'"===r)&&n.length>=2&&n[n.length-1]===r?n.slice(1,-1):n}(t.slice(o+1).trim()),i=u[a]||a,_=n[i]=function(n,r){return"style"===n?r.split(/;\s?/).reduce(function(n,r){var t=r.slice(0,r.indexOf(":"));return n[t.replace(/(-[a-z])/g,function(n){return n[1].toUpperCase()})]=r.slice(t.length+1).trim(),n},{}):"href"===n?In(r):(r.match(w)&&(r=r.slice(1,r.length-1)),"true"===r||"false"!==r&&r)}(a,c);"string"==typeof _&&(S.test(_)||j.test(_))&&(n[i]=r.cloneElement(Z(_.trim()),{key:e}))}else"style"!==t&&(n[u[t]||t]=!0);return n},{}):null}var G=[],H={},Y={emptyLine:{u:En,l:Nn.MED,p:function(n,r,t){return{$:""}},h:function(n,r,t){return t.i?"":P("p",{key:t.k},"&NewLine;")}},blockQuote:{u:Ln(f),l:Nn.HIGH,p:function(n,r,t){return{$:r(n[0].replace(l,""),t)}},h:function(n,r,e){return P("blockquote",{key:e.k},r(n.$,t({},e,{i:!0})))}},breakLine:{u:An(s),l:Nn.HIGH,p:Fn,h:function(n,r,t){return P("br",{key:t.k})}},breakThematic:{u:Ln(d),l:Nn.HIGH,p:Fn,h:function(n,r,t){return P("hr",{key:t.k})}},codeBlock:{u:function(n,r){return null},l:Nn.MAX,p:function(n){return{$:n[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),A:void 0}},h:function(n,r,e){return P("pre",{key:e.k},P("code",t({},n.M,{className:n.A?"lang-"+n.A:""}),n.$))}},codeFenced:{u:function(n,r){return null},l:Nn.MAX,p:function(n){return{M:q(n[3]||""),$:n[4],A:n[2]||void 0,type:"codeBlock"}}},codeInline:{u:function(n,r){return null},l:Nn.LOW,p:function(n){return{$:n[2]}},h:function(n,r,t){return P("code",{key:t.k},n.$)}},footnote:{u:Ln(v),l:Nn.MAX,p:function(n){return G.push({I:n[2],B:n[1]}),{}},h:Pn},footnoteReference:{u:jn(g),l:Nn.HIGH,p:function(n){return{$:n[1],R:"#"+e.slugify(n[1])}},h:function(n,r,t){return P("a",{key:t.k,href:In(n.R)},P("sup",{key:t.k},n.$))}},gfmTask:{u:jn(h),l:Nn.HIGH,p:function(n){return{T:"x"===n[1].toLowerCase()}},h:function(n,r,t){return P("input",{checked:n.T,key:t.k,readOnly:!0,type:"checkbox"})}},heading:{u:Ln(e.enforceAtxHeadings?b:k),l:Nn.HIGH,p:function(n,r,t){return{$:Rn(r,n[2],t),C:e.slugify(n[2]),N:n[1].length}},h:function(n,r,t){return P("h"+n.N,{id:n.C,key:t.k},r(n.$,t))}},headingSetext:{u:Ln(x),l:Nn.MAX,p:function(n,r,t){return{$:Rn(r,n[1],t),N:"="===n[2]?1:2,type:"heading"}}},htmlComment:{u:An(O),l:Nn.HIGH,p:function(){return{}},h:Pn},image:{u:wn(hn),l:Nn.HIGH,p:function(n){return{D:n[1],R:Bn(n[2]),F:n[3]}},h:function(n,r,t){return P("img",{key:t.k,alt:n.D||void 0,title:n.F||void 0,src:In(n.R)})}},link:{u:jn(yn),l:Nn.LOW,p:function(n,r,t){return{$:Tn(r,n[1],t),R:Bn(n[2]),F:n[3]}},h:function(n,r,t){return P("a",{key:t.k,href:In(n.R),title:n.F},r(n.$,t))}},linkAngleBraceStyleDetector:{u:jn(E),l:Nn.MAX,p:function(n){return{$:[{$:n[1],type:"text"}],R:n[1],type:"link"}}},linkBareUrlDetector:{u:function(n,r){return r.P?null:jn(L)(n,r)},l:Nn.MAX,p:function(n){return{$:[{$:n[1],type:"text"}],R:n[1],F:void 0,type:"link"}}},linkMailtoDetector:{u:jn(A),l:Nn.MAX,p:function(n){var r=n[1],t=n[1];return i.test(t)||(t="mailto:"+t),{$:[{$:r.replace("mailto:",""),type:"text"}],R:t,type:"link"}}},orderedList:gn(P,1),unorderedList:gn(P,2),newlineCoalescer:{u:Ln(p),l:Nn.LOW,p:Fn,h:function(){return"\n"}},paragraph:{u:Mn,l:Nn.LOW,p:Dn,h:function(n,r,t){return P(t.i?"span":"p",{key:t.k},r(n.$,t))}},ref:{u:jn(B),l:Nn.MAX,p:function(n){return H[n[1]]={R:n[2],F:n[4]},{}},h:Pn},refImage:{u:wn(R),l:Nn.MAX,p:function(n){return{D:n[1]||void 0,Z:n[2]}},h:function(n,r,t){return P("img",{key:t.k,alt:n.D,src:In(H[n.Z].R),title:H[n.Z].F})}},refLink:{u:jn(T),l:Nn.MAX,p:function(n,r,t){return{$:r(n[1],t),q:r(n[0].replace(C,"\\$1"),t),Z:n[2]}},h:function(n,r,t){return H[n.Z]?P("a",{key:t.k,href:In(H[n.Z].R),title:H[n.Z].F},r(n.$,t)):P("span",{key:t.k},r(n.q,t))}},table:{u:Ln(I),l:Nn.HIGH,p:On,h:function(n,r,t){return P("table",{key:t.k},P("thead",null,P("tr",null,n.L.map(function(e,u){return P("th",{key:u,style:zn(n,u)},r(e,t))}))),P("tbody",null,n.j.map(function(e,u){return P("tr",{key:u},e.map(function(e,u){return P("td",{key:u,style:zn(n,u)},r(e,t))}))})))}},tableSeparator:{u:function(n,r){return r.S?(r.i=!0,F.exec(n)):null},l:Nn.HIGH,p:function(){return{type:"tableSeparator"}},h:function(){return" | "}},text:{u:An(J),l:Nn.MIN,p:function(n){return{$:n[0].replace($,function(n,r){return e.namedCodesToUnicode[r]?e.namedCodesToUnicode[r]:n})}},h:function(n){return n.$}},textBolded:{u:wn(U),l:Nn.MED,p:function(n,r,t){return{$:r(n[2],t)}},h:function(n,r,t){return P("strong",{key:t.k},r(n.$,t))}},textEmphasized:{u:wn(V),l:Nn.LOW,p:function(n,r,t){return{$:r(n[2],t)}},h:function(n,r,t){return P("em",{key:t.k},r(n.$,t))}},textEscaped:{u:wn(X),l:Nn.HIGH,p:function(n){return{$:n[1],type:"text"}}},textMarked:{u:wn(W),l:Nn.LOW,p:Dn,h:function(n,r,t){return P("mark",{key:t.k},r(n.$,t))}},textStrikethroughed:{u:wn(Q),l:Nn.LOW,p:Dn,h:function(n,r,t){return P("del",{key:t.k},r(n.$,t))}}};!0!==e.disableParsingRawHTML&&(Y.htmlBlock={u:An(S),l:Nn.HIGH,p:function(n,r,t){var e,u=n[3].match(K),o=new RegExp("^"+u[1],"gm"),c=n[3].replace(o,""),i=(e=c,bn.some(function(n){return n.test(e)})?Cn:Rn),_=n[1].toLowerCase(),f=-1!==a.indexOf(_);t.P=t.P||"a"===_;var l=f?n[3]:i(r,c,t);return t.P=!1,{M:q(n[2]),$:l,G:f,H:f?_:n[1]}},h:function(n,r,e){return P(n.H,t({key:e.k},n.M),n.G?n.$:r(n.$,e))}},Y.htmlSelfClosing={u:An(j),l:Nn.HIGH,p:function(n){return{M:q(n[2]||""),H:n[1]}},h:function(n,r,e){return P(n.H,t({},n.M,{key:e.k}))}});var nn,rn=function(n){var r=Object.keys(n);function t(e,u){for(var o=[],a="";e;)for(var c=0;c<r.length;){var i=r[c],_=n[i],f=_.u(e,u,a);if(f){var l=f[0];e=e.substring(l.length);var s=_.p(f,t,u);null==s.type&&(s.type=i),o.push(s),a=l;break}c++}return o}return r.sort(function(r,t){var e=n[r].l,u=n[t].l;return e!==u?e-u:r<t?-1:1}),function(n,r){return t(function(n){return n.replace(m,"\n").replace(y,"").replace(D,"    ")}(n),r)}}(Y),tn=(nn=function(n){return function(r,t,e){return n[r.type].h(r,t,e)}}(Y),function n(r,t){if(void 0===t&&(t={}),Array.isArray(r)){for(var e=t.k,u=[],o=!1,a=0;a<r.length;a++){t.k=a;var c=n(r[a],t),i="string"==typeof c;i&&o?u[u.length-1]+=c:null!==c&&u.push(c),o=i}return t.k=e,u}return nn(r,n,t)}),en=Z(n);return G.length?P("div",null,en,P("footer",{key:"footer"},G.map(function(n){return P("div",{id:e.slugify(n.B),key:n.B},n.B,tn(rn(n.I,{i:!0})))}))):en}!function(n){n[n.MAX=0]="MAX",n[n.HIGH=1]="HIGH",n[n.MED=2]="MED",n[n.LOW=3]="LOW",n[n.MIN=4]="MIN"}(Nn||(Nn={}));var Un=function(n){var t=n.children,u=n.options,o=function(n,r){if(null==n)return{};var t,e,u={},o=Object.keys(n);for(e=0;e<o.length;e++)r.indexOf(t=o[e])>=0||(u[t]=n[t]);return u}(n,e);return r.cloneElement(Hn(t,u),o)};Object.assign(Un,{compiler:Hn}),module.exports=Un;
//# sourceMappingURL=index.cjs.map
