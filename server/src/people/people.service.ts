import { Injectable } from '@nestjs/common';
import { RequestService } from 'src/request/request.service';
import { Person } from './person.model';

@Injectable()
export class PeopleService {
  constructor(private requestService: RequestService) {}
    
  async getPeople(page: number, name: string): Promise<Person[]> {
    let path = 'people';
    if (page) {
      path = `people?page=${page}`;
    } else if(name) {
      path = `people?search=${name}`;
    }
    console.log('path', path);
    const response = await this.requestService.get(path);
    const people = response.data?.results.map(person => {
       const {name, height, mass, gender, homeworld} = person;
       return {name, height, mass, gender, homeworld};
    });
    return people || [];
  }  
}
