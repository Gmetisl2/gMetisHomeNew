import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>Discover the Power of gMetis</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Learn how gMetis leverages AI to create a dynamic and rewarding community. Dive into our comprehensive documentation to understand our tokenomics, reward system, and more.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
        <Button 
          styles="mt-10" 
          text="Read Documentation" 
          link="https://docs.gmetis.io" 
        />
      </div>
    </section>
  )
}

export default CTA
