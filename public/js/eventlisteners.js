import { chartButton, dropdownContainer } from './variables.js';
import { fillPatientsList, addPatientListEventListener, inputPatientData, toggleDropdown, handleClickOutsideDropdown, handleDropdownButtonClick } from '../../functions.js';

document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/patients')
      .then(response => response.json())
      .then(allPatientsData => {
          fillPatientsList(allPatientsData);
          addPatientListEventListener(allPatientsData);
          const defaultPatientData = allPatientsData[3];
          inputPatientData(defaultPatientData);
      })
      .catch(error => console.warn('Failed to fetch patient data:', error));
});

chartButton.addEventListener('click', (event) => {
  event.stopPropagation();
  if (chartButton.contains(event.target)) {
    toggleDropdown(true);
  }
});

dropdownContainer.addEventListener('click', handleDropdownButtonClick);

document.addEventListener('click', handleClickOutsideDropdown);