import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  @Input() totalItems: any;
  @Input() currentPage: any;
  @Input() itemsPerPage: any;
  @Output() onClick: EventEmitter<number> = new EventEmitter();
  @Output() itemsPer: EventEmitter<number> = new EventEmitter();

  totalPages = 0;
  pages: number[] = [];

  constructor() {}

  ngOnInit(): void {
    console.log(this.totalItems);
    // if (this.totalItems) {
    //   this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    //   console.log(this.totalPages);
    //   this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    // }
  }

  ngOnChanges(changes: any): void {
    console.log(changes);
    console.log(this.itemsPerPage);
    if (changes.totalItems || changes.itemsPerPage) {
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
      console.log(this.totalPages);
      this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }
  }

  pageClicked(page: number) {
    console.log(page);
    this.onClick.emit(page);
  }

  changeItemsPerPage(e: any) {
    this.itemsPer.emit(e);
    this.itemsPerPage = e;
  }
}
