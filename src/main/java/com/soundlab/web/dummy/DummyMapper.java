package com.soundlab.web.dummy;

import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface DummyMapper {
	public void post(Map<?,?> p);
}
