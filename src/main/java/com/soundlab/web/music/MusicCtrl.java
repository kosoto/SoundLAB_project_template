package com.soundlab.web.music;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.soundlab.web.bean.music;



@RestController
@RequestMapping
public class MusicCtrl {
	static final Logger logger = LoggerFactory.getLogger(MusicCtrl.class);
	@Autowired music music;
	@Autowired MusicMapper musicMapper;
	
	@PostMapping("/top50")
	private @ResponseBody Map<String, Object> top50() {
		
		return null;
		
	}
}
