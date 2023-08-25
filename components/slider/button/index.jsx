'use client';

export default function Sliderbtn({value, text, setActiveSlide, setAnimationHandler, activeSlide}) {

  
  return (
    <div className= {
      activeSlide.value === value.value
      ?
      "line-clamp-1 rounded-md hover:bg-blue-600 trasnsiion-all duration-200 bg-blue-500 text-white w-[300px] h-[50px] px-2 flex justify-center items-center cursor-pointer"
      :
      "line-clamp-1 rounded-md hover:bg-blue-600 trasnsiion-all duration-200 bg-blue-400 text-white w-[300px] h-[50px] px-2 flex justify-center items-center cursor-pointer"
    } >

      <div className="line-clamp-1" 
      onClick={()=>{

        // in ro baray in gozashti ta har mogeh fargh dasht biad axe ro avaz bokoneh. 

        if(activeSlide.value !==value.value){

          setAnimationHandler(0);

          // moshkel in hast ke setInterval miad har bar anjam mishe yani mishe 3 bar ama setTimeout 1 bar anjam mishe. 
          
          setTimeout(()=>{
            setActiveSlide(value);
            setAnimationHandler(1)
          },800)
        }

      }}>
        
        {text}
      </div>
      
    </div>
  )
}
