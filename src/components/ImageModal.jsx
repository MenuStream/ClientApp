import React from 'react'
import { useSpring, animated } from 'react-spring'




const ImageModal = ({hideModal,imageUrl}) => {
  const fadeIn = useSpring({ 
    from: {opacity: 0 },
    to: {opacity: 1 }, 
    delay: 80, 
  })
  
  return (
    <div className='modalContainer'>
    <animated.div style={fadeIn} className='modalBackground' onClick={hideModal}></animated.div>
      <animated.div style={fadeIn} className='modalBox'>
      <img class="img-fluid shadow-2-strong" src={imageUrl} alt="" />
    </animated.div>
    </div>
  )
}

export default ImageModal