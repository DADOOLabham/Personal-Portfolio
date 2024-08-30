import React from 'react'
import styles from "./App.module.css"
import { About } from './components/About/About'
import { Contact } from './components/Contact/Contact'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { Experience } from './components/Experience/Experience'
import { Projects } from './components/Projects/Project'


const page = () => {
  return (
    <div className={styles.page}>
     <Navbar/>
     <Hero/>
     <About/>
     <Experience/>
     <Projects/>
     <Contact/>
    </div>
  )
}

export default page
