package com.soundlab.web.music;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.soundlab.web.bean.music;
import com.soundlab.web.cmm.Util;



@RestController
@RequestMapping("/music")
public class MusicCtrl {
	static final Logger logger = LoggerFactory.getLogger(MusicCtrl.class);
	@Autowired com.soundlab.web.bean.music music;
	@Autowired MusicMapper musMapper;
	@Autowired HashMap<String, Object> map;
	@GetMapping("/top50")
	private @ResponseBody Map<String, Object> top50() {
	/*	Util.log.accept(":: MusicCtrl :: list() :: page :: " );
		map.put("realChart", musMapper.getRealChart(map));
		Util.log.accept("mapper넘어온값" + map.get("realChart"));*/
		
		return map;
		
	}
}
