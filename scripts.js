let picW = 800;
const totalNum = 5;
let moveNum = 0;

// 이미지 위치 셋팅
for(var i=0; i<totalNum; i++){
    document.getElementById("pic" + i).style.left = (picW * i) + "px";
}
document.getElementById("text" + moveNum).classList.add("active");


// 점 인디케이터(Dot Indicator) 동적으로 생성하기

let dotList = document.createElement("ul"); // 아이디 붙이기
dotList.setAttribute("id", "dotList");
document.getElementById("imgSet").appendChild(dotList); // 위치설정

for(var i=0; i<totalNum; i++){
    var li = document.createElement("li"); // for문 돌리기 좋게 재선언 가능한 var.
    li.setAttribute("id", "li" + i); // 아이디 붙이기
    //li.innerText = i; // 점안에 숫자 텍스트 넣기
    document.getElementById("dotList").appendChild(li); // 위치설정

    // dot 클릭 시
    document.getElementById("li" + i).onclick = function(){
        // 문자열 자르기 : substr("시작 위치", "길이") 또는 substr("시작 위치")
        // console.log(this.id.substr(2,1)); // 아이디 이름을 2번째 문자부터 1길이만큼 자르기
        moveNum = Number(this.id.substr(2,1))
        moveFunction();
    }
}
document.getElementById("li" + moveNum).classList.add("active");

// 이전버튼 동적으로 생성하기
let prev_btn = document.createElement("button");
prev_btn.setAttribute("id", "prev_btn");
prev_btn.innerText = "<";
document.getElementById("imgSet").appendChild(prev_btn);

// 다음버튼 동적으로 생성하기
let next_btn = document.createElement("button");
next_btn.setAttribute("id", "next_btn");
next_btn.innerText = ">";
document.getElementById("imgSet").appendChild(next_btn);

// 이미지 움직임 함수 선언
var moveFunction = function(){
    for(var i=0; i<totalNum; i++){
        document.getElementById("pic" + i).style.left = (picW * (i - moveNum)) + "px";
    }
    document.getElementById("text" + moveNum).classList.remove("activeOut");
    document.getElementById("text" + moveNum).classList.add("active");
    for(var i=0; i<totalNum; i++){
        document.getElementById("li" + i).classList.remove("active");
    }
    document.getElementById("li" + moveNum).classList.add("active");
}

// dl 움직임 함수 선언
var aniFunction = function(){
    document.getElementById("text" + moveNum).classList.remove("active");
    document.getElementById("text" + moveNum).classList.add("activeOut");
}

// 이전 버튼 클릭시
document.getElementById("prev_btn").onclick = function(){
    aniFunction();
    if(moveNum > 0){
        moveNum--;
    }
    moveFunction();
}

// 다음 버튼 클릭시
document.getElementById("next_btn").onclick = function(){
    aniFunction();
    if(moveNum < totalNum-1){
        moveNum++;
    }
    moveFunction();
}

