let form = document.getElementById('packageForm');
let errorMessage = document.getElementById('errorMessage');
let nameText = document.getElementsByName('package[status]').values;
let trackingText = document.getElementsByTagName('package[tracking]').values;

form.addEventListener('click', (event) => {
    errorMessage.textContent = '';
    console.log('statusText: ' + nameText);
    console.log('trackingText' + trackingText);
    if (nameText.length == 0 || trackingText.length == 0) {
        errorMessage.innerHTML = "Nickname and Tracking Number Can NOT Be Blank!";
    }
});