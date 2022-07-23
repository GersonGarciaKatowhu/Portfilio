import { classNames } from "../helpers/classes"
const SideBarMenuCardView = ({card, isOpen}) => {
    return (
        <div className="SideBarMenuCardView">
            <img className="profile" src={card.photoUrl} alt={card.displayName}  width='100%'/>
            <div className={classNames('profileInfo', isOpen ? '' : 'collapsed')}>
                <div className="name">{card.displayName}</div>
                <div className="tittle">{card.title}</div>
                <div className="url">
                    <a href={card.url}>Ir al perfil</a>
                </div>
            </div>
        </div>
    )
}

export default SideBarMenuCardView