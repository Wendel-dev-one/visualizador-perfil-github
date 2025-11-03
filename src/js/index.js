import { fetchGitHubUser, fetchGitHubUserRepos } from './githubApi.js';
import { showLoading, showProfile, showError } from './profileView.js';

const btnSearch = document.getElementById('btn-search');
const inputSearch = document.getElementById('input-search');
const profileResults = document.querySelector('.profile-results');

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;
    if (userName) {
        showLoading(profileResults);
        try {
            const userData = await fetchGitHubUser(userName);
            const userRepos = await fetchGitHubUserRepos(userName);
            showProfile(profileResults, userData, userRepos);
        } catch (error) {
            showError(profileResults, error.message || 'Ocorreu um erro ao buscar o perfil do usuário. Por favor, tente novamente mais tarde.');
        }
    } else {
        showError(profileResults, 'Por favor, digite o nome de um usuário do GitHub.');
    }
});

inputSearch.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        btnSearch.click();
    }
});
