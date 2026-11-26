import './index.css'

function ShimmerCard(){
    return (
        <div className="Main-Div">
            {
                Array.from({length:10}).map((el,i)=>{
                    return (
                        <div className="ShimmerContainer" key={i}>
                            <div className="shimmer"></div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ShimmerCard;