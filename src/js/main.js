const MAX_NUM_BC = 20999999.9769, // https://en.bitcoin.it/wiki/Controlled_supply#Projected_Bitcoins_Long_Term
      FINAL_DATE = new Date(2140, 0),
      API_URL_TOTAL_BC = 'https://blockchain.info/q/totalbc?cors=true';

document.addEventListener("DOMContentLoaded", ()=> {
  makeAjaxCall(API_URL_TOTAL_BC, onTotalBcAvailable);
});

function onTotalBcAvailable(XMLHttpResp) {
  const totalBC = XMLHttpResp / 100000000;


}

function makeAjaxCall(url, cb, verb){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = ()=> {
        if (xhr.readyState == 4 && xhr.status == 200){
            cb(xhr.responseText);
        }
    }
    xhr.open((verb || "GET"), url, true);
    xhr.send();
}
