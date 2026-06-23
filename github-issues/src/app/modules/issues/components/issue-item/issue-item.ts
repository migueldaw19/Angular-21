import { Component, inject, input } from '@angular/core';
import { GitHubIssue, State } from '../../interfaces';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IssueService } from '../../services/issue.service';


@Component({
  selector: 'app-issue-item',
  imports: [RouterLink,CommonModule],
  templateUrl: './issue-item.html',
  styleUrl: './issue-item.css',
})
export class IssueItem {
  issue = input.required<GitHubIssue>();
  issueService = inject(IssueService);

  get isOpen() {
    return this.issue().state === State.Open;
  }

  prefetchData() {
    // Para precargar información si se pasa el ratón por encima
    // this.issueService.prefetchIssue(this.issue().number.toString());
    // Para obtener la información antes de entrar se hace de esta manera
    this.issueService.setIssueData(this.issue());
  }
}
