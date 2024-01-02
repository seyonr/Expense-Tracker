//This will be the styling for the main card (middle card)
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  desktop: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  mobile: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  main: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '5%',
    },
  },
  last: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3),
      paddingBottom: '200px',
    },
  },
  grid: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  root: {
    backgroundColor: '#F1F7ED',
  },
  cardHeaderTitle: {
    fontSize: '30px', 
    fontWeight: 'bolder',
    fontFamily: 'Poppins, sans-serif', 
    textAlign: "center",
  },
  total: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 'bold',
    fontSize: '20px',
    textAlign: "center",
  },
}));