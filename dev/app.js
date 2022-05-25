'use strict';

const switcher = document.querySelector('.btn'); // button reference \\
//  event handler for the click event. In the following code, you add a listener for the click event and define an event handler function to be executed by the browser when the click event occurs.\\
switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme'); 
        // The toggle method automatically adds or removes the light-theme and dark-theme classes
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
if(className == "light-theme") {
    this.textContent = "Dark";
} else {
    this.textContent = "Light";
}

    console.log('current class name:' + className);
}); 

