(this.webpackJsonpcitas=this.webpackJsonpcitas||[]).push([[0],{16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(9),o=a.n(s),n=(a(8),a(11)),r=a(3),i=(a(16),a(0)),l=function(e){var t=e.cita,a=e.eliminarCita;console.log(a);var c=t.mascota,s=t.propietario,o=t.fecha,n=t.hora,r=t.sintomas,l=t.uid;return Object(i.jsxs)("div",{className:"container-card mt-2",children:[Object(i.jsxs)("strong",{className:"text-center",children:[' ID de Caso: "',l,'"']}),Object(i.jsxs)("strong",{children:["Mascosa: ",c]}),Object(i.jsxs)("strong",{children:["Propietario: ",s]}),Object(i.jsxs)("strong",{children:["Fecha: ",o]}),Object(i.jsxs)("strong",{children:["Hora: ",n]}),Object(i.jsxs)("strong",{children:["Sintomas: ",r]}),Object(i.jsx)("button",{className:"btn btn-danger mt-2",onClick:function(){return a(l)},children:"Eliminar \xd7"})]})},m=a(5),j=a(7),b=a(10),d=function(e){var t=e.crearCitas,a=Object(c.useState)({mascota:"",propietario:"",fecha:"",hora:"",sintomas:""}),s=Object(r.a)(a,2),o=s[0],n=s[1],l=Object(c.useState)(!1),d=Object(r.a)(l,2),h=d[0],u=d[1],O=o.mascota,x=o.propietario,g=o.fecha,p=o.hora,f=o.sintomas,N=function(e){n(Object(j.a)(Object(j.a)({},o),{},Object(m.a)({},e.target.name,e.target.value)))};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h2",{children:"Formulario"}),Object(i.jsx)("hr",{}),Object(i.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!O.trim()||!x.trim()||!g.trim()||!p.trim()||!f.trim())return console.log("Campo vac\xedo!"),void u(!0);u(!1),o.uid=Object(b.a)(),console.log(o),console.log("procesando los datos"),t(o),n({mascota:"",propietario:"",fecha:"",hora:"",sintomas:""})},children:[h&&Object(i.jsx)("p",{className:"alert alert-danger",children:"Todos los campos son obligatorios..."}),Object(i.jsx)("label",{className:"mt-2",children:"Nombre de la Mascota:"}),Object(i.jsx)("input",{type:"text",className:"form-control",name:"mascota",onChange:N,value:O}),Object(i.jsx)("label",{className:"mt-2",children:"Nombre del Due\xf1o:"}),Object(i.jsx)("input",{type:"text",className:"form-control",name:"propietario",onChange:N,value:x}),Object(i.jsx)("label",{className:"mt-2",children:"Fecha:"}),Object(i.jsx)("input",{type:"date",className:"form-control",name:"fecha",onChange:N,value:g}),Object(i.jsx)("label",{className:"mt-2",children:"Hora:"}),Object(i.jsx)("input",{type:"time",className:"form-control",name:"hora",onChange:N,value:p}),Object(i.jsx)("label",{className:"mt-2",children:"Sintomas:"}),Object(i.jsx)("textarea",{name:"sintomas",className:"form-control",onChange:N,value:f}),Object(i.jsx)("button",{className:"btn btn-primary btn-block mt-4 btn-lg",type:"submit",children:"Agregar Cita"})]})]})};var h=function(){var e=JSON.parse(localStorage.getItem("citas"));e||(e=[]);var t=Object(c.useState)(e),a=Object(r.a)(t,2),s=a[0],o=a[1];Object(c.useEffect)((function(){e?localStorage.setItem("citas",JSON.stringify(s)):localStorage.setItem("citas",JSON.stringify([]))}),[s]);var m=function(e){var t=s.filter((function(t){return t.uid!==e}));console.log(t),o(t)},j=0===s.length?"No hay Citas...":"Citas agendadas";return console.log(s),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{className:"text-center mt-4",children:"Administrador de Citas"}),Object(i.jsxs)("div",{className:"row mt-3",children:[Object(i.jsx)("div",{className:"col col-lg-6 col-md-6 col-12",children:Object(i.jsx)(d,{crearCitas:function(e){o([].concat(Object(n.a)(s),[e]))}})}),Object(i.jsxs)("div",{className:"col col-lg-6 col-md-6 col-12 mt-2",children:[Object(i.jsx)("h2",{className:"text-center",children:j}),s.map((function(e){return Object(i.jsx)(l,{cita:e,eliminarCita:m},e.uid)}))]})]})]})};o.a.render(Object(i.jsx)(h,{}),document.getElementById("root"))},8:function(e,t,a){}},[[18,1,2]]]);
//# sourceMappingURL=main.f2e7a4f3.chunk.js.map