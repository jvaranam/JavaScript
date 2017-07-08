function onRequest(request, response, modules) {
  var logger = modules.logger;
  var req = modules.request;
	var _cid = request.body._cid;
	var _eCategory = request.body._eCategory;
	var _eAction = request.body._eAction;
	var _eLabel = request.body._eLabel;
	var _eVal = request.body._eVal;
  var _tid = "UA-xxxxxxxxx-X";
	
	var uri = 'http://www.google-analytics.com/r/collect?v=1&t=event&tid='+_tid+'&cid=12345'+_cid+'&ec='+_eCategory+'&ea='+_eAction+'&el='+_eLabel+'&ev='+_eVal;
	
	logger.info('2345'+_cid+'&ec='+_eCategory+'&ea='+_eAction+'&el='+_eLabel+'&ev='+_eVal);
  req.post({
    uri: uri,
    method: 'POST'
  },function(error, res, body){
    if(error){
      // response.body = {error: error.message};
      logger.info("errr"+error);
      response.complete(400);
    }else{
      logger.info("suss"+res);
      logger.info(body);
      response.complete(200);
    }
  });
}
