import Image from "next/image";
import Link from "next/link";

const LOGO_URL =
  "https://firebasestorage.googleapis.com/v0/b/freshivores-b3fd9.appspot.com/o/settings%2Flogo6270c4612c86f.png?alt=media&token=0a8a2cf9-e3dd-4bb4-8900-ab2ef390dbd8";

export default function Header() {
  return (
    <header className="py-4 border-b px-5 md:px-0">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center">
            <div className="relative w-[180px] h-[60px]">
              <Image
                src={LOGO_URL}
                alt="Freshivores Logo"
                fill
                sizes="180px"
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <button className="hidden lg:flex items-center gap-2 bg-orange-400 text-white px-4 py-2 rounded-md">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.9601 24.8804C16.7572 24.8804 16.5684 24.7531 16.4984 24.5509C16.4107 24.2956 16.5458 24.0177 16.801 23.9301C19.734 22.9182 21.7698 21.0494 22.2463 18.931C22.6055 17.3365 22.0476 15.7194 20.6773 14.3766C19.9879 13.7013 18.6876 12.9568 17.1115 12.3345C16.8604 12.2355 16.7374 11.952 16.8364 11.701C16.9354 11.45 17.2189 11.3276 17.4699 11.4259C18.4648 11.8191 20.2941 12.6336 21.3611 13.6787C22.9831 15.2675 23.6358 17.2085 23.1995 19.1459C22.6395 21.6342 20.4235 23.7144 17.1192 24.8542C17.0662 24.8726 17.0125 24.8811 16.9601 24.8811V24.8804Z"
                fill="white"
              ></path>
              <path
                d="M12.9277 21.1738C12.8556 21.1738 12.7835 21.1583 12.7142 21.125C12.4716 21.007 12.3705 20.7149 12.4886 20.4724C12.565 20.3161 12.63 20.1507 12.6837 19.9824L15.8105 10.0782C15.831 10.0153 15.8586 9.95659 15.8939 9.90356L20.1237 3.62956C20.3896 3.23501 20.4759 2.76267 20.3663 2.29882C20.2567 1.83568 19.9682 1.45173 19.5531 1.21768C19.0956 0.960304 18.6183 0.912224 18.1651 1.05788C17.7119 1.20425 17.3527 1.52244 17.1525 1.95447L13.9756 8.81888C13.9459 8.88111 13.9105 8.93555 13.8681 8.98364L7.01432 16.7856C6.16581 17.7515 5.9056 19.1063 6.33551 20.3211C6.42531 20.5756 6.29238 20.8549 6.03854 20.9447C5.78398 21.0345 5.50468 20.9016 5.41488 20.6471C4.86689 19.0992 5.19852 17.3718 6.28036 16.1408L13.1073 8.36988L16.2666 1.54365C16.5777 0.871212 17.161 0.355036 17.866 0.128061C18.571 -0.0996215 19.3459 -0.0211341 19.9915 0.343016C19.9915 0.343016 20.0346 0.367058 20.0353 0.367765C20.6795 0.731208 21.1476 1.35345 21.318 2.07397C21.4884 2.7952 21.3491 3.56098 20.9348 4.17544L16.7304 10.412L13.6157 20.2758C13.5485 20.4901 13.4644 20.6994 13.3682 20.8988C13.2841 21.0727 13.1094 21.1738 12.9284 21.1738H12.9277Z"
                fill="white"
              ></path>
              <path
                d="M16.2842 10.6863C16.2029 10.6863 16.1209 10.6658 16.0445 10.6234L13.2805 9.06496C13.0458 8.93274 12.9623 8.63435 13.0953 8.39959C13.2282 8.16484 13.5259 8.08211 13.7606 8.21434L16.5246 9.77276C16.7594 9.90569 16.8428 10.2034 16.7099 10.4381C16.6201 10.5972 16.4546 10.6863 16.2842 10.6863Z"
                fill="white"
              ></path>
              <path
                d="M10.0428 21.3796C9.93952 21.3796 9.83487 21.3471 9.74648 21.2792C9.53223 21.1152 9.49123 20.809 9.65527 20.5947C10.0611 20.0637 10.4317 19.4457 10.7251 18.8072L14.8114 9.9269L14.5151 9.76003L9.03303 17.8534C8.3917 18.7994 7.91512 19.8679 7.72421 20.7842C7.66906 21.048 7.41026 21.2156 7.14652 21.1632C6.88207 21.1081 6.71307 20.8493 6.76752 20.5856C6.98318 19.549 7.5142 18.3533 8.22341 17.3054L13.9423 8.86273C14.0852 8.65202 14.3793 8.56293 14.6013 8.68738L15.6839 9.29759C15.9144 9.4277 15.9993 9.7176 15.8755 9.95165L11.6118 19.2152C11.2886 19.9181 10.8799 20.5997 10.4309 21.1873C10.3348 21.3131 10.1898 21.3789 10.0428 21.3789V21.3796Z"
                fill="white"
              ></path>
              <path
                d="M10.0951 21.3782C6.68484 21.3782 2.90333 20.6018 1.3845 19.1134C0.244677 17.9969 -0.213515 16.6633 0.092654 15.3595C0.5162 13.5578 2.30513 12.0241 5.00126 11.1509C7.03485 10.4919 9.33996 10.1864 11.6649 10.2677C11.9343 10.2769 12.1457 10.5032 12.1358 10.7726C12.1266 11.042 11.8982 11.2463 11.6309 11.2435C9.41632 11.1657 7.22859 11.4556 5.30177 12.0793C2.97333 12.833 1.38097 14.1426 1.04298 15.5822C0.814591 16.5551 1.16813 17.5345 2.06755 18.4148C3.88901 20.1988 10.7181 21.0183 14.2443 19.8763C15.6755 19.4132 16.6505 18.6227 16.8528 17.7614C17.0189 17.0551 16.6145 16.4759 16.2454 16.1146C16.1429 16.0142 16.0248 15.9166 15.8961 15.8254C15.6755 15.6699 15.6224 15.3651 15.778 15.1445C15.9336 14.9239 16.2376 14.8709 16.4589 15.0264C16.6315 15.148 16.7891 15.2788 16.9291 15.416C17.7041 16.1747 18.0145 17.0869 17.8038 17.9842C17.5181 19.1982 16.3302 20.2263 14.5448 20.8047C13.3598 21.1887 11.7716 21.3761 10.0944 21.3761L10.0951 21.3782Z"
                fill="white"
              ></path>
            </svg>
            Mill as you wish
          </button>
        </div>

        <div className="flex items-center gap-4">
          {/* Center Section */}
          <div className="hidden xl:flex 2xl:items-center gap-1.5 2xl:gap-4 flex-col 2xl:flex-row items-start">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="2xl:size-5 size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <span className="ml-2 text-xs">wecareyou@freshivores.com</span>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="2xl:size-5 size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>

              <span className="ml-2 text-xs">+91 73537 73538</span>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <div className="relative xl:flex hidden">
              <input
                type="search"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border rounded-md w-64"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <Link
              href="/login"
              className="bg-green-800 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              Login →
            </Link>
            <Link href="/cart" className="hidden md:flex">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                  fill="#1F1E2C"
                  stroke="#1F1E2C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                  fill="#1F1E2C"
                  stroke="#1F1E2C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
                  stroke="#1F1E2C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
