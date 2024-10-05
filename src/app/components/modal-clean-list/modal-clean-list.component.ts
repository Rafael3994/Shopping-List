import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-clean-list',
  templateUrl: './modal-clean-list.component.html',
  styleUrls: ['./modal-clean-list.component.scss']
})
export class ModalCleanListComponent implements OnInit {

  @Input() isShowModalCleanList: boolean;

  @Output() eventCloseCleanListModal = new EventEmitter();
  @Output() eventCleanList = new EventEmitter();

  constructor() { }

  closeCleanListModal() {
    this.eventCloseCleanListModal.emit();
  }
  cleanList() {
    this.eventCleanList.emit();
  }


  ngOnInit(): void {
  }

}
