import React,{useState,useEffect} from 'react'
import { Input } from 'antd';
import { Select } from 'antd';

import { Carousel } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import axios from 'axios'
import './NewsSection.css'

function NewsSection (){

    const [news,setNews]= useState([])
    const [loading,setLoading]= useState(false)
    const { Option } = Select;
    const { Search } = Input;
    const suffix = (
        <AudioOutlined
          style={{
            fontSize: 16,
            color: '#1890ff',
          }}
        />
      );    

      const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
      

      function handleChange(value) {
        setLoading(true)
        if(value ==='All'){
            axios.get('http://newsapi.org/v2/everything?' +
            `q=Technology&` +
            'from=2020-11-13&' +
            'sortBy=popularity&' +
            'apiKey=aaef68f9b2d64b5d869fa082ba40c246')
              .then(res=> {
                  setLoading(false)
                  setNews(res.data.articles)}
                  )
              .catch(err=> console.log("error",err))
        }else{
            axios.get('http://newsapi.org/v2/everything?' +
            `q=${value}&` +
            'from=2020-11-13&' +
            'sortBy=popularity&' +
            'apiKey=aaef68f9b2d64b5d869fa082ba40c246')
              .then(res=> {
                  setLoading(false)
                  setNews(res.data.articles)}
                  )
              .catch(err=> console.log("error",err))
        }
   
      }

      const onSearch = value =>{
            setLoading(true)
          axios.get('http://newsapi.org/v2/everything?' +
          `q=${value}&` +
          'from=2020-11-13&' +
          'sortBy=popularity&' +
          'apiKey=aaef68f9b2d64b5d869fa082ba40c246')
            .then(res=> {
                setLoading(false)
                setNews(res.data.articles)}
                )
            .catch(err=> console.log("error",err))

       
    }
      

    useEffect(()=>{
        axios.get('http://newsapi.org/v2/everything?' +
            `q=technology&` +
            'from=2020-11-13&' +
            'sortBy=popularity&' +
            'apiKey=aaef68f9b2d64b5d869fa082ba40c246')
              .then(res=> {
                  setLoading(false)
                  setNews(res.data.articles)}
                  )
              .catch(err=> console.log("error",err))
    },[])

        console.log("type",news[0])
        if(news.length>0){
            return(
                <div className="news-section">
                      <div >
                    <Carousel autoplay className="carousel">
                        <div>
                          <a href={news[0].url}>
                              <img src={news[0].urlToImage} alt={news[0].title} className="carousel-image" />
                           
                          </a>
                        </div>
                        <div>
                            <a href={news[1].url}>
                                <img src={news[1].urlToImage} alt={news[1].title} className="carousel-image"/>
                               
                            </a>
                        </div>
                        <div>
                            <a href={news[2].url}>
                                <img src={news[2].urlToImage} alt={news[2].title} className="carousel-image" />
                              
                            </a>
                        </div>
                      
                      </Carousel>
                    </div>
                        <div style={{display:"flex",width:"90%"}} >
                    <Select placeholder="Category" style={{ width: 120 }} onChange={handleChange}>
                      <Option value="Industry">Industrie</Option>
                      <Option value="Technology">Technologie</Option>
                    
                    </Select>
                     <Search
                      className="search-bar"
                      placeholder="input search text"
                      enterButton="Search"
                      size="large"
                      suffix={suffix}
                      onSearch={onSearch}
                    />
                    </div>
                    {news.map(article => <a className="news" href={article.url}><div >
                        <img src={article.urlToImage} alt="url to image" className="news-image"/> 
                        <div className="main-section">
                            <h3 className="title">{article.title}</h3> 
                            <p className="description">{article.description}</p>   
                        </div>   
                    </div></a>)}
                </div>
            )
        }else{
            return <h1>Loading .....</h1>
        }
        

    
}

export {NewsSection}