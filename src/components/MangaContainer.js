import React from "react";
import {FaEye} from "react-icons/fa";
import {FaComment} from "react-icons/fa";

export default function MangaContainer({photo,name,viewCount,commentCount,lastestChapter,dateModified}){
   return(
       <div className="manga-container">
           <div className="manga-photo">
                <img src={photo} />
                <p className="view">{viewCount}<FaEye/><span className="comment">{commentCount}<FaComment/></span></p>
           </div>
           <h3 className="name">{name}</h3>
           <div className="manga-info">
                <p className="latest"> chapter{lastestChapter}<span className="date">{dateModified}</span></p>
           </div>

       </div>
   )
}