import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITdDataTableColumn,
         TdDataTableSortingOrder,
         ITdDataTableSortChangeEvent,
         IPageChangeEvent,
         TdDataTableService,
         ITdDataTableRowClickEvent} from '@covalent/core';

import { Book, BookService } from '../book.service';

@Component({
  selector: 'app-book-overview',
  templateUrl: './book-overview.component.html'
})
export class BookOverviewComponent implements OnInit {

  currentBooks: Book[];

  // Covalent DataTable configuration
  columns: ITdDataTableColumn[] = [
    { name: 'author', label: 'Author'},
    { name: 'title', label: 'Title' },
  ];
  filteredData: any[];
  filteredTotal: number;
  selectedRows = 0;
  searchTerm = '';
  fromRow = 1;
  currentPage = 1;
  pageSize = 5;
  sortBy = 'author';
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending;

  constructor(private bookService: BookService,
              private _dataTableService: TdDataTableService,
              public router: Router) {
  }

  ngOnInit(): void {
    this.currentBooks = this.bookService.findAll();
    this.filteredData = this.currentBooks;
    this.filteredTotal = this.currentBooks ? this.currentBooks.length : 0;
    this.filter();
  }

  thereAreBooksToDisplay(): boolean {
    return this.currentBooks && this.currentBooks.length > 0;
  }

  sort(sortEvent: ITdDataTableSortChangeEvent): void {
    this.sortBy = sortEvent.name;
    this.sortOrder = sortEvent.order;
    this.filter();
  }

  edit(clickEvent: ITdDataTableRowClickEvent): void {
    console.log(clickEvent);
    this.router.navigate([`app/book/${clickEvent.row.id}`]);
  }

  search(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.filter();
  }

  page(pagingEvent: IPageChangeEvent): void {
    this.fromRow = pagingEvent.fromRow;
    this.currentPage = pagingEvent.page;
    this.pageSize = pagingEvent.pageSize;
    this.filter();
  }

  filter(): void {
    let newData: any[] = this.currentBooks;
    const excludedColumns: string[] = this.columns
      .filter((column: ITdDataTableColumn) => {
        return ((column.filter === undefined && column.hidden === true) ||
                (column.filter !== undefined && column.filter === false));
      }).map((column: ITdDataTableColumn) => {
        return column.name;
      });
    newData = this._dataTableService.filterData(newData, this.searchTerm, true, excludedColumns);
    this.filteredTotal = newData.length;
    newData = this._dataTableService.sortData(newData, this.sortBy, this.sortOrder);
    newData = this._dataTableService.pageData(newData, this.fromRow, this.currentPage * this.pageSize);
    this.filteredData = newData;
  }
}
