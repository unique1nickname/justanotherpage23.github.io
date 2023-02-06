function show (details)
{
    var elem = document.getElementById(details)
    if (elem)
        elem.style.display = "block"
}
function hide (details)
{
    var elem = document.getElementById(details)
    if (elem)
        elem.style.display = "none"
}
function check()
{
    if (calc.answer.value == "Сортавала")
        alert("Правильно!");
    else alert("Неправильно! Попробуй ещё раз!");
}