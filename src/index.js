import _ from 'lodash';
import '../dist/style.css';

function component(){
  var element = document.createElement('div');
  
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  
  return element
}

document.body.appendChild(component());