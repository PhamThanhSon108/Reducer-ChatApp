import { FormControl, FormHelperText, InputLabel, NativeSelect } from '@material-ui/core'
import React from 'react'

export default function CountrySelector({ value, handleOnchange, countries }) {
    return (
        <FormControl>
            <label htmlFor='country-selector'>
                Quốc Gia
            </label>
            <select
                style={{
                    marginTop: '5px',
                    padding: '5px',
                    outline: 'none'

                }}
                value={value}
                onChange={handleOnchange}
                inputProps={{
                    name: 'country',
                    id: 'country-selector',
                }}
            >
                {countries.map(({ Country, ISO2 }) => (
                    <option key={ISO2} value={ISO2.toLowerCase()}>
                        {Country}
                    </option>
                ))}
            </select>
            <FormHelperText>Lựa chọn quốc gia</FormHelperText>
        </FormControl>
    )
}
