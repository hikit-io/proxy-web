import{o as Pe,a as Ne,u as _,d as $,b as z,I as ae,R as le,c as w,t as j,e as L,r as N,f as oe,w as se,g as t,h as f,i as b,n as o,j as C,k as h,l as g,m as T,p as I,q as m,s as R,v as Y,x as k,T as q,y as ie,z as te,A as F,B as P,C as H,D as Le,F as Ue,E as Re,G as We,H as Ae,J as je,K as x,L as qe,M as Ke,N as Ye,O as de,P as Ge,Q as Qe,S as ee,U as He,V as Je,W as Xe,X as O,Y as Ze,Z as ne,_ as _e,$ as ue,a0 as xe,a1 as en,a2 as nn,a3 as rn,a4 as an,a5 as ln,a6 as on,a7 as sn,a8 as tn,a9 as dn,aa as un}from"./index-c529c594.js";function fn(e){Pe(()=>{e()}),Ne(()=>{e()})}function vn(e){_(()=>window,"resize",e,{passive:!0}),_(()=>window,"orientationchange",e,{passive:!0})}var pn={title:{type:[Number,String]},icon:{type:String},description:{type:String},border:{type:Boolean,default:!1},borderOffset:{type:[Number,String]},iconClass:{type:String},titleClass:{type:String},descriptionClass:{type:String},extraClass:{type:String},ripple:{type:Boolean,default:!1},onClick:$()},{n:mn,classes:gn}=L("cell");function hn(e,n){var a=N("var-icon"),l=oe("ripple");return se((t(),f("div",{class:o(e.classes(e.n(),[e.border,e.n("--border")],[e.onClick,e.n("--cursor")])),style:I(e.borderOffsetStyles),onClick:n[0]||(n[0]=function(){return e.handleClick&&e.handleClick(...arguments)})},[b(e.$slots,"icon",{},()=>[e.icon?(t(),f("div",{key:0,class:o(e.classes(e.n("icon"),e.iconClass))},[C(a,{name:e.icon},null,8,["name"])],2)):h("v-if",!0)]),g("div",{class:o(e.n("content"))},[b(e.$slots,"default",{},()=>[e.title?(t(),f("div",{key:0,class:o(e.classes(e.n("title"),e.titleClass))},T(e.title),3)):h("v-if",!0)]),b(e.$slots,"description",{},()=>[e.description?(t(),f("div",{key:0,class:o(e.classes(e.n("description"),e.descriptionClass))},T(e.description),3)):h("v-if",!0)])],2),e.$slots.extra?(t(),f("div",{key:0,class:o(e.classes(e.n("extra"),e.extraClass))},[b(e.$slots,"extra")],2)):h("v-if",!0)],6)),[[l,{disabled:!e.ripple}]])}var fe=z({name:"VarCell",components:{VarIcon:ae},directives:{Ripple:le},props:pn,setup(e){var n=w(()=>e.borderOffset==null?{}:{"--cell-border-left":j(e.borderOffset),"--cell-border-right":j(e.borderOffset)}),a=l=>{m(e.onClick,l)};return{n:mn,classes:gn,toSizeUnit:j,borderOffsetStyles:n,handleClick:a}}});fe.render=hn;const ve=fe;R(ve);var yn=ve,cn={errorMessage:{type:String,default:""},extraMessage:{type:String,default:""}},{n:bn}=L("form-details"),Cn={key:0},kn={key:0};function Sn(e,n){return t(),Y(q,{name:e.n()},{default:k(()=>[e.errorMessage||e.extraMessage||e.$slots["extra-message"]?(t(),f("div",{key:0,class:o(e.n())},[g("div",{class:o(e.n("error-message"))},[C(q,{name:e.n("message")},{default:k(()=>[e.errorMessage?(t(),f("div",Cn,T(e.errorMessage),1)):h("v-if",!0)]),_:1},8,["name"])],2),g("div",{class:o(e.n("extra-message"))},[C(q,{name:e.n("message")},{default:k(()=>[b(e.$slots,"extra-message",{},()=>[e.extraMessage?(t(),f("div",kn,T(e.extraMessage),1)):h("v-if",!0)])]),_:3},8,["name"])],2)],2)):h("v-if",!0)]),_:3},8,["name"])}var pe=z({name:"VarFormDetails",props:cn,setup:()=>({n:bn})});pe.render=Sn;const me=pe;R(me);function G(){return G=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},G.apply(this,arguments)}var Mn=Symbol("FORM_BIND_FORM_ITEM_KEY");function $n(){var{parentProvider:e,index:n,bindParent:a}=ie(Mn),l=te(),d=a?v=>{a(G({},v,{instance:l}))}:null;return{index:n,form:e,bindForm:d}}function Bn(e){return["small","normal"].includes(e)}function Tn(e){return["outlined","standard"].includes(e)}var ge={value:{type:null,required:!0},id:{type:String,default:""},isFocus:{type:Boolean},size:{type:String,default:"normal",validator:Bn},variant:{type:String,default:"standard",validator:Tn},placeholder:{type:String},line:{type:Boolean,default:!0},hint:{type:Boolean,default:!0},textColor:{type:String},focusColor:{type:String},blurColor:{type:String},errorMessage:{type:String},formDisabled:{type:Boolean},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},cursor:{type:String},composing:{type:Boolean,default:!1},onClick:$(),onClear:$()},{n:K,classes:In}=L("field-decorator"),wn=["for"];function Fn(e,n){var a=N("var-icon");return t(),f("div",{class:o(e.classes(e.n(),e.n("$--box"),e.n("--"+e.variant),[e.size==="small",e.n("--small")],[e.disabled,e.n("--disabled")])),onClick:n[0]||(n[0]=function(){return e.handleClick&&e.handleClick(...arguments)})},[g("div",{class:o(e.classes(e.n("controller"),[e.isFocus,e.n("--focus")],[e.errorMessage,e.n("--error")],[e.formDisabled||e.disabled,e.n("--disabled")])),style:I({color:e.color,cursor:e.cursor,overflow:e.isFloating?"visible":"hidden"})},[g("div",{class:o(e.classes(e.n("icon"),[!e.hint,e.n("--icon-non-hint")]))},[b(e.$slots,"prepend-icon")],2),g("div",{class:o(e.classes(e.n("middle"),[!e.hint,e.n("--middle-non-hint")]))},[b(e.$slots,"default")],2),e.placeholder&&e.hint?(t(),f("label",{key:0,class:o(e.classes(e.n("placeholder"),e.n("$--ellipsis"),[e.isFocus,e.n("--focus")],[e.formDisabled||e.disabled,e.n("--disabled")],[e.errorMessage,e.n("--error")],e.computePlaceholderState())),style:I({color:e.color}),for:e.id},[g("span",null,T(e.placeholder),1)],14,wn)):h("v-if",!0),g("div",{class:o(e.classes(e.n("icon"),[!e.hint,e.n("--icon-non-hint")]))},[e.clearable&&!e.isEmpty(e.value)?(t(),Y(a,{key:0,class:o(e.n("clear-icon")),"var-field-decorator-cover":"",name:"close-circle",onClick:e.handleClear},null,8,["class","onClick"])):h("v-if",!0),b(e.$slots,"append-icon")],2)],6),e.line?(t(),f(Ue,{key:0},[e.variant==="outlined"?(t(),f("fieldset",{key:0,class:o(e.classes(e.n("line"),[e.isFocus,e.n("--line-focus")],[e.errorMessage,e.n("--line-error")],[e.formDisabled||e.disabled,e.n("--line-disabled")])),style:I({borderColor:e.color})},[g("legend",{class:o(e.classes(e.n("line-legend"),[e.isFloating,e.n("line-legend--hint")])),style:I({width:e.legendWidth})},[e.placeholder&&e.hint?(t(),Y(Re,{key:0,to:"body"},[g("span",{ref:"placeholderTextEl",class:o(e.classes(e.n("placeholder-text"),e.n("$--ellipsis"),[e.size==="small",e.n("placeholder-text--small")]))},T(e.placeholder),3)])):h("v-if",!0)],6)],6)):(t(),f("div",{key:1,class:o(e.classes(e.n("line"),[e.formDisabled||e.disabled,e.n("--line-disabled")],[e.errorMessage,e.n("--line-error")])),style:I({background:e.errorMessage?void 0:e.blurColor})},[g("div",{class:o(e.classes(e.n("dot"),[e.isFocus,e.n("--line-focus")],[e.formDisabled||e.disabled,e.n("--line-disabled")],[e.errorMessage,e.n("--line-error")])),style:I({background:e.errorMessage?void 0:e.focusColor})},null,6)],6))],64)):h("v-if",!0)],2)}var he=z({name:"VarFieldDecorator",components:{VarIcon:ae},props:ge,setup(e,n){var{slots:a}=n,l=F(null),d=F(""),v=w(()=>e.errorMessage?void 0:e.isFocus?e.focusColor:e.blurColor),y=w(()=>e.hint&&(!P(e.value)||e.isFocus||a["prepend-icon"])),S=()=>{var{hint:c,value:E,composing:D}=e;if(!c&&(!P(E)||D))return K("--placeholder-hidden");if(y.value)return K("--placeholder-hint")},u=()=>{var{size:c,hint:E,variant:D,placeholder:V}=e;if(!V||!E||D!=="outlined"){d.value="";return}var B=We(l.value),U="var(--field-decorator-outlined-"+c+"-placeholder-space)";d.value="calc("+B.width+" * 0.75 + "+U+" * 2)"},M=c=>{m(e.onClear,c)},s=c=>{m(e.onClick,c)};return vn(u),H(u),Le(u),{placeholderTextEl:l,color:v,legendWidth:d,isFloating:y,computePlaceholderState:S,n:K,classes:In,isEmpty:P,handleClear:M,handleClick:s}}});he.render=Fn;const Dn=he;function Q(){return Q=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},Q.apply(this,arguments)}function Vn(e){return["text","password","number","tel","email"].includes(e)}var En=Q({modelValue:{type:String},modelModifiers:{type:Object,default:()=>({})},type:{type:String,default:"text",validator:Vn},textarea:{type:Boolean,default:!1},rows:{type:[String,Number],default:8},maxlength:{type:[String,Number]},readonly:{type:Boolean,default:!1},resize:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},validateTrigger:{type:Array,default:()=>["onInput","onClear"]},rules:{type:Array},enterkeyhint:{type:String},onFocus:$(),onBlur:$(),onInput:$(),onChange:$(),onClear:$(),"onUpdate:modelValue":$()},Ae(ge,["size","variant","placeholder","line","hint","textColor","focusColor","blurColor","disabled","clearable","onClick"])),{n:zn,classes:On}=L("input"),Pn=["placeholder","enterkeyhint"],Nn=["id","disabled","type","value","placeholder","maxlength","rows","enterkeyhint","inputmode"],Ln=["id","disabled","type","value","placeholder","maxlength","enterkeyhint","inputmode"];function Un(e,n){var a=N("var-field-decorator"),l=N("var-form-details");return t(),f("div",{class:o(e.classes(e.n(),e.n("$--box"))),onMousedown:n[15]||(n[15]=function(){return e.handleMousedown&&e.handleMousedown(...arguments)})},[C(a,qe(Ke({value:e.modelValue,id:e.id,size:e.size,variant:e.variant,placeholder:e.placeholder,line:e.line,hint:e.hint,textColor:e.textColor,focusColor:e.focusColor,blurColor:e.blurColor,isFocus:e.isFocus,errorMessage:e.errorMessage,formDisabled:e.formDisabled,disabled:e.disabled,clearable:e.clearable,cursor:e.cursor,composing:e.isComposing,onClick:e.handleClick,onClear:e.handleClear})),x({"append-icon":k(()=>[b(e.$slots,"append-icon")]),default:k(()=>[e.normalizedType==="password"?(t(),f("input",{key:0,tabindex:"-1",class:o(e.n("autocomplete")),placeholder:e.hint?void 0:e.placeholder,style:I({"--input-placeholder-color":e.placeholderColor}),enterkeyhint:e.enterkeyhint},null,14,Pn)):h("v-if",!0),e.textarea?(t(),f("textarea",{key:1,class:o(e.classes(e.n("input"),e.n("--textarea"),[e.formDisabled||e.disabled,e.n("--disabled")],[e.errorMessage,e.n("--error")],[e.errorMessage,e.n("--caret-error")])),ref:"el",autocomplete:"new-password",id:e.id,disabled:e.formDisabled||e.disabled||e.formReadonly||e.readonly,type:e.normalizedType,value:e.modelValue,placeholder:e.hint?void 0:e.placeholder,maxlength:e.maxlength,rows:e.rows,enterkeyhint:e.enterkeyhint,inputmode:e.type==="number"?"numeric":void 0,style:I({color:e.errorMessage?void 0:e.textColor,caretColor:e.errorMessage?void 0:e.focusColor,resize:e.resize?"vertical":"none","--input-placeholder-color":e.placeholderColor}),onFocus:n[0]||(n[0]=function(){return e.handleFocus&&e.handleFocus(...arguments)}),onBlur:n[1]||(n[1]=function(){return e.handleBlur&&e.handleBlur(...arguments)}),onInput:n[2]||(n[2]=function(){return e.handleInput&&e.handleInput(...arguments)}),onChange:n[3]||(n[3]=function(){return e.handleChange&&e.handleChange(...arguments)}),onTouchstart:n[4]||(n[4]=function(){return e.handleTouchstart&&e.handleTouchstart(...arguments)}),onCompositionstart:n[5]||(n[5]=function(){return e.handleCompositionStart&&e.handleCompositionStart(...arguments)}),onCompositionend:n[6]||(n[6]=function(){return e.handleCompositionEnd&&e.handleCompositionEnd(...arguments)})},`
      `,46,Nn)):(t(),f("input",{key:2,class:o(e.classes(e.n("input"),[e.formDisabled||e.disabled,e.n("--disabled")],[e.errorMessage,e.n("--error")],[e.errorMessage,e.n("--caret-error")])),ref:"el",autocomplete:"new-password",id:e.id,disabled:e.formDisabled||e.disabled||e.formReadonly||e.readonly,type:e.normalizedType,value:e.modelValue,placeholder:e.hint?void 0:e.placeholder,maxlength:e.maxlength,enterkeyhint:e.enterkeyhint,inputmode:e.type==="number"?"numeric":void 0,style:I({color:e.errorMessage?void 0:e.textColor,caretColor:e.errorMessage?void 0:e.focusColor,"--input-placeholder-color":e.placeholderColor}),onFocus:n[7]||(n[7]=function(){return e.handleFocus&&e.handleFocus(...arguments)}),onBlur:n[8]||(n[8]=function(){return e.handleBlur&&e.handleBlur(...arguments)}),onInput:n[9]||(n[9]=function(){return e.handleInput&&e.handleInput(...arguments)}),onChange:n[10]||(n[10]=function(){return e.handleChange&&e.handleChange(...arguments)}),onTouchstart:n[11]||(n[11]=function(){return e.handleTouchstart&&e.handleTouchstart(...arguments)}),onCompositionstart:n[12]||(n[12]=function(){return e.handleCompositionStart&&e.handleCompositionStart(...arguments)}),onCompositionend:n[13]||(n[13]=function(){return e.handleCompositionEnd&&e.handleCompositionEnd(...arguments)})},null,46,Ln))]),_:2},[e.$slots["prepend-icon"]?{name:"prepend-icon",fn:k(()=>[b(e.$slots,"prepend-icon")]),key:"0"}:void 0]),1040),C(l,{"error-message":e.errorMessage,"extra-message":e.maxlengthText,onMousedown:n[14]||(n[14]=Ye(()=>{},["stop"]))},x({_:2},[e.$slots["extra-message"]?{name:"extra-message",fn:k(()=>[b(e.$slots,"extra-message")]),key:"0"}:void 0]),1032,["error-message","extra-message"])],34)}var ye=z({name:"VarInput",components:{VarFormDetails:me,VarFieldDecorator:Dn},props:En,setup(e){var n=F("var-input-"+te().uid),a=F(null),l=F(!1),d=F(!1),v=w(()=>e.type==="number"?"text":e.type),y=w(()=>{var{maxlength:r,modelValue:i}=e;return r?P(i)?"0 / "+r:String(i).length+"/"+r:""}),S=w(()=>e.disabled||e.readonly?"":"text"),u=w(()=>{var{hint:r,blurColor:i,focusColor:p}=e;if(!r)return c.value?"var(--field-decorator-error-color)":l.value?p||"var(--field-decorator-focus-color)":i||"var(--field-decorator-blur-color)"}),{bindForm:M,form:s}=$n(),{errorMessage:c,validateWithTrigger:E,validate:D,resetValidation:V}=je(),B=r=>{de(()=>{var{validateTrigger:i,rules:p,modelValue:A}=e;E(i,r,p,A)})},U=r=>{l.value=!0,m(e.onFocus,r),B("onFocus")},ke=r=>{l.value=!1,m(e.onBlur,r),B("onBlur")},J=r=>{var i=r.target,{value:p}=i;return e.type==="number"&&(p=we(p)),De(Fe(p))},Se=()=>{d.value=!0},Me=r=>{d.value&&(d.value=!1,r.target.dispatchEvent(new Event("input")))},$e=r=>{if(!d.value){var i=J(r);m(e["onUpdate:modelValue"],i),m(e.onInput,i,r),B("onInput")}},Be=r=>{var i=J(r);m(e.onChange,i,r),B("onChange")},Te=()=>{var{disabled:r,readonly:i,clearable:p,onClear:A}=e;s!=null&&s.disabled.value||s!=null&&s.readonly.value||r||i||!p||(m(e["onUpdate:modelValue"],""),m(A,""),B("onClear"))},Ie=r=>{var{disabled:i,onClick:p}=e;s!=null&&s.disabled.value||i||(m(p,r),B("onClick"))},we=r=>{var i=r.indexOf("-"),p=r.indexOf(".");return i>-1&&(r=i===0?"-"+r.replace(/-/g,""):r.replace(/-/g,"")),p>-1&&(r=r.slice(0,p+1)+r.slice(p).replace(/\./g,"")),r.replace(/[^-0-9.]/g,"")},Fe=r=>e.modelModifiers.trim?r.trim():r,De=r=>e.maxlength?r.slice(0,Ge(e.maxlength)):r,Ve=r=>{var{disabled:i,readonly:p}=e;s!=null&&s.disabled.value||s!=null&&s.readonly.value||i||p||r.stopPropagation()};function Ee(r){var{disabled:i}=e;s!=null&&s.disabled.value||i||r.target===a.value||(W(),r.preventDefault())}var X=()=>{m(e["onUpdate:modelValue"],""),V()},Z=()=>D(e.rules,e.modelValue),W=()=>{var r;(r=a.value)==null||r.focus()},ze=()=>{a.value.blur()},Oe={reset:X,validate:Z,resetValidation:V};return m(M,Oe),H(()=>{e.autofocus&&W()}),{el:a,id:n,isFocus:l,isComposing:d,errorMessage:c,placeholderColor:u,normalizedType:v,cursor:S,maxlengthText:y,formDisabled:s==null?void 0:s.disabled,formReadonly:s==null?void 0:s.readonly,n:zn,classes:On,isEmpty:P,handleFocus:U,handleBlur:ke,handleInput:$e,handleChange:Be,handleClear:Te,handleClick:Ie,handleTouchstart:Ve,handleCompositionStart:Se,handleCompositionEnd:Me,handleMousedown:Ee,validate:Z,resetValidation:V,reset:X,focus:W,blur:ze}}});ye.render=Un;const ce=ye;R(ce);var Rn=ce,Wn={loading:{type:Boolean,default:!1},immediateCheck:{type:Boolean,default:!0},finished:{type:Boolean,default:!1},error:{type:Boolean,default:!1},offset:{type:[String,Number],default:0},loadingText:{type:String},finishedText:{type:String},errorText:{type:String},onLoad:$(),"onUpdate:loading":$(),"onUpdate:error":$()},An=Symbol("TAB_ITEM_BIND_LIST_KEY");function jn(){var{parentProvider:e,bindParent:n,index:a}=ie(An);return{index:a,tabItem:e,bindTabItem:n}}function re(e,n,a,l,d,v,y){try{var S=e[v](y),u=S.value}catch(M){a(M);return}S.done?n(u):Promise.resolve(u).then(l,d)}function qn(e){return function(){var n=this,a=arguments;return new Promise(function(l,d){var v=e.apply(n,a);function y(u){re(v,l,d,y,S,"next",u)}function S(u){re(v,l,d,y,S,"throw",u)}y(void 0)})}}var{n:Kn,classes:Yn}=L("list");function Gn(e,n){var a=N("var-loading"),l=oe("ripple");return t(),f("div",{class:o(e.classes(e.n(),e.n("$--box"))),ref:"listEl"},[b(e.$slots,"default"),e.loading?b(e.$slots,"loading",{key:0},()=>[g("div",{class:o(e.n("loading"))},[g("div",{class:o(e.n("loading-text"))},T(e.dt(e.loadingText,e.pack.listLoadingText)),3),C(a,{size:"mini",radius:10})],2)]):h("v-if",!0),e.finished?b(e.$slots,"finished",{key:1},()=>[g("div",{class:o(e.n("finished"))},T(e.dt(e.finishedText,e.pack.listFinishedText)),3)]):h("v-if",!0),e.error?b(e.$slots,"error",{key:2},()=>[se((t(),f("div",{class:o(e.n("error")),onClick:n[0]||(n[0]=function(){return e.load&&e.load(...arguments)})},[O(T(e.dt(e.errorText,e.pack.listErrorText)),1)],2)),[[l]])]):h("v-if",!0),g("div",{class:o(e.n("detector")),ref:"detectorEl"},null,2)],2)}var be=z({name:"VarList",directives:{Ripple:le},components:{VarLoading:Qe},props:Wn,setup(e){var{tabItem:n,bindTabItem:a}=jn(),l=F(null),d=F(null),v,y=()=>{m(e["onUpdate:error"],!1),m(e["onUpdate:loading"],!0),m(e.onLoad)},S=()=>{var{bottom:s}=ne(v),{bottom:c}=ne(d.value);return Math.floor(c)-_e(e.offset)<=s},u=()=>{v.removeEventListener("scroll",M)},M=function(){var s=qn(function*(){yield de(),!(e.loading||e.finished||e.error||(n==null?void 0:n.current.value)===!1||!S())&&y()});return function(){return s.apply(this,arguments)}}();return m(a,{}),n&&ee(()=>n.current.value,M),ee(()=>[e.loading,e.error,e.finished],M),H(()=>{v=Ze(l.value),v.addEventListener("scroll",M),e.immediateCheck&&M()}),fn(u),{pack:He,listEl:l,detectorEl:d,dt:Je,isNumber:Xe,load:y,check:M,n:Kn,classes:Yn}}});be.render=Gn;const Ce=be;R(Ce);var Qn=Ce;ue`
    query ping {
  ping
}
    `;const Hn=ue`
    query profile {
  profile {
    profile {
      userId
      secret
      maxDevice
    }
  }
}
    `;function Jn(e={}){return xe(Hn,{},e)}const Xn=e=>(sn("data-v-0a8fe6f8"),e=e(),tn(),e),Zn={class:"main"},_n=Xn(()=>g("h3",{class:"h3"},"Online Devices (2/3)",-1)),xn=z({__name:"AppWelcome",setup(e){const{name:n}=en(),{result:a}=Jn(),l=F([{title:"Ios",ip:"1.1.1.1",type:"iOS"},{title:"Ma1c",ip:"1.1.1.1",type:"Mac"}]),d=w(()=>{var u;return`https://api.hikit.io/proxy/subscription?tick=${((u=a==null?void 0:a.value)==null?void 0:u.profile.profile.secret)??"Waiting"}`}),v=w(()=>{var u;return((u=a==null?void 0:a.value)==null?void 0:u.profile.profile.maxDevice)??"Waiting"}),{copy:y}=nn(),S=()=>{y(d.value).then(()=>{ln.success({content:"Copy success"})})};return(u,M)=>{const s=yn,c=Qn,E=dn,D=on,V=Rn,B=rn;return t(),f("div",Zn,[C(B,{class:"main_space",direction:"column"},{default:k(()=>[g("h1",null,"Hi,"+T(an(n)),1),C(c,null,{default:k(()=>[C(s,{title:"Max Device",border:""},{extra:k(()=>[O(T(v.value),1)]),_:1}),C(s,{title:"Used",border:""},{extra:k(()=>[O("Unlimited")]),_:1})]),_:1}),_n,h("",!0),C(V,{"model-value":d.value,rows:"4",textarea:"",disabled:""},null,8,["model-value"]),C(B,{justify:"center"},{default:k(()=>[C(D,{onClick:S,type:"primary",text:"",outline:""},{default:k(()=>[O(" Copy Subscribe Link")]),_:1}),C(D,{type:"danger",text:"",outline:""},{default:k(()=>[O(" Reset Subscribe")]),_:1})]),_:1})]),_:1})])}}});const nr=un(xn,[["__scopeId","data-v-0a8fe6f8"]]);export{nr as default};