import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { GridCard, GridContainer } from '../styles/GridStyle';
import { ButtonContainer, Input, Label } from '../styles/InputStyle';
import { Option, Select } from '../styles/SelectOptionsStyle';
import Button from './Button';

const Grid = () => {
    const [briefings, setBriefings] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [newNome, setNewNome] = useState('');
    const [newDescricao, setNewDescricao] = useState('');
    const [newEstado, setNewEstado] = useState('');
    
    
    const handleDelete = async (briefingId) => {
      try {
        await axios.delete('http://localhost:3333/'+briefingId)
        setBriefings(briefings
          .filter(briefing => briefing.briefingId !== briefingId))
        toast.success('Briefing deletado com sucesso!')
        fetchBriefings();
      } catch (error) {
        toast.error('Erro ao deletar briefing.')
      }
    }
    const handleEdit = (briefing) => {
      setEditingId(briefing.id)
      setNewNome(briefing.nomeCliente)
      setNewDescricao(briefing.descricao)
      setNewEstado(briefing.estado)
    }
    const handleUpdate = async (id) => {
      try {
        await axios.put(`http://localhost:3333/${id}`, {
        nomeCliente: newNome,
        descricao: newDescricao,
        estado: newEstado,
      });
      toast.success('Briefing atualizado com sucesso!')
      setEditingId(null)
      fetchBriefings()
      } catch (error) {
        toast.error('Erro ao atualizar briefing.')
      }
    }
    const fetchBriefings = async () => {
        try {
          const response = await axios.get('http://localhost:3333/');
          setBriefings(response.data);
        } catch (error) {
          toast.error('Erro ao buscar briefins.')
        }
      }
    useEffect(() => {
      fetchBriefings()
    }, []);
  
    return (
      <GridContainer>
        {briefings.map((briefing) => (
          <GridCard key={briefing.id}>
            {editingId === briefing.id ? (
              <>
                <Label>Nome do Cliente:</Label>
                <br/>
                <Input
                  value = { newNome }
                  onChange = {(e) => setNewNome(e.target.value)}
                />
                <br/>
                <Label>Descrição da Necessidade:</Label>
                <br/>
                <Input
                  value={ newDescricao }
                  onChange={(e) => setNewDescricao(e.target.value)}
                />
                <br/>
                  <Label>Estado do briefing:</Label>
                  <br/>
                  <Select value={newEstado} onChange={(e) => setNewEstado(e.target.value)}>
                  <Option value="Negociação">Negociação</Option>
                  <Option value="Aprovado">Aprovado</Option>
                  <Option value='Finalizado'>Finalizado</Option>
                  </Select>

                <Button onClick = {() => handleUpdate(briefing.id)} >Salvar</Button>
              </>
            ) : (
              <>
                <h2>{briefing.nomeCliente}</h2>
                <hr/>
                <p>{briefing.descricao}</p>
                <h5><strong>Data e Hora de Criação:</strong> {briefing.data_hora}</h5>
                <h5><strong>Estado do briefing:</strong> {briefing.estado}</h5>
                <ButtonContainer>
                <Button onClick={() => handleEdit(briefing)}>Editar</Button>
                <Button onClick={() => handleDelete(briefing.id)}>Deletar</Button>
                </ButtonContainer>
              </>
            )}
          </GridCard>
        ))}
      </GridContainer>
    );
  };
  
  export default Grid;