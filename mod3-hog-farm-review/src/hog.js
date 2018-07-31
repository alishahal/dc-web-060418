class Hog {
  constructor(id, name, specialty, greased, weight, medal, img) {
    this.id = id
    this.name = name
    this.specialty = specialty
    this.greased = greased
    this.weight = weight
    this.medal = medal
    this.img = img
    this.render()
  }

  hogHTML(){
    return `
    <h1>${this.name}</h1>
    <img src=${this.img} />
    <br>
    <input type="checkbox" data-id="${this.id}" name="greased" ${this.greased ? 'checked' : ''}/>
    <br>
    <button data-id="${this.id}">delete</button>
    `
  }

  deleteHog(e){
    const id = e.target.dataset.id
    fetch(`http://localhost:3000/hogs/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type' : 'application/json'
      }
    })
      .then(
        document.getElementById('hog-container').removeChild(
          document.getElementById(id)
        )
      )
  }

  toggleGreased(e){
    const id = e.target.dataset.id
    const greased = e.target.checked
    const data = {greased: greased}
    const method = 'PATCH'
    const url = `http://localhost:3000/hogs/${id}`
    fetch(url, {
      method: method,
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(data)
    })
  }

  render() {
    const hogContainer = document.getElementById('hog-container')
    const hogCard = document.createElement('div')
    hogCard.classList.add('hog-card')
    hogCard.id = this.id
    hogCard.innerHTML += this.hogHTML()
    hogContainer.appendChild(hogCard)
    hogCard.querySelector('button').addEventListener('click', this.deleteHog)
    hogCard.querySelector('input').addEventListener('click', this.toggleGreased)
  }
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