"use strict";
var jt = jt || {};
jt ={
		search :()=>{
			alert('jt search');
			let $cnts = $('#contents');
			$cnts.empty();
			
			$('<div/>').attr({id : 'search'}).addClass('container').html('\'선미\'에 대한 검색결과').appendTo($cnts);
			//navbar
			$('<div/>').attr({id : 'nav-box'}).addClass('container').appendTo($cnts);
			$('<ul/>').attr({id : 'nav'}).addClass('nav nav-tabs border-bottom-0').appendTo($('#nav-box'));
			
			$('<li/>').attr({id : 'artist'}).addClass('nav-item').appendTo($('#nav'));
			$('<a/>')
			.attr({href : '#search_artist'})
			.addClass('nav-link ').html('아티스트')
			.appendTo($('#artist'))
			.click(e=>{
				$('#artist').addClass('active');
				
				
			});
			
			
			$('<li/>').attr({id : 'music'}).addClass('nav-item').appendTo($('#nav'));
			$('<a/>')
			.attr({href : '#search_music'})
			.addClass('nav-link ').html('곡')
			.appendTo($('#music'))
			.click(e=>{
				
				
			})
			
			$('<li/>').attr({id : 'album'}).addClass('nav-item').appendTo($('#nav'));
			$('<a/>')
			.attr({href : '#search_album'})
			.addClass('nav-link ').html('앨범')
			.appendTo($('#album'))
			.click(e=>{
				$('#album').addClass('active');
				
				
			})
			
			$('<li/>').attr({id : 'mv'}).addClass('nav-item').appendTo($('#nav'));
			$('<a/>')
			.attr({href : '#search_mv'})
			.addClass('nav-link ').html('영상')
			.appendTo($('#mv'))
			.click(e=>{
				$('#mv').addClass('active');
				
			})
			
			//페이지내용
			$('<div/>').attr({id : 'content'}).appendTo($cnts);
			
			//아티스트
			$('<div/>').attr({id : 'search_artist'}).addClass('container').appendTo($('#content'))
			$('<h3/>').html('아티스트').appendTo($('#search_artist'));
			$('<hr/>').appendTo($('#search_artist'));
			$('<div/>').attr({id : 'search_dt'}).addClass('media').appendTo($('#search_artist'));
			$('<img/>').attr({id : 'at_1', src : $.img()+'/선미사이렌.png'}).addClass('align-self-center mr-3 searchArtistImg').appendTo($('#search_dt'));
			$('<div/>').attr({id : 'search_body'}).addClass('media-body').appendTo($('#search_dt'));
			$('<h4/>').html('선미').appendTo($('#search_body'));
			$('<p/>').html('국적 : 대한민국').appendTo($('#search_body'));
			$('<p/>').html('활동유형 : 여성,솔로').appendTo($('#search_body'));
			$('<p/>').html('생일 : 1992.05.02').appendTo($('#search_body'));
			$('<hr/>').appendTo($('#search_artist'));
			
			//아티스트 소개글
			$('<div/>').attr({id: 'introduce_div'}).addClass('container').appendTo($('#search_artist'));
			$('<h3/>').html('아티스트 소개').appendTo($('#introduce_div'));
			$('<p/>').attr({id:'artist_introduce'}).html(
					'독보적인 여성 솔로 아티스트로 자리매김하고 있는 선미는 걸그룹 원더걸스의 멤버로 처음 가수 생활을 시작했다. 2007년 2월 싱글 \'Irony'
					+'로 데뷔하며 안정적인 보컬과 깜찍한 비주얼로 사랑을 받았고, \'Tell Me'
					+'로 신드롬급 열풍을 일으키며 국민 걸그룹의 자리에 올라 \'So Hot\', \'Nobody\'까지 3연속 흥행을 거뒀다.').appendTo($('#introduce_div'));
			
			$('<br/>').appendTo($('#introduce_div'));
			$('<button/>').attr({
				'type':'button',
				'data-toggle':'collapse',
				'data-target' : '#demo'
			}).addClass('btn btn-light')
			.append(
					$('<span/>').addClass('glyphicon glyphicon-menu-down').html('펼치기')
			).appendTo($('#introduce_div'));
			
			$('<div/>').attr({id:'demo','aria-expanded':"false"}).addClass('collapse').appendTo($('#introduce_div'));
			$('<p/>').html(
			'원더걸스 활동 중단 후에는 가수로서의 트레이닝을 꾸준히 병행했다. 활동 중단 선언 3년 후인 2013년에는 싱글 \'24시간이 모자라\''
			+'를 통해 멤버들 중 가장 먼저 솔로로 데뷔했다. 이전의 풋풋한 이미지와는 확연히 다른 파격적인 변신으로 발매와 동시에 7개 음원 사이트 1위를 석권하는 센세이션을 일으켰고,' 
			+'이어 발매한 \'보름달\'에서도 콘셉트, 의상, 퍼포먼스 모든 부분에서 화제를 모았다.'
			+'원더걸스로 재합류한 이후에도 도전은 계속되었다. 2015년에 발표한 [REBOOT]에서는 앨범 콘셉트에 따라 멤버 개개인의 연주를 담은 티저 영상에서 수준급의 베이스 실력을 뽐내며 화제를 모았다.'
			+'연주는 물론 앨범 수록곡의 작사와 작곡에도 적극적으로 참여하며 음악적 성장을 보여준 시기였다. 이는 10주년 기념 싱글인 \'Why So Lonely\'와 해체 직전 발표한 \'그려줘\'에서도 이어졌다.'
			+'2017년 8월 발표한 싱글 \'가시나\'는 여성 디바로서의 매력을 한층 더 뽐낸 곡이었다. 특히 원더걸스 활동에 이은 댄스 퍼포먼스가 많은 이들에게 커버되며 회자되었다.'
			+'고혹적인 동시에 파격적 콘셉트를 내세우며 모든 부분에서 성숙한 역량을 보여준 선미는 이어 발표한 \'주인공\'에서도 압도적인 퍼포먼스를 선보였다.'
			+'2018년 9월, 선미의 3부작 프로젝트를 모두 담아낸 미니앨범 [WARNING]을 내놓았으며, 전곡 작사, 작곡에 참여해 음악적으로도 더욱 성숙해진 면모를 보였다.'
			).appendTo($('#demo'));
			$('<hr/>').appendTo($('#introduce_div'));
			
			//곡 
			jt.music_list();
			
			//앨범
			$('<div/>').attr({id : 'search_album'}).addClass('container').appendTo($('#content'));
			$('<h4/>').html('앨범'). appendTo($('#search_album'));
			$('<hr/>').appendTo($('#search_album'));
			$('<div/>').attr({id : 'album_dt'}).addClass('media').appendTo($('#search_album'));
			$('<img/>').attr({id : 'album_1', src : $.img()+'/선미사이렌.png'}).addClass('mr-3 searchAlbumImg').appendTo($('#album_dt'));
		
			$('<div/>').attr({id : 'album_body'}).addClass('media-body').appendTo($('#album_dt'));
			$('<h3/>').html('<타입>').addClass('mt-0').appendTo($('#album_body'));
			$('<p/>').addClass('font-weight-bold album_detail').html('앨범명').attr({'style':'font-size:15px'}).appendTo($('#album_body'));
			
			//앨범디테일 페이지 이동. 클래스로 접근.
			$('.album_detail').click(e=>{
				alert('앨범디테일 페이지 이동');
				jt.album_detail();
				
			})
			$('<p/>').addClass('text-justify').html('가수명').attr({'style':'font-size:15px'}).appendTo($('#album_body'));
			$('<p/>').addClass('text-justify').html('출시날짜').attr({'style':'font-size:15px'}).appendTo($('#album_body'));
			$('<span/>').html('좋아요').attr({'style':'font-size:15px'}).addClass('glyphicon glyphicon-thumbs-up').appendTo($('#album_body'));
			$('<br/>').appendTo($('#album_body'));$('<br/>').appendTo($('#album_body'));
			$('<button/>').appendTo($('#album_body'))
			.addClass('btn btn-light')
			.append(
					$('<span/>').addClass('glyphicon glyphicon-play').html('앨범듣기')
				);
			$('<button/>').appendTo($('#album_body'))
			.addClass('btn btn-light')
			.append(
					$('<span/>').addClass('glyphicon glyphicon-plus').html('담기')
				);
			
			//두번 째 앨범
			$('<img/>').attr({id : 'album_1', src : $.img()+'/선미사이렌.png'}).addClass('mr-3 searchAlbumImg').appendTo($('#album_dt'))
			.click(e=>{
				
			});
			$('<div/>').attr({id : 'album_body2'}).addClass('media-body').appendTo($('#album_dt'));
			$('<h3/>').html('<타입>').addClass('mt-0').appendTo($('#album_body2'));
			$('<p/>').addClass('font-weight-bold').html('앨범명').attr({'style':'font-size:15px'}).appendTo($('#album_body2'));
			$('<p/>').html('가수명').attr({'style':'font-size:15px'}).appendTo($('#album_body2'));
			$('<p/>').html('출시날짜').attr({'style':'font-size:15px'}).appendTo($('#album_body2'));
			$('<span/>').html('좋아요').attr({'style':'font-size:15px'}).addClass('glyphicon glyphicon-thumbs-up').appendTo($('#album_body2'));
			$('<br/>').appendTo($('#album_body2'));$('<br/>').appendTo($('#album_body2'));
			$('<button/>').appendTo($('#album_body2'))
			.addClass('btn btn-light')
			.append(
					$('<span/>').addClass('glyphicon glyphicon-play').html('앨범듣기')
				);
			$('<button/>').appendTo($('#album_body2'))
			.addClass('btn btn-light')
			.append(
					$('<span/>').addClass('glyphicon glyphicon-plus').html('담기')
				);
			$('<hr/>').appendTo($('#search_album'));
			
			//영상
			$('<div/>').attr({id : 'search_mv'}).addClass('container').appendTo($('#content'));
			$('<h3/>').html('영상').appendTo($('#search_mv'));
			$('<hr/>').appendTo($('#search_mv'));
			$('<ul/>').attr({id:'mv_ul'}).addClass('list-unstyled').appendTo($('#search_mv'));
			$('<li/>').attr({id:'mv_li'}).addClass('media').appendTo($('#mv_ul'));;
			$('<img/>').attr({id : 'mv_1', src :$.img()+'/선미사이렌.png' }).addClass('mr-3 searchMv').appendTo($('#mv_li'));
			$('<div/>').attr({id:'mv_div'}).addClass('media-body').appendTo($('#mv_li'));
			$('<h3/>').html('<뮤비>곡 명').addClass('mt-0').appendTo($('#mv_div'));
			$('<p/>').addClass('font-weight-bold').html('가수명').attr({'style':'font-size:15px'}).appendTo($('#mv_div'));
			$('<p/>').html('등록일').attr({'style':'font-size:15px'}).appendTo($('#mv_div'));
			$('<p/>').html('좋아요').attr({'style':'font-size:15px'})
			.addClass('glyphicon glyphicon-thumbs-up')
			.appendTo($('#mv_div'))
			$('<p/>').html('조회수').attr({'style':'font-size:15px'}).appendTo($('#mv_div'));
			$('<button/>').appendTo($('#mv_div'))
			.addClass('btn btn-light')
			.append(
					$('<span/>').addClass('glyphicon glyphicon-play').html('영상')
				);
			$('<hr/>').appendTo($('#mv_ul'));
			
			$('<li/>').attr({id:'mv_li2'}).addClass('media').appendTo($('#mv_ul'));;
			$('<img/>').attr({id : 'mv_1', src :$.img()+'/선미사이렌.png' }).addClass('mr-3 searchMv').appendTo($('#mv_li2'));
			$('<div/>').attr({id:'mv_div2'}).addClass('media-body').appendTo($('#mv_li2'));
			$('<h3/>').html('<뮤비>곡 명').addClass('mt-0').appendTo($('#mv_div2'));
			$('<p/>').addClass('font-weight-bold').html('가수명').attr({'style':'font-size:15px'}).appendTo($('#mv_div2'));
			$('<p/>').html('등록일').attr({'style':'font-size:15px'}).appendTo($('#mv_div2'));
			$('<p/>').html('좋아요').attr({'style':'font-size:15px'}).addClass('glyphicon glyphicon-thumbs-up').appendTo($('#mv_div2'))
			$('<p/>').html('조회수').attr({'style':'font-size:15px'}).appendTo($('#mv_div2'));
			$('<button/>').appendTo($('#mv_div2'))
			.addClass('btn btn-light')
			.append(
					$('<span/>').addClass('glyphicon glyphicon-play').html('영상')
				);
			$('<hr/>').appendTo($('#search_mv'));
			
		
		},
		player : x=>{

			
		},
		
		//곡 차트
		music_list : ()=>{
			$('<div/>').attr({id: 'search_music'}).addClass('container').appendTo($('#content'));
			$('<h3/>').html('곡').appendTo($('#search_music'));
			$('<div/>').attr({id:'music_btn_toolbar','role':'toolbar'}).addClass('btn-toolbar').appendTo($('#search_music'));
			$('<div/>').attr({id:'music_btn_bar1','role':'group'}).addClass('btn-group mr-2').appendTo($('#music_btn_toolbar'));
			$('<button/>')
			.attr({'data-toggle':'modal','data-target':'#player'})
			.addClass('btn btn-light')
			.append(
					$('<span/>').addClass('glyphicon glyphicon-play').html('전체듣기')
					
					
			).appendTo($('#music_btn_bar1'))
			.click(e=>{
				jt.player()
			});
			$('<div/>').attr({id:'music_btn_bar2','role':'group'}).addClass('btn-group mr-2').appendTo($('#music_btn_toolbar'));
			$('<button/>')
			.addClass('btn btn-light')
			.append(
					$('<span/>').addClass('glyphicon glyphicon-play').html('선택듣기')
			).appendTo($('#music_btn_bar2'));
			
			$('<div/>').attr({id:'music_btn_bar3','role':'group'}).addClass('btn-group mr-2').appendTo($('#music_btn_toolbar'));
			$('<button/>')
			.addClass('btn btn-light')
			.append(
					$('<span/>').addClass('glyphicon glyphicon-plus').html('담기')
			).appendTo($('#music_btn_bar3'));
			
			
			
			$('<table/>').attr({id : 'music_tb'}).addClass('table table-sm').appendTo($('#search_music'));
			$('<thead/>').appendTo($('#music_tb'));
			$('<tr/>').attr({id : 'music_tb_meta'}).appendTo($('#music_tb'));
			$('<th/>')./*attr({scope : 'col' }).*/html('No').appendTo($('#music_tb_meta'));
			$('<th/>').attr({scope : 'col' }).html('곡명').appendTo($('#music_tb_meta'));
			$('<th/>').attr({scope : 'col' }).html('아티스트').appendTo($('#music_tb_meta'));
			$('<th/>').attr({scope : 'col' }).html(' ').appendTo($('#music_tb_meta'));
			$('<tbody/>').attr({id : 'music_tbody'}).appendTo($('#music_tb'));
			$('<tr/>').attr({id : 'music_tb_row1'}).appendTo($('#music_tbody'));
			$('<th/>').attr({scope : 'row'}).html('1').appendTo($('#music_tb_row1'));
			$('<td/>').html(' ').appendTo($('#music_tb_row1'));
			$('<td/>').html('선미').appendTo($('#music_tb_row1'));
			$('<td/>').appendTo($('#music_tb_row1'))
			.append('<button class="btn btn-light"><span class="glyphicon glyphicon-play-circle" aria-hidden="true"></span></button>')
			.append('<button class="btn btn-light"><span class="glyphicon glyphicon-heart" aria-hidden="true"></span></button>')
			.append('<button class="btn btn-light"><span class="glyphicon glyphicon-facetime-video" aria-hidden="true"></span></button>')
			.append('<button class="btn btn-light"><span class="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span></button>');
		
		
			
			
			$('<tr/>').attr({id : 'music_tb_row2'}).appendTo($('#music_tbody'));
			$('<th/>').attr({scope : 'row'}).html('2').appendTo($('#music_tb_row2'));
			$('<td/>').html(' ').appendTo($('#music_tb_row2'));
			$('<td/>').html('선미').appendTo($('#music_tb_row2'));
			$('<td/>').appendTo($('#music_tb_row2'))
			.append('<button class="btn btn-light"><span class="glyphicon glyphicon-play-circle" aria-hidden="true"></span></button>')
			.append('<button class="btn btn-light"><span class="glyphicon glyphicon-heart" aria-hidden="true"></span></button>')
			.append('<button class="btn btn-light"><span class="glyphicon glyphicon-facetime-video" aria-hidden="true"></span></button>')
			.append('<button class="btn btn-light"><span class="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span></button>');
			
			$('<tr/>').attr({id : 'music_tb_row3'}).appendTo($('#music_tbody'));
			$('<th/>').attr({scope : 'row'}).html('3').appendTo($('#music_tb_row3'));
			$('<td/>').html(' ').appendTo($('#music_tb_row3'));
			$('<td/>').html('선미').appendTo($('#music_tb_row3'));
			$('<td/>').appendTo($('#music_tb_row3'))
			.append('<button class="btn btn-light"><span class="glyphicon glyphicon-play-circle" aria-hidden="true"></span></button>')
			.append('<button class="btn btn-light"><span class="glyphicon glyphicon-heart" aria-hidden="true"></span></button>')
			.append('<button class="btn btn-light"><span class="glyphicon glyphicon-facetime-video" aria-hidden="true"></span></button>')
			.append('<button class="btn btn-light"><span class="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span></button>');
			
			$('<tr/>').attr({id : 'music_tb_row4'}).appendTo($('#music_tbody'));
			$('<th/>').attr({scope : 'row'}).html('4').appendTo($('#music_tb_row4'));
			$('<td/>').html(' ').appendTo($('#music_tb_row4'));
			$('<td/>').html('선미').appendTo($('#music_tb_row4'));
			$('<td/>').appendTo($('#music_tb_row4'))
			.append('<button class="btn btn-light"><span class="glyphicon glyphicon-play-circle" aria-hidden="true"></span></button>')
			.append('<button class="btn btn-light"><span class="glyphicon glyphicon-heart" aria-hidden="true"></span></button>')
			.append('<button class="btn btn-light"><span class="glyphicon glyphicon-facetime-video" aria-hidden="true"></span></button>')
			.append('<button class="btn btn-light"><span class="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span></button>');
			
		
		},
		album_detail : x=>{
			let $cnts = $('#contents');
			$cnts.empty();
			$('<div/>').attr({id : 'album_dtpage'}).addClass('container').appendTo($cnts);
			$('<div/>').attr({id : 'content'}).appendTo($('#album_dtpage'));
			$('<h3/>').html('앨범정보').appendTo($('#content'));
			
			$('<div/>').attr({id : 'album_div'}).addClass('container').appendTo($('#content'));
			$('<hr/>').appendTo($('#album_div'));
			$('<div/>').attr({id : 'album_dt'}).addClass('media').appendTo($('#album_div'));
			$('<img/>').attr({id : 'ab_1', src : $.img()+'/선미사이렌.png'}).addClass('align-self-center mr-3').appendTo($('#album_dt'));
			$('<div/>').attr({id : 'album_body'}).addClass('media-body').appendTo($('#album_dt'));
			$('<h4/>').html('<앨범타입>').appendTo($('#album_body'));
			$('<p/>').html('앨범명').attr({'style':'font-size:20px'}).addClass('font-weight-bold').appendTo($('#album_body'));
			$('<p/>').html('가수명').attr({'style':'font-size:15px'}).appendTo($('#album_body'));
			$('<p/>').html('발매일').appendTo($('#album_body'));
			$('<p/>').html('장르').appendTo($('#album_body'));
			$('<p/>').html('등록일').appendTo($('#album_body'));
			$('<hr/>').appendTo($('#album_div'));
			//
			//곡
			jt.music_list();
			
			//앨범소개
			$('<div/>').attr({id: 'introduce_div'}).addClass('container').appendTo($('#content'));
			$('<h3/>').html('앨범소개').appendTo($('#introduce_div'));
			$('<p/>').attr({id:'album_introduce'}).html(
					'독보적인 여성 솔로 아티스트로 자리매김하고 있는 선미는 걸그룹 원더걸스의 멤버로 처음 가수 생활을 시작했다. 2007년 2월 싱글 \'Irony'
					+'로 데뷔하며 안정적인 보컬과 깜찍한 비주얼로 사랑을 받았고, \'Tell Me'
					+'로 신드롬급 열풍을 일으키며 국민 걸그룹의 자리에 올라 \'So Hot\', \'Nobody\'까지 3연속 흥행을 거뒀다.').appendTo($('#introduce_div'));
			
			$('<br/>').appendTo($('#introduce_div'));
			$('<button/>').attr({
				'type':'button',
				'data-toggle':'collapse',
				'data-target' : '#demo'
			}).addClass('btn btn-light')
			.append(
					$('<span/>').addClass('glyphicon glyphicon-menu-down').html('펼치기')
			).appendTo($('#introduce_div'));
			
			$('<div/>').attr({id:'demo','aria-expanded':"false"}).addClass('collapse').appendTo($('#introduce_div'));
			$('<p/>').html(
			'원더걸스 활동 중단 후에는 가수로서의 트레이닝을 꾸준히 병행했다. 활동 중단 선언 3년 후인 2013년에는 싱글 \'24시간이 모자라\''
			+'를 통해 멤버들 중 가장 먼저 솔로로 데뷔했다. 이전의 풋풋한 이미지와는 확연히 다른 파격적인 변신으로 발매와 동시에 7개 음원 사이트 1위를 석권하는 센세이션을 일으켰고,' 
			+'이어 발매한 \'보름달\'에서도 콘셉트, 의상, 퍼포먼스 모든 부분에서 화제를 모았다.'
			+'원더걸스로 재합류한 이후에도 도전은 계속되었다. 2015년에 발표한 [REBOOT]에서는 앨범 콘셉트에 따라 멤버 개개인의 연주를 담은 티저 영상에서 수준급의 베이스 실력을 뽐내며 화제를 모았다.'
			+'연주는 물론 앨범 수록곡의 작사와 작곡에도 적극적으로 참여하며 음악적 성장을 보여준 시기였다. 이는 10주년 기념 싱글인 \'Why So Lonely\'와 해체 직전 발표한 \'그려줘\'에서도 이어졌다.'
			+'2017년 8월 발표한 싱글 \'가시나\'는 여성 디바로서의 매력을 한층 더 뽐낸 곡이었다. 특히 원더걸스 활동에 이은 댄스 퍼포먼스가 많은 이들에게 커버되며 회자되었다.'
			+'고혹적인 동시에 파격적 콘셉트를 내세우며 모든 부분에서 성숙한 역량을 보여준 선미는 이어 발표한 \'주인공\'에서도 압도적인 퍼포먼스를 선보였다.'
			+'2018년 9월, 선미의 3부작 프로젝트를 모두 담아낸 미니앨범 [WARNING]을 내놓았으며, 전곡 작사, 작곡에 참여해 음악적으로도 더욱 성숙해진 면모를 보였다.'
			).appendTo($('#demo'));
			$('<hr/>').appendTo($('#introduce_div'));
			
			
			
		}
		
};