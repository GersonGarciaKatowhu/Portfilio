import './App.scss'
import Home from './components/Home'
import SideBarMenu from './components/SideBarMenu'
import {FcAdvertising} from 'react-icons/fc'
import profileImage from './img/descarga.jpeg'
function App() {
    const items = [
        {
            id: '1',
            label: 'Inicio',
            icon: FcAdvertising,
            url: '#inicio',
        },
        {
            id: '2',
            label: 'Proyectos',
            icon: FcAdvertising,
            url: '#proyectos',
        },
        {
            id: '3',
            label: 'Servicios',
            icon: FcAdvertising,
            url: '#servicios',
        },
        {
            id: '4',
            label: 'Sobre mi',
            icon: FcAdvertising,
            url: '#sobre-mi',
        },
        {
            id: '5',
            label: 'Contacto',
            icon: FcAdvertising,
            url: '#contacto',
        },
        
    ]
    const card = {
        id: 'card-1',
        displayName: 'Emanuel',
        title: 'Portafolio',
        photoUrl: profileImage,
        url: '/',
    }

    return (
        <div className="App">
            <div className="menu">
                <SideBarMenu items={items} card={card}></SideBarMenu>
            </div>
            <main className="contenedor">
                <Home></Home>
            </main>
        </div>
    )
}

export default App
