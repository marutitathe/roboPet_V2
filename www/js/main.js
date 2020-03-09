var screenHeight = 0;
var screenWidth = 0;
var canvas;
function getsetScreenSize() {
    screenWidth = window.screen.width;
    screenHeight = window.screen.height;

    canvas = document.getElementById("mainCanvas");
    canvas.style.height = screenHeight + "px";

    var canvasBody = canvas.querySelector(".canvasBody");
    //canvasBody.style.height = (screenHeight - 50 - 40) + "px"; //Remove TitleHeight and FooterHeight from body height
}

function goPage(pageName) {
    window.location.href = pageName;
}

function logStep(str,isNew)
{
    if (isNew == 1)
    {
        localStorage.clear();
        localStorage.setItem("logStep", "DateTime : " + getCurrentDateTime()) + "... \r\n";
    }
    str = localStorage.getItem("logStep") + "... \r\n" + str;
    localStorage.setItem("logStep", str);
}

function getCurrentDateTime()
{
    d = new Date();
    return d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + ":" + d.getMilliseconds();
}

function getTimeStamp(VYear, VMonth, VDate)
{
    var d = new Date(VYear, VMonth, VDate);
    return d.getTime();
}

function getDateFromTimeStamp(ts)
{
    if (isNaN(ts))
    {
        showLongToastTop("TimeStamp must be an Integer. FailedIn: getDateFromTimeStamp")
        return;
    }
    var d = new Date(ts);
    return d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear();
}

function getMonthFromTimeStamp(ts)
{
    if (isNaN(ts)) {
        showLongToastTop("TimeStamp must be an Integer. FailedIn: getMonthFromTimeStamp")
        return;
    }
    var d = new Date(ts);
    return (d.getMonth()+1);
}

function getItemDateMonth(ts)
{
    if (isNaN(ts)) {
        showLongToastTop("TimeStamp must be an Integer. FailedIn: getItemDateMonth")
        return;
    }
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Augu", "Sep", "Oct", "Nov", "Dec"];
    var d = new Date(ts);
    //Month - 1 because array starts with zero while Month starts with 1
    var r = monthNames[d.getMonth()] + " " + d.getFullYear();
    return r;

}

function getDiv(className, divText)
{
    var rtn = document.createElement("div");
    rtn.className = className;
    var txt = document.createTextNode(""+divText+"");
    rtn.appendChild(txt);

    return rtn;
}

function showShortToastTop(msg)
{
    if (device.platform == "Android") {
        window.plugins.toast.showShortTop(msg);
    }
    else
    {
        alert(msg);
    }
}

function showLongToastTop(msg) {
    if (device.platform == "Android") {
        window.plugins.toast.showLongTop(msg);
    }
    else {
        alert(msg);
    }
}


function errorSQL(err) {
    logStep("Error Processing SQL Query :" + err.message);

    alert("ERROR: "+ err.message);
}

function showNoData(showHide)
{
    var vx  = document.getElementById("noDataMsgBox");
    
    showHideDiv(vx, showHide);
}

function showHideDiv(o, showHide)
{
    if(o==null || o=="undefined" || o==undefined)
    {
        alert("Invalid object passed."+o.innerHTML );
        return;
    }


    if(showHide==1)
    {
        o.style.display="block";
    }
    else
    {
        o.style.display="none";
    }

}

function deleteCategory(o)
{
    alert(o);
    alert(o.value);
}
