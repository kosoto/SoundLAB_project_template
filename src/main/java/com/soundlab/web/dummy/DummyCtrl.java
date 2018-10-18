package com.soundlab.web.dummy;


import java.util.Map;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;




@RestController
@RequestMapping("/dummy")
public class DummyCtrl {
	static final Logger logger = LoggerFactory.getLogger(DummyCtrl.class);
	@Autowired Map<String,Object> rm;
	@Autowired DummyMapper dp;
	
	@GetMapping("/view")
	public Map<String,Object> view(){
		logger.info("DummyCtrl ::: view ");
		rm.clear();
		String[] mems = {
				"libero","varius",
				"libero","varius",
				"ornare","justo",
				"ornare","justo",
				"ornare","justo",
				"velit","massa",
				"velit","massa",
				"nulla","lorem"
		};
		/* 74 | IDOL
	     75 | I`m Fine
	     76 | Euphoria
	    133 | FAKE LOVE
	    134 | 전하지 못한 진심 (Feat. Steve Aoki)
	    135 | Anpanman
	    136 | Airplane pt.2
	    137 | DNA
	    138 | MIC Drop
	    139 | 고민보다 Go
	    140 | Best Of Me
	    141 | 봄날
	    142 | Not Today
	    143 | Lost
	    144 | BTS Cypher 4
	    145 | 피 땀 눈물
	    146 | Am I Wrong
	    147 | 21세기 소녀
	    148 | 둘! 셋! (그래도 좋은 날이 더 많기를)
	    149 | 불타오르네 (FIRE)
	    150 | Save ME
	    151 | EPILOGUE : Young Forever
	    152 | RUN
	    153 | Butterfly
	    154 | Whalien 52
	    155 | 뱁새
	    156 | I NEED U
	    157 | 쩔어
	    158 | 흥탄소년단
	    159 | 잡아줘 (Hold Me Tight)
	    30곡*/
		int[] bangmusics = { 74,
				75,
			    76,
			   133,
			   134,
			   135,
			   136,
			   137,
			   138,
			   139,
			   140,
			   141,
			   142,
			   143,
			   144,
			   145,
			   146,
			   147,
			   148,
			   149,
			   150,
			   151,
			   152,
			   153,
			   154,
			   155,
			   156,
			   157,
			   158,
			   159};
		
		for(int i=0;i<1000;i++) {
			int memIndex = (int)(Math.random()*16);
			int	bangmusicIndex = (int)(Math.random()*30);
			rm.put("memberId", mems[memIndex]);
			rm.put("seq", bangmusics[bangmusicIndex]);
			dp.bangRecord(rm);
		}
		
		return rm;
	}
	
	
	@GetMapping("/updown")
	public Map<String,Object> updown(){
		logger.info("DummyCtrl ::: updown ");
		rm.clear();
		/*8명*/
		String[] mems = {
			"libero","varius",
			"libero","varius",
			"ornare","justo",
			"ornare","justo",
			"ornare","justo",
			"velit","massa",
			"velit","massa",
			"nulla","lorem"
		};
	
				
		int[] genres = {1,2,3,6,32};
		
		int[] artists = {11,19,20};
		
		
	    /* 74 | IDOL
	     75 | I`m Fine
	     76 | Euphoria
	    133 | FAKE LOVE
	    134 | 전하지 못한 진심 (Feat. Steve Aoki)
	    135 | Anpanman
	    136 | Airplane pt.2
	    137 | DNA
	    138 | MIC Drop
	    139 | 고민보다 Go
	    140 | Best Of Me
	    141 | 봄날
	    142 | Not Today
	    143 | Lost
	    144 | BTS Cypher 4
	    145 | 피 땀 눈물
	    146 | Am I Wrong
	    147 | 21세기 소녀
	    148 | 둘! 셋! (그래도 좋은 날이 더 많기를)
	    149 | 불타오르네 (FIRE)
	    150 | Save ME
	    151 | EPILOGUE : Young Forever
	    152 | RUN
	    153 | Butterfly
	    154 | Whalien 52
	    155 | 뱁새
	    156 | I NEED U
	    157 | 쩔어
	    158 | 흥탄소년단
	    159 | 잡아줘 (Hold Me Tight)
	    30곡*/
		int[] bangmusics = { 74,
				75,
			    76,
			   133,
			   134,
			   135,
			   136,
			   137,
			   138,
			   139,
			   140,
			   141,
			   142,
			   143,
			   144,
			   145,
			   146,
			   147,
			   148,
			   149,
			   150,
			   151,
			   152,
			   153,
			   154,
			   155,
			   156,
			   157,
			   158,
			   159};
		
		 /*116 | Dance The Night Away
		 117 | CHILLAX
		 118 | Shot thru the heart
		 119 | What is Love?
		 120 | HO!
		 121 |  SWEET TALKER?
		 177 | CHEER UP
		 178 | KNOCK KNOCK
		 179 | LIKEY
		 180 | Heart Shaker
		 181 | TT
		 11곡*/
		int[] twicemusics = {   116,
				   117,
				   118,
				   119,
				   120,
				   121,
				   177,
				   178,
				   179,
				   180,
				   181 };
		
		 /*105 | Power Up
		 106 | 한 여름의 크리스마스
		 107 | Mr. E
		 108 | Mosquito
		 109 | Hit That Drum
		 182 | 빨간 맛 (Red Flavor)
		 183 | Bad Boy
		 184 | 러시안 룰렛 (Russian Roulette)
		 185 | Rookie
		 186 | Ice Cream Cake
		 10곡*/
		int[] revelmusics = {
				 105,
				 106,
				 107,
				 108,
				 109,
				 182,
				 183,
				 184,
				 185,
				 186	
		};
		
		//장르업
		/*for(int i=0;i<100;i++) {
			int memIndex = (int)(Math.random()*16);
			int genreIndex = (int)(Math.random()*5);
			rm.put("memberId", mems[memIndex]);
			rm.put("seq", genres[genreIndex]);
			dp.genreUp(rm);
		}*/
		//아티스트업
		/*for(int i=0;i<50;i++) {
			int memIndex = (int)(Math.random()*16);
			int artistIndex = (int)(Math.random()*3);
			rm.put("memberId", mems[memIndex]);
			rm.put("seq", artists[artistIndex]);
			dp.artistUp(rm);
		}*/
		//아티스트다운
				/*for(int i=0;i<100;i++) {
					int memIndex = (int)(Math.random()*16);
					int artistIndex = (int)(Math.random()*3);
					rm.put("memberId", mems[memIndex]);
					rm.put("seq", artists[artistIndex]);
					dp.artistDown(rm);
				}*/
		//방탄뮤직업
		/*for(int i=0;i<300;i++) {
			int memIndex = (int)(Math.random()*16);
			int	bangmusicIndex = (int)(Math.random()*30);
			rm.put("memberId", mems[memIndex]);
			rm.put("seq", bangmusics[bangmusicIndex]);
			dp.musicUp(rm);
		}*/
		//방탄뮤직다운
		/*for(int i=0;i<100;i++) {
			int memIndex = (int)(Math.random()*16);
			int	bangmusicIndex = (int)(Math.random()*30);
			rm.put("memberId", mems[memIndex]);
			rm.put("seq", bangmusics[bangmusicIndex]);
			dp.musicDown(rm);
		}*/
		
		//트와이스뮤직업
		/*for(int i=0;i<100;i++) {
			int memIndex = (int)(Math.random()*16);
			int	twicemusicIndex = (int)(Math.random()*11);
			rm.put("memberId", mems[memIndex]);
			rm.put("seq", twicemusics[twicemusicIndex]);
			dp.musicUp(rm);
		}*/
		//트와이스뮤직다운
		/*for(int i=0;i<50;i++) {
			int memIndex = (int)(Math.random()*16);
			int	twicemusicIndex = (int)(Math.random()*11);
			rm.put("memberId", mems[memIndex]);
			rm.put("seq", twicemusics[twicemusicIndex]);
			dp.musicDown(rm);
		}*/
		//레벨뮤직업
		/*for(int i=0;i<100;i++) {
			int memIndex = (int)(Math.random()*16);
			int	revelmusicIndex = (int)(Math.random()*10);
			rm.put("memberId", mems[memIndex]);
			rm.put("seq", revelmusics[revelmusicIndex]);
			dp.musicUp(rm);
		}*/
		//레벨뮤직다운
		/*for(int i=0;i<50;i++) {
			int memIndex = (int)(Math.random()*16);
			int	revelmusicIndex = (int)(Math.random()*10);
			rm.put("memberId", mems[memIndex]);
			rm.put("seq", revelmusics[revelmusicIndex]);
			dp.musicDown(rm);
		}
		*/
		
		return rm;
	}
	
	@GetMapping("/chart")
	public Map<String,Object> chart() {
		logger.info("DummyCtrl ::: chart ");
		rm.clear();
		/*rm.put("memberId", "shin");
		rm.put("seq", 75);
		rm.put("element", "music");
		for(int i=0;i<70;i++) {
			dp.post(rm);
		}*/
		/*75
		 */ 
		int[] lst = {  57  
				  ,58
				  ,59
				  ,62
				  ,63
				  ,64
				  ,65
				  ,66
				  ,67
				  ,68
				  ,69
				  ,70
				  ,71
				  ,72
				  ,73
				  ,76
				  ,77
				  ,78
				  ,79
				  ,80
				  ,81
				  ,82
				  ,83
				  ,84
				  ,85
				  ,86
				  ,87
				  ,88
				  ,90
				  ,91
				  ,92
				  ,93
				  ,94
				  ,95
				  ,96
				  ,97
				  ,98
				  ,99
				 ,100
				 ,101
				 ,102
				 ,103
				 ,104
				 ,105
				 ,106
				 ,107
				 ,108
				 ,109
				 ,110
				 ,111
				 ,112
				 ,113
				 ,114
				 ,115
				 ,116
				 ,117
				 ,118
				 ,119
				 ,120
				 ,121
				 ,122
				 ,123
				 ,124
				 ,125
				 ,89
				 ,74
				 ,75};
		rm.put("memberId", "shin");
		for(int s=0;s<67;s++) {
			rm.put("seq", lst[s]);
			for(int i=0;i<s+1;i++) {
				dp.post(rm);
			}
		}
		
		return rm;
	}
}
