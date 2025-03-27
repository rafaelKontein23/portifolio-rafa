import 'react'
import iphone_image from '/iphone_image.svg'
import seta_baixo from '/arrow-down.png'
import android from '/android.png'
import { useState } from 'react'
import freelancer from '/imagem_freelancer.png'
import androidProjeto from '/projeto_android.png'
import gitHub from "/git_hub.svg";
import send from "/send.svg"
import java from "/java.svg"
import kotlin from "/kotlin.svg"
import docker from "/docker.svg"
import spring from "/spring.svg"
import android_skill from "/android_skiill.svg"
import sqlite from "/sqlite.svg"
import git from "/git.png"
import curriculo from "/curriculo.png"
import link_din from "/in.png"
import ws from "/ws.png"
import axios from 'axios'
import toast from 'react-hot-toast';


enum projetosEnum {
    TODOS = "todos",
    BACKEND = "backend",
    ANDROID = "android",
}


interface Projeto {
    id: number;
    imagem: string;
    titulo: string;
    descricao: string;
    link: string;
    tipo: projetosEnum;
}




const listaProjetos: Projeto[] = [
    {
        id: 1,
        imagem: androidProjeto,
        titulo: "Projeto Sales Manager",
        descricao: "Aplicativo para vendedores, com recursos para gerenciar vendas, comissões e produtos. Usando XML, MVVM, Retrofit para comunicação com o backend, e SQLite para armazenamento local. Coroutines são utilizadas para otimizar operações assíncronas e melhorar a performance.",
        link: "https://github.com/rafaelKontein23/vendas",
        tipo: projetosEnum.ANDROID,
    },
    {
        id: 2,
        imagem: freelancer,
        titulo: "Projeto Freelancer",
        descricao: "O Freelancer Connect é uma plataforma para conectar freelancers a oportunidades de trabalho. Desenvolvido com Jetpack Compose e arquitetura MVVM para uma interface fluida e bem estruturada. O back-end é baseado em Spring Boot e PostgreSQL, garantindo desempenho e escalabilidade, enquanto Docker é utilizado para otimizar a distribuição e o gerenciamento do ambiente.",
        link: "https://github.com/seu-perfil/projeto-backend",
        tipo: projetosEnum.BACKEND,
    },
    {
        id: 3,
        imagem: androidProjeto,
        titulo: "Projeto Sales Manager Offline",
        descricao: "Aplicativo offline para vendedores gerenciarem vendas, comissões e produtos sem precisar de conexão com a internet. Usando XML, MVVM, SQLite para armazenamento local e Coroutines para operações assíncronas, garantindo desempenho e acessibilidade mesmo sem conexão. Retrofit foi implementado para futuras integrações online.",
        link: "https://github.com/rafaelKontein23/vendasOffiline",
        tipo: projetosEnum.ANDROID,
    }
]
const skills = [
    { name: "Spring Boot", img: spring, description: "Framework robusto para criar APIs REST eficientes com JPA e segurança integrada." },
    { name: "Docker", img: docker, description: "Containerização para deploy escalável e consistente de aplicações." },
    { name: "Kotlin", img: kotlin, description: "Linguagem moderna e concisa para desenvolvimento Android." },
    { name: "Java", img: java, description: "Experiência sólida no desenvolvimento back-end e Android." },
    { name: "android", img: android_skill, description: "Experiência sólida no desenvolvimento back-end e Android." },
    { name: "sqlite", img: sqlite, description: "Experiência sólida no desenvolvimento back-end e Android." },

];
const menu = [
    {
        nome: 'Home',
        link: '#home'
    },
    {
        nome: 'Sobre',
        link: '#sobre'
    },
    {
        nome: 'Habilidades',
        link: '#habilidades'
    },
    {
        nome: 'Projetos',
        link: '#projetos'
    },
    {
        nome: 'Contato',
        link: '#contato'
    },
]


function InicialHome() {
    const [selecionado, setSelecionado] = useState<projetosEnum>(projetosEnum.TODOS);
    const [assunto, setAssunto] = useState<string>('')
    const [descricao, setDescricao] = useState<string>('')

    function enviaEmail() {
        axios.post('https://rafaelkon.store/email/envia/email', {
            to: 'rafael.kontein23@gmail.com',
            from: 'rafael.ps0007@gmail.com',
            subject: assunto,
            text: descricao

        }).then(function (response) {
            var result = response.data
            if (result.valido) {
                toast.success(result.mensagem)
            } else {
                toast.error(result.mensagem)
            }


        }).catch(function (error) {
            console.log(error)
        });

    }
    return (
        <>
            <div id="home" className='relative flex flex-col justify-between items-center min-h-svh container mx-auto px-4 lg:px-0 lg:flex-row scroll-animate'>
                <div className='w-full lg:w-1/2 mt-32 lg:mt-0'>
                    <div className='flex h-10 items-center justify-start bg-[#272020] px-4 py-2 w-[175px] rounded-[100px] '>
                        <div className='rounded-[100px] bg-[#14DC49] h-[8px] w-[8px] mr-2'></div>
                        <span className='text-[16px] opacity-50 font-[500] tracking-[0.15px] font-jetbrains'>Java & Kotlin</span>
                    </div>

                    <div className='mt-[40px]'>
                        <h2 className='text-4xl font-jetbrains tracking-[0.15px] lg:text-[64px]'>
                            Desenvolvimento de
                            <span className='border-b-12 border-solid border-b-[#DC143C] mb-[-20px]'> Software</span> de Alta
                            Performance
                        </h2>
                        <p className='text-[24px] opacity-50 font-[500] tracking-[0.15px] mt-[40px]'>
                            Especializado em desenvolvimento Android e aplicações empresariais com Java e Kotlin
                        </p>
                    </div>
                    <div className='flex flex-wrap justify-start'>

                        <a href='#projetos' className='cursor-pointer flex bg-[#DC143C] w-full lg:w-[220px] h-[48px] p-2 mt-[40px] w-1/2  justify-center place-items-center'>
                            <span className='font-jetbrains '>Ver Projetos</span>
                            <img src={seta_baixo} />
                        </a>
                        <h1 className='text-8x1 place-content-center ml-12'>|</h1>


                        <a href="https://w.app/rafaelkon"
                            target="_blank"
                            rel="noopener noreferrer" className='cursor-pointer  place-content-center p-12 font-jetbrains'>Entre em contato</a>

                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col justify-between items-center self-stretch h-full">
                    <img className='lg:absolute top-[232px] right-0' src={iphone_image} alt="iPhone" />
                </div>
            </div>

            <section id="sobre" className=' container relative mx-auto flex flex-col lg:flex-row items-center justify-center lg:gap-40 sm:text-center lg:text-left px-6'>
                <div className='lg:flex-1'>
                    <h1 className='font-jetbrains mt-[100px] lg:mt-[200px] text-[36px] lg:-[48px] '>Desenvolvedor apaixonado por tecnologia</h1>

                    <p className='text-[16px] lg:text-[24px] opacity-50 max-w-5x1 font-[500] tracking-[0.15px] text-left mt-[40px] lg:text-sm/14 text-sm/8'>
                        Sou um desenvolvedor Android com 4 anos de experiência, criando aplicativos robustos e eficientes tanto em Java quanto Kotlin. Tenho domínio de MVC, MVP, MVVM e Clean Architecture, além de trabalhar com SQLite, Jetpack Compose e componentes de View (XML). Sei publicar e monitorar aplicativos na Play Store, além de integrar Google Maps, CameraX, push notifications e muito mais.

                        No back-end, atuo há 1 ano no desenvolvimento de APIs com Java e Spring Boot, utilizando JPA, Docker e AWS (S3, SES) para criar soluções escaláveis e de alto desempenho. Recentemente, também venho explorando React, incluindo o desenvolvimento deste próprio portfólio.

                        Estou sempre buscando desafios que me ajudem a evoluir e a entregar soluções inovadoras e de qualidade!  🚀        
                            
                 
                 </p>
                </div>

                <div className="hidden lg:block w-[385px]">
                    <img className='absolute bottom-0 right-0' src={android} />
                </div>

            </section>

            <section id="habilidades" className='container relative mx-auto flex flex-col lg:flex-row items-center justify-center lg:gap-40 sm:text-center lg:text-left px-6 '>
                <div className='lg:flex-1'>
                    <h1 className='font-jetbrains mt-[100px] lg:mt-[200px] text-[36px] lg:-[48px] '>Habilidades</h1>

                    <p className='text-[16px] lg:text-[24px] opacity-50 max-w-5x1 font-[500] tracking-[0.15px] text-left mt-[40px] lg:text-sm/8 text-sm/8'>
                        Sou um desenvolvedor Android e Back-end com experiência em Kotlin, Java, MVVM, Jetpack Compose, Retrofit e SQLite para Android, e Spring Boot, JPA, Docker, PostgreSQL e AWS (S3, SES) no back-end. Também desenvolvo aplicações em React. Sempre buscando aprimorar minhas habilidades e criar soluções escaláveis!</p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-[600px] mx-auto lg:mt-48">
                    {skills.map((skill, index) => (
                        <div key={index} className="relative group flex justify-center">
                            <img className="w-60 " src={skill.img} alt={skill.name} />

                            <div className="absolute bottom-[110%] bg-black text-white text-sm px-3 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-52 text-center">
                                <strong>{skill.name}</strong>
                                <p className="text-xs mt-1">{skill.description}</p>
                            </div>
                        </div>
                    ))}
                </div>


            </section>

            <section id="projetos" className='container mx-auto '>
                <h1 className='font-jetbrains mt-[100px] lg:mt-[200px] text-4xl lg:text-[48px] px-6 lg:px-0'>Projetos desenvolvidos</h1>

                <div className='mt-3 flex flex-col lg:flex-row gap-[32px] px-6 lg:px-0 mt-6'>
                    <p
                        onClick={() => setSelecionado(projetosEnum.TODOS)}
                        className={`cursor-pointer border-[1px] px-6 py-3 w-[95px] 
                        ${selecionado === projetosEnum.TODOS ? "border-[#DC143C] text-[#DC143C]" : "border-[#F5EEED] text-[#F5EEED]"} 
                        hover:border-[#DC143C] hover:text-[#DC143C]`}
                    >
                        Todos
                    </p>
                    <p
                        onClick={() => setSelecionado(projetosEnum.BACKEND)}
                        className={`cursor-pointer border-[1px] px-6 py-3 w-[120px] 
                        ${selecionado === projetosEnum.BACKEND ? "border-[#DC143C] text-[#DC143C]" : "border-[#F5EEED] text-[#F5EEED]"} 
                        hover:border-[#DC143C] hover:text-[#DC143C]`}
                    > Back-end</p>
                    <p
                        onClick={() => setSelecionado(projetosEnum.ANDROID)}
                        className={`cursor-pointer border-[1px] px-6 py-3 w-[120px] 
                        ${selecionado === projetosEnum.ANDROID ? "border-[#DC143C] text-[#DC143C]" : "border-[#F5EEED] text-[#F5EEED]"} 
                        hover:border-[#DC143C] hover:text-[#DC143C]`}>
                        Andoid</p>





                </div>
                <div className='flex flex-col lg:grid lg:grid-cols-2 lg:gap-8 w-full'>
                    {selecionado === projetosEnum.TODOS &&
                        listaProjetos.map((item) => (
                            <div className="flex flex-col lg:flex-row items-top gap-x-4 mt-[88px] px-6 lg:px-0" key={item.id}>
                                <img className="border-[1px] border-amber-50 w-[320px] h-[340px]" src={item.imagem} alt={item.titulo} />
                                <div className="flex flex-col lg:justify-between h-full">
                                    <p className="text-lg font-bold lg:mt-0 mt-8">{item.titulo}</p>
                                    <p className="text-[16px] font-manrope opacity-50 max-w-5x1 font-[400] tracking-[0.15px] text-left lg:mt-[-24px] text-sm/8">{item.descricao}</p>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        <img className=" mt-12" src={gitHub} alt="GitHub" />
                                    </a>
                                </div>
                            </div>
                        ))
                    }

                    {selecionado === projetosEnum.BACKEND &&
                        listaProjetos
                            .filter((projeto) => projeto.tipo === projetosEnum.BACKEND)
                            .map((item) => (
                                <div className="flex flex-col lg:flex-row items-top gap-x-4 mt-[88px] px-6 lg:px-0" key={item.id}>
                                    <img className="border-[1px] border-amber-50 w-[320px] h-[340px]" src={item.imagem} alt={item.titulo} />
                                    <div className="flex flex-col lg:justify-between h-full">
                                        <p className="text-lg font-bold lg:mt-0 mt-8">{item.titulo}</p>
                                        <p className="text-[16px] font-manrope opacity-50 max-w-5x1 font-[400] tracking-[0.15px] text-left lg:mt-[-24px] text-sm/8">{item.descricao}</p>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                                            <img className="mt-auto" src={gitHub} alt="GitHub" />
                                        </a>
                                    </div>
                                </div>
                            ))
                    }

                    {selecionado === projetosEnum.ANDROID &&
                        listaProjetos.filter((projeto) => projeto.tipo === projetosEnum.ANDROID).map((item) => (
                            <div className="flex flex-col lg:flex-row items-top gap-x-4 mt-[88px] px-6 lg:px-0" key={item.id}>
                                <img className="border-[1px] border-amber-50 w-[320px] h-[340px]" src={item.imagem} alt={item.titulo} />
                                <div className="flex flex-col lg:justify-between h-full">
                                    <p className="text-lg font-bold lg:mt-0 mt-8">{item.titulo}</p>
                                    <p className="text-[16px] font-manrope opacity-50 max-w-5x1 font-[400] tracking-[0.15px] text-left lg:mt-[-24px] text-sm/8">{item.descricao}</p>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        <img className="mt-auto" src={gitHub} alt="GitHub" />
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>



            </section>

            <section id="contato" className='flex flex-col container mx-auto  px-6 mb-24'>
                <h1 className='font-jetbrains mt-[100px]  text-[36px] lg:-[48px]'>Fale Comigo</h1>

                <input type="text" className='h-16 w-full bg-[#4035343D] mx-auto mt-8 ps-3' placeholder='Nome'>
                </input>
                <input onChange={(event) => setAssunto(event.target.value)} type="text" className='h-16 w-full bg-[#4035343D] mx-auto mt-8 ps-3' placeholder='Assunto'>
                </input>
                <textarea
                    onChange={(event) => setDescricao(event.target.value)}
                    className="h-32 w-full bg-[#4035343D] text-white mx-auto mt-8 p-3 rounded-lg placeholder-gray-400 resize-none"
                    placeholder="Assunto">
                </textarea>

                <button onClick={() => enviaEmail()} className='cursor-pointer flex bg-[#DC143C] w-full lg:w-[220px] h-[48px] p-2 mt-[40px] lg:w-full  justify-center place-items-center'>
                    <span className='font-jetbrains '>Enviar</span>
                    <img src={send} />
                </button>
            </section>

            <section className="container px-6 mx-auto flex flex-col lg:grid lg:grid-cols-3 gap-8 items-center text-center lg:text-left">
                <div className="flex justify-center lg:justify-start">
                    <span className="font-jetbrains text-[24px]">
                        Rafael<strong className="text-[#DC143C] font-jetbrains">.</strong>Kon
                    </span>
                </div>

                <div className="hidden lg:flex justify-center">
                    <ul className="flex items-center gap-8">
                        {menu.map((m, i) => (
                            <li key={i}>
                                <a href={m.link} className="border-b-4 border-b-transparent flex items-center justify-center hover:border-[#DC143C] transition-all duration-300">
                                    {m.nome}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex justify-center lg:justify-end gap-6">
                    <a href="URL_GIT" target="_blank" rel="noopener noreferrer">
                        <img className="cursor-pointer w-8 h-8 hover:scale-110 transition-transform" src={git} alt="GitHub" />
                    </a>
                    <a href="URL_LINKEDIN" target="_blank" rel="noopener noreferrer">
                        <img className="cursor-pointer w-8 h-8 hover:scale-110 transition-transform" src={link_din} alt="LinkedIn" />
                    </a>
                    <a href="URL_WHATSAPP" target="_blank" rel="noopener noreferrer">
                        <img className="cursor-pointer w-8 h-8 hover:scale-110 transition-transform" src={ws} alt="WhatsApp" />
                    </a>
                    <a href="URL_CURRICULO" target="_blank" rel="noopener noreferrer">
                        <img className="cursor-pointer w-40 h-8 hover:scale-110 transition-transform" src={curriculo} alt="Currículo" />
                    </a>
                </div>
            </section>

            <section className='container px-6 mx-auto mt-11'>
                <hr></hr>
                <span className='font-manrope mt-4 text- [12px] mb-12'> © 2011 -2025 | Rafael Kon Tein Todos os direitos reservados</span>

            </section>

        </>
    )
}


export default InicialHome;