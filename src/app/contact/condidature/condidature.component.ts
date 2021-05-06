import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FileValidator } from 'ngx-material-file-input';


@Component({
  selector: 'app-condidature',
  templateUrl: './condidature.component.html',
  styleUrls: ['./condidature.component.css']
})
export class CondidatureComponent implements OnInit {
  //100 MB (=100 * 2 ** 20)
  readonly maxSize = 104857600;
  formDoc: any;
  

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.formDoc = this._fb.group({
      requiredfile: [
        undefined,
        [Validators.required, FileValidator.maxContentSize(this.maxSize)]
      ]
    });
  }

}
