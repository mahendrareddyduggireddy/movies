import './index.css'
import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Footer from '../Footer'
import Trends from '../TrendingNow'
import Originals from '../Original'

class Home extends Component {
  state = {
    trendingList: [],
    originalsList: [],
    originalItem: {},
    isLoading: true,
  }

  componentDidMount() {
    this.originalFunc()
    this.trendingFunc()
  }

  trendingFunc = async () => {
    this.setState({isLoading: true})
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(
      'https://apis.ccbp.in/movies-app/trending-movies',
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
    this.setState({trendingList: updatedData, isLoading: false})
  }

  originalFunc = async () => {
    this.setState({isLoading: true})
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(
      'https://apis.ccbp.in/movies-app/originals',
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
    const item = Math.ceil(Math.random() * updatedData.length)
    this.setState({
      originalsList: updatedData,
      originalItem: updatedData[item],
      isLoading: false,
    })
  }

  render() {
    const {trendingList, originalsList, originalItem, isLoading} = this.state
    const settings = {
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 1,
    }
    if (Cookies.get('jwt_token') === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <div className="home-container">
        {isLoading ? (
          <div className="spinner-container">
            <div className="loader-container">
              <Loader type="TailSpin" color="#D81F26" height={50} width={50} />
            </div>
          </div>
        ) : (
          originalItem.backDrop !== undefined && (
            <div
              style={{
                backgroundImage: `url(${originalItem.backDrop})`,
                backgroundSize: 'cover',
              }}
              className="original-item-container"
            >
              <Header />
              <div className="item-description">
                <h1>{originalItem.title}</h1>
                <p>{originalItem.overview}</p>
                <button type="button">Play</button>
              </div>
            </div>
          )
        )}

        <div>
          <h2>Trending Now</h2>
          {isLoading ? (
            <div className="spinner-container">
              <div className="loader-container">
                <Loader
                  type="TailSpin"
                  color="#D81F26"
                  height={50}
                  width={50}
                />
              </div>
            </div>
          ) : (
            <div className="slider-container">
              <Slider {...settings}>
                {trendingList.map(each => (
                  <Trends item={each} key={each.id} />
                ))}
              </Slider>
            </div>
          )}
          <h2>Originals</h2>
          {isLoading ? (
            <div className="spinner-container">
              <div className="loader-container">
                <Loader
                  type="TailSpin"
                  color="#D81F26"
                  height={50}
                  width={50}
                />
              </div>
            </div>
          ) : (
            <div className="slider-container">
              <Slider {...settings}>
                {originalsList.map(each => (
                  <Originals item={each} key={each.id} />
                ))}
              </Slider>
            </div>
          )}
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    )
  }
}
export default Home
