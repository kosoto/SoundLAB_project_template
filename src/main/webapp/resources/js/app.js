"use strict";
var app = app || {};

app=(()=>{
     var init =x=>{
         console.log('1. app.init::');
         $.extend((()=>{
              sessionStorage.setItem('ctx',x);
              sessionStorage.setItem('js',x+'/resources/js');
              sessionStorage.setItem('css',x+'/resources/css');
              sessionStorage.setItem('img',x+'/resources/img');
              return {
                  ctx : ()=> sessionStorage.getItem('ctx'),
                  js : ()=> sessionStorage.getItem('js'),
                  css : ()=> sessionStorage.getItem('css'),
                  img : ()=> sessionStorage.getItem('img')
              };
         })());
         app.main.init();
     };
     return {
         init : init
     };
})();
app.main=(()=>{
     var init =()=>{
         console.log('2. app.main.init::');
         onCreate();
     };
     var onCreate =()=>{
         setContentView();
     };
     var setContentView =()=>{      
         $.getScript($.js()+'/sh.js',()=>{
                  	sh.init();
                  });
     };
     return{init : init};
})();