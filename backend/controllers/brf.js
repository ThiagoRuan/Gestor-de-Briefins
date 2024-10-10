// Importa o cliente do PostgreSQL
import { db } from '../db.js';

// Função para buscar todos os briefings
export const getBriefins = async (_, res) => {
    const qry = 'SELECT * FROM briefing';
    try {
        const result = await db.query(qry); // Usando await para a consulta
        return res.status(200).json(result.rows); // PostgreSQL usa 'rows' para os dados retornados
    } catch (err) {
        return res.json(err);
    }
};

// Função para adicionar um novo briefing
export const addBriefing = async (req, res) => {
    const qry = 'INSERT INTO briefing (nomeCliente, descricao) VALUES ($1, $2)';
    const values = [
        req.body.nomeCliente,
        req.body.descricao,
    ];

    try {
        await db.query(qry, values); // Passa os valores diretamente
        return res.status(200).json('Briefing criado com sucesso');
    } catch (err) {
        return res.json(err);
    }
};

// Função para atualizar um briefing existente
export const updateBriefing = async (req, res) => {
    const qry = 'UPDATE briefing SET nomeCliente = $1, descricao = $2, estado = $3 WHERE id = $4';
    const values = [
        req.body.nomeCliente,
        req.body.descricao,
        req.body.estado,
        req.params.id,
    ];

    try {
        await db.query(qry, values); // Atualiza com base nos valores e ID
        return res.status(200).json('Briefing atualizado com sucesso');
    } catch (err) {
        return res.json(err);
    }
};

// Função para deletar um briefing
export const deleteBriefing = async (req, res) => {
    const qry = 'DELETE FROM briefing WHERE id = $1';
    try {
        await db.query(qry, [req.params.id]); // Deleta com base no ID
        return res.status(200).json('Briefing deletado com sucesso');
    } catch (err) {
        return res.json(err);
    }
};
