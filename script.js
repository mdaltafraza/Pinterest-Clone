var arr = [
  {
    name: "Petals of roses",
    image:
      "https://images.unsplash.com/photo-1592125661285-79820f2fdf7a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Animals",
    image:
      "https://images.unsplash.com/photo-1474511320723-9a56873867b5?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "City",
    image:
      "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?q=80&w=1380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "planet",
    image:
      "https://images.unsplash.com/photo-1545156521-77bd85671d30?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "orange",
    image:
      "https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "car",
    image:
      "https://images.unsplash.com/photo-1563720223489-bb7691336194?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "car",
    image: 
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "mountain",
    image:
    "https://images.unsplash.com/photo-1600106671593-d244613cd39e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function ShowThecards(text) {
  var clutter = "";
  text.forEach(element => {
         clutter += `<div class="box">
          <img src="${element.image}"alt="na">
          </div>`;
          // console.log("1");
      });
   clutter = document.querySelector(".container").innerHTML = clutter;

}

function handeleSearchFuncion() {
    const input =  document.querySelector("#searchinput");

    // input.addEventListener("focus", function(){
    //     document.querySelector(".overlay").style.display = "block";      
    // });

    // input.addEventListener("blur", function(){
    //     document.querySelector(".overlay").style.display = "none";
    // });

    input.addEventListener("input", function(){
      // if (input.value === "") {
      //   filteredArray = [];
      // }
        const filteredArray = arr.filter(obj => obj.name.toLowerCase("input").startsWith(input.value));
      // console.log(filteredArray);
        ShowThecards(filteredArray);
    })
}
 
handeleSearchFuncion();
