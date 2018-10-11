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
<<<<<<< HEAD
		scroll : x=>{ $('html, body').animate({scrollTop : $(x.id).offset().top-x.len}, 400);}
=======
	scroll : x=> $('html, body').animate({scrollTop : $(x.id).offset().top-x.len}, 400),
	loginValidation : x=>{
        let auth = true;
        if(!fn.idValidation(x.id)){
             auth = false;
             alert('아이디를 올바르게 입력하세요.');
        }
        if(!fn.passValidation(x.pass)){
             auth = false;
             alert('비밀번호를 올바르게 입력하세요.');
        }
        return auth;
    },
    joinValidation : x=>{
        let auth = true;
        if(!fn.idValidation(x.id)){
             auth = false;
             alert('아이디를 올바르게 입력하세요.');
        }
        if(!fn.passValidation(x.pass)){
             auth = false;
             alert('비밀번호를 올바르게 입력하세요.');
        }
        if(x.pass2!==x.pass){
             auth = false;
             alert('비밀번호가 서로 다릅니다.');
        }
        if(!fn.nameValidation(x.name)){
             auth = false;
             alert('이름을 올바르게 입력하세요.');
        }
        if(!fn.nickValidation(x.nick)){
             auth = false;
             alert('닉네임을 올바르게 입력하세요.');
        }
        if(!fn.ssnValidation(x.ssn)){
             auth = false;
             alert('생년월일을 올바르게 입력하세요.');
        }
        if(!fn.emailValidation(x.email)){
             auth = false;
             alert('이메일을 올바르게 입력하세요.');
        }
        if(!fn.phoneValidation(x.phone)){
             auth = false;
             alert('전화번호를 올바르게 입력하세요.');
        }
        return auth;
    },
    idValidation : x=>{
        let regexr = /^[A-Za-z0-9]{4,10}$/;
        return regexr.test(x);
    },
    passValidation : x=>{
        let regexr = /^[A-Za-z0-9\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]{4,10}$/;
        return regexr.test(x);
    },
    emailValidation : x=>{
        var regexr = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
        return regexr.test(x);
    }
    ,
    phoneValidation : x=>{
        let regexr = /^\d{3}\d{3,4}\d{4}$/;
        return regexr.test(x);
    },
    ssnValidation : x=>{
        let regexr = /^(?:[0-9]{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[1,2][0-9]|3[0,1]))$/;
        return regexr.test(x);
    },
    nickValidation : x=>{
        let regexr = /^[가-힣a-zA-Z]+$/;
        return regexr.test(x);
    },
    nameValidation : x=>{
        let regexr = /^[가-힣]+$/;
        return regexr.test(x);
    }
>>>>>>> refs/remotes/origin/master
}