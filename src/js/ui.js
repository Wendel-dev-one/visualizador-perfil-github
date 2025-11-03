export function showLoading(container) {
    container.innerHTML = "<span>Carregando...</span>";
}

export function showProfile(container, userData) {
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
    `;
}

export function showError(container, message) {
    container.innerHTML = "";
    alert(message);
}
