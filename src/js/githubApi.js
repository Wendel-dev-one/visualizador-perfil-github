const BASE_URL = "https://api.github.com";

export async function fetchGitHubUser(userName) {
    const response = await fetch(`${BASE_URL}/users/${userName}`);
    if (!response.ok) {
        throw new Error("Usuário não encontrado");
    }
    return response.json();
}

export async function fetchGitHubUserRepos(userName) {
    const response = await fetch(`${BASE_URL}/users/${userName}/repos?per_page=10&sort=created`);
    if (!response.ok) {
        throw new Error("Repositórios não encontrados");
    }
    return await response.json();
}