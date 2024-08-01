import React, { useState } from 'react';
import '../index.css';

const Preferences = () => {
  const [preferences, setPreferences] = useState({
    color: '',
    food: '',
    hobby: '',
    music: '',
    movie: '',
    sport: '',
    vacation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPreferences({
      ...preferences,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Preferences: ', preferences);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="color">Favorite Color:</label>
        <select name="color" id="color" value={preferences.color} onChange={handleChange}>
          <option value="">Select a color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </select>
      </div>
      <div>
        <label htmlFor="food">Favorite Food:</label>
        <select name="food" id="food" value={preferences.food} onChange={handleChange}>
          <option value="">Select a food</option>
          <option value="pizza">Pizza</option>
          <option value="sushi">Sushi</option>
          <option value="burger">Burger</option>
          <option value="salad">Salad</option>
        </select>
      </div>
      <div>
        <label htmlFor="hobby">Favorite Hobby:</label>
        <select name="hobby" id="hobby" value={preferences.hobby} onChange={handleChange}>
          <option value="">Select a hobby</option>
          <option value="reading">Reading</option>
          <option value="gaming">Gaming</option>
          <option value="sports">Sports</option>
          <option value="traveling">Traveling</option>
        </select>
      </div>
      <div>
        <label htmlFor="music">Favorite Music Genre:</label>
        <select name="music" id="music" value={preferences.music} onChange={handleChange}>
          <option value="">Select a genre</option>
          <option value="rock">Rock</option>
          <option value="pop">Pop</option>
          <option value="jazz">Jazz</option>
          <option value="classical">Classical</option>
        </select>
      </div>
      <div>
        <label htmlFor="movie">Favorite Movie Genre:</label>
        <select name="movie" id="movie" value={preferences.movie} onChange={handleChange}>
          <option value="">Select a genre</option>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
          <option value="horror">Horror</option>
        </select>
      </div>
      <div>
        <label htmlFor="sport">Favorite Sport:</label>
        <select name="sport" id="sport" value={preferences.sport} onChange={handleChange}>
          <option value="">Select a sport</option>
          <option value="soccer">Soccer</option>
          <option value="basketball">Basketball</option>
          <option value="tennis">Tennis</option>
          <option value="swimming">Swimming</option>
        </select>
      </div>
      <div>
        <label htmlFor="vacation">Favorite Vacation Destination:</label>
        <select name="vacation" id="vacation" value={preferences.vacation} onChange={handleChange}>
          <option value="">Select a destination</option>
          <option value="beach">Beach</option>
          <option value="mountains">Mountains</option>
          <option value="city">City</option>
          <option value="countryside">Countryside</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Preferences;
