# Utility to retrieve data from the Baidu Search Marketing API
Initial implementation to fetch a list of campaigns for a particular account

# See example usage in baidu-fetch-implementation.js
This implementation contains an example that fetches the complete list of campaigns for a particular account.

To fetch data on a particular campaign declare the campaign id in the `requestBody.campaignIds` Array.

Define the list of fields you wish to retrieve for each campaign in `requestBody.campaignFields`.

To query a different Service (other than `CampaignService`) modify both the `requestBody` fields (names and values), and the Service and Method end point names passed to the `RequestObject` constructor. 
