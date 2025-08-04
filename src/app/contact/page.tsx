import type { NextPage } from "next";
import Header from "../../components/Header";
import Contact from "../../components/Contact";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";



const Page: NextPage = () => {
    
    
  return (
    <>
    <Header />
    <Contact />
    <ContactForm />
    <Footer />
    </>
  )
}

export default Page