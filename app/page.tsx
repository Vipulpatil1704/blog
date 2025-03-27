import Image from "next/image";
import PageHeader from "./components/PageHeader/PageHeader";
import Blog from "./components/Blog/page";

export default function Home() {
  return (
    <div>
      <PageHeader title={"Home"}/>
        <Blog/>
    </div>
  );
}
