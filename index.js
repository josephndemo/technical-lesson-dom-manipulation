// Write your code here!
const userInfo = {
    username:"flatUser123",
    description: "Hi, welcome to my page! just a new user of this website",
    theme:"red"
}

function displayUser(userInfo){
    const header = document.querySelector("#main")
    header.textContent = userInfo.username + "'s Personal webpage"
    header.classList = userInfo.theme

    const description = document.createElement("p")
    const body = document.querySelector("body")

    description.textContent = userInfo.description
	description.className = userInfo.theme

    body.append(description)
}

displayUser(userInfo)