import React, {useState} from 'react'
// import './../scss/joinUs.scss'

function MailInp(){
    const [Email, setEmail] = useState("")

    
    const print = (event) => {
        event.preventDefault(); 
        alert(Email)
        setEmail('')
    }
    return(
        <form className='join-us__form' onSubmit={(e) => print(e)} >
            <label className='join-us__inp__container'>
                <span className='visually-hidden'>Email</span>
                <input className='join-us__inp' placeholder='You@Email.com'  onChange={e => setEmail(e.target.value)} value={Email} required/>
                <button type='submit' className='join-us__form__inp'>{">"}</button>
            </label>
        </form>
    )
}

export default MailInp