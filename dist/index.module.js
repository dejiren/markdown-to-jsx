import*as n from"react";function r(){return r=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])}return n},r.apply(this,arguments)}var t=["children","options"],e=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce(function(n,r){return n[r.toLowerCase()]=r,n},{for:"htmlFor"}),u={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},o=["style","script"],a=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,c=/mailto:/i,i=/\n{2,2}$/,_=/^( *>[^\n]*(\n[^\n]+)*)(\n{2,2})/,f=/^ *> ?/gm,l=/^ {2,}\n/,s=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,d=/^(?:\n *)*\n/,p=/\r\n?/g,m=/^\[\^([^\]]+)](:.*)\n/,g=/^\[\^([^\]]+)]/,v=/\f/g,y=/^\s*?\[(x|\s)\]/,h=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,k=/^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,b=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,x=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,S=/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,$=/^<!--[\s\S]*?(?:-->)/,z=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,w=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,A=/^\{.*\}$/,E=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,L=/^<([^ >]+@[^ >]+)>/,M=/^<([^ >]+:\/[^ >]+)>/,O=/-([a-z])?/gi,I=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,j=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,B=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,R=/^\[([^\]]*)\] ?\[([^\]]*)\]/,T=/(\[|\])/g,C=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,D=/\t/g,F=/^ *\| */,N=/(^ *\||\| *$)/g,P=/ *$/,Z=/^ *:-+: *$/,G=/^ *:-+ *$/,H=/^ *-+: *$/,q=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,U=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,V=/^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,W=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,Q=/^\\([^0-9A-Za-z\s])/,X=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,J=/^([ \t]*)/,K=/\\([^\\])/g,Y=/ *\n+$/,nn=/(?:^|\n)( *)$/,rn="(?:\\d+\\.)",tn="(?:[*+-])";function en(n){return"( *)("+(1===n?rn:tn)+") +"}var un=en(1),on=en(2);function an(n){return new RegExp("^"+(1===n?un:on))}var cn=an(1),_n=an(2);function fn(n){return new RegExp("^"+(1===n?un:on)+"[^\\n]*(?:\\n(?!\\1"+(1===n?rn:tn)+" )[^\\n]*)*(\\n|$)","gm")}var ln=fn(1),sn=fn(2);function dn(n){var r=1===n?rn:tn;return new RegExp("^( *)("+r+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+r+" (?!"+r+" ))\\n*|\\s*\\n*$)")}var pn=dn(1),mn=dn(2);function gn(n,r){var t=1===r,e=t?pn:mn,u=t?ln:sn,o=t?cn:_n;return{t:function(n,r,t){var u=nn.exec(t);return u&&(r.u||!r.o&&!r.i)?e.exec(n=u[1]+n):null},_:Cn.HIGH,l:function(n,r,e){var a=t?+n[2]:void 0,c=n[0].replace(i,"\n").match(u),_=!1;return{p:c.map(function(n,t){var u=o.exec(n)[0].length,a=new RegExp("^ {1,"+u+"}","gm"),i=n.replace(a,"").replace(o,""),f=t===c.length-1,l=-1!==i.indexOf("\n\n")||f&&_;_=l;var s,d=e.o,p=e.u;e.u=!0,l?(e.o=!1,s=i.replace(Y,"\n\n")):(e.o=!0,s=i.replace(Y,""));var m=r(s,e);return e.o=d,e.u=p,m}),m:t,g:a}},v:function(r,t,e){return n(r.m?"ol":"ul",{key:e.h,start:r.g},r.p.map(function(r,u){return n("li",{key:u},t(r,e))}))}}}var vn=/^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,yn=/^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,hn=[_,/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,h,b,k,$,I,ln,pn,sn,mn],kn=[].concat(hn,[/^[^\n]+(?:  \n|\n{2,2})/,x,w]);function bn(n){return n.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function xn(n){return H.test(n)?"right":Z.test(n)?"center":G.test(n)?"left":null}function Sn(n,r,t){var e=t.k;t.k=!0;var u=r(n.trim(),t);t.k=e;var o=[[]];return u.forEach(function(n,r){"tableSeparator"===n.type?0!==r&&r!==u.length-1&&o.push([]):("text"!==n.type||null!=u[r+1]&&"tableSeparator"!==u[r+1].type||(n.S=n.S.replace(P,"")),o[o.length-1].push(n))}),o}function $n(n,r,t){t.o=!0;var e=Sn(n[1],r,t),u=n[2].replace(N,"").split("|").map(xn),o=function(n,r,t){return n.trim().split("\n").map(function(n){return Sn(n,r,t)})}(n[3],r,t);return t.o=!1,{$:u,A:o,L:e,type:"table"}}function zn(n,r){return null==n.$[r]?{}:{textAlign:n.$[r]}}function wn(n){return function(r,t){return t.o?n.exec(r):null}}function An(n){return function(r,t){return t.o||t.i?n.exec(r):null}}function En(n){return function(r,t){return t.o||t.i?null:n.exec(r)}}function Ln(n){return function(r){return n.exec(r)}}function Mn(n,r,t){return r.o||r.i?null:/^(())(\n\n)/.exec(n)}function On(n,r,t){if(r.o||r.i)return null;if(t&&!t.endsWith("\n"))return null;var e="";n.split("\n").every(function(n){return!hn.some(function(r){return r.test(n)})&&(e+=n+"\n",n.trim())});var u=e.trimEnd();return""==u?null:[e,u]}function In(n){try{if(decodeURIComponent(n).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return}catch(n){return null}return n}function jn(n){return n.replace(K,"$1")}function Bn(n,r,t){var e=t.o||!1,u=t.i||!1;t.o=!0,t.i=!0;var o=n(r,t);return t.o=e,t.i=u,o}function Rn(n,r,t){var e=t.o||!1,u=t.i||!1;t.o=!1,t.i=!0;var o=n(r,t);return t.o=e,t.i=u,o}function Tn(n,r,t){return t.o=!1,n(r,t)}var Cn,Dn=function(n,r,t){return{S:Bn(r,n[1],t)}};function Fn(){return{}}function Nn(){return null}function Pn(){return[].slice.call(arguments).filter(Boolean).join(" ")}function Zn(n,r,t){for(var e=n,u=r.split(".");u.length&&void 0!==(e=e[u[0]]);)u.shift();return e||t}function Gn(n,r){var t=Zn(r,n);return t?"function"==typeof t||"object"==typeof t&&"render"in t?t:Zn(r,n+".component",n):n}function Hn(t,i){void 0===i&&(i={}),i.overrides=i.overrides||{},i.slugify=i.slugify||bn,i.namedCodesToUnicode=i.namedCodesToUnicode?r({},u,i.namedCodesToUnicode):u;var N=i.createElement||n.createElement;function P(n,t){var e=Zn(i.overrides,n+".props",{});return N.apply(void 0,[Gn(n,i.overrides),r({},t,e,{className:Pn(null==t?void 0:t.className,e.className)||void 0})].concat([].slice.call(arguments,2)))}function Z(r){var t=!1;i.forceInline?t=!0:i.forceBlock||(t=!1===C.test(r));for(var e=tn(rn(t?r:r+(r.endsWith("\n\n")?"":r.endsWith("\n")?"\n":"\n\n"),{o:t}));"string"==typeof e[e.length-1]&&!e[e.length-1].trim();)e.pop();if(null===i.wrapper)return e;var u,o=i.wrapper||(t?"span":"div");if(e.length>1||i.forceWrapper)u=e;else{if(1===e.length)return"string"==typeof(u=e[0])?P("span",{key:"outer"},u):u;u=null}return n.createElement(o,{key:"outer"},u)}function G(r){var t=r.match(a);return t?t.reduce(function(r,t,u){var o=t.indexOf("=");if(-1!==o){var a=function(n){return-1!==n.indexOf("-")&&null===n.match(z)&&(n=n.replace(O,function(n,r){return r.toUpperCase()})),n}(t.slice(0,o)).trim(),c=function(n){var r=n[0];return('"'===r||"'"===r)&&n.length>=2&&n[n.length-1]===r?n.slice(1,-1):n}(t.slice(o+1).trim()),i=e[a]||a,_=r[i]=function(n,r){return"style"===n?r.split(/;\s?/).reduce(function(n,r){var t=r.slice(0,r.indexOf(":"));return n[t.replace(/(-[a-z])/g,function(n){return n[1].toUpperCase()})]=r.slice(t.length+1).trim(),n},{}):"href"===n?In(r):(r.match(A)&&(r=r.slice(1,r.length-1)),"true"===r||"false"!==r&&r)}(a,c);"string"==typeof _&&(x.test(_)||w.test(_))&&(r[i]=n.cloneElement(Z(_.trim()),{key:u}))}else"style"!==t&&(r[e[t]||t]=!0);return r},{}):null}var H=[],K={},Y={emptyLine:{t:Mn,_:Cn.MED,l:function(n,r,t){return{S:""}},v:function(n,r,t){return t.o?"":P("p",{key:t.h},P("br",null))}},blockQuote:{t:En(_),_:Cn.HIGH,l:function(n,r,t){var e=n[0].replace(f,"");return{S:r("\n\n"===e||""===e?"<br />":e,t)}},v:function(n,t,e){return P("blockquote",{key:e.h},t(n.S,r({},e,{o:!0})))}},breakLine:{t:Ln(l),_:Cn.HIGH,l:Fn,v:function(n,r,t){return P("br",{key:t.h})}},breakThematic:{t:En(s),_:Cn.HIGH,l:Fn,v:function(n,r,t){return P("hr",{key:t.h})}},codeBlock:{t:function(n,r){return null},_:Cn.MAX,l:function(n){return{S:n[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),M:void 0}},v:function(n,t,e){return P("pre",{key:e.h},P("code",r({},n.O,{className:n.M?"lang-"+n.M:""}),n.S))}},codeFenced:{t:function(n,r){return null},_:Cn.MAX,l:function(n){return{O:G(n[3]||""),S:n[4],M:n[2]||void 0,type:"codeBlock"}}},codeInline:{t:function(n,r){return null},_:Cn.LOW,l:function(n){return{S:n[2]}},v:function(n,r,t){return P("code",{key:t.h},n.S)}},footnote:{t:En(m),_:Cn.MAX,l:function(n){return H.push({I:n[2],j:n[1]}),{}},v:Nn},footnoteReference:{t:wn(g),_:Cn.HIGH,l:function(n){return{S:n[1],B:"#"+i.slugify(n[1])}},v:function(n,r,t){return P("a",{key:t.h,href:In(n.B)},P("sup",{key:t.h},n.S))}},gfmTask:{t:wn(y),_:Cn.HIGH,l:function(n){return{R:"x"===n[1].toLowerCase()}},v:function(n,r,t){return P("input",{checked:n.R,key:t.h,readOnly:!0,type:"checkbox"})}},heading:{t:En(i.enforceAtxHeadings?k:h),_:Cn.HIGH,l:function(n,r,t){return{S:Bn(r,n[2],t),T:i.slugify(n[2]),C:n[1].length}},v:function(n,r,t){return P("h"+n.C,{id:n.T,key:t.h},r(n.S,t))}},headingSetext:{t:En(b),_:Cn.MAX,l:function(n,r,t){return{S:Bn(r,n[1],t),C:"="===n[2]?1:2,type:"heading"}}},htmlComment:{t:Ln($),_:Cn.HIGH,l:function(){return{}},v:Nn},image:{t:An(yn),_:Cn.HIGH,l:function(n){return{D:n[1],B:jn(n[2]),F:n[3]}},v:function(n,r,t){return P("img",{key:t.h,alt:n.D||void 0,title:n.F||void 0,src:In(n.B)})}},link:{t:wn(vn),_:Cn.LOW,l:function(n,r,t){return{S:Rn(r,n[1],t),B:jn(n[2]),F:n[3]}},v:function(n,r,t){return P("a",{key:t.h,href:In(n.B),title:n.F},r(n.S,t))}},linkAngleBraceStyleDetector:{t:wn(M),_:Cn.MAX,l:function(n){return{S:[{S:n[1],type:"text"}],B:n[1],type:"link"}}},linkBareUrlDetector:{t:function(n,r){return r.N?null:wn(E)(n,r)},_:Cn.MAX,l:function(n){return{S:[{S:n[1],type:"text"}],B:n[1],F:void 0,type:"link"}}},linkMailtoDetector:{t:wn(L),_:Cn.MAX,l:function(n){var r=n[1],t=n[1];return c.test(t)||(t="mailto:"+t),{S:[{S:r.replace("mailto:",""),type:"text"}],B:t,type:"link"}}},orderedList:gn(P,1),unorderedList:gn(P,2),newlineCoalescer:{t:En(d),_:Cn.LOW,l:Fn,v:function(){return"\n"}},paragraph:{t:On,_:Cn.LOW,l:Dn,v:function(n,r,t){return P(t.o?"span":"p",{key:t.h},r(n.S,t))}},ref:{t:wn(j),_:Cn.MAX,l:function(n){return K[n[1]]={B:n[2],F:n[4]},{}},v:Nn},refImage:{t:An(B),_:Cn.MAX,l:function(n){return{D:n[1]||void 0,P:n[2]}},v:function(n,r,t){return P("img",{key:t.h,alt:n.D,src:In(K[n.P].B),title:K[n.P].F})}},refLink:{t:wn(R),_:Cn.MAX,l:function(n,r,t){return{S:r(n[1],t),Z:r(n[0].replace(T,"\\$1"),t),P:n[2]}},v:function(n,r,t){return K[n.P]?P("a",{key:t.h,href:In(K[n.P].B),title:K[n.P].F},r(n.S,t)):P("span",{key:t.h},r(n.Z,t))}},table:{t:En(I),_:Cn.HIGH,l:$n,v:function(n,r,t){return P("table",{key:t.h},P("thead",null,P("tr",null,n.L.map(function(e,u){return P("th",{key:u,style:zn(n,u)},r(e,t))}))),P("tbody",null,n.A.map(function(e,u){return P("tr",{key:u},e.map(function(e,u){return P("td",{key:u,style:zn(n,u)},r(e,t))}))})))}},tableSeparator:{t:function(n,r){return r.k?(r.o=!0,F.exec(n)):null},_:Cn.HIGH,l:function(){return{type:"tableSeparator"}},v:function(){return" | "}},text:{t:Ln(X),_:Cn.MIN,l:function(n){return{S:n[0].replace(S,function(n,r){return i.namedCodesToUnicode[r]?i.namedCodesToUnicode[r]:n})}},v:function(n){return n.S}},textBolded:{t:An(q),_:Cn.MED,l:function(n,r,t){return{S:r(n[2],t)}},v:function(n,r,t){return P("strong",{key:t.h},r(n.S,t))}},textEmphasized:{t:An(U),_:Cn.LOW,l:function(n,r,t){return{S:r(n[2],t)}},v:function(n,r,t){return P("em",{key:t.h},r(n.S,t))}},textEscaped:{t:An(Q),_:Cn.HIGH,l:function(n){return{S:n[1],type:"text"}}},textMarked:{t:An(V),_:Cn.LOW,l:Dn,v:function(n,r,t){return P("mark",{key:t.h},r(n.S,t))}},textStrikethroughed:{t:An(W),_:Cn.LOW,l:Dn,v:function(n,r,t){return P("del",{key:t.h},r(n.S,t))}}};!0!==i.disableParsingRawHTML&&(Y.htmlBlock={t:Ln(x),_:Cn.HIGH,l:function(n,r,t){var e,u=n[3].match(J),a=new RegExp("^"+u[1],"gm"),c=n[3].replace(a,""),i=(e=c,kn.some(function(n){return n.test(e)})?Tn:Bn),_=n[1].toLowerCase(),f=-1!==o.indexOf(_);t.N=t.N||"a"===_;var l=f?n[3]:i(r,c,t);return t.N=!1,{O:G(n[2]),S:l,G:f,H:f?_:n[1]}},v:function(n,t,e){return P(n.H,r({key:e.h},n.O),n.G?n.S:t(n.S,e))}},Y.htmlSelfClosing={t:Ln(w),_:Cn.HIGH,l:function(n){return{O:G(n[2]||""),H:n[1]}},v:function(n,t,e){return P(n.H,r({},n.O,{key:e.h}))}});var nn,rn=function(n){var r=Object.keys(n);function t(e,u){for(var o=[],a="";e;)for(var c=0;c<r.length;){var i=r[c],_=n[i],f=_.t(e,u,a);if(f){var l=f[0];e=e.substring(l.length);var s=_.l(f,t,u);null==s.type&&(s.type=i),o.push(s),a=l;break}c++}return o}return r.sort(function(r,t){var e=n[r]._,u=n[t]._;return e!==u?e-u:r<t?-1:1}),function(n,r){return t(function(n){return n.replace(p,"\n").replace(v,"").replace(D,"    ")}(n),r)}}(Y),tn=(nn=function(n){return function(r,t,e){return n[r.type].v(r,t,e)}}(Y),function n(r,t){if(void 0===t&&(t={}),Array.isArray(r)){for(var e=t.h,u=[],o=!1,a=0;a<r.length;a++){t.h=a;var c=n(r[a],t),i="string"==typeof c;i&&o?u[u.length-1]+=c:null!==c&&u.push(c),o=i}return t.h=e,u}return nn(r,n,t)}),en=Z(t);return H.length?P("div",null,en,P("footer",{key:"footer"},H.map(function(n){return P("div",{id:i.slugify(n.j),key:n.j},n.j,tn(rn(n.I,{o:!0})))}))):en}!function(n){n[n.MAX=0]="MAX",n[n.HIGH=1]="HIGH",n[n.MED=2]="MED",n[n.LOW=3]="LOW",n[n.MIN=4]="MIN"}(Cn||(Cn={}));export default function(r){var e=r.children,u=r.options,o=function(n,r){if(null==n)return{};var t,e,u={},o=Object.keys(n);for(e=0;e<o.length;e++)r.indexOf(t=o[e])>=0||(u[t]=n[t]);return u}(r,t);return n.cloneElement(Hn(e,u),o)}export{Hn as compiler};
//# sourceMappingURL=index.module.js.map
