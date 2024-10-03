import Image from 'next/image';
export default function Toggle({ handleToggle, theme }) {
  return(
    <div className='toggle'>
      <Image
        className='lightsun'
        src="/images/lightsun.svg"
        alt="Light Sun Logo"
        width={76}
        height={34}
      />
      <Image
        className='darksun'
        src="/images/darksun.svg"
        alt="Dark Sun Logo"
        width={76}
        height={34}
      />    
      <label className="switch">
        <input type="checkbox" onChange={handleToggle} checked={theme == 'dark' ? true : false} />
        <span className="slider round"></span>
      </label>
      <Image
        className='lightmoon'
        src="/images/lightMoon.svg"
        alt="Light Moon Logo"
        width={76}
        height={34}
      />
      <Image
        className='darkMoon'
        src="/images/darkMoon.svg"
        alt="Light Moon Logo"
        width={76}
        height={34}
      />
    </div>
  )
}