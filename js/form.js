
    document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault();

		const formData = new FormData(this);

		let formObject = {};
		formData.forEach((value, key) => {
			formObject[key] = value;
		});


const jsonOutput = JSON.stringify(formObject, null, 2);
document.getElementById('jsonOutput').textContent = jsonOutput;

		
        fetch("/url")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                alert("Данные успешно отправлены");
            })
            .catch(error => {
                alert("Произошла ошибка при отправке данных: " + error.message);
            });
    });