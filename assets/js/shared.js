/* ===== SHARED NAV + FOOTER + ALL INTERACTIONS ===== */

function getNav(activePage) {
  const links = [
    { href: 'index.html',   label: 'Home',     key: 'home' },
    { href: 'about.html',   label: 'About',    key: 'about' },
    { href: 'services.html',label: 'Services', key: 'services' },
    { href: 'works.html',   label: 'Works',    key: 'works' },
    { href: 'skills.html',  label: 'Skills',   key: 'skills' },
    { href: 'insights.html',label: 'Insights', key: 'insights' },
    { href: 'contact.html', label: 'Contact',  key: 'contact' },
  ];
  return `
  <header id="navbar" role="banner">
    <div class="container nav-inner">
      <a href="index.html" class="nav-logo" aria-label="Khemraj Thakoor Home">
        <div class="logo-icon">
          <?xml version="1.0" encoding="utf-8"?>
            <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="61.355 59.239 398.81 384.001">
              <defs>
                <linearGradient id="b" x1="358.749" x2="252.862" y1="267.685" y2="321.263" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.5, 0, 0, 0.5, 10.165817, -6.632739)">
                  <stop offset="0" stop-color="#5671b5"/>
                  <stop offset="1" stop-color="#00a2b7"/>
                </linearGradient>
                <linearGradient id="a" x1="483.644" x2="287.366" y1="525.457" y2="497.974" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.5, 0, 0, 0.5, 3.232314, -3.126762)">
                  <stop offset="0" stop-color="#676ab7"/>
                  <stop offset="1" stop-color="#00a0b5"/>
                </linearGradient>
              </defs>
              <path fill="#4169e1" d="M357.483 349.455c.647-.828 8.412-.471 10.23-.462q9.133.06 18.267.029c-7.499 11.97-29.697 32.958-41.97 40.106l-.13-.445c4.811-3.127 20.493-14.935 23.688-19.211-.293-.555-.343-.579-.78-1.025.146-1.238 2.621-5.242 3.78-5.801.882-.013 1.026.13 1.792.547l.236.132.322-.127c-.245-.451-.221-.402-.408-.913.241-.929.29-1.387.85-2.177l.658.288c.876-.26 2.476-1.788 3.32-2.456l.291.083c-.715.885-2.459 2.722-2.507 3.672 1.392-1.579 9.32-10.516 9.477-11.74l-.339-.357c-.888-.039-.827-.019-1.6.445-.272.587-.147.425-.569.896l-.725-.777-.061 1.7c-.5.722-.183.433-1.044.828-.852-.522-.035-.69-.543-2.108-.763.758-.399 2.021-1.134 3.182-.708-.117-.562-.181-1.176-.814-2.018-.326-4.372.036-5.887-.21-1.403-.229-6.958-2.57-8.35-2.529-1.045.031-4.722.635-6.226.733.285-.377.478-.641.508-1.115z"/>
              <path fill="#4169e1" d="m357.483 349.455-.03.374c-.03.474-.223.738-.508 1.115-.841.537.026 1.428-1.296 1.451-.188.003-1.548 1.412-1.828 1.68-2.199 2.106-4.545 4.552-6.826 6.545-2.206 1.928-4.677 4.096-7.008 5.835l-.892.673-.97.714c-.615.49-1.101 1.191-1.752.8 6.838-5.701 13.661-10.637 19.656-17.63.569-.664.817-.963 1.454-1.557"/>
              <path fill="#4169e1" d="M381.648 351.121c1.068.575 1.275.653.801 1.695l-.13.335c-.865.085-.648-1.212-.671-2.03"/>
              <path fill="#4169e1" d="M378.666 355.347c1.452.139 1.028.325.523 1.578-1.175-.416-.985-.403-.523-1.578"/>
              <path fill="#cbccf0" d="M299.792 220.51c1.407-.052 2.674.046 4.076.115-1.414.242-2.837.4-4.261.571z"/>
              <ellipse style="paint-order: fill; fill: rgb(226, 226, 226); stroke-width: 6px; stroke: rgb(255, 255, 255);" cx="260.983" cy="251.937" rx="195.702" ry="187.767"/>
              <path fill="#4b53c5" d="M 198.61 105.343 C 202.932 102.9 214.036 98.982 218.924 97.51 C 248.2 88.41 279.48 87.946 309.014 96.173 C 337.25 103.934 362.783 119.37 382.776 140.767 C 386.171 144.337 392.853 151.793 395.373 155.976 C 386.233 155.945 377.093 155.863 367.955 155.73 C 344.146 128.96 309.9 113.439 274.295 111.335 C 256.004 110.233 237.678 112.798 220.394 118.879 C 216.363 120.27 212.988 121.886 209.164 123.321 C 208.63 123.712 205.641 125.136 204.918 125.497 C 202.427 126.731 199.967 128.025 197.541 129.379 C 185.948 135.795 175.047 144.444 166.251 154.462 C 166.064 154.675 166.055 155.768 166.049 156.075 L 166.045 156.386 C 164.564 156.718 156.946 156.589 154.905 156.548 C 148.898 156.428 142.421 156.616 136.478 156.321 C 138.565 153.089 143.061 147.83 145.639 144.959 C 157.894 131.129 172.39 119.46 188.519 110.441 C 191.136 108.962 195.951 106.173 198.61 105.342" style="stroke-width: 1;"/>
              <path fill="url(#b)" d="M 136.492 156.217 C 138.579 152.986 143.074 147.727 145.653 144.856 C 157.909 131.025 172.404 119.356 188.533 110.337 C 191.149 108.859 195.964 106.07 198.624 105.239 L 198.48 105.675 C 195.503 107.158 184.542 112.411 182.907 114.954 C 183.585 116.95 185.809 119.884 186.125 120.82 C 186.971 123.323 187.6 132.091 187.557 134.81 C 190.775 132.655 205.69 123.689 208.929 123.032 L 209.177 123.218 C 208.644 123.609 205.655 125.033 204.932 125.394 C 202.441 126.627 199.981 127.921 197.554 129.276 C 185.962 135.691 175.061 144.34 166.265 154.359 C 166.077 154.572 166.069 155.665 166.063 155.972 L 166.059 156.283 C 164.578 156.614 156.96 156.486 154.919 156.445 C 148.912 156.325 142.435 156.513 136.492 156.217" style="stroke-width: 0.5;"/>
              <path fill="url(#a)" d="M 163.415 196.588 L 188.959 196.628 C 186.919 206.718 182.962 217.389 180.625 227.522 C 179.147 233.927 177.161 240.913 175.113 247.146 C 190.669 230.173 208.211 213.503 224.532 196.997 C 234.624 196.847 245.139 196.961 255.244 196.996 C 247.899 203.602 240.71 210.378 233.683 217.32 L 199.658 250.422 C 206.493 261.866 213.447 273.238 220.52 284.537 L 235.387 308.662 L 204.011 308.63 C 200.471 303.027 197.167 296.327 193.874 290.48 C 186.966 278.391 180.211 266.215 173.61 253.957 C 172.377 257.939 170.6 267.741 169.662 272.118 L 161.752 308.694 C 153.856 308.828 145.788 308.784 137.878 308.825 C 138.074 305.883 139.911 298.455 140.64 295.281 C 142.649 286.531 144.717 277.794 146.842 269.071 C 150.109 255.331 153.269 241.567 156.321 227.778 C 158.72 217.259 161.235 207.18 163.415 196.588" style="stroke-width: 0.5;"/>
              <path fill="#3a75b9" d="M 129.346 345.066 C 138.049 344.713 148.276 344.928 157.066 344.997 C 158.554 346.634 160.004 348.304 161.414 350.007 L 161.804 350.337 C 162.972 351.337 164.16 352.581 165.266 353.674 C 169.607 357.96 174.251 361.928 179.161 365.546 C 205.472 384.612 237.728 393.652 270.114 391.036 C 290.385 389.563 310.052 383.484 327.618 373.263 C 332.01 370.727 335.523 368.036 339.605 365.515 C 346.443 359.814 353.266 354.878 359.261 347.885 C 359.83 347.221 360.078 346.922 360.715 346.328 C 361.362 345.5 369.127 345.857 370.945 345.866 C 377.034 345.906 383.123 345.916 389.212 345.895 C 381.713 357.865 359.515 378.853 347.242 386.001 C 345.126 388.173 335.797 393 332.812 394.563 C 307.821 407.642 281.306 412.948 253.212 412.121 C 220.852 411.086 189.612 400.024 163.812 380.463 C 160.089 377.619 153.897 372.661 150.683 369.256 C 145.708 365.229 132.363 350.373 129.346 345.066" style="stroke-width: 1;"/>
              <path fill="#0699b4" d="M 129.346 345.066 C 138.049 344.713 148.276 344.928 157.066 344.997 C 158.554 346.634 160.004 348.304 161.414 350.007 C 161.317 349.983 161.216 349.972 161.123 349.937 C 158.393 348.895 158.368 344.394 154.599 345.828 C 152.299 346.704 150.621 349.878 149.72 352.053 C 149.163 353.397 146.166 364.023 146.476 364.691 C 147.286 366.435 150.459 367.095 150.683 369.256 C 145.708 365.229 132.363 350.373 129.346 345.066" style="stroke-width: 1;"/>
              <path fill="#0699b4" d="M 145.616 168.483 C 148.702 168.361 152.268 168.436 155.389 168.435 C 154.347 174.685 152.766 180.895 151.779 187.279 C 149.505 187.225 145.515 187.067 143.361 187.508 C 125.875 190.648 128.34 207.55 126.035 221.125 C 123.565 235.667 111.656 249.376 96.454 251.55 C 102.478 253.724 106.406 254.395 111.254 259.405 C 118.396 266.783 119.27 278.418 116.85 287.936 C 115.546 293.07 113.4 297.871 113.356 303.296 C 113.325 307.113 114.304 311.145 117.093 313.921 C 121.857 318.666 128.078 317.867 134.341 317.869 C 133.673 322.88 131.216 331.827 129.947 336.972 C 127.055 337.041 123.657 336.905 120.729 336.851 C 111.608 335.882 103.182 333.111 96.823 326.188 C 89.226 317.919 87.919 306.584 90.936 296.098 C 92.283 290.723 94.531 285.45 94.718 279.855 C 95.174 266.223 85.424 262.603 73.975 262.346 C 74.919 256.026 76.705 248.244 77.984 241.9 C 81.387 241.574 84.418 241.224 87.632 239.996 C 97.525 236.218 102.321 226.459 103.684 216.497 C 104.44 210.534 104.407 204.773 105.811 198.878 C 110.426 179.508 126.657 169.324 145.616 168.483" style="stroke-width: 1;"/>
              <path fill="#4b53c5" d="M 389.721 168.577 C 392.831 168.565 396.049 168.5 399.078 168.648 C 422.409 169.794 433.895 189.495 427.733 211.152 C 426.46 216.832 424.117 222.652 424.925 228.553 C 426.379 239.159 435.888 241.811 444.867 242.261 C 443.527 249.051 442.294 256.184 440.845 262.904 C 422.957 264.082 417.486 274.662 415.42 291.253 C 414.864 295.715 414.586 300.399 413.62 304.786 C 409.984 321.303 397.229 333.109 380.728 336.31 C 376.085 337.252 367.827 337.084 362.796 337.091 L 367.124 317.861 C 373.125 318.094 378.49 318.287 383.544 314.457 C 393.292 307.067 391.11 293.095 393.32 282.462 C 396.443 267.44 407.456 255.592 422.828 253.178 C 417.217 251.519 412.723 249.698 408.573 245.387 C 401.774 238.414 399.679 227.15 402.143 217.825 C 404.353 209.457 409.21 198.858 402.198 191.138 C 398.344 186.896 391.104 187.414 385.75 187.325 C 386.772 181.145 388.53 174.791 389.721 168.577" style="stroke-width: 1;"/>
              <path fill="#4b53c5" d="M 259.297 196.923 L 342.967 196.927 C 340.941 204.441 338.52 211.909 336.417 219.414 C 329.6 217.962 317.061 215.068 311.088 218.744 C 303.285 223.548 300.681 242.129 298.793 251.069 C 294.855 270.364 290.743 289.623 286.456 308.843 C 278.305 308.856 269.819 308.921 261.681 308.718 C 265.062 293.205 268.543 277.714 272.123 262.245 C 273.313 256.717 274.54 251.197 275.803 245.685 C 278.107 235.718 279.344 229.242 288.646 223.514 C 293.459 220.551 297.333 219.294 302.839 218.069 L 303.023 217.383 C 297.179 217.355 291.204 217.103 285.403 217.165 C 274.122 217.295 262.857 218.069 251.663 219.484 C 253.889 211.609 257.063 204.438 259.296 196.923" style="stroke-width: 1;"/>
              <path fill="#4b53c5" d="M 367.22 196.41 L 391.417 196.442 C 389.001 201.856 384.8 209.481 381.959 214.95 L 360.433 256.021 L 341.063 292.969 L 335.653 303.424 C 334.857 304.972 333.997 306.664 333.16 308.206 C 332.843 308.791 332.256 308.668 331.545 308.722 L 306.894 308.664 C 313.152 297.813 319.658 285.12 325.533 274.018 L 341.773 243.957 L 357.67 214.201 C 360.705 208.587 364.624 202.058 367.22 196.41" style="stroke-width: 1;"/>
            </svg>
        </div>
        <div class="logo-body">
          <span class="logo-name">Khemraj Thakoor</span>
          <span class="logo-tagline">SEO | Optimization | WordPress</span>
        </div>
      </a>
      <nav aria-label="Primary navigation">
        <ul class="nav-links" id="navLinks">
          ${links.map(l=>`<li><a href="${l.href}"${l.key===activePage?' class="active" aria-current="page"':''}>${l.label}</a></li>`).join('')}
        </ul>
      </nav>
      <div class="nav-actions">
        <a href="assets/others/updated-full-stack-wordPress-developer.pdf" download="Khemraj-Thakoor-CV.pdf" class="btn-cv" aria-label="Download CV">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          <span>Download CV</span>
        </a>
        <a href="contact.html" class="btn btn-primary nav-cta">Hire Me</a>
      </div>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>`;
}

function getFooter() {
  return `
  <footer role="contentinfo">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="logo">
            <div class="logo-icon">
              <?xml version="1.0" encoding="utf-8"?>
              <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="61.355 59.239 398.81 384.001">
                <defs>
                  <linearGradient id="b" x1="358.749" x2="252.862" y1="267.685" y2="321.263" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.5, 0, 0, 0.5, 10.165817, -6.632739)">
                    <stop offset="0" stop-color="#5671b5"/>
                    <stop offset="1" stop-color="#00a2b7"/>
                  </linearGradient>
                  <linearGradient id="a" x1="483.644" x2="287.366" y1="525.457" y2="497.974" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.5, 0, 0, 0.5, 3.232314, -3.126762)">
                    <stop offset="0" stop-color="#676ab7"/>
                    <stop offset="1" stop-color="#00a0b5"/>
                  </linearGradient>
                </defs>
                <path fill="#4169e1" d="M357.483 349.455c.647-.828 8.412-.471 10.23-.462q9.133.06 18.267.029c-7.499 11.97-29.697 32.958-41.97 40.106l-.13-.445c4.811-3.127 20.493-14.935 23.688-19.211-.293-.555-.343-.579-.78-1.025.146-1.238 2.621-5.242 3.78-5.801.882-.013 1.026.13 1.792.547l.236.132.322-.127c-.245-.451-.221-.402-.408-.913.241-.929.29-1.387.85-2.177l.658.288c.876-.26 2.476-1.788 3.32-2.456l.291.083c-.715.885-2.459 2.722-2.507 3.672 1.392-1.579 9.32-10.516 9.477-11.74l-.339-.357c-.888-.039-.827-.019-1.6.445-.272.587-.147.425-.569.896l-.725-.777-.061 1.7c-.5.722-.183.433-1.044.828-.852-.522-.035-.69-.543-2.108-.763.758-.399 2.021-1.134 3.182-.708-.117-.562-.181-1.176-.814-2.018-.326-4.372.036-5.887-.21-1.403-.229-6.958-2.57-8.35-2.529-1.045.031-4.722.635-6.226.733.285-.377.478-.641.508-1.115z"/>
                <path fill="#4169e1" d="m357.483 349.455-.03.374c-.03.474-.223.738-.508 1.115-.841.537.026 1.428-1.296 1.451-.188.003-1.548 1.412-1.828 1.68-2.199 2.106-4.545 4.552-6.826 6.545-2.206 1.928-4.677 4.096-7.008 5.835l-.892.673-.97.714c-.615.49-1.101 1.191-1.752.8 6.838-5.701 13.661-10.637 19.656-17.63.569-.664.817-.963 1.454-1.557"/>
                <path fill="#4169e1" d="M381.648 351.121c1.068.575 1.275.653.801 1.695l-.13.335c-.865.085-.648-1.212-.671-2.03"/>
                <path fill="#4169e1" d="M378.666 355.347c1.452.139 1.028.325.523 1.578-1.175-.416-.985-.403-.523-1.578"/>
                <path fill="#cbccf0" d="M299.792 220.51c1.407-.052 2.674.046 4.076.115-1.414.242-2.837.4-4.261.571z"/>
                <ellipse style="paint-order: fill; fill: rgb(226, 226, 226); stroke-width: 6px; stroke: rgb(255, 255, 255);" cx="260.983" cy="251.937" rx="195.702" ry="187.767"/>
                <path fill="#4b53c5" d="M 198.61 105.343 C 202.932 102.9 214.036 98.982 218.924 97.51 C 248.2 88.41 279.48 87.946 309.014 96.173 C 337.25 103.934 362.783 119.37 382.776 140.767 C 386.171 144.337 392.853 151.793 395.373 155.976 C 386.233 155.945 377.093 155.863 367.955 155.73 C 344.146 128.96 309.9 113.439 274.295 111.335 C 256.004 110.233 237.678 112.798 220.394 118.879 C 216.363 120.27 212.988 121.886 209.164 123.321 C 208.63 123.712 205.641 125.136 204.918 125.497 C 202.427 126.731 199.967 128.025 197.541 129.379 C 185.948 135.795 175.047 144.444 166.251 154.462 C 166.064 154.675 166.055 155.768 166.049 156.075 L 166.045 156.386 C 164.564 156.718 156.946 156.589 154.905 156.548 C 148.898 156.428 142.421 156.616 136.478 156.321 C 138.565 153.089 143.061 147.83 145.639 144.959 C 157.894 131.129 172.39 119.46 188.519 110.441 C 191.136 108.962 195.951 106.173 198.61 105.342" style="stroke-width: 1;"/>
                <path fill="url(#b)" d="M 136.492 156.217 C 138.579 152.986 143.074 147.727 145.653 144.856 C 157.909 131.025 172.404 119.356 188.533 110.337 C 191.149 108.859 195.964 106.07 198.624 105.239 L 198.48 105.675 C 195.503 107.158 184.542 112.411 182.907 114.954 C 183.585 116.95 185.809 119.884 186.125 120.82 C 186.971 123.323 187.6 132.091 187.557 134.81 C 190.775 132.655 205.69 123.689 208.929 123.032 L 209.177 123.218 C 208.644 123.609 205.655 125.033 204.932 125.394 C 202.441 126.627 199.981 127.921 197.554 129.276 C 185.962 135.691 175.061 144.34 166.265 154.359 C 166.077 154.572 166.069 155.665 166.063 155.972 L 166.059 156.283 C 164.578 156.614 156.96 156.486 154.919 156.445 C 148.912 156.325 142.435 156.513 136.492 156.217" style="stroke-width: 0.5;"/>
                <path fill="url(#a)" d="M 163.415 196.588 L 188.959 196.628 C 186.919 206.718 182.962 217.389 180.625 227.522 C 179.147 233.927 177.161 240.913 175.113 247.146 C 190.669 230.173 208.211 213.503 224.532 196.997 C 234.624 196.847 245.139 196.961 255.244 196.996 C 247.899 203.602 240.71 210.378 233.683 217.32 L 199.658 250.422 C 206.493 261.866 213.447 273.238 220.52 284.537 L 235.387 308.662 L 204.011 308.63 C 200.471 303.027 197.167 296.327 193.874 290.48 C 186.966 278.391 180.211 266.215 173.61 253.957 C 172.377 257.939 170.6 267.741 169.662 272.118 L 161.752 308.694 C 153.856 308.828 145.788 308.784 137.878 308.825 C 138.074 305.883 139.911 298.455 140.64 295.281 C 142.649 286.531 144.717 277.794 146.842 269.071 C 150.109 255.331 153.269 241.567 156.321 227.778 C 158.72 217.259 161.235 207.18 163.415 196.588" style="stroke-width: 0.5;"/>
                <path fill="#3a75b9" d="M 129.346 345.066 C 138.049 344.713 148.276 344.928 157.066 344.997 C 158.554 346.634 160.004 348.304 161.414 350.007 L 161.804 350.337 C 162.972 351.337 164.16 352.581 165.266 353.674 C 169.607 357.96 174.251 361.928 179.161 365.546 C 205.472 384.612 237.728 393.652 270.114 391.036 C 290.385 389.563 310.052 383.484 327.618 373.263 C 332.01 370.727 335.523 368.036 339.605 365.515 C 346.443 359.814 353.266 354.878 359.261 347.885 C 359.83 347.221 360.078 346.922 360.715 346.328 C 361.362 345.5 369.127 345.857 370.945 345.866 C 377.034 345.906 383.123 345.916 389.212 345.895 C 381.713 357.865 359.515 378.853 347.242 386.001 C 345.126 388.173 335.797 393 332.812 394.563 C 307.821 407.642 281.306 412.948 253.212 412.121 C 220.852 411.086 189.612 400.024 163.812 380.463 C 160.089 377.619 153.897 372.661 150.683 369.256 C 145.708 365.229 132.363 350.373 129.346 345.066" style="stroke-width: 1;"/>
                <path fill="#0699b4" d="M 129.346 345.066 C 138.049 344.713 148.276 344.928 157.066 344.997 C 158.554 346.634 160.004 348.304 161.414 350.007 C 161.317 349.983 161.216 349.972 161.123 349.937 C 158.393 348.895 158.368 344.394 154.599 345.828 C 152.299 346.704 150.621 349.878 149.72 352.053 C 149.163 353.397 146.166 364.023 146.476 364.691 C 147.286 366.435 150.459 367.095 150.683 369.256 C 145.708 365.229 132.363 350.373 129.346 345.066" style="stroke-width: 1;"/>
                <path fill="#0699b4" d="M 145.616 168.483 C 148.702 168.361 152.268 168.436 155.389 168.435 C 154.347 174.685 152.766 180.895 151.779 187.279 C 149.505 187.225 145.515 187.067 143.361 187.508 C 125.875 190.648 128.34 207.55 126.035 221.125 C 123.565 235.667 111.656 249.376 96.454 251.55 C 102.478 253.724 106.406 254.395 111.254 259.405 C 118.396 266.783 119.27 278.418 116.85 287.936 C 115.546 293.07 113.4 297.871 113.356 303.296 C 113.325 307.113 114.304 311.145 117.093 313.921 C 121.857 318.666 128.078 317.867 134.341 317.869 C 133.673 322.88 131.216 331.827 129.947 336.972 C 127.055 337.041 123.657 336.905 120.729 336.851 C 111.608 335.882 103.182 333.111 96.823 326.188 C 89.226 317.919 87.919 306.584 90.936 296.098 C 92.283 290.723 94.531 285.45 94.718 279.855 C 95.174 266.223 85.424 262.603 73.975 262.346 C 74.919 256.026 76.705 248.244 77.984 241.9 C 81.387 241.574 84.418 241.224 87.632 239.996 C 97.525 236.218 102.321 226.459 103.684 216.497 C 104.44 210.534 104.407 204.773 105.811 198.878 C 110.426 179.508 126.657 169.324 145.616 168.483" style="stroke-width: 1;"/>
                <path fill="#4b53c5" d="M 389.721 168.577 C 392.831 168.565 396.049 168.5 399.078 168.648 C 422.409 169.794 433.895 189.495 427.733 211.152 C 426.46 216.832 424.117 222.652 424.925 228.553 C 426.379 239.159 435.888 241.811 444.867 242.261 C 443.527 249.051 442.294 256.184 440.845 262.904 C 422.957 264.082 417.486 274.662 415.42 291.253 C 414.864 295.715 414.586 300.399 413.62 304.786 C 409.984 321.303 397.229 333.109 380.728 336.31 C 376.085 337.252 367.827 337.084 362.796 337.091 L 367.124 317.861 C 373.125 318.094 378.49 318.287 383.544 314.457 C 393.292 307.067 391.11 293.095 393.32 282.462 C 396.443 267.44 407.456 255.592 422.828 253.178 C 417.217 251.519 412.723 249.698 408.573 245.387 C 401.774 238.414 399.679 227.15 402.143 217.825 C 404.353 209.457 409.21 198.858 402.198 191.138 C 398.344 186.896 391.104 187.414 385.75 187.325 C 386.772 181.145 388.53 174.791 389.721 168.577" style="stroke-width: 1;"/>
                <path fill="#4b53c5" d="M 259.297 196.923 L 342.967 196.927 C 340.941 204.441 338.52 211.909 336.417 219.414 C 329.6 217.962 317.061 215.068 311.088 218.744 C 303.285 223.548 300.681 242.129 298.793 251.069 C 294.855 270.364 290.743 289.623 286.456 308.843 C 278.305 308.856 269.819 308.921 261.681 308.718 C 265.062 293.205 268.543 277.714 272.123 262.245 C 273.313 256.717 274.54 251.197 275.803 245.685 C 278.107 235.718 279.344 229.242 288.646 223.514 C 293.459 220.551 297.333 219.294 302.839 218.069 L 303.023 217.383 C 297.179 217.355 291.204 217.103 285.403 217.165 C 274.122 217.295 262.857 218.069 251.663 219.484 C 253.889 211.609 257.063 204.438 259.296 196.923" style="stroke-width: 1;"/>
                <path fill="#4b53c5" d="M 367.22 196.41 L 391.417 196.442 C 389.001 201.856 384.8 209.481 381.959 214.95 L 360.433 256.021 L 341.063 292.969 L 335.653 303.424 C 334.857 304.972 333.997 306.664 333.16 308.206 C 332.843 308.791 332.256 308.668 331.545 308.722 L 306.894 308.664 C 313.152 297.813 319.658 285.12 325.533 274.018 L 341.773 243.957 L 357.67 214.201 C 360.705 208.587 364.624 202.058 367.22 196.41" style="stroke-width: 1;"/>
              </svg>
            </div>
            <div class="logo-body"><span class="logo-name">Khemraj Thakoor</span><span class="logo-tagline">SEO | Optimization | WordPress</span></div>
          </div>
          <p>Senior WordPress Developer · Technical SEO Specialist · Full-Stack Web Engineer</p>
          <div class="avail-badge" style="margin-bottom:1rem"><span class="avail-dot"></span>Available for Remote Projects</div>
          <div class="footer-social">
            <a href="https://linkedin.com/in/khemraj-thakoor" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
            <a href="https://github.com/khemraj" target="_blank" rel="noopener noreferrer" aria-label="GitHub">gh</a>
            <a href="mailto:khemraj143@gmail.com" aria-label="Email">@</a>
            <a href="assets/others/updated-full-stack-wordPress-developer.pdf" download="Khemraj-Thakoor-CV.pdf" aria-label="Download CV" title="Download CV">cv</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="works.html">Works</a></li>
            <li><a href="skills.html">Skills</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="technical-seo.html">Technical SEO</a></li>
            <li><a href="custom-wordpress-development.html">Custom WordPress</a></li>
            <li><a href="performance-optimization.html">Performance</a></li>
            <li><a href="headless-wordpress.html">Headless WordPress</a></li>
            <li><a href="woocommerce.html">WooCommerce</a></li>
            <li><a href="cms-migration.html">CMS Migration</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Technologies</h4>
          <ul>
            <li><a href="skills.html">WordPress</a></li>
            <li><a href="skills.html">React.js</a></li>
            <li><a href="skills.html">GraphQL</a></li>
            <li><a href="skills.html">PHP / MySQL</a></li>
            <li><a href="skills.html">AWS</a></li>
            <li><a href="skills.html">REST API</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Khemraj Thakoor. All rights reserved.</p>
        <a href="assets/others/updated-full-stack-wordPress-developer.pdf" download="Khemraj-Thakoor-CV.pdf" class="btn-cv" style="padding:.45rem 1rem;font-size:.8rem">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          <span>Download CV</span>
        </a>
      </div>
    </div>
  </footer>`;
}

document.addEventListener('DOMContentLoaded', () => {
  const activePage = document.body.dataset.page || 'home';
  document.getElementById('site-nav').innerHTML = getNav(activePage);
  document.getElementById('site-footer').innerHTML = getFooter();

  initNavbar();
  initScrollAnimations();
  initFAQ();
  initSpotlight();
  initTechPills();
  initProgressBars();
  initSectionLabels();
  initContactForm();
  initMagneticTilt();
  initParallaxHero();
  initCounterObserver();
  initNavActiveHighlight();
});

/* ---- Navbar ---- */
function initNavbar() {
  const navbar   = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
    navToggle.classList.toggle('active', open);
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.classList.remove('active');
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (!t) return;
      e.preventDefault();
      window.scrollTo({ top: t.offsetTop - 80, behavior: 'smooth' });
    });
  });
}

/* ---- Scroll animations — Flexigency style ---- */
function initScrollAnimations() {
  const SELECTORS = '.anim-fade-up,.anim-fade-left,.anim-fade-right,.anim-scale-in,.anim-blur-in,.anim-clip,.anim-clip-v,.section-label';

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.classList.add('in');

      /* Stagger direct children marked .stagger-child */
      el.querySelectorAll('.stagger-child').forEach((child, i) => {
        child.style.transitionDelay = (i * 0.08) + 's';
        child.classList.add('in');
      });

      io.unobserve(el);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll(SELECTORS).forEach(el => io.observe(el));

  /* Legacy .fade-up support */
  const io2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      io2.unobserve(entry.target);
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up').forEach(el => io2.observe(el));
}

/* ---- Counter animation ---- */
function animateCounter(el) {
  if (el.dataset.counted) return;
  el.dataset.counted = '1';
  const target   = parseInt(el.dataset.target, 10);
  const suffix   = el.dataset.suffix || '';
  const duration = 1800;
  const step     = target / (duration / 16);
  let current    = 0;
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current) + suffix;
    if (current >= target) {
      clearInterval(timer);
      el.classList.add('done');
    }
  }, 16);
}

/* ---- Counter observer (separate so counters fire on scroll) ---- */
function initCounterObserver() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll('[data-target]').forEach(animateCounter);
      io.unobserve(entry.target);
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.ach-card, .stat-box, .hero-stat').forEach(el => io.observe(el));
}

/* ---- FAQ accordion ---- */
function initFAQ() {
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item   = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ---- Spotlight mouse glow ---- */
function initSpotlight() {
  document.querySelectorAll('.spotlight-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top)  + 'px');
    });
  });
}

/* ---- Magnetic 3D tilt on cards (Flexigency style) ---- */
function initMagneticTilt() {
  document.querySelectorAll('.svc-card, .why-card, .solve-card, .work-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r  = card.getBoundingClientRect();
      const cx = r.left + r.width  / 2;
      const cy = r.top  + r.height / 2;
      const dx = (e.clientX - cx) / (r.width  / 2);
      const dy = (e.clientY - cy) / (r.height / 2);
      card.style.transform = `perspective(600px) rotateY(${dx * 6}deg) rotateX(${-dy * 6}deg) translateY(-6px) scale(1.015)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ---- Parallax hero visual on scroll ---- */
function initParallaxHero() {
  const visual = document.querySelector('.hero-visual');
  if (!visual) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    visual.style.transform = `translateY(${y * 0.08}px)`;
  }, { passive: true });
}

/* ---- Tech pills stagger ---- */
function initTechPills() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll('.tech-pill').forEach((pill, i) => {
        pill.style.animationDelay = (i * 0.045) + 's';
        pill.classList.add('in');
      });
      io.unobserve(entry.target);
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.tech-group').forEach(g => io.observe(g));
}

/* ---- Progress bars ---- */
function initProgressBars() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll('.progress-bar').forEach(bar => bar.classList.add('in'));
      io.unobserve(entry.target);
    });
  }, { threshold: 0.25 });
  document.querySelectorAll('.progress-bar-wrap').forEach(w => {
    io.observe(w.closest('section') || w);
  });
}

/* ---- Section label underline ---- */
function initSectionLabels() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('in');
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('.section-label').forEach(el => io.observe(el));
}

/* ---- Nav active link highlight on scroll (single-page sections) ---- */
function initNavActiveHighlight() {
  const sections = document.querySelectorAll('section[id]');
  if (!sections.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
      });
    });
  }, { threshold: 0.4 });
  sections.forEach(s => io.observe(s));
}

/* ---- Contact form ---- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    btn.textContent = 'Message Sent ✓';
    btn.style.background = 'var(--green)';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.style.background = '';
      btn.disabled = false;
      form.reset();
    }, 3000);
  });
}
