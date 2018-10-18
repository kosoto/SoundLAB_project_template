package com.soundlab.web.bean;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import lombok.Data;

@Component
@Lazy
@Data
public class artist {
	private int artistSeq;
	private String artistName, sex, birth, debut, nation, groupName,intro1, intro2;
}
