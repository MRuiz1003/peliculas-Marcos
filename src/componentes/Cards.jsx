import "../estilos/Cards.css";
import Puntaje from './Puntaje.jsx'

function Cards({
  poster,
  title,
  releaseDate,
  duration,
  maturity,
  genres,
  director,
  mainActors,
  plot,
  rating,
  metascore,
}) {
  return (
    <>
      <div className="card">
        <div className="poster">
          <img src={poster} alt={`Poster de ${title}`} />
        </div>
        <div className="info">
            <h2 className="fondo">{title}</h2>
            <div className="info__datos">
              <h5>{releaseDate} | {duration} | {maturity} | {genres.join(' - ')}</h5>
              <h4>⭐{rating} Rating    <Puntaje puntaje={metascore} />       Metascore</h4>
              <h4> <span className="subtitle">{director}</span> - {mainActors.join(', ')}</h4>
              <p>{plot}</p>
            </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
