import Container from '../components/ui/Container'
import SectionTitle from '../components/ui/SectionTitle'

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-neutral-50">
      <Container className="text-center">
        <SectionTitle>CONTACT</SectionTitle>
        <p className="text-base leading-relaxed text-neutral-700">
          お問い合わせはこちらから。
        </p>
      </Container>
    </section>
  )
}

export default Contact
