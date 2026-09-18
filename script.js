function searchPackage() {

    let name = document.getElementById("packageName").value;
    let result = document.getElementById("result");

    if (name === "") {
        result.innerHTML = "<p>Please enter a package name.</p>";
        return;
    }

    result.innerHTML = `
        <h2>${name}</h2>
        <p><b>Package:</b> ${name}</p>
        <p><b>Status:</b> NPM Package</p>
        <p>This is a simple NPM Package Explorer.</p>
    `;
}