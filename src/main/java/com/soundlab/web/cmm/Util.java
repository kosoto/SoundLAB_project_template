package com.soundlab.web.cmm;

import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;

import javax.servlet.http.HttpServletRequest;

public class Util {
	public static Consumer<Integer> logi = System.out::println;
	public static Consumer<String> log = System.out::println;
	public static Function<String, Integer> convInt = Integer::parseInt;
	//public static Function<HttpServletRequest, String> ctx = r -> r.getContextPath();
	public static Function<HttpServletRequest, String> ctx = HttpServletRequest::getContextPath;
	public static Predicate<String> isNull = s -> s.equals("");
	public static Predicate<String> notNull = isNull.negate();
}
