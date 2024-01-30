import { Component, NgModule } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Customer } from '../../Models/nogModels';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-index',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',

})






export class IndexComponent {
  mCustRow: Customer = new Customer();
  mCustLst: Customer[] = [];
  binding: any;

  ngOnInit() {}

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  addNew() {
    this.AddNew(this.mCustRow).subscribe((val) => {});
  }
  AddNew(cust: Customer): Observable<Customer> {
    return this.http
      .put<Customer>('http://localhost:5143/api/Add', cust)
  }
  handleError(
    arg0: string,
    cust: Customer
  ): (
    err: any,
    caught: Observable<import('@angular/common/http').HttpEvent<Customer>>
  ) => import('rxjs').ObservableInput<any> {
    throw new Error('Method not implemented.');
  }
}
