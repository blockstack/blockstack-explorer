Feature: Blockstack Explorer Test Case
  'When I go to the Blockstack Explorer Test Case search page, and search for an item,
  I expect to see some reference to that item in the result summary.'

  Scenario: Verify that Explorer returns information for the entered name
    Given user is on home page
    Then user enter the name in search bar
    Then Verify that explorer returns information related to name

  Scenario: Explorer returns information for the selected name aaron.id.blockstack
    Given user is on home page
    And user select the Name link
    Then verify that list of all the names is displayed
    And user select the id "aaron.id"
    Then Verify that "Aaron Blankstein" information has displayed

  Scenario: Verify Explorer returns information for the entered address
    Given user is on home page
    Then user search the address in address search bar
    Then Verify that explorer returns information related to address

  # Scenario: Verify Explorer returns information for the selected address
  #   Given user open the url
  #   And click on the address link "1NHfjtfnTdnPSwFveHMrG5P3PNKM2s3qnV"
  #   Then Verify that information of selected address has displayed

  Scenario: Enter block number 523746 in the explorer text box and press ENTER key
    Given user is on home page
    Then enter the block number and press enter key in search bar
    Then Verify that inforation has shown related to search block number

  Scenario: open the URL and click on block link
    Given user open blocks url
    And click on the block link "578600"
    Then Verify that Explorer returns the block page for height "578600"

  Scenario: verify that explorer return the information of the entered transaction no
    Given user is on home page
    Then enter transaction number
    Then verify Explorer returns the information for the entered transaction number

  Scenario: User clicks the button and more block data will appear at the bottom of the page
    Given user open blocks url
    And scroll down page and click on view more block button
    Then Verify that more data has displayed

  Scenario: User clicks the date button going back one day each time they click it until they are one week from todays date
    Given user open blocks url
    Then click on date button
    And click on the block link "578440"
    Then Verify that Explorer returns the block page for height "578440"
    # Then verify That user is able to click it until they are one week from todays date
