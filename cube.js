function source()
{
rng=prompt('Enter the range'); ress=rng.split("-"); if(ress.length!=2)
{
alert("invalid range "); return;
}
a=parseInt(ress[0]); b=parseInt(ress[1]); if(a>b)
{
alert("invalid range "); return;

}
str="<table border=2><tr><th>Number</th><th>Square</th><th>Cube</th></tr>";

for(i=a;i<=b;i++)
{
str=str+"<tr><td>"+i+"<td>"+(i*i)+"<td>"+(i*i*i);
}
document.write(str);

}
