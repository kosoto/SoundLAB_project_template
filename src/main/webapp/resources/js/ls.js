"use strict";
var ls = ls || {};
ls ={
		chart :()=>{
			alert('ls chart');

			if(!($("#chartSec").length >0)){ 
				let $chartSec = $('<section/>').attr({id:'chartSec'});
				$chartSec.appendTo($('#contents'));
		    	$('<h1/>').attr({id : 'panel',style :'text-align:left' }).addClass("panel panel-success").appendTo($chartSec);
		    	$('<h3/>').attr({id : 'ph',style :'text-align:left'}).addClass("panel-heading").html('뮤직차트').appendTo($('#panel'));
		    	$('<br><img src="'+$.img()+'/chart.png">').appendTo($('#ph'));
		    	 
	            $('<div/>').attr({id : 'nav-box',style :'text-align:left' }).addClass('container').appendTo($('#panel'));
	            $('<ul/>').attr({id : 'nav'}).addClass("nav nav-tabs nav-justified").appendTo($('#nav-box'));
	            $('<li/>').attr({id : 'li1'}).appendTo($('#nav'));
	            $('<li/>').attr({id : 'li2'}).appendTo($('#nav'));
	            $('<li/>').attr({id : 'li3'}).appendTo($('#nav'));
	            $('<a/>').attr({href:'#'}).html('실시간').css("font-size","15px").appendTo($('#li1'));
	            $('<a/>').attr({href:'#'}).html('주간').css("font-size","15px").appendTo($('#li2'));
	            $('<a/>').attr({href:'#'}).html('일간').css("font-size","15px").appendTo($('#li3'));
	          		            
	    	    let t = $('<br><br><table/>').attr({id : 'table'}).addClass($('#table'));
        		let thead = $('<thead/>');
        		let tr = $('<tr/>');
        		//let checkBox = $('<input type="checkbox"/>');
        		   let menu = ['체크박스','NO','앨범사진', '제목', '아티스트', '재생', '좋아요', '뮤비','싫어요'];
        		$.each(menu, (i, v)=>{
        			$('<th/>').attr('width','10%').css("font-size","20px").html(v).appendTo(thead);
        			tr.append(
						$('<td/>').html('a')
						
					);

        		});
        		
        		tr.appendTo(thead);
        		$('<td/>').appendTo(tr);
        		thead.appendTo(t);
        		$('<tbody/>').appendTo(t);
        		t.appendTo($('#panel'));
			}

		},
		album :()=>{alert('ls album');}
};