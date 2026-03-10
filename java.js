let form= document.getElementById('contain');

function validate(e){
       e.preventDefault()

       let password=document.getElementById('pin').value;
       let confirm=document.getElementById('pins').value;

       let regex1=/[0-9]/
       let regexA=/[A-Z]/
       let regexs=/[^A-Za-z0-9]/
       
       let test1= regex1.test(password);
       let test2= regexA.test(password);
       let test3= regexs.test(password);
       let test4= (password==confirm);

       if(test1 && test2 && test3 && test4){
              alert("profile created");
              form.submit();
       }

       if(test1==false){
              document.getElementsByClassName("warn3")[0].style.display="inline";
              document.getElementsByClassName("warn3")[1].style.display="inline";
              document.getElementById("container").style.height="100%"
       }

        if(test2==false){
              document.getElementsByClassName("warn2")[0].style.display="inline";
              document.getElementsByClassName("warn2")[1].style.display="inline";
              document.getElementById("container").style.height="100%";
       }

        if(test3==false){
              document.getElementsByClassName("warn4")[0].style.display="inline";
              document.getElementsByClassName("warn4")[1].style.display="inline";
              document.getElementById("container").style.height="100%";
       }

        if(password.length<8){
              document.getElementsByClassName("warn1")[0].style.display="inline";
              document.getElementsByClassName("warn1")[1].style.display="inline";
              document.getElementById("container").style.height="100%";
       }

        if(password!=confirm){
              document.getElementsByClassName("warning")[0].style.display="inline";
              document.getElementsByClassName("warning")[1].style.display="inline";
              document.getElementById("container").style.height="100%";
       }
}