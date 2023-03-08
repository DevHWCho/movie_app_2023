import React from 'react'
import { useLocation } from 'react-router-dom'
import '../styles/Detail.css'

function Detail() {
  const location = useLocation(); //주소를 통해(/detail) 내용을 가져올 때 사용
  console.log(location);
  const {genres,poster,summary,title,year} = location.state;
  return (
    <div className='detail'>

        <img src={poster} alt={title} title={title} />
        <div className='detail_data'>
          <h3 className='detail_title' style={{backgroundColor:'#eee'}}>{title}</h3>
          <h4 className='detail_year'>{year}</h4>
          <ul className='detail_genres'>
            {genres.map((genre,index) => {
              return( // li가 표시되려면 return()으로 반환시켜야 한다.
                <li className='detail_genre' key={index}>{genre}</li> // 각각의 배열을 받아서 li 만드는 방법 - map() 사용한다.
              )
            })}
          </ul>
          <p className='detail_summary'>{summary.slice(0,180)}...</p>
        </div>
    </div>
  )
}

export default Detail
