import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { BiMale } from "react-icons/bi";
import { FaFemale } from "react-icons/fa";
import { GrStorage } from "react-icons/gr";
import { FcElectronics } from "react-icons/fc";
import { GiJewelCrown } from "react-icons/gi";
import { FaBagShopping } from "react-icons/fa6";
import './Home.css'; 


function Home({ products }) {
  return (
    <div className="page-container">
      <h2 className='home-products-heading'>Welcome to the Home Page</h2>
      <div className='icon-container'>
        <button type='button' className='icon-tabs'><BiMale /></button>
        <button type='button' className='icon-tabs'><FaFemale /></button>
        <button type='button' className='icon-tabs'><GrStorage /></button>
        <button type='button' className='icon-tabs'><FcElectronics /></button>
        <button type='button' className='icon-tabs'><GiJewelCrown /></button>
        <button type='button' className='icon-tabs'><FaBagShopping /> </button>
        <button type='button' className='icon-tabs'><BiMale /></button>
        <button type='button' className='icon-tabs'><FaFemale /></button>
        <button type='button' className='icon-tabs'><GrStorage /></button>
        <button type='button' className='icon-tabs'><FcElectronics /></button>
        <button type='button' className='icon-tabs'><GiJewelCrown /></button>
        <button type='button' className='icon-tabs'><FaBagShopping /> </button>
    
      </div>
      
      <div className="container">
      <h2 className='home-products-heading'>All Products</h2>
        <div className="row">
        <div className='md-4 lg-3'>
          
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
