// Static content — no props needed here.
function StepsSection() {

  // We store the three step cards as an array of objects.
  // Then we "map" over them to render each one — this avoids repeating
  // the same JSX structure three times by hand.
  const steps = [
    {
      number: '01',
      title: 'Connect what you already use',
      body: 'Google Workspace, Microsoft 365, your firewall, your website. A few clicks — no new software for your team to learn.',
    },
    {
      number: '02',
      title: 'We notice what changed',
      body: 'Unusual logins, impossible travel, risky new permissions. The patterns a person would miss in a sea of normal activity.',
    },
    {
      number: '03',
      title: 'You get a plan, not panic',
      body: 'A short briefing in plain words: what happened, why it matters, and the one or two things worth doing this week.',
    },
  ]

  return (
    <section className="steps" id="how">

      <div className="steps__header">
        <h2 className="steps__title">Three quiet steps, every week</h2>
        <span className="steps__flow">CONNECT → DETECT → ADVISE</span>
      </div>

      <div className="steps__grid">
        {/* .map() loops over the array and returns a new array of JSX elements.
            "key" is required by React so it can track each item efficiently. */}
        {steps.map((step) => (
          <div key={step.number} className="steps__card">
            <span className="steps__number">{step.number}</span>
            <h3 className="steps__card-title">{step.title}</h3>
            <p className="steps__card-body">{step.body}</p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default StepsSection
