import axios from "axios";
import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import "./styles/Home.css";
function Home() {
  const [post, setPost] = useState([]);
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
          var url=data.thumbnailUrl;
                            return (
                                <div className="video-card" >
                                    <img src={data.thumbnailUrl} className="card-img"/>
                                <p className="card-title">{data.title}</p>
                            </div>
                            )
      })}
      </div>
    </div>
  );
}

export default Home;
