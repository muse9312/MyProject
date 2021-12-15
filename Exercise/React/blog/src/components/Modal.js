import React from 'react'
import '../App.css'


// component는 되도록 대문자

function Modal(props) {
    // return()안에 있는건 태그하나로 묶어야함
    let id;

    return (
        <>
            <div className="modal">
                <h2>{props.subscribe[props.ClickSub]}</h2>
                <p>날짜</p>
                <p>상세내용</p>

            </div>


        </>

    )
}

export default Modal
