/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getRepositories
// ====================================================

export interface getRepositories_user_repositories_nodes_repositoryTopics_nodes_topic {
  __typename: "Topic";
  /**
   * The topic's name.
   */
  name: string;
}

export interface getRepositories_user_repositories_nodes_repositoryTopics_nodes {
  __typename: "RepositoryTopic";
  /**
   * The topic.
   */
  topic: getRepositories_user_repositories_nodes_repositoryTopics_nodes_topic;
}

export interface getRepositories_user_repositories_nodes_repositoryTopics {
  __typename: "RepositoryTopicConnection";
  /**
   * A list of nodes.
   */
  nodes: (getRepositories_user_repositories_nodes_repositoryTopics_nodes | null)[] | null;
}

export interface getRepositories_user_repositories_nodes {
  __typename: "Repository";
  id: string;
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The description of the repository.
   */
  description: string | null;
  /**
   * The HTTP URL for this repository
   */
  url: any;
  /**
   * The repository's URL.
   */
  homepageUrl: any | null;
  /**
   * A list of applied repository-topic associations for this repository.
   */
  repositoryTopics: getRepositories_user_repositories_nodes_repositoryTopics;
}

export interface getRepositories_user_repositories {
  __typename: "RepositoryConnection";
  /**
   * A list of nodes.
   */
  nodes: (getRepositories_user_repositories_nodes | null)[] | null;
}

export interface getRepositories_user {
  __typename: "User";
  /**
   * A list of repositories that the user owns.
   */
  repositories: getRepositories_user_repositories;
}

export interface getRepositories {
  /**
   * Lookup a user by login.
   */
  user: getRepositories_user | null;
}
