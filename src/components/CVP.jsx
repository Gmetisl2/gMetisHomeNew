import React from 'react';
import { cvpbadge } from '../assets'; // Ensure cvpbadge.svg is in the assets folder
import styles, { layout } from '../style';

const CVP = () => {
  return (
    <section id='CVP' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={cvpbadge}
          alt='CVP Badge'
          className='w-[100%] h-[100%] relative z-[5] object-contain'
        />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Community Verified Project</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Metis' <a href="https://www.metis.io/ceg">Community Ecosystem Governance</a> (CEG) allows the community to have a direct connection with projects launching in the ecosystem. Metis' commitment to decentralization led it to transfer to the community the important act of approving project partnerships by introducing <a href="https://docs.ceg.vote/community-verified-projects">Community Verified Projects</a> (CVP). CVP approval grants projects a state of validation and support from the community.
        </p>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          gMetis was approved by the community via a CVP <a href="https://snapshot.box/#/s:metislayer2.eth/proposal/0xa78367dca7840d111d1762c55bcabf18c600e7cb3783d4b766c7f821e4a9a33a">proposal and vote</a>.
        </p>
      </div>  
    </section>
  );
}

export default CVP;