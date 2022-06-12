// This is a function named init.
// This will be executed after the body loads


const updateTaskStatus = (parentId) => {
    const statusElement = document.querySelector(`#${parentId} .task-status`)
    statusElement.textContent = "Completed"
}

const init = () => {
    const buttons = Array.from(document.getElementsByClassName("task-button"))

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            const parent = button.getAttribute("data-parent")
            console.log(parent)
            updateTaskStatus(parent)
        })
    })
};  