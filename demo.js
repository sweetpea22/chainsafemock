// api call to pinned repos 
const key = "?username=chainsafe"
const url = `https://gh-pinned-repos.now.sh/${key}`

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

// animations // 

const aboutPage = document.querySelector('#about');
const headerButton = document.querySelector('.header__coa');
const content = document.querySelector('body');

const fadeInOnScroll = () => {
  const scrolledToSection = (this.scrollHeight - this.scrollTop) === this.clientHeight;
  if (scrolledToSection) {

  }
  // fadeup 
  TweenMax.from([simpleLogo, complexLogo], 1.2, {
    opacity: 0,
    y: -30,
    delay: 1.1,
    ease: Expo.easeInOut
  })
};

// call animation when header button is hit
headerButton.addEventListener('click', () => {
  fadeInOnScroll.call(aboutPage)
})
