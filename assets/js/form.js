export function form(){

  const $slidePage = document.querySelector(".slide-page");
  const $nextBtnFirst = document.querySelector(".firstNext");
  const $prevBtnSec = document.querySelector(".prev-1");
  const $nextBtnSec = document.querySelector(".next-1");
  const $prevBtnThird = document.querySelector(".prev-2");
  const $nextBtnThird = document.querySelector(".next-2");
  const $prevBtnFourth = document.querySelector(".prev-3");
  const $submitBtn = document.querySelector(".submit");
  const $bullet = [...document.querySelectorAll(".step .bullet")]; 
 
  const $error = document.querySelector(".error small");

  let current = 1;

  $nextBtnFirst.addEventListener("click", function(){
    const $inputRequired = [...document.querySelectorAll(".input-group input[required]")];
    const $inputPattern = [...document.querySelectorAll(".input-group input[pattern]")];

    for(let i=0;i<$inputRequired.length;i++){
        if($inputRequired[i].value === '' ){
            $error.innerHTML= `Complete the field ${$inputRequired[i].name}` ;
            $inputRequired[i].focus();
            return;
        } 
    }

    for(let i=0;i<$inputPattern.length;i++){
        let regex= new RegExp($inputPattern[i].pattern);
        if(!regex.exec($inputPattern[i].value)) {
            $error.innerHTML= `Fill in the field ${$inputPattern[i].name} correctly.`;
            $inputPattern[i].focus();
            return;
        }
         
    }

    $error.innerHTML=''; 
    $slidePage.style.marginLeft = "-25%";
    $bullet[current - 1].classList.add("active");
    current += 1;
    
  });

  $nextBtnSec.addEventListener("click", function(){
    
    const $getCategory  =  document .querySelector( 'input[name="category" ]:checked');
    const $getDomain  =  document .querySelector( 'input[name="domain" ]:checked');
    const $getHosting  =  document .querySelector( 'input[name="hosting" ]:checked');
    const $getContent =  document .querySelector( 'input[name="content" ]:checked');

    if($getCategory === null) return $error.innerHTML= `Complete the field Category`;
    if($getDomain === null) return $error.innerHTML= `Complete the field Domain`;
    if($getHosting === null) return $error.innerHTML= `Complete the field Hosting`;
    if($getContent === null) return $error.innerHTML= `Complete the field Content`;


    $error.innerHTML=''; 
    $slidePage.style.marginLeft = "-50%";
    $bullet[current - 1].classList.add("active");    
    current += 1;
  });


  $nextBtnThird.addEventListener("click", function(){   
    $error.innerHTML='';
    $slidePage.style.marginLeft = "-75%";
    $bullet[current - 1].classList.add("active");
    current += 1;
  });

  $submitBtn.addEventListener("click", function(){
    $error.innerHTML='';
    $bullet[current - 1].classList.add("active");    
    current += 1;
  });

  $prevBtnSec.addEventListener("click", function(){
    $slidePage.style.marginLeft = "0%";
    $bullet[current - 2].classList.remove("active");   
    current -= 1;
  });

  $prevBtnThird.addEventListener("click", function(){
    $slidePage.style.marginLeft = "-25%";
    $bullet[current - 2].classList.remove("active");
    current -= 1;
  });

  $prevBtnFourth.addEventListener("click", function(){
    $slidePage.style.marginLeft = "-50%";
    $bullet[current - 2].classList.remove("active");
    current -= 1;
  });




  $('#formbrief').submit(function(e) {
    e.preventDefault();
    const company = $('input[name="company"]').val();
    const phone = $('input[name="phone"]').val();
    const email = $('input[name="email"]').val();
    const name = $('input[name="name"]').val();
    const business = $('input[name="business"]').val();
    const category = $('input[name="category"]').val();
    const domain = $('input[name="domain"]').val();
    const hosting = $('input[name="hosting"]').val();
    const content = $('input[name="content"]').val();
    const msg1 = $('textarea[name="msg1"]').val();
    const msg2 = $('textarea[name="msg2"]').val();
    const msg3 = $('textarea[name="msg3"]').val();      
                
    $.ajax({
        url: 'sendemail.php', 
        type: 'POST',
        data: {company: company, phone: phone, email: email, name: name, business: business, category: category, domain: domain, hosting: hosting, content: content, msg1: msg1, msg2: msg2, msg3: msg3},
        success: function(response) {
            $('form').trigger("reset");
            $('#resp').html(response);
        },
        error: function(xhr, status, error) {
            alert(xhr.responseText);
        }
    });
    return false;
});






}


export function validateForm(){

    let formBrief = document.querySelector(".formbrief"),
         eformBrief = formBrief.elements; 
        
 
    let validarInputs = function(){
        for (let i = 0; i < eformBrief.length; i++) {
            if (eformBrief[i].type == "text" || eformBrief[i].type == "number" || eformBrief[i].type == "email" || eformBrief[i].type == "textarea") {
                if (eformBrief[i].value.length == 0) {
                    console.log('The Field ' + eformBrief[i].name + ' is incomplete');
                    eformBrief[i].className = eformBrief[i].className + " error";
                    return false;
                } else {
                    eformBrief[i].className = eformBrief[i].className.replace(" error", "");
                }
            }
        }
    
    
        return true;
    };

    
    
    let validarRadios = function(){
        let opDomain = document.getElementsByName('domain'),
            resDomain = false;
    
        for (let i = 0; i < eformBrief.length; i++) {
            if(eformBrief[i].type == "radio" && eformBrief[i].name == "domain"){
                for (let o = 0; o < opDomain.length; o++) {
                    if (opDomain[o].checked) {
                        resDomain = true;
                        break;
                    }
                }
    
                if (resDomain == false) {
                    eformBrief[i].parentNode.className = eformBrief[i].parentNode.className + " error";
                    console.log('The domain field is incomplete');
                    return false;
                } else {
                    eformBrief[i].parentNode.className = eformBrief[i].parentNode.className.replace(" error", "");
                    return true;
                }
            }
        }


        let opHosting = document.getElementsByName('hosting'),
            resHosting = false;
    
        for (let i = 0; i < eformBrief.length; i++) {
            if(eformBrief[i].type == "radio" && eformBrief[i].name == "hosting"){
                for (let o = 0; o < opHosting.length; o++) {
                    if (opHosting[o].checked) {
                        resHosting = true;
                        break;
                    }
                }
    
                if (resHosting == false) {
                    eformBrief[i].parentNode.className = eformBrief[i].parentNode.className + " error";
                    console.log('The hosting field is incomplete');
                    return false;
                } else {
                    eformBrief[i].parentNode.className = eformBrief[i].parentNode.className.replace(" error", "");
                    return true;
                }
            }
        }

        let opContent = document.getElementsByName('content'),
            resContent = false;
    
        for (let i = 0; i < eformBrief.length; i++) {
            if(eformBrief[i].type == "radio" && eformBrief[i].name == "content"){
                for (let o = 0; o < opContent.length; o++) {
                    if (opContent[o].checked) {
                        resContent = true;
                        break;
                    }
                }
    
                if (resContent == false) {
                    eformBrief[i].parentNode.className = eformBrief[i].parentNode.className + " error";
                    console.log('The content field is incomplete');
                    return false;
                } else {
                    eformBrief[i].parentNode.className = eformBrief[i].parentNode.className.replace(" error", "");
                    return true;
                }
            }
        }

    };
    
    
    

    
    let focusInput = function(){
        this.parentElement.children[1].className = "label active";
        this.parentElement.children[0].className = this.parentElement.children[0].className.replace("error", "");
    };
    
    let blurInput = function(){
        if (this.value <= 0) {
            this.parentElement.children[1].className = "label";
            this.parentElement.children[0].className = this.parentElement.children[0].className + " error";
        }
    };
        
    for (let i = 0; i < eformBrief.length; i++) {
        if (eformBrief[i].type == "text" || eformBrief[i].type == "number" || eformBrief[i].type == "email" || eformBrief[i].type == "textarea") {
            eformBrief[i].addEventListener("focus", focusInput);
            eformBrief[i].addEventListener("blur", blurInput);
        }
    } 



}