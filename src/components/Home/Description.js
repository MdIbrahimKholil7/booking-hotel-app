import React from 'react';
import reception from '../../assets/images/reception.jpg'
const Description = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-100">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={reception} class="w-[320px] md:w-[390px] rounded-lg shadow-2xl" alt='receptionImage'/>
                    <div className='md:pr-9 pr-0 mt-9 md:mt-0'>
                        <h1 class="md:text-4xl text-3xl mb-2 font-bold tracking-[2px] text-[#1b2857fb] font-oleo">Hotel The Vilena</h1>
                        <h3 className='text-gray-500 text-[20px] tracking-[7px]'>DAYS INN THERE YOU GO</h3>
                        <p class="py-6 text-gray-400">Eros id Consequat, facilisis, eros ridiculus vehicula justo lacinia. Spaptent and aenean. Justo facilisi gravida nascetur quis rutrum nostra. Nisl quisqu all per. Ante platea aenean Nunc turpis tristique. Primis aliquet inceptos all seamper per. Posuere litora vulputate sem risus habit praesent ultric enim leo pulvinar enim arcu blandit sit. Natoq dis. Suspendisse nonummy pellentesque place. Malesuad aenean. Leo curabitur elementum ultr. Rhoncus fusce ac eu nunc cras euismod ad dignissim natoque. Penatib natoque arcu, sed sit.</p>
                        <button class="btn bg-[#1b2857fb] outline-none text-white border-0">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;