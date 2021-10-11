import axios from "axios";
import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import "./styles/Home.css";
import { FaHeart } from "react-icons/fa";
import MyModalVideo from "./MyModalVideo";

function Home() {
  const [post, setPost] = useState([]);
  const [onfilter, setOnfilter] = useState(0);
  const [myIndex, setMyIndex] = useState([]);
function myfav(index){
  if(index in myIndex){
    return 1
  }else{
    return 0
  }
}

  useEffect(async () => {
    await axios
      .get("https://video-api-dot-dj-virtual-spaces.el.r.appspot.com/")
      .then((res) => {
        setPost(res.data.videosData);
        console.log(res.data.videosData);
      });
  }, []);
  return (
    <div className="home">
      <div className="home-top"></div>
      <div className="home-tags">
        <span>Tags:</span>
        <ul>
          <li>Favorites</li>
          <li>CT Scans</li>
          <li>DRTB</li>
          <li>Neurology</li>
        </ul>
      </div>
      <div className="heading">
        <p>All Videos</p>
      </div>
      <div className="video-container">

        {post.map((data, index) => {
          let videoUrl=data.videolink;
          let videoIDArray=videoUrl.split("/");
          let videoID=videoIDArray[4];
          
          return (
            <div className="video-card">
              <img src={data.thumbnailUrl} className="image__img" />
              <div className="image__overlay">
                <div className={myfav(index)?"image__heart_red":"image__heart"} onClick={()=>{setMyIndex(oldArray => [...oldArray, index])
                alert(index)
                }}><FaHeart/></div>
          <div className="image__title">{data.title}</div>
          <p className="image__description">{data.description}</p>
          <MyModalVideo videoid={videoID}/>
        </div>
            </div>
          );
        })}
      </div>      
    </div>
  );
}

export default Home;
