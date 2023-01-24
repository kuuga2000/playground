import generateJoke from "./generateJoke";
import './styles/main.scss';
import rider from './assets/1.jpg';

const riderImg = document.getElementById('rider');
generateJoke();
riderImg.src = rider;