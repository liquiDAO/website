import React, {useState, useEffect, useRef} from 'react'
import './../scss/road.scss'
import Footer from '../components/FooterFAQ';
import MailInp from '../components/mailInp';
import RoadItem from '../components/roadItem';

function Road(){

    const [item , setitem] = useState([])
    const [visible, setVisible] = useState(3)
    const container = useRef(0)

    // const [scroll , setScroll] = useState(0)
    
    const readMore = () => {
        setVisible((prevValue) => prevValue +3)
    }
    
    useEffect(() => {
        let scroll      = window.scrollY;
        // setScroll(window.scrollY)
        alert(scroll)
        // if(scroll <= ((container.current.offsetHeight) - 200)){
        //     readMore()
        // }
        // console.log(container.current.offsetHeight)
    })

    useEffect(() => {
	    fetch('https://jsonplaceholder.typicode.com/posts')
        	.then((res) => res.json())
        	.then((data) => setitem(data))
    }, [])
  
    return(
        <>
        <div className='Road'  ref={container}>
            <div className='Road__container'>
                {/* <div className='Road__columne'/> */}
                <div className='Road__box'>
                    {item.slice(0, visible).map((item) => (
                        <RoadItem title={item.title} text={item.body} key={item.id}/>
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