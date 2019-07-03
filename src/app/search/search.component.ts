import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Document } from '../document';
import { Router } from '@angular/router';
// import { DocumentData } from '../document.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  docName: string;
  // documents: any;
  documents: Document[] = [];
  constructor(private dataservice: DataService, private router: Router) { }

  getDocuments() {
    this.dataservice.getDocuments().subscribe(data => {
      this.documents = data;

    });

  }

  deleteDocument(_id: string) {
    this.dataservice.deleteDocument(_id).subscribe(data => {
      this.router.navigate(['/home']);
     });
   
   }
  Search(){

    if(this.docName != ""){
      this.documents =  this.documents.filter(res => {
        return res.title.toLocaleLowerCase().match(this.docName.toLocaleLowerCase());
      });
    }
    else if(this.docName == ""){
      this.ngOnInit();
    }

  }

  ngOnInit() {
    this.getDocuments();
  }
}
