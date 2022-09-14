function actual() {

    var fecha = new Date();
    var anio = fecha.getFullYear();
    var dia = fecha.getDate();
    var _mes = fecha.getMonth();
    _mes = _mes + 1;
    if (_mes < 10)
    { var mes = "0" + _mes;}
    else
    { var mes = _mes.toString;}
    return document.getElementById("end").max = anio+'-'+mes+'-'+dia;
}