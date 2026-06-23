import { sleep } from '@helpers/sleep';
import { environment } from './../../../../environments/environment.development';
import { GitHubIssue } from './../interfaces/github-issue.interface';

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.gitHubToken;

export const getIssuesComments = async (
  issueNumber: string
): Promise<GitHubIssue[]> => {
  await sleep(1500);

  try {
    const resp = await fetch(`${BASE_URL}/issues/${issueNumber}/comments`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    });

    if (!resp.ok) throw "Can't load issue";

    const issue: GitHubIssue[] = await resp.json();
    //console.log({ issue });

    return issue;
  } catch (error) {
    throw "Can't load comments";
  }
};