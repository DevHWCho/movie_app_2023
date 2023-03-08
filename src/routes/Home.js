import axios from 'axios';
import React, { Component } from 'react';
import Movie from '../components/Movie';
import '../styles/Home.css';

export class Home extends Component {
  state = {
    isLoading: true,
    movies: [],
  }
  componentDidMount(){// 해당 시점에서 외부 API를 가져옴
    // setTimeout(()=>{
    //   this.setState({isLoading:false});
    // },6000);
    this.getMovies();
  }

  getMovies = async () => {
    const {
      data : {
        data : {
          movies
        }
      }
    } = 
    await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count') // 주소 뒤에 ? 붙여서 다음 내용들을 더 가져올 수 있음.
    console.log(movies) // axios는 네트워크를 사용하므로 느려서 별도 함수를 만들어서 async(비동기) 방식으로 가져와서 await(기다려 달라고) 알려줘야 함.
    this.setState({
      isLoading: false,
      movies, //movies: movies, //속성:값이 동일하면 하나만 써준다.
    })
  }

  render() {
    const {isLoading, movies} = this.state; //구조 분해 할당
    return (
      <section className='container'>
        {isLoading ? 
          <div className='loader'>
            <span className='loader_text'>'loading...'</span>
          </div>
          :
          <div className='movies'>
            {movies.map((movie, index)=><Movie //key 속성은 주민번호과 같은 개념이다.
                                          key={index}
                                          id={movie.id}
                                          year={movie.year}
                                          title={movie.title}
                                          summary={movie.summary}
                                          poster={movie.medium_cover_image}
                                          genres={movie.genres}
                                        />
                        )
              }         
          </div>
        }
      </section>
    )
  }
}

export default Home;
