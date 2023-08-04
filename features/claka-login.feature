Feature: Claka Log In

  Scenario: As a user, I can log in with Apple Id

    Given I am on the initial screen
    When I press Sign In with Apple ID
    Then I should see the sign in screen
