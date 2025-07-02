//login with id and user
const users = [
  { username: "sokpheng", id: "123@sokphengict" },
  { username: "boromey", id: "123@sokphengict" },
  { username: "peaktra", id: "123@sokphengict" },
  { username: "saem", id: "123@sokphengict" },
  { username: "sangyuth", id: "123@sokphengict" },
  { username: "channary", id: "123@sokphengict" },
  { username: "sreypenh", id: "123@sokphengict" },
  { username: "kimleang", id: "123@sokphengict" },
  { username: "sarorng", id: "123@sokphengict" },
  { username: "sreyleav", id: "123@sokphengict" },
  { username: "vuthysony", id: "123@sokphengict" },
  { username: "somapeavy", id: "123@sokphengict" },
  { username: "sela", id: "123@sokphengict" },
  { username: "nary", id: "123@sokphengict" },
  { username: "channa", id: "123@sokphengict" },
  { username: "visal", id: "123@sokphengict" },
  { username: "molina", id: "123@sokphengict" },
  { username: "sovanrachana", id: "123@sokphengict" },
  { username: "thida", id: "123@sokphengict" },
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
