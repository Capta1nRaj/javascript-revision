const form = document.getElementById("bmi-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.getElementById("results");
    const bmiWeight = (weight / (Math.pow(height, 2) / 10000)).toFixed(2);


    if (!height || isNaN(height) || height < 0) {
        return results.innerHTML = `Please give a valid height ${height}`;
    }

    if (!weight || isNaN(weight) || weight < 0) {
        return results.innerHTML = `Please give a valid weight ${weight}`;
    }


    if (isNaN(bmiWeight) || bmiWeight < 0) {
        return results.innerHTML = `Please give a valid height ${height} and weight ${weight}.`;
    } else if (bmiWeight < 18.6) {
        return results.innerHTML = `Your BMI is ${bmiWeight} and you are underweight.`;
    } else if (bmiWeight >= 18.6 && bmiWeight <= 24.9) {
        return results.innerHTML = `Your BMI is ${bmiWeight} and you are normal.`;
    } else {
        return results.innerHTML = `Your BMI is ${bmiWeight} and you are overweight.`;
    }
});
