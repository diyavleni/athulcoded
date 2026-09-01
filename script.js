const SUPABASE_URL = "https://rfptvymijtwynceudgfl.supabase.co/rest/v1/";
const SUPABASE_KEY = "sb_publishable_mpung6i_WMfGDg-bbX5wcg_SP0r8_wd";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

const popup = document.getElementById("popup");
const popupEmoji = document.getElementById("popupEmoji");
const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");

function showPopup(emoji, title, text) {
    popupEmoji.textContent = emoji;
    popupTitle.textContent = title;
    popupText.textContent = text;
    popup.classList.remove("hidden");
}

function closePopup() {
    popup.classList.add("hidden");
}

async function sendMessage(sender, type, content) {
    const { error } = await supabaseClient
        .from("messages")
        .insert([
            {
                sender: sender,
                type: type,
                content: content
            }
        ]);

    if (error) {
        console.error(error);
        alert("Something went wrong 😭");
        return;
    }

    alert("sent successfully 💌");
}

function leaveSomething() {
    showPopup(
        "💌",
        "leave something for athul",
        "we're making this REAL soon 👀"
    );
}

function openSection(section) {

    const content = {

        notes: [
            "🌷",
            "little notes",
            "tiny things that probably could've been a text."
        ],

        letters: [
            "💌",
            "letters",
            "for when one paragraph simply isn't enough."
        ],

        memories: [
            "📸",
            "memories",
            "all the random evidence of us being us."
        ],

        voice: [
            "🎙️",
            "voice notes",
            "hear me yap. or Athul yap. depends."
        ],

        videos: [
            "🎥",
            "our videos",
            "questionable camera roll content goes here."
        ]
    };

    const item = content[section];

    if (item) {
        showPopup(item[0], item[1], item[2]);
    }
}

function randomMemory() {

    const memories = [
        ["📸", "random memory", "remember this?? because I randomly do 😭"],
        ["🌷", "memory unlocked", "the internet has decided this one is important."],
        ["🫧", "memory unlocked", "no context. just vibes."],
        ["💀", "lore discovered", "this incident has officially entered the archive."],
        ["🦢", "why is this here", "honestly we don't know either."]
    ];

    const random =
        memories[Math.floor(Math.random() * memories.length)];

    showPopup(random[0], random[1], random[2]);
}

function ragebait() {

    const messages = [
        ["🚨", "don't click this", "wow. you actually clicked it."],
        ["💀", "breaking news", "nothing happened. congratulations."],
        ["👁️", "you shouldn't be here", "anyway... hi."],
        ["🚨", "URGENT", "Athul has been reported for being annoying."],
        ["🧍", "system notification", "go talk to your person."],
        ["😭", "important announcement", "you are both kinda cringe."],
        ["🫵", "caught in 4K", "you literally clicked the button."]
    ];

    const random =
        messages[Math.floor(Math.random() * messages.length)];

    showPopup(random[0], random[1], random[2]);
}

popup.addEventListener("click", function(event) {
    if (event.target === popup) {
        closePopup();
    }
});
