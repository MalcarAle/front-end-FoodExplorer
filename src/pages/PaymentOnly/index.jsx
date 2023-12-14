import { FiChevronLeft } from "react-icons/fi"

import { LinkText } from "../../components/LinkText"
import { ItemPayment } from "../../components/ItemPayment"

import { Container, Content } from "./style"

export function PaymentOnly() {
  return (
    <Container>
      <div className="wrapper">
        <LinkText name="voltar" icon={FiChevronLeft} to={-1} />
      </div>

      <main>
        <Content>
          <section id="payment">
            <h1>Pagamento</h1>
            <ItemPayment />
          </section>
        </Content>
      </main>
    </Container>
  )
}
