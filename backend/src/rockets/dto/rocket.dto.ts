import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Height {
  @Field()
  meters: number;

  @Field()
  feet: number;
}

@ObjectType()
export class Diameter {
  @Field()
  meters: number;

  @Field()
  feet: number;
}

@ObjectType()
export class Mass {
  @Field()
  kg: number;

  @Field()
  lb: number;
}

export interface Mass {
  kg: number;
  lb: number;
}

@ObjectType()
export class Rocket {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  height: Height;

  @Field()
  diameter: Diameter;

  @Field()
  mass: Mass;

  @Field(() => [String])
  flickr_images: string[];

  @Field()
  type: string;

  @Field()
  active: boolean;

  @Field()
  stages: number;

  @Field()
  boosters: number;

  @Field()
  cost_per_launch: number;

  @Field()
  success_rate_pct: number;

  @Field()
  first_flight: string;

  @Field()
  country: string;

  @Field()
  company: string;

  @Field()
  wikipedia: string;

  @Field()
  description: string;
}
