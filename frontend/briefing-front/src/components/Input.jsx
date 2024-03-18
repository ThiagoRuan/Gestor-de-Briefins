import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ButtonContainer, FormContainer, Input, InputGroup, Label, TextArea } from '../styles/InputStyle.jsx'
import Button from './Button.jsx'

 export const BriefingNovo = () => {
    const [nomeCliente, setNomeCliente] = useState('')
    
    const [descricao, setDescricao] = useState('')
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        await axios.post('http://localhost:3333/', {
          nomeCliente: nomeCliente,
          descricao: descricao,
        });
  
        toast.success('Briefing adicionado com sucesso!')
        setNomeCliente('');
        setDescricao('');
      } catch (error) {
        toast.error('Erro ao adicionar briefing:', error);
      }
    };
  
    return (

        <form onSubmit={handleSubmit}>
            <FormContainer >
                <ToastContainer/>
                <h2>Novo Briefing</h2>
                <InputGroup>
                    <Label htmlFor='nome'>
                        <strong>Nome do Cliente:</strong>
                    </Label>
                    <Input
                    id = 'nome'
                    type = 'text'
                    value={nomeCliente}
                    onChange={(e) => setNomeCliente(e.target.value)}
                    placeholder='Insira seu nome'/>
                </InputGroup>
            
                

                <InputGroup>
                    <Label htmlFor='desc'>
                        <strong>Descrição da necessidade:</strong>
                    </Label>
                    <TextArea 
                    id='desc'  
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    placeholder='Digite o que necessita'/>
                </InputGroup>
                


                <ButtonContainer>
                    <Button type='Submit'>Salvar</Button>
                </ButtonContainer>


            </FormContainer>
        </form>
        
    );
}

export default BriefingNovo