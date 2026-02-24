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
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {propDetails.map((detail, index) => (
            <div
              key={index}
              className="text-center"
            >
              <h2 className="text-primary text-5xl font-black mb-2">
                {detail.heading}
              </h2>
              <p className="uppercase text-slate-500 text-xs font-bold tracking-widest">{detail.title}</p>
            </div>
          ))}
        </div>
      </div>
  );
}

export default InterestedSection
