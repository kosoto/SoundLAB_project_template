"use strict";
var jt = jt || {};
jt ={
		search :()=>{
			alert('jt search');
			let $cnts = $('#contents');
			$cnts.empty();
			
			$('<div/>').attr({id : 'jt_search'}).addClass('container').html('\'선미\'에 대한 검색결과').appendTo($cnts);
			//navbar
			$('<div/>').attr({id : 'jt_nav-box'}).addClass('container').appendTo($cnts);
			$('<ul/>').attr({id : 'jt_nav'}).addClass('nav nav-tabs border-bottom-0').appendTo($('#jt_nav-box'));
			
			$('<li/>').attr({id : 'jt_artist'}).addClass('nav-item').appendTo($('#jt_nav'));
			$('<a/>')
			.attr({href : '#jt_search_artist'})
			.addClass('nav-link ').html('아티스트')
			.appendTo($('#jt_artist'))
			.click(e=>{
				$('#jt_artist').addClass('active');
                $('#jt_music').removeClass('active');
                $('#jt_album').removeClass('active');
                $('#jt_mv').removeClass('active');
                fn.scroll({ id : $("#jt_search_artist"), len : 200});
				
				
			});
			
			
			$('<li/>').attr({id : 'jt_music'}).addClass('nav-item').appendTo($('#jt_nav'));
			$('<a/>')
			.attr({href : '#jt_search_music'})
			.addClass('nav-link ').html('곡')
			.appendTo($('#jt_music'))
			.click(e=>{
				$('#jt_music').addClass('active');
                $('#jt_artist').removeClass('active');
                $('#jt_album').removeClass('active');
                $('#jt_mv').removeClass('active');
                fn.scroll({ id : $("#jt_search_music"), len : 200});
				
			})
			
			$('<li/>').attr({id : 'jt_album'}).addClass('nav-item').appendTo($('#jt_nav'));
			$('<a/>')
			.attr({href : '#jt_search_album'})
			.addClass('nav-link ').html('앨범')
			.appendTo($('#jt_album'))
			.click(e=>{
				$('#jt_album').addClass('active');
                $('#jt_artist').removeClass('active');
                $('#jt_music').removeClass('active');
                $('#jt_mv').removeClass('active');
                fn.scroll({ id : $("#jt_search_album"), len : 200});
				
				
			})
			
			$('<li/>').attr({id : 'jt_mv'}).addClass('nav-item').appendTo($('#jt_nav'));
			$('<a/>')
			.attr({href : '#jt_search_mv'})
			.addClass('nav-link ').html('영상')
			.appendTo($('#jt_mv'))
			.click(e=>{
				$('#jt_mv').addClass('active');
                $('#jt_album').removeClass('active');
                $('#jt_artist').removeClass('active');
                $('#jt_music').removeClass('active');
                fn.scroll({ id : $("#jt_search_mv"), len : 200});
				
			})
			
			//페이지내용
			$('<div/>').attr({id : 'jt_content'}).appendTo($cnts);
			
			//아티스트
			$('<div/>').attr({id : 'jt_search_artist'}).addClass('container').appendTo($('#jt_content'))
			$('<h3/>').html('아티스트').appendTo($('#jt_search_artist'));
			$('<hr/>').appendTo($('#jt_search_artist'));
			$('<div/>').attr({id : 'jt_search_dt'}).addClass('media').appendTo($('#jt_search_artist'));
			$('<img/>')
			.attr({src : $.img()+'/profile_1.jpg',align : 'left',style:"margin-right:20px"})
			.addClass('img-rounded')
			.appendTo($('#jt_search_dt'));
			$('<div/>').attr({id : 'jt_search_body'}).addClass('media-body').appendTo($('#jt_search_dt'));
			$('<h4/>').html('선미').appendTo($('#jt_search_body'));
			$('<p/>').html('국적 : 대한민국').appendTo($('#jt_search_body'));
			$('<p/>').html('활동유형 : 여성,솔로').appendTo($('#jt_search_body'));
			$('<p/>').html('생일 : 1992.05.02').appendTo($('#jt_search_body'));
			$('<hr/>').appendTo($('#jt_search_artist'));
			
			//아티스트 소개글
            $('<div/>').attr({id: 'jt_introduce_div'}).addClass('container').appendTo($('#jt_search_artist'));
            $('<h3/>').html('아티스트 소개').appendTo($('#jt_introduce_div'));
            $('<p/>').attr({id:'jt_artist_introduce'}).html(
                    '독보적인 여성 솔로 아티스트로 자리매김하고 있는 선미는 걸그룹 원더걸스의 멤버로 처음 가수 생활을 시작했다. 2007년 2월 싱글 \'Irony'
                    +'로 데뷔하며 안정적인 보컬과 깜찍한 비주얼로 사랑을 받았고, \'Tell Me'
                    +'로 신드롬급 열풍을 일으키며 국민 걸그룹의 자리에 올라 \'So Hot\', \'Nobody\'까지 3연속 흥행을 거뒀다.').appendTo($('#jt_introduce_div'));
            
            $('<br/>').appendTo($('#jt_introduce_div'));
            $('<button/>').attr({
                'type':'button',
                'data-toggle':'collapse',
                'data-target' : '#jt_demo'
            }).addClass('btn btn-light')
            .append(
                    $('<span/>').addClass('glyphicon glyphicon-menu-down').html('펼치기')
            ).appendTo($('#jt_introduce_div'));
            
            $('<div/>').attr({id:'jt_demo','aria-expanded':"false"}).addClass('collapse').appendTo($('#jt_introduce_div'));
            $('<p/>').html(
            '원더걸스 활동 중단 후에는 가수로서의 트레이닝을 꾸준히 병행했다. 활동 중단 선언 3년 후인 2013년에는 싱글 \'24시간이 모자라\''
            +'를 통해 멤버들 중 가장 먼저 솔로로 데뷔했다. 이전의 풋풋한 이미지와는 확연히 다른 파격적인 변신으로 발매와 동시에 7개 음원 사이트 1위를 석권하는 센세이션을 일으켰고,'
            +'이어 발매한 \'보름달\'에서도 콘셉트, 의상, 퍼포먼스 모든 부분에서 화제를 모았다.'
            +'원더걸스로 재합류한 이후에도 도전은 계속되었다. 2015년에 발표한 [REBOOT]에서는 앨범 콘셉트에 따라 멤버 개개인의 연주를 담은 티저 영상에서 수준급의 베이스 실력을 뽐내며 화제를 모았다.'
            +'연주는 물론 앨범 수록곡의 작사와 작곡에도 적극적으로 참여하며 음악적 성장을 보여준 시기였다. 이는 10주년 기념 싱글인 \'Why So Lonely\'와 해체 직전 발표한 \'그려줘\'에서도 이어졌다.'
            +'2017년 8월 발표한 싱글 \'가시나\'는 여성 디바로서의 매력을 한층 더 뽐낸 곡이었다. 특히 원더걸스 활동에 이은 댄스 퍼포먼스가 많은 이들에게 커버되며 회자되었다.'
            +'고혹적인 동시에 파격적 콘셉트를 내세우며 모든 부분에서 성숙한 역량을 보여준 선미는 이어 발표한 \'주인공\'에서도 압도적인 퍼포먼스를 선보였다.'
            +'2018년 9월, 선미의 3부작 프로젝트를 모두 담아낸 미니앨범 [WARNING]을 내놓았으며, 전곡 작사, 작곡에 참여해 음악적으로도 더욱 성숙해진 면모를 보였다.'
            ).appendTo($('#jt_demo'));
            $('<hr/>').appendTo($('#jt_introduce_div'));
			
			//곡 
			jt.music_list();
			
			//앨범
			$('<div/>').attr({id : 'jt_search_album'}).addClass('container').appendTo($('#jt_content'));
			$('<h3/>').html('앨범'). appendTo($('#jt_search_album'));
			$('<hr/>').appendTo($('#jt_search_album'));
			$('<div/>').attr({id : 'jt_album_dt'}).addClass('row media').appendTo($('#jt_search_album'));
			$('<div/>').attr({id : 'jt_album_div'}).addClass('col-md-3').appendTo($('#jt_album_dt'));
			$('<img/>')
			.attr({src : $.img()+'/profile_1.jpg'})
			.addClass('img-rounded jt_album_detail')
			.appendTo($('#jt_album_div'));
			$('<div/>').attr({id : 'jt_album_body'}).appendTo($('#jt_album_div'));
			$('<h3/>').html('<타입>').addClass('mt-0').appendTo($('#jt_album_body'));
			$('<p/>').addClass('font-weight-bold jt_album_detail')
			.html('앨범명')
			.attr({'style':'font-size:15px'})
			.appendTo($('#jt_album_body'));
			$('<p/>').addClass('text-justify').html('가수명').attr({'style':'font-size:15px'}).appendTo($('#jt_album_body'));
			$('<p/>').addClass('text-justify').html('출시날짜').attr({'style':'font-size:15px'}).appendTo($('#jt_album_body'));
			$('<span/>').html('좋아요').attr({'style':'font-size:15px'}).addClass('glyphicon glyphicon-thumbs-up').appendTo($('#jt_album_body'));
			$('<br/>').appendTo($('#jt_album_body'));$('<br/>').appendTo($('#jt_album_body'));
			$('<button/>').appendTo($('#jt_album_body'))
			.addClass('btn btn-light')
			.append(
					$('<span/>').addClass('glyphicon glyphicon-play').html('앨범듣기')
				);
			
			//두번 째 앨범
			$('<div/>').attr({id : 'jt_album_div2'}).addClass('col-md-3').appendTo($('#jt_album_dt'));
			$('<img/>')
			.attr({src : $.img()+'/profile_1.jpg'})
			.addClass('img-rounded jt_album_detail')
			.appendTo($('#jt_album_div2'));
			
			
			
			$('<div/>').attr({id : 'jt_album_body2'})./*addClass('media-body').*/appendTo($('#jt_album_div2'));
			$('<h3/>').html('<타입>').addClass('mt-0').appendTo($('#jt_album_body2'));
			$('<p/>').addClass('font-weight-bold jt_album_detail').html('앨범명').attr({'style':'font-size:15px'}).appendTo($('#jt_album_body2'));
			$('<p/>').html('가수명').attr({'style':'font-size:15px'}).appendTo($('#jt_album_body2'));
			$('<p/>').html('출시날짜').attr({'style':'font-size:15px'}).appendTo($('#jt_album_body2'));
			$('<span/>').html('좋아요').attr({'style':'font-size:15px'}).addClass('glyphicon glyphicon-thumbs-up').appendTo($('#jt_album_body2'));
			$('<br/>').appendTo($('#jt_album_body2'));$('<br/>').appendTo($('#jt_album_body2'));
			$('<button/>').appendTo($('#jt_album_body2'))
			.addClass('btn btn-light')
			.append(
					$('<span/>').addClass('glyphicon glyphicon-play').html('앨범듣기')
				);
			
			$('<hr/>').appendTo($('#jt_search_album'));
			
			//앨범디테일 페이지 이동. 클래스로 접근.
			$('.jt_album_detail').click(e=>{
				alert('앨범디테일 페이지 이동');
				jt.album_detail();
				
			});
			//영상
			$('<div/>').attr({id : 'jt_search_mv'}).addClass('container').appendTo($('#jt_content'));
			$('<h3/>').html('영상').appendTo($('#jt_search_mv'));
			$('<hr/>').appendTo($('#jt_search_mv'));
			$('<ul/>').attr({id:'jt_mv_ul'}).addClass('list-unstyled').appendTo($('#jt_search_mv'));
			$('<li/>').attr({id:'jt_mv_li'})./*addClass('media').*/appendTo($('#jt_mv_ul'));;
			$('<img/>').attr({src :$.img()+'/profile_1.jpg' }).addClass('img-rounded').appendTo($('#jt_mv_li'));
			$('<div/>').attr({id:'jt_mv_div'})./*addClass('media-body').*/appendTo($('#jt_mv_li'));
			$('<h3/>').html('<뮤비>곡 명').addClass('mt-0').appendTo($('#jt_mv_div'));
			$('<p/>').addClass('font-weight-bold').html('가수명').attr({'style':'font-size:15px'}).appendTo($('#jt_mv_div'));
			$('<p/>').html('등록일').attr({'style':'font-size:15px'}).appendTo($('#jt_mv_div'));
			$('<p/>').html('좋아요').attr({'style':'font-size:15px'})
			.addClass('glyphicon glyphicon-thumbs-up')
			.appendTo($('#jt_mv_div'))
			$('<p/>').html('조회수').attr({'style':'font-size:15px'}).appendTo($('#jt_mv_div'));
			$('<button/>').appendTo($('#jt_mv_div'))
			.addClass('btn btn-light')
			.append(
					$('<span/>').addClass('glyphicon glyphicon-play').html('영상')
				);
			$('<hr/>').appendTo($('#jt_mv_ul'));
			
			$('<li/>').attr({id:'jt_mv_li2'}).appendTo($('#jt_mv_ul'));;
			$('<img/>').attr({src :$.img()+'/profile_1.jpg' }).addClass('img-rounded').appendTo($('#jt_mv_li2'));
			$('<div/>').attr({id:'jt_mv_div2'}).appendTo($('#jt_mv_li2'));
			$('<h3/>').html('<뮤비>곡 명').addClass('mt-0').appendTo($('#jt_mv_div2'));
			$('<p/>').addClass('font-weight-bold').html('가수명').attr({'style':'font-size:15px'}).appendTo($('#jt_mv_div2'));
			$('<p/>').html('등록일').attr({'style':'font-size:15px'}).appendTo($('#jt_mv_div2'));
			$('<p/>').html('좋아요').attr({'style':'font-size:15px'}).addClass('glyphicon glyphicon-thumbs-up').appendTo($('#jt_mv_div2'))
			$('<p/>').html('조회수').attr({'style':'font-size:15px'}).appendTo($('#jt_mv_div2'));
			$('<button/>').appendTo($('#jt_mv_div2'))
			.addClass('btn btn-light')
			.append(
					$('<span/>').addClass('glyphicon glyphicon-play').html('영상')
				);
			$('<hr/>').appendTo($('#jt_search_mv'));
			
		
		},
		
		
		//곡 차트
		music_list : ()=>{
			$('<div/>').attr({id: 'jt_search_music'}).addClass('container').appendTo($('#jt_content'));
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
			.append(
			'<button style="margin-right:5px" class="btn btn-light"><span class="glyphicon glyphicon-play-circle" aria-hidden="true"></span></button>')
			.click(e=>{
				alert('팝업');
				jt.player();
			})
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
			
		
		},
		album_detail : x=>{
			let $cnts = $('#contents');
			$cnts.empty();
			$('<div/>').attr({id : 'jt_album_dtpage'}).addClass('container').appendTo($cnts);
			$('<div/>').attr({id : 'jt_content'}).appendTo($('#jt_album_dtpage'));
			$('<h3/>').html('앨범정보').appendTo($('#jt_content'));
			
			$('<div/>').attr({id : 'jt_album_div'}).addClass('container').appendTo($('#jt_content'));
			$('<hr/>').appendTo($('#jt_album_div'));
			$('<div/>').attr({id : 'jt_album_dt'}).addClass('media').appendTo($('#jt_album_div'));
			$('<img/>')
			.attr({src : $.img()+'/profile_1.jpg', align : 'left',style:"margin-right:10px"})
			.addClass('img-rounded')
			.appendTo($('#jt_album_dt'));
			$('<div/>').attr({id : 'jt_album_body'}).addClass('media-body').appendTo($('#jt_album_dt'));
			$('<h4/>').html('<앨범타입>').appendTo($('#jt_album_body'));
			$('<p/>').html('앨범명').attr({'style':'font-size:20px'}).addClass('font-weight-bold').appendTo($('#jt_album_body'));
			$('<p/>').html('가수명').attr({'style':'font-size:15px'}).appendTo($('#jt_album_body'));
			$('<p/>').html('발매일').appendTo($('#jt_album_body'));
			$('<p/>').html('장르').appendTo($('#jt_album_body'));
			$('<p/>').html('등록일').appendTo($('#jt_album_body'));
			$('<hr/>').appendTo($('#jt_album_div'));
			
			//곡
			jt.music_list();
			
			//앨범소개
			$('<div/>').attr({id: 'jt_introduce_album'}).addClass('container').appendTo($('#jt_content'));
			$('<h3/>').html('앨범소개').appendTo($('#jt_introduce_album'));
			$('<p/>').attr({id:'album_introduce'}).html(
					'독보적인 여성 솔로 아티스트로 자리매김하고 있는 선미는 걸그룹 원더걸스의 멤버로 처음 가수 생활을 시작했다. 2007년 2월 싱글 \'Irony'
					+'로 데뷔하며 안정적인 보컬과 깜찍한 비주얼로 사랑을 받았고, \'Tell Me'
					+'로 신드롬급 열풍을 일으키며 국민 걸그룹의 자리에 올라 \'So Hot\', \'Nobody\'까지 3연속 흥행을 거뒀다.').appendTo($('#jt_introduce_album'));
			
			$('<br/>').appendTo($('#jt_introduce_album'));
			$('<button/>').attr({
				'type':'button',
				'data-toggle':'collapse',
				'data-target' : '#jt_album_demo'
			}).addClass('btn btn-light')
			.append(
					$('<span/>').addClass('glyphicon glyphicon-menu-down').html('펼치기')
			).appendTo($('#jt_introduce_album'));
			
			$('<div/>').attr({id:'jt_album_demo','aria-expanded':"false"}).addClass('collapse').appendTo($('#jt_introduce_album'));
			$('<p/>').html(
			'원더걸스 활동 중단 후에는 가수로서의 트레이닝을 꾸준히 병행했다. 활동 중단 선언 3년 후인 2013년에는 싱글 \'24시간이 모자라\''
			+'를 통해 멤버들 중 가장 먼저 솔로로 데뷔했다. 이전의 풋풋한 이미지와는 확연히 다른 파격적인 변신으로 발매와 동시에 7개 음원 사이트 1위를 석권하는 센세이션을 일으켰고,' 
			+'이어 발매한 \'보름달\'에서도 콘셉트, 의상, 퍼포먼스 모든 부분에서 화제를 모았다.'
			+'원더걸스로 재합류한 이후에도 도전은 계속되었다. 2015년에 발표한 [REBOOT]에서는 앨범 콘셉트에 따라 멤버 개개인의 연주를 담은 티저 영상에서 수준급의 베이스 실력을 뽐내며 화제를 모았다.'
			+'연주는 물론 앨범 수록곡의 작사와 작곡에도 적극적으로 참여하며 음악적 성장을 보여준 시기였다. 이는 10주년 기념 싱글인 \'Why So Lonely\'와 해체 직전 발표한 \'그려줘\'에서도 이어졌다.'
			+'2017년 8월 발표한 싱글 \'가시나\'는 여성 디바로서의 매력을 한층 더 뽐낸 곡이었다. 특히 원더걸스 활동에 이은 댄스 퍼포먼스가 많은 이들에게 커버되며 회자되었다.'
			+'고혹적인 동시에 파격적 콘셉트를 내세우며 모든 부분에서 성숙한 역량을 보여준 선미는 이어 발표한 \'주인공\'에서도 압도적인 퍼포먼스를 선보였다.'
			+'2018년 9월, 선미의 3부작 프로젝트를 모두 담아낸 미니앨범 [WARNING]을 내놓았으며, 전곡 작사, 작곡에 참여해 음악적으로도 더욱 성숙해진 면모를 보였다.'
			).appendTo($('#jt_album_demo'));
			$('<hr/>').appendTo($('#jt_introduce_album'));
			
			//댓글
			$('<div/>').attr({id: 'jt_cmt'}).addClass('container').appendTo($('#jt_content'));
			$('<h3/>').html('댓글').appendTo($('#jt_cmt'));
			$('<hr/>').appendTo($('#jt_cmt'));
			$('<div/>').attr({id: 'jt_cmt_profile'}).addClass('col-md-2').appendTo($('#jt_cmt'));
			$('<img/>')
			.attr({src : $.img()+'/캡처.JPG', align : 'left'})
			.addClass('img-rounded')
			.appendTo($('#jt_cmt_profile'));
			$('<div/>').attr({id:'jt_cmt_body'}).addClass('col-md-8').appendTo($('#jt_cmt'));
			$('<textarea/>').attr({rows:"6",cols:"105",placeholder:"내용을 입력해주세요"}).appendTo($('#jt_cmt_body'));
			$('<div/>').attr({id:'jt_cmt_btn_div'}).addClass('col-md-2').appendTo($('#jt_cmt'));
			$('<button/>')
			.attr({id:'jt_cmt_btn','type':'button'})
			.addClass('btn btn-light btn-lg').html('등록')
			.appendTo($('#jt_cmt_btn_div'));
			$('<br/>').appendTo($('#jt_content'));
			$('<div/>').addClass('jt_cmt_count container').appendTo($('#jt_content'));
			$('<div/>').attr({id:'jt_cmt_div'}).appendTo('.jt_cmt_count');
			$('<span/>').attr({id:'jt_cmt_counts'}).html('총 00 개').appendTo($('#jt_cmt_div'));
			let array=["최신순","추천순","답글순"];
	        $.each(array,(x,j)=>{
	            
	            $('<span/>').addClass('jt_cmt_array').html(j).appendTo($('#jt_cmt_div'))
	            .click(e=>{
	                alert(j+" 버튼");
	            });
	        });
			$('<hr/>').appendTo($('#jt_content'));
			
			//댓글읽기
			$('<div/>').attr({id:'jt_user_cmt'}).addClass('media').appendTo($('#jt_content'));
			$('<img/>')
			.attr({src : $.img()+'/유아인.jpg', align : 'left'})
			.addClass('img-circle')
			.appendTo($('#jt_user_cmt'));
			$('<div/>').attr({id:'jt_user_read'}).addClass('media-body').appendTo($('#jt_user_cmt'));
			$('<span/>').addClass('jt_user_content').html('노래좋아요~~').appendTo($('#jt_user_read'));
			$('<span/>').html('좋아요')
			.attr({'style':'font-size:15px'})
			.addClass('glyphicon glyphicon-thumbs-up jt_user_up')
			.appendTo($('#jt_user_read'));
			$('<span/>').html('싫어요')
			.attr({'style':'font-size:15px'})
			.addClass('glyphicon glyphicon-thumbs-down jt_user_down')
			.appendTo($('#jt_user_read'));
			$('<hr/>').appendTo($('#jt_content'));
			
			$('<div/>').attr({id:'jt_user_cmt2'}).addClass('media').appendTo($('#jt_content'));
			$('<img/>')
			.attr({src : $.img()+'/유아인.jpg', align : 'left'})
			.addClass('img-circle')
			.appendTo($('#jt_user_cmt2'));
			$('<div/>').attr({id:'jt_user_read2'}).addClass('media-body').appendTo($('#jt_user_cmt2'));
			$('<span/>').addClass('jt_user_content').html('노래좋아요~~').appendTo($('#jt_user_read2'));
			$('<span/>').html('좋아요')
			.attr({'style':'font-size:15px'})
			.addClass('glyphicon glyphicon-thumbs-up jt_user_up')
			.appendTo($('#jt_user_read2'));
			$('<span/>').html('싫어요')
			.attr({'style':'font-size:15px'})
			.addClass('glyphicon glyphicon-thumbs-down jt_user_down')
			.appendTo($('#jt_user_read2'));
			$('<hr/>').appendTo($('#jt_content'));
			
			
		},
		
		//웹플레이어
		player : x=>{
			let openWin = window.open(sh.ctx()+'/#SoundLAB_Player',"","left="+(screen.availWidth-500)/2+",top="+(screen.availHeight-800)/2+","+"width=500,height=600, menubar=no");
            setTimeout(()=>{
                let sonWrap = $(openWin.document.getElementById('wrapper'));
                sonWrap.empty();
                	$('<div/>').attr({id:'jt_playerdt'}).addClass('nowPlaying').appendTo(sonWrap);
                	$('<img/>')
                	.attr({src:$.img()+'/logo.png'})
                	.addClass('jt_logo_img')
                	.appendTo(openWin.document.getElementById('jt_playerdt'));
                	$('<div/>')
                	.attr({id:'nowPlaying-infoBox'})
                	.appendTo(openWin.document.getElementById('jt_playerdt'));
                	$('<span/>')
                	.addClass('nowPlaying-title')
                	.html('타이틀')
                	.appendTo(openWin.document.getElementById('nowPlaying-infoBox'));
                	
                	
                	/*$('<hr/>').appendTo(sonWrap);
                	$('<div/>').attr({id:'jt_player_div'}).addClass('media').appendTo(sonWrap);
                	$('<img/>')
        			.attr({src : $.img()+'/profile_1.jpg', align : 'left',style:"margin-right:20px"})
        			.addClass('jt_player_img')
        			.appendTo(openWin.document.getElementById('jt_player_div'));
                	$('<div/>').attr({id:'jt_player_body'}).addClass('media-body').appendTo(openWin.document.getElementById('jt_player_div'));	
                	$('<h4/>').html('노래제목')
                	.addClass('jt_player_albumN')
                	.appendTo(openWin.document.getElementById('jt_player_body')); 
        			$('<p/>').html('앨범명').appendTo(openWin.document.getElementById('jt_player_body'));
        			$('<p/>').html('가수이름').appendTo(openWin.document.getElementById('jt_player_body'));
        			$('<div/>').attr({id:'jt_player_btn'}).addClass('media').appendTo(sonWrap);
        			$('<audio>').attr({id:'player_audi'}).addClass('controls').appendTo(openWin.document.getElementById('jt_player_btn'));
        			$('<source>').attr({id:'player_sour',src:'horse.ogg',type:'audio/ogg'}).appendTo(openWin.document.getElementById('player_audi'));
        			$('<source>').attr({src:'horse.mp3',type:'audio/mpeg'}).appendTo(openWin.document.getElementById('player_audi'));*/
        			
        			
                
            },300);
		},
		
		
		
};