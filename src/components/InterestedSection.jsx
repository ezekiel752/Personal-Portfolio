const InterestedSection = () => {
   const propDetails = [
        {
            heading: '08',
            title: 'years experience'
        },
        {
            heading: '80+',
            title: 'projects shipped'
        },
        {
            heading: '100%',
            title: 'client satisfaction'
        },
        {
            heading: '24/7',
            title: 'support availability'
        },
    ]

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {propDetails.map((detail, index) => (
            <div key={index}>
                <h2>{detail.heading}</h2>
                <p>{detail.title}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default InterestedSection
