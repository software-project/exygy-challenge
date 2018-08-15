export class User {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  api_key: string;

  fullName(): string {
    return this.first_name + ' ' + this.last_name;
  }

  initials(): string {
    return this.first_name.charAt(0) + this.last_name.charAt(0);
  }
}
