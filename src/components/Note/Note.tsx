import { Alert, AlertColor, Box } from "@mui/material"
import { RootState } from "../../store";
import { useAppDispatch, useAppSelector } from "../../features/hooks/hooks";
import { hideNote } from "../../features/redusers/noteSlice";
import { NoteBox } from "../../style/styledComponents";



const Note = () => {
    const dispatch = useAppDispatch();
    const note = useAppSelector((state: RootState) => state.note)
    const color = note.type as AlertColor

    if (!note.show) {
        return null
    }
    setTimeout(() => dispatch(hideNote()), 5000)
    return (
        <NoteBox >
            <Alert severity={color}     >
                {note.message}
            </Alert >
        </NoteBox>
    )




}

export default Note;