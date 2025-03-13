const listElement = document.getElementById('list-email');
const numEmails = 10;

for (let i = 0; i < numEmails; i++) {
    createEmail();
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

