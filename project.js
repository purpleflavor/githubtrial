function verify(){
    let name = prompt("What is your name?");
    let email = prompt("What is your email address?");
    if (name.length >0){
        alert("Hello" + " " + name + ", welcome to Shalom Pastries");
    } else {
        alert("Thank you," + name + "for your order. We will get in touch for your delivery options.");
    }
    let button = document.querySelector("button");
    button.addEventListener("click", verify);
}