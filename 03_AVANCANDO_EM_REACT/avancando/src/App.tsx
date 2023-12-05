import City from './assets/city.jpg';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';

function App() {
  return (
    <>
      <div>
        <h1>Avançando em React</h1>
        {/* Imagem em public */}
        <div>
          <img src="./rj.jpg" alt="Rio de Janeiro" />
        </div>
        {/* Imagem em asset */}
        <div>
          <img src={City} alt="Cidade" />
        </div>
        <ManageData />
        <ListRender />
      </div>
    </>
  );
}

export default App;
