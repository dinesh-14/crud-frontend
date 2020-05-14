import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// globals
import { VALIDATORS, VALIDATION_MESSAGES, ROLE_TYPE_LIST } from 'src/app/globals';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  @Input() data;
  @Input() columns;
  @Output() onAction = new EventEmitter<any>();

  sortBy: string = 'asc';
  sortOn: string = 'name';
  SVG_BASEPATH: string = '../../../../';

  filterString: string = '';

  form: FormGroup;
  modalType: string = '';

  roleTypeList = ROLE_TYPE_LIST;

  constructor(
    private modalService: NgbModal,
    config: NgbModalConfig,
    private formBuilder: FormBuilder
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      roleType: ['Admin', [Validators.required]],
      mobile: [null, [Validators.required, Validators.pattern(VALIDATORS.NUMBER)]]
    });
  }

  getStatusIcon(item) {
    const pending = `${this.SVG_BASEPATH}assets/icons/ico_pending.svg`;
    const active = `${this.SVG_BASEPATH}assets/icons/ico_active.svg`;
    const inActive = `${this.SVG_BASEPATH}assets/icons/ico_inactive.svg`;
    switch (item) {
      case 'Active':
        return active;
      case 'Inactive':
        return inActive;
      case 'Pending':
        return pending;
    }
  }

  onSort() {
    if (this.sortBy === 'asc') {
      this.sortBy = 'desc';
    } else {
      this.sortBy = 'asc';
    }
  }

  onConfirm(content, modalType) {
    this.modalType = modalType;
    this.modalService.open(content, {}).result.
      then((res) => {
        this.form.value['userId'] = this.selectedRow['userId']
        const payload = { type: this.modalType, payload: this.form.value };
        this.reset()
        this.modalService.dismissAll();
        this.onAction.emit(payload);
      }).catch((err) => {
        this.modalService.dismissAll();
      });
  }

  selectedRow: any;
  open(content, modalType, selectedRow) {
    this.selectedRow = selectedRow;
    this.modalType = modalType;
    if (modalType === 'edit') {
      this.setFormValues(selectedRow);
    }

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.
      then((result) => {
        modalType === 'edit' ? this.form.value['userId'] = selectedRow['userId'] : false;
        const payload = { type: this.modalType, payload: this.form.value };
        this.reset()
        this.onAction.emit(payload);
      }, (reason) => {
        this.reset()
      });
  }

  reset() {
    this.selectedRow = {};
    this.initializeForm();
    this.modalType = '';
  }

  setFormValues(selectedRow) {
    let formControls = this.form.controls;
    Object.keys(formControls).forEach(key => {
      formControls[key].setValue(selectedRow[key]);
    });
  }

  getValidationMessages() {
    return VALIDATION_MESSAGES.EMPTY_FIELD_MSG;
  }

}
