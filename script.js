const reasons = [

    "i love how you can make me smile without even trying.",

    "there's something about the way you talk that i really like.",

    "you make ordinary conversations feel special to me.",

    "i genuinely enjoy hearing about your day.",

    "somehow, you became someone i always want to know more about.",

    "your little habits are some of the things i find adorable.",

    "i like how you have your own way of doing things.",

    "you make me curious about all the little things that make you, you.",

    "your happiness genuinely makes me happy.",

    "i care about you more than i probably know how to explain."

];

let currentReason = 0;


function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");
}


function nextReason() {

    currentReason++;

    if (currentReason >= reasons.length) {

        showPage("ending");

        return;
    }

    document.getElementById("reason").textContent =
        reasons[currentReason];

    document.getElementById("number").textContent =
        "reason " + (currentReason + 1) + "/100";
}
