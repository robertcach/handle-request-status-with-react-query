export function getUsers(page: string) {
  return fetch(`https://reqres.in/api/users?page=${page}&per_page=5`).then(
    (res) => res.json()
  );
}
