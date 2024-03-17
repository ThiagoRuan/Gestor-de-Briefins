import { db } from '../db.js'

export const getBriefins = (_,res) => {

    const qry = 'SELECT * FROM briefing'

    db.query(qry, (err, data) => {

        if (err) return res.json(err)
        
        return res.status(200).json(data)

    })
}

export const addBriefing = (req, res) => {

    const qry = 'INSERT INTO briefing( nomeCliente, descricao ) VALUES ( ? )'
    const values = [
        req.body.nomeCliente,
        req.body.descricao,
    ]

    db.query(qry,[values], (err) => {

        if (err) return res.json(err)

        return res.status(200).json('Briefing criado com sucesso')

    })
}

export const updateBriefing = (req, res) => {
    const qry = 'UPDATE briefing SET `nomeCliente` = ?, `descricao` = ? WHERE `id` = ?'
    const values = [
        req.body.nomeCliente,
        req.body.descricao,
    ]

    db.query(qry, [...values, req.params.id], (err)=> {
        if (err) return res.json(err)

        return res.status(200).json('Briefing atualizado com sucesso')
    })
}
export const deleteBriefing = (req, res) => {

    const qry = 'DELETE FROM briefing WHERE `id` = ?'

    db.query(qry,[req.params.id], (err) => {

        if (err) return res.json(err)
        
        return res.status(200).json('Briefing deletado com sucesso')

    })
}
