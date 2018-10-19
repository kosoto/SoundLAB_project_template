"use strict";
var ls = ls || {};
ls ={
		chart :x=>{
			$.getJSON(sh.ctx()+'/music/top50/'+x,d=>{
				 
			
				
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
																	 let realChart = 'realChart';
																		$.getJSON(sh.ctx()+'/music/top50/'+realChart,d=>{
																			$('#topTable').empty();
																			 ls.top50table(d);
																	 })
																	 
																 }),
														 $('<li/>').append(
																 $('<a/>').attr({id : 'wklChr'}).html('일간'))
																 .click(()=>{ 
																	 alert('wklChr click'); 
																	 	let dayChart = 'dayChart';
																		$.getJSON(sh.ctx()+'/music/top50/'+dayChart,d=>{
																			$('#topTable').empty();
																			 ls.top50table(d);
																	 })
																	 }),
														 $('<li/>').append(
																$('<a/>').attr({id : 'dayChr'}).html('주간'))
																.click(()=>{ 
																	alert('dayChr click'); 
																	 let weelChart = 'weekChart';
																		$.getJSON(sh.ctx()+'/music/top50/'+weelChart,d=>{
																			$('#topTable').empty();
																			 ls.top50table(d);
																	 })
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
						
				
					
					ls.top50table(d);
						 
				//전체선택 클릭시
				$('#allCheck').click(()=>{
						if($("#allCheck").is(':checked')){
							$('input[name = chk]:checkbox').prop('checked',true);
						}else{
							$('input[name = chk]:checkbox').prop('checked',false);
						}
					});
					
					
					
					}
	        	});
		},
				
		album :()=>{
			
			
			
			
		/*	<table>
			  <caption>최신앨범</caption>
			  <thead>
			    <tr>
			      <th scope="col">sample1</th>
			      <th scope="col">sample2</th>
			      <th scope="col">sample3</th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr>
			      <td>sample4</td>
			      <td>sample5</td>
			      <td>sample6</td>
			    </tr>
			    <tr>
			      <td>sample7</td>
			      <td>sample8</td>
			      <td>sample9</td>
			    </tr>
			    <tr>
			      <td>sample10</td>
			      <td>sample11</td>
			      <td>sample12</td>
			    </tr>
			    <tr>
			      <td>sample13</td>
			      <td>sample14</td>
			      <td>sample15</td>
			    </tr>
			    <tr>
			      <td>sample16</td>
			      <td>sample17</td>
			      <td>sample18</td>
			    </tr>
			  </tbody>
			</table>*/
			
			if(!($("#albumSec").length >0)){ 
				let $albumSec = $('<section/>').attr({id:'albumSec'});
				$albumSec.appendTo($('#contents')).append(
						
						$('<table/>').attr({id : 'ls_alTable' }).append(
								$('<thead/>').append(
										$('<tr/>').append(
												$('<th/>')
										)		
								),
								$('<tbody/>').append(
										$('<tr/>').append(
												$('<th/>')
								)
								)
								
						),
						
						
						
						
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
								$('<div/>').addClass('row').append(
								
										
										 $('<ul/>').addClass("ls_album_nav nav nav-tabs nav-justified").append(
												 $('<li/>').attr({id : 'ali1'}).append(
														 $('<a/>').attr({href:'#',id : 'ls_alDateSort'}).html('발매일')),
												 $('<li/>').attr({id : 'ali2'}).append(
														 $('<a/>').attr({href:'#', id : 'ls_alUpSort'}).html('좋아요'))
										 )
								)
						),
						//top100 목록
						$('<div/>').attr({id : 'new-album'}).addClass("ls_album_panel container"),
						$('<div/>').attr({id : 'morePage'}).addClass("ls_album_panel container").append(
								$('<button/>').attr({id : 'al_morePage'}).addClass("btn btn-brand btn-primary").html('더보기')
								.click(()=>{ 
								 alert('al_morePage click'); 
								 
								 })		
						)
							
						
						
						
				);
				
			 
				let arrNewAl = [
					{src : '선미_가시나.jpg',
						musTtl : '사이렌',
						atist : '선미',
						title : 'WARNING'
					},
					{src : '로이킴_그때_헤어지면_돼.jpg',
						musTtl : '우리 그만하자',
						atist : '로이킴',
						title : '우리 그만하자'
					},
					{src : 'VIBE_가을타나봐.jpg',
						musTtl : '가을 타나 봐 ',
						atist : '바이브',
						title : '가을 타나 봐 '
					},
					{src : '윤종신_좋니.jpg',
						musTtl : '좋니)',
						atist : '윤종신',
						title : '좋니'
					},
					{src : 'IU_삐삐.jpg',
						musTtl : '삐삐',
						atist : '아이유',
						title : '삐삐'
					},
					{src : '폴킴_키스_먼저_할까요.jpg',
						musTtl : '모든 날, 모든 순간',
						atist : '폴킴',
						title : '키스 먼저 할까요?'}
				];
				
			
				$.each(arrNewAl,(i,v)=>{
				 	$('<div/>').attr({id : 'ls_allpl'+i,style : 'float: left;width: 33%;margin :0 auto'})
				 		.appendTo($('#new-album')).addClass('ls_allpl');	
				 	$('<div/>').attr({id : 'ls_alrow'+i,style : 'margin : 0 auto'}).addClass('row container')
				 		.appendTo($('#ls_allpl'+i)).append(
				 			$('<span/>').attr({id : 'ls_alcol'+i,style :'float: left;margin :0 auto'})
				 			.addClass('ls_alcol col-md-3').append(
				 					$('<span/>')
				 					.attr({id : 'thumbnail'+i,style :'width: 300px;height: 480px ;padding:20px' })
				 					.addClass('ls_thumbnail thumbnail').append(
				 							$('<img/>').attr({
				 								src : $.ctx()+'/resources/img/album/'+v.src}).addClass('ls_alimg'),
				 							$('<span/>').attr({id : 'caption'+i}).addClass('caption').append(
				 									$('<h4/>')
				 									.html(v.musTtl).attr({title :v.musTtl }).addClass('ls_card-description card-description'),
				 									$('<h4/>')
				 									.html(v.atist).attr({title :v.atist }).addClass('card-description'),
				 									$('<h4/>').attr({id : 'date'+i}).addClass('card-description').html('2018.09.04'),
				 									$('<h4/>').attr({id : 'like'+i}).addClass('card-description')
				 										.addClass("glyphicon glyphicon-thumbs-up").html('878'),
				 									$('<h4/>').addClass('card-description')
				 									.attr({id : 'trackCount'+i,style :'text-align: left;width: 80px; float:left'}).html('1곡'),
				 									
				 									$('<br><br><div/>').addClass("btn-group").append(
															$('<button/>').attr({id : 'albumlis'+i})
															.addClass("albumlis").html('앨범듣기')
															.click(()=>{ 
																 alert('albumlis click'); 
																 
															 }),
															$('<button/>').attr({id : 'addMyList'+i})
															.addClass("addMyList").html('담기')
															.click(()=>{ 
															 alert('addMyList click'); 
															 
															 })
															
													)
				 							)
				 					)
				 			)
				 	)
				});
		

					 
			  
			 //캐러셀
			  let item = $('<div/>').addClass('carousel-inner')
			  item.appendTo($('#alCarousel'));
			  
			  let newal = [
				  {src : '선미_가시나.jpg',
						musTtl : '사이렌',
						atist : '선미',
						title : 'WARNING'
					},
					{src : '로이킴_그때_헤어지면_돼.jpg',
						musTtl : '우리 그만하자',
						atist : '로이킴',
						title : '우리 그만하자'
					},
					{src : 'VIBE_가을타나봐.jpg',
						musTtl : '가을 타나 봐 ',
						atist : '바이브',
						title : '가을 타나 봐 '
					},
					{src : '윤종신_좋니.jpg',
						musTtl : '좋니',
						atist : '윤종신',
						title : '좋니'
					},
					{src : 'IU_삐삐.jpg',
						musTtl : '삐삐',
						atist : '아이유',
						title : '삐삐'
					},
					{src : '폴킴_키스_먼저_할까요.jpg',
						musTtl : '모든 날, 모든 순간',
						atist : '폴킴',
						title : '키스 먼저 할까요?'}
				];
			  
			 $.each(newal,(i,v)=>{ $('<div/>').addClass('item'+((i===0)?' active':'')).append(
					  $('<div/>').addClass('col-md-3 col-sm-6 col-xs-12 ls-dj-item').append( 
							  $('<img/>').attr({src : $.ctx()+'/resources/img/album/'+v.src}).addClass('img-responsive'),
							  $('<div/>').attr({style :'height ="40%"'}).addClass('ls-dj-item-content').append(
									  $('<div/>').addClass('ls-dj-content-txt').append( 
											  $('<h4/>').html(v.title), 
											  $('<p/>').html(v.musTtl), 
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
					  interval: 2000
					})
		
					$('#alCarousel .item').each(function () {
				        var next = $(this).next();
				        if (!next.length) {
				            next = $(this).siblings(':first');
				        }
				        next.children(':first-child').clone().appendTo($(this));

				    	for (var i=0;i<2;i++) {
							next=next.next();
							if (!next.length) {
								next = jQuery(this).siblings(':first');
							}
							next.children(':first-child').clone().appendTo($(this));
						}
				    });
		}
			
		},
		 top50table :d=>{
				$('<section/>').addClass("ls_topTable table-container").append(
						$('<table/>').addClass("ls_table table ls_table-filter").attr({id :'topTable'})
				).appendTo($('#pull-left'));
				
				$('<tbody/>').append(
						$('<tr/>').attr({id : 'ls_topTable_tr'}).append(
										$('<th/>').attr({style : 'width:5%'}).append(
												$('<input/>').attr({type : 'checkbox', id :'allCheck' }).attr({style : 'width:15px'}),
												$('<label for="allCheck">')
										
								),
								$('<th/>').attr('width','3%').html('NO'),
								$('<th/>').attr('width','10%').html('앨범사진'),
								$('<th/>').attr('width','20%').html('제목'),
								$('<th/>').attr('width','10%').html('아티스트'),
								$('<th/>').attr('width','10%').html('앨범명'),
								$('<th/>').attr('width','5%').html('듣기'),
								$('<th/>').attr('width','5%').html('하트'),
								$('<th/>').attr('width','5%').html('영상'),
								$('<th/>').attr('width','8%').html('싫어요')
						)
				).appendTo($('#topTable'));
			for(var i =0; i<d.length;i++){

				 $('<tr/>').append(
							$('<td/>').append(
									$('<div/>').addClass('ckbox').append(
											$('<input/>').attr({type : 'checkbox', id :'checkbox'+i, name :'chk'}),
											$('<label for="checkbox'+i+'">') 
									)
							),
							$('<td/>').attr('width','5%').html(i+1).append(
							),
							$('<td/>').append(
											$('<img/>').attr({
												src : $.ctx()+'/resources/img/album/'+d[i].IMG,
												id : 'ls_album_photo'
											}).click(()=>{
												alert('앨범 사진 클릭');
											})
							),
							$('<td/>').html(d[i].MUSIC_TITLE).click(()=>{
								alert('제목 클릭');
							}),
							$('<td/>').html(d[i].ARTIST_NAME).click(()=>{
								alert('아티스트 클릭');
							}),
							$('<td/>').html(d[i].ALBUM_TITLE).click(()=>{
								alert('앨범명 클릭');
							}),
							$('<td/>').append(
									$('<i/>').addClass('ls_fa fa fa-play-circle-o')
									.click(()=>{
										alert('듣기 클릭');
									})),
							$('<td/>').append(
									$('<i/>').addClass('ls_fa fa fa-heart')
									.click(()=>{
										alert('하트 클릭');
									})),
							$('<td/>').append(
									$('<i/>').addClass('ls_fa glyphicon glyphicon-facetime-video')
									.click(()=>{
										alert('뮤비 클릭');
									})),
							$('<td/>').append(
									$('<i/>').addClass('ls_fa fa fa-thumbs-down')
									.click(()=>{
										alert('싫어요 클릭');
									}))
					).appendTo($('#topTable'));
			 }
			
		}
		

		 
}



