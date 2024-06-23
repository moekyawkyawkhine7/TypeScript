interface LoginStrategy {
  login(): void;
}

class LoginController1 {
  private loginStrategy: LoginStrategy;

  constructor(loginStrategy: LoginStrategy) {
    this.loginStrategy = loginStrategy;
  }

  loginProcess() {
    this.loginStrategy.login();
  }
}

class EmailLogin1 implements LoginStrategy {
  private email;
  private password;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  login() {
    console.log("Email Login", this.email, this.password);
  }
}

class FacebookLogin1 implements LoginStrategy {
  login() {
    console.log("Facebook Login");
  }
}

let actualLogin1 = new LoginController1(new EmailLogin1("mkkk@gmail.com", "11111111"));
actualLogin1.loginProcess();

let faceBookLogin= new LoginController1(new FacebookLogin1);
faceBookLogin.loginProcess();
