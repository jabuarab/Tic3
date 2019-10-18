let materias = [
    {
        "id": "analisis2",
        "hijo": ["analisis1"]
    },
    {
        "id": "analisis1",
        "hijo": []
    },
    {
        "id": "gal1",
        "hijo": []
    },
    {
        "id": "fisica1",
        "hijo": []
    },
    {
        "id": "intRob",
        "hijo": []
    },
    {
        "id": "intIng",
        "hijo": []
    },
    {
        "id": "gal2",
        "hijo": ["gal1"]
    },
    {
        "id": "fisica2",
        "hijo": []
    },
    {
        "id": "matlab",
        "hijo": []
    },
    {
        "id": "funQui",
        "hijo": []
    },
    {
        "id": "caluclo",
        "hijo": ["analisis2", "gal2"]
    },
    {
        "id": "analisis3",
        "hijo": ["analisis2", "gal2"]
    },
    {
        "id": "mecanica1",
        "hijo": ["fisica1", "analisis1"]
    },
    {
        "id": "cad",
        "hijo": []
    },
    {
        "id": "labInd",
        "hijo": []
    },
    {
        "id": "ch1",
        "hijo": []
    },
    {
        "id": "prob",
        "hijo": ["analisis2"]
    },
    {
        "id": "mecanica2",
        "hijo": ["mecanica1"]
    },
    {
        "id": "termodinamica",
        "hijo": ["analisis1"]
    },
    {
        "id": "resMat",
        "hijo": ["mecanica1"]
    },
    {
        "id": "ayudaTecnica",
        "hijo": ["cad"]
    },
    {
        "id": "eco",
        "hijo": []
    },
    {
        "id": "comProf",
        "hijo": []
    },
    {
        "id": "ivestOper",
        "hijo": ["prob"]
    },
    {
        "id": "electroMag",
        "hijo": ["fisica2", "analisis3"]
    },
    {
        "id": "pasantia1",
        "hijo": []
    },
    {
        "id": "resMat2",
        "hijo": ["resMat"]
    },
    {
        "id": "ceinIngMat",
        "hijo": ["funQui"]
    },
    {
        "id": "labInd2",
        "hijo": ["labInd"]
    },
    {
        "id": "contYcost",
        "hijo": []
    },
    {
        "id": "ivestOper2",
        "hijo": ["ivestOper"]
    },
    {
        "id": "Electrotecnia1",
        "hijo": ["electroMag"]
    },
    {
        "id": "mecFludis",
        "hijo": ["analisis3", "pasantia1", "termodinamica"]
    },
    {
        "id": "Metalurgia",
        "hijo": ["ceinIngMat"]
    },
    {
        "id": "teologia",
        "hijo": []
    },
    {
        "id": "cet1",
        "hijo": []
    },
    {
        "id": "gestCal",
        "hijo": []
    },
    {
        "id": "operProd1",
        "hijo": ["ivestOper"]
    },
    {
        "id": "Electrotecnia2",
        "hijo": ["Electrotecnia1"]
    },
    {
        "id": "pasantia2",
        "hijo": []
    },
    {
        "id": "transfCalor",
        "hijo": ["termodinamica"]
    },
    {
        "id": "ingAmbiental",
        "hijo": []
    },
    {
        "id": "maq1",
        "hijo": ["mecFludis", "mecanica2"]
    },
    {
        "id": "cet2",
        "hijo": []
    },
    {
        "id": "maq2",
        "hijo": ["pasantia2", "transfCalor"]
    },
    {
        "id": "Electronica",
        "hijo": ["electroMag"]
    },
    {
        "id": "prosUnitarios",
        "hijo": ["funQui"]
    },
    {
        "id": "labInd3",
        "hijo": ["labInd2"]
    },
    {
        "id": "ch2",
        "hijo": []
    },
    {
        "id": "autoControlIndustrial",
        "hijo": ["Electronica"]
    },
    {
        "id": "diseElementMaquinas",
        "hijo": ["resMat2"]
    },
    {
        "id": "pasantia3",
        "hijo": []
    },
    {
        "id": "maq3",
        "hijo": ["maq2"]
    },
    {
        "id": "proyInven",
        "hijo": ["contYcost"]
    },
    {
        "id": "cet3",
        "hijo": []
    },
    {
        "id": "cet4",
        "hijo": []
    },
    {
        "id": "proyInd",
        "hijo": ["Electrotecnia2", "maq3"]
    },
    {
        "id": "elemGestion",
        "hijo": ["eco"]
    },
    {
        "id": "gestiProy",
        "hijo": ["proyInven"]
    },
    {
        "id": "etica",
        "hijo": ["ch1"]
    },
    {
        "id": "cet5",
        "hijo": []
    }
];

//let materias = [{"id": "analisis2", "hijo": ["analisis1"]}];
const mouseTarget = document.getElementsByClassName("btn");

console.log(mouseTarget.length);

function pintar(idpadre) {

    for (i = 0; i < materias.length; i++) {

        if (materias[i].id === idpadre) {

            for (j = 0; j < materias[i].hijo.length; j++) {
                document.getElementById(idpadre).style.backgroundColor ="#e2e6ea"
                if (materias[i].hijo[j] !== null) {
                    console.log("pinta");

                    document.getElementById(materias[i].hijo[j]).style.backgroundColor = "rgba(255,99,71,0.5)";
                    document.getElementById(materias[i].hijo[j]).style.boxShadow = "0px 0px 0px 0.2rem rgba(220,20,60,0.5)";
                }
            }
        }
    }
}

function despintar(idpadre) {

    for (i = 0; i < materias.length; i++) {
        if (materias[i].id === idpadre)
            for (j = 0; j < materias[i].hijo.length; j++) {
                document.getElementById(idpadre).style.backgroundColor ="#f8f9fa"
                if (materias[i].hijo[j] !== null){
                    console.log("despinta");

                    document.getElementById(materias[i].hijo[j]).style.backgroundColor = "#f8f9fa";
                    document.getElementById(materias[i].hijo[j]).style.boxShadow = "0px 0px 0px 0.0rem rgba(216,217,219,0.5)";
                }
            }
    }
}


function setValue(value) {
    document.getElementById('value').value = value;
}

function informar(idtemp) {
    var i, l, options = [{
            value: 'first',
            text: 'First'
        }, {
            value: 'second',
            text: 'Second'
        }],
        newWindow = window.open("", null, "height=200,width=400,status=yes,toolbar=no,menubar=no,location=no");

    newWindow.document.write("<select onchange='window.opener.setValue(this.value);'>");
    for(i=0,l=options.length; i<l; i++) {
        newWindow.document.write("<option value='"+options[i].value+"'>");
        newWindow.document.write(options[i].text);
        newWindow.document.write("</option>");
    }
    newWindow.document.write("</select>");
}

/*
function loop(){
  addEventListener("mousenter",function (event) {
    pintar( event.getSource().id)},false);


  addEventListener("mouseleave",function (event) {

    despintar( document.event.getcSource().id)},false);
  for (i = 0; i < materias.length; i++) {
    console.log("sale")
    if (materias[i].id === idpadre) {
      document.getElementById(materias[i].hijo).style.backgroundColor = "rgba(248,249,250,1)";
      document.getElementById(materias[i].hijo).style.boxShadow = "0px 0px 0px 0.0rem rgba(216,217,219,0.5)";
    }
  }
}
loop()

*/

idPadre = null;


//0
mouseTarget[0].addEventListener("mouseenter", e => {
    pintar(mouseTarget[0].id);
});
mouseTarget[0].addEventListener("mouseleave", e => {
    despintar(mouseTarget[0].id);
});
mouseTarget[0].addEventListener("click", event => {
    informar(mouseTarget[0].id);
});
//1
mouseTarget[1].addEventListener("mouseenter", e => {
    pintar(mouseTarget[1].id);
});
mouseTarget[1].addEventListener("mouseleave", e => {
    despintar(mouseTarget[1].id);
});
mouseTarget[1].addEventListener("click", event => {
    informar(mouseTarget[1].id);
});
//6
mouseTarget[6].addEventListener("mouseenter", e => {
    pintar(mouseTarget[6].id);
});
mouseTarget[6].addEventListener("mouseleave", e => {
    despintar(mouseTarget[6].id);
});
mouseTarget[6].addEventListener("click", event => {
    informar(mouseTarget[6].id);
});
//5
mouseTarget[5].addEventListener("mouseenter", e => {
    pintar(mouseTarget[5].id);
});
mouseTarget[5].addEventListener("mouseleave", e => {
    despintar(mouseTarget[5].id);
});
mouseTarget[5].addEventListener("click", event => {
    informar(mouseTarget[5].id);
});
//4
mouseTarget[4].addEventListener("mouseenter", e => {
    pintar(mouseTarget[4].id);
});
mouseTarget[4].addEventListener("mouseleave", e => {
    despintar(mouseTarget[4].id);
});
mouseTarget[4].addEventListener("click", event => {
    informar(mouseTarget[4].id);
});
//7
mouseTarget[7].addEventListener("mouseenter", e => {
    pintar(mouseTarget[7].id);
});
mouseTarget[7].addEventListener("mouseleave", e => {
    despintar(mouseTarget[7].id);
});
mouseTarget[7].addEventListener("click", event => {
    informar(mouseTarget[7].id);
});
//8
mouseTarget[8].addEventListener("mouseenter", e => {
    pintar(mouseTarget[8].id);
});
mouseTarget[8].addEventListener("mouseleave", e => {
    despintar(mouseTarget[8].id);
});
mouseTarget[8].addEventListener("click", event => {
    informar(mouseTarget[8].id);
});
//9
mouseTarget[9].addEventListener("mouseenter", e => {
    pintar(mouseTarget[9].id);
});
mouseTarget[9].addEventListener("mouseleave", e => {
    despintar(mouseTarget[9].id);
});
mouseTarget[9].addEventListener("click", event => {
    informar(mouseTarget[9].id);
});
//10
mouseTarget[10].addEventListener("mouseenter", e => {
    pintar(mouseTarget[10].id);
});
mouseTarget[10].addEventListener("mouseleave", e => {
    despintar(mouseTarget[10].id);
});
mouseTarget[10].addEventListener("click", event => {
    informar(mouseTarget[10].id);
});
//11
mouseTarget[11].addEventListener("mouseenter", e => {
    pintar(mouseTarget[11].id);
});
mouseTarget[11].addEventListener("mouseleave", e => {
    despintar(mouseTarget[11].id);
});
mouseTarget[11].addEventListener("click", event => {
    informar(mouseTarget[11].id);
});
//12
mouseTarget[12].addEventListener("mouseenter", e => {
    pintar(mouseTarget[12].id);
});
mouseTarget[12].addEventListener("mouseleave", e => {
    despintar(mouseTarget[12].id);
});
mouseTarget[12].addEventListener("click", event => {
    informar(mouseTarget[12].id);
});
//13
mouseTarget[13].addEventListener("mouseenter", e => {
    pintar(mouseTarget[13].id);
});
mouseTarget[13].addEventListener("mouseleave", e => {
    despintar(mouseTarget[13].id);
});
mouseTarget[13].addEventListener("click", event => {
    informar(mouseTarget[13].id);
});
//14
mouseTarget[14].addEventListener("mouseenter", e => {
    pintar(mouseTarget[14].id);
});
mouseTarget[14].addEventListener("mouseleave", e => {
    despintar(mouseTarget[14].id);
});
mouseTarget[14].addEventListener("click", event => {
    informar(mouseTarget[14].id);
});
//15
mouseTarget[15].addEventListener("mouseenter", e => {
    pintar(mouseTarget[15].id);
});
mouseTarget[15].addEventListener("mouseleave", e => {
    despintar(mouseTarget[15].id);
});
mouseTarget[15].addEventListener("click", event => {
    informar(mouseTarget[15].id);
});
//16
mouseTarget[16].addEventListener("mouseenter", e => {
    pintar(mouseTarget[16].id);
});
mouseTarget[16].addEventListener("mouseleave", e => {
    despintar(mouseTarget[16].id);
});
mouseTarget[16].addEventListener("click", event => {
    informar(mouseTarget[16].id);
});
//17
mouseTarget[17].addEventListener("mouseenter", e => {
    pintar(mouseTarget[17].id);
});
mouseTarget[17].addEventListener("mouseleave", e => {
    despintar(mouseTarget[17].id);
});
mouseTarget[17].addEventListener("click", event => {
    informar(mouseTarget[17].id);
});
//18
mouseTarget[18].addEventListener("mouseenter", e => {
    pintar(mouseTarget[18].id);
});
mouseTarget[18].addEventListener("mouseleave", e => {
    despintar(mouseTarget[18].id);
});
mouseTarget[18].addEventListener("click", event => {
    informar(mouseTarget[18].id);
});
//19
mouseTarget[19].addEventListener("mouseenter", e => {
    pintar(mouseTarget[19].id);
});
mouseTarget[19].addEventListener("mouseleave", e => {
    despintar(mouseTarget[19].id);
});
mouseTarget[19].addEventListener("click", event => {
    informar(mouseTarget[19].id);
});
//20
mouseTarget[20].addEventListener("mouseenter", e => {
    pintar(mouseTarget[20].id);
});
mouseTarget[20].addEventListener("mouseleave", e => {
    despintar(mouseTarget[20].id);
});
mouseTarget[20].addEventListener("click", event => {
    informar(mouseTarget[20].id);
});
//21
mouseTarget[21].addEventListener("mouseenter", e => {
    pintar(mouseTarget[21].id);
});
mouseTarget[21].addEventListener("mouseleave", e => {
    despintar(mouseTarget[21].id);
});
mouseTarget[21].addEventListener("click", event => {
    informar(mouseTarget[21].id);
});
//22
mouseTarget[22].addEventListener("mouseenter", e => {
    pintar(mouseTarget[22].id);
});
mouseTarget[22].addEventListener("mouseleave", e => {
    despintar(mouseTarget[22].id);
});
mouseTarget[22].addEventListener("click", event => {
    informar(mouseTarget[22].id);
});
//23
mouseTarget[23].addEventListener("mouseenter", e => {
    pintar(mouseTarget[23].id);
});
mouseTarget[23].addEventListener("mouseleave", e => {
    despintar(mouseTarget[23].id);
});
mouseTarget[23].addEventListener("click", event => {
    informar(mouseTarget[23].id);
});
//24
mouseTarget[24].addEventListener("mouseenter", e => {
    pintar(mouseTarget[24].id);
});
mouseTarget[24].addEventListener("mouseleave", e => {
    despintar(mouseTarget[24].id);
});
mouseTarget[24].addEventListener("click", event => {
    informar(mouseTarget[24].id);
});
//25
mouseTarget[25].addEventListener("mouseenter", e => {
    pintar(mouseTarget[25].id);
});
mouseTarget[25].addEventListener("mouseleave", e => {
    despintar(mouseTarget[25].id);
});
mouseTarget[25].addEventListener("click", event => {
    informar(mouseTarget[25].id);
});
//26
mouseTarget[26].addEventListener("mouseenter", e => {
    pintar(mouseTarget[26].id);
});
mouseTarget[26].addEventListener("mouseleave", e => {
    despintar(mouseTarget[26].id);
});
mouseTarget[26].addEventListener("click", event => {
    informar(mouseTarget[26].id);
});
//27
mouseTarget[27].addEventListener("mouseenter", e => {
    pintar(mouseTarget[27].id);
});
mouseTarget[27].addEventListener("mouseleave", e => {
    despintar(mouseTarget[27].id);
});
mouseTarget[27].addEventListener("click", event => {
    informar(mouseTarget[27].id);
});
//28
mouseTarget[28].addEventListener("mouseenter", e => {
    pintar(mouseTarget[28].id);
});
mouseTarget[28].addEventListener("mouseleave", e => {
    despintar(mouseTarget[28].id);
});
mouseTarget[28].addEventListener("click", event => {
    informar(mouseTarget[28].id);
});
//29
mouseTarget[29].addEventListener("mouseenter", e => {
    pintar(mouseTarget[29].id);
});
mouseTarget[29].addEventListener("mouseleave", e => {
    despintar(mouseTarget[29].id);
});
mouseTarget[29].addEventListener("click", event => {
    informar(mouseTarget[29].id);
});
//30
mouseTarget[30].addEventListener("mouseenter", e => {
    pintar(mouseTarget[30].id);
});
mouseTarget[30].addEventListener("mouseleave", e => {
    despintar(mouseTarget[30].id);
});
mouseTarget[30].addEventListener("click", event => {
    informar(mouseTarget[30].id);
});
//31
mouseTarget[31].addEventListener("mouseenter", e => {
    pintar(mouseTarget[31].id);
});
mouseTarget[31].addEventListener("mouseleave", e => {
    despintar(mouseTarget[31].id);
});
mouseTarget[31].addEventListener("click", event => {
    informar(mouseTarget[31].id);
});
//32
mouseTarget[32].addEventListener("mouseenter", e => {
    pintar(mouseTarget[32].id);
});
mouseTarget[32].addEventListener("mouseleave", e => {
    despintar(mouseTarget[32].id);
});
mouseTarget[32].addEventListener("click", event => {
    informar(mouseTarget[32].id);
});
//33
mouseTarget[33].addEventListener("mouseenter", e => {
    pintar(mouseTarget[33].id);
});
mouseTarget[33].addEventListener("mouseleave", e => {
    despintar(mouseTarget[33].id);
});
mouseTarget[33].addEventListener("click", event => {
    informar(mouseTarget[33].id);
});
//34
mouseTarget[34].addEventListener("mouseenter", e => {
    pintar(mouseTarget[34].id);
});
mouseTarget[34].addEventListener("mouseleave", e => {
    despintar(mouseTarget[34].id);
});
mouseTarget[34].addEventListener("click", event => {
    informar(mouseTarget[34].id);
});
//35
mouseTarget[35].addEventListener("mouseenter", e => {
    pintar(mouseTarget[35].id);
});
mouseTarget[35].addEventListener("mouseleave", e => {
    despintar(mouseTarget[35].id);
});
mouseTarget[35].addEventListener("click", event => {
    informar(mouseTarget[35].id);
});
//36
mouseTarget[36].addEventListener("mouseenter", e => {
    pintar(mouseTarget[36].id);
});
mouseTarget[36].addEventListener("mouseleave", e => {
    despintar(mouseTarget[36].id);
});
mouseTarget[36].addEventListener("click", event => {
    informar(mouseTarget[36].id);
});
//37
mouseTarget[37].addEventListener("mouseenter", e => {
    pintar(mouseTarget[37].id);
});
mouseTarget[37].addEventListener("mouseleave", e => {
    despintar(mouseTarget[37].id);
});
mouseTarget[37].addEventListener("click", event => {
    informar(mouseTarget[37].id);
});
//38
mouseTarget[38].addEventListener("mouseenter", e => {
    pintar(mouseTarget[38].id);
});
mouseTarget[38].addEventListener("mouseleave", e => {
    despintar(mouseTarget[38].id);
});
mouseTarget[38].addEventListener("click", event => {
    informar(mouseTarget[38].id);
});
//39
mouseTarget[39].addEventListener("mouseenter", e => {
    pintar(mouseTarget[39].id);
});
mouseTarget[39].addEventListener("mouseleave", e => {
    despintar(mouseTarget[39].id);
});
mouseTarget[39].addEventListener("click", event => {
    informar(mouseTarget[39].id);
});
//40
mouseTarget[40].addEventListener("mouseenter", e => {
    pintar(mouseTarget[40].id);
});
mouseTarget[40].addEventListener("mouseleave", e => {
    despintar(mouseTarget[40].id);
});
mouseTarget[40].addEventListener("click", event => {
    informar(mouseTarget[40].id);
});
//41
mouseTarget[41].addEventListener("mouseenter", e => {
    pintar(mouseTarget[41].id);
});
mouseTarget[41].addEventListener("mouseleave", e => {
    despintar(mouseTarget[41].id);
});
mouseTarget[41].addEventListener("click", event => {
    informar(mouseTarget[41].id);
});
//42
mouseTarget[42].addEventListener("mouseenter", e => {
    pintar(mouseTarget[42].id);
});
mouseTarget[42].addEventListener("mouseleave", e => {
    despintar(mouseTarget[42].id);
});
mouseTarget[42].addEventListener("click", event => {
    informar(mouseTarget[42].id);
});
//43
mouseTarget[43].addEventListener("mouseenter", e => {
    pintar(mouseTarget[43].id);
});
mouseTarget[43].addEventListener("mouseleave", e => {
    despintar(mouseTarget[43].id);
});
mouseTarget[43].addEventListener("click", event => {
    informar(mouseTarget[43].id);
});
//44
mouseTarget[44].addEventListener("mouseenter", e => {
    pintar(mouseTarget[44].id);
});
mouseTarget[44].addEventListener("mouseleave", e => {
    despintar(mouseTarget[44].id);
});
mouseTarget[44].addEventListener("click", event => {
    informar(mouseTarget[44].id);
});
//45
mouseTarget[45].addEventListener("mouseenter", e => {
    pintar(mouseTarget[45].id);
});
mouseTarget[45].addEventListener("mouseleave", e => {
    despintar(mouseTarget[45].id);
});
mouseTarget[45].addEventListener("click", event => {
    informar(mouseTarget[45].id);
});
//46
mouseTarget[46].addEventListener("mouseenter", e => {
    pintar(mouseTarget[46].id);
});
mouseTarget[46].addEventListener("mouseleave", e => {
    despintar(mouseTarget[46].id);
});
mouseTarget[46].addEventListener("click", event => {
    informar(mouseTarget[46].id);
});
//47
mouseTarget[47].addEventListener("mouseenter", e => {
    pintar(mouseTarget[47].id);
});
mouseTarget[47].addEventListener("mouseleave", e => {
    despintar(mouseTarget[47].id);
});
mouseTarget[47].addEventListener("click", event => {
    informar(mouseTarget[47].id);
});
//48
mouseTarget[48].addEventListener("mouseenter", e => {
    pintar(mouseTarget[48].id);
});
mouseTarget[48].addEventListener("mouseleave", e => {
    despintar(mouseTarget[48].id);
});
mouseTarget[48].addEventListener("click", event => {
    informar(mouseTarget[48].id);
});
//49
mouseTarget[49].addEventListener("mouseenter", e => {
    pintar(mouseTarget[49].id);
});
mouseTarget[49].addEventListener("mouseleave", e => {
    despintar(mouseTarget[49].id);
});
mouseTarget[49].addEventListener("click", event => {
    informar(mouseTarget[49].id);
});
//50
mouseTarget[50].addEventListener("mouseenter", e => {
    pintar(mouseTarget[50].id);
});
mouseTarget[50].addEventListener("mouseleave", e => {
    despintar(mouseTarget[50].id);
});
mouseTarget[50].addEventListener("click", event => {
    informar(mouseTarget[50].id);
});
//51
mouseTarget[51].addEventListener("mouseenter", e => {
    pintar(mouseTarget[51].id);
});
mouseTarget[51].addEventListener("mouseleave", e => {
    despintar(mouseTarget[51].id);
});
mouseTarget[51].addEventListener("click", event => {
    informar(mouseTarget[51].id);
});
//52
mouseTarget[52].addEventListener("mouseenter", e => {
    pintar(mouseTarget[52].id);
});
mouseTarget[52].addEventListener("mouseleave", e => {
    despintar(mouseTarget[52].id);
});
mouseTarget[52].addEventListener("click", event => {
    informar(mouseTarget[52].id);
});
//53
mouseTarget[53].addEventListener("mouseenter", e => {
    pintar(mouseTarget[53].id);
});
mouseTarget[53].addEventListener("mouseleave", e => {
    despintar(mouseTarget[53].id);
});
mouseTarget[53].addEventListener("click", event => {
    informar(mouseTarget[53].id);
});
//54
mouseTarget[54].addEventListener("mouseenter", e => {
    pintar(mouseTarget[54].id);
});
mouseTarget[54].addEventListener("mouseleave", e => {
    despintar(mouseTarget[54].id);
});
mouseTarget[54].addEventListener("click", event => {
    informar(mouseTarget[54].id);
});
//55
mouseTarget[55].addEventListener("mouseenter", e => {
    pintar(mouseTarget[55].id);
});
mouseTarget[55].addEventListener("mouseleave", e => {
    despintar(mouseTarget[55].id);
});
mouseTarget[55].addEventListener("click", event => {
    informar(mouseTarget[55].id);
});
//56
mouseTarget[56].addEventListener("mouseenter", e => {
    pintar(mouseTarget[56].id);
});
mouseTarget[56].addEventListener("mouseleave", e => {
    despintar(mouseTarget[56].id);
});
mouseTarget[56].addEventListener("click", event => {
    informar(mouseTarget[56].id);
});
//57
mouseTarget[57].addEventListener("mouseenter", e => {
    pintar(mouseTarget[57].id);
});
mouseTarget[57].addEventListener("mouseleave", e => {
    despintar(mouseTarget[57].id);
});
mouseTarget[57].addEventListener("click", event => {
    informar(mouseTarget[57].id);
});
//58
mouseTarget[58].addEventListener("mouseenter", e => {
    pintar(mouseTarget[58].id);
});
mouseTarget[58].addEventListener("mouseleave", e => {
    despintar(mouseTarget[58].id);
});
mouseTarget[58].addEventListener("click", event => {
    informar(mouseTarget[58].id);
});
//59
mouseTarget[59].addEventListener("mouseenter", e => {
    pintar(mouseTarget[59].id);
});
mouseTarget[59].addEventListener("mouseleave", e => {
    despintar(mouseTarget[59].id);
});
mouseTarget[59].addEventListener("click", event => {
    informar(mouseTarget[59].id);
});
//60
mouseTarget[60].addEventListener("mouseenter", e => {
    pintar(mouseTarget[60].id);
});
mouseTarget[60].addEventListener("mouseleave", e => {
    despintar(mouseTarget[60].id);
});
mouseTarget[60].addEventListener("click", event => {
    informar(mouseTarget[60].id);
});




