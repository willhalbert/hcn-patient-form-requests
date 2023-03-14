/*!
 * PSPDFKit for Web 2023.1.3 (https://pspdfkit.com/web)
 *
 * Copyright (c) 2016-2023 PSPDFKit GmbH. All rights reserved.
 *
 * THIS SOURCE CODE AND ANY ACCOMPANYING DOCUMENTATION ARE PROTECTED BY INTERNATIONAL COPYRIGHT LAW
 * AND MAY NOT BE RESOLD OR REDISTRIBUTED. USAGE IS BOUND TO THE PSPDFKIT LICENSE AGREEMENT.
 * UNAUTHORIZED REPRODUCTION OR DISTRIBUTION IS SUBJECT TO CIVIL AND CRIMINAL PENALTIES.
 * This notice may not be removed from this file.
 *
 * PSPDFKit uses several open source third-party components: https://pspdfkit.com/acknowledgements/web/
 */
(globalThis.webpackChunkPSPDFKit=globalThis.webpackChunkPSPDFKit||[]).push([[5747],{88609:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>K});var s=a(67294),n=a(94184),o=a.n(n),r=a(35369),l=a(78509),i=a(67366),c=a(70545),d=a(44954),m=a(49477),u=a(80614),g=a(46525),p=a(24956),f=a(33502),P=a(41371),v=a(2316),y=a(49332),b=a(96456),h=a(15435),I=a(65827),k=a(8891),E=a(22122),w=a(88594);const N=s.memo((e=>{let{items:t,builtInItems:n,moveDialog:r,CSS_HACK:{components:{ToolbarButtonComponent:l},styles:i}}=e;return t.map(((e,t)=>{const c=n.find((t=>t.type===e.type));if("spacer"===e.type)return s.createElement("div",{style:{flex:1},className:e.className,key:`spacer-${t}`});if("move"===e.type&&c)return s.createElement("div",{key:c.type,className:i.moveButtonContainer},s.createElement(l,(0,E.Z)({},c,{icon:a(72303),className:o()(c.className,e.className),onPress:e=>{c&&c.onPress&&c.onPress(e)}})),r);if(c){const n=(0,w.zW)(c.type);return s.createElement(l,(0,E.Z)({},c,{key:c.type||t,icon:a(33720)(`./${n}.svg`),onPress:e=>{c&&c.onPress&&c.onPress(e)},className:o()(c.className,e.className)}))}if("custom"===e.type&&e.node){const{type:a,...n}=e;return s.createElement(k.Z,(0,E.Z)({},n,{onPress:t=>e.onPress&&e.onPress(t,e.id),key:e.id||t}))}return s.createElement(l,(0,E.Z)({},e,{key:c&&c.type||t,onPress:t=>e.onPress&&e.onPress(t,e.id)}))}))})),D=s.memo((e=>{let{items:t,builtInItems:n,CSS_HACK:{components:{ToolbarDropdownGroupComponent:r,ToolbarButtonComponent:l},styles:i},frameWindow:c}=e;const d=t.map((e=>{let{item:t,index:a}=e;const s=n.find((e=>e.type===t.type));return s?{index:a,item:{...s,className:o()(s.className,t.className),onPress:e=>{s.onPress&&s.onPress(e)}}}:{item:t,index:a}}));return d.length>0&&s.createElement(s.Fragment,null,s.createElement("div",{style:{flex:1},key:"spacer-responsive"}),s.createElement(r,{icon:{type:"more",size:{width:20,height:20}},items:d,discreteDropdown:!0,caretDirection:"down",role:"menu",ItemComponent:e=>{let{item:t,isSelectedItem:r,state:c,itemComponentProps:d}=e;const m=!r&&n.find((e=>e.type===t.item.type));if(r)return null;const u=m&&m.type?(0,w.zW)(m.type):"";return t.item.node?s.createElement(k.Z,(0,E.Z)({},t.item,{onPress:t.item.onPress?e=>t.item.onPress(e,t.id):void 0,key:t.item.id||t.index})):s.createElement(l,(0,E.Z)({},t.item,{role:"menuitem",className:o()(t.item.className,i.toolbar.dropdownButton,"Focused"===c&&i.toolbar["dropdownButton"+c]),icon:m?a(33720)(`./${u}.svg`):t.item.icon,itemComponentProps:d}))},onSelect:(e,t)=>{const{onPress:a,disabled:s}=t.item;s||a&&a(e)},noInitialSelection:!0,frameWindow:c}))}));var x,C;const S=new f.$u({width:u.zA,height:u._2}),M=e=>{const{styles:t,formatMessage:n,movePreview:r}=e;return s.createElement("div",{style:{width:e.width,height:e.height},className:o()(t.importedDocument,{[t.importedDocumentMovePreview]:r})},s.createElement("div",{className:t.importedDocumentIconCircle},s.createElement(b.Z,{src:a(42900)})),s.createElement("span",{className:t.importedDocumentInfo},n(B.documentMergedHere)))},z=(e,t,a,s)=>{const n=t.flatten();let o=e.map((e=>({type:"page",page:e,rotation:0,label:e.pageLabel})));const r=e=>{const t=e.dupeOf||e.label;let a=0;for(const e of o)"dupeOf"in e&&null!=e.dupeOf&&e.dupeOf===t&&null!=e.dupeNumber&&e.dupeNumber>a&&(a=e.dupeNumber);return a+1};let l=0;for(const e of n)switch(e.type){case"addPage":{let t;null!=e.afterPageIndex?t=e.afterPageIndex+1:((0,c.kG)(null!=e.beforePageIndex),t=e.beforePageIndex),++l,o=o.insert(t,{type:"newPage",label:`${a(B.newPage)} ${l}`,rotation:0,size:new f.$u({width:e.pageWidth,height:e.pageHeight})});break}case"removePages":{const t=e.pageIndexes.map((e=>o.get(e)));for(const e of t){(0,c.kG)(null!=e);const t=o.indexOf(e);o=o.delete(t)}break}case"rotatePages":for(const t of e.pageIndexes){const a=o.get(t);let s,n;(0,c.kG)(null!=a),(0,c.kG)("page"===a.type||"newPage"===a.type);const r=a.rotation;if(n=90===e.rotateBy?270===r?0:r+e.rotateBy:90===r?0:180===r?90:270===r?180:r+e.rotateBy,(0,c.kG)(0===n||90===n||180===n||270===n),"page"===a.type)s={...a,rotation:n};else{if("newPage"!==a.type)throw new c.p2("Rotation is not allowed on imported documents");s={...a,rotation:n}}o=o.set(t,s)}break;case"duplicatePages":{const t=e.pageIndexes.map((e=>o.get(e)));for(const e of t){(0,c.kG)(null!=e),(0,c.kG)("page"===e.type);const t=r(e),a=e.dupeOf||e.label,s=o.indexOf(e);o=o.insert(s+1,Object.assign({},e,{label:`${a} (${t})`,dupeOf:a,dupeNumber:t}))}break}case"movePages":{const t=e.pageIndexes;if(1===t.length){const a=t[0];let s;null!=e.beforePageIndex?s=e.beforePageIndex:((0,c.kG)(null!=e.afterPageIndex),s=e.afterPageIndex+1);const n=o.get(a);(0,c.kG)(null!=n);const r=o.get(s),l=o.size;o=o.delete(a),s===l?o=o.push(n):0===s?o=o.unshift(n):((0,c.kG)(null!=r),o=o.insert(o.indexOf(r),n))}else{const a=t.slice().sort();if(null!=e.beforePageIndex){(0,c.kG)(0===e.beforePageIndex);const t=a.map((e=>o.get(e))).reverse();for(const e of t)(0,c.kG)(null!=e),o=o.delete(o.indexOf(e)),o=o.unshift(e)}else{(0,c.kG)(null!=e.afterPageIndex);const t=o.get(e.afterPageIndex);(0,c.kG)(null!=t);const s=a.map((e=>o.get(e))).reverse();for(const e of s)(0,c.kG)(null!=e),o=o.delete(o.indexOf(e)),o=o.insert(o.indexOf(t)+1,e)}}break}case"importDocument":{let t,a;if("beforePageIndex"in e&&null!=e.beforePageIndex?t=e.beforePageIndex:((0,c.kG)("afterPageIndex"in e&&null!=e.afterPageIndex),t=e.afterPageIndex+1),"string"==typeof e.document){const t=e.document;(0,c.kG)(s.has(t)),a=s.get(t,"Imported Document")}else(0,c.kG)("string"==typeof e.document.name),a=e.document.name;o=o.insert(t,{type:"importedDocument",label:a});break}case"keepPages":case"applyInstantJson":case"applyXfdf":case"flattenAnnotations":case"performOcr":case"setPageLabel":case"applyRedactions":case"updateMetadata":case"cropPages":throw Error("Unknown document operation");default:(0,c.Rz)(e.type)}return o},A=e=>{const{pages:t,style:a,styles:n,previewCount:r}=e;return s.createElement("div",{className:n.movePreview},s.createElement("div",{className:o()(n.movePreviewPages,{[n.movePreviewPagesLoose]:"loose"===a})},t),s.createElement("div",{className:n.movePreviewCount},r||t.length))},K=e=>{const{onCancel:t,onDialog:n}=e,{pages:E,backend:w,frameWindow:K,footerItems:F,toolbarItems:G}=(0,i.v9)((e=>{let{pages:t,backend:a,frameWindow:s,documentEditorFooterItems:n,documentEditorToolbarItems:o}=e;return{pages:t,backend:a,frameWindow:s,footerItems:n.toJS(),toolbarItems:o.toJS()}}),i.wU),T=(0,i.I0)(),{formatMessage:L}=(0,l.YB)(),{styles:R}=e.CSS_HACK,[O,H]=s.useState((0,r.D5)()),[Z,W]=s.useState((0,r.aV)()),[_,$]=s.useState(0),V=Z.slice(0,Z.size-_),U=z(E,V,L,O),[Y,J]=s.useState((0,r.l4)()),[X,j]=s.useState(!1),[q,Q]=s.useState(!1),ee=s.useRef(null),te=s.useRef(null),[ae,se]=s.useState(!1),[ne,oe]=s.useState(""),re=s.useCallback((()=>{const e=te.current;null!=e&&(ae&&e.ownerDocument.activeElement!==e?e.focus():ae||e.ownerDocument.activeElement!==e||e.blur())}),[ae]),le=s.useCallback((e=>{se(e),re(),n(e)}),[n,re]);s.useEffect((()=>{re()}),[re]);const ie=s.useCallback((e=>{W(V.push(e)),$(0)}),[V]),ce=s.useRef(!0);s.useLayoutEffect((()=>()=>{ce.current&&(ce.current=!1)}),[]);const de=s.useCallback((()=>{const e=E.get(0),t=e?e.pageSize:S,a={type:"addPage",backgroundColor:f.Il.WHITE,pageWidth:t.width,pageHeight:t.height,rotateBy:0};1===Y.size?a.afterPageIndex=Y.first():a.beforePageIndex=0,ie(a),J(Y.clear())}),[E,Y,ie]),me=s.useCallback((()=>{ie({type:"removePages",pageIndexes:Y.toArray()}),J(Y.clear())}),[ie,Y]),ue=s.useCallback((()=>{ie({type:"duplicatePages",pageIndexes:Y.toArray()}),J(Y.clear())}),[ie,Y]),ge=s.useCallback((()=>{ie({type:"rotatePages",pageIndexes:Y.toArray(),rotateBy:270})}),[ie,Y]),pe=s.useCallback((()=>{ie({type:"rotatePages",pageIndexes:Y.toArray(),rotateBy:90})}),[ie,Y]),fe=s.useCallback((()=>{le(!ae)}),[ae,le]),Pe=s.useCallback((e=>{const t=e.target.value;let a=t;const s=parseInt(t,10);isNaN(s)||(a=Math.min(Math.max(s,0),U.size).toString()),oe(a)}),[U.size]),ve=parseInt(ne,10),ye=s.useCallback((e=>{let t;return 1===e.size||null==e.sort().find((e=>{let a=!1;return null!=t&&(a=e!==t+1),t=e,a}))}),[]),be=s.useCallback(((e,t)=>{const a=null!=t?t:Y,s=ye(a);return!(a.includes(e-1)||0===e&&s&&a.includes(0)||s&&a.sort().first()===e)}),[Y,ye]),he=!isNaN(ve)&&be(ve),Ie=s.useCallback(((e,t)=>{const a=null!=t?t:Y,s=e-1;ie({type:"movePages",pageIndexes:a.toArray(),...0===e?{beforePageIndex:0}:{afterPageIndex:s}});let n=(0,r.l4)(),o=0;0!==e&&(o=s+1,a.forEach((e=>{e<s&&--o})));let l=o;a.forEach((()=>{n=n.add(l),++l})),J(n)}),[Y,ie,J]),ke=s.useCallback((e=>{e.preventDefault(),he&&(Ie(ve),le(!1))}),[he,ve,le,Ie]),Ee=s.useCallback((e=>{const t=e.target;if(!ae||t.classList.contains(R.moveToolbarButton))return;const a=ee.current;(0,c.kG)(null!=a),a.contains(t)||le(!1)}),[ae,le,R.moveToolbarButton]),we=s.useCallback((()=>{const e=Y.sort().toList().map((e=>({type:"movePages",pageIndexes:[e],beforePageIndex:e-1})));ie(e),J((0,r.l4)(Y.toArray().map((e=>e-1))))}),[ie,Y]),Ne=s.useCallback((()=>{const e=Y.sort().toList().map((e=>({type:"movePages",pageIndexes:[e],afterPageIndex:e+1})));ie(e),J((0,r.l4)(Y.toArray().map((e=>e+1))))}),[ie,Y]),De=s.useCallback((()=>{J(Y.clear()),$(_+1)}),[Y,_]),xe=s.useCallback((()=>{J(Y.clear()),$(_-1)}),[Y,_]),Ce=s.useCallback((async()=>{const e={};1===Y.size?e.afterPageIndex=Y.first():e.beforePageIndex=0;{const t=document.createElement("input");t.type="file",t.accept="application/pdf",t.onclick=e=>{(0,c.kG)(e.target instanceof HTMLInputElement),e.target.value=""},t.onchange=t=>{var a;if((0,c.kG)(t.target instanceof HTMLInputElement),0===(null===(a=t.target.files)||void 0===a?void 0:a.length))return;let s=V;for(const a of t.target.files){if("string"!=typeof a.name||0===a.name.length)return;if("application/pdf"!==a.type)return void(0,c.wp)("The uploaded file must be a PDF.");if(-1!==U.findIndex((e=>"importedDocument"===e.type&&e.label===a.name)))return;s=s.push({type:"importDocument",treatImportedDocumentAsOnePage:!0,document:a,...e})}W(s),$(0),J(Y.clear())},t.click()}}),[Y,O,ie,V,U]),Se=s.useCallback((()=>{J(U.keySeq().toSet())}),[U,J]),Me=s.useCallback((()=>{J(Y.clear())}),[Y,J]),ze=s.useCallback((e=>{Y.has(e)?J(Y.delete(e)):J(Y.add(e))}),[Y,J]),Ae=s.useCallback((()=>{t()}),[t]),Ke=s.useCallback((()=>{j(!0),T((0,g.b_)(V.flatten().toArray(),(()=>{ce.current&&j(!1)}),(e=>{throw ce.current&&j(!1),e})))}),[T,V]),Be=s.useCallback((async()=>{j(!0);try{const e=await w.exportPDFWithOperations(V.flatten().toArray().map(P.kg));(0,p.cR)(e,K)}catch(e){throw e}finally{ce.current&&j(!1)}}),[w,V,K]),Fe=(e,t,a,n)=>{const o=U.get(e);let r;switch((0,c.kG)(null!=o),o.type){case"page":r=s.createElement(m.Z,{key:`page-${o.label}`,page:o.page,size:t,maxSize:a,rotation:o.rotation});break;case"newPage":{const{rotatedWidth:e,rotatedHeight:n}=(0,m.X)(o.size,o.rotation,t,a);r=s.createElement("div",{key:`newPage-${o.label}`,className:R.newPage,style:{width:e,height:n}});break}case"importedDocument":{const{containerWidth:e,containerHeight:l}=(0,m.X)(S,0,t,a);r=s.createElement(M,{width:e,height:l,movePreview:n,key:`importedDoc-${o.label}`,styles:R,formatMessage:L});break}default:r=s.createElement(s.Fragment,null),(0,c.Rz)(o.type)}return{item:r,label:o.label,props:"page"===o.type?{"data-original-page-index":o.page.pageIndex}:{}}},Ge=Y.size>0&&Y.size!==U.size&&!X,Te=Y.size>0&&void 0===Y.find((e=>{const t=U.get(e);return(0,c.kG)(null!=t),"page"!==t.type&&"newPage"!==t.type})),Le=Y.size>0&&void 0===Y.find((e=>{const t=U.get(e);return(0,c.kG)(null!=t),"page"!==t.type})),Re=!Y.isEmpty()&&Y.size!==U.size&&!X,Oe=!Y.isEmpty()&&!Y.includes(0),He=!Y.isEmpty()&&!Y.includes(U.size-1),Ze=_<Z.size,We=_>0,_e=Y.size<U.size&&!X,$e=!Y.isEmpty()&&!X,Ve=s.useRef(null),Ue=s.useRef(!1);s.useLayoutEffect((()=>{const e=Ve.current;if(null==e)return;Ue.current||(e.focus(),Ue.current=!0);const t=e=>{if(null!=document.activeElement&&"INPUT"===document.activeElement.tagName)return;if(X)return;const t=e.key.toLowerCase(),a=e.metaKey||e.ctrlKey,s=a&&!e.shiftKey&&!e.altKey,n=e.altKey&&!a&&!e.shiftKey,o=!a&&!e.shiftKey&&!e.altKey;if(e.altKey&&e.shiftKey&&!a&&"arrowleft"===t&&Te)ge();else if(e.altKey&&e.shiftKey&&!a&&"arrowright"===t&&Te)pe();else if(n&&"arrowleft"===t&&Oe)we();else if(n&&"arrowright"===t&&He)Ne();else if(a&&e.shiftKey&&!e.altKey&&"z"===t&&We)xe();else if(s&&"z"===t&&Ze)De();else if(s&&"a"===t&&_e)Se();else if(s&&"d"===t&&$e)Me();else if(o&&"n"===t)de();else if(o&&"d"===t&&Ge)me();else if(o&&"c"===t&&Le)ue();else if(o&&"l"===t&&Te)ge();else if(o&&"r"===t&&Te)pe();else if(o&&"m"===t&&Re)le(!0);else{if(!o||"i"!==t)return;Ce()}e.preventDefault()};return e.addEventListener("keydown",t),()=>{e.removeEventListener("keydown",t)}}),[Le,Re,Oe,He,We,Ge,Te,_e,$e,Ze,de,ue,Ce,we,Ne,xe,me,ge,pe,Se,Me,De,X,le]);const Ye=R.toolbar.toolbarButton,Je=[{type:"add",onPress:de,className:Ye,disabled:X,children:L(B.newPage)},{type:"remove",onPress:me,className:Ye,disabled:!Ge,children:L(B.removePage)},{type:"duplicate",onPress:ue,className:Ye,children:L(B.duplicatePage),disabled:!Le||X},{type:"rotate-left",onPress:ge,className:Ye,children:L(B.rotatePageLeft),disabled:!Te||X},{type:"rotate-right",onPress:pe,className:Ye,children:L(B.rotatePageRight),disabled:!Te||X},{type:"move",onPress:fe,className:o()(Ye,R.moveToolbarButton),children:L(B.openMoveDialog),disabled:!Re},{type:"move-left",onPress:we,className:R.toolbar.toolbarButton,children:L(B.moveBefore),disabled:!Oe||X},{type:"move-right",onPress:Ne,className:Ye,children:L(B.moveAfter),disabled:!He||X},{type:"import-document",onPress:Ce,className:Ye,children:L(B.mergeDocument),disabled:X},{type:"spacer"},{type:"undo",onPress:De,className:Ye,children:L(v.Z.undo),disabled:!Ze||X},{type:"redo",onPress:xe,className:Ye,children:L(v.Z.redo),disabled:!We||X},{type:"select-all",onPress:Se,className:Ye,children:L(B.selectAll),disabled:!_e},{type:"select-none",onPress:Me,className:Ye,children:L(B.selectNone),disabled:!$e}],[Xe,je]=s.useState(Number.POSITIVE_INFINITY),[qe,Qe]=s.useMemo((()=>Xe===Number.POSITIVE_INFINITY?[G,[]]:[G.slice(0,Xe),G.slice(Xe).filter((e=>"spacer"!==e.type)).map(((e,t)=>({index:t,item:{...e,dropdownGroup:"documentEditor"}})))]),[G,Xe]),[et,tt]=s.useState(new f.$u),at=s.useCallback((e=>{tt((t=>(t.width!==e.width&&je(Number.POSITIVE_INFINITY),new f.$u({width:e.width,height:e.height}))))}),[tt,je]),st=s.useRef(null);s.useLayoutEffect((()=>{const e=st.current;if(!e||0===et.width)return;const t=e.children;if(t.length===Xe)return;const a=e.ownerDocument.defaultView.getComputedStyle(e);let s=44+(parseInt(a.getPropertyValue("padding-left"))||0)+(parseInt(a.getPropertyValue("padding-right"))||0);const n=[].findIndex.call(t,((e,t)=>"spacer"!==G[t].type&&(s+=e.clientWidth,s>et.width)));je(-1===n?Number.POSITIVE_INFINITY:n);e.ownerDocument.defaultView.innerWidth>=u.Fg?Q(!0):Q(!1)}),[et,Xe,je,G]);const nt=s.useCallback((e=>{"Escape"===e.key&&ae&&(le(!1),e.stopPropagation())}),[ae,le]),ot=s.useMemo((()=>null!=qe.find((e=>"move"===e.type))),[qe]),rt=s.createElement("div",{className:o()(R.moveDialog,{[R.moveDialogShown]:ae,[R.moveDialogDetached]:!ot},"PSPDFKit-DocumentEditor-MoveDialog"),ref:ee},s.createElement("form",{onSubmit:ke,className:R.moveDialogForm},s.createElement("span",{className:R.moveDialogFormLabel},L(B.insertAfterPage)),s.createElement("input",{className:R.moveDialogFormInput,type:"number",min:"0",max:U.size,value:ne,onChange:Pe,ref:te}),s.createElement(d.zx,{type:"submit",className:R.moveDialogMoveButton,disabled:!he},L(B.move))),s.createElement("div",{className:R.moveDialogHint},s.createElement("p",{className:R.moveDialogHintText},L(B.docEditorMoveBeginningHint)))),lt=s.useCallback(((e,t)=>{const a=(0,r.l4)(e);be(t,a)&&Ie(t,a)}),[Ie,be]);let it;const ct=ae&&!isNaN(ve);if(ct){const e=Y.toList().sort().map((e=>Fe(e,160,160,!0).item)).toArray(),t=s.createElement(A,{pages:e,style:"straight",styles:R});ct&&(it=0===ve?{previewContent:t,pageIndex:0,position:"left"}:{previewContent:t,pageIndex:ve-1,position:"right"},he||(it.disabled=!0))}const dt=s.useMemo((()=>({cancel:{element:s.createElement(d.zx,null,L(v.Z.cancel)),onPress:Ae,className:"PSPDFKit-DocumentEditor-CancelButton"},"selected-pages":{element:s.createElement("div",null,s.createElement("div",{className:R.pagesSelectedIcon},s.createElement(b.Z,{src:a(17233)})),L(B.pagesSelected,{arg0:Y.size})),className:o()({[R.pagesSelectedIndicator]:!0,[R.pagesSelectedIndicatorShown]:Y.size>0,"PSPDFKit-DocumentEditor-PagesSelectedIndicator":!0})},spacer:{element:x||(x=s.createElement("div",null)),className:o()({[R.spacer]:!0,"PSPDFKit-DocumentEditor-Spacer":!0})},"loading-indicator":{element:C||(C=s.createElement(h.Z,null)),hide:!X,className:"PSPDFKit-DocumentEditor-LoadingIndicator"},"save-as":{element:s.createElement(d.zx,null,L(v.Z.saveAs)),onPress:Be,disabled:X,className:"PSPDFKit-DocumentEditor-SaveAsButton"},save:{element:s.createElement(d.zx,{primary:!0},L(v.Z.save)),disabled:V.isEmpty()||X,onPress:Ke,className:"PSPDFKit-DocumentEditor-SaveButton"}})),[R,L,Ae,Be,Ke,X,V,Y]),mt=s.useMemo((()=>F.map(((e,t)=>{const{onPress:a,className:n,type:r,node:l,id:i}=e;if((0,c.kG)(r),"custom"===r)return l?s.createElement(k.Z,{className:n,onPress:a?e=>a(e,i):void 0,key:i||t,node:l}):null;{const e=dt[r];return e.hide?null:s.cloneElement(e.element,{onClick:t=>{e.onPress&&e.onPress(t)},key:r,disabled:e.disabled,className:o()(e.className,n)})}}))),[F,dt]);return s.createElement("div",{className:o()(R.docEditor,"PSPDFKit-DocumentEditor"),onClick:Ee,onKeyDown:nt,tabIndex:"-1",ref:Ve},s.createElement("div",{className:o()(R.toolbar.root,R.toolbarRoot,"PSPDFKit-DocumentEditor-Toolbar"),style:{flex:0}},s.createElement("div",{ref:st,className:R.toolbarContainer},s.createElement(N,{items:qe,builtInItems:Je,moveDialog:rt,CSS_HACK:e.CSS_HACK})),s.createElement(D,{builtInItems:Je,items:Qe,CSS_HACK:e.CSS_HACK,frameWindow:K})),s.createElement("div",{className:R.pagesView},s.createElement(I.Z,{onResize:at}),!ot&&rt,s.createElement("div",{className:o()(R.pagesGrid,{[R.pagesGridLargeThumbnails]:q})},s.createElement(y.Z,{canInsert:(e,t)=>be(t,(0,r.l4)(e)),totalItems:U.size,width:et.width,height:et.height,itemScale:e.scale,renderItemCallback:Fe,renderDragPreviewCallback:(e,t,a,n)=>{const o=(0,r.aV)(e).filter((e=>e!==t)).sort().push(t).slice(-5).map((e=>Fe(e,a,n,!0).item)).toArray();return s.createElement(A,{pages:o,style:"straight",styles:R,previewCount:e.length})},onItemPress:ze,selectedItemIndexes:Y,cssPrefix:"PSPDFKit-DocumentEditor",moveCursor:null!=it?it:void 0,onItemsMove:ae?void 0:lt}))),s.createElement("div",{className:o()(R.bottomBar,"PSPDFKit-DocumentEditor-Footer")},mt))},B=(0,l.vU)({newPage:{id:"newPage",defaultMessage:"New Page",description:"Add new page"},removePage:{id:"removePage",defaultMessage:"Remove Page",description:"Remove page"},duplicatePage:{id:"duplicatePage",defaultMessage:"Duplicate Page",description:"Duplicate page"},rotatePageLeft:{id:"rotatePageLeft",defaultMessage:"Rotate Page Left",description:"Rotate Page Left"},rotatePageRight:{id:"rotatePageRight",defaultMessage:"Rotate Page Right",description:"Rotate Page Right"},mergeDocument:{id:"mergeDocument",defaultMessage:"Merge Document",description:"Merge Document"},selectAll:{id:"selectAll",defaultMessage:"Select All",description:"Select All Pages"},selectNone:{id:"selectNone",defaultMessage:"Select None",description:"Deselect All Pages"},openMoveDialog:{id:"openMoveDialog",defaultMessage:"Move…",description:"Open dialog for moving pages to specific location in the document"},move:{id:"move",defaultMessage:"Move",description:"Move pages to specific location in the document"},moveBefore:{id:"moveBefore",defaultMessage:"Move Before",description:"Move page before previous one"},moveAfter:{id:"moveAfter",defaultMessage:"Move After",description:"Move page after next one"},documentMergedHere:{id:"documentMergedHere",defaultMessage:"Document will be merged here",description:"Placeholder for the imported document"},pagesSelected:{id:"pagesSelected",defaultMessage:"{arg0, plural,\n      =0 {{arg0} Pages}\n      one {{arg0} Page}\n      two {{arg0} Pages}\n      other {{arg0} Pages}\n    }",description:"Number of pages selected."},insertAfterPage:{id:"insertAfterPage",defaultMessage:"Insert after page",description:"Move selected pages after designated page index."},docEditorMoveBeginningHint:{id:"docEditorMoveBeginningHint",defaultMessage:"Type “0” to move selected pages to the beginning of the document.",description:"Instructions for how to move pages to the beginning of the document when using the Move button in the Document Editor."}})},33720:(e,t,a)=>{var s={"./add.svg":14809,"./duplicate.svg":89950,"./extract.svg":61030,"./help.svg":19774,"./importDocument.svg":42900,"./move.svg":72303,"./moveLeft.svg":40020,"./moveRight.svg":46716,"./multiplePages.svg":17233,"./redo.svg":68433,"./remove.svg":89316,"./rotateLeft.svg":10003,"./rotateRight.svg":17756,"./selectAll.svg":56070,"./selectNone.svg":48767,"./undo.svg":16751};function n(e){var t=o(e);return a(t)}function o(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=o,e.exports=n,n.id=33720}}]);