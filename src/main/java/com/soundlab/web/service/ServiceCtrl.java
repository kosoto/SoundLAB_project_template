package com.soundlab.web.service;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.soundlab.web.bean.*;
import com.soundlab.web.cmm.Util;
import com.soundlab.web.service.ServiceCtrl;


@RestController
@RequestMapping("/service")
public class ServiceCtrl {
	static final Logger logger = LoggerFactory.getLogger(ServiceCtrl.class);
	@Autowired Map<String, Object> map;
	@Autowired ServiceMapper sm;
	@Autowired artist at;
	
	
	@GetMapping("/search/{artist}")
	public Map<String,Object> search(@PathVariable String artist){
		logger.info("ServiceCtrl ::: search");
		Util.log.accept("아티스트이름::"+artist);     
		map.clear();
		at = sm.getArtist(artist);
		List<music> music = sm.musicList(at.getArtistSeq());
		List<album> album = sm.albumList(at.getArtistName());
		System.out.println(music);
		System.out.println(at);
		System.out.println(album);
		
		map.put("artist", at);
		map.put("music", music);
		map.put("album", album);
	
		return map;
	}
	/*@GetMapping("/artist/{music}")
	public Map<String,Object> music(@PathVariable String music){
		logger.info("ServiceCtrl ::: music");
	
	
		return map;
	}
	*/
	@GetMapping("/player")
	public Map<String,Object> player(){
		logger.info("ServiceCtrl ::: player");
		return map;
	}
}
