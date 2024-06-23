class EmailLogin {
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

class FacebookLogin {
  login() {
    console.log("Facebook Login");
  }
}

class LoginController {
  private emailLogin: EmailLogin;
  private facebookLogin: FacebookLogin;

  constructor(emailLogin: EmailLogin, facebookLogin: FacebookLogin) { // Dependecy Injection
    this.emailLogin = emailLogin;
    this.facebookLogin = facebookLogin;
  }

  login(type: "email" | "facebook") {
    if (type === "email") {
      this.emailLogin.login();
    } else if (type === "facebook") {
      this.facebookLogin.login();
    }
  }
}

let actualLogin = new LoginController(
  new EmailLogin("moekyaw@gmail.com", "11111111"),
  new FacebookLogin()
);
actualLogin.login("email");
actualLogin.login("facebook");
