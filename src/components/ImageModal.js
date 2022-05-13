import React from 'react'
import { useSpring, animated } from 'react-spring'




const ImageModal = ({hideModal,imageUrl}) => {
  const ZoomIn = useSpring({ 
    from: {width: '0',height: 'auto', borderRadius: '10px'},
    to: {width: window.innerWidth > 900 ? '500px' : '80vw',height: 'auto', borderRadius: '10px'}, 
    delay: 20, 
  })
  
  return (
    <div className='modalContainer' style={styles.modalContainer}>
    <animated.div style={styles.modalBackground} className='modalBackground' onClick={hideModal}></animated.div>
      <animated.div className='modalBox'>
      <animated.img style={ZoomIn} src={imageUrl} alt="" />
    </animated.div>
    </div>
  )
}


const styles = {
  modalContainer : {
    "width":"100vw",
    "height":"100vh",
    "position":"fixed",
    "top":"0",
    "left":"0",
    "display":"flex",
    "justifyContent":"center",
    "alignItems":"center",
    "zIndex":"1",
    "backdropFilter":"blur(5px)"},
    
    modalBackground: {
      "width": "100vw",
      "height": "100vh",
      "position": "fixed",
      "top": "0",
      "left": "0",
      "zIndex": "-1"
    }
}

export default ImageModal