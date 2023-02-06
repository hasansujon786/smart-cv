const Button = ({ icon, onClick, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className='shadow shadow-yellow-600/50 bg-yellow-400 flex flex-center rounded-md text-gray-700 active:shadow-yellow-600/40 disabled:shadow-yellow-600/30 disabled:bg-yellow-500'
    >
      <span className='leading-none uppercase px-2 py-2 '>{icon}</span>
    </button>
  )
}

export default Button
