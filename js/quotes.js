const quotes = [
    //영화 명대사
    //https://simplelife77.tistory.com/490
    {
        quote : "넌 도전했고 도전에는 용기가 필요하지, 네가 자랑스럽구나.",
        author: "리틀 미스 션샤인",
    },
    {
        quote: "운명이란 말야, 노력하는 사람한테 우연이라는 다리를 놓아주는 거야.",
        author : "엽기적인 그녀",
    },
    {
        quote: "천재성은 인종은 없고 강인함에는 남녀가 없으며 용기에는 한계가 없다.",
        author : "히든 피겨스",
    },
    {
        quote: "what to do",
        author : "me",
    },
    {
        quote: "길은 모두에게 열려있지만 모두가 그 길을 가질 수 있는 건 아니다.",
        author : "인턴",
    },
    {
        quote: "폭력으로는 절대 이기지 목합니다. 품위를 유지 할 때만 이길 수 있는 겁니다.",
        author : "그린 북",
    },
    {
        quote: "단지 두려움 때문에 좋아하는 일을 포기하지마",
        author : "씽",
    },
    {
        quote: "우리가 앞서 나갈 기회를 잡으면 저들이 결승점을 옮겨놔",
        author : "히든 피겨스",
    },
    {
        quote: "당신이 관두는 법을 알았으면 좋겠어요.",
        author : "브로크백 마운틴",
    },
    {
        quote: "호의가 계속되면 그게 권리인 줄 알아",
        author : "부당거래",
    },
    {
        quote: "인생은 다시 돌아 올 두번의 기회가 없다고 생각하고 살아야 해",
        author : "어바웃 타임",
    },
    {
        quote: "모든 게 잘 될거야",
        author : "세 얼간이",
    },
    {
        quote: "네 잘못이 아니야",
        author : "굿 윌 헌팅",
    },
    {
        quote: "벗을 알면 내가 더 깊어진다.",
        author : "자산어보",
    },
    {
        quote: "내 아이들에게 부당함을 참으라고 가르치지 않았다",
        author : "필라델피아",
    },
    {
        quote: "벗을 알면 내가 더 깊어진다.",
        author : "자산어보",
    },
    {
        quote: "벗을 알면 내가 더 깊어진다.",
        author : "자산어보",
    },
    {
        quote: "벗을 알면 내가 더 깊어진다.",
        author : "자산어보",
    },
    {
        quote: "벗을 알면 내가 더 깊어진다.",
        author : "자산어보",
    },
    {
        quote: "벗을 알면 내가 더 깊어진다.",
        author : "자산어보",
    },
    {
        quote: "벗을 알면 내가 더 깊어진다.",
        author : "자산어보",
    },

]


const quote = document.querySelector(".quote span:first-child")
const author = document.querySelector(".quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
//math.random은 0초과 6미만의 수를 무작위로 뽑아준다.

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
