interface AuthLoginStrategy {
  login(): boolean;
}

class GoogleAuthLogin implements AuthLoginStrategy {
  login(): boolean {
    return true;
  }
}

class PhoneAuthLogin implements AuthLoginStrategy {
  login(): boolean {
    return true;
  }
}

class AppleAuthLogin implements AuthLoginStrategy {
  login(): boolean {
    return true;
  }
}

class MainAuthLogin {
  private auth_login_strategy: AuthLoginStrategy; 

  constructor(auth_login_strategy: AuthLoginStrategy) {
    // Dependency Inversion
    this.auth_login_strategy = auth_login_strategy;
  }

  login(): boolean {
    return this.auth_login_strategy.login();
  }
}

const authLogin = new MainAuthLogin(new GoogleAuthLogin());
