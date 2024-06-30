import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from 'vue';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type ReactiveFunction<TParam> = () => TParam;

export const PingDocument = gql`
    query ping {
  ping
}
    `;

/**
 * __usePingQuery__
 *
 * To run a query within a Vue component, call `usePingQuery` and pass it any options that fit your needs.
 * When your component renders, `usePingQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = usePingQuery();
 */
export function usePingQuery(options: VueApolloComposable.UseQueryOptions<PingQuery, PingQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<PingQuery, PingQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<PingQuery, PingQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<PingQuery, PingQueryVariables>(PingDocument, {}, options);
}
export function usePingLazyQuery(options: VueApolloComposable.UseQueryOptions<PingQuery, PingQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<PingQuery, PingQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<PingQuery, PingQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<PingQuery, PingQueryVariables>(PingDocument, {}, options);
}
export type PingQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<PingQuery, PingQueryVariables>;
export const ProfileDocument = gql`
    query profile {
  profile {
    profile {
      userId
      secret
      maxDevice
      usedBandwidth
    }
    onlineDevices {
      id
      hostId
      addr
    }
  }
}
    `;

/**
 * __useProfileQuery__
 *
 * To run a query within a Vue component, call `useProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useProfileQuery();
 */
export function useProfileQuery(options: VueApolloComposable.UseQueryOptions<ProfileQuery, ProfileQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ProfileQuery, ProfileQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ProfileQuery, ProfileQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, {}, options);
}
export function useProfileLazyQuery(options: VueApolloComposable.UseQueryOptions<ProfileQuery, ProfileQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ProfileQuery, ProfileQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ProfileQuery, ProfileQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, {}, options);
}
export type ProfileQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ProfileQuery, ProfileQueryVariables>;
export const ResetSubscriptionDocument = gql`
    mutation resetSubscription {
  resetSubscription
}
    `;

/**
 * __useResetSubscriptionMutation__
 *
 * To run a mutation, you first call `useResetSubscriptionMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useResetSubscriptionMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useResetSubscriptionMutation();
 */
export function useResetSubscriptionMutation(options: VueApolloComposable.UseMutationOptions<ResetSubscriptionMutation, ResetSubscriptionMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<ResetSubscriptionMutation, ResetSubscriptionMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<ResetSubscriptionMutation, ResetSubscriptionMutationVariables>(ResetSubscriptionDocument, options);
}
export type ResetSubscriptionMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<ResetSubscriptionMutation, ResetSubscriptionMutationVariables>;
export const KickDevicesDocument = gql`
    mutation kickDevices($deviceIds: [String!]!) {
  kick(deviceIds: $deviceIds)
}
    `;

/**
 * __useKickDevicesMutation__
 *
 * To run a mutation, you first call `useKickDevicesMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useKickDevicesMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useKickDevicesMutation({
 *   variables: {
 *     deviceIds: // value for 'deviceIds'
 *   },
 * });
 */
export function useKickDevicesMutation(options: VueApolloComposable.UseMutationOptions<KickDevicesMutation, KickDevicesMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<KickDevicesMutation, KickDevicesMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<KickDevicesMutation, KickDevicesMutationVariables>(KickDevicesDocument, options);
}
export type KickDevicesMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<KickDevicesMutation, KickDevicesMutationVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Device = {
  __typename?: 'Device';
  addr: Scalars['String']['output'];
  hostId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  kick: Array<Scalars['String']['output']>;
  resetSubscription: Scalars['String']['output'];
};


export type MutationKickArgs = {
  deviceIds: Array<Scalars['String']['input']>;
};

export type Profile = {
  __typename?: 'Profile';
  createTs: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  maxDevice: Scalars['Int']['output'];
  secret: Scalars['String']['output'];
  updateTs: Scalars['Int']['output'];
  usedBandwidth: Scalars['Int']['output'];
  userId: Scalars['String']['output'];
};

export type ProfileDto = {
  __typename?: 'ProfileDto';
  onlineDevices: Array<Device>;
  profile: Profile;
};

export type Query = {
  __typename?: 'Query';
  ping: Scalars['String']['output'];
  profile: ProfileDto;
};

export type PingQueryVariables = Exact<{ [key: string]: never; }>;


export type PingQuery = { __typename?: 'Query', ping: string };

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { __typename?: 'Query', profile: { __typename?: 'ProfileDto', profile: { __typename?: 'Profile', userId: string, secret: string, maxDevice: number, usedBandwidth: number }, onlineDevices: Array<{ __typename?: 'Device', id: string, hostId: string, addr: string }> } };

export type ResetSubscriptionMutationVariables = Exact<{ [key: string]: never; }>;


export type ResetSubscriptionMutation = { __typename?: 'Mutation', resetSubscription: string };

export type KickDevicesMutationVariables = Exact<{
  deviceIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type KickDevicesMutation = { __typename?: 'Mutation', kick: Array<string> };
