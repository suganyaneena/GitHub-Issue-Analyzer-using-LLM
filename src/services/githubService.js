import axios from "axios";

export async function fetchOpenIssues(repo) {
   
  const url = `https://api.github.com/repos/${repo}/issues?state=open&per_page=100`;

  const response = await axios.get(url, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: process.env.GITHUB_TOKEN
        ? `Bearer ${process.env.GITHUB_TOKEN}`
        : undefined
    }
  });

  // console.log(response);
  // GitHub returns PRs as issues → filter them out
  return response.data
    .filter(issue => !issue.pull_request)
    .map(issue => ({
      id: issue.id,
      title: issue.title,
      body: issue.body,
      html_url: issue.html_url,
      created_at: issue.created_at
    }));
}
