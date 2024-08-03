import React from 'react';

function NavBtn({ btnText }) {
  return (
    <>
      <div class="w-full  flex items-center justify-start cursor-pointer text-[#e0e0e0]  hover:text-cyan-dark">
        <div class="relative inline-flex items-center justify-start py-3 pl-12 pr-4 overflow-hidden font-semibold shadow  transition-all duration-200 ease-in-out rounded hover:pl-14 group">
          {/* <span class="absolute right-0 pr-4 duration-300  group-hover:translate-x-2">
            <svg
              className="transform transition-all duration-400 
                                group-hover:translate-x-2 w-6"
              fill="#e0e0e0"
              viewBox="0 0 24.00 24.00"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#e0e0e0"
              stroke-width="0.00024000000000000003"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M16.707,18.707a1,1,0,0,1-1.414-1.414L19.586,13H2a1,1,0,0,1,0-2H19.586L15.293,6.707a1,1,0,0,1,1.414-1.414l6,6a1,1,0,0,1,0,1.414Z"></path>
              </g>
            </svg>
          </span> */}
          <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-500">
          <svg
                  className="transform transition-all duration-400 
                                group-hover:translate-x-2 w-6"
                  fill="#e0e0e0"
                  viewBox="0 0 24.00 24.00"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#e0e0e0"
                  stroke-width="0.00024000000000000003"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M16.707,18.707a1,1,0,0,1-1.414-1.414L19.586,13H2a1,1,0,0,1,0-2H19.586L15.293,6.707a1,1,0,0,1,1.414-1.414l6,6a1,1,0,0,1,0,1.414Z"></path>
                  </g>
                </svg>
          </span>
          <span class="relative w-full text-left transition-colors duration-500 ease-in-out font-normal tracking-wider  font-montserrat">
            {btnText}
          </span>
        </div>
      </div>
    </>
  );
}

export default NavBtn;
