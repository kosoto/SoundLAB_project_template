"use strict";
var nr = nr || {};
nr = (()=>{
	var $ctx,$js,$css,$img,w,sec;
	var init =()=>{
        console.log('nr.init ::');
        $ctx = $.ctx();
        $js = $.js();
        $css = $.css();
        $img = $.img();
        w = $('#wrapper');
        home({});
    };
    var home =x=>{
    	console.log('nr.home ::');
    	/*$('<link href="${context}/resources/css/cssnr/fontastic.css" rel="stylesheet">'
    		+'<link href="${context}/resources/css/cssnr/grasp_mobile_progress_circle-1.0.0.min.css" rel="stylesheet">'
    		+'<link href="${context}/resources/css/cssnr/style.blue.css" rel="stylesheet">'
    		+'<link href="${context}/resources/css/cssnr/style.default.css" rel="stylesheet">'
    		+'<link href="${context}/resources/css/cssnr/style.green.css" rel="stylesheet">'
    		+'<link href="${context}/resources/css/cssnr/style.pink.css" rel="stylesheet">'
    		+'<link href="${context}/resources/css/cssnr/style.red.css" rel="stylesheet">'
    		+'<link href="${context}/resources/css/cssnr/style.sea.css" rel="stylesheet">'
    		+'<link href="${context}/resources/css/cssnr/style.violet.css" rel="stylesheet">').appendTo($('<head/>'));*/
       /* let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = $.ctx()+'/resources/css/cssnr/custom.css';
    	document.head.appendChild(link);*/
    	
        let fontastic = document.createElement('link');
    		fontastic.rel = 'stylesheet';
    		fontastic.href = $.ctx()+'/resources/css/cssnr/fontastic.css';	
        	document.head.appendChild(fontastic);
    	let linkmobile = document.createElement('link');
        	linkmobile.rel = 'stylesheet';
        	linkmobile.href = $.ctx()+'/resources/css/cssnr/grasp_mobile_progress_circle-1.0.0.min.css';
        	document.head.appendChild(linkmobile);
    	let blue = document.createElement('link');
    		blue.rel = 'stylesheet';
    		blue.href = $.ctx()+'/resources/css/cssnr/style.blue.css';
    		document.head.appendChild(blue);
    	let linkdefault = document.createElement('link');
        	linkdefault.rel = 'stylesheet';
        	linkdefault.href = $.ctx()+'/resources/css/cssnr/style.default.css';
    		document.head.appendChild(linkdefault);
    	let green = document.createElement('link');
    		green.rel = 'stylesheet';
    		green.href = $.ctx()+'/resources/css/cssnr/style.green.css';
    		document.head.appendChild(green);
    	let pink = document.createElement('link');
    		pink.rel = 'stylesheet';
    		pink.href = $.ctx()+'/resources/css/cssnr/style.pink.css';
    		document.head.appendChild(pink);
    	let red = document.createElement('link');
    		red.rel = 'stylesheet';
    		red.href = $.ctx()+'/resources/css/cssnr/style.red.css';
    		document.head.appendChild(red);
    	let sea = document.createElement('link');
    		sea.rel = 'stylesheet';
    		sea.href = $.ctx()+'/resources/css/cssnr/style.sea.css';
    		document.head.appendChild(sea);
    	let violet = document.createElement('link');
    		violet.rel = 'stylesheet';
    		violet.href = $.ctx()+'/resources/css/cssnr/style.violet.css';
    		document.head.appendChild(violet);
    		let nrstyle = document.createElement('link');
    		nrstyle.rel = 'stylesheet';
    		nrstyle.href = $.ctx()+'/resources/css/cssnr/nrstyle.css';
    		document.head.appendChild(nrstyle);
    	
    	w.html(sideNav()+nav()+secCount()+secVisit());
    	
    	$('#visitBtn').click(()=>{
             alert('nr.home.visitBtn::');
             nr.init();
        });
    	$('#prefBtn').click(()=>{
            alert('nr.home.prefBtn::');
            w.empty();
            w.html(sideNav()+nav());
       });
    	$('#artistBtn').click(()=>{
            alert('nr.home.artistBtn::');
            w.empty();
       });
    	$('#hashBtn').click(()=>{
            alert('nr.home.hashBtn::');
            w.empty();
       });
    	
    };
	
    
	
	
	var sideNav =()=>'<!-- Side Navbar -->'
	+'<nav class="side-navbar">'
	  +'<div class="side-navbar-wrapper">'
	    +'<!-- Sidebar Header    -->'
	    +'<div class="sidenav-header d-flex align-items-center justify-content-center">'
	      +'<!-- User Info-->'
	      +'<div class="sidenav-header-inner text-center">'
	        +'<img src="'+$.img()+'/logo.png" alt="SoundLAB 로고" class="img-fluid rounded-circle">'
	        +'<h2 class="h5">SoundLAB</h2>'
	        +'<span>비고</span>'
	      +'</div>'
	      +'<!-- Small Brand information, appears on minimized sidebar-->'
	      +'<div class="sidenav-header-logo"><a href="index.html" class="brand-small text-center">' 
	        +'<strong>S</strong><strong class="text-primary">D</strong></a></div>'
	    +'</div>'
	    +'<!-- Sidebar Navigation Menus-->'
	    +'<div class="main-menu">'
	      +'<h5 class="sidenav-heading">MAIN</h5>'
	      +'<ul id="side-main-menu" class="side-menu list-unstyled">'                  
	        +'<li><a id="visitBtn" href="#"> <i class="icon-home"></i>방문통계</a></li>'
	        +'<li><a id="prefBtn" href="#"> <i class="fa fa-bar-chart"></i>선호도</a></li>'
	        +'<li><a id="artistBtn" href="#"> <i class="fa fa-bar-chart"></i>아티스트</a></li>'
	        +'<li><a id="hashBtn" href="#"> <i class="fa fa-bar-chart"></i>해시태그</a></li>'
	      +'</ul>'
	    +'</div>'
	  +'</div>'
	+'</nav>'
	;
	var nav =()=>'<div class="page">'
    +'<!-- navbar-->'
    +'<header class="header">'
      +'<nav class="navbar">'
        +'<div class="container-fluid">'
          +'<div class="navbar-holder d-flex align-items-center justify-content-between">'
            +'<div class="navbar-header"><a id="toggle-btn" href="#" class="menu-btn"><i class="icon-bars"></i></a>' 
            +'<a href="index.html" class="navbar-brand">'
                +'<div class="brand-text d-none d-md-inline-block"><span>ADMIN </span><strong class="text-primary">SoundLAB</strong></div></a></div>'
            +'<ul class="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">'
             
            +'<!-- Log out-->'
              +'<li class="nav-item"><a href="#" class="nav-link logout">' 
                +'<span class="d-none d-sm-inline-block">Logout</span><i class="fa fa-sign-out"></i></a></li>'
            +'</ul>'
          +'</div>'
        +'</div>'
      +'</nav>'
    +'</header>';
    var secCount =()=> '<!-- Counts Section -->'
    +'<section class="dashboard-counts section-padding">'
    +'<div class="container-fluid">'
      +'<div class="row">'
        +'<!-- Count item widget-->'
        +'<div class="col-xl-2 col-md-4 col-6">'
          +'<div class="wrapper count-title d-flex">'
            +'<div class="icon"><i class="icon-user"></i></div>'
            +'<div class="name"><strong class="text-uppercase">New Clients</strong><span>새로운 고객 수</span>'
              +'<div class="count-number">25</div>'
            +'</div>'
          +'</div>'
        +'</div>'
        
      +'</div>'
    +'</div>'
  +'</section>';
    
  var secVisit=()=>{
    	return '<!-- Header Section-->'
        +'<section class="dashboard-header section-padding">'
        +'<div class="container-fluid">'
          +'<div class="row d-flex align-items-md-stretch">'
            +'<!-- Line Chart -->'
            +'<div class="col-lg-6 col-md-12 flex-lg-last flex-md-first align-self-baseline">'
              +'<div class="card sales-report">'
                +'<h2 class="display h4">방문자 통계</h2>'
                +'<p> 차트를 입력해주세요 </p>'
                +'<div class="line-chart">'
                  +'<canvas id="lineCahrt"></canvas>'
                +'</div>'
              +'</div>'
            +'</div>'
          +'</div>'
        +'</div>'
      +'</section>';
  }; 
	return {
		init : init
	};
})();


