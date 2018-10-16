package com.soundlab.web.bean;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import lombok.Data;

@Component
@Lazy
@Data
public class album {
	private int albumSeq;
	private String albumTitle, agencyName, releaseDate, albumType, artistName, albumGenre, intro;
}
