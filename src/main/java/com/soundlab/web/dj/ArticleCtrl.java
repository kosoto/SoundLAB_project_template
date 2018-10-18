package com.soundlab.web.dj;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.soundlab.web.cmm.Util;


@RestController
public class ArticleCtrl {
	@Autowired ArticleMapper am;
	@RequestMapping("/dj")
	public @ResponseBody Map<String, Object> getDj(Map<String, Object> p){
		Map<String, Object> map = new HashMap<>();
		Util.log.accept("DJ Playlist  페이지 입니다.");
		//map.put("list", am.get(p));
		return map;
	}
}
