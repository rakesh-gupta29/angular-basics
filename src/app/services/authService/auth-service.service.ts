export class AuthServiceService {
  private loggedIn: boolean = true;
  isAuthenticated(): Promise<boolean> {
    console.log('checking login status ');
    const fakeAuth = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 1500);
    });
    return fakeAuth;
  }
  logIn(): void {
    this.loggedIn = true;
  }
  logOut(): void {
    this.loggedIn = false;
  }
  constructor() {}
}
