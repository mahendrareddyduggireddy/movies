import './index.css'
import {Link} from 'react-router-dom'

const Originals = props => {
  const {item} = props
  const {name, posterPath, id} = item
  return (
    <Link to={`/movies/${id}`}>
      <img src={posterPath} alt={name} className="og-image-container" />
    </Link>
  )
}
export default Originals
