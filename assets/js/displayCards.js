const bigCardsOverview = () => {
  var cards = [
    {
      icon: "assets/img/icon-facebook.svg",
      altIcon: "Facebook Logo",
      class: "facebook",
      user: "@nathanf",
      followers: 1987,
      typeFollowers: 'followers',
      change: 12,
      changeIcon: "assets/img/icon-up.svg",
      changeClass: "up",
    },
    {
      icon: "assets/img/icon-twitter.svg",
      altIcon: "Twitter Logo",
      class: "twitter",
      user: "@nathanf",
      followers: 1044,
      typeFollowers: 'followers',
      change: 99,
      changeIcon: "assets/img/icon-up.svg",
      changeClass: "up",
    },
    {
      icon: "assets/img/icon-instagram.svg",
      altIcon: "Instagram Logo",
      class: "instagram",
      user: "@realnathanf",
      followers: "11k",
      typeFollowers: 'followers',
      change: 1099,
      changeIcon: "assets/img/icon-up.svg",
      changeClass: "up",
    },
    {
      icon: "assets/img/icon-youtube.svg",
      altIcon: "Youtube Logo",
      class: "youtube",
      user: "Nathan F.",
      followers: 8239,
      typeFollowers: 'subscribers',
      change: 144,
      changeIcon: "assets/img/icon-down.svg",
      changeClass: "down",
    },
  ];
  var bigCards = document.getElementById("big-cards");
  cards.forEach((card) => {
    bigCards.innerHTML += `
    <div class="big-overview dark-bg ${card.class}">
      <p>
        <img 
          src="${card.icon}"
          alt="${card.altIcon}"
          height="25px"
        />
        ${card.user}
      </p>
      <div>
        <p>${card.followers}</p>
        <p>${card.typeFollowers}</p>
      </div>
      <p class="${card.changeClass}">
        <img src="${card.changeIcon}" alt="${card.changeClass}" />
        ${card.change} Today
      </p>
    </div>
    `;
  });
};

const smallCardsOverview = () => {
  var overview = [
    {
      icon: "assets/img/icon-facebook.svg",
      altIcon: "Facebook Logo",
      title: "Page Views",
      content: 87,
      change: 3,
      changeIcon: "assets/img/icon-up.svg",
      changeClass: "up",
    },
    {
      icon: "assets/img/icon-facebook.svg",
      altIcon: "Facebook Logo",
      title: "Likes",
      content: 52,
      change: 2,
      changeIcon: "assets/img/icon-down.svg",
      changeClass: "down",
    },
    {
      icon: "assets/img/icon-instagram.svg",
      altIcon: "Instagram Logo",
      title: "Likes",
      content: 5462,
      change: 2257,
      changeIcon: "assets/img/icon-up.svg",
      changeClass: "up",
    },
    {
      icon: "assets/img/icon-instagram.svg",
      altIcon: "Instagram Logo",
      title: "Profile Views",
      content: "52k",
      change: 1375,
      changeIcon: "assets/img/icon-up.svg",
      changeClass: "up",
    },
    {
      icon: "assets/img/icon-twitter.svg",
      altIcon: "Twitter Logo",
      title: "Retweets",
      content: 117,
      change: 303,
      changeIcon: "assets/img/icon-up.svg",
      changeClass: "up",
    },
    {
      icon: "assets/img/icon-twitter.svg",
      altIcon: "Twitter Logo",
      title: "Likes",
      content: 507,
      change: 553,
      changeIcon: "assets/img/icon-up.svg",
      changeClass: "up",
    },
    {
      icon: "assets/img/icon-youtube.svg",
      altIcon: "Youtube Logo",
      title: "Likes",
      content: 107,
      change: 19,
      changeIcon: "assets/img/icon-down.svg",
      changeClass: "down",
    },
    {
      icon: "assets/img/icon-youtube.svg",
      altIcon: "Youtube Logo",
      title: "Total Views",
      content: 1407,
      change: 12,
      changeIcon: "assets/img/icon-down.svg",
      changeClass: "down",
    },
  ];
  var smallCards = document.getElementById("small-cards");
  overview.forEach((card) => {
    smallCards.innerHTML += `
      <div class="overview-card dark-bg">
        <p class="card-subtitle desaturated">${card.title}</p>
        <img 
          src="${card.icon}" 
          alt="${card.altIcon}" 
          height="25px"
        />
        <p class="overview-card_text">${card.content}</p>
        <span class="${card.changeClass}">
          <img 
          src="${card.changeIcon}" 
          alt="${card.changeClass}"/>
          ${card.change}%
        </span>
      </div>`;
  });
};

const displayCards = () => {
  bigCardsOverview();
  smallCardsOverview();
};
