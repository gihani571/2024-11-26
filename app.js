let productTable = document.getElementById("productTable");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    
    let body = "";
    body = `<tr>
                <th>Category</th>
                <th>Title</th>
                <th>Price</th>
                <th>Image</th>
                </tr>`;

    data.forEach((element) => {
      body += ` 

                 <tr>
                     <td>${element.category}</td>
                     <td>${element.title}</td>
                       <td>${element.price}</td>
                        <td><img src=${element.image} width="20%" height="20%" alt=""></td>
                 </tr> `;
    });

    document.getElementById("productTable").innerHTML = body;
  });
