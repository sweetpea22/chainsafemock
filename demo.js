// api call to pinned repos 
const key = "?username=chainsafe"
const url = `https://gh-pinned-repos.now.sh/${key}`

const htmlWrapper = document.querySelector('.projects');


async function getPinnedRepos() {
    let response = await fetch(url);
    let json = await response.json()
    return json;
}

const renderRepo = repo => {
    const markup = `<div class="card-alt">
    <div class="card-body">
      <a href="https://github.com/chainsafe">
        <h5 class="text-left mt-1 card-title-alt">${repo.repo}</h5>
        <span class="work__accent"></span>
      </a>
      <div class="h6-wrapper mb-2">
        <p class="card-subtitle mb-4">
          ${repo.description}
        </p>
        </div>`
    htmlWrapper.insertAdjacentHTML('afterbegin', markup)
}
// to be used when url is added to api
// <iframe src="https://ghbtns.com/github-btn.html?user=chainsafe&repo=${repo.repo}&type=fork&count=true&size=large" frameborder="0" scrolling="0" width="158px" height="30px"></iframe>

getPinnedRepos()
    .then(results => {
        results.map(repo => {
            renderRepo(repo)
        })
    })
    .catch(err => console.error(err));
