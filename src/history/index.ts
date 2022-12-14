import express from 'express'

import { mainConcert } from './asset/concert/main'
import { miniConcert } from './asset/concert/mini'

import type { Concert } from './asset/types/types'

const router = express.Router()

router.get('/', (req, res) => {
  const mainConcertList = mainConcert()
  const miniConcertList = miniConcert()

  const concertList = [mainConcertList, miniConcertList]
    .flat()
    .sort((a: Concert, b: Concert) => b.time.timestamp - a.time.timestamp)
  return res.status(200).json({ list: concertList })
})

export default router
