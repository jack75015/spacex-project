import { ObjectType, Field, ID } from '@nestjs/graphql';
import { GraphQLScalarType } from 'graphql';

// To avoid any type / complex documentation
const AnyType = new GraphQLScalarType({
  name: 'AnyType',
  description: 'Scalar type to represent any kind of value',
  parseValue(value: any) {
    return value;
  },
  serialize(value: any) {
    return value;
  },
});

@ObjectType()
export class Fairings {
  @Field({ nullable: true })
  reused?: boolean;
  @Field({ nullable: true })
  recovery_attempt?: boolean;
  @Field({ nullable: true })
  recovered?: boolean;
  @Field(() => AnyType, { nullable: true })
  ships: any[];
}

@ObjectType()
export class Patch {
  @Field()
  small: string;
  @Field()
  large: string;
}

@ObjectType()
export class Reddit {
  @Field()
  campaign: string;

  @Field({ nullable: true })
  launch?: string;

  @Field()
  media: string;

  @Field()
  recovery: string;
}

@ObjectType()
export class Flickr {
  @Field(() => [String])
  small: string[];

  @Field(() => [String])
  original: string[];
}

@ObjectType()
export class Links {
  @Field()
  patch: Patch;

  @Field()
  reddit: Reddit;

  @Field()
  flickr: Flickr;

  @Field({ nullable: true })
  presskit?: string;

  @Field()
  webcast: string;

  @Field()
  youtube_id: string;

  @Field()
  article: string;

  @Field()
  wikipedia: string;
}

@ObjectType()
export class Failure {
  @Field()
  time: number;

  @Field({ nullable: true })
  altitude?: number;

  @Field()
  reason: string;
}

@ObjectType()
export class Core {
  @Field()
  core: string;

  @Field()
  flight: number;

  @Field()
  gridfins: boolean;

  @Field()
  legs: boolean;

  @Field()
  reused: boolean;

  @Field()
  landing_attempt: boolean;

  @Field()
  landing_success: boolean;

  @Field()
  landing_type: string;

  @Field(() => AnyType, { nullable: true })
  landpad: any;
}

@ObjectType()
export class LaunchDTO {
  @Field({ nullable: true })
  fairings?: Fairings;

  @Field()
  links: Links;

  @Field({ nullable: true })
  static_fire_date_utc?: string;

  @Field({ nullable: true })
  static_fire_date_unix?: number;

  @Field()
  net: boolean;

  @Field()
  window: number;

  @Field()
  rocket: string;

  @Field()
  success: boolean;

  @Field(() => [Failure])
  failures: Failure[];

  @Field({ nullable: true })
  details?: string;

  @Field(() => AnyType, { nullable: true })
  crew: any[];

  @Field(() => [String])
  ships: string[];

  @Field(() => [String])
  capsules: string[];

  @Field(() => [String])
  payloads: string[];

  @Field()
  launchpad: string;

  @Field()
  flight_number: number;

  @Field()
  name: string;

  @Field()
  date_utc: string;

  @Field()
  date_unix: number;

  @Field()
  date_local: string;

  @Field()
  date_precision: string;

  @Field()
  upcoming: boolean;

  @Field(() => [Core])
  cores: Core[];

  @Field()
  auto_update: boolean;

  @Field()
  tbd: boolean;

  @Field()
  launch_library_id: string;

  @Field()
  id: string;
}
