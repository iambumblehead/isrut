// Filename: isrut.js  
// Timestamp: 2014.04.19-10:48:38 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)  
//
// RUT is mod 11 check-digit validation
// code is remade from the php code found below:
// http://v3.juque.cl/weblog/2004/06/16/validador-de-rut-en-php.html
// 
// http://www.forosdelweb.com/f69/como-validar-rut-654398/
// http://icodesnip.com/search/mod%2011/31
//
// http://users.dcc.uchile.cl/~mortega/ortega.cl/validarrut/javascript.html?rut=5555-555-K
//
// RUT is analogous to US' SSN number


var isrut = ((typeof module === 'object') ? module : {}).exports = function (rut) {  
  var unverifiednum = String(rut).replace(/[ \.,\-,\|]/gi, ''),
      // all but last digit
      sub_rut = unverifiednum.substr(0, unverifiednum.length - 1), 
      // last digit
      sub_dv = unverifiednum.substr(unverifiednum.length - 1), 
      X = 2, S = 0, i, DV;

  for (i = sub_rut.length - 1; i >= 0; i--) {
    if (X > 7) X = 2;
    S += sub_rut[i] * X;
    X++;
  }
  
  DV = 11 - (S % 11);
  
  if (DV == 10) DV = 'K';
  if (DV == 11) DV = '0 ';
  return DV == sub_dv;
};

