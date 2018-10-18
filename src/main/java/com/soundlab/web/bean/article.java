package com.soundlab.web.bean;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import lombok.Data;

@Component
@Lazy
@Data
public class article {
	private int articleSeq;
	private String memberId, boardSeq, title, contents, regidate, viewCnt, hash;
}
