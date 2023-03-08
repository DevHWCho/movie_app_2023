import React from 'react'
import PropTypes from 'prop-types';
import '../styles/Movie.css';
import { Link } from 'react-router-dom';

function Movie({genres,id,poster,summary,title,year}){
  // console.log(props)
  // const {genres,id,poster,summary,title,year} = props;
  return (// /detail 이란 주소를 통해 state 객체를 보냄
    <div className='movie'>
      <Link to={'/detail'} state={{genres,id,poster,summary,title,year}}>
        <img src={poster} alt={title} title={title} />
        <div className='movie_data'>
          <h3 className='movie_title' style={{backgroundColor:'#eee'}}>{title}</h3>
          <h4 className='movie_year'>{year}</h4>
          <ul className='movie_genres'>
            {genres.map((genre,index) => {
              return( // li가 표시되려면 return()으로 반환시켜야 한다.
                <li className='movie_genre' key={index}>{genre}</li> // 각각의 배열을 받아서 li 만드는 방법 - map() 사용한다.
              )
            })}
          </ul>
          <p className='movie_summary'>{summary.slice(0,180)}...</p>
        </div>
      </Link>
    </div>//slice는 시작점(0)부터, 해당 글자까지(180)만 잘라서 표시
  )
}

// npm install prop-types
Movie.propTypes = {
  id : PropTypes.number.isRequired,
  year : PropTypes.number.isRequired,
  poster : PropTypes.string.isRequired,
  summary : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Movie
