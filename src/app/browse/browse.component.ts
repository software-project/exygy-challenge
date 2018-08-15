import { Component, OnInit } from '@angular/core';
import {Document} from './document';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  documents: Document[] | Document;

  constructor() { }

  ngOnInit() {
  }

  showDocuments($event) {
    this.documents = $event;
  }

}
