function submitComplaint() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const complaint = document.getElementById('complaint').value;

    // Perform additional validation if needed

    const datetimesetter = document.getElementById("datetime");
    function updateDateTime() {
      const now = new Date();
      // get the current date and time as a string
      const currentDateTime = now.toLocaleString();
      datetimesetter.textContent = currentDateTime;
    }
    setInterval(updateDateTime, 1000);

    // Send data to the server (back-end)
    fetch('/submitComplaint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, complaint }),
    })
    .then(response => response.json())
    .then(data => {
        alert('Complaint submitted successfully!');
        // You can redirect or perform other actions as needed
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error submitting complaint. Please try again later.');
    });
}
var config = {
    cUrl: 'https://api.countrystatecity.in/v1/countries',
    ckey: 'NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA=='
}

var countrySelect = document.getElementById('country');
var stateSelect = document.getElementById('state');
var districtSelect = document.getElementById('district');

function loadCountries() {
    fetch(config.cUrl, { headers: { "X-CSCAPI-KEY": config.ckey } })
        .then(response => response.json())
        .then(data => {
            data.forEach(country => {
                const option = document.createElement('option');
                option.value = country.iso2;
                option.textContent = country.name;
                countrySelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error loading countries:', error));
}

function loadStates() {
    stateSelect.disabled = false;
    districtSelect.disabled = true;
    stateSelect.innerHTML = '<option value="">Select State</option>';

    const selectedCountryCode = countrySelect.value;

    fetch(`${config.cUrl}/${selectedCountryCode}/states`, { headers: { "X-CSCAPI-KEY": config.ckey } })
        .then(response => response.json())
        .then(data => {
            data.forEach(state => {
                const option = document.createElement('option');
                option.value = state.state_code;
                option.textContent = state.name;
                stateSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error loading states:', error));
}

function loadDistricts() {
    districtSelect.disabled = false;
    districtSelect.innerHTML = '<option value="">Select District</option>';

    const selectedCountryCode = countrySelect.value;
    const selectedStateCode = stateSelect.value;

    fetch(`${config.cUrl}/${selectedCountryCode}/states/${selectedStateCode}/districts`, { headers: { "X-CSCAPI-KEY": config.ckey } })
        .then(response => response.json())
        .then(data => {
            data.forEach(district => {
                const option = document.createElement('option');
                option.value = district.district_code;
                option.textContent = district.name;
                districtSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error loading districts:', error));
}

function submitComplaint() {
    const name = document.getElementById('name').value;
    const country = countrySelect.options[countrySelect.selectedIndex].text;
    const state = stateSelect.options[stateSelect.selectedIndex].text;
    const district = districtSelect.options[districtSelect.selectedIndex].text;

    alert(`Complaint submitted:\nName: ${name}\nCountry: ${country}\nState: ${state}\nDistrict: ${district}`);
}

window.onload = loadCountries;

