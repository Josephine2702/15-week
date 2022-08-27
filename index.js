
const mainForm = document.forms.main
const formName = mainForm.formUsername
const formEmail = mainForm.formEmail
const formPass = mainForm.formPassword
const formRep = mainForm.formRepeat


document.querySelector('.register__btn').onclick =
function check() {
    let userName = document.querySelector('#username');
    let userEmail = document.querySelector('#email');
    let userPassword = document.querySelector('#password');
    let userRepeat = document.querySelector('#repeat');
    document.querySelector('.errorName').innerHTML = "";
    document.querySelector('.errorEmail').innerHTML = "";
    document.querySelector('.errorPass').innerHTML = "";
    document.querySelector('.errorRep').innerHTML = "";

    
    if (userName.value == ''){
        document.querySelector('.errorName').innerHTML += "Ведите имя"
    };
    
    if (userEmail.value == ''){
    document.querySelector('.errorEmail').innerHTML += "Ведите email"
};

    if (userPassword.value == ''){
    document.querySelector('.errorPass').innerHTML += "Ведите пароль"}


    else if (userPassword.value.length <= 6){
    document.querySelector('.errorPass')
    .innerHTML += "Ваш пароль слишком короткий"};

    if (userRepeat.value == ''){
    document.querySelector('.errorRep').innerHTML += "Проверьте пароль"};


    }
    

    const name = document.querySelector('#username')
formName.addEventListener("focus", function (event) {
    if (formName.nextElementSibling){
        formName.nextElementSibling.remove()
    }
});

const email = document.querySelector('#email')
formEmail.addEventListener("focus", function (event) {
    if (formEmail.nextElementSibling){
        formEmail.nextElementSibling.remove()
    }
});

const pass = document.querySelector('#password')
formPass.addEventListener("focus", function (event) {
    if (formPass.nextElementSibling){
        formPass.nextElementSibling.remove()
    }
});

const rep = document.querySelector('#repeat')
formRep.addEventListener("focus", function (event) {
    if (formRep.nextElementSibling){
        formRep.nextElementSibling.remove()
    }
});



    //смена цветовой схемы

    const lightColor = ["#f3f5c2"];
    const headerLightColor = [" rgb(184, 255, 112)"];
    const darkColor =["#5e5e5e"]
    const headerDarkColor = [" #4b3758"];
    const blueColor = ["#344ef7"];
    const headerBlueColor = [" #93b3e5"];
    let mainHeader = document.querySelector('.header')
    let colorForm = document.querySelector('.register__form')
    let colorBtn = document.querySelector('.styleBtn')



    document.querySelector('#type').onchange = function changeTheme(){
        if (document.querySelector('#type').value == "light"){
            document.body.style.background = lightColor;
            mainHeader.style.backgroundColor = headerLightColor;
            colorForm.style.backgroundColor = headerLightColor;
            colorBtn.style.backgroundColor = lightColor;
        }

        else if (document.querySelector('#type').value == "dark"){
            document.body.style.background = darkColor;
            mainHeader.style.backgroundColor = headerDarkColor;
            colorForm.style.backgroundColor = headerDarkColor;
            colorBtn.style.backgroundColor = darkColor;
        }

        else if (document.querySelector('#type').value == "blue"){
            document.body.style.background = blueColor;
            mainHeader.style.backgroundColor = headerBlueColor;
            colorForm.style.backgroundColor = headerBlueColor;
            colorBtn.style.backgroundColor = blueColor;
        }
    }