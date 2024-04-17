document.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelectorAll('.modal');
    const instances = M.Modal.init(element);

    // To Handle form submission
    document.getElementById('myForm').addEventListener('submit', (e) => {
        e.preventDefault();        

        const formData = new FormData(e.target);
        const formObject = {};

        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        console.log(formObject);
        e.target.reset(); 
    });
});

document.addEventListener('DOMContentLoaded', () => {
    loadForms();
});

//To fetch data from database and add cards to HTML page dynamically.
function loadForms() {
    fetch('/forms')
        .then(response => response.json())
        .then(forms => {
            const cardContainer = document.getElementById('cardContainer');
            forms.forEach(form => {
                cardContainer.innerHTML += `
                    <div class="col s12 m4">
                        <div class="small card">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator" src="images/${form.car}.jpg" height="180px">
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4"><p>Hi this is</p> ${form.car}</span>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">${form.car}<i class="material-icons right">close</i></span>
                                <p>Hello!</p>
                                <p>I am ${form.car}. I am the most luxurious car.</p>
                            </div>
                        </div>
                    </div>
                `;
            });
        })
        .catch(error => console.error('Error loading forms:', error));
}

document.getElementById('myForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const formObject = {};

    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formObject)
    })
    .then(response => {
        if (response.ok) {
            console.log('Form submitted successfully'); //success message
            loadForms(); 
            e.target.reset();
        } else {
            console.error('Form submission failed'); //failure message
        }
    })
    .catch(error => console.error('Error submitting form:', error));
});
