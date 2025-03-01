"use client";
import { useState } from "react";
// Se quiser usar o componente Image do Next:
import Image from "next/image";

export default function Home() {
  // Aba ativa (MEI/empresas)
  const [activeTab, setActiveTab] = useState("empresas");

  // Formulário de contato
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  // Simulador de serviço
  const [tipoEmpresa, setTipoEmpresa] = useState("MEI");
  const [faturamento, setFaturamento] = useState("Até R$ 10.000");
  const [funcionarios, setFuncionarios] = useState("Sem funcionários");
  const [setor, setSetor] = useState("Comércio");

  // Atualiza campos do formulário de contato
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Redireciona para WhatsApp com dados do formulário de contato
  const handleSubmit = (e) => {
    e.preventDefault();

    const { nome, email, telefone, mensagem } = formData;
    const texto = encodeURIComponent(
      `Olá, gostaria de falar com a ConTouch.\n\n` +
      `Nome: ${nome}\n` +
      `Email: ${email}\n` +
      `Telefone: ${telefone}\n\n` +
      `Mensagem: ${mensagem}`
    );
    window.open(
      `https://api.whatsapp.com/send?phone=5561992213786&text=${texto}`,
      "_blank"
    );

    // Limpa o formulário
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      mensagem: "",
    });
  };

  // Dados dos Serviços (sem alterações funcionais)
  const servicos = [
    {
      titulo: "Contabilidade Digital",
      descricao:
        "Serviços contábeis 100% online e personalizados para o seu negócio.",
      icon: "📊",
    },
    {
      titulo: "Gestão Fiscal",
      descricao:
        "Acompanhamento e planejamento tributário para otimizar sua carga fiscal.",
      icon: "📝",
    },
    {
      titulo: "Departamento Pessoal",
      descricao:
        "Gestão completa da folha de pagamento e obrigações trabalhistas.",
      icon: "👥",
    },
    {
      titulo: "Consultoria Empresarial",
      descricao:
        "Orientação estratégica para tomada de decisões financeiras e contábeis.",
      icon: "💼",
    },
  ];

  // Dados dos Planos
  const planos = [
    {
      titulo: "MEI",
      preco: "149",
      caracteristicas: [
        "Contabilidade Digital",
        "Emissão de NF",
        "Declaração Anual",
        "Chat de Suporte",
      ],
    },
    {
      titulo: "Empresas",
      preco: "349",
      destaque: true,
      caracteristicas: [
        "Contabilidade Completa",
        "Emissão de NF",
        "Gestão Fiscal",
        "Departamento Pessoal",
        "Suporte Prioritário",
      ],
    },
    {
      titulo: "Empresas Plus",
      preco: "549",
      caracteristicas: [
        "Todas as características do plano Empresas",
        "Consultoria Mensal",
        "Planejamento Tributário",
        "Gestão Financeira",
        "Suporte Exclusivo",
      ],
    },
  ];

  // Depoimentos (sem alterações funcionais)
  const depoimentos = [
    {
      nome: "Carlos Silva",
      empresa: "Agência Digital",
      texto:
        "Desde que contratei a ConTouch, tenho mais tempo para focar no meu negócio. A contabilidade simplificada fez toda a diferença!",
      nota: 5,
    },
    {
      nome: "Ana Paula",
      empresa: "Consultoria",
      texto:
        "Excelente atendimento e rapidez na resolução de problemas. Recomendo para todos os empreendedores.",
      nota: 5,
    },
    {
      nome: "Marcos Oliveira",
      empresa: "E-commerce",
      texto:
        "A facilidade de acessar todos os meus documentos fiscais em um só lugar é incrível. Serviço de alta qualidade!",
      nota: 4,
    },
  ];

  // Encaminha para WhatsApp com as informações do simulador
  const handleSimular = () => {
    const texto = encodeURIComponent(
      `Olá, gostaria de simular o serviço com a ConTouch:\n\n` +
      `Tipo de Empresa: ${tipoEmpresa}\n` +
      `Faturamento Mensal: ${faturamento}\n` +
      `Número de Funcionários: ${funcionarios}\n` +
      `Setor de Atuação: ${setor}`
    );
    window.open(
      `https://api.whatsapp.com/send?phone=5561992213786&text=${texto}`,
      "_blank"
    );
  };

  // Encaminha para WhatsApp ao "Contratar Agora", incluindo nome/preço do plano
  const handleContratar = (plano) => {
    const texto = encodeURIComponent(
      `Olá, gostaria de contratar o plano "${plano.titulo}" ` +
      `por R$${plano.preco}/mês.`
    );
    window.open(
      `https://api.whatsapp.com/send?phone=5561992213786&text=${texto}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#2F1A45] text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="mr-2">
              <div className="relative w-10 h-10">
                <div className="absolute w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-6 h-6 bg-[#F7931E] rounded-full"></div>
                </div>
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#F7931E] rounded-sm transform rotate-45"></div>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold">
                <span className="text-white">Con</span>
                <span className="text-[#F7931E]">Touch</span>
              </h1>
              <p className="text-xs">SUA CONTABILIDADE À UM TOQUE</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#servicos" className="hover:text-[#F7931E] transition-colors">
              Serviços
            </a>
            <a href="#planos" className="hover:text-[#F7931E] transition-colors">
              Planos
            </a>
            <a
              href="#simulador"
              className="hover:text-[#F7931E] transition-colors"
            >
              Simule Agora
            </a>
            <a
              href="#depoimentos"
              className="hover:text-[#F7931E] transition-colors"
            >
              Depoimentos
            </a>
            <a href="#contato" className="hover:text-[#F7931E] transition-colors">
              Contato
            </a>
          </nav>
          <button className="md:hidden text-2xl">☰</button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-[#2F1A45] text-white py-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F7931E] rounded-bl-full opacity-20"></div>
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Contabilidade Digital{" "}
                <span className="text-[#F7931E]">Simplificada</span>
              </h2>
              <p className="text-lg mb-6">
                Sua empresa em dia com a contabilidade sem complicações. Acompanhe
                tudo pelo seu celular ou computador.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#simulador"
                  className="bg-[#F7931E] text-white py-3 px-6 rounded-md font-medium text-center hover:bg-[#e07e0a] transition-colors"
                >
                  Simular Agora
                </a>
                <a
                  href="#planos"
                  className="border border-white text-white py-3 px-6 rounded-md font-medium text-center hover:bg-white hover:text-[#2F1A45] transition-colors"
                >
                  Ver Planos
                </a>
              </div>
            </div>
            {/* Botão "Toque Aqui" direcionando ao WhatsApp com mensagem fixa */}
            <div className="md:w-1/2 flex justify-center">
              <a
                href="https://api.whatsapp.com/send?phone=5561992213786&text=Gostaria%20de%20facilitar%20a%20minha%20contabilidade%20com%20a%20ConTouch."
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-[#F7931E] rounded-full opacity-10 animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-[#F7931E] rounded-full flex items-center justify-center text-white cursor-pointer">
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl mb-2">👆</div>
                      <div className="text-xl md:text-2xl font-bold">
                        Toque Aqui
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2 text-black">Nossos Serviços</h2>
              <p className="text-black">Soluções completas para o seu negócio</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {servicos.map((servico, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105"
                >
                  <div className="text-4xl mb-4 text-[#F7931E]">
                    {servico.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-black">
                    {servico.titulo}
                  </h3>
                  <p className="text-black">{servico.descricao}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h2 className="text-3xl font-bold mb-6 text-black">
                  Organização e Agilidade à um toque
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="text-[#F7931E] mr-2">✓</div>
                    <div>
                      <h3 className="font-semibold text-black">Agilidade</h3>
                      <p className="text-black">
                        Processe suas informações contábeis rapidamente, sem
                        burocracia.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-[#F7931E] mr-2">✓</div>
                    <div>
                      <h3 className="font-semibold text-black">Segurança</h3>
                      <p className="text-black">
                        Seus dados protegidos com a mais alta tecnologia de
                        criptografia.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-[#F7931E] mr-2">✓</div>
                    <div>
                      <h3 className="font-semibold text-black">Economia</h3>
                      <p className="text-black">
                        Reduza custos operacionais com nossa contabilidade digital.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-[#F7931E] mr-2">✓</div>
                    <div>
                      <h3 className="font-semibold text-black">
                        Atendimento Personalizado
                      </h3>
                      <p className="text-black">
                        Suporte especializado para atender às necessidades
                        específicas do seu negócio.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="bg-[#F7931E] p-1 rounded-lg transform rotate-3">
                  <div className="bg-white p-1 rounded-lg transform -rotate-6">
                    <div className="relative w-full h-64 md:h-80 bg-[#2F1A45] rounded-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center text-white">
                        <div className="text-center p-6">
                          <div className="text-6xl mb-4">📱</div>
                          <h3 className="text-xl font-bold mb-2">App ConTouch</h3>
                          <p>Sua contabilidade na palma da mão</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alerta IR 2023 */}
        <section className="py-10 bg-[#F7931E]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-[#2F1A45] mb-2">
                  Cuidado com o Leão
                </h2>
                <p className="text-white text-lg font-semibold">
                  IR 2023 - NÃO DEIXE PARA ÚLTIMA HORA
                </p>
              </div>
              <div>
                <a
                  href="#contato"
                  className="inline-block bg-[#2F1A45] text-white py-3 px-6 rounded-md font-medium hover:bg-opacity-90 transition-colors"
                >
                  Fale com um Especialista
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Planos */}
        <section id="planos" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2 text-black">Planos ConTouch</h2>
              <p className="text-black">
                Escolha o plano ideal para o seu negócio
              </p>
            </div>
            <div className="flex justify-center mb-8">
              <div className="inline-flex bg-gray-200 rounded-full p-1">
                <button
                  className={`py-2 px-6 rounded-full ${
                    activeTab === "mei"
                      ? "bg-[#F7931E] text-white"
                      : "text-black"
                  }`}
                  onClick={() => setActiveTab("mei")}
                >
                  MEI
                </button>
                <button
                  className={`py-2 px-6 rounded-full ${
                    activeTab === "empresas"
                      ? "bg-[#F7931E] text-white"
                      : "text-black"
                  }`}
                  onClick={() => setActiveTab("empresas")}
                >
                  Empresas
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {planos.map((plano, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg overflow-hidden shadow-md transition-transform ${
                    plano.destaque
                      ? "transform scale-105 border-2 border-[#F7931E]"
                      : ""
                  }`}
                >
                  <div
                    className={`py-6 px-6 ${
                      plano.destaque
                        ? "bg-[#F7931E] text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    <h3
                      className={`text-xl font-bold mb-1 ${
                        plano.destaque ? "text-white" : "text-black"
                      }`}
                    >
                      {plano.titulo}
                    </h3>
                    <p
                      className={`text-sm ${
                        plano.destaque ? "text-white" : "text-black"
                      }`}
                    >
                      {plano.titulo === "MEI"
                        ? "Ideal para Microempreendedores Individuais"
                        : plano.titulo === "Empresas"
                        ? "Ideal para Pequenas Empresas"
                        : "Ideal para Empresas em Crescimento"}
                    </p>
                  </div>
                  <div className="p-6">
                    <div className="mb-6 text-center">
                      <span className="text-sm text-black">A partir de</span>
                      <div className="text-4xl font-bold text-black">
                        <span className="text-sm align-top">R$</span>
                        {plano.preco}
                        <span className="text-sm">/mês</span>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plano.caracteristicas.map((caracteristica, idx) => (
                        <li key={idx} className="flex items-start text-black">
                          <div className="text-[#F7931E] mr-2">✓</div>
                          <span>{caracteristica}</span>
                        </li>
                      ))}
                    </ul>
                    {/* Botão "Contratar Agora" chama handleContratar */}
                    <button
                      onClick={() => handleContratar(plano)}
                      className={`block w-full text-center py-3 px-6 rounded-md font-medium ${
                        plano.destaque
                          ? "bg-[#F7931E] text-white hover:bg-[#e07e0a]"
                          : "border border-[#F7931E] text-[#F7931E] hover:bg-[#F7931E] hover:text-white"
                      } transition-colors`}
                    >
                      Contratar Agora
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Simulador */}
        <section id="simulador" className="py-16 bg-[#2F1A45] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Simule seu Serviço</h2>
              <p className="text-black bg-white inline-block px-2 py-1 rounded-md">
                Descubra quanto custaria a contabilidade para o seu negócio
              </p>
            </div>
            <div className="max-w-3xl mx-auto bg-white text-black rounded-lg p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Tipo de Empresa
                  </label>
                  <select
                    value={tipoEmpresa}
                    onChange={(e) => setTipoEmpresa(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7931E]"
                  >
                    <option>MEI</option>
                    <option>Simples Nacional</option>
                    <option>Lucro Presumido</option>
                    <option>Lucro Real</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Faturamento Mensal
                  </label>
                  <select
                    value={faturamento}
                    onChange={(e) => setFaturamento(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7931E]"
                  >
                    <option>Até R$ 10.000</option>
                    <option>De R$ 10.001 a R$ 30.000</option>
                    <option>De R$ 30.001 a R$ 100.000</option>
                    <option>Acima de R$ 100.000</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Número de Funcionários
                  </label>
                  <select
                    value={funcionarios}
                    onChange={(e) => setFuncionarios(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7931E]"
                  >
                    <option>Sem funcionários</option>
                    <option>1 a 5 funcionários</option>
                    <option>6 a 10 funcionários</option>
                    <option>Mais de 10 funcionários</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Setor de Atuação
                  </label>
                  <select
                    value={setor}
                    onChange={(e) => setSetor(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7931E]"
                  >
                    <option>Comércio</option>
                    <option>Serviços</option>
                    <option>Indústria</option>
                    <option>Outros</option>
                  </select>
                </div>
              </div>
              {/* Botão "Simular Agora" chama handleSimular */}
              <button
                onClick={handleSimular}
                className="w-full bg-[#F7931E] text-white py-3 rounded-md font-medium hover:bg-[#e07e0a] transition-colors"
              >
                Simular Agora
              </button>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2 text-black">
                O que dizem nossos clientes
              </h2>
              <p className="text-black">
                Confira a experiência de quem já conta com a ConTouch
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {depoimentos.map((depoimento, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < depoimento.nota ? "text-[#F7931E]" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-black mb-4 italic">
                    "{depoimento.texto}"
                  </p>
                  <div>
                    <p className="font-bold text-black">{depoimento.nome}</p>
                    <p className="text-black text-sm">{depoimento.empresa}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 bg-[#2F1A45] text-white p-8">
                  <h2 className="text-2xl font-bold mb-6">Entre em Contato</h2>
                  <p className="mb-6">
                    Estamos prontos para atender às suas necessidades contábeis. Preencha
                    o formulário e entraremos em contato o mais breve possível.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="text-[#F7931E] mr-3 mt-1">📞</div>
                      <div>
                        <p className="font-semibold">Telefone</p>
                        <p>(61) 99221-3786</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-[#F7931E] mr-3 mt-1">📧</div>
                      <div>
                        <p className="font-semibold">Email</p>
                        <p>contato@contouch.com.br</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  {/* Ao enviar formulário, chama handleSubmit */}
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label
                        className="block text-sm font-medium text-black mb-2"
                        htmlFor="nome"
                      >
                        Nome
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7931E]"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-sm font-medium text-black mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7931E]"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-sm font-medium text-black mb-2"
                        htmlFor="telefone"
                      >
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7931E]"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-sm font-medium text-black mb-2"
                        htmlFor="mensagem"
                      >
                        Mensagem
                      </label>
                      <textarea
                        id="mensagem"
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7931E]"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#F7931E] text-white py-3 rounded-md font-medium hover:bg-[#e07e0a] transition-colors"
                    >
                      Enviar Mensagem
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#2F1A45] text-white py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Coluna 1 - Identidade */}
            <div>
              <div className="flex items-center mb-4">
                <div className="mr-2">
                  <div className="relative w-10 h-10">
                    <div className="absolute w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-6 h-6 bg-[#F7931E] rounded-full"></div>
                    </div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#F7931E] rounded-sm transform rotate-45"></div>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-bold">
                    <span className="text-white">Con</span>
                    <span className="text-[#F7931E]">Touch</span>
                  </h2>
                  <p className="text-xs">SUA CONTABILIDADE À UM TOQUE</p>
                </div>
              </div>
              <p className="text-black mb-4 bg-white inline-block px-2 py-1 rounded-md">
                Contabilidade digital para empreendedores e empresas que buscam
                simplicidade e eficiência.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-[#F7931E]">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34V22C18.34 21.13 22 17 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-[#F7931E]">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm4.75-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-[#F7931E]">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.38 8.59 8.59 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.3 3.9 12.15 12.15 0 0 1-8.82-4.47 4.28 4.28 0 0 0 1.32 5.72 4.27 4.27 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.2 4.3 4.3 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.59 8.59 0 0 1-5.32 1.84A8.74 8.74 0 0 1 2 18.57a12.14 12.14 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.38-.02-.57A8.72 8.72 0 0 0 22.46 6z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Coluna 2 - Navegação */}
            <div>
              <h3 className="font-bold mb-4">Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#servicos" className="hover:text-[#F7931E]">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#planos" className="hover:text-[#F7931E]">
                    Planos
                  </a>
                </li>
                <li>
                  <a href="#simulador" className="hover:text-[#F7931E]">
                    Simule Agora
                  </a>
                </li>
                <li>
                  <a href="#depoimentos" className="hover:text-[#F7931E]">
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a href="#contato" className="hover:text-[#F7931E]">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 3 - Sobre */}
            <div>
              <h3 className="font-bold mb-4">Sobre</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-[#F7931E]">
                    Quem Somos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#F7931E]">
                    Missão & Visão
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#F7931E]">
                    Carreiras
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#F7931E]">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 4 - Contato */}
            <div>
              <h3 className="font-bold mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2 3h20v18H2z" fill="none" />
                    <path d="M21 3H3v18h18V3zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                  </svg>
                  <span>(61) 99221-3786</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2 4v16h20V4H2zm18 2v.01L12 13 4 6.01V6h16zM4 18V8l8 6 8-6v10H4z" />
                  </svg>
                  <span>contato@contouch.com.br</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-400 mt-8">
            &copy; {new Date().getFullYear()} ConTouch. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* Ícone flutuante do WhatsApp no canto inferior direito */}
      <div className="fixed bottom-4 right-4 z-50">
        <a
          href="https://api.whatsapp.com/send?phone=5561992213786&text=Gostaria%20de%20facilitar%20a%20minha%20contabilidade%20com%20a%20ConTouch."
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/wpp-ico.png" 
            alt="WhatsApp"
            width={100}
            height={100}
            className="hover:scale-105 transition-transform cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
}
