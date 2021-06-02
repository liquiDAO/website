import React, {useState, useEffect} from 'react'
import './../scss/road.scss'
import Footer from '../components/FooterFAQ';
import MailInp from '../components/mailInp';
import RoadItem from '../components/roadItem';

function Road(){

    const [item , setitem] = useState([])
    const [visible, setVisible] = useState(3)

    const readMore = () => {
        setVisible((prevValue) => prevValue +3)
    }

    useEffect(() => {
	    fetch('https://jsonplaceholder.typicode.com/posts')
        	.then((res) => res.json())
        	.then((data) => setitem(data))
    }, [])
  
    return(
        <>
        <div className='Road'>
            <div className='Road__container'>
                {/* <div className='Road__columne'/> */}
                <div className='Road__box'>
                    {item.slice(0, visible).map((item) => (
                        <RoadItem title={item.title} text={item.body}/>
	                ))}
                    <button className='add3item' onClick={readMore}>ADD new 3 item</button>
                </div>
            </div>
            <MailInp/>
        </div>
        <Footer/>
        </>
    )
}

export default Road