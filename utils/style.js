import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    navbar: {
        backgroundColor : '#803040',
        //for childen of layout
        '& a' : {
            color: '#ffffff',
            marginLeft: 10
        },
    },
    // for container section or body part height
    main: {
        minHeight: '80vh'
    },
    footer: {
        textAlign: "center"
    }
})

export default useStyles;