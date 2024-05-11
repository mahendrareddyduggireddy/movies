import './index.css'
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Footer from '../Footer'

class Popular extends Component {
  state = {
    popularList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.popularFunc()
  }

  popularFunc = async () => {
    this.setState({isLoading: true})
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        Accept: 'application/json',
      },
    }
    const response = await fetch(
      'https://apis.ccbp.in/movies-app/popular-movies',
      options,
    )
    const data = await response.json()
    const updatedData = data.results.map(each => ({
      backDrop: each.backdrop_path,
      id: each.id,
      overview: each.overview,
      posterPath: each.poster_path,
      title: each.title,
    }))
    this.setState({popularList: updatedData, isLoading: false})
  }

  render() {
    const {popularList, isLoading} = this.state
    return (
      <div className="popular-container">
        <Header />
        {isLoading ? (
          <div className="loader-container" testid="loader">
            <Loader type="TailSpin" color="#D81F26" height={50} width={50} />
          </div>
        ) : (
          <>
            <ul className="popular-ul-container">
              {popularList.map(each => (
                <Link to={`/movies/${each.id}`}>
                  <li className="popular-li-container" key={each.id}>
                    <img
                      src={each.posterPath}
                      alt={each.title}
                      className="popular-image-container"
                    />
                  </li>
                </Link>
              ))}
            </ul>
          </>
        )}
        <Footer />
      </div>
    )
  }
}
export default Popular
