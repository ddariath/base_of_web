function translate(){
    name1 = document.getElementById('name')
    surname = document.getElementById('surname')
    midname = document.getElementById('midname')
    date = document.getElementById('date')
    name1.innerHTML = 'Anna'
    surname.innerHTML = 'Ivanova'
    midname.innerHTML = 'Sergeevna'
    date.innerHTML = 'XXVI.II.MMIV'
}

const elementVerify = document.getElementById("translate");
elementVerify.addEventListener('click', translate);