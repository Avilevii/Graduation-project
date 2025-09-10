import {Link} from 'react-router-dom'
import '../../compsCss/navLinkes.css'
export default function NavLinkes() {
  return (
    <div className='linkes-container'>
        <Link to="/">HOME</Link>
      <Link to="getPostById">getPost</Link>
    </div>
  )
}
