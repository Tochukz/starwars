import { IPerson } from "../interfaces/iPerson";
import { Link } from 'react-router-dom';

import '../scss/person.scss';

export default function Person({ person }: {person: IPerson}) {
  return (
    <div className="col-sm-3 person">
      <Link to={`/details/${person.personId}`}>
        <div className="card">
        <h4>{ person.name }</h4>
          <div className="card-body">
            <p>
              <strong>Height: </strong> { person.height }
            </p>
            <p>
              <strong>Mass: </strong> { person.mass} 
            </p>
            <p>
              <strong>Gender: </strong> { person.gender}
            </p>
            <p>
              <strong>Home world: </strong> { person.homeworld}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}