import{c as u}from"./BGIqdt1y.js";import{g as _,o,c,a as w,r as p,n as i,j as l,l as g,w as a,b as n,d,F as S,q as F,t as h}from"./CTXTADQ6.js";import{_ as H}from"./pLJGYkj8.js";import{D as C,a as L,C as I,b as R}from"./D6PpEwZq.js";import{u as k}from"./CW_0NQy4.js";import{c as V}from"./Duc0wxzB.js";const K={class:"relative w-full overflow-auto"},j=_({__name:"Table",props:{class:{}},setup(t){const e=t;return(s,r)=>(o(),c("div",K,[w("table",{class:i(l(u)("w-full caption-bottom text-sm",e.class))},[p(s.$slots,"default")],2)]))}}),z=_({__name:"TableBody",props:{class:{}},setup(t){const e=t;return(s,r)=>(o(),c("tbody",{class:i(l(u)("[&_tr:last-child]:border-0",e.class))},[p(s.$slots,"default")],2))}}),A=_({__name:"TableCell",props:{class:{}},setup(t){const e=t;return(s,r)=>(o(),c("td",{class:i(l(u)("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",e.class))},[p(s.$slots,"default")],2))}}),M=_({__name:"TableHead",props:{class:{}},setup(t){const e=t;return(s,r)=>(o(),c("th",{class:i(l(u)("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",e.class))},[p(s.$slots,"default")],2))}}),Q=_({__name:"TableHeader",props:{class:{}},setup(t){const e=t;return(s,r)=>(o(),c("thead",{class:i(l(u)("[&_tr]:border-b",e.class))},[p(s.$slots,"default")],2))}}),U=_({__name:"TableRow",props:{class:{}},setup(t){const e=t;return(s,r)=>(o(),c("tr",{class:i(l(u)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",e.class))},[p(s.$slots,"default")],2))}}),G={class:"p-10"},J=w("h1",{class:"font-bold text-2xl mb-10"},"Все точки",-1),P={key:0},oe=_({__name:"index",setup(t){const{data:e,isLoading:s}=k({queryKey:["customers"],queryFn:()=>C.listDocuments(L,I)}),{data:r,isLoading:D}=k({queryKey:["deals"],queryFn:()=>C.listDocuments(L,R)}),B=s||D;return(W,X)=>{const f=M,x=U,v=Q,E=H,b=A,N=z,q=j;return o(),c("div",G,[J,l(B)?(o(),c("div",P,"Пожалуйста подождите")):(o(),g(q,{key:1},{default:a(()=>[n(v,null,{default:a(()=>[n(x,null,{default:a(()=>[n(f,{class:"w-[100px]"},{default:a(()=>[d("Адрес точки (кликните чтобы редактировать)")]),_:1}),n(f,{class:"w-[200px]"},{default:a(()=>[d("Выручка")]),_:1}),n(f,{class:"w-[200px]"},{default:a(()=>[d("Email менеджера")]),_:1})]),_:1})]),_:1}),n(N,null,{default:a(()=>{var $;return[(o(!0),c(S,null,F(($=l(e))==null?void 0:$.documents,m=>(o(),g(x,{key:m.$id},{default:a(()=>[n(b,null,{default:a(()=>[n(E,{href:`/customers/edit/${m.$id}`},{default:a(()=>[d(h(m.name),1)]),_:2},1032,["href"])]),_:2},1024),n(b,null,{default:a(()=>{var y,T;return[d(h(l(V)((T=(y=l(r))==null?void 0:y.documents.find(O=>O.customer.$id===m.$id))==null?void 0:T.price)),1)]}),_:2},1024),n(b,null,{default:a(()=>[d(h(m.email),1)]),_:2},1024)]),_:2},1024))),128))]}),_:1})]),_:1}))])}}});export{oe as default};
