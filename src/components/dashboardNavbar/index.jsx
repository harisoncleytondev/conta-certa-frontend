import { useState } from 'react';
import logoImage from '../../assets/logo.svg';
import {
  IoBarChartOutline,
  IoExitOutline,
  IoMoonOutline,
  IoMenuOutline, // Adicionado ícone de menu
  IoCloseOutline, // Adicionado ícone de fechar
} from 'react-icons/io5';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { CiUser } from 'react-icons/ci';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Importar Link para navegação

const Section = ({ icon: Icon, name, show, to }) => {
  return (
    <Link
      to={to}
      className="cursor-pointer flex flex-col items-center gap-1.5 p-2 hover:border border-areia rounded-[9px] transition-all ease-in duration-150 w-full"
    >
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
    </Link>
  );
};

export const DashboardNavbar = () => {
  const [show, setShow] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleShow = () => {
    if (isMobileMenuOpen) return;
    setShow(!show);
  }

  const handleShowMobile = () => {
    setShow(!show);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <>
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => handleShowMobile()}
          className={`p-2 bg-musgo text-areia rounded-full shadow-lg ${
            isMobileMenuOpen ? 'fixed left-[80%]' : ''
          }`}
        >
          {isMobileMenuOpen ? (
            <IoCloseOutline size={28} />
          ) : (
            <IoMenuOutline size={28} />
          )}
        </button>
      </div>

      <motion.div
        onMouseEnter={() => handleShow()}
        onMouseLeave={() => handleShow()}
        initial={{ width: 60 }}
        animate={{ width: show ? 200 : 60 }}
        transition={{ type: 'tween', duration: 0.2, ease: 'easeInOut' }}
        className={`bg-musgo h-screen relative left-0 top-0 py-4 p-2 flex flex-col justify-between rounded-r-[9px] overflow-hidden
          ${
            isMobileMenuOpen ? 'fixed inset-y-0 left-0 z-40 w-48' : 'hidden'
          } lg:flex`}
        style={{ width: undefined }}
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex gap-2 items-center justify-center">
            <img
              src={logoImage}
              alt="ContaCerta"
              className="w-[24px] h-[24px]"
            />
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
          <Section icon={IoMoonOutline} name="Modo Escuro" show={show} to="#" />
        </div>

        <div className="flex flex-col items-center justify-center space-y-6">
          <Section
            icon={IoBarChartOutline}
            name="Estatísticas"
            show={show}
            to="/dashboard/charts"
          />
          <Section
            icon={MdOutlineAttachMoney}
            name="Transações"
            show={show}
            to="#"
          />
          <Section icon={CiUser} name="Conta e Perfil" show={show} to="#" />
        </div>

        <div className="text-2xl text-areia hover:text-terracota transition-colors flex justify-center w-full">
          <Section
            icon={IoExitOutline}
            name="Sair da conta"
            show={show}
            to="#"
          />
        </div>
      </motion.div>
    </>
  );
};
