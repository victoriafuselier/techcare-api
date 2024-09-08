import { fillPatientsList, addPatientListEventListener, inputPatientData } from './functions.js';

fetch( 'https://fedskillstest.coalitiontechnologies.workers.dev', {
	headers: {
		'Authorization': `Basic ${btoa(`${process.env.api_username}:${process.env.api_password}`)}`
	}
}).then(response => {
	if (!response.ok) {
		throw new Error(`Network response was not ok: ${response.statusText}`);
	}
	return response.json(); 
}).then(data => {
	const allPatientsData = data;
	fillPatientsList(allPatientsData);
	addPatientListEventListener(allPatientsData);
	const defaultPatientData = allPatientsData[3];
	inputPatientData(defaultPatientData);
}).catch(error => {
	console.warn('Failed to fetch patient data:', error);
});

export function getAllPatientsData() {
  return allPatientsData;
}
