import { Component, OnInit, OnChanges } from '@angular/core';
import { DataService } from '../data.service';
import { Document } from '../document';
import { DocumentDetails } from '../documentdetails';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {

 // documents= [];
  documents: Document[] = [];
  document: DocumentDetails;
  userFormGroup: FormGroup;

  constructor(private dataservice: DataService, private router: Router) { }

  ngOnInit() {
    this.userFormGroup = new FormGroup(
      {
        _id: new FormControl(''),
        body: new FormControl(''),
        title: new FormControl('')
      },
    );
   
    this.getDocuments();
    
   
  }
  ngOnChanges(){
   
  }

  getDocuments() {
    this.dataservice.getDocuments().subscribe(data => {
    this.documents = data;
    });
  }



  addDocument() {

    this.dataservice.addDocument(this.userFormGroup.value).subscribe((data: DocumentDetails) => {
      console.log(data);
    //  this.document = data;
     // console.log(this.document);
    //  console.log(this.userFormGroup.value);
    this.router.navigate(['/search']);
    });
    //this.getDocuments();
  }
}