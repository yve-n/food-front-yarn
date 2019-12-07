import { Component, OnInit ,ViewChild,Input,ElementRef} from '@angular/core';
import { ConvertPropertyBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
@ViewChild("image",{static:false})
public imageElement: ElementRef;
@Input("src")
public imageSource: string;



  constructor() { 
    
  }
        

  ngOnInit() {

  }
  public ngAfterViewInit(){
    

   
   }
  
}


