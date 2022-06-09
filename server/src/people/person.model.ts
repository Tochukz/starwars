import { Args, Field,  ObjectType, } from '@nestjs/graphql';

@ObjectType({description: 'Starwar Person'})
export class Person {

    @Field(type => String)
    name: string;

    @Field()
    height: string;

    @Field()
    mass: string;

    @Field(type => String)
    gender: string;

    @Field(type => String)
    homeworld: string;
}