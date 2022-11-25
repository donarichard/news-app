import { Button } from '@mui/material'
import React from 'react'

export default function ButtonComponent({label, variant, type}) {
  return (
    <Button fullWidth variant={variant} type={type}>{label}</Button>
  )
}
