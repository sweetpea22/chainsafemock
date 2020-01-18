// api call to pinned repos 
const name = "?username=chainsafe";
const url = `https://gh-pinned-repos.now.sh/${name}`;
const htmlWrapper = document.querySelector('.projects .row');


async function getPinnedRepos() {
  let response = await fetch(url);
  let json = await response.json()
  return json;
}

const renderRepo = repo => {
  const markup = `<div class="work__card">
    <div class="card-body">
      <a href="https://github.com/chainsafe/${repo.repo}">
        <h5 class="text-left mt-1 work__card--title">${repo.repo}</h5>
        <span class="work__accent"></span>
      </a>
      <div class="h6-wrapper mb-2">
        <p class="card-subtitle mb-4">
          ${repo.description}
        </p>
        <iframe src="https://ghbtns.com/github-btn.html?user=chainsafe&repo=${repo.repo}&type=fork&count=true&size=large" frameborder="0" scrolling="0" width="138px" height="30px"></iframe>
        <iframe src="https://ghbtns.com/github-btn.html?user=chainsafe&repo=${repo.repo}&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170px" height="30px"></iframe>
        </div>`
  htmlWrapper.insertAdjacentHTML('afterbegin', markup)
}

getPinnedRepos()
  .then(results => {
    results.map(repo => {
      renderRepo(repo)
    })
  })
  .catch(err => console.error(err));

// animations 

const aboutPage = document.querySelector('.about--wrapper'),
  headerButton = document.querySelector('.header__coa'),
  aboutColumns = document.querySelectorAll('.about_col');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  if (scrolled >= (headerButton.offsetHeight)) {

    aboutColumns.forEach(col => {
      col.classList.add('fadeInOnScroll');
    })
  }
})
