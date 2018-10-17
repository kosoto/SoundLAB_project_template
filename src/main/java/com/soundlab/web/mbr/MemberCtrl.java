package com.soundlab.web.mbr;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.sf.json.JSONArray;



@RestController
@RequestMapping("/member")
public class MemberCtrl {
	static final Logger logger = LoggerFactory.getLogger(MemberCtrl.class);
	@Autowired Map<String,Object> rm;
	@Autowired MemberMapper mp;

	@GetMapping("/auth")
	public Map<String,Object> auth() {
		logger.info("MemberController ::: auth ");
		rm.clear();
		return rm;
	}
	
	
	@PostMapping("/login")
	public Map<String,Object> login(@RequestBody Map<String,Object> pm) {
		logger.info("MemberController ::: login ");
		rm.clear();
		logger.info("memberId {} pass {} ",pm.get("memberId"),pm.get("pass"));
		String valid = "아이디";
		rm.put("memberId", pm.get("memberId"));
		if(mp.count(rm) != 0) {
			valid="비밀번호";
			rm = mp.get(pm);
			if(rm != null) {
				valid = (rm.get("memberId").equals("admin"))?"admin":"user";
			}else {
				rm = new HashMap<>();
			}
		}
		
		rm.put("valid", valid);
		
		return rm;
	}
	
	@PostMapping("/join")
	@Transactional
	public Map<String,Object> join(@RequestBody Map<String,Object> pm) {
		logger.info("MemberController ::: join ");
		rm.clear();
		pm.put("genres", JSONArray.fromObject(pm.get("genres")));
		pm.put("artists", JSONArray.fromObject(pm.get("artists")));
		logger.info("memberId {} pass {} ",pm.get("memberId"),pm.get("pass"));
		String valid = "회원가입성공";
		logger.info("name {} nick {} ",pm.get("name"),pm.get("nick"));
		logger.info("ssn {} email {} ",pm.get("ssn"),pm.get("email"));
		logger.info("phone {} genres {} ",pm.get("phone"),pm.get("genres"));
		logger.info("artists {} sex {}",pm.get("artists"),pm.get("sex"));
		mp.post(pm);
		logger.info("MemberController ::: join :: post fin");
		mp.upGenre(pm);
		logger.info("MemberController ::: join :: upGenre fin");
		mp.upArtist(pm);
		logger.info("MemberController ::: join :: upArtist fin");
		
		
		rm.put("valid", valid);
		
		return rm;
	}
}
