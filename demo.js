const key = "?username=chainsafe"
const url = `https://gh-pinned-repos.now.sh/${key}`

async function getPinnedRepos() {
    let response = await fetch(url);
    let json = await response.json()
    return json;
}


getPinnedRepos()
    .then(results => {
        results.map(repo => {
            console.log(repo.repo, repo.stars)
        })
    })
    .catch(err => console.error(err));
