import { DUMMY_CANDIDATE_AVATAR, INDIAN_CANDIDATE_NAMES } from "./constants";

// fo generating rating : gives array items between 0 to 5
export function generateRandomRating() {
  const length = Math.floor(Math.random() * 5) + 1; // Random length between 1 and 5
  const array = [];
  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * 5) + 1; // Random number between 1 and 5
    array.push(randomNumber);
  }
  return array;
}

// for generating new candidate : Simulation of create API
export function generateCandidateObject() {
  // Returning Promise
  return new Promise((res) => {
    setTimeout(() => {
      const names = INDIAN_CANDIDATE_NAMES;
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomId = Math.floor(Math.random() * 1000) + 1; // Random ID between 1 and 1000
      const createdAt = new Date().toISOString();
      res({
        createdAt,
        name: randomName,
        avatar: DUMMY_CANDIDATE_AVATAR,
        id: randomId.toString(),
      });
    }, 3000);
  });
}
