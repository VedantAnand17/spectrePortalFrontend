import React from 'react'

function Question() {
    return (
        <div className='h-screen w-screen'>
            <img src="https://cdn.discordapp.com/attachments/1325497393680093194/1331299022178357331/Frame_46_2.png?ex=6791c515&is=67907395&hm=9821bfaa47931b37e39d560fa9387addc2f1663f6fa009c2af1e7b10f472d2d8&" alt="" className="absolute h-screen w-screen object-fill" />
            <div className="absolute h-screen w-screen flex items-center justify-center flex-col">
                <p className="text-white text-base max-2xl:text-sm max-xl:max-w-[33rem] xl:text-lg max-w-[42rem] break-words pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolores, cumque rem beatae minima totam debitis provident officiis quia omnis aperiam rerum? Asperiores libero dolorem aut dicta aspernatur nam aliquam minima labore nemo nulla architecto culpa fuga blanditiis maxime fugiat delectus fugit quae, corrupti facere. Atque eos laboriosam eum, repellat vitae placeat repudiandae unde odio corporis corrupti magni, fugiat expedita? Vel debitis odit obcaecati, est laborum quo laudantium veritatis? Nemo hic minus obcaecati quibusdam incidunt id</p>
                <input type="text" className='mt-2 bg-blue-800 rounded-lg p-1 text-center' placeholder='ANSWER' />
                <button className="bg-red-500 text-white absolute bottom-[4rem] flex justify-center items-center p-2 px-6 rounded-xl">SUBMIT</button>
            </div>
        </div>
    )
}

export default Question