const container = document.querySelector(".container");
const formBox = document.querySelector(".box");
const wordArea = document.querySelector("#word");


console.log(formBox);
console.log(container);
console.log(wordArea);


// 초기 Data
let words = [
    "words",
    "are",
    "cool",
    "and",
    "so",
    "are",
    "you",
    "inconstituent",
    "funhouse!",
    "apart",
    "from",
    "Steve",
    "fish",
  ];

// container 안에 있는 form 을 없애고 div(cloud) 를 넣는 방법 찾기
// 시작 좌표
let startPoint = {
    x: container.offsetWidth / 2,
    y: container.offsetHeight / 2,
  };
  console.log(startPoint);

let wordsDown = [];

// map: 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 결과 반환
// json 으로 받아온 data와 빈도수를 따로 받아서 매핑해야 할듯
const options = words.map((word) => {
  return {
    word: word,
    freq: Math.floor(Math.random() * 50),
  };
});

// freq 가 큰 것 부터 정렬
options.sort((a, b) => -1 * (a.freq - b.freq));

console.log(options);
//console.log(options[0].word);

// form 삭제 후 div(cloud) 생성 메소드
const deleteForm = () => {
  formBox.remove();
  const cloud = document.createElement("div");

  placeWords();
};

// div(word) 생성 메소드
const createWordObject = (word, freq) => {
  const wordContainer = document.createElement("div");
  wordContainer.appendChild(document.createTextNode(word));
  wordContainer.style.lineHeight = 0.8;
  wordContainer.style.fontSize = freq + "px";
  wordContainer.style.color = "red";

  return wordContainer;
};

//
const placeWord = (word, x, y) => {
  container.appendChild(word);
  wordsDown.push(word.getBoundingClientRect());
};

//
const intersect = (word, x, y) => {
  cloud.appendChild(word);
};

/*  ========================================================== */

const placeWords = () => {
  for (let i = 0; i < options.length; i += 1) {
    let word = createWordObject(options[i].word, options[i].freq);
    // console.log(word);
    for (let j = 0; j < 360 * 5; j++) {
      angle = 1 * i;
      x = (1 + angle) * Math.cos(angle);
      y = (1 + angle) * Math.sin(angle);
      placeWord(word, startPoint.x + x, startPoint.y + y);
    }
  }
  //console.log(word);
  // placeWord(word, startPoint.x + x, startPoint.y + y);
};



// form submit event 클릭시 메소드 실행
formBox.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("click");
  const text = wordArea.value;
  console.log(text);

  // text 가 있을 때 form 없애고 cloud 생성
  if (text) {
    // text 값 서버에 보내기
    // 값 받아와서
    deleteForm();
  }
});

// wordArea.addEventListener("input", (event) => {
//     const text = event.target.value;
//     console.log(text);

//     if(text) {
//         const xhr = new XMLHttpRequest();
//         const url = "";

//         xhr.onreadystatechange = () => {
//             const reponseData = xhr.responseTest;
//             console.log(
//                 `responseData: ${responseData}, type: ${typeof responseData}`
//             );

//             const parsedData = JSON.parse(JSON.parse(responseData));
//             console.log(typeof parsedData, parsedData);

//             // 결과 출력

//         };

//         xhr.open("POST", url);
//         xhr.setRequestHeader("Content-type", "application/json");

//         const requestData = {
//             text,
//         }

//         const jsonToString = JSON.stringify(requestData);
//         xhr.send(jsonToString);
//     } else {
//         alert("No word!")
//     }
// });
