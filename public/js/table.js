
const App = function() {
    $("#totalTable").hide()
    $(document).ready(function() {
        console.log("DOM fully loaded and parsed - adding event listeners");
        //document.getElementById('btnLaunch').addEventListener('click', App.launch)
        // Suresh Chandra Peddinti has changed the following line to use jQuery click()
        $("#tableclick").click(function(){
        App.launch()
        });
       // document.getElementById('btnExploreHtml').addEventListener('click', App.exploreHtml)
        //document.getElementById('btnExploreCode').addEventListener('click', App.exploreCode)
    });

function launch()
{
   
   $("#printtable tr").remove()
   var v1=$("#tableNumber").val()
   console.log(v1)
   var v2=$("#endnumber").val()
   console.log(v2)
    getTable(v1,v2)
}

function getTable(number1,tillValue)
{
    var printTable = ""
    if(number1>0 && number1<=100)
    {
        if(tillValue>=0 && tillValue<=20)
        {
        for(var i=0;i<=tillValue;i++)
        {
         //$("#id1").html(number1)
         //$("#id2").html(i)
         //$("#id3").html(number1*i)
        printTable+="<tr><td>"+number1+"</td><td>*</td><td>"+i+"</td><td>=</td><td>"+number1*i+"</td></tr>"
        console.log(printTable)

        }
        }
        else
        {
         alert("You need to enter the table value from 0 to 20 only")
        }
    }
    else
    {
        alert("The numbers should be between 0 to 101")
    }

    $("#printtable").append(printTable)
    $("#totalTable").show()
}
}();