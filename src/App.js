
import Input from './components/Input';
import Button from './components/Button';
import Text from './components/Text';

import { Container, Content, Row} from './styles';
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handleMinusNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
    }else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handleDivisionNumbers =() => {
    if (firstNumber==='0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('/')
  }else {
    const sum = Number(firstNumber) / Number(currentNumber);
    setCurrentNumber(String(sum))
    setOperation('')
  }

}

const handleMultiplyNumbers =() => {
  if (firstNumber==='0'){
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0')
    setOperation('x')
}else {
  const sum = Number(firstNumber) * Number(currentNumber);
  setCurrentNumber(String(sum))
  setOperation('')
}

}

  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
        switch(operation){

          case '+':
            handleSumNumbers();
            break;

          case '-':
            handleMinusNumbers();
            break;

          case '/':
            handleDivisionNumbers();
            break;

          case 'x':
            handleMultiplyNumbers();
            break;

          default: 
            break;
        }
    }

  }

  return (
    <><>
    </>
    <Text content="Calculadora desenvolvida por Heloisa Zen"></Text>
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="C" onClick={handleOnClear} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="/" onClick={handleDivisionNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="x" onClick={handleMultiplyNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="-" onClick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="." onClick={() => handleAddNumber('.')} />
          <Button label="=" onClick={handleEquals} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
      </Content>
    </Container>
    <Text content="Espero que tenha gostado (:"></Text>
    </>
  );
}

export default App;