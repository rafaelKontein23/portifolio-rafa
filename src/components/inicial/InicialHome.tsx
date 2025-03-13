import 'react'
import iphone_image from '/iphone_image.svg'
import seta_baixo from '/arrow-down.png'

function InicialHome() {
    return (
        <div className='flex justify-between items-center px-16'>
            <div className='w-1/2 pt-[150px]'>
                <div className='flex h-10 items-center justify-start bg-[#272020] px-4 py-2 w-[175px] rounded-[100px]'>
                    <div className='rounded-[100px] bg-[#14DC49] h-[8px] w-[8px] mr-2'></div>
                    <span className='text-[16px] opacity-50 font-[500] tracking-[0.15px] font-jetbrains'>Java & Kotlin</span>
                </div>

                <div className='mt-[40px]'>
                    <h2 className='text-[64px] font-jetbrains tracking-[0.15px]'>
                        Desenvolvimento de
                        <span className='border-b-12 border-solid border-b-[#DC143C] mb-[-20px]'> Software</span> de Alta
                        Performance
                    </h2>
                    <p className='text-[24px] opacity-50 font-[500] tracking-[0.15px] mt-[40px]'>
                        Especializado em desenvolvimento Android e aplicações empresariais com Java e Kotlin
                    </p>
                </div>
                <div className='flex justify-start'>

                    <button className='flex bg-[#DC143C] w-[220px] h-[48px] p-2 mt-[40px] w-1/2  justify-center place-items-center'>
                        <span className='font-jetbrains '>Ver Projetos</span>
                        <img src={seta_baixo} />
                    </button>
                    <h1 className='text-8x1 place-content-center ml-12'>|</h1>

                    <span className='place-content-center p-12 font-jetbrains'>Entre em contato</span>

                </div>


                <section>
                    <h1>lore</h1>
                </section>

            </div>

            <div className="w-1/2 flex justify-center">
                <img src={iphone_image} alt="iPhone" />
            </div>
        </div>
    )
}


export default InicialHome;