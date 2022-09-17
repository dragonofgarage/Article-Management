import Bar from "@/components/Bar"

const Home = () => {
  return(
    <div>
      <Bar
        style={{ width: '500px', height: '400px' }}
        xData={['vue', 'angular', 'react']}
        yData={[50, 60, 70]}
        title='Framework Satisfaction State'
       />
      <Bar
        style={{ width: '500px', height: '400px' }}
        xData={['vue', 'angular', 'react']}
        yData={[50, 60, 70]}
        title='Framework Using State'
       />
    </div>
  )
}

export default Home