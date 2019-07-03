import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Document } from '../document';
import { DocumentDetails } from '../documentdetails';
import { ActivatedRoute, Router  } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  document: DocumentDetails;
  documents: Document[]= [];
  userFormGroup: FormGroup;

  constructor(private dataservice: DataService, private route: ActivatedRoute, private router: Router) { 
    // const fetchId: string = route.snapshot.params._id;



  }

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



   deleteDocument(_id: string) {
    this.dataservice.deleteDocument(_id).subscribe(data => {
      //  this.document = data;
       this.router.navigate(['/search']);
     });
   }

  // updateDocument(idtoUpdate) {
  //   this.dataservice.getDocument(idtoUpdate).subscribe(data => {
  //     this.document = data;
  //     this.document.text = 'Hello';
  //     this.dataservice.updateDocument(this.document).subscribe(data1 => {
  //       this.router.navigate(['/search']);
  //     });
  //   });
  // }



  openUserDialog(){
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const fetchId = params.get("_id");
      this.getDocument(fetchId);
     // console.log(fetchId);
    });


    // this.route.params.subscribe(

    //   (document) => {
    //     this.fetchId = document._id;
    //     console.log(document._id);
        
    // });

   // this.getDocument();
   // this.getDocuments();
  }



}
