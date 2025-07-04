//login with id and user
const users = [
  { username: "Sokpheng", id: "123@sokphengict" },
  { username: "Boromey", id: "123@sokphengict" },
  { username: "Peaktra", id: "123@sokphengict" },
  { username: "Saem", id: "123@sokphengict" },
  { username: "Sangyuth", id: "123@sokphengict" },
  { username: "Channary", id: "123@sokphengict" },
  { username: "Sreypenh", id: "123@sokphengict" },
  { username: "Kimleang", id: "123@sokphengict" },
  { username: "Sarorng", id: "123@sokphengict" },
  { username: "Sreyleav", id: "123@sokphengict" },
  { username: "Vuthysony", id: "123@sokphengict" },
  { username: "Somapeavy", id: "123@sokphengict" },
  { username: "Sela", id: "123@sokphengict" },
  { username: "Nary", id: "123@sokphengict" },
  { username: "Channa", id: "123@sokphengict" },
  { username: "Visal", id: "123@sokphengict" },
  { username: "Molina", id: "123@sokphengict" },
  { username: "Sovanrachana", id: "123@sokphengict" },
  { username: "Thida", id: "123@sokphengict" },
  { username: "Mrsamley", id: "123@mrsamley" },
  // Add more from your sheet
];

function login() {
  const username = document.getElementById("username").value.trim();
  const studentId = document.getElementById("studentId").value.trim();

  const valid = users.find(user =>
    user.username === username && user.id === studentId
  );

  if (valid) {
    alert("Login Successful!");
    window.location.href = "CONTENTS.html";
  } else {
    alert("Invalid Username or Student Card ID.");
  }

  return false;
}

//login with google acc
function handleCredentialResponse(response) {
  const user = decodeJwt(response.credential);
  console.log("Logged in as:", user.email, user.name);
  alert(`Logged in as: ${user.name} (${user.email})`);
  // Optional: Save to sessionStorage
  sessionStorage.setItem("email", user.email);
  sessionStorage.setItem("name", user.name);
  window.location.href = "CONTENTS.html";
}

function decodeJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
      .join('')
  );
  return JSON.parse(jsonPayload);
}
