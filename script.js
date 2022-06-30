const button = document.querySelector('button')
const input = document.querySelector('input')
const imageDiv = document.querySelector('div')

const getAvatar = async () => {
  let avatar = input.value
  let response = await axios.get(
    `https://avatars.dicebear.com/api/adventurer/${avatar}.svg`
  )
  let CustomPic = response.data.message
  let status = response.data.status
  console.log(response)
  imageDiv.innerHTML = response.data
}

button.addEventListener('click', getAvatar)
