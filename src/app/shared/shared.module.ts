import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// third party imports
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// components
import { DataTableComponent } from './components/data-table/data-table.component';
// pipes
import { SortPipePipe } from './pipes/sort-pipe.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [DataTableComponent, SortPipePipe, FilterPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  exports: [DataTableComponent, SortPipePipe]
})
export class SharedModule { }
