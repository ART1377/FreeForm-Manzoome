import Hero from "./components/HomepageSections/Hero/Hero";
import InitializeForm from "./components/HomepageSections/InitializeForm/InitializeForm";
import Navbar from "./components/Navbar/Navbar";
import Templates from "./components/HomepageSections/Templates/Templates";
import OneClickForm from './components/HomepageSections/OneClickForm/OneClickForm'
import Articles from "./components/HomepageSections/Articles/Articles";
import LastSection from "./components/HomepageSections/LastSection/LastSection";
import Footer from './components/Footer/Footer'
import Questions from "./components/HomepageSections/Questions/Questions";
import Properties from "./components/HomepageSections/Properties/Properties";
import Design from "./components/HomepageSections/Design/Design";
import FormChanges from "./components/HomepageSections/FormChanges/FormChanges";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <InitializeForm />
      <Templates />
      <Properties />
      <Design/>
      <OneClickForm />
      <FormChanges/>
      <Questions />
      <Articles />
      <LastSection />
      <Footer />
    </>
  );
}

export default App;
