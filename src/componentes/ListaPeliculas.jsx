import peliculas from '../../peliculas.json'
import '../estilos/Peliculas.css'
import Cards from './Cards'

function ListaPeliculas() {
  return (
    <>
      <h1>Lista de Películas</h1>
      <div>
        {peliculas.map((pelicula) =>{
          return(
            <div>
              <Cards key={pelicula.id} {...pelicula} />
            </div>
          )
        })};
      </div>
    </>
  )
}

export default ListaPeliculas
