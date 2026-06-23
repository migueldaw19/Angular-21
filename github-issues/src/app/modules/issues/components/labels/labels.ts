import { Component, inject, input } from '@angular/core';
import { GitHubLabel } from '../../interfaces';
import { CommonModule } from '@angular/common';
import { IssuesService } from '../../services/issues.service';

@Component({
  selector: 'app-labels',
  imports: [CommonModule],
  templateUrl: './labels.html',
  styleUrl: './labels.css',
})
export class Labels {
  labels = input.required<GitHubLabel[]>();

  issuesService = inject(IssuesService);

  isSelected(labelName: string) {
    return this.issuesService.selectedLabels().has(labelName);
  }

  onToggleLabel(labelName: string) {
    this.issuesService.toggleLabel(labelName);
  }
}
