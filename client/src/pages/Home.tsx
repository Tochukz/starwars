import { useEffect } from "react";
import { connect } from "react-redux";

import Base from '../layout/Base';
import Pagination from "../components/Pagination";
import Person from "../components/Person";
import { IPerson } from "../interfaces/iPerson";
import { getPeople } from '../store/slices/people.slice';


function Home(props: {people: IPerson[], queryPeople: Function}) {

  useEffect(() => {
    getPeople(1);
  }, []);

  const getPeople = (page: number = 0, name: string = '') => {
    props.queryPeople(page, name)
         .then()
         .catch((err: any) => {
             console.error('err', err);
         })
  }

  return (
    <Base>
      <div className="home row">
          <div className="col-sm-12">
            <Pagination pageMeta={{current: 1}} />
          </div>
          { props.people.map((person: IPerson, i: number) => 
            <Person person={person} key={i} />
          )}
          <div className="col-sm-12">
            <Pagination pageMeta={{current: 1}} />
          </div>
      </div>
    </Base>
  )
}

const mapStateToProps = (state: any) => ({
  people: state.people.people || [],
});

const mapDispatchToProps = {
  queryPeople: getPeople,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);