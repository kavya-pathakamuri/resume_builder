alert("loading");
function addNewWEfield()
{
let newNode=document.createElement('textarea');
newNode.classList.add('form-control');
newNode.classList.add('wefield');
newNode.classList.add('mt-2');
newNode.setAttribute("rows",3);
newNode.setAttribute('placeholder','Enter here')
let weob=document.getElementById('we');
let weAddButtonob=document.getElementById('weAddButton');
weob.insertBefore(newNode,weAddButtonob)
}

function addNewAQfield()
{
    let newNode=document.createElement('textarea');
newNode.classList.add('form-control');
newNode.classList.add('aqfield');
newNode.classList.add('mt-2');
newNode.setAttribute("rows",3);
newNode.setAttribute('placeholder','Enter here')
let aqob=document.getElementById('aq');
let aqAddButtonob=document.getElementById('aqAddButton');
aqob.insertBefore(newNode,aqAddButtonob)

}
function generateCV()
    {
        let namefield=document.getElementById("namefield").value;
        let nameT1=document.getElementById("nameT1");
        nameT1.innerHTML=namefield;
        document.getElementById("nameT2").innerHTML=namefield;
        document.getElementById("contactT").innerHTML=document.getElementById("contactfield").value;
        document.getElementById("addT").innerHTML=document.getElementById("addfield").value;
        document.getElementById("fbT").innerHTML=document.getElementById("fbfield").value;
        document.getElementById("instaT").innerHTML=document.getElementById("instafield").value;
        document.getElementById("lnT").innerHTML=document.getElementById("lnfield").value;
        document.getElementById("obT").innerHTML=document.getElementById("obfield").value;
        let wes=document.getElementsByClassName("wefield");
        let str="";
        for(let e of wes) {
            str=str + `<li> ${ e.value}</li>`;
        }
        document.getElementById("weT").innerHTML=str;
        let aqs=document.getElementsByClassName("aqfield")
        let str1="" 
        for(let e of aqs)
        {
            str1+=`<li>${e.value}</li>`;

        }
        document.getElementById("aqT").innerHTML=str1;

        document.getElementById('cv-form').style.display='none';
        document.getElementById('cv-template').style.display='block';




 

        
    } 

    function printCV()
    {
        window.print();

    }
