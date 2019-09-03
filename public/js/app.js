let auth0;


//Retrieves the auth configuration from the server
const fetchAuthConfig = () => fetch("/auth_config.json");

// initializes the Auth0 client
const configureClient = async () => {
    const response = await fetchAuthConfig();
    const config = await response.json();

    auth0 = await createAuth0Client({
        domain: config.domain,
        client_id: config.clientId
    });
};

// Will run when page finishes loading
window.onload = async () => {
    await configureClient();


    updateUI();
};

const updateUI = async () => {
    const isAuthenticated = await auth0.isAuthenticated();
  
    document.getElementById("btn-logout").disabled = !isAuthenticated;
    document.getElementById("btn-login").disabled = isAuthenticated;
  };