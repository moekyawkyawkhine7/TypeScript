class GoogleLoginSystem {
  login(): boolean {
    return true;
  }
}

class PhoneLoginSystem {
  login(): boolean {
    return true;
  }
}

class AppleLoginSystem {
  login(): boolean {
    return true;
  }
}

class MainLoginSystem {
  private google_login: GoogleLoginSystem;
  private phone_login: PhoneLoginSystem;
  private apple_login: AppleLoginSystem;

  constructor(
    google_login: GoogleLoginSystem,
    phone_login: PhoneLoginSystem,
    apple_login: AppleLoginSystem
  ) {
    // Dependency Injection
    this.google_login = google_login;
    this.apple_login = apple_login;
    this.phone_login = phone_login;
  }

  login(type: "google" | "phone" | "apple"): boolean {
    switch (type) {
      case "google":
        return this.google_login.login();
      case "phone":
        return this.phone_login.login();
      case "apple":
        return this.apple_login.login();
      default:
        throw new Error("Invalid login type");
    }
  }
}

const login = new MainLoginSystem(
  new GoogleLoginSystem(),
  new PhoneLoginSystem(),
  new AppleLoginSystem()
);
