import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'
import Footer from '../Footer'

class MovieItemDetails extends Component {
  state = {
    movieDetails: {},
    isLoading: true,
    genres: [],
    spokenLanguages: [],
    similarMovies: [],
  }

  componentDidMount() {
    this.itemDetailsFunction()
  }

  itemDetailsFunction = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({isLoading: true})
    const url = `https://apis.ccbp.in/movies-app/movies/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Cookies.get('jwt_token')}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()

    const updatedData = {
      adult: data.movie_details.adult,
      backdropPath: data.movie_details.backdrop_path,
      budget: data.movie_details.budget,
      title: data.movie_details.title,
      voteAverage: data.movie_details.vote_average,
      voteCount: data.movie_details.vote_count,
      id: data.movie_details.id,
      runtime: data.movie_details.runtime,
      overview: data.movie_details.overview,
      posterPath: data.movie_details.poster_path,
      releaseDate: data.movie_details.release_date,
      genres: data.movie_details.genres,
      similarMovies: data.movie_details.similar_movies,
      spokenLanguages: data.movie_details.spoken_languages,
    }

    const updatedGenres = data.movie_details.genres.map(each => ({
      id: each.id,
      name: each.name,
    }))

    const updatedMovies = data.movie_details.similar_movies.map(each => ({
      id: each.id,
      overview: each.overview,
      backdropPath: each.backdrop_path,
      posterPath: each.poster_path,
      title: each.title,
    }))

    const updatedSpokenLanguages = data.movie_details.spoken_languages.map(
      each => ({
        id: each.id,
        englishName: each.english_name,
      }),
    )

    this.setState({
      movieDetails: updatedData,
      genres: updatedGenres,
      similarMovies: updatedMovies,
      spokenLanguages: updatedSpokenLanguages,
      isLoading: false,
    })
  }

  render() {
    const {
      movieDetails,
      isLoading,
      similarMovies,
      genres,
      spokenLanguages,
    } = this.state
    console.log(isLoading)
    console.log(genres)
    console.log(spokenLanguages)
    return (
      <div className="movie-details-container">
        <div
          className="movie-item-container"
          style={{
            backgroundImage: `url(${movieDetails.backdropPath})`,
          }}
        >
          <Header />
          <div className="movie-description-container">
            <h1>{movieDetails.title}</h1>
            <ul className="core-details-container">
              <li>{movieDetails.runtime}</li>
              <li>{movieDetails.releaseDate}</li>
            </ul>
            <p>{movieDetails.overview}</p>
            <button type="button">Play</button>
          </div>
        </div>
        <div className="extra-details-container">
          <div>
            <h2 className="sub-heading">Genres</h2>
            <ul className="genres-container">
              {genres.map(each => (
                <li className="genre-li-item" id={each.id}>
                  {each.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="sub-heading">Audio Available</h2>
            <ul className="lang-container">
              {spokenLanguages.map(each => (
                <li className="lang-li-item" id={each.id}>
                  {each.englishName}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="sub-heading">Rating Count</h2>
            <p>{movieDetails.voteCount}</p>
            <h2 className="sub-heading">Rating Average</h2>
            <p>{movieDetails.voteAverage}</p>
          </div>
          <div>
            <h2 className="sub-heading">Budget</h2>
            <p>{movieDetails.budget}</p>
            <h2 className="sub-heading">Release date</h2>
            <p>{movieDetails.releaseDate}</p>
          </div>
        </div>

        <div>
          <h1 className="heading">More like this</h1>
          <ul className="movie-item-ul-container">
            {similarMovies.map(each => (
              <li className="movie-item-li-container" key={each.id}>
                <img
                  src={each.posterPath}
                  alt={each.title}
                  className="movie-item-image-container"
                />
              </li>
            ))}
          </ul>
        </div>
        <Footer />
      </div>
    )
  }
}
export default MovieItemDetails
