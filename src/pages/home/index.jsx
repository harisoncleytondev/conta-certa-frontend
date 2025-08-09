import bannerImage from './assets/banner.png';
import logoImage from '../../assets/logo.svg';
import chartImage from './assets/chart.svg';
import calculatorImage from './assets/calculator.svg';
import iconInstagram from '../../assets/icon-instagram.svg';
import iconLinkedin from '../../assets/icon-linkedin.svg';
import iconFacebook from '../../assets/icon-facebook.svg';
import { Streaming } from '../../components/streamingText';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const messagesList = [
  {
    id: 1,
    text: 'Olá! Eu sou a LIA, sua assistente financeira. Como posso ajudar hoje?',
    type: 'received',
  },
  { id: 2, text: 'Não consigo organizar meus gastos mensais.', type: 'sent' },
  {
    id: 3,
    text: 'Entendido. Analisei seus últimos gastos: 40% foram com restaurantes e 25% com assinaturas.',
    type: 'received',
  },
  {
    id: 4,
    text: 'Se reduzir pela metade esses custos, você economiza cerca de R$ 500/mês. Quer que eu monte um plano?',
    type: 'received',
  },
];

export const Home = () => {
  const [messages, setMessages] = useState([]);
  const [messagesIndex, setMessagesIndex] = useState(0);

  useEffect(() => {
    if (messagesIndex >= messagesList.length) {
      return;
    }

    const timer = setTimeout(() => {
      setMessages((msg) => [...msg, messagesList[messagesIndex]]);
      setMessagesIndex((index) => index + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [messages, messagesIndex]);

  useEffect(() => {
    if (messagesIndex >= messagesList.length) {
      const resetTimer = setTimeout(() => {
        setMessages([]);
        setMessagesIndex(0);
      }, 5000);

      return () => clearTimeout(resetTimer);
    }
  }, [messagesIndex]);

  return (
    <>
      <div className="min-h-screen bg-gray-50 font-inter">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          className="relative w-full h-72 md:h-96 overflow-hidden"
        >
          <div className="absolute inset-0 bg-black"></div>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
            style={{ backgroundImage: `url(${bannerImage})` }}
          ></div>

          <div className="relative z-10 flex flex-col h-full items-center justify-center p-4 text-center">
            <img
              src={logoImage}
              alt="Conta certa"
              className="w-16 h-16 sm:w-20 sm:h-20 mb-2 rounded-full shadow-lg"
            />
            <h1 className="text-terracota font-jetbrains font-extrabold text-4xl sm:text-5xl lg:text-6xl p-2 sm:p-4 leading-tight">
              Conta Certa
            </h1>
            <Streaming
              fullText="Organize suas finanças de forma simples e clara, ganhando mais tempo e tranquilidade para o que realmente importa."
              repeat={true}
              time={60}
              resetTime={3000}
              className="text-areia font-jetbrains text-sm sm:text-base font-extrabold max-w-sm sm:max-w-md md:max-w-xl mx-auto"
            />
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 py-12 px-4 sm:px-8 lg:px-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-5 text-center lg:text-left"
          >
            <h3 className="text-terracota font-jetbrains text-3xl sm:text-4xl font-extrabold leading-tight">
              Controle seus <br className="hidden sm:block" /> Gastos
            </h3>
            <p className="w-full max-w-md lg:max-w-lg font-inter text-grafite mx-auto lg:mx-0">
              Entender os gastos e acompanhar entradas e saídas é essencial para
              economizar. Estatísticas e controle ajudam a criar metas e evitar
              desperdícios. Dessa forma, economizar se torna um hábito simples e
              consciente.
            </p>
            <button className="bg-grafite p-3 w-48 sm:w-60 text-areia font-jetbrains rounded-lg cursor-pointer hover:opacity-80 transition-all duration-200 ease-in mx-auto lg:mx-0 shadow-md">
              Começar agora
            </button>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            src={calculatorImage}
            alt="Cálculos"
            className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-contain shadow-lg rounded-xl"
          />
        </div>

        <div className="mt-10 py-12 px-4 sm:px-8 lg:px-24 max-w-7xl mx-auto">
          <h3 className="text-terracota font-extrabold font-jetbrains text-3xl sm:text-4xl text-center mb-8 leading-tight">
            Gráficos a qualquer hora.
          </h3>

          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 pt-5">
            <motion.img
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              src={chartImage}
              alt="Gráfico"
              className="w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 object-contain shadow-lg rounded-xl"
            />

            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="w-full max-w-md lg:max-w-xl font-inter text-grafite text-center lg:text-left mx-auto lg:mx-0"
            >
              Com acesso a gráficos detalhados das suas finanças, você pode
              acompanhar seus gastos, receitas e saldo de forma clara e prática.
              Disponíveis a qualquer hora e lugar, esses gráficos ajudam a
              identificar padrões e a tomar decisões financeiras mais
              conscientes. Assim, controlar o orçamento fica mais fácil,
              permitindo desenvolver hábitos financeiros saudáveis no dia a dia.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center bg-terracota py-10 px-4 sm:px-8 lg:px-24 lg:gap-16">
        <div className="flex flex-col gap-5 text-center lg:text-left max-w-md lg:max-w-none">
          <h3 className="text-grafite font-jetbrains font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Diga Adeus ao Caos Financeiro
          </h3>
          <p className="text-areia font-inter max-w-lg mx-auto lg:mx-0">
            Conte com a{' '}
            <span
              className="font-jetbrains font-extrabold"
              title="Lógica de Inteligência em Administração"
            >
              LIA
            </span>{' '}
            como sua assistente financeira 24 horas por dia. Com ela, você pode
            pedir conselhos para lidar com dívidas, receber dicas para
            economizar e organizar suas finanças. Sinta-se à vontade para
            utilizá-la sempre que precisar.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0.2, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="w-full max-w-md bg-areia p-4 rounded-xl shadow-lg flex flex-col gap-3 h-96 overflow-y-auto mt-8 lg:mt-0"
        >
          <h6 className="text-center text-terracota font-jetbrains font-bold text-2xl">
            Exemplo prático
          </h6>
          <AnimatePresence>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className={`p-3 rounded-lg text-sm max-w-[85%] break-words ${
                  msg.type === 'sent'
                    ? 'bg-musgo text-areia self-end'
                    : 'bg-grafite text-areia self-start'
                }`}
              >
                {msg.text}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="w-full bg-grafite p-10">
        <div className="flex flex-col justify-center items-center gap-3">
          <h6 className="text-terracota text-2xl font-jetbrains font-extrabold">
            ContaCerta
          </h6>
          <p className="text-areia font-inter text-center">
            Este site oferece ferramentas e informações para ajudar no controle
            financeiro. Use com responsabilidade e consulte um profissional
            quando necessário.
          </p>

          <div className="flex justify-center items-center gap-4">
            <button className="bg-terracota rounded-full p-1 cursor-pointer hover:scale-110 transition-all ease-in duration-150">
              <img src={iconInstagram} className="w-[28px] h-[28px]" />
            </button>
            <button className="bg-terracota rounded-full p-1 cursor-pointer hover:scale-110 transition-all ease-in duration-150">
              <img src={iconLinkedin} className="w-[28px] h-[28px]" />
            </button>
            <button className="bg-terracota rounded-full p-1 cursor-pointer hover:scale-110 transition-all ease-in duration-150">
              <img src={iconFacebook} className="w-[28px] h-[28px]" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
