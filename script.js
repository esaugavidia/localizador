function updateClock() {
    const now = new Date();

    const timeElement = document.getElementById("time");
    timeElement.textContent = now.toLocaleTimeString();

    const dateElement = document.getElementById("date");
    dateElement.textContent = now.toLocaleDateString();

    const options = { timeZoneName: "short" };
    const locationElement = document.getElementById("location");
    locationElement.textContent = now.toLocaleString(undefined, options);
}

// Actualiza el reloj cada segundo
setInterval(updateClock, 1000);

// Llama a la función para mostrar la hora inicial
updateClock();