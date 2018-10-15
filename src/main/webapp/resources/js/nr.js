"use strict";
var nr = nr || {};
nr = (()=>{
	var $ctx,$js,$css,$img,w, $page, $cnts;
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
        w.append(nav(),$page.append(
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
            nr.init();
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
    
    var home =()=>{
    	console.log('nr.home ::');
    	$cnts.empty();
    	$cnts.append(
    			$('<h1/>').html("==== 방문통계 페이지 ===="),
    			cntSec(),visitSec());
    };
    
    var pref=()=>{
    	console.log('nr.pref ::');
    	$('nav.side-navbar').toggleClass('show-sm');
        $('.page').toggleClass('active-sm');
    	$cnts.empty();
    	inputDate().appendTo($cnts);
    		
    	
    };
    var artist=()=>{
    	console.log('nr.artist ::');
    	$cnts.empty();
    	$cnts.append(
    			$('<h1/>').html("==== 아티스트 페이지 ====")
    			);
    		
    	
    };
    var hash=()=>{
    	console.log('nr.hash ::');
    	$cnts.empty();
    	$cnts.append(
    			$('<h1/>').html("==== 해시태그 페이지 ====")
    			);
    };
    
    var inputDate=()=>{
    	let inp = $('<div/>').attr({id:'checkinDate'}).appendTo($cnts);
    	$('<span/>').attr({id:'mainInput3'}).appendTo($('#checkinDate'));
    	$('<input/>').attr({type:'date', name:'checkin_date', id:'checkin_date'}).appendTo($('#mainInput3'));
    	$('<span/>').attr({id:'checkoutDate'}).html('~').appendTo($('#checkinDate'));
    	$('<span/>').attr({id:'mainInput4'}).appendTo($('#checkoutDate'));
		$('<input/>').attr({type:'date', name:'checkout_date', id:'checkout_date'}).appendTo($('#mainInput4'));
		$('<button/>').addClass("mr-3 btn btn-primary").attr({id:"submitBtn", type:"btn"}).html('조회').appendTo($('#checkinDate'));
    	/* $('<div/>').addClass("input-date").append(
    			$('<form/>').addClass("form-inline").append(
					$('<div/>').addClass("form-group").append(
						$('<label for="inlineFormInput"/>').addClass("sr-only").html("Name"),
						$('<input/>').addClass("mr-3 form-control").attr({id:"datepicker", type:"text",placeholder:"앞" })
					),
					$('<div/>').addClass("form-group").append(
						$('<label for="inlineFormInput"/>').addClass("sr-only").html("Name"),
						$('<input/>').addClass("mr-3 form-control").attr({id:"datepicker2", type:"text",placeholder:"뒤" })
					),
					$('<div/>').addClass("form-group").append(
						$('<input/>').addClass("mr-3 btn btn-primary").attr({id:"submitBtn", type:"submit",value:"Submit" })
					)
    			))*/;
        return inp;
    }
    
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
									$('<i/>').addClass("fa fa-bar-chart").html('방문통계'))),
							$('<li/>').append(
								$('<a/>').attr({id:"prefBtn", href:"#"}).append(
									$('<i/>').addClass("fa fa-bar-chart").html('선호도'))),
							$('<li/>').append(
								$('<a/>').attr({id:"artistBtn", href:"#"}).append(
									$('<i/>').addClass("fa fa-bar-chart").html('아티스트'))),
							$('<li/>').append(
								$('<a/>').attr({id:"hashBtn", href:"#"}).append(
									$('<i/>').addClass("fa fa-bar-chart").html('해시태그')))
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
							$('<i/>').addClass("icon-bars")),
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
	
	var section=()=>{
		console.log('section 진입');
		return $('<section/>').addClass("dashboard-counts section-padding").append(
				$('<div/>').addClass("container-fluid").append(
						$('<div/>').addClass("row")));
	};

	var cntSec=()=>$('<div/>').addClass("col-xl-2 col-md-4 col-6").append(
			$('<div/>').addClass("wrapper count-title d-flex").append(
				$('<div/>').addClass("icon").append(
					$('<i/>').addClass("icon-user")	
				),
				$('<div/>').addClass("name").append(
					$('<strong/>').addClass("text-uppercase").html("New Clients"),
					$('<br/>'),
					$('<span/>').html("새로운 고객 수"),
					$('<div/>').addClass("count-number").html("25")
				)
			)).appendTo(section());
	
	var visitSec=()=>{
		console.log('visitSec 진입');
		let sec = section().addClass(" d-flex align-items-md-stretch");
		let visit=$('<div/>').addClass("col-lg-12 flex-lg-last flex-md-first align-self-baseline").append(
				$('<div/>').addClass("card sales-report").append(
						$('<h2/>').addClass("display h4").html("방문자 통계"),
						$('<p/>').html("차트를 입력해주세요"),
						$('<div/>').addClass("line-chart").append($('<canvas/>').attr({id:"lineCahrt"})))).appendTo(sec);
		
		return visit;
	};
	
	
	
	return {
		init : init
	};
})();

