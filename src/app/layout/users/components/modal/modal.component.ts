import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {


  @Output() onCancel = new EventEmitter<boolean>();
  @Output() onSubmit = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    this.onCancel.emit(true);
  }

  onSave() {
    this.onCancel.emit(true);
  }


}
