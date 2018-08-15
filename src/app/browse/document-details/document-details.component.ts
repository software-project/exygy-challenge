import {Component, Input, OnInit} from '@angular/core';
import {Document} from "../document";

@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.component.html',
  styleUrls: ['./document-details.component.css']
})
export class DocumentDetailsComponent implements OnInit {
  @Input() document: Document;

  constructor() { }

  ngOnInit() {
  }

}
