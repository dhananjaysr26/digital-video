import axios from "axios";
import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import "./styles/Home.css";
import { FaHeart } from "react-icons/fa";

function Home() {
  const [post, setPost] = useState([]);
  const [onfilter, setOnfilter] = useState(0);
  const [myTags, setMyTags] = useState("bp");

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
          return (
            <div className="video-card">
              <img src={data.thumbnailUrl} className="image__img" />
              <div className="image__overlay">
                <div className="image__heart_red"><FaHeart/></div>
          <div className="image__title">{data.title}</div>
          <p className="image__description">{data.description}</p>
        </div>
            </div>
          );
        })} 
        
      </div>      
    </div>
  );
}

export default Home;
