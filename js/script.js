document.addEventListener("DOMContentLoaded", function() {
    alert("Привет, мир");

    let isHeaderVisible = true;
    let isSwapped = false;

    document.querySelector(".btn-warning").addEventListener("click", function() {
        const block1 = document.querySelector(".block-1");
        if (isHeaderVisible) {
            block1.style.display = "none";
        } else {
            block1.style.display = "block";
        }
        isHeaderVisible = !isHeaderVisible;
    });

    document.querySelector(".btn-success").addEventListener("click", function() {
        const block2 = document.querySelector(".block-2");
        const block3 = document.querySelector(".block-3");
        const parent = block2.parentNode;

        if (isSwapped) {
            parent.insertBefore(block2, block3);
        } else {
            parent.insertBefore(block3, block2);
        }
        isSwapped = !isSwapped;
    });
});
