package com.soundlab.web.service;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.soundlab.web.service.ServiceCtrl;


@RestController
@RequestMapping("/service")
public class ServiceCtrl {
	static final Logger logger = LoggerFactory.getLogger(ServiceCtrl.class);
	@Autowired Map<String, Object> map;
	
	@GetMapping("/search")
	public Map<String,Object> search(){
		logger.info("ServiceCtrl ::: search");
		return map;
	}
	
	@GetMapping("/player")
	public Map<String,Object> player(){
		logger.info("ServiceCtrl ::: player");
		return map;
	}
}
