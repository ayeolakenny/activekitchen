let urlString = document.URL;
let submitButton = document.querySelector('.formButton');
let name = document.querySelector('.formName');
let email = document.querySelector('.formEmail');
let mobileNumber = document.querySelector('.formNumber');

function parseURLParams(url) {
  var queryStart = url.indexOf("?") + 1,
      queryEnd   = url.indexOf("#") + 1 || url.length + 1,
      query = url.slice(queryStart, queryEnd - 1),
      pairs = query.replace(/\+/g, " ").split("&"),
      parms = {}, i, n, v, nv;

  if (query === url || query === "") return;

  for (i = 0; i < pairs.length; i++) {
      nv = pairs[i].split("=", 2);
      n = decodeURIComponent(nv[0]);
      v = decodeURIComponent(nv[1]);

      if (!parms.hasOwnProperty(n)) parms[n] = [];
      parms[n].push(nv.length === 2 ? v : null);
  }
  return parms;
}

window.addEventListener('load', function () {
  urlParams = parseURLParams(urlString);
  let order = urlParams.menuOrder[0];
  let price = urlParams.menuPrice[0];
  sessionStorage.setItem( 'orderToPass', order );
  sessionStorage.setItem( 'priceToPass', price );
});

let submitRequest = () =>{
  localStorage.setItem("formName", name.value);
  localStorage.setItem("formEmail", email.value);
  localStorage.setItem("formNumber", mobileNumber.value);
}

submitButton.addEventListener('click', submitRequest);

