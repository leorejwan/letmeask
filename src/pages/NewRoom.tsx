// import { useContext } from 'react'
// import { AuthContext } from '../contexts/AuthContext'

import { Link } from 'react-router-dom'
import { ChangeEvent, FormEvent, useState } from 'react'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import '../styles/auth.scss'
import { Button } from '../components/Button'

export function NewRoom() {
    // const { user } = useContext(AuthContext);

    const [newRoom, setNewRoom] = useState('');

    async function handleCreateRoom(event : FormEvent){
        event.preventDefault();

        console.log(newRoom);
    }

    async function handleSetNewRoom(event : ChangeEvent<HTMLInputElement>){
        setNewRoom(event.target.value);
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className='main-content'>
                    <img src={logoImg} alt="letmeask" />
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input 
                            type="text"
                            placeholder="Nome da sala" 
                            onChange={handleSetNewRoom}
                            value={newRoom}
                        />
                        <Button type="submit">Criar sala</Button>
                    </form>

                    <p>Quer entrar em uma sala existente? <Link to="/">clique aqui</Link></p>
                </div>
            </main>
        </div>
    )
}