"use strict";
var ls = ls || {};
ls ={
		chart :()=>{
			if(!($("#chartSec").length >0)){ 
				let $chartSec = $('<section/>').attr({id:'chartSec'});
				$chartSec.appendTo($('#contents')).append(
						// Top100 헤더
						$('<div/>').addClass("ls_char_panel_top Panel panel-dafalt container").append(
								$('<h1/>').html('TOP 100')
						),
						// 차트
						$('<div/>').addClass("ls_char_panel_top Panel panel-dafalt container").append(
								$('<br><img src="'+$.img()+'/chart.png">')
						),
						//nav-sort
						$('<br><br><div/>').attr({id : 'chart-content' }).addClass("ls_char_panel panel panel-dafalt container").append(
								$('<div/>').append(
										 $('<ul/>').addClass("ls_chart_nav nav nav-tabs nav-justified").append(
												 $('<li/>').append(
														 $('<a/>').attr({id : 'liveChr'}).html('실시간'))
														 .click(()=>{ 
															 alert('liveChr click'); 
															 
														 }),
												 $('<li/>').append(
														 $('<a/>').attr({id : 'wklChr'}).html('일간'))
														 .click(()=>{ 
															 alert('wklChr click'); 
															 
															 }),
												 $('<li/>').append(
														$('<a/>').attr({id : 'dayChr'}).html('주간'))
														.click(()=>{ 
															alert('dayChr click'); 
															
															})
														
														

										 )
								)
						),

					
						
						
						$('<div/>').attr({id : 'chart-top100' }).addClass("ls_char_panel Panel panel-dafalt container")
				)
					
							$('<div/>').attr({id :'ls_panel'}).addClass("ls_char_panel panel panel-default").append(
								
											$('<div/>').addClass("pull-left").attr({id :'pull-left'}).append(
													$('<div/>').addClass("btn-group").append(
															$('<button/>').attr({id : 'listenChoose'})
															.addClass("btn btn-default btn-filter").html('선택듣기')
															.click(()=>{ 
																 alert('listenChoose click'); 
																 
															 }),
															$('<button/>').attr({id : 'listenAll'})
															.addClass("btn btn-default btn-filter").html('전체듣기')
															.click(()=>{ 
															 alert('listenAll click'); 
															 
															 }),
															$('<button/>').attr({id : 'addToList'})
															.addClass("btn btn-default btn-filter").html('담기')
															.click(()=>{ 
																 alert('addToList click'); 
																 
																 })
													)
											
									)
			).appendTo($('#chart-top100'));
				
				
		
			
			//Top 100 table
			$('<section/>').addClass("ls_topTable table-container").append(
					$('<table/>').addClass("ls_table table ls_table-filter").attr({id :'topTable'})
			).appendTo($('#pull-left'));
			
			$('<tbody/>').append(
					$('<tr/>').attr({id : 'ls_topTable_th'}).append(
							$('<td/>').append(
									$('<th/>').addClass('ckbox').append(
											$('<input/>').attr({type : 'checkbox', id :'allCheck' }),
											$('<label for="allCheck">')
										
											
									
											
									)
									
							),
							$('<th/>').html('NO'),
							$('<th/>').html('앨범사진'),
							$('<th/>').html('제목'),
							$('<th/>').html('아티스트'),
							$('<th/>').html('앨범명'),
							$('<th/>').html('듣기'),
							$('<th/>').html('하트'),
							$('<th/>').html('뮤직비디오'),
							$('<th/>').html('싫어요')
					
					
					)
					
			).appendTo($('#topTable'));
			
			
			let arrTop100 = [
				{src : '선미사이렌.png',
					musTtl : '사이렌',
					atist : '선미',
					title : 'WARNING'
				},
				{src : '로이킴.jpg',
					musTtl : '우리 그만하자',
					atist : '로이킴',
					title : '우리 그만하자'
				},
				{src : '바이브.jpg',
					musTtl : '가을 타나 봐 ',
					atist : '바이브',
					title : '가을 타나 봐 '
				},
				{src : '소유.jpg',
					musTtl : '까만밤 (PROD. GroovyRoom, OREO)',
					atist : '소유',
					title : 'RE:FRESH'
				},
				{src : '아이유.jpg',
					musTtl : '삐삐',
					atist : '아이유',
					title : '삐삐'
				},
				{src : '폴킴.jpg',
					musTtl : '모든 날, 모든 순간)',
					atist : '폴킴',
					title : '키스 먼저 할까요?'}
			];
			
			//forloop
		
			$.each(arrTop100,(i,v)=>{
				
				$('<tr/>').append(
						$('<td/>').append(
								$('<div/>').addClass('ckbox').append(
										$('<input/>').attr({type : 'checkbox', id :'checkbox'+i, name :'chk'}),
										$('<label for="checkbox'+i+'">') 
								)
						),
						$('<td/>').html(i+1).append(
								//no
						),
						$('<td/>').append(
										$('<img/>').attr({
											src : $.ctx()+'/resources/img/ls/'+v.src,
											id : 'ls_album_photo'
										})
						),
						$('<td/>').html(v.musTtl),
						$('<td/>').html(v.atist),
						$('<td/>').html(v.title),
						$('<td/>').append(
								$('<button/>').addClass('btn btn-brand btn-dropbox').addClass('glyphicon glyphicon-play')),
						$('<td/>').append(
								$('<button/>').addClass('btn btn-brand btn-dropbox').addClass('glyphicon glyphicon-heart')),
						$('<td/>').append(
								$('<button/>').addClass('btn btn-brand btn-dropbox').addClass('glyphicon glyphicon-facetime-video')),
						$('<td/>').append(
								$('<button/>').addClass('btn btn-brand btn-dropbox').addClass('glyphicon glyphicon-thumbs-down'))
						
				).appendTo($('#topTable'));
			})
		//전체선택 클릭시
		$('#allCheck').click(()=>{
				if($("#allCheck").is(':checked')){
					$('input[name = chk]:checkbox').prop('checked',true);
				}else{
					$('input[name = chk]:checkbox').prop('checked',false);
				}
			});
						
			
			
			

			


			
			
			
			}
		},
				
		
		
		album :()=>{
			
			if(!($("#albumSec").length >0)){ 
				let $albumSec = $('<section/>').attr({id:'albumSec'});
				$albumSec.appendTo($('#contents')).append(
						// 앨범헤더
						$('<div/>').addClass("ls_album_panel container").append(
								$('<h1/>').html('최신앨범')
						),
						// 앨범 캐러셀
						$('<div/>').addClass('container').append(
								$('<div/>').addClass('row').append(
										$('<div/>').addClass('col-xs-12').append(
												$('<h2/>').attr('style','margin-left: 1.2rem;').addClass('my-4'),
												$('<div/>').attr({id : 'alCarousel'}).addClass('carousel slide ls_featured-shows-slides')
										)
								)
						),
						
						// 앨범 컨텐츠
						$('<br><br><div/>').attr({id : 'album-content' }).addClass("ls_album_panel container").append(
								$('<div/>').append(
										 $('<ul/>').addClass("ls_album_nav nav nav-tabs nav-justified").append(
												 $('<li/>').attr({id : 'ali1'}).append(
														 $('<a/>').attr({href:'#',id : 'ls_alDateSort'}).html('발매일')),
												 $('<li/>').attr({id : 'ali2'}).append(
														 $('<a/>').attr({href:'#', id : 'ls_alUpSort'}).html('좋아요'))
										 )
								)
						),
						$('<div/>').attr({id : 'new-album'}).addClass("ls_album_panel container")
			
						
			
						
						
				);
				for(var i=0; i<=5; i++){
					 
				 	$('<div/>').attr({id : 'ls_allpl'+i}).appendTo($('#new-album')).addClass('ls_allpl');	
				 	$('<div/>').attr({id : 'ls_alrow'+i}).addClass(' row container').appendTo($('#ls_allpl'+i)).append(
				 			$('<span/>').attr({id : 'ls_alcol'+i}).addClass('ls_alcol col-md-4').append(
				 					$('<span/>').attr({id : 'thumbnail'+i}).addClass('ls_thumbnail thumbnail round').append(
				 							$('<span/><img src="'+$.img()+'/선미사이렌.png" >').addClass('ls_alimg'),
				 							$('<span/>').attr({id : 'caption'+i}).addClass('caption').append(
				 									$('<h3/>').attr({id : 'album'+i,style :'text-align:left'}).html('사이렌'),
				 									$('<h3/>').attr({id : 'artist'+i,style :'text-align:left'}).html('선미'),
				 									$('<h4/>').attr({id : 'date'+i,style :'text-align:left; width: 110px; float:left'}).html('2018.09.04'),
				 									$('<h4/>').attr({id : 'like'+i,style :'text-align:left; width: 80px; float:left'}).addClass("glyphicon glyphicon-thumbs-up").html('878'),
				 									$('<h4/>').attr({id : 'trackCount'+i,style :'text-align: left;width: 80px; float:left'}).html('1곡'),
				 									$('<br><button type="button">').attr({style: 'margin-right: 20px'}).addClass("btn btn-default").addClass("glyphicon glyphicon-play").html('앨범듣기').css("font-size","18px"),
				 									$('<button type="button">').addClass("btn btn-default").addClass("glyphicon glyphicon-plus").html('담기').css("font-size","18px")
				 							)
				 					)
				 			)
				 	)
			 };
		
				  


			  
			  let item = $('<div/>').addClass('carousel-inner')
			  item.appendTo($('#alCarousel'));
			  
			  let newal = [
					{
						title : '폴킴의 타이틀',
						name : '폴킴',
					},
					{
						title : 'ABOUT ME',
						name : '바이브',
					},
					{
						title : '삐삐',
						name : '아이유',
					},
					];
			  
			  $.each(newal,(i,v)=>{ $('<div/>').addClass('item'+((i===0)?' active':'')).append(
					  $('<div/>').addClass('col-md-4 col-sm-6 col-xs-12 single-featured-shows').append( 
							  $('<img/>').attr({src : $.ctx()+'/resources/img/ls/'+v.name+'.jpg'}).addClass('img-responsive'),
							  $('<div/>').attr({style :'hight ="40%"'}).addClass('featured-shows-content').append(
									  $('<div/>').addClass('shows-text').append( 
											  $('<h4/>').html(v.title), 
											  $('<p/>').html(v.name), 
											  $('<div/>').addClass('bg-gradients') ) ) ) )
											  
											  .appendTo(item).click(e=>{
													// 밑에 dj detail 열리는 event 걸기
												});
											});
	
			  	$('<a/>')
				.attr({href:'#alCarousel', 'data-slide':'prev'})
				.addClass('left carousel-control')
				.append(
						$('<i/>').addClass('glyphicon glyphicon-chevron-left')
				).appendTo($('#alCarousel'));
				$('<a/>')
				.attr({href:'#alCarousel', 'data-slide':'next'})
				.addClass('right carousel-control')
				.append(
						$('<i/>').addClass('glyphicon glyphicon-chevron-right')
				).appendTo($('#alCarousel'));
				
				$('#alCarousel').carousel({
					  interval: 10000
					})
				$('.carousel .item').each(function(){
				  var next = $(this).next();
				  if (!next.length) {
				    next = $(this).siblings(':first');
				  }
				  next.children(':first-child').clone().appendTo($(this));

				  if (next.next().length>0) {
				    next.next().children(':first-child').clone().appendTo($(this));
				  }
				  else {
				    $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
				  }
				});

				
		}
			
			
		},

		 
}

			

