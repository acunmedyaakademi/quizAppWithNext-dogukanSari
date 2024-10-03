export default function Toggle({ handleToggle, theme }) {
  return(
    <div className='toggle'>
      <img className='lightsun' src="img/lightsun.svg" alt="light sun" />
      <img className='darksun' src="img/darksun.svg" alt="dark sun" />
      <label className="switch">
        <input type="checkbox" onChange={handleToggle} checked={theme == 'dark' ? true : false} />
        <span className="slider round"></span>
      </label>
      <img className='lightmoon' src="img/lightMoon.svg" alt="Light moon" />
      <img className='darkMoon' src="img/darkMoon.svg" alt="dark moon" />
    </div>
  )
}