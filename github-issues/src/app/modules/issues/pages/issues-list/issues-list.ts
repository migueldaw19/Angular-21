import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IssuesService } from '../../services/issues.service';
import { Labels } from '../../components/labels/labels';
import { IssueItem } from '../../components/issue-item/issue-item';
import { State } from '../../interfaces';

@Component({
  selector: 'app-issues-list',
  imports: [CommonModule, Labels,IssueItem],
  templateUrl: './issues-list.html',
  styleUrl: './issues-list.css',
})
export class IssuesList {
  issuesService = inject(IssuesService);

  get labelsQuery() {
    return this.issuesService.labelsQuery;
  }

  get issuesQuery() {
    return this.issuesService.issuesQuery;
  }

  onChangeState(newState: string) {
    const state =
      {
        all: State.All,
        open: State.Open,
        closed: State.Closed,
      }[newState] ?? State.All;

    this.issuesService.showIssuesByState(state);
  }
}
