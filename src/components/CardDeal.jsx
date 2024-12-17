import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Buy gMetis on Hercules DEX</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Purchase gMetis tokens easily and securely on Hercules DEX. Join our community and start earning rewards today!
        </p>
        <a href="https://herculesdex.com" className="mt-10 inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded">
          Buy on Hercules DEX
        </a>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal
