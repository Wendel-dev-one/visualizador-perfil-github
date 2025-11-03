export function showLoading(container) {
    container.innerHTML = "<span>Carregando...</span>";
}

export function showProfile(container, userData, userRepos) {

    const repositoriesHTML = userRepos && userRepos.length > 0 ? userRepos.map(repo => `
        <div class="repository-card">
            <a href="${repo.html_url}" target="_blank">
                <h3>${repo.name}</h3>
                <div class="repository-stats">
                    <span>⭐ Stars: ${repo.stargazers_count}</span>
                    <span>🍴Forks: ${repo.forks_count}</span>
                    <span>👀 Watches: ${repo.watchers_count}</span>
                    <span>🧑🏾‍💻 Language: ${repo.language || 'Não informado'}</span>
                </div>
            </a>    
        </div>
        `).join("") : `<p>Nenhum repositório encontrado!</p>`;

    container.innerHTML = `
        <div class="profile-card">
            <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
            <div>
                <h2>${userData.name}</h2>
                <p>${userData.bio || "Não possui BIO cadastrada 😓."}</p>
            </div>
        </div>
        <div class="profile-counters">
            <div class="followers">
                <h4> 👤 Seguidores</h4>
                <span>${userData.followers}</span>
            </div>
            <div class="following">
                <h4> 👤 Seguindo</h4>
                <span>${userData.following}</span>
            </div>
        </div>

        <div class="profile-repositories">
            <h2>Repositórios</h2>
            <div class="repositories">
                ${repositoriesHTML}
            </div>
        </div>
    `;
}

export function showError(container, message) {
    container.innerHTML = "";
    alert(message);
}
