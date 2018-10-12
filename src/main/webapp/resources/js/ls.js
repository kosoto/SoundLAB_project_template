"use strict";
var ls = ls || {};
ls ={
		chart :()=>{
			alert('ls chart');
			if(!($("#chartSec").length >0)){ 
				let $chartSec = $('<section/>').attr({id:'chartSec'});
				$chartSec.appendTo($('#contents'));
				  $.getScript(sh.js()+'/compo.js',()=>{
			    	    $('<div/>').attr({id : 'chPanel',style :'text-align:left' }).addClass("panel panel-dafalt container").appendTo($('#chartSec'));
			    	    $('<h1/>').attr({id : 'ph',style :'text-align:left'}).addClass("panel-heading").html('SoundLAB TOP 100').appendTo($('#chPanel'));
			    	
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

			}
			
		     
		      
		},
		
		album :()=>{
			alert('ls album');
			
			if(!($("#albumSec").length >0)){ 
				let $albumSec = $('<section/>').attr({id:'albumSec'});
				$albumSec.appendTo($('#contents'));
				$('<div/>').attr({id : 'alPanel',style :'text-align:left' }).addClass("panel panel-dafalt container").appendTo($('#albumSec'));
				$('<h1/>').attr({id : 'alph',style :'text-align:left'}).addClass("panel-heading").html('최신앨범').appendTo($('#alPanel'));
						
				
				$('<div/>').attr({id : 'multi-item-example'}).addClass("carousel slide carousel-multi-item").addClass('carousel').appendTo($('#alph'));
				$('<div/>').attr({id : 'controls-top'}).addClass("controls-top").appendTo($('#multi-item-example'));
				$('<a href="#multi-item-example" data-slide="prev"><i class="fa fa-chevron-left">').addClass("btn-floating").appendTo($('#controls-top'));
				$('<a href="#multi-item-example" data-slide="next"><i class="fa fa-chevron-right">').addClass("btn-floating").appendTo($('#controls-top'));
				
				$('<ol/>').addClass("controls-indicators").attr({id : 'controls-indicators'}).appendTo($('#controls-top'));
				$('<li data-target="#multi-item-example" data-slide-to="0">').addClass("active").appendTo($('#controls-indicators'));
				$('<li data-target="#multi-item-example" data-slide-to="1">').addClass("active").appendTo($('#controls-indicators'));
				$('<li data-target="#multi-item-example" data-slide-to="2">').appendTo($('#controls-indicators'));
				
				   for(var i=0; i<=5; i++){
					   
						$('<div role="listbox">').addClass("carousel-inner").attr({id : 'carousel-inner'+i,style:"float: left; width: 33%;"}).appendTo($('#multi-item-example'));
						
						$('<div/>').addClass("item active").attr({id : 'item-active'+i}).appendTo($('#carousel-inner'+i));
						
						$('<div/>').addClass("col-md-4").attr({id : 'col-md-4'+i}).appendTo($('#item-active'+i));
						$('<div/>').addClass("col-md-2").attr({id : 'col-md-2'+i}).appendTo($('#col-md-4'+i));
						//$('<div/>').addClass("carousel-item").attr({id : 'carousel-item'+i}).appendTo($('#carousel-inner'+i));
						$('<img src="'+$.img()+'/폴킴.jpg" width="300px" height="300px">').addClass("card-img-top").attr({id : 'card-img-top'+i}).appendTo($('#col-md-2'+i));
						$('<div/>').addClass("card-body").attr({id : 'card-body'+i}).appendTo($('#col-md-2'+i));
						$('<h4/>').addClass("card-title").html('폴킴').appendTo($('#card-body'+i));
					   
				   }
				
				
				

				
				
				/*'<!--Carousel Wrapper-->'
                +'<div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">'
                +'  <!--Controls-->'
                +'  <div class="controls-top">'
                +'    <a class="btn-floating" href="#multi-item-example" data-slide="prev"><i class="fa fa-chevron-left"></i></a>'
                +'    <a class="btn-floating" href="#multi-item-example" data-slide="next"><i class="fa fa-chevron-right"></i></a>'
                +'  </div>'
                +'  <!--/.Controls-->'
                +'  <!--Indicators-->'
                +'  <ol class="carousel-indicators">'
                +'    <li data-target="#multi-item-example" data-slide-to="0" class="active"></li>'
                +'    <li data-target="#multi-item-example" data-slide-to="1"></li>'
                +'    <li data-target="#multi-item-example" data-slide-to="2"></li>'
                +'  </ol>'
                +'  <!--/.Indicators-->'
                +'  <!--Slides-->'
                +'  <div class="carousel-inner" role="listbox">'
                +'    <!--First slide-->'
                +'    <div class="item active">'
                +'      <div class="col-md-4">'
                +'        <div class="card mb-2">'
                +'          <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"'
                +'            alt="Card image cap">'
                +'          <div class="card-body">'
                +'            <h4 class="card-title">Card title</h4>'
                +'            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the'
                +'              cards content.</p>'
                +'            '
                +'          </div>'
                +'        </div>'
                +'      </div>'
                +'      <div class="col-md-4 clearfix d-none d-md-block">'
                +'        <div class="card mb-2">'
                +'          <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"'
                +'            alt="Card image cap">'
                +'          <div class="card-body">'
                +'            <h4 class="card-title">Card title</h4>'
                +'            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the'
                +'              card content.</p>'
                +'            '
                +'          </div>'
                +'        </div>'
                +'      </div>'
                +'      <div class="col-md-4 clearfix d-none d-md-block">'
                +'        <div class="card mb-2">'
                +'          <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"'
                +'            alt="Card image cap">'
                +'          <div class="card-body">'
                +'            <h4 class="card-title">Card title</h4>'
                +'            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the'
                +'              card content.</p>'
                +'            '
                +'          </div>'
                +'        </div>'
                +'      </div>'
                +'    </div>'
                +'    <!--/.First slide-->'
                +'    <!--Second slide-->'
                +'    <div class="item">'
                +'      <div class="col-md-4">'
                +'        <div class="card mb-2">'
                +'          <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"'
                +'            alt="Card image cap">'
                +'          <div class="card-body">'
                +'            <h4 class="card-title">Card title</h4>'
                +'            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the'
                +'              card content.</p>'
                +'         '
                +'          </div>'
                +'        </div>'
                +'      </div>'
                +'      <div class="col-md-4 clearfix d-none d-md-block">'
                +'        <div class="card mb-2">'
                +'          <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg"'
                +'            alt="Card image cap">'
                +'          <div class="card-body">'
                +'            <h4 class="card-title">Card title</h4>'
                +'            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the'
                +'              card content.</p>'
                +'          '
                +'          </div>'
                +'        </div>'
                +'      </div>'
                +'      <div class="col-md-4 clearfix d-none d-md-block">'
                +'        <div class="card mb-2">'
                +'          <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg"'
                +'            alt="Card image cap">'
                +'          <div class="card-body">'
                +'            <h4 class="card-title">Card title</h4>'
                +'            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the'
                +'              card content.</p>'
                +'         '
                +'          </div>'
                +'        </div>'
                +'      </div>'
                +'    </div>'
                +'    <!--/.Second slide-->'
                +'    <!--Third slide-->'
                +'    <div class="item">'
                +'      <div class="col-md-4">'
                +'        <div class="card mb-2">'
                +'          <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"'
                +'            alt="Card image cap">'
                +'          <div class="card-body">'
                +'            <h4 class="card-title">Card title</h4>'
                +'            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the'
                +'              card content.</p>'
                +'          '
                +'          </div>'
                +'        </div>'
                +'      </div>'
                +'      <div class="col-md-4 clearfix d-none d-md-block">'
                +'        <div class="card mb-2">'
                +'          <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"'
                +'            alt="Card image cap">'
                +'          <div class="card-body">'
                +'            <h4 class="card-title">Card title</h4>'
                +'            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the'
                +'              card content.</p>'
                +'         '
                +'          </div>'
                +'        </div>'
                +'      </div>'
                +'      <div class="col-md-4 clearfix d-none d-md-block">'
                +'        <div class="card mb-2">'
                +'          <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg"'
                +'            alt="Card image cap">'
                +'          <div class="card-body">'
                +'            <h4 class="card-title">Card title</h4>'
                +'            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the'
                +'              card content.</p>'
                +'       '
                +'          </div>'
                +'        </div>'
                +'      </div>'
                +'    </div>'
                +'    <!--/.Third slide-->'
                +'  </div>'
                +'  <!--/.Slides-->'
                +'</div>'
                +'<!--/.Carousel Wrapper-->'*/
				
				
				
			 $('<div/>').attr({id : 'alNav-box',style :'text-align:left' }).addClass('container').appendTo($('#alph'));
	            $('<ul/>').attr({id : 'alNav'}).addClass("nav nav-tabs nav-justified").appendTo($('#alNav-box'));
	            $('<li/>').attr({id : 'ali1'}).appendTo($('#alNav'));
	            $('<li/>').attr({id : 'ali2'}).appendTo($('#alNav'));
	            $('<li/>').attr({id : 'ali3'}).appendTo($('#alNav'));
	            $('<li/><br>').attr({id : 'ali4'}).appendTo($('#alNav'));
	            $('<a/>').attr({href:'#',id : 'alDateSort'}).html('발매일').css("font-size","18px").appendTo($('#ali1'));
	            $('<a/>').attr({href:'#', id : 'alUpSort'}).html('좋아요').css("font-size","18px").appendTo($('#ali2'));
	            
	            $('#allAlbum').click(()=>{
	            	alert('allAlbum click');
	            });
	            $('#balladAl').click(()=>{
	            	alert('balladAl click');
	            });
	            $('#danceAl').click(()=>{
	            	alert('danceAl click');
	            });
	            $('#hipAl').click(()=>{
	            	alert('hipAl click');
	            });
	           
	            
	      
	            
	            for(var i=0; i<=5; i++){
	            	$('<div/>').attr({id : 'allpl'+i,style:"border: 1px solid none; float: left; width: 33%;"}).appendTo($('#alph'));
	            	$('<div/>').attr({id : 'row'+i}).addClass('row container').appendTo($('#allpl'+i));
					$('<span/>').attr({id : 'col'+i,style:'float: left; width: 40%'}).addClass('col-md-4').appendTo('#row'+i);
					$('<span/>').attr({id : 'thumbnail'+i,style:'float: left; width: 80%;padding: 25px'}).addClass('thumbnail round').appendTo('#col'+i);
					$('<span/><img src="'+$.img()+'/선미사이렌.png" width="100%" height="100%">').appendTo('#thumbnail'+i);
					$('<span/>').attr({id : 'caption'+i}).addClass('caption').appendTo('#thumbnail'+i);
					
					$('<h3/>').attr({id : 'album'+i,style :'text-align:left'}).html('사이렌').appendTo('#caption'+i);
					$('<h3/>').attr({id : 'artist'+i,style :'text-align:left'}).html('선미').appendTo('#caption'+i);
					$('<h4/>').attr({id : 'date'+i,style :'text-align:left; width: 110px; float:left'}).html('2018.09.04').appendTo('#caption'+i);
					$('<h4/>').attr({id : 'like'+i,style :'text-align:left; width: 80px; float:left'}).addClass("glyphicon glyphicon-thumbs-up").html('878').appendTo('#caption'+i);
					$('<h4/>').attr({id : 'trackCount'+i,style :'text-align: left;width: 80px; float:left'}).html('1곡').appendTo('#caption'+i);
					$('<br><button type="button">').attr({style: 'margin-right: 20px'}).addClass("btn btn-default").addClass("glyphicon glyphicon-play").html('앨범듣기').css("font-size","18px").appendTo($('#caption'+i));
					$('<button type="button">').addClass("btn btn-default").addClass("glyphicon glyphicon-plus").html('담기').css("font-size","18px").appendTo($('#caption'+i));
	            }
	            
				
				
				
				
				
			};
			
			
			  
			
		
		
		
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
				$('<th/>').attr({scope : 'col' }).html('체크박스').appendTo($('#jt_music_tb_meta'));
				$('<th/>').attr({scope : 'col' }).html('곡명').appendTo($('#jt_music_tb_meta'));
				$('<th/>').attr({scope : 'col' }).html('아티스트').appendTo($('#jt_music_tb_meta'));
				$('<th/>').attr({scope : 'col' }).html('앨범').appendTo($('#jt_music_tb_meta'));
				
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
		
		
}

			

