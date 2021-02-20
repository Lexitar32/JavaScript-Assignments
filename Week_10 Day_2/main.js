// Styling of Texts
element = document.getElementsByTagName('span')[0].style.color = 'red';

// Multiple Properties styling
// 1. Using CSS Text
let text = document.getElementById('text');

text.style.cssText = `border: 1px solid green;
                      padding: 10px 0;
                      text-align: center;
                      font-weight: bold;
                      font-size: 24px;
                      `;

// 2. Using Class List
let text1 = document.getElementById('text1');

text1.classList.add('my-class');

// 3. Set Attribute
document.getElementById('text').setAttribute('ondblclick', 'deleteElement(event)');

const deleteElement = (e) => {
  if (confirm('Are you sure ypu want to delete this element')) {
    // Get The Element Id
    let elementId = e.target.id;
    // Get the Element 
    let element = document.getElementById(elementId);
    // Get the Parent
    let par = element.parentNode;

    // Remove Child From the Parent
    par.removeChild(element);
  }
}

const fontColorChange = () => {
  colorName = document.getElementById('myColor').value;
  text1.setAttribute('style', `font-size: 30px; color: ${colorName};`);
}