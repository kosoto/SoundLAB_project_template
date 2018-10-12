"use strict";
var sj = sj || {};
sj ={
		dj : ()=>{
			if(!($("#djSec").length >0)){   //exist
		
				let $contents = $('#contents');
				let $djSec = $('<section/>').attr({id:'djSec'});
				$djSec.appendTo($contents);
				/*$('#contents').html($djSec);*/
				
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
								$('<div/>').addClass('col-xs-12').append(
										$('<h2/>').attr('style','margin-left: 1.2rem;').addClass('my-4').html('DJ PLAYLIST'),
										$('<div/>').attr({id : 'djCarousel'}).addClass('carousel slide featured-shows-slides')
								)
						)
				).appendTo($djSec);
				
				let item = $('<div/>').addClass('carousel-inner')
				item.appendTo($('#djCarousel'));
				
				let djArr = [
					{
						src : 'dj-1.jpg',
						title : '늦은 여름에 떠나는 여행',
						name : 'soundLAB',
						date : '2018.09.02',
						hash : '#여름 #신나는 #여행'
					},
					{
						src : 'dj-2.jpg',
						title : '늦은 여름에 떠나는 여행',
						name : 'soundLAB',
						date : '2018.09.02',
						hash : '#여름 #신나는 #여행'
					},
					{
						src : 'dj-3.jpg',
						title : '늦은 여름에 떠나는 여행',
						name : 'soundLAB',
						date : '2018.09.02',
						hash : '#여름 #신나는 #여행'
					},
					{
						src : 'dj-2.jpg',
						title : '늦은 여름에 떠나는 여행',
						name : 'soundLAB',
						date : '2018.09.02',
						hash : '#여름 #신나는 #여행'
					}
					];
				$.each(djArr,(i,v)=>{
					$('<div/>').addClass('item'+((i===0)?' active':'')).append(
							$('<div/>').addClass('col-md-4 col-sm-6 col-xs-12 single-featured-shows').append(
									$('<img/>').attr({
										src : $.ctx()+'/resources/img/sj/'+v.src,
										alt : 'DJ-P-img' + i
									}).addClass('img-responsive'),
									$('<div/>').addClass('featured-shows-content').append(
											$('<div/>').addClass('shows-text').append(
													$('<h4/>').html(v.title),
													$('<p/>').html(v.name),
													$('<p/>').html(v.date),
													$('<p/>').html(v.hash),
													$('<div/>').addClass('bg-gradients')
											)
									)
							)
					).appendTo(item)
					.click(e=>{
						// 밑에 dj detail 열리는 event 걸기
					});
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
				
				$('#djCarousel').carousel({
					  interval: 3000
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
				
				$('<div/>').addClass('featured-album-area section-padding-5r clearfix').append(
						$('<div/>').addClass('container').append(
								$('<div/>').addClass('row').append(
										$('<div/>').addClass('col-xs-12').append(
												$('<div/>').addClass('featured-album-content d-flex flex-wrap').append(
														$('<div/>')
														.addClass('album-thumbnail h-100 bg-img')
														.attr({'style':'background-image: url('+$.ctx()+'/resources/img/sj/dj-2.jpg);'}),
														$('<div/>').addClass('album-songs h-100').append(
																$('<div/>').addClass('album-info mb-10 d-flex flex-wrap align-items-center justify-content-between').append(
																		$('<div/>').addClass('album-title').append(
																				$('<h4/>').html('늦은 여름에 떠나는 여행'),
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
				).appendTo($djSec);
				
				let $pl = $('<div/>').addClass('music-playlist').appendTo($('#album-scroll'));
				for(let i=1;i<=10;i++){
					$('<div/>').addClass('single-music').append(
							$('<div/>').addClass('single-music-item row').append(
									$('<label/>').attr({id:'check-con'}).addClass('col-xs-1 container').append(
											$('<input/>').attr({type:'checkbox'}),
											$('<span/>').addClass('checkmark')
									),
									$('<div/>').addClass('col-xs-5').html(i + '. Drop that beat'),
									$('<div/>').addClass('col-xs-3').html('Artist'),
									$('<div/>').addClass('col-xs-3').html('Button')
							)
					).appendTo($pl)
				}
				
				
				
			}
		},
		forYou : ()=>{

			console.log('sj forYou');
			if(!($("#foryouSec").length >0)){   //exist
			let $contents = $('#contents');
			let $foryouSec = $('<section/>').attr({id:'foryouSec'});
			$foryouSec.appendTo($contents);
			/*$('#contents').html($foryouSec);*/
			$('<p/>').html('이런 노래는 어떠세요 ?').appendTo($foryouSec);
			// #music start
			$('<div/>').attr({id:'music'}).appendTo($foryouSec);
			$('<p/>').html('즐겨들은 곡과 비슷한 곡').appendTo($('#music'));
			$('<button/>').addClass('btn btn-secondary').html('전체듣기').appendTo($('#music'));
			$('<button/>').addClass('btn btn-secondary').html('선택듣기').appendTo($('#music'));
			$('<button/>').addClass('btn btn-secondary').html('담기').appendTo($('#music'));
			$('<button/>').addClass('btn btn-secondary').html('나의앨범추가').appendTo($('#music'));
			$('<table/>').addClass('table table-bordered text-center').attr({id:'music-list'}).appendTo($('#music'));
			$('<tr/>').attr({id:'music-list-meta'}).appendTo($('#music-list'));
			$('<td/>').html('곡').appendTo($('#music-list-meta'));
			$('<td/>').html('아티스트').appendTo($('#music-list-meta'));
			$('<td/>').html('앨범').appendTo($('#music-list-meta'));
			$('<td/>').html('기능').appendTo($('#music-list-meta'));
			$('<tr/>').attr({id:'music-list-row1'}).appendTo($('#music-list'));
			$('<td/>').html('Love U').appendTo($('#music-list-row1'));
			$('<td/>').html('청하').appendTo($('#music-list-row1'));
			$('<td/>').html('Blooming Blue').appendTo($('#music-list-row1'));
			$('<td/>').appendTo($('#music-list-row1'))
			.append('<button class="btn btn-default"><span class="glyphicon glyphicon-play-circle" aria-hidden="true"></span></button>')
			.append('<button class="btn btn-default"><span class="glyphicon glyphicon-heart" aria-hidden="true"></span></button>')
			.append('<button class="btn btn-default"><span class="glyphicon glyphicon-facetime-video" aria-hidden="true"></span></button>')
			.append('<button class="btn btn-default"><span class="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span></button>')
			;
			$('<button/>').addClass('btn btn-secondary').html('더 보기').appendTo($('#music'));
			
			// #album start
			$('<div/>').attr({id:'album'}).appendTo($foryouSec);
			$('<p/>').html('즐겨들은 곡과 비슷한 아티스트의 앨범').appendTo($('#album'));
			$('<ul/>').addClass('').attr({id : 'album-list'}).appendTo($('#album'));
			$('<li/>').attr({id : 'album-list-item1'}).appendTo($('#album-list'));
			$('<a/>').attr({href:'#'}).html('앨범자켓 <br> 앨범명 <br>').appendTo($('#album-list-item1'));
			$('<a/>').attr({href:'#'}).html('아티스트').appendTo($('#album-list-item1'));
			$('<li/>').attr({id : 'album-list-item2'}).appendTo($('#album-list'));
			$('<a/>').attr({href:'#'}).html('앨범자켓 <br> 앨범명 <br>').appendTo($('#album-list-item2'));
			$('<a/>').attr({href:'#'}).html('아티스트').appendTo($('#album-list-item2'));
			$('<ul/>')
			.addClass('pager')
			.appendTo($('#artist'))
			.append($('<li/>').addClass('previous').html('<a href="#"><span class="glyphicon glyphicon-chevron-left"></span></a>'))
			.append($('<li/>').addClass('next').html('<a href="#"><span class="glyphicon glyphicon-chevron-right"></span></a>'))
			;
			// #album end
			
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
		}
};
