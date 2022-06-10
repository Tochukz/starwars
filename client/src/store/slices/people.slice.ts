import { createSlice } from '@reduxjs/toolkit';
import { gql } from "graphql-request";

import { Query } from '../../services';
import { IPerson } from '../../interfaces/iPerson';
import { composeInitial, getFromStore, putInStore }  from '../../helpers/storage';

const slice = createSlice({
  name: 'people',
  initialState: composeInitial('people'),
  reducers: {
    setPeople(state: any, action)  {
      state.movies = action.payload;
      putInStore('people', 'people', state.movies);
    },
    setSearchResult(state: any, action) {
      state.searchResult = action.payload;
      putInStore('people', 'searchResult', state.searchResult);
    },
    setDetails(state: any, action) {
      state.searchResult = action.payload;
      putInStore('people', 'personDetails', state.personDetails);
    }
  }
});

const { setPeople, setSearchResult } = slice.actions;

export const getPeople = (page: number = 0, name: string = '') => async (dispatch: Function): Promise<IPerson[]> => {
    let param;
    if (page) {
      param = `page: ${page}`;
    } else if(name) {
      param = `name: "${name}"`;
    }
    const peopleQuery = gql` {
        people(${param}) {
           name, 
           height,
           mass,
           gender,
           homeworld,
           personId,
        }
      }
     `;
    const response = await Query(peopleQuery);   
    const people = <IPerson[]>response.people;  
    if (page) {
      dispatch(setPeople(people));
    } else if (name) {
      dispatch(setSearchResult(people));
    } 
    
    return people;
}

export const getPersonDetails = (personId: string) => async () => {
 return [];
}

export const peopleSlice =  slice.reducer;