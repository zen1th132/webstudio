function calculate () {
    let numPages = parseInt(document.getElementById("pages").value);
    let siteType = document.getElementById("siteType").value;
    let mobileVersion = document.getElementById("mobileVersion").checked;

    let basePrice = 100;

    if(siteType === "advanced") {
        basePrice += 200;
    } else if (siteType === "ecommerce") {
        basePrice += 400;
    }

    if(mobileVersion) {
        basePrice += 100;
    }

    let result = basePrice + numPages;

    document.getElementById("results").innerHTML = result;
}