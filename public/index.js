
async function ajax(url) {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener("load", function () {
            try {
                resolve(this.responseText);
            } catch (error) {
                reject(error);
            }
        });
        request.open("GET", url);
        request.send();
        request.addEventListener("error", reject)
    });
}

/** @returns {void} */
async function main() {
    // call sample API
    document.getElementById("random-number").innerText = await ajax("/random");

    const socket = io();
    socket.on("connect", () => socket.emit("hello", `Hi there! I am ${window.navigator.userAgent}`));

    const secondsElement = document.getElementById("seconds");
    socket.on("seconds", seconds => secondsElement.innerText = seconds.toString());

    const welcomeElement = document.getElementById("welcome");
    socket.on("online", online => onlineElement.innerText = online.toString());

    const onlineElement = document.getElementById("online");
    socket.on("welcome", welcomeMessage => welcomeElement.innerText = welcomeMessage);
}

main();
