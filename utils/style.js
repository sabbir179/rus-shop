import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    navbar: {
        backgroundColor : '#503040',
        //for childen of layout
        '& a' : {
            color: '#ffffff',
            marginLeft: 10
        },
    },
    brand:{
        fontWeight: 'bold',
        fontSize: '1.5rem',
    },
    grow: {
        flexGrow:1
    },
    // for container section or body part height
    main: {
        minHeight: '80vh'
    },
    footer: {
        marginTop:10,
        textAlign: "center"
    },
    section: {
        marginTop : 10,
        marginBottom: 10
    }
})

export default useStyles;