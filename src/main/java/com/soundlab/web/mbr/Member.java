package com.soundlab.web.mbr;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
@Component
@Lazy
@Data
public class Member {
	private String memberId, pass, name, ssn, phone, nick, sex, email;
}
