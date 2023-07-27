let activeColumn = 1;

const columns = document.querySelectorAll(".column");

columns.forEach((column, index) => {
    column.addEventListener("click", function() {
        columnChange(index)
    })
})

function columnChange(index) {
    columns[activeColumn].classList.remove("active");
    columns[index].classList.add("active");
    activeColumn = index;
}