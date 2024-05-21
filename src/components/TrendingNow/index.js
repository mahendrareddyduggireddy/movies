import './index.css'
import {Link} from 'react-router-dom'

const Trends = props => {
  const {item} = props
  const {name, posterPath, id} = item
  return (
    <Link to={`/movies/${id}`}>
      <img src={posterPath} alt={name} className="trend-image-container" />
    </Link>
  )
}
export default Trends
