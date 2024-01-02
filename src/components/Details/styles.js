//This is just for the boxes income and expense 
import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    income: {
        borderBottom: '10px solid rgba(0, 255, 0, 0.8)',
        // backgroundColor: '#BEE9E8',
        textAlign: "center",
        backgroundColor: '#F1F7ED'
    },
    expense: {
        borderBottom: '10px solid rgba(255, 0, 0, 0.5)',
        // backgroundColor: '#E8BEBE',
        textAlign: "center",
        backgroundColor: '#F1F7ED'
    },
    cardHeaderTitle: {
        fontSize: '30px', 
        fontWeight: 'bolder',
        fontFamily: 'Poppins, sans-serif', 
    },
    total: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 'bold'
    },
}));