@register
Feature: Register

  Background: Access register user page
    Given that is on the register page
    When fill the register user form

    @register_new_user
    Scenario: Register new user
      When send new user request
      Then the new user must be registered successfully

    @form_refresh
    Scenario: Form refresh
      When refresh register page
      Then the register form must be empty


