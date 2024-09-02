const URL = "http://localhost:3000/items";

const userData = {
  id: 32,
  name: "cici",
  userName: "cici",
  email: "alice@example.com",
};
const updateData = {
  email: "alice@example.com",
};

async function creatUser() {
  const response = await fetch(URL, {
    method: "post",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(userData),
  });
  console.log(response);
}
async function update() {
  const response = await fetch(`${URL}/907d`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateData),
  });
  console.log(response);
  const data = await response.json();
  console.log(data);
}

async function delate() {
  const response = await fetch(`${URL}/96ff`, {
    method: "delete",
  });
}

update();

(async () => {
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
})();
