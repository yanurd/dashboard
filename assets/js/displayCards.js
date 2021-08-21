
const bigCardsOverview = () => {
  var cards = [
    {
      icon: "",
      class: "facebook",
      user: "nathanf",
      followers: 1987,
      change: 12,
      changeClass: "up",
    },
    {
      icon: "",
      class: "twitter",
      user: "nathanf",
      followers: 1044,
      change: 99,
      changeClass: "up",
    },
    {
      icon: "",
      class: "instagram",
      user: "realnathanf",
      followers: "11k",
      change: 1099,
      changeClass: "up",
    },
    {
      icon: "",
      class: "youtube",
      user: "Nathan F.",
      followers: 8239,
      change: 144,
      changeClass: "down",
    },
  ];
  var bigCards = document.getElementById("big-cards");
  cards.forEach(card => {
    bigCards.innerHTML += `
    <div class="${card.class}">
      <p>${card.user}</p>
      <p>${card.followers}</p>
      <p class="${card.changeClass}">${card.change}</p>
    </div>
    `
  })
}

const smallCardsOverview = () => {
  var overview = [
    {
      icon: "facebook",
      title: "Page Views",
      content: 87,
      change: 3,
      changeClass: "up",
    },
    {
      icon: "facebook",
      title: "Likes",
      content: 52,
      change: 2,
      changeClass: "down",
    },
    {
      icon: "instagram",
      title: "Likes",
      content: 5462,
      change: 2257,
      changeClass: "up",
    },
    {
      icon: "instagram",
      title: "Profile Views",
      content: "52k",
      change: 1375,
      changeClass: "up",
    },
    {
      icon: "twitter",
      title: "Retweets",
      content: 117,
      change: 303,
      changeClass: "up",
    },
    {
      icon: "twitter",
      title: "Likes",
      content: 507,
      change: 553,
      changeClass: "up",
    },
    {
      icon: "youtube",
      title: "Likes",
      content: 107,
      change: 19,
      changeClass: "down",
    },
    {
      icon: "youtube",
      title: "Total Views",
      content: 1407,
      change: 12,
      changeClass: "down",
    },
  ];
  var smallCards = document.getElementById("small-cards");
  overview.forEach( card => {
    smallCards.innerHTML += `
      <div>
        <p>${card.title}</p>
        <p>${card.content}</p>
        <p>${card.icon}</p>
        <p>${card.change}</p>
      </div>`
  })
}


const displayCards = () => {
  bigCardsOverview()
  smallCardsOverview()
}
