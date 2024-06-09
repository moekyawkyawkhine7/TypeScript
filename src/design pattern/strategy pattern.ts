interface LoginStrategy {
  login(username: string, password: string): void;
}

class EmailLogin implements LoginStrategy {
  login(username: string, password: string) {
    console.log(`Email Login: User Name: ${username}, Password: ${password}`);
  }
}

class GoogleLogin implements LoginStrategy {
  login(username: string, password: string): void {
    console.log(`Google Login: User Name: ${username}, Password: ${password}`);
  }
}

class FacebookLogin implements LoginStrategy {
  login(username: string, password: string): void {
    console.log(
      `Facebook Login: User Name: ${username}, Password: ${password}`
    );
  }
}

class LoginSystem {
  private strategy: LoginStrategy; // composition

  constructor(strategy: LoginStrategy) { // dependency inversion
    this.strategy = strategy;
  }

  setSystem(strategy: LoginStrategy): void {
    this.strategy = strategy;
  }

  loginProcess(username: string, password: string) {
    this.strategy.login(username, password);
  }
}

let googleLogin = new GoogleLogin();
let loginSystem = new LoginSystem(googleLogin);
// Perform Login
loginSystem.loginProcess("Mg Mg", "11111111");
// Change System
let emailLogin = new EmailLogin();
loginSystem.setSystem(emailLogin);
// Perform Login
loginSystem.loginProcess("Kyaw Kyaw", "11111111");
loginSystem.setSystem(new FacebookLogin());
loginSystem.loginProcess("Aung Aung", "11111111");
