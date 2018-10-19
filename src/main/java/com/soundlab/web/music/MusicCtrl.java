package com.soundlab.web.music;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.soundlab.web.cmm.Util;



@RestController
@RequestMapping("/music")
public class MusicCtrl {
	static final Logger logger = LoggerFactory.getLogger(MusicCtrl.class);
	@Autowired com.soundlab.web.bean.music music;
	@Autowired MusicMapper musMapper;
	@Autowired HashMap<String, Object> map;
	@GetMapping("/top50/{x}")
	private @ResponseBody List<Map<String, Object>> top50(@PathVariable String x) {
		Util.log.accept(":: MusicCtrl :: list() :: page :: " );
		System.out.println(x);
	
		List<Map<String, Object>> topList = null;
		Date now=new Date();
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
        String todayDate= df.format(now);
		System.out.println(todayDate);
		String a =todayDate+"%";
		if(x.equals("realChart") ) {			
			 map.put("todayDate",a);
			 topList = musMapper.realChart(map);			
				Util.log.accept("실시간차트성공" );
		
				Util.log.accept("todayDate"+map.get("todayDate") );
				Util.log.accept("topList"+topList );
			 
		}else if (x.equals("dayChart")){
			 topList = musMapper.dayChart();
			 System.out.println("데이성공");
		}else if (x.equals("weekChart") ){
			 topList = musMapper.weekChart();
			 System.out.println("위크성공");
		}
		
		return topList;
	

		
	}
}
