const container = document.querySelector(".container");
const formBox = document.querySelector(".box");
const wordArea = document.querySelector("#word");
const btnSubmit = document.querySelector("#btnSubmit");

console.log(formBox);
console.log(container);
console.log(wordArea);
console.dir(btnSubmit);

formBox.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("click");
    const text = wordArea.value;
    console.log(text);
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
