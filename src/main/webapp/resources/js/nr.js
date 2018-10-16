"use strict";
var nr = nr || {};
nr = (()=>{
	var $ctx,$js,$css,$img, w, $page, $cnts;

	var init =()=>{
        console.log('nr.init ::');
        let pink = document.createElement('link');
			pink.rel = 'stylesheet';
			pink.href = $.ctx()+'/resources/css/cssnr/style.pink.css';
			pink.id = 'pinkcss';
			document.head.appendChild(pink);
		let nrstyle = document.createElement('link');
			nrstyle.rel = 'stylesheet';
			nrstyle.href = $.ctx()+'/resources/css/cssnr/nr.css';
			nrstyle.id = 'nrcss';
			document.head.appendChild(nrstyle);
		
        $ctx = $.ctx();
        $js = $.js();
        $css = $.css();
        $img = $.img();
        w = $('#wrapper');
        w.empty();
        $page = $('<div/>').attr({id:'page'}).addClass('page');
        w.append(nav(),
        		$page.append(
        				hdr(),
        				$('<div/>').attr({id : 'cnts'})

        		)
    	);
        $cnts = $('#cnts');
        home();
        
    	//버튼=========================================
    	$('#toggle-btn').click(e=>{
             e.preventDefault();
             if ($(window).outerWidth() > 1194) {
                 $('nav.side-navbar').toggleClass('shrink');
                 $('.page').toggleClass('active');
             } else {
                 $('nav.side-navbar').toggleClass('show-sm');
                 $('.page').toggleClass('active-sm');
             }
        });
    	$('#mainBtn').click(()=>{
            nr.init();
       });
    	$('#visitBtn').click(()=>{
            home();
       });
    	$('#prefBtn').click(()=>{
            pref();
       });
    	$('#artistBtn').click(()=>{
            artist();
       });
    	$('#hashBtn').click(()=>{
            hash();
       });
    }; /* init 끝 */

    // ============================= 페이지 ============================
    var home =()=>{
    	console.log('nr.home ::');
    	/*let newMem={src:"https://static.thenounproject.com/png/1892501-200.png",
        		strong:"New Clients",
        		span:"새로운 고객 수",
        		num:"25"
        		};
        let strm={src:"https://static.thenounproject.com/png/738103-200.png",
        		strong:"Streaming count",
        		span:"스트리밍 수 ",
        		num:"89083432"
        		};*/
    	$cnts.empty();
    	section({cls:"dashboard-counts section-padding"}).appendTo($cnts);
    	cnt({src:"https://static.thenounproject.com/png/1892501-200.png",
    		strong:"New Clients",
    		span:"새로운 고객 수",
    		num:"25"
    		}).appendTo($("#row"));
    	cnt({src:"https://static.thenounproject.com/png/738103-200.png",
    		strong:"Streaming count",
    		span:"스트리밍 수 ",
    		num:"89083432"
    		}).appendTo($("#row"));
    	section({cls:" d-flex align-items-md-stretch"}).appendTo($cnts);
    	visit().appendTo($("#row"));
    };
    
    var pref=()=>{
    	console.log('nr.pref ::');
    	$('nav.side-navbar').toggleClass('show-sm');
        $('.page').toggleClass('active-sm');
    	
        $cnts.empty();
    	section({cls:"forms"}).appendTo($cnts);
    	period().appendTo($("#row"));
    	card().appendTo($("#row"));
    	card().appendTo($("#row"));
    	card().appendTo($("#row"));
    	card().appendTo($("#row"));
    	
    };
    var artist=()=>{
    	console.log('nr.artist ::');
    	$cnts.empty();

    	section({cls:"forms"}).appendTo($cnts);
    	period().appendTo($("#row"));
    	select().appendTo($("#row"));
    	card().appendTo($("#row"));//12사이즈로 변경 :스트리밍수*좋아요수
    	card().appendTo($("#row"));//성별에 따른 아티스트 선호도
    	table().appendTo($("#row"));
    	
    };
    var hash=()=>{
    	console.log('nr.hash ::');
    	$cnts.empty();
    	$('<h2/>').html("==== 해시태그 페이지 ====").appendTo($cnts);
    	section({cls:"forms"}).appendTo($cnts);
    	$('<div/>').attr({id:"chart_div"}).appendTo($("#row"));
    	/*$cnts.append(
    			$('<h2/>').html("==== 해시태그 페이지 ===="),
    			$('<div/>').attr({id:"chart_div"})
    			);*/
    	hashtree();
    	
    	
    	/*<div id="chart_div"></div>*/
    };
    
 // ============================= 구성 ============================
    
    /* ============= 해시트리 ============= */
    var hashtree=()=>{
    	 google.charts.load('current', {'packages':['treemap']});
    	 google.charts.setOnLoadCallback(drawChart);
         function drawChart() {
         var data = new google.visualization.DataTable();
         data.addColumn('string', 'ID');
         data.addColumn('string', 'Parent');
         data.addColumn('number', 'Number Of Lines');
         data.addRows([
           ['해시태그', null, 0],
           ['뮤직스타일', '해시태그', null],
           ['계절&날씨', '해시태그', null],
           ['상황&장소', '해시태그', null],
           ['감정&기분', '해시태그', null],
           ['장르', '해시태그', null],
     			
           ['신나는', '뮤직스타일', 32],
           ['트로피컬', '뮤직스타일', 78],
           ['잔잔한', '뮤직스타일', 56],
           ['어쿠스틱', '뮤직스타일', 23],
           ['열정적인', '뮤직스타일', 49],
           ['감성적인', '뮤직스타일', 51],
   				
           ['봄', '계절&날씨', 21],
           ['여름', '계절&날씨', 56],
           ['가을', '계절&날씨', 49],
           ['겨울', '계절&날씨', 29],
           ['눈오는날', '계절&날씨', 11],
           ['비오는날', '계절&날씨', 25],
                   
           ['드라이브', '상황&장소', 78],
           ['출근', '상황&장소', 23],
           ['휴식', '상황&장소', 46],
           ['독서', '상황&장소', 31],
           ['헬스', '상황&장소', 57],
           ['편집숍', '상황&장소', 33],
           ['카페', '상황&장소', 29],
           ['클럽', '상황&장소', 61],
           
           ['사랑/기쁨', '감정&기분', 46],
           ['스트레스', '감정&기분', 89],
           ['이별', '감정&기분', 42],
           ['고백', '감정&기분', 35],
           ['새벽', '감정&기분', 57],
           ['눈물', '감정&기분', 28],
           ['기분전환', '감정&기분', 51],
           
           ['가요', '장르', 76],
           ['Pop', '장르', 52],
           ['R&B', '장르', 41],
           ['OST', '장르', 24],
           ['Hiphop', '장르', 69],
           ['Classic', '장르', 11],
         ]);
         var tree = new google.visualization.TreeMap(document.getElementById('chart_div'));
         var options = {
           highlightOnMouseOver: true,
           fontSize: 20,
           maxDepth: 1,
           maxPostDepth: 2,
           minColor: '#edf8fb',
           midColor: '#9ebcda',
           maxColor: '#8c6bb1',
           headerHeight: 15,
           showScale: true,
           height: 500,
           useWeightedAverageForAggregation: true
         };
           tree.draw(data, options);
         }
    	/* ============= 해시트리 ============= */
    	 
    	 
    };
    
    var table=()=>{
    	let tbl=$('<table/>').addClass("table table-striped").append(
    			$('<thead/>').append(
    					$('<tr/>').append(
	    					$('<th/>').html("#"),
	    					$('<th/>').html("검색어"),
	    					$('<th/>').html("검색횟수"),
	    					$('<th/>').html("구분")
	    					)),
				$('<tbody/>').append(
						//반복
						$('<tr/>').append(
							$('<th scope="row"/>').html("x.1"),
	    					$('<td/>').html("x.방탄소년단"),
	    					$('<td/>').html("x.123건"),
	    					$('<td/>').html("x.아티스트")
    					),
    					$('<tr/>').append(
    							$('<th scope="row"/>').html("x.2"),
    	    					$('<td/>').html("x.BTS"),
    	    					$('<td/>').html("x.765건"),
    	    					$('<td/>').html("x.아티스트")
        					),
    					$('<tr/>').append(
    							$('<th scope="row"/>').html("x.3"),
    	    					$('<td/>').html("x.IDOL"),
    	    					$('<td/>').html("x.555건"),
    	    					$('<td/>').html("x.노래")
        					)
					)
    	);
    	let tdiv=$('<div/>').addClass("col-lg-6").append(
    			$('<div/>').addClass("card").append(
    					$('<div/>').addClass("card-header").append(
    							$('<h4/>').html("x.테이블이름")),
						$('<div/>').addClass("card-body").append(
								$('<div/>').attr({id:"tblRes"}).addClass("table-responsive").append(tbl))
					)
				);
    	return tdiv;
    };

    
	var section=x=>{
		console.log(x.cls);
		return $('<section/>').addClass(x.cls).append(
					$('<div/>').addClass("container-fluid").attr({id:"conflu"}).append(
						$('<div/>').attr({id:"row"}).addClass("row")));
	};
	
    var period=()=>{
    	let period = 
    		$('<div/>').attr({id:'periodcard'}).addClass("card").appendTo($cnts);
    	$('<div/>').attr({id:'period'}).addClass("card-body").appendTo($('#periodcard'));
				$('<form/>').addClass("form-inline").attr({id:'periodForm'}).appendTo($('#period'));
					$('<div/>').addClass("form-group").attr({id:'startDiv'}).appendTo($('#periodForm'));
						$('<input/>').attr({type:'date', name:'startDate', id:'startDate'}).addClass("mr-3 form-control").appendTo($('#startDiv'));
					$('<div/>').addClass("form-group").attr({id:'endDiv'}).appendTo($('#periodForm'));
						$('<input/>').attr({type:'date', name:'endDate', id:'endDate'}).addClass("mr-3 form-control").appendTo($('#endDiv'));
					$('<div/>').addClass("form-group").attr({id:'submitDiv'}).appendTo($('#periodForm'));
						$('<button/>').addClass("mr-3 btn btn-primary").attr({id:"submitBtn", type:"btn"})
						.html('조회').appendTo($('#submitDiv'));
        return period;
    }
    
    var select=()=>{
    	let sel = $('<div/>').addClass("form-group row").append(
    			$('<label/>').addClass("col-sm-2 form-control-label").html("아티스트 선택"),
    			$('<div/>').addClass("col-sm-3 mb-3").append(
    					$('<select/>').addClass("form-control").attr({name:"account"}).append(
    					$('<option/>').html("방탄소년단"),
    					$('<option/>').html("아이유"),	
    					$('<option/>').html("선미"),	
    					$('<option/>').html("먼데이키즈")	
    					))
    					);
    	
    		/*//서치 = input타입
    		$('<div/>').addClass("navbar-form navbar-left").append(
    			$('<div/>').addClass("form-group").append(
    					$('<input/>').addClass("form-control").attr({type:"text",placeholder:"Search for artist"})),
				$('<button/>').addClass("mr-3 btn btn-primary").attr({type:"submit"}).html("Search")
    					);
    	*/
    	
    	return sel;
    };
    
    
    
   /* var cnt=()=>$('<div/>').addClass("col-md-4 col-6").append(
			$('<div/>').addClass("wrapper count-title d-flex").append(
				$('<div/>').addClass("icon").append(
					$('<i/>').addClass("fa fa-user")	
				),
				$('<div/>').addClass("name").append(
					$('<strong/>').addClass("text-uppercase").html("New Clients"),
					$('<br/>'),
					$('<span/>').html("새로운 고객 수"),
					$('<div/>').addClass("count-number").html("25")
				)
			));dd*/
    
    
    
    
    var cnt=x=>$('<div/>').addClass("col-md-6").append(
			$('<div/>').addClass("wrapper count-title d-flex").append(
					$('<div/>').addClass("col-md-3").append(
						$('<img/>').addClass("main-img").attr({src:x.src})
					),
					$('<div/>').addClass("name col-md-3").append(
						$('<strong/>').addClass("text-uppercase").html(x.strong),
						$('<br/>'),
						$('<span/>').html(x.span),
						$('<div/>').addClass("count-number").html(x.num)
					)
			));
    
	var visit=()=>{
		console.log('visitSec 진입');
		let visit=
			$('<div/>').addClass("col-lg-12 flex-lg-last flex-md-first align-self-baseline").append(
				$('<div/>').addClass("card sales-report").append(
						$('<h2/>').addClass("display h4").html("방문자 통계"),
						$('<p/>').html("차트를 입력해주세요"),
						$('<div/>').addClass("line-chart").append(
								$('<canvas/>').attr({id:"lineCahrt"}))));
		return visit;
	};
	
	//size:6, title:~~분석, 
	var card=()=>{
		let card=$('<div/>').addClass("col-lg-6").append(
				$('<div/>').addClass("card line-chart-example").append(
				$('<div/>').addClass("card-header d-flex align-items-center").append(
						$('<h4/>').html("x.card title")
						),
				$('<div/>').addClass("card-body").append(
						$('<canvas/>').attr({id:"lineChartExample"}))
				)
			);
		return card;
	};
    
 // =============================기본 구성  : 네비, 헤더 ============================
	var nav = ()=>{
		console.log('nr.nav ::');
		let $nav = $('<nav/>');
		 $($nav).addClass("side-navbar").append(
			$('<div/>').addClass("side-navbar-wrapper").append(
				$('<div/>').addClass("sidenav-header d-flex align-items-center justify-content-center").append(
					$('<div/>').addClass("sidenav-header-inner text-center").append(
						$('<img/>').addClass("img-fluid rounded-circle").attr({
							src:$.img()+"/logo.png",
							alt:"SoundLAB 로고",
						}),
						$('<h2/>').addClass("h5").html("SoundLAB"),
						$('<span/>').html("관리자 페이지")
					),
					$('<div/>').addClass("sidenav-header-logo").append(
						$('<a/>').addClass("brand-small text-center").attr({href:"#"}).append(
							$('<strong/>').html("S"),
							$('<strong/>').addClass("text-primary").html("L")
						)
					)
							
				),
				$('<div/>').addClass("main-menu").append(
						$('<h5/>').addClass("sidenav-heading").html("MAIN"),
						$('<ul/>').addClass("side-menu list-unstyled").attr({id:"side-main-menu"}).append(
							$('<li/>').append(
								$('<a/>').attr({id:"visitBtn", href:"#"}).append(
									$('<i/>').addClass("fa fa-bar-chart").html('  방문통계'))),
							$('<li/>').append(
								$('<a/>').attr({id:"prefBtn", href:"#"}).append(
									$('<i/>').addClass("fa fa-bar-chart").html('  선호도'))),
							$('<li/>').append(
								$('<a/>').attr({id:"artistBtn", href:"#"}).append(
									$('<i/>').addClass("fa fa-bar-chart").html('  아티스트'))),
							$('<li/>').append(
								$('<a/>').attr({id:"hashBtn", href:"#"}).append(
									$('<i/>').addClass("fa fa-bar-chart").html('  해시태그')))
						)
					)
			)		
		);
		return $nav;
	};
	var hdr =()=>{
		let $header =$('<header/>').addClass("header");
		let $nav = $('<nav/>').appendTo($header);
		$nav.addClass("navbar").append(
			$('<div/>').addClass("container-fluid").append(
				$('<div/>').addClass("navbar-holder d-flex align-items-center justify-content-between").append(
					$('<div/>').addClass("navbar-header").append(
						$('<a/>').addClass("menu-btn").attr({id:"toggle-btn",href:"#"}).append(
							$('<i/>').addClass("fa fa-bars")).attr({style:"font-size:20px"}),
						$('<a/>').addClass("navbar-brand").attr({href:"#"}).append(
							$('<div/>').addClass("brand-text d-none d-md-inline-block").append(
								$('<span/>').html("ADMIN"),
								$('<strong/>').addClass("text-primary").html("SoundLAB")))
					),
					$('<ul/>').addClass("nav-menu list-unstyled d-flex flex-md-row align-items-md-center").append(
						$('<li/>').addClass("nav-item").append(
							$('<a/>').addClass("nav-link logout").attr({id:"logoutBtn",href:"#",style:"float:right"}).append(
								$('<span/>').addClass("d-none d-sm-inline-block").html("Logout")
								.click(e=>{
									$('#pinkcss').remove();
									$('#nrcss').remove();
									sh.service.login();
								}),
								$('<i/>').addClass("fa fa-sign-out")
							)))
				)
			)
		);
		return $header;
	};

	
	return {
		init : init
	};
})();
