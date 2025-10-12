import Header from "./components/Header";
import logo from "./assets/logo.png";

function App() {
  const links = [
    { label: "Home", href: "/" },
    { label: "Sobre", href: "#" },
    { label: "Serviços", href: "#" },
    { label: "Contato", href: "#" },
  ];

  return (
    <div className="p-4 bg-blue-400 text-white">
      <Header
        logo={logo}
        companyName="Ribeirão Câmbio"
        navLinks={links}
        maxWidth="1200px"
      />
    </div>
  );
}

export default App;
