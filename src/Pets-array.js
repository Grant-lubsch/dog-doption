const Pets = {
  Stella: {
    name: "Stella",
    img: require("./assets/dog1.jpg"),
    breed: "Labrador Retriever",
    age: "6 weeks old",
  },
  Harper: {
    name: "Harper",
    img: require("./assets/dog2.jpg"),
    breed: "German Shepherd",
    age: "2 months old",
  },
  Rocky: {
    name: "Rocky",
    img: require("./assets/dog3.jpg"),
    breed: "Golden Retriever",
    age: "3 months old",
  },
  Yadi: {
    name: "Yadi",
    img: require("./assets/dog4.jpg"),
    breed: "French Bulldog",
    age: "7 weeks old",
  },
  Rupert: {
    name: "Rupert",
    img: require("./assets/dog5.jpg"),
    breed: "Beagle",
    age: "9 months old",
  },
};

/*const pets = [
  {
    pet: "dog",
    pets: [
      {
        id: "1",
        name: "Stella",
        img: require("..assets/dog1.jpg"),
        breed: "Labrador Retriever",
        age: "6 weeks old",
      },
      {
        id: "2",
        name: "Harper",
        img: require("../assets/dog2.jpg"),
        breed: "German Shepherd",
        age: "2 months old",
      },
      {
        id: "3",
        name: "Rocky",
        img: require("../assets/dog3.jpg"),
        breed: "Golden Retriever",
        age: "3 months old",
      },
      {
        id: "4",
        name: "Yadi",
        img: require("../assets.dog4.jpg"),
        breed: "French Bulldog",
        age: "7 weeks old",
      },
      {
        id: "5",
        name: "Rupert",
        img: require("../assets/dog5.jpg"),
        breed: "Beagle",
        age: "9 months old",
      },
    ],
  },
];
*/

const timeoutByFetchId = new Map();

class Fetch {
  constructor() {
    Object.defineProperty(this, "_id", {
      value: Date.now() + Math.random().toString().substring(2),
    });
  }
}

export function fetchUserData(username, callback) {
  if (!Pets.hasOwnProperty(username)) {
    throw new Error(
      "Invalid username. Make sure it is one of the dogs for adoption."
    );
  }

  const fetch = new Fetch();

  const delay = Math.floor(Math.random() * 1000) + 500;
  const timeout = setTimeout(() => {
    timeoutByFetchId.delete(fetch._id);
    callback(Pets[username]);
  }, delay);

  timeoutByFetchId.set(fetch._id, timeout);

  return fetch;
}

export function cancelFetch(fetch) {
  if (!fetch || typeof fetch !== "object") {
    return;
  }
  const timeout = timeoutByFetchId.get(fetch._id);
  clearTimeout(timeout);
  timeoutByFetchId.delete(fetch._id);
}
