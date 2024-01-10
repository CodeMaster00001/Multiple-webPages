
function checkMe(){
    var pass=document.getElementById('exampleInputPassword1').value;
    var username=document.getElementById('exampleInputEmail1').value;
console.log(username);
console.log(pass);
if(username ==='VAIBHAV' && pass === '123456789'){
    // alert('Loginned successfully');
            // window.location.href='http://127.0.0.1:5500/Home/home.html';
            console.log("Hiiii")
            window.location='www.google.com';
            console.log("line number 12")
}
else if(username === 'SIDDHARTH' && pass === '1234567890'){
    alert('Loginned successfully');
}
else{
    if(pass=='' || username==''){
       alert("Either Id or password missing ");
    }
    else{
    alert('WRONG ID OR PASSWORD ENTERED')
    }
}
// console.log("===23-==")
}


