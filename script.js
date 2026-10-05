document.addEventListener("DOMContentLoaded", () => {

    const versionElement = document.querySelector(".version strong");

    const deploymentTimes = document.querySelectorAll(".deployment p");

    const currentTime = new Date();

    const formattedTime = currentTime.toLocaleString();

    deploymentTimes.forEach((element, index) => {
        if (index === 0) {
            element.textContent = `Production deployment · ${formattedTime}`;
        }
    });

    console.log("CloudOps Dashboard loaded successfully.");

});
