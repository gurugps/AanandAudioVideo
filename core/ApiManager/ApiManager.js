import NetworkManager from '../libs/NetworkManager'
import * as C from '../constants'

export function SouceAPI() {
  return NetworkManager.get(C.URL_TYPE_SOURCE, "/v4/spreadsheets/1vpBGChXLgY1tvT43NY_JItAfCEkJpzvQlhPbwpCWHKs/values/test?key=AIzaSyCnUWLqxEI9_lyF8RAmaeUloyogtDUq2Sk").then(responseJson =>{
    return responseJson
  }).catch((ex) => {
    console.log(ex);
    return ex;
  });
}
