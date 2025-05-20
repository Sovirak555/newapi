fetch("https://fakestoreapi.com/products").then((data)=>{
    // console.log(data); json format
    return data.json();
}).then((objectData)=>{
   // console.log(objectData);
   console.log(objectData[0].title);
   let tableData="";
   objectData.map((values)=>{
       tableData+=`<tr>
       <td>[${values.id}] - ${values.title} <br> Rating:${values.rating.rate}</td>
       <td>${values.description}</td>
       <td>${values.price}</td>
       <td><img src="${values.image}"/></td>
       <td>${values.rating.rate}</td>
   </tr>`;
   });
   document.getElementById("table_body").innerHTML=tableData;
})