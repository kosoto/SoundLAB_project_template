package com.soundlab.web.dj;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.soundlab.web.bean.article;

@Repository
public interface ArticleMapper {
	public List<article> get(Map<String, Object> p);
}
