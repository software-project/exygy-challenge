import { Component, Input, OnInit } from '@angular/core';
import { Document} from '../document';

@Component({
  selector: 'app-documents-list',
  templateUrl: './documents-list.component.html',
  styleUrls: ['./documents-list.component.css']
})
export class DocumentsListComponent implements OnInit {
  @Input() documents: Document[];

  constructor() { }

  ngOnInit() {
  }

}
