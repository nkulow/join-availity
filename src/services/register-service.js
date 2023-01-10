export async function createAccount(formData) {
    try {
        if (formData) {
            alert(`Success:\n ${JSON.stringify(formData, null, 2)}`);
        } else {
            alert('Unable to create account.');
        }
    }
    catch(e) {
        alert('Error:', e);
    }
}