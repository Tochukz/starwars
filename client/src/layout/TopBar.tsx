import { Link } from 'react-router-dom';

import '../scss/topbar.scss';

export default function TopBar() {

  return (
    <div className="row topbar">
      <div className="col-sm-6">
        <h1>
        <Link to="/">STARWARS</Link>
        </h1>
      </div>      
    </div>    
  )
}
