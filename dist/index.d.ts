import React from 'react';
export declare type OptionType = {
    value: string;
};
declare type SelectProps = {
    optionsToDisplay: OptionType[];
    triggerCurrentOption: (value: string) => void;
    label: string;
};
/**
 *
 * @param optionsToDisplay
 * @param triggerCurrentOption
 * @param label
 * @returns
 */
export default function SelectComponent({ optionsToDisplay, triggerCurrentOption, label }: SelectProps): React.JSX.Element;
export {};
