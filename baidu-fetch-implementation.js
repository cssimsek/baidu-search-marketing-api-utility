const RequestObject = require('./baidu-request-class.js');
const HttpMethod = require('./baidu-http-post.js');

//Define requestBody
const requestBody = {
    'campaignIds': [],
    'campaignFields' : ['campaignId', 'campaignName', 'budget', 'campaignType', 'status']
};

/* 
Instantiate Service specific request object
See Baidu API document for other Service Definitions
*/
const requestObjInstance = new RequestObject(requestBody,'CampaignService','getCampaign');

/* 
Make http POST request with request object values
The third argument defines the output file to which the response will be written
*/
HttpMethod.doHttpPost(requestObjInstance.options,requestObjInstance.postData,'baidu_campaign_info.json');

