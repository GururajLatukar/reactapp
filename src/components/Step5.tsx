type Step5Data = {
  step5data: string
}

type Step5Props = Step5Data & {
  updateFields: (fields: Partial<Step5Data>) => void
}

function Step5(props: Step5Props) {
  return (
    <>
      <div>Step5</div>
      <p>Data: {props.step5data}</p>
      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '320px', minHeight: '300px' }}>
        <label>1</label>
        <input type="text" />
        <label>2</label>
        <textarea></textarea>
      </div>
    </>
  )
}


export default Step5;