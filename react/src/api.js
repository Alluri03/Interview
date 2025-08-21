// Mock API that resolves with 25 users
export async function fetchUsers() {
  // simulate latency
  await new Promise(r => setTimeout(r, 50));
  const users = Array.from({length:25}).map((_,i)=> ({
    id: i+1,
    name: `User ${i+1}`,
    email: `user${i+1}@example.com`
  }));
  return users;
}
