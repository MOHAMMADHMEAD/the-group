import GaugeComponent from 'react-gauge-component'

const GugeChart = () => {
    return (
        <GaugeComponent
            value={50}
            type="semicircle"
            width={50} // Set the width of the gauge
            height={50} // Set the height of the gauge
            arc={{
                colorArray: ['#5BE12C','#EA4228'],
                width: 0.1,
            }}

        />
    )
}

export default GugeChart