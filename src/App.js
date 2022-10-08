import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import Card from "./Pages/Main";
import Stats from "./Components/Stats";
import Success from "./Pages/Success";
import Navbar from "./Components/Navbar"
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  // https://jinh.kr/bucket/

  useEffect(() => {
    /*fetch('http://localhost:8000/notes')
      .then(res => res.json())
      .then(data => setNotes(data))*/
      setNotes({
        "notes": [
          { 
            "title": "버킷리스트",
            "details": "버킷리스트 만들기",
            "successdetails": "예전부터 생각하고 있었던거긴z` 한데 드디어 만들었다!!",
            "successimage": "",
            "category": "TOP",
            "success": "1",
            "date": "2021.08.16",
            "image": "",
            "id": 1
          },
          {
            "title": "대만",
            "details": "대만 여행하기.",
            "successdetails": "위는 실제로 대만에 여행가서 찍은 사진이다. 여행 내내 날씨가 좋지는 않았지만 :(",
            "successimage": "20200127_032332702_iOS.jpg",
            "category": "여행",
            "success": "1",
            "date": "2020.01.27",
            "image": "",
            "id": 2
          },
          {
            "title": "미국",
            "details": "미국 여행하기",
            "category": "여행",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 3
          },
          {
            "title": "undefined",
            "details": "아래에 있는 교통 수단 모두 탑승해보기: \n- 지하철(2015)\n- KTX(2021)\n- 모노레일(2019)\n- 유람선\n- 열기구\n- SRT",
            "category": "여행",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 4
          },
          {
            "title": "응 그래 나 돈 많아",
            "details": "신라호텔에서 *혼자* 숙박하기",
            "category": "여행",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 5
          },
          {
            "title": "제주도",
            "details": "제주 당일치기로 *혼자* 갔다오기",
            "category": "여행",
            "success": "1",
            "date": "2022.08.16",
            "image": "",
            "successdetails": "8월 15일 23시에 비행기표 예약. 다음 날 개학이었는데 갑자기 가고싶어져서.",
            "successimage": "",
            "id": 6
          },
          {
            "title": "아이캔트래벌위드버스!",
            "details": "서울에서 여수까지 시내버스만 타고 가보기",
            "category": "여행",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 7
          },
          {
            "title": "Singapore Airlines",
            "details": "싱항 비즈니스클래스 *혼자* 타고 4시간 30분 이상 걸리는 해외 가보기(어메니티 챙기기!!)",
            "category": "여행",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 8
          },
          {
            "title": "길거리 화가",
            "details": "여행지를 사진 대신 종이에 그림을 그려보기",
            "category": "여행",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 9
          },
          {
            "title": "바다, 해상업, 해군, 마린",
            "details": "마린시티 가보기",
            "category": "여행",
            "success": "1",
            "date": "2022.02.23",
            "image": "",
            "successdetails": "원래는 계획에 없었는데 해운대 해수욕장 가서 마린시티에 가 본게 됨.",
            "successimage": "",
            "id": 10
          },
          {
            "title": "화려한 나의 크리스마스",
            "details": "크리스마스 당일 *혼자* 호캉스즐기면서 분위기내기",
            "category": "여행",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 11
          },
          {
            "title": "こんにちは",
            "details": "일본어 배우기",
            "category": "교육",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 12
          },
          {
            "title": "コーヒー1杯ください。",
            "details": "일본에서 한 달 살기",
            "category": "여행",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 13
          },
          {
            "title": "소중한 동행자",
            "details": "위 사진처럼 여행지에 개구리 인형 가져가서 사진찍기(인형은 구매해둠)",
            "category": "여행",
            "success": "0",
            "date": "",
            "image": "frog.png",
            "successdetails": "",
            "successimage": "",
            "id": 14
          },
          {
            "title": "서울살아본지..",
            "details": "2020년 이후에 서울에서 2년 이상 살아보기",
            "category": "기타",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 15
          },
          {
            "title": "내집올래?",
            "details": "독립하기",
            "category": "기타",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 16
          },
          {
            "title": "너가 뭔데 ㅋ",
            "details": "중학교때 걸리적거렸던 칭구 고소하기(맞춤법 모르는거 아님!)",
            "category": "기타",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 17
          },
          {
            "title": "개발할시간에 공부했으면..",
            "details": "개발할시간에 공부하기",
            "category": "기타",
            "success": "1",
            "date": "2021",
            "image": "",
            "successdetails": "위의 잔디를 보면 알겠지만 개발 거의 접다시피 하니까 시험 잘봄.",
            "successimage": "grass.png",
            "id": 18
          },
          {
            "title": "뚝딱뚝딱",
            "details": "사진처럼 방을 꾸며보기(이케아쇼룸에서 가져옴)",
            "category": "기타",
            "success": "0",
            "date": "",
            "image": "myroom.png",
            "successdetails": "",
            "successimage": "",
            "id": 19
          },
          {
            "title": "시선강탈",
            "details": "펜돌리는법 익히기",
            "category": "기타",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 20
          },
          {
            "title": "하나도 외롭지 않아..정말로",
            "details": "아래의 식당에서 *혼자서* 밥먹기:\n- 떡볶이집(2021)\n- 푸드코트\n- 중국집\n- 일식집\n- 남의 집",
            "category": "음식",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 21
          },
          {
            "title": "홀리",
            "details": "미슐랭 스타를 얻은 식당에서 *혼자* 밥먹기",
            "category": "음식",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 22
          },
          {
            "title": "살찌는데",
            "details": "전국 유명한 떡볶이집 성지순례",
            "category": "음식",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 23
          },
          {
            "title": "사이버 월드의 주민",
            "details": "블로그를 개설하고 구글 검색 결과에 나오게 하기",
            "category": "사람",
            "success": "1",
            "date": "2017",
            "image": "",
            "successdetails": "이 때 티스토리 초대장 얻으려고 엄청 애썼던 기억이.. 지금은 초대장 없어도 가입할 수 있긴 하다.",
            "successimage": "",
            "id": 24
          },
          {
            "title": "블로거",
            "details": "블로그 총 방문자 5만명 또는 일일 방문자 250명 달성하기",
            "category": "사람",
            "success": "1",
            "date": "2021",
            "image": "",
            "successdetails": "블로그 총 방문자 5만명 && 일 방문 300명을 달성함!! 블로그를 새로 만들고 달성한 결과. 다행이도 대부분의 글이 상위권에 노출된다.",
            "successimage": "ttb.png",
            "id": 25
          },
          {
            "title": "지구는 둥그니까, 자꾸자꾸 걸어나가면..",
            "details": "해외에 살고있는 한국인 친구 사귀기",
            "category": "사람",
            "success": "1",
            "date": "2019",
            "image": "",
            "successdetails": "소중한 친구를 만났다.",
            "successimage": "",
            "id": 26
          },
          {
            "title": "지구는 둥그니까, 자꾸자꾸 걸어나가면..2",
            "details": "해외에 살고있는 외국인 친구 사귀고, 관계 1년 이상 유지하기",
            "category": "사람",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 27
          },
          {
            "title": "지구는 둥그니까, 자꾸자꾸 걸어나가면..만날 수 있겠지!",
            "details": "해외에 살고있는 외국인 친구 사귀고 오프라인에서 만나기",
            "category": "사람",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 28
          },
          {
            "title": "가까운 미래",
            "details": "블로그 수익 100달러",
            "category": "소유",
            "success": "1",
            "date": "2021",
            "image": "",
            "successdetails": "이거 받으려고 SC제일은행 계좌를 만들었다. 신한은행등등과 비교는 조만간 블로그에 서술예정",
            "successimage": "gasearn.png",
            "id": 29
          },
          {
            "title": "이게 될까?",
            "details": "블로그 수익 1000달러",
            "category": "소유",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 30
          },
          {
            "title": "될거같은데..",
            "details": "블로그 수익 10000 달러",
            "category": "소유",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 31
          },
          {
            "title": "신용카드 평잔",
            "details": "12달동안 평균잔고 700만원 유지하기",
            "category": "소유",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 32
          },
          {
            "title": "이 통장은 예금자 보호법에 의해..",
            "details": "통장잔고 5000만원",
            "category": "소유",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 33
          },
          {
            "title": "내집마련",
            "details": "내집마련하기",
            "category": "소유",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 34
          },
          {
            "title": "내가만들었다!!",
            "details": "누군가에게 이 버킷리스트 자랑하기",
            "category": "사람",
            "success": "1",
            "date": "2021.11.03",
            "image": "",
            "successdetails": "같은 학원 다니는 친구가 10대에 뭐하고싶냐고 물어봐서 자랑함.",
            "successimage": "",
            "id": 35
          },
          {
            "title": "저는 무료에요(i'm free)",
            "details": "고등학교 졸업하기",
            "category": "교육",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 36
          },
          {
            "title": "네 다음 취업",
            "details": "4년제 대학 졸업하기",
            "category": "교육",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 37
          },
          {
            "title": "프랑스",
            "details": "프랑스 여행하기",
            "category": "여행",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 38
          },
          {
            "title": "이탈리아",
            "details": "이탈리아 여행하기",
            "category": "여행",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 39
          },
          {
            "title": "우와!!!!",
            "details": "중학교 지필 평균 95 넘겨보기",
            "category": "교육",
            "success": "1",
            "date": "2021.07.01",
            "image": "",
            "successdetails": "평균이 95.xx였는데 ",
            "successimage": "",
            "id": 40
          },
          {
            "title": "잘못나왔니",
            "details": "중학교 지필 올백",
            "category": "교육",
            "success": "1",
            "date": "2022.10.07",
            "image": "",
            "successdetails": "3학년 2학기 중간고사에서 올백 찍고 졸업 ⭐",
            "successimage": "",
            "id": 41
          },
          {
            "title": "유사 개발자",
            "details": "아마존 또는 구글 행사에 개발자 자격으로 참여해보기",
            "category": "사람",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 42
          },
          {
            "title": "눈 호강",
            "details": "4K모니터 구매하기",
            "category": "소유",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 43
          },
          {
            "title": "돈=힘=권력을 아십니까",
            "details": "*학생*때 외주받아서 월 수익 50만원 넘기기",
            "category": "소유",
            "success": "1",
            "date": "2021.02",
            "image": "",
            "successdetails": "솔직히 50만원은 힘들거같아서 45만원으로 변경. 원래 굉장히 바쁘게 살아서 여유 시간이 없는데 받다보니 잠자는 시간을 줄여가며 개발했는데 건강 악화.",
            "successimage": "money.png",
            "id": 44
          },
          {
            "title": "재팬재팬재팬",
            "details": "일본 여행하기",
            "category": "여행",
            "success": "1",
            "date": "2015",
            "image": "",
            "successdetails": "어릴때가서 사진이 하나도 없다. 정확히 뭘 했는지 기억나지도 않는다.",
            "successimage": "",
            "id": 45
          },
          {
            "title": "찰칵",
            "details": "100만원 이상의 DSLR카메라 구입하기",
            "category": "소유",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 46
          },
          {
            "title": "소정의 원고료를 제공받아 작성되었습니다",
            "details": "제품을 지원받고 블로그에 포스팅하기",
            "category": "소유",
            "success": "1",
            "date": "2022.08.13",
            "image": "",
            "successdetails": "타이틀과는 맞지 않지만, '제품을 지원받아' 포스팅함. 비싼건 아니고 아이패드 케이스. 원래 필요했었는데 잘 쓰고 있음.",
            "successimage": "",
            "id": 47
          },
          {
            "title": "무려 양손이 나와...!!!",
            "details": "액션캠 구매",
            "category": "소유",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 48
          },
          {
            "title": "이 십만(마일리지 모은 귀여운)",
            "details": "항공사 100,000마일리지 이상 쌓아보기",
            "category": "여행",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 49
          },
          {
            "title": "할 수 있을까",
            "details": "3호선에서 내리고 다음역까지 가서 같은 칸에 타기",
            "category": "여행",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 50
          },
          {
            "title": "비장의무기",
            "details": "스마트워치 구매하기",
            "category": "소유",
            "success": "1",
            "date": "2022.01",
            "image": "",
            "successdetails": "애플워치 SE를 구매함. 일주일만에 반품하긴 했지만 그래도 구매하긴 했음.",
            "successimage": "",
            "id": 51
          },
          {
            "title": "이상과 현실의 어딘가",
            "details": "노이즈 캔슬링 되는 무선 이어폰 구매하기",
            "category": "소유",
            "success": "1",
            "date": "2021.08.18",
            "image": "",
            "successdetails": "버즈2를 *사전예약으로* 거금(14만원)을들여가며 구매하였다. 모아둔돈 다씀.",
            "successimage": "",
            "id": 52
          },
          {
            "title": "등산을 좋아하지는 않는데",
            "details": "해발 1000m 이상 산 등산해보기",
            "category": "여행",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 53
          },
          {
            "title": "너는 정말...",
            "details": "하루동안 격렬하게 아무것도 안하고 늘어져있기",
            "category": "기타",
            "success": "1",
            "date": "2021.12.25",
            "image": "",
            "successdetails": "시험도 끝났고,, 여친도 없고,, 그래서 아무것도 안하진 않고 애플스토어에 가서 디스플레이를 바꾸기는 했지만 정말로 그것 말고는 격렬하게 아무것도 안했음.",
            "successimage": "",
            "id": 54
          },
          {
            "title": "3의 3제곱",
            "details": "3x3x3 큐브 맞춰보기",
            "category": "기타",
            "success": "1",
            "date": "2018",
            "image": "",
            "successdetails": "큐브 맞췄을때의 쾌감. 안맞춰본지 2년 넘어서 어떻게 맞추는지 기억나지도 않는다.",
            "successimage": "",
            "id": 55
          },
          {
            "title": "지구 한 바퀴",
            "details": "이동수단으로 40,075km 이동해보기",
            "category": "여행",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "지금까지 1,821KM(1132Mile)을 걸었다.",
            "successimage": "",
            "id": 56
          },
          {
            "title": "나만 고양이 없어",
            "details": "고양이 키우기. 소유 카테고리에 넣을지 기타에 넣을지 고민하다가 고양이가 내 소유는 아닌거같아서 기타에 넣음",
            "category": "기타",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 57
          },
          {
            "title": "뭘봐",
            "details": "나만의 암호 만들기; 해독도 가능하게",
            "category": "기타",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 58
          },
          {
            "title": "카드좀 긁었지 ㅋ",
            "details": "신용카드 발급받기",
            "category": "소유",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 59
          },
          {
            "title": "교양있고 똑똑한",
            "details": "영화의 원작인 소설을 번역 없이 읽어보기",
            "category": "교육",
            "success": "1",
            "date": "2021.08.20",
            "image": "",
            "successdetails": "Lois Lowry의 The Giver를 읽어보았다. 영화같은경우 초등학교 6학년 영어선생님이 보여주셨는데, 반 친구들 모두 재미있게 봤던 기억이 있다. 영어선생님 그립다 :(",
            "successimage": "the-giver.jpg",
            "id": 60
          },
          {
            "title": "천재다 진짜",
            "details": "원주율 50자리까지 외우기",
            "category": "교육",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "3.141592653589793238462643383 / 지금은 27자리까지 외웠다.",
            "successimage": "",
            "id": 61
          },
          {
            "title": "한국인인데 외국인인척",
            "details": "해외 유심 개통하고, 전화번호 가지기",
            "category": "기타",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "지금 Giffgaff라는 영국 통신사의 유심은 보유함. 개통만 하면 되는데 10파운드를 충전해야해서 여유자금 생기는대로 충전예정.",
            "successimage": "giffgaff.jpg",
            "id": 62
          },
          {
            "title": "undefined",
            "details": "골든게이트 브릿지(Golden Gate bridge) 걸어보기",
            "category": "여행",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 63
          },
          {
            "title": "익스큐즈미..",
            "details": "해외에서 길 잃어보기",
            "category": "여행",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 64
          },
          {
            "title": "펭귄",
            "details": "날아보기(펭귄이 못난다는 사실은 알고있음)",
            "category": "여행",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 65
          },
          {
            "title": "익스큐즈미..",
            "details": "해외에서 길 잃어보기",
            "category": "여행",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 66
          },
          {
            "title": "안녕하세요...",
            "details": "한국 또는 다른 나라의 대통령 만나보기",
            "category": "여행",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 67
          },
          {
            "title": "교양있을거같은데",
            "details": "영화가 되기 전에 영화가 될법한 소설책을 예상해서 읽어보기",
            "category": "교육",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 68
          },
          {
            "title": "내 소중한 피 가져가요",
            "details": "헌혈 은장(30회) 받아보기",
            "category": "기타",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 69
          },
          {
            "title": "마라톤..은 못하고 절반만",
            "details": "하프마라톤 완주해보기(여행에 넣을지 기타에 넣을지 고민했지만 진행하면서 거리도 볼 수 있으니까,,)",
            "category": "여행",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 70
          },
          {
            "title": "런던같아서",
            "details": "Abbey Road 에서 사진찍고, 빨간 공중 전화 부스에서 사진찍기",
            "category": "여행",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 71
          },
          {
            "title": "유네스코",
            "details": "유네스코 세계 문화유산 15곳 이상 방문해보기",
            "category": "여행",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "현재까지 방문한곳:\n- 화성(2018)",
            "successimage": "",
            "id": 72
          },
          {
            "title": "채식주의자",
            "details": "한 달 동안 채식주의자로 지내기",
            "category": "음식",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 73
          },
          {
            "title": "빛보다빠른",
            "details": "5G지원되는 스마트폰 구매하고 5G요금제 이용해보기",
            "category": "소유",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "아이폰13프로를 구매하긴 했는데 5G요금제를 이용하지 못했다. 빠르면 내년 이용해볼예정!",
            "successimage": "",
            "id": 74
          },
          {
            "title": "수어",
            "details": "누군가에게는 도움이 될 수 있도록 수어 배우기",
            "category": "Teenager",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 75
          },
          {
            "title": "학교, 싫은데, 뭐 어떡해",
            "details": "공부 열심히 해서 좋은 학교 가기 -- 좋은 학교 기준이 뭔데? 대학교야 아니면 고등학교야?",
            "category": "Teenager",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 76
          },
          {
            "title": "아 몰라 어쩌라고",
            "details": "후회 없는 10대 보내기",
            "category": "Teenager",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "모르겠다. 지금까지의 10대를 돌아보더라도 후회가 적지 않은데.",
            "successimage": "",
            "id": 77
          },
          {
            "title": "전혀 낭만적이지 않아",
            "details": "교복 입고 롯데월드 가보기",
            "category": "Teenager",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 78
          },
          {
            "title": "전혀",
            "details": "행복했던 10대 만들기",
            "category": "Teenager",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 79
          },
          {
            "title": "Phrase",
            "details": "멋져보이는 말 만들기",
            "category": "Teenager",
            "success": "1",
            "date": "2021",
            "image": "",
            "successdetails": "\"모든 이파리, 각자의 개성을\"\n\"All the leaves, each with their own character.\"",
            "successimage": "",
            "id": 80
          },
          {
            "title": "내회사야!!",
            "details": "미국 대기업 and/or 중소기업 주주되기",
            "category": "Teenager",
            "success": "1",
            "date": "2021.11.02",
            "image": "",
            "successdetails": "애플(AAPL)을 무려 0.04주나 구매하였다!\n스냅(SNAP)도 0.05주 구매함. DRIV랑 JETS구매해서 대부분의 항공주랑 전기차 관련 주식 주주도 됨.\n(2022.01.09) SPY, AMD, NET 매수\n(2022.02. xx) O 매수 및 NET 매도(+9%)",
            "successimage": "20211103_003745954.jpg",
            "id": 81
          },
          {
            "title": "나도.. 나도 이제 작가라고!!!",
            "details": "일기를 책으로 만들어보기(나만 가질거임)",
            "category": "Teenager",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 82
          },
          {
            "title": "개인정보 팔아먹냐",
            "details": "5대 시중은행 계좌 모두 만들기",
            "category": "Teenager",
            "success": "2",
            "date": "2022.02",
            "image": "",
            "successdetails": "우리금융지주 2022년 02월부로 손절해서 우리은행 계좌 만들 생각 없음.",
            "successimage": "",
            "id": 83
          },
          {
            "title": "나도 이제 자유롭게 계좌를 만들수는 있지만",
            "details": "비대면 계좌 개설 해보기",
            "category": "Teenager",
            "success": "1",
            "date": "2022.01.08",
            "image": "",
            "successdetails": "2금융권(토스증권): 12월 22일\n1금융권(BNK부산은행): 1월 24일\n\n지방은행이나 2금융권이 아닌 1금융권 시중은행에서 해보고 싶었는데 아쉽다. 날짜는 두 날짜의 중간인 1월 5일로 잡음. ",
            "successimage": "",
            "id": 84
          },
          {
            "title": "굳이 여기서?",
            "details": "온천에서 달걀삶기",
            "category": "여행",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 85
          },
          {
            "title": "응",
            "details": "버킷리스트 항목 100개 만들기",
            "category": "TOP",
            "success": "1",
            "date": "2022.02.21",
            "image": "",
            "successdetails": "(id 100) 친화력만큼은 세계 1등 항목으로 달성!!",
            "successimage": "",
            "id": 86
          },
          {
            "title": "난 너무 멋져(질거야)",
            "details": "내가 봐도 내가 멋져보일 정도로 멋지게 살아보기.",
            "category": "Teenager",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 87
          },
          {
            "title": "I am very 럭키",
            "details": "점수 반올림 되어서 등급 올라가기",
            "category": "교육",
            "success": "1",
            "date": "2021.06",
            "image": "",
            "successdetails": "기술가정 과에서 기말하고 수행 합산 점수가 89.xx 나왔는데 발올림 안되어서 89나오고 B나옴",
            "successimage": "",
            "id": 88
          },
          {
            "title": "맞아, 나 돈 많아(1)",
            "details": "신용카드(총)한도 1억원 달성하기",
            "category": "소유",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 89
          },
          {
            "title": "맞아, 나 돈 많아(2)",
            "details": "연회비 30만원 이상 프리미엄카드 발급하기",
            "category": "소유",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 90
          },
          {
            "title": "돈이나 벌어(날려)볼까 (1)",
            "details": "주식계좌 개설하기",
            "category": "소유",
            "success": "1",
            "date": "2017",
            "image": "",
            "successdetails": "2017년에 삼성증권 계좌 만들고 2021년 말에 신한금융투자, 토스증권 계좌 만듦.",
            "successimage": "",
            "id": 91
          },
          {
            "title": "돈이나 벌어(날려)볼까 (2)",
            "details": "공모주 청약해보기",
            "category": "소유",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 92
          },
          {
            "title": "나 영어 잘해",
            "details": "토익 855점 넘어보기",
            "category": "교육",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 93
          },
          {
            "title": "자기장과 열권과의 조우",
            "details": "오로라 관측하기",
            "category": "여행",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 94
          },
          {
            "title": "응 너 손절~",
            "details": "제대로 멋지게 손절해보기",
            "category": "사람",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 95
          },
          {
            "title": "안ㅎㅎㅎ녕핳ㅎ세요",
            "details": "구독장 10만 이상 유튜버 만나보기 + 사진까지",
            "category": "사람",
            "success": "1",
            "date": "2022.01.02",
            "image": "",
            "successdetails": "디에디트의 에디터 H님을 만났다.",
            "successimage": "",
            "id": 96
          },
          {
            "title": "비상! 비상! 비상!",
            "details": "계정 해킹당해보기",
            "category": "기타",
            "success": "1",
            "date": "2020",
            "image": "",
            "successdetails": "스팀 계정 해킹(2020)\n에버노트 계정 해킹(2021)\n디스코드 계정 해킹(2021)",
            "successimage": "",
            "id": 97
          },
          {
            "title": "난 너무 착해",
            "details": "100시간 이상 자원봉사 후 인증배지 받기",
            "category": "기타",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 98
          },
          {
            "title": "TAKE MY(상대의) MONEY!",
            "details": "백만장자 만나보기",
            "category": "사람",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 99
          },
          {
            "title": "친화력만큼은 세계 1등",
            "details": "중학생(나) 때 대학생(지인)이랑 반말하기",
            "category": "사람",
            "success": "1",
            "date": "2021",
            "image": "",
            "successdetails": "원래는 반말 안했었는데 자연스럽게 반말하게 됨. 엄청 친하진 않은데 그래도 내 성격에 친해져서 반말하는게 어디인지.",
            "successimage": "",
            "id": 100
          },
          {
            "title": "집가고싶다",
            "details": "선생님 몰래 학원에서 나와서 집가기",
            "category": "Teenager",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 101
          },
          {
            "title": "이 책 내가 검수함 ㅋ",
            "details": "책의 오류를 발견하고 제보해서 정오표에 내가 제보한 오류를 올려보기",
            "category": "교육",
            "success": "1",
            "date": "2021.10",
            "image": "",
            "successdetails": "메가스터디북스에서 출판된 책의 오류를 제보함",
            "successimage": "",
            "id": 102
          },
          {
            "title": "그래도 나름 행복했던 10대 만들기",
            "details": "20대가 되고 10대를 회상하더라도 행복한 추억이 가득하게.",
            "category": "Teenager",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 103
          },
          {
            "title": "유명인 유튜브에 출연해보기",
            "details": "10대에 구독자 10만명 이상이고 내가 한 번 이상 들어본 유튜버의 유튜브에 출연해보기",
            "category": "Teenager",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 104
          },
          {
            "title": "나는야 사회적이고 도덕적인 사람",
            "details": "사회적인 행동 해보기",
            "category": "기타",
            "success": "1",
            "date": "2022",
            "image": "",
            "successdetails": "지구의날에 불 꺼봄",
            "successimage": "",
            "id": 105
          },
          {
            "title": "나 아직 안 늙었어, 아직 중(고등)학생박에 안됐다고",
            "details": "내가 세상을 바꿀 수 있다는 가능성을 무시할 수도 없고, 세상을 바꾸지 않더라도 나 자체는 바꿀 충분하면서도 부족한 시간이 남은거같아. - 그래서 이 항목을 완료하기 위해선 뭘 해야하는데?",
            "category": "Teenager",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 106
          },
          {
            "title": "비행기 전세낼정도로 돈이 많지는 않아서",
            "details": "비행기 전세내기",
            "category": "여행",
            "success": "1",
            "date": "2022.07.29",
            "image": "",
            "successdetails": "댄공 A300 전세내봄. -- 내가 찍은 사진에 아무도 없잖아 ㅋ",
            "successimage": "",
            "id": 107
          },
          {
            "title": "4개국어하기",
            "details": "한국어+영어+일본어+프랑스어+스페인어(계획은)",
            "category": "교육",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 108
          },
          {
            "title": "한달이나 살아남을 수 있겠어?",
            "details": "유럽이나 미국에서 한 달 살아보기",
            "category": "여행",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 109
          },
          {
            "title": "그, 나, 너, 좋아했는데",
            "details": "짝사랑해보기",
            "category": "Teenager",
            "success": "1",
            "date": "2022",
            "image": "",
            "successdetails": "짝녀랑 통화하다가 말실수해서 짝녀한테 손절당함",
            "successimage": "",
            "id": 110
          },
          {
            "title": "보건실쌤: 왜 왔어 나가! 이용증 써줘?",
            "details": "보건실 단골돼서 선생님이 내 이름 알게 만들기",
            "category": "Teenager",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 111
          },
          {
            "title": "맨날 예산 없대 <-> 뭐 사실인데..",
            "details": "학생회 해보기",
            "category": "Teenager",
            "success": "1",
            "date": "2019.09",
            "image": "",
            "successdetails": "초딩때 학생회를 하긴 해봄",
            "successimage": "",
            "id": 112
          },
          {
            "title": "차단박고 뒷담까기 <-> 쟤 묻어버리자",
            "details": "전교부회장 해보기",
            "category": "Teenager",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 113
          },
          {
            "title": "쟤 묻어버리자 <-> 쟤 묻어",
            "details": "전교회장 해보기",
            "category": "Teenager",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 114
          },
          {
            "title": "선생님 저 머리가 너무 아픈데 ..",
            "details": "꾀병으로 조퇴해보기",
            "category": "Teenager",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 115
          },
          {
            "title": "나 J에요",
            "details": "Todoist 계몽가 찍기",
            "category": "사람",
            "success": "0",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 116
          },
          /* sample
          {
            "title": "",
            "details": "",
            "category": "",
            "success": "",
            "date": "",
            "image": "",
            "successdetails": "",
            "successimage": "",
            "id": 777
          },
          */
        ]
      }.notes)
  }, [])
  return (
    <div className="App-header">
      <Navbar />
      <h1 style={{ marginTop: "100px" }}># BUCKETLIST</h1>
      <Stats notes={notes} />
      <Routes>
        <Route path="/" element={<Card notes={notes}/>} />
        <Route path="/success" element={<Success notes={notes}/>} />
      </Routes>
      <footer>
        <p align="center" className="copy">© 2020 - {new Date().getFullYear()}, Yeonwoo Seo </p>
      </footer>
    </div>
  );
}

export default App;
