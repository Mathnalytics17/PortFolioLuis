import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class EmailService {

  private apiUrl = "/api/send-email";

  constructor(private http: HttpClient) {}

  sendEmail(payload: { to: string; subject: string; message: string }) {
    return this.http.post(this.apiUrl, payload);
  }
}
