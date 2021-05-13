const inputRef = document.querySelector('#name-input');

const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', () => 
(outputRef.textContent = inputRef.value.length > 0 ? inputRef.value : 'незнакомец')); //атрибут инпута, виводит значение в поле Незнакомец//