import { 
  patientName, img, dob, gender, genderIcon, contact, eContact, 
  insurance, systolicValue, systolicLevel, diastolicValue, diastolicLevel,
  rrValue, rrLevel, tempValue, tempLevel, hrValue, 
  hrLevel, hrLevelIcon, diagnosesContainer, labResultsContainer,
  patientsList, diastolicLevelIcon, systolicLevelIcon,
  dropdownContainer, chartButtonP
} from './variables.js';

let chartInstance = null;
let fullBPChartData = [];

export function fillPatientInfo(patient) {
  patientName.innerHTML = patient.name;
  img.setAttribute('src', patient.profile_picture);
  
  if (patient.date_of_birth.includes('-')) {
    const [year, month, day] = patient.date_of_birth.toString().split('-');
    const formattedDob = `${month.padStart(2, '0')}/${day.padStart(2, '0')}/${year}`;
    dob.innerHTML = formattedDob;
  } else if (patient.date_of_birth.includes('/')) {
    dob.innerHTML = patient.date_of_birth;
  }
  
  gender.innerHTML = patient.gender;
  if (patient.gender === 'Female') {
      genderIcon.setAttribute('src', 'images/FemaleIcon.svg');
  } else {
      genderIcon.setAttribute('src', 'images/MaleIcon.svg');
  }
  contact.innerHTML = patient.phone_number;
  eContact.innerHTML = patient.emergency_contact;
  insurance.innerHTML = patient.insurance_type;
}

export function fillDiagnosisHistory(patient) {
  fillBPchart(patient);
  
  let patientVitals = patient.diagnosis_history[0];

  systolicValue.innerHTML = patientVitals.blood_pressure.systolic.value;
  systolicLevel.innerHTML = patientVitals.blood_pressure.systolic.levels;
  systolicLevelIcon.setAttribute('src', getLevelIcon(patientVitals.blood_pressure.systolic.levels));

  diastolicValue.innerHTML = patientVitals.blood_pressure.diastolic.value;
  diastolicLevel.innerHTML = patientVitals.blood_pressure.diastolic.levels;
  diastolicLevelIcon.setAttribute('src', getLevelIcon(patientVitals.blood_pressure.diastolic.levels));

  rrValue.innerHTML = patientVitals.respiratory_rate.value;
  rrLevel.innerHTML = patientVitals.respiratory_rate.levels;
  tempValue.innerHTML = patientVitals.temperature.value;
  tempLevel.innerHTML = patientVitals.temperature.levels;
  hrValue.innerHTML = patientVitals.heart_rate.value;
  hrLevel.innerHTML = patientVitals.heart_rate.levels;
  hrLevelIcon.setAttribute('src', getLevelIcon(patientVitals.heart_rate.levels));
}

function getLevelIcon(level) {
  switch (level) {
    case 'Lower than Average':
      return 'images/ArrowDown.svg';
    case 'Normal':
      return 'images/check.png';
    case 'Higher than Average':
      return 'images/ArrowUp.svg';
  }
}

export function fillLabResults(patient) {
  let patientLabResults = patient.lab_results;
  labResultsContainer.innerHTML = '';
  for (let i=0; i < patientLabResults.length; i++) {
    labResultsContainer.innerHTML += `
      <li>
          <p class="result">${patientLabResults[i]}</p>
          <button>
              <img src="images/download_FILL0_wght300_GRAD0_opsz24 (1).svg">
          </button>
      </li>
    `;
  }
}

export function fillDiagnosticList(patient) {
  let patientDiagnoses = patient.diagnostic_list;
  diagnosesContainer.innerHTML = '';
  for (let i=0; i < patientDiagnoses.length; i++) {
    diagnosesContainer.innerHTML += `
      <div class="diagnosis">${patientDiagnoses[i].name}</div>
      <div class="description">${patientDiagnoses[i].description}</div>
      <div class="status">${patientDiagnoses[i].status}</div>
    `;
  }
}

export function fillPatientsList(allPatientsData) {
  for (let i = 0; i < allPatientsData.length; i++) {
    patientsList.innerHTML += `
      <li class="patients-li">
        <img src="${allPatientsData[i].profile_picture}">
        <div class="patients-list-info">
            <p class="patient-name">${allPatientsData[i].name}</p>
            <p>${allPatientsData[i].gender}, ${allPatientsData[i].age}</p>
        </div>
        <button>
          <img src="images/more_horiz_FILL0_wght300_GRAD0_opsz24.svg">
        </button>
      </li>
    `;
  }
}

function highlightActivePatient(patient) {
  const patientListItems = patientsList.querySelectorAll('li');
  patientListItems.forEach(li => {
    li.classList.remove('active-patient');
  });
  const activePatientLI = Array.from(patientListItems).find(li => li.querySelector('p.patient-name').textContent === patient.name);
  activePatientLI.classList.add('active-patient');
}

export function inputPatientData(patientData) {
  let patient = patientData;
  fillPatientInfo(patient);
  fillDiagnosisHistory(patient);  
  fillLabResults(patient);
  fillDiagnosticList(patient);
  highlightActivePatient(patient);
}

export function addPatientListEventListener(allPatientsData) {
  patientsList.addEventListener('click', (event) => {
    let selectedPatientLI = event.target.closest('li');
    let selectedPatientP = selectedPatientLI.querySelector('.patient-name');
    let selectedPatientName = selectedPatientP.textContent.trim();
    let selectedPatientData = allPatientsData.find(patient => patient.name === selectedPatientName);
    inputPatientData(selectedPatientData);
  })
}

export function toggleDropdown(shouldShow) {
  dropdownContainer.style.display = shouldShow ? 'flex' : 'none';
}

export function handleClickOutsideDropdown(event) {
  if (!dropdownContainer.contains(event.target)) {
    toggleDropdown(false);
  }
}

export function handleDropdownButtonClick(event) {
  const buttonClicked = event.target.closest('.dropdown-button');
  const textContent = buttonClicked.textContent;
  chartButtonP.textContent = textContent;
  if (textContent === 'All available data') {
    updateChartData(fullBPChartData.length);
  } else {
    const numberOfMonths = parseInt(textContent.match(/\d+/)[0], 10);
    updateChartData(numberOfMonths);
  }
  toggleDropdown(false);
}

export function fillBPchart(patient) {
  fullBPChartData = patient.diagnosis_history.map(record => ({
    month: `${record.month} ${record.year}`,
    systolic: record.blood_pressure.systolic.value,
    diastolic: record.blood_pressure.diastolic.value
  }))
  .reverse();

  createChart(fullBPChartData);

  chartButtonP.textContent = 'All available data';

  dropdownContainer.innerHTML = `
    <button class="dropdown-button">All available data</button>
  `;

  const monthsAvailable = patient.diagnosis_history.length;
  const maxMonths = Math.min(monthsAvailable, 13);

  for (let i = 3; i < maxMonths; i += 3) {
    dropdownContainer.innerHTML += `
      <button class="dropdown-button">Last ${i} months</button>
    `;
  }
}

export function updateChartData(numberOfMonths) {
  const totalMonthsAvailable = fullBPChartData.length;
  const startIndex = Math.max(totalMonthsAvailable - numberOfMonths, 0);
  const filteredData = fullBPChartData.slice(startIndex);
  createChart(filteredData);
}

export function createChart(chartData) {
  if (chartInstance) {
    chartInstance.destroy();
  }

  const bpChartContainer = document.getElementById('bp-chart');

  chartInstance = new Chart(bpChartContainer, {
    type: 'line',
    data: {
        labels: chartData.map(row => {
          const [month, year] = row.month.split(' ');
          return `${month.slice(0,3)} ${year}`;
        }),
        datasets: [
        {
          label: 'Systolic',
          data: chartData.map(row => row.systolic),
          borderColor: '#E66FD2',
          pointBackgroundColor: '#E66FD2',
          pointRadius: 5,
          fill: false,
          tension: 0.5
        },
        {
          label: 'Diastolic',
          data: chartData.map(row => row.diastolic),
          borderColor: '#8C6FE6',
          pointBackgroundColor: '#8C6FE6',
          pointRadius: 5,
          fill: false,
          tension: 0.5
        }
      ]
    },
    options: {
      scales: {
        x: {
            grid: {
                display: false
            },
            ticks: {
              maxRotation: 0,
              minRotation: 0
          }
        }
      },
      animation: false,
      plugins: {
        legend: {
            display: false
        },
        tooltip: {
            enabled: false
        }
      }
    }
  });
}