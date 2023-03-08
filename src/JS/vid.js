var a;
function show_hide()
{
    if(a==1){
        document.getElementById('vid').style.display='inline';
        return a=0;
    }
    else{
        document.getElementById('vid').style.display='none';
        return a=1;
    }
}