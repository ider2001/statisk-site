console.log("show site");

const id = 1528;
const produktUrl = "https://kea-alt-del.dk/t7/api/products/" + id;
const productcontainer = document.querySelector(".category_list_container");

console.log("produkt:", produktUrl);

function getData() {
  fetch(produktUrl).then((res) => res.json().then((data) => show(data)));
}
getData(); // Kalder funktionen getData

function show(data) {
  console.log("show data er", data);

  productcontainer.innerHTML = `

    <article class="sold_out">
        <img
          src="https://kea-alt-del.dk/t7/images/webp/640/1543.webp"
          id="udsolgt"
          alt="placeholder"
        />
        <div class="udsolgt_tekst">UDSOLGT</div>
        <h4>Puma sko</h4>
        <h5>Puma | sko</h5>
        <p class="pris">250 DKK</p>
        <p>Sort Pumasko med hvis stribe på tvers</p>
      </article>`;
}
