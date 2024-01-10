function Modal({show, onClose, children}) {
    return (
        <div 
      style= {{
        transform: show ? "translate(0%)" : "translateX(-200%)",
      }}
      className='absolute top-0 left-0 w-full h-full z-10 transition-all duration-500'>
        {/**inner container */}
        <div className='container mx-auto max-w-2x1 h-[100vh] rounded-3x1 bg-slate-800 py-6 px-4 '>
            <button onClick={() => {onClose(false)}} className='w-10 h-10 mb-4 font-bold rounded-full bg-slate-600'>X</button>
            {children}
        </div>
    </div>


    );
}

export default Modal;