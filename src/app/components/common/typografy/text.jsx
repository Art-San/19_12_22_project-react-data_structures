import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
const Text = ({ children }) => {
    return <Typography className='m-4'>{children}</Typography>
}
Text.propTypes = {
    children: PropTypes.node
}
export default Text
