type Step4Data = {
  step4data: string
}

type Step4Props = Step4Data & {
  updateFields: (fields: Partial<Step4Data>) => void
}

function Step4(props: Step4Props) {
  return (
    <>
      <div>Step4</div>
      <p>Data: {props.step4data}</p>
      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '320px', minHeight: '300px' }}>
        No content...
      </div>
    </>
  )
}

export default Step4;