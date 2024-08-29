// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'



// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      
    </Layout>  
    
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page" />
//export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage