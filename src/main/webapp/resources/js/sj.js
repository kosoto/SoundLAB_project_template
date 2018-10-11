"use strict";
var sj = sj || {};
sj ={
		dj :()=>{
			console.log('sj dj');
<<<<<<< HEAD
			let $djSec = $('<section/>').attr({id:'djSec'});
			$('#contents').html($djSec);
			
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
			$('<h2/>').addClass('my-4').html('DJ PLAYLIST').appendTo($('#dj-ls'));
			
			$('<div/>').addClass('row').attr({id : 'list'}).appendTo($('#dj-ls'));
			$('<div/>')
			.addClass('col-lg-4 col-sm-6 portfolio-item')
			.appendTo($('#list'))
			.append(
					$('<div/>').addClass('card h-100')
					.append($('<a/>').attr({href:'#'}).html('IMAGE <br> <img class="card-img-top" src="" alt="">'))
					.append($('<div/>').addClass('card-body')
							.append($('<h4/>').addClass('card-title').append($('<a/>').attr({href:'#'}).html('늦은 여름에 느끼는 마지막 청량감')))
							.append($('<p/>').addClass('card-text').html('닉네임 <br> 2018.09.02 <br> #여름 #신나는 #헬스'))
					)
			);
			$('<div/>')
			.addClass('col-lg-4 col-sm-6 portfolio-item')
			.appendTo($('#list'))
			.append(
					$('<div/>').addClass('card h-100')
					.append($('<a/>').attr({href:'#'}).html('IMAGE <br> <img class="card-img-top" src="" alt="">'))
					.append($('<div/>').addClass('card-body')
							.append($('<h4/>').addClass('card-title').append($('<a/>').attr({href:'#'}).html('제목')))
							.append($('<p/>').addClass('card-text').html('닉네임 <br> 등록날짜 <br> #해시 #태그'))
					)
			);
			$('<div/>')
			.addClass('col-lg-4 col-sm-6 portfolio-item')
			.appendTo($('#list'))
			.append(
					$('<div/>').addClass('card h-100')
					.append($('<a/>').attr({href:'#'}).html('IMAGE <br> <img class="card-img-top" src="" alt="">'))
					.append($('<div/>').addClass('card-body')
							.append($('<h4/>').addClass('card-title').append($('<a/>').attr({href:'#'}).html('제목')))
							.append($('<p/>').addClass('card-text').html('닉네임 <br> 등록날짜 <br> #해시 #태그'))
					)
			);
			$('<div/>')
			.addClass('col-lg-4 col-sm-6 portfolio-item')
			.appendTo($('#list'))
			.append(
					$('<div/>').addClass('card h-100')
					.append($('<a/>').attr({href:'#'}).html('IMAGE <br> <img class="card-img-top" src="" alt="">'))
					.append($('<div/>').addClass('card-body')
							.append($('<h4/>').addClass('card-title').append($('<a/>').attr({href:'#'}).html('제목')))
							.append($('<p/>').addClass('card-text').html('닉네임 <br> 등록날짜 <br> #해시 #태그'))
					)
			);
			$('<div/>')
			.addClass('col-lg-4 col-sm-6 portfolio-item')
			.appendTo($('#list'))
			.append(
					$('<div/>').addClass('card h-100')
					.append($('<a/>').attr({href:'#'}).html('IMAGE <br> <img class="card-img-top" src="" alt="">'))
					.append($('<div/>').addClass('card-body')
							.append($('<h4/>').addClass('card-title').append($('<a/>').attr({href:'#'}).html('제목')))
							.append($('<p/>').addClass('card-text').html('닉네임 <br> 등록날짜 <br> #해시 #태그'))
					)
			);
			$('<div/>')
			.addClass('col-lg-4 col-sm-6 portfolio-item')
			.appendTo($('#list'))
			.append(
					$('<div/>').addClass('card h-100')
					.append($('<a/>').attr({href:'#'}).html('IMAGE <br> <img class="card-img-top" src="" alt="">'))
					.append($('<div/>').addClass('card-body')
							.append($('<h4/>').addClass('card-title').append($('<a/>').attr({href:'#'}).html('제목')))
							.append($('<p/>').addClass('card-text').html('닉네임 <br> 등록날짜 <br> #해시 #태그'))
					)
			);
			$('<div/>')
			.addClass('col-lg-4 col-sm-6 portfolio-item')
			.appendTo($('#list'))
			.append(
					$('<div/>').addClass('card h-100')
					.append($('<a/>').attr({href:'#'}).html('IMAGE <br> <img class="card-img-top" src="" alt="">'))
					.append($('<div/>').addClass('card-body')
							.append($('<h4/>').addClass('card-title').append($('<a/>').attr({href:'#'}).html('제목')))
							.append($('<p/>').addClass('card-text').html('닉네임 <br> 등록날짜 <br> #해시 #태그'))
					)
			);
			$('<div/>')
			.addClass('col-lg-4 col-sm-6 portfolio-item')
			.appendTo($('#list'))
			.append(
					$('<div/>').addClass('card h-100')
					.append($('<a/>').attr({href:'#'}).html('IMAGE <br> <img class="card-img-top" src="" alt="">'))
					.append($('<div/>').addClass('card-body')
							.append($('<h4/>').addClass('card-title').append($('<a/>').attr({href:'#'}).html('제목')))
							.append($('<p/>').addClass('card-text').html('닉네임 <br> 등록날짜 <br> #해시 #태그'))
					)
			);
			$('<div/>')
			.addClass('col-lg-4 col-sm-6 portfolio-item')
			.appendTo($('#list'))
			.append(
					$('<div/>').addClass('card h-100')
					.append($('<a/>').attr({href:'#'}).html('IMAGE <br> <img class="card-img-top" src="" alt="">'))
					.append($('<div/>').addClass('card-body')
							.append($('<h4/>').addClass('card-title').append($('<a/>').attr({href:'#'}).html('제목')))
							.append($('<p/>').addClass('card-text').html('닉네임 <br> 등록날짜 <br> #해시 #태그'))
					)
			);
			$('<div/>')
			.addClass('col-lg-4 col-sm-6 portfolio-item')
			.appendTo($('#list'))
			.append(
					$('<div/>').addClass('card h-100')
					.append($('<a/>').attr({href:'#'}).html('IMAGE <br> <img class="card-img-top" src="" alt="">'))
					.append($('<div/>').addClass('card-body')
							.append($('<h4/>').addClass('card-title').append($('<a/>').attr({href:'#'}).html('제목')))
							.append($('<p/>').addClass('card-text').html('닉네임 <br> 등록날짜 <br> #해시 #태그'))
					)
			);
			$('<div/>')
			.addClass('col-lg-4 col-sm-6 portfolio-item')
			.appendTo($('#list'))
			.append(
					$('<div/>').addClass('card h-100')
					.append($('<a/>').attr({href:'#'}).html('IMAGE <br> <img class="card-img-top" src="" alt="">'))
					.append($('<div/>').addClass('card-body')
							.append($('<h4/>').addClass('card-title').append($('<a/>').attr({href:'#'}).html('제목')))
							.append($('<p/>').addClass('card-text').html('닉네임 <br> 등록날짜 <br> #해시 #태그'))
					)
			);
			$('<div/>')
			.addClass('col-lg-4 col-sm-6 portfolio-item')
			.appendTo($('#list'))
			.append(
					$('<div/>').addClass('card h-100')
					.append($('<a/>').attr({href:'#'}).html('IMAGE <br> <img class="card-img-top" src="" alt="">'))
					.append($('<div/>').addClass('card-body')
							.append($('<h4/>').addClass('card-title').append($('<a/>').attr({href:'#'}).html('제목')))
							.append($('<p/>').addClass('card-text').html('닉네임 <br> 등록날짜 <br> #해시 #태그'))
					)
			);
		},
		forYou :()=>{
			console.log('sj forYou');
			let $foryouSec = $('<section/>').attr({id:'foryouSec'});
			$('#contents').html($foryouSec);
			$('<p/>').html('이런 노래는 어떠세요 ?').appendTo($('#foryouSec'));
			// #music start
			$('<div/>').attr({id:'music'}).appendTo($('#foryouSec'));
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
			$('<div/>').attr({id:'album'}).appendTo($('#foryouSec'));
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
			$('<div/>').attr({id:'artist'}).appendTo($('#foryouSec'));
			$('<p/>').html('소녀시대의 노래를 좋아한다면 ?').appendTo($('#artist'));
			$('<ul/>').addClass('').attr({id : 'artist-list'}).appendTo($('#artist'));
			$('<li/>').attr({id : 'artist-list-item1'}).appendTo($('#artist-list'));
			$('<a/>').attr({href:'#'}).html('아티스트사진 <br> 아티스트명 <br> 장르').appendTo($('#artist-list-item1'));
			$('<li/>').attr({id : 'artist-list-item2'}).appendTo($('#artist-list'));
			$('<a/>').attr({href:'#'}).html('아티스트사진 <br> 아티스트명 <br> 장르').appendTo($('#artist-list-item2'));
			// #artist end
		}
};
=======
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
				$('<h2/>').addClass('my-4').html('DJ PLAYLIST').appendTo($('#dj-ls'));
				
				$('<div/>').addClass('row').attr({id : 'list'}).appendTo($('#dj-ls'));
				$('<div/>')
				.addClass('col-lg-4 col-sm-6 portfolio-item')
				.appendTo($('#list'))
				.append(
						$('<div/>').addClass('card h-100')
						.append($('<a/>').attr({href:'#'}).html('IMAGE <br> <img class="card-img-top" src="" alt="">'))
						.append($('<div/>').addClass('card-body')
								.append($('<h4/>').addClass('card-title').append($('<a/>').attr({href:'#'}).html('늦은 여름에 느끼는 마지막 청량감')))
								.append($('<p/>').addClass('card-text').html('닉네임 <br> 2018.09.02 <br> #여름 #신나는 #헬스'))
						)
				);
				$('<div/>')
				.addClass('col-lg-4 col-sm-6 portfolio-item')
				.appendTo($('#list'))
				.append(
						$('<div/>').addClass('card h-100')
						.append($('<a/>').attr({href:'#'}).html('IMAGE <br> <img class="card-img-top" src="" alt="">'))
						.append($('<div/>').addClass('card-body')
								.append($('<h4/>').addClass('card-title').append($('<a/>').attr({href:'#'}).html('제목')))
								.append($('<p/>').addClass('card-text').html('닉네임 <br> 등록날짜 <br> #해시 #태그'))
						)
				);
				$('<div/>')
				.addClass('col-lg-4 col-sm-6 portfolio-item')
				.appendTo($('#list'))
				.append(
						$('<div/>').addClass('card h-100')
						.append($('<a/>').attr({href:'#'}).html('IMAGE <br> <img class="card-img-top" src="" alt="">'))
						.append($('<div/>').addClass('card-body')
								.append($('<h4/>').addClass('card-title').append($('<a/>').attr({href:'#'}).html('제목')))
								.append($('<p/>').addClass('card-text').html('닉네임 <br> 등록날짜 <br> #해시 #태그'))
						)
				);
				$('<div/>')
				.addClass('col-lg-4 col-sm-6 portfolio-item')
				.appendTo($('#list'))
				.append(
						$('<div/>').addClass('card h-100')
						.append($('<a/>').attr({href:'#'}).html('IMAGE <br> <img class="card-img-top" src="" alt="">'))
						.append($('<div/>').addClass('card-body')
								.append($('<h4/>').addClass('card-title').append($('<a/>').attr({href:'#'}).html('제목')))
								.append($('<p/>').addClass('card-text').html('닉네임 <br> 등록날짜 <br> #해시 #태그'))
						)
				);
				$('<div/>')
				.addClass('col-lg-4 col-sm-6 portfolio-item')
				.appendTo($('#list'))
				.append(
						$('<div/>').addClass('card h-100')
						.append($('<a/>').attr({href:'#'}).html('IMAGE <br> <img class="card-img-top" src="" alt="">'))
						.append($('<div/>').addClass('card-body')
								.append($('<h4/>').addClass('card-title').append($('<a/>').attr({href:'#'}).html('제목')))
								.append($('<p/>').addClass('card-text').html('닉네임 <br> 등록날짜 <br> #해시 #태그'))
						)
				);
				$('<div/>')
				.addClass('col-lg-4 col-sm-6 portfolio-item')
				.appendTo($('#list'))
				.append(
						$('<div/>').addClass('card h-100')
						.append($('<a/>').attr({href:'#'}).html('IMAGE <br> <img class="card-img-top" src="" alt="">'))
						.append($('<div/>').addClass('card-body')
								.append($('<h4/>').addClass('card-title').append($('<a/>').attr({href:'#'}).html('제목')))
								.append($('<p/>').addClass('card-text').html('닉네임 <br> 등록날짜 <br> #해시 #태그'))
						)
				);
				$('<div/>')
				.addClass('col-lg-4 col-sm-6 portfolio-item')
				.appendTo($('#list'))
				.append(
						$('<div/>').addClass('card h-100')
						.append($('<a/>').attr({href:'#'}).html('IMAGE <br> <img class="card-img-top" src="" alt="">'))
						.append($('<div/>').addClass('card-body')
								.append($('<h4/>').addClass('card-title').append($('<a/>').attr({href:'#'}).html('제목')))
								.append($('<p/>').addClass('card-text').html('닉네임 <br> 등록날짜 <br> #해시 #태그'))
						)
				);
				$('<div/>')
				.addClass('col-lg-4 col-sm-6 portfolio-item')
				.appendTo($('#list'))
				.append(
						$('<div/>').addClass('card h-100')
						.append($('<a/>').attr({href:'#'}).html('IMAGE <br> <img class="card-img-top" src="" alt="">'))
						.append($('<div/>').addClass('card-body')
								.append($('<h4/>').addClass('card-title').append($('<a/>').attr({href:'#'}).html('제목')))
								.append($('<p/>').addClass('card-text').html('닉네임 <br> 등록날짜 <br> #해시 #태그'))
						)
				);
				$('<div/>')
				.addClass('col-lg-4 col-sm-6 portfolio-item')
				.appendTo($('#list'))
				.append(
						$('<div/>').addClass('card h-100')
						.append($('<a/>').attr({href:'#'}).html('IMAGE <br> <img class="card-img-top" src="" alt="">'))
						.append($('<div/>').addClass('card-body')
								.append($('<h4/>').addClass('card-title').append($('<a/>').attr({href:'#'}).html('제목')))
								.append($('<p/>').addClass('card-text').html('닉네임 <br> 등록날짜 <br> #해시 #태그'))
						)
				);
				$('<div/>')
				.addClass('col-lg-4 col-sm-6 portfolio-item')
				.appendTo($('#list'))
				.append(
						$('<div/>').addClass('card h-100')
						.append($('<a/>').attr({href:'#'}).html('IMAGE <br> <img class="card-img-top" src="" alt="">'))
						.append($('<div/>').addClass('card-body')
								.append($('<h4/>').addClass('card-title').append($('<a/>').attr({href:'#'}).html('제목')))
								.append($('<p/>').addClass('card-text').html('닉네임 <br> 등록날짜 <br> #해시 #태그'))
						)
				);
				$('<div/>')
				.addClass('col-lg-4 col-sm-6 portfolio-item')
				.appendTo($('#list'))
				.append(
						$('<div/>').addClass('card h-100')
						.append($('<a/>').attr({href:'#'}).html('IMAGE <br> <img class="card-img-top" src="" alt="">'))
						.append($('<div/>').addClass('card-body')
								.append($('<h4/>').addClass('card-title').append($('<a/>').attr({href:'#'}).html('제목')))
								.append($('<p/>').addClass('card-text').html('닉네임 <br> 등록날짜 <br> #해시 #태그'))
						)
				);
				$('<div/>')
				.addClass('col-lg-4 col-sm-6 portfolio-item')
				.appendTo($('#list'))
				.append(
						$('<div/>').addClass('card h-100')
						.append($('<a/>').attr({href:'#'}).html('IMAGE <br> <img class="card-img-top" src="" alt="">'))
						.append($('<div/>').addClass('card-body')
								.append($('<h4/>').addClass('card-title').append($('<a/>').attr({href:'#'}).html('제목')))
								.append($('<p/>').addClass('card-text').html('닉네임 <br> 등록날짜 <br> #해시 #태그'))
						)
				);
			}
		},
		forYou :()=>{
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
>>>>>>> refs/remotes/origin/master
