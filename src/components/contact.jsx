import React from 'react'

const Contact = () => {
  return (
    <>
    <footer className='h-60 md:h-[15rem] w-100%   border-white border-t-2  flex flex-row justify-between'>
      <div className='w-[50%] h-full relative ' >


        <div className='w-[50%] md:w-[30%] lg:w-[20%] mt-30 flex justify-between absolute left-4  items-center'>
         <a href='/'>
         <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="30px" viewBox="0 0 20 20" version="1.1">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -7439.000000)" fill="white">
            <g id="icons" transform="translate(56.000000, 160.000000)">
                <path d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792" id="instagram-[#167]">

</path>
            </g>
        </g>
    </g>
</svg></a>   
<a href='/'>
<svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z" fill="white"/>
</svg>
</a>
        </div>
        <span className='font-[Jura] text-white absolute bottom-4 left-2  text-[10px] md:text-sm'>Copyright© 2024 AAINA. All rights reserved</span>
      </div>
      <div className="w-[50%] h-full  relative">
        <div className='h-[50%] text-white font-[Jura] flex flex-col justify-evenly items-center text-sm md:text-lg'>
          <a className='cursor-pointer'>About</a>
          <a className='cursor-pointer'>Terms & Conditions</a>
          <a className='cursor-pointer'>Refund & Return Policy</a>
        </div>
        <span className='w-full flex items-center justify-center  absolute bottom-0'>
        <svg xmlns="http://www.w3.org/2000/svg" width="250" height="80" viewBox="0 0 500 187" fill="none">
 <g filter="url(#filter0_d_51_54)">
<path d="M44.8293 169.436C56.3706 171.806 67.6479 164.372 70.0181 152.831C72.3882 141.289 64.9536 130.012 53.4124 127.642C41.8711 125.272 30.5938 132.706 28.2236 144.248C25.8535 155.789 33.2881 167.066 44.8293 169.436ZM74.9182 42.8047C75.3626 40.6407 73.9686 38.5262 71.8047 38.0818C69.6407 37.6374 67.5262 39.0314 67.0818 41.1953L74.9182 42.8047ZM53.0391 149.344L74.9182 42.8047L67.0818 41.1953L45.2026 147.734L53.0391 149.344Z" fill="white"/>
</g>
<g filter="url(#filter1_d_51_54)">
<line x1="102.037" y1="147.286" x2="71.8595" y2="44.2807" stroke="white" stroke-width="8" stroke-linecap="round"/>
</g>
<g filter="url(#filter2_d_51_54)">
<path d="M134.557 147.367L162.708 40.5935" stroke="white" stroke-width="8" stroke-linecap="round"/>
</g>
<g filter="url(#filter3_d_51_54)">
<path d="M188.222 150.4L161.992 39.4404" stroke="white" stroke-width="8" stroke-linecap="round"/>
</g>
<g filter="url(#filter4_d_51_54)">
<path d="M247 148.928C246.98 151.137 248.755 152.944 250.964 152.964C253.173 152.984 254.98 151.209 255 149L247 148.928ZM252.21 15.8708L228.907 38.7539L251.79 62.0569L275.093 39.1738L252.21 15.8708ZM255 149L256 39.0002L248 38.9275L247 148.928L255 149Z" fill="white"/>
</g>
<g filter="url(#filter5_d_51_54)">
<line x1="318" y1="145" x2="318" y2="44" stroke="white" stroke-width="10" stroke-linecap="round"/>
</g>
<g opacity="0.9" filter="url(#filter6_d_51_54)">
<line x1="321.846" y1="43.5159" x2="361.972" y2="144.284" stroke="white" stroke-width="9" stroke-linecap="round"/>
</g>
<g filter="url(#filter7_d_51_54)">
<line x1="363.25" y1="144.005" x2="363.25" y2="43.9922" stroke="white" stroke-width="10" stroke-linecap="round"/>
</g>
<g filter="url(#filter8_d_51_54)">
<line x1="405.152" y1="144.112" x2="432.112" y2="41.8481" stroke="white" stroke-width="8" stroke-linecap="round"/>
</g>
<g filter="url(#filter9_d_51_54)">
<path d="M463.528 170.796C474.994 168.086 482.092 156.594 479.382 145.128C476.672 133.662 465.18 126.564 453.713 129.274C442.247 131.984 435.149 143.476 437.859 154.942C440.57 166.408 452.062 173.507 463.528 170.796ZM462.513 149.115L449.513 94.1151L441.728 95.9553L454.728 150.955L462.513 149.115ZM449.513 94.1151L436.513 39.1151L428.728 40.9553L441.728 95.9553L449.513 94.1151Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_51_54" x="23.7832" y="37.999" width="55.2175" height="139.877" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_51_54"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_51_54" result="shape"/>
</filter>
<filter id="filter1_d_51_54" x="63.8584" y="40.2798" width="46.1794" height="119.007" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_51_54"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_51_54" result="shape"/>
</filter>
<filter id="filter2_d_51_54" x="126.556" y="36.5923" width="44.1528" height="122.775" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_51_54"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_51_54" result="shape"/>
</filter>
<filter id="filter3_d_51_54" x="153.991" y="35.4395" width="42.2317" height="126.961" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_51_54"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_51_54" result="shape"/>
</filter>
<filter id="filter4_d_51_54" x="224.907" y="15.8706" width="54.186" height="145.093" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_51_54"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_51_54" result="shape"/>
</filter>
<filter id="filter5_d_51_54" x="309" y="39" width="18" height="119" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_51_54"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_51_54" result="shape"/>
</filter>
<filter id="filter6_d_51_54" x="313.344" y="39.0146" width="57.1294" height="117.771" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_51_54"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_51_54" result="shape"/>
</filter>
<filter id="filter7_d_51_54" x="354.25" y="38.9922" width="18" height="118.013" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_51_54"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_51_54" result="shape"/>
</filter>
<filter id="filter8_d_51_54" x="397.151" y="37.8472" width="42.9626" height="118.266" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_51_54"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_51_54" result="shape"/>
</filter>
<filter id="filter9_d_51_54" x="424.728" y="39.1152" width="59.231" height="140.258" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_51_54"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_51_54" result="shape"/>
</filter>
</defs>
</svg>
        </span>
      </div>
      
    </footer>
    </>
  )
}

export default Contact
