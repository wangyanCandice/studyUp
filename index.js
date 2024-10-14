const data = [
    {
      title: "tab-1",
      content: "content-1",
      id: 1,
    },
    {
      title: "tab-2",
      content: "content-2",
      id: 2,
    },
    {
      title: "tab-3",
      content: "content-3",
      id: 3,
    },
  ];
  
  const curI = 0;
  
  $(".box").innerHTML = `
    <nav>${data.map((infoObj , i) => `<span data-id="${i}" class="${curI === i ? 'active' : ''}">${infoObj.title}</span>`).join("")}</nav>
    <div class="con">${data[curI].content}</div>
  `;

  $(".box").addEventListener("click" , e => {
    if(e.target.nodeName === "SPAN"){
        $(".active").classList.remove("active")
        e.target.classList.add("active")
        const dataI = e.target.getAttribute("data-id");
        $(".con").innerHTML = data[dataI].content
    }
  })


  function $(el){
    return document.querySelector(el)
  }