//This is for the form
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  radioGroup: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '-10px',
  },
  button: {
    marginTop: '20px',
    backgroundColor: '#040F0F',
    color: '#F1F7ED',
    transition: 'background-color 0.3s, color 0.3s', 
    '&:hover': {
      backgroundColor: '#F1F7ED', 
      color: '#040F0F', 
    },
  },
}));