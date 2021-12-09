/* eslint-disable */

import React, { useState } from 'react';
import './App.css';


function App() {


  // state는 변수대신 쓰는 데이터 저장공간
  // useState() 이용해 만들어야함
  // 문자,숫자,array,object 다 저장가능 

  // state에 데이터를 저장해 놓는 이유 : 일반 변수에 데이터를 저장하면 html 재랜더링이 안됨 
  // 자주 바뀌는 데이터는 변수 말고 state로 저장해서 써야함
  let [subscribe, subUpdate] = useState(['남자 코트 추천', '강남 맛집', '파이썬 독학'])
  let [good, goodupdate] = useState(0);




  return (



    <div className="App">
      <div className="black-nav">

        <div> 개발 BLog</div>
      </div>

      <button onClick={function () {
        {
          const newSubscribe = Object.assign([], subscribe);
          newSubscribe[0] = '여자 코트 추천';
          subUpdate(newSubscribe);
        }
      }}>😀</button>

      <div className="list">
        <h3> {subscribe[0]} <span onClick={() => { goodupdate(good + 1) }}>👍</span> {good} </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>

      <div className="list">
        <h3> {subscribe[1]} </h3>
        <p>2월 19일 발행</p>
        <hr />

      </div>

      <div className="list">
        <h3> {subscribe[2]} </h3>
        <p>2월 18일 발행</p>
        <hr />

      </div>

    </div>
  );
}

export default App;
