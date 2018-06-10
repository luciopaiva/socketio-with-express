
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
    document.getElementById("random-number").innerText = await ajax("/random");
}

main();
