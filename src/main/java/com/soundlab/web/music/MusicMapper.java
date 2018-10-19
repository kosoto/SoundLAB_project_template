package com.soundlab.web.music;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public interface MusicMapper {
	 public List<Map<String,Object>> realChart(HashMap<String, Object> map);
	 public List<Map<String,Object>> dayChart();
	 public List<Map<String,Object>> weekChart();
}
