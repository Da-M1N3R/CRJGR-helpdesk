const comms = document.querySelector(".comms");

function commsSubSys(subsys) {
  let itemHTML = '';
  let tempHTML = '';

  for (let i = 0; i < subsys.name.length; i++) {
    itemHTML += `
      <span class="subsys-name">${subsys.name}</span><br>
    `;
    for (let j = 0; j < subsys.point.length; j++) {
      
      itemHTML += `
        <span class="subsys-point">${subsys.point[j]}</span><span>${subsys.details[j]}</span><br>
      `; 
    }
  }
  return `
    <div class="subsys">
      ${itemHTML}
    </div>
  `;
}

fetch('details.json')
.then(response => response.json())
.then(data => {
  const subsystems = data;
  subsystems.forEach(subsysx => {
    const subsysHTML = commsSubSys(subsysx);
    comms.innerHTML += subsysHTML;
  })
})
.catch(error => console.error(error));