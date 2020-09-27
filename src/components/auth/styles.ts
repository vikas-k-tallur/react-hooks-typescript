import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      width: 80,
      float: "right"
    },
    gridItem: {
      width: "50%",
    },
    errorMessage: {
      color: theme.palette.error.main
    },
}));