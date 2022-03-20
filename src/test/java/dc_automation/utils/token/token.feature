Feature: generate jwt token

  Background:
    * url 'https://www.google.com'
    * def accessToken = 'token'

  Scenario: get all users and then get the first user by id
    Given path 'imghp'
    When method get
    Then status 200
