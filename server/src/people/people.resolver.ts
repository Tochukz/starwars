import { Resolver, ResolveField, Args, Query, Int } from '@nestjs/graphql';
import { PeopleService } from './people.service';
import { Person } from './person.model';

@Resolver(of => Person)
export class PeopleResolver  {
  constructor(private peopleService: PeopleService) {}

  @Query(returns => [Person]) 
  async people(
      @Args('page', {nullable: true, description: 'people page'}) page: number = 0,
      @Args('name', {nullable: true}) name: string = ''
  ): Promise<Person[]> {
    const people = await this.peopleService.getPeople(page, name);
    return people;
  }
}