import logoImg from '../../assets/logo.svg';
import { Container, Wrapper } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Wrapper>
        <img src={ logoImg } alt="dt.money" />
        <button 
          type="button"
          onClick={ onOpenNewTransactionModal }
        >
          Nova transação
        </button>
      </Wrapper>
    </Container>
  )
} 