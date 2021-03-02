import {useState} from 'react';
import styles from './index.module.css';
import fontFamily from './index.module.css';


function Home(){
    return (
        <div>
            <head>
                <title>hewo</title>
            </head>
            <header className={styles.header}>Andromeda</header>
            <div>
                <img style={{align:'center'}} src='https://i.imgur.com/qFEoH1K.jpg?2' alt={'Clocks'}/>
                <h1  style={{textAlign:'center', fontFamily:'Futura PT'}}>Contando</h1>
                <Contador/>
            </div>
        </div>
    )
}

export default Home


function Contador() {
    const [contador, setContador] = useState(1);
    function adicionarContador(){
        setContador(contador + 1);
    }
    return (
        <view style={{flex:1,justifyContent: "center",}}>
           <div>
             <p className={styles.bigblue}>Esse botãozinho é fofo</p>
                <div style={{ display: 'flex', flex:1,justifyContent: "center", alignItems: "center"}}>
                <button style={{}} variant='contained' onClick={adicionarContador}>{contador}</button>
                </div>
            </div>
        </view>
    );
}
