import express from 'express';
import { Component } from '../models/component.model.js';

const router = express.Router();

router.post('/createComponents', async (req, res) => {
    try {
      const newComponent = req.body;
      const result = await Component.create(newComponent);
      res.status(201).json(result); // Return the inserted component
    } catch (error) {
      console.error('Error creating component:', error);
      res.status(500).json({ error: 'Error creating component' });
    }
  });
router.get('/getCode', async (req, res) => {
    try {
        const components = await Component.find({});
        console.log(components)
        res.json(components);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


export default router;
