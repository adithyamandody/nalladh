import React from 'react';
import { ReactComponent as Logo } from './logo.svg';
import BG from './bg.png';
import useStore from '../../context';

function Start() {
  const setState = useStore((state) => state.toggle);
  return (
    <div
      style={{
        background: ` linear-gradient(rgba(0,0,0, 0.3), rgba(0,0,0, 0.3)),  url(${BG})`,
      }}
      className='bg-gray-500 h-full flex flex-grow min-h-screen flex-col'
    >
      <div className='mx-auto mt-14'>
        <Logo />
      </div>
      <div
        style={{
          fontFamily: 'Manrope',
          fontSize: '56.12px',
          color: 'white',
          lineHeight: '58.7px',
        }}
        className='flex-grow font-bold flex flex-col justify-end  mx-8'
      >
        <div>Sign up towards a greener future</div>
      </div>
      <div className=' flex flex-col items-center w-full mt-14'>
        <button
          type='button'
          onClick={setState}
          className='p-7 rounded-xl flex justify-center'
          style={{ background: '#31D66C', width: '95%' }}
        >
          <svg
            width='97'
            height='22'
            viewBox='0 0 97 22'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1.58765 16V1.71117H3.97904V13.7574H10.2899V16H1.58765ZM16.2477 16.2977C15.1628 16.2977 14.2102 16.0628 13.3899 15.5932C12.5696 15.1235 11.9279 14.4719 11.4649 13.6384C11.0084 12.8049 10.7802 11.8457 10.7802 10.7608C10.7802 9.58987 11.0051 8.57444 11.4549 7.71446C11.9048 6.84787 12.5299 6.17643 13.3303 5.70013C14.1308 5.22384 15.0569 4.98569 16.1087 4.98569C17.2201 4.98569 18.1628 5.24699 18.9367 5.76959C19.7173 6.28558 20.2962 7.01656 20.6732 7.96253C21.0503 8.90851 21.1925 10.0232 21.0999 11.3065H18.7284V10.4333C18.7217 9.26903 18.5167 8.41898 18.1131 7.88315C17.7096 7.34732 17.0746 7.0794 16.208 7.0794C15.2289 7.0794 14.5012 7.3837 14.0249 7.9923C13.5487 8.59428 13.3105 9.47741 13.3105 10.6417C13.3105 11.7266 13.5487 12.5667 14.0249 13.1621C14.5012 13.7574 15.1958 14.0551 16.1087 14.0551C16.6975 14.0551 17.2035 13.9261 17.6269 13.6681C18.0569 13.4035 18.3877 13.0232 18.6192 12.527L20.9808 13.2415C20.5707 14.2073 19.9356 14.9581 19.0757 15.4939C18.2223 16.0298 17.2796 16.2977 16.2477 16.2977ZM12.5564 11.3065V9.50057H19.929V11.3065H12.5564ZM28.9997 16C28.2919 16.1323 27.5973 16.1885 26.9159 16.1687C26.2412 16.1555 25.6359 16.0331 25.1 15.8015C24.5642 15.5634 24.1574 15.1896 23.8795 14.6803C23.6348 14.2172 23.5058 13.7442 23.4925 13.2613C23.4793 12.7784 23.4727 12.2326 23.4727 11.624V2.30654H25.8542V11.4851C25.8542 11.9151 25.8575 12.2922 25.8641 12.6163C25.8773 12.9405 25.9468 13.2051 26.0725 13.4101C26.3106 13.8071 26.691 14.0287 27.2136 14.075C27.7362 14.1213 28.3316 14.0948 28.9997 13.9956V16ZM21.5278 7.15879V5.28338H28.9997V7.15879H21.5278ZM31.0064 6.79164L31.1453 5.75967C31.4496 5.78613 31.6911 5.73652 31.8697 5.61083C32.0483 5.47852 32.1674 5.29661 32.2269 5.06508C32.2931 4.82693 32.3096 4.55901 32.2765 4.26133H31.0064V1.71117H33.4574V4.36056C33.4574 5.22715 33.2523 5.88205 32.8421 6.32527C32.432 6.76849 31.8201 6.92395 31.0064 6.79164ZM38.3017 16.2977C36.9787 16.2977 35.9037 16 35.0768 15.4046C34.2499 14.8093 33.7471 13.9724 33.5685 12.8942L36.0095 12.5171C36.1352 13.0463 36.4131 13.4631 36.843 13.7674C37.273 14.0717 37.8155 14.2238 38.4704 14.2238C39.0459 14.2238 39.4891 14.1114 39.8 13.8864C40.1176 13.6549 40.2763 13.3407 40.2763 12.9438C40.2763 12.699 40.2168 12.5039 40.0977 12.3583C39.9853 12.2062 39.7339 12.0606 39.3436 11.9217C38.9533 11.7828 38.3546 11.6075 37.5476 11.3958C36.6479 11.1577 35.9335 10.903 35.4042 10.6318C34.875 10.3539 34.4946 10.0265 34.2631 9.64941C34.0316 9.27234 33.9158 8.81589 33.9158 8.28006C33.9158 7.61193 34.0911 7.02979 34.4417 6.53365C34.7923 6.03751 35.2819 5.65714 35.9103 5.39253C36.5387 5.1213 37.2796 4.98569 38.133 4.98569C38.9665 4.98569 39.7041 5.11469 40.3458 5.37268C40.9941 5.63067 41.5167 5.99782 41.9136 6.47411C42.3105 6.95041 42.5553 7.50939 42.6479 8.15107L40.2069 8.58767C40.1473 8.13122 39.939 7.77069 39.5817 7.50608C39.2311 7.24148 38.7615 7.09263 38.1727 7.05956C37.6104 7.02648 37.1573 7.11248 36.8133 7.31755C36.4693 7.51601 36.2973 7.79715 36.2973 8.16099C36.2973 8.36606 36.3667 8.54136 36.5057 8.6869C36.6446 8.83243 36.9224 8.97797 37.3392 9.1235C37.7626 9.26903 38.391 9.44764 39.2245 9.65933C40.0779 9.87763 40.7592 10.129 41.2686 10.4135C41.7846 10.6913 42.155 11.0254 42.38 11.4157C42.6115 11.806 42.7273 12.279 42.7273 12.8346C42.7273 13.9129 42.3337 14.7597 41.5465 15.3749C40.7659 15.9901 39.6843 16.2977 38.3017 16.2977ZM52.1879 21.0606C51.5925 21.0606 51.0203 20.968 50.4712 20.7828C49.9288 20.5976 49.4393 20.3296 49.0027 19.979C48.5661 19.6351 48.2088 19.2183 47.931 18.7288L50.1339 17.6373C50.3389 18.0276 50.6267 18.3153 50.9971 18.5005C51.3742 18.6924 51.7744 18.7883 52.1978 18.7883C52.6939 18.7883 53.1372 18.699 53.5275 18.5204C53.9177 18.3484 54.2187 18.0904 54.4304 17.7464C54.6487 17.409 54.7513 16.9857 54.738 16.4763V13.43H55.0357V5.28338H57.1294V16.516C57.1294 16.7872 57.1162 17.0452 57.0897 17.29C57.0699 17.5413 57.0335 17.7861 56.9806 18.0243C56.8218 18.7188 56.5175 19.2878 56.0677 19.731C55.6179 20.1808 55.0589 20.5149 54.3907 20.7332C53.7292 20.9515 52.9949 21.0606 52.1879 21.0606ZM51.9795 16.2977C50.9938 16.2977 50.1339 16.0496 49.3996 15.5535C48.6653 15.0573 48.0964 14.3826 47.6928 13.5292C47.2893 12.6759 47.0876 11.7134 47.0876 10.6417C47.0876 9.5568 47.2893 8.59098 47.6928 7.74423C48.103 6.89087 48.6818 6.21943 49.4293 5.7299C50.1769 5.23376 51.0567 4.98569 52.0688 4.98569C53.0875 4.98569 53.9409 5.23376 54.6289 5.7299C55.3235 6.21943 55.8494 6.89087 56.2066 7.74423C56.5638 8.59759 56.7424 9.56341 56.7424 10.6417C56.7424 11.7067 56.5638 12.6692 56.2066 13.5292C55.8494 14.3826 55.3169 15.0573 54.609 15.5535C53.9012 16.0496 53.0247 16.2977 51.9795 16.2977ZM52.3466 14.1544C52.9883 14.1544 53.5043 14.0088 53.8946 13.7178C54.2915 13.4201 54.5793 13.0066 54.7579 12.4774C54.9431 11.9482 55.0357 11.3363 55.0357 10.6417C55.0357 9.94048 54.9431 9.32857 54.7579 8.80597C54.5793 8.27675 54.2981 7.86661 53.9144 7.57554C53.5308 7.27786 53.0346 7.12902 52.426 7.12902C51.7843 7.12902 51.2551 7.28778 50.8384 7.60531C50.4216 7.91623 50.114 8.3396 49.9156 8.87543C49.7171 9.40465 49.6179 9.9934 49.6179 10.6417C49.6179 11.2966 49.7138 11.892 49.9056 12.4278C50.1041 12.957 50.4051 13.3771 50.8086 13.688C51.2121 13.9989 51.7248 14.1544 52.3466 14.1544ZM64.0498 16.2977C62.9781 16.2977 62.0421 16.0562 61.2417 15.5733C60.4412 15.0904 59.8194 14.4256 59.3762 13.5788C58.9396 12.7255 58.7213 11.7464 58.7213 10.6417C58.7213 9.5171 58.9462 8.53144 59.396 7.68469C59.8458 6.83795 60.471 6.17643 61.2714 5.70013C62.0719 5.22384 62.998 4.98569 64.0498 4.98569C65.1281 4.98569 66.0674 5.22715 66.8679 5.71006C67.6683 6.19297 68.2902 6.8611 68.7334 7.71446C69.1766 8.56121 69.3982 9.53695 69.3982 10.6417C69.3982 11.753 69.1733 12.7354 68.7234 13.5888C68.2802 14.4355 67.6584 15.1003 66.858 15.5832C66.0575 16.0595 65.1215 16.2977 64.0498 16.2977ZM64.0498 14.0551C65.0024 14.0551 65.7102 13.7376 66.1733 13.1025C66.6364 12.4675 66.8679 11.6472 66.8679 10.6417C66.8679 9.6031 66.633 8.7762 66.1634 8.16099C65.6937 7.53916 64.9892 7.22824 64.0498 7.22824C63.4081 7.22824 62.8789 7.37378 62.4622 7.66485C62.052 7.9493 61.7477 8.34952 61.5493 8.86551C61.3508 9.37488 61.2516 9.96694 61.2516 10.6417C61.2516 11.6803 61.4864 12.5105 61.9561 13.1323C62.4324 13.7475 63.1303 14.0551 64.0498 14.0551Z'
              fill='white'
            />
            <path
              d='M96.6648 9.66481C97.032 9.29764 97.032 8.70236 96.6648 8.3352L90.6816 2.35196C90.3144 1.9848 89.7191 1.9848 89.352 2.35196C88.9848 2.71912 88.9848 3.31441 89.352 3.68157L94.6704 9L89.352 14.3184C88.9848 14.6856 88.9848 15.2809 89.352 15.648C89.7191 16.0152 90.3144 16.0152 90.6816 15.648L96.6648 9.66481ZM78 9.94017L96 9.94018L96 8.05983L78 8.05983L78 9.94017Z'
              fill='white'
            />
          </svg>
        </button>
        <a
          style={{
            fontFamily: 'Manrope',
            fontWeight: 700,
            fontSize: '19.8456px',
            lineHeight: '17px',
            letterSpacing: '-0.03em',
            color: '#31D66C',
          }}
          className='mt-6 mb-14'
        >
          Sign In
        </a>
      </div>
    </div>
  );
}

export default Start;
