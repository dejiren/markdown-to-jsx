import*as n from"react";function r(){return r=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])}return n},r.apply(this,arguments)}var t=["children","options"],e=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce(function(n,r){return n[r.toLowerCase()]=r,n},{for:"htmlFor"}),o={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},u=["style","script"],a=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,c=/mailto:/i,i=/\n{2,}$/,_=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,f=/^ *> ?/gm,l=/^ {2,}\n/,s=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,d=/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,p=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,m=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,g=/^(?:\n *)*\n/,v=/\r\n?/g,y=/^\[\^([^\]]+)](:.*)\n/,h=/^\[\^([^\]]+)]/,k=/\f/g,x=/^\s*?\[(x|\s)\]/,b=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,S=/^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,$=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,z=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,w=/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,A=/^<!--[\s\S]*?(?:-->)/,E=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,L=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,M=/^\{.*\}$/,O=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,I=/^<([^ >]+@[^ >]+)>/,j=/^<([^ >]+:\/[^ >]+)>/,B=/-([a-z])?/gi,R=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,T=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,C=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,D=/^\[([^\]]*)\] ?\[([^\]]*)\]/,F=/(\[|\])/g,N=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,P=/\t/g,Z=/^ *\| */,G=/(^ *\||\| *$)/g,H=/ *$/,q=/^ *:-+: *$/,U=/^ *:-+ *$/,V=/^ *-+: *$/,W=/^([*])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,Q=/^([*])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,X=/^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,J=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,K=/^\\([^0-9A-Za-z\s])/,Y=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,nn=/^\n+/,rn=/^([ \t]*)/,tn=/\\([^\\])/g,en=/ *\n+$/,on=/(?:^|\n)( *)$/,un="(?:\\d+\\.)",an="(?:[*+-])";function cn(n){return"( *)("+(1===n?un:an)+") +"}var _n=cn(1),fn=cn(2);function ln(n){return new RegExp("^"+(1===n?_n:fn))}var sn=ln(1),dn=ln(2);function pn(n){return new RegExp("^"+(1===n?_n:fn)+"[^\\n]*(?:\\n(?!\\1"+(1===n?un:an)+" )[^\\n]*)*(\\n|$)","gm")}var mn=pn(1),gn=pn(2);function vn(n){var r=1===n?un:an;return new RegExp("^( *)("+r+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+r+" (?!"+r+" ))\\n*|\\s*\\n*$)")}var yn=vn(1),hn=vn(2);function kn(n,r){var t=1===r,e=t?yn:hn,o=t?mn:gn,u=t?sn:dn;return{t:function(n,r,t){var o=on.exec(t);return o&&(r.o||!r.u&&!r.i)?e.exec(n=o[1]+n):null},_:Nn.HIGH,l:function(n,r,e){var a=t?+n[2]:void 0,c=n[0].replace(i,"\n").match(o),_=!1;return{p:c.map(function(n,t){var o=u.exec(n)[0].length,a=new RegExp("^ {1,"+o+"}","gm"),i=n.replace(a,"").replace(u,""),f=t===c.length-1,l=-1!==i.indexOf("\n\n")||f&&_;_=l;var s,d=e.u,p=e.o;e.o=!0,l?(e.u=!1,s=i.replace(en,"\n\n")):(e.u=!0,s=i.replace(en,""));var m=r(s,e);return e.u=d,e.o=p,m}),m:t,g:a}},v:function(r,t,e){return n(r.m?"ol":"ul",{key:e.h,start:r.g},r.p.map(function(r,o){return n("li",{key:o},t(r,e))}))}}}var xn=/^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,bn=/^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,Sn=[_,d,p,b,$,S,A,R,mn,yn,gn,hn],$n=[].concat(Sn,[/^[^\n]+(?:  \n|\n{2,})/,z,L]);function zn(n){return n.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function wn(n){return V.test(n)?"right":q.test(n)?"center":U.test(n)?"left":null}function An(n,r,t){var e=t.k;t.k=!0;var o=r(n.trim(),t);t.k=e;var u=[[]];return o.forEach(function(n,r){"tableSeparator"===n.type?0!==r&&r!==o.length-1&&u.push([]):("text"!==n.type||null!=o[r+1]&&"tableSeparator"!==o[r+1].type||(n.S=n.S.replace(H,"")),u[u.length-1].push(n))}),u}function En(n,r,t){t.u=!0;var e=An(n[1],r,t),o=n[2].replace(G,"").split("|").map(wn),u=function(n,r,t){return n.trim().split("\n").map(function(n){return An(n,r,t)})}(n[3],r,t);return t.u=!1,{$:o,A:u,L:e,type:"table"}}function Ln(n,r){return null==n.$[r]?{}:{textAlign:n.$[r]}}function Mn(n){return function(r,t){return t.u?n.exec(r):null}}function On(n){return function(r,t){return t.u||t.i?n.exec(r):null}}function In(n){return function(r,t){return t.u||t.i?null:n.exec(r)}}function jn(n){return function(r){return n.exec(r)}}function Bn(n,r,t){if(r.u||r.i)return null;if(t&&!t.endsWith("\n"))return null;var e="";n.split("\n").every(function(n){return!Sn.some(function(r){return r.test(n)})&&(e+=n+"\n",n.trim())});var o=e.trimEnd();return""==o?null:[e,o]}function Rn(n){try{if(decodeURIComponent(n).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return}catch(n){return null}return n}function Tn(n){return n.replace(tn,"$1")}function Cn(n,r,t){var e=t.u||!1,o=t.i||!1;t.u=!0,t.i=!0;var u=n(r,t);return t.u=e,t.i=o,u}function Dn(n,r,t){var e=t.u||!1,o=t.i||!1;t.u=!1,t.i=!0;var u=n(r,t);return t.u=e,t.i=o,u}function Fn(n,r,t){return t.u=!1,n(r,t)}var Nn,Pn=function(n,r,t){return{S:Cn(r,n[1],t)}};function Zn(){return{}}function Gn(){return null}function Hn(){return[].slice.call(arguments).filter(Boolean).join(" ")}function qn(n,r,t){for(var e=n,o=r.split(".");o.length&&void 0!==(e=e[o[0]]);)o.shift();return e||t}function Un(n,r){var t=qn(r,n);return t?"function"==typeof t||"object"==typeof t&&"render"in t?t:qn(r,n+".component",n):n}function Vn(t,i){void 0===i&&(i={}),i.overrides=i.overrides||{},i.slugify=i.slugify||zn,i.namedCodesToUnicode=i.namedCodesToUnicode?r({},o,i.namedCodesToUnicode):o;var G=i.createElement||n.createElement;function H(n,t){var e=qn(i.overrides,n+".props",{});return G.apply(void 0,[Un(n,i.overrides),r({},t,e,{className:Hn(null==t?void 0:t.className,e.className)||void 0})].concat([].slice.call(arguments,2)))}function q(r){var t=!1;i.forceInline?t=!0:i.forceBlock||(t=!1===N.test(r));for(var e=an(un(t?r:r.trimEnd().replace(nn,"")+"\n\n",{u:t}));"string"==typeof e[e.length-1]&&!e[e.length-1].trim();)e.pop();if(null===i.wrapper)return e;var o,u=i.wrapper||(t?"span":"div");if(e.length>1||i.forceWrapper)o=e;else{if(1===e.length)return"string"==typeof(o=e[0])?H("span",{key:"outer"},o):o;o=null}return n.createElement(u,{key:"outer"},o)}function U(r){var t=r.match(a);return t?t.reduce(function(r,t,o){var u=t.indexOf("=");if(-1!==u){var a=function(n){return-1!==n.indexOf("-")&&null===n.match(E)&&(n=n.replace(B,function(n,r){return r.toUpperCase()})),n}(t.slice(0,u)).trim(),c=function(n){var r=n[0];return('"'===r||"'"===r)&&n.length>=2&&n[n.length-1]===r?n.slice(1,-1):n}(t.slice(u+1).trim()),i=e[a]||a,_=r[i]=function(n,r){return"style"===n?r.split(/;\s?/).reduce(function(n,r){var t=r.slice(0,r.indexOf(":"));return n[t.replace(/(-[a-z])/g,function(n){return n[1].toUpperCase()})]=r.slice(t.length+1).trim(),n},{}):"href"===n?Rn(r):(r.match(M)&&(r=r.slice(1,r.length-1)),"true"===r||"false"!==r&&r)}(a,c);"string"==typeof _&&(z.test(_)||L.test(_))&&(r[i]=n.cloneElement(q(_.trim()),{key:o}))}else"style"!==t&&(r[e[t]||t]=!0);return r},{}):null}var V=[],tn={},en={blockQuote:{t:In(_),_:Nn.HIGH,l:function(n,r,t){return{S:r(n[0].replace(f,""),t)}},v:function(n,r,t){return H("blockquote",{key:t.h},r(n.S,t))}},breakLine:{t:jn(l),_:Nn.HIGH,l:Zn,v:function(n,r,t){return H("br",{key:t.h})}},breakThematic:{t:In(s),_:Nn.HIGH,l:Zn,v:function(n,r,t){return H("hr",{key:t.h})}},codeBlock:{t:In(p),_:Nn.MAX,l:function(n){return{S:n[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),M:void 0}},v:function(n,t,e){return H("pre",{key:e.h},H("code",r({},n.O,{className:n.M?"lang-"+n.M:""}),n.S))}},codeFenced:{t:In(d),_:Nn.MAX,l:function(n){return{O:U(n[3]||""),S:n[4],M:n[2]||void 0,type:"codeBlock"}}},codeInline:{t:On(m),_:Nn.LOW,l:function(n){return{S:n[2]}},v:function(n,r,t){return H("code",{key:t.h},n.S)}},footnote:{t:In(y),_:Nn.MAX,l:function(n){return V.push({I:n[2],j:n[1]}),{}},v:Gn},footnoteReference:{t:Mn(h),_:Nn.HIGH,l:function(n){return{S:n[1],B:"#"+i.slugify(n[1])}},v:function(n,r,t){return H("a",{key:t.h,href:Rn(n.B)},H("sup",{key:t.h},n.S))}},gfmTask:{t:Mn(x),_:Nn.HIGH,l:function(n){return{R:"x"===n[1].toLowerCase()}},v:function(n,r,t){return H("input",{checked:n.R,key:t.h,readOnly:!0,type:"checkbox"})}},heading:{t:In(i.enforceAtxHeadings?S:b),_:Nn.HIGH,l:function(n,r,t){return{S:Cn(r,n[2],t),T:i.slugify(n[2]),C:n[1].length}},v:function(n,r,t){return H("h"+n.C,{id:n.T,key:t.h},r(n.S,t))}},headingSetext:{t:In($),_:Nn.MAX,l:function(n,r,t){return{S:Cn(r,n[1],t),C:"="===n[2]?1:2,type:"heading"}}},htmlComment:{t:jn(A),_:Nn.HIGH,l:function(){return{}},v:Gn},image:{t:On(bn),_:Nn.HIGH,l:function(n){return{D:n[1],B:Tn(n[2]),F:n[3]}},v:function(n,r,t){return H("img",{key:t.h,alt:n.D||void 0,title:n.F||void 0,src:Rn(n.B)})}},link:{t:Mn(xn),_:Nn.LOW,l:function(n,r,t){return{S:Dn(r,n[1],t),B:Tn(n[2]),F:n[3]}},v:function(n,r,t){return H("a",{key:t.h,href:Rn(n.B),title:n.F},r(n.S,t))}},linkAngleBraceStyleDetector:{t:Mn(j),_:Nn.MAX,l:function(n){return{S:[{S:n[1],type:"text"}],B:n[1],type:"link"}}},linkBareUrlDetector:{t:function(n,r){return r.N?null:Mn(O)(n,r)},_:Nn.MAX,l:function(n){return{S:[{S:n[1],type:"text"}],B:n[1],F:void 0,type:"link"}}},linkMailtoDetector:{t:Mn(I),_:Nn.MAX,l:function(n){var r=n[1],t=n[1];return c.test(t)||(t="mailto:"+t),{S:[{S:r.replace("mailto:",""),type:"text"}],B:t,type:"link"}}},orderedList:kn(H,1),unorderedList:kn(H,2),newlineCoalescer:{t:In(g),_:Nn.LOW,l:Zn,v:function(){return"\n"}},paragraph:{t:Bn,_:Nn.LOW,l:Pn,v:function(n,r,t){return H("p",{key:t.h},r(n.S,t))}},ref:{t:Mn(T),_:Nn.MAX,l:function(n){return tn[n[1]]={B:n[2],F:n[4]},{}},v:Gn},refImage:{t:On(C),_:Nn.MAX,l:function(n){return{D:n[1]||void 0,P:n[2]}},v:function(n,r,t){return H("img",{key:t.h,alt:n.D,src:Rn(tn[n.P].B),title:tn[n.P].F})}},refLink:{t:Mn(D),_:Nn.MAX,l:function(n,r,t){return{S:r(n[1],t),Z:r(n[0].replace(F,"\\$1"),t),P:n[2]}},v:function(n,r,t){return tn[n.P]?H("a",{key:t.h,href:Rn(tn[n.P].B),title:tn[n.P].F},r(n.S,t)):H("span",{key:t.h},r(n.Z,t))}},table:{t:In(R),_:Nn.HIGH,l:En,v:function(n,r,t){return H("table",{key:t.h},H("thead",null,H("tr",null,n.L.map(function(e,o){return H("th",{key:o,style:Ln(n,o)},r(e,t))}))),H("tbody",null,n.A.map(function(e,o){return H("tr",{key:o},e.map(function(e,o){return H("td",{key:o,style:Ln(n,o)},r(e,t))}))})))}},tableSeparator:{t:function(n,r){return r.k?(r.u=!0,Z.exec(n)):null},_:Nn.HIGH,l:function(){return{type:"tableSeparator"}},v:function(){return" | "}},text:{t:jn(Y),_:Nn.MIN,l:function(n){return{S:n[0].replace(w,function(n,r){return i.namedCodesToUnicode[r]?i.namedCodesToUnicode[r]:n})}},v:function(n){return n.S}},textBolded:{t:On(W),_:Nn.MED,l:function(n,r,t){return{S:r(n[2],t)}},v:function(n,r,t){return H("strong",{key:t.h},r(n.S,t))}},textEmphasized:{t:On(Q),_:Nn.LOW,l:function(n,r,t){return{S:r(n[2],t)}},v:function(n,r,t){return H("em",{key:t.h},r(n.S,t))}},textEscaped:{t:On(K),_:Nn.HIGH,l:function(n){return{S:n[1],type:"text"}}},textMarked:{t:On(X),_:Nn.LOW,l:Pn,v:function(n,r,t){return H("mark",{key:t.h},r(n.S,t))}},textStrikethroughed:{t:On(J),_:Nn.LOW,l:Pn,v:function(n,r,t){return H("del",{key:t.h},r(n.S,t))}}};!0!==i.disableParsingRawHTML&&(en.htmlBlock={t:jn(z),_:Nn.HIGH,l:function(n,r,t){var e,o=n[3].match(rn),a=new RegExp("^"+o[1],"gm"),c=n[3].replace(a,""),i=(e=c,$n.some(function(n){return n.test(e)})?Fn:Cn),_=n[1].toLowerCase(),f=-1!==u.indexOf(_);t.N=t.N||"a"===_;var l=f?n[3]:i(r,c,t);return t.N=!1,{O:U(n[2]),S:l,G:f,H:f?_:n[1]}},v:function(n,t,e){return H(n.H,r({key:e.h},n.O),n.G?n.S:t(n.S,e))}},en.htmlSelfClosing={t:jn(L),_:Nn.HIGH,l:function(n){return{O:U(n[2]||""),H:n[1]}},v:function(n,t,e){return H(n.H,r({},n.O,{key:e.h}))}});var on,un=function(n){var r=Object.keys(n);function t(e,o){for(var u=[],a="";e;)for(var c=0;c<r.length;){var i=r[c],_=n[i],f=_.t(e,o,a);if(f){var l=f[0];e=e.substring(l.length);var s=_.l(f,t,o);null==s.type&&(s.type=i),u.push(s),a=l;break}c++}return u}return r.sort(function(r,t){var e=n[r]._,o=n[t]._;return e!==o?e-o:r<t?-1:1}),function(n,r){return t(function(n){return n.replace(v,"\n").replace(k,"").replace(P,"    ")}(n),r)}}(en),an=(on=function(n){return function(r,t,e){return n[r.type].v(r,t,e)}}(en),function n(r,t){if(void 0===t&&(t={}),Array.isArray(r)){for(var e=t.h,o=[],u=!1,a=0;a<r.length;a++){t.h=a;var c=n(r[a],t),i="string"==typeof c;i&&u?o[o.length-1]+=c:null!==c&&o.push(c),u=i}return t.h=e,o}return on(r,n,t)}),cn=q(t);return V.length?H("div",null,cn,H("footer",{key:"footer"},V.map(function(n){return H("div",{id:i.slugify(n.j),key:n.j},n.j,an(un(n.I,{u:!0})))}))):cn}!function(n){n[n.MAX=0]="MAX",n[n.HIGH=1]="HIGH",n[n.MED=2]="MED",n[n.LOW=3]="LOW",n[n.MIN=4]="MIN"}(Nn||(Nn={}));export default function(r){var e=r.children,o=r.options,u=function(n,r){if(null==n)return{};var t,e,o={},u=Object.keys(n);for(e=0;e<u.length;e++)r.indexOf(t=u[e])>=0||(o[t]=n[t]);return o}(r,t);return n.cloneElement(Vn(e,o),u)}export{Vn as compiler};
//# sourceMappingURL=index.module.js.map
