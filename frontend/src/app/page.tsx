import Image from "next/image";

export default function Home({ data }) {
  return (
    <main className={"main"}>
      <header>Header</header>
      <div className="flex flex-row align-center justify-beetween">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </main>
  );
}
