import React, { useState, useEffect } from 'react';
import "./AdviceGen.css";


function AdviceGen() {
    const [advice, setAdvice] = useState({})

    useEffect(() => {
        getAdvice();
    }, [])

    const getAdvice = async() => {
        const URL = "https://api.adviceslip.com/advice"
        try{
            await fetch(URL)
            .then(response => response.json()
            .then((data) => {
                setAdvice(data.slip)
            })
            )
            .catch(error => {
                console.log(error.message)
            })
        }catch(err){
            console.log("Try Block Error, " , err)
        }
    }

  return (
    <div className='advicegen'>
        <div className='advicegen__container'>
            <h4 className='advicegen__h4'>Advice #{advice.id}</h4>
            <p className='advicegen__quote'>
               "{advice.advice}"
            </p>

            <div className='divider'>
                <svg className='desktop__svg' width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
                <svg className='mobile__svg' width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
            </div>

            <button onClick={getAdvice} className='advicegen__btn'>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
            </button>
        </div>
    </div>
  )
}

export default AdviceGen