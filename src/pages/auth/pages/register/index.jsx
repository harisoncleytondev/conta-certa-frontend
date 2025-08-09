import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { FaGoogle } from 'react-icons/fa';
import iconFacebook from '../../../../assets/icon-facebook.svg';
import { Link } from 'react-router-dom';

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <form className="bg-white min-w-[70%] p-10 rounded-2xl flex flex-col justify-center items-center gap-0.5 max-w-md mx-4">
        <h3 className="text-terracota font-extrabold text-5xl mb-6">
          Bem vindo.
        </h3>
        <div className="flex items-center justify-center gap-8 py-2">
          <button
            className="flex justify-center bg-terracota p-2 rounded-full hover:-translate-y-1 hover:scale-105 transition-all ease-linear duration-150 text-white text-[22px]"
            type="button"
          >
            <FaGoogle />
          </button>
          <button
            className="bg-terracota p-2 rounded-full hover:-translate-y-1 hover:scale-105 transition-all ease-linear duration-150"
            type="button"
          >
            <img
              src={iconFacebook}
              alt="Facebook"
              className="w-[22px] h-[22px]"
            />
          </button>
        </div>
        <div className="w-full flex justify-center items-center gap-3 my-4">
          <div className="w-2/5 h-0.5 bg-terracota"></div>
          <span className="text-terracota font-inter font-extrabold text-[20px]">
            OU
          </span>
          <div className="w-2/5 h-0.5 bg-terracota"></div>
        </div>

        <div className="flex w-full flex-col gap-0.5 mb-4">
          <label
            htmlFor="input-login-name"
            className="text-terracota font-inter font-bold text-[14px]"
          >
            Nome
          </label>
          <input
            className="border border-terracota rounded-[9px] outline-0 p-2 placeholder-terracota text-terracota text-[12px] font-inter"
            type="text"
            id="input-login-name"
            placeholder="Digite seu nome"
            required
          />
        </div>

        <div className="flex w-full flex-col gap-0.5 mb-4">
          <label
            htmlFor="input-login-email"
            className="text-terracota font-inter font-bold text-[14px]"
          >
            Email
          </label>
          <input
            className="border border-terracota rounded-[9px] outline-0 p-2 placeholder-terracota text-terracota text-[12px] font-inter"
            type="email"
            id="input-login-email"
            placeholder="Digite seu email"
            required
          />
        </div>

        <div className="flex w-full flex-col gap-0.5 relative mb-4">
          <label
            htmlFor="input-login-password"
            className="text-terracota font-inter font-bold text-[14px]"
          >
            Senha
          </label>
          <input
            className="border border-terracota rounded-[9px] outline-0 p-2 pr-10 placeholder-terracota text-terracota text-[12px] font-inter"
            type={showPassword ? 'text' : 'password'}
            id="input-login-password"
            placeholder="Digite sua senha"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="cursor-pointer absolute right-3 top-1/2 translate-y-0.5 text-terracota hover:text-musgo transition-colors"
            tabIndex={-1}
            aria-label={showPassword ? 'Esconder senha' : 'Mostrar senha'}
          >
            {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </button>
        </div>

        <div className="flex w-full flex-col gap-0.5 relative mb-6">
          <label
            htmlFor="input-login-confirm-password"
            className="text-terracota font-inter font-bold text-[14px]"
          >
            Confirmar Senha
          </label>
          <input
            className="border border-terracota rounded-[9px] outline-0 p-2 pr-10 placeholder-terracota text-terracota text-[12px] font-inter"
            type={showConfirmPassword ? 'text' : 'password'}
            id="input-login-confirm-password"
            placeholder="Confirme sua senha"
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="cursor-pointer absolute right-3 top-1/2 translate-y-0.5 text-terracota hover:text-musgo transition-colors"
            tabIndex={-1}
            aria-label={
              showConfirmPassword ? 'Esconder senha' : 'Mostrar senha'
            }
          >
            {showConfirmPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </button>
        </div>

        <div className="flex flex-col justify-center items-center text-[14px] underline text-musgo decoration-musgo py-2">
          <span className="cursor-pointer hover:text-terracota hover:decoration-terracota transition-all ease-in duration-100">
            Ao continuar você aceita os Termos e Politicas.
          </span>
          <Link
            to={'/auth/login'}
            className="cursor-pointer hover:text-terracota hover:decoration-terracota transition-all ease-in duration-100"
          >
            Já tem uma conta? Entre agora.
          </Link>
        </div>

        <button className="cursor-pointer bg-musgo py-1.5 w-[80%] rounded-[9px] text-areia font-inter font-bold hover:scale-105 hover:bg-terracota transition-all ease-out duration-150">
          CONTINUAR
        </button>
      </form>
    </div>
  );
};
