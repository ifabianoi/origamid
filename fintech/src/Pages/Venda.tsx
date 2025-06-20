import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch';
import { IVenda } from '../Context/DataContext';
import Loading from '../Components/Loading';

type VendaSemData = Omit<IVenda, 'data'>

const Venda = () => {
  const { id } = useParams();

  const {data, loading} = useFetch<VendaSemData>(
    `https://data.origamid.dev/vendas/${id}`,
  );

  if (loading === true) return <Loading />

  if (!data) return

  return (
    <div>
      <div className='box md'>ID: {data.id}</div>
      <div className='box md'>Nome: {data.nome}</div>
      <div className='box md'>Preço: {data.preco.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
        })}
      </div>
      <div className='box md'>Status: {data.status}</div>
      <div className='box md'>Pagamento: {data.pagamento}</div>      
    </div>    
  )
}

export default Venda