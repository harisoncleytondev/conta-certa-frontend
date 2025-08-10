import { useState } from 'react';
import logoImage from '../../assets/logo.svg';
import {
  IoBarChartOutline,
  IoExitOutline,
  IoMoonOutline,
} from 'react-icons/io5';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { CiUser } from 'react-icons/ci';
import { motion } from 'framer-motion';

const Section = ({ icon: Icon, name, show }) => {
  return (
    <div className="cursor-pointer flex flex-col items-center gap-1.5 p-2 hover:border border-areia rounded-[9px] transition-all ease-in duration-150">
      <motion.button className="text-[20px] text-areia cursor-pointer hover:scale-105 hover:-translate-y-0.5 hover:border-b-2 transition-all ease-linear duration-200">
        <Icon />
      </motion.button>

      {show && (
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 90, damping: 20 }}
          className="text-areia font-inter cursor-pointer whitespace-nowrap text-sm"
        >
          {name}
        </motion.span>
      )}
    </div>
  );
};

export const DashboardNavbar = ( { active } ) => {
  const [show, setShow] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      initial={{ width: 60 }}
      animate={{ width: show ? 200 : 60 }}
      transition={{ type: 'tween', duration: 0.2, ease: 'easeInOut' }}
      className="bg-musgo h-screen absolute left-0 top-0 py-4 p-2 flex flex-col justify-between rounded-r-[9px] overflow-hidden"
      style={{ width: undefined }}
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex gap-2 items-center justify-center">
          <img src={logoImage} alt="ContaCerta" className="w-[24px] h-[24px]" />
          {show ? (
            <motion.h5
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring', stiffness: 90, damping: 20 }}
              className="text-areia font-jetbrains font-bold"
            >
              ContaCerta
            </motion.h5>
          ) : (
            ''
          )}
        </div>
        <Section icon={IoMoonOutline} name="Modo Escuro" show={show} />
      </div>

      <div className="flex flex-col items-center justify-center space-y-6">
        <Section icon={IoBarChartOutline} name="Estatísticas" show={show} />
        <Section icon={MdOutlineAttachMoney} name="Transações" show={show} />
        <Section icon={CiUser} name="Conta e Perfil" show={show} />
      </div>

      <div className="text-2xl text-areia hover:text-terracota transition-colors flex justify-center w-full">
        <Section icon={IoExitOutline} name="Sair da conta" show={show} />
      </div>
    </motion.div>
  );
};
