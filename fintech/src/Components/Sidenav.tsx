import React from 'react'
import resumo from '../assets/icons/resumo.svg'
import vendas from '../assets/icons/vendas.svg'
import webhooks from '../assets/icons/webhooks.svg'
import configuracoes from '../assets/icons/configuracoes.svg'
import contatos from '../assets/icons/contato.svg'
import FintechSVG from '../assets/FintechSVG'
import { NavLink } from 'react-router-dom'

const Sidenav = () => {
  return (
    <nav className='sidenav box bg-3'>
      <FintechSVG title='Fintech Logo'/>
      <ul>
        <li>
          <span>
            <img src={resumo} alt='' />
          </span>
          <NavLink to="/">Resumo</NavLink>
        </li>
        <li>
          <span>
            <img src={vendas} alt='' />
          </span>
          <NavLink to="/vendas">Vendas</NavLink>
        </li>
        <li>
          <span>
            <img src={webhooks} alt='' />
          </span>
            <a>
              Webhooks
            </a>        
        </li>
        <li>
          <span>
            <img src={configuracoes} alt='' />
          </span>
            <a>
              Configurações
            </a>
        </li>
        <li>
          <span>
            <img src={contatos} alt='' />
          </span>
            <a>
              Contatos
            </a>
        </li>
      </ul>
    </nav>
  )
}

export default Sidenav