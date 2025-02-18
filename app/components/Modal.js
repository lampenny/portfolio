export default function Modal({ children, onClick }) {
  return (
    <div className="fixed rounded-2xl h-fit w-fit container top-10 p-20 grid bg-black text-white z-50">
      <div className="w-[800px] h-[500px]">{children}</div>
      <div className="flex flex-row-reverse">
        <button className="text-2xl" onClick={onClick}>
          close
        </button>
      </div>
    </div>
  );
}
