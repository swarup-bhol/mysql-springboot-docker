import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'employees-frontend';
  empForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient
    
    ){console.log(1)}

  ngOnInit() {
    this.empForm = this.fb.group({
      empId:[''],
      empName:['']
    });
  }

  onSubmit() {
   this.http.post("http://localhost:8080/insertemployee",this.empForm.value).subscribe(
    d=>{ alert("employeee created successfully")},
    e=>{}
   );
    console.log(this.empForm.value)
   alert(this.empForm.value)
   
  }
}
