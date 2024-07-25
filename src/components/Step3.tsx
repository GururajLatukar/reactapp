type Step3Data = {
  step3data: string
}

type Step3Props = Step3Data & {
  updateFields: (fields: Partial<Step3Data>) => void
}

function Step3(props: Step3Props) {
  return (
    <>
      <div>Step3</div>
      <p>Data: {props.step3data}</p>
      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '320px', minHeight: '300px' }}>
        <label>1</label>
        <input type="text" />
        <label>2</label>
        <input type="text" />
      </div>
    </>
  )
}


export default Step3;