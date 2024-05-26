    alert("Привет, мир");

    document.querySelector(".btn-warning").addEventListener("click", function() {
		const block1 = document.querySelector(".row-1");
		block1.classList.toggle('hidden');
    });


	//через css св-во order
    document.getElementById('swapButton').addEventListener("click", function() {
        const block2 = document.querySelector(".block-2");
        const block3 = document.querySelector(".block-3");

		if (block2.classList.contains('order-1') && block3.classList.contains('order-2')) {
			block2.classList.replace('order-1', 'order-2');
			block3.classList.replace('order-2', 'order-1');
		} else {
			block2.classList.replace('order-2', 'order-1');
			block3.classList.replace('order-1', 'order-2');
		}
    });
