(self.webpackChunkgatsby_demo=self.webpackChunkgatsby_demo||[]).push([[976],{3644:function(e,r,t){"use strict";t.d(r,{xu:function(){return ye},W2:function(){return Ce},iz:function(){return Te},kC:function(){return ve},OL:function(){return Le}});var o=t(4925),a=t(2982),i=t(8936),n=t(7285);var s=function(e){var r={};return function(t){return void 0===r[t]&&(r[t]=e(t)),r[t]}},l=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,d=s((function(e){return l.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),c=t(4756),p=t.n(c),g=function(e,r){var t=p()({},e,r);for(var o in e){var a;e[o]&&"object"==typeof r[o]&&p()(t,((a={})[o]=p()(e[o],r[o]),a))}return t},u={breakpoints:[40,52,64].map((function(e){return e+"em"}))},m=function(e){return"@media screen and (min-width: "+e+")"},f=function(e,r){return h(r,e,e)},h=function(e,r,t,o,a){for(r=r&&r.split?r.split("."):[r],o=0;o<r.length;o++)e=e?e[r[o]]:a;return e===a?t:e},b=function e(r){var t={},o=function(e){var o,a,i={},n=!1,s=e.theme&&e.theme.disableStyledSystemCache;for(var l in e)if(r[l]){var d=r[l],c=e[l],f=h(e.theme,d.scale,d.defaults);if("object"!=typeof c)p()(i,d(c,f,e));else{if(t.breakpoints=!s&&t.breakpoints||h(e.theme,"breakpoints",u.breakpoints),Array.isArray(c)){t.media=!s&&t.media||[null].concat(t.breakpoints.map(m)),i=g(i,y(t.media,d,f,c,e));continue}null!==c&&(i=g(i,v(t.breakpoints,d,f,c,e)),n=!0)}}return n&&(o=i,a={},Object.keys(o).sort((function(e,r){return e.localeCompare(r,void 0,{numeric:!0,sensitivity:"base"})})).forEach((function(e){a[e]=o[e]})),i=a),i};o.config=r,o.propNames=Object.keys(r),o.cache=t;var a=Object.keys(r).filter((function(e){return"config"!==e}));return a.length>1&&a.forEach((function(t){var a;o[t]=e(((a={})[t]=r[t],a))})),o},y=function(e,r,t,o,a){var i={};return o.slice(0,e.length).forEach((function(o,n){var s,l=e[n],d=r(o,t,a);l?p()(i,((s={})[l]=p()({},i[l],d),s)):p()(i,d)})),i},v=function(e,r,t,o,a){var i={};for(var n in o){var s=e[n],l=r(o[n],t,a);if(s){var d,c=m(s);p()(i,((d={})[c]=p()({},i[c],l),d))}else p()(i,l)}return i},x=function(e){var r=e.properties,t=e.property,o=e.scale,a=e.transform,i=void 0===a?f:a,n=e.defaultScale;r=r||[t];var s=function(e,t,o){var a={},n=i(e,t,o);if(null!==n)return r.forEach((function(e){a[e]=n})),a};return s.scale=o,s.defaults=n,s},S=function(e){void 0===e&&(e={});var r={};return Object.keys(e).forEach((function(t){var o=e[t];r[t]=!0!==o?"function"!=typeof o?x(o):o:x({property:t,scale:t})})),b(r)},k=function(){for(var e={},r=arguments.length,t=new Array(r),o=0;o<r;o++)t[o]=arguments[o];t.forEach((function(r){r&&r.config&&p()(e,r.config)}));var a=b(e);return a},R=S({width:{property:"width",scale:"sizes",transform:function(e,r){return h(r,e,!function(e){return"number"==typeof e&&!isNaN(e)}(e)||e>1?e:100*e+"%")}},height:{property:"height",scale:"sizes"},minWidth:{property:"minWidth",scale:"sizes"},minHeight:{property:"minHeight",scale:"sizes"},maxWidth:{property:"maxWidth",scale:"sizes"},maxHeight:{property:"maxHeight",scale:"sizes"},size:{properties:["width","height"],scale:"sizes"},overflow:!0,overflowX:!0,overflowY:!0,display:!0,verticalAlign:!0}),w=R,T={color:{property:"color",scale:"colors"},backgroundColor:{property:"backgroundColor",scale:"colors"},opacity:!0};T.bg=T.backgroundColor;var C=S(T),L=C,z=S({fontFamily:{property:"fontFamily",scale:"fonts"},fontSize:{property:"fontSize",scale:"fontSizes",defaultScale:[12,14,16,20,24,32,48,64,72]},fontWeight:{property:"fontWeight",scale:"fontWeights"},lineHeight:{property:"lineHeight",scale:"lineHeights"},letterSpacing:{property:"letterSpacing",scale:"letterSpacings"},textAlign:!0,fontStyle:!0}),E=z,B=S({alignItems:!0,alignContent:!0,justifyItems:!0,justifyContent:!0,flexWrap:!0,flexDirection:!0,flex:!0,flexGrow:!0,flexShrink:!0,flexBasis:!0,justifySelf:!0,alignSelf:!0,order:!0}),W=B,A={space:[0,4,8,16,32,64,128,256,512]},O=S({gridGap:{property:"gridGap",scale:"space",defaultScale:A.space},gridColumnGap:{property:"gridColumnGap",scale:"space",defaultScale:A.space},gridRowGap:{property:"gridRowGap",scale:"space",defaultScale:A.space},gridColumn:!0,gridRow:!0,gridAutoFlow:!0,gridAutoColumns:!0,gridAutoRows:!0,gridTemplateColumns:!0,gridTemplateRows:!0,gridTemplateAreas:!0,gridArea:!0}),P=O,H={border:{property:"border",scale:"borders"},borderWidth:{property:"borderWidth",scale:"borderWidths"},borderStyle:{property:"borderStyle",scale:"borderStyles"},borderColor:{property:"borderColor",scale:"colors"},borderRadius:{property:"borderRadius",scale:"radii"},borderTop:{property:"borderTop",scale:"borders"},borderTopLeftRadius:{property:"borderTopLeftRadius",scale:"radii"},borderTopRightRadius:{property:"borderTopRightRadius",scale:"radii"},borderRight:{property:"borderRight",scale:"borders"},borderBottom:{property:"borderBottom",scale:"borders"},borderBottomLeftRadius:{property:"borderBottomLeftRadius",scale:"radii"},borderBottomRightRadius:{property:"borderBottomRightRadius",scale:"radii"},borderLeft:{property:"borderLeft",scale:"borders"},borderX:{properties:["borderLeft","borderRight"],scale:"borders"},borderY:{properties:["borderTop","borderBottom"],scale:"borders"},borderTopWidth:{property:"borderTopWidth",scale:"borderWidths"},borderTopColor:{property:"borderTopColor",scale:"colors"},borderTopStyle:{property:"borderTopStyle",scale:"borderStyles"}};H.borderTopLeftRadius={property:"borderTopLeftRadius",scale:"radii"},H.borderTopRightRadius={property:"borderTopRightRadius",scale:"radii"},H.borderBottomWidth={property:"borderBottomWidth",scale:"borderWidths"},H.borderBottomColor={property:"borderBottomColor",scale:"colors"},H.borderBottomStyle={property:"borderBottomStyle",scale:"borderStyles"},H.borderBottomLeftRadius={property:"borderBottomLeftRadius",scale:"radii"},H.borderBottomRightRadius={property:"borderBottomRightRadius",scale:"radii"},H.borderLeftWidth={property:"borderLeftWidth",scale:"borderWidths"},H.borderLeftColor={property:"borderLeftColor",scale:"colors"},H.borderLeftStyle={property:"borderLeftStyle",scale:"borderStyles"},H.borderRightWidth={property:"borderRightWidth",scale:"borderWidths"},H.borderRightColor={property:"borderRightColor",scale:"colors"},H.borderRightStyle={property:"borderRightStyle",scale:"borderStyles"};var M=S(H),I=M,j={background:!0,backgroundImage:!0,backgroundSize:!0,backgroundPosition:!0,backgroundRepeat:!0};j.bgImage=j.backgroundImage,j.bgSize=j.backgroundSize,j.bgPosition=j.backgroundPosition,j.bgRepeat=j.backgroundRepeat;var G=S(j),X=G,Y={space:[0,4,8,16,32,64,128,256,512]},F=S({position:!0,zIndex:{property:"zIndex",scale:"zIndices"},top:{property:"top",scale:"space",defaultScale:Y.space},right:{property:"right",scale:"space",defaultScale:Y.space},bottom:{property:"bottom",scale:"space",defaultScale:Y.space},left:{property:"left",scale:"space",defaultScale:Y.space}}),_=F,U={space:[0,4,8,16,32,64,128,256,512]},N=function(e){return"number"==typeof e&&!isNaN(e)},D=function(e,r){if(!N(e))return h(r,e,e);var t=e<0,o=Math.abs(e),a=h(r,o,o);return N(a)?a*(t?-1:1):t?"-"+a:a},Z={};Z.margin={margin:{property:"margin",scale:"space",transform:D,defaultScale:U.space},marginTop:{property:"marginTop",scale:"space",transform:D,defaultScale:U.space},marginRight:{property:"marginRight",scale:"space",transform:D,defaultScale:U.space},marginBottom:{property:"marginBottom",scale:"space",transform:D,defaultScale:U.space},marginLeft:{property:"marginLeft",scale:"space",transform:D,defaultScale:U.space},marginX:{properties:["marginLeft","marginRight"],scale:"space",transform:D,defaultScale:U.space},marginY:{properties:["marginTop","marginBottom"],scale:"space",transform:D,defaultScale:U.space}},Z.margin.m=Z.margin.margin,Z.margin.mt=Z.margin.marginTop,Z.margin.mr=Z.margin.marginRight,Z.margin.mb=Z.margin.marginBottom,Z.margin.ml=Z.margin.marginLeft,Z.margin.mx=Z.margin.marginX,Z.margin.my=Z.margin.marginY,Z.padding={padding:{property:"padding",scale:"space",defaultScale:U.space},paddingTop:{property:"paddingTop",scale:"space",defaultScale:U.space},paddingRight:{property:"paddingRight",scale:"space",defaultScale:U.space},paddingBottom:{property:"paddingBottom",scale:"space",defaultScale:U.space},paddingLeft:{property:"paddingLeft",scale:"space",defaultScale:U.space},paddingX:{properties:["paddingLeft","paddingRight"],scale:"space",defaultScale:U.space},paddingY:{properties:["paddingTop","paddingBottom"],scale:"space",defaultScale:U.space}},Z.padding.p=Z.padding.padding,Z.padding.pt=Z.padding.paddingTop,Z.padding.pr=Z.padding.paddingRight,Z.padding.pb=Z.padding.paddingBottom,Z.padding.pl=Z.padding.paddingLeft,Z.padding.px=Z.padding.paddingX,Z.padding.py=Z.padding.paddingY;var V=k(S(Z.margin),S(Z.padding)),q=V,K=S({boxShadow:{property:"boxShadow",scale:"shadows"},textShadow:{property:"textShadow",scale:"shadows"}});function $(){return $=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},$.apply(this,arguments)}var J=function(e,r,t,o,a){for(r=r&&r.split?r.split("."):[r],o=0;o<r.length;o++)e=e?e[r[o]]:a;return e===a?t:e},Q=[40,52,64].map((function(e){return e+"em"})),ee={space:[0,4,8,16,32,64,128,256,512],fontSizes:[12,14,16,20,24,32,48,64,72]},re={bg:"backgroundColor",m:"margin",mt:"marginTop",mr:"marginRight",mb:"marginBottom",ml:"marginLeft",mx:"marginX",my:"marginY",p:"padding",pt:"paddingTop",pr:"paddingRight",pb:"paddingBottom",pl:"paddingLeft",px:"paddingX",py:"paddingY"},te={marginX:["marginLeft","marginRight"],marginY:["marginTop","marginBottom"],paddingX:["paddingLeft","paddingRight"],paddingY:["paddingTop","paddingBottom"],size:["width","height"]},oe={color:"colors",backgroundColor:"colors",borderColor:"colors",margin:"space",marginTop:"space",marginRight:"space",marginBottom:"space",marginLeft:"space",marginX:"space",marginY:"space",padding:"space",paddingTop:"space",paddingRight:"space",paddingBottom:"space",paddingLeft:"space",paddingX:"space",paddingY:"space",top:"space",right:"space",bottom:"space",left:"space",gridGap:"space",gridColumnGap:"space",gridRowGap:"space",gap:"space",columnGap:"space",rowGap:"space",fontFamily:"fonts",fontSize:"fontSizes",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",border:"borders",borderTop:"borders",borderRight:"borders",borderBottom:"borders",borderLeft:"borders",borderWidth:"borderWidths",borderStyle:"borderStyles",borderRadius:"radii",borderTopRightRadius:"radii",borderTopLeftRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",borderTopWidth:"borderWidths",borderTopColor:"colors",borderTopStyle:"borderStyles",borderBottomWidth:"borderWidths",borderBottomColor:"colors",borderBottomStyle:"borderStyles",borderLeftWidth:"borderWidths",borderLeftColor:"colors",borderLeftStyle:"borderStyles",borderRightWidth:"borderWidths",borderRightColor:"colors",borderRightStyle:"borderStyles",outlineColor:"colors",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices",width:"sizes",minWidth:"sizes",maxWidth:"sizes",height:"sizes",minHeight:"sizes",maxHeight:"sizes",flexBasis:"sizes",size:"sizes",fill:"colors",stroke:"colors"},ae=function(e,r){if("number"!=typeof r||r>=0)return J(e,r,r);var t=Math.abs(r),o=J(e,t,t);return"string"==typeof o?"-"+o:-1*o},ie=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","top","bottom","left","right"].reduce((function(e,r){var t;return $({},e,((t={})[r]=ae,t))}),{}),ne=function e(r){return function(t){void 0===t&&(t={});var o=$({},ee,{},t.theme||t),a={},i=function(e){return function(r){var t={},o=J(r,"breakpoints",Q),a=[null].concat(o.map((function(e){return"@media screen and (min-width: "+e+")"})));for(var i in e){var n="function"==typeof e[i]?e[i](r):e[i];if(null!=n)if(Array.isArray(n))for(var s=0;s<n.slice(0,a.length).length;s++){var l=a[s];l?(t[l]=t[l]||{},null!=n[s]&&(t[l][i]=n[s])):t[i]=n[s]}else t[i]=n}return t}}("function"==typeof r?r(o):r)(o);for(var n in i){var s=i[n],l="function"==typeof s?s(o):s;if("variant"!==n)if(l&&"object"==typeof l)a[n]=e(l)(o);else{var d=J(re,n,n),c=J(oe,d),p=J(o,c,J(o,d,{})),g=J(ie,d,J)(p,l,l);if(te[d])for(var u=te[d],m=0;m<u.length;m++)a[u[m]]=g;else a[d]=g}else a=$({},a,{},e(J(o,l))(o))}return a}},se=function(e){var r,t,o=e.scale,a=e.prop,i=void 0===a?"variant":a,n=e.variants,s=void 0===n?{}:n,l=e.key;t=Object.keys(s).length?function(e,r,t){return ne(h(r,e,null))(t.theme)}:function(e,r){return h(r,e,null)},t.scale=o||l,t.defaults=s;var d=((r={})[i]=t,r);return b(d)},le=se({key:"buttons"}),de=se({key:"textStyles",prop:"textStyle"}),ce=se({key:"colorStyles",prop:"colors"}),pe=(w.width,w.height,w.minWidth,w.minHeight,w.maxWidth,w.maxHeight,w.size,w.verticalAlign,w.display,w.overflow,w.overflowX,w.overflowY,L.opacity,E.fontSize,E.fontFamily,E.fontWeight,E.lineHeight,E.textAlign,E.fontStyle,E.letterSpacing,W.alignItems,W.alignContent,W.justifyItems,W.justifyContent,W.flexWrap,W.flexDirection,W.flex,W.flexGrow,W.flexShrink,W.flexBasis,W.justifySelf,W.alignSelf,W.order,P.gridGap,P.gridColumnGap,P.gridRowGap,P.gridColumn,P.gridRow,P.gridAutoFlow,P.gridAutoColumns,P.gridAutoRows,P.gridTemplateColumns,P.gridTemplateRows,P.gridTemplateAreas,P.gridArea,I.borderWidth,I.borderStyle,I.borderColor,I.borderTop,I.borderRight,I.borderBottom,I.borderLeft,I.borderRadius,X.backgroundImage,X.backgroundSize,X.backgroundPosition,X.backgroundRepeat,_.zIndex,_.top,_.right,_.bottom,_.left,function(e){var r=new RegExp("^("+e.join("|")+")$");return s((function(e){return d(e)&&!r.test(e)}))}),ge=(pe(k(V,z,C,R,B,M,G,F,O,K,le,de,ce).propNames),t(7294)),ue=t(4382),me=["size"];var fe=[].concat((0,a.Z)(q.propNames),(0,a.Z)(L.propNames)),he=function(e){return fe.includes(e)},be=pe(fe),ye=(0,i.Z)("div",{shouldForwardProp:be})({boxSizing:"border-box",margin:0,minWidth:0},(function(e){return(0,n.iv)(e.__css)(e.theme)}),(function(e){var r=e.theme,t=e.variant,o=e.__themeKey,a=void 0===o?"variants":o;return(0,n.iv)((0,n.U2)(r,a+"."+t,(0,n.U2)(r,t)))}),q,L,(function(e){return(0,n.iv)(e.sx)(e.theme)}),(function(e){return e.css}));ye.displayName="Box";var ve=(0,i.Z)(ye)({display:"flex"});function xe(){return xe=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},xe.apply(this,arguments)}ve.displayName="Flex";var Se=ge.forwardRef((function(e,r){return ge.createElement(ye,xe({ref:r,as:"a",variant:"styles.a"},e,{__themeKey:"links"}))})),ke=function(e){var r=e.size,t=void 0===r?24:r,a=(0,o.Z)(e,me);return ge.createElement(ye,xe({as:"svg",xmlns:"http://www.w3.org/2000/svg",width:t+"",height:t+"",viewBox:"0 0 24 24",fill:"currentcolor"},a))};ke.displayName="SVG";var Re=function(e){return function(r){var t={};for(var o in r)e(o||"")&&(t[o]=r[o]);return t}},we=/^m[trblxy]?$/,Te=(Re((function(e){return we.test(e)})),Re((function(e){return!we.test(e)})),(0,ue.F4)({from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}}),ge.forwardRef((function(e,r){return ge.createElement(ye,xe({ref:r,as:"hr",variant:"styles.hr"},e,{__css:{color:"gray",m:0,my:2,border:0,borderBottom:"1px solid"}}))}))),Ce=(Re(he),Re((function(e){return!he(e)})),ge.forwardRef((function(e,r){return ge.createElement(ye,xe({ref:r,variant:"container"},e,{__themeKey:"layout",__css:{width:"100%",maxWidth:"container",mx:"auto"}}))}))),Le=ge.forwardRef((function(e,r){return ge.createElement(Se,xe({ref:r,variant:"nav"},e,{__css:{color:"inherit",textDecoration:"none",fontWeight:"bold",display:"inline-block","&:hover, &:focus, &.active":{color:"primary"}}}))}))},5127:function(e,r,t){"use strict";t.d(r,{Z:function(){return b}});var o=t(7294),a=t(3644),i=t(5444),n=t(5692),s=t.n(n),l=t(6941),d=t.n(l),c=t(5710),p=t.n(c),g=t(223),u=t.n(g),m=t(1223),f=t.n(m),h=function(e){var r=e.contacts;return o.createElement(a.W2,{bg:"muted",sx:{boxShadow:"0 0 8px rgba(0, 0, 0, 0.125)"}},o.createElement(a.kC,{sx:{alignItems:"center"}},o.createElement(a.OL,{href:"/",p:2},"Projects"),o.createElement(a.OL,{href:"/about",p:2},"About me"),o.createElement(a.iz,{sx:{flexGrow:1}}),o.createElement(a.xu,{sx:{mx:10,fontWeight:"heading"}},"Contacts:"),o.createElement(a.OL,{title:"EMail",href:"mailto:"+r.email,p:1},o.createElement(s(),{fill:"currentcolor"})),o.createElement(a.OL,{title:"Telegram",href:"https://t.me/"+r.telegram,p:1},o.createElement(d(),{fill:"currentcolor"})),o.createElement(a.OL,{title:"GitHub",href:"https://github.com/"+r.github,p:1},o.createElement(u(),{fill:"currentcolor"})),o.createElement(a.OL,{title:"LinkedIn",href:"https://www.linkedin.com/in/"+r.linkedin,p:1},o.createElement(f(),{fill:"currentcolor"})),o.createElement(a.OL,{title:"UpWork",href:"https://www.upwork.com/freelancers/"+r.upwork,p:1},o.createElement(p(),{fill:"currentcolor"}))))},b=function(e){var r=e.pageTitle,t=e.children,n=(0,i.K2)("3232733727"),s=(new Date).getFullYear();return o.createElement(a.W2,{p:2,sx:{width:["100%","90%","80%","840px"]}},o.createElement("title",null,n.site.siteMetadata.title," | ",r),o.createElement(h,{contacts:n.site.siteMetadata.contacts}),t,o.createElement(a.iz,null),o.createElement("p",null,"© ",s,", ",n.site.siteMetadata.copyright))}},5692:function(e,r,t){var o=t(7294);function a(e){return o.createElement("svg",e,o.createElement("path",{d:"M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"}))}a.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24"},e.exports=a,a.default=a},223:function(e,r,t){var o=t(7294);function a(e){return o.createElement("svg",e,[o.createElement("defs",{id:"defs13",key:0},o.createElement("clipPath",{clipPathUnits:"userSpaceOnUse",id:"clipPath3006"},o.createElement("path",{d:"M 0,551.986 H 530.973 V 0 H 0 Z",id:"path3004"}))),o.createElement("g",{id:"g15",key:1},o.createElement("g",{id:"g2996",transform:"matrix(1.3333333,0,0,-1.3333333,-387.51091,286.72026)"},o.createElement("g",{id:"g3008",transform:"translate(306.92119,215.0402)"},o.createElement("path",{d:"m 0,0 c -8.995,0 -16.288,-7.293 -16.288,-16.29 0,-7.197 4.667,-13.302 11.14,-15.457 0.815,-0.149 1.112,0.354 1.112,0.786 0,0.386 -0.014,1.411 -0.022,2.77 -4.531,-0.984 -5.487,2.184 -5.487,2.184 -0.741,1.881 -1.809,2.382 -1.809,2.382 -1.479,1.011 0.112,0.991 0.112,0.991 1.635,-0.116 2.495,-1.679 2.495,-1.679 1.453,-2.489 3.813,-1.77 4.741,-1.354 0.148,1.053 0.568,1.771 1.034,2.178 -3.617,0.411 -7.42,1.809 -7.42,8.051 0,1.778 0.635,3.232 1.677,4.371 -0.168,0.412 -0.727,2.068 0.159,4.311 0,0 1.368,0.438 4.48,-1.67 1.299,0.361 2.693,0.542 4.078,0.548 1.383,-0.006 2.777,-0.187 4.078,-0.548 3.11,2.108 4.475,1.67 4.475,1.67 0.889,-2.243 0.33,-3.899 0.162,-4.311 1.044,-1.139 1.675,-2.593 1.675,-4.371 0,-6.258 -3.809,-7.635 -7.438,-8.038 0.585,-0.503 1.106,-1.497 1.106,-3.017 0,-2.177 -0.02,-3.934 -0.02,-4.468 0,-0.436 0.293,-0.943 1.12,-0.784 6.468,2.159 11.131,8.26 11.131,15.455 C 16.291,-7.293 8.997,0 0,0",id:"path3010"}))))])}a.defaultProps={name:"GithubLogo",version:"1.1",id:"svg9",width:"24",height:"24",viewBox:"0 0 43.438667 42.366489"},e.exports=a,a.default=a},1223:function(e,r,t){var o=t(7294);function a(e){return o.createElement("svg",e,o.createElement("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"}))}a.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24"},e.exports=a,a.default=a},6941:function(e,r,t){var o=t(7294);function a(e){return o.createElement("svg",e,o.createElement("path",{id:"telegram-1",d:"M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"}))}a.defaultProps={width:"24",height:"24",version:"1.1",xmlSpace:"preserve",xmlnsSerif:"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.41421"}},e.exports=a,a.default=a},5710:function(e,r,t){var o=t(7294);function a(e){return o.createElement("svg",e,o.createElement("path",{d:"M42.4,17.7c-5.3,0-9.3,3.5-10.9,9c-2.5-3.9-4.5-8.3-5.6-12.1h-5.6v14.7c0,2.9-2.4,5.3-5.3,5.3c-2.9,0-5.3-2.4-5.3-5.3V14.7  H4.3v14.7c0,6.1,4.9,11,10.9,11c6,0,10.9-4.9,10.9-11v-2.5c1.1,2.2,2.5,4.6,4,6.7l-3.5,16.3h5.7L34.7,38c2.2,1.4,4.7,2.2,7.7,2.2  c6.1,0,11.1-5,11.1-11.4C53.5,22.7,48.5,17.7,42.4,17.7z M42.4,34.6c-2.2,0-4.5-1-6.3-2.5l0.6-2.2v-0.1c0.4-2.4,1.7-6.4,5.8-6.4  c3.1,0,5.6,2.5,5.6,5.6C48,32.1,45.3,34.6,42.4,34.6z"}))}a.defaultProps={id:"Layer_1",version:"1.1",width:"24",height:"24",viewBox:"0 0 56 56"},e.exports=a,a.default=a}}]);
//# sourceMappingURL=dd833c054ac44fc065c1430e4e13dd9714f600e2-020b68941c3dfbd3081a.js.map