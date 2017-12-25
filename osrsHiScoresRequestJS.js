/**
 * Created by Reverence on 12/25/2017.
 */
function loadDoc()
{
    var p;
    var url = "http://services.runescape.com/m=hiscore_oldschool/index_lite.ws?player=";
    var player = "vngv2gvngv2g";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            p =  this.responseText;
        }
    };
    xhttp.open("GET", url + player, true)
    xhttp.send();
    alert(p);
}