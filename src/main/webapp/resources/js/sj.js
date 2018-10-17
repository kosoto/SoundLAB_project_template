"use strict";
var sj = sj || {};
sj ={
		dj : ()=>{
			if(!($("#djSec").length >0)){   //exist
		
				let $djSec = $('<section/>').attr({id:'djSec'});
				$djSec.appendTo($('#contents'));
				
				$('<div/>').addClass('container').appendTo($djSec).append(
						
						$('<h3/>').html('Select Hash Tag : '),
						
						$('<h5/>').attr({id:'selHash'}).html('선택된 해시태그'),
						
						$('<div/>').addClass('row text-center').append(
								$('<h4/>').attr({'style':'font-weight: bold;'}).addClass('col-md-offset-1 col-md-2').html('스타일'),
								$('<h4/>').attr({'style':'font-weight: bold;'}).addClass('col-md-2').html('계절&날씨'),
								$('<h4/>').attr({'style':'font-weight: bold;'}).addClass('col-md-2').html('상황&장소'),
								$('<h4/>').attr({'style':'font-weight: bold;'}).addClass('col-md-2').html('감정&기분'),
								$('<h4/>').attr({'style':'font-weight: bold;'}).addClass('col-md-2').html('장르')
						),
						$('<div/>').addClass('row').append(
								$('<div/>').attr({id : 'hb1','data-toggle':'buttons'}).addClass('col-md-offset-1 col-md-2 btn-group-vertical'),
								$('<div/>').attr({id : 'hb2','data-toggle':'buttons'}).addClass('col-md-2 btn-group-vertical'),
								$('<div/>').attr({id : 'hb3','data-toggle':'buttons'}).addClass('col-md-2 btn-group-vertical'),
								$('<div/>').attr({id : 'hb4','data-toggle':'buttons'}).addClass('col-md-2 btn-group-vertical'),
								$('<div/>').attr({id : 'hb5','data-toggle':'buttons'}).addClass('col-md-2 btn-group-vertical')
						),
						$('<div/>').attr({id:'dj-ls','style':'margin-top: 5rem'}).addClass('container')
				);
				let arr = [
					{at:'1',hash:['신나는','차분한','어쿠스틱','트로피칼','부드러운']},
					{at:'2',hash:['봄','여름','가을','겨울','비']},
					{at:'3',hash:['드라이브','휴식','편집숍/카페','헬스','클럽']},
					{at:'4',hash:['스트레스','이별','사랑/고백','새벽감성','위로']},
					{at:'5',hash:['OST','힙합','팝송','R&B','클래식']}
					];
				$.each(arr,(i,v)=>{
					$.each(v.hash,function(){
						$('<label/>')
						.attr({'style': 'z-index: 0;'})
						.addClass('btn btn-link')
						.html(this)
						.append(
								$('<input/>')
								.attr({
									type : 'checkbox',
									autocomplete : 'off',
									value : this
								})
						).appendTo($('#hb'+v.at))
						.click(function(e){
							
							if($(this).hasClass('active')){
								$(this)
								.removeClass('btn-success')
								.addClass('btn-link')
							}else{
								$(this)
								.removeClass('btn-link')
								.addClass('btn-success')
							}
							
						});
					})
				});
				
				$('input[type="checkbox"]').change(()=>{
					let arr = [];
					let ckHash = $('input[type="checkbox"]:checked');
					for(let i of ckHash){
						arr.push(i.value);
					}
					let s = "";
					for(let i in arr){
						s += arr[i] + ","
					}
					$('#selHash').html((s == '')?'전체':s);
				});
				
				$('<div/>').addClass('container').append(
						$('<div/>').addClass('row').append(
								$('<div/>')
								.addClass('col-xs-12 sj-dj-carousel').append(
										$('<h2/>').attr('style','margin-left: 1.2rem;').addClass('my-4').html('DJ PLAYLIST'),
										$('<div/>').attr({id : 'djCarousel'}).addClass('carousel slide sj-carousel')
								).on('click','.item>div',function(e){
									
									console.log("PAUSE");
									$('#djCarousel').carousel('pause');
									
									let $this = $(this);
									
									if($this.find('h4').text() != $('#dj-detail .album-title>h4').text()){
										$('#dj-coll').remove();
										sj.djDetail({
											src : $this.find('img').attr('src'),
											title: $this.find('h4').text()
										})
										
									}
									
								})
						)
				).appendTo($djSec);
				
				/*
				동적으로 생성하여 on function을 사용한다.
				  
				$('#djCarousel').on('click','.item>div',function(e){
					$('#dj-detail').remove();
					let $this = $(this);
					sj.djDetail({
						src : $this.find('img').attr('src'),
						title: $this.find('h4').text()
						});
					$('#dj-detail').slideDown("slow");
				});
*/
				
				let $item = $('<div/>').addClass('carousel-inner')
				$item.appendTo($('#djCarousel'));
				
				let djArr = [
					{
						src : 'dj-1.jpg',
						title : '1. Dj Playlist',
						name : 'soundLAB',
						date : '2018.09.02',
						hash : '#여름 #신나는 #여행'
					},
					{
						src : 'dj-2.jpg',
						title : '2. Dj Playlist',
						name : 'soundLAB',
						date : '2018.09.02',
						hash : '#여름 #신나는 #여행'
					},
					{
						src : 'dj-3.jpg',
						title : '3. Dj Playlist',
						name : 'soundLAB',
						date : '2018.09.02',
						hash : '#여름 #신나는 #여행'
					},
					{
						src : 'dj-2.jpg',
						title : '4. Dj Playlist',
						name : 'soundLAB',
						date : '2018.09.02',
						hash : '#여름 #신나는 #여행'
					}
					];
				
				$.each(djArr,(i,v)=>{
					$('<div/>').addClass('item'+((i===0)?' active':'')).append(
							$('<div/>')
							.attr({'data-toggle':'collapse', 'data-target':'#dj-coll', 'aria-controls':'dj-coll'})
							.addClass('col-md-4 col-sm-6 col-xs-12 sj-dj-item').append(
									$('<img/>').attr({
										src : $.ctx()+'/resources/img/sj/'+v.src,
										alt : 'DJ-P-img' + i
									}).addClass('img-responsive'),
									$('<div/>').addClass('sj-dj-item-content').append(
											$('<div/>').addClass('sj-dj-content-txt').append(
													$('<h4/>').html(v.title),
													$('<p/>').html(v.name),
													$('<p/>').html(v.date),
													$('<p/>').html(v.hash),
													$('<div/>').addClass('bg-gradients')
											)
									)
							)
					).appendTo($item);
				});
				
				
				$('<a/>')
				.attr({href:'#djCarousel', 'data-slide':'prev'})
				.addClass('left carousel-control')
				.append(
						$('<i/>').addClass('glyphicon glyphicon-chevron-left')
				).appendTo($('#djCarousel'));
				$('<a/>')
				.attr({href:'#djCarousel', 'data-slide':'next'})
				.addClass('right carousel-control')
				.append(
						$('<i/>').addClass('glyphicon glyphicon-chevron-right')
				).appendTo($('#djCarousel'));
				
				
				$('#djCarousel .carousel-control').click(e=>{
					console.log("CYCLE");
					$('#djCarousel').carousel('cycle');
				});
				
				
				$('#djCarousel').carousel({
					  interval: 4000
					})
				$('#djCarousel .item').each(function(){
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
		forYou : ()=>{
			console.log('sj forYou');
			if(!($("#foryouSec").length >0)){   //exist
				
			let $foryouSec = $('<section/>').attr({id:'foryouSec'});
			$foryouSec.appendTo($('#contents'));
			
			$('<div/>').addClass('container').appendTo($foryouSec).append(
					$('<div/>').addClass('row').append(
							$('<div/>').addClass('col-xs-12').attr({id:'for-music'})
					)
			);
			
			$('<div/>')
			.addClass('featured-album-area clearfix')
			.attr({id:'dj-detail', 'style':'margin-bottom:0px;'})
			.append(
					$('<div/>').addClass('container').append(
							$('<div/>').addClass('row').append(
									$('<div/>').addClass('col-xs-12').append(
											$('<div/>').addClass('featured-album-content d-flex flex-wrap').attr({'style':'height:300px'}).append(
													$('<div/>').addClass('album-songs h-100').attr({'style':'flex:none; width:100%; max-width:100%;'}).append(
															$('<div/>').addClass('album-info mb-10 d-flex flex-wrap align-items-center justify-content-between').append(
																	$('<div/>').addClass('album-title').append(
																			$('<p/>').html('즐겨듣는 곡과 비슷한 곡')
																	)
															),
															$('<div/>').addClass('album-all-songs').attr({id:'album-scroll'}),
															$('<div/>').addClass('now-playing d-flex flex-wrap align-items-center').append(
																	/*$('<h4/>').attr({'style':'color:white;'}).html('전체듣기 / 선택듣기 / 담기 / 나의 추가')*/
																	$('<button/>').addClass('btn btn-secondary').html('전체듣기'),
																	$('<button/>').addClass('btn btn-secondary').html('선택듣기')
															)
													)
											)
									)
							)
					)
			).appendTo($('#for-music'));
			
			
			
			let $pl = $('<div/>').addClass('music-playlist').appendTo($('#album-scroll'));
			for(let i=1;i<=5;i++){
				$('<div/>').addClass('single-music').append(
						$('<div/>').addClass('single-music-item row').append(
								$('<label/>').attr({id:'check-con'}).addClass('col-xs-1 container').append(
										$('<input/>').attr({type:'checkbox'}),
										$('<span/>').addClass('checkmark')
								),
								$('<div/>').addClass('col-xs-4').html(i + '. Drop that beat'),
								$('<div/>').addClass('col-xs-3').html('Artist'),
								$('<div/>').addClass('col-xs-2').html('Album'),
								$('<div/>').addClass('btn-group col-xs-3').append(
										$('<button/>').addClass('btn btn-default').append(
												$('<span/>').addClass('glyphicon glyphicon-play')
										),
										$('<button/>').addClass('btn btn-default').append(
												$('<span/>').addClass('glyphicon glyphicon-heart')
										).click(function(e){
											if($(this).hasClass('active')){
												console.log('Cancle !!');
												$(this).removeClass('active');
											}else{
												console.log('Love it !!');
												$(this).addClass('active');
											} 
										}),
										$('<button/>').addClass('btn btn-default').append(
												$('<span/>').addClass('glyphicon glyphicon-facetime-video')
										)
								)
						)
				).appendTo($pl)
			}
			
			// for - album
			
			$('<div/>').addClass('container').appendTo($foryouSec).append(
					$('<div/>').addClass('row').append(
							$('<div/>').addClass('col-xs-12').attr({id:'for-album'})
					)
			);
			
			$('<div/>')
			.addClass('featured-album-area clearfix')
			.attr({id:'for-album-dt', 'style':'margin-bottom:0px;'})
			.append(
					$('<div/>').addClass('container').append(
							$('<div/>').addClass('row').append(
									$('<div/>').addClass('col-xs-12').append(
											$('<div/>')
											.attr({'style':'padding:5rem;'})
											.addClass('featured-album-content d-flex flex-wrap').append(
													$('<div/>').attr({id:'for-album-li','style':'width:20%;overflow-y:auto;'}),
													$('<div/>').addClass('album-songs h-100')
													.attr({'style':'flex:0 0 80%;max-width:80%;width:80%;'})
													.append(
															$('<div/>').addClass('album-info mb-10 d-flex flex-wrap align-items-center justify-content-between').append(
																	$('<div/>').addClass('album-title').append(
																			$('<h4/>').html('Title'),
																			$('<h6/>').html('soundLAB')
																	)
															),
															$('<div/>').addClass('album-all-songs').attr({id:'album-scroll'}),
															$('<div/>').addClass('now-playing d-flex flex-wrap align-items-center justify-content-between').append(
																	$('<h4/>').attr({'style':'color:white;'}).html('전체듣기 / 선택듣기 / 담기 / 나의 추가')
															)
													)
											)
									)
							)
					)
			).appendTo($('#for-album'));
			
			
			let $li = $('<div/>').addClass('list-group').attr({'style':'margin:0;'}).appendTo('#for-album-li');
			
			let ac = [
				{arti:'방탄소년단',album:'LY_Answer',src:'방탄소년단_LY_Answer'},
				{arti:'블랙핑크',album:'SQUARE_UP',src:'블랙핑크_SQUARE_UP'},
				{arti:'선미',album:'WARNING',src:'선미_WARNING'},
				{arti:'트와이스',album:'Summer_Nights',src:'트와이스_Summer_Nights'},
				{arti:'에이핑크',album:'ONE_SIX',src:'에이핑크_ONE_SIX'},
				];
			
			for(let i of ac){
				$('<div/>')
				.addClass('sj-for-album-item bg-img')
				.attr({'style':'background-image:url('+$.ctx()+'/resources/img/album/'+i.src+'.jpg);'})
				.append(
						$('<div/>').addClass('sj-for-album-eff').append(
								$('<h4/>').html(i.album),
								$('<h6/>').html(i.arti)
						)
				)
				.appendTo($li)
				.click(function(e){
					let $this = $(this);
					$this.siblings('.sj-for-album-item.active').removeClass('active');
					$this.addClass('active');
				});
			}
			
			$('.sj-for-album-item:first').addClass('active');
			
			
			
			
			
			
			
			// #artist start
			$('<div/>').attr({id:'artist'}).appendTo($foryouSec);
			$('<p/>').html('소녀시대의 노래를 좋아한다면 ?').appendTo($('#artist'));
			$('<ul/>').addClass('').attr({id : 'artist-list'}).appendTo($('#artist'));
			$('<li/>').attr({id : 'artist-list-item1'}).appendTo($('#artist-list'));
			$('<a/>').attr({href:'#'}).html('아티스트사진 <br> 아티스트명 <br> 장르').appendTo($('#artist-list-item1'));
			$('<li/>').attr({id : 'artist-list-item2'}).appendTo($('#artist-list'));
			$('<a/>').attr({href:'#'}).html('아티스트사진 <br> 아티스트명 <br> 장르').appendTo($('#artist-list-item2'));
			// #artist end
			}
		},
		djDetail : x=>{
			
			$('<div/>').attr({id:'dj-coll'}).addClass('collapse').appendTo($('#djSec'));
			// 'style':'display:none;'
			$('<div/>')
			.addClass('featured-album-area section-padding-5r clearfix')
			.attr({id:'dj-detail', 'style':'margin-bottom:0px;'})
			.append(
					$('<div/>').addClass('container').append(
							$('<div/>').addClass('row').append(
									$('<div/>').addClass('col-xs-12').append(
											$('<div/>').addClass('featured-album-content d-flex flex-wrap').append(
													$('<div/>')
													.addClass('album-thumbnail h-100 bg-img')
													.attr({'style':'background-image: url('+x.src+');'}),
													$('<button/>').addClass('close')
													.attr({'aria-label':'Close','style':'position: absolute; right: 5px; z-index: 11; color:#fff; font-size:2.5em'})
													.html('<span aria-hidden="true">&times;</span>')
													.click(e=>{
														$('#dj-coll').removeClass('collapse in').addClass('collapse');
													}),
													$('<div/>').addClass('album-songs h-100').append(
															$('<div/>').addClass('album-info mb-10 d-flex flex-wrap align-items-center justify-content-between').append(
																	$('<div/>').addClass('album-title').append(
																			$('<h4/>').html(x.title),
																			$('<h6/>').html('soundLAB'),
																			$('<h6/>').html('#여름 #신나는 #여행')
																	),
																	$('<div/>').addClass('album-buy-now album-title').append(
																			$('<h6/>').html('조회수'),
																			$('<a/>').attr({href:'#'}).addClass('btn musica-btn').append(
																					$('<span/>').addClass('glyphicon glyphicon-heart')
																			)
																	)
															),
															$('<div/>').addClass('album-all-songs').attr({id:'album-scroll'}),
															$('<div/>').addClass('now-playing d-flex flex-wrap align-items-center justify-content-between').append(
																	$('<h4/>').attr({'style':'color:white;'}).html('전체듣기 / 선택듣기 / 담기 / 나의 추가')
															)
													)
											)
									)
							)
					)
			).appendTo($('#dj-coll'));
			
			
			
			let $pl = $('<div/>').addClass('music-playlist').appendTo($('#album-scroll'));
			for(let i=1;i<=10;i++){
				$('<div/>').addClass('single-music').append(
						$('<div/>').addClass('single-music-item row').append(
								$('<label/>').attr({id:'check-con'}).addClass('col-xs-1 container').append(
										$('<input/>').attr({type:'checkbox'}),
										$('<span/>').addClass('checkmark')
								),
								$('<div/>').addClass('col-xs-5').html(i + '. Drop that beat'),
								$('<div/>').addClass('col-xs-2').html('Artist'),
								$('<div/>').addClass('btn-group col-xs-4').append(
										$('<button/>').addClass('btn btn-default').append(
												$('<span/>').addClass('glyphicon glyphicon-play')
										),
										$('<button/>').addClass('btn btn-default').append(
												$('<span/>').addClass('glyphicon glyphicon-heart')
										).click(function(e){
											console.log('Click');
											if($(this).hasClass('active')){
												$(this).removeClass('active');
											}else{
												$(this).addClass('active');
											} 
										}),
										$('<button/>').addClass('btn btn-default').append(
												$('<span/>').addClass('glyphicon glyphicon-facetime-video')
										)
								)
						)
				).appendTo($pl)
			}
		}
};
