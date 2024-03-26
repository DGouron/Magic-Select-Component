// biome-ignore lint/style/useImportType: <explanation>
import React from 'react'

export type OptionType = {
  value: string;
}

type SelectProps = {
  optionsToDisplay: OptionType[];
  triggerCurrentOption: (value: string) => void;
  label: string;
}

/**
 * 
 * @param optionsToDisplay 
 * @param triggerCurrentOption
 * @param label
 * @returns 
 */
export default function SelectComponent({ optionsToDisplay, triggerCurrentOption, label }: SelectProps) {

  const handleSelectOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    triggerCurrentOption(e.target.value)
  }

  return (
    <div>
      <label style={{ fontSize: "0.67", fontWeight: 500, color: "#222", textAlign: "center", marginBottom: "10px" }}>{label}</label>
      <select style={{ borderRadius: "4px", border: "1px solid #e0e0e0", height: "40px", width: "100%", color: "#000", fontSize: "0.87", fontWeight: 400, textAlign: "center", boxShadow: "2px 5px 8px -2px rgba(0,0,0,0.67)" }} onChange={handleSelectOption}>
        {optionsToDisplay?.map((option) => (
          <option key={option.value} value={option.value} >
            {option.value}
          </option>
        ))}
      </select>
    </div>
  )
}

