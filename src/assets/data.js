import budget from './long.png';
import covidTracker from './covidtraker.png';
import rentar from './rentar.png';
import toDoList from './toDoList.png';
import rentarDesktop from './rentar_desktop.png';

const data = [
  {
    id: 1,
    name: 'myBudget',
    tech_list: [
      'Rails',
      'Ruby',
      'Sass',
      'HTML',
      'RSpec',
    ],
    description: 'myBudget is a mobile web application where you can manage your budget: you have a list of transactions associated with a category so that you can see how much money you spent and on what',
    live_link: 'https://mybudget-railsapp.herokuapp.com/',
    repo_link: 'https://github.com/TimmyChan99/Budget-app/',
    mobile_img: budget,
    desktop_img: budget,
  },
  {
    id: 2,
    name: 'COVID-19 Tracker',
    tech_list: [
      'React',
      'Redux',
      'JavaScript',
      'CSS',
      'Jest',
    ],
    description: 'Covid-19 Tracker is a mobile web application that provides the user the new cases of Covid-19 for each country and also the regions within the country by getting all the data and the statistics from Narrativa.',
    live_link: 'https://timmychan99.github.io/covid19-tracker/',
    repo_link: 'https://github.com/TimmyChan99/covid19-tracker',
    mobile_img: covidTracker,
    desktop_img: covidTracker,
  },
  {
    id: 3,
    name: 'Car rental app',
    tech_list: [
      'React',
      'Redux',
      'Ruby on Rails',
      'JavaScript',
      'Ruby',
    ],
    description: 'This webapp is allows users to get list of cars, cars details, reserve a car and check their reservations list. If the user is the admin that give them the authorization to delete from or add a new car to the list of car. Users need to sign up or sign in to access the API endponits. They can sign up or sign in using the API endpoints.',
    live_link: 'https://car-renta.herokuapp.com/',
    repo_link: 'https://github.com/TimmyChan99/Car-rental-app-back-end',
    mobile_img: rentar,
    desktop_img: rentarDesktop,
  },
  {
    id: 4,
    name: 'To-Do List',
    tech_list: [
      'HTML',
      'CSS',
      'JavaScript',
      'Webpack',
    ],
    description: 'To-Do List web app that helps to organize your day. You can add, remove, check the completed tasks, and store your list in your browser (local storage). Build using Webpack and JavaScript.',
    live_link: 'https://timmychan99.github.io/To_Do_list/',
    repo_link: 'https://github.com/TimmyChan99/To_Do_list',
    mobile_img: toDoList,
    desktop_img: toDoList,
  },
];

export default data;
