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
    "i care about you more than i probably know how to explain.",

    "i love how you can make even a simple conversation memorable.",
    "i like the way you express yourself.",
    "you have a way of making me feel comfortable being myself.",
    "i love hearing your thoughts, even about the smallest things.",
    "you make me look forward to talking to you.",
    "i appreciate every little moment we get to share.",
    "you have become someone really important to me.",
    "i love how genuine you can be.",
    "you make me want to become a better person.",
    "i admire the way you handle things.",

    "i love your sense of humor.",
    "you can turn a boring moment into something fun.",
    "i like how unpredictable our conversations can be.",
    "you have a personality that is hard not to appreciate.",
    "i love learning new things about you.",
    "you make me smile at my phone sometimes.",
    "i like knowing that i get to hear from you.",
    "your presence makes my days feel a little better.",
    "i love the little things you probably don't realize i notice.",
    "you are someone i never get tired of getting to know.",

    "i appreciate how you make me feel heard.",
    "i love when you share something that you're excited about.",
    "your excitement can be contagious.",
    "i like the way you see things differently.",
    "you make me think about things from another perspective.",
    "i love how you have your own unique personality.",
    "you don't have to try hard to be memorable.",
    "i appreciate the moments when you let your guard down.",
    "i love seeing the side of you that not everyone gets to see.",
    "you make being around you feel natural.",

    "i love the way you can brighten my mood.",
    "you make me want to keep making memories with you.",
    "i appreciate every conversation we've had.",
    "even our random conversations mean something to me.",
    "i love how we can talk about completely random things.",
    "you somehow make time pass faster when we talk.",
    "i enjoy discovering the little things you like.",
    "i love knowing what makes you happy.",
    "your happiness is something i genuinely care about.",
    "i want to see you achieve the things you dream about.",

    "i admire your individuality.",
    "i love that you are simply yourself.",
    "you don't have to pretend to be someone else around me.",
    "i appreciate the trust you give me.",
    "i love every little memory we've made.",
    "you've given me moments that i'll always remember.",
    "i appreciate even the simple moments with you.",
    "you make ordinary days feel less ordinary.",
    "i love how much meaning small moments can have with you.",
    "you've become a beautiful part of my memories.",

    "i love how talking to you can make a bad day better.",
    "you make me want to smile more.",
    "i like how comfortable silence can feel with you.",
    "i appreciate when you tell me about things that matter to you.",
    "i love being someone you can talk to.",
    "i want you to know that i'll always listen when you need someone.",
    "i care about what you feel.",
    "i care about what you think.",
    "i care about the things that make you happy.",
    "i care about the things that make your days difficult.",

    "i love seeing you grow as a person.",
    "i'm proud of the things you accomplish.",
    "i believe you are capable of more than you realize.",
    "i love supporting you in the things that matter to you.",
    "i want to celebrate your little victories with you.",
    "i want to be there for the moments you're proud of.",
    "i want to remind you of your worth when you forget it.",
    "i appreciate the person you are today.",
    "i'm excited to see the person you'll become.",
    "i hope you never feel like you have to face everything alone.",

    "i love how you became someone i genuinely care about.",
    "i love the way you have a place in my thoughts.",
    "i find myself thinking about you at random moments.",
    "sometimes the smallest thing reminds me of you.",
    "you've become one of the people i look forward to hearing from.",
    "i love having someone like you in my life.",
    "i appreciate you more than i always know how to say.",
    "i hope you know how special you are to me.",
    "i hope you know that your presence matters.",
    "and most importantly, i love you simply because you're you."

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
