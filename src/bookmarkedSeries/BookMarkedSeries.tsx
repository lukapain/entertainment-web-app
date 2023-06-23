import React, { useState } from 'react'
import { Dot, MovieName, PLayBtn, RecomendedSection, RecomendedVideo, VIdeoCard, VideoBookMark, VideoCategory, VideoInfo, VideoRating, VideoYear, VideosItem, VideosList, VideosTitle } from '../scenes/Home/styles/homeStyles'
import data from '../data'

interface Props {
    index:number
    year:number
    title:string
    rating:string
}
function BookMarkedSeries({index,year,title,rating}:Props) {

  return (
    <VideosItem key={index}>
    <RecomendedVideo>
      <VIdeoCard>
        <VideoBookMark>
        <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z" fill="#FFF"/></svg>
        </VideoBookMark>
        <PLayBtn>
          <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"
              fill="#FFF"
            />
          </svg>
          play
        </PLayBtn>
      </VIdeoCard>
      <VideoInfo>
        <VideoYear>{year}</VideoYear>
        <Dot />
        <VideoCategory>
          <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z"
              fill="#FFF"
              opacity=".75"
            />
          </svg>
        </VideoCategory>
        <Dot />
        <VideoRating>{rating}</VideoRating>
      </VideoInfo>
      <MovieName>{title}</MovieName>
    </RecomendedVideo>
  </VideosItem>
  )
}

export default BookMarkedSeries