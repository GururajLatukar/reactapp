type Step2Data = {
  step2data: string
}

type Step2Props = Step2Data & {
  updateFields: (fields: Partial<Step2Data>) => void
}

function Step2(props: Step2Props) {
  return (
    <>
      <div>Step2</div>
      <p>Data: {props.step2data}</p>
      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '320px', minHeight: '300px' }}>
        <label>1</label>
        <input type="text" />
        <label>2</label>
        <input type="text" />
        <label>3</label>
        <input type="text" />
      </div>
    </>
  )
}


export default Step2;