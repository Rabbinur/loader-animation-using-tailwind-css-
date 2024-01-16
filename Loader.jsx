import React from "react";

const Loader = ({ size }) => {
  return (
    <div className="h-[80vh] flex justify-center items-center">
      {/* 1 loader using props */}
      <div className="w-[50%]  flex-center h-10">
        <div
          style={{ width: `${size}px`, height: `${size}px` }}
          className="animate-spin"
        >
          <div
            className="h-full w-full border-4 border-t-purple-500
     border-b-purple-700 rounded-[50%]"
          ></div>
        </div>
      </div>
      {/* second laoding */}
      <div aria-label="Loading..." role="status">
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-spin w-20 h-20 stroke-red-600"
        >
          <path d="M12 3v3m6.366-.366-2.12 2.12M21 12h-3m.366 6.366-2.12-2.12M12 21v-3m-6.366.366 2.12-2.12M3 12h3m-.366-6.366 2.12 2.12"></path>
        </svg>
      </div>
      {/* laoding with text */}
      <div className="flex items-center space-x-2">
        <div aria-label="Loading..." role="status">
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-spin w-4 h-4 stroke-slate-500"
          >
            <path d="M12 3v3m6.366-.366-2.12 2.12M21 12h-3m.366 6.366-2.12-2.12M12 21v-3m-6.366.366 2.12-2.12M3 12h3m-.366-6.366 2.12 2.12"></path>
          </svg>
        </div>
        <span className="text-xs font-medium text-slate-500">Loading...</span>
      </div>
      {/* button laod */}
      <div>
        <button
          className="disabled:opacity-50 transition inline-flex items-center justify-center space-x-1.5 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:z-10 shrink-0 saturate-[110%] border-blue-700/75 focus:ring-blue-600 bg-blue-600 text-white hover:bg-blue-700 hover:border-blue-700 px-3 py-1.5 text-sm font-medium rounded-md"
          disabled=""
        >
          <div aria-label="Loading..." role="status">
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              xmlns="http://www.w3.org/2000/svg"
              class="animate-spin w-6 h-6 stroke-white"
            >
              <path d="M12 3v3m6.366-.366-2.12 2.12M21 12h-3m.366 6.366-2.12-2.12M12 21v-3m-6.366.366 2.12-2.12M3 12h3m-.366-6.366 2.12 2.12"></path>
            </svg>
          </div>
          <span>Loading...</span>
        </button>
      </div>
    </div>
  );
};

export default Loader;
