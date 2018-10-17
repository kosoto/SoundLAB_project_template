package com.soundlab.web.service;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.soundlab.web.bean.artist;
import com.soundlab.web.cmm.Util;
import com.soundlab.web.service.ServiceCtrl;


@RestController
@RequestMapping("/service")
public class ServiceCtrl {
	static final Logger logger = LoggerFactory.getLogger(ServiceCtrl.class);
	@Autowired Map<String, Object> map;
	@Autowired ServiceMapper sm;
	@Autowired artist at;
	
	@GetMapping("/artist/{artistName}")
	public Map<String,Object> search(@PathVariable String artistName){
		logger.info("ServiceCtrl ::: search");
		Util.log.accept("검색한 아티스트::"+artistName);
		Util.log.accept("검색한 정보::");
		map.clear();
		map.put("artistName", artistName);
	
		
		
	
		
		return map;
	}
	
	@GetMapping("/player")
	public Map<String,Object> player(){
		logger.info("ServiceCtrl ::: player");
		return map;
	}
}
