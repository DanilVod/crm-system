import tw from 'twin.macro';
import { Counter } from './features/counter/Counter';

function App() {
  const Wrapper = tw.section`flex w-full`;
  const Column = tw.div`w-1/2`;

  return (
    <div className="App">
      <Wrapper>
        <Column>Hi</Column>
        <Counter />
      </Wrapper>
    </div>
  );
}

export default App;
