

function gravitationalConstant() 
{
    var velocityElement = document.getElementById("velocity")
    return velocityElement*(10**-11)
}
function planetsMass() 
{
    var massElement = document.getElementById("mass")
    return massElement*(10**24)
}
function planetsRadius() 
{
    var radiusElement = document.getElementById("radius")
    return radiusElement*1000
}
function escapeVelocity(gravitationalConstant,planetsMass,planetsRadius)
{
    return Math.sqrt((2*gravitationalConstant*planetsMass)/planetsRadius)
}






window.onload = function() 
{

    var btn = document.getElementById("calc")
    btn.addEventListener("click", checkForEv(escapeVelocity))
    

    function checkForEv(escapeVelocity)
    {
        escapeVelocity(gravitationalConstant(),planetsMass(),planetsRadius())
        var earthEv = 11.186
        if(escapeVelocity>=earthEv){alert("Success")}
        else if(escapeVelocity<earthEv){alert("Faliure")}
        else{alert("Error!")}
    }


}
