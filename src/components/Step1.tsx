type Step1Data = {
    step1data: string
}

type Step1Props = Step1Data & {
    updateFields: (fields: Partial<Step1Data>) => void
}

function Step1(props: Step1Props) {
    return (
        <>
            <div>Step1</div>
            <p>Data: {props.step1data}</p>
            <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '320px', minHeight: '300px' }}>
                <label>1</label>
                <input type="text" />
                <label>2</label>
                <input type="text" />
                <label>3</label>
                <input type="text" />
                <label>4</label>
                <textarea></textarea>
                <label>5</label>
                <textarea></textarea>
            </div>
        </>
    )
}


export default Step1;