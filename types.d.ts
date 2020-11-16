export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Country = {
  __typename?: 'Country';
  iso: Scalars['String'];
  name: Scalars['String'];
  population?: Maybe<Scalars['Int']>;
  area?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  languages?: Maybe<Scalars['String']>;
  capital?: Maybe<City>;
  neighbors?: Maybe<Array<Country>>;
  continent?: Maybe<Continent>;
};

export type Continent = {
  __typename?: 'Continent';
  iso: Scalars['String'];
  countries?: Maybe<Array<Maybe<Country>>>;
};

export type City = {
  __typename?: 'City';
  name: Scalars['String'];
  country?: Maybe<Country>;
};

export type Query = {
  __typename?: 'Query';
  getCountry?: Maybe<Country>;
  getContinent?: Maybe<Continent>;
};


export type QueryGetCountryArgs = {
  iso: Scalars['String'];
};


export type QueryGetContinentArgs = {
  iso: Scalars['String'];
};
