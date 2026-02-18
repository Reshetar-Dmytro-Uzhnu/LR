
const Detals=(props)=>{
   const {item} = props;
    return(
        <div>
            <img src={item.url} alt={item.name} style={{ width: "300px" }} />
            <div> {item.name}</div>
            <div>{item.titles[0]}</div>
            <div>{item.titles[1]}</div>
            <div> Рекорд: {item.record.wins}-
                {item.record.losses}-
                {item.record.draws}
            </div>
            <div>{item.description}</div>
        </div>

    )
}
export default Detals;