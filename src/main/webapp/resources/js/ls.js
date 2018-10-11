"use strict";
var ls = ls || {};
ls ={
		chart :()=>{
			alert('ls chart');
<<<<<<< HEAD
			
		       $.getScript(sh.js()+'/compo.js',()=>{
		    	    $('<div/>').attr({id : 'panel',style :'text-align:left' }).addClass("panel panel-dafalt container").appendTo($('#contents'));
		    	    $('<h1/>').attr({id : 'ph',style :'text-align:left'}).addClass("panel-heading").html('SoundLAB TOP 100').appendTo($('#panel'));
		    	
		    	    $('<div/>').attr({id : 'nav-box',style :'text-align:left' }).addClass('container').appendTo($('#ph'));
		            $('<ul/>').attr({id : 'nav'}).addClass("nav nav-tabs nav-justified").appendTo($('#nav-box'));
		            $('<li/>').attr({id : 'li1'}).appendTo($('#nav'));
		            $('<li/>').attr({id : 'li2'}).appendTo($('#nav'));
		            $('<li/>').attr({id : 'li3'}).appendTo($('#nav'));
		            $('<a/>').attr({href:'#',id : 'liveChr'}).html('실시간').css("font-size","18px").appendTo($('#li1'));
		            $('<a/>').attr({href:'#', id : 'wklChr'}).html('주간').css("font-size","18px").appendTo($('#li2'));
		            $('<a/>').attr({href:'#',id : 'dayChr'}).html('일간').css("font-size","18px").appendTo($('#li3'));
		            
		            $('#liveChr').click(()=>{
		            	
		            	alert('liveChr click');
		            });
		            $('#wklChr').click(()=>{
		            	alert('wklChr click');
		            });
		            $('#dayChr').click(()=>{
		            	alert('dayChr click');
		            });
		    	  
		    	   $('<br><img src="'+$.img()+'/chart.png" width="100%" height="100%">').appendTo($('#ph'));
		    	 /*  $('<br><br><button type="button">').addClass("btn btn-default").addClass("glyphicon glyphicon-play").html('전체듣기').css("font-size","18px").appendTo($('#ph'));
		    	   $('<button type="button">').addClass("btn btn-default").addClass("glyphicon glyphicon-play").html('선택듣기').css("font-size","18px").appendTo($('#ph'));
		    	   $('<button type="button">').addClass("btn btn-default").addClass("glyphicon glyphicon-plus").html('담기').css("font-size","18px").appendTo($('#ph'));*/
		           
		            
		    	  /* let t = $('<br><br><table/>').attr({id : 'table'}).addClass($('#table'));
	        		let thead = $('<thead/>');
	        		let tr = $('<tr/>');
	        		let tbody =$('<tbody/>');
	        		let checkBox = $('<input type="checkbox"/>');
	        		   let menu = ['체크박스','NO','앨범사진', '제목', '아티스트', '재생', '좋아요', '뮤비','싫어요'];
	        		   let arr = [checkBox,'a',];
	        		   
	        		$.each(menu, (i, j)=>{
	        			$('<th/>').attr('width','10%').css("font-size","30px").html(j).appendTo(thead);
							//$('<td/>').html(arr).appendTo(tr);
						$('<tr/>').append(
								$('<td/>').attr('width','10%').css("font-size","30px").html('a')
								
								
						).appendTo(tbody);

	        		});
	        
	        		$('<td/>').appendTo(tr);
	        		tr.appendTo(thead);
	        		thead.appendTo(t);
	        		tbody.appendTo(thead);
	        		t.appendTo($('#panel'));*/
		    	   ls.music_list();
		           
		       });
		      
		},
		album :()=>{
			alert('ls album');
			$('<div/>').attr({id : 'row'}).addClass('row container').appendTo($('#contents'));
			$('<div/>').attr({id : 'col'}).addClass('col-sm-6 col-md-4').appendTo('#row');
			$('<div/>').attr({id : 'thumbnail'}).addClass('thumbnail').appendTo('#col');
			$('<div/><img src="'+$.img()+'/선미사이렌.png" width="80%" height="80%">').appendTo('#thumbnail');
			$('<div/>').attr({id : 'caption'}).addClass('caption').appendTo('#thumbnail');
			$('<h3/>').html('선미 사이렌').attr({style :'text-align:center'}).appendTo('#thumbnail');
			
			
			
		/*	<div class="row">
			  <div class="col-sm-6 col-md-4">
			    <div class="thumbnail">
			      <img src="..." alt="...">
			      <div class="caption">
			        <h3>Thumbnail label</h3>
			        <p>...</p>
			        <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
			      </div>
			    </div>
			  </div>
			</div>*/
		
		
		
		
		},
		
		
		 music_list : ()=>{
				$('<div/>').attr({id: 'jt_search_music'}).addClass('container').appendTo($('#contents'));
				$('<h3/>').html('곡').appendTo($('#jt_search_music'));
				$('<div/>')
				.attr({id:'jt_music_btn_toolbar','role':'toolbar'})
				.addClass('btn-toolbar')
				.appendTo($('#jt_search_music'));
				$('<div/>')
				.attr({id:'jt_music_btn_bar1','role':'group'})
				.addClass('btn-group mr-2')
				.appendTo($('#jt_music_btn_toolbar'));
				$('<button/>')
				.attr({'data-toggle':'modal','data-target':'#player'})
				.addClass('btn btn-light')
				.append(
						$('<span/>').addClass('glyphicon glyphicon-play').html('전체듣기')

				).appendTo($('#jt_music_btn_bar1'))
				.click(e=>{
					jt.player()
				});
				$('<div/>')
				.attr({id:'jt_music_btn_bar2','role':'group'})
				.addClass('btn-group mr-2')
				.appendTo($('#jt_music_btn_toolbar'));
				$('<button/>')
				.addClass('btn btn-light')
				.append(
						$('<span/>').addClass('glyphicon glyphicon-play').html('선택듣기')
				).appendTo($('#jt_music_btn_bar2'));
				
				$('<div/>')
				.attr({id:'jt_music_btn_bar3','role':'group'})
				.addClass('btn-group mr-2')
				.appendTo($('#jt_music_btn_toolbar'));
				$('<button/>')
				.addClass('btn btn-light')
				.append(
						$('<span/>').addClass('glyphicon glyphicon-plus').html('담기')
				).appendTo($('#jt_music_btn_bar3'));
				$('<br>').appendTo($('#jt_search_music'));
				$('<table/>').attr({id : 'jt_music_tb'}).addClass('table table-sm').appendTo($('#jt_search_music'));
				$('<thead/>').appendTo($('#jt_music_tb'));
				$('<tr/>').attr({id : 'jt_music_tb_meta'}).appendTo($('#jt_music_tb'));
				$('<th/>').attr({scope : 'col' }).html('No').appendTo($('#jt_music_tb_meta'));
				$('<th/>').attr({scope : 'col' }).html('곡명').appendTo($('#jt_music_tb_meta'));
				$('<th/>').attr({scope : 'col' }).html('아티스트').appendTo($('#jt_music_tb_meta'));
				$('<th/>').attr({scope : 'col' }).html(' ').appendTo($('#jt_music_tb_meta'));
				$('<tbody/>').attr({id : 'jt_music_tbody'}).appendTo($('#jt_music_tb'));
				$('<tr/>').attr({id : 'jt_music_tb_row1'}).appendTo($('#jt_music_tbody'));
				$('<th/>').attr({scope : 'row'}).html('1').appendTo($('#jt_music_tb_row1'));
				$('<td/>').html(' ').appendTo($('#jt_music_tb_row1'));
				$('<td/>').html('선미').appendTo($('#jt_music_tb_row1'));
				$('<td/>').appendTo($('#jt_music_tb_row1'))
				.append('<button style="margin-right:5px" class="btn btn-light"><span class="glyphicon glyphicon-play-circle" aria-hidden="true"></span></button>')
				.append('<button style="margin-right:5px" class="btn btn-light"><span class="glyphicon glyphicon-heart" aria-hidden="true"></span></button>')
				.append('<button style="margin-right:5px" class="btn btn-light"><span class="glyphicon glyphicon-facetime-video" aria-hidden="true"></span></button>')
				.append('<button style="margin-right:5px" class="btn btn-light"><span class="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span></button>');
			
				$('<tr/>').attr({id : 'jt_music_tb_row2'}).appendTo($('#jt_music_tbody'));
				$('<th/>').attr({scope : 'row'}).html('2').appendTo($('#jt_music_tb_row2'));
				$('<td/>').html(' ').appendTo($('#jt_music_tb_row2'));
				$('<td/>').html('선미').appendTo($('#jt_music_tb_row2'));
				$('<td/>').appendTo($('#jt_music_tb_row2'))
				.append('<button style="margin-right:5px" class="btn btn-light"><span class="glyphicon glyphicon-play-circle" aria-hidden="true"></span></button>')
				.append('<button style="margin-right:5px" class="btn btn-light"><span class="glyphicon glyphicon-heart" aria-hidden="true"></span></button>')
				.append('<button style="margin-right:5px" class="btn btn-light"><span class="glyphicon glyphicon-facetime-video" aria-hidden="true"></span></button>')
				.append('<button style="margin-right:5px" class="btn btn-light"><span class="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span></button>');
				
				$('<tr/>').attr({id : 'jt_music_tb_row3'}).appendTo($('#jt_music_tbody'));
				$('<th/>').attr({scope : 'row'}).html('3').appendTo($('#jt_music_tb_row3'));
				$('<td/>').html(' ').appendTo($('#jt_music_tb_row3'));
				$('<td/>').html('선미').appendTo($('#jt_music_tb_row3'));
				$('<td/>').appendTo($('#jt_music_tb_row3'))
				.append('<button style="margin-right:5px" class="btn btn-light"><span class="glyphicon glyphicon-play-circle" aria-hidden="true"></span></button>')
				.append('<button style="margin-right:5px" class="btn btn-light"><span class="glyphicon glyphicon-heart" aria-hidden="true"></span></button>')
				.append('<button style="margin-right:5px" class="btn btn-light"><span class="glyphicon glyphicon-facetime-video" aria-hidden="true"></span></button>')
				.append('<button style="margin-right:5px" class="btn btn-light"><span class="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span></button>');
				
				$('<tr/>').attr({id : 'jt_music_tb_row4'}).appendTo($('#jt_music_tbody'));
				$('<th/>').attr({scope : 'row'}).html('4').appendTo($('#jt_music_tb_row4'));
				$('<td/>').html(' ').appendTo($('#jt_music_tb_row4')); 
				$('<td/>').html('선미').appendTo($('#jt_music_tb_row4'));
				$('<td/>').appendTo($('#jt_music_tb_row4'))
				.append('<button style="margin-right:5px" class="btn btn-light"><span class="glyphicon glyphicon-play-circle" aria-hidden="true"></span></button>')
				.append('<button style="margin-right:5px" class="btn btn-light"><span class="glyphicon glyphicon-heart" aria-hidden="true"></span></button>')
				.append('<button style="margin-right:5px" class="btn btn-light"><span class="glyphicon glyphicon-facetime-video" aria-hidden="true"></span></button>')
				.append('<button style="margin-right:5px" class="btn btn-light"><span class="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span></button>');
	
	       }
		
		
};
=======

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
>>>>>>> refs/remotes/origin/master
