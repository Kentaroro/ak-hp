import Container from '../components/ui/Container'
import SectionTitle from '../components/ui/SectionTitle'

const Discography = () => {
  return (
    <section id="discography" className="py-24 bg-neutral-50">
      <Container>
        <SectionTitle>DISCOGRAPHY</SectionTitle>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* TODO: discography items */}
        </ul>
      </Container>
    </section>
  )
}

export default Discography
