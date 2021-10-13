import axios from "axios";
import React, { useState, useEffect } from "react";
import "./styles/Home.css";
import { FaHeart } from "react-icons/fa";
import MyModalVideo from "./MyModalVideo";
import { auth } from "../utils/firebase";

function Home() {
  const [post, setPost] = useState([]);
  const [filterPost, setFilterPost] = useState([]);
  const [onfilter, setOnfilter] = useState(0);
  const [myIndex, setMyIndex] = useState([]);
  const[currUser,setCurrUser]=useState(0)
  const [currUserData,setCurrUserData]=useState([])
  useEffect(()=>{
    auth.onAuthStateChanged(function (userData) {
      if (userData) {
        console.log("user is LOG IN");
        setCurrUser(1);
        setCurrUserData(userData)
        console.log(userData);
      } else {
        console.log("user is LOG OUT");
      }
    });
  },[])


  const filterItems=(mytags)=>{
    const myPost=[];
    filterPost.filter((curElem)=>{
      var Xr=[...curElem.tags]
      if(Xr.includes(mytags)){
          myPost.push(curElem)
        }
      }
    )
    setPost(myPost)
  }

  function myfav(index) {
    if (index in myIndex) {
      return 1;
    } else {
      return 0;
    }
  }
  useEffect(async () => {
    await axios
      .get("https://video-api-dot-dj-virtual-spaces.el.r.appspot.com/")
      .then((res) => {
        setPost(res.data.videosData);
        setFilterPost(res.data.videosData)
        console.log(res.data.videosData);
      });
  }, [onfilter]);
  return (
    <div className="home">
      <div className="home-top"></div>
      <div className="home-tags">
        <span>Tags:</span>
        <ul>
        <li onClick={()=>onfilter?setOnfilter(0):setOnfilter(1)}>All</li>
          <li onClick={()=>alert("Your Fevorite Video will be Shown!")}>Favorites</li>
          <li onClick={()=>filterItems("tb")}>TB</li>
          <li onClick={()=>filterItems("asthma")}>Asthma</li>
          <li onClick={()=>filterItems("cancer")} >Cancer</li>
        </ul>
      </div>
      <div className="heading">
        <p>All Videos</p>
      </div>
      <div className="video-container">
       {post.map((data, index) => {
          let videoUrl = data.videolink;
          let videoIDArray = videoUrl.split("/");
          let videoID = videoIDArray[4];
          return (
            <div className="video-card">
              <img src={data.thumbnailUrl} className="image__img" />
              <div className="image__overlay">
                <div
                  className={myfav(index) ? "image__heart_red" : "image__heart"}
                  onClick={() => {
                    setMyIndex((oldArray) => [...oldArray, index]);
                  }}
                >
                  <FaHeart />
                </div>
                <div className="image__title">{data.title}</div>
                <p className="image__description">{data.description}</p>
                <MyModalVideo videoid={videoID} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
