import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import About from "../components/About";
function AboutPage() {
  return (
    <>
      <Header></Header>
      <main className="container">
        <About></About>
      </main>
      <Footer></Footer>
    </>
  );
}

export default AboutPage;
