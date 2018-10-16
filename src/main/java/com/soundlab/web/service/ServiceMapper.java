package com.soundlab.web.service;

import org.springframework.stereotype.Repository;

import com.soundlab.web.bean.artist;

@Repository
public interface ServiceMapper {
	public artist getArtist(artist at);
}
