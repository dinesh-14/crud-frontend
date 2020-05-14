import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataTableComponent } from './components/data-table/data-table.component';
import { ActionModalComponent } from './components/action-modal/action-modal.component';
import { SortPipePipe } from './pipes/sort-pipe.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [DataTableComponent, ActionModalComponent, SortPipePipe, FilterPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  exports: [DataTableComponent, ActionModalComponent, SortPipePipe]
})
export class SharedModule { }
