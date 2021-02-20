// const appendImage = () => {
//   const element = document.getElementById('img1');
//   let container = document.getElementById('parentCont');
//   container.appendChild(element);
// }

dropAble = (e) => {
  e.preventDefault();
}

drag = (e) => {
  e.dataTransfer.setData('ID', e.target.id);
}

const drop = (e) => {
  // Get Element ID
  // elementId = e.target.id;

  // Get Element to be dragged by ID
  data = e.dataTransfer.getData('ID')
  element = document.getElementById(data);

  newElement = document.createElement('img');
  newElement.src = element.src;

  // Get Element to be dragged to by ID
  // container = document.getElementById('parentCont');

  // Append the element to the container
  e.target.appendChild(element);
}

// const appendImage = (e) => {
//   elementId = e.target.id
//   elementTagName = e.target.tagName

//   element = document.getElementById(elementId);
//   container = document.getElementById('parentCont');
//   container.appendChild(element);
// }