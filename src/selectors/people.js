/**
 * Returns people based on filter state and pagination to show in people list
 */
export default ({ text }, people, { page }, pageRes = 400) => {
  const end = page * pageRes; // 2 * 100 = 200
  const start = (page * pageRes) - pageRes; // (2 * 100) - 100= 100
  return (
    people.filter(({ name }) => name.toLowerCase().includes(text))
    .slice(start, end)
  );
};