import React from 'react'
import ProductSection from './ProductSection'
import ProductList from './ProductList'

const TopRated = () => {
  const title = "Building Materials";
  const description = "Explore the best materials for your construction and renovation projects.";
 
  return (
    <div className='container mx-auto'>
      <ProductSection 
        title={title} 
        description={description} 
      />
      <ProductList/>
      
    </div>
  )
}

export default TopRated
