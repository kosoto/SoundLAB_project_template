package com.soundlab.web.service;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.soundlab.web.bean.*;

@Repository
public interface ServiceMapper {
	public artist getArtist(String s);
	public List<music> musicList(int a);
	public List<album> albumList(String album);
}
