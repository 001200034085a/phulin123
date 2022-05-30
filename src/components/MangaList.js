import React from "react";
import MangaContainer from "./MangaContainer";

export default function MangaList({data}){
    return(
        <div className="manga-list">
           {data.map(item=>{
               return(<MangaContainer
                 name={item.name}
                 photo={item.photo}
                 viewCount={item.view_count}
                 commentCount={item.comment_count}
                 lastestChapter={item.lastest_chapter}
                 dateModified={item.date_modified}
               />)
           })}
        </div>
    )
}