import React, { useState } from 'react'
import axios from 'axios'

const BriefingInput = () => {

    const [ nomeCliente, setNomeCliente] = useState('')
    
    const [ descricaoNecessidade, setDescricao ] = useState('')

    const handleSubmit = async( event ) => {

        event.preventDefault();
        
        const response = await axios.post('/backend/')
    }
}