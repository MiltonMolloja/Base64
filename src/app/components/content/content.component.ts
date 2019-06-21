import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  type = "file";
  link:any;
  files: any;
  rawFiles: any;
  arrayLink: Array<any>;
  newArray: any[] = [];

  onFileChanges(files) {
   console.log("File changed By Method :: ", files);
   console.log("File changed By Binding :: ", this.files);
   console.log("Raw files :: ", this.rawFiles);
   console.log("Contenido de files antes del click: " + this.files[0].base64 );
  }

  test() {
    this.link = this.files[0].base64 ;
    this.newArray.push(this.link);
    console.log("This newArray :: ", this.newArray);
  }
}
