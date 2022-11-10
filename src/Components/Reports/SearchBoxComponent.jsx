const SearchBoxComponent = (props) =>{

    const setData = (data) => {
        props.func(data);
    }

    return(
        <div>
            <input type="text" placeholder="Search..." onChange={(event)=>setData(event.target.value)} style={{width:"300px", height:"30px"}}/>
        </div>
    );

};
export default SearchBoxComponent;