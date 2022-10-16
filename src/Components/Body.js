import React from 'react'

function Body({data}) {
    

  return (
    <>
    { data.map((obj)=>{
        return(
        <div className="box-container">
        
    <div className="body">
    <div className="top">
    <h3>Id : {obj.id}</h3> 
    <h4>follow <span>+</span></h4>
    </div>
    <p className='paragraph'>
        {obj.body}
    </p>
   
    
    </div>
    <div className="tags">
        <ul>
            {obj.tags.map((tag)=>
                      <li>{tag}</li>
                      )}
            
        </ul>
    </div>
    <div className="reaction">
        <h4><i class="uil uil-thumbs-up"></i><span>{obj.reactions}</span></h4>
        <h4><i class="uil uil-eye"></i><span>{obj.userId}</span></h4>
    </div>
</div>
     ) })
    }
    </>
  )  
}

export default Body
