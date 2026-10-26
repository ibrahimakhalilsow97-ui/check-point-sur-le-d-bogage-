import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import films from "./Data/Movies";
import FilmCard from "./Components/FilmCard";
import { useState } from "react";

function App() {
    const [search, setSearch] = useState("");
  const [minRating, setMinRating] = useState("");

//    {/* bloc logique de filtre */}
// const filteredMovies = movies .filter((movie) => { erreur etait au niveau de importation  

  const filteredMovies = films.filter((movie) => {
  const matchesName = movie.title
    .toLowerCase()
    .includes(search.trim().toLowerCase());

  const matchesRating =
    minRating === "" ||
    movie.rating >= Number(minRating);

  return matchesName && matchesRating;
});

// fin bloc filtre

  return (
    <Container>
      <h1>Ma filmothèque</h1>
      <p className="text-muted">
  {filteredMovies.length} film(s) trouvé(s)
</p>
 {/* les champs de recherche  */}

 {/* champs de filtre */}
<div className="row g-3 mb-4">
  <div className="col-md-8">
    <label className="form-label">Rechercher par nom</label>
    <input
      type="text"
      className="form-control"
      placeholder="Ex. Inception"
      value={search}
      onChange={(event) => setSearch(event.target.value)}
    />
  </div>

  <div className="col-md-4">
    <label className="form-label">Note minimale</label>
    <select
      className="form-select"
      value={minRating}
      onChange={(event) => setMinRating(event.target.value)}
    >
      <option value="">Toutes les notes</option>
      <option value="7">7/10 et plus</option>
      <option value="8">8/10 et plus</option>
      <option value="9">9/10 et plus</option>
    </select>
  </div>
</div>


      {/* <Row>
        {films.map((film) => (
          <Col key={film.id} md={4} className="mb-4">
            <FilmCard movie={film} />
          </Col>
        ))}
      </Row> */}


      



<Row>
  {/* liste filtrée
  {filteredMovies.map((movie) => (
    <Col key={movie.id} xs={12} sm={6} lg={4}>
      <FilmCard movie={movie} />
    </Col>
  ))} */}

{/* Affichage conditionnel */}

  {filteredMovies.map((movie) => (
    <Col key={movie.id} xs={12} sm={6} lg={4}>
      <FilmCard movie={movie} />
    </Col>
  ))}



  
</Row>



      
    </Container>
  );
}





export default App;