

function generateNumber() {

    const min = Math.ceil (document.getElementById("input-min").value)
    const max = Math.floor (document.getElementById("input-max").value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min;



 alert(result)
}
