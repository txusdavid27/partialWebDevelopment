var select_1 = document.getElementById('izquierda');
var select_2 = document.getElementById('derecha');

function agregar(){
    var i;
    for (i = 0; i < select_1.options.length; i++)
    {
      if (select_1.options[i].selected)
      {
        select_2.add(select_1.options[i]);
        i=0
      }
    }
    agregar()
}

function remover(){
    var i;
    for (i = 0; i < select_2.options.length; i++)
    {
      if (select_2.options[i].selected)
      {
        select_1.add(select_2.options[i]);
        i=0
      }
    }
    remover()
}














var coment=[
    {"nombre": "Jesus","body":"this is a coment"}
  ];

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  const maxPermitted = 300;
  // La varible de control
  let validArea = false;
  
  const area = document.querySelector('#area');
  const submit = document.querySelector('#sbmit');
  const error = document.querySelector('#area-error');
  const namea = document.querySelector('#remit');
  
  function verifica(){
    const {value}= namea;
    

    console.log(value);

    if(validArea==false || value.length==0 || document.querySelector('#area').value.length==0){
        alert("Verifica los Campos \n incompletos o fuera de rango");
    }
    else{
        alert("Ok Enviado");
        var addObj={
            "nombre": document.querySelector('#remit').value,//val()
            "body":  document.querySelector('#area').value
          };
          console.log(addObj);
          coment.push(addObj);
          console.log(coment.length);
          render(addObj);
    }
  }
  
  try{
    area.addEventListener("input", () => {
        const { value } = area;
        
        value.length >= maxPermitted
            ? handleInvalid()
            : handleValid();
    });
  }catch(err){}
  
  const handleInvalid = () => {
      validArea = false;
      error.style.display = "block";
      submit.disabled=true;
      submit.style.background = "black";
  }
  
  const handleValid = () => {
      validArea = true;
      error.style.display = "none";
      submit.disabled=false;
      submit.style.background = "#00AA4D";
  }
//////////////////////////////////CHAT


  function render(data){
    var html = "<div class='comentBox'></div><div class='rightPanel'><span>@"+data.nombre+"---->"+data.body+"</span></div></div>"
    document.getElementById("container").innerHTML+= html;
  }


  document.addEventListener("DOMContentLoaded", function() {
      for(var i=0; i<coment.length;i++){
        console.log(coment.length);
        try{
            render(coment[i]);  
        }catch(err){}
      }
  });


