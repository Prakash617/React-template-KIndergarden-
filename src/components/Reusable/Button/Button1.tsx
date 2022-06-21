import React from 'react'

type Props = {
    Ibg:string
    Fbg:string
    IborderC:string
    FborderC:string
    ItextC:string
    FtextC:string
    text:string

}

const Button1 = (props: Props) => {
    const {Ibg, Fbg ,IborderC , FborderC, ItextC, FtextC, text} = props
    
    return (
        
            <button className={`border-2 p-2 ${Ibg} ${IborderC} inline-block ${ItextC} text-center ${Fbg}  hover:${FborderC} ease-in duration-300 hover:${FtextC} mt-[3rem]`}>
                {text}

            </button>
       
    )
}

export default Button1