const btnDelete = document.querySelector('.btn-delete');
const modalDelete = document.querySelector('#modal-delete');
const btnAccept = document.querySelector('#btn-accept');
const btnCancel = document.querySelector('#btn-cancel');

function showAlert(element) {
    const text = element.firstElementChild.innerHTML;
    document.getElementById("titulo-in").innerHTML = text;
    modalDelete.classList.toggle("hidden");

    btnAccept.addEventListener('click', event => {
        element.nextElementSibling.submit();
    });
}

btnCancel.addEventListener('click', () => {
    modalDelete.classList.add("hidden");
});