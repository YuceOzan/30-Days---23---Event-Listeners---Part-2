document.addEventListener('keydown', function(event) {
    const keyCode = event.keyCode;

    const outputDiv = document.getElementById('output');
    outputDiv.textContent = `${keyCode}`;
    outputDiv.style.display = 'flex';

    const pressedKey = event.key;

    const formattedKey = /^[a-zA-Z]$/.test(pressedKey) ? pressedKey.toUpperCase() : pressedKey;

    const youPressedSpan = document.createElement('span');
    const pressedKeySpan = document.createElement('span');

    youPressedSpan.textContent = 'You pressed ';
    youPressedSpan.style.color = 'black';

    pressedKeySpan.textContent = formattedKey;
    pressedKeySpan.style.color = 'green';

    const text = document.getElementById('text');
    text.textContent = ''; 

    text.appendChild(youPressedSpan);
    text.appendChild(pressedKeySpan);
});
