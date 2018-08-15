import {AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import { DocumentsService } from '../documents.service';
import { fromEvent, Subscription} from 'rxjs/index';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/internal/operators';
import { Document } from '../document';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('searchBar') searchBar: ElementRef;
  @Output() documents = new EventEmitter<Document[] | Document>();

  private searchBarSubscription: Subscription;
  private serviceSubscription: Subscription;

  constructor(private documentsService: DocumentsService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.searchBarSubscription = fromEvent(this.searchBar.nativeElement, 'keyup')
      .pipe(
          debounceTime(150),
          distinctUntilChanged(),
          tap(() => {
            this.loadDocuments();
          })
      )
      .subscribe();
    this.loadDocuments();
  }

  clearSearch(): void {
    this.searchBar.nativeElement.value = '';
    this.loadDocuments();
  }

  loadDocuments(): void {
    this.serviceSubscription = this.documentsService.getDocuments(this.searchBar.nativeElement.value).
      subscribe(documents => {
        this.documents.emit(documents);
      });
  }

  ngOnDestroy(): void {
    if (this.searchBarSubscription) {
      this.searchBarSubscription.unsubscribe();
    }
    if (this.serviceSubscription) {
        this.serviceSubscription.unsubscribe();
    }
  }
}
