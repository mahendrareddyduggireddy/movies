import './index.css'
import {Link} from 'react-router-dom'

const Originals = props => {
  const {item} = props
  const {title, backDrop, id} = item
  return (
    <Link to={`/movies/${id}`}>
      <img src={backDrop} alt={title} className="og-image-container" />
    </Link>
  )
}
export default Originals
