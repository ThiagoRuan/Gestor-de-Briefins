import express from 'express'
import { getBriefins, addBriefing, updateBriefing, deleteBriefing } from '../controllers/brf.js'

export const router = express.Router()

router.get('/', getBriefins)

router.post('/', addBriefing)

router.put('/:id', updateBriefing)

router.delete('/:id', deleteBriefing)

export default router
