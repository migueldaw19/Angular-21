import { Component, input } from '@angular/core';
import { GitHubIssue } from '../../interfaces';
import { MarkdownModule } from 'ngx-markdown';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-issue-comment',
  imports: [MarkdownModule,CommonModule],
  templateUrl: './issue-comment.html',
  styleUrl: './issue-comment.css',
})
export class IssueComment {
  issue = input.required<GitHubIssue>();
}
