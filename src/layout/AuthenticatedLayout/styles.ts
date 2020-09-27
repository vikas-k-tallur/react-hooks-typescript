import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    container: {
      height: '100vh',
      overflow: 'auto',
      paddingTop: theme.spacing(9),
      paddingBottom: theme.spacing(1),
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
      backgroundImage: "linear-gradient(white, #D3D8E8)"
    },
  }));