import bolo from "./Bolo-Prestigio-de-Festa.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RecipeHeader />
      </header>
    </div>
  );
}

function RecipeHeader() {
  return (
    <header className="App-header">
      <h1>Bolo de Prestígio</h1>
      <img
        src={bolo}
        className="App-bolo"
        alt="Imagem de um bolo de prestígio com uma fatia cortada."
      />
      <h3>Ingredientes:</h3>
      <Ingredients />
      <h3>Modo de Fazer:</h3>
      <Method />
    </header>
  );
}

function Ingredients() {
  return (
    <ul>
      <p>Massa:</p>
      <li>3 ovos</li>
      <li>2 xícaras de açúcar</li>
      <li>3 xícaras de farinha de trigo</li>
      <li>1 xícara de leite</li>
      <li>1 colher de sopa de fermento em pó</li>
      <li>1/2 xícara de óleo</li>
      <p>Para o recheio e cobertura:</p>
      <li>1 lata de leite condensado</li>
      <li>1 colher de sopa de manteiga</li>
      <li>100g de coco ralado</li>
      <li>200g de chocolate meio amargo</li>
      <li>1 lata de creme de leite</li>
    </ul>
  );
}

function Method() {
  return (
    <ol>
      <li>
        Pré-aqueça o forno a 180°C e unte uma forma com manteiga e farinha.
      </li>
      <li>
        Em uma tigela, bata os ovos com o açúcar até obter uma mistura clara e
        fofa.
      </li>
      <li>
        Adicione o óleo e o leite à mistura de ovos e açúcar, alternando com a
        farinha de trigo peneirada. Misture bem até obter uma massa homogênea.
      </li>
      <li>Acrescente o fermento em pó e misture delicadamente.</li>
      <li>
        Despeje a massa na forma preparada e leve ao forno por aproximadamente
        40 minutos, ou até que ao enfiar um palito no centro do bolo ele saia
        limpo.
      </li>
      <li>
        Enquanto o bolo assa, prepare o recheio e cobertura: em uma panela,
        misture o leite condensado, a manteiga e o coco ralado. Leve ao fogo
        baixo, mexendo sempre, até que comece a desgrudar do fundo da panela.
        Reserve.
      </li>
      <li>
        Em outro recipiente, derreta o chocolate meio amargo em banho-maria ou
        no micro-ondas, e misture o creme de leite até obter um creme homogêneo.
        Reserve.
      </li>
      <li>
        Quando o bolo estiver assado e já tiver esfriado, corte-o ao meio,
        espalhe o recheio de coco sobre uma das metades e cubra com a outra
        metade.
      </li>
      <li>Por fim, cubra todo o bolo com a ganache de chocolate.</li>
      <li>
        Leve à geladeira por cerca de 2 horas para firmar o recheio e a
        cobertura.
      </li>
      <p>
        Sirva e aproveite seu delicioso bolo de prestígio! Espero que goste
        desta receita! Bom apetite!
      </p>
    </ol>
  );
}

export default App;
