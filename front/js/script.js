//Appel de l'API pour recevoir et insérer les produits dans le html avec une boucle for in.
let api = "http://localhost:3000/api/products";
fetch(api)
  .then(function (reponse) {
    if (reponse.ok) {
      return reponse.json();
    }
  })
  .then(function (value) {
    let items = document.getElementById("items");
    let content = "";
    for (i in value) {
      content +=
        '<a href="./product.html?id=' +
        value[i]._id +
        '"><article><img src=' +
        value[i].imageUrl +
        " alt=" +
        value[i].altTxt +
        '/><h3 class="productName">' +
        value[i].name +
        '</h3><p class="productDescription">' +
        value[i].description +
        "</p></article></a>";
      // console.log(i);
    }
    items.innerHTML = content;
  })
  .catch(function (err) {
    alert("Imposible d'afficher les produits !");
    console.log(err);
  });
