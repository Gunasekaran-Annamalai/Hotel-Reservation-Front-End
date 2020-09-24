const category = [
  [
    "Rooms",
    "./images/rooms/room-1.jpg",
    "The room offered is exact what a guest wanted (in terms of category, classification, physical location in the hotel, bed size…) Amazing service: Guests should get the feeling that they are known and valued."
  ],

  [
    "Restaurant",
    "./images/restaurants/restaurant-1.jpg",
    "Restaurants are beautifully, sometimes lavishly decorated. Combined with the low lighting they are very often romantic. Expect fresh flowers, tasteful artwork, candlelight, classical music, and linen tablecloths and napkins."
  ],

  [
    "Food",
    "./images/foods/food-1.jpg",
    "Foods that offer a refinement in texture, taste, fat content or other quality (such as stimulant or inebriant) and offer distinction, because of either their quantity or quality."
  ]
]

const places = [
  [
    "Bridge street, London",
    "./images/locations/london-bridge-street.jpg"
  ],

  [
    "Rhode island Us",
    "./images/locations/rhode-island-us.jpg"
  ],

  [
    "Paris, France",
    "./images/locations/paris-france.jpg"
  ]
]

const sectionTitle = document.getElementById('section-title');
const sectionImage = document.getElementById('image');
const sectionNote = document.getElementById('section-note');
const imageLocation = document.getElementById('image-location');
const place = document.getElementById('place');
let count = 0;


const categorySlider = (title, image, note) => {
  sectionImage.src = image;
  sectionTitle.innerText = title;
  sectionNote.innerText = note;
  count++;
}

const locationSlider = (title, image) => {
  place.innerText = title;
  imageLocation.src = image;
}

setInterval(() => {
  if(count > (category.length)-1) {
    count = 0;
  }
  categorySlider(category[count][0], category[count][1], category[count][2]);
  locationSlider(places[count][0], places[count][1]);
}, 3000)
