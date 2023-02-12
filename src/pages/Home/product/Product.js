import React from 'react'
import product1 from '../../../assets/Rectangle 4.png'
import product2 from '../../../assets/Rectangle 5.png'
import product3 from '../../../assets/Rectangle6.png'

const Product = () => {
  return (
    <div>
      <div className="text-center my-[5rem]">
        <p className="font-serif">Whats new</p>
        <h1 className="lg:text-5xl font-bold my-5">SHOP THE LATEST</h1>
        <p className="mb-1">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </p>
        <p>
          Cum sociis Theme natoque penatibus et magnis dis parturient montes,
          nascetur
        </p>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 lg:pl-[5rem]">
        <div className="card card-compact w-96 bg-base-100">
          <figure>
            <img src={product1} alt="Shoes" />
          </figure>
          <div className="card-body ml-5">
            <h2 className="card-title text-sm">Rogue HG 2.0 Bumper Plates</h2>
            <p>
              $409<span className="font-semibold text-red-600 ml-1">$300</span>
            </p>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100">
          <figure>
            <img src={product2} alt="Shoes" />
          </figure>
          <div className="card-body ml-5">
            <h2 className="card-title text-sm">Rogue HG 2.0 Bumper Plates</h2>
            <p>
              $409<span className="font-semibold text-red-600 ml-1">$300</span>
            </p>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100">
          <figure>
            <img src={product3} alt="Shoes" />
          </figure>
          <div className="card-body ml-5">
            <h2 className="card-title text-sm">Rogue HG 2.0 Bumper Plates</h2>
            <p>
              $409<span className="font-semibold text-red-600 ml-1">$300</span>
            </p>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100">
          <figure>
            <img src={product1} alt="Shoes" />
          </figure>
          <div className="card-body ml-5">
            <h2 className="card-title text-sm">Rogue HG 2.0 Bumper Plates</h2>
            <p>
              $409<span className="font-semibold text-red-600 ml-1">$300</span>
            </p>
          </div>
        </div>
        
      </div>
      <div className="flex justify-center my-[4rem]">
             <button className="btn btn-outline btn-black rounded-none px-[2.5rem]">VIEW ALL PRODUCTS</button>
        </div>
    </div>
  )
}

export default Product
