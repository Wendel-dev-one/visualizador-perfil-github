const btnSearch = document.getElementById('btn-search');
const inputSearch = document.getElementById('input-search');
const profileResults = document.querySelector('.profile-results');

const BASE_URL = "https://api.github.com";

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;

    if (userName) {
        profileResults.innerHTML = "<span>Carregando...</span>";
        const response = await fetch(`${BASE_URL}/users/${userName}`);

        try {

            if (!response.ok) {
                alert("Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.");
                profileResults.innerHTML = "";
                return;
            }

            const userdata = await response.json();
            console.log(userdata); // Apenas para verificar se os dados foram obtidos corretamente 

            profileResults.innerHTML = `
            <div class="profile-card">
                <img src="${userdata.avatar_url}" alt="Avatar de ${userdata.name}" class="profile-avatar">
                <div>
                    <h2>${userdata.name}</h2>
                    <p>${userdata.bio || "Não possui BIO cadastrada 😓."}</p>
                </div>
            </div>`;

        } catch (error) {
            console.error("Erro ao buscar o perfil do usuário:", error)
            alert("Ocorreu um erro ao buscar o perfil do usuário. Por favor, tente novamente mais tarde.")
            profileResults.innerHTML = "";
        }

    } else {
        alert('Por favor, digite o nome de um usuário do GitHub.');
        profileResults.innerHTML = "";
    }
});

inputSearch.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        btnSearch.click();
    }
});
