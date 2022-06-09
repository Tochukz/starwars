import { useEffect, useState } from "react";
import { gql } from "graphql-request";
import { Query }  from "../services";
import { IPerson } from "../interfaces/iPerson";

export default function Home() {
  const [people, setPeople] = useState([]);

  const peopleQuery = gql` {
     people(page: 1) {
        name, 
        height,
        mass,
        gender,
        homeworld
     }
   }
  `;

  useEffect(() => {
    Query(peopleQuery)
         .then(response => {           
            setPeople(response.people);
         })
         .catch(err => {
             console.error('err', err);
         })
  }, []);


  return (
    <div>
        { people.map((person: IPerson, i: number) => 
          <p key={i}>{ person.name } </p>
        )}
    </div>
  )
}
