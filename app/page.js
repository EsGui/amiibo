import HomeBody from "./components/home_components/HomeBody";
import HomeFooter from "./components/home_components/HomeFooter";
import HomeHeader from "./components/home_components/HomeHeader";
import HomeSearch from "./components/home_components/HomeSearch";

export default function Home() {
  return (
    <main>
      <HomeHeader />
      <HomeSearch />
      <HomeBody />
      <HomeFooter />
    </main>
  )
}
