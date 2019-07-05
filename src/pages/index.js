import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hola Nai vamos a empezar a modificar esto !?</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Button>algo</Button>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
