import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  private apiServerUrl = '';

  constructor(private http: HttpClient) {
  }

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiServerUrl}/employees`);
  }

  public createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post(`${this.apiServerUrl}/employees`);
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put(`${this.apiServerUrl}/employees`);
  }

  public deleteEmployee(id: number): void {
    this.http.delete(`${this.apiServerUrl}/employees/${id}`);
  }
}
