function cal(){
    var ip = document.querySelector(".inp");
    if(ip.value=="" || ip.value==null){
        document.querySelector(".result").innerHTML = "<h2>" + 0 + "%</h2>";
        alert("Please Enter names in both the input!");
    }else{
        var p = Math.floor(Math.random()*101);
        document.querySelector(".result").innerHTML = "<h2>" + p + "%</h2>";
        msg(p);
    }
}

function msg(pge){
    var ltmsg = document.querySelector("#msg");
    if(pge >= 0 && pge <= 20)
        ltmsg.innerHTML = "Just find someone else!";
    else if(pge > 20 && pge <= 40)
        ltmsg.innerHTML = "It's alright. But find someone else.";
    else if(pge > 50 && pge <= 70)
        ltmsg.innerHTML = "Its much better than many couples. Give it a shot";
    else{
        ltmsg.innerHTML = "Its a match made in heaven.";
    }
}