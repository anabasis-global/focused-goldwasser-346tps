function Page({ data }) {
  // Render data...
  console.log(data);

  let items = Object.valeus(data);

  console.log(items);
  return <div>page</div>;
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.github.com/meta`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Page;
