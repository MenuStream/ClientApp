import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { MDBBtn,MDBIcon } from 'mdb-react-ui-kit';
import { MDBCard, MDBCardImage,MDBCardTitle} from 'mdb-react-ui-kit';
import GridLoader from "react-spinners/GridLoader";

const Home = () => {
  
  const [data,setData] = useState(null)
  const [display,setDisplay] = useState(-1)

    const fetchData = async () =>{
      const url = 'https://aftereight.herokuapp.com/data'
      await axios.get(url)
          .then(response => {
              console.log(response.data)
              setData(response.data)})
  }

    // useEffect(()=>{
    //   fetchData();
    // },[])
  
    useEffect(()=>{
      window.scrollTo(0, 0)
    },[display])
  
  
  
    return (
    <div className="Container">
      <div className="header">
        <div className="header__menu">
          <h5 className='header__menu__text' onClick={()=>setDisplay(-1)}>MENU</h5>
        </div>
        <img className='logo' width={'30%'} height={'30%'} src="https://i.imgur.com/iIb4ZfB.png" alt="" />
        </div>
        
        <div className="body">
          {data !== null ? 
            (display === -1 ? 
            (<div style={{display: 'flex',flexDirection: 'row',flexWrap: 'wrap',justifyContent:'center'}} className='body__home'>
              
              {data.map((element,index)=>(
            
            <MDBCard className='MDBCard-Home hover-zoom' onClick={()=>setDisplay(index)} style={{textAlign: 'center', margin: "20px",cursor: 'pointer'}}>
              <MDBCardImage className='MDBCardImage-Home ' style={{objectFit: "cover"}} overlay  src={element.image_url} alt='...' position='top'/>
                <MDBCardTitle style={{fontSize: '14px',letterSpacing: 'normal',marginTop:'10px'}} >{element.name}</MDBCardTitle>
           </MDBCard>
            
            ))}</div>) 
            : 
            (
              <div className='body__category'>

                  <MDBIcon onClick={()=>setDisplay(-1)} style={{marginBottom: '50px', cursor: 'pointer'}} fas size="2x" icon="arrow-circle-left" />

                <div className="category">
                  
                  <h1 className='category__name'>{data[display].name}</h1>
                  <div className="category_articles">
                    {data[display].articles.map((article)=>(
                      <div className="article">
                        <div className="article_container">
                        <span className="article__name">{article.name}</span>
                        <span className="article_description">{article.description}</span>
                        </div>
                        <span className="article__price">{article.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              ))  
        :
        (
          <GridLoader color="green" css={`
            position: absolute;
            left: 50%;`} />
        )
        }
        </div>
      <div className='footer'>
        <span>Copyright - After Eight</span>
        <div style={{marginTop: '10px'}} className='footer__buttons'>
            <MDBBtn size='lg' floating style={{ backgroundColor: '#ac2bac' ,marginRight: '10px'}} href='https://www.instagram.com/aftereightsousse/'>
              <MDBIcon fab icon='instagram' />
            </MDBBtn>
            <MDBBtn size='lg' floating style={{ backgroundColor: '#ac2bac' }} href='https://www.facebook.com/AfterEightSousse'>
              <MDBIcon fab icon='facebook' />
            </MDBBtn>
        </div>
      </div>
    </div>
  )
}

export default Home



