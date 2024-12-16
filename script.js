function checkPalindrome() {
    const input = document.getElementById('palindromeInput').value;
    const reversed = input.split('').reverse().join('');
    const result = input === reversed ? 'is a palindrome!' : 'is not a palindrome!';
    document.getElementById('palindromeResult').innerText = `"${input}" ${result}`;
}

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    if (!name || !email || !age) {
        alert('All fields are required!');
        return false;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert('Please enter a valid email.');
        return false;
    }

    alert('Form submitted successfully!');
    return true;
}
