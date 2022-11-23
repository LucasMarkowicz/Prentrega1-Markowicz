import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import ItemListContainer from '../components/ItemListContainer'
import data from '../utils/data'

export default function Home() {
  return (
    <div>
      <Navbar title={"Tienda Apple Import"}>

      </Navbar>
        <h2 className='text-center mt-5 mb-5'>Apple Products</h2>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {data.products.map((product) => (
              <ItemListContainer key={product.slug} product={product} />
            ))}
          </div>
        </div>
    </div>
  );
}