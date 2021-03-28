import { browser, by, element } from 'protractor'

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get('/')
  }

  async getTitleText(): Promise<string> {
    return element(by.css('app-root mat-toolbar .mat-h2')).getText() as Promise<string>
  }
}
