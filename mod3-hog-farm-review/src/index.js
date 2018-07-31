fetch('http://localhost:3000/hogs')
  .then(response => response.json())
  .then(hogs => {
    hogs.forEach(hog => {
      const {id, name, specialty, greased, image} = hog
      const weight = hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
      const medal = hog['highest medal achieved']
      new Hog(id, name, specialty, greased, weight, medal, image)
    })
  }
  )

document.getElementById('hog-form').addEventListener('submit', addHog)

function addHog(e) {
  e.preventDefault()
  fetch('http://localhost:3000/hogs', {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify({
      'name': e.target.name.value,
      'specialty': e.target.specialty.value,
      'greased': e.target.greased.checked,
      'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': e.target.weight.value,
      'highest medal achieved': e.target.medal.value,
      'image': e.target.img.value
    })
  })
    .then(resp => resp.json())
    .then(hog => {
      const {id, name, specialty, greased, image} = hog
      const weight = hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
      const medal = hog['highest medal achieved']
      new Hog(id, name, specialty, greased, weight, medal, image)
    })
}


// {
//   "id": 0,
//   "name": "Mudblood",
//   "specialty": "Mediocre magic",
//   "greased": false,
//   "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water": 2,
//   "highest medal achieved": "bronze",
//   "image": "./hog-imgs/mudblood.jpg"
// }