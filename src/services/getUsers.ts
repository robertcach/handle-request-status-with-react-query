export function getUsers(pageParam: string) {
  return fetch(`https://reqres.in/api/users?page=${pageParam}&per_page=5`).then(
    (res) => res.json()
  );
}
