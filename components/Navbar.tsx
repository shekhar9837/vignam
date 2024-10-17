"use client"

import { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [showFullNav, setShowFullNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowFullNav(scrollPosition > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="my-4 flex w-full max-w-6xl flex-col">
      <nav className="fixed left-1/2 top-8 isolate z-20 flex w-fit -translate-x-1/2 items-center justify-between self-stretch rounded-[20px] bg-neutral-900 pe-2 ps-5">
        {/* Logo */}
        <div className="relative overflow-hidden flex text-white items-center py-5 px-2 gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-6 text-neutral-10"
          >
            <path
              d="M22.1513 5.10429C20.7173 2.76204 18.5184 0.945608 15.6026 0.324196C11.6829 -0.584022 7.18959 0.419798 4.27373 3.28785C1.74028 5.7735 0.83206 9.16737 0.927661 12.7046C1.02326 15.2859 1.59687 18.1539 2.55289 20.544C3.17431 22.0258 4.70394 24.4159 6.61597 23.9379C8.19341 23.5555 8.52801 21.022 9.96204 21.022C12.7823 21.022 15.6982 20.9264 18.375 20.0182C21.2909 19.0144 23.0117 16.9589 23.6331 13.8041C24.2545 10.7926 23.6809 7.63774 22.1513 5.10429Z"
              fill="#FAF9F9"
            ></path>
          </svg>

          <svg
            width="112"
            height="16"
            viewBox="0 0 112 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="me-2 h-4 text-neutral-10 md:me-6"
          >
            <g clip-path="url(#clip0_4412_5268)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M77.3031 0H75.5928C74.8403 0 74.1904 0.586207 74.0536 1.24138L72.1723 14.1379C72.0355 15.1034 72.7196 15.931 73.6774 15.931H74.122C74.6351 15.931 75.1482 15.6897 75.3876 15.2414L76.2831 13.6268C76.6868 14.2419 77.2088 14.72 77.9188 15.1034C78.8765 15.6207 80.0053 15.8621 81.3392 15.8621C83.1863 15.8621 84.6913 15.3448 85.8201 14.2759C86.9488 13.2069 87.7356 11.7241 87.975 9.75862L88.1118 8.7931C88.4197 6.82759 88.1118 5.34483 87.2225 4.27586C86.3332 3.2069 84.9308 2.68966 83.0495 2.68966C81.7497 2.68966 80.5867 2.93103 79.5264 3.44828C79.1312 3.63504 78.7716 3.84428 78.4413 4.08087L78.8081 1.7931C78.9449 0.827586 78.2608 0 77.3031 0ZM82.2286 11.7241C81.6471 12.2414 81.0314 12.4828 80.2105 12.4828C79.2527 12.4828 78.5687 12.2414 78.124 11.6897C77.6793 11.1034 77.4741 10.4138 77.6109 9.44827L77.6793 9.13793C77.7477 8.51724 77.953 8 78.2608 7.55172C78.5687 7.10345 78.9449 6.75862 79.458 6.51724C79.9711 6.34483 80.5525 6.2069 81.1682 6.2069C81.9207 6.2069 82.5706 6.44828 82.9469 6.96552C83.3231 7.48276 83.46 8.10345 83.3231 9L83.2547 9.68965C83.1179 10.5862 82.8101 11.2069 82.2286 11.7241Z"
                fill="currentColor"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.91939 1.52588e-05C11.9717 1.52588e-05 13.4083 0.448291 14.366 1.34484C15.2896 2.24139 15.6316 3.51726 15.4264 5.20691L15.2211 6.62071C14.9817 8.27588 14.2634 9.55174 13.1346 10.4483C11.9033 11.3448 10.3299 11.7931 8.38017 11.7931H5.13071L4.72025 14.7586C4.61764 15.5173 3.96775 16.0345 3.21524 16.0345H1.505C0.581465 16.0345 -0.136837 15.2069 -1.7425e-05 14.3104L1.60761 3.06898C1.84704 1.27588 3.35206 1.52588e-05 5.13071 1.52588e-05H9.91939ZM10.5009 6.17243L10.5693 5.79312C10.7061 4.96553 10.5351 4.34484 10.1588 3.96553C9.78257 3.58622 9.16689 3.37933 8.27756 3.37933H6.36209L5.64378 8.55174H7.59346C8.48279 8.55174 9.16689 8.34484 9.61155 7.96553C10.1246 7.58622 10.3641 6.93105 10.5009 6.17243Z"
                fill="currentColor"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M28.0822 3.44829C29.1426 3.96553 29.8951 4.65518 30.4081 5.55174C31.058 6.72415 30.9554 8.06898 30.8186 9.34484C30.6476 10.6552 30.2029 11.9655 29.3478 13C28.5953 13.8966 27.6375 14.5862 26.372 15.1035C25.2432 15.6207 23.8408 15.8621 22.2674 15.8621C20.694 15.8621 19.36 15.6207 18.2996 15.1035C17.2393 14.5862 16.4868 13.8966 15.9737 13C15.3238 11.8621 15.3238 10.3793 15.4948 9.13794C15.6658 7.8276 16.1105 6.55174 16.9656 5.55174C17.7181 4.65518 18.6759 3.96553 19.9414 3.44829C21.1386 2.93105 22.541 2.68967 24.1144 2.68967C25.6879 2.68967 27.0219 2.93105 28.0822 3.44829ZM26.0299 9.6207L26.0983 8.86208C26.2351 8.0345 26.0641 7.37932 25.5852 6.86208C25.1406 6.37932 24.4565 6.17243 23.6356 6.17243C23.0883 6.17243 22.5752 6.27587 22.0621 6.48277C21.6175 6.75863 21.2412 7.00001 20.9334 7.44829C20.5913 7.8276 20.4203 8.34484 20.3519 8.86208L20.2151 9.68967C20.1125 10.5173 20.2835 11.1379 20.7282 11.6552C21.2412 12.1035 21.8569 12.3448 22.7462 12.3448C23.6356 12.3448 24.3539 12.1035 24.9696 11.5862C25.5168 11.069 25.8931 10.4483 26.0299 9.6207Z"
                fill="currentColor"
              ></path>
              <path
                d="M37.4201 15.8966C36.736 15.8966 36.0177 15.8621 35.3336 15.7586C34.2048 15.6207 33.076 15.3104 32.2209 14.5862C31.7421 14.1724 31.3658 13.5517 31.4684 12.9311C31.571 12.4138 31.9815 11.9655 32.4946 11.7586C32.9734 11.5517 33.5207 11.5173 34.068 11.5173C34.6153 11.5173 35.231 11.5862 35.6756 11.9311C35.8466 12.069 35.9749 12.25 36.1032 12.4311C36.2314 12.6121 36.3597 12.7931 36.5307 12.9311C36.9754 13.2759 37.5911 13.2759 38.1384 13.2414C38.7198 13.1724 39.3697 13.0345 39.7118 12.5173C40.2933 11.6897 39.5408 11.069 38.7883 10.8276C38.2302 10.6571 37.5217 10.5625 36.7727 10.4625C34.4918 10.1579 31.8358 9.80317 31.9131 7.10346C31.9473 5.8276 32.7682 4.51726 33.8286 3.86209C34.6495 3.37933 35.573 3.10346 36.5307 2.93105C38.7883 2.51726 41.1484 2.48278 43.3375 3.2414C43.8506 3.41381 44.3636 3.65519 44.7399 4.0345C45.1162 4.41381 45.3556 5.00002 45.1846 5.51726C45.0477 6.00002 44.6031 6.34484 44.1584 6.51726C43.6796 6.68967 43.2007 6.68967 42.6876 6.68967C42.1745 6.68967 41.5931 6.68967 41.2168 6.31036C41.0911 6.18363 40.9911 6.04397 40.8931 5.90722C40.8311 5.82072 40.77 5.73534 40.7037 5.65519C40.2249 5.13795 39.4724 5.10346 38.7883 5.20691C38.3778 5.27588 37.9673 5.37933 37.6253 5.62071C37.2832 5.86208 37.078 6.31036 37.2148 6.72415C37.3517 7.20691 37.8647 7.41381 38.3436 7.55174C38.9889 7.73328 39.6473 7.84182 40.3045 7.95014C41.1453 8.08872 41.9839 8.22695 42.7902 8.51726C43.5085 8.75864 44.1926 9.17243 44.6373 9.75864C45.2188 10.5517 45.253 11.6552 44.9109 12.5517C44.5689 13.4483 43.8164 14.2069 42.9955 14.6897C42.1745 15.1724 41.2168 15.4483 40.2591 15.6207C39.3013 15.7931 38.3778 15.8966 37.4201 15.8966Z"
                fill="currentColor"
              ></path>
              <path
                d="M48.895 3.00002H47.4079C46.9632 3.00002 46.6554 3.31036 46.5185 3.75864L46.3133 5.27588C46.2449 5.86208 46.6896 6.31036 47.2026 6.31036H48.1458L47.4421 11.3448C47.2026 12.8966 47.3737 14.0345 47.9551 14.7931C48.5366 15.5517 49.5628 15.7586 50.4521 15.8276C50.5547 15.8276 50.6573 15.8362 50.7599 15.8448C50.8626 15.8535 50.9652 15.8621 51.0678 15.8621C52.0597 15.8966 53.0175 15.8276 53.9752 15.5517C54.8303 15.3104 55.8223 14.8966 55.8223 13.8621V13.1035C55.8223 12.5862 55.3092 12.1379 54.7961 12.2759C54.5567 12.3448 54.2146 12.3448 53.9752 12.3448C53.3253 12.3448 52.8806 12.1379 52.6412 11.8276C52.3676 11.4483 52.2992 10.931 52.436 10.2414L52.9825 6.31036H55.4118C55.8565 6.31036 56.2327 6.00001 56.3011 5.55174L56.5064 4.0345C56.5748 3.44829 56.1301 3.00002 55.617 3.00002H53.4427L53.7016 1.13795C53.7358 0.517257 53.2911 1.52588e-05 52.6754 1.52588e-05H50.9652C50.6573 1.52588e-05 50.2811 0.206912 50.1443 0.586222L48.895 3.00002Z"
                fill="currentColor"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M61.6029 15.9311C60.0295 15.9311 58.8323 15.6207 58.0798 14.8966C57.3273 14.2759 57.0194 13.3104 57.1221 12.1035L57.1905 11.8621C57.3957 10.6552 57.943 9.75864 58.9007 9.06898C59.9269 8.44829 61.1924 8.0345 62.8343 8.0345C64.4133 8.0345 65.6132 8.29903 66.488 8.85523L66.5284 8.55174C66.6652 7.72415 66.46 7.10347 65.9469 6.68967C65.4338 6.31036 64.5445 6.06898 63.3473 6.06898C62.5948 6.06898 61.9107 6.13795 61.0556 6.31036C60.953 6.34484 60.876 6.36209 60.7991 6.37933C60.7221 6.39657 60.6452 6.41381 60.5425 6.44829C59.6532 6.68967 58.6955 6.00002 58.6613 5.0345C58.5929 4.34485 59.1059 3.68967 59.7216 3.51726C59.8413 3.48278 59.9867 3.4483 60.132 3.41383C60.2774 3.37935 60.4228 3.34484 60.5425 3.31036C61.2951 3.10347 62.0476 3.00002 62.8343 2.93105C63.5868 2.79312 64.3393 2.79312 64.9892 2.79312C67.3835 2.79312 69.0938 3.31036 70.1541 4.2414C71.2145 5.20691 71.5907 6.65519 71.3513 8.58622L70.5304 14.3793C70.3935 15.1379 69.7779 15.7242 69.0254 15.7242H67.8282C67.0482 15.7242 66.4535 15.1638 66.3374 14.4276C66.187 14.5468 66.023 14.6573 65.8443 14.7586C64.784 15.6207 63.3816 15.9311 61.6029 15.9311ZM63.3131 13.6552C63.9972 13.6552 64.6471 13.5173 65.0918 13.2069C65.5365 12.8966 65.8443 12.5173 65.9127 12.069V11.8621C65.9811 11.4138 65.8443 11.0345 65.468 10.7931C65.0918 10.5517 64.5787 10.4138 63.8262 10.4138C63.1421 10.4138 62.629 10.5517 62.1844 10.7931C61.7397 11.0345 61.5003 11.4138 61.4319 11.9311V12.1379C61.3635 12.6552 61.5003 13.0345 61.8081 13.2759C62.1844 13.5173 62.6975 13.6552 63.3131 13.6552Z"
                fill="currentColor"
              ></path>
              <path
                d="M95.8763 1.7931L93.9266 14.6897C93.7898 15.4483 93.1741 15.9655 92.4216 15.9655H90.7113C89.7536 15.9655 89.0695 15.1379 89.2063 14.1724L91.156 1.27586C91.2928 0.517241 91.9085 0 92.661 0H94.3713C95.2948 0 96.0131 0.827586 95.8763 1.7931Z"
                fill="currentColor"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M109.148 10.1724L101.007 10.2414C100.87 11.1379 101.041 11.8621 101.52 12.3793C101.965 12.8276 102.58 13.069 103.401 13.069C104.188 13.069 104.735 12.931 105.248 12.6207C105.549 12.4861 105.719 12.286 105.917 12.0521L105.932 12.0345C106.24 11.6552 106.753 11.4483 107.198 11.5173L109.148 11.6552C109.9 11.7242 110.276 12.6207 109.763 13.2414C109.182 13.8621 108.498 14.3793 107.677 14.8276C106.274 15.5173 104.564 15.8966 102.546 15.8966C101.109 15.8966 99.9123 15.6552 98.8862 15.1379C97.7574 14.5517 96.8681 13.6207 96.4918 12.3793C96.2524 11.5862 96.2182 10.7242 96.2866 9.86208C96.3892 8.48277 96.7997 7.10346 97.5522 5.93105C98.2705 4.79312 99.3993 4.00001 100.631 3.48277C102.786 2.58622 105.419 2.41381 107.643 3.10346C108.566 3.37933 109.455 3.89657 110.105 4.65519C111.337 6.17243 112.089 10.1379 109.148 10.1724ZM106.343 6.48277C105.898 6.0345 105.283 5.79312 104.393 5.79312C103.572 5.79312 102.888 6.0345 102.272 6.51726C101.691 6.96553 101.383 7.55174 101.246 8.31036H105.967C106.514 8.31036 106.924 7.75864 106.719 7.17243C106.651 6.93105 106.548 6.68967 106.343 6.48277Z"
                fill="currentColor"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_4412_5268">
                <rect width="111.2" height="16" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>

        {/* Conditionally show other items if scrolled past 100vh */}
        {showFullNav && (
          <div className="relative my-2 overflow-hidden">
            <div className="hidden min-w-fit items-center gap-2 rounded-xl border border-transparent bg-neutral-800 py-2 pe-2 ps-4 transition-colors focus-within:border-white/10 hover:bg-neutral-700 md:flex">
              <input
                placeholder="Paste tweet link here..."
                className="w-32 bg-transparent py-2 text-sm text-neutral-10 focus-visible:bg-transparent focus-visible:outline-none active:bg-transparent md:w-80 lg:w-96"
              />
              <button className="relative inline-flex h-10 items-center justify-center gap-1 rounded-[8px] bg-white/10 px-4 text-white transition-colors hover:bg-white/20">
                <span className="text-sm font-medium">Paste</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4"
                >
                  <path
                    d="M4.89142 3.42871C4.0835 3.42871 3.42856 4.16552 3.42856 5.07443V12.0687C3.42856 12.9776 4.0835 13.7144 4.89142 13.7144H11.1086C11.9165 13.7144 12.5714 12.9776 12.5714 12.0687V5.07443C12.5714 4.16552 11.9165 3.42871 11.1086 3.42871"
                    stroke="currentColor"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M9.52382 4.57136H6.4762C6.05541 4.57136 5.71429 4.27897 5.71429 3.9183V2.93871C5.71429 2.57803 6.05541 2.28564 6.4762 2.28564H9.52382C9.94462 2.28564 10.2857 2.57803 10.2857 2.93871V3.9183C10.2857 4.27897 9.94462 4.57136 9.52382 4.57136Z"
                    stroke="currentColor"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M5.71429 8H10.2857"
                    stroke="currentColor"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M5.71429 10.2856H10.2857"
                    stroke="currentColor"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex h-10 md:hidden"></div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
