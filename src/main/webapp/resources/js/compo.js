"use strict";
var ui = ui || {};
var fn = fn || {};
	
ui={
     br : x=>{
         let len = x.len;
         for(var i=0;i<len;i++){
              $('<br/>').appendTo(x.at);
         }
     },
     span : x=>$('<span/>').attr({id : x.id}).addClass(x.clazz).appendTo(x.at),
     div : x=>$('<div/>').attr({id : x.id}).addClass(x.clazz).appendTo(x.at),
     a : x=>$('<a/>').attr({href : '#',id : x.id}).addClass(x.clazz).html(x.txt).appendTo(x.at),
     ul : x=>{
         let ul = $('<ul>');
         let len = x.len;
         let id = x.id;
         for(var i=0;i<len;i++){
              $('<li/>').attr({id : id+'-'+i}).appendTo(ul);
         }
         return ul.appendTo(x.at);
     },
     label : x=>$('<label/>').attr({'for':x.id}).text(x.txt).appendTo(x.at),
     btn : x=>$('<button/>').attr({'type':'button', id : x.id }).addClass('btn btn-'+x.clazz).html(x.txt).appendTo(x.at),
         //            attr          addClass           html
         /*<button type="button" class="btn btn-primary">Primary</button>
          * http://bootstrap4.kr/docs/4.0/components/buttons/
          *  clazz   :   color
          * primary       파랑
          * secondary   회색
          * success        초록
          * danger     빨강
          * warning        노랑
          * info           하늘
          * light      투명
          * dark           검정
          * link           링크*/
     input : x=>$("<input/>").attr({id : x.id, type: x.type,  placeholder: x.holder }).addClass(x.clazz).appendTo(x.at),
     
}

fn = {
	scroll : x=>{ $('html, body').animate({scrollTop : $(x).offset().top-400}, 400);}	
}