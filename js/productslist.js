$().ready(function () {

    var url = "http://localhost:8080/Products/List";

    $.getJSON(url)
        .then(function(products) {
            console.log(products);
            render(products);
        });   
});

function render(products) {
    var tbody = $("#tbody");
    // var products = products;   
    tbody.empty();
    for(var product of products) {
        var row = "<tr>";
        row += "<td>" + product.id + "</td>";
        row += "<td>" + product.name + "</td>";
        row += "<td>" + product.price + "</td>";
        row += "<td>" + product.vendor.name + "</td>";
        row += "</tr>";

        tbody.append(row);
    }

}