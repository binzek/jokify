export const fetchJoke = async () => {
  const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
  const joke = await response.json();
  return joke;
};
