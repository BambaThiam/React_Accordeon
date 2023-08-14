import SingleQuestion from './SingleQuestion'

const Questions = ({ questions }) => {
  return (
    <section className="container">
      {/* Title à supprimer si besoin */}
      <h1 className="titleBamba">"BAMBA - React Accordion component"</h1>
      <h1>Questions</h1>
      {questions.map((question) => {
        return <SingleQuestion key={question.id} {...question} />
      })}
    </section>
  )
}

export default Questions
