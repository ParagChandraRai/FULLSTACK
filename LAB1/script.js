function isPhone(phone) {
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, '');
  
  // Check if it's a valid phone number format
  const phonePattern = /^(\d{10}|\d{3}-\d{3}-\d{4}|\d{3} \d{3} \d{4}|\(\d{3}\) \d{3}-\d{4}|\(\d{3}\)\d{3}-\d{4})$/;
  
  // Return true if it's a valid phone number, false otherwise
  return phonePattern.test(digits);
}

const checkButton = document.getElementById('check-button');
const phoneInput = document.getElementById('phone-input');
const resultDiv = document.getElementById('result');

checkButton.addEventListener('click', () => {
	const phone = phoneInput.value;
	if (isPhone(phone)) {
		resultDiv.innerHTML = 'Valid phone number!';
	} else {
		resultDiv.innerHTML = 'Invalid phone number!';
	}
});
