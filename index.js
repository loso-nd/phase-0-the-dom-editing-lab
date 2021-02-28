const sect = document.querySelector('section');
const body = document.querySelector('body');

const div = document.createElement('div');
const para = document.createElement('p');
const p = document.createElement('p')
const h1 = document.createElement('h1')

// Manipulating elements on the page
h1.textContent = "My Html adventure"
para.textContent = 'We hope you enjoyed the ride.';
p.textContent = 'Are you on the page or nah';

// Append the elements onto the page
sect.appendChild(h1);
sect.appendChild(para);
body.appendChild(div)
div.appendChild(p);
