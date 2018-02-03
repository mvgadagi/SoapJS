var x2js = new X2JS();

function soap() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', 'http://www.webservicex.com/globalweather.asmx', true);
    // build SOAP request
    var sr =
        '<?xml version="1.0" encoding="utf-8"?>' +
        '<soapenv:Envelope ' +
        'xmlns:web="http://www.webserviceX.NET" ' +
        'xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +
        '<soapenv:Body>' +
        '<web:GetCitiesByCountry>' +
        '<web:CountryName>IND</web:CountryName>' +
        '</web:GetCitiesByCountry>' +
        '</soapenv:Body>' +
        '</soapenv:Envelope>';

    xmlhttp.onreadystatechange = function () {
        console.log(xmlhttp.status);
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                var responseBody = (xmlhttp.responseText).replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(
                    /&amp;/g,
                    '&');
       
                var jsonResponse = x2js.xml_str2json(responseBody).toSource();
                alert(jsonResponse);
             ;
            }
        }
    }

    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
    xmlhttp.send(sr);

}