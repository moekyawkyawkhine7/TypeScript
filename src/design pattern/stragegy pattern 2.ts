interface LoginStrategy {
  login(): void;
}

class AuthContext {
  protected loginStrategy: LoginStrategy;

  constructor(loginStrategy: LoginStrategy) {
    this.loginStrategy = loginStrategy;
  }

  public setStrategy(loginStrategy: LoginStrategy) {
    this.loginStrategy = loginStrategy;
  }

  public executeLogin() {
    return this.loginStrategy.login;
  }
}

class FacebookAuthLogin implements LoginStrategy {
  login() {
    console.log("Facebook Login");
  }
}

class EmailAuthLogin implements LoginStrategy {
  private email: string;
  private password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  login() {
    console.log(
      `Email Login: Email: ${this.email}, Password: ${this.password}`
    );
  }
}

class GoogleAuthLogin implements LoginStrategy {
  login() {
    console.log("Google Login");
  }
}

let googleAuthLogin= new AuthContext(new GoogleAuthLogin);
googleAuthLogin.executeLogin();

let emailAuthLogin= new AuthContext(new EmailAuthLogin("moekyawkyaw.cumkn@gmail.com", "11111111"));
emailAuthLogin.executeLogin();
