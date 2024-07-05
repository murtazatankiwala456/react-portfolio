import Header from "../components/common/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Footer from "../components/common/Footer";
function HomePage() {
  return (
    <>
      <Header></Header>
      <main className="container">
        <Hero></Hero>
        <Projects></Projects>
      </main>
      <Footer></Footer>
    </>
  );
}

export default HomePage;
