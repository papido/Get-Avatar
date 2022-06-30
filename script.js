const button = document.querySelector('button')
const input = document.querySelector('input')
const imageDiv = document.querySelector('.pic')

const getAvatar = async () => {
  let avatar = input.value
  let response = await axios.get(
    `https://avatars.dicebear.com/api/adventurer/${avatar}.svg`
  )
  imageDiv.innerHTML = response.data
}

const print = () => {
  document.querySelector('.text').innerHTML = 'Your Avatar :'
}

button.addEventListener('click', getAvatar)
button.addEventListener('click', print)
