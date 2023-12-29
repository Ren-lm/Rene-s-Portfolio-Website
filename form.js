function handleFormSubmit() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if(name && email && message) {
        window.open(`mailto:rl.myrie2@gmail.com?subject=Contact from ${name}&body=${message}`);

        // Display a fallback message
        alert("If your email client did not open, please send your message to rl.myrie2@gmail.com directly.");
    } else {
        alert("Please fill all the fields.");
    }
}
