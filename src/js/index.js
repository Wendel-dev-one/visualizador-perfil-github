import { fetchGitHubUser } from './githubApi.js';
import { showLoading, showProfile, showError } from './ui.js';

const btnSearch = document.getElementById('btn-search');
const inputSearch = document.getElementById('input-search');
const profileResults = document.querySelector('.profile-results');

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;
    if (userName) {
        showLoading(profileResults);
        try {
            const userData = await fetchGitHubUser(userName);
            showProfile(profileResults, userData);
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
