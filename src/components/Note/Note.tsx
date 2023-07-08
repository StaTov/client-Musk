import { Alert, AlertColor, IconButton } from "@mui/material"
import { RootState } from "../../store";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { hideNote } from "../../features/redusers/NoteSlice";
import CloseIcon from '@mui/icons-material/Close';


const Note = () => {
    const dispatch = useAppDispatch();
    const note = useAppSelector((state: RootState) => state.note)
    const color = note.type as AlertColor
    
    if (!note.show) {
        return null
    }
    setTimeout(() => dispatch(hideNote()), 3000)
    return (
        <Alert severity={color}     >
            {note.message}
        </Alert >
    )




}

export default Note;