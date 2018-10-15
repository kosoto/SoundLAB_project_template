package com.soundlab.web.mbr;

import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface MemberMapper {
	public void post(Map<?,?> p);
	public void upGenre(Map<?,?> p);
	public void upArtist(Map<?,?> p);
	public Map<String,Object> get(Map<?,?> p);
	public int count(Map<?,?> p);
}
