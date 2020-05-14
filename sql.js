var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('./gold_medals.sqlite');

/*
Returns a SQL query string that will create the Country table with four columns: name (required), code (required), gdp, and population.
*/

const createCountryTable = () => {
  return 'create table Country(name text not null, code text not null, gdp int, population int);';
};

/*
Returns a SQL query string that will create the GoldMedal table with ten columns (all required): id, year, city, season, name, country, gender, sport, discipline, and event.
*/

const createGoldMedalTable = () => {
  return 'create table GoldMedal(id int primary key, year int not null , city text not null , season text not null ,name text not null , country text not null , gender text not null , sport text not null , discipline text not null , event text not null )';
};

/*
Returns a SQL query string that will find the number of gold medals for the given country.
*/

const goldMedalNumber = country => {
    return `select count(*) as count from GoldMedal where country = '${country}';`;
};

/*
Returns a SQL query string that will find the year where the given country
won the most summer medals, along with the number of medals aliased to 'count'.
*/

const mostSummerWins = country => {
  var summer = 'Summer';
  return `select year, count(*) as count from GoldMedal where country = '${country}' and season = '${summer}' GROUP by year ORDER by count(*) desc LIMIT 1`;
};

/*
Returns a SQL query string that will find the year where the given country
won the most winter medals, along with the number of medals aliased to 'count'.
*/

const mostWinterWins = country => {
  var winter = 'Winter';
  return `select year, count(*) as count from GoldMedal where country = '${country}' and season = '${winter}' GROUP by year ORDER by count(*) desc LIMIT 1`;
};

/*
Returns a SQL query string that will find the year where the given country
won the most medals, along with the number of medals aliased to 'count'.
*/

const bestYear = country => {
  return `select year, count(*) as count from GoldMedal where country = '${country}' group by year order by count(*) desc limit 1`;
};

/*
Returns a SQL query string that will find the discipline this country has
won the most medals, along with the number of medals aliased to 'count'.
*/

const bestDiscipline = country => {
  return `select discipline, count(*) as count from GoldMedal where country = '${country}' group by discipline order by count(*) desc limit 1`;
};

/*
Returns a SQL query string that will find the sport this country has
won the most medals, along with the number of medals aliased to 'count'.
*/

const bestSport = country => {
  return `select sport, count(*) as count from GoldMedal where country = '${country}' group by sport order by count(*) desc limit 1`;
};

/*
Returns a SQL query string that will find the event this country has
won the most medals, along with the number of medals aliased to 'count'.
*/

const bestEvent = country => {
  return;
};

/*
Returns a SQL query string that will find the number of male medalists.
*/

const numberMenMedalists = country => {
  return;
};

/*
Returns a SQL query string that will find the number of female medalists.
*/

const numberWomenMedalists = country => {
  return;
};

/*
Returns a SQL query string that will find the athlete with the most medals.
*/

const mostMedaledAthlete = country => {
  return;
};

/*
Returns a SQL query string that will find the medals a country has won
optionally ordered by the given field in the specified direction.
*/

const orderedMedals = (country, field, sortAscending) => {
  return;
};

/*
Returns a SQL query string that will find the sports a country has
won medals in. It should include the number of medals, aliased as 'count',
as well as the percentage of this country's wins the sport represents,
aliased as 'percent'. Optionally ordered by the given field in the specified direction.
*/

const orderedSports = (country, field, sortAscending) => {
  return;
};

module.exports = {
  createCountryTable,
  createGoldMedalTable,
  goldMedalNumber,
  mostSummerWins,
  mostWinterWins,
  bestDiscipline,
  bestSport,
  bestYear,
  bestEvent,
  numberMenMedalists,
  numberWomenMedalists,
  mostMedaledAthlete,
  orderedMedals,
  orderedSports
};
