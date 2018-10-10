package com.soundlab.web.cmm;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@RequestMapping(value = "/", method = RequestMethod.GET)//get방식을 생략할수있고 생략하면 value도 생략할수있어
	public String home(Model model, HttpServletRequest request) {//request가 모델안에 있게된다.(pom.xml에서 정의된(전역으로) 모델이 돌아다닌다)
		logger.info("Hello SoundLAB home! :::: ");
		model.addAttribute("context", Util.ctx.apply(request));
		Util.log.accept("context ::: " +Util.ctx.apply(request));
		return "main";
	}
}
