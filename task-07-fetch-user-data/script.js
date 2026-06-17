const container = document.getElementById("users-container");
const loading = document.getElementById("loading");
const searchInput = document.getElementById("search");

let users = [];

function displayUsers(data) {

    container.innerHTML = "";

    data.forEach(user => {

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h2>${user.name}</h2>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Website:</strong> ${user.website}</p>
            <p><strong>City:</strong> ${user.address.city}</p>
        `;

        container.appendChild(card);
    });

    if (data.length === 0) {
        container.innerHTML = "<p>No user found.</p>";
    }
}

async function fetchUsers() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        users = await response.json();

        loading.style.display = "none";

        displayUsers(users);

    } catch (error) {

        loading.innerText = "Failed to load users. Please try again.";
    }
}

searchInput.addEventListener("input", () => {

    const searchValue = searchInput.value.toLowerCase();

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchValue)
    );

    displayUsers(filteredUsers);
});

fetchUsers();