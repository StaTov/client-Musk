import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

interface PropsMark {
    mark: string,
    setMark: React.Dispatch<React.SetStateAction<string>>
}


const SelectMark = ({ mark, setMark }: PropsMark) => {

    const handleMark = (e: SelectChangeEvent) => setMark(e.target.value)
    return (

        <FormControl size="small" variant="standard" sx={{ m: 1, maxWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Знак</InputLabel>
            <Select

                labelId="demo-simple-select-standard-label"
                value={mark}
                onChange={handleMark}
                label="mark"
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={'!'}>!</MenuItem>
                <MenuItem value={'%'}>%</MenuItem>
                <MenuItem value={'#'}>#</MenuItem>
                <MenuItem value={'?'}>?</MenuItem>
                <MenuItem value={'$'}>$</MenuItem>
            </Select>
        </FormControl>
    )
}

export default SelectMark;