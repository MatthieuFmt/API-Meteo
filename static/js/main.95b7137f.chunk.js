(this["webpackJsonpapi-meteo"]=this["webpackJsonpapi-meteo"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(7),i=c.n(n),r=(c(12),c(4)),j=c(2),d=(c(13),c(0));function o(){var e=["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"],t=Object(a.useState)(""),c=Object(j.a)(t,2),s=c[0],n=c[1],i=Object(a.useState)(""),o=Object(j.a)(i,2),l=o[0],b=o[1],u=Object(a.useState)(""),O=Object(j.a)(u,2),h=O[0],m=O[1],p=Object(a.useState)(""),f=Object(j.a)(p,2),x=f[0],v=f[1],g=Object(a.useState)(""),N=Object(j.a)(g,2),w=N[0],S=N[1],y=Object(a.useState)(!0),D=Object(j.a)(y,2),k=D[0],M=D[1],L=Object(a.useState)(""),E=Object(j.a)(L,2),J=E[0],A=E[1],C=Object(a.useState)([]),F=Object(j.a)(C,2),H=F[0],V=F[1],z=Object(a.useState)([]),B=Object(j.a)(z,2),I=B[0],K=B[1],P=Object(a.useState)([]),R=Object(j.a)(P,2),U=R[0],Y=R[1],_=Object(a.useState)([]),q=Object(j.a)(_,2),G=q[0],Q=q[1],T=Object(a.useState)([]),W=Object(j.a)(T,2),X=W[0],Z=W[1],$="./assets/".concat(J,"/").concat(l,".svg"),ee=(new Date).getHours();Object(a.useEffect)((function(){A(ee>=6&&ee<21?"jour":"nuit")}),[J]);var te=(new Date).getDate(),ce=(new Date).getMonth()+1,ae=(new Date).getFullYear(),se=(new Date).toLocaleDateString("fr-FR",{weekday:"long"});se=se.charAt(0).toLocaleUpperCase()+se.slice(1);var ne=e.slice(e.indexOf(se)).concat(e.slice(0,e.indexOf(se))),ie="".concat(te<10?"0".concat(te):te,"/").concat(ce<10?"0".concat(ce):ce,"/").concat(ae);return Object(a.useEffect)((function(){k&&navigator.geolocation.getCurrentPosition((function(e){!function(e,t){fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(t,"&lon=").concat(e,"&exclude=minutely&lang=fr&units=metric&appid=").concat("fdcf4f88380f694ed4370fe3f5f0dafa")).then((function(e){return e.json()})).then((function(e){n(e.current.weather[0].description),b(e.current.weather[0].icon),m(Math.trunc(e.current.temp)),v("".concat(e.current.humidity,"%")),S("".concat(e.current.wind_speed,"Km/h")),Z(e.timezone),console.log(e);for(var t=Object(r.a)(H),c=Object(r.a)(I),a=Object(r.a)(U),s=Object(r.a)(G),i=0;i<e.daily.length;i++)t.push(e.daily[i].temp.max),c.push(e.daily[i].temp.min),a.push(e.daily[i].weather[0].description),s.push(e.daily[i].weather[0].icon),V(t),K(c),Y(a),Q(s)}))}(e.coords.longitude,e.coords.latitude),M(!1)}),(function(){alert("La localisation est d\xe9sactiv\xe9")}))}),[k]),Object(d.jsxs)("div",{className:"grid-meteo",children:[Object(d.jsx)("div",{className:"city",children:X}),Object(d.jsxs)("div",{className:"date",children:[Object(d.jsx)("div",{className:"now",children:se}),Object(d.jsx)("div",{className:"full-date",children:ie})]}),Object(d.jsxs)("div",{className:"infos",children:[Object(d.jsxs)("div",{className:"temp",children:[" ","".concat(h,"\xb0")]}),Object(d.jsx)("div",{className:"description",children:s}),Object(d.jsxs)("div",{className:"other-info",children:[Object(d.jsxs)("span",{children:["Humidit\xe9: ",Object(d.jsx)("br",{}),x]}),Object(d.jsxs)("span",{children:["Vent: ",Object(d.jsx)("br",{}),w]})]})]}),Object(d.jsx)("div",{className:"logo",children:Object(d.jsx)("img",{src:$,alt:""})}),Object(d.jsx)("div",{className:"prev",children:ne.map((function(e,t){return Object(d.jsxs)("div",{className:"days ",children:[Object(d.jsxs)("div",{className:"week-day",children:[e.slice(0,3),"."]}),Object(d.jsx)("div",{className:"icon-week",children:Object(d.jsx)("img",{src:"./assets/jour/".concat(G[t+1],".svg"),alt:""})}),Object(d.jsxs)("div",{className:"min-max",children:[Object(d.jsx)("span",{className:"max",children:H[t+1]}),"/",Object(d.jsx)("span",{className:"min",children:I[t+1]})]}),Object(d.jsx)("div",{className:"prev-week",children:U[t+1]})]},t)}))})]})}var l=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(o,{})})};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(l,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.95b7137f.chunk.js.map