package com.soundlab.web.dummy;


import java.util.Map;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;




@RestController
@RequestMapping("/view")
public class DummyCtrl {
	static final Logger logger = LoggerFactory.getLogger(DummyCtrl.class);
	@Autowired Map<String,Object> rm;
	@Autowired DummyMapper dp;

	@GetMapping("/dummy")
	public Map<String,Object> dummy() {
		logger.info("DummyCtrl ::: dummy ");
		rm.clear();
		rm.put("memberId", "shin");
		rm.put("seq", 75);
		rm.put("element", "music");
		for(int i=0;i<70;i++) {
			dp.post(rm);
		}
		/*75int[] lst = {  57  
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
				  ,74
				  ,75
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
				  ,89
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
				 ,125};
		for(int s=0;s<67;s++) {
			rm.put("seq", lst[s]);
			for(int i=0;i<s+1;i++) {
				dp.post(rm);
			}
		}*/
		
		return rm;
	}
}
