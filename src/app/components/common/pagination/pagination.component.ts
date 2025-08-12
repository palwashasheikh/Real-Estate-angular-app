import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.scss"],
})
export class PaginationComponent implements OnInit {
  @Input() paginator?: any;
  @Output() changePage = new EventEmitter<any>();
  pages: number[] = [];
  pageLimit: number = 8;
  constructor() {}
  ngOnInit(): void {
    localStorage.removeItem("pageEnd");
  }

  ngOnChanges(): void {
    this.initPages();
  }

  private initPages(): void {
    let active = this.paginator?.page ?? 0;
    let total = this.paginator?.totalPages ?? 0;
    this.pages = this.getArrayOfPage(active, total);
  }

  private getRange(start: any, end: any): Array<any> {
    return Array(end - start + 1)
      .fill(start)
      .map((v: any, i: any) => i + start);
  }

  private getArrayOfPage(
    active: number,
    total: number,
    limit: number = 6
  ): any[] {
    const range = {
      start: Math.round(active - limit / 2),
      end: Math.round(active + limit / 2),
    };

    if (range.start - 1 === 1 || range.end + 1 === total) {
      range.start += 1;
      range.end += 1;
    }

    let pages =
      active > limit
        ? this.getRange(
            Math.min(range.start, total - limit),
            Math.min(range.end, total)
          )
        : this.getRange(1, Math.min(total, limit + 1));

    const withDots = (value: any, pair: any) =>
      pages.length + 1 !== total ? pair : [value];

    if (pages[0] !== 1) {
      pages = withDots(1, [1, "..."]).concat(pages);
    }

    if (pages[pages.length - 1] < total) {
      pages = pages.concat(withDots(total, ["...", total]));
    }

    return pages;
  }

  private totalPages(): any {
    return this.paginator?.totalPages;
  }

  change(page?: any): void {
    typeof page == "number" ? this.changePage.emit(page) : null;
  }

  hasNextPage(): any {
    return this.paginator?.hasNextPage;
  }

  hasPreviousPage(): any {
    return this.paginator?.hasPrevPage;
  }

  activatePagination(): boolean {
    return this.totalPages() > 1 ? true : false;
  }

  isPageActive(page: number): boolean {
    return page == this.paginator?.page ? true : false;
  }

  ngOnDestroy(): void {}
}
