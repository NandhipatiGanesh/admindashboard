// export default function Arrows ({ className = "" } : {className? : string})
export default function Arrows({ className = " " }: { className?: string }) {
  return (
    <>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.796 9.8136L24.5 7L22.0847 16.8107L19.0716 13.9181L14.2112 18.981C14.0462 19.1528 13.8183 19.25 13.58 19.25C13.3417 19.25 13.1138 19.1528 12.9488 18.981L9.38 15.2635L4.13121 20.731C3.79655 21.0796 3.24265 21.0909 2.89404 20.7562C2.54543 20.4215 2.53412 19.8676 2.86879 19.519L8.74879 13.394C8.91379 13.2222 9.14174 13.125 9.38 13.125C9.61826 13.125 9.84621 13.2222 10.0112 13.394L13.58 17.1115L17.8091 12.7062L14.796 9.8136Z"
          fill="white"
        />
      </svg>
    </>
  );
}
