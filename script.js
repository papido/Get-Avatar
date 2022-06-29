const button = document.querySelector('button')
const input = document.querySelector('input')
const imageDiv = document.querySelector('div')

const getDog = async () => {
  let breed = input.value
  let response = await axios.get(
    `https://dog.ceo/api/breed/${breed}/images/random`
  )
  let dogPic = response.data.message
  let status = response.data.status
  console.log(status)
  imageDiv.innerHTML = `<img src=${dogPic} alt="dog" />`
}

button.addEventListener('click', getDog)
