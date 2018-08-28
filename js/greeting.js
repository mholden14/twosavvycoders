var WelcomeUser = function WelcomeUser(){
    var userName = prompt('Whats Your Name?');

    if(userName === ''){
        WelcomeUser();
    }
    else{
        userName = prompt('Welcome to My Portolio Page' + userName);
    }
};

WelcomeUser();