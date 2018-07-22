class NetWorkManager{
  static headers(){
    return {
      'Accept' : 'application/json',
      'Content-Type': 'application/x-ww-form-urlencoded',
    }
  }
  static headersWithAuth(contentType){
    return{
      'Accept' : 'application/json',
      'Content-Type': contentType
    }
  }

  static CallAPIFromURL(type,route,params,contentType,verb){

    var host = 'https://sheets.googleapis.com';
    let options = Object.assign({method: verb}, params ? {body: params} : null);
    const url = `${host}${route}`;
    options.headers = {
      'Accept' : 'application/json',
      'Content-Type': 'application/x-ww-form-urlencoded',
    };

    return fetch(url, options).then((response) => response.json()).then((responseJson)=>{
      // console.log(responseJson);
      // if (responseJson.response_code === 'SUCCESS') {
        return responseJson;
      // }
      return responseJson.then(err => {throw err});
    }).then( responseJson => responseJson);

  }

  // GET

  static get(type, route){
    console.log(route);
    return this.CallAPIFromURL(type,route,null,null,'GET');
  }


    // PATCH Request
    static patch(type,route, params) {
      console.log(route);
      return this.CallAPIFromURL(type, route, params, "application/json", 'PATCH');
    }

    // PUT request
    // we dont use put much but keeping it for now as reference.
    static put(route, params) {
      return this.CallAPIFromURL(route, params, null, 'PUT')
    }

    // POST request
    static post(type, route, params,contentType) {
      console.log(route);
      console.log(params);
      return this.CallAPIFromURL(type, route, params, contentType,'POST')
    }

    // Delete request
    static delete(route, params) {
      const apitype = 0; // we only delete from CRM apis ;
      return this.CallAPIFromURL(apitype, route, params, null, 'DELETE')
    }

  }

  export default NetWorkManager
