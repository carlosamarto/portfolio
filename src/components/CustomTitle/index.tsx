// CustomTitle
export default function CustomTitle ({ center, number, customTitle }: { center: boolean, number: string, customTitle: string }): JSX.Element {
  return (
    <>
      <h2 className={`custom-title ${center ? 'custom-title--center' : ''}`}>
        <span className="custom-title__number">{number}</span>
        {customTitle}
      </h2>
    </>
  )
}
