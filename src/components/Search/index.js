import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import SearchHeader from '../SearchHeader'
import Footer from '../Footer'

class Search extends Component {
  state = {
    userInput: '',
    moviesList: '',
    isLoading: false,
  }

  searchOverFunc = async () => {
    this.setState({isLoading: true})
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const {userInput} = this.state
    const response = await fetch(
      `https://apis.ccbp.in/movies-app/movies-search?search=${userInput}`,
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
    this.setState({moviesList: updatedData, isLoading: false})
  }

  inputFunc = event => {
    this.setState({userInput: event.target.value})
  }

  render() {
    const {moviesList, userInput, isLoading} = this.state
    return (
      <div className="search-container">
        <SearchHeader
          userInput={userInput}
          inputFunc={this.inputFunc}
          searchFunc={this.searchOverFunc}
        />
        {isLoading ? (
          <div className="loader-container" testid="loader">
            <Loader type="TailSpin" color="#D81F26" height={50} width={50} />
          </div>
        ) : (
          <>
            {moviesList.length === 0 && (
              <div className="empty-container">
                <img
                  src="https://res.cloudinary.com/dxqfqtqnl/image/upload/v1714987545/Group_73941x_ncyhex.png"
                  alt="images"
                />
                <p>Your search for {userInput} did not find any matches.</p>
              </div>
            )}
            {moviesList.length > 0 && (
              <ul className="ul-container">
                {moviesList.map(each => (
                  <li key={each.id}>
                    <img
                      src={each.posterPath}
                      alt={each.title}
                      className="item"
                    />
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
        <Footer />
      </div>
    )
  }
}
export default Search
