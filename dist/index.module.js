import*as n from"react";function t(){return t=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}return n},t.apply(this,arguments)}var r=["children","options"],e=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce(function(n,t){return n[t.toLowerCase()]=t,n},{for:"htmlFor"}),u={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},o=["style","script"],a=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,c=/mailto:/i,i=/\n{2,2}$/,_=/^( *>[^\n]*(\n[^\n]+)*)(\n{2,2})/,f=/^ *> ?/gm,l=/^ {2,}\n/,s=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,d=/^(?:\n *)*\n/,p=/\r\n?/g,m=/^\[\^([^\]]+)](:.*)\n/,g=/^\[\^([^\]]+)]/,v=/\f/g,y=/^\s*?\[(x|\s)\]/,h=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,k=/^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,x=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,b=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,S=/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,$=/^<!--[\s\S]*?(?:-->)/,z=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,A=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,w=/^\{.*\}$/,E=/^<([^ >]+@[^ >]+)>/,L=/^<([^ >]+:\/[^ >]+)>/,B=/-([a-z])?/gi,O=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,I=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,M=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,Z=/^\[([^\]]*)\] ?\[([^\]]*)\]/,j=/(\[|\])/g,D=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,R=/\t/g,T=/^ *\| */,C=/(^ *\||\| *$)/g,F=/ *$/,N=/^ *:-+: *$/,P=/^ *:-+ *$/,G=/^ *-+: *$/,H=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,q=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,Q=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,U=/^\\([^0-9A-Za-z\s])/,V=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|([a-zA-Z\d.+^!@#$%^&*()_-]+@[a-zA-Z\d.-]+)|[\d]+|\n\n| {2,}\n|[\w-]+:\S|$)/i,W=/^([ \t]*)/,X=/\\([^\\])/g,J=/ *\n+$/,K=/(?:^|\n)( *)$/,Y="(?:\\d+\\.)",nn="(?:[*+-])";function tn(n){return"( *)("+(1===n?Y:nn)+") +"}var rn=tn(1),en=tn(2);function un(n){return new RegExp("^"+(1===n?rn:en))}var on=un(1),an=un(2);function cn(n){return new RegExp("^"+(1===n?rn:en)+"[^\\n]*(?:\\n(?!\\1"+(1===n?Y:nn)+" )[^\\n]*)*(\\n|$)","gm")}var _n=cn(1),fn=cn(2);function ln(n){var t=1===n?Y:nn;return new RegExp("^( *)("+t+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+t+" (?!"+t+" ))\\n*|\\s*\\n*$)")}var sn=ln(1),dn=ln(2);function pn(n,t){var r=1===t,e=r?sn:dn,u=r?_n:fn,o=r?on:an;return{t:function(n,t,r){var u=K.exec(r);return u&&(t.u||!t.o&&!t.i)?e.exec(n=u[1]+n):null},_:Tn.HIGH,l:function(n,t,e){var a=r?+n[2]:void 0,c=n[0].replace(i,"\n").match(u),_=!1;return{p:c.map(function(n,r){var u=o.exec(n)[0].length,a=new RegExp("^ {1,"+u+"}","gm"),i=n.replace(a,"").replace(o,""),f=r===c.length-1,l=-1!==i.indexOf("\n\n")||f&&_;_=l;var s,d=e.o,p=e.u;e.u=!0,l?(e.o=!1,s=i.replace(J,"\n\n")):(e.o=!0,s=i.replace(J,""));var m=t(s,e);return e.o=d,e.u=p,m}),m:r,g:a}},v:function(t,r,e){return n(t.m?"ol":"ul",{key:e.h,start:t.g},t.p.map(function(t,u){return n("li",{key:u},r(t,e))}))}}}var mn=/^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,gn=/^([\w-]+:\/\/[\w/:;%#$&!?()~.=+@*,[\]{}-]+)/,vn=/^([a-zA-Z\d.+^!@#$%^&*()_-]+@[a-zA-Z\d.-]+)/,yn=/^(\+?\d{0,2}\(?\d{2,4}[)-]?\d{2,4}-?\d{4})/,hn=/^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,kn=[_,/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,h,x,k,$,O,_n,sn,fn,dn],xn=[].concat(kn,[/^[^\n]+(?:  \n|\n{2,2})/,b,A]);function bn(n){return n.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function Sn(n){return G.test(n)?"right":N.test(n)?"center":P.test(n)?"left":null}function $n(n,t,r){var e=r.k;r.k=!0;var u=t(n.trim(),r);r.k=e;var o=[[]];return u.forEach(function(n,t){"tableSeparator"===n.type?0!==t&&t!==u.length-1&&o.push([]):("text"!==n.type||null!=u[t+1]&&"tableSeparator"!==u[t+1].type||(n.S=n.S.replace(F,"")),o[o.length-1].push(n))}),o}function zn(n,t,r){r.o=!0;var e=$n(n[1],t,r),u=n[2].replace(C,"").split("|").map(Sn),o=function(n,t,r){return n.trim().split("\n").map(function(n){return $n(n,t,r)})}(n[3],t,r);return r.o=!1,{$:u,A:o,L:e,type:"table"}}function An(n,t){return null==n.$[t]?{}:{textAlign:n.$[t]}}function wn(n){return function(t,r){return r.o?n.exec(t):null}}function En(n){return function(t,r){return r.o||r.i?n.exec(t):null}}function Ln(n){return function(t,r){return r.o||r.i?null:n.exec(t)}}function Bn(n){return function(t){return n.exec(t)}}function On(n,t,r){return t.o||t.i?null:/^(())(\n\n)/.exec(n)}function In(n,t,r){if(t.o||t.i)return null;if(r&&!r.endsWith("\n"))return null;var e="";n.split("\n").every(function(n){return!kn.some(function(t){return t.test(n)})&&(e+=n+"\n",n.trim())});var u=e.trimEnd();return""==u?null:[e,u]}function Mn(n){try{if(decodeURIComponent(n).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return}catch(n){return null}return n}function Zn(n){return n.replace(X,"$1")}function jn(n,t,r){var e=r.o||!1,u=r.i||!1;r.o=!0,r.i=!0;var o=n(t,r);return r.o=e,r.i=u,o}function Dn(n,t,r){var e=r.o||!1,u=r.i||!1;r.o=!1,r.i=!0;var o=n(t,r);return r.o=e,r.i=u,o}function Rn(n,t,r){return r.o=!1,n(t,r)}var Tn,Cn=function(n,t,r){return{S:jn(t,n[1],r)}};function Fn(){return{}}function Nn(){return null}function Pn(){return[].slice.call(arguments).filter(Boolean).join(" ")}function Gn(n,t,r){for(var e=n,u=t.split(".");u.length&&void 0!==(e=e[u[0]]);)u.shift();return e||r}function Hn(n,t){var r=Gn(t,n);return r?"function"==typeof r||"object"==typeof r&&"render"in r?r:Gn(t,n+".component",n):n}function qn(r,i){void 0===i&&(i={}),i.overrides=i.overrides||{},i.slugify=i.slugify||bn,i.namedCodesToUnicode=i.namedCodesToUnicode?t({},u,i.namedCodesToUnicode):u;var C=i.createElement||n.createElement;function F(n,r){var e=Gn(i.overrides,n+".props",{});return C.apply(void 0,[Hn(n,i.overrides),t({},r,e,{className:Pn(null==r?void 0:r.className,e.className)||void 0})].concat([].slice.call(arguments,2)))}function N(t){var r=!1;i.forceInline?r=!0:i.forceBlock||(r=!1===D.test(t));for(var e=nn(Y(r?t:t+(t.endsWith("\n\n")?"":t.endsWith("\n")?"\n":"\n\n"),{o:r}));"string"==typeof e[e.length-1]&&!e[e.length-1].trim();)e.pop();if(null===i.wrapper)return e;var u,o=i.wrapper||(r?"span":"div");if(e.length>1||i.forceWrapper)u=e;else{if(1===e.length)return"string"==typeof(u=e[0])?F("span",{key:"outer"},u):u;u=null}return n.createElement(o,{key:"outer"},u)}function P(t){var r=t.match(a);return r?r.reduce(function(t,r,u){var o=r.indexOf("=");if(-1!==o){var a=function(n){return-1!==n.indexOf("-")&&null===n.match(z)&&(n=n.replace(B,function(n,t){return t.toUpperCase()})),n}(r.slice(0,o)).trim(),c=function(n){var t=n[0];return('"'===t||"'"===t)&&n.length>=2&&n[n.length-1]===t?n.slice(1,-1):n}(r.slice(o+1).trim()),i=e[a]||a,_=t[i]=function(n,t){return"style"===n?t.split(/;\s?/).reduce(function(n,t){var r=t.slice(0,t.indexOf(":"));return n[r.replace(/(-[a-z])/g,function(n){return n[1].toUpperCase()})]=t.slice(r.length+1).trim(),n},{}):"href"===n?Mn(t):(t.match(w)&&(t=t.slice(1,t.length-1)),"true"===t||"false"!==t&&t)}(a,c);"string"==typeof _&&(b.test(_)||A.test(_))&&(t[i]=n.cloneElement(N(_.trim()),{key:u}))}else"style"!==r&&(t[e[r]||r]=!0);return t},{}):null}var G=[],X={},J={emptyLine:{t:On,_:Tn.MED,l:function(n,t,r){return{S:""}},v:function(n,t,r){return r.o?"":F("p",{key:r.h},F("br",null))}},blockQuote:{t:Ln(_),_:Tn.HIGH,l:function(n,t,r){var e=n[0].replace(f,"");return{S:t("\n\n"===e||""===e?"<br />":e,r)}},v:function(n,r,e){return F("blockquote",{key:e.h},r(n.S,t({},e,{B:!0})))}},breakLine:{t:Bn(l),_:Tn.HIGH,l:Fn,v:function(n,t,r){return F("br",{key:r.h})}},breakThematic:{t:Ln(s),_:Tn.HIGH,l:Fn,v:function(n,t,r){return F("hr",{key:r.h})}},codeBlock:{t:function(n,t){return null},_:Tn.MAX,l:function(n){return{S:n[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),O:void 0}},v:function(n,r,e){return F("pre",{key:e.h},F("code",t({},n.I,{className:n.O?"lang-"+n.O:""}),n.S))}},codeFenced:{t:function(n,t){return null},_:Tn.MAX,l:function(n){return{I:P(n[3]||""),S:n[4],O:n[2]||void 0,type:"codeBlock"}}},codeInline:{t:function(n,t){return null},_:Tn.LOW,l:function(n){return{S:n[2]}},v:function(n,t,r){return F("code",{key:r.h},n.S)}},footnote:{t:Ln(m),_:Tn.MAX,l:function(n){return G.push({M:n[2],Z:n[1]}),{}},v:Nn},footnoteReference:{t:wn(g),_:Tn.HIGH,l:function(n){return{S:n[1],j:"#"+i.slugify(n[1])}},v:function(n,t,r){return F("a",{key:r.h,href:Mn(n.j)},F("sup",{key:r.h},n.S))}},gfmTask:{t:wn(y),_:Tn.HIGH,l:function(n){return{D:"x"===n[1].toLowerCase()}},v:function(n,t,r){return F("input",{checked:n.D,key:r.h,readOnly:!0,type:"checkbox"})}},heading:{t:Ln(i.enforceAtxHeadings?k:h),_:Tn.HIGH,l:function(n,t,r){return{S:jn(t,n[2],r),R:i.slugify(n[2]),T:n[1].length}},v:function(n,t,r){return F("h"+n.T,{id:n.R,key:r.h},t(n.S,r))}},headingSetext:{t:Ln(x),_:Tn.MAX,l:function(n,t,r){return{S:jn(t,n[1],r),T:"="===n[2]?1:2,type:"heading"}}},htmlComment:{t:Bn($),_:Tn.HIGH,l:function(){return{}},v:Nn},image:{t:En(hn),_:Tn.HIGH,l:function(n){return{C:n[1],j:Zn(n[2]),F:n[3]}},v:function(n,t,r){return F("img",{key:r.h,alt:n.C||void 0,title:n.F||void 0,src:Mn(n.j)})}},link:{t:wn(mn),_:Tn.LOW,l:function(n,t,r){return{S:Dn(t,n[1],r),j:Zn(n[2]),F:n[3]}},v:function(n,t,r){return F("a",{key:r.h,href:Mn(n.j),title:n.F},t(n.S,r))}},linkAngleBraceStyleDetector:{t:wn(L),_:Tn.MAX,l:function(n){return{S:[{S:n[1],type:"text"}],j:n[1],type:"link"}}},linkBareUrlDetector:{t:function(n,t){return t.N?null:wn(gn)(n,t)},_:Tn.MAX,l:function(n){return{S:[{S:n[1],type:"text"}],j:n[1],F:void 0,type:"link"}}},linkBareEmailDetector:{t:function(n,t){return t.N?null:wn(vn)(n,t)},_:Tn.MAX,l:function(n,t,r){return{S:[{S:n[1],type:"text"}],j:n[1],F:void 0,type:"link"}}},linkBarePhoneDetector:{t:function(n,t){return t.N?null:wn(yn)(n,t)},_:Tn.MAX,l:function(n,t,r){return{S:[{S:n[1],type:"text"}],j:n[1],F:void 0,type:"link"}}},linkMailtoDetector:{t:wn(E),_:Tn.MAX,l:function(n){var t=n[1],r=n[1];return c.test(r)||(r="mailto:"+r),{S:[{S:t.replace("mailto:",""),type:"text"}],j:r,type:"link"}}},orderedList:pn(F,1),unorderedList:pn(F,2),newlineCoalescer:{t:Ln(d),_:Tn.LOW,l:Fn,v:function(){return"\n"}},paragraph:{t:In,_:Tn.LOW,l:Cn,v:function(n,t,r){return F(r.B?"span":"p",{key:r.h},t(n.S,r))}},ref:{t:wn(I),_:Tn.MAX,l:function(n){return X[n[1]]={j:n[2],F:n[4]},{}},v:Nn},refImage:{t:En(M),_:Tn.MAX,l:function(n){return{C:n[1]||void 0,P:n[2]}},v:function(n,t,r){return F("img",{key:r.h,alt:n.C,src:Mn(X[n.P].j),title:X[n.P].F})}},refLink:{t:wn(Z),_:Tn.MAX,l:function(n,t,r){return{S:t(n[1],r),G:t(n[0].replace(j,"\\$1"),r),P:n[2]}},v:function(n,t,r){return X[n.P]?F("a",{key:r.h,href:Mn(X[n.P].j),title:X[n.P].F},t(n.S,r)):F("span",{key:r.h},t(n.G,r))}},table:{t:Ln(O),_:Tn.HIGH,l:zn,v:function(n,t,r){return F("table",{key:r.h},F("thead",null,F("tr",null,n.L.map(function(e,u){return F("th",{key:u,style:An(n,u)},t(e,r))}))),F("tbody",null,n.A.map(function(e,u){return F("tr",{key:u},e.map(function(e,u){return F("td",{key:u,style:An(n,u)},t(e,r))}))})))}},tableSeparator:{t:function(n,t){return t.k?(t.o=!0,T.exec(n)):null},_:Tn.HIGH,l:function(){return{type:"tableSeparator"}},v:function(){return" | "}},text:{t:Bn(V),_:Tn.MIN,l:function(n){return{S:n[0].replace(S,function(n,t){return i.namedCodesToUnicode[t]?i.namedCodesToUnicode[t]:n})}},v:function(n){return n.S}},textBolded:{t:En(H),_:Tn.MED,l:function(n,t,r){return{S:t(n[2],r)}},v:function(n,t,r){return F("strong",{key:r.h},t(n.S,r))}},textEmphasized:{t:En(q),_:Tn.LOW,l:function(n,t,r){return{S:t(n[2],r)}},v:function(n,t,r){return F("em",{key:r.h},t(n.S,r))}},textEscaped:{t:En(U),_:Tn.HIGH,l:function(n){return{S:n[1],type:"text"}}},textStrikethroughed:{t:En(Q),_:Tn.LOW,l:Cn,v:function(n,t,r){return F("del",{key:r.h},t(n.S,r))}}};!0!==i.disableParsingRawHTML&&(J.htmlBlock={t:Bn(b),_:Tn.HIGH,l:function(n,t,r){var e,u=n[3].match(W),a=new RegExp("^"+u[1],"gm"),c=n[3].replace(a,""),i=(e=c,xn.some(function(n){return n.test(e)})?Rn:jn),_=n[1].toLowerCase(),f=-1!==o.indexOf(_);r.N=r.N||"a"===_;var l=f?n[3]:i(t,c,r);return r.N=!1,{I:P(n[2]),S:l,H:f,q:f?_:n[1]}},v:function(n,r,e){return F(n.q,t({key:e.h},n.I),n.H?n.S:r(n.S,e))}},J.htmlSelfClosing={t:Bn(A),_:Tn.HIGH,l:function(n){return{I:P(n[2]||""),q:n[1]}},v:function(n,r,e){return F(n.q,t({},n.I,{key:e.h}))}});var K,Y=function(n){var t=Object.keys(n);function r(e,u){for(var o=[],a="";e;)for(var c=0;c<t.length;){var i=t[c],_=n[i],f=_.t(e,u,a);if(f){var l=f[0];e=e.substring(l.length);var s=_.l(f,r,u);null==s.type&&(s.type=i),o.push(s),a=l;break}c++}return o}return t.sort(function(t,r){var e=n[t]._,u=n[r]._;return e!==u?e-u:t<r?-1:1}),function(n,t){return r(function(n){return n.replace(p,"\n").replace(v,"").replace(R,"    ")}(n),t)}}(J),nn=(K=function(n){return function(t,r,e){return n[t.type].v(t,r,e)}}(J),function n(t,r){if(void 0===r&&(r={}),Array.isArray(t)){for(var e=r.h,u=[],o=!1,a=0;a<t.length;a++){r.h=a;var c=n(t[a],r),i="string"==typeof c;i&&o?u[u.length-1]+=c:null!==c&&u.push(c),o=i}return r.h=e,u}return K(t,n,r)}),tn=N(r);return G.length?F("div",null,tn,F("footer",{key:"footer"},G.map(function(n){return F("div",{id:i.slugify(n.Z),key:n.Z},n.Z,nn(Y(n.M,{o:!0})))}))):tn}!function(n){n[n.MAX=0]="MAX",n[n.HIGH=1]="HIGH",n[n.MED=2]="MED",n[n.LOW=3]="LOW",n[n.MIN=4]="MIN"}(Tn||(Tn={}));export default function(t){var e=t.children,u=t.options,o=function(n,t){if(null==n)return{};var r,e,u={},o=Object.keys(n);for(e=0;e<o.length;e++)t.indexOf(r=o[e])>=0||(u[r]=n[r]);return u}(t,r);return n.cloneElement(qn(e,u),o)}export{vn as EMAIL_PATTERN,yn as PHONE_PATTERN,gn as URI_PATTERN,qn as compiler};
//# sourceMappingURL=index.module.js.map
