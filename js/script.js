const listElement = document.getElementById('list-email');
const btnElement = document.querySelector('.btn');
const numEmails = 10;

generateEmails(numEmails);

btnElement.addEventListener('click', () => {
    listElement.innerHTML = '';
    generateEmails(numEmails);
});










// Functions

function generateEmails(num) {
    for (let i = 0; i < num; i++) {
        createEmail();
    }
}

function createEmail() {
    let endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';
    axios.get(endpoint)
        .then(response => {
            const result = response.data;
            let email = result.response;
            renderHTML(listElement, email);
        });
}

function renderHTML(parent, elements) {
    let liElement = document.createElement('li');
    liElement.classList.add('list-group-item');
    liElement.classList.add('p-4');
    liElement.innerText = elements;
    parent.appendChild(liElement);
}
