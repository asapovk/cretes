export type Maybe<T> = T | null;

export interface ParticipantCreateInput {
  id?: Maybe<string>;

  name: string;

  title?: Maybe<string>;

  email: string;
}

export interface ParticipantUpdateInput {
  name?: Maybe<string>;

  title?: Maybe<string>;

  email?: Maybe<string>;
}

export interface ParticipantDeleteInput {
  id: number;
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

export type ParticipantOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "title_ASC"
  | "title_DESC"
  | "email_ASC"
  | "email_DESC";

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
  participants: Participant[];
}

export interface Participant extends Node {
  id: string;

  name: string;

  title?: Maybe<string>;

  email: string;
}

export interface Mutation {
  upload: Participant[];

  create: Participant;

  update: Participant;

  delete: boolean;
}

export interface Contribution extends Node {
  id: string;

  speaker?: Maybe<Participant>;

  authors?: Maybe<Participant[]>;

  title?: Maybe<string>;

  oral?: Maybe<boolean>;

  abstract?: Maybe<string>;
}

// ====================================================
// Arguments
// ====================================================

export interface UploadMutationArgs {
  input: ParticipantCreateInput[];
}
export interface CreateMutationArgs {
  input: ParticipantCreateInput;
}
export interface UpdateMutationArgs {
  input: ParticipantUpdateInput;
}
export interface DeleteMutationArgs {
  input: ParticipantDeleteInput;
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
