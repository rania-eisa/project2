const images = [
    "https://media.egyin.com/2025/5/large/1803141084556420250510053809389.jpg",
    "https://safaryti.com/blogs/1723969015J3sVaS2qrH",
    "https://cdn.alweb.com/thumbs/egyptencyclopedia/article/fit710x532/%D9%85%D8%A7-%D9%87%D9%8A-%D8%A3%D9%86%D9%88%D8%A7%D8%B9-%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%AD%D8%A9-%D9%81%D9%8A-%D9%85%D8%B5%D8%B1.jpg"
  ];
  let i = 0;
    const slide = document.getElementById("slide");

 
    slide.src = images[i];

    setInterval(() => {
      i++;
      if (i >= images.length) {
        i = 0;
      }
      slide.src = images[i];
    }, 3000); // كل 3 ثوانٍ 

    window.onload = () => {
document.getElementById("welcome").style.display = "block";
      };

