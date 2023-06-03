let inquire = document.getElementById("toBottom");

function toBottom(){
    document.body.scrollIntoView(false);
    document.documentElement.scrollHeight(false);
}

const form = document.querySelector('form');
const submitSuccess = document.querySelector('#submit_successful');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitSuccess.classList.add('show');
    setTimeout(() => form.submit(), 2000);
});
