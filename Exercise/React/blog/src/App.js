/* eslint-disable */

import React, { useState } from 'react';
import './App.css';
import Modal from './components/Modal';


function App() {


  // state는 변수대신 쓰는 데이터 저장공간
  // useState() 이용해 만들어야함
  // 문자,숫자,array,object 다 저장가능 

  // state에 데이터를 저장해 놓는 이유 : 일반 변수에 데이터를 저장하면 html 재랜더링이 안됨 
  // 자주 바뀌는 데이터는 변수 말고 state로 저장해서 써야함
  let [subscribe, subUpdate] = useState(['남자 코트 추천', '강남 맛집', '파이썬 독학'])
  let [good, goodupdate] = useState(0);
  let [modal, update] = useState(false);

  let [ClickSub, ChangeSub] = useState(0)




  function SubChange() {
    const newArray = [...subscribe]
    newArray[0] = '여자 코트 추천'
    subUpdate(newArray)

  }



  return (



    <div className="App">
      <div className="black-nav">

        <div> 개발 BLog</div>
      </div>


      {/* 
      <button onClick={function () {
        {
          const newSubscribe = Object.assign([], subscribe);
          newSubscribe[0] = '여자 코트 추천';
          subUpdate(newSubscribe);
        }
      }}>😀</button> */}

      <button onClick={SubChange}>😀</button>




      {/* <div className="list">
        <h3 onClick={(function () {
          ChangeSub(0)
        })}> {subscribe[0]} <span onClick={() => { goodupdate(good + 1) }}>👍</span> {good} </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>

      <div className="list">
        <h3 onClick={(function () {
          ChangeSub(1)
        })}> {subscribe[1]} </h3>
        <p>2월 19일 발행</p>
        <hr />

      </div>

      <div className="list">
        <h3 onClick={function () {
          ChangeSub(2)
        }}> {subscribe[2]} </h3>
        <p>2월 18일 발행</p>
        <hr />

      </div> */}



      {/* 버튼 클릭할떄마다 상세페이지 보여주고 닫히기
      <button onClick={function () {
        if (update(!modal)) {
          <Modal />
        } else {
          null
        }
      }}>버튼</button> */}

      {
        // props로 자식에게 state 전해주는 법
        // <자식컴포넌트 작명={state명}
        // 자식컴포넌트에서 props 파라미터 입력 후 사용
        modal === true ? <Modal subscribe={subscribe} ClickSub={ClickSub} /> : null,


        // 반복문 쓰는법
        // {반복할 데이터.map(function (){return <HTML></HTML>})}

        subscribe.map(function (a, i) {
          return (
            <div className="list">
              <h3 onClick={function () {
                ChangeSub(i)
              }}> {a}<span onClick={() => { goodupdate(good + 1) }}>👍</span> {good} </h3>
              <p>2월 19일 발행</p>
              <hr />

            </div>
          )

        })


      }


    </div>





  );


}

export default App;
