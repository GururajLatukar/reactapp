import { FormEvent, useState } from "react"
import useMultiStepWizard from "../hooks/useMultiStepWizard"
import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"
import Step4 from "./Step4"
import Step5 from "./Step5"

type FormData = {
    step1data: string
    step2data: string
    step3data: string
    step4data: string
    step5data: string
}

const INITIAL_DATA: FormData = {
    step1data: "1",
    step2data: "2",
    step3data: "3",
    step4data: "4",
    step5data: "5",
}

const Dashboard = () => {
    const [data, setData] = useState(INITIAL_DATA)
    function updateFields(fields: Partial<FormData>) {
        setData(prev => {
            return { ...prev, ...fields }
        })
    }
    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
        useMultiStepWizard([
            <Step1 {...data} updateFields={updateFields} />,
            <Step2 {...data} updateFields={updateFields} />,
            <Step3 {...data} updateFields={updateFields} />,
            <Step4 {...data} updateFields={updateFields} />,
            <Step5 {...data} updateFields={updateFields} />,
        ])

    function onSubmit(e: FormEvent) {
        e.preventDefault()
        if (!isLastStep) return next()
        alert("Successful Account Creation")
    }

    return (
        <div>
            <form onSubmit={onSubmit} style={{ maxWidth: '320px'}}>
                <div>
                    {currentStepIndex + 1} / {steps.length}
                </div>
                {step}
                <div style={{ display: 'flex', justifyContent: "space-between"}}>
                    {!isFirstStep && (
                        <button type="button" onClick={back}>
                            Back
                        </button>
                    )}
                    <button style={{ marginLeft: !isFirstStep ? 'none' : 'auto' }} type="submit">{isLastStep ? "Finish" : "Next"}</button>
                </div>
            </form>
        </div>
    )
}

export default Dashboard;