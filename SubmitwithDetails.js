function submitForm2(event) {
    event.preventDefault();
    const comm = document.getElementById("commentsF2").value;
    const name1 = document.getElementById("name").value;
    const email1 = document.getElementById("email").value;
    const phone1 = document.getElementById("phone").value;
    const fruits1 = document.getElementById("fruits").value;
    
    const selectedColors = [];
    const colorsSelect = document.getElementById("colors");
    const selectedOptions = colorsSelect.selectedOptions;

    for (const option of selectedOptions) {
        selectedColors.push(option.value);
    }

    const selectedColorsString = selectedColors.join(', '); // Join elements with a comma and space

    
    
    //const color1 = document.getElementById("colors").value;



    let comments;
    let name2;
    let email2;
    let phone2;
    let fruits2;
    let colour2;

    comments = comm;
    name2 = name1;
    email2 = email1;
    phone2 = phone1;
    fruits2 = fruits1;
   // colour2 = color1;
    console.log(colour2);

    document.getElementById("nameF3").textContent = name2;
    document.getElementById("EmailF3").textContent = email2;
    document.getElementById("PhoneF3").textContent = phone2;
    document.getElementById("fruitF3").textContent = fruits2;
    document.getElementById("colourF3").textContent = selectedColorsString;
    document.getElementById("commentsF3").textContent = comments;

    //window.print(name2);
    const outputSection = document.getElementById("outputSection");
    outputSection.style.display = "block";


    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", function() {
        const searchTerm = searchInput.value.toLowerCase();
        const outputElements = document.querySelectorAll(".output span");

        for (const element of outputElements) {
            const text = element.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                element.style.display = "block";
            } else {
                element.style.display = "none";
            }
        }
    });

}

