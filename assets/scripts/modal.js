    var modal = document.querySelector(".modal");
    var gameOverModal = document.querySelector(".game-over-modal");
    var trigger = document.querySelector(".trigger");
    var closeButton = document.querySelector(".close-button");
    var modal_content = document.querySelector(".modal-content")
    
    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        } else if(event.target === gameOverModal) {
            gameOverModal.classList.toggle("show-modal");
        }
    }


    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
    
