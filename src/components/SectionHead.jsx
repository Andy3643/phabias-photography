import './sectionHeader.css'

const SectionHeader = ({title,image,children}) => {
  return (
    <header className='section-header'>
        <div className="header__container">
            <div className="header__container-bg">
                <img src={image} alt= 'background' />
            </div>
            <div className="header__content">
                <h2 className='section-tittle'>{title}</h2>
                <p >{children}</p>
            </div>

        </div>
    </header>
  )
}

export default SectionHeader