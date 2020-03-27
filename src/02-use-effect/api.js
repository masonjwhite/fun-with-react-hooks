
export const fetchDadJoke = async () => {
  try {
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
      },
    });
    const { joke } = await response.json();
    return joke;
  } catch(err) {
    console.error(`Error fetching dad joke: `, err);
  }
};