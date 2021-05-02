/*global Given, When, Then, And*/

import testePage from '../pageobjects/testePage'

const Page = new testePage

Given("that is on the register page", () => {
  Page.openUrl()
  Page.verifyHeader()
  Page.verifyTitle()
})

When("fill the register user form", () => {
  Page.inputFirstName()
  Page.inputLastName()
  Page.inputAddress()
  Page.inputEmail()
  Page.inputPhone()
  Page.selectGender()
  Page.selectHobbies()
  Page.chooseLanguage()
  Page.chooseSkill()
  Page.chooseCountry()
  Page.selectCountry()
  Page.dateOfBirth()
  Page.inputPassword()
  Page.confirmPassword()
})

When("send new user request", () => {
  Page.submitForm()
})

When("refresh register page", () => {
  Page.refreshForm()
})

Then("the new user must be registered successfully", () => {
  Page.validateRegistered()
})

Then("the register form must be empty", () => {
  Page.validateRefreshForm()
})
