
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


