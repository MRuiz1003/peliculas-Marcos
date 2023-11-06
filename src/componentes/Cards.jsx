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
            <h3>{title}</h3>
            <h5>{releaseDate} | {duration} | {maturity} | {genres.join(' - ')}</h5>
            <h4>⭐{rating} Rating    <Puntaje puntaje={metascore} />       Metascore</h4>
        </div>
      </div>
    </>
  );
}

export default Cards;
