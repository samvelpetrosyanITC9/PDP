import { Page } from '@playwright/test';

class LoginPage {
  private page: Page;
  private usernameInput = '#username';
  private passwordInput = '#password';
  private loginButton = '#login';

  constructor(page: Page) {
    this.page = page;
  }

  public async enterUsername(username: string) {
    await this.page.fill(this.usernameInput, username);
  }

  public async enterPassword(password: string) {
    await this.page.fill(this.passwordInput, password);
  }

  public async clickLogin() {
    await this.page.click(this.loginButton);
  }

  public async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }
}

export default LoginPage;
