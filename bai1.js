var phong = [
    {
      id:"1",
      tenPhong : "Phòng Standard (STD)",
      moTa: "Phòng 2 giường đơn",
      gia:"2.000.000",
      anh: "https://www.hoteljob.vn/files/VB2-%E1%BA%A3nh%20HTJ/cac-loai-phong-trong-khach-san-2.jpg"
  
    },
    {
      id:"2",
      tenPhong : "Phòng Superior (SUP)",
      moTa: "Phòng 1 giường đơn",
      gia:"3.000.000",
      anh: "https://www.hoteljob.vn/files/VB2-%E1%BA%A3nh%20HTJ/cac-loai-phong-trong-khach-san-1.jpg"
  
    },
    {
      id:"3",
      tenPhong : "Phòng Deluxe (DLX)",
      moTa: "Phòng 2 giường đơn",
      gia:"2.000.000",
      anh: "https://www.hoteljob.vn/files/VB2-%E1%BA%A3nh%20HTJ/cac-loai-phong-trong-khach-san.jpg"
  
    },
    {
        id:"4",
        tenPhong : "Golden Hotel",
        moTa: "Phòng 2 giường đơn",
        gia:"1.500.000",
        anh: "https://www.hoteljob.vn/files/VB2-%E1%BA%A3nh%20HTJ/cac-loai-phong-trong-khach-san-4.jpg"
    
      },
  ]
  
  function show() {
    var html="";
    for (i in phong) {
      var n=i ;
      n++;
      html += `
      <div class="card">
                <img class="card-img-top" src=${phong[i].anh}  alt="">
                <div class="card-body">
                  <h4 class="card-title">${phong[i].tenPhong}</h4>
                  <p class="card-text">${phong[i].moTa}</p>
                  <p class="card-text">${phong[i].gia}</p>
                </div>
              </div>
      `;
    }
    document.getElementById("show").innerHTML= html;  
  
  }
  function getURLImg(input) {
    let url = URL.createObjectURL(input.files[0]);
    document.getElementById('blah').setAttribute('src',url);
    document.getElementById('blah').style.display='block'
  }
  function add(tenPhong,moTa,gia,anh) {
    anh=URL.createObjectURL(anh);
      phong.push({
        tenPhong,
        moTa,
        gia,
        anh
      });
      show();
  
  }
   function openForm() {
     document.getElementById("frm").style.display="block";
   }
   function closeForm() {
     document.getElementById("frm").style.display="none";
   }