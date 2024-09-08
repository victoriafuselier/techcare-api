import { chartButton, dropdownContainer } from './variables.js';
import { toggleDropdown, handleClickOutsideDropdown, handleDropdownButtonClick } from './functions.js';

chartButton.addEventListener('click', (event) => {
  event.stopPropagation();
  if (chartButton.contains(event.target)) {
    toggleDropdown(true);
  }
});

dropdownContainer.addEventListener('click', handleDropdownButtonClick);

document.addEventListener('click', handleClickOutsideDropdown);

