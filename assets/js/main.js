/*
Exercises

Tips: 
1. To show the result of each exercise write a consol log with the form: console.log('Ex 1.', value or function).
2. Make some research about the usage of reduce, some and many.
3. Create a js file called utils.js and place all helper functions in it. (Ex 10 and 14)

1) Import songs array using modules.

2. Use the map function to create a new array with the title of each song in uppercase letters.

3. Use the filter function to create a new array with all the songs released before 1975.

4. Use destructuring to create a variable that stores the title of the first song in the array.

5. Use the find function to get the object representing the song "Hotel California".

6. Use the rest operator to create a function that takes any number of arguments and returns their sum. (Tip: Use reduce)

7. Use the map function and template literals to create a new array with strings in the format "Title - Artist (Year)" for each song.

8. Use destructuring and the filter function to create a new array with the titles of all the songs by The Beatles.

9. Use arrow functions and the reduce function to calculate the total number of years between all the songs' release dates. (Tip: Use reduce)

10. Create a module that exports a function to calculate the average release year of the songs in the input array. (Tip: Use reduce.)

11. Use the find function to get the object representing the song with the longest title.

12. Use destructuring and template literals to log the title, artist and year of the first element of the array.

13. Use the rest operator to create a new array without the first element.

14. Import the filter() function from a utils.js module and use it to create a new array with all the songs that have "Love" in the title.

15. Use the every() method to check if all the songs have titles that are 5 or more characters long.

16. Use the some() method to check if there are any songs from the 80s.

17. Use a template literal to create a string that says "The Beatles released Let It Be in 1970."

18. Use the map() method to create a new array with just the artist names.

19. Create a function called randomSong that returns one song from the songs array randomly. Log the call of this function 3 times.

20. Write your own function using at least 3 concepts.

*/

//1) Import songs array using modules.

import songs from "./songs.js";
console.log("1", songs);

//2. Use the map function to create a new array with the title of each song in uppercase letters.

const upperTitles = songs.map(({ title }) => title.toUpperCase());
console.log("2", upperTitles);

//3. Use the filter function to create a new array with all the songs released before 1975.

const oldSongs = songs.filter(({ year }) => year < 1975);
console.log("3", oldSongs);

//4. Use destructuring to create a variable that stores the title of the first song in the array.

const [{ title: firstTitle }] = songs;
console.log("4", firstTitle);

//5. Use the find function to get the object representing the song "Hotel California".

const hotelCalifornia = songs.find((song) => song.title === "Hotel California");
console.log("5", hotelCalifornia);

//6. Use the rest operator to create a function that takes any number of arguments and returns their sum. (Tip: Use reduce)

const sum = (...numbs) => numbs.reduce((acc, curr) => acc + curr, 0);
console.log(6, sum(1, 2, 3, 4, 5));

//7. Use the map function and template literals to create a new array with strings in the format "Title - Artist (Year)" for each song.

const songsInfo = songs.map(
  (song) => `${song.title} - ${song.artist} (${song.year})`
);
console.log("7", songsInfo);

//8. Use destructuring and the filter function to create a new array with the titles of all the songs by The Beatles.

const beatlesTitles = songs
  .filter(({ artist }) => artist === "The Beatles")
  .map(({ title }) => title);
console.log("8", beatlesTitles);

//9. Use arrow functions and the reduce function to calculate the total number of years between all the songs' release dates. (Tip: Use reduce)

const totalYears = songs.reduce((acc, curr) => acc + curr.year, 0);
console.log("9", totalYears);

//Extra destructuring

const clima = {
  ciudad: "buenos Aires",
  temperatura: 30,
  unidad: "Grados Centigrados",
};

const mostrarClima = ({ ciudad, temperatura, unidad }) => {
  return `El clima en ${ciudad} es de ${temperatura} ${unidad}`;
};

console.log(mostrarClima(clima));

//10. Create a module that exports a function to calculate the average release year of the songs in the input array. (Tip: Use reduce.)

import { averageYear } from "./utils.js";
const avgYear = averageYear(songs);

console.log("10", avgYear);

//11. Use the find function to get the object representing the song with the longest title.

const longestTitleSong = songs.find(
  (song) =>
    song.title.length === Math.max(...songs.map(({ title }) => title.length))
);

console.log("11", longestTitleSong);

//12. Use destructuring and template literals to log the title, artist and year of the first element of the array.

const { title, artist, year } = songs[0];
console.log("12", `${title} by ${artist} was relased in ${year}`);

//13. Use the rest operator to create a new array without the first element.
const [, ...ramainingSongs] = songs;
console.log("13", ramainingSongs);

//14. Import the filter() function from a utils.js module and use it to create a new array with all the songs that have "Love" in the title.

import { filter } from "./utils.js";

const loveSongs = filter(songs, ({ title }) => title.includes("Let"));
console.log("14", loveSongs);

//15. Use the every() method to check if all the songs have titles that are 5 or more characters long.

const allTitlesAreLong = songs.every(({ title }) => title.length >= 5);
console.log("15", allTitlesAreLong);

//16. Use the some() method to check if there are any songs from the 80s.

const hasEightes = songs.some(({ year }) => year >= 1980 && year < 1990);
console.log("16", hasEightes);

//17. Use a template literal to create a string that says "The Beatles released Let It Be in 1970."

const letItBe = songs.find(({ title }) => title === "Let It Be");
const releaseString = `${letItBe.artist} released ${letItBe.title} in ${letItBe.year}`;

console.log("17", releaseString);

//18. Use the map() method to create a new array with just the artist names.

const artistsNames = songs.map(({ artist }) => artist);
console.log('18', artistsNames)


//19. Create a function called randomSong that returns one song from the songs array randomly. Log the call of this function 3 times.

const randomSong = (arr) => arr[(Math.floor(Math.random() * arr.length))]
console.log('19', randomSong(songs))
console.log('19', randomSong(songs))
console.log('19', randomSong(songs))

//20. Write your own function using at least 3 concepts.

const findNewSong = (songs) => {
  const years = songs.map(({year}) => year);
  const newYear = Math.max(...year);
  const newSong = songs.find((song) => song.year === newYear);
  return { newSong };
}
const {newSong } = findNewSong(songs);
console.log("Newest Song:", newSong);