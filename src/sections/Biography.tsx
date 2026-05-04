import Container from '../components/ui/Container'
import SectionTitle from '../components/ui/SectionTitle'

const Biography = () => {
  return (
    <section id="biography" className="py-24">
      <Container>
        <SectionTitle>BIOGRAPHY</SectionTitle>
        <p className="text-base leading-relaxed text-neutral-700">
          ここにアーティストのプロフィール / 略歴を記載します。
        </p>
      </Container>
    </section>
  )
}

export default Biography
