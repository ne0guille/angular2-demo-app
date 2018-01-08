import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  OnInit,
  OnChanges,
  TemplateRef,
  ViewChild
} from '@angular/core';

import { throttle } from 'lodash';

@Component({
  selector: 'infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss']
})
export class InfiniteScrollComponent implements OnInit, OnChanges {
  @ViewChild('infiniteScrollContainer') container: ElementRef;

  @Input()
  set list(list: any[]) {
    this._list = list;
    this.loadingEnd();
  }
  get list() { return this._list; }
  @Input() itemTemplate: TemplateRef<any>;
  @Input() noResultsTemplate: TemplateRef<any>;
  @Input() loadingTemplate: TemplateRef<any>;
  @Input() itemsVisible = 3;
  @Input() tolerance = 1; /** number of list items to start loading before bottom*/
  @Input() throttleTime = 800;
  @Input() complete = false;
  @Input() requestOnInit = false;

  @Output() bottomReached: EventEmitter<undefined> = new EventEmitter();

  public isLoading = false;
  public maxHeight: number;
  private _list: any[] = [];

  constructor() { }

  public ngOnInit(): void {
    if (this.requestOnInit && !this.list.length) this.onScroll();
  }

  public ngOnChanges(): void {
    setTimeout(() => this.adjustMaxHeight(), 0);
  }

  public onScroll(): void {
    this.throttleScroll();
  }

  // tslint:disable-next-line:member-ordering
  private throttleScroll = throttle(() => {
    const scrollTop: number = this.container.nativeElement.scrollTop;
    const itemHeight: number = this.maxHeight / this.itemsVisible;
    const fullHeight: number = itemHeight * this.list.length;
    const isAtBottom: boolean = (fullHeight - this.maxHeight) - (itemHeight * this.tolerance) <= scrollTop;

    if ((isAtBottom || !itemHeight) && !this.isLoading && !this.complete) {
      this.loadingStart();
      this.bottomReached.emit();
    }
  }, this.throttleTime);

  private adjustMaxHeight(): void {
    const fullHeight: number = this.container.nativeElement.scrollHeight;
    this.maxHeight = (fullHeight / this.list.length) * this.itemsVisible;
  }

  private loadingStart(): void {
    this.isLoading = true;
  }

  private loadingEnd(): void {
    this.isLoading = false;
  }

}

