import gql from 'graphql-tag'
import * as VueApolloComposable from '@vue/apollo-composable'
import * as VueCompositionApi from 'vue'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never }
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
export type ReactiveFunction<TParam> = () => TParam

export const GetProfileDocument = gql`
  query getProfile {
    profile {
      id
      name
      email
    }
  }
`

/**
 * __useGetProfileQuery__
 *
 * To run a query within a Vue component, call `useGetProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetProfileQuery();
 */
export function useGetProfileQuery(
  options:
    | VueApolloComposable.UseQueryOptions<GetProfileQuery, GetProfileQueryVariables>
    | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetProfileQuery, GetProfileQueryVariables>>
    | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetProfileQuery, GetProfileQueryVariables>> = {},
) {
  return VueApolloComposable.useQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, {}, options)
}
export function useGetProfileLazyQuery(
  options:
    | VueApolloComposable.UseQueryOptions<GetProfileQuery, GetProfileQueryVariables>
    | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetProfileQuery, GetProfileQueryVariables>>
    | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetProfileQuery, GetProfileQueryVariables>> = {},
) {
  return VueApolloComposable.useLazyQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, {}, options)
}
export type GetProfileQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetProfileQuery, GetProfileQueryVariables>
export const GetNameDocument = gql`
  query getName {
    profile {
      name
    }
  }
`

/**
 * __useGetNameQuery__
 *
 * To run a query within a Vue component, call `useGetNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNameQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetNameQuery();
 */
export function useGetNameQuery(
  options:
    | VueApolloComposable.UseQueryOptions<GetNameQuery, GetNameQueryVariables>
    | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetNameQuery, GetNameQueryVariables>>
    | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetNameQuery, GetNameQueryVariables>> = {},
) {
  return VueApolloComposable.useQuery<GetNameQuery, GetNameQueryVariables>(GetNameDocument, {}, options)
}
export function useGetNameLazyQuery(
  options:
    | VueApolloComposable.UseQueryOptions<GetNameQuery, GetNameQueryVariables>
    | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetNameQuery, GetNameQueryVariables>>
    | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetNameQuery, GetNameQueryVariables>> = {},
) {
  return VueApolloComposable.useLazyQuery<GetNameQuery, GetNameQueryVariables>(GetNameDocument, {}, options)
}
export type GetNameQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetNameQuery, GetNameQueryVariables>
export const GetAppBarRightDocument = gql`
  query getAppBarRight {
    profile {
      name
      account
      avatar
    }
  }
`

/**
 * __useGetAppBarRightQuery__
 *
 * To run a query within a Vue component, call `useGetAppBarRightQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAppBarRightQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetAppBarRightQuery();
 */
export function useGetAppBarRightQuery(
  options:
    | VueApolloComposable.UseQueryOptions<GetAppBarRightQuery, GetAppBarRightQueryVariables>
    | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetAppBarRightQuery, GetAppBarRightQueryVariables>>
    | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetAppBarRightQuery, GetAppBarRightQueryVariables>> = {},
) {
  return VueApolloComposable.useQuery<GetAppBarRightQuery, GetAppBarRightQueryVariables>(GetAppBarRightDocument, {}, options)
}
export function useGetAppBarRightLazyQuery(
  options:
    | VueApolloComposable.UseQueryOptions<GetAppBarRightQuery, GetAppBarRightQueryVariables>
    | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetAppBarRightQuery, GetAppBarRightQueryVariables>>
    | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetAppBarRightQuery, GetAppBarRightQueryVariables>> = {},
) {
  return VueApolloComposable.useLazyQuery<GetAppBarRightQuery, GetAppBarRightQueryVariables>(GetAppBarRightDocument, {}, options)
}
export type GetAppBarRightQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  GetAppBarRightQuery,
  GetAppBarRightQueryVariables
>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
}

export type DeleteResp = {
  __typename?: 'DeleteResp'
  id: Scalars['String']['output']
}

export type EmailLoginParams = {
  email: Scalars['String']['input']
  otp?: InputMaybe<Scalars['String']['input']>
  password: Scalars['String']['input']
}

export type GithubLoginParams = {
  code: Scalars['String']['input']
}

export type LoginParams = {
  email?: InputMaybe<EmailLoginParams>
  github?: InputMaybe<GithubLoginParams>
}

export type LoginResp = {
  __typename?: 'LoginResp'
  accessToken: Scalars['String']['output']
  expires: Scalars['Int']['output']
  idToken: Scalars['String']['output']
  refreshToken: Scalars['String']['output']
}

export type Mutation = {
  __typename?: 'Mutation'
  delete: DeleteResp
  login: LoginResp
}

export type MutationLoginArgs = {
  by: LoginParams
}

export type Profile = {
  __typename?: 'Profile'
  account: Scalars['String']['output']
  avatar: Scalars['String']['output']
  email: Scalars['String']['output']
  id: Scalars['String']['output']
  isOtp: Scalars['Boolean']['output']
  name: Scalars['String']['output']
}

export type Query = {
  __typename?: 'Query'
  profile: Profile
}

export type GetProfileQueryVariables = Exact<{ [key: string]: never }>

export type GetProfileQuery = { __typename?: 'Query'; profile: { __typename?: 'Profile'; id: string; name: string; email: string } }

export type GetNameQueryVariables = Exact<{ [key: string]: never }>

export type GetNameQuery = { __typename?: 'Query'; profile: { __typename?: 'Profile'; name: string } }

export type GetAppBarRightQueryVariables = Exact<{ [key: string]: never }>

export type GetAppBarRightQuery = {
  __typename?: 'Query'
  profile: { __typename?: 'Profile'; name: string; account: string; avatar: string }
}
