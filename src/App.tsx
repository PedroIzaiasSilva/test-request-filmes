import { useState, useEffect } from 'react';
import { Movie } from "./types/Movie";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => { 
    loadMovies();
  })

  const loadMovies = () => { 
    fetch('https://api.b7web.com.br/cinema/')
      .then((response) => { 
        return response.json();
      })
      .then((json) => { 
        setMovies(json);
      })
      .catch((error) => { 
        console.log("Erro")
      })
  } 

  return (
    <div>

      Total de Filmes {movies.length}

      <div className='grid grid-cols-6 gap-3'>
        {movies.map((item, index) => (
          <div key={index}>
            <img src={item.avatar} className='w-32 block' />
            <div className='tit'>{item.titulo}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
