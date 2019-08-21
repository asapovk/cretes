export type Maybe<T> = T | null;

export interface ContributionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<ContributionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<ContributionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<ContributionWhereInput[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  title?: Maybe<string>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<string>;
  /** All values that are contained in given list. */
  title_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  title_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  title_lte?: Maybe<string>;
  /** All values greater than the given value. */
  title_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<string>;
  /** All values containing the given string. */
  title_contains?: Maybe<string>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<string>;

  oral?: Maybe<boolean>;
  /** All values that are not equal to given value. */
  oral_not?: Maybe<boolean>;

  abstract?: Maybe<string>;
  /** All values that are not equal to given value. */
  abstract_not?: Maybe<string>;
  /** All values that are contained in given list. */
  abstract_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  abstract_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  abstract_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  abstract_lte?: Maybe<string>;
  /** All values greater than the given value. */
  abstract_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  abstract_gte?: Maybe<string>;
  /** All values containing the given string. */
  abstract_contains?: Maybe<string>;
  /** All values not containing the given string. */
  abstract_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  abstract_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  abstract_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  abstract_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  abstract_not_ends_with?: Maybe<string>;

  speaker?: Maybe<ParticipantWhereInput>;

  authors_every?: Maybe<ParticipantWhereInput>;

  authors_some?: Maybe<ParticipantWhereInput>;

  authors_none?: Maybe<ParticipantWhereInput>;
}

export interface ParticipantWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<ParticipantWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<ParticipantWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<ParticipantWhereInput[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  name?: Maybe<string>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<string>;
  /** All values that are contained in given list. */
  name_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  name_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<string>;
  /** All values greater than the given value. */
  name_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<string>;
  /** All values containing the given string. */
  name_contains?: Maybe<string>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<string>;

  title?: Maybe<string>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<string>;
  /** All values that are contained in given list. */
  title_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  title_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  title_lte?: Maybe<string>;
  /** All values greater than the given value. */
  title_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<string>;
  /** All values containing the given string. */
  title_contains?: Maybe<string>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<string>;

  email?: Maybe<string>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<string>;
  /** All values that are contained in given list. */
  email_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  email_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  email_lte?: Maybe<string>;
  /** All values greater than the given value. */
  email_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  email_gte?: Maybe<string>;
  /** All values containing the given string. */
  email_contains?: Maybe<string>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  email_not_ends_with?: Maybe<string>;
}

export interface ContributionWhereUniqueInput {
  id?: Maybe<string>;
}

export interface ParticipantWhereUniqueInput {
  id?: Maybe<string>;
}

export interface ContributionCreateInput {
  id?: Maybe<string>;

  title?: Maybe<string>;

  oral?: Maybe<boolean>;

  abstract?: Maybe<string>;

  speaker?: Maybe<ParticipantCreateOneInput>;

  authors?: Maybe<ParticipantCreateManyInput>;
}

export interface ParticipantCreateOneInput {
  create?: Maybe<ParticipantCreateInput>;

  connect?: Maybe<ParticipantWhereUniqueInput>;
}

export interface ParticipantCreateInput {
  id?: Maybe<string>;

  name: string;

  title?: Maybe<string>;

  email: string;
}

export interface ParticipantCreateManyInput {
  create?: Maybe<ParticipantCreateInput[]>;

  connect?: Maybe<ParticipantWhereUniqueInput[]>;
}

export interface ContributionUpdateInput {
  title?: Maybe<string>;

  oral?: Maybe<boolean>;

  abstract?: Maybe<string>;

  speaker?: Maybe<ParticipantUpdateOneInput>;

  authors?: Maybe<ParticipantUpdateManyInput>;
}

export interface ParticipantUpdateOneInput {
  create?: Maybe<ParticipantCreateInput>;

  connect?: Maybe<ParticipantWhereUniqueInput>;

  disconnect?: Maybe<boolean>;

  delete?: Maybe<boolean>;

  update?: Maybe<ParticipantUpdateDataInput>;

  upsert?: Maybe<ParticipantUpsertNestedInput>;
}

export interface ParticipantUpdateDataInput {
  name?: Maybe<string>;

  title?: Maybe<string>;

  email?: Maybe<string>;
}

export interface ParticipantUpsertNestedInput {
  update: ParticipantUpdateDataInput;

  create: ParticipantCreateInput;
}

export interface ParticipantUpdateManyInput {
  create?: Maybe<ParticipantCreateInput[]>;

  connect?: Maybe<ParticipantWhereUniqueInput[]>;

  set?: Maybe<ParticipantWhereUniqueInput[]>;

  disconnect?: Maybe<ParticipantWhereUniqueInput[]>;

  delete?: Maybe<ParticipantWhereUniqueInput[]>;

  update?: Maybe<ParticipantUpdateWithWhereUniqueNestedInput[]>;

  updateMany?: Maybe<ParticipantUpdateManyWithWhereNestedInput[]>;

  deleteMany?: Maybe<ParticipantScalarWhereInput[]>;

  upsert?: Maybe<ParticipantUpsertWithWhereUniqueNestedInput[]>;
}

export interface ParticipantUpdateWithWhereUniqueNestedInput {
  where: ParticipantWhereUniqueInput;

  data: ParticipantUpdateDataInput;
}

export interface ParticipantUpdateManyWithWhereNestedInput {
  where: ParticipantScalarWhereInput;

  data: ParticipantUpdateManyDataInput;
}

export interface ParticipantScalarWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<ParticipantScalarWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<ParticipantScalarWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<ParticipantScalarWhereInput[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  name?: Maybe<string>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<string>;
  /** All values that are contained in given list. */
  name_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  name_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<string>;
  /** All values greater than the given value. */
  name_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<string>;
  /** All values containing the given string. */
  name_contains?: Maybe<string>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<string>;

  title?: Maybe<string>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<string>;
  /** All values that are contained in given list. */
  title_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  title_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  title_lte?: Maybe<string>;
  /** All values greater than the given value. */
  title_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<string>;
  /** All values containing the given string. */
  title_contains?: Maybe<string>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<string>;

  email?: Maybe<string>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<string>;
  /** All values that are contained in given list. */
  email_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  email_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  email_lte?: Maybe<string>;
  /** All values greater than the given value. */
  email_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  email_gte?: Maybe<string>;
  /** All values containing the given string. */
  email_contains?: Maybe<string>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  email_not_ends_with?: Maybe<string>;
}

export interface ParticipantUpdateManyDataInput {
  name?: Maybe<string>;

  title?: Maybe<string>;

  email?: Maybe<string>;
}

export interface ParticipantUpsertWithWhereUniqueNestedInput {
  where: ParticipantWhereUniqueInput;

  update: ParticipantUpdateDataInput;

  create: ParticipantCreateInput;
}

export interface ParticipantUpdateInput {
  name?: Maybe<string>;

  title?: Maybe<string>;

  email?: Maybe<string>;
}

export interface ContributionUpdateManyMutationInput {
  title?: Maybe<string>;

  oral?: Maybe<boolean>;

  abstract?: Maybe<string>;
}

export interface ParticipantUpdateManyMutationInput {
  name?: Maybe<string>;

  title?: Maybe<string>;

  email?: Maybe<string>;
}

export interface ContributionSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<ContributionSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<ContributionSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<ContributionSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<ContributionWhereInput>;
}

export interface ParticipantSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<ParticipantSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<ParticipantSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<ParticipantSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<ParticipantWhereInput>;
}

export type ContributionOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "oral_ASC"
  | "oral_DESC"
  | "abstract_ASC"
  | "abstract_DESC";

export type ParticipantOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "title_ASC"
  | "title_DESC"
  | "email_ASC"
  | "email_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

/** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
export type Long = any;

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Interfaces
// ====================================================

/** An object with an ID */
export interface Node {
  /** The id of the object. */
  id: string;
}

// ====================================================
// Types
// ====================================================

export interface Query {
  contributions: (Maybe<Contribution>)[];

  participants: (Maybe<Participant>)[];

  contribution?: Maybe<Contribution>;

  participant?: Maybe<Participant>;

  contributionsConnection: ContributionConnection;

  participantsConnection: ParticipantConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
}

export interface Contribution extends Node {
  id: string;

  speaker?: Maybe<Participant>;

  authors?: Maybe<Participant[]>;

  title?: Maybe<string>;

  oral?: Maybe<boolean>;

  abstract?: Maybe<string>;
}

export interface Participant extends Node {
  id: string;

  name: string;

  title?: Maybe<string>;

  email: string;
}

/** A connection to a list of items. */
export interface ContributionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: (Maybe<ContributionEdge>)[];

  aggregate: AggregateContribution;
}

/** Information about pagination in a connection. */
export interface PageInfo {
  /** When paginating forwards, are there more items? */
  hasNextPage: boolean;
  /** When paginating backwards, are there more items? */
  hasPreviousPage: boolean;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<string>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<string>;
}

/** An edge in a connection. */
export interface ContributionEdge {
  /** The item at the end of the edge. */
  node: Contribution;
  /** A cursor for use in pagination. */
  cursor: string;
}

export interface AggregateContribution {
  count: number;
}

/** A connection to a list of items. */
export interface ParticipantConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: (Maybe<ParticipantEdge>)[];

  aggregate: AggregateParticipant;
}

/** An edge in a connection. */
export interface ParticipantEdge {
  /** The item at the end of the edge. */
  node: Participant;
  /** A cursor for use in pagination. */
  cursor: string;
}

export interface AggregateParticipant {
  count: number;
}

export interface Mutation {
  createContribution: Contribution;

  createParticipant: Participant;

  updateContribution?: Maybe<Contribution>;

  updateParticipant?: Maybe<Participant>;

  deleteContribution?: Maybe<Contribution>;

  deleteParticipant?: Maybe<Participant>;

  upsertContribution: Contribution;

  upsertParticipant: Participant;

  updateManyContributions: BatchPayload;

  updateManyParticipants: BatchPayload;

  deleteManyContributions: BatchPayload;

  deleteManyParticipants: BatchPayload;
}

export interface BatchPayload {
  /** The number of nodes that have been affected by the Batch operation. */
  count: Long;
}

export interface Subscription {
  contribution?: Maybe<ContributionSubscriptionPayload>;

  participant?: Maybe<ParticipantSubscriptionPayload>;
}

export interface ContributionSubscriptionPayload {
  mutation: MutationType;

  node?: Maybe<Contribution>;

  updatedFields?: Maybe<string[]>;

  previousValues?: Maybe<ContributionPreviousValues>;
}

export interface ContributionPreviousValues {
  id: string;

  title?: Maybe<string>;

  oral?: Maybe<boolean>;

  abstract?: Maybe<string>;
}

export interface ParticipantSubscriptionPayload {
  mutation: MutationType;

  node?: Maybe<Participant>;

  updatedFields?: Maybe<string[]>;

  previousValues?: Maybe<ParticipantPreviousValues>;
}

export interface ParticipantPreviousValues {
  id: string;

  name: string;

  title?: Maybe<string>;

  email: string;
}

// ====================================================
// Arguments
// ====================================================

export interface ContributionsQueryArgs {
  where?: Maybe<ContributionWhereInput>;

  orderBy?: Maybe<ContributionOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface ParticipantsQueryArgs {
  where?: Maybe<ParticipantWhereInput>;

  orderBy?: Maybe<ParticipantOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface ContributionQueryArgs {
  where: ContributionWhereUniqueInput;
}
export interface ParticipantQueryArgs {
  where: ParticipantWhereUniqueInput;
}
export interface ContributionsConnectionQueryArgs {
  where?: Maybe<ContributionWhereInput>;

  orderBy?: Maybe<ContributionOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface ParticipantsConnectionQueryArgs {
  where?: Maybe<ParticipantWhereInput>;

  orderBy?: Maybe<ParticipantOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface NodeQueryArgs {
  /** The ID of an object */
  id: string;
}
export interface AuthorsContributionArgs {
  where?: Maybe<ParticipantWhereInput>;

  orderBy?: Maybe<ParticipantOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface CreateContributionMutationArgs {
  data: ContributionCreateInput;
}
export interface CreateParticipantMutationArgs {
  data: ParticipantCreateInput;
}
export interface UpdateContributionMutationArgs {
  data: ContributionUpdateInput;

  where: ContributionWhereUniqueInput;
}
export interface UpdateParticipantMutationArgs {
  data: ParticipantUpdateInput;

  where: ParticipantWhereUniqueInput;
}
export interface DeleteContributionMutationArgs {
  where: ContributionWhereUniqueInput;
}
export interface DeleteParticipantMutationArgs {
  where: ParticipantWhereUniqueInput;
}
export interface UpsertContributionMutationArgs {
  where: ContributionWhereUniqueInput;

  create: ContributionCreateInput;

  update: ContributionUpdateInput;
}
export interface UpsertParticipantMutationArgs {
  where: ParticipantWhereUniqueInput;

  create: ParticipantCreateInput;

  update: ParticipantUpdateInput;
}
export interface UpdateManyContributionsMutationArgs {
  data: ContributionUpdateManyMutationInput;

  where?: Maybe<ContributionWhereInput>;
}
export interface UpdateManyParticipantsMutationArgs {
  data: ParticipantUpdateManyMutationInput;

  where?: Maybe<ParticipantWhereInput>;
}
export interface DeleteManyContributionsMutationArgs {
  where?: Maybe<ContributionWhereInput>;
}
export interface DeleteManyParticipantsMutationArgs {
  where?: Maybe<ParticipantWhereInput>;
}
export interface ContributionSubscriptionArgs {
  where?: Maybe<ContributionSubscriptionWhereInput>;
}
export interface ParticipantSubscriptionArgs {
  where?: Maybe<ParticipantSubscriptionWhereInput>;
}
