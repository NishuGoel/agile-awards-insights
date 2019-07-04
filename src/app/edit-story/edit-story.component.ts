import { Component, OnInit, Input, Output } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Document } from '../document';
import { DocumentDetails } from '../documentdetails';
import { FormControl, FormGroup } from '@angular/forms';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-edit-story',
  templateUrl: './edit-story.component.html',
  styleUrls: ['./edit-story.component.css']
})
export class EditStoryComponent implements OnInit {
 
  documents: Document[] =[];
  document: DocumentDetails;

  userFormGroup: FormGroup;
  constructor(private dataservice: DataService, private route: ActivatedRoute, private router: Router) { }
  
  getDocuments() {
    this.dataservice.getDocuments().subscribe(data => {
      this.documents = data;

    });


  }
  getDocument(_id: string) {
    this.dataservice.getDocument(_id).subscribe(data => {
       this.document = data;
     });
   }


  // fetchId = 0;
  // getDocument() {
  //   this.dataservice.getDocument(this.fetchId).subscribe(data => {
  //     this.document = data;

  //   });
  // }




  // @Output() edited = new EventEmitter();

  // edit() {
  //   this.edited.emit(this.userFormGroup.value);
  // }


  // updateDocument(idtoUpdate) {
  //   this.dataservice.getDocument(idtoUpdate).subscribe(data => {
  //     this.document = data;
  //     this.document.text = ;
  //     this.dataservice.updateDocument(this.document).subscribe(data1 => {
  //       this.router.navigate(['/search']);
  //     });
  //   });

  // }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const fetchId = params.get("_id");
      this.getDocument(fetchId);
      console.log(fetchId);

     this.userFormGroup = new FormGroup(
      {
        body : new FormControl('')
      });
    });


    // this.route.params.subscribe(
    //   (document) => {
    //    // this.fetchId = document.id;
    //   });
    //  this.getDocuments();
   // this.getDocument();
  }
}



