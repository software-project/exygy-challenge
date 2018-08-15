import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators';
import { Observable } from 'rxjs/index';
import { HttpClient } from '@angular/common/http';
import { plainToClass } from 'class-transformer';
import { environment } from '../../environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

    constructor(private http: HttpClient) { }

    signIn(user: User): Observable<User> {
        return this.http.post<User>(this.getUrlFor('users/login'), user).pipe(
            map(response => {
                const u = plainToClass(User, response);
                localStorage.setItem('currentUser', JSON.stringify(u));
                return u;
            }));
    }

    getCurrentUser(): User {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            return plainToClass(User, currentUser)[0];
        }
        return null;
    }

    private getUrlFor(path: string): string {
        return environment.apiUrl + path;
    }
}
