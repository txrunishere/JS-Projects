const lat = document.querySelector(".lat");
const lon = document.querySelector(".lon");
const localtime = document.querySelector(".localtime");
const submit = document.querySelector("#submit");
const ipnut = document.querySelector("#input");
const locationName = document.querySelector("#locationName");
const delhiDD = document.querySelector('.delhiDD');
const londonDD = document.querySelector('.londonDD');
const bangloreDD = document.querySelector('.bangloreDD');

// console.log(th);
// console.log(latitude, longitude, localTime);
// const url = "https://weatherapi-com.p.rapidapi.com/alerts.json?q=Mumbai";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "56242ea75cmsh9c831215deb1b69p13381cjsn566b7590e432",
    "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  locationName.innerHTML = city;
  fetch(`https://weatherapi-com.p.rapidapi.com/alerts.json?q=${city}`, options)
    .then((res) => res.json())
    .then((res) => {
      lat.innerHTML = res.location.lat;
      lon.innerHTML = res.location.lon;
      localtime.innerHTML = res.location.localtime;
      // console.log(res);
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(input.value);
});

getWeather("Mumbai");



async function fetchCommonCityData(city, selectors) {
  const url = `https://weatherapi-com.p.rapidapi.com/alerts.json?q=${city}`;
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    //     <Here it means latitude key of selectors in cities array>
    document.querySelector(selectors.latitude).innerText = data.location.lat;
    document.querySelector(selectors.longitude).innerText = data.location.lon;
    document.querySelector(selectors.localtime).innerText = data.location.localtime;
  } catch (error) {
    console.error(`Error fetching data for ${city}:`, error);
  }
}

// Define the cities and their corresponding selectors
const cities = [
  {
    name: "Shangai",
    selectors: {
      latitude: ".latitudeShangai",
      longitude: ".longitudeShangai",
      localtime: ".local-timeShangai",
    },
  },
  {
    name: "Boston",
    selectors: {
      latitude: ".latitudeBoston",
      longitude: ".longitudeBoston",
      localtime: ".local-timeBoston",
    },
  },
  {
    name: "Lucknow",
    selectors: {
      latitude: ".latitudeLucknow",
      longitude: ".longitudeLucknow",
      localtime: ".local-timeLucknow",
    },
  },
  {
    name: "Rajasthan",
    selectors: {
      latitude: ".latitudeRajasthan",
      longitude: ".longitudeRajasthan",
      localtime: ".local-timeRajasthan",
    }
  }
];

// Fetch data for all cities
cities.forEach((city, index) => {
  fetchCommonCityData(city.name, city.selectors);
  // console.log(index);
  // console.log(city);
});


delhiDD.addEventListener('click', () => {
  // e.preventDefault();
  getWeather("Delhi");
});

londonDD.addEventListener('click', () => {
  // e.preventDefault();
  getWeather("London");
});

bangloreDD.addEventListener('click', () => {
  // e.preventDefault();
  getWeather("bangalore");
});


// (async function() {
//   try {
//     const response = await fetch(
//       "https://weatherapi-com.p.rapidapi.com/alerts.json?q=Shangai", options
//     );
//     const data = await response.json();

//     document.querySelector(".latitudeShangai").innerText = data.location.lat;
//     document.querySelector(".longitudeShangai").innerText = data.location.lon;
//     document.querySelector(".local-timeShangai").innerText = data.location.localtime;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// })();

// (async function() {
//   try {
//     const response = await fetch(
//       "https://weatherapi-com.p.rapidapi.com/alerts.json?q=Boston", options
//     );
//     const data = await response.json();

//     document.querySelector(".latitudeBoston").innerText = data.location.lat;
//     document.querySelector(".longitudeBoston").innerText = data.location.lon;
//     document.querySelector(".local-timeBoston").innerText = data.location.localtime;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// })();

// (async function() {
//   try {
//     const response = await fetch(
//       "https://weatherapi-com.p.rapidapi.com/alerts.json?q=Lucknow", options
//     );
//     const data = await response.json();

//     document.querySelector(".latitudeLucknow").innerText = data.location.lat;
//     document.querySelector(".longitudeLucknow").innerText = data.location.lon;
//     document.querySelector(".local-timeLucknow").innerText = data.location.localtime;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// })();

// (async () => {
//   try {
//     const response  = await fetch(url, options);
//     const result = await response.json();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// })();
