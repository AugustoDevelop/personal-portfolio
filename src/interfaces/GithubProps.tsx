export type GithubProps = {
  id: string;
  name: string;
  description: string | null;
  homepage: string | null;
  git_tags_url: string;
  topics: string[] | null;
  html_url: string;
}