// Reference to the call-to-action button
const openButtonRefVar = document.querySelector('#runSpeedTestButton');

// Reference to the close dialog button
const closeButtonRefVar = document.querySelector('#closeDialogButton');

// Reference to the dialog element
const modalDialogRefVar = document.querySelector('#emailDialog');


// Adding event listener to the open button
openButtonRefVar.addEventListener("click", openModal);

// Adding event listener to the close button
closeButtonRefVar.addEventListener("click", closeModal);



// Event handler function to open the modal
function openModal(e) {
    modalDialogRefVar.showModal(); // Opens the dialog
}

// Event handler function to close the modal
function closeModal(e) {
    modalDialogRefVar.close(); // Closes the dialog
}


