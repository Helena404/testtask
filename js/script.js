    alert("Привет, мир");

    document.querySelector(".btn-warning").addEventListener("click", function() {
		document.querySelector(".row-1").classList.toggle('hidden');
    });


	//через css св-во order
    document.getElementById('swapButton').addEventListener("click", function() {
        const block2 = document.querySelector(".block-2");
        const block3 = document.querySelector(".block-3");

		block2.classList.toggle('order-1');
		block2.classList.toggle('order-2');
		block3.classList.toggle('order-1');
		block3.classList.toggle('order-2');
    });
