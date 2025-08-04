import type { NextPage } from "next";
import Header from "../../components/Header";
import ProductList from "../../components/ProductList";
import Footer from "../../components/Footer";



const Page: NextPage = () => {
    
  return (
    <>
    <Header />
    <ProductList />
    <Footer />
    </>
  )
}

export default Page