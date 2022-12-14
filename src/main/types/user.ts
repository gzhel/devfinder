export type MockGithubUser = {
  login: null;
  avatar: string;
  name: null;
  company: null;
  blog: null;
  location: null;
  bio: null;
  twitter: null;
  repos: number;
  followers: number;
  following: number;
  created: null;
};

export type LocalGithubUser =
  | {
      login: string;
      avatar: string;
      name: string;
      company: string;
      blog: string;
      location: string;
      bio: string;
      twitter: string;
      repos: number;
      followers: number;
      following: number;
      created: string;
    }
  | MockGithubUser;

export type GithubUser = {
  id: number;
  login: string;
  avatar_url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  bio: string;
  twitter_username: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
};

export type GithubError = {
  message: string;
  documentation_url: string;
};
