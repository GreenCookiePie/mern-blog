import React, { useState } from 'react'
import axios from 'axios'

import { Dialog, DialogActions, DialogContent, Button } from '@material-ui/core/'

export const Update = ({ dialog, post }) => {
    const [update, setUpdate] = useState(post)
    const [open, setOpen] = useState(dialog)
    console.log(open)

    const handleChange = (e) => {
        setUpdate(prev => {
            return ({
                ...prev, 
                [e.target.name]: e.target.value
            })
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const URL = `http://localhost:5000/create/${post._id}` 
        axios.put(URL, update)
    }

    const handleDialog = () => {
        setOpen(!open)
        // console.log(open)
    } 

    return (
      <Dialog open={open} onClose={handleDialog} aria-labelledby="form-dialog-title">
          <DialogContent>
              <textarea className="form-control" onChange={handleChange} value={update.body} name="body" placeholder="Content" autoComplete="off"></textarea>
          </DialogContent>
          <DialogActions>
              <Button onClick={handleSubmit} color="primary">Submit</Button>
              <Button onClick={handleDialog} color="secondary">Close</Button>
          </DialogActions>
      </Dialog>
    )
}