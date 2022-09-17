export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Meet the Team</h2>
          <p>
            We are a group of Harvard co-founders excited to change the way you schedule.
          </p>
        </div>
        <div id='row' tyle = {{"display" : "flex", "justify-content" : "center"}} >
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} >
                  <div className='thumbnail'>
                    {' '}
                    <img src={d.img} alt='...' className='team-img' />
                    <div className='caption'>
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
