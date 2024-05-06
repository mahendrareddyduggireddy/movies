import './index.css'
import {Link} from 'react-router-dom'

const Trends = props => {
  const {item} = props
  const {title, backDrop, id} = item
  return (
    <Link to={`/movies/${id}`}>
      <img src={backDrop} alt={title} className="trend-image-container" />
    </Link>
  )
}
export default Trends
