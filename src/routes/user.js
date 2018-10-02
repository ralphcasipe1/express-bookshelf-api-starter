import { Router } from 'express'
import HttpStatus from 'http-status-codes'
import {
  fetchAllUsers
} from '../services/user'

const router = Router();

router.get('/users', (_, response) => 
  fetchAllUsers()
    .then(data => response.json({ data }))
    .catch(error => response.json({ error: error.message}))
)

export default router;