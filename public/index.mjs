


async function load(){
  var input = document.getElementById("input").value;

const url = `https://hotel-price-aggregator.p.rapidapi.com/search?q=${input}`;

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '74d3fd0551mshab182293526da39p1c1df1jsn35086b144a91',
    'X-RapidAPI-Host': 'hotel-price-aggregator.p.rapidapi.com'
  }
};

 const response = await fetch(url,options);
 const result = await response.json();

 for(var i=0;i<16;i++)
 {
  document.getElementById(`nm${i+1}`).innerText = result[i].shortName+"\n"+result[i].address.address+"\n ID:"+result[i].hotelId;
  show(`b${i+1}`);
 }



}
//   function immg(i){
  
  
//   show(`b${i+1}`);
  
//     var img = new Image(189,160);  
//   img.src = 'photo.jpg';
//   var box${i} =document.getElementById(`imgg${i+1}`);
//   var cc = document.getElementById(`imgg${i+1}`);
//  if(document.getElementById(`imgg${i+1}`)===img)
//   {box.replaceChild(img);}
//   else {box.appendChild(img);} 
  
//  }
function show(b1){
  var x = document.getElementById(`${b1}`);
    x.style.display = "inline-block";
  
}

