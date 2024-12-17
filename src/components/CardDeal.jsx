import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Unlock the Power of gMetis on Hercules DEX</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Join the revolution with gMetis, now whitelisted on the leading DEX on Metis: Hercules DEX. Secure your gMetis tokens effortlessly and become a part of a thriving community. Holding gMetis not only boosts your rewards but also positions you at the forefront of innovation. Don't miss out on this opportunity to maximize your earnings and influence within the gMetis ecosystem.
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
