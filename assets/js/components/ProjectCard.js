export function ProjectCard({
  name,
  description,
  image,
  isRigthSide,
  url,
  liveDemo,
}) {
  return `
        <article class="project ${isRigthSide ? 'r-side' : ''}">
            <img
              src="${image}"
              alt="${name} project"
              class="project__image"
            />
            <div class="project__description">
              <h3 class="heading">${name}</h3>
              <p class="description">${description}</p>
              <div class="buttons">
                <button class="btn btn--transparent">
                    <a href="${url}">Ver código</a>
                </button>
                <button class="btn btn--soft-blue">
                    <a href="${liveDemo}">ver proyecto</a>
                </button>
              </div>
            </div>
          </article>
    `;
}
