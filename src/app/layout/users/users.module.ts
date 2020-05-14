import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { UsersRoutingModule } from './users.routing';


@NgModule({
  declarations: [UsersComponent, ModalComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
