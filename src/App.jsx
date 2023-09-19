import React from 'react';
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {
  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "1942b49b-a363-4ed7-8c1d-d3f6265c2487", // O ID desta integração.
      region: "us-south", // A região em que sua integração está hospedada.
      serviceInstanceID: "0d2f94db-ab1a-4fcb-8abf-d99f79119e87d", // O ID de sua instância de serviço.
      onLoad: function (instance) {
        instance.render();
      },
    };

    setTimeout(function () {
      const t = document.createElement('script');
      t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
      document.head.appendChild(t);
    });
  }, []);

  return (
    <body className='body'>
      <Header />
      <Outlet />
      <div></div>
    </body>
  );
}

export default App