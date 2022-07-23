import {useState} from 'react'
import {classNames} from '../helpers/classes';
import {VscMenu} from 'react-icons/vsc'
import SideBarMenuItemView from './SideBarMenuItemView';
import SideBarMenuCardView from './SideBarMenuCardView';
const SideBarMenu = ({items, card}) => {
    const [isOpen, setIsOpen] = useState(false)
    function handleCLick(e) {
        setIsOpen(!isOpen)
    }
    return (
        <div className={classNames('SideBarMenu', isOpen ? 'expanded' : 'collapsed')}>
            <div className='menuButton'>
                <button className='hamburguerIcon' onClick={handleCLick}>
                    <VscMenu />
                </button>
            </div>
            <SideBarMenuCardView card={card} isOpen={isOpen}/>
            {
                items.map( item => (
                    <SideBarMenuItemView key={item.id} item={item} isOpen={isOpen} />
                ))
            }
        </div>
    )
}

export default SideBarMenu