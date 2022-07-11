const 
    btn_signIn = document.getElementById("signin-button"),
    btn_signUp = document.getElementById("signup-button"),
    Container = document.getElementById("container"),
    SignIn_form = document.getElementById("SignIn-form"),
    SignUp_form = document.getElementById("SignUp_form");
    
    btn_signUp.addEventListener('click',()=>{
        Container.classList.add("sign-up-mode");
    })

    btn_signIn.addEventListener('click',()=>{
        Container.classList.remove("sign-up-mode");
    })

    SignIn_form.addEventListener('click',()=>{
        document.querySelector(".signin-signup").classList.remove("hidden-form");
        document.querySelector(".signup-signup").classList.add("hidden-form");
    })

    SignUp_form.addEventListener('click',()=>{
        document.querySelector(".signup-signup").classList.remove("hidden-form");
        document.querySelector(".signin-signup").classList.add("hidden-form");
    })