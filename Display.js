const button = document.querySelector("button")
const input = document.querySelector("input")
const Display = document.querySelector("#Display")

const ButtonHover = () =>{
    button.addEventListener('mouseover', () => {
        button.classList.add("buttonHover");
    })
    button.addEventListener('mouseout', () => {
        button.classList.remove("buttonHover");
    })
}
ButtonHover();


const getValueOnScreen = async (f) => {
    if (f >= 1 && f <= 84) {
        for (i = 1; i <= f; i++) {
            const li = document.createElement("li")
            li.addEventListener('click', () => {
                li.remove();
            })
            try {
                const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${i}`)
                output = res.data.title
                li.append(output)
                Display.append(li);

            } catch (e) {
                console.log("ERROR IN LINK ", e.message)
            }
        }
    }
}

const OnButton = async () => {
    let inputV = ""
    Display.replaceChildren([]);
    inputV = parseInt(input.value)
    if (inputV >= 1 && inputV <= 84) {
        inputV = parseInt(input.value)
        button.classList.remove("fail")
        button.classList.add("success")
        button.disabled = true;
        await getValueOnScreen(inputV);
        button.disabled = false;
        button.classList.add("success")

    } else {
        const output = "Enter A Valid Number"
        button.classList.add("fail")
        const li = document.createElement("li")
        li.append(output)
        Display.append(li)
    }
}

button.addEventListener('click', OnButton)