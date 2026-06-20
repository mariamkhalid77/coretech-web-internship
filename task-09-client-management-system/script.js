let clients = JSON.parse(localStorage.getItem("clients")) || [];

const form = document.getElementById("clientForm");
const clientsContainer = document.getElementById("clientsContainer");
const searchInput = document.getElementById("searchInput");

let editIndex = null;

// Save data
function saveClients() {
  localStorage.setItem("clients", JSON.stringify(clients));
}

// Dashboard Cards Update
function updateDashboard() {
  document.getElementById("totalClients").textContent =
    clients.length;

  document.getElementById("pendingClients").textContent =
    clients.filter(client => client.status === "Pending").length;

  document.getElementById("progressClients").textContent =
    clients.filter(client => client.status === "In Progress").length;

  document.getElementById("completedClients").textContent =
    clients.filter(client => client.status === "Completed").length;
}

// Display Clients
function displayClients(data = clients) {

  clientsContainer.innerHTML = "";

  if (data.length === 0) {
    clientsContainer.innerHTML = `
      <h3 style="text-align:center;">
        No Clients Found
      </h3>
    `;
    updateDashboard();
    return;
  }

  data.forEach((client, index) => {

    let statusClass = "";

    if (client.status === "Pending") {
      statusClass = "pending";
    } else if (client.status === "In Progress") {
      statusClass = "progress";
    } else {
      statusClass = "completed";
    }

    clientsContainer.innerHTML += `
      <div class="client-card">

        <h3>${client.name}</h3>

        <p><strong>Email:</strong> ${client.email}</p>

        <p><strong>Phone:</strong> ${client.phone}</p>

        <p><strong>Company:</strong> ${client.company}</p>

        <p><strong>Project:</strong> ${client.project}</p>

        <p class="status ${statusClass}">
          ${client.status}
        </p>

        <div class="actions">

          <button
            class="edit-btn"
            onclick="editClient(${index})">
            Edit
          </button>

          <button
            class="delete-btn"
            onclick="deleteClient(${index})">
            Delete
          </button>

        </div>

      </div>
    `;
  });

  updateDashboard();
}

// Add / Update Client
form.addEventListener("submit", function (e) {

  e.preventDefault();

  const client = {

    name: document.getElementById("name").value,

    email: document.getElementById("email").value,

    phone: document.getElementById("phone").value,

    company: document.getElementById("company").value,

    project: document.getElementById("project").value,

    status: document.getElementById("status").value

  };

  if (editIndex === null) {
    clients.push(client);
  } else {
    clients[editIndex] = client;
    editIndex = null;
  }

  saveClients();
  displayClients();
  form.reset();
});

// Edit Client
function editClient(index) {

  const client = clients[index];

  document.getElementById("name").value =
    client.name;

  document.getElementById("email").value =
    client.email;

  document.getElementById("phone").value =
    client.phone;

  document.getElementById("company").value =
    client.company;

  document.getElementById("project").value =
    client.project;

  document.getElementById("status").value =
    client.status;

  editIndex = index;
}

// Delete Client
function deleteClient(index) {

  if (confirm("Delete this client?")) {

    clients.splice(index, 1);

    saveClients();

    displayClients();
  }
}

// Search Client
searchInput.addEventListener("input", function () {

  const value = this.value.toLowerCase();

  const filteredClients = clients.filter(client =>

    client.name.toLowerCase().includes(value) ||

    client.email.toLowerCase().includes(value) ||

    client.company.toLowerCase().includes(value)

  );

  displayClients(filteredClients);
});

displayClients();