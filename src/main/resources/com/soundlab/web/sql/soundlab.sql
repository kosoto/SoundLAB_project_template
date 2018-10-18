create table BOARD(
    bno INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    content TEXT NULL,
    writer VARCHAR(50) NOT NULL,
    regdate TIMESTAMP NOT NULL DEFAULT now(),
    viewcnt INT DEFAULT 0,
    PRIMARY KEY (bno)
);

CREATE SEQUENCE mseq START WITH 1 INCREMENT BY 1;


CREATE TABLE MASTER_SEQ(
	seq INT AUTO_INCREMENT PRIMARY KEY,
	seq_name VARCHAR(20) 
);





INSERT INTO BOARD
( title, content, writer, regdate, viewcnt)
VALUES
('라이언조스','바다의 왕 상어무리 아기상어','Abhaig','2017-08-02',
	(SELECT seq
	FROM MASTER_SEQ)
);
UPDATE MASTER_SEQ
SET seq = seq + 1;





INSERT INTO MASTER_SEQ(
	seq_name
)
VALUES(
	'seq'
);
SELECT seq
FROM MASTER_SEQ;



CREATE SEQUENCE ISEQ
        START WITH 1000
        INCREMENT BY 1;

CREATE TABLE IMAGE(
    IMG_SEQ DECIMAL PRIMARY KEY,
    IMGNAME VARCHAR(20),
    EXTENSION VARCHAR(10),
    USERID VARCHAR(20)
);
INSERT INTO IMAGE(IMG_SEQ,IMGNAME,EXTENSION,USERID)
VALUES(ISEQ.NEXTVAL,'','','');


<!-- ERD -- 테이블 --> 
create table ALBUM(
    ALBUM_SEQ INT PRIMARY KEY,
    ALBUM_TITLE VARCHAR(20) NOT NULL,
    INTRO VARCHAR(200),
    AGENCY_NAME VARCHAR(20),
    RELEASE_DATE VARCHAR(20),
    ALBUM_TYPE VARCHAR(20),
    ARTIST_NAME VARCHAR(20),
    ALBUM_GENRE VARCHAR(20)
);



create table MUSIC_GENRE(
    GENRE_SEQ INT PRIMARY KEY,
    GENRE VARCHAR(20) NOT NULL
);


create table ARTIST(
    ARTIST_SEQ INT PRIMARY KEY,
    ARTIST_NAME VARCHAR(20) NOT NULL,
    SEX VARCHAR(10),
    BIRTH VARCHAR(20),
    DEBUT VARCHAR(20),
    NATION VARCHAR(20),
    GROUP_NAME VARCHAR(20)
);

create table IMG(
    IMG_SEQ INT AUTO_INCREMENT PRIMARY KEY,
    IMG_NAME VARCHAR(20) ,
    EXT VARCHAR(10),
    SEQ INT
);

create table MV(
    MV_SEQ INT PRIMARY KEY,
    MV_TITLE VARCHAR(20) NOT NULL,
    MUSIC_SEQ INT,
    RELEASE_DATE VARCHAR(20)
);

ALTER TABLE MV ADD CONSTRAINT MV_FK_MUSIC_SEQ FOREIGN KEY (MUSIC_SEQ) REFERENCES MUSIC(MUSIC_SEQ);


create table MUSIC(
    MUSIC_SEQ INT PRIMARY KEY,
    MUSIC_TITLE VARCHAR(20) NOT NULL,
    ALBUM_SEQ INT,
    ARTIST_SEQ INT,
    GENRE_SEQ INT,
    LYRICS TEXT,
    PLAYTIME VARCHAR(20),
    RELEASE_DATE VARCHAR(20)
);

ALTER TABLE MUSIC ADD CONSTRAINT MUSIC_FK_ALBUM_SEQ FOREIGN KEY (ALBUM_SEQ) REFERENCES ALBUM(ALBUM_SEQ);
ALTER TABLE MUSIC ADD CONSTRAINT MUSIC_FK_ARTIST_SEQ FOREIGN KEY (ARTIST_SEQ) REFERENCES ARTIST(ARTIST_SEQ);
ALTER TABLE MUSIC ADD CONSTRAINT MUSIC_FK_GENRE_SEQ FOREIGN KEY (GENRE_SEQ) REFERENCES MUSIC_GENRE(GENRE_SEQ);



create table PLAYLIST(
    PL_SEQ INT PRIMARY KEY,
    MEMBER_ID VARCHAR(20) NOT NULL,
    MUSIC_SEQ INT,
    PL_TITLE VARCHAR(20),
    REGI_DATE TIMESTAMP NOT NULL DEFAULT now()
);

ALTER TABLE PLAYLIST ADD CONSTRAINT PLAYLIST_FK_MEMBER_ID FOREIGN KEY (MEMBER_ID) REFERENCES MEMBER(MEMBER_ID);
ALTER TABLE PLAYLIST ADD CONSTRAINT PLAYLIST_FK_MUSIC_SEQ FOREIGN KEY (MUSIC_SEQ) REFERENCES MUSIC(MUSIC_SEQ);



create table VIEW_RECORD(
    VIEW_SEQ INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    MEMBER_ID VARCHAR(20) NOT NULL,
    SEQ_GROUP INT,
    SG_ELEMENT VARCHAR(10),
    VIEW_DATE TIMESTAMP NOT NULL DEFAULT now()
);

ALTER TABLE VIEW_RECORD ADD CONSTRAINT VIEW_RECORD_FK_MEMBER_ID FOREIGN KEY (MEMBER_ID) REFERENCES MEMBER(MEMBER_ID);

create table MEMBER(
    MEMBER_ID VARCHAR(20) PRIMARY KEY,
    PASS VARCHAR(20) NOT NULL,
    NAME VARCHAR(20),
    BIRTH VARCHAR(20),
    PHONE VARCHAR(20),
    NICK VARCHAR(20),
    SEX VARCHAR(20),
    E_MAIL VARCHAR(30)
);

create table UPDOWN(
    UD_SEQ INT AUTO_INCREMENT PRIMARY KEY,
    MEMBER_ID VARCHAR(20) NOT NULL,
    SEQ_GROUP INT,
    SG_ELEMENT VARCHAR(10),
    TYPES VARCHAR(10)
);



ALTER TABLE UPDOWN ADD CONSTRAINT UPDOWN_FK_MEMBER_ID FOREIGN KEY (MEMBER_ID) REFERENCES MEMBER(MEMBER_ID);

create table KAKAO(
    MEMBER_ID VARCHAR(20) PRIMARY KEY,
    KAKAO_ID VARCHAR(20) NOT NULL,
    KAKAO_PASS VARCHAR(20) NOT NULL
);

ALTER TABLE KAKAO ADD CONSTRAINT KAKAO_FK_MEMBER_ID FOREIGN KEY (MEMBER_ID) REFERENCES MEMBER(MEMBER_ID);

create table ARTICLE(
    ARTICLE_SEQ INT PRIMARY KEY,
    MEMBER_ID VARCHAR(20) NOT NULL,
    BOARD_SEQ INT,
    TITLE VARCHAR(50),
    CONTENTS TEXT,
    PLAYTIME VARCHAR(20),
    REGI_DATE TIMESTAMP NOT NULL DEFAULT now(),
    VIEW_CNT INT DEFAULT 0
);

ALTER TABLE ARTICLE ADD CONSTRAINT ARTICLE_FK_MEMBER_ID FOREIGN KEY (MEMBER_ID) REFERENCES MEMBER(MEMBER_ID);
ALTER TABLE ARTICLE ADD CONSTRAINT ARTICLE_FK_BOARD_SEQ FOREIGN KEY (BOARD_SEQ) REFERENCES BOARD(BOARD_SEQ);

create table BOARD(
    BOARD_SEQ INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    BOARD_NAME VARCHAR(20) NOT NULL
);

ALTER TABLE ARTICLE CHANGE CONTENTS CONTENTS VARCHAR(50);
ALTER TABLE ARTICLE CHANGE PLAYTIME HASH VARCHAR(50);
ALTER TABLE ARTICLE CHANGE REGI_DATE REGIDATE TIMESTAMP DEFAULT now();
ALTER TABLE ARTICLE DROP COLUMN REGIDATE;
ALTER TABLE ARTICLE ADD COLUMN REGI_DATE TIMESTAMP DEFAULT now();

INSERT INTO BOARD(BOARD_NAME) VALUES('DJ');




CREATE TABLE HASHTAG(
	HASHTAG_SEQ INT AUTO_INCREMENT PRIMARY KEY,
	HASH VARCHAR(20)
);

<!-- 신나는,차분한,어쿠스틱,트로피칼,부드러운,드라이브,휴식,편집숍/카페,헬스,클럽,스트레스,이별,사랑/고백,새벽감성,위로, -->
INSERT INTO HASHTAG(HASH) VALUES('신나는'),('차분한'),('어쿠스틱'),('트로피칼'),('부드러운'),('드라이브'),('휴식'),('편집숍/카페'),('헬스'),('클럽'),('스트레스'),('이별'),('사랑/고백'),('새벽감성'),('위로');



CREATE TABLE login_record(
	LR_SEQ INT AUTO_INCREMENT PRIMARY KEY,
	MEMBER_ID VARCHAR(20),
	SEX VARCHAR(20),
	LOGIN_DATE TIMESTAMP DEFAULT now()
);


INSERT INTO MEMBER(
	MEMBER_ID, PASS, NAME, BIRTH, PHONE, NICK, SEX, E_MAIL
)
VALUES(
	'shin', '1111', '신승호', '920807', '01033650158', '사운드랩', '남', 'kanu0158@naver.com'
);


INSERT INTO MEMBER(
	MEMBER_ID, PASS, NAME, BIRTH, PHONE, NICK, SEX, E_MAIL
)
VALUES(
	'admin', 'admin', '관리자', '181013', '01012345678', '관리자', '남', 'admin@soundlab.com'
);




INSERT INTO MUSIC_GENRE(
	GENRE_SEQ, GENRE
)
VALUES(
	1, '발라드'
);

INSERT INTO MUSIC_GENRE(
	GENRE_SEQ, GENRE
)
VALUES(
	2, '힙합'
);

INSERT INTO MUSIC_GENRE(
	GENRE_SEQ, GENRE
)
VALUES(
	3, '댄스'
);

INSERT INTO MUSIC_GENRE(
	GENRE_SEQ, GENRE
)
VALUES(
	4, '트로트'
);

INSERT INTO MUSIC_GENRE(
	GENRE_SEQ, GENRE
)
VALUES(
	5, '일렉트로닉'
);

INSERT INTO MUSIC_GENRE(
	GENRE_SEQ, GENRE
)
VALUES(
	6, '알앤비소울'
);
INSERT INTO MUSIC_GENRE(
	GENRE_SEQ, GENRE
)
VALUES(
	32, '포크'
);


ALTER TABLE ARTIST DROP COLUMN ARTIST_TYPE;

INSERT INTO Artist(
	ARTIST_SEQ, ARTIST_NAME, SEX, BIRTH, DEBUT, NATION, GROUP_NAME
)
VALUES(
	7, '선미', '여', '920502', '201308', '대한민국', '솔로'
);

INSERT INTO Artist(
	ARTIST_SEQ, ARTIST_NAME, SEX, BIRTH, DEBUT, NATION, GROUP_NAME
)
VALUES(
	8, '빈지노', '남', '870912', '201207', '대한민국', '솔로'
);

INSERT INTO Artist(
	ARTIST_SEQ, ARTIST_NAME, SEX, BIRTH, DEBUT, NATION, GROUP_NAME
)
VALUES(
	9, '아이유', '여', '930516', '200809', '대한민국', '솔로'
);
INSERT INTO Artist(
	ARTIST_SEQ, ARTIST_NAME, SEX, BIRTH, DEBUT, NATION, GROUP_NAME
)
VALUES(
	10, '임창정', '남', '731130', '199504', '대한민국', '솔로'
);
INSERT INTO Artist(
	ARTIST_SEQ, ARTIST_NAME, SEX, BIRTH, DEBUT, NATION, GROUP_NAME
)
VALUES(
	11, '방탄소년단', '남', '130612', '201306', '대한민국', '그룹'
);
INSERT INTO Artist(
	ARTIST_SEQ, ARTIST_NAME, SEX, BIRTH, DEBUT, NATION, GROUP_NAME
)
VALUES(
	12, '에이핑크', '여', '110419', '201104', '대한민국', '그룹'
);

INSERT INTO Artist(
	ARTIST_SEQ, ARTIST_NAME, SEX, BIRTH, DEBUT, NATION, GROUP_NAME
)
VALUES(
	13, '로꼬', '남', '891225', '201209', '대한민국', '솔로'
);
INSERT INTO Artist(
	ARTIST_SEQ, ARTIST_NAME, SEX, BIRTH, DEBUT, NATION, GROUP_NAME
)
VALUES(
	14, '바이브', '남', '020201', '20020201', '대한민국', '그룹'
);
INSERT INTO Artist(
	ARTIST_SEQ, ARTIST_NAME, SEX, BIRTH, DEBUT, NATION, GROUP_NAME
)
VALUES(
	15, '아이콘', '남', '150915', '20150915', '대한민국', '그룹'
);
INSERT INTO Artist(
	ARTIST_SEQ, ARTIST_NAME, SEX, BIRTH, DEBUT, NATION, GROUP_NAME
)
VALUES(
	16, '로이킴', '남', '930703', '20121127', '대한민국', '솔로'
);
INSERT INTO Artist(
	ARTIST_SEQ, ARTIST_NAME, SEX, BIRTH, DEBUT, NATION, GROUP_NAME
)
VALUES(
	17, '폴킴', '남', '880211', '20140121', '대한민국', '솔로'
);
INSERT INTO Artist(
	ARTIST_SEQ, ARTIST_NAME, SEX, BIRTH, DEBUT, NATION, GROUP_NAME
)
VALUES(
	18, '블랙핑크', '여', '160808', '20160808', '대한민국', '그룹'
);
INSERT INTO Artist(
	ARTIST_SEQ, ARTIST_NAME, SEX, BIRTH, DEBUT, NATION, GROUP_NAME
)
VALUES(
	19, '트와이스', '여', '151020', '20151020', '대한민국', '그룹'
);
INSERT INTO Artist(
	ARTIST_SEQ, ARTIST_NAME, SEX, BIRTH, DEBUT, NATION, GROUP_NAME
)
VALUES(
	20, '레드벨벳', '여', '140804', '20140804', '대한민국', '그룹'
);
INSERT INTO Artist(
	ARTIST_SEQ, ARTIST_NAME, SEX, BIRTH, DEBUT, NATION, GROUP_NAME
)
VALUES(
	21, '10cm', '남', '830301', '20100401', '대한민국', '솔로'
);
INSERT INTO Artist(
	ARTIST_SEQ, ARTIST_NAME, SEX, BIRTH, DEBUT, NATION, GROUP_NAME
)
VALUES(
	22, '볼빨간사춘기', '여', '160422', '20160422', '대한민국', '그룹'
);

INSERT INTO Artist(
	ARTIST_SEQ, ARTIST_NAME, SEX, BIRTH, DEBUT, NATION, GROUP_NAME
)
VALUES(
	23, '마마무', '여', '140601', '20140601', '대한민국', '그룹'
);


INSERT INTO Artist(
	ARTIST_SEQ, ARTIST_NAME, SEX, BIRTH, DEBUT, NATION, GROUP_NAME
)
VALUES(
	24, '박원', '남', '100526', '20100526', '대한민국', '솔로'
);

INSERT INTO Artist(
	ARTIST_SEQ, ARTIST_NAME, SEX, BIRTH, DEBUT, NATION, GROUP_NAME
)
VALUES(
	25, '윤종신', '남', '691015', '19900501', '대한민국', '솔로'
);

INSERT INTO Artist(
	ARTIST_SEQ, ARTIST_NAME, SEX, BIRTH, DEBUT, NATION, GROUP_NAME
)
VALUES(
	26, '벤', '여', '910730', '20120901', '대한민국', '솔로'
);
INSERT INTO Artist(
	ARTIST_SEQ, ARTIST_NAME, SEX, BIRTH, DEBUT, NATION, GROUP_NAME
)
VALUES(
	27, '멜로망스', '남', '150310', '20150310', '대한민국', '그룹'
);
INSERT INTO Artist(
	ARTIST_SEQ, ARTIST_NAME, SEX, BIRTH, DEBUT, NATION, GROUP_NAME
)
VALUES(
	28, '먼데이키즈', '남', '051103', '20051103', '대한민국', '그룹'
);




create table ALBUM(
    ALBUM_SEQ INT PRIMARY KEY,
    ALBUM_TITLE VARCHAR(20) NOT NULL,
    INTRO VARCHAR(200),
    AGENCY_NAME VARCHAR(20),
    RELEASE_DATE VARCHAR(20),
    ALBUM_TYPE VARCHAR(20),
    ARTIST_NAME VARCHAR(20),
    ALBUM_GENRE VARCHAR(20)
);

DELETE FROM ALBUM
WHERE ALBUM_SEQ LIKE 42;

ALTER TABLE ALBUM CHANGE ALBUM_TITLE ALBUM_TITLE VARCHAR(50) NOT NULL;
ALTER TABLE ALBUM DROP COLUMN INTRO;
ALTER TABLE ALBUM ADD INTRO VARCHAR(2000);

INSERT INTO ALBUM(
	ALBUM_SEQ, ALBUM_TITLE, INTRO, AGENCY_NAME, RELEASE_DATE, ALBUM_TYPE, ARTIST_NAME, ALBUM_GENRE
)
VALUES(
	29, 
	'WARNING', 
'고혹적이며 때로는 파격적으로 음악과 무대를 해석해내며 가장 주목받는 독보적인 여성 솔로 아티스트로 확고한 위치에 오른 선미가 미니앨범 ‘WARNING(워닝)’을 발표한다. 선미의 미니앨범 ‘WARNING(워닝)’은 지난 해 8월 발표한 스페셜 에디션 ‘가시나(GASHINA)’와‘가시나’의 프리퀄(prequel)로서 올해 1월에 발표한 ‘주인공(HEROINE)’을 잇는 3부작 프로젝트의 마무리이자 그 완성인 앨범으로, 이로써 3부작 프로젝트는 ‘WARNING’, 즉 ‘경고’ 가 전체 테마였음을 알려주는 앨범이다. 또한 미니 앨범 ‘WARNING(워닝)’은 선미가 모든 트랙의 크레딧에 이름을 올리게 된 첫 앨범으로도 의미가 깊다. 16세의 나이로 그룹 ‘원더걸스’로 데뷔하여 10여년간 솔로 활동을 병행해 오면서 작사는 물론 작곡, 편곡 등 음악 작업에 참여하며 자신의 음악적 재능을 꾸준히 선보여온 선미는 이번 미니앨범 ‘WARNING(워닝)’의 전곡 작사 및 주요 수록곡의 작곡, 편곡 작업을 함께 하며 그녀가 가진 음악을 펼쳐냈다.
선미의 미니 앨범 ‘WARNING(워닝)’의 타이틀곡은 ‘사이렌(Siren)’으로, 선미가 작사하고, 작곡가Frants(프란츠)와 함께 공동 작곡했다. 이 곡은 3년 전에 선미와 Frants(프란츠)가 의기투합하여 만들었던 곡으로 당시 준비 중이었던 원더걸스의 앨범의 타이틀곡 후보로도 거론되었던 비하인드 스토리가 알려지며 정식 발표 전부터 화제를 모았다. 2018년의 ‘사이렌(Siren)’은 선미의 미니 앨범 ‘WARNING(워닝)’의 타이틀곡으로 낙점된 후, 곡 컨셉을 발전시켜 새롭게 재탄생되었다.',
'㈜메이크어스엔터테인먼트', '20180904', 'EP', '선미', '댄스'
);

INSERT INTO ALBUM(
	ALBUM_SEQ, ALBUM_TITLE, INTRO, AGENCY_NAME, RELEASE_DATE, ALBUM_TYPE, ARTIST_NAME, ALBUM_GENRE
)
VALUES(
	30, 
	'24:26', 
'Beenzino의 클래식 [2 4 : 2 6] 5주년 기념 리마스터 재발매!
 
2012년 여름에 발매되었던 Beenzino의 첫 솔로 앨범 [2 4 : 2 6]
 
[2 4 : 2 6]는 발매 직후 폭발적인 호응을 이끌어내며 Beenzino의 대표작으로 자리매김하였다.
 
[2 4 : 2 6]는 힙합 앨범으로써는 유례없는 성공을 거둠과 동시에 Beenzino를 세상에 널리 알린 작품이 되었으며, 5년이 지난 지금도 이 앨범의 영향력은 현재 진행형이다.
 
심지어 이 앨범의 CD 역시 그 인기가 식지 않아 지금까지도 번번이 품절 사태에 이르렀으니 한국 힙합 역사상 가장 사랑받는 앨범이 되었다고 해도 과언이 아닐 것이다. 이러한 [2 4 : 2 6]가 발매 5주년을 맞이하여 "5th Anniversary Remaster Edition"으로 돌아온다.
 
이번 리마스터 에디션은 세계적인 마스터링 엔지니어 Vlado Meller의 리마스터링을 거쳐 보다 향상된 사운드로 재탄생하였으며, 음반의 구성과 형태는 초판과 거의 동일하게 유지하여 원작의 감흥을 그대로 전한다.',
'ILLIONAIRE RECORDS', '20170711', 'EP', '빈지노', '힙합'
);

INSERT INTO ALBUM(
	ALBUM_SEQ, ALBUM_TITLE, INTRO, AGENCY_NAME, RELEASE_DATE, ALBUM_TYPE, ARTIST_NAME, ALBUM_GENRE
)
VALUES(
	31, 
	'삐삐', 
'아이유 디지털 싱글 [삐삐]
 
"모두들 안녕. 내 걱정은 마세요. 난 언제나 잘해 나갈 테니까"
 
올 해로 꼭 데뷔 10주년을 맞이한 아이유가 디지털 싱글 삐삐를 발표한다.
 
아이유의 10주년을 기념해 10월 10일 발표된 디지털 싱글 삐삐는, 아이유가 데뷔 이후 처음으로 도전하는 Alternative R&B 스타일의 곡으로, 관계에 있어 무례하게 선을 넘는 사람들에게 던지는 유쾌하고 간결한 경고의 메시지를 담고 있다. 타인을 자신만의 기준으로 통제하거나 규정짓지 않는, 동등하고 독립적인 개개인 간의 건강한 유대관계가 어느 때보다 중요시 되는 요즘, 지금을 사는 모든 현대인들의 이야기가 될 수 있는 곡이다.
 
클래식한 정통 발라드곡 미아를 통해 열여섯의 어린 나이로 데뷔한 아이유는, 지난 10년 간 장르의 경계를 뛰어넘는 음악적 역량과 한계를 모르는 다채로운 매력으로, 현 가요계에 유일무이한 뮤지션이자 아티스트로서 놀라운 성장을 거듭해왔다.
 
10년이라는 시간의 무게처럼 깊이 있는 싱어송라이터 겸 프로듀서로도 점차 진화하고 있는 아이유가, 직접 프로듀싱과 작사에 참여한 이번 싱글 삐삐는, 여전히 보여줄 것이 무궁무진한 그녀의 팔레트처럼 대중들로 하여금 아이유의 또 다른 10년을 기대케 해준다.',
'카카오엠', '20181010', '싱글', '아이유', '알앤비소울'
);

INSERT INTO ALBUM(
	ALBUM_SEQ, ALBUM_TITLE, INTRO, AGENCY_NAME, RELEASE_DATE, ALBUM_TYPE, ARTIST_NAME, ALBUM_GENRE
)
VALUES(
	33, 
	'꽃갈피 둘', 
'시간이 흘러도 바래지 않는, 소박하고 아름다운 추억의 흔적
아이유 두 번째 리메이크 앨범 [꽃갈피 둘]
 
오래된 서재에서 먼지를 털어내고 꺼내든 책 한 권. 한 장씩 책장을 넘기다 책갈피처럼 끼워진 빛바랜 네 잎 클로버나 꽃잎들을 발견할 때가 있다. 오래전 누군가가 마음을 담아 선물했을 소박하고 아름다운 흔적. 또 그 페이지마다 밑줄이 그어져있는 기억할 만한 글귀들. 이러한 꽃갈피는 요즘은 점점 잊혀 가고 있는 예전 아날로그 세대의 감성과 낭만을 보여주는 청년 문화의 상징 중 하나일지도 모른다.
 
아이유의 두 번째 리메이크 앨범인 [꽃갈피 둘]은 지난 2014년 첫 선을 보여 대중과 평단의 뜨거운 호평을 이끌어낸 리메이크 음반 [꽃갈피]의 연장선에 놓인 작품으로, 원곡에 담긴 아날로그 감성과 아이유 특유의 서정성이 마주한 스페셜 미니음반이다. 지난 [꽃갈피] 앨범과 마찬가지로 아이유 본인이 평소 아껴왔던 꽃갈피 같은 이전 세대의 음악들을 직접 선곡하였으며, 정재일, 고태영, 홍소진, 강이채, 적재, 임현제(혁오), 김성모, 정성하 등 폭넓은 세대와 장르의 뮤지션들과 협업하여, 원곡 고유의 정서 위에 아이유의 색채를 덧입히는 작업에 어느 때보다 섬세한 노력을 기울였다.
 
세대를 관통하는 추억의 노래들을 아이유의 순수한 음색으로 재해석해낸 [꽃갈피 둘]은, 시간이 흘러도 바래지 않는, 소박하고 아름다운 순간들을 되살려, 다시금 세대와 세대를 잇고 그 속에 진한 공감과 울림을 선사하며, 꽃갈피로써 추억의 선물, 그 자체가 되길 소망한다.',
'㈜페이브엔터테인먼트', '20170922', 'EP', '아이유', '발라드,댄스,포크'
);

INSERT INTO ALBUM(
	ALBUM_SEQ, ALBUM_TITLE, INTRO, AGENCY_NAME, RELEASE_DATE, ALBUM_TYPE, ARTIST_NAME, ALBUM_GENRE
)
VALUES(
	34, 
	'하루도 그대를 사랑하지 않은 적이 없었다', 
'14th Album [하루도 그대를 사랑하지 않은 적이 없었다]
 
믿고 듣는 가수, 만능 엔터테이너, 명품발라더, 가을 감성발라드 등 대한민국을 대표하는 국민가수 임창정, 9월 19일 14번쨰 정규앨범 [하루도 그대를 사랑하지 않은 적이 없었다] 발매!!
 
또 다시 사랑, 내가 저지른 사랑 등 연달아 히트치며 각종 음원 사이트 및 음악프로그램 1위를 차지하며 발표하는 곡마다 오랫동안 사랑 받아온 임창정이 작년 두 번째 미니앨범[그 사람을 아나요] 이후 2018 올 가을 약 1년 만에 정규 14집 하루도 그대를 사랑하지 않은 적이 없었다로 컴백한다.
 
임창정의 정규 14집의 타이틀 곡 "하루도 그대를 사랑하지 않은 적이 없었다"는 임창정 특유의 음색과 호소력 짙은 감성을 느낄 수 있는 임창정식 감성 발라드에 R&B, POP 장르들을 결합한 새로운 색깔의 발라드곡으로 그 동안 앨범 작업을 함께 해오며 히트곡을 탄생시킨 작곡가 멧돼지와 작곡가 신형섭이 의기투합해 만든 뉴 임창정표 발라드곡이 탄생했다.
 
또한 대한민국을 대표하는 세션 이태윤, 길은경, 정수완, 융스트링 팀이 참여 곡의 최고의 완성도를 높였으며 쓸쓸한 느낌의 어쿠스틱 기타가 곡의 전반부를 이끌어 가며 곡의 후반부에 나오는 아이리쉬 오케스트라의 연주와 임창정의 보컬이 완벽한 하모니를 통해 감성을 더욱 더 극대화 시킨 곡이다.
 
이 밖에도 이야기하듯 노래하는 전반부와 갈수록 애절함을 더해가는 곡의 전개로 임창정만이 소화할 수 있는 감성과 가창력 느낄 수 있는 노래방, 헤어지는 여자 헤어지는 연인들의 심정을 임창정의 감성으로 풀이한 나눠갖지 말아요, 피아노 하나와 임창정의 보컬이 빛을 발하는 곡 이젠그러려고 다양한 드라마OST의 히트 곡을 탄생시킨 프로듀싱&퍼블리싱팀 케이던스와 작업한 곡 지금이라 부르던 그때, 임창정이 처음 시도하는 R&B 발라드곡 그 사람 보사노바(BOSSANOVA)리듬에 잊지 못한 사랑에 대한 그리움을 서정적인 기타연주가 매력적인 예쁘더라, 임창정의 최고 히트곡 소주한잔을 만든 작곡가 이동원과 함께한 친구10년 사랑1년, 대한민국 R&B 디바 알리에게 선물했던 또 생각이 나서를 임창정이 직접 부른 지나고도 같은 오늘 임창정의 정규앨범에 한 곡 씩은 꼭 들어간다는 댄스 곡 그냥 냅둬, 히트곡을2018년 버전으로 새롭게 편곡한 또 다시 사랑(2018), 나란놈이란(2018)까지 임창정의 음악을 오랫동안 기다린 팬들에게 올 가을 가장 큰 음악 선물이 될 것이다.',
'엔에이취이엠쥐', '20180919', '정규', '임창정', '발라드,댄스'
);

INSERT INTO ALBUM(
	ALBUM_SEQ, ALBUM_TITLE, INTRO, AGENCY_NAME, RELEASE_DATE, ALBUM_TYPE, ARTIST_NAME, ALBUM_GENRE
)
VALUES(
	35, 
	'주인공', 
'주인공 (Heroine)
 
독보적인 여성 솔로 아티스트로서 확고하게 자리매김하고 있는 선미가 2018년 첫 싱글 타이틀 주인공(Heroine)을 발표한다. 
 
선미의 주인공은 지난 해 선미 신드롬을 일으켰던 3년 만의 솔로 컴백곡 가시나(Gashina) 이후 5개월 만에 발표하는 싱글 타이틀로, 가시나의 프리퀄(prequel)이다. "왜 예쁜 날 두고 가시나"라는 독백과 함께 안타까운 이별을 받아들여야만 했던 가시나의 앞선 이야기인 주인공의 메인 테마는 얼음 속에 갇힌 꽃이다. 이미 한쪽으로 기울어버린 사랑하는 이와의 관계 속에서 상처받으면서도 이해하고자 애쓰며 얼어붙어 가는 여자의 위태로운 모습을 선미 특유의 감성으로 섬세하게 그려냈다. 
 
선미와 더 블랙 레이블(The Black Label)의 협업으로 완성된 주인공은 레트로 풍의 신스와 베이스가 가미된 웅장한 비트 위에 세련되면서도 중독성 있는 멜로디와 이전에 볼 수 없었던 선미의 다채로운 컬러의 보컬이 더해져 독보적인 여성 솔로 아티스트로서의 선미를 한번 더 입증시키는 곡이다. 주인공은 더 블랙 레이블의 프로듀서 테디(TEDDY)와 24가 작사, 작곡, 편곡을 공동 작업했으며, 선미 또한 작사에 참여해 가시나로 이어지는 감정선을 가사에 녹여냈다.
 
완벽한 곡 구성과 뛰어난 퀄리티의 주인공은 고혹적인 아름다움과 압도적인 퍼포먼스를 선사하는 여성 솔로 아티스트 선미의 독보적인 위상을 재확인시켜주는 2018년 첫 신호탄이 될 것이다.',
'㈜메이크어스엔터테인먼트', '20180118', '싱글', '선미', '댄스'
);

INSERT INTO ALBUM(
	ALBUM_SEQ, ALBUM_TITLE, INTRO, AGENCY_NAME, RELEASE_DATE, ALBUM_TYPE, ARTIST_NAME, ALBUM_GENRE
)
VALUES(
	36, 
	'가시나', 
'예쁜 날 두고 가시나
 
새로운 음악을 선보일 때마다 고혹적인 동시에 파격적인 컨셉을 선보여 온 선미가 3년 만에 새로운 곡 "가시나"를 발표 했다. 이번 곡은 막강한 프로듀서들이 포진해있는 더 블랙 레이블(The Black Label)과 공동 작업을 통해 야심차게 준비한 음악으로 동양적인 분위기의 신스 사운드가 주된 테마인 곡으로 감각적인 베이스 라인에 세련된 멜로디 라인이 더해져 선미의 절제된 섹시미를 완성시킨다. 지금까지 숨겨왔던 선미의 다채로운 보컬은 솔로 아티스트로서 한층 더 성숙해진 그녀의 역량을 보여주었다.
 
호기심을 유발하는 곡의 제목 "가시나"는 세 가지 의미를 내포한 중의적인 표현으로, 이는 꽃에 돋아 난 가시처럼 가시 난 내 모습이 더 깊숙이 파고들 거야, 안타까운 이별 앞의 쓸쓸한 되뇌임인 왜 예쁜 날 두고 가시나 등의 가사로 유려하게 음악에 녹아 들고 있다. 또한, 순 우리말 가시나에 아름다운 꽃의 무리라는 뜻이 숨겨져 있다는 지점에 이르면, 아티스트로서 선미의 깊고 예민한 감성을 마주할 수 있다.
 
선미와 더 블랙 레이블(The Black Label)의 협업으로 완성된 "가시나"는 더 블랙 레이블(The Black Label)이 프로듀싱했으며, 선미가 이들과 함께 작사에 참여해 음악에 대한 몰입도를 더욱 높였다.
 
이번 발매하는 스페셜 에디션 [가시나]는 무한한 잠재력과 예민한 감수성을 가진 선미의 여성 솔로 아티스트로서의 존재감을 본격적인 보여줄 수 있는 시작이 될 것이다.',
'㈜메이크어스엔터테인먼트', '20170822', '싱글', '선미', '댄스'
);

INSERT INTO ALBUM(
	ALBUM_SEQ, ALBUM_TITLE, INTRO, AGENCY_NAME, RELEASE_DATE, ALBUM_TYPE, ARTIST_NAME, ALBUM_GENRE
)
VALUES(
	37, 
	'LOVE YOURSELF 結  Answer', 
'LOVE YOURSELF 結  Answer 발매 
방탄소년단은 리패키지 앨범 LOVE YOURSELF 結  Answer을 발매하고, 2년 반 동안 이어진 LOVE YOURSELF 시리즈의 대미를 장식한다.
2016년 3월부터 시작된 방탄소년단의 LOVE YOURSELF 시리즈는 앨범의 주요 수록 곡들이 하나의 주제로 연결되어, 나 자신을 사랑하는 것이 진정한 사랑이라는 메시지를 전해왔다.  
또한, 데뷔 초부터 음악적 완성도를 위해 충분한 곡들을 매 앨범에 담아 온 방탄소년단은 이번 앨범이 리패키지 앨범 임에도 불구하고 7곡의 신곡을 포함했다. 
이번 LOVE YOURSELF 結  Answer 앨범은 치밀한 기획 아래 LOVE YOURSELF 시리즈의 정수를 담은 콘셉트 앨범이다. CD A에 수록된 16곡들은 음악, 스토리, 가사 등이 유기적으로 연결되어, 만남과 사랑으로부터 자아를 찾아가는 감정의 흐름을 따른다.
이번 앨범에서는 서사와 세계관을 강조해온 방탄소년단의 아티스트적 면모 뿐 아니라, 잘 구성된 소설을 읽는 것 같은 높은 앨범 완성도를 느낄 수 있다. 
 
모든 것의 결론, 비밀이 드러나다.
방탄소년단의 LOVE YOURSELF 시리즈는 기승전결(起承轉結)의 구조로 하나의 주제 의식을 관통한다. 짜임새 있는 스토리, 영상, 앨범 트랙, 디자인 등 LOVE YOURSELF의 서사를 따라온 팬들에게 모든 비밀이 풀리는 열쇠 역할을 한다.
LOVE YOURSELF 起  Wonder 영상과 承  Her 앨범이 사랑의 설렘과 두근거림을 표현했다면, 轉  Tear 앨범은 이별을 마주한 소년들의 아픔을 담았다. 이번 발표되는 結  Answer에서는 수많은 모습의 자아 속에서 나를 찾는 유일한 해답은 결국 나 자신에게 있다는 내용을 담았다. 
멤버 진이 부른 컴백 트레일러 Epiphany는 정국의 Euphoria, 지민의 Serendipity, 뷔의 Singularity로 이어져 온 서사의 흐름을 이어 받으며, LOVE YOURSELF 시리즈의 진짜 주제를 명확하게 드러낸다.
특히, L-O-V-E-Y-O-U-R-S-E-L-F 버전의 앨범 커버를 모두 합쳤을 때 나타나는 디자인과 슬리브 꽃 그림은 만남에서 자아를 찾는 과정까지 감정의 흐름을 보여준다.',
'빅히트엔터테인먼트', '20180824', '정규', '방탄소년단', '힙합'
);

INSERT INTO ALBUM(
	ALBUM_SEQ, ALBUM_TITLE, INTRO, AGENCY_NAME, RELEASE_DATE, ALBUM_TYPE, ARTIST_NAME, ALBUM_GENRE
)
VALUES(
	38, 
	'ONE & SIX', 
'Apink 7th Mini Album [ONE & SIX] 발매!
여섯 명의 다양한 매력을 보여주는 앨범 [ONE & SIX]
데뷔 후 처음으로 변화를 선보이는 에이핑크의 1도 없어
 
지난여름, FIVE로 대중들에게 위로와 사랑을 전하며 많은 사랑을 받았던 대한민국 대표 걸그룹 에이핑크(Apink)가 1년 만에 미니 7집 [ONE & SIX]로 컴백한다. 긴 공백기 끝에 선보일 이번 앨범은 에이핑크의 새로운 모습을 보여주기 위해 과감히 [Pink]의 타이틀을 버렸으며, 데뷔 후 처음으로 변화를 시도했다.
[ONE & SIX]는 한 앨범 안에 여섯 멤버의 각자 다양한 모습들과 매력을 보여주겠다는 포부가 담겨 있기도 하면서, 어느새 하나가 되어있는 팬들(ONE)과 여섯 명의 에이핑크(SIX)가 함께 한 7주년(ONE+SIX)이라는 깊은 의미도 함께 나타낸다.
 
이번 앨범 타이틀곡 1도 없어는 내가 설렐 수 있게 이후 에이핑크와 한 번 더 호흡을 맞추게 된 블랙아이드필승과 전군의 곡으로, 트로피컬 느낌의 하우스 비트가 어우러진 신나는 마이너 팝 댄스곡이다. 한 남자를 사랑했을 당시의 느낌과 감정이 이젠 남아 있지 않은, 마음이 떠나버린 여자의 심정을 가사로 표현하였으며, 에이핑크가 기존에 FIVE, NoNoNo, Mr. Chu 등의 노래로 행복과 따뜻함을 전했다면, 이번 타이틀곡 1도 없어는 사랑이 끝난 여자의 아픔을 노래하면서, 확실히 한층 성숙한 멤버들의 모습을 볼 수 있다.
 
타이틀곡 외에도 새롭게 시작하는 사랑에 대한 설렘을 담아낸 A L R I G H T, 독특하고 중독성 강한 훅이 인상적인 셔플 리듬의 댄스곡 Don’t be silly, 서정적이면서도 세련된 사운드가 돋보이는 발라드곡  별 그리고.. 힘들고 지쳐있을 때 수 마디 말보다 너라는 존재 자체가 위로가 된다는 내용의 팝 댄스곡 말보다 너, 여름이 느껴지는 시원한 분위기의 신나는 댄스곡  I Like That Kiss까지 총 6곡이 수록되어 있다.',
'플랜에이 엔터테인먼트', '20180702', 'EP', '에이핑크', '발라드,댄스'
);


INSERT INTO ALBUM(
	ALBUM_SEQ, ALBUM_TITLE, INTRO, AGENCY_NAME, RELEASE_DATE, ALBUM_TYPE, ARTIST_NAME, ALBUM_GENRE
)
VALUES(
	39, 
	'시간이 들겠지', 
'로꼬 (LOCO) [시간이 들겠지]
 
방송 및 각종 협업 프로젝트를 섭렵하고 있는 로꼬가 한 달 만에 신보를 들고 왔다. 시간이 들겠지는 본인의 현재 심정을 솔직하게 잘 드러낸 곡이며 Colde가 피쳐링을 참여하여 로꼬의 감성을 한껏 끌어 올렸다. 로꼬는 다양한 음악 스타일과 개성이 뚜렷한 프로듀서 및 아티스트와의 협업으로 자신의 음악적 스펙트럼을 넓고 굳게 다져나가고 있다.

시간이 지나면 괜찮아질 거라는 것은 알고 있지만, 지금 현재 상황이 너무나도 힘들다는 것을 누구라도 알아줬으면 하는 마음을 항상 갖고 있다.
 
시간은 빨리 지나가지만 우리들의 감정은 제자리에 서 있다. 하지만, 정말 시간이 모든 걸 해결해줄까?
 
It Takes Time',
'AOMG', '20181008', '싱글', '로꼬', '힙합'
);

INSERT INTO ALBUM(
	ALBUM_SEQ, ALBUM_TITLE, INTRO, AGENCY_NAME, RELEASE_DATE, ALBUM_TYPE, ARTIST_NAME, ALBUM_GENRE
)
VALUES(
	40, 
	'가을 타나 봐', 
'바이브[VIBE] 싱글 가을 타나 봐
 
이유 없이 허전하고, 필요 없이 외로워지는 가을..
공허한 가을이 찾아오면 생각나는 사람에 대한 그리움..
 
유난히 뜨거웠던 여름을 지나 찬 바람이 불기 시작하는 가을이 되면
자연스럽게 떠오르는 명품 보컬 그룹 바이브 (VIBE)가 가을의 공허함을 채워줄
새로운 노래 가을 타나 봐를 공개했다.
 
유난히 긴 호흡으로 1년여의 긴 시간을 들여 작업 중인 바이브(VIBE)의 정규 8집
발표에 앞서 공개한 가을 느낌 물씬 풍기는 가을 타나 봐는 가을바람처럼 무던하게
흘러가는 현악기의 선율 위에 툭툭 던져내듯 써내려 간 인상적인 가사는 외로움을
더욱 극대화하여 그려내고 있으며 몇 해의 시간이 거듭 흘러도 가을만 오면 공허해지는
우리들의 마음을 담아 그려내고 있다.
 
바이브(VIBE)의 멤버이자 프로듀서 류재현의 손에서 탄생한 가을 타나 봐는
꽤 오랜만에 선보이는 신곡이니만큼 더욱 신중을 기해 오랜 시간 동안 작업한 곡이다.
자이언티 "양화대교", "No make up", 빅뱅의 "Last dance"등을 작곡, 연주한
재즈피아니스트 전용준이 함께 편곡, 연주에 참여해 브리티시 팝 계열의
깊이 있는 사운드를 들려주고 있으며, 그 위로 리드보컬 윤민수의 프리한 보이스가
더해져 곡의 그루브를 더해주고 있다.가을 타나 봐는
 
"계절은 돌고 돌아 돌아오는데 사랑은 돌고 돌아 떠나버리고
 추억을 돌고 돌아 멈춰 서있는 다시 그 계절이 왔나 봐
 그리운가 봐 가을 타나 봐"
 
가을의 공허함을 잔잔히 채워줄 음악으로 돌아온 바이브(VIBE)의 가을 타나 봐가
가을만 되면 생각나는 사람에 대한 그리움, 그리고 가을이 찾아오면 생각나는 노래가
되기를 바래본다.',
'메이저나인', '20180918', '싱글', '바이브', '발라드'
);


INSERT INTO ALBUM(
	ALBUM_SEQ, ALBUM_TITLE, INTRO, AGENCY_NAME, RELEASE_DATE, ALBUM_TYPE, ARTIST_NAME, ALBUM_GENRE
)
VALUES(
	41, 
	'NEW KIDS : THE FINAL', 
'iKON 2nd EP ALBUM [NEW KIDS : THE FINAL]
 
2018년 그 어느 해 보다 활발한 활동을 펼친 아이콘이 새로운 앨범 [NEW KIDS : THE FINAL]을 통해 한 해 세 번째 컴백이라는 보기 드문 행보를 걷는다.
 
이번 앨범의 타이틀곡 [이별길]은 올해 초 대중의 큰 사랑을 받은 [사랑을 했다]와 막판까지 타이틀로 경쟁했던 곡이다. 가을의 계절감과 너무도 잘 어울려 1년 가까이 공개 시기를 기다려온 곡으로, 이별에 대한 서정적인 아름다운 가사와 멜로디가 압권인 곡이다. 또한 프로듀서 B.I의 발전을어느 곡보다도 뚜렷하게 느낄 수 있는 곡이기도 하다. 느린 미디엄 템포의 곡이지만 완성도 있는멋진 퍼포먼스로 대중의 눈과 귀를 모두 사로잡을 예정이다. 올가을 아이콘만의 완성도 있는 가을감성 저격을 기대해보자.',
'(주)YG엔터테인먼트', '20181001', 'EP', '아이콘', '발라드,댄스'
);


INSERT INTO ALBUM(
	ALBUM_SEQ, ALBUM_TITLE, INTRO, AGENCY_NAME, RELEASE_DATE, ALBUM_TYPE, ARTIST_NAME, ALBUM_GENRE
)
VALUES(
	42, 
	'그때 헤어지면 돼', 
'로이킴 2018년 첫 곡 [그때 헤어지면 돼]
 
어느덧 6년 차의 뮤지션이 된 로이킴의 새 해가 시작되었다.
데뷔 이래, 한국과 미국에서 음악과 학업 무엇 하나 소홀하지 않으며, 천천히 또 빠르게 흘러간 그의 시간은 지난 해, 스물 다섯 가장 아름다운 개화기를 보내고 또 한 해를 맞았다.
 
로이킴이 2018년 처음으로 내놓는 곡의 제목은 "그때 헤어지면 돼".
제목과는 다르게 헤어지는 그 때 조차 내가 정하겠다는, 결국엔 헤어질 수 없는 우리의 사이를 이야기하는 다소 이기적이기도 한 남자의 애절한 마음을 표현한 이 곡은, 로이킴이 직접 작사 작곡한 팝 발라드 곡이다.
나얼의 "같은 시간 속의 너", "기억의 빈자리" 를 비롯해, 브라운아이드소울, 윤종신, 성시경 등 국내 최고의 보컬리스트들과 함께 작업한 작곡가 강화성이 편곡을 맡았으며, 기타리스트 홍준호, 베이시스트 최훈의 연주를 더해 완성했다.
특히 보컬리스트 조규찬이 코러스에 참여해 곡 전체를 따뜻하고 풍성하게 만들었으며, 최고의 세션들의 Instrumental 에 조규찬의 코러스까지 포함한 버전을 연주곡 트랙으로 특별히 수록했다.',
'StoneMusic', '20180212', '싱글', '로이킴', '발라드'
);

INSERT INTO ALBUM(
	ALBUM_SEQ, ALBUM_TITLE, INTRO, AGENCY_NAME, RELEASE_DATE, ALBUM_TYPE, ARTIST_NAME, ALBUM_GENRE
)
VALUES(
	44, 
	'SQUARE UP', 
'@ BLACKPINK ABOUT
 
[SQUARE ONE], [SQUARE TWO]와  마지막처럼 으로 증명한 그들만의 다채로운 매력으로 대중들을 매료시킨 YG 대표 걸그룹 블랙핑크가 대망의 첫 미니 앨범 [SQUARE UP]과 함께 화려한 모습으로 돌아왔다. 블랙핑크의 또 다른 새로운 음악적 도전과 더욱더 성숙하고 강해진  BLACK  &  PINK 의 이중적인 매력으로 대중들에게 강렬하게  각인  시킬 예정이다.
 
@  SQUARE UP  ALBUM 소개글
 
앨범 장르 : 힙합/댄스
 
2016년 8월 8일 데뷔한 블랙핑크는 [SQUARE ONE], [SQUARE TWO] 시리즈와  마지막처럼 까지 차별화된 독특한 사운드와 다양한 매력으로 기록적인 성적을 내며 큰 주목을 받은 YG 대표 걸그룹 블랙핑크가 2018년 대망의 첫 미니 앨범 [SQUARE UP]으로 화려하게 돌아왔다.
 
 SQUARE UP 은 블랙핑크가 데뷔부터 진행해온  SQUARE  시리즈로, 데뷔앨범  SQUARE ONE , 두 번째 앨범  SQUARE TWO 의 연장선에 있다.  붙어보자 ,  싸워보자 라는 의미의 이번 앨범 명 [SQUARE UP]은 블랙핑크의 한층 더 성숙하고 강해진 음악과 컨셉으로  당당하게 맞서자 라는 메시지를 담았다.
 
타이틀 곡  뚜두뚜두(DDU-DU DDU-DU) 는 강력한 트랩 비트 위에 가미된 동양적인 퍼커션 리듬과 독창적인 휘슬 리드 사운드로 블랙핑크만의 독특한 색깔을 강조한다. 호소력 있는 벌스 파트와 프리드랍에서의 훅라인, 그리고 2절에서의 랩은 블랙핑크의 보컬에 탄성을 자아내기 충분하다. 곡이 전개될수록 넓게 펼쳐지는 스펙트럼과 고조되는 드랍으로 무장된  뚜두뚜두 의 파괴력은 마치 탱크를 연상시키기도 한다.
 
직설적인 가사와 함께 트랙에서 느껴지는 에너지로 흉내 낼 수 없는 블랙핑크만의 새로운 카리스마를 제시하는  뚜두뚜두 의 작사에는 가요계를 선도하는 프로듀서 TEDDY, 작곡에는 TEDDY, 24, R.Tee, Bekuh Boom가 참여해 팬들의 기대감을 높이고 있다.
 
데뷔 후 처음 선보이는 미니 앨범은, 이들의 이름  BLACKPINK 처럼 이중성을 메인 컨셉으로 [BLACK & PINK] 총 2가지 버전으로 출시될 예정이다.',
'SM Entertainment', '20180615', 'EP', '블랙핑크', '발라드,댄스,알앤비소울,힙합'
);

INSERT INTO ALBUM(
	ALBUM_SEQ, ALBUM_TITLE, INTRO, AGENCY_NAME, RELEASE_DATE, ALBUM_TYPE, ARTIST_NAME, ALBUM_GENRE
)
VALUES(
	45, 
	'Summer Nights', 
'트와이스, 7월 9일 두 번째 스페셜 앨범  Summer Nights  및 타이틀곡  Dance The Night Away  발표!
 
- 타이틀곡  Dance The Night Away , 트와이스의 첫 서머송! 특별한 행복 에너지 선사
-  트와이스 X 휘성  조합으로 9연속 히트 정조준! 2018 서머걸들의 매력 파티!
- 스페셜 2집  Summer Nights , 신곡 3곡 포함 총 9트랙 수록! 모모-사나-미나 작사한  Shot thru the heart  눈길
 
트와이스가 7월 9일 두 번째 스페셜 앨범  Summer Nights  및 타이틀곡  Dance The Night Away 를 발표한다.
 
 눈으로 한 번, 귀로 한 번 감동을 주는  그룹 트와이스가 2018년 여름을 화려하게 장식할  서머걸 로 돌아온다.
 
트와이스 첫 서머송  Dance The Night Away 는 매 순간 특별한 행복을 품고 살아가는 아홉 멤버들의 청춘을 표현한 업템포 팝곡이다. 사운드, 퍼포먼스 등 다방면에 트와이스만의 아름답고 밝은 에너지를 담아내며 한여름 무더위를 싹 가시게 할 만큼 시원하고 청량한 분위기를 풍기는 것이 특징. 매 여름휴가 시즌이면 떠올릴만한  스테디셀러 서머송  탄생을 기대케 한다.
 
특히  Dance The Night Away 의 작사를 휘성이 담당한 것으로 밝혀져 더욱 화제다. 휘성은 그동안 윤하의 비밀번호 486 , 티아라의  너 때문에 미쳐 , 에일리의  Heaven  등 빅히트곡들의 작사가로 명성을 떨쳤다.  Dance The Night Away 로  트와이스 X 휘성  조합이 성사된 가운데 휘성 특유의 감각적인 노랫말과 트와이스의 상큼, 발랄한 에너지가 만나 2018년 여름 장악을 예고하고 있다.
 
트와이스의 새 앨범  Summer Nights 에는 타이틀곡  Dance The Night Away 와  CHILLAX ,  Shot thru the heart  등 3곡의 신곡과 지난 4월 9일 발표한 미니 5집  What is Love?  수록곡 등 총 9트랙이 담긴다.' ,
'(주)JYP엔터테인먼트', '20180709', 'EP', '트와이스', '발라드,댄스'
);

INSERT INTO ALBUM(
	ALBUM_SEQ, ALBUM_TITLE, INTRO, AGENCY_NAME, RELEASE_DATE, ALBUM_TYPE, ARTIST_NAME, ALBUM_GENRE
)
VALUES(
	46, 
	'가을 안부', 
'먼데이 키즈 [가을 안부]
 
 하기 싫은 말 ,  눈물 ,  누군가를 떠나 보낸다는 건  3장의 싱글로 솔로 보컬리스트로서의 입지를 다진 가수  먼데이 키즈 가 전하는 가을 편지..
신보  가을 안부 는 무더웠던 여름을 지나 가을이 되면 생각나는 한 사람에 대해 쓴 이야기다.
도입부 그 동안의 안부를 묻는듯한 목소리와 가을이 되면 느껴지는 그리움, 추억에 대한 애절한 감성을 노래했다.
이진성이 직접 작곡에 참여했고 지금껏 먼데이 키즈와 많은 호흡을 함께 했던 작사가  강은경 , 작곡가  한상원, 떠오르는 신예 Lohi가 공동작업으로 함께해 기존 먼데이 키즈의 감성과 솔로 보컬리스트 이진성의 매력을 함께 담을 수 있는 곡을 탄생시켰다.
완연한 가을.. 먼데이 키즈가 묻는 가을의 안부에 여러분 모두 마음의 답장을 띄어주시길 바란다.' ,
'먼데이키즈 컴퍼니', '20171014', '싱글', '먼데이키즈', '발라드'
);

INSERT INTO ALBUM(
	ALBUM_SEQ, ALBUM_TITLE, INTRO, AGENCY_NAME, RELEASE_DATE, ALBUM_TYPE, ARTIST_NAME, ALBUM_GENRE
)
VALUES(
	47, 
	'The Fairy Tale', 
'아름답게 빛나는 동화 같은 이야기
멜로망스 [The Fairy Tale]
 
"우리 모두에게는 소중하게 간직하고 싶은 이야기가 있다. 그 찬란한 순간들이 모여 한 편의 동화가 된다."
 
같은 시간 속, 저마다의 행복을 느끼고 꿈꾸며 살아가는 우리들.
어느 것 하나 소중하지 않은 것이 없다. 이번 다섯 번째 미니 앨범은 우리가 살면서 느끼는 아름다움, 사랑, 추억, 바람, 행복 그리고 희망의 모습들을 담았다.
 
멜로망스는 이번 음반에서 팝, 재즈와 클래식을 넘나들며 음악적 스펙트럼을 확장시켰다. 두 멤버는 곡의 멜로디, 가사, 보컬, 사운드, 악기 구성에 고심하며 작업했고, 정동환은 15인조 스트링을 직접 디렉팅했다.
 
현재를 살아가는 우리의 이야기 속에 멜로망스 음악이 늘 함께 하길 바라는 마음으로 만든 노래들과 함께 당신의 시간이 더 빛나길 바란다.' ,
'민트페이퍼', '20180703', 'EP', '멜로망스', '발라드'
);



INSERT INTO ALBUM(
   ALBUM_SEQ, ALBUM_TITLE, INTRO, AGENCY_NAME, RELEASE_DATE, ALBUM_TYPE, ARTIST_NAME, ALBUM_GENRE
)
VALUES(
   48,
   'Summer Magic',
'여름 지배자 레드벨벳, 여름 미니앨범 Summer Magic 공개!
초강력 서머송 Power Up으로 또 한번 여름 강타!

여름 지배자 레드벨벳이 여름 미니앨범 Summer Magic으로 화려하게 컴백한다.

이번 앨범에는 에너지 넘치는 초강력 서머송 Power Up을 비롯한 신곡 6곡과 보너스 트랙까지 총 7트랙이 수록, 레드벨벳 특유의 상큼발랄한 매력과 청량감 넘치는 여름 분위기를 만끽할 수 있어, 글로벌 팬들의 폭발적인 호응이 기대된다.

또한 레드벨벳은 작년 여름 빨간 맛 (Red Flavor)으로 각종 음악 차트를 휩쓸며 2017 최고 서머퀸에 등극함은 물론, 지난 1월 발표한 정규 2집 리패키지 타이틀 곡 Bad Boy도 국내 각종 음원, 음반 차트 1위, 아이튠즈 종합 앨범 차트 전 세계 16개 지역 1위, 중국 샤미뮤직 종합 차트 1위, 대만, 홍콩, 싱가포르 KKBOX 한국음악 차트 1위를 기록하는 등 퍼펙트 히트 행진을 이어가 가요계 대세 걸그룹다운 면모를 입증한 만큼, 이번 컴백에 이목이 더욱 집중되고 있다.

무더위를 날려버릴 초강력 서머송! 타이틀 곡 Power Up!

이번 타이틀 곡 Power Up은 통통 튀는 8비트 게임 소스와 귀여운 훅이 매력적인 중독성 강한 업템포 팝 댄스곡으로, 가사에는 신나게 놀고 에너지를 얻으면 일도 신나게 할 수 있다는 내용을 담았으며, 여름 휴가를 떠나는 순간의 설렘을 고스란히 느낄 수 있다.' ,
'SM Entertainment', '20180806', 'EP', '레드벨벳', '댄스'
);

INSERT INTO ALBUM(
  ALBUM_SEQ, ALBUM_TITLE, INTRO, AGENCY_NAME, RELEASE_DATE, ALBUM_TYPE, ARTIST_NAME, ALBUM_GENRE
)
VALUES(
  49,
  '4.1',
'10cm 설렘 가득한 새로운 싱글 매트리스 [Mattress]
-
새로 산 침대와 그 속의 우리가 세상의 전부인 것처럼
-
새로 산 침대위 사랑하는 연인과의 이야기를 담은 10cm 신곡 매트리스는 전작 [4.0]의 주제였던 어느 방에 대한 이야기의 연장선이기도 하다. 작은 공간 안으로 허락된 단 한 명 그리고 그곳은 오직 너와 나 단둘만의 작은 세계다.
이번 앨범 역시 특유의 상황 설정과 위트 있는 가사가 돋보이지만 설렘이라는 키워드가 추가되어 10cm 고유의 색채를 잃지 않으면서 새로운 분위기를 만들어냈다.
앨범의 전체적인 아트 디렉팅은 설치 미술 작가로 활동 중인 ‘이정형작가가 참여, 뮤직비디오와 앨범 커버 아트를 통해 가사에서 들려주던 둘만의 공간을 시각화했다..' ,
'매직스트로베리사운드', '
20180823', '싱글', '10cm', '포크'
);

INSERT INTO ALBUM(
 ALBUM_SEQ, ALBUM_TITLE, INTRO, AGENCY_NAME, RELEASE_DATE, ALBUM_TYPE, ARTIST_NAME, ALBUM_GENRE
)
VALUES(
 50,
 'Red Diary',
'볼빨간사춘기 [Red Diary ‘Hidden Track’]
설레는 만남부터 푸르게 시린 이별, 혼자의 순간까지.
볼빨간사춘기 Red Diary, 그 마지막 장..' ,
'쇼파르뮤직', '20180717', '싱글', '볼빨간사춘기', '포크'
);
INSERT INTO ALBUM(
ALBUM_SEQ, ALBUM_TITLE, INTRO, AGENCY_NAME, RELEASE_DATE, ALBUM_TYPE, ARTIST_NAME, ALBUM_GENRE
)
VALUES(
51,
'RED MOON',
'마마무 "포시즌 포컬러 프로젝트"의 두 번째 앨범 [RED MOON] 발매

- 무더운 여름을 더욱 뜨겁게 달궈줄 "여름맘무"로 컴백!
- 올여름을 "RED"로 물들일 마마무의 화려하고 정열적인 매력발산!
- 마마무, [RED MOON]을 띄우며 완전체로 돌아오다.


올해 3월 [Yellow Flower]의 타이틀곡 "별이 빛나는 밤"을 통해 각종 차트를 휩쓸며 포시즌 포컬러 프로젝트의 성공적인 항해를 시작한 마마무. 네 가지 컬러에 각각의 상징으로 지금까지 보여주지 못한 각 멤버들의 숨겨진 매력과 역량을 담아내는 이 프로젝트에서 두 번째로 문별의 RED를 앞세운 새 미니앨범 [RED MOON]을 발매했다. [RED MOON]은 마마무의 두 번째 컬러인 빨간색에 문별을 뜻하는 문(달)을 합한 것으로, 여름과 닮은 마마무의 정열적인 매력을 쏟아내며 무더운 여름을 더욱 뜨겁게 달굴 예정이다.

이번 미니앨범에는 총 6곡을 수록했다. 지난 8일 선공개로 기습 발매되어 걸그룹 최초 선공개 곡 음원 순위 1위라는 성적을 기록한 "장마"를 비롯해 문별의 솔로 앨범 [SELFISH]의 타이틀곡 "SELFISH"가 포함되어 있다. 그 외에도 마이너 코드로 진행되어 호러블한 분위기의 "여름밤의 꿈"으로 가슴 한편을 서늘하게 만들기도 하고, 특히 걸그룹 여자친구의 "오늘부터 우리는", "시간을 달려서", "너 그리고 나"를 프로듀싱한 이기, 용배가 새롭게 참여해 "하늘하늘 (청순)"이라는 곡을 작업하며 마마무가 그간 감춰왔던 색다른 청순미를 한껏 보여줄 예정이다.
또한, 공식적으로 발매되진 않았지만 멤버들이 서로에게 던지는 애정이 어린(?) 디스의 재밌는 가사로 팬들에게 많은 사랑을 받고 있는 "잠이라도 자지"가 이번 앨범에 정식으로 수록되었다.' ,
'(주)RBW', '20180716', 'EP', '마마무', '댄스'
);

INSERT INTO ALBUM(
ALBUM_SEQ, ALBUM_TITLE, INTRO, AGENCY_NAME, RELEASE_DATE, ALBUM_TYPE, ARTIST_NAME, ALBUM_GENRE
)
VALUES(
52,
'미스터 션샤인 OST',
'[박원 - 이방인]

연일 시청률과 화제성에서 폭발적인 반응을 얻고 있는 tvN 미스터 션샤인 OST에 대세 싱어송라이터 박원이 합류한다.

이방인은 비참한 현실에 마주친 사랑은 과분한 꿈 같다는 내용을 담은 곡으로,
큰 고통이지만 오히려 달게 받겠다는 역설적인 사랑에 대한 노래이다.
연일 그대를 그리지만 또 바라만 보다 걸음을 멈추오, 맴도는 그리움이 주는 괴로움마저 달게 받으리,
후회로 가득한 내 삶에 그댄 덧없이 사라질 나를 감싸오와 같은 가사로 애절함 마음을 담아내었다.

또한, 담담한 아쿠스틱 피아노와 콘트라베이스 연주로 시작되는 편곡은 곡의 긴장감을 유지하면서도 잔잔한 사랑의 고통을 적나라하게 표현했다.
여기에 섬세한 감성으로 마음을 울리는 박원의 보컬이 더해져 애틋함을 한층 배가시켰다.

특히, 제목 이방인은 조선에서 태어났으나 미국인의 신분으로 조선에 돌아온, 조선인에게 낯선 유진 초이 (이병헌)를 의미하기도 하며,
한편으로는 자신의 신분을 지우고 낭인이 된 구동매 (유연석), 일본으로 건너가 유학을 하고 돌아온 김희성 (변요한) 을 포함,
각자의 방법으로 격변하던 시대를 지난 세 남자 모두를 아우를 수 있는 제목이다..' ,
'화앤담픽쳐스', '
20180813', 'OST', '박원', '발라드'
);

INSERT INTO ALBUM(
ALBUM_SEQ, ALBUM_TITLE, INTRO, AGENCY_NAME, RELEASE_DATE, ALBUM_TYPE, ARTIST_NAME, ALBUM_GENRE
)
VALUES(
53,
'LISTEN 010 좋니',
'LISTEN 010 윤종신 "좋니"

미스틱엔터테인먼트의 음악 플랫폼 LISTEN(리슨)의 열 번째 곡은 윤종신의 "좋니"다.

"좋니"는 윤종신의 짙은 감수성과 호소력이 담긴 발라드로, 윤종신이 작사하고 포스티노가 작곡했다.

헤어진 연인의 행복을 빌어주고 싶지만 어쩔 수 없는 그리움에 울컥거리는 마음을 가사로 쓴 윤종신은 그 어느 때보다 애절하게 노래한다. 담담하지만 힘있게 진행되는 "좋니"는 후반부로 갈수록 에너지가 더해져 풍성한 스트링 선율과 함께 극적인 연출을 이끌어낸다.

90년대 발라더 윤종신의 대체 불가한 표현력과 설득력을 오랜만에 다시 느끼게 해 줄 "좋니". 이별 후 힘들어하는 많은 이들이 이 노래를 듣고 공감과 위로를 받기를 바란다.

미스틱의 LISTEN은 하림, 윤종신 등 완성형 뮤지션은 물론 PERC%NT(퍼센트), 장수빈 등 실력파 신인들의 좋은 음악을 소개하며 양질의 음악 플랫폼으로 성장하고 있다.' ,
'미스틱엔터테인먼트', '20170622', '싱글', '윤종신', '발라드'
);


INSERT INTO ALBUM(
ALBUM_SEQ, ALBUM_TITLE, INTRO, AGENCY_NAME, RELEASE_DATE, ALBUM_TYPE, ARTIST_NAME, ALBUM_GENRE
)
VALUES(
54,
'미스터 션샤인 OST',
'[벤 - If You Were Me]

흥미진진한 전개로 드라마 후반까지 팽팽한 긴장감을 이어가고 있는 tvN 미스터 션샤인OST에 가수 벤이 참여한다.

If You Were Me는 사랑하는 두 사람이 서로 닿을 수 없는 두려운 상황 속에서도 상대방을 놓을 수 없는 슬픈 사랑을 담아낸 곡이다.

노래 타이틀처럼 If you were me, 두려움은 없었을테죠, If I Was You, 그 품에 날 안아줄텐데 등
그대가 나라면, 또 내가 그대라면 어땠을지 그려보는 가사가 애절한 사랑을 더욱 애틋하게 표현해내었다.

또한, 가사의 내용에 어울리는 아련한 피아노 선율과 몽환적인 분위기의 편곡이 인상적이다.
여기에 여린 듯하면서도 호소력 짙은 벤의 목소리가 더해져 드라마의 몰입도를 더욱 높일 것으로 보인다.

벤은 안정적인 가창력과 애절한 감성으로 차세대 명품 보컬리스트로 주목 받고 있는 가운데,
<또 오해영>, <이번 생은 처음이라> 등 다양한 OST 작업에도 활발히 참여하며 OST 퀸의 행보를 이어가고 있다.' ,
'화앤담픽쳐스', '20180923', 'OST', '벤', '발라드'
);


INSERT INTO ALBUM(
ALBUM_SEQ, ALBUM_TITLE, INTRO, AGENCY_NAME, RELEASE_DATE, ALBUM_TYPE, ARTIST_NAME, ALBUM_GENRE
)
VALUES(
55,
'Gift E.C.H.O',
'박효신 스페셜 앨범 [GIFT E.C.H.O]

지난 2010년 12월 [Gift]  Part 2, 그 후 군입대. 그리고 길지 않은 잠시 동안의 안녕. 그를 사랑하는 팬들의 오랜 기다림 동안 조금이나마 그 갈증을 채워 줄 박효신 마음 속의 울림에서부터 배달된 새로운 선물 [GIFT E.C.H.O] 가 도착했다. 그리고 그를 기다려 주는 팬들 마음의 문에 초인종을 조심스레 눌러 본다.

[Gift]의 마지막 이야기 [GIFT E.C.H.O]

이번 앨범은 소박하다. 그리고 그럴 수 밖에 없다. 그도 그럴 것이 무엇보다 군복무 중으로 신곡을 발표할 수 있는 상황이 되지 못하는 박효신의 상황. 그래서 신곡을 들려주지 못하는 그 만의 팬들을 향한 애정 그리고 음악을 향한 열정과 새로운 것을 보여주지 못할 수 밖에 없는 속타는 마음은 아무도 모를 것이다.

그러던 중 젤리피쉬 엔터테인먼트의 수장 프로듀서 황세준은 어떻게 하면 그런 예쁜 마음으로 한결같이 기다려주는 기다림에 지친 팬들에게 조금이라도 위로가 될 수 있는 선물을 해볼 수 있을까 고민에 잠기게 되던 중, 마침 군입대 전 박효신이 발매 하였던 [Gift] Part 1에 수록 되었던 ‘이상하다’ 의 미공개 어쿠스틱 버전이 아직 세상에 빛을 보지 못했다는 것을 잊고 있었다는 사실을 알게 되고 새로운 곡은 아니지만 아직 세상 밖으로 나오지 못한 이 곡으로 박효신을 기다려주는 팬들에게 소박하게 나마 선물을 할 수 있지 않을까에 대한 생각에 잠긴다. 그리고 무엇보다 이 곡을 작업하는 동안 박효신과 스튜디오에서 포근하고 때로는 장난스럽게 그리고 무엇보다 편안하고 세련되게 어쿠스틱 버전의 "이상하다" 를 작업하던 그날을 떠올리며 추억에 잠기게 되고 결국은 이번 앨범을 기획하기에 결심한다. 새롭게 탄생된 "이상하다" 의 어쿠스틱 버전은 그런 뒷얘기의 생생함을 전해주 듯 노래의 시작 인트로에 그날 밤 작업실 현장음들이 그대로 녹아 있어서 더욱 정겨운 느낌을 전해준다.' ,
'젤리피쉬(주)', '20120322', '비정규', '박효신', '발라드,댄스'
);


INSERT INTO ALBUM(
ALBUM_SEQ, ALBUM_TITLE, INTRO, AGENCY_NAME, RELEASE_DATE, ALBUM_TYPE, ARTIST_NAME, ALBUM_GENRE
)
VALUES(
56,
'장범준 2집',
'[장범준 2집] 앨범소개

장범준 트리오 CD는 기타리프와 드럼, 베이스 기반의 심플한 음악으로 녹음 당시 메트로놈 (클릭) 없이 러프하고 라이브스러운 느낌으로 녹음했습니다. 끊어서 녹음하지 않고 기타, 드럼, 베이스, 보컬까지 최대한 한 호흡으로 갈 수 있도록 녹음했습니다. 덕분에 지금까지 했던 어떤 녹음보다도 즐거운 마음을 가지고 작업을 할 수 있었습니다.

언플러그드 CD는 통기타, 드럼, 베이스, 피아노 기반의 따뜻한 음악으로 자연스러운 느낌을 주기 위해서 기타에 보컬만을 가이드로 들려준 뒤 연주자분들과 간단한 합주 후 각 파트별 즉흥적인 해석을 그대로 담아 녹음했습니다. 사람들이 저에게 기대하는 소리를 표현하기 위해서 서정적인 음악들로 준비했습니다.

이번 앨범은 제가 지금 28살이니까 20대에 내는 마지막 정규앨범이 되지 않을까 생각합니다. 20대의 사랑을 주제로, 제가 겪고 느껴 왔던 여러 가지 감정들을 예술가들과 함께 만화와 음악으로 담아 보았습니다. 첫사랑은 영원한가? 나를 좋아하는 여자와 내가 좋아하는 여자, 결혼은 누구랑 하게 되는 걸까? 현실은 왜 이렇게 힘든가? 등등..

약 2달여 오늘까지 웹툰과 함께 이 앨범을 기다려 주신 분들께 즐거운 마지막화가 되기를 바랍니다..' ,
'버스커버스커', '20160325', '정규', '장범준', '포크'
);



create table MUSIC(
    MUSIC_SEQ INT PRIMARY KEY,
    MUSIC_TITLE VARCHAR(20) NOT NULL,
    ALBUM_SEQ INT,
    ARTIST_SEQ INT,
    GENRE_SEQ INT
);



INSERT INTO MUSIC(
 MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
 57,'사이렌',29, 7, 3);

INSERT INTO MUSIC(
 MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
 58,'ADDICT',29, 7, 3);

INSERT INTO MUSIC(
 MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
 59,'곡선',29, 7, 3);


INSERT INTO MUSIC(
 MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
 59,'Black Pearl',29, 7, 3);
 
 
INSERT INTO Artist(
	ARTIST_SEQ, ARTIST_NAME, SEX, BIRTH, DEBUT, NATION, GROUP_NAME
)
VALUES(
	60, '박효신', '남', '811201', '19991201', '대한민국', '솔로'
);

INSERT INTO Artist(
	ARTIST_SEQ, ARTIST_NAME, SEX, BIRTH, DEBUT, NATION, GROUP_NAME
)
VALUES(
	61, '장범준', '남', '890516', '20120329', '대한민국', '솔로'
);


INSERT INTO MUSIC(
 MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
 62,'비밀테이프',29, 7, 3);

 
INSERT INTO MUSIC(
 MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
 63,'Aqua Man',30, 8, 2);

INSERT INTO MUSIC(
 MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
 64,'Always Awake',30, 8, 2);
 
INSERT INTO MUSIC(
 MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
 65,'삐삐',31, 9, 6); 
 
INSERT INTO MUSIC(
 MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
 66,'가을아침',33, 9, 1); 

 INSERT INTO MUSIC(
 MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
 67,'비밀의 화원',33, 9, 32);
 
 
INSERT INTO MUSIC(
 MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
 68,'어젯밤 이야기',33, 9, 3);

 
ALTER TABLE MUSIC CHANGE MUSIC_TITLE MUSIC_TITLE VARCHAR(50) NOT NULL; 
INSERT INTO MUSIC(
 MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
 69,'하루도 그대를 사랑하지 않은 적이 없었다',34, 10, 1); 
 
INSERT INTO MUSIC(
 MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
 70,'노래방',34, 10, 1);  
 
 INSERT INTO MUSIC(
 MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
 71,'나눠갖지 말아요',34, 10, 1);  
 

INSERT INTO MUSIC(
 MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
 72,'주인공',35, 7, 3); 
 

INSERT INTO MUSIC(
 MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
 73,'가시나',36, 7, 3);  
 
 
INSERT INTO MUSIC(
 MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
 74,'IDOL',37, 11, 2);  

INSERT INTO MUSIC(
 MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
 75,'I`m Fine',37, 11, 2);  
 
 INSERT INTO MUSIC(
 MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
 76,'Euphoria',37, 11, 2);
  
 INSERT INTO MUSIC(
 MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
 77,'1도 없어',38, 12, 3);
 
INSERT INTO MUSIC(
 MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
 78,'ALRIGHT',38, 12, 3);
 
 INSERT INTO MUSIC(
 MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
 79,'시간이 들겠지(Feat. Colde)',39, 13, 2); 
 
INSERT INTO MUSIC(
 MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
 80,'가을 타나 봐',40, 14, 1); 
 
INSERT INTO MUSIC(
 MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
 81,'이별길',41, 15, 3);  

INSERT INTO MUSIC(
 MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
 82,'내가 모르게',41, 15, 1);   
 
INSERT INTO MUSIC(
 MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
 83,'그때 헤어지면 돼',42, 16, 1);  
 
INSERT INTO MUSIC(
 MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
 84,'모든 날, 모든 순간',43, 17, 1);  
 

 
 
INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
85,'사랑에빠졌죠',56, 61, 32);
INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
86,'빗속으로',56, 61, 32);
INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
87,'그녀가웃었죠',56, 61, 32);
-------------------------------------------장범준
INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
88,'이상하다',55, 60, 1);
INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
89,'Gift',55, 60, 1);
INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
90,'Beautiful Day (feat.스컬)',55, 60, 3);

INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
91,'널바라기',55, 60, 1);

INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
92,'사랑이고프다',55, 60, 1);

INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
93,'Happy Christmas',55, 60, 3);
-----------------------------------------------박효신
INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
94,' If You Were Me',54, 26, 1);
--------------------------------벤
INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
95,'좋니',53, 25, 1);
-----------------------------------윤종신
INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
96,'이방인',52, 24, 1);
-----------------------------------------박원
INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
97,'너나 해',51, 23, 3);
INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
98,'잠이라도 자지',51, 23, 3);

INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
99,' 여름밤의 꿈',51, 23, 3);

INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
100,'하늘하늘',51, 23, 3);


INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
101,' SELFISH(Feat.슬기)',51, 23, 3);
-----------------------------------------마마무

INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
102,'Dejavu',50, 22, 32);

INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
103,'6 o`clock',50, 22, 32);
-----------------------------볼빨간사춘기
INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
104,'매트리스',49, 21, 32);
-------------------------------10cm
INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
105,'Power Up',48, 20, 3);
INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
106,'한 여름의 크리스마스',48, 20, 3);
INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
107,'Mr. E',48, 20, 3);
INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
108,'Mosquito',48, 20, 3);
INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
109,'Hit That Drum',48, 20, 3);
-------------------------------레드벨벳
INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
110,'동화',47, 27, 1);
INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
111,'바람',47, 27, 1);
INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
112,'Different Place',47, 27, 1);

INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
113,'Patience',47, 27, 1);

INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
114,'아름다운 순간',47, 27, 1);
--------------------------------멜로망스
INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
115,'가을 안부',46, 28, 1);
-------------------------------------먼데이키즈
INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
116,'Dance The Night Away',45, 19, 3);
INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
117,'CHILLAX',45, 19, 3);
INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
118,'Shot thru the heart',45, 19, 3);

INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
119,'What is Love?',45, 19, 3);

INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
120,'HO!',45, 19, 3);

INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
121,' SWEET TALKER?',45, 19, 1);
--------------------------트와이스
INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
122,' 뚜두뚜두',44, 18, 3);

INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
123,'  Forever Young',44, 18, 2);

INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
124,'Really',44, 18, 6);

INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)
VALUES(
125,'See U Later',44, 18, 6);
---------------------------------------블랙핑크
 
desc img;
drop table img;
 
INSERT INTO IMG(
 IMG_NAME, EXT, SEQ
)
VALUES
(
'트와이스_Summer_Magic','jpg', 48),
('10cm_4_1','jpg', 49),
('볼빨간사춘기_Red_Diary','jpg', 50), 
('마마무_RED_MOON','jpg', 51),
('IU_꽃갈피_둘','jpg', 33),
('IU_삐삐','jpg', 31),
('빈지노_24_26','jpg', 30),
('선미_WARNING','jpg', 29),
('선미_주인공','jpg', 35),
('임창정_하루도_그대를','jpg', 34),
('선미_가시나','jpg',36),
('방탄소년단_LY_Answer','jpg',37),
('에이핑크_ONE_SIX','jpg',38),
('로꼬_시간이들겠지','jpg',39),
('VIBE_가을타나봐','jpg',40),
('IKON_NEW_KIDS','jpg',41),
('박원_이방인','jpg', 52),
('윤종신_좋니','jpg', 53),
('벤_If_You_Were_Me','jpg', 54),
('박효신_Gift','jpg', 55),
('장범준_2집','jpg', 56),
('로이킴_그때_헤어지면_돼','jpg', 42),
('폴킴_키스_먼저_할까요','jpg', 43),
('블랙핑크_SQUARE_UP','jpg', 44),
('트와이스_Summer_Nights','jpg', 45),
('먼데이키즈_가을안부','jpg', 46),
('멜로망스_The_Fairy_Tale','jpg', 47);




ALTER TABLE updown CHANGE LIKE_SEQ UD_SEQ INT NOT NULL;
ALTER TABLE updown CHANGE ud_seq ud_seq INT AUTO_INCREMENT; 
desc updown;


INSERT INTO VIEW_RECORD(
 MEMBER_ID, SEQ_GROUP, SG_ELEMENT
)
VALUES(
'shin',89, 'music'
);

DELETE FROM VIEW_RECORD
WHERE MEMBER_ID LIKE 'shin';


 select seq_group,count(*) from view_record group by seq_group;
 select music_seq, music_title from music;
 select seq_group from view_record where view_date >= '2018-10-15%' and view_date <= '2018-10-17%';

 
 ALTER TABLE artist ADD intro varchar(2000);
 
 UPDATE artist
 SET debut = '2013.08.01'
 where artist_seq like 7;

 ALTER TABLE member ADD join_date timestamp DEFAULT now();

 ALTER TABLE member CHANGE join_date join_date timestamp DEFAULT now();

 
 ALTER TABLE member DROP COLUMN join_date;
 
 ALTER TABLE member DROP COLUMN join_date;
 
 select * from member;

 
 ALTER TABLE updown CHANGE UD_SEQ UD_SEQ INT NOT NULL AUTO_INCREMENT;
 
  
INSERT INTO ALBUM(
   ALBUM_SEQ, ALBUM_TITLE, ARTIST_NAME, ALBUM_GENRE
)
VALUES(
   126,'LOVE YOURSELF 轉 Tear', '방탄소년단', '힙합'
);

INSERT INTO ALBUM(
   ALBUM_SEQ, ALBUM_TITLE, ARTIST_NAME, ALBUM_GENRE
)
VALUES(
   127,'LOVE YOURSELF 承 Her', '방탄소년단', '힙합'
);

INSERT INTO ALBUM(
   ALBUM_SEQ, ALBUM_TITLE, ARTIST_NAME, ALBUM_GENRE
)
VALUES(
   128,'YOU NEVER WALK ALONE', '방탄소년단', '힙합'
);
INSERT INTO ALBUM(
   ALBUM_SEQ, ALBUM_TITLE, ARTIST_NAME, ALBUM_GENRE
)
VALUES(
   129,'WINGS', '방탄소년단', '힙합'
);
INSERT INTO ALBUM(
   ALBUM_SEQ, ALBUM_TITLE, ARTIST_NAME, ALBUM_GENRE
)
VALUES(
   130,'화양연화 Young Forever', '방탄소년단', '힙합'
);
INSERT INTO ALBUM(
   ALBUM_SEQ, ALBUM_TITLE, ARTIST_NAME, ALBUM_GENRE
)
VALUES(
   131,'화양연화 pt.2', '방탄소년단', '힙합'
);
INSERT INTO ALBUM(
   ALBUM_SEQ, ALBUM_TITLE, ARTIST_NAME, ALBUM_GENRE
)
VALUES(
   132,'화양연화 pt.1', '방탄소년단', '힙합'
);
 
INSERT INTO IMG( IMG_NAME, EXT, SEQ 
)VALUES(
'방탄소년단_LY_tear','jpg',126
);
INSERT INTO IMG( IMG_NAME, EXT, SEQ 
)VALUES(
'방탄소년단_LY_her','jpg',127
);
INSERT INTO IMG( IMG_NAME, EXT, SEQ 
)VALUES(
'방탄소년단_YNWA','jpg',128
);
INSERT INTO IMG( IMG_NAME, EXT, SEQ 
)VALUES(
'방탄소년단_WINGS','jpg',129
);
INSERT INTO IMG( IMG_NAME, EXT, SEQ 
)VALUES(
'방탄소년단_화양연화_YF','jpg',130
);
INSERT INTO IMG( IMG_NAME, EXT, SEQ 
)VALUES(
'방탄소년단_화양연화_pt2','jpg',131
);
INSERT INTO IMG( IMG_NAME, EXT, SEQ 
)VALUES(
'방탄소년단_화양연화_pt1','jpg',132
);


INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)VALUES
(133,'FAKE LOVE',126, 11,2),
(134,'전하지 못한 진심 (Feat. Steve Aoki)',126, 11,1),
(135,'Anpanman',126, 11,2),
(136,'Airplane pt.2',126, 11,2);
INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)VALUES
(137,'DNA',127, 11,2),
(138,'MIC Drop',127, 11,2),
(139,'고민보다 Go',127, 11,3),
(140,'Best Of Me',127, 11,2)
;
INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)VALUES
(141,'봄날',128, 11,2),
(142,'Not Today',128, 11,2),
(143,'Lost',128, 11,2),
(144,'BTS Cypher 4',128, 11,2)
;
INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)VALUES
(145,'피 땀 눈물',129, 11,2),
(146,'Am I Wrong',129, 11,2),
(147,'21세기 소녀',129, 11,2),
(148,'둘! 셋! (그래도 좋은 날이 더 많기를)',129, 11,2)
;
INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)VALUES
(149,'불타오르네 (FIRE)',130, 11,2),
(150,'Save ME',130, 11,2),
(151,'EPILOGUE : Young Forever',130, 11,2)
;
INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)VALUES
(152,'RUN',131, 11,2),
(153,'Butterfly',131, 11,2),
(154,'Whalien 52',131, 11,2),
(155,'뱁새',131, 11,2)
;
INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ALBUM_SEQ, ARTIST_SEQ, GENRE_SEQ
)VALUES
(156,'I NEED U',132, 11,2),
(157,'쩔어',132, 11,2),
(158,'흥탄소년단',132, 11,2),
(159,'잡아줘 (Hold Me Tight)',132, 11,2)
;



<!-- seq 160번부터 -->
INSERT INTO ARTICLE( ARTICLE_SEQ, MEMBER_ID, BOARD_SEQ, HASH)
VALUES
('160','sound',1,'1,9,11'),
('161','sound',1,'2,5,11'),
('162','sound',1,'1,10,15'),
('163','sound',1,'1,3,13'),
('164','sound',1,'2,3,7'),
('165','sound',1,'2,4,9'),
('166','sound',1,'13,14,15'),
('167','sound',1,'5,11,14'),
('168','sound',1,'4,6,7'),
('169','sound',1,'1,3,5'),
('170','sound',1,'6,7,8'),
('171','sound',1,'4,13,15'),
('172','sound',1,'4,9,14'),
('173','sound',1,'5,7,11'),
('174','sound',1,'1,2,3'),
('175','sound',1,'4,8,15'),
('176','sound',1,'6,10,11')



desc updown;
desc login_record;
desc member;

INSERT INTO MEMBER(MEMBER_ID,PASS,BIRTH,SEX)
VALUES('pizza','1111','770803','남');

<!-- 트와이스 곡만 넣기 177번부터 -->
INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ARTIST_SEQ, GENRE_SEQ
)VALUES
(177,'CHEER UP', 19,3),
(178,'KNOCK KNOCK', 19,3),
(179,'LIKEY', 19,3),
(180,'Heart Shaker', 19,3),
(181,'TT', 19,3)
;
<!-- 레드벨벳곡 넣기 182번부터 -->
INSERT INTO MUSIC(
MUSIC_SEQ, MUSIC_TITLE, ARTIST_SEQ, GENRE_SEQ
)VALUES
(182,'빨간 맛 (Red Flavor)', 20,3),
(183,'Bad Boy', 20,3),
(184,'러시안 룰렛 (Russian Roulette)', 20,3),
(185,'Rookie', 20,3),
(186,'Ice Cream Cake', 20,3)
;


UPDATE MUSIC
SET ARTIST_SEQ = 20
where MUSIC_SEQ like 186;

INSERT INTO MEMBER (MEMBER_ID,PASS,BIRTH,SEX) VALUES('libero','1111','030901','남');
INSERT INTO MEMBER (MEMBER_ID,PASS,BIRTH,SEX) VALUES('metus','1111','010630','남');
INSERT INTO MEMBER (MEMBER_ID,PASS,BIRTH,SEX) VALUES('tempus','1111','000227','남');
INSERT INTO MEMBER (MEMBER_ID,PASS,BIRTH,SEX) VALUES('mattis','1111','010507','남');
INSERT INTO MEMBER (MEMBER_ID,PASS,BIRTH,SEX) VALUES('turpis','1111','000514','여');
INSERT INTO MEMBER (MEMBER_ID,PASS,BIRTH,SEX) VALUES('tellus','1111','020103','여');
INSERT INTO MEMBER (MEMBER_ID,PASS,BIRTH,SEX) VALUES('magna','1111','000714','여');
INSERT INTO MEMBER (MEMBER_ID,PASS,BIRTH,SEX) VALUES('varius','1111','031004','여');
INSERT INTO MEMBER (MEMBER_ID,PASS,BIRTH,SEX) VALUES('dolor','1111','031027','여');
INSERT INTO MEMBER (MEMBER_ID,PASS,BIRTH,SEX) VALUES('ornare','1111','940108','남');
INSERT INTO MEMBER (MEMBER_ID,PASS,BIRTH,SEX) VALUES('sapien','1111','960209','남');
INSERT INTO MEMBER (MEMBER_ID,PASS,BIRTH,SEX) VALUES('tortor','1111','990207','남');
INSERT INTO MEMBER (MEMBER_ID,PASS,BIRTH,SEX) VALUES('neque','1111','951011','남');
INSERT INTO MEMBER (MEMBER_ID,PASS,BIRTH,SEX) VALUES('mollis','1111','910106','남');
INSERT INTO MEMBER (MEMBER_ID,PASS,BIRTH,SEX) VALUES('auctor','1111','960814','여');
INSERT INTO MEMBER (MEMBER_ID,PASS,BIRTH,SEX) VALUES('enimIn','1111','990220','여');
INSERT INTO MEMBER (MEMBER_ID,PASS,BIRTH,SEX) VALUES('lacus','1111','970706','여');
INSERT INTO MEMBER (MEMBER_ID,PASS,BIRTH,SEX) VALUES('justo','1111','940408','여');
INSERT INTO MEMBER (MEMBER_ID,PASS,BIRTH,SEX) VALUES('tempor','1111','940422','여');
INSERT INTO MEMBER (MEMBER_ID,PASS,BIRTH,SEX) VALUES('risus','1111','830204','남');
INSERT INTO MEMBER (MEMBER_ID,PASS,BIRTH,SEX) VALUES('congue','1111','800629','남');
INSERT INTO MEMBER (MEMBER_ID,PASS,BIRTH,SEX) VALUES('velit','1111','850109','남');
INSERT INTO MEMBER (MEMBER_ID,PASS,BIRTH,SEX) VALUES('massa','1111','860217','여');
INSERT INTO MEMBER (MEMBER_ID,PASS,BIRTH,SEX) VALUES('porta','1111','811019','여');
INSERT INTO MEMBER (MEMBER_ID,PASS,BIRTH,SEX) VALUES('mauris','1111','880513','여');
INSERT INTO MEMBER (MEMBER_ID,PASS,BIRTH,SEX) VALUES('nulla','1111','700904','남');
INSERT INTO MEMBER (MEMBER_ID,PASS,BIRTH,SEX) VALUES('ligula','1111','700327','남');
INSERT INTO MEMBER (MEMBER_ID,PASS,BIRTH,SEX) VALUES('ipsum','1111','741111','여');
INSERT INTO MEMBER (MEMBER_ID,PASS,BIRTH,SEX) VALUES('lorem','1111','721108','여');
INSERT INTO MEMBER (MEMBER_ID,PASS,BIRTH,SEX) VALUES('semper','1111','660712','남');
INSERT INTO MEMBER (MEMBER_ID,PASS,BIRTH,SEX) VALUES('felis','1111','690101','여');
INSERT INTO MEMBER (MEMBER_ID,PASS,BIRTH,SEX) VALUES('vitae','1111','660808','여');

UPDATE article SET TITLE = '하나 별 밤을 듯합니다', CONTENTS = '102,101,72,181,64,178' WHERE ARTICLE_SEQ LIKE 160 ;
UPDATE article SET TITLE = '봄이 소녀들의 멀리 까닭입니다', CONTENTS = '156,85,106,180,122,178,63,89,88' WHERE ARTICLE_SEQ LIKE 161 ;
UPDATE article SET TITLE = '보고, 파란 어머니, 시와 있습니다', CONTENTS = '111,87,95,117,140,156,105,155,106,116' WHERE ARTICLE_SEQ LIKE 162 ;
UPDATE article SET TITLE = '아이들의 무덤 별 흙으로 거외다', CONTENTS = '122,58,82,70,98,145,148' WHERE ARTICLE_SEQ LIKE 163 ;
UPDATE article SET TITLE = '프랑시스 별이 이런 걱정도 까닭입니다', CONTENTS = '141,184,139,123,62,182,114' WHERE ARTICLE_SEQ LIKE 164 ;
UPDATE article SET TITLE = '부끄러운 내린 아침이 버리었습니다', CONTENTS = '82,111,106,87,159,115' WHERE ARTICLE_SEQ LIKE 165 ;
UPDATE article SET TITLE = '된 묻힌 가슴속에 마리아 봅니다', CONTENTS = '108,158,135,112,118,90,92,181,121,124' WHERE ARTICLE_SEQ LIKE 166 ;
UPDATE article SET TITLE = '새워 지나가는 별 까닭입니다', CONTENTS = '67,84,105,80,149,93,58,63,136' WHERE ARTICLE_SEQ LIKE 167 ;
UPDATE article SET TITLE = '하나에 당신은 묻힌 거외다', CONTENTS = '119,77,136,182,62,157' WHERE ARTICLE_SEQ LIKE 168 ;
UPDATE article SET TITLE = '이네들은 흙으로 벌레는 시와 까닭입니다', CONTENTS = '115,57,69,95,178,102' WHERE ARTICLE_SEQ LIKE 169 ;
UPDATE article SET TITLE = '밤이 너무나 둘 이제 그리워 듯합니다', CONTENTS = '120,93,88,184,138,135,73' WHERE ARTICLE_SEQ LIKE 170 ;
UPDATE article SET TITLE = '어머니, 불러 책상을 있습니다', CONTENTS = '93,181,108,67,110,113' WHERE ARTICLE_SEQ LIKE 171 ;
UPDATE article SET TITLE = '이네들은 사람들의 이런 버리었습니다', CONTENTS = '69,94,93,139,117,150,124,102' WHERE ARTICLE_SEQ LIKE 172 ;
UPDATE article SET TITLE = '하나에 소녀들의 별 까닭입니다', CONTENTS = '77,119,90,151,135,108,141' WHERE ARTICLE_SEQ LIKE 173 ;
UPDATE article SET TITLE = '나의 어머님, 위에도 이름자를 봅니다', CONTENTS = '86,85,82,97,179,68,80,74,62,133,58' WHERE ARTICLE_SEQ LIKE 174 ;
UPDATE article SET TITLE = '하나에 무덤 덮어 풀이 써 봅니다', CONTENTS = '97,124,92,149,147,99,153,58,85,67' WHERE ARTICLE_SEQ LIKE 175 ;
UPDATE article SET TITLE = '책상을 하나에 마리아 릴케 까닭입니다', CONTENTS = '181,88,105,141,108,138,99,158,86' WHERE ARTICLE_SEQ LIKE 176 ;


DELETE FROM view_record
WHERE member_id LIKE 'shin';


SELECT seq_group, count(*) FROM UPDOWN WHERE SG_ELEMENT LIKE 'genre' GROUP BY seq_group;



SELECT ud.seq_group, ud.member_id, m.sex, m.birth  FROM UPDOWN ud join member m on ud.member_id = m.member_id WHERE SG_ELEMENT LIKE 'genre' and seq_group like 1;

SELECT VI.뮤직번호 , VI.성별, COUNT(VI.성별)
FROM
(SELECT M.MEMBER_ID 아이디, M.BIRTH 생일, M.SEX 성별, V.SEQ_GROUP 뮤직번호, UD.TYPES 업다운
FROM MEMBER M 
	JOIN (SELECT MEMBER_ID, SEQ_GROUP
		  FROM VIEW_RECORD
		  WHERE SEQ_GROUP IN (
				SELECT MUSIC_SEQ
				FROM MUSIC
				WHERE ARTIST_SEQ LIKE 11)) V 
	ON M.MEMBER_ID = V.MEMBER_ID
	JOIN UPDOWN UD
	ON V.SEQ_GROUP = UD.SEQ_GROUP) VI
WHERE UD.TYPES LIKE 'u'
	and M.BIRTH LIKE '0%';
GROUP BY VI.뮤직번호;

/*뷰연습 및 아티스트 분석*/
SELECT VI.뮤직번호, VI.성별, COUNT(VI.성별) 성별
FROM
(
SELECT M.MEMBER_ID 아이디, M.BIRTH 생일, M.SEX 성별, V.SEQ_GROUP 뮤직번호, UD.TYPES 업다운
FROM MEMBER M 
	JOIN (SELECT MEMBER_ID, SEQ_GROUP
		  FROM VIEW_RECORD
		  WHERE SEQ_GROUP IN (
				SELECT MUSIC_SEQ
				FROM MUSIC
				WHERE ARTIST_SEQ LIKE 11)) V 
	ON M.MEMBER_ID = V.MEMBER_ID
	JOIN UPDOWN UD
	ON V.SEQ_GROUP = UD.SEQ_GROUP
) VI	
WHERE VI.업다운 LIKE 'u'
	and VI.생일 LIKE '0%'
GROUP BY VI.뮤직번호, VI.성별;


INSERT INTO IMG(IMG_NAME,EXT,SEQ) VALUES('profile_선미','jpg',7);


SELECT MEMBER_ID, SEQ_GROUP
FROM VIEW_RECORD
WHERE SEQ_GROUP IN (
			SELECT MUSIC_SEQ
			FROM MUSIC
			WHERE ARTIST_SEQ LIKE 11);
	

			
<!-- DJ게시판 이미지 -->			
INSERT INTO IMG ( IMG_NAME, EXT, SEQ ) VALUE ( 'DJ_IMAGE_1', 'jpg', 160 );
INSERT INTO IMG ( IMG_NAME, EXT, SEQ ) VALUE ( 'DJ_IMAGE_3', 'jpg', 161 );
INSERT INTO IMG ( IMG_NAME, EXT, SEQ ) VALUE ( 'DJ_IMAGE_2', 'jpg', 162 );
INSERT INTO IMG ( IMG_NAME, EXT, SEQ ) VALUE ( 'DJ_IMAGE_2', 'jpg', 163 );
INSERT INTO IMG ( IMG_NAME, EXT, SEQ ) VALUE ( 'DJ_IMAGE_3', 'jpg', 164 );
INSERT INTO IMG ( IMG_NAME, EXT, SEQ ) VALUE ( 'DJ_IMAGE_1', 'jpg', 165 );
INSERT INTO IMG ( IMG_NAME, EXT, SEQ ) VALUE ( 'DJ_IMAGE_3', 'jpg', 166 );
INSERT INTO IMG ( IMG_NAME, EXT, SEQ ) VALUE ( 'DJ_IMAGE_3', 'jpg', 167 );
INSERT INTO IMG ( IMG_NAME, EXT, SEQ ) VALUE ( 'DJ_IMAGE_2', 'jpg', 168 );
INSERT INTO IMG ( IMG_NAME, EXT, SEQ ) VALUE ( 'DJ_IMAGE_2', 'jpg', 169 );
INSERT INTO IMG ( IMG_NAME, EXT, SEQ ) VALUE ( 'DJ_IMAGE_2', 'jpg', 170 );
INSERT INTO IMG ( IMG_NAME, EXT, SEQ ) VALUE ( 'DJ_IMAGE_1', 'jpg', 171 );
INSERT INTO IMG ( IMG_NAME, EXT, SEQ ) VALUE ( 'DJ_IMAGE_2', 'jpg', 172 );
INSERT INTO IMG ( IMG_NAME, EXT, SEQ ) VALUE ( 'DJ_IMAGE_3', 'jpg', 173 );
INSERT INTO IMG ( IMG_NAME, EXT, SEQ ) VALUE ( 'DJ_IMAGE_3', 'jpg', 174 );
INSERT INTO IMG ( IMG_NAME, EXT, SEQ ) VALUE ( 'DJ_IMAGE_1', 'jpg', 175 );
INSERT INTO IMG ( IMG_NAME, EXT, SEQ ) VALUE ( 'DJ_IMAGE_1', 'jpg', 176 );			
			