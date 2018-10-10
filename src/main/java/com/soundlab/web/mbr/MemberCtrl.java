package com.soundlab.web.mbr;

import java.util.HashMap;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/member")
public class MemberCtrl {
	static final Logger logger = LoggerFactory.getLogger(MemberCtrl.class);
	@Autowired HashMap<String,Object> rm;

	@GetMapping("/forYou")
	public Map<String,Object> forYou() {
		logger.info("MemberController ::: forYou ");
		rm.clear();
		return rm;
	}
	
	
	@PostMapping("/login")
	public Map<String,Object> login(@RequestBody Member mem) {
		logger.info("MemberController ::: login ");
		rm.clear();
		logger.info("memberId {} pass {} ",mem.getMemberId(),mem.getPass());
		rm.put("isAuth", true);
		rm.put("id", mem.getMemberId());
		return rm;
	}
	
}
