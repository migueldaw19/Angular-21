import { GitHubIssue, GitHubLabel } from './../interfaces';
import { environment } from './../../../../environments/environment.development';

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.gitHubToken;

export const getIssueByNumber = async (
  issueNumber: string
): Promise<GitHubIssue> => {

  try {
    // const resp = await fetch(`${BASE_URL}/issues/${issueNumber}/comments`, {
    const resp = await fetch(`${BASE_URL}/issues/${issueNumber}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    });

    // Para indicar ${{}} no se puede usar "" sino ``
    if (!resp.ok) throw `Can't load issue ${issueNumber}`;

    const issue: GitHubIssue = await resp.json();
    //console.log({ issue });

    return issue;
  } catch (error) {
    throw `Can't load issue ${issueNumber}`;
  }
};