import React,{useState,useEffect} from 'react';
import axios from 'axios';
import GridLoader from "react-spinners/GridLoader";
import Header from './Header';
import Footer from './Footer';
import CategoriesList from './CategoriesList';
import ArticlesList from './ArticlesList';

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

    useEffect(()=>{
      fetchData();
    },[])
  
    useEffect(()=>{
      window.scrollTo(0, 0)
    },[display])
  
  
  
    return (
    <>
      {data !== null ?
      <div className="Container">
          <img className='background_logo' src="https://i.imgur.com/rNwjdic.png" alt="background_logo" />
          <Header setDisplay={setDisplay} />
          <div className="body">
              {display === -1 ? 
              <CategoriesList setDisplay={setDisplay} data = {data} /> : 
              <ArticlesList data = {data} setDisplay={setDisplay} display = {display} />}
         
          </div> 
          <Footer/>
    </div>
    : <GridLoader color="green" css={`position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);`} />
      }  
    </>
  )
}

export default Home



