const initialCards = [ 

    { 
      title: "Получил кроссовки,всё четко и быстро,спасибо большое🤝🏻", 
      src: '/images/card1.jpg', 
    }, 
    { 
      title: "Приобрел с помощью парней несколько бодрых вещей (на фото не всё) Оперативно оформили, всегда были на связи, буду обращаться Отдуши😎💪🏻", 
      src: '/images/card2.jpg', 
    }, 
    { 
      title: "супер!! пришли за 3 недели, подсказали с размером и не прогадал😋", 
      src: '/images/card3.jpg', 
    }, 
    { 
      title: "Заказала кроссовки,всё супер🥰спасибо большое!", 
      src: "/images/card4.jpg", 
    },
    { 
      title: "Заказал у ребят пару Выкупили быстро, доставили в срок  В будущем обязательно обращусь еще ✔️🤝",
      src: "/images/card5.jpg", 
    }, 
    {
      title: "даа, спасибо большое, всё супер, по размеру подошло!🥰 следующие будут 530, ахаха", 
      src: "/images/card6.jpg", 
    }, 
    { 
      title: "Заказал у ребят, шикарная обратная поддержка, маленькая наценка, отличное качество. Большое спасибо👏", 
      src: "/images/card7.jpg", 
    }, 
    { 
      title: "Заказал кроссовки, всë пришло достаточно быстро, на все вопросы быстро отвечали, и держали постоянно в курсе  всего, однозначно советую! 👍",
      src: "/images/card8.jpg", 
    }, 

  ]; 


const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu__button');

function toggleMenu(){
    menu.classList.toggle('open')
}
menuButton.addEventListener('click',() =>{
    toggleMenu();  
})



const popupImg = document.querySelector(".popup_type_image"); 
const popupImage = document.querySelector(".popup__image"); 
const figcaption = document.querySelector(".popup__figcaption"); 
const buttonCloseImg = document.querySelector("#closeImg"); 
const cardsContainer = document.querySelector(".cards"); 
const template = document.querySelector("#template"); 

const createCard = (dataCard) => { 
    const div = template.content.querySelector(".cards__item").cloneNode(true); 
    const cardImage = div.querySelector(".cards__img");  
    cardImage.src = dataCard.src; 
    cardImage.alt = `Изображение не загружено` 
  
    cardImage.addEventListener("click", (evt) => { 
      evt.preventDefault(); 
      popupImage.src = dataCard.src; 
      figcaption.textContent = dataCard.title; 
      openPopup(popupImg); 
    }); 
    return div; 
  }; 
  
  
  const divList = initialCards.map((dataCard) => { 
    const cardElement = createCard(dataCard); 
    return cardElement; 
  }); 
  
  const renderCard = (dataCard) => { 
    cardsContainer.prepend(createCard(dataCard)); 
  
  }; 
  
   
  
  cardsContainer.append(...divList); 

  const closePopupByOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) { 
      closePopup(evt.currentTarget); 
    } 
  }; 
  
  const closePopupByEsc = (evt) => { 
    if (evt.key === "Escape") { 
      closePopup(document.querySelector(".popup_opened")); 
    } 
  }; 
  
  //функции открытия и закрытия попапа 
  
  function openPopup(popupElement) { 
    popupElement.classList.add("popup_opened"); 
    popupElement.addEventListener("click", closePopupByOverlayClick); 
    document.addEventListener("keydown", closePopupByEsc); 
  
  } 
  
  function closePopup(popupElement) { 
    popupElement.classList.remove("popup_opened");  
    popupElement.removeEventListener("click", closePopupByOverlayClick); 
    document.removeEventListener("keydown", closePopupByEsc); 
  
  } 