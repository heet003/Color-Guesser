let totalScore = 0;
function positionANS() {
    const random_1 = Math.floor(Math.random() * 256);
    const random_2 = Math.floor(Math.random() * 256);
    const random_3 = Math.floor(Math.random() * 256);

    //print question
    let answer = `rgb(${random_1}, ${random_2}, ${random_3})`;
    document.getElementsByTagName("h1")[0].innerHTML = answer;

    // Get all <li> elements within the <ul>
    var li = document.getElementsByTagName("li");

    // Loop through each <li> element and set the background color
    for (var i = 0; i < li.length; i++) {
        //event Listner on li elements
        li[i].addEventListener('click', handleLiClick);
        //color all options
        let r_1 = Math.floor(Math.random() * 256);
        let r_2 = Math.floor(Math.random() * 256);
        let r_3 = Math.floor(Math.random() * 256);
        li[i].style.backgroundColor = `rgb(${r_1},${r_2},${r_3})`; // Set your desired background color
    }

    //where to put the answer from the given 6 postion
    var answerOption = Math.floor(Math.random() * 6) + 1;
    let ansli = document.getElementsByClassName("option" + answerOption)[0];
    ansli.style.backgroundColor = answer;

    // clicked function
    function handleLiClick(event) {
        const clickedElement = event.target;
        const backgroundColor = (window.getComputedStyle(clickedElement).backgroundColor);
        console.log("clicked " + backgroundColor);
        console.log("answer " + answer);
        if (backgroundColor === answer) {
            totalScore++;
            document.getElementById("score").innerHTML = totalScore;
            console.log("Won " + totalScore);
        } else {
            document.getElementById("score").innerHTML = totalScore;
            console.log("lost " + totalScore);
        }
    }
}

setInterval(positionANS, 10000);
positionANS();