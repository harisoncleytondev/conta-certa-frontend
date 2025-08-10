<<<<<<< HEAD
import { useContext, useState } from 'react';
=======
import { useState } from 'react';
>>>>>>> 7338874ae47fcf884bba715f04a901b91baac592
import { DynamicChart } from '../../../../../components/charts';
import { Streaming } from '../../../../../components/streamingText';
import { IoSparklesOutline, IoSearchOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import UserContext from '../../../../../contexts/user/UserContext';
=======
>>>>>>> 7338874ae47fcf884bba715f04a901b91baac592

// Simulação de dados
const financialData = [
  { name: 'Entradas', value: 500, color: '#81b29a' },
  { name: 'Saídas', value: 500, color: '#c3593f' },
];

const dataOne = [
  { name: 'Alimentação', 'Gasto Total': 750.0 },
  { name: 'Transporte', 'Gasto Total': 320.5 },
  { name: 'Entretenimento', 'Gasto Total': 150.0 },
  { name: 'Compras', 'Gasto Total': 580.99 },
  { name: 'Saúde', 'Gasto Total': 200.0 },
  { name: 'Moradia', 'Gasto Total': 1200.0 },
  { name: 'Educação', 'Gasto Total': 300.0 },
  { name: 'Lazer', 'Gasto Total': 250.0 },
  { name: 'Outros', 'Gasto Total': 100.0 },
];

const dataTwo = [
  { name: 'Jan', 'Valor das Transações': 1250.0 },
  { name: 'Fev', 'Valor das Transações': 1300.5 },
  { name: 'Mar', 'Valor das Transações': 1450.75 },
  { name: 'Abr', 'Valor das Transações': 1500.0 },
  { name: 'Mai', 'Valor das Transações': 1380.2 },
  { name: 'Jun', 'Valor das Transações': 1600.5 },
  { name: 'Jul', 'Valor das Transações': 1700.0 },
  { name: 'Ago', 'Valor das Transações': 1800.0 },
  { name: 'Set', 'Valor das Transações': 1900.0 },
  { name: 'Out', 'Valor das Transações': 2000.0 },
  { name: 'Nov', 'Valor das Transações': 2100.0 },
  { name: 'Dez', 'Valor das Transações': 2200.0 },
];
const totalBalance = financialData[0].value - financialData[1].value;
// Simulação de dados

export const Charts = () => {
<<<<<<< HEAD
  const { dark, setDarkMode, chartType, setTypeChart } = useContext(UserContext);
=======
  const [typeChart, setTypeChart] = useState('bar');
>>>>>>> 7338874ae47fcf884bba715f04a901b91baac592

  return (
    <div className="flex-1 p-4 md:p-6 lg:p-8 bg-areia font-inter rounded-lg m-2 md:m-4 overflow-y-auto max-h-[calc(100vh-2rem)] custom-scrollbar">
      <div className="py-4">
        <Streaming
          className="text-terracota font-jetbrains font-extrabold text-3xl md:text-4xl lg:text-5xl"
          fullText="Estatísticas | Olá, seu nome!"
          time={70}
          repeat={false}
        />
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-6 md:gap-8 mb-18">
        <div className="w-full lg:w-1/3 flex flex-col items-center gap-6 md:gap-8">
          <motion.div
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col gap-5 p-8 bg-zinc-800 rounded-2xl shadow-xl w-full"
          >
            <div className="flex items-center gap-3">
              <IoSparklesOutline className="h-8 w-8 text-areia" />{' '}
              <h6 className="font-inter font-extrabold text-areia text-2xl">
                Seu Assistente Pessoal
              </h6>
            </div>
            <p className="font-inter text-areia text-sm">
              Análise de gastos, dicas de economia e suporte financeiro
              personalizado.
            </p>
            <div className="relative">
              <input
                type="text"
                placeholder="Pergunte-me algo..."
                className="w-full p-4 pl-12 bg-zinc-700 text-areia rounded-full outline-none border border-transparent focus:border-terracota transition-colors duration-200"
              />
              <IoSearchOutline className="h-6 w-6 text-zinc-400 absolute left-3 top-1/2 transform -translate-y-1/2" />{' '}
            </div>
            <button className="w-full p-4 bg-terracota text-areia font-inter font-bold rounded-full shadow-lg hover:bg-terracota/80 hover:scale-[1.02] transition-all duration-200 ease-in-out">
              INICIAR CONVERSA
            </button>
          </motion.div>

          <motion.div
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col gap-2 p-3 bg-grafite rounded-lg shadow-md w-full"
          >
            <label htmlFor="chartType" className="text-areia font-semibold">
              Estilo do Gráfico:
            </label>
            <select
              id="chartType"
              name="chartType"
              onChange={(e) => setTypeChart(e.currentTarget.value)}
<<<<<<< HEAD
              defaultValue={chartType}
=======
>>>>>>> 7338874ae47fcf884bba715f04a901b91baac592
              className="p-2 rounded-md bg-areia text-grafite font-medium focus:outline-none focus:ring-2 focus:ring-musgo"
            >
              <option value="bar">Gráfico de Barras</option>
              <option value="line">Gráfico de Linhas</option>
              <option value="pie">Gráfico de Pizza</option>
            </select>
          </motion.div>

          <motion.div
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full bg-grafite rounded-2xl p-4 md:p-6 flex flex-col text-areia font-inter shadow-xl border border-gray-700 flex-shrink-0"
          >
            <h6 className="text-xl md:text-2xl font-bold mb-3 text-center text-areia">
              Resumo Mensal
            </h6>
            <div className="flex justify-between items-center text-lg md:text-xl">
              <span className="font-semibold">Entradas:</span>
              <span className="bg-musgo p-1 px-2 text-base md:text-lg rounded-md font-bold">
                R$ {financialData[0].value.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center text-lg md:text-xl mt-2">
              <span className="font-semibold">Saídas:</span>
              <span className="bg-terracota p-1 px-2 text-base md:text-lg rounded-md font-bold">
                R$ {financialData[1].value.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center text-xl md:text-2xl mt-4 pt-4 border-t border-areia/20">
              <span className="font-bold">Saldo:</span>
              <span
                className={`p-1 px-2 text-lg md:text-xl rounded-md font-extrabold ${
                  totalBalance >= 0 ? 'bg-green-600' : 'bg-red-600'
                }`}
              >
                R$ {totalBalance.toFixed(2)}
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: -400, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="w-full lg:w-2/3 flex flex-col gap-6"
        >
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md flex-1 min-h-[350px]">
            <h4 className="text-xl md:text-2xl font-inter font-bold mb-4 text-terracota text-center">
              Gastos totais e dispesas.
            </h4>
            <DynamicChart
<<<<<<< HEAD
              type={chartType}
=======
              type={typeChart}
>>>>>>> 7338874ae47fcf884bba715f04a901b91baac592
              data={dataOne}
              dataKey="Gasto Total"
              innerRadius={60}
              outerRadius={90}
            />
          </div>

          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md flex-1 min-h-[350px]">
            <h4 className="text-xl md:text-2xl font-inter font-bold mb-4 text-terracota text-center">
              Histórico de Transações Mensais
            </h4>
            <DynamicChart
<<<<<<< HEAD
              type={chartType}
=======
              type={typeChart}
>>>>>>> 7338874ae47fcf884bba715f04a901b91baac592
              data={dataTwo}
              dataKey="Valor das Transações"
              innerRadius={60}
              outerRadius={90}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
