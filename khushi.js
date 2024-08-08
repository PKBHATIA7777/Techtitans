function savePersonalInfo() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    alert(`Saved: \nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}`);
}
