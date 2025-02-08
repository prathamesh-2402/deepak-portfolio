import ParallaxWindow from '../../components/FilmMaking/ParallaxVideo'

const Commercial = () => {
    const serviceData = [{
        id: 1,
        title: "Hinduja 1",
        location: "New York, USA",
        date: "March 2023",
    },
    {
        id: 2,
        title: "Hinduja 2",
        location: "New York, USA",
        date: "March 2023",
    },
    {
        id: 3,
        title: "Hinduja 3",
        location: "New York, USA",
        date: "March 2023",
    },
    {
        id: 4,
        title: "Hinduja 4",
        location: "New York, USA",
        date: "March 2023",
    },
]
    return (
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='flex items-center h-[80vh]'>
                <h1 className='text-[90px] font-semibold '>Commercial</h1>
            </div>
            {
                serviceData.map((item, index) => (
                    <ParallaxWindow serviceData={item} key={index} />
                ))
            }
        </div>
    )
}

export default Commercial;