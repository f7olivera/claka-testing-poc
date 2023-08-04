import { Given, Then, When } from '@wdio/cucumber-framework';
import { $, driver } from '@wdio/globals';

Given('I am on the initial screen', async () => {
  await driver.launchApp();
});

When('I press Sign In with Apple ID', async () => {
  const signInWithAppleIdButton = await $('~sign-in-apple-id-button');
  await signInWithAppleIdButton.click();
});

Then('I should see the sign in screen', async () => {
  const welcomeHeader = await $('~welcome-header');
  await expect(welcomeHeader).toBeDisplayed();

  const signInButton = await $('~sign-in-button');
  await expect(signInButton).toBeDisplayed();
});
