
        function back() {
            window.alert("THis is not connected to backend \n\n\n\nNOTE:this website is only made for educational purpose");
        }
    x=document.getElementById("middle")
    y=document.getElementById("navbar")
    function menu(){
        if(x.style.display==="flex" && y.style.height==="170px"){
            x.style.display="none";
            y.style.height="70px";
        }
        else{
            x.style.display="flex";
            y.style.height="170px"
        }
    }