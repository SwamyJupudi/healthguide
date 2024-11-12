document.getElementById('healthForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const age = parseFloat(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    
    const bmi = calculateBMI(weight, height);
    const result = getBMICategory(bmi);
    
    showResult(bmi, result);
});

function calculateBMI(weight, height) {
    return (weight / (height * height)).toFixed(1);
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return {
            category: 'Underweight☹️',
            message: 'Your BMI indicates you\'re underweight. Follow our health guide for better health care.',
            image: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXQ3cWRmcnJxdTA4cnhsanJ0dXplZHNxMWgxcGttZWltemlqbmVjbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kRMiBelBeUkuJ7HLtt/giphy.webp' 

        };
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return {
            category: 'Normal Weight😄',
            message: 'Congratulations! Your BMI is in the healthy range. Keep maintaining your balanced diet and regular exercise routine.',
            image: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXJqc2VvdXMzYzE4dTR3d21tdWp3MnRub2h1NGJkd2NrOXhxM3RidCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/gnI3EdRuzrL3StP0Iz/giphy.webp'
        };
    } else if (bmi >= 25 && bmi < 29.9) {
        return {
            category: 'Overweight☹️',
            message: 'Your BMI indicates you\'re overweight. Follow our health guide for better health care.',
            image: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDQ2Z2sxOXp2cXJwMml4MWd3eGp1ejcyMGtydmR2ZndsZW13ZXJoNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MnWTL6gmC0h1383aMo/giphy.webp'
        };
    } else {
        return {
            category: 'Obese☹️',
            message: 'Your BMI indicates obesity. Follow our health guide for better health care.',
            image: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDB2aWM4YmxhMzM0NXh5OWRwOThtNmQxN3NrNm9jZTB3eGJsb2x3OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WDJXkQupkNrXrC5kmc/giphy.webp'
        };
    }
}

function showResult(bmi, result) {
    const modal = document.getElementById('resultModal');
    const resultContent = document.getElementById('resultContent');
    
    resultContent.innerHTML = `
        <div class="result-card">
            <img src="${result.image}" alt="${result.category}">
            <h3>${result.category}</h3>
            <div class="bmi-value">BMI: ${bmi}</div>
            <p>${result.message}</p>
        </div>
    `;
    
    modal.style.display = 'block';
}

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('resultModal').style.display = 'none';
});

window.addEventListener('click', (e) => {
    const modal = document.getElementById('resultModal');
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});