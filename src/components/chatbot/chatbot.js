import ChatBot from 'react-simple-chatbot';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import userImage from '../../img/profilepic.jpg';
import './chatbot.css';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'arial',
  headerBgColor: '#483F59',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#DED0F2',
  botFontColor: '#483F59',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};
class Chatbot extends React.Component {
  state = {
    minimized: false,
  };

  handleToggle = () => {
    this.setState((prevState) => ({
      minimized: !prevState.minimized,
    }));
  };

  render() {
    const { minimized } = this.state;
    const buttonClass = `chatbot-button ${minimized ? 'minimized' : ''}`;
    const containerClass = `chatbot-container ${minimized ? 'minimized' : ''}`;

    return (
      <>
        <div className={containerClass}>
        <ThemeProvider theme={theme}>
          <ChatBot
            steps={steps}
            botAvatar={userImage}
            floating={false}
            headerTitle="Nathalia Busnego"
            placeholder="Escribe aquí..."
          />
          </ThemeProvider>
        </div>
        <div className={buttonClass} onClick={this.handleToggle}>
          {minimized ? '+' : '-'}
        </div>
      </>
    );
  }
}

const steps = [
    {
        id: '1',
        message: 'Hola, mi nombre es Nathalia Busnego, como te llamas?',
        trigger: '2',
      },
      {
        id: '2',
        user: true,
        trigger: '3',
      },
      {
        id: '3',
        message: 'Hola {previousValue}, Mucho gusto, te dejo aqui una información sugerida que podria interesarte',
        trigger: 4
        
    },
    {
        id: '4',
        options: [
            { value: 5, label: 'Sobre mi', trigger: '5' },
            { value: 6, label: 'Formacion Academica', trigger: '6' },
            { value: 7, label: 'Tecnologías', trigger: '7' },
            { value: 8, label: 'Contacto', trigger: '8' }],

    }
    ,
    {
        id:'5',
        message:'Informacion Sobre mi',
        trigger:10
    },
    {
        id:'6',
        message:'Informacion sobre Formacion Academica',
        trigger:10
    },
    {
        id:'7',
        message:'a',
        trigger:10
    },
    {
        id:'8',
        message:'Contacto',
        trigger:10
    },
    {
      id:9,
      message:'Éstas son las tecnologias con las que he trabajado',
      trigger:10

    },
    {
      id:10,
      message:'¿Algo más que te gustaria saber?',
      trigger:4
    }
];

export default Chatbot;