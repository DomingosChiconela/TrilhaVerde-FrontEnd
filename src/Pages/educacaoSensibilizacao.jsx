import React from 'react';
import { useForm } from 'react-hook-form';
import ReactPlayer from 'react-player';

const EducacaoSensibilizacao = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data); 
  };

  return (
    <div className="container mx-auto p-6">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Educação e Sensibilização sobre Reciclagem</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <section className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-500">
          <h2 className="text-xl font-semibold gradient-text">Por que Reciclar?</h2>
          <p className="text-gray-600 mt-2 mb-4">Reciclar é crucial para a preservação do meio ambiente. Aqui estão alguns benefícios:</p>
          <ul className="list-disc ml-6 text-gray-600">
            <li><strong>Reduz o Volume de Resíduos:</strong> Diminui a quantidade de lixo nos aterros.</li>
            <li><strong>Conserva Recursos Naturais:</strong> Menos necessidade de extrair novos recursos.</li>
            <li><strong>Diminui a Poluição:</strong> Menos poluentes são lançados no ar e na água.</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-500">
          <h2 className="text-xl font-semibold gradient-text">Como Separar os Resíduos Corretamente</h2>
          <p className="text-gray-600 mt-2 mb-4">Seguir a separação correta ajuda a garantir que os materiais recicláveis sejam processados adequadamente.</p>
          <ul className="list-disc ml-6 text-gray-600">
            <li><strong>Plásticos:</strong> Coloque plásticos em um recipiente azul.</li>
            <li><strong>Papéis e Cartões:</strong> Coloque papéis e cartões em um recipiente verde.</li>
            <li><strong>Vidros:</strong> Coloque vidros em um recipiente transparente.</li>
            <li><strong>Orgânicos:</strong> Coloque resíduos orgânicos em um recipiente marrom.</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-500">
          <h2 className="text-xl font-semibold gradient-text">Recursos Adicionais</h2>
          <p className="text-gray-600 mt-2 mb-4">Abaixo estão alguns vídeos que ajudam a entender melhor a importância da reciclagem e como realizar a separação correta dos resíduos.</p>
        </section>
      </div>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Assista aos Nossos Vídeos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-500">
            <h2 className="text-xl font-semibold gradient-text mb-2">Como Separar Seus Resíduos</h2>
            <div className="relative w-full pb-[56.25%]">
              <ReactPlayer 
                url='https://www.youtube.com/watch?v=o1HzpLHYEmE' 
                className="absolute top-0 left-0 w-full h-full rounded-lg" 
                width="100%" 
                height="100%" 
              />
            </div>
            <p className="text-gray-600 mt-2">Aprenda a separar corretamente plásticos, papéis, vidros e orgânicos.</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-500">
            <h2 className="text-xl font-semibold gradient-text mb-2">Impactos da Reciclagem</h2>
            <div className="relative w-full pb-[56.25%]">
              <ReactPlayer 
                url='https://www.youtube.com/watch?v=y7XJIdyC0ZI' 
                className="absolute top-0 left-0 w-full h-full rounded-lg" 
                width="100%" 
                height="100%" 
              />
            </div>
            <p className="text-gray-600 mt-2">Veja como a reciclagem beneficia o meio ambiente e a economia.</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-500">
            <h2 className="text-xl font-semibold gradient-text mb-2">Dicas de Reciclagem</h2>
            <div className="relative w-full pb-[56.25%]">
              <ReactPlayer 
                url='https://www.youtube.com/watch?v=6pyslY3hb84' 
                className="absolute top-0 left-0 w-full h-full rounded-lg" 
                width="100%" 
                height="100%" 
              />
            </div>
            <p className="text-gray-600 mt-2">Obtenha dicas práticas para melhorar seus hábitos de reciclagem.</p>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center mb-8">
        <div className="flex flex-col md:flex-row w-full max-w-6xl gap-6">
          <div className="relative w-full md:w-1/2 group">
            <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
              <img 
                src="recycling--removebg-preview.png" 
                alt="Imagem de Exemplo" 
                className="w-full h-full object-contain rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30 rounded-lg group-hover:opacity-40 transition-opacity duration-300 ease-in-out"></div>
            </div>
          </div>

          <section className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 w-full md:w-1/2 flex items-center justify-center transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
            <div className="w-full">
              <h2 className="text-2xl font-semibold gradient-text mb-4 transition-transform duration-300 transform hover:translate-x-1 hover:translate-y-1">
                Participe da Mudança
              </h2>
              <p className="text-gray-600 mb-4 transition-opacity duration-300 hover:opacity-80">
                Para melhorar ainda mais a gestão de resíduos, preencha o formulário abaixo com sugestões ou informações adicionais.
              </p>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="sugestao" className="block text-gray-700 font-medium transition-transform duration-300 transform hover:scale-105">
                    Sugestão:
                  </label>
                  <textarea 
                    {...register('sugestao')} 
                    id="sugestao" 
                    placeholder="Sua sugestão" 
                    className="w-full p-2 border border-gray-300 rounded-md transition-all duration-300 hover:border-blue-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md transition-transform duration-300 hover:scale-105 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Enviar Sugestão
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EducacaoSensibilizacao;
