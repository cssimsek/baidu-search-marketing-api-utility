const RequestObject = require('./baidu-request-class.js');
const httpMethod = require('./baidu-http-post.js');

//Define requestBody
const requestBody = {
    'campaignIds': [],
    'campaignFields' : ['campaignId', 'campaignName', 'budget', 'campaignType', 'status']
};

//Instantiate Service specific request object
const requestObjInstance = new RequestObject(requestBody,'CampaignService','getCampaign');

/* 
Make http POST request with request object values
The third argument defines the output file to which the response will be written
*/
httpMethod.doHttpPost(requestObjInstance.options,requestObjInstance.postData,'baidu_campaign_info.json');

