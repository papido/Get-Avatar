const button = document.querySelector('button')
const input = document.querySelector('input')
const imageDiv = document.querySelector('div')

const getAvatar = async () => {
  let avatar = input.value
  let response = await axios.get(
    `https://avatars.dicebear.com/api/male/${avatar}svg`
  )
  let CustomPic = response.data.message
  let status = response.data.status
  console.log(status)
  imageDiv.innerHTML = `<img src=${CustomPic} alt="Custom Avatar" />`
}

button.addEventListener('click', getAvatar)
