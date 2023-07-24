import Image from "next/image";


let apps = ["glpi", "zabbix"]



function Page({ data: any }) {
  // Render data...
  console.log(data);

  let items = Object.valeus(data);

  console.log(items);
  return <div>page</div>;
}



export default function Home({ data:any }) {


  

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
