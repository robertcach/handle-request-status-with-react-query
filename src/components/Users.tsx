import { useUsers } from '../hooks/useUsers';

export const Users = () => {
  const { isLoading, isError, users, isLastPage, fetchNextPage } = useUsers();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!users.length) {
    <p>There is no users</p>;
  }

  if (isError) {
    return <p>There was an error</p>;
  }

  return (
    <>
      {users?.map((user) => (
        <p key={user.id}>{user.first_name}</p>
      ))}

      {isLastPage ? (
        <p>There is no more users</p>
      ) : (
        <button onClick={async () => await fetchNextPage()}>Show more</button>
      )}
    </>
  );
};
