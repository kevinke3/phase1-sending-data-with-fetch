
function submitData(name, email) {
    const formData = {
      name: name,
      email: email
    };
  
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
  
    return fetch('http://localhost:3000/users', configObj)
      .then(response => response.json())
      .then(data => {
        appendIdToDOM(data.id);
      })
      .catch(error => {
        appendErrorToDOM(error.message);
      });
  }
  
  function appendIdToDOM(id) {
    const body = document.querySelector('body');
    const p = document.createElement('p');
    p.textContent = `New ID: ${id}`;
    body.appendChild(p);
  }
  
  function appendErrorToDOM(errorMessage) {
    const body = document.querySelector('body');
    const p = document.createElement('p');
    p.textContent = `Error: ${errorMessage}`;
    body.appendChild(p);
  }
  