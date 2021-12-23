import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case "ADD":
      return count + 1;
    case "MINUS":
      return count - 1;
    default:
      return count;
  }
};
// reducer는 state를 변경하는 함수.
// reducer에서 리턴하는 값이 어플리케이션의 데이터
// 유일하게 state를 변경할 수 있는 곳
// 매개변수 state = 0 은 기본값을 0으로 설정하는 문법

const countStore = createStore(countModifier);
// 스토어는 state(값이 변하는 데이터)를 저장하는 장소
// createStore를 사용하여 생성
// createStore의 매개변수로 reducer가 들어와야 한다.
// 이 때 reducer는 함수여야한다.

// countStore.dispatch({ type: "ADD" });
// dispatch를 통해 리듀서에 액션을 전달한다 ({ type: "ADD"})
// getState를 통해 현재 state를 확인한다

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);
// store의 값이 바뀔때마다 매개변수를 실행

add.addEventListener("click", () => countStore.dispatch({ type: "ADD" }));
minus.addEventListener("click", () => countStore.dispatch({ type: "MINUS" }));
