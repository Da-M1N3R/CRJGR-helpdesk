const gallery = document.querySelector(".comms");

function commsSubSys(subsys) {
  return `
    <div class="subsys">
      <span class="subsys-name">${subsys.name}</span><br>
      <span class="subsys-point">${subsys.point}</span><span>${subsys.details}</span><br>
      <span class="subsys-point">${subsys.point2}</span><span>${subsys.details2}</span><br>
      <span class="subsys-point">${subsys.point3}</span><span>${subsys.details3}</span>
    </div>
  `;
}

fetch('details.json').then(response => response.json()).then(data => {
  const characters = data;
  characters.forEach(character => {
    const cardHTML = commsSubSys(character);
    gallery.innerHTML += cardHTML;
  })
}).catch(error => console.error(error));