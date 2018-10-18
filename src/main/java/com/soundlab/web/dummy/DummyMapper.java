package com.soundlab.web.dummy;

import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface DummyMapper {
	public void post(Map<?,?> p);
	public void genreUp(Map<?,?> p);
	public void artistUp(Map<?,?> p);
	public void artistDown(Map<?,?> p);
	public void musicUp(Map<?,?> p);
	public void musicDown(Map<?,?> p);
	public void bangRecord(Map<?,?> p);
	
}
