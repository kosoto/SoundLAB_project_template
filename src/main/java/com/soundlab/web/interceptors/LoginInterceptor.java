package com.soundlab.web.interceptors;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;
import org.springframework.web.util.WebUtils;
@Aspect
public class LoginInterceptor extends HandlerInterceptorAdapter {
  private static final Logger logger = LoggerFactory.getLogger(LoginInterceptor.class);
  
  
  @Override
  public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
	logger.info("인터셉터 성공!@");
	Cookie loginCookie = WebUtils.getCookie(request, "loginID");
	boolean result = false;
	
	if(loginCookie == null) {
		logger.info("쿠키=null ::: 권한없음");
		response.sendError(401);
		logger.info("로그인하러 이동해라 :::");
		result = false;
	}else {
		logger.info("쿠키 값 :::: "+loginCookie.getValue());
		result = true;
	}
	
    return result;
  }

}