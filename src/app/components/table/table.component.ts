import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IComment } from 'src/app/model/icomment';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() tableHeader: any;
  @Input() tableData: any;
  @Output() isOpen = new EventEmitter<IComment>();

  itemsPerPage: number;
  currentPage = 1;

  constructor() {
    this.itemsPerPage = 10;
  }
  get paginatedData() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;

    return this.tableData.slice(start, end);
  }
  changePage(page: number) {
    this.currentPage = page;
  }

  changeItemsPerPage(e: any) {
    this.itemsPerPage = e;
    this.currentPage = 1;
  }

  handleEdit(payload: any) {
    this.isOpen.emit(payload);
  }
}
