import React from 'react';
import './Ninjas.css'

const Ninjas = ({ponchos, deleteMe}) => {
        const ninjaList = ponchos.map(ninja => {
            if (ninja.age > 20){
            return (
            <div className="ninja" key={ninja.id}>
                <div>Name: { ninja.name }</div>
                <div>Age: { ninja.age }</div>
                <div>Brace: { ninja.brace }</div>
                <button onClick={() => {deleteMe(ninja.id)}}>Delete Ninja</button>
            </div>
            )
        } else {
            return null
        }
        })
        

        return(
         // ninja-list is not the same as ninjaList
         <div className="ninja-list">
         { ninjaList }
         </div>
        )
    }
            //  ponchos.map(ninja => {
            //     return ninja.age > 20 ? (<div className="ninja" key={ninja.id}>
            //      <div>Name: { ninja.name }</div>
            //          <div>Age: { ninja.age }</div>
            //          <div>Brace: { ninja.brace }</div>
            //      </div>
            //  ) : null;
            // })
    


    export default Ninjas


    //below this line is the old notse from the react and redux videos from The Net Ninja #14 and below.

// props = properties, props are what's listed in this <Ninjas name="Eddy" age="12"  brace="Pink"/> tag

// ninjaList is the name of the new array
        //ninja is the className of the div below. For each ninja inside the original array, it's returning a bit of template for that ninja when it's getting mapped to the new array. One set of JSX for each individual ninja.
        // ponchos is what the map method goes inside of to map through the ninjaBoyz array