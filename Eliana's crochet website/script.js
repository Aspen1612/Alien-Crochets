function orderProduct(productName, price) {

    const phoneNumber = "2348124883473";

    const message =
        "Hi! I would like to order the " +
        productName +
        " (" +
        price +
        ").";

    const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
}