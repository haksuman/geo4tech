function insert_Row(esad)
{
var x=document.getElementById('spt_table').insertRow(0);
var y = x.insertCell(0);
var z = x.insertCell(1);
var d = x.insertCell(2);
var e = x.insertCell(3);
y.innerHTML="New Cell1";
z.innerHTML="New Cell2";
e.innerHTML="New Cell2";
d.innerHTML="New Cell2";
}