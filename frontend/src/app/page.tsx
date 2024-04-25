import Image from "next/image";
import Auth from "./Components/Auth";
import ComposeEmail from "./Components/ComposeEmail";

export default function Home() {
  return (
    <main>
      {/* <Auth /> */}
      <ComposeEmail />
    </main>
  );
}
