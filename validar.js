document.getElementsByName("guardar")[0].addEventListener("click",()=>
{
    var aux = true;
    var cajas = document.getElementsByClassName("input");
    for(var i =0; i < cajas.length; i++)
    {
        if(cajas[i].value=="")
        {
            cajas[i].style.border = " 2px solid red"
            aux = false;
        }
    }
    if(aux==true)
    {    alert("muy bien lleno todos lo campos!!!");     
        location.reload();
    }
    else
    {// alert("llene todos lo campos!!!");  
    
    }
})