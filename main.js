function onClickFunction()
{
    // http://localhost:3000/artiklar
    fetch('http://localhost:3000/artiklar')
        .then(response => response.text())
        .then(data => document.getElementById('text').innerHTML = data);
    
}

document.getElementById('fetchButton').onclick = onClickFunction;

