document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = {
            dropdown1: document.getElementById("dropdown1").value,
            dropdown2: document.getElementById("dropdown2").value,
            dropdown3: document.getElementById("dropdown3").value,
            dropdown4: document.getElementById("dropdown4").value,
            dropdown5: document.getElementById("dropdown5").value,
            input1: document.getElementById("input1").value,
            input2: document.getElementById("input2").value
        };

        const jsonString = JSON.stringify(formData, null, 2);
        document.getElementById("jsonOutput").textContent = jsonString;

        const url = '/url-address?' + new URLSearchParams(formData).toString();
		
        fetch(url)
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
});