const container = document.querySelector(".container");
const formBox = document.querySelector(".box");
const wordArea = document.querySelector("#word");
const smallContainer = document.querySelector("#smallContainer");


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
    x: smallContainer.offsetWidth / 2,
    y: smallContainer.offsetHeight / 2,
  };
  console.log(startPoint);

let wordsDown = [];

// map: 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 결과 반환
// json 으로 받아온 data와 빈도수를 따로 받아서 매핑해야 할듯
const options = words.map((word) => {
  return {
    word: word,
    freq: Math.floor(Math.random() * 50),
    rotate: (~~(Math.random() * 6) - 3) * 30,
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
const createWordObject = (word, freq, rotate) => {
  const wordContainer = document.createElement("div");
  wordContainer.style.position = "absolute";
  wordContainer.appendChild(document.createTextNode(word));
  wordContainer.style.lineHeight = 0.8;
  wordContainer.style.fontSize = freq + "px";
  wordContainer.style.paddingTop = "10px";
  wordContainer.style.textAnchor = "middle";
  wordContainer.style.transform = "translate(300px, 200px) rotate(" + rotate + "deg)";
  
  
  // freq 따라서 랜덤 색? 0~10 10~20 20~30 30~40 40~50
  if(freq > 0 && freq <10) {
      wordContainer.style.color = "red";
    } else if(freq >=10 && freq <20) {
        wordContainer.style.color = "blue";
    } else if (freq >=20 && freq < 30) {
        
        wordContainer.style.color = "green";
    } else if (freq >=30 && freq < 40) {
        wordContainer.style.color = "purple";
        
    } else if (freq >=40 && freq < 50) {
        wordContainer.style.color = "white";
        
    }



  return wordContainer;
};

//
const placeWord = (word, x, y) => {
    smallContainer.appendChild(word);
  wordsDown.push(word.getBoundingClientRect());
  console.log(x, y);
};

//
const intersect = (word, x, y) => {
  cloud.appendChild(word);

  word.style.left = x - word.offsetWidth/2 + "px";
    word.style.top = y - word.offsetHeight/2 + "px";
    
    var currentWord = word.getBoundingClientRect();
    
    cloud.removeChild(word);
    
    for(var i = 0; i < wordsDown.length; i+=1){
        var comparisonWord = wordsDown[i];
        
        if(!(currentWord.right + config.xWordPadding < comparisonWord.left - config.xWordPadding ||
             currentWord.left - config.xWordPadding > comparisonWord.right + config.wXordPadding ||
             currentWord.bottom + config.yWordPadding < comparisonWord.top - config.yWordPadding ||
             currentWord.top - config.yWordPadding > comparisonWord.bottom + config.yWordPadding)){
            
            return true;
        }
    }
    
    return false;
};

/*  ========================================================== */

const placeWords = () => {
  for (let i = 0; i < options.length; i += 1) {
    let word = createWordObject(options[i].word, options[i].freq, options[i].rotate);
    // console.log(word);
    // for (let j = 0; j < 360 * 5; j++) {
    //   angle = 1 * i;
    //   x = (1 + angle) * Math.cos(angle);
    //   y = (1 + angle) * Math.sin(angle);
    //   placeWord(word, startPoint.x + x, startPoint.y + y);
    // }
    placeWord(word, startPoint.x, startPoint.y);
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
