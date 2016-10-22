
    function cal()
    {
var mov=document.getElementById('m1').value;
var val=document.getElementById('th').value;
var res=mul(mov,val);

document.getElementById('result').innerHTML="Total Price is :$"+res;

    }



function mul(a,b){
  //  if(!isNaN(tr) && !isNaN(ts))
	//	return tr*ts;
	//else
	//	throw Error("only numbers are allowed");
    return a*b;
}