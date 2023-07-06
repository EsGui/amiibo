import HomeBody from "./components/home_components/HomeBody";
import HomeHeader from "./components/home_components/HomeHeader";
import HomeSearch from "./components/home_components/HomeSearch";

export default function Home() {
  return (
    <main>
      <HomeHeader />
      <HomeSearch />
      <HomeBody />
    </main>
  )
}
