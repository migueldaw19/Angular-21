import { inject, Injectable, signal } from '@angular/core';
import { injectQuery, QueryClient } from '@tanstack/angular-query-experimental';
import { getIssueByNumber, getIssuesComments } from '../actions';
import { GitHubIssue } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  private issueNumber = signal<string | null>(null);
  // A partir de Angular 21 el QueryClient se coloca así
  private queryClient = inject(QueryClient)


  issueQuery = injectQuery(() => ({
    // En este caso como hay varios issueNumber para que sea independiente se añade el valor al queryKey
    queryKey: ['issue', this.issueNumber()],
    queryFn: () => getIssueByNumber(this.issueNumber()!),
    //la query solo se activara si la condición enable se cumple
    enabled: this.issueNumber() !== null,
  }));

  issueCommentsQuery = injectQuery(() => ({
    queryKey: ['issue', this.issueNumber(), 'comments'],
    queryFn: () => getIssuesComments(this.issueNumber()!),
    enabled: this.issueNumber() !== null,
  }));

  setIssueNumber(issueId: string) {
    this.issueNumber.set(issueId);
  }

  prefetchIssue(issueId: string) {
    this.queryClient.prefetchQuery({
      queryKey: ['issue', issueId], // Tipo estricto
      queryFn: () => getIssueByNumber(issueId),
      staleTime: 1000 * 60 * 5, // minutos
    });
  }

  // Esto hace que si se pone el ratón por encima realice la función para obtener la información.
  // Esto evita realizar la consulta dentro del componente haciendo el proceso más rápido
  setIssueData(issue: GitHubIssue) {
    this.queryClient.setQueryData(['issue', issue.number.toString()], issue, {
      updatedAt: Date.now() + 1000 * 60, // 1 minuto
    });
  }
}
