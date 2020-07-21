(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{21:function(e,t,n){e.exports=n(45)},26:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),o=n.n(c),l=(n(26),function(){return r.a.createElement("h2",null,"Expense Tracker")}),u=n(3),s=n.n(u),i=n(9),m=n(6),p=n(20),d=n(2),f=function(e,t){switch(t.type){case"GET_TRANSACTIONS":return Object(d.a)(Object(d.a)({},e),{},{loading:!1,transactions:t.payload});case"DELETE_TRANSACTION":return Object(d.a)(Object(d.a)({},e),{},{transactions:e.transactions.filter((function(e){return e._id!==t.payload}))});case"ADD_TRANSACTION":return Object(d.a)(Object(d.a)({},e),{},{transactions:[].concat(Object(p.a)(e.transactions),[t.payload])});case"TRANSACTION_ERROR":return Object(d.a)(Object(d.a)({},e),{},{error:t.payload});default:return e}},E=n(4),b=n.n(E),v={transactions:[],error:null,loading:!0,user:null,token:null,login:null},h=Object(a.createContext)(v),O=function(e){var t=e.children,n=Object(a.useReducer)(f,v),c=Object(m.a)(n,2),o=c[0],l=c[1];function u(){return(u=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("/api/v1/transactions",{headers:{Authorization:"bearer ".concat(o.token)}});case 3:t=e.sent,console.log("Loading.."),console.log(t.status_code),l({type:"GET_TRANSACTIONS",payload:t.data.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),l({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function p(){return(p=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.delete("/api/v1/transactions/".concat(t),{headers:{Authorization:"bearer ".concat(o.token)}});case 3:l({type:"DELETE_TRANSACTION",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),l({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function d(){return(d=Object(i.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post("/api/v1/transactions",t,{headers:{Authorization:"bearer ".concat(o.token),"Context-type":"application/json"}});case 3:n=e.sent,l({type:"ADD_TRANSACTION",payload:n.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return r.a.createElement(h.Provider,{value:{transactions:o.transactions,error:o.error,loading:o.loading,getTransactions:function(){return u.apply(this,arguments)},deleteTransaction:function(e){return p.apply(this,arguments)},addTransaction:function(e){return d.apply(this,arguments)},token:o.token,user:o.user,login:o.login,setLogin:function(e){o.login=e},setToken:function(e){o.token=e},setUser:function(e){o.user=e}}},t)};function g(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}var y=function(){var e=Object(a.useContext)(h).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return r.a.createElement("div",null,r.a.createElement("h4",null,"Your Balance"),r.a.createElement("h1",{id:"balance"},"\u20b9",g(e)))},N=function(){var e=Object(a.useContext)(h).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=(-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)).toFixed(2);return r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Income"),r.a.createElement("p",{id:"money-plus",className:"money plus"},"\u20b9 ",g(t)," ")),r.a.createElement("div",null,r.a.createElement("h4",null,"Expense"),r.a.createElement("p",{id:"money-minus",className:"money minus"},"\u20b9 ",g(n))))},T=function(e){var t=e.transaction,n=Object(a.useContext)(h).deleteTransaction,c=t.amount<0?"-":"+";return r.a.createElement("li",{className:t.amount<0?"minus":"plus"},t.text," ",r.a.createElement("span",null,c,"\u20b9 ",g(Math.abs(t.amount))," "),r.a.createElement("button",{onClick:function(){return n(t._id)},className:"delete-btn"},"X"))},x=function(){var e=Object(a.useContext)(h),t=e.transactions,n=e.getTransactions;return Object(a.useEffect)((function(){n()}),[]),r.a.createElement("div",null,r.a.createElement("h3",null,"History"),r.a.createElement("ul",{id:"list",className:"list"},t.map((function(e){return r.a.createElement(T,{key:e.id,transaction:e})}))))},A=function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(0),l=Object(m.a)(o,2),u=l[0],s=l[1],i=Object(a.useContext)(h).addTransaction;return r.a.createElement("div",null,r.a.createElement("h3",null,"Add new transaction"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={id:Math.floor(1e8*Math.random()),text:n,amount:+u};i(t),c(""),s(0)}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"text"},"Text"),r.a.createElement("input",{type:"text",id:"text",value:n,onChange:function(e){return c(e.target.value)},placeholder:"Enter text..."})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"amount"},"Amount ",r.a.createElement("br",null),"(negative - expense, positive - income)"),r.a.createElement("input",{type:"number",id:"amount",value:u,onChange:function(e){return s(e.target.value)},placeholder:"Enter amount..."})),r.a.createElement("button",{className:"btn"},"Add transaction")))},j=n(7),k=n.n(j),R=function(){var e=Object(a.useContext)(h),t=(e.token,e.user,e.setToken),n=e.setUser,c=(e.login,e.setLogin),o=k.a.get("jwt");if("undefined"===typeof o)return r.a.createElement(a.Fragment,null,r.a.createElement("a",{href:"/login/auth/google"},r.a.createElement("button",{className:"btn"},"Log In.."))," ");var l=k.a.get("user");if(console.log(l),"undefined"!==typeof l){var u=JSON.parse(l.slice(2));u._id;return t(o),n(u),c(!0),r.a.createElement(a.Fragment,null,r.a.createElement("h1",null," Hey ",u.Name," !!"),r.a.createElement("button",{className:"btn",onClick:function(){b.a.get("/login/logout",{headers:{Authorization:"bearer ".concat(o)}}),t(null),n(null),c(null),k.a.remove("jwt"),k.a.remove("user"),window.location.reload()}},"Log OUT"))}};var C=function(){return r.a.createElement(O,null,r.a.createElement("div",{className:"App"},r.a.createElement(l,null),r.a.createElement("div",{className:"container"},r.a.createElement(R,null),r.a.createElement(y,null),r.a.createElement(N,null),r.a.createElement(x,null),r.a.createElement(A,null))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.b634c26b.chunk.js.map