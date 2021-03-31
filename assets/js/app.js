import { ProjectsList } from './data.js';
import { ProjectCard } from './components/ProjectCard.js';

const $iconBox = document.getElementById('icon-box'),
  $navList = document.getElementById('nav-list'),
  $overlay = document.getElementById('overlay'),
  $projectsContainer = document.getElementById('projects-content');

function showMenu() {
  $iconBox.classList.toggle('active');
  $overlay.classList.toggle('active');
  $navList.classList.toggle('active');
}

function loadComponent(project, component) {
  const el = document.createElement('div');
  el.innerHTML = component(project);
  return el.firstElementChild;
}

function render(listProjects, component, $container) {
  listProjects.forEach(project => {
    $container.append(loadComponent(project, component));
  });
}

function renderDOM() {
  render(ProjectsList, ProjectCard, $projectsContainer);
}

$iconBox.addEventListener('click', showMenu);
document.addEventListener('DOMContentLoaded', renderDOM);
