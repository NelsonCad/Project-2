let auth0;

const login = async () => {
    await auth0.loginWithRedirect({
        redirect_uri: window.location.origin
    });
};

// logout flow
const logout = () => {
    try {
        console.log("Logging out");
        auth0.logout({
            returnTo: window.location.origin
        });
    } catch (err) {
        console.log("Log out failed", err);
    }
};

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

// function used to update the website
const updateUI = async () => {
    const isAuthenticated = await auth0.isAuthenticated();

    document.getElementById("btn-logout").disabled = !isAuthenticated;
    document.getElementById("btn-login").disabled = isAuthenticated;

    if (isAuthenticated) {
        document.getElementById("gated-content").classList.remove("hidden");

        document.getElementById(
            "ipt-access-token"
        ).innerHTML = await auth0.getTokenSilently();

        document.getElementById("ipt-user-profile").innerHTML = JSON.stringify(
            await auth0.getUser()
        );

    } else {
        document.getElementById("gated-content").classList.add("hidden");
    }

};

// Will run when page finishes loading
window.onload = async () => {
    await configureClient();

    updateUI();

    const isAuthenticated = await auth0.isAuthenticated();

    if (isAuthenticated) {
        // show the gated content
        return;
    };

    // check for the code and state parameters
    const query = window.location.search;
    if (query.includes("code=") && query.includes("state=")) {

        // Process the login state
        await auth0.handleRedirectCallback();

        updateUI();

        // Use replaceState to redirect the user away and remove the querystring parameters
        window.history.replaceState({}, document.title, "/");
    };
}

