import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IssueService } from '../../services/issue.service';
import { map, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { IssueComment } from '../../components/issue-comment/issue-comment';


@Component({
  selector: 'app-issue-page',
  imports: [IssueComment],
  templateUrl: './issue-page.html',
  styleUrl: './issue-page.css',
})
export class IssuePage {
  route = inject(ActivatedRoute);
  issueService = inject(IssueService);

  issueNumber = toSignal<string>(
    this.route.paramMap.pipe(
      // Con ?? indicamos que si esa condición no se cumple se hace lo siguiente
      map((params) => params.get('number') ?? ''),
      tap((number) => this.issueService.setIssueNumber(number))
    )
  );

  issueQuery = this.issueService.issueQuery;
  issueCommentsQuery = this.issueService.issueCommentsQuery;
}
