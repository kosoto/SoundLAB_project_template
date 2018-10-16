package com.soundlab.web.bean;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import lombok.Data;

@Component
@Lazy
@Data
public class updown {
	private int udSeq, seqGroup;
	private String memberId, sgElement, TYPES;
}
