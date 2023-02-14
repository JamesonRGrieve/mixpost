import{_ as v,o as n,c as a,b as r,m as P,w as s,g as L,u as m,L as j,r as N,j as p,R as $,G as q,k as A,a as e,p as F,f as i,d as x,q as E,t as b,h as y,F as V,e as C}from"./app.4360a1f1.js";import{u as H}from"./useNotifications.fc3c39e9.js";import{T as M,c as O,a as T}from"./Alert.df711de1.js";import{P as U,_ as S,c as z,d as R,e as G}from"./VerticallyScrollableContent.6ae0e7cf.js";import{E as J}from"./EllipsisVertical.078d4700.js";import{_ as I,a as B}from"./DropdownItem.8163af8c.js";import{a as K}from"./PrimaryButton.f788cc7b.js";import{_ as Q}from"./ProviderIcon.e0a19e1f.js";import{_ as D}from"./Checkbox.f5567220.js";import{_ as W}from"./SearchInput.da53487f.js";const X={},Y={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},Z=r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"},null,-1),ee=[Z];function te(t,c){return n(),a("svg",Y,ee)}const Ke=v(X,[["render",te]]),se={},oe={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},ne=r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 19.5L8.25 12l7.5-7.5"},null,-1),ae=[ne];function le(t,c){return n(),a("svg",oe,ae)}const Qe=v(se,[["render",le]]),re={__name:"PureButtonLink",props:{href:{type:String,required:!0},method:{type:String,default:"get"},as:{type:String,default:"a"},type:{type:String,default:null}},setup(t){return(c,d)=>(n(),P(m(j),{href:t.href,methods:t.method,as:t.as,type:t.type,class:"relative inline-flex items-center text-gray-400 hover:text-indigo-500 transition-colors ease-in-out duration-200"},{default:s(()=>[L(c.$slots,"default")]),_:3},8,["href","methods","as","type"]))}},ce={},ie={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},de=r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"},null,-1),ue=[de];function me(t,c){return n(),a("svg",ie,ue)}const _e=v(ce,[["render",me]]),fe={class:"flex flex-row items-center gap-xs"},he=i(" Duplicate "),pe=i(" Delete "),ve=i(" Delete post "),we=i(" Are you sure you want to delete this post? "),$e=i("Cancel"),ge=i("Delete"),We={__name:"PostItemActions",props:{itemId:{type:Number,required:!0}},emits:["onDelete"],setup(t,{emit:c}){const d=t,u=N(!1),h=p(()=>{const l=$().props.value;return l.hasOwnProperty("filter")?l.filter.status:null}),{notify:_}=H(),w=()=>{x.Inertia.delete(route("mixpost.posts.delete",{post:d.itemId,status:h.value}),{onSuccess(){u.value=!1,_("success","Post deleted"),c("onDelete"),E.emit("postDelete",d.itemId)}})},g=()=>{x.Inertia.post(route("mixpost.posts.duplicate",{post:d.itemId}),{},{onSuccess(){_("success","Post duplicated")}})};return(l,o)=>{const f=q("tooltip");return n(),a("div",null,[r("div",fe,[A((n(),P(re,{href:l.route("mixpost.posts.edit",{post:t.itemId})},{default:s(()=>[e(U)]),_:1},8,["href"])),[[f,"Edit"]]),e(B,{"width-classes":"w-32",placement:"bottom-end"},{trigger:s(()=>[e(S,{class:"mt-1"},{default:s(()=>[e(J)]),_:1})]),content:s(()=>[e(I,{onClick:g,as:"button"},{default:s(()=>[e(_e,{class:"!w-5 !h-5 mr-1"}),he]),_:1}),e(I,{onClick:o[0]||(o[0]=k=>u.value=!0),as:"button"},{default:s(()=>[e(M,{class:"!w-5 !h-5 mr-1 text-red-500"}),pe]),_:1})]),_:1})]),e(T,{show:u.value,variant:"danger",onClose:o[2]||(o[2]=k=>u.value=!1)},{header:s(()=>[ve]),body:s(()=>[we]),footer:s(()=>[e(F,{onClick:o[1]||(o[1]=k=>u.value=!1),class:"mr-xs"},{default:s(()=>[$e]),_:1}),e(O,{onClick:w},{default:s(()=>[ge]),_:1})]),_:1},8,["show"])])}}},ke={},xe={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},be=r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"},null,-1),ye=[be];function Ve(t,c){return n(),a("svg",xe,ye)}const Ce=v(ke,[["render",Ve]]),Ie={class:"flex items-center"},De={class:"ml-xs hidden sm:inline-block"},Pe=i("Filters "),Se={key:0,class:"px-2 py-1 rounded-md bg-white text-black font-bold"},Be=i("Clear filter"),Le={key:0,class:"p-sm"},je=r("div",{class:"font-semibold"},"Labels",-1),Ne={class:"mt-sm flex flex-wrap items-center gap-xs"},qe={class:"p-sm mt-sm"},Ae=r("div",{class:"font-semibold"},"Accounts",-1),Fe={class:"mt-sm flex flex-wrap items-center gap-xs"},Xe={__name:"PostsFilter",props:{modelValue:{type:Object,required:!0}},emits:["update:modelValue"],setup(t,{emit:c}){const d=t,u=p(()=>$().props.value.accounts),h=p(()=>$().props.value.tags),_=p(()=>d.modelValue.tags.length+d.modelValue.accounts.length),w=()=>{c("update:modelValue",Object.assign(d.modelValue,{keyword:"",tags:[],accounts:[]}))};return(g,l)=>(n(),a("div",Ie,[e(W,{modelValue:t.modelValue.keyword,"onUpdate:modelValue":l[0]||(l[0]=o=>t.modelValue.keyword=o),class:"mr-2"},null,8,["modelValue"]),e(B,{"width-classes":"w-72",placement:"bottom-end","closeable-on-content":!1},{trigger:s(()=>[e(K,{size:"md"},{default:s(()=>[e(Ce),r("span",De,[Pe,m(_)?(n(),a("span",Se,b(m(_)),1)):y("",!0)])]),_:1})]),header:s(()=>[e(S,{onClick:w},{default:s(()=>[Be]),_:1})]),content:s(()=>[e(z,null,{default:s(()=>[m(h).length?(n(),a("div",Le,[je,r("div",Ne,[(n(!0),a(V,null,C(m(h),o=>(n(),a("label",{key:o.id,class:"flex items-center cursor-pointer"},[e(D,{checked:t.modelValue.tags,"onUpdate:checked":l[1]||(l[1]=f=>t.modelValue.tags=f),value:o.id,number:"",class:"mr-1"},null,8,["checked","value"]),e(R,{item:o,removable:!1,editable:!1},null,8,["item"])]))),128))])])):y("",!0),r("div",qe,[Ae,r("div",Fe,[(n(!0),a(V,null,C(m(u),o=>(n(),a("label",{key:o.id,class:"flex items-center cursor-pointer"},[e(D,{checked:t.modelValue.accounts,"onUpdate:checked":l[2]||(l[2]=f=>t.modelValue.accounts=f),value:o.id,number:"",class:"mr-1"},null,8,["checked","value"]),e(G,null,{default:s(()=>[e(Q,{provider:o.provider,class:"!w-4 !h-4 mr-xs"},null,8,["provider"]),i(" "+b(o.name),1)]),_:2},1024)]))),128))])])]),_:1})]),_:1})]))}};export{Qe as C,We as _,Ke as a,Xe as b};
